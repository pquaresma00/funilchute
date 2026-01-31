var sf = e => {
    throw TypeError(e)
}
;
var Il = (e, t, n) => t.has(e) || sf("Cannot " + n);
var R = (e, t, n) => (Il(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , le = (e, t, n) => t.has(e) ? sf("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , G = (e, t, n, r) => (Il(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , Ge = (e, t, n) => (Il(e, t, "access private method"),
n);
var ka = (e, t, n, r) => ({
    set _(o) {
        G(e, t, o, n)
    },
    get _() {
        return R(e, t, r)
    }
});
function Ky(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const s = Object.getOwnPropertyDescriptor(r, o);
                    s && Object.defineProperty(e, o, s.get ? s : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const s of o)
            if (s.type === "childList")
                for (const a of s.addedNodes)
                    a.tagName === "LINK" && a.rel === "modulepreload" && r(a)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const s = {};
        return o.integrity && (s.integrity = o.integrity),
        o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const s = n(o);
        fetch(o.href, s)
    }
}
)();
function km(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Nm = {
    exports: {}
}
  , el = {}
  , Tm = {
    exports: {}
}
  , ne = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ua = Symbol.for("react.element")
  , Gy = Symbol.for("react.portal")
  , qy = Symbol.for("react.fragment")
  , Xy = Symbol.for("react.strict_mode")
  , Zy = Symbol.for("react.profiler")
  , Jy = Symbol.for("react.provider")
  , ex = Symbol.for("react.context")
  , tx = Symbol.for("react.forward_ref")
  , nx = Symbol.for("react.suspense")
  , rx = Symbol.for("react.memo")
  , ox = Symbol.for("react.lazy")
  , af = Symbol.iterator;
function sx(e) {
    return e === null || typeof e != "object" ? null : (e = af && e[af] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var jm = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Pm = Object.assign
  , Rm = {};
function es(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Rm,
    this.updater = n || jm
}
es.prototype.isReactComponent = {};
es.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
es.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Am() {}
Am.prototype = es.prototype;
function $u(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Rm,
    this.updater = n || jm
}
var Bu = $u.prototype = new Am;
Bu.constructor = $u;
Pm(Bu, es.prototype);
Bu.isPureReactComponent = !0;
var lf = Array.isArray
  , Fm = Object.prototype.hasOwnProperty
  , Uu = {
    current: null
}
  , Mm = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Om(e, t, n) {
    var r, o = {}, s = null, a = null;
    if (t != null)
        for (r in t.ref !== void 0 && (a = t.ref),
        t.key !== void 0 && (s = "" + t.key),
        t)
            Fm.call(t, r) && !Mm.hasOwnProperty(r) && (o[r] = t[r]);
    var i = arguments.length - 2;
    if (i === 1)
        o.children = n;
    else if (1 < i) {
        for (var l = Array(i), u = 0; u < i; u++)
            l[u] = arguments[u + 2];
        o.children = l
    }
    if (e && e.defaultProps)
        for (r in i = e.defaultProps,
        i)
            o[r] === void 0 && (o[r] = i[r]);
    return {
        $$typeof: ua,
        type: e,
        key: s,
        ref: a,
        props: o,
        _owner: Uu.current
    }
}
function ax(e, t) {
    return {
        $$typeof: ua,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Vu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ua
}
function ix(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var cf = /\/+/g;
function _l(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? ix("" + e.key) : t.toString(36)
}
function ti(e, t, n, r, o) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var a = !1;
    if (e === null)
        a = !0;
    else
        switch (s) {
        case "string":
        case "number":
            a = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case ua:
            case Gy:
                a = !0
            }
        }
    if (a)
        return a = e,
        o = o(a),
        e = r === "" ? "." + _l(a, 0) : r,
        lf(o) ? (n = "",
        e != null && (n = e.replace(cf, "$&/") + "/"),
        ti(o, t, n, "", function(u) {
            return u
        })) : o != null && (Vu(o) && (o = ax(o, n + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(cf, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (a = 0,
    r = r === "" ? "." : r + ":",
    lf(e))
        for (var i = 0; i < e.length; i++) {
            s = e[i];
            var l = r + _l(s, i);
            a += ti(s, t, n, l, o)
        }
    else if (l = sx(e),
    typeof l == "function")
        for (e = l.call(e),
        i = 0; !(s = e.next()).done; )
            s = s.value,
            l = r + _l(s, i++),
            a += ti(s, t, n, l, o);
    else if (s === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return a
}
function Na(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return ti(e, r, "", "", function(s) {
        return t.call(n, s, o++)
    }),
    r
}
function lx(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var lt = {
    current: null
}
  , ni = {
    transition: null
}
  , cx = {
    ReactCurrentDispatcher: lt,
    ReactCurrentBatchConfig: ni,
    ReactCurrentOwner: Uu
};
function Dm() {
    throw Error("act(...) is not supported in production builds of React.")
}
ne.Children = {
    map: Na,
    forEach: function(e, t, n) {
        Na(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Na(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Na(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Vu(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
ne.Component = es;
ne.Fragment = qy;
ne.Profiler = Zy;
ne.PureComponent = $u;
ne.StrictMode = Xy;
ne.Suspense = nx;
ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cx;
ne.act = Dm;
ne.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Pm({}, e.props)
      , o = e.key
      , s = e.ref
      , a = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref,
        a = Uu.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var i = e.type.defaultProps;
        for (l in t)
            Fm.call(t, l) && !Mm.hasOwnProperty(l) && (r[l] = t[l] === void 0 && i !== void 0 ? i[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        i = Array(l);
        for (var u = 0; u < l; u++)
            i[u] = arguments[u + 2];
        r.children = i
    }
    return {
        $$typeof: ua,
        type: e.type,
        key: o,
        ref: s,
        props: r,
        _owner: a
    }
}
;
ne.createContext = function(e) {
    return e = {
        $$typeof: ex,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Jy,
        _context: e
    },
    e.Consumer = e
}
;
ne.createElement = Om;
ne.createFactory = function(e) {
    var t = Om.bind(null, e);
    return t.type = e,
    t
}
;
ne.createRef = function() {
    return {
        current: null
    }
}
;
ne.forwardRef = function(e) {
    return {
        $$typeof: tx,
        render: e
    }
}
;
ne.isValidElement = Vu;
ne.lazy = function(e) {
    return {
        $$typeof: ox,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: lx
    }
}
;
ne.memo = function(e, t) {
    return {
        $$typeof: rx,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
ne.startTransition = function(e) {
    var t = ni.transition;
    ni.transition = {};
    try {
        e()
    } finally {
        ni.transition = t
    }
}
;
ne.unstable_act = Dm;
ne.useCallback = function(e, t) {
    return lt.current.useCallback(e, t)
}
;
ne.useContext = function(e) {
    return lt.current.useContext(e)
}
;
ne.useDebugValue = function() {}
;
ne.useDeferredValue = function(e) {
    return lt.current.useDeferredValue(e)
}
;
ne.useEffect = function(e, t) {
    return lt.current.useEffect(e, t)
}
;
ne.useId = function() {
    return lt.current.useId()
}
;
ne.useImperativeHandle = function(e, t, n) {
    return lt.current.useImperativeHandle(e, t, n)
}
;
ne.useInsertionEffect = function(e, t) {
    return lt.current.useInsertionEffect(e, t)
}
;
ne.useLayoutEffect = function(e, t) {
    return lt.current.useLayoutEffect(e, t)
}
;
ne.useMemo = function(e, t) {
    return lt.current.useMemo(e, t)
}
;
ne.useReducer = function(e, t, n) {
    return lt.current.useReducer(e, t, n)
}
;
ne.useRef = function(e) {
    return lt.current.useRef(e)
}
;
ne.useState = function(e) {
    return lt.current.useState(e)
}
;
ne.useSyncExternalStore = function(e, t, n) {
    return lt.current.useSyncExternalStore(e, t, n)
}
;
ne.useTransition = function() {
    return lt.current.useTransition()
}
;
ne.version = "18.3.1";
Tm.exports = ne;
var f = Tm.exports;
const O = km(f)
  , Wu = Ky({
    __proto__: null,
    default: O
}, [f]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ux = f
  , dx = Symbol.for("react.element")
  , fx = Symbol.for("react.fragment")
  , px = Object.prototype.hasOwnProperty
  , mx = ux.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , hx = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Im(e, t, n) {
    var r, o = {}, s = null, a = null;
    n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
    for (r in t)
        px.call(t, r) && !hx.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: dx,
        type: e,
        key: s,
        ref: a,
        props: o,
        _owner: mx.current
    }
}
el.Fragment = fx;
el.jsx = Im;
el.jsxs = Im;
Nm.exports = el;
var c = Nm.exports
  , _m = {
    exports: {}
}
  , At = {}
  , Lm = {
    exports: {}
}
  , zm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(N, T) {
        var I = N.length;
        N.push(T);
        e: for (; 0 < I; ) {
            var Y = I - 1 >>> 1
              , B = N[Y];
            if (0 < o(B, T))
                N[Y] = T,
                N[I] = B,
                I = Y;
            else
                break e
        }
    }
    function n(N) {
        return N.length === 0 ? null : N[0]
    }
    function r(N) {
        if (N.length === 0)
            return null;
        var T = N[0]
          , I = N.pop();
        if (I !== T) {
            N[0] = I;
            e: for (var Y = 0, B = N.length, q = B >>> 1; Y < q; ) {
                var Q = 2 * (Y + 1) - 1
                  , fe = N[Q]
                  , he = Q + 1
                  , _ = N[he];
                if (0 > o(fe, I))
                    he < B && 0 > o(_, fe) ? (N[Y] = _,
                    N[he] = I,
                    Y = he) : (N[Y] = fe,
                    N[Q] = I,
                    Y = Q);
                else if (he < B && 0 > o(_, I))
                    N[Y] = _,
                    N[he] = I,
                    Y = he;
                else
                    break e
            }
        }
        return T
    }
    function o(N, T) {
        var I = N.sortIndex - T.sortIndex;
        return I !== 0 ? I : N.id - T.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var a = Date
          , i = a.now();
        e.unstable_now = function() {
            return a.now() - i
        }
    }
    var l = []
      , u = []
      , d = 1
      , p = null
      , v = 3
      , m = !1
      , b = !1
      , g = !1
      , w = typeof setTimeout == "function" ? setTimeout : null
      , y = typeof clearTimeout == "function" ? clearTimeout : null
      , h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function x(N) {
        for (var T = n(u); T !== null; ) {
            if (T.callback === null)
                r(u);
            else if (T.startTime <= N)
                r(u),
                T.sortIndex = T.expirationTime,
                t(l, T);
            else
                break;
            T = n(u)
        }
    }
    function S(N) {
        if (g = !1,
        x(N),
        !b)
            if (n(l) !== null)
                b = !0,
                L(E);
            else {
                var T = n(u);
                T !== null && U(S, T.startTime - N)
            }
    }
    function E(N, T) {
        b = !1,
        g && (g = !1,
        y(j),
        j = -1),
        m = !0;
        var I = v;
        try {
            for (x(T),
            p = n(l); p !== null && (!(p.expirationTime > T) || N && !$()); ) {
                var Y = p.callback;
                if (typeof Y == "function") {
                    p.callback = null,
                    v = p.priorityLevel;
                    var B = Y(p.expirationTime <= T);
                    T = e.unstable_now(),
                    typeof B == "function" ? p.callback = B : p === n(l) && r(l),
                    x(T)
                } else
                    r(l);
                p = n(l)
            }
            if (p !== null)
                var q = !0;
            else {
                var Q = n(u);
                Q !== null && U(S, Q.startTime - T),
                q = !1
            }
            return q
        } finally {
            p = null,
            v = I,
            m = !1
        }
    }
    var k = !1
      , C = null
      , j = -1
      , A = 5
      , M = -1;
    function $() {
        return !(e.unstable_now() - M < A)
    }
    function D() {
        if (C !== null) {
            var N = e.unstable_now();
            M = N;
            var T = !0;
            try {
                T = C(!0, N)
            } finally {
                T ? V() : (k = !1,
                C = null)
            }
        } else
            k = !1
    }
    var V;
    if (typeof h == "function")
        V = function() {
            h(D)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var P = new MessageChannel
          , H = P.port2;
        P.port1.onmessage = D,
        V = function() {
            H.postMessage(null)
        }
    } else
        V = function() {
            w(D, 0)
        }
        ;
    function L(N) {
        C = N,
        k || (k = !0,
        V())
    }
    function U(N, T) {
        j = w(function() {
            N(e.unstable_now())
        }, T)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(N) {
        N.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        b || m || (b = !0,
        L(E))
    }
    ,
    e.unstable_forceFrameRate = function(N) {
        0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < N ? Math.floor(1e3 / N) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return v
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(N) {
        switch (v) {
        case 1:
        case 2:
        case 3:
            var T = 3;
            break;
        default:
            T = v
        }
        var I = v;
        v = T;
        try {
            return N()
        } finally {
            v = I
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(N, T) {
        switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            N = 3
        }
        var I = v;
        v = N;
        try {
            return T()
        } finally {
            v = I
        }
    }
    ,
    e.unstable_scheduleCallback = function(N, T, I) {
        var Y = e.unstable_now();
        switch (typeof I == "object" && I !== null ? (I = I.delay,
        I = typeof I == "number" && 0 < I ? Y + I : Y) : I = Y,
        N) {
        case 1:
            var B = -1;
            break;
        case 2:
            B = 250;
            break;
        case 5:
            B = 1073741823;
            break;
        case 4:
            B = 1e4;
            break;
        default:
            B = 5e3
        }
        return B = I + B,
        N = {
            id: d++,
            callback: T,
            priorityLevel: N,
            startTime: I,
            expirationTime: B,
            sortIndex: -1
        },
        I > Y ? (N.sortIndex = I,
        t(u, N),
        n(l) === null && N === n(u) && (g ? (y(j),
        j = -1) : g = !0,
        U(S, I - Y))) : (N.sortIndex = B,
        t(l, N),
        b || m || (b = !0,
        L(E))),
        N
    }
    ,
    e.unstable_shouldYield = $,
    e.unstable_wrapCallback = function(N) {
        var T = v;
        return function() {
            var I = v;
            v = T;
            try {
                return N.apply(this, arguments)
            } finally {
                v = I
            }
        }
    }
}
)(zm);
Lm.exports = zm;
var gx = Lm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vx = f
  , Rt = gx;
function F(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var $m = new Set
  , Bs = {};
function to(e, t) {
    Vo(e, t),
    Vo(e + "Capture", t)
}
function Vo(e, t) {
    for (Bs[e] = t,
    e = 0; e < t.length; e++)
        $m.add(t[e])
}
var Ln = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , kc = Object.prototype.hasOwnProperty
  , yx = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , uf = {}
  , df = {};
function xx(e) {
    return kc.call(df, e) ? !0 : kc.call(uf, e) ? !1 : yx.test(e) ? df[e] = !0 : (uf[e] = !0,
    !1)
}
function wx(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function bx(e, t, n, r) {
    if (t === null || typeof t > "u" || wx(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function ct(e, t, n, r, o, s, a) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = s,
    this.removeEmptyString = a
}
var We = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    We[e] = new ct(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    We[t] = new ct(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    We[e] = new ct(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    We[e] = new ct(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    We[e] = new ct(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    We[e] = new ct(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    We[e] = new ct(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    We[e] = new ct(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    We[e] = new ct(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Hu = /[\-:]([a-z])/g;
function Yu(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Hu, Yu);
    We[t] = new ct(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Hu, Yu);
    We[t] = new ct(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Hu, Yu);
    We[t] = new ct(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    We[e] = new ct(e,1,!1,e.toLowerCase(),null,!1,!1)
});
We.xlinkHref = new ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    We[e] = new ct(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Qu(e, t, n, r) {
    var o = We.hasOwnProperty(t) ? We[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (bx(t, n, o, r) && (n = null),
    r || o === null ? xx(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Wn = vx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Ta = Symbol.for("react.element")
  , fo = Symbol.for("react.portal")
  , po = Symbol.for("react.fragment")
  , Ku = Symbol.for("react.strict_mode")
  , Nc = Symbol.for("react.profiler")
  , Bm = Symbol.for("react.provider")
  , Um = Symbol.for("react.context")
  , Gu = Symbol.for("react.forward_ref")
  , Tc = Symbol.for("react.suspense")
  , jc = Symbol.for("react.suspense_list")
  , qu = Symbol.for("react.memo")
  , Zn = Symbol.for("react.lazy")
  , Vm = Symbol.for("react.offscreen")
  , ff = Symbol.iterator;
function ps(e) {
    return e === null || typeof e != "object" ? null : (e = ff && e[ff] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Ce = Object.assign, Ll;
function Ns(e) {
    if (Ll === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Ll = t && t[1] || ""
        }
    return `
` + Ll + e
}
var zl = !1;
function $l(e, t) {
    if (!e || zl)
        return "";
    zl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), s = r.stack.split(`
`), a = o.length - 1, i = s.length - 1; 1 <= a && 0 <= i && o[a] !== s[i]; )
                i--;
            for (; 1 <= a && 0 <= i; a--,
            i--)
                if (o[a] !== s[i]) {
                    if (a !== 1 || i !== 1)
                        do
                            if (a--,
                            i--,
                            0 > i || o[a] !== s[i]) {
                                var l = `
` + o[a].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= a && 0 <= i);
                    break
                }
        }
    } finally {
        zl = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Ns(e) : ""
}
function Sx(e) {
    switch (e.tag) {
    case 5:
        return Ns(e.type);
    case 16:
        return Ns("Lazy");
    case 13:
        return Ns("Suspense");
    case 19:
        return Ns("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = $l(e.type, !1),
        e;
    case 11:
        return e = $l(e.type.render, !1),
        e;
    case 1:
        return e = $l(e.type, !0),
        e;
    default:
        return ""
    }
}
function Pc(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case po:
        return "Fragment";
    case fo:
        return "Portal";
    case Nc:
        return "Profiler";
    case Ku:
        return "StrictMode";
    case Tc:
        return "Suspense";
    case jc:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Um:
            return (e.displayName || "Context") + ".Consumer";
        case Bm:
            return (e._context.displayName || "Context") + ".Provider";
        case Gu:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case qu:
            return t = e.displayName || null,
            t !== null ? t : Pc(e.type) || "Memo";
        case Zn:
            t = e._payload,
            e = e._init;
            try {
                return Pc(e(t))
            } catch {}
        }
    return null
}
function Ex(e) {
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
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
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
        return Pc(t);
    case 8:
        return t === Ku ? "StrictMode" : "Mode";
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
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function yr(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Wm(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Cx(e) {
    var t = Wm(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(a) {
                r = "" + a,
                s.call(this, a)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(a) {
                r = "" + a
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function ja(e) {
    e._valueTracker || (e._valueTracker = Cx(e))
}
function Hm(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Wm(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function xi(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Rc(e, t) {
    var n = t.checked;
    return Ce({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function pf(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = yr(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Ym(e, t) {
    t = t.checked,
    t != null && Qu(e, "checked", t, !1)
}
function Ac(e, t) {
    Ym(e, t);
    var n = yr(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Fc(e, t.type, n) : t.hasOwnProperty("defaultValue") && Fc(e, t.type, yr(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function mf(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Fc(e, t, n) {
    (t !== "number" || xi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Ts = Array.isArray;
function Co(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + yr(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function Mc(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(F(91));
    return Ce({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function hf(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(F(92));
            if (Ts(n)) {
                if (1 < n.length)
                    throw Error(F(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: yr(n)
    }
}
function Qm(e, t) {
    var n = yr(t.value)
      , r = yr(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function gf(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Km(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Oc(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Km(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Pa, Gm = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Pa = Pa || document.createElement("div"),
        Pa.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Pa.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Us(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var As = {
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
    strokeWidth: !0
}
  , kx = ["Webkit", "ms", "Moz", "O"];
Object.keys(As).forEach(function(e) {
    kx.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        As[t] = As[e]
    })
});
function qm(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || As.hasOwnProperty(e) && As[e] ? ("" + t).trim() : t + "px"
}
function Xm(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = qm(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var Nx = Ce({
    menuitem: !0
}, {
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
    wbr: !0
});
function Dc(e, t) {
    if (t) {
        if (Nx[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(F(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(F(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(F(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(F(62))
    }
}
function Ic(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
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
        return !0
    }
}
var _c = null;
function Xu(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Lc = null
  , ko = null
  , No = null;
function vf(e) {
    if (e = pa(e)) {
        if (typeof Lc != "function")
            throw Error(F(280));
        var t = e.stateNode;
        t && (t = sl(t),
        Lc(e.stateNode, e.type, t))
    }
}
function Zm(e) {
    ko ? No ? No.push(e) : No = [e] : ko = e
}
function Jm() {
    if (ko) {
        var e = ko
          , t = No;
        if (No = ko = null,
        vf(e),
        t)
            for (e = 0; e < t.length; e++)
                vf(t[e])
    }
}
function eh(e, t) {
    return e(t)
}
function th() {}
var Bl = !1;
function nh(e, t, n) {
    if (Bl)
        return e(t, n);
    Bl = !0;
    try {
        return eh(e, t, n)
    } finally {
        Bl = !1,
        (ko !== null || No !== null) && (th(),
        Jm())
    }
}
function Vs(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = sl(n);
    if (r === null)
        return null;
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
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(F(231, t, typeof n));
    return n
}
var zc = !1;
if (Ln)
    try {
        var ms = {};
        Object.defineProperty(ms, "passive", {
            get: function() {
                zc = !0
            }
        }),
        window.addEventListener("test", ms, ms),
        window.removeEventListener("test", ms, ms)
    } catch {
        zc = !1
    }
function Tx(e, t, n, r, o, s, a, i, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (d) {
        this.onError(d)
    }
}
var Fs = !1
  , wi = null
  , bi = !1
  , $c = null
  , jx = {
    onError: function(e) {
        Fs = !0,
        wi = e
    }
};
function Px(e, t, n, r, o, s, a, i, l) {
    Fs = !1,
    wi = null,
    Tx.apply(jx, arguments)
}
function Rx(e, t, n, r, o, s, a, i, l) {
    if (Px.apply(this, arguments),
    Fs) {
        if (Fs) {
            var u = wi;
            Fs = !1,
            wi = null
        } else
            throw Error(F(198));
        bi || (bi = !0,
        $c = u)
    }
}
function no(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function rh(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function yf(e) {
    if (no(e) !== e)
        throw Error(F(188))
}
function Ax(e) {
    var t = e.alternate;
    if (!t) {
        if (t = no(e),
        t === null)
            throw Error(F(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var s = o.alternate;
        if (s === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === s.child) {
            for (s = o.child; s; ) {
                if (s === n)
                    return yf(o),
                    e;
                if (s === r)
                    return yf(o),
                    t;
                s = s.sibling
            }
            throw Error(F(188))
        }
        if (n.return !== r.return)
            n = o,
            r = s;
        else {
            for (var a = !1, i = o.child; i; ) {
                if (i === n) {
                    a = !0,
                    n = o,
                    r = s;
                    break
                }
                if (i === r) {
                    a = !0,
                    r = o,
                    n = s;
                    break
                }
                i = i.sibling
            }
            if (!a) {
                for (i = s.child; i; ) {
                    if (i === n) {
                        a = !0,
                        n = s,
                        r = o;
                        break
                    }
                    if (i === r) {
                        a = !0,
                        r = s,
                        n = o;
                        break
                    }
                    i = i.sibling
                }
                if (!a)
                    throw Error(F(189))
            }
        }
        if (n.alternate !== r)
            throw Error(F(190))
    }
    if (n.tag !== 3)
        throw Error(F(188));
    return n.stateNode.current === n ? e : t
}
function oh(e) {
    return e = Ax(e),
    e !== null ? sh(e) : null
}
function sh(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = sh(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var ah = Rt.unstable_scheduleCallback
  , xf = Rt.unstable_cancelCallback
  , Fx = Rt.unstable_shouldYield
  , Mx = Rt.unstable_requestPaint
  , Pe = Rt.unstable_now
  , Ox = Rt.unstable_getCurrentPriorityLevel
  , Zu = Rt.unstable_ImmediatePriority
  , ih = Rt.unstable_UserBlockingPriority
  , Si = Rt.unstable_NormalPriority
  , Dx = Rt.unstable_LowPriority
  , lh = Rt.unstable_IdlePriority
  , tl = null
  , xn = null;
function Ix(e) {
    if (xn && typeof xn.onCommitFiberRoot == "function")
        try {
            xn.onCommitFiberRoot(tl, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Jt = Math.clz32 ? Math.clz32 : zx
  , _x = Math.log
  , Lx = Math.LN2;
function zx(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (_x(e) / Lx | 0) | 0
}
var Ra = 64
  , Aa = 4194304;
function js(e) {
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
        return e
    }
}
function Ei(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , s = e.pingedLanes
      , a = n & 268435455;
    if (a !== 0) {
        var i = a & ~o;
        i !== 0 ? r = js(i) : (s &= a,
        s !== 0 && (r = js(s)))
    } else
        a = n & ~o,
        a !== 0 ? r = js(a) : s !== 0 && (r = js(s));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    s = t & -t,
    o >= s || o === 16 && (s & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Jt(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function $x(e, t) {
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
        return -1
    }
}
function Bx(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
        var a = 31 - Jt(s)
          , i = 1 << a
          , l = o[a];
        l === -1 ? (!(i & n) || i & r) && (o[a] = $x(i, t)) : l <= t && (e.expiredLanes |= i),
        s &= ~i
    }
}
function Bc(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function ch() {
    var e = Ra;
    return Ra <<= 1,
    !(Ra & 4194240) && (Ra = 64),
    e
}
function Ul(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function da(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Jt(t),
    e[t] = n
}
function Ux(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - Jt(n)
          , s = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~s
    }
}
function Ju(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Jt(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var ue = 0;
function uh(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var dh, ed, fh, ph, mh, Uc = !1, Fa = [], ur = null, dr = null, fr = null, Ws = new Map, Hs = new Map, er = [], Vx = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function wf(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        ur = null;
        break;
    case "dragenter":
    case "dragleave":
        dr = null;
        break;
    case "mouseover":
    case "mouseout":
        fr = null;
        break;
    case "pointerover":
    case "pointerout":
        Ws.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Hs.delete(t.pointerId)
    }
}
function hs(e, t, n, r, o, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o]
    },
    t !== null && (t = pa(t),
    t !== null && ed(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function Wx(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return ur = hs(ur, e, t, n, r, o),
        !0;
    case "dragenter":
        return dr = hs(dr, e, t, n, r, o),
        !0;
    case "mouseover":
        return fr = hs(fr, e, t, n, r, o),
        !0;
    case "pointerover":
        var s = o.pointerId;
        return Ws.set(s, hs(Ws.get(s) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return s = o.pointerId,
        Hs.set(s, hs(Hs.get(s) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function hh(e) {
    var t = Or(e.target);
    if (t !== null) {
        var n = no(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = rh(n),
                t !== null) {
                    e.blockedOn = t,
                    mh(e.priority, function() {
                        fh(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function ri(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Vc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            _c = r,
            n.target.dispatchEvent(r),
            _c = null
        } else
            return t = pa(n),
            t !== null && ed(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function bf(e, t, n) {
    ri(e) && n.delete(t)
}
function Hx() {
    Uc = !1,
    ur !== null && ri(ur) && (ur = null),
    dr !== null && ri(dr) && (dr = null),
    fr !== null && ri(fr) && (fr = null),
    Ws.forEach(bf),
    Hs.forEach(bf)
}
function gs(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Uc || (Uc = !0,
    Rt.unstable_scheduleCallback(Rt.unstable_NormalPriority, Hx)))
}
function Ys(e) {
    function t(o) {
        return gs(o, e)
    }
    if (0 < Fa.length) {
        gs(Fa[0], e);
        for (var n = 1; n < Fa.length; n++) {
            var r = Fa[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (ur !== null && gs(ur, e),
    dr !== null && gs(dr, e),
    fr !== null && gs(fr, e),
    Ws.forEach(t),
    Hs.forEach(t),
    n = 0; n < er.length; n++)
        r = er[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < er.length && (n = er[0],
    n.blockedOn === null); )
        hh(n),
        n.blockedOn === null && er.shift()
}
var To = Wn.ReactCurrentBatchConfig
  , Ci = !0;
function Yx(e, t, n, r) {
    var o = ue
      , s = To.transition;
    To.transition = null;
    try {
        ue = 1,
        td(e, t, n, r)
    } finally {
        ue = o,
        To.transition = s
    }
}
function Qx(e, t, n, r) {
    var o = ue
      , s = To.transition;
    To.transition = null;
    try {
        ue = 4,
        td(e, t, n, r)
    } finally {
        ue = o,
        To.transition = s
    }
}
function td(e, t, n, r) {
    if (Ci) {
        var o = Vc(e, t, n, r);
        if (o === null)
            Zl(e, t, r, ki, n),
            wf(e, r);
        else if (Wx(o, e, t, n, r))
            r.stopPropagation();
        else if (wf(e, r),
        t & 4 && -1 < Vx.indexOf(e)) {
            for (; o !== null; ) {
                var s = pa(o);
                if (s !== null && dh(s),
                s = Vc(e, t, n, r),
                s === null && Zl(e, t, r, ki, n),
                s === o)
                    break;
                o = s
            }
            o !== null && r.stopPropagation()
        } else
            Zl(e, t, r, null, n)
    }
}
var ki = null;
function Vc(e, t, n, r) {
    if (ki = null,
    e = Xu(r),
    e = Or(e),
    e !== null)
        if (t = no(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = rh(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return ki = e,
    null
}
function gh(e) {
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
        switch (Ox()) {
        case Zu:
            return 1;
        case ih:
            return 4;
        case Si:
        case Dx:
            return 16;
        case lh:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var ir = null
  , nd = null
  , oi = null;
function vh() {
    if (oi)
        return oi;
    var e, t = nd, n = t.length, r, o = "value"in ir ? ir.value : ir.textContent, s = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === o[s - r]; r++)
        ;
    return oi = o.slice(e, 1 < r ? 1 - r : void 0)
}
function si(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Ma() {
    return !0
}
function Sf() {
    return !1
}
function Ft(e) {
    function t(n, r, o, s, a) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = s,
        this.target = a,
        this.currentTarget = null;
        for (var i in e)
            e.hasOwnProperty(i) && (n = e[i],
            this[i] = n ? n(s) : s[i]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Ma : Sf,
        this.isPropagationStopped = Sf,
        this
    }
    return Ce(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Ma)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Ma)
        },
        persist: function() {},
        isPersistent: Ma
    }),
    t
}
var ts = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, rd = Ft(ts), fa = Ce({}, ts, {
    view: 0,
    detail: 0
}), Kx = Ft(fa), Vl, Wl, vs, nl = Ce({}, fa, {
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
    getModifierState: od,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== vs && (vs && e.type === "mousemove" ? (Vl = e.screenX - vs.screenX,
        Wl = e.screenY - vs.screenY) : Wl = Vl = 0,
        vs = e),
        Vl)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Wl
    }
}), Ef = Ft(nl), Gx = Ce({}, nl, {
    dataTransfer: 0
}), qx = Ft(Gx), Xx = Ce({}, fa, {
    relatedTarget: 0
}), Hl = Ft(Xx), Zx = Ce({}, ts, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Jx = Ft(Zx), e1 = Ce({}, ts, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), t1 = Ft(e1), n1 = Ce({}, ts, {
    data: 0
}), Cf = Ft(n1), r1 = {
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
}, o1 = {
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
}, s1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function a1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = s1[e]) ? !!t[e] : !1
}
function od() {
    return a1
}
var i1 = Ce({}, fa, {
    key: function(e) {
        if (e.key) {
            var t = r1[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = si(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? o1[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: od,
    charCode: function(e) {
        return e.type === "keypress" ? si(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? si(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , l1 = Ft(i1)
  , c1 = Ce({}, nl, {
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
})
  , kf = Ft(c1)
  , u1 = Ce({}, fa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: od
})
  , d1 = Ft(u1)
  , f1 = Ce({}, ts, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , p1 = Ft(f1)
  , m1 = Ce({}, nl, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , h1 = Ft(m1)
  , g1 = [9, 13, 27, 32]
  , sd = Ln && "CompositionEvent"in window
  , Ms = null;
Ln && "documentMode"in document && (Ms = document.documentMode);
var v1 = Ln && "TextEvent"in window && !Ms
  , yh = Ln && (!sd || Ms && 8 < Ms && 11 >= Ms)
  , Nf = " "
  , Tf = !1;
function xh(e, t) {
    switch (e) {
    case "keyup":
        return g1.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function wh(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var mo = !1;
function y1(e, t) {
    switch (e) {
    case "compositionend":
        return wh(t);
    case "keypress":
        return t.which !== 32 ? null : (Tf = !0,
        Nf);
    case "textInput":
        return e = t.data,
        e === Nf && Tf ? null : e;
    default:
        return null
    }
}
function x1(e, t) {
    if (mo)
        return e === "compositionend" || !sd && xh(e, t) ? (e = vh(),
        oi = nd = ir = null,
        mo = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return yh && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var w1 = {
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
    week: !0
};
function jf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!w1[e.type] : t === "textarea"
}
function bh(e, t, n, r) {
    Zm(r),
    t = Ni(t, "onChange"),
    0 < t.length && (n = new rd("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Os = null
  , Qs = null;
function b1(e) {
    Fh(e, 0)
}
function rl(e) {
    var t = vo(e);
    if (Hm(t))
        return e
}
function S1(e, t) {
    if (e === "change")
        return t
}
var Sh = !1;
if (Ln) {
    var Yl;
    if (Ln) {
        var Ql = "oninput"in document;
        if (!Ql) {
            var Pf = document.createElement("div");
            Pf.setAttribute("oninput", "return;"),
            Ql = typeof Pf.oninput == "function"
        }
        Yl = Ql
    } else
        Yl = !1;
    Sh = Yl && (!document.documentMode || 9 < document.documentMode)
}
function Rf() {
    Os && (Os.detachEvent("onpropertychange", Eh),
    Qs = Os = null)
}
function Eh(e) {
    if (e.propertyName === "value" && rl(Qs)) {
        var t = [];
        bh(t, Qs, e, Xu(e)),
        nh(b1, t)
    }
}
function E1(e, t, n) {
    e === "focusin" ? (Rf(),
    Os = t,
    Qs = n,
    Os.attachEvent("onpropertychange", Eh)) : e === "focusout" && Rf()
}
function C1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return rl(Qs)
}
function k1(e, t) {
    if (e === "click")
        return rl(t)
}
function N1(e, t) {
    if (e === "input" || e === "change")
        return rl(t)
}
function T1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var tn = typeof Object.is == "function" ? Object.is : T1;
function Ks(e, t) {
    if (tn(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!kc.call(t, o) || !tn(e[o], t[o]))
            return !1
    }
    return !0
}
function Af(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Ff(e, t) {
    var n = Af(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Af(n)
    }
}
function Ch(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ch(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function kh() {
    for (var e = window, t = xi(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = xi(e.document)
    }
    return t
}
function ad(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function j1(e) {
    var t = kh()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ch(n.ownerDocument.documentElement, n)) {
        if (r !== null && ad(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , s = Math.min(r.start, o);
                r = r.end === void 0 ? s : Math.min(r.end, o),
                !e.extend && s > r && (o = r,
                r = s,
                s = o),
                o = Ff(n, s);
                var a = Ff(n, r);
                o && a && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                s > r ? (e.addRange(t),
                e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var P1 = Ln && "documentMode"in document && 11 >= document.documentMode
  , ho = null
  , Wc = null
  , Ds = null
  , Hc = !1;
function Mf(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Hc || ho == null || ho !== xi(r) || (r = ho,
    "selectionStart"in r && ad(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Ds && Ks(Ds, r) || (Ds = r,
    r = Ni(Wc, "onSelect"),
    0 < r.length && (t = new rd("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = ho)))
}
function Oa(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var go = {
    animationend: Oa("Animation", "AnimationEnd"),
    animationiteration: Oa("Animation", "AnimationIteration"),
    animationstart: Oa("Animation", "AnimationStart"),
    transitionend: Oa("Transition", "TransitionEnd")
}
  , Kl = {}
  , Nh = {};
Ln && (Nh = document.createElement("div").style,
"AnimationEvent"in window || (delete go.animationend.animation,
delete go.animationiteration.animation,
delete go.animationstart.animation),
"TransitionEvent"in window || delete go.transitionend.transition);
function ol(e) {
    if (Kl[e])
        return Kl[e];
    if (!go[e])
        return e;
    var t = go[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Nh)
            return Kl[e] = t[n];
    return e
}
var Th = ol("animationend")
  , jh = ol("animationiteration")
  , Ph = ol("animationstart")
  , Rh = ol("transitionend")
  , Ah = new Map
  , Of = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Sr(e, t) {
    Ah.set(e, t),
    to(t, [e])
}
for (var Gl = 0; Gl < Of.length; Gl++) {
    var ql = Of[Gl]
      , R1 = ql.toLowerCase()
      , A1 = ql[0].toUpperCase() + ql.slice(1);
    Sr(R1, "on" + A1)
}
Sr(Th, "onAnimationEnd");
Sr(jh, "onAnimationIteration");
Sr(Ph, "onAnimationStart");
Sr("dblclick", "onDoubleClick");
Sr("focusin", "onFocus");
Sr("focusout", "onBlur");
Sr(Rh, "onTransitionEnd");
Vo("onMouseEnter", ["mouseout", "mouseover"]);
Vo("onMouseLeave", ["mouseout", "mouseover"]);
Vo("onPointerEnter", ["pointerout", "pointerover"]);
Vo("onPointerLeave", ["pointerout", "pointerover"]);
to("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
to("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
to("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
to("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
to("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
to("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ps = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , F1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ps));
function Df(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    Rx(r, t, void 0, e),
    e.currentTarget = null
}
function Fh(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var a = r.length - 1; 0 <= a; a--) {
                    var i = r[a]
                      , l = i.instance
                      , u = i.currentTarget;
                    if (i = i.listener,
                    l !== s && o.isPropagationStopped())
                        break e;
                    Df(o, i, u),
                    s = l
                }
            else
                for (a = 0; a < r.length; a++) {
                    if (i = r[a],
                    l = i.instance,
                    u = i.currentTarget,
                    i = i.listener,
                    l !== s && o.isPropagationStopped())
                        break e;
                    Df(o, i, u),
                    s = l
                }
        }
    }
    if (bi)
        throw e = $c,
        bi = !1,
        $c = null,
        e
}
function ye(e, t) {
    var n = t[qc];
    n === void 0 && (n = t[qc] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Mh(t, e, 2, !1),
    n.add(r))
}
function Xl(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Mh(n, e, r, t)
}
var Da = "_reactListening" + Math.random().toString(36).slice(2);
function Gs(e) {
    if (!e[Da]) {
        e[Da] = !0,
        $m.forEach(function(n) {
            n !== "selectionchange" && (F1.has(n) || Xl(n, !1, e),
            Xl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Da] || (t[Da] = !0,
        Xl("selectionchange", !1, t))
    }
}
function Mh(e, t, n, r) {
    switch (gh(t)) {
    case 1:
        var o = Yx;
        break;
    case 4:
        o = Qx;
        break;
    default:
        o = td
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !zc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function Zl(e, t, n, r, o) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var a = r.tag;
            if (a === 3 || a === 4) {
                var i = r.stateNode.containerInfo;
                if (i === o || i.nodeType === 8 && i.parentNode === o)
                    break;
                if (a === 4)
                    for (a = r.return; a !== null; ) {
                        var l = a.tag;
                        if ((l === 3 || l === 4) && (l = a.stateNode.containerInfo,
                        l === o || l.nodeType === 8 && l.parentNode === o))
                            return;
                        a = a.return
                    }
                for (; i !== null; ) {
                    if (a = Or(i),
                    a === null)
                        return;
                    if (l = a.tag,
                    l === 5 || l === 6) {
                        r = s = a;
                        continue e
                    }
                    i = i.parentNode
                }
            }
            r = r.return
        }
    nh(function() {
        var u = s
          , d = Xu(n)
          , p = [];
        e: {
            var v = Ah.get(e);
            if (v !== void 0) {
                var m = rd
                  , b = e;
                switch (e) {
                case "keypress":
                    if (si(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    m = l1;
                    break;
                case "focusin":
                    b = "focus",
                    m = Hl;
                    break;
                case "focusout":
                    b = "blur",
                    m = Hl;
                    break;
                case "beforeblur":
                case "afterblur":
                    m = Hl;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    m = Ef;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    m = qx;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    m = d1;
                    break;
                case Th:
                case jh:
                case Ph:
                    m = Jx;
                    break;
                case Rh:
                    m = p1;
                    break;
                case "scroll":
                    m = Kx;
                    break;
                case "wheel":
                    m = h1;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    m = t1;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    m = kf
                }
                var g = (t & 4) !== 0
                  , w = !g && e === "scroll"
                  , y = g ? v !== null ? v + "Capture" : null : v;
                g = [];
                for (var h = u, x; h !== null; ) {
                    x = h;
                    var S = x.stateNode;
                    if (x.tag === 5 && S !== null && (x = S,
                    y !== null && (S = Vs(h, y),
                    S != null && g.push(qs(h, S, x)))),
                    w)
                        break;
                    h = h.return
                }
                0 < g.length && (v = new m(v,b,null,n,d),
                p.push({
                    event: v,
                    listeners: g
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (v = e === "mouseover" || e === "pointerover",
                m = e === "mouseout" || e === "pointerout",
                v && n !== _c && (b = n.relatedTarget || n.fromElement) && (Or(b) || b[zn]))
                    break e;
                if ((m || v) && (v = d.window === d ? d : (v = d.ownerDocument) ? v.defaultView || v.parentWindow : window,
                m ? (b = n.relatedTarget || n.toElement,
                m = u,
                b = b ? Or(b) : null,
                b !== null && (w = no(b),
                b !== w || b.tag !== 5 && b.tag !== 6) && (b = null)) : (m = null,
                b = u),
                m !== b)) {
                    if (g = Ef,
                    S = "onMouseLeave",
                    y = "onMouseEnter",
                    h = "mouse",
                    (e === "pointerout" || e === "pointerover") && (g = kf,
                    S = "onPointerLeave",
                    y = "onPointerEnter",
                    h = "pointer"),
                    w = m == null ? v : vo(m),
                    x = b == null ? v : vo(b),
                    v = new g(S,h + "leave",m,n,d),
                    v.target = w,
                    v.relatedTarget = x,
                    S = null,
                    Or(d) === u && (g = new g(y,h + "enter",b,n,d),
                    g.target = x,
                    g.relatedTarget = w,
                    S = g),
                    w = S,
                    m && b)
                        t: {
                            for (g = m,
                            y = b,
                            h = 0,
                            x = g; x; x = ao(x))
                                h++;
                            for (x = 0,
                            S = y; S; S = ao(S))
                                x++;
                            for (; 0 < h - x; )
                                g = ao(g),
                                h--;
                            for (; 0 < x - h; )
                                y = ao(y),
                                x--;
                            for (; h--; ) {
                                if (g === y || y !== null && g === y.alternate)
                                    break t;
                                g = ao(g),
                                y = ao(y)
                            }
                            g = null
                        }
                    else
                        g = null;
                    m !== null && If(p, v, m, g, !1),
                    b !== null && w !== null && If(p, w, b, g, !0)
                }
            }
            e: {
                if (v = u ? vo(u) : window,
                m = v.nodeName && v.nodeName.toLowerCase(),
                m === "select" || m === "input" && v.type === "file")
                    var E = S1;
                else if (jf(v))
                    if (Sh)
                        E = N1;
                    else {
                        E = C1;
                        var k = E1
                    }
                else
                    (m = v.nodeName) && m.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (E = k1);
                if (E && (E = E(e, u))) {
                    bh(p, E, n, d);
                    break e
                }
                k && k(e, v, u),
                e === "focusout" && (k = v._wrapperState) && k.controlled && v.type === "number" && Fc(v, "number", v.value)
            }
            switch (k = u ? vo(u) : window,
            e) {
            case "focusin":
                (jf(k) || k.contentEditable === "true") && (ho = k,
                Wc = u,
                Ds = null);
                break;
            case "focusout":
                Ds = Wc = ho = null;
                break;
            case "mousedown":
                Hc = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Hc = !1,
                Mf(p, n, d);
                break;
            case "selectionchange":
                if (P1)
                    break;
            case "keydown":
            case "keyup":
                Mf(p, n, d)
            }
            var C;
            if (sd)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var j = "onCompositionStart";
                        break e;
                    case "compositionend":
                        j = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        j = "onCompositionUpdate";
                        break e
                    }
                    j = void 0
                }
            else
                mo ? xh(e, n) && (j = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
            j && (yh && n.locale !== "ko" && (mo || j !== "onCompositionStart" ? j === "onCompositionEnd" && mo && (C = vh()) : (ir = d,
            nd = "value"in ir ? ir.value : ir.textContent,
            mo = !0)),
            k = Ni(u, j),
            0 < k.length && (j = new Cf(j,e,null,n,d),
            p.push({
                event: j,
                listeners: k
            }),
            C ? j.data = C : (C = wh(n),
            C !== null && (j.data = C)))),
            (C = v1 ? y1(e, n) : x1(e, n)) && (u = Ni(u, "onBeforeInput"),
            0 < u.length && (d = new Cf("onBeforeInput","beforeinput",null,n,d),
            p.push({
                event: d,
                listeners: u
            }),
            d.data = C))
        }
        Fh(p, t)
    })
}
function qs(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Ni(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , s = o.stateNode;
        o.tag === 5 && s !== null && (o = s,
        s = Vs(e, n),
        s != null && r.unshift(qs(e, s, o)),
        s = Vs(e, t),
        s != null && r.push(qs(e, s, o))),
        e = e.return
    }
    return r
}
function ao(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function If(e, t, n, r, o) {
    for (var s = t._reactName, a = []; n !== null && n !== r; ) {
        var i = n
          , l = i.alternate
          , u = i.stateNode;
        if (l !== null && l === r)
            break;
        i.tag === 5 && u !== null && (i = u,
        o ? (l = Vs(n, s),
        l != null && a.unshift(qs(n, l, i))) : o || (l = Vs(n, s),
        l != null && a.push(qs(n, l, i)))),
        n = n.return
    }
    a.length !== 0 && e.push({
        event: t,
        listeners: a
    })
}
var M1 = /\r\n?/g
  , O1 = /\u0000|\uFFFD/g;
function _f(e) {
    return (typeof e == "string" ? e : "" + e).replace(M1, `
`).replace(O1, "")
}
function Ia(e, t, n) {
    if (t = _f(t),
    _f(e) !== t && n)
        throw Error(F(425))
}
function Ti() {}
var Yc = null
  , Qc = null;
function Kc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Gc = typeof setTimeout == "function" ? setTimeout : void 0
  , D1 = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Lf = typeof Promise == "function" ? Promise : void 0
  , I1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Lf < "u" ? function(e) {
    return Lf.resolve(null).then(e).catch(_1)
}
: Gc;
function _1(e) {
    setTimeout(function() {
        throw e
    })
}
function Jl(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    Ys(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    Ys(t)
}
function pr(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function zf(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var ns = Math.random().toString(36).slice(2)
  , gn = "__reactFiber$" + ns
  , Xs = "__reactProps$" + ns
  , zn = "__reactContainer$" + ns
  , qc = "__reactEvents$" + ns
  , L1 = "__reactListeners$" + ns
  , z1 = "__reactHandles$" + ns;
function Or(e) {
    var t = e[gn];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[zn] || n[gn]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = zf(e); e !== null; ) {
                    if (n = e[gn])
                        return n;
                    e = zf(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function pa(e) {
    return e = e[gn] || e[zn],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function vo(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(F(33))
}
function sl(e) {
    return e[Xs] || null
}
var Xc = []
  , yo = -1;
function Er(e) {
    return {
        current: e
    }
}
function xe(e) {
    0 > yo || (e.current = Xc[yo],
    Xc[yo] = null,
    yo--)
}
function me(e, t) {
    yo++,
    Xc[yo] = e.current,
    e.current = t
}
var xr = {}
  , et = Er(xr)
  , xt = Er(!1)
  , Hr = xr;
function Wo(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return xr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, s;
    for (s in n)
        o[s] = t[s];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function wt(e) {
    return e = e.childContextTypes,
    e != null
}
function ji() {
    xe(xt),
    xe(et)
}
function $f(e, t, n) {
    if (et.current !== xr)
        throw Error(F(168));
    me(et, t),
    me(xt, n)
}
function Oh(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(F(108, Ex(e) || "Unknown", o));
    return Ce({}, n, r)
}
function Pi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || xr,
    Hr = et.current,
    me(et, e),
    me(xt, xt.current),
    !0
}
function Bf(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(F(169));
    n ? (e = Oh(e, t, Hr),
    r.__reactInternalMemoizedMergedChildContext = e,
    xe(xt),
    xe(et),
    me(et, e)) : xe(xt),
    me(xt, n)
}
var Mn = null
  , al = !1
  , ec = !1;
function Dh(e) {
    Mn === null ? Mn = [e] : Mn.push(e)
}
function $1(e) {
    al = !0,
    Dh(e)
}
function Cr() {
    if (!ec && Mn !== null) {
        ec = !0;
        var e = 0
          , t = ue;
        try {
            var n = Mn;
            for (ue = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Mn = null,
            al = !1
        } catch (o) {
            throw Mn !== null && (Mn = Mn.slice(e + 1)),
            ah(Zu, Cr),
            o
        } finally {
            ue = t,
            ec = !1
        }
    }
    return null
}
var xo = []
  , wo = 0
  , Ri = null
  , Ai = 0
  , _t = []
  , Lt = 0
  , Yr = null
  , Dn = 1
  , In = "";
function Fr(e, t) {
    xo[wo++] = Ai,
    xo[wo++] = Ri,
    Ri = e,
    Ai = t
}
function Ih(e, t, n) {
    _t[Lt++] = Dn,
    _t[Lt++] = In,
    _t[Lt++] = Yr,
    Yr = e;
    var r = Dn;
    e = In;
    var o = 32 - Jt(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var s = 32 - Jt(t) + o;
    if (30 < s) {
        var a = o - o % 5;
        s = (r & (1 << a) - 1).toString(32),
        r >>= a,
        o -= a,
        Dn = 1 << 32 - Jt(t) + o | n << o | r,
        In = s + e
    } else
        Dn = 1 << s | n << o | r,
        In = e
}
function id(e) {
    e.return !== null && (Fr(e, 1),
    Ih(e, 1, 0))
}
function ld(e) {
    for (; e === Ri; )
        Ri = xo[--wo],
        xo[wo] = null,
        Ai = xo[--wo],
        xo[wo] = null;
    for (; e === Yr; )
        Yr = _t[--Lt],
        _t[Lt] = null,
        In = _t[--Lt],
        _t[Lt] = null,
        Dn = _t[--Lt],
        _t[Lt] = null
}
var jt = null
  , Tt = null
  , be = !1
  , Zt = null;
function _h(e, t) {
    var n = zt(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Uf(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        jt = e,
        Tt = pr(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        jt = e,
        Tt = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Yr !== null ? {
            id: Dn,
            overflow: In
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = zt(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        jt = e,
        Tt = null,
        !0) : !1;
    default:
        return !1
    }
}
function Zc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Jc(e) {
    if (be) {
        var t = Tt;
        if (t) {
            var n = t;
            if (!Uf(e, t)) {
                if (Zc(e))
                    throw Error(F(418));
                t = pr(n.nextSibling);
                var r = jt;
                t && Uf(e, t) ? _h(r, n) : (e.flags = e.flags & -4097 | 2,
                be = !1,
                jt = e)
            }
        } else {
            if (Zc(e))
                throw Error(F(418));
            e.flags = e.flags & -4097 | 2,
            be = !1,
            jt = e
        }
    }
}
function Vf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    jt = e
}
function _a(e) {
    if (e !== jt)
        return !1;
    if (!be)
        return Vf(e),
        be = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Kc(e.type, e.memoizedProps)),
    t && (t = Tt)) {
        if (Zc(e))
            throw Lh(),
            Error(F(418));
        for (; t; )
            _h(e, t),
            t = pr(t.nextSibling)
    }
    if (Vf(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(F(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Tt = pr(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Tt = null
        }
    } else
        Tt = jt ? pr(e.stateNode.nextSibling) : null;
    return !0
}
function Lh() {
    for (var e = Tt; e; )
        e = pr(e.nextSibling)
}
function Ho() {
    Tt = jt = null,
    be = !1
}
function cd(e) {
    Zt === null ? Zt = [e] : Zt.push(e)
}
var B1 = Wn.ReactCurrentBatchConfig;
function ys(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(F(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(F(147, e));
            var o = r
              , s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(a) {
                var i = o.refs;
                a === null ? delete i[s] : i[s] = a
            }
            ,
            t._stringRef = s,
            t)
        }
        if (typeof e != "string")
            throw Error(F(284));
        if (!n._owner)
            throw Error(F(290, e))
    }
    return e
}
function La(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(F(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Wf(e) {
    var t = e._init;
    return t(e._payload)
}
function zh(e) {
    function t(y, h) {
        if (e) {
            var x = y.deletions;
            x === null ? (y.deletions = [h],
            y.flags |= 16) : x.push(h)
        }
    }
    function n(y, h) {
        if (!e)
            return null;
        for (; h !== null; )
            t(y, h),
            h = h.sibling;
        return null
    }
    function r(y, h) {
        for (y = new Map; h !== null; )
            h.key !== null ? y.set(h.key, h) : y.set(h.index, h),
            h = h.sibling;
        return y
    }
    function o(y, h) {
        return y = vr(y, h),
        y.index = 0,
        y.sibling = null,
        y
    }
    function s(y, h, x) {
        return y.index = x,
        e ? (x = y.alternate,
        x !== null ? (x = x.index,
        x < h ? (y.flags |= 2,
        h) : x) : (y.flags |= 2,
        h)) : (y.flags |= 1048576,
        h)
    }
    function a(y) {
        return e && y.alternate === null && (y.flags |= 2),
        y
    }
    function i(y, h, x, S) {
        return h === null || h.tag !== 6 ? (h = ic(x, y.mode, S),
        h.return = y,
        h) : (h = o(h, x),
        h.return = y,
        h)
    }
    function l(y, h, x, S) {
        var E = x.type;
        return E === po ? d(y, h, x.props.children, S, x.key) : h !== null && (h.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Zn && Wf(E) === h.type) ? (S = o(h, x.props),
        S.ref = ys(y, h, x),
        S.return = y,
        S) : (S = fi(x.type, x.key, x.props, null, y.mode, S),
        S.ref = ys(y, h, x),
        S.return = y,
        S)
    }
    function u(y, h, x, S) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== x.containerInfo || h.stateNode.implementation !== x.implementation ? (h = lc(x, y.mode, S),
        h.return = y,
        h) : (h = o(h, x.children || []),
        h.return = y,
        h)
    }
    function d(y, h, x, S, E) {
        return h === null || h.tag !== 7 ? (h = Wr(x, y.mode, S, E),
        h.return = y,
        h) : (h = o(h, x),
        h.return = y,
        h)
    }
    function p(y, h, x) {
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return h = ic("" + h, y.mode, x),
            h.return = y,
            h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case Ta:
                return x = fi(h.type, h.key, h.props, null, y.mode, x),
                x.ref = ys(y, null, h),
                x.return = y,
                x;
            case fo:
                return h = lc(h, y.mode, x),
                h.return = y,
                h;
            case Zn:
                var S = h._init;
                return p(y, S(h._payload), x)
            }
            if (Ts(h) || ps(h))
                return h = Wr(h, y.mode, x, null),
                h.return = y,
                h;
            La(y, h)
        }
        return null
    }
    function v(y, h, x, S) {
        var E = h !== null ? h.key : null;
        if (typeof x == "string" && x !== "" || typeof x == "number")
            return E !== null ? null : i(y, h, "" + x, S);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case Ta:
                return x.key === E ? l(y, h, x, S) : null;
            case fo:
                return x.key === E ? u(y, h, x, S) : null;
            case Zn:
                return E = x._init,
                v(y, h, E(x._payload), S)
            }
            if (Ts(x) || ps(x))
                return E !== null ? null : d(y, h, x, S, null);
            La(y, x)
        }
        return null
    }
    function m(y, h, x, S, E) {
        if (typeof S == "string" && S !== "" || typeof S == "number")
            return y = y.get(x) || null,
            i(h, y, "" + S, E);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
            case Ta:
                return y = y.get(S.key === null ? x : S.key) || null,
                l(h, y, S, E);
            case fo:
                return y = y.get(S.key === null ? x : S.key) || null,
                u(h, y, S, E);
            case Zn:
                var k = S._init;
                return m(y, h, x, k(S._payload), E)
            }
            if (Ts(S) || ps(S))
                return y = y.get(x) || null,
                d(h, y, S, E, null);
            La(h, S)
        }
        return null
    }
    function b(y, h, x, S) {
        for (var E = null, k = null, C = h, j = h = 0, A = null; C !== null && j < x.length; j++) {
            C.index > j ? (A = C,
            C = null) : A = C.sibling;
            var M = v(y, C, x[j], S);
            if (M === null) {
                C === null && (C = A);
                break
            }
            e && C && M.alternate === null && t(y, C),
            h = s(M, h, j),
            k === null ? E = M : k.sibling = M,
            k = M,
            C = A
        }
        if (j === x.length)
            return n(y, C),
            be && Fr(y, j),
            E;
        if (C === null) {
            for (; j < x.length; j++)
                C = p(y, x[j], S),
                C !== null && (h = s(C, h, j),
                k === null ? E = C : k.sibling = C,
                k = C);
            return be && Fr(y, j),
            E
        }
        for (C = r(y, C); j < x.length; j++)
            A = m(C, y, j, x[j], S),
            A !== null && (e && A.alternate !== null && C.delete(A.key === null ? j : A.key),
            h = s(A, h, j),
            k === null ? E = A : k.sibling = A,
            k = A);
        return e && C.forEach(function($) {
            return t(y, $)
        }),
        be && Fr(y, j),
        E
    }
    function g(y, h, x, S) {
        var E = ps(x);
        if (typeof E != "function")
            throw Error(F(150));
        if (x = E.call(x),
        x == null)
            throw Error(F(151));
        for (var k = E = null, C = h, j = h = 0, A = null, M = x.next(); C !== null && !M.done; j++,
        M = x.next()) {
            C.index > j ? (A = C,
            C = null) : A = C.sibling;
            var $ = v(y, C, M.value, S);
            if ($ === null) {
                C === null && (C = A);
                break
            }
            e && C && $.alternate === null && t(y, C),
            h = s($, h, j),
            k === null ? E = $ : k.sibling = $,
            k = $,
            C = A
        }
        if (M.done)
            return n(y, C),
            be && Fr(y, j),
            E;
        if (C === null) {
            for (; !M.done; j++,
            M = x.next())
                M = p(y, M.value, S),
                M !== null && (h = s(M, h, j),
                k === null ? E = M : k.sibling = M,
                k = M);
            return be && Fr(y, j),
            E
        }
        for (C = r(y, C); !M.done; j++,
        M = x.next())
            M = m(C, y, j, M.value, S),
            M !== null && (e && M.alternate !== null && C.delete(M.key === null ? j : M.key),
            h = s(M, h, j),
            k === null ? E = M : k.sibling = M,
            k = M);
        return e && C.forEach(function(D) {
            return t(y, D)
        }),
        be && Fr(y, j),
        E
    }
    function w(y, h, x, S) {
        if (typeof x == "object" && x !== null && x.type === po && x.key === null && (x = x.props.children),
        typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case Ta:
                e: {
                    for (var E = x.key, k = h; k !== null; ) {
                        if (k.key === E) {
                            if (E = x.type,
                            E === po) {
                                if (k.tag === 7) {
                                    n(y, k.sibling),
                                    h = o(k, x.props.children),
                                    h.return = y,
                                    y = h;
                                    break e
                                }
                            } else if (k.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Zn && Wf(E) === k.type) {
                                n(y, k.sibling),
                                h = o(k, x.props),
                                h.ref = ys(y, k, x),
                                h.return = y,
                                y = h;
                                break e
                            }
                            n(y, k);
                            break
                        } else
                            t(y, k);
                        k = k.sibling
                    }
                    x.type === po ? (h = Wr(x.props.children, y.mode, S, x.key),
                    h.return = y,
                    y = h) : (S = fi(x.type, x.key, x.props, null, y.mode, S),
                    S.ref = ys(y, h, x),
                    S.return = y,
                    y = S)
                }
                return a(y);
            case fo:
                e: {
                    for (k = x.key; h !== null; ) {
                        if (h.key === k)
                            if (h.tag === 4 && h.stateNode.containerInfo === x.containerInfo && h.stateNode.implementation === x.implementation) {
                                n(y, h.sibling),
                                h = o(h, x.children || []),
                                h.return = y,
                                y = h;
                                break e
                            } else {
                                n(y, h);
                                break
                            }
                        else
                            t(y, h);
                        h = h.sibling
                    }
                    h = lc(x, y.mode, S),
                    h.return = y,
                    y = h
                }
                return a(y);
            case Zn:
                return k = x._init,
                w(y, h, k(x._payload), S)
            }
            if (Ts(x))
                return b(y, h, x, S);
            if (ps(x))
                return g(y, h, x, S);
            La(y, x)
        }
        return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x,
        h !== null && h.tag === 6 ? (n(y, h.sibling),
        h = o(h, x),
        h.return = y,
        y = h) : (n(y, h),
        h = ic(x, y.mode, S),
        h.return = y,
        y = h),
        a(y)) : n(y, h)
    }
    return w
}
var Yo = zh(!0)
  , $h = zh(!1)
  , Fi = Er(null)
  , Mi = null
  , bo = null
  , ud = null;
function dd() {
    ud = bo = Mi = null
}
function fd(e) {
    var t = Fi.current;
    xe(Fi),
    e._currentValue = t
}
function eu(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function jo(e, t) {
    Mi = e,
    ud = bo = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (yt = !0),
    e.firstContext = null)
}
function Bt(e) {
    var t = e._currentValue;
    if (ud !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        bo === null) {
            if (Mi === null)
                throw Error(F(308));
            bo = e,
            Mi.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            bo = bo.next = e;
    return t
}
var Dr = null;
function pd(e) {
    Dr === null ? Dr = [e] : Dr.push(e)
}
function Bh(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    pd(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    $n(e, r)
}
function $n(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Jn = !1;
function md(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Uh(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function _n(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function mr(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    ie & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        $n(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    pd(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    $n(e, n)
}
function ai(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Ju(e, n)
    }
}
function Hf(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , s = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var a = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? o = s = a : s = s.next = a,
                n = n.next
            } while (n !== null);
            s === null ? o = s = t : s = s.next = t
        } else
            o = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function Oi(e, t, n, r) {
    var o = e.updateQueue;
    Jn = !1;
    var s = o.firstBaseUpdate
      , a = o.lastBaseUpdate
      , i = o.shared.pending;
    if (i !== null) {
        o.shared.pending = null;
        var l = i
          , u = l.next;
        l.next = null,
        a === null ? s = u : a.next = u,
        a = l;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
        i = d.lastBaseUpdate,
        i !== a && (i === null ? d.firstBaseUpdate = u : i.next = u,
        d.lastBaseUpdate = l))
    }
    if (s !== null) {
        var p = o.baseState;
        a = 0,
        d = u = l = null,
        i = s;
        do {
            var v = i.lane
              , m = i.eventTime;
            if ((r & v) === v) {
                d !== null && (d = d.next = {
                    eventTime: m,
                    lane: 0,
                    tag: i.tag,
                    payload: i.payload,
                    callback: i.callback,
                    next: null
                });
                e: {
                    var b = e
                      , g = i;
                    switch (v = t,
                    m = n,
                    g.tag) {
                    case 1:
                        if (b = g.payload,
                        typeof b == "function") {
                            p = b.call(m, p, v);
                            break e
                        }
                        p = b;
                        break e;
                    case 3:
                        b.flags = b.flags & -65537 | 128;
                    case 0:
                        if (b = g.payload,
                        v = typeof b == "function" ? b.call(m, p, v) : b,
                        v == null)
                            break e;
                        p = Ce({}, p, v);
                        break e;
                    case 2:
                        Jn = !0
                    }
                }
                i.callback !== null && i.lane !== 0 && (e.flags |= 64,
                v = o.effects,
                v === null ? o.effects = [i] : v.push(i))
            } else
                m = {
                    eventTime: m,
                    lane: v,
                    tag: i.tag,
                    payload: i.payload,
                    callback: i.callback,
                    next: null
                },
                d === null ? (u = d = m,
                l = p) : d = d.next = m,
                a |= v;
            if (i = i.next,
            i === null) {
                if (i = o.shared.pending,
                i === null)
                    break;
                v = i,
                i = v.next,
                v.next = null,
                o.lastBaseUpdate = v,
                o.shared.pending = null
            }
        } while (!0);
        if (d === null && (l = p),
        o.baseState = l,
        o.firstBaseUpdate = u,
        o.lastBaseUpdate = d,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                a |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            s === null && (o.shared.lanes = 0);
        Kr |= a,
        e.lanes = a,
        e.memoizedState = p
    }
}
function Yf(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(F(191, o));
                o.call(r)
            }
        }
}
var ma = {}
  , wn = Er(ma)
  , Zs = Er(ma)
  , Js = Er(ma);
function Ir(e) {
    if (e === ma)
        throw Error(F(174));
    return e
}
function hd(e, t) {
    switch (me(Js, t),
    me(Zs, e),
    me(wn, ma),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Oc(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Oc(t, e)
    }
    xe(wn),
    me(wn, t)
}
function Qo() {
    xe(wn),
    xe(Zs),
    xe(Js)
}
function Vh(e) {
    Ir(Js.current);
    var t = Ir(wn.current)
      , n = Oc(t, e.type);
    t !== n && (me(Zs, e),
    me(wn, n))
}
function gd(e) {
    Zs.current === e && (xe(wn),
    xe(Zs))
}
var Se = Er(0);
function Di(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var tc = [];
function vd() {
    for (var e = 0; e < tc.length; e++)
        tc[e]._workInProgressVersionPrimary = null;
    tc.length = 0
}
var ii = Wn.ReactCurrentDispatcher
  , nc = Wn.ReactCurrentBatchConfig
  , Qr = 0
  , Ee = null
  , Me = null
  , _e = null
  , Ii = !1
  , Is = !1
  , ea = 0
  , U1 = 0;
function qe() {
    throw Error(F(321))
}
function yd(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!tn(e[n], t[n]))
            return !1;
    return !0
}
function xd(e, t, n, r, o, s) {
    if (Qr = s,
    Ee = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    ii.current = e === null || e.memoizedState === null ? Y1 : Q1,
    e = n(r, o),
    Is) {
        s = 0;
        do {
            if (Is = !1,
            ea = 0,
            25 <= s)
                throw Error(F(301));
            s += 1,
            _e = Me = null,
            t.updateQueue = null,
            ii.current = K1,
            e = n(r, o)
        } while (Is)
    }
    if (ii.current = _i,
    t = Me !== null && Me.next !== null,
    Qr = 0,
    _e = Me = Ee = null,
    Ii = !1,
    t)
        throw Error(F(300));
    return e
}
function wd() {
    var e = ea !== 0;
    return ea = 0,
    e
}
function fn() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return _e === null ? Ee.memoizedState = _e = e : _e = _e.next = e,
    _e
}
function Ut() {
    if (Me === null) {
        var e = Ee.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Me.next;
    var t = _e === null ? Ee.memoizedState : _e.next;
    if (t !== null)
        _e = t,
        Me = e;
    else {
        if (e === null)
            throw Error(F(310));
        Me = e,
        e = {
            memoizedState: Me.memoizedState,
            baseState: Me.baseState,
            baseQueue: Me.baseQueue,
            queue: Me.queue,
            next: null
        },
        _e === null ? Ee.memoizedState = _e = e : _e = _e.next = e
    }
    return _e
}
function ta(e, t) {
    return typeof t == "function" ? t(e) : t
}
function rc(e) {
    var t = Ut()
      , n = t.queue;
    if (n === null)
        throw Error(F(311));
    n.lastRenderedReducer = e;
    var r = Me
      , o = r.baseQueue
      , s = n.pending;
    if (s !== null) {
        if (o !== null) {
            var a = o.next;
            o.next = s.next,
            s.next = a
        }
        r.baseQueue = o = s,
        n.pending = null
    }
    if (o !== null) {
        s = o.next,
        r = r.baseState;
        var i = a = null
          , l = null
          , u = s;
        do {
            var d = u.lane;
            if ((Qr & d) === d)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var p = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (i = l = p,
                a = r) : l = l.next = p,
                Ee.lanes |= d,
                Kr |= d
            }
            u = u.next
        } while (u !== null && u !== s);
        l === null ? a = r : l.next = i,
        tn(r, t.memoizedState) || (yt = !0),
        t.memoizedState = r,
        t.baseState = a,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            s = o.lane,
            Ee.lanes |= s,
            Kr |= s,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function oc(e) {
    var t = Ut()
      , n = t.queue;
    if (n === null)
        throw Error(F(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , s = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var a = o = o.next;
        do
            s = e(s, a.action),
            a = a.next;
        while (a !== o);
        tn(s, t.memoizedState) || (yt = !0),
        t.memoizedState = s,
        t.baseQueue === null && (t.baseState = s),
        n.lastRenderedState = s
    }
    return [s, r]
}
function Wh() {}
function Hh(e, t) {
    var n = Ee
      , r = Ut()
      , o = t()
      , s = !tn(r.memoizedState, o);
    if (s && (r.memoizedState = o,
    yt = !0),
    r = r.queue,
    bd(Kh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || _e !== null && _e.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        na(9, Qh.bind(null, n, r, o, t), void 0, null),
        Le === null)
            throw Error(F(349));
        Qr & 30 || Yh(n, t, o)
    }
    return o
}
function Yh(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = Ee.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Ee.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Qh(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Gh(t) && qh(e)
}
function Kh(e, t, n) {
    return n(function() {
        Gh(t) && qh(e)
    })
}
function Gh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !tn(e, n)
    } catch {
        return !0
    }
}
function qh(e) {
    var t = $n(e, 1);
    t !== null && en(t, e, 1, -1)
}
function Qf(e) {
    var t = fn();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ta,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = H1.bind(null, Ee, e),
    [t.memoizedState, e]
}
function na(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = Ee.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Ee.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Xh() {
    return Ut().memoizedState
}
function li(e, t, n, r) {
    var o = fn();
    Ee.flags |= e,
    o.memoizedState = na(1 | t, n, void 0, r === void 0 ? null : r)
}
function il(e, t, n, r) {
    var o = Ut();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (Me !== null) {
        var a = Me.memoizedState;
        if (s = a.destroy,
        r !== null && yd(r, a.deps)) {
            o.memoizedState = na(t, n, s, r);
            return
        }
    }
    Ee.flags |= e,
    o.memoizedState = na(1 | t, n, s, r)
}
function Kf(e, t) {
    return li(8390656, 8, e, t)
}
function bd(e, t) {
    return il(2048, 8, e, t)
}
function Zh(e, t) {
    return il(4, 2, e, t)
}
function Jh(e, t) {
    return il(4, 4, e, t)
}
function e0(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function t0(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    il(4, 4, e0.bind(null, t, e), n)
}
function Sd() {}
function n0(e, t) {
    var n = Ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && yd(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function r0(e, t) {
    var n = Ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && yd(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function o0(e, t, n) {
    return Qr & 21 ? (tn(n, t) || (n = ch(),
    Ee.lanes |= n,
    Kr |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    yt = !0),
    e.memoizedState = n)
}
function V1(e, t) {
    var n = ue;
    ue = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = nc.transition;
    nc.transition = {};
    try {
        e(!1),
        t()
    } finally {
        ue = n,
        nc.transition = r
    }
}
function s0() {
    return Ut().memoizedState
}
function W1(e, t, n) {
    var r = gr(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    a0(e))
        i0(t, n);
    else if (n = Bh(e, t, n, r),
    n !== null) {
        var o = it();
        en(n, e, r, o),
        l0(n, t, r)
    }
}
function H1(e, t, n) {
    var r = gr(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (a0(e))
        i0(t, o);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer,
        s !== null))
            try {
                var a = t.lastRenderedState
                  , i = s(a, n);
                if (o.hasEagerState = !0,
                o.eagerState = i,
                tn(i, a)) {
                    var l = t.interleaved;
                    l === null ? (o.next = o,
                    pd(t)) : (o.next = l.next,
                    l.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = Bh(e, t, o, r),
        n !== null && (o = it(),
        en(n, e, r, o),
        l0(n, t, r))
    }
}
function a0(e) {
    var t = e.alternate;
    return e === Ee || t !== null && t === Ee
}
function i0(e, t) {
    Is = Ii = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function l0(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Ju(e, n)
    }
}
var _i = {
    readContext: Bt,
    useCallback: qe,
    useContext: qe,
    useEffect: qe,
    useImperativeHandle: qe,
    useInsertionEffect: qe,
    useLayoutEffect: qe,
    useMemo: qe,
    useReducer: qe,
    useRef: qe,
    useState: qe,
    useDebugValue: qe,
    useDeferredValue: qe,
    useTransition: qe,
    useMutableSource: qe,
    useSyncExternalStore: qe,
    useId: qe,
    unstable_isNewReconciler: !1
}
  , Y1 = {
    readContext: Bt,
    useCallback: function(e, t) {
        return fn().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Bt,
    useEffect: Kf,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        li(4194308, 4, e0.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return li(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return li(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = fn();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = fn();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = W1.bind(null, Ee, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = fn();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Qf,
    useDebugValue: Sd,
    useDeferredValue: function(e) {
        return fn().memoizedState = e
    },
    useTransition: function() {
        var e = Qf(!1)
          , t = e[0];
        return e = V1.bind(null, e[1]),
        fn().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = Ee
          , o = fn();
        if (be) {
            if (n === void 0)
                throw Error(F(407));
            n = n()
        } else {
            if (n = t(),
            Le === null)
                throw Error(F(349));
            Qr & 30 || Yh(r, t, n)
        }
        o.memoizedState = n;
        var s = {
            value: n,
            getSnapshot: t
        };
        return o.queue = s,
        Kf(Kh.bind(null, r, s, e), [e]),
        r.flags |= 2048,
        na(9, Qh.bind(null, r, s, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = fn()
          , t = Le.identifierPrefix;
        if (be) {
            var n = In
              , r = Dn;
            n = (r & ~(1 << 32 - Jt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = ea++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = U1++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , Q1 = {
    readContext: Bt,
    useCallback: n0,
    useContext: Bt,
    useEffect: bd,
    useImperativeHandle: t0,
    useInsertionEffect: Zh,
    useLayoutEffect: Jh,
    useMemo: r0,
    useReducer: rc,
    useRef: Xh,
    useState: function() {
        return rc(ta)
    },
    useDebugValue: Sd,
    useDeferredValue: function(e) {
        var t = Ut();
        return o0(t, Me.memoizedState, e)
    },
    useTransition: function() {
        var e = rc(ta)[0]
          , t = Ut().memoizedState;
        return [e, t]
    },
    useMutableSource: Wh,
    useSyncExternalStore: Hh,
    useId: s0,
    unstable_isNewReconciler: !1
}
  , K1 = {
    readContext: Bt,
    useCallback: n0,
    useContext: Bt,
    useEffect: bd,
    useImperativeHandle: t0,
    useInsertionEffect: Zh,
    useLayoutEffect: Jh,
    useMemo: r0,
    useReducer: oc,
    useRef: Xh,
    useState: function() {
        return oc(ta)
    },
    useDebugValue: Sd,
    useDeferredValue: function(e) {
        var t = Ut();
        return Me === null ? t.memoizedState = e : o0(t, Me.memoizedState, e)
    },
    useTransition: function() {
        var e = oc(ta)[0]
          , t = Ut().memoizedState;
        return [e, t]
    },
    useMutableSource: Wh,
    useSyncExternalStore: Hh,
    useId: s0,
    unstable_isNewReconciler: !1
};
function Qt(e, t) {
    if (e && e.defaultProps) {
        t = Ce({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function tu(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : Ce({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var ll = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? no(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = it()
          , o = gr(e)
          , s = _n(r, o);
        s.payload = t,
        n != null && (s.callback = n),
        t = mr(e, s, o),
        t !== null && (en(t, e, o, r),
        ai(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = it()
          , o = gr(e)
          , s = _n(r, o);
        s.tag = 1,
        s.payload = t,
        n != null && (s.callback = n),
        t = mr(e, s, o),
        t !== null && (en(t, e, o, r),
        ai(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = it()
          , r = gr(e)
          , o = _n(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = mr(e, o, r),
        t !== null && (en(t, e, r, n),
        ai(t, e, r))
    }
};
function Gf(e, t, n, r, o, s, a) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, a) : t.prototype && t.prototype.isPureReactComponent ? !Ks(n, r) || !Ks(o, s) : !0
}
function c0(e, t, n) {
    var r = !1
      , o = xr
      , s = t.contextType;
    return typeof s == "object" && s !== null ? s = Bt(s) : (o = wt(t) ? Hr : et.current,
    r = t.contextTypes,
    s = (r = r != null) ? Wo(e, o) : xr),
    t = new t(n,s),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = ll,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = s),
    t
}
function qf(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ll.enqueueReplaceState(t, t.state, null)
}
function nu(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = {},
    md(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? o.context = Bt(s) : (s = wt(t) ? Hr : et.current,
    o.context = Wo(e, s)),
    o.state = e.memoizedState,
    s = t.getDerivedStateFromProps,
    typeof s == "function" && (tu(e, t, s, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && ll.enqueueReplaceState(o, o.state, null),
    Oi(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function Ko(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += Sx(r),
            r = r.return;
        while (r);
        var o = n
    } catch (s) {
        o = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function sc(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function ru(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var G1 = typeof WeakMap == "function" ? WeakMap : Map;
function u0(e, t, n) {
    n = _n(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        zi || (zi = !0,
        pu = r),
        ru(e, t)
    }
    ,
    n
}
function d0(e, t, n) {
    n = _n(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            ru(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        ru(e, t),
        typeof r != "function" && (hr === null ? hr = new Set([this]) : hr.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: a !== null ? a : ""
        })
    }
    ),
    n
}
function Xf(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new G1;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = cw.bind(null, e, t, n),
    t.then(e, e))
}
function Zf(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Jf(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = _n(-1, 1),
    t.tag = 2,
    mr(n, t, 1))),
    n.lanes |= 1),
    e)
}
var q1 = Wn.ReactCurrentOwner
  , yt = !1;
function st(e, t, n, r) {
    t.child = e === null ? $h(t, null, n, r) : Yo(t, e.child, n, r)
}
function ep(e, t, n, r, o) {
    n = n.render;
    var s = t.ref;
    return jo(t, o),
    r = xd(e, t, n, r, s, o),
    n = wd(),
    e !== null && !yt ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Bn(e, t, o)) : (be && n && id(t),
    t.flags |= 1,
    st(e, t, r, o),
    t.child)
}
function tp(e, t, n, r, o) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !Rd(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = s,
        f0(e, t, s, r, o)) : (e = fi(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (s = e.child,
    !(e.lanes & o)) {
        var a = s.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Ks,
        n(a, r) && e.ref === t.ref)
            return Bn(e, t, o)
    }
    return t.flags |= 1,
    e = vr(s, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function f0(e, t, n, r, o) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (Ks(s, r) && e.ref === t.ref)
            if (yt = !1,
            t.pendingProps = r = s,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (yt = !0);
            else
                return t.lanes = e.lanes,
                Bn(e, t, o)
    }
    return ou(e, t, n, r, o)
}
function p0(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            me(Eo, kt),
            kt |= n;
        else {
            if (!(n & 1073741824))
                return e = s !== null ? s.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                me(Eo, kt),
                kt |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = s !== null ? s.baseLanes : n,
            me(Eo, kt),
            kt |= r
        }
    else
        s !== null ? (r = s.baseLanes | n,
        t.memoizedState = null) : r = n,
        me(Eo, kt),
        kt |= r;
    return st(e, t, o, n),
    t.child
}
function m0(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function ou(e, t, n, r, o) {
    var s = wt(n) ? Hr : et.current;
    return s = Wo(t, s),
    jo(t, o),
    n = xd(e, t, n, r, s, o),
    r = wd(),
    e !== null && !yt ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Bn(e, t, o)) : (be && r && id(t),
    t.flags |= 1,
    st(e, t, n, o),
    t.child)
}
function np(e, t, n, r, o) {
    if (wt(n)) {
        var s = !0;
        Pi(t)
    } else
        s = !1;
    if (jo(t, o),
    t.stateNode === null)
        ci(e, t),
        c0(t, n, r),
        nu(t, n, r, o),
        r = !0;
    else if (e === null) {
        var a = t.stateNode
          , i = t.memoizedProps;
        a.props = i;
        var l = a.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = Bt(u) : (u = wt(n) ? Hr : et.current,
        u = Wo(t, u));
        var d = n.getDerivedStateFromProps
          , p = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function";
        p || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (i !== r || l !== u) && qf(t, a, r, u),
        Jn = !1;
        var v = t.memoizedState;
        a.state = v,
        Oi(t, r, a, o),
        l = t.memoizedState,
        i !== r || v !== l || xt.current || Jn ? (typeof d == "function" && (tu(t, n, d, r),
        l = t.memoizedState),
        (i = Jn || Gf(t, n, i, r, v, l, u)) ? (p || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(),
        typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()),
        typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = l),
        a.props = r,
        a.state = l,
        a.context = u,
        r = i) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        a = t.stateNode,
        Uh(e, t),
        i = t.memoizedProps,
        u = t.type === t.elementType ? i : Qt(t.type, i),
        a.props = u,
        p = t.pendingProps,
        v = a.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = Bt(l) : (l = wt(n) ? Hr : et.current,
        l = Wo(t, l));
        var m = n.getDerivedStateFromProps;
        (d = typeof m == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (i !== p || v !== l) && qf(t, a, r, l),
        Jn = !1,
        v = t.memoizedState,
        a.state = v,
        Oi(t, r, a, o);
        var b = t.memoizedState;
        i !== p || v !== b || xt.current || Jn ? (typeof m == "function" && (tu(t, n, m, r),
        b = t.memoizedState),
        (u = Jn || Gf(t, n, u, r, v, b, l) || !1) ? (d || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, b, l),
        typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, b, l)),
        typeof a.componentDidUpdate == "function" && (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = b),
        a.props = r,
        a.state = b,
        a.context = l,
        r = u) : (typeof a.componentDidUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return su(e, t, n, r, s, o)
}
function su(e, t, n, r, o, s) {
    m0(e, t);
    var a = (t.flags & 128) !== 0;
    if (!r && !a)
        return o && Bf(t, n, !1),
        Bn(e, t, s);
    r = t.stateNode,
    q1.current = t;
    var i = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && a ? (t.child = Yo(t, e.child, null, s),
    t.child = Yo(t, null, i, s)) : st(e, t, i, s),
    t.memoizedState = r.state,
    o && Bf(t, n, !0),
    t.child
}
function h0(e) {
    var t = e.stateNode;
    t.pendingContext ? $f(e, t.pendingContext, t.pendingContext !== t.context) : t.context && $f(e, t.context, !1),
    hd(e, t.containerInfo)
}
function rp(e, t, n, r, o) {
    return Ho(),
    cd(o),
    t.flags |= 256,
    st(e, t, n, r),
    t.child
}
var au = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function iu(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function g0(e, t, n) {
    var r = t.pendingProps, o = Se.current, s = !1, a = (t.flags & 128) !== 0, i;
    if ((i = a) || (i = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    i ? (s = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    me(Se, o & 1),
    e === null)
        return Jc(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (a = r.children,
        e = r.fallback,
        s ? (r = t.mode,
        s = t.child,
        a = {
            mode: "hidden",
            children: a
        },
        !(r & 1) && s !== null ? (s.childLanes = 0,
        s.pendingProps = a) : s = dl(a, r, 0, null),
        e = Wr(e, r, n, null),
        s.return = t,
        e.return = t,
        s.sibling = e,
        t.child = s,
        t.child.memoizedState = iu(n),
        t.memoizedState = au,
        e) : Ed(t, a));
    if (o = e.memoizedState,
    o !== null && (i = o.dehydrated,
    i !== null))
        return X1(e, t, a, r, i, o, n);
    if (s) {
        s = r.fallback,
        a = t.mode,
        o = e.child,
        i = o.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(a & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = l,
        t.deletions = null) : (r = vr(o, l),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        i !== null ? s = vr(i, s) : (s = Wr(s, a, n, null),
        s.flags |= 2),
        s.return = t,
        r.return = t,
        r.sibling = s,
        t.child = r,
        r = s,
        s = t.child,
        a = e.child.memoizedState,
        a = a === null ? iu(n) : {
            baseLanes: a.baseLanes | n,
            cachePool: null,
            transitions: a.transitions
        },
        s.memoizedState = a,
        s.childLanes = e.childLanes & ~n,
        t.memoizedState = au,
        r
    }
    return s = e.child,
    e = s.sibling,
    r = vr(s, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Ed(e, t) {
    return t = dl({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function za(e, t, n, r) {
    return r !== null && cd(r),
    Yo(t, e.child, null, n),
    e = Ed(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function X1(e, t, n, r, o, s, a) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = sc(Error(F(422))),
        za(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (s = r.fallback,
        o = t.mode,
        r = dl({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        s = Wr(s, o, a, null),
        s.flags |= 2,
        r.return = t,
        s.return = t,
        r.sibling = s,
        t.child = r,
        t.mode & 1 && Yo(t, e.child, null, a),
        t.child.memoizedState = iu(a),
        t.memoizedState = au,
        s);
    if (!(t.mode & 1))
        return za(e, t, a, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var i = r.dgst;
        return r = i,
        s = Error(F(419)),
        r = sc(s, r, void 0),
        za(e, t, a, r)
    }
    if (i = (a & e.childLanes) !== 0,
    yt || i) {
        if (r = Le,
        r !== null) {
            switch (a & -a) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
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
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (r.suspendedLanes | a) ? 0 : o,
            o !== 0 && o !== s.retryLane && (s.retryLane = o,
            $n(e, o),
            en(r, e, o, -1))
        }
        return Pd(),
        r = sc(Error(F(421))),
        za(e, t, a, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = uw.bind(null, e),
    o._reactRetry = t,
    null) : (e = s.treeContext,
    Tt = pr(o.nextSibling),
    jt = t,
    be = !0,
    Zt = null,
    e !== null && (_t[Lt++] = Dn,
    _t[Lt++] = In,
    _t[Lt++] = Yr,
    Dn = e.id,
    In = e.overflow,
    Yr = t),
    t = Ed(t, r.children),
    t.flags |= 4096,
    t)
}
function op(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    eu(e.return, t, n)
}
function ac(e, t, n, r, o) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (s.isBackwards = t,
    s.rendering = null,
    s.renderingStartTime = 0,
    s.last = r,
    s.tail = n,
    s.tailMode = o)
}
function v0(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , s = r.tail;
    if (st(e, t, r.children, n),
    r = Se.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && op(e, n, t);
                else if (e.tag === 19)
                    op(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (me(Se, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && Di(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            ac(t, !1, o, n, s);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && Di(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            ac(t, !0, n, null, s);
            break;
        case "together":
            ac(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function ci(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Bn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Kr |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(F(153));
    if (t.child !== null) {
        for (e = t.child,
        n = vr(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = vr(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function Z1(e, t, n) {
    switch (t.tag) {
    case 3:
        h0(t),
        Ho();
        break;
    case 5:
        Vh(t);
        break;
    case 1:
        wt(t.type) && Pi(t);
        break;
    case 4:
        hd(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        me(Fi, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (me(Se, Se.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? g0(e, t, n) : (me(Se, Se.current & 1),
            e = Bn(e, t, n),
            e !== null ? e.sibling : null);
        me(Se, Se.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return v0(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        me(Se, Se.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        p0(e, t, n)
    }
    return Bn(e, t, n)
}
var y0, lu, x0, w0;
y0 = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
lu = function() {}
;
x0 = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        Ir(wn.current);
        var s = null;
        switch (n) {
        case "input":
            o = Rc(e, o),
            r = Rc(e, r),
            s = [];
            break;
        case "select":
            o = Ce({}, o, {
                value: void 0
            }),
            r = Ce({}, r, {
                value: void 0
            }),
            s = [];
            break;
        case "textarea":
            o = Mc(e, o),
            r = Mc(e, r),
            s = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ti)
        }
        Dc(n, r);
        var a;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var i = o[u];
                    for (a in i)
                        i.hasOwnProperty(a) && (n || (n = {}),
                        n[a] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Bs.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (i = o != null ? o[u] : void 0,
            r.hasOwnProperty(u) && l !== i && (l != null || i != null))
                if (u === "style")
                    if (i) {
                        for (a in i)
                            !i.hasOwnProperty(a) || l && l.hasOwnProperty(a) || (n || (n = {}),
                            n[a] = "");
                        for (a in l)
                            l.hasOwnProperty(a) && i[a] !== l[a] && (n || (n = {}),
                            n[a] = l[a])
                    } else
                        n || (s || (s = []),
                        s.push(u, n)),
                        n = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    i = i ? i.__html : void 0,
                    l != null && i !== l && (s = s || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Bs.hasOwnProperty(u) ? (l != null && u === "onScroll" && ye("scroll", e),
                    s || i === l || (s = [])) : (s = s || []).push(u, l))
        }
        n && (s = s || []).push("style", n);
        var u = s;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
w0 = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function xs(e, t) {
    if (!be)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Xe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function J1(e, t, n) {
    var r = t.pendingProps;
    switch (ld(t),
    t.tag) {
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
        return Xe(t),
        null;
    case 1:
        return wt(t.type) && ji(),
        Xe(t),
        null;
    case 3:
        return r = t.stateNode,
        Qo(),
        xe(xt),
        xe(et),
        vd(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (_a(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Zt !== null && (gu(Zt),
        Zt = null))),
        lu(e, t),
        Xe(t),
        null;
    case 5:
        gd(t);
        var o = Ir(Js.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            x0(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(F(166));
                return Xe(t),
                null
            }
            if (e = Ir(wn.current),
            _a(t)) {
                r = t.stateNode,
                n = t.type;
                var s = t.memoizedProps;
                switch (r[gn] = t,
                r[Xs] = s,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    ye("cancel", r),
                    ye("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    ye("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < Ps.length; o++)
                        ye(Ps[o], r);
                    break;
                case "source":
                    ye("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    ye("error", r),
                    ye("load", r);
                    break;
                case "details":
                    ye("toggle", r);
                    break;
                case "input":
                    pf(r, s),
                    ye("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!s.multiple
                    },
                    ye("invalid", r);
                    break;
                case "textarea":
                    hf(r, s),
                    ye("invalid", r)
                }
                Dc(n, s),
                o = null;
                for (var a in s)
                    if (s.hasOwnProperty(a)) {
                        var i = s[a];
                        a === "children" ? typeof i == "string" ? r.textContent !== i && (s.suppressHydrationWarning !== !0 && Ia(r.textContent, i, e),
                        o = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (s.suppressHydrationWarning !== !0 && Ia(r.textContent, i, e),
                        o = ["children", "" + i]) : Bs.hasOwnProperty(a) && i != null && a === "onScroll" && ye("scroll", r)
                    }
                switch (n) {
                case "input":
                    ja(r),
                    mf(r, s, !0);
                    break;
                case "textarea":
                    ja(r),
                    gf(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof s.onClick == "function" && (r.onclick = Ti)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                a = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Km(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, {
                    is: r.is
                }) : (e = a.createElement(n),
                n === "select" && (a = e,
                r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n),
                e[gn] = t,
                e[Xs] = r,
                y0(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (a = Ic(n, r),
                    n) {
                    case "dialog":
                        ye("cancel", e),
                        ye("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        ye("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < Ps.length; o++)
                            ye(Ps[o], e);
                        o = r;
                        break;
                    case "source":
                        ye("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        ye("error", e),
                        ye("load", e),
                        o = r;
                        break;
                    case "details":
                        ye("toggle", e),
                        o = r;
                        break;
                    case "input":
                        pf(e, r),
                        o = Rc(e, r),
                        ye("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = Ce({}, r, {
                            value: void 0
                        }),
                        ye("invalid", e);
                        break;
                    case "textarea":
                        hf(e, r),
                        o = Mc(e, r),
                        ye("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    Dc(n, o),
                    i = o;
                    for (s in i)
                        if (i.hasOwnProperty(s)) {
                            var l = i[s];
                            s === "style" ? Xm(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && Gm(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Us(e, l) : typeof l == "number" && Us(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Bs.hasOwnProperty(s) ? l != null && s === "onScroll" && ye("scroll", e) : l != null && Qu(e, s, l, a))
                        }
                    switch (n) {
                    case "input":
                        ja(e),
                        mf(e, r, !1);
                        break;
                    case "textarea":
                        ja(e),
                        gf(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + yr(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        s = r.value,
                        s != null ? Co(e, !!r.multiple, s, !1) : r.defaultValue != null && Co(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = Ti)
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
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Xe(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            w0(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(F(166));
            if (n = Ir(Js.current),
            Ir(wn.current),
            _a(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[gn] = t,
                (s = r.nodeValue !== n) && (e = jt,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Ia(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Ia(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                s && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[gn] = t,
                t.stateNode = r
        }
        return Xe(t),
        null;
    case 13:
        if (xe(Se),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (be && Tt !== null && t.mode & 1 && !(t.flags & 128))
                Lh(),
                Ho(),
                t.flags |= 98560,
                s = !1;
            else if (s = _a(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!s)
                        throw Error(F(318));
                    if (s = t.memoizedState,
                    s = s !== null ? s.dehydrated : null,
                    !s)
                        throw Error(F(317));
                    s[gn] = t
                } else
                    Ho(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Xe(t),
                s = !1
            } else
                Zt !== null && (gu(Zt),
                Zt = null),
                s = !0;
            if (!s)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || Se.current & 1 ? Oe === 0 && (Oe = 3) : Pd())),
        t.updateQueue !== null && (t.flags |= 4),
        Xe(t),
        null);
    case 4:
        return Qo(),
        lu(e, t),
        e === null && Gs(t.stateNode.containerInfo),
        Xe(t),
        null;
    case 10:
        return fd(t.type._context),
        Xe(t),
        null;
    case 17:
        return wt(t.type) && ji(),
        Xe(t),
        null;
    case 19:
        if (xe(Se),
        s = t.memoizedState,
        s === null)
            return Xe(t),
            null;
        if (r = (t.flags & 128) !== 0,
        a = s.rendering,
        a === null)
            if (r)
                xs(s, !1);
            else {
                if (Oe !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (a = Di(e),
                        a !== null) {
                            for (t.flags |= 128,
                            xs(s, !1),
                            r = a.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                s = n,
                                e = r,
                                s.flags &= 14680066,
                                a = s.alternate,
                                a === null ? (s.childLanes = 0,
                                s.lanes = e,
                                s.child = null,
                                s.subtreeFlags = 0,
                                s.memoizedProps = null,
                                s.memoizedState = null,
                                s.updateQueue = null,
                                s.dependencies = null,
                                s.stateNode = null) : (s.childLanes = a.childLanes,
                                s.lanes = a.lanes,
                                s.child = a.child,
                                s.subtreeFlags = 0,
                                s.deletions = null,
                                s.memoizedProps = a.memoizedProps,
                                s.memoizedState = a.memoizedState,
                                s.updateQueue = a.updateQueue,
                                s.type = a.type,
                                e = a.dependencies,
                                s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return me(Se, Se.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                s.tail !== null && Pe() > Go && (t.flags |= 128,
                r = !0,
                xs(s, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Di(a),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    xs(s, !0),
                    s.tail === null && s.tailMode === "hidden" && !a.alternate && !be)
                        return Xe(t),
                        null
                } else
                    2 * Pe() - s.renderingStartTime > Go && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    xs(s, !1),
                    t.lanes = 4194304);
            s.isBackwards ? (a.sibling = t.child,
            t.child = a) : (n = s.last,
            n !== null ? n.sibling = a : t.child = a,
            s.last = a)
        }
        return s.tail !== null ? (t = s.tail,
        s.rendering = t,
        s.tail = t.sibling,
        s.renderingStartTime = Pe(),
        t.sibling = null,
        n = Se.current,
        me(Se, r ? n & 1 | 2 : n & 1),
        t) : (Xe(t),
        null);
    case 22:
    case 23:
        return jd(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? kt & 1073741824 && (Xe(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Xe(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(F(156, t.tag))
}
function ew(e, t) {
    switch (ld(t),
    t.tag) {
    case 1:
        return wt(t.type) && ji(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Qo(),
        xe(xt),
        xe(et),
        vd(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return gd(t),
        null;
    case 13:
        if (xe(Se),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(F(340));
            Ho()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return xe(Se),
        null;
    case 4:
        return Qo(),
        null;
    case 10:
        return fd(t.type._context),
        null;
    case 22:
    case 23:
        return jd(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var $a = !1
  , Je = !1
  , tw = typeof WeakSet == "function" ? WeakSet : Set
  , z = null;
function So(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                Te(e, t, r)
            }
        else
            n.current = null
}
function cu(e, t, n) {
    try {
        n()
    } catch (r) {
        Te(e, t, r)
    }
}
var sp = !1;
function nw(e, t) {
    if (Yc = Ci,
    e = kh(),
    ad(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        s.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var a = 0
                      , i = -1
                      , l = -1
                      , u = 0
                      , d = 0
                      , p = e
                      , v = null;
                    t: for (; ; ) {
                        for (var m; p !== n || o !== 0 && p.nodeType !== 3 || (i = a + o),
                        p !== s || r !== 0 && p.nodeType !== 3 || (l = a + r),
                        p.nodeType === 3 && (a += p.nodeValue.length),
                        (m = p.firstChild) !== null; )
                            v = p,
                            p = m;
                        for (; ; ) {
                            if (p === e)
                                break t;
                            if (v === n && ++u === o && (i = a),
                            v === s && ++d === r && (l = a),
                            (m = p.nextSibling) !== null)
                                break;
                            p = v,
                            v = p.parentNode
                        }
                        p = m
                    }
                    n = i === -1 || l === -1 ? null : {
                        start: i,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Qc = {
        focusedElem: e,
        selectionRange: n
    },
    Ci = !1,
    z = t; z !== null; )
        if (t = z,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            z = e;
        else
            for (; z !== null; ) {
                t = z;
                try {
                    var b = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (b !== null) {
                                var g = b.memoizedProps
                                  , w = b.memoizedState
                                  , y = t.stateNode
                                  , h = y.getSnapshotBeforeUpdate(t.elementType === t.type ? g : Qt(t.type, g), w);
                                y.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var x = t.stateNode.containerInfo;
                            x.nodeType === 1 ? x.textContent = "" : x.nodeType === 9 && x.documentElement && x.removeChild(x.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(F(163))
                        }
                } catch (S) {
                    Te(t, t.return, S)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    z = e;
                    break
                }
                z = t.return
            }
    return b = sp,
    sp = !1,
    b
}
function _s(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var s = o.destroy;
                o.destroy = void 0,
                s !== void 0 && cu(t, n, s)
            }
            o = o.next
        } while (o !== r)
    }
}
function cl(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function uu(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function b0(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    b0(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[gn],
    delete t[Xs],
    delete t[qc],
    delete t[L1],
    delete t[z1])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function S0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function ap(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || S0(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function du(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Ti));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (du(e, t, n),
        e = e.sibling; e !== null; )
            du(e, t, n),
            e = e.sibling
}
function fu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (fu(e, t, n),
        e = e.sibling; e !== null; )
            fu(e, t, n),
            e = e.sibling
}
var Ue = null
  , Xt = !1;
function Qn(e, t, n) {
    for (n = n.child; n !== null; )
        E0(e, t, n),
        n = n.sibling
}
function E0(e, t, n) {
    if (xn && typeof xn.onCommitFiberUnmount == "function")
        try {
            xn.onCommitFiberUnmount(tl, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Je || So(n, t);
    case 6:
        var r = Ue
          , o = Xt;
        Ue = null,
        Qn(e, t, n),
        Ue = r,
        Xt = o,
        Ue !== null && (Xt ? (e = Ue,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ue.removeChild(n.stateNode));
        break;
    case 18:
        Ue !== null && (Xt ? (e = Ue,
        n = n.stateNode,
        e.nodeType === 8 ? Jl(e.parentNode, n) : e.nodeType === 1 && Jl(e, n),
        Ys(e)) : Jl(Ue, n.stateNode));
        break;
    case 4:
        r = Ue,
        o = Xt,
        Ue = n.stateNode.containerInfo,
        Xt = !0,
        Qn(e, t, n),
        Ue = r,
        Xt = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Je && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var s = o
                  , a = s.destroy;
                s = s.tag,
                a !== void 0 && (s & 2 || s & 4) && cu(n, t, a),
                o = o.next
            } while (o !== r)
        }
        Qn(e, t, n);
        break;
    case 1:
        if (!Je && (So(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (i) {
                Te(n, t, i)
            }
        Qn(e, t, n);
        break;
    case 21:
        Qn(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Je = (r = Je) || n.memoizedState !== null,
        Qn(e, t, n),
        Je = r) : Qn(e, t, n);
        break;
    default:
        Qn(e, t, n)
    }
}
function ip(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new tw),
        t.forEach(function(r) {
            var o = dw.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function Wt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var s = e
                  , a = t
                  , i = a;
                e: for (; i !== null; ) {
                    switch (i.tag) {
                    case 5:
                        Ue = i.stateNode,
                        Xt = !1;
                        break e;
                    case 3:
                        Ue = i.stateNode.containerInfo,
                        Xt = !0;
                        break e;
                    case 4:
                        Ue = i.stateNode.containerInfo,
                        Xt = !0;
                        break e
                    }
                    i = i.return
                }
                if (Ue === null)
                    throw Error(F(160));
                E0(s, a, o),
                Ue = null,
                Xt = !1;
                var l = o.alternate;
                l !== null && (l.return = null),
                o.return = null
            } catch (u) {
                Te(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            C0(t, e),
            t = t.sibling
}
function C0(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Wt(t, e),
        dn(e),
        r & 4) {
            try {
                _s(3, e, e.return),
                cl(3, e)
            } catch (g) {
                Te(e, e.return, g)
            }
            try {
                _s(5, e, e.return)
            } catch (g) {
                Te(e, e.return, g)
            }
        }
        break;
    case 1:
        Wt(t, e),
        dn(e),
        r & 512 && n !== null && So(n, n.return);
        break;
    case 5:
        if (Wt(t, e),
        dn(e),
        r & 512 && n !== null && So(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                Us(o, "")
            } catch (g) {
                Te(e, e.return, g)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var s = e.memoizedProps
              , a = n !== null ? n.memoizedProps : s
              , i = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    i === "input" && s.type === "radio" && s.name != null && Ym(o, s),
                    Ic(i, a);
                    var u = Ic(i, s);
                    for (a = 0; a < l.length; a += 2) {
                        var d = l[a]
                          , p = l[a + 1];
                        d === "style" ? Xm(o, p) : d === "dangerouslySetInnerHTML" ? Gm(o, p) : d === "children" ? Us(o, p) : Qu(o, d, p, u)
                    }
                    switch (i) {
                    case "input":
                        Ac(o, s);
                        break;
                    case "textarea":
                        Qm(o, s);
                        break;
                    case "select":
                        var v = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!s.multiple;
                        var m = s.value;
                        m != null ? Co(o, !!s.multiple, m, !1) : v !== !!s.multiple && (s.defaultValue != null ? Co(o, !!s.multiple, s.defaultValue, !0) : Co(o, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    o[Xs] = s
                } catch (g) {
                    Te(e, e.return, g)
                }
        }
        break;
    case 6:
        if (Wt(t, e),
        dn(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(F(162));
            o = e.stateNode,
            s = e.memoizedProps;
            try {
                o.nodeValue = s
            } catch (g) {
                Te(e, e.return, g)
            }
        }
        break;
    case 3:
        if (Wt(t, e),
        dn(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Ys(t.containerInfo)
            } catch (g) {
                Te(e, e.return, g)
            }
        break;
    case 4:
        Wt(t, e),
        dn(e);
        break;
    case 13:
        Wt(t, e),
        dn(e),
        o = e.child,
        o.flags & 8192 && (s = o.memoizedState !== null,
        o.stateNode.isHidden = s,
        !s || o.alternate !== null && o.alternate.memoizedState !== null || (Nd = Pe())),
        r & 4 && ip(e);
        break;
    case 22:
        if (d = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Je = (u = Je) || d,
        Wt(t, e),
        Je = u) : Wt(t, e),
        dn(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !d && e.mode & 1)
                for (z = e,
                d = e.child; d !== null; ) {
                    for (p = z = d; z !== null; ) {
                        switch (v = z,
                        m = v.child,
                        v.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            _s(4, v, v.return);
                            break;
                        case 1:
                            So(v, v.return);
                            var b = v.stateNode;
                            if (typeof b.componentWillUnmount == "function") {
                                r = v,
                                n = v.return;
                                try {
                                    t = r,
                                    b.props = t.memoizedProps,
                                    b.state = t.memoizedState,
                                    b.componentWillUnmount()
                                } catch (g) {
                                    Te(r, n, g)
                                }
                            }
                            break;
                        case 5:
                            So(v, v.return);
                            break;
                        case 22:
                            if (v.memoizedState !== null) {
                                cp(p);
                                continue
                            }
                        }
                        m !== null ? (m.return = v,
                        z = m) : cp(p)
                    }
                    d = d.sibling
                }
            e: for (d = null,
            p = e; ; ) {
                if (p.tag === 5) {
                    if (d === null) {
                        d = p;
                        try {
                            o = p.stateNode,
                            u ? (s = o.style,
                            typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (i = p.stateNode,
                            l = p.memoizedProps.style,
                            a = l != null && l.hasOwnProperty("display") ? l.display : null,
                            i.style.display = qm("display", a))
                        } catch (g) {
                            Te(e, e.return, g)
                        }
                    }
                } else if (p.tag === 6) {
                    if (d === null)
                        try {
                            p.stateNode.nodeValue = u ? "" : p.memoizedProps
                        } catch (g) {
                            Te(e, e.return, g)
                        }
                } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
                    p.child.return = p,
                    p = p.child;
                    continue
                }
                if (p === e)
                    break e;
                for (; p.sibling === null; ) {
                    if (p.return === null || p.return === e)
                        break e;
                    d === p && (d = null),
                    p = p.return
                }
                d === p && (d = null),
                p.sibling.return = p.return,
                p = p.sibling
            }
        }
        break;
    case 19:
        Wt(t, e),
        dn(e),
        r & 4 && ip(e);
        break;
    case 21:
        break;
    default:
        Wt(t, e),
        dn(e)
    }
}
function dn(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (S0(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(F(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (Us(o, ""),
                r.flags &= -33);
                var s = ap(e);
                fu(e, s, o);
                break;
            case 3:
            case 4:
                var a = r.stateNode.containerInfo
                  , i = ap(e);
                du(e, i, a);
                break;
            default:
                throw Error(F(161))
            }
        } catch (l) {
            Te(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function rw(e, t, n) {
    z = e,
    k0(e)
}
function k0(e, t, n) {
    for (var r = (e.mode & 1) !== 0; z !== null; ) {
        var o = z
          , s = o.child;
        if (o.tag === 22 && r) {
            var a = o.memoizedState !== null || $a;
            if (!a) {
                var i = o.alternate
                  , l = i !== null && i.memoizedState !== null || Je;
                i = $a;
                var u = Je;
                if ($a = a,
                (Je = l) && !u)
                    for (z = o; z !== null; )
                        a = z,
                        l = a.child,
                        a.tag === 22 && a.memoizedState !== null ? up(o) : l !== null ? (l.return = a,
                        z = l) : up(o);
                for (; s !== null; )
                    z = s,
                    k0(s),
                    s = s.sibling;
                z = o,
                $a = i,
                Je = u
            }
            lp(e)
        } else
            o.subtreeFlags & 8772 && s !== null ? (s.return = o,
            z = s) : lp(e)
    }
}
function lp(e) {
    for (; z !== null; ) {
        var t = z;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Je || cl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Je)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : Qt(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = t.updateQueue;
                        s !== null && Yf(t, s, r);
                        break;
                    case 3:
                        var a = t.updateQueue;
                        if (a !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Yf(t, a, n)
                        }
                        break;
                    case 5:
                        var i = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = i;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
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
                            var u = t.alternate;
                            if (u !== null) {
                                var d = u.memoizedState;
                                if (d !== null) {
                                    var p = d.dehydrated;
                                    p !== null && Ys(p)
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
                        throw Error(F(163))
                    }
                Je || t.flags & 512 && uu(t)
            } catch (v) {
                Te(t, t.return, v)
            }
        }
        if (t === e) {
            z = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            z = n;
            break
        }
        z = t.return
    }
}
function cp(e) {
    for (; z !== null; ) {
        var t = z;
        if (t === e) {
            z = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            z = n;
            break
        }
        z = t.return
    }
}
function up(e) {
    for (; z !== null; ) {
        var t = z;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    cl(4, t)
                } catch (l) {
                    Te(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        Te(t, o, l)
                    }
                }
                var s = t.return;
                try {
                    uu(t)
                } catch (l) {
                    Te(t, s, l)
                }
                break;
            case 5:
                var a = t.return;
                try {
                    uu(t)
                } catch (l) {
                    Te(t, a, l)
                }
            }
        } catch (l) {
            Te(t, t.return, l)
        }
        if (t === e) {
            z = null;
            break
        }
        var i = t.sibling;
        if (i !== null) {
            i.return = t.return,
            z = i;
            break
        }
        z = t.return
    }
}
var ow = Math.ceil
  , Li = Wn.ReactCurrentDispatcher
  , Cd = Wn.ReactCurrentOwner
  , $t = Wn.ReactCurrentBatchConfig
  , ie = 0
  , Le = null
  , Ae = null
  , Ve = 0
  , kt = 0
  , Eo = Er(0)
  , Oe = 0
  , ra = null
  , Kr = 0
  , ul = 0
  , kd = 0
  , Ls = null
  , vt = null
  , Nd = 0
  , Go = 1 / 0
  , Fn = null
  , zi = !1
  , pu = null
  , hr = null
  , Ba = !1
  , lr = null
  , $i = 0
  , zs = 0
  , mu = null
  , ui = -1
  , di = 0;
function it() {
    return ie & 6 ? Pe() : ui !== -1 ? ui : ui = Pe()
}
function gr(e) {
    return e.mode & 1 ? ie & 2 && Ve !== 0 ? Ve & -Ve : B1.transition !== null ? (di === 0 && (di = ch()),
    di) : (e = ue,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : gh(e.type)),
    e) : 1
}
function en(e, t, n, r) {
    if (50 < zs)
        throw zs = 0,
        mu = null,
        Error(F(185));
    da(e, n, r),
    (!(ie & 2) || e !== Le) && (e === Le && (!(ie & 2) && (ul |= n),
    Oe === 4 && tr(e, Ve)),
    bt(e, r),
    n === 1 && ie === 0 && !(t.mode & 1) && (Go = Pe() + 500,
    al && Cr()))
}
function bt(e, t) {
    var n = e.callbackNode;
    Bx(e, t);
    var r = Ei(e, e === Le ? Ve : 0);
    if (r === 0)
        n !== null && xf(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && xf(n),
        t === 1)
            e.tag === 0 ? $1(dp.bind(null, e)) : Dh(dp.bind(null, e)),
            I1(function() {
                !(ie & 6) && Cr()
            }),
            n = null;
        else {
            switch (uh(r)) {
            case 1:
                n = Zu;
                break;
            case 4:
                n = ih;
                break;
            case 16:
                n = Si;
                break;
            case 536870912:
                n = lh;
                break;
            default:
                n = Si
            }
            n = M0(n, N0.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function N0(e, t) {
    if (ui = -1,
    di = 0,
    ie & 6)
        throw Error(F(327));
    var n = e.callbackNode;
    if (Po() && e.callbackNode !== n)
        return null;
    var r = Ei(e, e === Le ? Ve : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Bi(e, r);
    else {
        t = r;
        var o = ie;
        ie |= 2;
        var s = j0();
        (Le !== e || Ve !== t) && (Fn = null,
        Go = Pe() + 500,
        Vr(e, t));
        do
            try {
                iw();
                break
            } catch (i) {
                T0(e, i)
            }
        while (!0);
        dd(),
        Li.current = s,
        ie = o,
        Ae !== null ? t = 0 : (Le = null,
        Ve = 0,
        t = Oe)
    }
    if (t !== 0) {
        if (t === 2 && (o = Bc(e),
        o !== 0 && (r = o,
        t = hu(e, o))),
        t === 1)
            throw n = ra,
            Vr(e, 0),
            tr(e, r),
            bt(e, Pe()),
            n;
        if (t === 6)
            tr(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !sw(o) && (t = Bi(e, r),
            t === 2 && (s = Bc(e),
            s !== 0 && (r = s,
            t = hu(e, s))),
            t === 1))
                throw n = ra,
                Vr(e, 0),
                tr(e, r),
                bt(e, Pe()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(F(345));
            case 2:
                Mr(e, vt, Fn);
                break;
            case 3:
                if (tr(e, r),
                (r & 130023424) === r && (t = Nd + 500 - Pe(),
                10 < t)) {
                    if (Ei(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        it(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = Gc(Mr.bind(null, e, vt, Fn), t);
                    break
                }
                Mr(e, vt, Fn);
                break;
            case 4:
                if (tr(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var a = 31 - Jt(r);
                    s = 1 << a,
                    a = t[a],
                    a > o && (o = a),
                    r &= ~s
                }
                if (r = o,
                r = Pe() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ow(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Gc(Mr.bind(null, e, vt, Fn), r);
                    break
                }
                Mr(e, vt, Fn);
                break;
            case 5:
                Mr(e, vt, Fn);
                break;
            default:
                throw Error(F(329))
            }
        }
    }
    return bt(e, Pe()),
    e.callbackNode === n ? N0.bind(null, e) : null
}
function hu(e, t) {
    var n = Ls;
    return e.current.memoizedState.isDehydrated && (Vr(e, t).flags |= 256),
    e = Bi(e, t),
    e !== 2 && (t = vt,
    vt = n,
    t !== null && gu(t)),
    e
}
function gu(e) {
    vt === null ? vt = e : vt.push.apply(vt, e)
}
function sw(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , s = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!tn(s(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function tr(e, t) {
    for (t &= ~kd,
    t &= ~ul,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Jt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function dp(e) {
    if (ie & 6)
        throw Error(F(327));
    Po();
    var t = Ei(e, 0);
    if (!(t & 1))
        return bt(e, Pe()),
        null;
    var n = Bi(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Bc(e);
        r !== 0 && (t = r,
        n = hu(e, r))
    }
    if (n === 1)
        throw n = ra,
        Vr(e, 0),
        tr(e, t),
        bt(e, Pe()),
        n;
    if (n === 6)
        throw Error(F(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Mr(e, vt, Fn),
    bt(e, Pe()),
    null
}
function Td(e, t) {
    var n = ie;
    ie |= 1;
    try {
        return e(t)
    } finally {
        ie = n,
        ie === 0 && (Go = Pe() + 500,
        al && Cr())
    }
}
function Gr(e) {
    lr !== null && lr.tag === 0 && !(ie & 6) && Po();
    var t = ie;
    ie |= 1;
    var n = $t.transition
      , r = ue;
    try {
        if ($t.transition = null,
        ue = 1,
        e)
            return e()
    } finally {
        ue = r,
        $t.transition = n,
        ie = t,
        !(ie & 6) && Cr()
    }
}
function jd() {
    kt = Eo.current,
    xe(Eo)
}
function Vr(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    D1(n)),
    Ae !== null)
        for (n = Ae.return; n !== null; ) {
            var r = n;
            switch (ld(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && ji();
                break;
            case 3:
                Qo(),
                xe(xt),
                xe(et),
                vd();
                break;
            case 5:
                gd(r);
                break;
            case 4:
                Qo();
                break;
            case 13:
                xe(Se);
                break;
            case 19:
                xe(Se);
                break;
            case 10:
                fd(r.type._context);
                break;
            case 22:
            case 23:
                jd()
            }
            n = n.return
        }
    if (Le = e,
    Ae = e = vr(e.current, null),
    Ve = kt = t,
    Oe = 0,
    ra = null,
    kd = ul = Kr = 0,
    vt = Ls = null,
    Dr !== null) {
        for (t = 0; t < Dr.length; t++)
            if (n = Dr[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , s = n.pending;
                if (s !== null) {
                    var a = s.next;
                    s.next = o,
                    r.next = a
                }
                n.pending = r
            }
        Dr = null
    }
    return e
}
function T0(e, t) {
    do {
        var n = Ae;
        try {
            if (dd(),
            ii.current = _i,
            Ii) {
                for (var r = Ee.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                Ii = !1
            }
            if (Qr = 0,
            _e = Me = Ee = null,
            Is = !1,
            ea = 0,
            Cd.current = null,
            n === null || n.return === null) {
                Oe = 1,
                ra = t,
                Ae = null;
                break
            }
            e: {
                var s = e
                  , a = n.return
                  , i = n
                  , l = t;
                if (t = Ve,
                i.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , d = i
                      , p = d.tag;
                    if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
                        var v = d.alternate;
                        v ? (d.updateQueue = v.updateQueue,
                        d.memoizedState = v.memoizedState,
                        d.lanes = v.lanes) : (d.updateQueue = null,
                        d.memoizedState = null)
                    }
                    var m = Zf(a);
                    if (m !== null) {
                        m.flags &= -257,
                        Jf(m, a, i, s, t),
                        m.mode & 1 && Xf(s, u, t),
                        t = m,
                        l = u;
                        var b = t.updateQueue;
                        if (b === null) {
                            var g = new Set;
                            g.add(l),
                            t.updateQueue = g
                        } else
                            b.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Xf(s, u, t),
                            Pd();
                            break e
                        }
                        l = Error(F(426))
                    }
                } else if (be && i.mode & 1) {
                    var w = Zf(a);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256),
                        Jf(w, a, i, s, t),
                        cd(Ko(l, i));
                        break e
                    }
                }
                s = l = Ko(l, i),
                Oe !== 4 && (Oe = 2),
                Ls === null ? Ls = [s] : Ls.push(s),
                s = a;
                do {
                    switch (s.tag) {
                    case 3:
                        s.flags |= 65536,
                        t &= -t,
                        s.lanes |= t;
                        var y = u0(s, l, t);
                        Hf(s, y);
                        break e;
                    case 1:
                        i = l;
                        var h = s.type
                          , x = s.stateNode;
                        if (!(s.flags & 128) && (typeof h.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (hr === null || !hr.has(x)))) {
                            s.flags |= 65536,
                            t &= -t,
                            s.lanes |= t;
                            var S = d0(s, i, t);
                            Hf(s, S);
                            break e
                        }
                    }
                    s = s.return
                } while (s !== null)
            }
            R0(n)
        } catch (E) {
            t = E,
            Ae === n && n !== null && (Ae = n = n.return);
            continue
        }
        break
    } while (!0)
}
function j0() {
    var e = Li.current;
    return Li.current = _i,
    e === null ? _i : e
}
function Pd() {
    (Oe === 0 || Oe === 3 || Oe === 2) && (Oe = 4),
    Le === null || !(Kr & 268435455) && !(ul & 268435455) || tr(Le, Ve)
}
function Bi(e, t) {
    var n = ie;
    ie |= 2;
    var r = j0();
    (Le !== e || Ve !== t) && (Fn = null,
    Vr(e, t));
    do
        try {
            aw();
            break
        } catch (o) {
            T0(e, o)
        }
    while (!0);
    if (dd(),
    ie = n,
    Li.current = r,
    Ae !== null)
        throw Error(F(261));
    return Le = null,
    Ve = 0,
    Oe
}
function aw() {
    for (; Ae !== null; )
        P0(Ae)
}
function iw() {
    for (; Ae !== null && !Fx(); )
        P0(Ae)
}
function P0(e) {
    var t = F0(e.alternate, e, kt);
    e.memoizedProps = e.pendingProps,
    t === null ? R0(e) : Ae = t,
    Cd.current = null
}
function R0(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = ew(n, t),
            n !== null) {
                n.flags &= 32767,
                Ae = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                Oe = 6,
                Ae = null;
                return
            }
        } else if (n = J1(n, t, kt),
        n !== null) {
            Ae = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            Ae = t;
            return
        }
        Ae = t = e
    } while (t !== null);
    Oe === 0 && (Oe = 5)
}
function Mr(e, t, n) {
    var r = ue
      , o = $t.transition;
    try {
        $t.transition = null,
        ue = 1,
        lw(e, t, n, r)
    } finally {
        $t.transition = o,
        ue = r
    }
    return null
}
function lw(e, t, n, r) {
    do
        Po();
    while (lr !== null);
    if (ie & 6)
        throw Error(F(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(F(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (Ux(e, s),
    e === Le && (Ae = Le = null,
    Ve = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ba || (Ba = !0,
    M0(Si, function() {
        return Po(),
        null
    })),
    s = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || s) {
        s = $t.transition,
        $t.transition = null;
        var a = ue;
        ue = 1;
        var i = ie;
        ie |= 4,
        Cd.current = null,
        nw(e, n),
        C0(n, e),
        j1(Qc),
        Ci = !!Yc,
        Qc = Yc = null,
        e.current = n,
        rw(n),
        Mx(),
        ie = i,
        ue = a,
        $t.transition = s
    } else
        e.current = n;
    if (Ba && (Ba = !1,
    lr = e,
    $i = o),
    s = e.pendingLanes,
    s === 0 && (hr = null),
    Ix(n.stateNode),
    bt(e, Pe()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (zi)
        throw zi = !1,
        e = pu,
        pu = null,
        e;
    return $i & 1 && e.tag !== 0 && Po(),
    s = e.pendingLanes,
    s & 1 ? e === mu ? zs++ : (zs = 0,
    mu = e) : zs = 0,
    Cr(),
    null
}
function Po() {
    if (lr !== null) {
        var e = uh($i)
          , t = $t.transition
          , n = ue;
        try {
            if ($t.transition = null,
            ue = 16 > e ? 16 : e,
            lr === null)
                var r = !1;
            else {
                if (e = lr,
                lr = null,
                $i = 0,
                ie & 6)
                    throw Error(F(331));
                var o = ie;
                for (ie |= 4,
                z = e.current; z !== null; ) {
                    var s = z
                      , a = s.child;
                    if (z.flags & 16) {
                        var i = s.deletions;
                        if (i !== null) {
                            for (var l = 0; l < i.length; l++) {
                                var u = i[l];
                                for (z = u; z !== null; ) {
                                    var d = z;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        _s(8, d, s)
                                    }
                                    var p = d.child;
                                    if (p !== null)
                                        p.return = d,
                                        z = p;
                                    else
                                        for (; z !== null; ) {
                                            d = z;
                                            var v = d.sibling
                                              , m = d.return;
                                            if (b0(d),
                                            d === u) {
                                                z = null;
                                                break
                                            }
                                            if (v !== null) {
                                                v.return = m,
                                                z = v;
                                                break
                                            }
                                            z = m
                                        }
                                }
                            }
                            var b = s.alternate;
                            if (b !== null) {
                                var g = b.child;
                                if (g !== null) {
                                    b.child = null;
                                    do {
                                        var w = g.sibling;
                                        g.sibling = null,
                                        g = w
                                    } while (g !== null)
                                }
                            }
                            z = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && a !== null)
                        a.return = s,
                        z = a;
                    else
                        e: for (; z !== null; ) {
                            if (s = z,
                            s.flags & 2048)
                                switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    _s(9, s, s.return)
                                }
                            var y = s.sibling;
                            if (y !== null) {
                                y.return = s.return,
                                z = y;
                                break e
                            }
                            z = s.return
                        }
                }
                var h = e.current;
                for (z = h; z !== null; ) {
                    a = z;
                    var x = a.child;
                    if (a.subtreeFlags & 2064 && x !== null)
                        x.return = a,
                        z = x;
                    else
                        e: for (a = h; z !== null; ) {
                            if (i = z,
                            i.flags & 2048)
                                try {
                                    switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        cl(9, i)
                                    }
                                } catch (E) {
                                    Te(i, i.return, E)
                                }
                            if (i === a) {
                                z = null;
                                break e
                            }
                            var S = i.sibling;
                            if (S !== null) {
                                S.return = i.return,
                                z = S;
                                break e
                            }
                            z = i.return
                        }
                }
                if (ie = o,
                Cr(),
                xn && typeof xn.onPostCommitFiberRoot == "function")
                    try {
                        xn.onPostCommitFiberRoot(tl, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            ue = n,
            $t.transition = t
        }
    }
    return !1
}
function fp(e, t, n) {
    t = Ko(n, t),
    t = u0(e, t, 1),
    e = mr(e, t, 1),
    t = it(),
    e !== null && (da(e, 1, t),
    bt(e, t))
}
function Te(e, t, n) {
    if (e.tag === 3)
        fp(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                fp(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (hr === null || !hr.has(r))) {
                    e = Ko(n, e),
                    e = d0(t, e, 1),
                    t = mr(t, e, 1),
                    e = it(),
                    t !== null && (da(t, 1, e),
                    bt(t, e));
                    break
                }
            }
            t = t.return
        }
}
function cw(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = it(),
    e.pingedLanes |= e.suspendedLanes & n,
    Le === e && (Ve & n) === n && (Oe === 4 || Oe === 3 && (Ve & 130023424) === Ve && 500 > Pe() - Nd ? Vr(e, 0) : kd |= n),
    bt(e, t)
}
function A0(e, t) {
    t === 0 && (e.mode & 1 ? (t = Aa,
    Aa <<= 1,
    !(Aa & 130023424) && (Aa = 4194304)) : t = 1);
    var n = it();
    e = $n(e, t),
    e !== null && (da(e, t, n),
    bt(e, n))
}
function uw(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    A0(e, n)
}
function dw(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(F(314))
    }
    r !== null && r.delete(t),
    A0(e, n)
}
var F0;
F0 = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || xt.current)
            yt = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return yt = !1,
                Z1(e, t, n);
            yt = !!(e.flags & 131072)
        }
    else
        yt = !1,
        be && t.flags & 1048576 && Ih(t, Ai, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        ci(e, t),
        e = t.pendingProps;
        var o = Wo(t, et.current);
        jo(t, n),
        o = xd(null, t, r, e, o, n);
        var s = wd();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        wt(r) ? (s = !0,
        Pi(t)) : s = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        md(t),
        o.updater = ll,
        t.stateNode = o,
        o._reactInternals = t,
        nu(t, r, e, n),
        t = su(null, t, r, !0, s, n)) : (t.tag = 0,
        be && s && id(t),
        st(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (ci(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = pw(r),
            e = Qt(r, e),
            o) {
            case 0:
                t = ou(null, t, r, e, n);
                break e;
            case 1:
                t = np(null, t, r, e, n);
                break e;
            case 11:
                t = ep(null, t, r, e, n);
                break e;
            case 14:
                t = tp(null, t, r, Qt(r.type, e), n);
                break e
            }
            throw Error(F(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : Qt(r, o),
        ou(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : Qt(r, o),
        np(e, t, r, o, n);
    case 3:
        e: {
            if (h0(t),
            e === null)
                throw Error(F(387));
            r = t.pendingProps,
            s = t.memoizedState,
            o = s.element,
            Uh(e, t),
            Oi(t, r, null, n);
            var a = t.memoizedState;
            if (r = a.element,
            s.isDehydrated)
                if (s = {
                    element: r,
                    isDehydrated: !1,
                    cache: a.cache,
                    pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                    transitions: a.transitions
                },
                t.updateQueue.baseState = s,
                t.memoizedState = s,
                t.flags & 256) {
                    o = Ko(Error(F(423)), t),
                    t = rp(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = Ko(Error(F(424)), t),
                    t = rp(e, t, r, n, o);
                    break e
                } else
                    for (Tt = pr(t.stateNode.containerInfo.firstChild),
                    jt = t,
                    be = !0,
                    Zt = null,
                    n = $h(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Ho(),
                r === o) {
                    t = Bn(e, t, n);
                    break e
                }
                st(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Vh(t),
        e === null && Jc(t),
        r = t.type,
        o = t.pendingProps,
        s = e !== null ? e.memoizedProps : null,
        a = o.children,
        Kc(r, o) ? a = null : s !== null && Kc(r, s) && (t.flags |= 32),
        m0(e, t),
        st(e, t, a, n),
        t.child;
    case 6:
        return e === null && Jc(t),
        null;
    case 13:
        return g0(e, t, n);
    case 4:
        return hd(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Yo(t, null, r, n) : st(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : Qt(r, o),
        ep(e, t, r, o, n);
    case 7:
        return st(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return st(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return st(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            s = t.memoizedProps,
            a = o.value,
            me(Fi, r._currentValue),
            r._currentValue = a,
            s !== null)
                if (tn(s.value, a)) {
                    if (s.children === o.children && !xt.current) {
                        t = Bn(e, t, n);
                        break e
                    }
                } else
                    for (s = t.child,
                    s !== null && (s.return = t); s !== null; ) {
                        var i = s.dependencies;
                        if (i !== null) {
                            a = s.child;
                            for (var l = i.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (s.tag === 1) {
                                        l = _n(-1, n & -n),
                                        l.tag = 2;
                                        var u = s.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var d = u.pending;
                                            d === null ? l.next = l : (l.next = d.next,
                                            d.next = l),
                                            u.pending = l
                                        }
                                    }
                                    s.lanes |= n,
                                    l = s.alternate,
                                    l !== null && (l.lanes |= n),
                                    eu(s.return, n, t),
                                    i.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (s.tag === 10)
                            a = s.type === t.type ? null : s.child;
                        else if (s.tag === 18) {
                            if (a = s.return,
                            a === null)
                                throw Error(F(341));
                            a.lanes |= n,
                            i = a.alternate,
                            i !== null && (i.lanes |= n),
                            eu(a, n, t),
                            a = s.sibling
                        } else
                            a = s.child;
                        if (a !== null)
                            a.return = s;
                        else
                            for (a = s; a !== null; ) {
                                if (a === t) {
                                    a = null;
                                    break
                                }
                                if (s = a.sibling,
                                s !== null) {
                                    s.return = a.return,
                                    a = s;
                                    break
                                }
                                a = a.return
                            }
                        s = a
                    }
            st(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        jo(t, n),
        o = Bt(o),
        r = r(o),
        t.flags |= 1,
        st(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = Qt(r, t.pendingProps),
        o = Qt(r.type, o),
        tp(e, t, r, o, n);
    case 15:
        return f0(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : Qt(r, o),
        ci(e, t),
        t.tag = 1,
        wt(r) ? (e = !0,
        Pi(t)) : e = !1,
        jo(t, n),
        c0(t, r, o),
        nu(t, r, o, n),
        su(null, t, r, !0, e, n);
    case 19:
        return v0(e, t, n);
    case 22:
        return p0(e, t, n)
    }
    throw Error(F(156, t.tag))
}
;
function M0(e, t) {
    return ah(e, t)
}
function fw(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function zt(e, t, n, r) {
    return new fw(e,t,n,r)
}
function Rd(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function pw(e) {
    if (typeof e == "function")
        return Rd(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Gu)
            return 11;
        if (e === qu)
            return 14
    }
    return 2
}
function vr(e, t) {
    var n = e.alternate;
    return n === null ? (n = zt(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function fi(e, t, n, r, o, s) {
    var a = 2;
    if (r = e,
    typeof e == "function")
        Rd(e) && (a = 1);
    else if (typeof e == "string")
        a = 5;
    else
        e: switch (e) {
        case po:
            return Wr(n.children, o, s, t);
        case Ku:
            a = 8,
            o |= 8;
            break;
        case Nc:
            return e = zt(12, n, t, o | 2),
            e.elementType = Nc,
            e.lanes = s,
            e;
        case Tc:
            return e = zt(13, n, t, o),
            e.elementType = Tc,
            e.lanes = s,
            e;
        case jc:
            return e = zt(19, n, t, o),
            e.elementType = jc,
            e.lanes = s,
            e;
        case Vm:
            return dl(n, o, s, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Bm:
                    a = 10;
                    break e;
                case Um:
                    a = 9;
                    break e;
                case Gu:
                    a = 11;
                    break e;
                case qu:
                    a = 14;
                    break e;
                case Zn:
                    a = 16,
                    r = null;
                    break e
                }
            throw Error(F(130, e == null ? e : typeof e, ""))
        }
    return t = zt(a, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = s,
    t
}
function Wr(e, t, n, r) {
    return e = zt(7, e, r, t),
    e.lanes = n,
    e
}
function dl(e, t, n, r) {
    return e = zt(22, e, r, t),
    e.elementType = Vm,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function ic(e, t, n) {
    return e = zt(6, e, null, t),
    e.lanes = n,
    e
}
function lc(e, t, n) {
    return t = zt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function mw(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Ul(0),
    this.expirationTimes = Ul(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Ul(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function Ad(e, t, n, r, o, s, a, i, l) {
    return e = new mw(e,t,n,i,l),
    t === 1 ? (t = 1,
    s === !0 && (t |= 8)) : t = 0,
    s = zt(3, null, null, t),
    e.current = s,
    s.stateNode = e,
    s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    md(s),
    e
}
function hw(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: fo,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function O0(e) {
    if (!e)
        return xr;
    e = e._reactInternals;
    e: {
        if (no(e) !== e || e.tag !== 1)
            throw Error(F(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (wt(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(F(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (wt(n))
            return Oh(e, n, t)
    }
    return t
}
function D0(e, t, n, r, o, s, a, i, l) {
    return e = Ad(n, r, !0, e, o, s, a, i, l),
    e.context = O0(null),
    n = e.current,
    r = it(),
    o = gr(n),
    s = _n(r, o),
    s.callback = t ?? null,
    mr(n, s, o),
    e.current.lanes = o,
    da(e, o, r),
    bt(e, r),
    e
}
function fl(e, t, n, r) {
    var o = t.current
      , s = it()
      , a = gr(o);
    return n = O0(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = _n(s, a),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = mr(o, t, a),
    e !== null && (en(e, o, a, s),
    ai(e, o, a)),
    a
}
function Ui(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function pp(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Fd(e, t) {
    pp(e, t),
    (e = e.alternate) && pp(e, t)
}
function gw() {
    return null
}
var I0 = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Md(e) {
    this._internalRoot = e
}
pl.prototype.render = Md.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(F(409));
    fl(e, t, null, null)
}
;
pl.prototype.unmount = Md.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Gr(function() {
            fl(null, e, null, null)
        }),
        t[zn] = null
    }
}
;
function pl(e) {
    this._internalRoot = e
}
pl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = ph();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < er.length && t !== 0 && t < er[n].priority; n++)
            ;
        er.splice(n, 0, e),
        n === 0 && hh(e)
    }
}
;
function Od(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function ml(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function mp() {}
function vw(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = Ui(a);
                s.call(u)
            }
        }
        var a = D0(t, r, e, 0, null, !1, !1, "", mp);
        return e._reactRootContainer = a,
        e[zn] = a.current,
        Gs(e.nodeType === 8 ? e.parentNode : e),
        Gr(),
        a
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var i = r;
        r = function() {
            var u = Ui(l);
            i.call(u)
        }
    }
    var l = Ad(e, 0, !1, null, null, !1, !1, "", mp);
    return e._reactRootContainer = l,
    e[zn] = l.current,
    Gs(e.nodeType === 8 ? e.parentNode : e),
    Gr(function() {
        fl(t, l, n, r)
    }),
    l
}
function hl(e, t, n, r, o) {
    var s = n._reactRootContainer;
    if (s) {
        var a = s;
        if (typeof o == "function") {
            var i = o;
            o = function() {
                var l = Ui(a);
                i.call(l)
            }
        }
        fl(t, a, e, o)
    } else
        a = vw(n, t, e, o, r);
    return Ui(a)
}
dh = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = js(t.pendingLanes);
            n !== 0 && (Ju(t, n | 1),
            bt(t, Pe()),
            !(ie & 6) && (Go = Pe() + 500,
            Cr()))
        }
        break;
    case 13:
        Gr(function() {
            var r = $n(e, 1);
            if (r !== null) {
                var o = it();
                en(r, e, 1, o)
            }
        }),
        Fd(e, 1)
    }
}
;
ed = function(e) {
    if (e.tag === 13) {
        var t = $n(e, 134217728);
        if (t !== null) {
            var n = it();
            en(t, e, 134217728, n)
        }
        Fd(e, 134217728)
    }
}
;
fh = function(e) {
    if (e.tag === 13) {
        var t = gr(e)
          , n = $n(e, t);
        if (n !== null) {
            var r = it();
            en(n, e, t, r)
        }
        Fd(e, t)
    }
}
;
ph = function() {
    return ue
}
;
mh = function(e, t) {
    var n = ue;
    try {
        return ue = e,
        t()
    } finally {
        ue = n
    }
}
;
Lc = function(e, t, n) {
    switch (t) {
    case "input":
        if (Ac(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = sl(r);
                    if (!o)
                        throw Error(F(90));
                    Hm(r),
                    Ac(r, o)
                }
            }
        }
        break;
    case "textarea":
        Qm(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Co(e, !!n.multiple, t, !1)
    }
}
;
eh = Td;
th = Gr;
var yw = {
    usingClientEntryPoint: !1,
    Events: [pa, vo, sl, Zm, Jm, Td]
}
  , ws = {
    findFiberByHostInstance: Or,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , xw = {
    bundleType: ws.bundleType,
    version: ws.version,
    rendererPackageName: ws.rendererPackageName,
    rendererConfig: ws.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Wn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = oh(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: ws.findFiberByHostInstance || gw,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ua = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ua.isDisabled && Ua.supportsFiber)
        try {
            tl = Ua.inject(xw),
            xn = Ua
        } catch {}
}
At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yw;
At.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Od(t))
        throw Error(F(200));
    return hw(e, t, null, n)
}
;
At.createRoot = function(e, t) {
    if (!Od(e))
        throw Error(F(299));
    var n = !1
      , r = ""
      , o = I0;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = Ad(e, 1, !1, null, null, n, !1, r, o),
    e[zn] = t.current,
    Gs(e.nodeType === 8 ? e.parentNode : e),
    new Md(t)
}
;
At.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(F(188)) : (e = Object.keys(e).join(","),
        Error(F(268, e)));
    return e = oh(t),
    e = e === null ? null : e.stateNode,
    e
}
;
At.flushSync = function(e) {
    return Gr(e)
}
;
At.hydrate = function(e, t, n) {
    if (!ml(t))
        throw Error(F(200));
    return hl(null, e, t, !0, n)
}
;
At.hydrateRoot = function(e, t, n) {
    if (!Od(e))
        throw Error(F(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , s = ""
      , a = I0;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    t = D0(t, null, e, 1, n ?? null, o, !1, s, a),
    e[zn] = t.current,
    Gs(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new pl(t)
}
;
At.render = function(e, t, n) {
    if (!ml(t))
        throw Error(F(200));
    return hl(null, e, t, !1, n)
}
;
At.unmountComponentAtNode = function(e) {
    if (!ml(e))
        throw Error(F(40));
    return e._reactRootContainer ? (Gr(function() {
        hl(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[zn] = null
        })
    }),
    !0) : !1
}
;
At.unstable_batchedUpdates = Td;
At.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!ml(n))
        throw Error(F(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(F(38));
    return hl(e, t, n, !1, r)
}
;
At.version = "18.3.1-next-f1338f8080-20240426";
function _0() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_0)
        } catch (e) {
            console.error(e)
        }
}
_0(),
_m.exports = At;
var ro = _m.exports;
const L0 = km(ro);
var z0, hp = ro;
z0 = hp.createRoot,
hp.hydrateRoot;
const ww = 1
  , bw = 1e6;
let cc = 0;
function Sw() {
    return cc = (cc + 1) % Number.MAX_SAFE_INTEGER,
    cc.toString()
}
const uc = new Map
  , gp = e => {
    if (uc.has(e))
        return;
    const t = setTimeout( () => {
        uc.delete(e),
        $s({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , bw);
    uc.set(e, t)
}
  , Ew = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, ww)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? gp(n) : e.toasts.forEach(r => {
                gp(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , pi = [];
let mi = {
    toasts: []
};
function $s(e) {
    mi = Ew(mi, e),
    pi.forEach(t => {
        t(mi)
    }
    )
}
function Cw({...e}) {
    const t = Sw()
      , n = o => $s({
        type: "UPDATE_TOAST",
        toast: {
            ...o,
            id: t
        }
    })
      , r = () => $s({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return $s({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function kw() {
    const [e,t] = f.useState(mi);
    return f.useEffect( () => (pi.push(t),
    () => {
        const n = pi.indexOf(t);
        n > -1 && pi.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: Cw,
        dismiss: n => $s({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function J(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(o) {
        if (e == null || e(o),
        n === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function vp(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function $0(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const s = vp(o, t);
            return !n && typeof s == "function" && (n = !0),
            s
        }
        );
        if (n)
            return () => {
                for (let o = 0; o < r.length; o++) {
                    const s = r[o];
                    typeof s == "function" ? s() : vp(e[o], null)
                }
            }
    }
}
function we(...e) {
    return f.useCallback($0(...e), e)
}
function Nw(e, t) {
    const n = f.createContext(t)
      , r = s => {
        const {children: a, ...i} = s
          , l = f.useMemo( () => i, Object.values(i));
        return c.jsx(n.Provider, {
            value: l,
            children: a
        })
    }
    ;
    r.displayName = e + "Provider";
    function o(s) {
        const a = f.useContext(n);
        if (a)
            return a;
        if (t !== void 0)
            return t;
        throw new Error(`\`${s}\` must be used within \`${e}\``)
    }
    return [r, o]
}
function rs(e, t=[]) {
    let n = [];
    function r(s, a) {
        const i = f.createContext(a)
          , l = n.length;
        n = [...n, a];
        const u = p => {
            var y;
            const {scope: v, children: m, ...b} = p
              , g = ((y = v == null ? void 0 : v[e]) == null ? void 0 : y[l]) || i
              , w = f.useMemo( () => b, Object.values(b));
            return c.jsx(g.Provider, {
                value: w,
                children: m
            })
        }
        ;
        u.displayName = s + "Provider";
        function d(p, v) {
            var g;
            const m = ((g = v == null ? void 0 : v[e]) == null ? void 0 : g[l]) || i
              , b = f.useContext(m);
            if (b)
                return b;
            if (a !== void 0)
                return a;
            throw new Error(`\`${p}\` must be used within \`${s}\``)
        }
        return [u, d]
    }
    const o = () => {
        const s = n.map(a => f.createContext(a));
        return function(i) {
            const l = (i == null ? void 0 : i[e]) || s;
            return f.useMemo( () => ({
                [`__scope${e}`]: {
                    ...i,
                    [e]: l
                }
            }), [i, l])
        }
    }
    ;
    return o.scopeName = e,
    [r, Tw(o, ...t)]
}
function Tw(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(s) {
            const a = r.reduce( (i, {useScope: l, scopeName: u}) => {
                const p = l(s)[`__scope${u}`];
                return {
                    ...i,
                    ...p
                }
            }
            , {});
            return f.useMemo( () => ({
                [`__scope${t.scopeName}`]: a
            }), [a])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function qo(e) {
    const t = Pw(e)
      , n = f.forwardRef( (r, o) => {
        const {children: s, ...a} = r
          , i = f.Children.toArray(s)
          , l = i.find(Aw);
        if (l) {
            const u = l.props.children
              , d = i.map(p => p === l ? f.Children.count(u) > 1 ? f.Children.only(null) : f.isValidElement(u) ? u.props.children : null : p);
            return c.jsx(t, {
                ...a,
                ref: o,
                children: f.isValidElement(u) ? f.cloneElement(u, void 0, d) : null
            })
        }
        return c.jsx(t, {
            ...a,
            ref: o,
            children: s
        })
    }
    );
    return n.displayName = `${e}.Slot`,
    n
}
var jw = qo("Slot");
function Pw(e) {
    const t = f.forwardRef( (n, r) => {
        const {children: o, ...s} = n;
        if (f.isValidElement(o)) {
            const a = Mw(o)
              , i = Fw(s, o.props);
            return o.type !== f.Fragment && (i.ref = r ? $0(r, a) : a),
            f.cloneElement(o, i)
        }
        return f.Children.count(o) > 1 ? f.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
    t
}
var B0 = Symbol("radix.slottable");
function Rw(e) {
    const t = ({children: n}) => c.jsx(c.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`,
    t.__radixId = B0,
    t
}
function Aw(e) {
    return f.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === B0
}
function Fw(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r]
          , s = t[r];
        /^on[A-Z]/.test(r) ? o && s ? n[r] = (...i) => {
            const l = s(...i);
            return o(...i),
            l
        }
        : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...s
        } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function Mw(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function U0(e) {
    const t = e + "CollectionProvider"
      , [n,r] = rs(t)
      , [o,s] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , a = g => {
        const {scope: w, children: y} = g
          , h = O.useRef(null)
          , x = O.useRef(new Map).current;
        return c.jsx(o, {
            scope: w,
            itemMap: x,
            collectionRef: h,
            children: y
        })
    }
    ;
    a.displayName = t;
    const i = e + "CollectionSlot"
      , l = qo(i)
      , u = O.forwardRef( (g, w) => {
        const {scope: y, children: h} = g
          , x = s(i, y)
          , S = we(w, x.collectionRef);
        return c.jsx(l, {
            ref: S,
            children: h
        })
    }
    );
    u.displayName = i;
    const d = e + "CollectionItemSlot"
      , p = "data-radix-collection-item"
      , v = qo(d)
      , m = O.forwardRef( (g, w) => {
        const {scope: y, children: h, ...x} = g
          , S = O.useRef(null)
          , E = we(w, S)
          , k = s(d, y);
        return O.useEffect( () => (k.itemMap.set(S, {
            ref: S,
            ...x
        }),
        () => void k.itemMap.delete(S))),
        c.jsx(v, {
            [p]: "",
            ref: E,
            children: h
        })
    }
    );
    m.displayName = d;
    function b(g) {
        const w = s(e + "CollectionConsumer", g);
        return O.useCallback( () => {
            const h = w.collectionRef.current;
            if (!h)
                return [];
            const x = Array.from(h.querySelectorAll(`[${p}]`));
            return Array.from(w.itemMap.values()).sort( (k, C) => x.indexOf(k.ref.current) - x.indexOf(C.ref.current))
        }
        , [w.collectionRef, w.itemMap])
    }
    return [{
        Provider: a,
        Slot: u,
        ItemSlot: m
    }, b, r]
}
var Ow = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , se = Ow.reduce( (e, t) => {
    const n = qo(`Primitive.${t}`)
      , r = f.forwardRef( (o, s) => {
        const {asChild: a, ...i} = o
          , l = a ? n : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        c.jsx(l, {
            ...i,
            ref: s
        })
    }
    );
    return r.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: r
    }
}
, {});
function V0(e, t) {
    e && ro.flushSync( () => e.dispatchEvent(t))
}
function nn(e) {
    const t = f.useRef(e);
    return f.useEffect( () => {
        t.current = e
    }
    ),
    f.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function Dw(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = nn(e);
    f.useEffect( () => {
        const r = o => {
            o.key === "Escape" && n(o)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var Iw = "DismissableLayer", vu = "dismissableLayer.update", _w = "dismissableLayer.pointerDownOutside", Lw = "dismissableLayer.focusOutside", yp, W0 = f.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), ha = f.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: s, onInteractOutside: a, onDismiss: i, ...l} = e
      , u = f.useContext(W0)
      , [d,p] = f.useState(null)
      , v = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,m] = f.useState({})
      , b = we(t, C => p(C))
      , g = Array.from(u.layers)
      , [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , y = g.indexOf(w)
      , h = d ? g.indexOf(d) : -1
      , x = u.layersWithOutsidePointerEventsDisabled.size > 0
      , S = h >= y
      , E = $w(C => {
        const j = C.target
          , A = [...u.branches].some(M => M.contains(j));
        !S || A || (o == null || o(C),
        a == null || a(C),
        C.defaultPrevented || i == null || i())
    }
    , v)
      , k = Bw(C => {
        const j = C.target;
        [...u.branches].some(M => M.contains(j)) || (s == null || s(C),
        a == null || a(C),
        C.defaultPrevented || i == null || i())
    }
    , v);
    return Dw(C => {
        h === u.layers.size - 1 && (r == null || r(C),
        !C.defaultPrevented && i && (C.preventDefault(),
        i()))
    }
    , v),
    f.useEffect( () => {
        if (d)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (yp = v.body.style.pointerEvents,
            v.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(d)),
            u.layers.add(d),
            xp(),
            () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (v.body.style.pointerEvents = yp)
            }
    }
    , [d, v, n, u]),
    f.useEffect( () => () => {
        d && (u.layers.delete(d),
        u.layersWithOutsidePointerEventsDisabled.delete(d),
        xp())
    }
    , [d, u]),
    f.useEffect( () => {
        const C = () => m({});
        return document.addEventListener(vu, C),
        () => document.removeEventListener(vu, C)
    }
    , []),
    c.jsx(se.div, {
        ...l,
        ref: b,
        style: {
            pointerEvents: x ? S ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: J(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: J(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: J(e.onPointerDownCapture, E.onPointerDownCapture)
    })
}
);
ha.displayName = Iw;
var zw = "DismissableLayerBranch"
  , H0 = f.forwardRef( (e, t) => {
    const n = f.useContext(W0)
      , r = f.useRef(null)
      , o = we(t, r);
    return f.useEffect( () => {
        const s = r.current;
        if (s)
            return n.branches.add(s),
            () => {
                n.branches.delete(s)
            }
    }
    , [n.branches]),
    c.jsx(se.div, {
        ...e,
        ref: o
    })
}
);
H0.displayName = zw;
function $w(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = nn(e)
      , r = f.useRef(!1)
      , o = f.useRef( () => {}
    );
    return f.useEffect( () => {
        const s = i => {
            if (i.target && !r.current) {
                let l = function() {
                    Y0(_w, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: i
                };
                i.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                o.current = l,
                t.addEventListener("click", o.current, {
                    once: !0
                })) : l()
            } else
                t.removeEventListener("click", o.current);
            r.current = !1
        }
          , a = window.setTimeout( () => {
            t.addEventListener("pointerdown", s)
        }
        , 0);
        return () => {
            window.clearTimeout(a),
            t.removeEventListener("pointerdown", s),
            t.removeEventListener("click", o.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function Bw(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = nn(e)
      , r = f.useRef(!1);
    return f.useEffect( () => {
        const o = s => {
            s.target && !r.current && Y0(Lw, n, {
                originalEvent: s
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function xp() {
    const e = new CustomEvent(vu);
    document.dispatchEvent(e)
}
function Y0(e, t, n, {discrete: r}) {
    const o = n.originalEvent.target
      , s = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? V0(o, s) : o.dispatchEvent(s)
}
var Uw = ha
  , Vw = H0
  , He = globalThis != null && globalThis.document ? f.useLayoutEffect : () => {}
  , Ww = "Portal"
  , gl = f.forwardRef( (e, t) => {
    var i;
    const {container: n, ...r} = e
      , [o,s] = f.useState(!1);
    He( () => s(!0), []);
    const a = n || o && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
    return a ? L0.createPortal(c.jsx(se.div, {
        ...r,
        ref: t
    }), a) : null
}
);
gl.displayName = Ww;
function Hw(e, t) {
    return f.useReducer( (n, r) => t[n][r] ?? n, e)
}
var os = e => {
    const {present: t, children: n} = e
      , r = Yw(t)
      , o = typeof n == "function" ? n({
        present: r.isPresent
    }) : f.Children.only(n)
      , s = we(r.ref, Qw(o));
    return typeof n == "function" || r.isPresent ? f.cloneElement(o, {
        ref: s
    }) : null
}
;
os.displayName = "Presence";
function Yw(e) {
    const [t,n] = f.useState()
      , r = f.useRef(null)
      , o = f.useRef(e)
      , s = f.useRef("none")
      , a = e ? "mounted" : "unmounted"
      , [i,l] = Hw(a, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return f.useEffect( () => {
        const u = Va(r.current);
        s.current = i === "mounted" ? u : "none"
    }
    , [i]),
    He( () => {
        const u = r.current
          , d = o.current;
        if (d !== e) {
            const v = s.current
              , m = Va(u);
            e ? l("MOUNT") : m === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(d && v !== m ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, l]),
    He( () => {
        if (t) {
            let u;
            const d = t.ownerDocument.defaultView ?? window
              , p = m => {
                const g = Va(r.current).includes(m.animationName);
                if (m.target === t && g && (l("ANIMATION_END"),
                !o.current)) {
                    const w = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = d.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w)
                    }
                    )
                }
            }
              , v = m => {
                m.target === t && (s.current = Va(r.current))
            }
            ;
            return t.addEventListener("animationstart", v),
            t.addEventListener("animationcancel", p),
            t.addEventListener("animationend", p),
            () => {
                d.clearTimeout(u),
                t.removeEventListener("animationstart", v),
                t.removeEventListener("animationcancel", p),
                t.removeEventListener("animationend", p)
            }
        } else
            l("ANIMATION_END")
    }
    , [t, l]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(i),
        ref: f.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null,
            n(u)
        }
        , [])
    }
}
function Va(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function Qw(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
var Kw = Wu[" useInsertionEffect ".trim().toString()] || He;
function Vi({prop: e, defaultProp: t, onChange: n= () => {}
, caller: r}) {
    const [o,s,a] = Gw({
        defaultProp: t,
        onChange: n
    })
      , i = e !== void 0
      , l = i ? e : o;
    {
        const d = f.useRef(e !== void 0);
        f.useEffect( () => {
            const p = d.current;
            p !== i && console.warn(`${r} is changing from ${p ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            d.current = i
        }
        , [i, r])
    }
    const u = f.useCallback(d => {
        var p;
        if (i) {
            const v = qw(d) ? d(e) : d;
            v !== e && ((p = a.current) == null || p.call(a, v))
        } else
            s(d)
    }
    , [i, e, s, a]);
    return [l, u]
}
function Gw({defaultProp: e, onChange: t}) {
    const [n,r] = f.useState(e)
      , o = f.useRef(n)
      , s = f.useRef(t);
    return Kw( () => {
        s.current = t
    }
    , [t]),
    f.useEffect( () => {
        var a;
        o.current !== n && ((a = s.current) == null || a.call(s, n),
        o.current = n)
    }
    , [n, o]),
    [n, r, s]
}
function qw(e) {
    return typeof e == "function"
}
var Q0 = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , Xw = "VisuallyHidden"
  , vl = f.forwardRef( (e, t) => c.jsx(se.span, {
    ...e,
    ref: t,
    style: {
        ...Q0,
        ...e.style
    }
}));
vl.displayName = Xw;
var Zw = vl
  , Dd = "ToastProvider"
  , [Id,Jw,eb] = U0("Toast")
  , [K0,uN] = rs("Toast", [eb])
  , [tb,yl] = K0(Dd)
  , G0 = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: o="right", swipeThreshold: s=50, children: a} = e
      , [i,l] = f.useState(null)
      , [u,d] = f.useState(0)
      , p = f.useRef(!1)
      , v = f.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Dd}\`. Expected non-empty \`string\`.`),
    c.jsx(Id.Provider, {
        scope: t,
        children: c.jsx(tb, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: o,
            swipeThreshold: s,
            toastCount: u,
            viewport: i,
            onViewportChange: l,
            onToastAdd: f.useCallback( () => d(m => m + 1), []),
            onToastRemove: f.useCallback( () => d(m => m - 1), []),
            isFocusedToastEscapeKeyDownRef: p,
            isClosePausedRef: v,
            children: a
        })
    })
}
;
G0.displayName = Dd;
var q0 = "ToastViewport"
  , nb = ["F8"]
  , yu = "toast.viewportPause"
  , xu = "toast.viewportResume"
  , X0 = f.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=nb, label: o="Notifications ({hotkey})", ...s} = e
      , a = yl(q0, n)
      , i = Jw(n)
      , l = f.useRef(null)
      , u = f.useRef(null)
      , d = f.useRef(null)
      , p = f.useRef(null)
      , v = we(t, p, a.onViewportChange)
      , m = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , b = a.toastCount > 0;
    f.useEffect( () => {
        const w = y => {
            var x;
            r.length !== 0 && r.every(S => y[S] || y.code === S) && ((x = p.current) == null || x.focus())
        }
        ;
        return document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
    }
    , [r]),
    f.useEffect( () => {
        const w = l.current
          , y = p.current;
        if (b && w && y) {
            const h = () => {
                if (!a.isClosePausedRef.current) {
                    const k = new CustomEvent(yu);
                    y.dispatchEvent(k),
                    a.isClosePausedRef.current = !0
                }
            }
              , x = () => {
                if (a.isClosePausedRef.current) {
                    const k = new CustomEvent(xu);
                    y.dispatchEvent(k),
                    a.isClosePausedRef.current = !1
                }
            }
              , S = k => {
                !w.contains(k.relatedTarget) && x()
            }
              , E = () => {
                w.contains(document.activeElement) || x()
            }
            ;
            return w.addEventListener("focusin", h),
            w.addEventListener("focusout", S),
            w.addEventListener("pointermove", h),
            w.addEventListener("pointerleave", E),
            window.addEventListener("blur", h),
            window.addEventListener("focus", x),
            () => {
                w.removeEventListener("focusin", h),
                w.removeEventListener("focusout", S),
                w.removeEventListener("pointermove", h),
                w.removeEventListener("pointerleave", E),
                window.removeEventListener("blur", h),
                window.removeEventListener("focus", x)
            }
        }
    }
    , [b, a.isClosePausedRef]);
    const g = f.useCallback( ({tabbingDirection: w}) => {
        const h = i().map(x => {
            const S = x.ref.current
              , E = [S, ...hb(S)];
            return w === "forwards" ? E : E.reverse()
        }
        );
        return (w === "forwards" ? h.reverse() : h).flat()
    }
    , [i]);
    return f.useEffect( () => {
        const w = p.current;
        if (w) {
            const y = h => {
                var E, k, C;
                const x = h.altKey || h.ctrlKey || h.metaKey;
                if (h.key === "Tab" && !x) {
                    const j = document.activeElement
                      , A = h.shiftKey;
                    if (h.target === w && A) {
                        (E = u.current) == null || E.focus();
                        return
                    }
                    const D = g({
                        tabbingDirection: A ? "backwards" : "forwards"
                    })
                      , V = D.findIndex(P => P === j);
                    dc(D.slice(V + 1)) ? h.preventDefault() : A ? (k = u.current) == null || k.focus() : (C = d.current) == null || C.focus()
                }
            }
            ;
            return w.addEventListener("keydown", y),
            () => w.removeEventListener("keydown", y)
        }
    }
    , [i, g]),
    c.jsxs(Vw, {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", m),
        tabIndex: -1,
        style: {
            pointerEvents: b ? void 0 : "none"
        },
        children: [b && c.jsx(wu, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const w = g({
                    tabbingDirection: "forwards"
                });
                dc(w)
            }
        }), c.jsx(Id.Slot, {
            scope: n,
            children: c.jsx(se.ol, {
                tabIndex: -1,
                ...s,
                ref: v
            })
        }), b && c.jsx(wu, {
            ref: d,
            onFocusFromOutsideViewport: () => {
                const w = g({
                    tabbingDirection: "backwards"
                });
                dc(w)
            }
        })]
    })
}
);
X0.displayName = q0;
var Z0 = "ToastFocusProxy"
  , wu = f.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...o} = e
      , s = yl(Z0, n);
    return c.jsx(vl, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: a => {
            var u;
            const i = a.relatedTarget;
            !((u = s.viewport) != null && u.contains(i)) && r()
        }
    })
}
);
wu.displayName = Z0;
var ga = "Toast"
  , rb = "toast.swipeStart"
  , ob = "toast.swipeMove"
  , sb = "toast.swipeCancel"
  , ab = "toast.swipeEnd"
  , J0 = f.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: o, onOpenChange: s, ...a} = e
      , [i,l] = Vi({
        prop: r,
        defaultProp: o ?? !0,
        onChange: s,
        caller: ga
    });
    return c.jsx(os, {
        present: n || i,
        children: c.jsx(cb, {
            open: i,
            ...a,
            ref: t,
            onClose: () => l(!1),
            onPause: nn(e.onPause),
            onResume: nn(e.onResume),
            onSwipeStart: J(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: J(e.onSwipeMove, u => {
                const {x: d, y: p} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${p}px`)
            }
            ),
            onSwipeCancel: J(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: J(e.onSwipeEnd, u => {
                const {x: d, y: p} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${p}px`),
                l(!1)
            }
            )
        })
    })
}
);
J0.displayName = ga;
var [ib,lb] = K0(ga, {
    onClose() {}
})
  , cb = f.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: o, open: s, onClose: a, onEscapeKeyDown: i, onPause: l, onResume: u, onSwipeStart: d, onSwipeMove: p, onSwipeCancel: v, onSwipeEnd: m, ...b} = e
      , g = yl(ga, n)
      , [w,y] = f.useState(null)
      , h = we(t, P => y(P))
      , x = f.useRef(null)
      , S = f.useRef(null)
      , E = o || g.duration
      , k = f.useRef(0)
      , C = f.useRef(E)
      , j = f.useRef(0)
      , {onToastAdd: A, onToastRemove: M} = g
      , $ = nn( () => {
        var H;
        (w == null ? void 0 : w.contains(document.activeElement)) && ((H = g.viewport) == null || H.focus()),
        a()
    }
    )
      , D = f.useCallback(P => {
        !P || P === 1 / 0 || (window.clearTimeout(j.current),
        k.current = new Date().getTime(),
        j.current = window.setTimeout($, P))
    }
    , [$]);
    f.useEffect( () => {
        const P = g.viewport;
        if (P) {
            const H = () => {
                D(C.current),
                u == null || u()
            }
              , L = () => {
                const U = new Date().getTime() - k.current;
                C.current = C.current - U,
                window.clearTimeout(j.current),
                l == null || l()
            }
            ;
            return P.addEventListener(yu, L),
            P.addEventListener(xu, H),
            () => {
                P.removeEventListener(yu, L),
                P.removeEventListener(xu, H)
            }
        }
    }
    , [g.viewport, E, l, u, D]),
    f.useEffect( () => {
        s && !g.isClosePausedRef.current && D(E)
    }
    , [s, E, g.isClosePausedRef, D]),
    f.useEffect( () => (A(),
    () => M()), [A, M]);
    const V = f.useMemo( () => w ? ag(w) : null, [w]);
    return g.viewport ? c.jsxs(c.Fragment, {
        children: [V && c.jsx(ub, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: V
        }), c.jsx(ib, {
            scope: n,
            onClose: $,
            children: ro.createPortal(c.jsx(Id.ItemSlot, {
                scope: n,
                children: c.jsx(Uw, {
                    asChild: !0,
                    onEscapeKeyDown: J(i, () => {
                        g.isFocusedToastEscapeKeyDownRef.current || $(),
                        g.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: c.jsx(se.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": s ? "open" : "closed",
                        "data-swipe-direction": g.swipeDirection,
                        ...b,
                        ref: h,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: J(e.onKeyDown, P => {
                            P.key === "Escape" && (i == null || i(P.nativeEvent),
                            P.nativeEvent.defaultPrevented || (g.isFocusedToastEscapeKeyDownRef.current = !0,
                            $()))
                        }
                        ),
                        onPointerDown: J(e.onPointerDown, P => {
                            P.button === 0 && (x.current = {
                                x: P.clientX,
                                y: P.clientY
                            })
                        }
                        ),
                        onPointerMove: J(e.onPointerMove, P => {
                            if (!x.current)
                                return;
                            const H = P.clientX - x.current.x
                              , L = P.clientY - x.current.y
                              , U = !!S.current
                              , N = ["left", "right"].includes(g.swipeDirection)
                              , T = ["left", "up"].includes(g.swipeDirection) ? Math.min : Math.max
                              , I = N ? T(0, H) : 0
                              , Y = N ? 0 : T(0, L)
                              , B = P.pointerType === "touch" ? 10 : 2
                              , q = {
                                x: I,
                                y: Y
                            }
                              , Q = {
                                originalEvent: P,
                                delta: q
                            };
                            U ? (S.current = q,
                            Wa(ob, p, Q, {
                                discrete: !1
                            })) : wp(q, g.swipeDirection, B) ? (S.current = q,
                            Wa(rb, d, Q, {
                                discrete: !1
                            }),
                            P.target.setPointerCapture(P.pointerId)) : (Math.abs(H) > B || Math.abs(L) > B) && (x.current = null)
                        }
                        ),
                        onPointerUp: J(e.onPointerUp, P => {
                            const H = S.current
                              , L = P.target;
                            if (L.hasPointerCapture(P.pointerId) && L.releasePointerCapture(P.pointerId),
                            S.current = null,
                            x.current = null,
                            H) {
                                const U = P.currentTarget
                                  , N = {
                                    originalEvent: P,
                                    delta: H
                                };
                                wp(H, g.swipeDirection, g.swipeThreshold) ? Wa(ab, m, N, {
                                    discrete: !0
                                }) : Wa(sb, v, N, {
                                    discrete: !0
                                }),
                                U.addEventListener("click", T => T.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), g.viewport)
        })]
    }) : null
}
)
  , ub = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , o = yl(ga, t)
      , [s,a] = f.useState(!1)
      , [i,l] = f.useState(!1);
    return pb( () => a(!0)),
    f.useEffect( () => {
        const u = window.setTimeout( () => l(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    i ? null : c.jsx(gl, {
        asChild: !0,
        children: c.jsx(vl, {
            ...r,
            children: s && c.jsxs(c.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}
  , db = "ToastTitle"
  , eg = f.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return c.jsx(se.div, {
        ...r,
        ref: t
    })
}
);
eg.displayName = db;
var fb = "ToastDescription"
  , tg = f.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return c.jsx(se.div, {
        ...r,
        ref: t
    })
}
);
tg.displayName = fb;
var ng = "ToastAction"
  , rg = f.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? c.jsx(sg, {
        altText: n,
        asChild: !0,
        children: c.jsx(_d, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${ng}\`. Expected non-empty \`string\`.`),
    null)
}
);
rg.displayName = ng;
var og = "ToastClose"
  , _d = f.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , o = lb(og, n);
    return c.jsx(sg, {
        asChild: !0,
        children: c.jsx(se.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: J(e.onClick, o.onClose)
        })
    })
}
);
_d.displayName = og;
var sg = f.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...o} = e;
    return c.jsx(se.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
}
);
function ag(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        mb(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none"
              , s = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (s) {
                    const a = r.dataset.radixToastAnnounceAlt;
                    a && t.push(a)
                } else
                    t.push(...ag(r))
        }
    }
    ),
    t
}
function Wa(e, t, n, {discrete: r}) {
    const o = n.originalEvent.currentTarget
      , s = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? V0(o, s) : o.dispatchEvent(s)
}
var wp = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , o = Math.abs(e.y)
      , s = r > o;
    return t === "left" || t === "right" ? s && r > n : !s && o > n
}
;
function pb(e= () => {}
) {
    const t = nn(e);
    He( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function mb(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function hb(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function dc(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var gb = G0
  , ig = X0
  , lg = J0
  , cg = eg
  , ug = tg
  , dg = rg
  , fg = _d;
function pg(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (n = pg(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function mg() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = pg(e)) && (r && (r += " "),
        r += t);
    return r
}
const bp = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , Sp = mg
  , Ld = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return Sp(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: o, defaultVariants: s} = t
      , a = Object.keys(o).map(u => {
        const d = n == null ? void 0 : n[u]
          , p = s == null ? void 0 : s[u];
        if (d === null)
            return null;
        const v = bp(d) || bp(p);
        return o[u][v]
    }
    )
      , i = n && Object.entries(n).reduce( (u, d) => {
        let[p,v] = d;
        return v === void 0 || (u[p] = v),
        u
    }
    , {})
      , l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, d) => {
        let {class: p, className: v, ...m} = d;
        return Object.entries(m).every(b => {
            let[g,w] = b;
            return Array.isArray(w) ? w.includes({
                ...s,
                ...i
            }[g]) : {
                ...s,
                ...i
            }[g] === w
        }
        ) ? [...u, p, v] : u
    }
    , []);
    return Sp(e, a, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vb = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , hg = (...e) => e.filter( (t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var yb = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xb = f.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: o="", children: s, iconNode: a, ...i}, l) => f.createElement("svg", {
    ref: l,
    ...yb,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: hg("lucide", o),
    ...i
}, [...a.map( ([u,d]) => f.createElement(u, d)), ...Array.isArray(s) ? s : [s]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ke = (e, t) => {
    const n = f.forwardRef( ({className: r, ...o}, s) => f.createElement(xb, {
        ref: s,
        iconNode: t,
        className: hg(`lucide-${vb(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wb = ke("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gg = ke("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bb = ke("ChevronLeft", [["path", {
    d: "m15 18-6-6 6-6",
    key: "1wnfg3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sb = ke("ChevronRight", [["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eb = ke("ChevronUp", [["path", {
    d: "m18 15-6-6-6 6",
    key: "153udz"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cb = ke("CircleCheck", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "m9 12 2 2 4-4",
    key: "dzmm74"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kb = ke("CircleDollarSign", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",
    key: "1h4pet"
}], ["path", {
    d: "M12 18V6",
    key: "zqpxq5"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nb = ke("Circle", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tb = ke("Clock", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jb = ke("Coins", [["circle", {
    cx: "8",
    cy: "8",
    r: "6",
    key: "3yglwk"
}], ["path", {
    d: "M18.09 10.37A6 6 0 1 1 10.34 18",
    key: "t5s6rm"
}], ["path", {
    d: "M7 6h1v4",
    key: "1obek4"
}], ["path", {
    d: "m16.71 13.88.7.71-2.82 2.82",
    key: "1rbuyh"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ar = ke("Flame", [["path", {
    d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
    key: "96xj49"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ha = ke("Gift", [["rect", {
    x: "3",
    y: "8",
    width: "18",
    height: "4",
    rx: "1",
    key: "bkv52"
}], ["path", {
    d: "M12 8v13",
    key: "1c76mn"
}], ["path", {
    d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",
    key: "6wjy6b"
}], ["path", {
    d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
    key: "1ihvrl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pb = ke("Plus", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "M12 5v14",
    key: "s699le"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rb = ke("QrCode", [["rect", {
    width: "5",
    height: "5",
    x: "3",
    y: "3",
    rx: "1",
    key: "1tu5fj"
}], ["rect", {
    width: "5",
    height: "5",
    x: "16",
    y: "3",
    rx: "1",
    key: "1v8r4q"
}], ["rect", {
    width: "5",
    height: "5",
    x: "3",
    y: "16",
    rx: "1",
    key: "1x03jg"
}], ["path", {
    d: "M21 16h-3a2 2 0 0 0-2 2v3",
    key: "177gqh"
}], ["path", {
    d: "M21 21v.01",
    key: "ents32"
}], ["path", {
    d: "M12 7v3a2 2 0 0 1-2 2H7",
    key: "8crl2c"
}], ["path", {
    d: "M3 12h.01",
    key: "nlz23k"
}], ["path", {
    d: "M12 3h.01",
    key: "n36tog"
}], ["path", {
    d: "M12 16v.01",
    key: "133mhm"
}], ["path", {
    d: "M16 12h1",
    key: "1slzba"
}], ["path", {
    d: "M21 12v.01",
    key: "1lwtk9"
}], ["path", {
    d: "M12 21v-1",
    key: "1880an"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ab = ke("Shield", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fb = ke("Smartphone", [["rect", {
    width: "14",
    height: "20",
    x: "5",
    y: "2",
    rx: "2",
    ry: "2",
    key: "1yt0o3"
}], ["path", {
    d: "M12 18h.01",
    key: "mhygvu"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fc = ke("Sparkles", [["path", {
    d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
    key: "4pj2yx"
}], ["path", {
    d: "M20 3v4",
    key: "1olli1"
}], ["path", {
    d: "M22 5h-4",
    key: "1gvqau"
}], ["path", {
    d: "M4 17v2",
    key: "vumght"
}], ["path", {
    d: "M5 18H3",
    key: "zchphs"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bs = ke("Target", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "6",
    key: "1vlfrh"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "2",
    key: "1c9p78"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mb = ke("Trophy", [["path", {
    d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6",
    key: "17hqa7"
}], ["path", {
    d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18",
    key: "lmptdp"
}], ["path", {
    d: "M4 22h16",
    key: "57wxv0"
}], ["path", {
    d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
    key: "1nw9bq"
}], ["path", {
    d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
    key: "1np0yb"
}], ["path", {
    d: "M18 2H6v7a6 6 0 0 0 12 0V2Z",
    key: "u46fv3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ep = ke("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ob = ke("Volume2", [["path", {
    d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
    key: "uqj9uw"
}], ["path", {
    d: "M16 9a5 5 0 0 1 0 6",
    key: "1q6k2b"
}], ["path", {
    d: "M19.364 18.364a9 9 0 0 0 0-12.728",
    key: "ijwkga"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vg = ke("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Db = ke("Zap", [["path", {
    d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
    key: "1xq2db"
}]])
  , zd = "-"
  , Ib = e => {
    const t = Lb(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: a => {
            const i = a.split(zd);
            return i[0] === "" && i.length !== 1 && i.shift(),
            yg(i, t) || _b(a)
        }
        ,
        getConflictingClassGroupIds: (a, i) => {
            const l = n[a] || [];
            return i && r[a] ? [...l, ...r[a]] : l
        }
    }
}
  , yg = (e, t) => {
    var a;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , o = r ? yg(e.slice(1), r) : void 0;
    if (o)
        return o;
    if (t.validators.length === 0)
        return;
    const s = e.join(zd);
    return (a = t.validators.find( ({validator: i}) => i(s))) == null ? void 0 : a.classGroupId
}
  , Cp = /^\[(.+)\]$/
  , _b = e => {
    if (Cp.test(e)) {
        const t = Cp.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , Lb = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return $b(Object.entries(e.classGroups), n).forEach( ([s,a]) => {
        bu(a, r, s, t)
    }
    ),
    r
}
  , bu = (e, t, n, r) => {
    e.forEach(o => {
        if (typeof o == "string") {
            const s = o === "" ? t : kp(t, o);
            s.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (zb(o)) {
                bu(o(r), t, n, r);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach( ([s,a]) => {
            bu(a, kp(t, s), n, r)
        }
        )
    }
    )
}
  , kp = (e, t) => {
    let n = e;
    return t.split(zd).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , zb = e => e.isThemeGetter
  , $b = (e, t) => t ? e.map( ([n,r]) => {
    const o = r.map(s => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map( ([a,i]) => [t + a, i])) : s);
    return [n, o]
}
) : e
  , Bb = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const o = (s, a) => {
        n.set(s, a),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(s) {
            let a = n.get(s);
            if (a !== void 0)
                return a;
            if ((a = r.get(s)) !== void 0)
                return o(s, a),
                a
        },
        set(s, a) {
            n.has(s) ? n.set(s, a) : o(s, a)
        }
    }
}
  , xg = "!"
  , Ub = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , o = t[0]
      , s = t.length
      , a = i => {
        const l = [];
        let u = 0, d = 0, p;
        for (let w = 0; w < i.length; w++) {
            let y = i[w];
            if (u === 0) {
                if (y === o && (r || i.slice(w, w + s) === t)) {
                    l.push(i.slice(d, w)),
                    d = w + s;
                    continue
                }
                if (y === "/") {
                    p = w;
                    continue
                }
            }
            y === "[" ? u++ : y === "]" && u--
        }
        const v = l.length === 0 ? i : i.substring(d)
          , m = v.startsWith(xg)
          , b = m ? v.substring(1) : v
          , g = p && p > d ? p - d : void 0;
        return {
            modifiers: l,
            hasImportantModifier: m,
            baseClassName: b,
            maybePostfixModifierPosition: g
        }
    }
    ;
    return n ? i => n({
        className: i,
        parseClassName: a
    }) : a
}
  , Vb = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , Wb = e => ({
    cache: Bb(e.cacheSize),
    parseClassName: Ub(e),
    ...Ib(e)
})
  , Hb = /\s+/
  , Yb = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o} = t
      , s = []
      , a = e.trim().split(Hb);
    let i = "";
    for (let l = a.length - 1; l >= 0; l -= 1) {
        const u = a[l]
          , {modifiers: d, hasImportantModifier: p, baseClassName: v, maybePostfixModifierPosition: m} = n(u);
        let b = !!m
          , g = r(b ? v.substring(0, m) : v);
        if (!g) {
            if (!b) {
                i = u + (i.length > 0 ? " " + i : i);
                continue
            }
            if (g = r(v),
            !g) {
                i = u + (i.length > 0 ? " " + i : i);
                continue
            }
            b = !1
        }
        const w = Vb(d).join(":")
          , y = p ? w + xg : w
          , h = y + g;
        if (s.includes(h))
            continue;
        s.push(h);
        const x = o(g, b);
        for (let S = 0; S < x.length; ++S) {
            const E = x[S];
            s.push(y + E)
        }
        i = u + (i.length > 0 ? " " + i : i)
    }
    return i
}
;
function Qb() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = wg(t)) && (r && (r += " "),
        r += n);
    return r
}
const wg = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = wg(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function Kb(e, ...t) {
    let n, r, o, s = a;
    function a(l) {
        const u = t.reduce( (d, p) => p(d), e());
        return n = Wb(u),
        r = n.cache.get,
        o = n.cache.set,
        s = i,
        i(l)
    }
    function i(l) {
        const u = r(l);
        if (u)
            return u;
        const d = Yb(l, n);
        return o(l, d),
        d
    }
    return function() {
        return s(Qb.apply(null, arguments))
    }
}
const ve = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , bg = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , Gb = /^\d+\/\d+$/
  , qb = new Set(["px", "full", "screen"])
  , Xb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , Zb = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , Jb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , eS = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , tS = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , Rn = e => Ro(e) || qb.has(e) || Gb.test(e)
  , Kn = e => ss(e, "length", cS)
  , Ro = e => !!e && !Number.isNaN(Number(e))
  , pc = e => ss(e, "number", Ro)
  , Ss = e => !!e && Number.isInteger(Number(e))
  , nS = e => e.endsWith("%") && Ro(e.slice(0, -1))
  , Z = e => bg.test(e)
  , Gn = e => Xb.test(e)
  , rS = new Set(["length", "size", "percentage"])
  , oS = e => ss(e, rS, Sg)
  , sS = e => ss(e, "position", Sg)
  , aS = new Set(["image", "url"])
  , iS = e => ss(e, aS, dS)
  , lS = e => ss(e, "", uS)
  , Es = () => !0
  , ss = (e, t, n) => {
    const r = bg.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , cS = e => Zb.test(e) && !Jb.test(e)
  , Sg = () => !1
  , uS = e => eS.test(e)
  , dS = e => tS.test(e)
  , fS = () => {
    const e = ve("colors")
      , t = ve("spacing")
      , n = ve("blur")
      , r = ve("brightness")
      , o = ve("borderColor")
      , s = ve("borderRadius")
      , a = ve("borderSpacing")
      , i = ve("borderWidth")
      , l = ve("contrast")
      , u = ve("grayscale")
      , d = ve("hueRotate")
      , p = ve("invert")
      , v = ve("gap")
      , m = ve("gradientColorStops")
      , b = ve("gradientColorStopPositions")
      , g = ve("inset")
      , w = ve("margin")
      , y = ve("opacity")
      , h = ve("padding")
      , x = ve("saturate")
      , S = ve("scale")
      , E = ve("sepia")
      , k = ve("skew")
      , C = ve("space")
      , j = ve("translate")
      , A = () => ["auto", "contain", "none"]
      , M = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , $ = () => ["auto", Z, t]
      , D = () => [Z, t]
      , V = () => ["", Rn, Kn]
      , P = () => ["auto", Ro, Z]
      , H = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , L = () => ["solid", "dashed", "dotted", "double", "none"]
      , U = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , N = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , T = () => ["", "0", Z]
      , I = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , Y = () => [Ro, Z];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [Es],
            spacing: [Rn, Kn],
            blur: ["none", "", Gn, Z],
            brightness: Y(),
            borderColor: [e],
            borderRadius: ["none", "", "full", Gn, Z],
            borderSpacing: D(),
            borderWidth: V(),
            contrast: Y(),
            grayscale: T(),
            hueRotate: Y(),
            invert: T(),
            gap: D(),
            gradientColorStops: [e],
            gradientColorStopPositions: [nS, Kn],
            inset: $(),
            margin: $(),
            opacity: Y(),
            padding: D(),
            saturate: Y(),
            scale: Y(),
            sepia: T(),
            skew: Y(),
            space: D(),
            translate: D()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", Z]
            }],
            container: ["container"],
            columns: [{
                columns: [Gn]
            }],
            "break-after": [{
                "break-after": I()
            }],
            "break-before": [{
                "break-before": I()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...H(), Z]
            }],
            overflow: [{
                overflow: M()
            }],
            "overflow-x": [{
                "overflow-x": M()
            }],
            "overflow-y": [{
                "overflow-y": M()
            }],
            overscroll: [{
                overscroll: A()
            }],
            "overscroll-x": [{
                "overscroll-x": A()
            }],
            "overscroll-y": [{
                "overscroll-y": A()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [g]
            }],
            "inset-x": [{
                "inset-x": [g]
            }],
            "inset-y": [{
                "inset-y": [g]
            }],
            start: [{
                start: [g]
            }],
            end: [{
                end: [g]
            }],
            top: [{
                top: [g]
            }],
            right: [{
                right: [g]
            }],
            bottom: [{
                bottom: [g]
            }],
            left: [{
                left: [g]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", Ss, Z]
            }],
            basis: [{
                basis: $()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", Z]
            }],
            grow: [{
                grow: T()
            }],
            shrink: [{
                shrink: T()
            }],
            order: [{
                order: ["first", "last", "none", Ss, Z]
            }],
            "grid-cols": [{
                "grid-cols": [Es]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", Ss, Z]
                }, Z]
            }],
            "col-start": [{
                "col-start": P()
            }],
            "col-end": [{
                "col-end": P()
            }],
            "grid-rows": [{
                "grid-rows": [Es]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [Ss, Z]
                }, Z]
            }],
            "row-start": [{
                "row-start": P()
            }],
            "row-end": [{
                "row-end": P()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", Z]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", Z]
            }],
            gap: [{
                gap: [v]
            }],
            "gap-x": [{
                "gap-x": [v]
            }],
            "gap-y": [{
                "gap-y": [v]
            }],
            "justify-content": [{
                justify: ["normal", ...N()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...N(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...N(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [h]
            }],
            px: [{
                px: [h]
            }],
            py: [{
                py: [h]
            }],
            ps: [{
                ps: [h]
            }],
            pe: [{
                pe: [h]
            }],
            pt: [{
                pt: [h]
            }],
            pr: [{
                pr: [h]
            }],
            pb: [{
                pb: [h]
            }],
            pl: [{
                pl: [h]
            }],
            m: [{
                m: [w]
            }],
            mx: [{
                mx: [w]
            }],
            my: [{
                my: [w]
            }],
            ms: [{
                ms: [w]
            }],
            me: [{
                me: [w]
            }],
            mt: [{
                mt: [w]
            }],
            mr: [{
                mr: [w]
            }],
            mb: [{
                mb: [w]
            }],
            ml: [{
                ml: [w]
            }],
            "space-x": [{
                "space-x": [C]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [C]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Z, t]
            }],
            "min-w": [{
                "min-w": [Z, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [Z, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [Gn]
                }, Gn]
            }],
            h: [{
                h: [Z, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [Z, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [Z, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [Z, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", Gn, Kn]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", pc]
            }],
            "font-family": [{
                font: [Es]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Z]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Ro, pc]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Rn, Z]
            }],
            "list-image": [{
                "list-image": ["none", Z]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", Z]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [y]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [y]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...L(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", Rn, Kn]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", Rn, Z]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: D()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Z]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", Z]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [y]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...H(), sS]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", oS]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, iS]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [b]
            }],
            "gradient-via-pos": [{
                via: [b]
            }],
            "gradient-to-pos": [{
                to: [b]
            }],
            "gradient-from": [{
                from: [m]
            }],
            "gradient-via": [{
                via: [m]
            }],
            "gradient-to": [{
                to: [m]
            }],
            rounded: [{
                rounded: [s]
            }],
            "rounded-s": [{
                "rounded-s": [s]
            }],
            "rounded-e": [{
                "rounded-e": [s]
            }],
            "rounded-t": [{
                "rounded-t": [s]
            }],
            "rounded-r": [{
                "rounded-r": [s]
            }],
            "rounded-b": [{
                "rounded-b": [s]
            }],
            "rounded-l": [{
                "rounded-l": [s]
            }],
            "rounded-ss": [{
                "rounded-ss": [s]
            }],
            "rounded-se": [{
                "rounded-se": [s]
            }],
            "rounded-ee": [{
                "rounded-ee": [s]
            }],
            "rounded-es": [{
                "rounded-es": [s]
            }],
            "rounded-tl": [{
                "rounded-tl": [s]
            }],
            "rounded-tr": [{
                "rounded-tr": [s]
            }],
            "rounded-br": [{
                "rounded-br": [s]
            }],
            "rounded-bl": [{
                "rounded-bl": [s]
            }],
            "border-w": [{
                border: [i]
            }],
            "border-w-x": [{
                "border-x": [i]
            }],
            "border-w-y": [{
                "border-y": [i]
            }],
            "border-w-s": [{
                "border-s": [i]
            }],
            "border-w-e": [{
                "border-e": [i]
            }],
            "border-w-t": [{
                "border-t": [i]
            }],
            "border-w-r": [{
                "border-r": [i]
            }],
            "border-w-b": [{
                "border-b": [i]
            }],
            "border-w-l": [{
                "border-l": [i]
            }],
            "border-opacity": [{
                "border-opacity": [y]
            }],
            "border-style": [{
                border: [...L(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [i]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [i]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [y]
            }],
            "divide-style": [{
                divide: L()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-s": [{
                "border-s": [o]
            }],
            "border-color-e": [{
                "border-e": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", ...L()]
            }],
            "outline-offset": [{
                "outline-offset": [Rn, Z]
            }],
            "outline-w": [{
                outline: [Rn, Kn]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: V()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [y]
            }],
            "ring-offset-w": [{
                "ring-offset": [Rn, Kn]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", Gn, lS]
            }],
            "shadow-color": [{
                shadow: [Es]
            }],
            opacity: [{
                opacity: [y]
            }],
            "mix-blend": [{
                "mix-blend": [...U(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": U()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [l]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", Gn, Z]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [d]
            }],
            invert: [{
                invert: [p]
            }],
            saturate: [{
                saturate: [x]
            }],
            sepia: [{
                sepia: [E]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [l]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [d]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [p]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [y]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [x]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [E]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [a]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [a]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [a]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Z]
            }],
            duration: [{
                duration: Y()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", Z]
            }],
            delay: [{
                delay: Y()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", Z]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [S]
            }],
            "scale-x": [{
                "scale-x": [S]
            }],
            "scale-y": [{
                "scale-y": [S]
            }],
            rotate: [{
                rotate: [Ss, Z]
            }],
            "translate-x": [{
                "translate-x": [j]
            }],
            "translate-y": [{
                "translate-y": [j]
            }],
            "skew-x": [{
                "skew-x": [k]
            }],
            "skew-y": [{
                "skew-y": [k]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Z]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Z]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": D()
            }],
            "scroll-mx": [{
                "scroll-mx": D()
            }],
            "scroll-my": [{
                "scroll-my": D()
            }],
            "scroll-ms": [{
                "scroll-ms": D()
            }],
            "scroll-me": [{
                "scroll-me": D()
            }],
            "scroll-mt": [{
                "scroll-mt": D()
            }],
            "scroll-mr": [{
                "scroll-mr": D()
            }],
            "scroll-mb": [{
                "scroll-mb": D()
            }],
            "scroll-ml": [{
                "scroll-ml": D()
            }],
            "scroll-p": [{
                "scroll-p": D()
            }],
            "scroll-px": [{
                "scroll-px": D()
            }],
            "scroll-py": [{
                "scroll-py": D()
            }],
            "scroll-ps": [{
                "scroll-ps": D()
            }],
            "scroll-pe": [{
                "scroll-pe": D()
            }],
            "scroll-pt": [{
                "scroll-pt": D()
            }],
            "scroll-pr": [{
                "scroll-pr": D()
            }],
            "scroll-pb": [{
                "scroll-pb": D()
            }],
            "scroll-pl": [{
                "scroll-pl": D()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", Z]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [Rn, Kn, pc]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , pS = Kb(fS);
function je(...e) {
    return pS(mg(e))
}
const mS = gb
  , Eg = f.forwardRef( ({className: e, ...t}, n) => c.jsx(ig, {
    ref: n,
    className: je("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
Eg.displayName = ig.displayName;
const hS = Ld("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , Cg = f.forwardRef( ({className: e, variant: t, ...n}, r) => c.jsx(lg, {
    ref: r,
    className: je(hS({
        variant: t
    }), e),
    ...n
}));
Cg.displayName = lg.displayName;
const gS = f.forwardRef( ({className: e, ...t}, n) => c.jsx(dg, {
    ref: n,
    className: je("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
gS.displayName = dg.displayName;
const kg = f.forwardRef( ({className: e, ...t}, n) => c.jsx(fg, {
    ref: n,
    className: je("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: c.jsx(vg, {
        className: "h-4 w-4"
    })
}));
kg.displayName = fg.displayName;
const Ng = f.forwardRef( ({className: e, ...t}, n) => c.jsx(cg, {
    ref: n,
    className: je("text-sm font-semibold", e),
    ...t
}));
Ng.displayName = cg.displayName;
const Tg = f.forwardRef( ({className: e, ...t}, n) => c.jsx(ug, {
    ref: n,
    className: je("text-sm opacity-90", e),
    ...t
}));
Tg.displayName = ug.displayName;
function vS() {
    const {toasts: e} = kw();
    return c.jsxs(mS, {
        children: [e.map(function({id: t, title: n, description: r, action: o, ...s}) {
            return c.jsxs(Cg, {
                ...s,
                children: [c.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && c.jsx(Ng, {
                        children: n
                    }), r && c.jsx(Tg, {
                        children: r
                    })]
                }), o, c.jsx(kg, {})]
            }, t)
        }), c.jsx(Eg, {})]
    })
}
var Np = ["light", "dark"]
  , yS = "(prefers-color-scheme: dark)"
  , xS = f.createContext(void 0)
  , wS = {
    setTheme: e => {}
    ,
    themes: []
}
  , bS = () => {
    var e;
    return (e = f.useContext(xS)) != null ? e : wS
}
;
f.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: s, value: a, attrs: i, nonce: l}) => {
    let u = s === "system"
      , d = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${i.map(b => `'${b}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , p = o ? Np.includes(s) && s ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , v = (b, g=!1, w=!0) => {
        let y = a ? a[b] : b
          , h = g ? b + "|| ''" : `'${y}'`
          , x = "";
        return o && w && !g && Np.includes(b) && (x += `d.style.colorScheme = '${b}';`),
        n === "class" ? g || y ? x += `c.add(${h})` : x += "null" : y && (x += `d[s](n,${h})`),
        x
    }
      , m = e ? `!function(){${d}${v(e)}}()` : r ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${yS}',m=window.matchMedia(t);if(m.media!==t||m.matches){${v("dark")}}else{${v("light")}}}else if(e){${a ? `var x=${JSON.stringify(a)};` : ""}${v(a ? "x[e]" : "e", !0)}}${u ? "" : "else{" + v(s, !1, !1) + "}"}${p}}catch(e){}}()` : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${a ? `var x=${JSON.stringify(a)};` : ""}${v(a ? "x[e]" : "e", !0)}}else{${v(s, !1, !1)};}${p}}catch(t){}}();`;
    return f.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: {
            __html: m
        }
    })
}
);
var SS = e => {
    switch (e) {
    case "success":
        return kS;
    case "info":
        return TS;
    case "warning":
        return NS;
    case "error":
        return jS;
    default:
        return null
    }
}
  , ES = Array(12).fill(0)
  , CS = ({visible: e, className: t}) => O.createElement("div", {
    className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
    "data-visible": e
}, O.createElement("div", {
    className: "sonner-spinner"
}, ES.map( (n, r) => O.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${r}`
}))))
  , kS = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, O.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , NS = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, O.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , TS = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, O.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , jS = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, O.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , PS = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, O.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), O.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , RS = () => {
    let[e,t] = O.useState(document.hidden);
    return O.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , Su = 1
  , AS = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...r} = e
              , o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Su++
              , s = this.toasts.find(i => i.id === o)
              , a = e.dismissible === void 0 ? !0 : e.dismissible;
            return this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            s ? this.toasts = this.toasts.map(i => i.id === o ? (this.publish({
                ...i,
                ...e,
                id: o,
                title: n
            }),
            {
                ...i,
                ...e,
                id: o,
                dismissible: a,
                title: n
            }) : i) : this.addToast({
                title: n,
                ...r,
                dismissible: a,
                id: o
            }),
            o
        }
        ,
        this.dismiss = e => (this.dismissedToasts.add(e),
        e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let r = e instanceof Promise ? e : e(), o = n !== void 0, s, a = r.then(async l => {
                if (s = ["resolve", l],
                O.isValidElement(l))
                    o = !1,
                    this.create({
                        id: n,
                        type: "default",
                        message: l
                    });
                else if (MS(l) && !l.ok) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error
                      , d = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: d
                    })
                } else if (t.success !== void 0) {
                    o = !1;
                    let u = typeof t.success == "function" ? await t.success(l) : t.success
                      , d = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: u,
                        description: d
                    })
                }
            }
            ).catch(async l => {
                if (s = ["reject", l],
                t.error !== void 0) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(l) : t.error
                      , d = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: d
                    })
                }
            }
            ).finally( () => {
                var l;
                o && (this.dismiss(n),
                n = void 0),
                (l = t.finally) == null || l.call(t)
            }
            ), i = () => new Promise( (l, u) => a.then( () => s[0] === "reject" ? u(s[1]) : l(s[1])).catch(u));
            return typeof n != "string" && typeof n != "number" ? {
                unwrap: i
            } : Object.assign(n, {
                unwrap: i
            })
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || Su++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
  , gt = new AS
  , FS = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Su++;
    return gt.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , MS = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , OS = FS
  , DS = () => gt.toasts
  , IS = () => gt.getActiveToasts();
Object.assign(OS, {
    success: gt.success,
    info: gt.info,
    warning: gt.warning,
    error: gt.error,
    custom: gt.custom,
    message: gt.message,
    promise: gt.promise,
    dismiss: gt.dismiss,
    loading: gt.loading
}, {
    getHistory: DS,
    getToasts: IS
});
function _S(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
_S(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Ya(e) {
    return e.label !== void 0
}
var LS = 3
  , zS = "32px"
  , $S = "16px"
  , Tp = 4e3
  , BS = 356
  , US = 14
  , VS = 20
  , WS = 200;
function Ht(...e) {
    return e.filter(Boolean).join(" ")
}
function HS(e) {
    let[t,n] = e.split("-")
      , r = [];
    return t && r.push(t),
    n && r.push(n),
    r
}
var YS = e => {
    var t, n, r, o, s, a, i, l, u, d, p;
    let {invert: v, toast: m, unstyled: b, interacting: g, setHeights: w, visibleToasts: y, heights: h, index: x, toasts: S, expanded: E, removeToast: k, defaultRichColors: C, closeButton: j, style: A, cancelButtonStyle: M, actionButtonStyle: $, className: D="", descriptionClassName: V="", duration: P, position: H, gap: L, loadingIcon: U, expandByDefault: N, classNames: T, icons: I, closeButtonAriaLabel: Y="Close toast", pauseWhenPageIsHidden: B} = e
      , [q,Q] = O.useState(null)
      , [fe,he] = O.useState(null)
      , [_,ae] = O.useState(!1)
      , [ge,oe] = O.useState(!1)
      , [ee,re] = O.useState(!1)
      , [De,Ye] = O.useState(!1)
      , [te,Vt] = O.useState(!1)
      , [ut,Hn] = O.useState(0)
      , [Cn,Tr] = O.useState(0)
      , jr = O.useRef(m.duration || P || Tp)
      , kn = O.useRef(null)
      , Yn = O.useRef(null)
      , cs = x === 0
      , ya = x + 1 <= y
      , dt = m.type
      , Ie = m.dismissible !== !1
      , xa = m.className || ""
      , pe = m.descriptionClassName || ""
      , Pr = O.useMemo( () => h.findIndex(K => K.toastId === m.id) || 0, [h, m.id])
      , an = O.useMemo( () => {
        var K;
        return (K = m.closeButton) != null ? K : j
    }
    , [m.closeButton, j])
      , us = O.useMemo( () => m.duration || P || Tp, [m.duration, P])
      , Mt = O.useRef(0)
      , Nn = O.useRef(0)
      , ft = O.useRef(0)
      , Tn = O.useRef(null)
      , [pt,wa] = H.split("-")
      , oo = O.useMemo( () => h.reduce( (K, ce, de) => de >= Pr ? K : K + ce.height, 0), [h, Pr])
      , ba = RS()
      , ds = m.invert || v
      , Rr = dt === "loading";
    Nn.current = O.useMemo( () => Pr * L + oo, [Pr, oo]),
    O.useEffect( () => {
        jr.current = us
    }
    , [us]),
    O.useEffect( () => {
        ae(!0)
    }
    , []),
    O.useEffect( () => {
        let K = Yn.current;
        if (K) {
            let ce = K.getBoundingClientRect().height;
            return Tr(ce),
            w(de => [{
                toastId: m.id,
                height: ce,
                position: m.position
            }, ...de]),
            () => w(de => de.filter(mt => mt.toastId !== m.id))
        }
    }
    , [w, m.id]),
    O.useLayoutEffect( () => {
        if (!_)
            return;
        let K = Yn.current
          , ce = K.style.height;
        K.style.height = "auto";
        let de = K.getBoundingClientRect().height;
        K.style.height = ce,
        Tr(de),
        w(mt => mt.find(Et => Et.toastId === m.id) ? mt.map(Et => Et.toastId === m.id ? {
            ...Et,
            height: de
        } : Et) : [{
            toastId: m.id,
            height: de,
            position: m.position
        }, ...mt])
    }
    , [_, m.title, m.description, w, m.id]);
    let ze = O.useCallback( () => {
        oe(!0),
        Hn(Nn.current),
        w(K => K.filter(ce => ce.toastId !== m.id)),
        setTimeout( () => {
            k(m)
        }
        , WS)
    }
    , [m, k, w, Nn]);
    O.useEffect( () => {
        if (m.promise && dt === "loading" || m.duration === 1 / 0 || m.type === "loading")
            return;
        let K;
        return E || g || B && ba ? ( () => {
            if (ft.current < Mt.current) {
                let ce = new Date().getTime() - Mt.current;
                jr.current = jr.current - ce
            }
            ft.current = new Date().getTime()
        }
        )() : jr.current !== 1 / 0 && (Mt.current = new Date().getTime(),
        K = setTimeout( () => {
            var ce;
            (ce = m.onAutoClose) == null || ce.call(m, m),
            ze()
        }
        , jr.current)),
        () => clearTimeout(K)
    }
    , [E, g, m, dt, B, ba, ze]),
    O.useEffect( () => {
        m.delete && ze()
    }
    , [ze, m.delete]);
    function Dl() {
        var K, ce, de;
        return I != null && I.loading ? O.createElement("div", {
            className: Ht(T == null ? void 0 : T.loader, (K = m == null ? void 0 : m.classNames) == null ? void 0 : K.loader, "sonner-loader"),
            "data-visible": dt === "loading"
        }, I.loading) : U ? O.createElement("div", {
            className: Ht(T == null ? void 0 : T.loader, (ce = m == null ? void 0 : m.classNames) == null ? void 0 : ce.loader, "sonner-loader"),
            "data-visible": dt === "loading"
        }, U) : O.createElement(CS, {
            className: Ht(T == null ? void 0 : T.loader, (de = m == null ? void 0 : m.classNames) == null ? void 0 : de.loader),
            visible: dt === "loading"
        })
    }
    return O.createElement("li", {
        tabIndex: 0,
        ref: Yn,
        className: Ht(D, xa, T == null ? void 0 : T.toast, (t = m == null ? void 0 : m.classNames) == null ? void 0 : t.toast, T == null ? void 0 : T.default, T == null ? void 0 : T[dt], (n = m == null ? void 0 : m.classNames) == null ? void 0 : n[dt]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = m.richColors) != null ? r : C,
        "data-styled": !(m.jsx || m.unstyled || b),
        "data-mounted": _,
        "data-promise": !!m.promise,
        "data-swiped": te,
        "data-removed": ge,
        "data-visible": ya,
        "data-y-position": pt,
        "data-x-position": wa,
        "data-index": x,
        "data-front": cs,
        "data-swiping": ee,
        "data-dismissible": Ie,
        "data-type": dt,
        "data-invert": ds,
        "data-swipe-out": De,
        "data-swipe-direction": fe,
        "data-expanded": !!(E || N && _),
        style: {
            "--index": x,
            "--toasts-before": x,
            "--z-index": S.length - x,
            "--offset": `${ge ? ut : Nn.current}px`,
            "--initial-height": N ? "auto" : `${Cn}px`,
            ...A,
            ...m.style
        },
        onDragEnd: () => {
            re(!1),
            Q(null),
            Tn.current = null
        }
        ,
        onPointerDown: K => {
            Rr || !Ie || (kn.current = new Date,
            Hn(Nn.current),
            K.target.setPointerCapture(K.pointerId),
            K.target.tagName !== "BUTTON" && (re(!0),
            Tn.current = {
                x: K.clientX,
                y: K.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var K, ce, de, mt;
            if (De || !Ie)
                return;
            Tn.current = null;
            let Et = Number(((K = Yn.current) == null ? void 0 : K.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , ln = Number(((ce = Yn.current) == null ? void 0 : ce.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , jn = new Date().getTime() - ((de = kn.current) == null ? void 0 : de.getTime())
              , Ct = q === "x" ? Et : ln
              , cn = Math.abs(Ct) / jn;
            if (Math.abs(Ct) >= VS || cn > .11) {
                Hn(Nn.current),
                (mt = m.onDismiss) == null || mt.call(m, m),
                he(q === "x" ? Et > 0 ? "right" : "left" : ln > 0 ? "down" : "up"),
                ze(),
                Ye(!0),
                Vt(!1);
                return
            }
            re(!1),
            Q(null)
        }
        ,
        onPointerMove: K => {
            var ce, de, mt, Et;
            if (!Tn.current || !Ie || ((ce = window.getSelection()) == null ? void 0 : ce.toString().length) > 0)
                return;
            let ln = K.clientY - Tn.current.y
              , jn = K.clientX - Tn.current.x
              , Ct = (de = e.swipeDirections) != null ? de : HS(H);
            !q && (Math.abs(jn) > 1 || Math.abs(ln) > 1) && Q(Math.abs(jn) > Math.abs(ln) ? "x" : "y");
            let cn = {
                x: 0,
                y: 0
            };
            q === "y" ? (Ct.includes("top") || Ct.includes("bottom")) && (Ct.includes("top") && ln < 0 || Ct.includes("bottom") && ln > 0) && (cn.y = ln) : q === "x" && (Ct.includes("left") || Ct.includes("right")) && (Ct.includes("left") && jn < 0 || Ct.includes("right") && jn > 0) && (cn.x = jn),
            (Math.abs(cn.x) > 0 || Math.abs(cn.y) > 0) && Vt(!0),
            (mt = Yn.current) == null || mt.style.setProperty("--swipe-amount-x", `${cn.x}px`),
            (Et = Yn.current) == null || Et.style.setProperty("--swipe-amount-y", `${cn.y}px`)
        }
    }, an && !m.jsx ? O.createElement("button", {
        "aria-label": Y,
        "data-disabled": Rr,
        "data-close-button": !0,
        onClick: Rr || !Ie ? () => {}
        : () => {
            var K;
            ze(),
            (K = m.onDismiss) == null || K.call(m, m)
        }
        ,
        className: Ht(T == null ? void 0 : T.closeButton, (o = m == null ? void 0 : m.classNames) == null ? void 0 : o.closeButton)
    }, (s = I == null ? void 0 : I.close) != null ? s : PS) : null, m.jsx || f.isValidElement(m.title) ? m.jsx ? m.jsx : typeof m.title == "function" ? m.title() : m.title : O.createElement(O.Fragment, null, dt || m.icon || m.promise ? O.createElement("div", {
        "data-icon": "",
        className: Ht(T == null ? void 0 : T.icon, (a = m == null ? void 0 : m.classNames) == null ? void 0 : a.icon)
    }, m.promise || m.type === "loading" && !m.icon ? m.icon || Dl() : null, m.type !== "loading" ? m.icon || (I == null ? void 0 : I[dt]) || SS(dt) : null) : null, O.createElement("div", {
        "data-content": "",
        className: Ht(T == null ? void 0 : T.content, (i = m == null ? void 0 : m.classNames) == null ? void 0 : i.content)
    }, O.createElement("div", {
        "data-title": "",
        className: Ht(T == null ? void 0 : T.title, (l = m == null ? void 0 : m.classNames) == null ? void 0 : l.title)
    }, typeof m.title == "function" ? m.title() : m.title), m.description ? O.createElement("div", {
        "data-description": "",
        className: Ht(V, pe, T == null ? void 0 : T.description, (u = m == null ? void 0 : m.classNames) == null ? void 0 : u.description)
    }, typeof m.description == "function" ? m.description() : m.description) : null), f.isValidElement(m.cancel) ? m.cancel : m.cancel && Ya(m.cancel) ? O.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: m.cancelButtonStyle || M,
        onClick: K => {
            var ce, de;
            Ya(m.cancel) && Ie && ((de = (ce = m.cancel).onClick) == null || de.call(ce, K),
            ze())
        }
        ,
        className: Ht(T == null ? void 0 : T.cancelButton, (d = m == null ? void 0 : m.classNames) == null ? void 0 : d.cancelButton)
    }, m.cancel.label) : null, f.isValidElement(m.action) ? m.action : m.action && Ya(m.action) ? O.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: m.actionButtonStyle || $,
        onClick: K => {
            var ce, de;
            Ya(m.action) && ((de = (ce = m.action).onClick) == null || de.call(ce, K),
            !K.defaultPrevented && ze())
        }
        ,
        className: Ht(T == null ? void 0 : T.actionButton, (p = m == null ? void 0 : m.classNames) == null ? void 0 : p.actionButton)
    }, m.action.label) : null))
}
;
function jp() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
function QS(e, t) {
    let n = {};
    return [e, t].forEach( (r, o) => {
        let s = o === 1
          , a = s ? "--mobile-offset" : "--offset"
          , i = s ? $S : zS;
        function l(u) {
            ["top", "right", "bottom", "left"].forEach(d => {
                n[`${a}-${d}`] = typeof u == "number" ? `${u}px` : u
            }
            )
        }
        typeof r == "number" || typeof r == "string" ? l(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(u => {
            r[u] === void 0 ? n[`${a}-${u}`] = i : n[`${a}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]
        }
        ) : l(i)
    }
    ),
    n
}
var KS = f.forwardRef(function(e, t) {
    let {invert: n, position: r="bottom-right", hotkey: o=["altKey", "KeyT"], expand: s, closeButton: a, className: i, offset: l, mobileOffset: u, theme: d="light", richColors: p, duration: v, style: m, visibleToasts: b=LS, toastOptions: g, dir: w=jp(), gap: y=US, loadingIcon: h, icons: x, containerAriaLabel: S="Notifications", pauseWhenPageIsHidden: E} = e
      , [k,C] = O.useState([])
      , j = O.useMemo( () => Array.from(new Set([r].concat(k.filter(B => B.position).map(B => B.position)))), [k, r])
      , [A,M] = O.useState([])
      , [$,D] = O.useState(!1)
      , [V,P] = O.useState(!1)
      , [H,L] = O.useState(d !== "system" ? d : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , U = O.useRef(null)
      , N = o.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , T = O.useRef(null)
      , I = O.useRef(!1)
      , Y = O.useCallback(B => {
        C(q => {
            var Q;
            return (Q = q.find(fe => fe.id === B.id)) != null && Q.delete || gt.dismiss(B.id),
            q.filter( ({id: fe}) => fe !== B.id)
        }
        )
    }
    , []);
    return O.useEffect( () => gt.subscribe(B => {
        if (B.dismiss) {
            C(q => q.map(Q => Q.id === B.id ? {
                ...Q,
                delete: !0
            } : Q));
            return
        }
        setTimeout( () => {
            L0.flushSync( () => {
                C(q => {
                    let Q = q.findIndex(fe => fe.id === B.id);
                    return Q !== -1 ? [...q.slice(0, Q), {
                        ...q[Q],
                        ...B
                    }, ...q.slice(Q + 1)] : [B, ...q]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    O.useEffect( () => {
        if (d !== "system") {
            L(d);
            return
        }
        if (d === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? L("dark") : L("light")),
        typeof window > "u")
            return;
        let B = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            B.addEventListener("change", ({matches: q}) => {
                L(q ? "dark" : "light")
            }
            )
        } catch {
            B.addListener( ({matches: Q}) => {
                try {
                    L(Q ? "dark" : "light")
                } catch (fe) {
                    console.error(fe)
                }
            }
            )
        }
    }
    , [d]),
    O.useEffect( () => {
        k.length <= 1 && D(!1)
    }
    , [k]),
    O.useEffect( () => {
        let B = q => {
            var Q, fe;
            o.every(he => q[he] || q.code === he) && (D(!0),
            (Q = U.current) == null || Q.focus()),
            q.code === "Escape" && (document.activeElement === U.current || (fe = U.current) != null && fe.contains(document.activeElement)) && D(!1)
        }
        ;
        return document.addEventListener("keydown", B),
        () => document.removeEventListener("keydown", B)
    }
    , [o]),
    O.useEffect( () => {
        if (U.current)
            return () => {
                T.current && (T.current.focus({
                    preventScroll: !0
                }),
                T.current = null,
                I.current = !1)
            }
    }
    , [U.current]),
    O.createElement("section", {
        ref: t,
        "aria-label": `${S} ${N}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, j.map( (B, q) => {
        var Q;
        let[fe,he] = B.split("-");
        return k.length ? O.createElement("ol", {
            key: B,
            dir: w === "auto" ? jp() : w,
            tabIndex: -1,
            ref: U,
            className: i,
            "data-sonner-toaster": !0,
            "data-theme": H,
            "data-y-position": fe,
            "data-lifted": $ && k.length > 1 && !s,
            "data-x-position": he,
            style: {
                "--front-toast-height": `${((Q = A[0]) == null ? void 0 : Q.height) || 0}px`,
                "--width": `${BS}px`,
                "--gap": `${y}px`,
                ...m,
                ...QS(l, u)
            },
            onBlur: _ => {
                I.current && !_.currentTarget.contains(_.relatedTarget) && (I.current = !1,
                T.current && (T.current.focus({
                    preventScroll: !0
                }),
                T.current = null))
            }
            ,
            onFocus: _ => {
                _.target instanceof HTMLElement && _.target.dataset.dismissible === "false" || I.current || (I.current = !0,
                T.current = _.relatedTarget)
            }
            ,
            onMouseEnter: () => D(!0),
            onMouseMove: () => D(!0),
            onMouseLeave: () => {
                V || D(!1)
            }
            ,
            onDragEnd: () => D(!1),
            onPointerDown: _ => {
                _.target instanceof HTMLElement && _.target.dataset.dismissible === "false" || P(!0)
            }
            ,
            onPointerUp: () => P(!1)
        }, k.filter(_ => !_.position && q === 0 || _.position === B).map( (_, ae) => {
            var ge, oe;
            return O.createElement(YS, {
                key: _.id,
                icons: x,
                index: ae,
                toast: _,
                defaultRichColors: p,
                duration: (ge = g == null ? void 0 : g.duration) != null ? ge : v,
                className: g == null ? void 0 : g.className,
                descriptionClassName: g == null ? void 0 : g.descriptionClassName,
                invert: n,
                visibleToasts: b,
                closeButton: (oe = g == null ? void 0 : g.closeButton) != null ? oe : a,
                interacting: V,
                position: B,
                style: g == null ? void 0 : g.style,
                unstyled: g == null ? void 0 : g.unstyled,
                classNames: g == null ? void 0 : g.classNames,
                cancelButtonStyle: g == null ? void 0 : g.cancelButtonStyle,
                actionButtonStyle: g == null ? void 0 : g.actionButtonStyle,
                removeToast: Y,
                toasts: k.filter(ee => ee.position == _.position),
                heights: A.filter(ee => ee.position == _.position),
                setHeights: M,
                expandByDefault: s,
                gap: y,
                loadingIcon: h,
                expanded: $,
                pauseWhenPageIsHidden: E,
                swipeDirections: e.swipeDirections
            })
        }
        )) : null
    }
    ))
});
const GS = ({...e}) => {
    const {theme: t="system"} = bS();
    return c.jsx(KS, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
;
var qS = Wu[" useId ".trim().toString()] || ( () => {}
)
  , XS = 0;
function Ao(e) {
    const [t,n] = f.useState(qS());
    return He( () => {
        n(r => r ?? String(XS++))
    }
    , [e]),
    t ? `radix-${t}` : ""
}
const ZS = ["top", "right", "bottom", "left"]
  , wr = Math.min
  , Nt = Math.max
  , Wi = Math.round
  , Qa = Math.floor
  , bn = e => ({
    x: e,
    y: e
})
  , JS = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , e2 = {
    start: "end",
    end: "start"
};
function Eu(e, t, n) {
    return Nt(e, wr(t, n))
}
function Un(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Vn(e) {
    return e.split("-")[0]
}
function as(e) {
    return e.split("-")[1]
}
function $d(e) {
    return e === "x" ? "y" : "x"
}
function Bd(e) {
    return e === "y" ? "height" : "width"
}
const t2 = new Set(["top", "bottom"]);
function yn(e) {
    return t2.has(Vn(e)) ? "y" : "x"
}
function Ud(e) {
    return $d(yn(e))
}
function n2(e, t, n) {
    n === void 0 && (n = !1);
    const r = as(e)
      , o = Ud(e)
      , s = Bd(o);
    let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[s] > t.floating[s] && (a = Hi(a)),
    [a, Hi(a)]
}
function r2(e) {
    const t = Hi(e);
    return [Cu(e), t, Cu(t)]
}
function Cu(e) {
    return e.replace(/start|end/g, t => e2[t])
}
const Pp = ["left", "right"]
  , Rp = ["right", "left"]
  , o2 = ["top", "bottom"]
  , s2 = ["bottom", "top"];
function a2(e, t, n) {
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? Rp : Pp : t ? Pp : Rp;
    case "left":
    case "right":
        return t ? o2 : s2;
    default:
        return []
    }
}
function i2(e, t, n, r) {
    const o = as(e);
    let s = a2(Vn(e), n === "start", r);
    return o && (s = s.map(a => a + "-" + o),
    t && (s = s.concat(s.map(Cu)))),
    s
}
function Hi(e) {
    return e.replace(/left|right|bottom|top/g, t => JS[t])
}
function l2(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function jg(e) {
    return typeof e != "number" ? l2(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function Yi(e) {
    const {x: t, y: n, width: r, height: o} = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}
function Ap(e, t, n) {
    let {reference: r, floating: o} = e;
    const s = yn(t)
      , a = Ud(t)
      , i = Bd(a)
      , l = Vn(t)
      , u = s === "y"
      , d = r.x + r.width / 2 - o.width / 2
      , p = r.y + r.height / 2 - o.height / 2
      , v = r[i] / 2 - o[i] / 2;
    let m;
    switch (l) {
    case "top":
        m = {
            x: d,
            y: r.y - o.height
        };
        break;
    case "bottom":
        m = {
            x: d,
            y: r.y + r.height
        };
        break;
    case "right":
        m = {
            x: r.x + r.width,
            y: p
        };
        break;
    case "left":
        m = {
            x: r.x - o.width,
            y: p
        };
        break;
    default:
        m = {
            x: r.x,
            y: r.y
        }
    }
    switch (as(t)) {
    case "start":
        m[a] -= v * (n && u ? -1 : 1);
        break;
    case "end":
        m[a] += v * (n && u ? -1 : 1);
        break
    }
    return m
}
const c2 = async (e, t, n) => {
    const {placement: r="bottom", strategy: o="absolute", middleware: s=[], platform: a} = n
      , i = s.filter(Boolean)
      , l = await (a.isRTL == null ? void 0 : a.isRTL(t));
    let u = await a.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
      , {x: d, y: p} = Ap(u, r, l)
      , v = r
      , m = {}
      , b = 0;
    for (let g = 0; g < i.length; g++) {
        const {name: w, fn: y} = i[g]
          , {x: h, y: x, data: S, reset: E} = await y({
            x: d,
            y: p,
            initialPlacement: r,
            placement: v,
            strategy: o,
            middlewareData: m,
            rects: u,
            platform: a,
            elements: {
                reference: e,
                floating: t
            }
        });
        d = h ?? d,
        p = x ?? p,
        m = {
            ...m,
            [w]: {
                ...m[w],
                ...S
            }
        },
        E && b <= 50 && (b++,
        typeof E == "object" && (E.placement && (v = E.placement),
        E.rects && (u = E.rects === !0 ? await a.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : E.rects),
        {x: d, y: p} = Ap(u, v, l)),
        g = -1)
    }
    return {
        x: d,
        y: p,
        placement: v,
        strategy: o,
        middlewareData: m
    }
}
;
async function oa(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: o, platform: s, rects: a, elements: i, strategy: l} = e
      , {boundary: u="clippingAncestors", rootBoundary: d="viewport", elementContext: p="floating", altBoundary: v=!1, padding: m=0} = Un(t, e)
      , b = jg(m)
      , w = i[v ? p === "floating" ? "reference" : "floating" : p]
      , y = Yi(await s.getClippingRect({
        element: (n = await (s.isElement == null ? void 0 : s.isElement(w))) == null || n ? w : w.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
        boundary: u,
        rootBoundary: d,
        strategy: l
    }))
      , h = p === "floating" ? {
        x: r,
        y: o,
        width: a.floating.width,
        height: a.floating.height
    } : a.reference
      , x = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating))
      , S = await (s.isElement == null ? void 0 : s.isElement(x)) ? await (s.getScale == null ? void 0 : s.getScale(x)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , E = Yi(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: i,
        rect: h,
        offsetParent: x,
        strategy: l
    }) : h);
    return {
        top: (y.top - E.top + b.top) / S.y,
        bottom: (E.bottom - y.bottom + b.bottom) / S.y,
        left: (y.left - E.left + b.left) / S.x,
        right: (E.right - y.right + b.right) / S.x
    }
}
const u2 = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: o, rects: s, platform: a, elements: i, middlewareData: l} = t
          , {element: u, padding: d=0} = Un(e, t) || {};
        if (u == null)
            return {};
        const p = jg(d)
          , v = {
            x: n,
            y: r
        }
          , m = Ud(o)
          , b = Bd(m)
          , g = await a.getDimensions(u)
          , w = m === "y"
          , y = w ? "top" : "left"
          , h = w ? "bottom" : "right"
          , x = w ? "clientHeight" : "clientWidth"
          , S = s.reference[b] + s.reference[m] - v[m] - s.floating[b]
          , E = v[m] - s.reference[m]
          , k = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
        let C = k ? k[x] : 0;
        (!C || !await (a.isElement == null ? void 0 : a.isElement(k))) && (C = i.floating[x] || s.floating[b]);
        const j = S / 2 - E / 2
          , A = C / 2 - g[b] / 2 - 1
          , M = wr(p[y], A)
          , $ = wr(p[h], A)
          , D = M
          , V = C - g[b] - $
          , P = C / 2 - g[b] / 2 + j
          , H = Eu(D, P, V)
          , L = !l.arrow && as(o) != null && P !== H && s.reference[b] / 2 - (P < D ? M : $) - g[b] / 2 < 0
          , U = L ? P < D ? P - D : P - V : 0;
        return {
            [m]: v[m] + U,
            data: {
                [m]: H,
                centerOffset: P - H - U,
                ...L && {
                    alignmentOffset: U
                }
            },
            reset: L
        }
    }
})
  , d2 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, middlewareData: s, rects: a, initialPlacement: i, platform: l, elements: u} = t
              , {mainAxis: d=!0, crossAxis: p=!0, fallbackPlacements: v, fallbackStrategy: m="bestFit", fallbackAxisSideDirection: b="none", flipAlignment: g=!0, ...w} = Un(e, t);
            if ((n = s.arrow) != null && n.alignmentOffset)
                return {};
            const y = Vn(o)
              , h = yn(i)
              , x = Vn(i) === i
              , S = await (l.isRTL == null ? void 0 : l.isRTL(u.floating))
              , E = v || (x || !g ? [Hi(i)] : r2(i))
              , k = b !== "none";
            !v && k && E.push(...i2(i, g, b, S));
            const C = [i, ...E]
              , j = await oa(t, w)
              , A = [];
            let M = ((r = s.flip) == null ? void 0 : r.overflows) || [];
            if (d && A.push(j[y]),
            p) {
                const P = n2(o, a, S);
                A.push(j[P[0]], j[P[1]])
            }
            if (M = [...M, {
                placement: o,
                overflows: A
            }],
            !A.every(P => P <= 0)) {
                var $, D;
                const P = ((($ = s.flip) == null ? void 0 : $.index) || 0) + 1
                  , H = C[P];
                if (H && (!(p === "alignment" ? h !== yn(H) : !1) || M.every(N => N.overflows[0] > 0 && yn(N.placement) === h)))
                    return {
                        data: {
                            index: P,
                            overflows: M
                        },
                        reset: {
                            placement: H
                        }
                    };
                let L = (D = M.filter(U => U.overflows[0] <= 0).sort( (U, N) => U.overflows[1] - N.overflows[1])[0]) == null ? void 0 : D.placement;
                if (!L)
                    switch (m) {
                    case "bestFit":
                        {
                            var V;
                            const U = (V = M.filter(N => {
                                if (k) {
                                    const T = yn(N.placement);
                                    return T === h || T === "y"
                                }
                                return !0
                            }
                            ).map(N => [N.placement, N.overflows.filter(T => T > 0).reduce( (T, I) => T + I, 0)]).sort( (N, T) => N[1] - T[1])[0]) == null ? void 0 : V[0];
                            U && (L = U);
                            break
                        }
                    case "initialPlacement":
                        L = i;
                        break
                    }
                if (o !== L)
                    return {
                        reset: {
                            placement: L
                        }
                    }
            }
            return {}
        }
    }
};
function Fp(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function Mp(e) {
    return ZS.some(t => e[t] >= 0)
}
const f2 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...o} = Un(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const s = await oa(t, {
                        ...o,
                        elementContext: "reference"
                    })
                      , a = Fp(s, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: a,
                            referenceHidden: Mp(a)
                        }
                    }
                }
            case "escaped":
                {
                    const s = await oa(t, {
                        ...o,
                        altBoundary: !0
                    })
                      , a = Fp(s, n.floating);
                    return {
                        data: {
                            escapedOffsets: a,
                            escaped: Mp(a)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
}
  , Pg = new Set(["left", "top"]);
async function p2(e, t) {
    const {placement: n, platform: r, elements: o} = e
      , s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating))
      , a = Vn(n)
      , i = as(n)
      , l = yn(n) === "y"
      , u = Pg.has(a) ? -1 : 1
      , d = s && l ? -1 : 1
      , p = Un(t, e);
    let {mainAxis: v, crossAxis: m, alignmentAxis: b} = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: p.mainAxis || 0,
        crossAxis: p.crossAxis || 0,
        alignmentAxis: p.alignmentAxis
    };
    return i && typeof b == "number" && (m = i === "end" ? b * -1 : b),
    l ? {
        x: m * d,
        y: v * u
    } : {
        x: v * u,
        y: m * d
    }
}
const m2 = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: o, y: s, placement: a, middlewareData: i} = t
              , l = await p2(t, e);
            return a === ((n = i.offset) == null ? void 0 : n.placement) && (r = i.arrow) != null && r.alignmentOffset ? {} : {
                x: o + l.x,
                y: s + l.y,
                data: {
                    ...l,
                    placement: a
                }
            }
        }
    }
}
  , h2 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: o} = t
              , {mainAxis: s=!0, crossAxis: a=!1, limiter: i={
                fn: w => {
                    let {x: y, y: h} = w;
                    return {
                        x: y,
                        y: h
                    }
                }
            }, ...l} = Un(e, t)
              , u = {
                x: n,
                y: r
            }
              , d = await oa(t, l)
              , p = yn(Vn(o))
              , v = $d(p);
            let m = u[v]
              , b = u[p];
            if (s) {
                const w = v === "y" ? "top" : "left"
                  , y = v === "y" ? "bottom" : "right"
                  , h = m + d[w]
                  , x = m - d[y];
                m = Eu(h, m, x)
            }
            if (a) {
                const w = p === "y" ? "top" : "left"
                  , y = p === "y" ? "bottom" : "right"
                  , h = b + d[w]
                  , x = b - d[y];
                b = Eu(h, b, x)
            }
            const g = i.fn({
                ...t,
                [v]: m,
                [p]: b
            });
            return {
                ...g,
                data: {
                    x: g.x - n,
                    y: g.y - r,
                    enabled: {
                        [v]: s,
                        [p]: a
                    }
                }
            }
        }
    }
}
  , g2 = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: o, rects: s, middlewareData: a} = t
              , {offset: i=0, mainAxis: l=!0, crossAxis: u=!0} = Un(e, t)
              , d = {
                x: n,
                y: r
            }
              , p = yn(o)
              , v = $d(p);
            let m = d[v]
              , b = d[p];
            const g = Un(i, t)
              , w = typeof g == "number" ? {
                mainAxis: g,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...g
            };
            if (l) {
                const x = v === "y" ? "height" : "width"
                  , S = s.reference[v] - s.floating[x] + w.mainAxis
                  , E = s.reference[v] + s.reference[x] - w.mainAxis;
                m < S ? m = S : m > E && (m = E)
            }
            if (u) {
                var y, h;
                const x = v === "y" ? "width" : "height"
                  , S = Pg.has(Vn(o))
                  , E = s.reference[p] - s.floating[x] + (S && ((y = a.offset) == null ? void 0 : y[p]) || 0) + (S ? 0 : w.crossAxis)
                  , k = s.reference[p] + s.reference[x] + (S ? 0 : ((h = a.offset) == null ? void 0 : h[p]) || 0) - (S ? w.crossAxis : 0);
                b < E ? b = E : b > k && (b = k)
            }
            return {
                [v]: m,
                [p]: b
            }
        }
    }
}
  , v2 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, rects: s, platform: a, elements: i} = t
              , {apply: l= () => {}
            , ...u} = Un(e, t)
              , d = await oa(t, u)
              , p = Vn(o)
              , v = as(o)
              , m = yn(o) === "y"
              , {width: b, height: g} = s.floating;
            let w, y;
            p === "top" || p === "bottom" ? (w = p,
            y = v === (await (a.isRTL == null ? void 0 : a.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (y = p,
            w = v === "end" ? "top" : "bottom");
            const h = g - d.top - d.bottom
              , x = b - d.left - d.right
              , S = wr(g - d[w], h)
              , E = wr(b - d[y], x)
              , k = !t.middlewareData.shift;
            let C = S
              , j = E;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (j = x),
            (r = t.middlewareData.shift) != null && r.enabled.y && (C = h),
            k && !v) {
                const M = Nt(d.left, 0)
                  , $ = Nt(d.right, 0)
                  , D = Nt(d.top, 0)
                  , V = Nt(d.bottom, 0);
                m ? j = b - 2 * (M !== 0 || $ !== 0 ? M + $ : Nt(d.left, d.right)) : C = g - 2 * (D !== 0 || V !== 0 ? D + V : Nt(d.top, d.bottom))
            }
            await l({
                ...t,
                availableWidth: j,
                availableHeight: C
            });
            const A = await a.getDimensions(i.floating);
            return b !== A.width || g !== A.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function xl() {
    return typeof window < "u"
}
function is(e) {
    return Rg(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function Pt(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function En(e) {
    var t;
    return (t = (Rg(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function Rg(e) {
    return xl() ? e instanceof Node || e instanceof Pt(e).Node : !1
}
function rn(e) {
    return xl() ? e instanceof Element || e instanceof Pt(e).Element : !1
}
function Sn(e) {
    return xl() ? e instanceof HTMLElement || e instanceof Pt(e).HTMLElement : !1
}
function Op(e) {
    return !xl() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Pt(e).ShadowRoot
}
const y2 = new Set(["inline", "contents"]);
function va(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: o} = on(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !y2.has(o)
}
const x2 = new Set(["table", "td", "th"]);
function w2(e) {
    return x2.has(is(e))
}
const b2 = [":popover-open", ":modal"];
function wl(e) {
    return b2.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
const S2 = ["transform", "translate", "scale", "rotate", "perspective"]
  , E2 = ["transform", "translate", "scale", "rotate", "perspective", "filter"]
  , C2 = ["paint", "layout", "strict", "content"];
function Vd(e) {
    const t = Wd()
      , n = rn(e) ? on(e) : e;
    return S2.some(r => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || E2.some(r => (n.willChange || "").includes(r)) || C2.some(r => (n.contain || "").includes(r))
}
function k2(e) {
    let t = br(e);
    for (; Sn(t) && !Xo(t); ) {
        if (Vd(t))
            return t;
        if (wl(t))
            return null;
        t = br(t)
    }
    return null
}
function Wd() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const N2 = new Set(["html", "body", "#document"]);
function Xo(e) {
    return N2.has(is(e))
}
function on(e) {
    return Pt(e).getComputedStyle(e)
}
function bl(e) {
    return rn(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function br(e) {
    if (is(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || Op(e) && e.host || En(e);
    return Op(t) ? t.host : t
}
function Ag(e) {
    const t = br(e);
    return Xo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Sn(t) && va(t) ? t : Ag(t)
}
function sa(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const o = Ag(e)
      , s = o === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , a = Pt(o);
    if (s) {
        const i = ku(a);
        return t.concat(a, a.visualViewport || [], va(o) ? o : [], i && n ? sa(i) : [])
    }
    return t.concat(o, sa(o, [], n))
}
function ku(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function Fg(e) {
    const t = on(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const o = Sn(e)
      , s = o ? e.offsetWidth : n
      , a = o ? e.offsetHeight : r
      , i = Wi(n) !== s || Wi(r) !== a;
    return i && (n = s,
    r = a),
    {
        width: n,
        height: r,
        $: i
    }
}
function Hd(e) {
    return rn(e) ? e : e.contextElement
}
function Fo(e) {
    const t = Hd(e);
    if (!Sn(t))
        return bn(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: o, $: s} = Fg(t);
    let a = (s ? Wi(n.width) : n.width) / r
      , i = (s ? Wi(n.height) : n.height) / o;
    return (!a || !Number.isFinite(a)) && (a = 1),
    (!i || !Number.isFinite(i)) && (i = 1),
    {
        x: a,
        y: i
    }
}
const T2 = bn(0);
function Mg(e) {
    const t = Pt(e);
    return !Wd() || !t.visualViewport ? T2 : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function j2(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== Pt(e) ? !1 : t
}
function qr(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const o = e.getBoundingClientRect()
      , s = Hd(e);
    let a = bn(1);
    t && (r ? rn(r) && (a = Fo(r)) : a = Fo(e));
    const i = j2(s, n, r) ? Mg(s) : bn(0);
    let l = (o.left + i.x) / a.x
      , u = (o.top + i.y) / a.y
      , d = o.width / a.x
      , p = o.height / a.y;
    if (s) {
        const v = Pt(s)
          , m = r && rn(r) ? Pt(r) : r;
        let b = v
          , g = ku(b);
        for (; g && r && m !== b; ) {
            const w = Fo(g)
              , y = g.getBoundingClientRect()
              , h = on(g)
              , x = y.left + (g.clientLeft + parseFloat(h.paddingLeft)) * w.x
              , S = y.top + (g.clientTop + parseFloat(h.paddingTop)) * w.y;
            l *= w.x,
            u *= w.y,
            d *= w.x,
            p *= w.y,
            l += x,
            u += S,
            b = Pt(g),
            g = ku(b)
        }
    }
    return Yi({
        width: d,
        height: p,
        x: l,
        y: u
    })
}
function Yd(e, t) {
    const n = bl(e).scrollLeft;
    return t ? t.left + n : qr(En(e)).left + n
}
function Og(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect()
      , o = r.left + t.scrollLeft - (n ? 0 : Yd(e, r))
      , s = r.top + t.scrollTop;
    return {
        x: o,
        y: s
    }
}
function P2(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: o} = e;
    const s = o === "fixed"
      , a = En(r)
      , i = t ? wl(t.floating) : !1;
    if (r === a || i && s)
        return n;
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = bn(1);
    const d = bn(0)
      , p = Sn(r);
    if ((p || !p && !s) && ((is(r) !== "body" || va(a)) && (l = bl(r)),
    Sn(r))) {
        const m = qr(r);
        u = Fo(r),
        d.x = m.x + r.clientLeft,
        d.y = m.y + r.clientTop
    }
    const v = a && !p && !s ? Og(a, l, !0) : bn(0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - l.scrollLeft * u.x + d.x + v.x,
        y: n.y * u.y - l.scrollTop * u.y + d.y + v.y
    }
}
function R2(e) {
    return Array.from(e.getClientRects())
}
function A2(e) {
    const t = En(e)
      , n = bl(e)
      , r = e.ownerDocument.body
      , o = Nt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , s = Nt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let a = -n.scrollLeft + Yd(e);
    const i = -n.scrollTop;
    return on(r).direction === "rtl" && (a += Nt(t.clientWidth, r.clientWidth) - o),
    {
        width: o,
        height: s,
        x: a,
        y: i
    }
}
function F2(e, t) {
    const n = Pt(e)
      , r = En(e)
      , o = n.visualViewport;
    let s = r.clientWidth
      , a = r.clientHeight
      , i = 0
      , l = 0;
    if (o) {
        s = o.width,
        a = o.height;
        const u = Wd();
        (!u || u && t === "fixed") && (i = o.offsetLeft,
        l = o.offsetTop)
    }
    return {
        width: s,
        height: a,
        x: i,
        y: l
    }
}
const M2 = new Set(["absolute", "fixed"]);
function O2(e, t) {
    const n = qr(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , o = n.left + e.clientLeft
      , s = Sn(e) ? Fo(e) : bn(1)
      , a = e.clientWidth * s.x
      , i = e.clientHeight * s.y
      , l = o * s.x
      , u = r * s.y;
    return {
        width: a,
        height: i,
        x: l,
        y: u
    }
}
function Dp(e, t, n) {
    let r;
    if (t === "viewport")
        r = F2(e, n);
    else if (t === "document")
        r = A2(En(e));
    else if (rn(t))
        r = O2(t, n);
    else {
        const o = Mg(e);
        r = {
            x: t.x - o.x,
            y: t.y - o.y,
            width: t.width,
            height: t.height
        }
    }
    return Yi(r)
}
function Dg(e, t) {
    const n = br(e);
    return n === t || !rn(n) || Xo(n) ? !1 : on(n).position === "fixed" || Dg(n, t)
}
function D2(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = sa(e, [], !1).filter(i => rn(i) && is(i) !== "body")
      , o = null;
    const s = on(e).position === "fixed";
    let a = s ? br(e) : e;
    for (; rn(a) && !Xo(a); ) {
        const i = on(a)
          , l = Vd(a);
        !l && i.position === "fixed" && (o = null),
        (s ? !l && !o : !l && i.position === "static" && !!o && M2.has(o.position) || va(a) && !l && Dg(e, a)) ? r = r.filter(d => d !== a) : o = i,
        a = br(a)
    }
    return t.set(e, r),
    r
}
function I2(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: o} = e;
    const a = [...n === "clippingAncestors" ? wl(t) ? [] : D2(t, this._c) : [].concat(n), r]
      , i = a[0]
      , l = a.reduce( (u, d) => {
        const p = Dp(t, d, o);
        return u.top = Nt(p.top, u.top),
        u.right = wr(p.right, u.right),
        u.bottom = wr(p.bottom, u.bottom),
        u.left = Nt(p.left, u.left),
        u
    }
    , Dp(t, i, o));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}
function _2(e) {
    const {width: t, height: n} = Fg(e);
    return {
        width: t,
        height: n
    }
}
function L2(e, t, n) {
    const r = Sn(t)
      , o = En(t)
      , s = n === "fixed"
      , a = qr(e, !0, s, t);
    let i = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = bn(0);
    function u() {
        l.x = Yd(o)
    }
    if (r || !r && !s)
        if ((is(t) !== "body" || va(o)) && (i = bl(t)),
        r) {
            const m = qr(t, !0, s, t);
            l.x = m.x + t.clientLeft,
            l.y = m.y + t.clientTop
        } else
            o && u();
    s && !r && o && u();
    const d = o && !r && !s ? Og(o, i) : bn(0)
      , p = a.left + i.scrollLeft - l.x - d.x
      , v = a.top + i.scrollTop - l.y - d.y;
    return {
        x: p,
        y: v,
        width: a.width,
        height: a.height
    }
}
function mc(e) {
    return on(e).position === "static"
}
function Ip(e, t) {
    if (!Sn(e) || on(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return En(e) === n && (n = n.ownerDocument.body),
    n
}
function Ig(e, t) {
    const n = Pt(e);
    if (wl(e))
        return n;
    if (!Sn(e)) {
        let o = br(e);
        for (; o && !Xo(o); ) {
            if (rn(o) && !mc(o))
                return o;
            o = br(o)
        }
        return n
    }
    let r = Ip(e, t);
    for (; r && w2(r) && mc(r); )
        r = Ip(r, t);
    return r && Xo(r) && mc(r) && !Vd(r) ? n : r || k2(e) || n
}
const z2 = async function(e) {
    const t = this.getOffsetParent || Ig
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: L2(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function $2(e) {
    return on(e).direction === "rtl"
}
const B2 = {
    convertOffsetParentRelativeRectToViewportRelativeRect: P2,
    getDocumentElement: En,
    getClippingRect: I2,
    getOffsetParent: Ig,
    getElementRects: z2,
    getClientRects: R2,
    getDimensions: _2,
    getScale: Fo,
    isElement: rn,
    isRTL: $2
};
function _g(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}
function U2(e, t) {
    let n = null, r;
    const o = En(e);
    function s() {
        var i;
        clearTimeout(r),
        (i = n) == null || i.disconnect(),
        n = null
    }
    function a(i, l) {
        i === void 0 && (i = !1),
        l === void 0 && (l = 1),
        s();
        const u = e.getBoundingClientRect()
          , {left: d, top: p, width: v, height: m} = u;
        if (i || t(),
        !v || !m)
            return;
        const b = Qa(p)
          , g = Qa(o.clientWidth - (d + v))
          , w = Qa(o.clientHeight - (p + m))
          , y = Qa(d)
          , x = {
            rootMargin: -b + "px " + -g + "px " + -w + "px " + -y + "px",
            threshold: Nt(0, wr(1, l)) || 1
        };
        let S = !0;
        function E(k) {
            const C = k[0].intersectionRatio;
            if (C !== l) {
                if (!S)
                    return a();
                C ? a(!1, C) : r = setTimeout( () => {
                    a(!1, 1e-7)
                }
                , 1e3)
            }
            C === 1 && !_g(u, e.getBoundingClientRect()) && a(),
            S = !1
        }
        try {
            n = new IntersectionObserver(E,{
                ...x,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(E,x)
        }
        n.observe(e)
    }
    return a(!0),
    s
}
function V2(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: o=!0, ancestorResize: s=!0, elementResize: a=typeof ResizeObserver == "function", layoutShift: i=typeof IntersectionObserver == "function", animationFrame: l=!1} = r
      , u = Hd(e)
      , d = o || s ? [...u ? sa(u) : [], ...sa(t)] : [];
    d.forEach(y => {
        o && y.addEventListener("scroll", n, {
            passive: !0
        }),
        s && y.addEventListener("resize", n)
    }
    );
    const p = u && i ? U2(u, n) : null;
    let v = -1
      , m = null;
    a && (m = new ResizeObserver(y => {
        let[h] = y;
        h && h.target === u && m && (m.unobserve(t),
        cancelAnimationFrame(v),
        v = requestAnimationFrame( () => {
            var x;
            (x = m) == null || x.observe(t)
        }
        )),
        n()
    }
    ),
    u && !l && m.observe(u),
    m.observe(t));
    let b, g = l ? qr(e) : null;
    l && w();
    function w() {
        const y = qr(e);
        g && !_g(g, y) && n(),
        g = y,
        b = requestAnimationFrame(w)
    }
    return n(),
    () => {
        var y;
        d.forEach(h => {
            o && h.removeEventListener("scroll", n),
            s && h.removeEventListener("resize", n)
        }
        ),
        p == null || p(),
        (y = m) == null || y.disconnect(),
        m = null,
        l && cancelAnimationFrame(b)
    }
}
const W2 = m2
  , H2 = h2
  , Y2 = d2
  , Q2 = v2
  , K2 = f2
  , _p = u2
  , G2 = g2
  , q2 = (e, t, n) => {
    const r = new Map
      , o = {
        platform: B2,
        ...n
    }
      , s = {
        ...o.platform,
        _c: r
    };
    return c2(e, t, {
        ...o,
        platform: s
    })
}
;
var X2 = typeof document < "u"
  , Z2 = function() {}
  , hi = X2 ? f.useLayoutEffect : Z2;
function Qi(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!Qi(e[r], t[r]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
        n = o.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, o[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const s = o[r];
            if (!(s === "_owner" && e.$$typeof) && !Qi(e[s], t[s]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function Lg(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Lp(e, t) {
    const n = Lg(e);
    return Math.round(t * n) / n
}
function hc(e) {
    const t = f.useRef(e);
    return hi( () => {
        t.current = e
    }
    ),
    t
}
function J2(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, elements: {reference: s, floating: a}={}, transform: i=!0, whileElementsMounted: l, open: u} = e
      , [d,p] = f.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [v,m] = f.useState(r);
    Qi(v, r) || m(r);
    const [b,g] = f.useState(null)
      , [w,y] = f.useState(null)
      , h = f.useCallback(N => {
        N !== k.current && (k.current = N,
        g(N))
    }
    , [])
      , x = f.useCallback(N => {
        N !== C.current && (C.current = N,
        y(N))
    }
    , [])
      , S = s || b
      , E = a || w
      , k = f.useRef(null)
      , C = f.useRef(null)
      , j = f.useRef(d)
      , A = l != null
      , M = hc(l)
      , $ = hc(o)
      , D = hc(u)
      , V = f.useCallback( () => {
        if (!k.current || !C.current)
            return;
        const N = {
            placement: t,
            strategy: n,
            middleware: v
        };
        $.current && (N.platform = $.current),
        q2(k.current, C.current, N).then(T => {
            const I = {
                ...T,
                isPositioned: D.current !== !1
            };
            P.current && !Qi(j.current, I) && (j.current = I,
            ro.flushSync( () => {
                p(I)
            }
            ))
        }
        )
    }
    , [v, t, n, $, D]);
    hi( () => {
        u === !1 && j.current.isPositioned && (j.current.isPositioned = !1,
        p(N => ({
            ...N,
            isPositioned: !1
        })))
    }
    , [u]);
    const P = f.useRef(!1);
    hi( () => (P.current = !0,
    () => {
        P.current = !1
    }
    ), []),
    hi( () => {
        if (S && (k.current = S),
        E && (C.current = E),
        S && E) {
            if (M.current)
                return M.current(S, E, V);
            V()
        }
    }
    , [S, E, V, M, A]);
    const H = f.useMemo( () => ({
        reference: k,
        floating: C,
        setReference: h,
        setFloating: x
    }), [h, x])
      , L = f.useMemo( () => ({
        reference: S,
        floating: E
    }), [S, E])
      , U = f.useMemo( () => {
        const N = {
            position: n,
            left: 0,
            top: 0
        };
        if (!L.floating)
            return N;
        const T = Lp(L.floating, d.x)
          , I = Lp(L.floating, d.y);
        return i ? {
            ...N,
            transform: "translate(" + T + "px, " + I + "px)",
            ...Lg(L.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: T,
            top: I
        }
    }
    , [n, i, L.floating, d.x, d.y]);
    return f.useMemo( () => ({
        ...d,
        update: V,
        refs: H,
        elements: L,
        floatingStyles: U
    }), [d, V, H, L, U])
}
const eE = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: o} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? _p({
                element: r.current,
                padding: o
            }).fn(n) : {} : r ? _p({
                element: r,
                padding: o
            }).fn(n) : {}
        }
    }
}
  , tE = (e, t) => ({
    ...W2(e),
    options: [e, t]
})
  , nE = (e, t) => ({
    ...H2(e),
    options: [e, t]
})
  , rE = (e, t) => ({
    ...G2(e),
    options: [e, t]
})
  , oE = (e, t) => ({
    ...Y2(e),
    options: [e, t]
})
  , sE = (e, t) => ({
    ...Q2(e),
    options: [e, t]
})
  , aE = (e, t) => ({
    ...K2(e),
    options: [e, t]
})
  , iE = (e, t) => ({
    ...eE(e),
    options: [e, t]
});
var lE = "Arrow"
  , zg = f.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: o=5, ...s} = e;
    return c.jsx(se.svg, {
        ...s,
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : c.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
zg.displayName = lE;
var cE = zg;
function uE(e) {
    const [t,n] = f.useState(void 0);
    return He( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length)
                    return;
                const s = o[0];
                let a, i;
                if ("borderBoxSize"in s) {
                    const l = s.borderBoxSize
                      , u = Array.isArray(l) ? l[0] : l;
                    a = u.inlineSize,
                    i = u.blockSize
                } else
                    a = e.offsetWidth,
                    i = e.offsetHeight;
                n({
                    width: a,
                    height: i
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var Qd = "Popper"
  , [$g,Sl] = rs(Qd)
  , [dE,Bg] = $g(Qd)
  , Ug = e => {
    const {__scopePopper: t, children: n} = e
      , [r,o] = f.useState(null);
    return c.jsx(dE, {
        scope: t,
        anchor: r,
        onAnchorChange: o,
        children: n
    })
}
;
Ug.displayName = Qd;
var Vg = "PopperAnchor"
  , Wg = f.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...o} = e
      , s = Bg(Vg, n)
      , a = f.useRef(null)
      , i = we(t, a);
    return f.useEffect( () => {
        s.onAnchorChange((r == null ? void 0 : r.current) || a.current)
    }
    ),
    r ? null : c.jsx(se.div, {
        ...o,
        ref: i
    })
}
);
Wg.displayName = Vg;
var Kd = "PopperContent"
  , [fE,pE] = $g(Kd)
  , Hg = f.forwardRef( (e, t) => {
    var _, ae, ge, oe, ee, re;
    const {__scopePopper: n, side: r="bottom", sideOffset: o=0, align: s="center", alignOffset: a=0, arrowPadding: i=0, avoidCollisions: l=!0, collisionBoundary: u=[], collisionPadding: d=0, sticky: p="partial", hideWhenDetached: v=!1, updatePositionStrategy: m="optimized", onPlaced: b, ...g} = e
      , w = Bg(Kd, n)
      , [y,h] = f.useState(null)
      , x = we(t, De => h(De))
      , [S,E] = f.useState(null)
      , k = uE(S)
      , C = (k == null ? void 0 : k.width) ?? 0
      , j = (k == null ? void 0 : k.height) ?? 0
      , A = r + (s !== "center" ? "-" + s : "")
      , M = typeof d == "number" ? d : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...d
    }
      , $ = Array.isArray(u) ? u : [u]
      , D = $.length > 0
      , V = {
        padding: M,
        boundary: $.filter(hE),
        altBoundary: D
    }
      , {refs: P, floatingStyles: H, placement: L, isPositioned: U, middlewareData: N} = J2({
        strategy: "fixed",
        placement: A,
        whileElementsMounted: (...De) => V2(...De, {
            animationFrame: m === "always"
        }),
        elements: {
            reference: w.anchor
        },
        middleware: [tE({
            mainAxis: o + j,
            alignmentAxis: a
        }), l && nE({
            mainAxis: !0,
            crossAxis: !1,
            limiter: p === "partial" ? rE() : void 0,
            ...V
        }), l && oE({
            ...V
        }), sE({
            ...V,
            apply: ({elements: De, rects: Ye, availableWidth: te, availableHeight: Vt}) => {
                const {width: ut, height: Hn} = Ye.reference
                  , Cn = De.floating.style;
                Cn.setProperty("--radix-popper-available-width", `${te}px`),
                Cn.setProperty("--radix-popper-available-height", `${Vt}px`),
                Cn.setProperty("--radix-popper-anchor-width", `${ut}px`),
                Cn.setProperty("--radix-popper-anchor-height", `${Hn}px`)
            }
        }), S && iE({
            element: S,
            padding: i
        }), gE({
            arrowWidth: C,
            arrowHeight: j
        }), v && aE({
            strategy: "referenceHidden",
            ...V
        })]
    })
      , [T,I] = Kg(L)
      , Y = nn(b);
    He( () => {
        U && (Y == null || Y())
    }
    , [U, Y]);
    const B = (_ = N.arrow) == null ? void 0 : _.x
      , q = (ae = N.arrow) == null ? void 0 : ae.y
      , Q = ((ge = N.arrow) == null ? void 0 : ge.centerOffset) !== 0
      , [fe,he] = f.useState();
    return He( () => {
        y && he(window.getComputedStyle(y).zIndex)
    }
    , [y]),
    c.jsx("div", {
        ref: P.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...H,
            transform: U ? H.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: fe,
            "--radix-popper-transform-origin": [(oe = N.transformOrigin) == null ? void 0 : oe.x, (ee = N.transformOrigin) == null ? void 0 : ee.y].join(" "),
            ...((re = N.hide) == null ? void 0 : re.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: c.jsx(fE, {
            scope: n,
            placedSide: T,
            onArrowChange: E,
            arrowX: B,
            arrowY: q,
            shouldHideArrow: Q,
            children: c.jsx(se.div, {
                "data-side": T,
                "data-align": I,
                ...g,
                ref: x,
                style: {
                    ...g.style,
                    animation: U ? void 0 : "none"
                }
            })
        })
    })
}
);
Hg.displayName = Kd;
var Yg = "PopperArrow"
  , mE = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , Qg = f.forwardRef(function(t, n) {
    const {__scopePopper: r, ...o} = t
      , s = pE(Yg, r)
      , a = mE[s.placedSide];
    return c.jsx("span", {
        ref: s.onArrowChange,
        style: {
            position: "absolute",
            left: s.arrowX,
            top: s.arrowY,
            [a]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[s.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[s.placedSide],
            visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: c.jsx(cE, {
            ...o,
            ref: n,
            style: {
                ...o.style,
                display: "block"
            }
        })
    })
});
Qg.displayName = Yg;
function hE(e) {
    return e !== null
}
var gE = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var w, y, h;
        const {placement: n, rects: r, middlewareData: o} = t
          , a = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0
          , i = a ? 0 : e.arrowWidth
          , l = a ? 0 : e.arrowHeight
          , [u,d] = Kg(n)
          , p = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[d]
          , v = (((y = o.arrow) == null ? void 0 : y.x) ?? 0) + i / 2
          , m = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + l / 2;
        let b = ""
          , g = "";
        return u === "bottom" ? (b = a ? p : `${v}px`,
        g = `${-l}px`) : u === "top" ? (b = a ? p : `${v}px`,
        g = `${r.floating.height + l}px`) : u === "right" ? (b = `${-l}px`,
        g = a ? p : `${m}px`) : u === "left" && (b = `${r.floating.width + l}px`,
        g = a ? p : `${m}px`),
        {
            data: {
                x: b,
                y: g
            }
        }
    }
});
function Kg(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var vE = Ug
  , Gg = Wg
  , qg = Hg
  , Xg = Qg
  , [El,dN] = rs("Tooltip", [Sl])
  , Gd = Sl()
  , Zg = "TooltipProvider"
  , yE = 700
  , zp = "tooltip.open"
  , [xE,Jg] = El(Zg)
  , ev = e => {
    const {__scopeTooltip: t, delayDuration: n=yE, skipDelayDuration: r=300, disableHoverableContent: o=!1, children: s} = e
      , a = f.useRef(!0)
      , i = f.useRef(!1)
      , l = f.useRef(0);
    return f.useEffect( () => {
        const u = l.current;
        return () => window.clearTimeout(u)
    }
    , []),
    c.jsx(xE, {
        scope: t,
        isOpenDelayedRef: a,
        delayDuration: n,
        onOpen: f.useCallback( () => {
            window.clearTimeout(l.current),
            a.current = !1
        }
        , []),
        onClose: f.useCallback( () => {
            window.clearTimeout(l.current),
            l.current = window.setTimeout( () => a.current = !0, r)
        }
        , [r]),
        isPointerInTransitRef: i,
        onPointerInTransitChange: f.useCallback(u => {
            i.current = u
        }
        , []),
        disableHoverableContent: o,
        children: s
    })
}
;
ev.displayName = Zg;
var tv = "Tooltip"
  , [fN,Cl] = El(tv)
  , Nu = "TooltipTrigger"
  , wE = f.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = Cl(Nu, n)
      , s = Jg(Nu, n)
      , a = Gd(n)
      , i = f.useRef(null)
      , l = we(t, i, o.onTriggerChange)
      , u = f.useRef(!1)
      , d = f.useRef(!1)
      , p = f.useCallback( () => u.current = !1, []);
    return f.useEffect( () => () => document.removeEventListener("pointerup", p), [p]),
    c.jsx(Gg, {
        asChild: !0,
        ...a,
        children: c.jsx(se.button, {
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute,
            ...r,
            ref: l,
            onPointerMove: J(e.onPointerMove, v => {
                v.pointerType !== "touch" && !d.current && !s.isPointerInTransitRef.current && (o.onTriggerEnter(),
                d.current = !0)
            }
            ),
            onPointerLeave: J(e.onPointerLeave, () => {
                o.onTriggerLeave(),
                d.current = !1
            }
            ),
            onPointerDown: J(e.onPointerDown, () => {
                o.open && o.onClose(),
                u.current = !0,
                document.addEventListener("pointerup", p, {
                    once: !0
                })
            }
            ),
            onFocus: J(e.onFocus, () => {
                u.current || o.onOpen()
            }
            ),
            onBlur: J(e.onBlur, o.onClose),
            onClick: J(e.onClick, o.onClose)
        })
    })
}
);
wE.displayName = Nu;
var bE = "TooltipPortal"
  , [pN,SE] = El(bE, {
    forceMount: void 0
})
  , Zo = "TooltipContent"
  , nv = f.forwardRef( (e, t) => {
    const n = SE(Zo, e.__scopeTooltip)
      , {forceMount: r=n.forceMount, side: o="top", ...s} = e
      , a = Cl(Zo, e.__scopeTooltip);
    return c.jsx(os, {
        present: r || a.open,
        children: a.disableHoverableContent ? c.jsx(rv, {
            side: o,
            ...s,
            ref: t
        }) : c.jsx(EE, {
            side: o,
            ...s,
            ref: t
        })
    })
}
)
  , EE = f.forwardRef( (e, t) => {
    const n = Cl(Zo, e.__scopeTooltip)
      , r = Jg(Zo, e.__scopeTooltip)
      , o = f.useRef(null)
      , s = we(t, o)
      , [a,i] = f.useState(null)
      , {trigger: l, onClose: u} = n
      , d = o.current
      , {onPointerInTransitChange: p} = r
      , v = f.useCallback( () => {
        i(null),
        p(!1)
    }
    , [p])
      , m = f.useCallback( (b, g) => {
        const w = b.currentTarget
          , y = {
            x: b.clientX,
            y: b.clientY
        }
          , h = jE(y, w.getBoundingClientRect())
          , x = PE(y, h)
          , S = RE(g.getBoundingClientRect())
          , E = FE([...x, ...S]);
        i(E),
        p(!0)
    }
    , [p]);
    return f.useEffect( () => () => v(), [v]),
    f.useEffect( () => {
        if (l && d) {
            const b = w => m(w, d)
              , g = w => m(w, l);
            return l.addEventListener("pointerleave", b),
            d.addEventListener("pointerleave", g),
            () => {
                l.removeEventListener("pointerleave", b),
                d.removeEventListener("pointerleave", g)
            }
        }
    }
    , [l, d, m, v]),
    f.useEffect( () => {
        if (a) {
            const b = g => {
                const w = g.target
                  , y = {
                    x: g.clientX,
                    y: g.clientY
                }
                  , h = (l == null ? void 0 : l.contains(w)) || (d == null ? void 0 : d.contains(w))
                  , x = !AE(y, a);
                h ? v() : x && (v(),
                u())
            }
            ;
            return document.addEventListener("pointermove", b),
            () => document.removeEventListener("pointermove", b)
        }
    }
    , [l, d, a, u, v]),
    c.jsx(rv, {
        ...e,
        ref: s
    })
}
)
  , [CE,kE] = El(tv, {
    isInside: !1
})
  , NE = Rw("TooltipContent")
  , rv = f.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: s, onPointerDownOutside: a, ...i} = e
      , l = Cl(Zo, n)
      , u = Gd(n)
      , {onClose: d} = l;
    return f.useEffect( () => (document.addEventListener(zp, d),
    () => document.removeEventListener(zp, d)), [d]),
    f.useEffect( () => {
        if (l.trigger) {
            const p = v => {
                const m = v.target;
                m != null && m.contains(l.trigger) && d()
            }
            ;
            return window.addEventListener("scroll", p, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", p, {
                capture: !0
            })
        }
    }
    , [l.trigger, d]),
    c.jsx(ha, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: a,
        onFocusOutside: p => p.preventDefault(),
        onDismiss: d,
        children: c.jsxs(qg, {
            "data-state": l.stateAttribute,
            ...u,
            ...i,
            ref: t,
            style: {
                ...i.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [c.jsx(NE, {
                children: r
            }), c.jsx(CE, {
                scope: n,
                isInside: !0,
                children: c.jsx(Zw, {
                    id: l.contentId,
                    role: "tooltip",
                    children: o || r
                })
            })]
        })
    })
}
);
nv.displayName = Zo;
var ov = "TooltipArrow"
  , TE = f.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = Gd(n);
    return kE(ov, n).isInside ? null : c.jsx(Xg, {
        ...o,
        ...r,
        ref: t
    })
}
);
TE.displayName = ov;
function jE(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , o = Math.abs(t.right - e.x)
      , s = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, s)) {
    case s:
        return "left";
    case o:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function PE(e, t, n=5) {
    const r = [];
    switch (t) {
    case "top":
        r.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        r.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return r
}
function RE(e) {
    const {top: t, right: n, bottom: r, left: o} = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}
function AE(e, t) {
    const {x: n, y: r} = e;
    let o = !1;
    for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
        const i = t[s]
          , l = t[a]
          , u = i.x
          , d = i.y
          , p = l.x
          , v = l.y;
        d > r != v > r && n < (p - u) * (r - d) / (v - d) + u && (o = !o)
    }
    return o
}
function FE(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    ME(t)
}
function ME(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2; ) {
            const s = t[t.length - 1]
              , a = t[t.length - 2];
            if ((s.x - a.x) * (o.y - a.y) >= (s.y - a.y) * (o.x - a.x))
                t.pop();
            else
                break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2; ) {
            const s = n[n.length - 1]
              , a = n[n.length - 2];
            if ((s.x - a.x) * (o.y - a.y) >= (s.y - a.y) * (o.x - a.x))
                n.pop();
            else
                break
        }
        n.push(o)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var OE = ev
  , sv = nv;
const DE = OE
  , IE = f.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => c.jsx(sv, {
    ref: r,
    sideOffset: t,
    className: je("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
IE.displayName = sv.displayName;
var kl = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , Nl = typeof window > "u" || "Deno"in globalThis;
function Kt() {}
function _E(e, t) {
    return typeof e == "function" ? e(t) : e
}
function LE(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function zE(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function Tu(e, t) {
    return typeof e == "function" ? e(t) : e
}
function $E(e, t) {
    return typeof e == "function" ? e(t) : e
}
function $p(e, t) {
    const {type: n="all", exact: r, fetchStatus: o, predicate: s, queryKey: a, stale: i} = e;
    if (a) {
        if (r) {
            if (t.queryHash !== qd(a, t.options))
                return !1
        } else if (!ia(t.queryKey, a))
            return !1
    }
    if (n !== "all") {
        const l = t.isActive();
        if (n === "active" && !l || n === "inactive" && l)
            return !1
    }
    return !(typeof i == "boolean" && t.isStale() !== i || o && o !== t.state.fetchStatus || s && !s(t))
}
function Bp(e, t) {
    const {exact: n, status: r, predicate: o, mutationKey: s} = e;
    if (s) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (aa(t.options.mutationKey) !== aa(s))
                return !1
        } else if (!ia(t.options.mutationKey, s))
            return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}
function qd(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || aa)(e)
}
function aa(e) {
    return JSON.stringify(e, (t, n) => ju(n) ? Object.keys(n).sort().reduce( (r, o) => (r[o] = n[o],
    r), {}) : n)
}
function ia(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => ia(e[n], t[n])) : !1
}
function av(e, t) {
    if (e === t)
        return e;
    const n = Up(e) && Up(t);
    if (n || ju(e) && ju(t)) {
        const r = n ? e : Object.keys(e)
          , o = r.length
          , s = n ? t : Object.keys(t)
          , a = s.length
          , i = n ? [] : {}
          , l = new Set(r);
        let u = 0;
        for (let d = 0; d < a; d++) {
            const p = n ? d : s[d];
            (!n && l.has(p) || n) && e[p] === void 0 && t[p] === void 0 ? (i[p] = void 0,
            u++) : (i[p] = av(e[p], t[p]),
            i[p] === e[p] && e[p] !== void 0 && u++)
        }
        return o === a && u === o ? e : i
    }
    return t
}
function Up(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function ju(e) {
    if (!Vp(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!Vp(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function Vp(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function BE(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function UE(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? av(e, t) : t
}
function VE(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function WE(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var Xd = Symbol();
function iv(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Xd ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var _r, nr, Do, vm, HE = (vm = class extends kl {
    constructor() {
        super();
        le(this, _r);
        le(this, nr);
        le(this, Do);
        G(this, Do, t => {
            if (!Nl && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        R(this, nr) || this.setEventListener(R(this, Do))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = R(this, nr)) == null || t.call(this),
        G(this, nr, void 0))
    }
    setEventListener(t) {
        var n;
        G(this, Do, t),
        (n = R(this, nr)) == null || n.call(this),
        G(this, nr, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        R(this, _r) !== t && (G(this, _r, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof R(this, _r) == "boolean" ? R(this, _r) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
_r = new WeakMap,
nr = new WeakMap,
Do = new WeakMap,
vm), lv = new HE, Io, rr, _o, ym, YE = (ym = class extends kl {
    constructor() {
        super();
        le(this, Io, !0);
        le(this, rr);
        le(this, _o);
        G(this, _o, t => {
            if (!Nl && window.addEventListener) {
                const n = () => t(!0)
                  , r = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        R(this, rr) || this.setEventListener(R(this, _o))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = R(this, rr)) == null || t.call(this),
        G(this, rr, void 0))
    }
    setEventListener(t) {
        var n;
        G(this, _o, t),
        (n = R(this, rr)) == null || n.call(this),
        G(this, rr, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        R(this, Io) !== t && (G(this, Io, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return R(this, Io)
    }
}
,
Io = new WeakMap,
rr = new WeakMap,
_o = new WeakMap,
ym), Ki = new YE;
function QE() {
    let e, t;
    const n = new Promise( (o, s) => {
        e = o,
        t = s
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(o) {
        Object.assign(n, o),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }),
        e(o)
    }
    ,
    n.reject = o => {
        r({
            status: "rejected",
            reason: o
        }),
        t(o)
    }
    ,
    n
}
function KE(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function cv(e) {
    return (e ?? "online") === "online" ? Ki.isOnline() : !0
}
var uv = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function gc(e) {
    return e instanceof uv
}
function dv(e) {
    let t = !1, n = 0, r = !1, o;
    const s = QE()
      , a = g => {
        var w;
        r || (v(new uv(g)),
        (w = e.abort) == null || w.call(e))
    }
      , i = () => {
        t = !0
    }
      , l = () => {
        t = !1
    }
      , u = () => lv.isFocused() && (e.networkMode === "always" || Ki.isOnline()) && e.canRun()
      , d = () => cv(e.networkMode) && e.canRun()
      , p = g => {
        var w;
        r || (r = !0,
        (w = e.onSuccess) == null || w.call(e, g),
        o == null || o(),
        s.resolve(g))
    }
      , v = g => {
        var w;
        r || (r = !0,
        (w = e.onError) == null || w.call(e, g),
        o == null || o(),
        s.reject(g))
    }
      , m = () => new Promise(g => {
        var w;
        o = y => {
            (r || u()) && g(y)
        }
        ,
        (w = e.onPause) == null || w.call(e)
    }
    ).then( () => {
        var g;
        o = void 0,
        r || (g = e.onContinue) == null || g.call(e)
    }
    )
      , b = () => {
        if (r)
            return;
        let g;
        const w = n === 0 ? e.initialPromise : void 0;
        try {
            g = w ?? e.fn()
        } catch (y) {
            g = Promise.reject(y)
        }
        Promise.resolve(g).then(p).catch(y => {
            var k;
            if (r)
                return;
            const h = e.retry ?? (Nl ? 0 : 3)
              , x = e.retryDelay ?? KE
              , S = typeof x == "function" ? x(n, y) : x
              , E = h === !0 || typeof h == "number" && n < h || typeof h == "function" && h(n, y);
            if (t || !E) {
                v(y);
                return
            }
            n++,
            (k = e.onFail) == null || k.call(e, n, y),
            BE(S).then( () => u() ? void 0 : m()).then( () => {
                t ? v(y) : b()
            }
            )
        }
        )
    }
    ;
    return {
        promise: s,
        cancel: a,
        continue: () => (o == null || o(),
        s),
        cancelRetry: i,
        continueRetry: l,
        canStart: d,
        start: () => (d() ? b() : m().then(b),
        s)
    }
}
var GE = e => setTimeout(e, 0);
function qE() {
    let e = []
      , t = 0
      , n = i => {
        i()
    }
      , r = i => {
        i()
    }
      , o = GE;
    const s = i => {
        t ? e.push(i) : o( () => {
            n(i)
        }
        )
    }
      , a = () => {
        const i = e;
        e = [],
        i.length && o( () => {
            r( () => {
                i.forEach(l => {
                    n(l)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: i => {
            let l;
            t++;
            try {
                l = i()
            } finally {
                t--,
                t || a()
            }
            return l
        }
        ,
        batchCalls: i => (...l) => {
            s( () => {
                i(...l)
            }
            )
        }
        ,
        schedule: s,
        setNotifyFunction: i => {
            n = i
        }
        ,
        setBatchNotifyFunction: i => {
            r = i
        }
        ,
        setScheduler: i => {
            o = i
        }
    }
}
var at = qE(), Lr, xm, fv = (xm = class {
    constructor() {
        le(this, Lr)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        LE(this.gcTime) && G(this, Lr, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (Nl ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        R(this, Lr) && (clearTimeout(R(this, Lr)),
        G(this, Lr, void 0))
    }
}
,
Lr = new WeakMap,
xm), Lo, zr, It, $r, Ze, la, Br, Gt, An, wm, XE = (wm = class extends fv {
    constructor(t) {
        super();
        le(this, Gt);
        le(this, Lo);
        le(this, zr);
        le(this, It);
        le(this, $r);
        le(this, Ze);
        le(this, la);
        le(this, Br);
        G(this, Br, !1),
        G(this, la, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        G(this, $r, t.client),
        G(this, It, R(this, $r).getQueryCache()),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        G(this, Lo, JE(this.options)),
        this.state = t.state ?? R(this, Lo),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = R(this, Ze)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...R(this, la),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && R(this, It).remove(this)
    }
    setData(t, n) {
        const r = UE(this.state.data, t, this.options);
        return Ge(this, Gt, An).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        Ge(this, Gt, An).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, o;
        const n = (r = R(this, Ze)) == null ? void 0 : r.promise;
        return (o = R(this, Ze)) == null || o.cancel(t),
        n ? n.then(Kt).catch(Kt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(R(this, Lo))
    }
    isActive() {
        return this.observers.some(t => $E(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Xd || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(t => Tu(t.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(t=0) {
        return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !zE(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = R(this, Ze)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = R(this, Ze)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        R(this, It).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (R(this, Ze) && (R(this, Br) ? R(this, Ze).cancel({
            revert: !0
        }) : R(this, Ze).cancelRetry()),
        this.scheduleGc()),
        R(this, It).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Ge(this, Gt, An).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var u, d, p;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (R(this, Ze))
                return R(this, Ze).continueRetry(),
                R(this, Ze).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const v = this.observers.find(m => m.options.queryFn);
            v && this.setOptions(v.options)
        }
        const r = new AbortController
          , o = v => {
            Object.defineProperty(v, "signal", {
                enumerable: !0,
                get: () => (G(this, Br, !0),
                r.signal)
            })
        }
          , s = () => {
            const v = iv(this.options, n)
              , b = ( () => {
                const g = {
                    client: R(this, $r),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return o(g),
                g
            }
            )();
            return G(this, Br, !1),
            this.options.persister ? this.options.persister(v, b, this) : v(b)
        }
          , i = ( () => {
            const v = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                client: R(this, $r),
                state: this.state,
                fetchFn: s
            };
            return o(v),
            v
        }
        )();
        (u = this.options.behavior) == null || u.onFetch(i, this),
        G(this, zr, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((d = i.fetchOptions) == null ? void 0 : d.meta)) && Ge(this, Gt, An).call(this, {
            type: "fetch",
            meta: (p = i.fetchOptions) == null ? void 0 : p.meta
        });
        const l = v => {
            var m, b, g, w;
            gc(v) && v.silent || Ge(this, Gt, An).call(this, {
                type: "error",
                error: v
            }),
            gc(v) || ((b = (m = R(this, It).config).onError) == null || b.call(m, v, this),
            (w = (g = R(this, It).config).onSettled) == null || w.call(g, this.state.data, v, this)),
            this.scheduleGc()
        }
        ;
        return G(this, Ze, dv({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: i.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: v => {
                var m, b, g, w;
                if (v === void 0) {
                    l(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(v)
                } catch (y) {
                    l(y);
                    return
                }
                (b = (m = R(this, It).config).onSuccess) == null || b.call(m, v, this),
                (w = (g = R(this, It).config).onSettled) == null || w.call(g, v, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: l,
            onFail: (v, m) => {
                Ge(this, Gt, An).call(this, {
                    type: "failed",
                    failureCount: v,
                    error: m
                })
            }
            ,
            onPause: () => {
                Ge(this, Gt, An).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Ge(this, Gt, An).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: i.options.retry,
            retryDelay: i.options.retryDelay,
            networkMode: i.options.networkMode,
            canRun: () => !0
        })),
        R(this, Ze).start()
    }
}
,
Lo = new WeakMap,
zr = new WeakMap,
It = new WeakMap,
$r = new WeakMap,
Ze = new WeakMap,
la = new WeakMap,
Br = new WeakMap,
Gt = new WeakSet,
An = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...r,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...r,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...r,
                ...ZE(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return G(this, zr, void 0),
            {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const o = t.error;
            return gc(o) && o.revert && R(this, zr) ? {
                ...R(this, zr),
                fetchStatus: "idle"
            } : {
                ...r,
                error: o,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: o,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...r,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...r,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    at.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        R(this, It).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
wm);
function ZE(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: cv(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function JE(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var pn, bm, eC = (bm = class extends kl {
    constructor(t={}) {
        super();
        le(this, pn);
        this.config = t,
        G(this, pn, new Map)
    }
    build(t, n, r) {
        const o = n.queryKey
          , s = n.queryHash ?? qd(o, n);
        let a = this.get(s);
        return a || (a = new XE({
            client: t,
            queryKey: o,
            queryHash: s,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(o)
        }),
        this.add(a)),
        a
    }
    add(t) {
        R(this, pn).has(t.queryHash) || (R(this, pn).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = R(this, pn).get(t.queryHash);
        n && (t.destroy(),
        n === t && R(this, pn).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        at.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return R(this, pn).get(t)
    }
    getAll() {
        return [...R(this, pn).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => $p(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => $p(t, r)) : n
    }
    notify(t) {
        at.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        at.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        at.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
pn = new WeakMap,
bm), mn, ot, Ur, hn, qn, Sm, tC = (Sm = class extends fv {
    constructor(t) {
        super();
        le(this, hn);
        le(this, mn);
        le(this, ot);
        le(this, Ur);
        this.mutationId = t.mutationId,
        G(this, ot, t.mutationCache),
        G(this, mn, []),
        this.state = t.state || nC(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        R(this, mn).includes(t) || (R(this, mn).push(t),
        this.clearGcTimeout(),
        R(this, ot).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        G(this, mn, R(this, mn).filter(n => n !== t)),
        this.scheduleGc(),
        R(this, ot).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        R(this, mn).length || (this.state.status === "pending" ? this.scheduleGc() : R(this, ot).remove(this))
    }
    continue() {
        var t;
        return ((t = R(this, Ur)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var s, a, i, l, u, d, p, v, m, b, g, w, y, h, x, S, E, k, C, j;
        const n = () => {
            Ge(this, hn, qn).call(this, {
                type: "continue"
            })
        }
        ;
        G(this, Ur, dv({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (A, M) => {
                Ge(this, hn, qn).call(this, {
                    type: "failed",
                    failureCount: A,
                    error: M
                })
            }
            ,
            onPause: () => {
                Ge(this, hn, qn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => R(this, ot).canRun(this)
        }));
        const r = this.state.status === "pending"
          , o = !R(this, Ur).canStart();
        try {
            if (r)
                n();
            else {
                Ge(this, hn, qn).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: o
                }),
                await ((a = (s = R(this, ot).config).onMutate) == null ? void 0 : a.call(s, t, this));
                const M = await ((l = (i = this.options).onMutate) == null ? void 0 : l.call(i, t));
                M !== this.state.context && Ge(this, hn, qn).call(this, {
                    type: "pending",
                    context: M,
                    variables: t,
                    isPaused: o
                })
            }
            const A = await R(this, Ur).start();
            return await ((d = (u = R(this, ot).config).onSuccess) == null ? void 0 : d.call(u, A, t, this.state.context, this)),
            await ((v = (p = this.options).onSuccess) == null ? void 0 : v.call(p, A, t, this.state.context)),
            await ((b = (m = R(this, ot).config).onSettled) == null ? void 0 : b.call(m, A, null, this.state.variables, this.state.context, this)),
            await ((w = (g = this.options).onSettled) == null ? void 0 : w.call(g, A, null, t, this.state.context)),
            Ge(this, hn, qn).call(this, {
                type: "success",
                data: A
            }),
            A
        } catch (A) {
            try {
                throw await ((h = (y = R(this, ot).config).onError) == null ? void 0 : h.call(y, A, t, this.state.context, this)),
                await ((S = (x = this.options).onError) == null ? void 0 : S.call(x, A, t, this.state.context)),
                await ((k = (E = R(this, ot).config).onSettled) == null ? void 0 : k.call(E, void 0, A, this.state.variables, this.state.context, this)),
                await ((j = (C = this.options).onSettled) == null ? void 0 : j.call(C, void 0, A, t, this.state.context)),
                A
            } finally {
                Ge(this, hn, qn).call(this, {
                    type: "error",
                    error: A
                })
            }
        } finally {
            R(this, ot).runNext(this)
        }
    }
}
,
mn = new WeakMap,
ot = new WeakMap,
Ur = new WeakMap,
hn = new WeakSet,
qn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...r,
                isPaused: !0
            };
        case "continue":
            return {
                ...r,
                isPaused: !1
            };
        case "pending":
            return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    at.batch( () => {
        R(this, mn).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        R(this, ot).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
Sm);
function nC() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var On, qt, ca, Em, rC = (Em = class extends kl {
    constructor(t={}) {
        super();
        le(this, On);
        le(this, qt);
        le(this, ca);
        this.config = t,
        G(this, On, new Set),
        G(this, qt, new Map),
        G(this, ca, 0)
    }
    build(t, n, r) {
        const o = new tC({
            mutationCache: this,
            mutationId: ++ka(this, ca)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o),
        o
    }
    add(t) {
        R(this, On).add(t);
        const n = Ka(t);
        if (typeof n == "string") {
            const r = R(this, qt).get(n);
            r ? r.push(t) : R(this, qt).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (R(this, On).delete(t)) {
            const n = Ka(t);
            if (typeof n == "string") {
                const r = R(this, qt).get(n);
                if (r)
                    if (r.length > 1) {
                        const o = r.indexOf(t);
                        o !== -1 && r.splice(o, 1)
                    } else
                        r[0] === t && R(this, qt).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = Ka(t);
        if (typeof n == "string") {
            const r = R(this, qt).get(n)
              , o = r == null ? void 0 : r.find(s => s.state.status === "pending");
            return !o || o === t
        } else
            return !0
    }
    runNext(t) {
        var r;
        const n = Ka(t);
        if (typeof n == "string") {
            const o = (r = R(this, qt).get(n)) == null ? void 0 : r.find(s => s !== t && s.state.isPaused);
            return (o == null ? void 0 : o.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        at.batch( () => {
            R(this, On).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }
            ),
            R(this, On).clear(),
            R(this, qt).clear()
        }
        )
    }
    getAll() {
        return Array.from(R(this, On))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Bp(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => Bp(t, n))
    }
    notify(t) {
        at.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return at.batch( () => Promise.all(t.map(n => n.continue().catch(Kt))))
    }
}
,
On = new WeakMap,
qt = new WeakMap,
ca = new WeakMap,
Em);
function Ka(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}
function Wp(e) {
    return {
        onFetch: (t, n) => {
            var d, p, v, m, b;
            const r = t.options
              , o = (v = (p = (d = t.fetchOptions) == null ? void 0 : d.meta) == null ? void 0 : p.fetchMore) == null ? void 0 : v.direction
              , s = ((m = t.state.data) == null ? void 0 : m.pages) || []
              , a = ((b = t.state.data) == null ? void 0 : b.pageParams) || [];
            let i = {
                pages: [],
                pageParams: []
            }
              , l = 0;
            const u = async () => {
                let g = !1;
                const w = x => {
                    Object.defineProperty(x, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? g = !0 : t.signal.addEventListener("abort", () => {
                            g = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , y = iv(t.options, t.fetchOptions)
                  , h = async (x, S, E) => {
                    if (g)
                        return Promise.reject();
                    if (S == null && x.pages.length)
                        return Promise.resolve(x);
                    const C = ( () => {
                        const $ = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: S,
                            direction: E ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        return w($),
                        $
                    }
                    )()
                      , j = await y(C)
                      , {maxPages: A} = t.options
                      , M = E ? WE : VE;
                    return {
                        pages: M(x.pages, j, A),
                        pageParams: M(x.pageParams, S, A)
                    }
                }
                ;
                if (o && s.length) {
                    const x = o === "backward"
                      , S = x ? oC : Hp
                      , E = {
                        pages: s,
                        pageParams: a
                    }
                      , k = S(r, E);
                    i = await h(E, k, x)
                } else {
                    const x = e ?? s.length;
                    do {
                        const S = l === 0 ? a[0] ?? r.initialPageParam : Hp(r, i);
                        if (l > 0 && S == null)
                            break;
                        i = await h(i, S),
                        l++
                    } while (l < x)
                }
                return i
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var g, w;
                return (w = (g = t.options).persister) == null ? void 0 : w.call(g, u, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = u
        }
    }
}
function Hp(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function oC(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var Ne, or, sr, zo, $o, ar, Bo, Uo, Cm, sC = (Cm = class {
    constructor(e={}) {
        le(this, Ne);
        le(this, or);
        le(this, sr);
        le(this, zo);
        le(this, $o);
        le(this, ar);
        le(this, Bo);
        le(this, Uo);
        G(this, Ne, e.queryCache || new eC),
        G(this, or, e.mutationCache || new rC),
        G(this, sr, e.defaultOptions || {}),
        G(this, zo, new Map),
        G(this, $o, new Map),
        G(this, ar, 0)
    }
    mount() {
        ka(this, ar)._++,
        R(this, ar) === 1 && (G(this, Bo, lv.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            R(this, Ne).onFocus())
        }
        )),
        G(this, Uo, Ki.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            R(this, Ne).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        ka(this, ar)._--,
        R(this, ar) === 0 && ((e = R(this, Bo)) == null || e.call(this),
        G(this, Bo, void 0),
        (t = R(this, Uo)) == null || t.call(this),
        G(this, Uo, void 0))
    }
    isFetching(e) {
        return R(this, Ne).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return R(this, or).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = R(this, Ne).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.defaultQueryOptions(e)
          , n = R(this, Ne).build(this, t)
          , r = n.state.data;
        return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(Tu(t.staleTime, n)) && this.prefetchQuery(t),
        Promise.resolve(r))
    }
    getQueriesData(e) {
        return R(this, Ne).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , o = R(this, Ne).get(r.queryHash)
          , s = o == null ? void 0 : o.state.data
          , a = _E(t, s);
        if (a !== void 0)
            return R(this, Ne).build(this, r).setData(a, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return at.batch( () => R(this, Ne).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = R(this, Ne).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = R(this, Ne);
        at.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = R(this, Ne);
        return at.batch( () => (n.findAll(e).forEach(r => {
            r.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...e
        }, t)))
    }
    cancelQueries(e, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = at.batch( () => R(this, Ne).findAll(e).map(o => o.cancel(n)));
        return Promise.all(r).then(Kt).catch(Kt)
    }
    invalidateQueries(e, t={}) {
        return at.batch( () => (R(this, Ne).findAll(e).forEach(n => {
            n.invalidate()
        }
        ),
        (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...e,
            type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
        }, t)))
    }
    refetchQueries(e, t={}) {
        const n = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }
          , r = at.batch( () => R(this, Ne).findAll(e).filter(o => !o.isDisabled() && !o.isStatic()).map(o => {
            let s = o.fetch(void 0, n);
            return n.throwOnError || (s = s.catch(Kt)),
            o.state.fetchStatus === "paused" ? Promise.resolve() : s
        }
        ));
        return Promise.all(r).then(Kt)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = R(this, Ne).build(this, t);
        return n.isStaleByTime(Tu(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(Kt).catch(Kt)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = Wp(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Kt).catch(Kt)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = Wp(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return Ki.isOnline() ? R(this, or).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return R(this, Ne)
    }
    getMutationCache() {
        return R(this, or)
    }
    getDefaultOptions() {
        return R(this, sr)
    }
    setDefaultOptions(e) {
        G(this, sr, e)
    }
    setQueryDefaults(e, t) {
        R(this, zo).set(aa(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...R(this, zo).values()]
          , n = {};
        return t.forEach(r => {
            ia(e, r.queryKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        R(this, $o).set(aa(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...R(this, $o).values()]
          , n = {};
        return t.forEach(r => {
            ia(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...R(this, sr).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = qd(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === Xd && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...R(this, sr).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        R(this, Ne).clear(),
        R(this, or).clear()
    }
}
,
Ne = new WeakMap,
or = new WeakMap,
sr = new WeakMap,
zo = new WeakMap,
$o = new WeakMap,
ar = new WeakMap,
Bo = new WeakMap,
Uo = new WeakMap,
Cm), aC = f.createContext(void 0), iC = ({client: e, children: t}) => (f.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
c.jsx(aC.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Gi() {
    return Gi = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Gi.apply(this, arguments)
}
var cr;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(cr || (cr = {}));
const Yp = "popstate";
function lC(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let {pathname: s, search: a, hash: i} = r.location;
        return Pu("", {
            pathname: s,
            search: a,
            hash: i
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(r, o) {
        return typeof o == "string" ? o : mv(o)
    }
    return uC(t, n, null, e)
}
function St(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function pv(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function cC() {
    return Math.random().toString(36).substr(2, 8)
}
function Qp(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function Pu(e, t, n, r) {
    return n === void 0 && (n = null),
    Gi({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Tl(t) : t, {
        state: n,
        key: t && t.key || r || cC()
    })
}
function mv(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function Tl(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function uC(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: o=document.defaultView, v5Compat: s=!1} = r
      , a = o.history
      , i = cr.Pop
      , l = null
      , u = d();
    u == null && (u = 0,
    a.replaceState(Gi({}, a.state, {
        idx: u
    }), ""));
    function d() {
        return (a.state || {
            idx: null
        }).idx
    }
    function p() {
        i = cr.Pop;
        let w = d()
          , y = w == null ? null : w - u;
        u = w,
        l && l({
            action: i,
            location: g.location,
            delta: y
        })
    }
    function v(w, y) {
        i = cr.Push;
        let h = Pu(g.location, w, y);
        u = d() + 1;
        let x = Qp(h, u)
          , S = g.createHref(h);
        try {
            a.pushState(x, "", S)
        } catch (E) {
            if (E instanceof DOMException && E.name === "DataCloneError")
                throw E;
            o.location.assign(S)
        }
        s && l && l({
            action: i,
            location: g.location,
            delta: 1
        })
    }
    function m(w, y) {
        i = cr.Replace;
        let h = Pu(g.location, w, y);
        u = d();
        let x = Qp(h, u)
          , S = g.createHref(h);
        a.replaceState(x, "", S),
        s && l && l({
            action: i,
            location: g.location,
            delta: 0
        })
    }
    function b(w) {
        let y = o.location.origin !== "null" ? o.location.origin : o.location.href
          , h = typeof w == "string" ? w : mv(w);
        return h = h.replace(/ $/, "%20"),
        St(y, "No window.location.(origin|href) available to create URL for href: " + h),
        new URL(h,y)
    }
    let g = {
        get action() {
            return i
        },
        get location() {
            return e(o, a)
        },
        listen(w) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(Yp, p),
            l = w,
            () => {
                o.removeEventListener(Yp, p),
                l = null
            }
        },
        createHref(w) {
            return t(o, w)
        },
        createURL: b,
        encodeLocation(w) {
            let y = b(w);
            return {
                pathname: y.pathname,
                search: y.search,
                hash: y.hash
            }
        },
        push: v,
        replace: m,
        go(w) {
            return a.go(w)
        }
    };
    return g
}
var Kp;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(Kp || (Kp = {}));
function dC(e, t, n) {
    return n === void 0 && (n = "/"),
    fC(e, t, n, !1)
}
function fC(e, t, n, r) {
    let o = typeof t == "string" ? Tl(t) : t
      , s = vv(o.pathname || "/", n);
    if (s == null)
        return null;
    let a = hv(e);
    pC(a);
    let i = null;
    for (let l = 0; i == null && l < a.length; ++l) {
        let u = CC(s);
        i = SC(a[l], u, r)
    }
    return i
}
function hv(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let o = (s, a, i) => {
        let l = {
            relativePath: i === void 0 ? s.path || "" : i,
            caseSensitive: s.caseSensitive === !0,
            childrenIndex: a,
            route: s
        };
        l.relativePath.startsWith("/") && (St(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(r.length));
        let u = Mo([r, l.relativePath])
          , d = n.concat(l);
        s.children && s.children.length > 0 && (St(s.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        hv(s.children, t, d, u)),
        !(s.path == null && !s.index) && t.push({
            path: u,
            score: wC(u, s.index),
            routesMeta: d
        })
    }
    ;
    return e.forEach( (s, a) => {
        var i;
        if (s.path === "" || !((i = s.path) != null && i.includes("?")))
            o(s, a);
        else
            for (let l of gv(s.path))
                o(s, a, l)
    }
    ),
    t
}
function gv(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , o = n.endsWith("?")
      , s = n.replace(/\?$/, "");
    if (r.length === 0)
        return o ? [s, ""] : [s];
    let a = gv(r.join("/"))
      , i = [];
    return i.push(...a.map(l => l === "" ? s : [s, l].join("/"))),
    o && i.push(...a),
    i.map(l => e.startsWith("/") && l === "" ? "/" : l)
}
function pC(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : bC(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const mC = /^:[\w-]+$/
  , hC = 3
  , gC = 2
  , vC = 1
  , yC = 10
  , xC = -2
  , Gp = e => e === "*";
function wC(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(Gp) && (r += xC),
    t && (r += gC),
    n.filter(o => !Gp(o)).reduce( (o, s) => o + (mC.test(s) ? hC : s === "" ? vC : yC), r)
}
function bC(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function SC(e, t, n) {
    let {routesMeta: r} = e
      , o = {}
      , s = "/"
      , a = [];
    for (let i = 0; i < r.length; ++i) {
        let l = r[i]
          , u = i === r.length - 1
          , d = s === "/" ? t : t.slice(s.length) || "/"
          , p = qp({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: u
        }, d)
          , v = l.route;
        if (!p && u && n && !r[r.length - 1].route.index && (p = qp({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, d)),
        !p)
            return null;
        Object.assign(o, p.params),
        a.push({
            params: o,
            pathname: Mo([s, p.pathname]),
            pathnameBase: kC(Mo([s, p.pathnameBase])),
            route: v
        }),
        p.pathnameBase !== "/" && (s = Mo([s, p.pathnameBase]))
    }
    return a
}
function qp(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = EC(e.path, e.caseSensitive, e.end)
      , o = t.match(n);
    if (!o)
        return null;
    let s = o[0]
      , a = s.replace(/(.)\/+$/, "$1")
      , i = o.slice(1);
    return {
        params: r.reduce( (u, d, p) => {
            let {paramName: v, isOptional: m} = d;
            if (v === "*") {
                let g = i[p] || "";
                a = s.slice(0, s.length - g.length).replace(/(.)\/+$/, "$1")
            }
            const b = i[p];
            return m && !b ? u[v] = void 0 : u[v] = (b || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: s,
        pathnameBase: a,
        pattern: e
    }
}
function EC(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    pv(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (a, i, l) => (r.push({
        paramName: i,
        isOptional: l != null
    }),
    l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,t ? void 0 : "i"), r]
}
function CC(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return pv(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function vv(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
const Mo = e => e.join("/").replace(/\/\/+/g, "/")
  , kC = e => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function NC(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const yv = ["post", "put", "patch", "delete"];
new Set(yv);
const TC = ["get", ...yv];
new Set(TC);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function qi() {
    return qi = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    qi.apply(this, arguments)
}
const jC = f.createContext(null)
  , PC = f.createContext(null)
  , xv = f.createContext(null)
  , jl = f.createContext(null)
  , Pl = f.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , wv = f.createContext(null);
function Zd() {
    return f.useContext(jl) != null
}
function bv() {
    return Zd() || St(!1),
    f.useContext(jl).location
}
function RC(e, t) {
    return AC(e, t)
}
function AC(e, t, n, r) {
    Zd() || St(!1);
    let {navigator: o} = f.useContext(xv)
      , {matches: s} = f.useContext(Pl)
      , a = s[s.length - 1]
      , i = a ? a.params : {};
    a && a.pathname;
    let l = a ? a.pathnameBase : "/";
    a && a.route;
    let u = bv(), d;
    if (t) {
        var p;
        let w = typeof t == "string" ? Tl(t) : t;
        l === "/" || (p = w.pathname) != null && p.startsWith(l) || St(!1),
        d = w
    } else
        d = u;
    let v = d.pathname || "/"
      , m = v;
    if (l !== "/") {
        let w = l.replace(/^\//, "").split("/");
        m = "/" + v.replace(/^\//, "").split("/").slice(w.length).join("/")
    }
    let b = dC(e, {
        pathname: m
    })
      , g = IC(b && b.map(w => Object.assign({}, w, {
        params: Object.assign({}, i, w.params),
        pathname: Mo([l, o.encodeLocation ? o.encodeLocation(w.pathname).pathname : w.pathname]),
        pathnameBase: w.pathnameBase === "/" ? l : Mo([l, o.encodeLocation ? o.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
    })), s, n, r);
    return t && g ? f.createElement(jl.Provider, {
        value: {
            location: qi({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, d),
            navigationType: cr.Pop
        }
    }, g) : g
}
function FC() {
    let e = $C()
      , t = NC(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , o = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return f.createElement(f.Fragment, null, f.createElement("h2", null, "Unexpected Application Error!"), f.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? f.createElement("pre", {
        style: o
    }, n) : null, null)
}
const MC = f.createElement(FC, null);
class OC extends f.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? f.createElement(Pl.Provider, {
            value: this.props.routeContext
        }, f.createElement(wv.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function DC(e) {
    let {routeContext: t, match: n, children: r} = e
      , o = f.useContext(jC);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    f.createElement(Pl.Provider, {
        value: t
    }, r)
}
function IC(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var s;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((s = r) != null && s.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let a = e
      , i = (o = n) == null ? void 0 : o.errors;
    if (i != null) {
        let d = a.findIndex(p => p.route.id && (i == null ? void 0 : i[p.route.id]) !== void 0);
        d >= 0 || St(!1),
        a = a.slice(0, Math.min(a.length, d + 1))
    }
    let l = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let d = 0; d < a.length; d++) {
            let p = a[d];
            if ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (u = d),
            p.route.id) {
                let {loaderData: v, errors: m} = n
                  , b = p.route.loader && v[p.route.id] === void 0 && (!m || m[p.route.id] === void 0);
                if (p.route.lazy || b) {
                    l = !0,
                    u >= 0 ? a = a.slice(0, u + 1) : a = [a[0]];
                    break
                }
            }
        }
    return a.reduceRight( (d, p, v) => {
        let m, b = !1, g = null, w = null;
        n && (m = i && p.route.id ? i[p.route.id] : void 0,
        g = p.route.errorElement || MC,
        l && (u < 0 && v === 0 ? (b = !0,
        w = null) : u === v && (b = !0,
        w = p.route.hydrateFallbackElement || null)));
        let y = t.concat(a.slice(0, v + 1))
          , h = () => {
            let x;
            return m ? x = g : b ? x = w : p.route.Component ? x = f.createElement(p.route.Component, null) : p.route.element ? x = p.route.element : x = d,
            f.createElement(DC, {
                match: p,
                routeContext: {
                    outlet: d,
                    matches: y,
                    isDataRoute: n != null
                },
                children: x
            })
        }
        ;
        return n && (p.route.ErrorBoundary || p.route.errorElement || v === 0) ? f.createElement(OC, {
            location: n.location,
            revalidation: n.revalidation,
            component: g,
            error: m,
            children: h(),
            routeContext: {
                outlet: null,
                matches: y,
                isDataRoute: !0
            }
        }) : h()
    }
    , null)
}
var Ru = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(Ru || {});
function _C(e) {
    let t = f.useContext(PC);
    return t || St(!1),
    t
}
function LC(e) {
    let t = f.useContext(Pl);
    return t || St(!1),
    t
}
function zC(e) {
    let t = LC()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || St(!1),
    n.route.id
}
function $C() {
    var e;
    let t = f.useContext(wv)
      , n = _C(Ru.UseRouteError)
      , r = zC(Ru.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function BC(e, t) {
    e == null || e.v7_startTransition,
    e == null || e.v7_relativeSplatPath
}
function Au(e) {
    St(!1)
}
function UC(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: o=cr.Pop, navigator: s, static: a=!1, future: i} = e;
    Zd() && St(!1);
    let l = t.replace(/^\/*/, "/")
      , u = f.useMemo( () => ({
        basename: l,
        navigator: s,
        static: a,
        future: qi({
            v7_relativeSplatPath: !1
        }, i)
    }), [l, i, s, a]);
    typeof r == "string" && (r = Tl(r));
    let {pathname: d="/", search: p="", hash: v="", state: m=null, key: b="default"} = r
      , g = f.useMemo( () => {
        let w = vv(d, l);
        return w == null ? null : {
            location: {
                pathname: w,
                search: p,
                hash: v,
                state: m,
                key: b
            },
            navigationType: o
        }
    }
    , [l, d, p, v, m, b, o]);
    return g == null ? null : f.createElement(xv.Provider, {
        value: u
    }, f.createElement(jl.Provider, {
        children: n,
        value: g
    }))
}
function VC(e) {
    let {children: t, location: n} = e;
    return RC(Fu(t), n)
}
new Promise( () => {}
);
function Fu(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return f.Children.forEach(e, (r, o) => {
        if (!f.isValidElement(r))
            return;
        let s = [...t, o];
        if (r.type === f.Fragment) {
            n.push.apply(n, Fu(r.props.children, s));
            return
        }
        r.type !== Au && St(!1),
        !r.props.index || !r.props.children || St(!1);
        let a = {
            id: r.props.id || s.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (a.children = Fu(r.props.children, s)),
        n.push(a)
    }
    ),
    n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const WC = "6";
try {
    window.__reactRouterVersion = WC
} catch {}
const HC = "startTransition"
  , Xp = Wu[HC];
function YC(e) {
    let {basename: t, children: n, future: r, window: o} = e
      , s = f.useRef();
    s.current == null && (s.current = lC({
        window: o,
        v5Compat: !0
    }));
    let a = s.current
      , [i,l] = f.useState({
        action: a.action,
        location: a.location
    })
      , {v7_startTransition: u} = r || {}
      , d = f.useCallback(p => {
        u && Xp ? Xp( () => l(p)) : l(p)
    }
    , [l, u]);
    return f.useLayoutEffect( () => a.listen(d), [a, d]),
    f.useEffect( () => BC(r), [r]),
    f.createElement(UC, {
        basename: t,
        children: n,
        location: i.location,
        navigationType: i.action,
        navigator: a,
        future: r
    })
}
var Zp;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(Zp || (Zp = {}));
var Jp;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(Jp || (Jp = {}));
const QC = "/assets/coin-kj7bkEg7.png"
  , KC = ({balance: e, points: t, lastReward: n}) => {
    const r = s => s.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
      , o = s => s.toLocaleString("pt-BR");
    return c.jsxs("div", {
        className: "hero-card rounded-xl p-5 relative overflow-hidden",
        children: [c.jsxs("div", {
            className: "relative z-10",
            children: [c.jsx("p", {
                className: "text-primary-foreground/70 text-sm font-medium mb-1",
                children: "Seu saldo"
            }), c.jsxs("div", {
                className: "flex items-start justify-between",
                children: [c.jsxs("div", {
                    children: [c.jsx("h2", {
                        className: "text-primary-foreground text-3xl font-bold tracking-tight",
                        children: r(e)
                    }), c.jsxs("p", {
                        className: "text-primary-foreground/60 text-sm mt-1",
                        children: ["= ", o(t), " pontos (s)"]
                    })]
                }), c.jsx("img", {
                    src: QC,
                    alt: "Moeda",
                    className: "w-14 h-14 animate-float drop-shadow-lg"
                })]
            })]
        }), c.jsx("div", {
            className: "mt-4 pt-3 border-t border-primary-foreground/10",
            children: c.jsxs("p", {
                className: "text-primary-foreground/50 text-xs",
                children: ["Última recompensa:", " ", c.jsx("span", {
                    className: "text-primary-foreground/70 font-medium",
                    children: r(n)
                })]
            })
        })]
    })
}
  , GC = Ld("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            disabled: "bg-disabled text-disabled-foreground cursor-not-allowed opacity-100"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , Jo = f.forwardRef( ({className: e, variant: t, size: n, asChild: r=!1, ...o}, s) => {
    const a = r ? jw : "button";
    return c.jsx(a, {
        className: je(GC({
            variant: t,
            size: n,
            className: e
        })),
        ref: s,
        ...o
    })
}
);
Jo.displayName = "Button";
const qC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAA20lEQVR4AayTsQ2DMBBF4VgkI2QEMkIqkCjiUcgEYQPSIARVNsAjZISMkAns/MN2YSmNDyN/OCP+k/3xUZHpygea5/m0LMtjXddNqJEZVFXVWJalMsYUEllrFTMIRQ0NbdteJELEA/x1joy+gBUB1CMnKxEgPeRAyEhjwi+S5b0OhD3qpmnuErEXi3AgLo4qZLRzcB5q5HTbJ4m3CEREG/zPaZrOeCaNCAQnh/3quu6NOmlEIB/2NYngPw4gJewzjkIxi1tE4xd+JH3GHvZCmiT99c8TtsarO6QfAAAA//8YC0ksAAAABklEQVQDAHR2UTSAV9DnAAAAAElFTkSuQmCC"
  , Mu = "/assets/pix-logo-DsU-ojWH.png";
var vc = "focusScope.autoFocusOnMount"
  , yc = "focusScope.autoFocusOnUnmount"
  , em = {
    bubbles: !1,
    cancelable: !0
}
  , XC = "FocusScope"
  , Jd = f.forwardRef( (e, t) => {
    const {loop: n=!1, trapped: r=!1, onMountAutoFocus: o, onUnmountAutoFocus: s, ...a} = e
      , [i,l] = f.useState(null)
      , u = nn(o)
      , d = nn(s)
      , p = f.useRef(null)
      , v = we(t, g => l(g))
      , m = f.useRef({
        paused: !1,
        pause() {
            this.paused = !0
        },
        resume() {
            this.paused = !1
        }
    }).current;
    f.useEffect( () => {
        if (r) {
            let g = function(x) {
                if (m.paused || !i)
                    return;
                const S = x.target;
                i.contains(S) ? p.current = S : Xn(p.current, {
                    select: !0
                })
            }
              , w = function(x) {
                if (m.paused || !i)
                    return;
                const S = x.relatedTarget;
                S !== null && (i.contains(S) || Xn(p.current, {
                    select: !0
                }))
            }
              , y = function(x) {
                if (document.activeElement === document.body)
                    for (const E of x)
                        E.removedNodes.length > 0 && Xn(i)
            };
            document.addEventListener("focusin", g),
            document.addEventListener("focusout", w);
            const h = new MutationObserver(y);
            return i && h.observe(i, {
                childList: !0,
                subtree: !0
            }),
            () => {
                document.removeEventListener("focusin", g),
                document.removeEventListener("focusout", w),
                h.disconnect()
            }
        }
    }
    , [r, i, m.paused]),
    f.useEffect( () => {
        if (i) {
            nm.add(m);
            const g = document.activeElement;
            if (!i.contains(g)) {
                const y = new CustomEvent(vc,em);
                i.addEventListener(vc, u),
                i.dispatchEvent(y),
                y.defaultPrevented || (ZC(r5(Sv(i)), {
                    select: !0
                }),
                document.activeElement === g && Xn(i))
            }
            return () => {
                i.removeEventListener(vc, u),
                setTimeout( () => {
                    const y = new CustomEvent(yc,em);
                    i.addEventListener(yc, d),
                    i.dispatchEvent(y),
                    y.defaultPrevented || Xn(g ?? document.body, {
                        select: !0
                    }),
                    i.removeEventListener(yc, d),
                    nm.remove(m)
                }
                , 0)
            }
        }
    }
    , [i, u, d, m]);
    const b = f.useCallback(g => {
        if (!n && !r || m.paused)
            return;
        const w = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey
          , y = document.activeElement;
        if (w && y) {
            const h = g.currentTarget
              , [x,S] = JC(h);
            x && S ? !g.shiftKey && y === S ? (g.preventDefault(),
            n && Xn(x, {
                select: !0
            })) : g.shiftKey && y === x && (g.preventDefault(),
            n && Xn(S, {
                select: !0
            })) : y === h && g.preventDefault()
        }
    }
    , [n, r, m.paused]);
    return c.jsx(se.div, {
        tabIndex: -1,
        ...a,
        ref: v,
        onKeyDown: b
    })
}
);
Jd.displayName = XC;
function ZC(e, {select: t=!1}={}) {
    const n = document.activeElement;
    for (const r of e)
        if (Xn(r, {
            select: t
        }),
        document.activeElement !== n)
            return
}
function JC(e) {
    const t = Sv(e)
      , n = tm(t, e)
      , r = tm(t.reverse(), e);
    return [n, r]
}
function Sv(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function tm(e, t) {
    for (const n of e)
        if (!e5(n, {
            upTo: t
        }))
            return n
}
function e5(e, {upTo: t}) {
    if (getComputedStyle(e).visibility === "hidden")
        return !0;
    for (; e; ) {
        if (t !== void 0 && e === t)
            return !1;
        if (getComputedStyle(e).display === "none")
            return !0;
        e = e.parentElement
    }
    return !1
}
function t5(e) {
    return e instanceof HTMLInputElement && "select"in e
}
function Xn(e, {select: t=!1}={}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }),
        e !== n && t5(e) && t && e.select()
    }
}
var nm = n5();
function n5() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && (n == null || n.pause()),
            e = rm(e, t),
            e.unshift(t)
        },
        remove(t) {
            var n;
            e = rm(e, t),
            (n = e[0]) == null || n.resume()
        }
    }
}
function rm(e, t) {
    const n = [...e]
      , r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1),
    n
}
function r5(e) {
    return e.filter(t => t.tagName !== "A")
}
var xc = 0;
function Ev() {
    f.useEffect( () => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ?? om()),
        document.body.insertAdjacentElement("beforeend", e[1] ?? om()),
        xc++,
        () => {
            xc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()),
            xc--
        }
    }
    , [])
}
function om() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""),
    e.tabIndex = 0,
    e.style.outline = "none",
    e.style.opacity = "0",
    e.style.position = "fixed",
    e.style.pointerEvents = "none",
    e
}
var vn = function() {
    return vn = Object.assign || function(t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var s in n)
                Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s])
        }
        return t
    }
    ,
    vn.apply(this, arguments)
};
function Cv(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
}
function o5(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, o = t.length, s; r < o; r++)
            (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)),
            s[r] = t[r]);
    return e.concat(s || Array.prototype.slice.call(t))
}
var gi = "right-scroll-bar-position"
  , vi = "width-before-scroll-bar"
  , s5 = "with-scroll-bars-hidden"
  , a5 = "--removed-body-scroll-bar-size";
function wc(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t),
    e
}
function i5(e, t) {
    var n = f.useState(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(r) {
                    var o = n.value;
                    o !== r && (n.value = r,
                    n.callback(r, o))
                }
            }
        }
    })[0];
    return n.callback = t,
    n.facade
}
var l5 = typeof window < "u" ? f.useLayoutEffect : f.useEffect
  , sm = new WeakMap;
function c5(e, t) {
    var n = i5(null, function(r) {
        return e.forEach(function(o) {
            return wc(o, r)
        })
    });
    return l5(function() {
        var r = sm.get(n);
        if (r) {
            var o = new Set(r)
              , s = new Set(e)
              , a = n.current;
            o.forEach(function(i) {
                s.has(i) || wc(i, null)
            }),
            s.forEach(function(i) {
                o.has(i) || wc(i, a)
            })
        }
        sm.set(n, e)
    }, [e]),
    n
}
function u5(e) {
    return e
}
function d5(e, t) {
    t === void 0 && (t = u5);
    var n = []
      , r = !1
      , o = {
        read: function() {
            if (r)
                throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return n.length ? n[n.length - 1] : e
        },
        useMedium: function(s) {
            var a = t(s, r);
            return n.push(a),
            function() {
                n = n.filter(function(i) {
                    return i !== a
                })
            }
        },
        assignSyncMedium: function(s) {
            for (r = !0; n.length; ) {
                var a = n;
                n = [],
                a.forEach(s)
            }
            n = {
                push: function(i) {
                    return s(i)
                },
                filter: function() {
                    return n
                }
            }
        },
        assignMedium: function(s) {
            r = !0;
            var a = [];
            if (n.length) {
                var i = n;
                n = [],
                i.forEach(s),
                a = n
            }
            var l = function() {
                var d = a;
                a = [],
                d.forEach(s)
            }
              , u = function() {
                return Promise.resolve().then(l)
            };
            u(),
            n = {
                push: function(d) {
                    a.push(d),
                    u()
                },
                filter: function(d) {
                    return a = a.filter(d),
                    n
                }
            }
        }
    };
    return o
}
function f5(e) {
    e === void 0 && (e = {});
    var t = d5(null);
    return t.options = vn({
        async: !0,
        ssr: !1
    }, e),
    t
}
var kv = function(e) {
    var t = e.sideCar
      , n = Cv(e, ["sideCar"]);
    if (!t)
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = t.read();
    if (!r)
        throw new Error("Sidecar medium not found");
    return f.createElement(r, vn({}, n))
};
kv.isSideCarExport = !0;
function p5(e, t) {
    return e.useMedium(t),
    kv
}
var Nv = f5()
  , bc = function() {}
  , Rl = f.forwardRef(function(e, t) {
    var n = f.useRef(null)
      , r = f.useState({
        onScrollCapture: bc,
        onWheelCapture: bc,
        onTouchMoveCapture: bc
    })
      , o = r[0]
      , s = r[1]
      , a = e.forwardProps
      , i = e.children
      , l = e.className
      , u = e.removeScrollBar
      , d = e.enabled
      , p = e.shards
      , v = e.sideCar
      , m = e.noRelative
      , b = e.noIsolation
      , g = e.inert
      , w = e.allowPinchZoom
      , y = e.as
      , h = y === void 0 ? "div" : y
      , x = e.gapMode
      , S = Cv(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"])
      , E = v
      , k = c5([n, t])
      , C = vn(vn({}, S), o);
    return f.createElement(f.Fragment, null, d && f.createElement(E, {
        sideCar: Nv,
        removeScrollBar: u,
        shards: p,
        noRelative: m,
        noIsolation: b,
        inert: g,
        setCallbacks: s,
        allowPinchZoom: !!w,
        lockRef: n,
        gapMode: x
    }), a ? f.cloneElement(f.Children.only(i), vn(vn({}, C), {
        ref: k
    })) : f.createElement(h, vn({}, C, {
        className: l,
        ref: k
    }), i))
});
Rl.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
Rl.classNames = {
    fullWidth: vi,
    zeroRight: gi
};
var m5 = function() {
    if (typeof __webpack_nonce__ < "u")
        return __webpack_nonce__
};
function h5() {
    if (!document)
        return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = m5();
    return t && e.setAttribute("nonce", t),
    e
}
function g5(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}
function v5(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e)
}
var y5 = function() {
    var e = 0
      , t = null;
    return {
        add: function(n) {
            e == 0 && (t = h5()) && (g5(t, n),
            v5(t)),
            e++
        },
        remove: function() {
            e--,
            !e && t && (t.parentNode && t.parentNode.removeChild(t),
            t = null)
        }
    }
}
  , x5 = function() {
    var e = y5();
    return function(t, n) {
        f.useEffect(function() {
            return e.add(t),
            function() {
                e.remove()
            }
        }, [t && n])
    }
}
  , Tv = function() {
    var e = x5()
      , t = function(n) {
        var r = n.styles
          , o = n.dynamic;
        return e(r, o),
        null
    };
    return t
}
  , w5 = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
}
  , Sc = function(e) {
    return parseInt(e || "", 10) || 0
}
  , b5 = function(e) {
    var t = window.getComputedStyle(document.body)
      , n = t[e === "padding" ? "paddingLeft" : "marginLeft"]
      , r = t[e === "padding" ? "paddingTop" : "marginTop"]
      , o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Sc(n), Sc(r), Sc(o)]
}
  , S5 = function(e) {
    if (e === void 0 && (e = "margin"),
    typeof window > "u")
        return w5;
    var t = b5(e)
      , n = document.documentElement.clientWidth
      , r = window.innerWidth;
    return {
        left: t[0],
        top: t[1],
        right: t[2],
        gap: Math.max(0, r - n + t[2] - t[0])
    }
}
  , E5 = Tv()
  , Oo = "data-scroll-locked"
  , C5 = function(e, t, n, r) {
    var o = e.left
      , s = e.top
      , a = e.right
      , i = e.gap;
    return n === void 0 && (n = "margin"),
    `
  .`.concat(s5, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(Oo, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(gi, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(vi, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(gi, " .").concat(gi, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(vi, " .").concat(vi, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Oo, `] {
    `).concat(a5, ": ").concat(i, `px;
  }
`)
}
  , am = function() {
    var e = parseInt(document.body.getAttribute(Oo) || "0", 10);
    return isFinite(e) ? e : 0
}
  , k5 = function() {
    f.useEffect(function() {
        return document.body.setAttribute(Oo, (am() + 1).toString()),
        function() {
            var e = am() - 1;
            e <= 0 ? document.body.removeAttribute(Oo) : document.body.setAttribute(Oo, e.toString())
        }
    }, [])
}
  , N5 = function(e) {
    var t = e.noRelative
      , n = e.noImportant
      , r = e.gapMode
      , o = r === void 0 ? "margin" : r;
    k5();
    var s = f.useMemo(function() {
        return S5(o)
    }, [o]);
    return f.createElement(E5, {
        styles: C5(s, !t, o, n ? "" : "!important")
    })
}
  , Ou = !1;
if (typeof window < "u")
    try {
        var Ga = Object.defineProperty({}, "passive", {
            get: function() {
                return Ou = !0,
                !0
            }
        });
        window.addEventListener("test", Ga, Ga),
        window.removeEventListener("test", Ga, Ga)
    } catch {
        Ou = !1
    }
var io = Ou ? {
    passive: !1
} : !1
  , T5 = function(e) {
    return e.tagName === "TEXTAREA"
}
  , jv = function(e, t) {
    if (!(e instanceof Element))
        return !1;
    var n = window.getComputedStyle(e);
    return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !T5(e) && n[t] === "visible")
}
  , j5 = function(e) {
    return jv(e, "overflowY")
}
  , P5 = function(e) {
    return jv(e, "overflowX")
}
  , im = function(e, t) {
    var n = t.ownerDocument
      , r = t;
    do {
        typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
        var o = Pv(e, r);
        if (o) {
            var s = Rv(e, r)
              , a = s[1]
              , i = s[2];
            if (a > i)
                return !0
        }
        r = r.parentNode
    } while (r && r !== n.body);
    return !1
}
  , R5 = function(e) {
    var t = e.scrollTop
      , n = e.scrollHeight
      , r = e.clientHeight;
    return [t, n, r]
}
  , A5 = function(e) {
    var t = e.scrollLeft
      , n = e.scrollWidth
      , r = e.clientWidth;
    return [t, n, r]
}
  , Pv = function(e, t) {
    return e === "v" ? j5(t) : P5(t)
}
  , Rv = function(e, t) {
    return e === "v" ? R5(t) : A5(t)
}
  , F5 = function(e, t) {
    return e === "h" && t === "rtl" ? -1 : 1
}
  , M5 = function(e, t, n, r, o) {
    var s = F5(e, window.getComputedStyle(t).direction)
      , a = s * r
      , i = n.target
      , l = t.contains(i)
      , u = !1
      , d = a > 0
      , p = 0
      , v = 0;
    do {
        if (!i)
            break;
        var m = Rv(e, i)
          , b = m[0]
          , g = m[1]
          , w = m[2]
          , y = g - w - s * b;
        (b || y) && Pv(e, i) && (p += y,
        v += b);
        var h = i.parentNode;
        i = h && h.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? h.host : h
    } while (!l && i !== document.body || l && (t.contains(i) || t === i));
    return (d && (Math.abs(p) < 1 || !o) || !d && (Math.abs(v) < 1 || !o)) && (u = !0),
    u
}
  , qa = function(e) {
    return "changedTouches"in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
}
  , lm = function(e) {
    return [e.deltaX, e.deltaY]
}
  , cm = function(e) {
    return e && "current"in e ? e.current : e
}
  , O5 = function(e, t) {
    return e[0] === t[0] && e[1] === t[1]
}
  , D5 = function(e) {
    return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
}
  , I5 = 0
  , lo = [];
function _5(e) {
    var t = f.useRef([])
      , n = f.useRef([0, 0])
      , r = f.useRef()
      , o = f.useState(I5++)[0]
      , s = f.useState(Tv)[0]
      , a = f.useRef(e);
    f.useEffect(function() {
        a.current = e
    }, [e]),
    f.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var g = o5([e.lockRef.current], (e.shards || []).map(cm), !0).filter(Boolean);
            return g.forEach(function(w) {
                return w.classList.add("allow-interactivity-".concat(o))
            }),
            function() {
                document.body.classList.remove("block-interactivity-".concat(o)),
                g.forEach(function(w) {
                    return w.classList.remove("allow-interactivity-".concat(o))
                })
            }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var i = f.useCallback(function(g, w) {
        if ("touches"in g && g.touches.length === 2 || g.type === "wheel" && g.ctrlKey)
            return !a.current.allowPinchZoom;
        var y = qa(g), h = n.current, x = "deltaX"in g ? g.deltaX : h[0] - y[0], S = "deltaY"in g ? g.deltaY : h[1] - y[1], E, k = g.target, C = Math.abs(x) > Math.abs(S) ? "h" : "v";
        if ("touches"in g && C === "h" && k.type === "range")
            return !1;
        var j = im(C, k);
        if (!j)
            return !0;
        if (j ? E = C : (E = C === "v" ? "h" : "v",
        j = im(C, k)),
        !j)
            return !1;
        if (!r.current && "changedTouches"in g && (x || S) && (r.current = E),
        !E)
            return !0;
        var A = r.current || E;
        return M5(A, w, g, A === "h" ? x : S, !0)
    }, [])
      , l = f.useCallback(function(g) {
        var w = g;
        if (!(!lo.length || lo[lo.length - 1] !== s)) {
            var y = "deltaY"in w ? lm(w) : qa(w)
              , h = t.current.filter(function(E) {
                return E.name === w.type && (E.target === w.target || w.target === E.shadowParent) && O5(E.delta, y)
            })[0];
            if (h && h.should) {
                w.cancelable && w.preventDefault();
                return
            }
            if (!h) {
                var x = (a.current.shards || []).map(cm).filter(Boolean).filter(function(E) {
                    return E.contains(w.target)
                })
                  , S = x.length > 0 ? i(w, x[0]) : !a.current.noIsolation;
                S && w.cancelable && w.preventDefault()
            }
        }
    }, [])
      , u = f.useCallback(function(g, w, y, h) {
        var x = {
            name: g,
            delta: w,
            target: y,
            should: h,
            shadowParent: L5(y)
        };
        t.current.push(x),
        setTimeout(function() {
            t.current = t.current.filter(function(S) {
                return S !== x
            })
        }, 1)
    }, [])
      , d = f.useCallback(function(g) {
        n.current = qa(g),
        r.current = void 0
    }, [])
      , p = f.useCallback(function(g) {
        u(g.type, lm(g), g.target, i(g, e.lockRef.current))
    }, [])
      , v = f.useCallback(function(g) {
        u(g.type, qa(g), g.target, i(g, e.lockRef.current))
    }, []);
    f.useEffect(function() {
        return lo.push(s),
        e.setCallbacks({
            onScrollCapture: p,
            onWheelCapture: p,
            onTouchMoveCapture: v
        }),
        document.addEventListener("wheel", l, io),
        document.addEventListener("touchmove", l, io),
        document.addEventListener("touchstart", d, io),
        function() {
            lo = lo.filter(function(g) {
                return g !== s
            }),
            document.removeEventListener("wheel", l, io),
            document.removeEventListener("touchmove", l, io),
            document.removeEventListener("touchstart", d, io)
        }
    }, []);
    var m = e.removeScrollBar
      , b = e.inert;
    return f.createElement(f.Fragment, null, b ? f.createElement(s, {
        styles: D5(o)
    }) : null, m ? f.createElement(N5, {
        noRelative: e.noRelative,
        gapMode: e.gapMode
    }) : null)
}
function L5(e) {
    for (var t = null; e !== null; )
        e instanceof ShadowRoot && (t = e.host,
        e = e.host),
        e = e.parentNode;
    return t
}
const z5 = p5(Nv, _5);
var ef = f.forwardRef(function(e, t) {
    return f.createElement(Rl, vn({}, e, {
        ref: t,
        sideCar: z5
    }))
});
ef.classNames = Rl.classNames;
var $5 = function(e) {
    if (typeof document > "u")
        return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body
}
  , co = new WeakMap
  , Xa = new WeakMap
  , Za = {}
  , Ec = 0
  , Av = function(e) {
    return e && (e.host || Av(e.parentNode))
}
  , B5 = function(e, t) {
    return t.map(function(n) {
        if (e.contains(n))
            return n;
        var r = Av(n);
        return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"),
        null)
    }).filter(function(n) {
        return !!n
    })
}
  , U5 = function(e, t, n, r) {
    var o = B5(t, Array.isArray(e) ? e : [e]);
    Za[n] || (Za[n] = new WeakMap);
    var s = Za[n]
      , a = []
      , i = new Set
      , l = new Set(o)
      , u = function(p) {
        !p || i.has(p) || (i.add(p),
        u(p.parentNode))
    };
    o.forEach(u);
    var d = function(p) {
        !p || l.has(p) || Array.prototype.forEach.call(p.children, function(v) {
            if (i.has(v))
                d(v);
            else
                try {
                    var m = v.getAttribute(r)
                      , b = m !== null && m !== "false"
                      , g = (co.get(v) || 0) + 1
                      , w = (s.get(v) || 0) + 1;
                    co.set(v, g),
                    s.set(v, w),
                    a.push(v),
                    g === 1 && b && Xa.set(v, !0),
                    w === 1 && v.setAttribute(n, "true"),
                    b || v.setAttribute(r, "true")
                } catch (y) {
                    console.error("aria-hidden: cannot operate on ", v, y)
                }
        })
    };
    return d(t),
    i.clear(),
    Ec++,
    function() {
        a.forEach(function(p) {
            var v = co.get(p) - 1
              , m = s.get(p) - 1;
            co.set(p, v),
            s.set(p, m),
            v || (Xa.has(p) || p.removeAttribute(r),
            Xa.delete(p)),
            m || p.removeAttribute(n)
        }),
        Ec--,
        Ec || (co = new WeakMap,
        co = new WeakMap,
        Xa = new WeakMap,
        Za = {})
    }
}
  , Fv = function(e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e])
      , o = $5(e);
    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
    U5(r, o, n, "aria-hidden")) : function() {
        return null
    }
}
  , Al = "Dialog"
  , [Mv,mN] = rs(Al)
  , [V5,sn] = Mv(Al)
  , Ov = e => {
    const {__scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: s, modal: a=!0} = e
      , i = f.useRef(null)
      , l = f.useRef(null)
      , [u,d] = Vi({
        prop: r,
        defaultProp: o ?? !1,
        onChange: s,
        caller: Al
    });
    return c.jsx(V5, {
        scope: t,
        triggerRef: i,
        contentRef: l,
        contentId: Ao(),
        titleId: Ao(),
        descriptionId: Ao(),
        open: u,
        onOpenChange: d,
        onOpenToggle: f.useCallback( () => d(p => !p), [d]),
        modal: a,
        children: n
    })
}
;
Ov.displayName = Al;
var Dv = "DialogTrigger"
  , W5 = f.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = sn(Dv, n)
      , s = we(t, o.triggerRef);
    return c.jsx(se.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": rf(o.open),
        ...r,
        ref: s,
        onClick: J(e.onClick, o.onOpenToggle)
    })
}
);
W5.displayName = Dv;
var tf = "DialogPortal"
  , [H5,Iv] = Mv(tf, {
    forceMount: void 0
})
  , _v = e => {
    const {__scopeDialog: t, forceMount: n, children: r, container: o} = e
      , s = sn(tf, t);
    return c.jsx(H5, {
        scope: t,
        forceMount: n,
        children: f.Children.map(r, a => c.jsx(os, {
            present: n || s.open,
            children: c.jsx(gl, {
                asChild: !0,
                container: o,
                children: a
            })
        }))
    })
}
;
_v.displayName = tf;
var Xi = "DialogOverlay"
  , Lv = f.forwardRef( (e, t) => {
    const n = Iv(Xi, e.__scopeDialog)
      , {forceMount: r=n.forceMount, ...o} = e
      , s = sn(Xi, e.__scopeDialog);
    return s.modal ? c.jsx(os, {
        present: r || s.open,
        children: c.jsx(Q5, {
            ...o,
            ref: t
        })
    }) : null
}
);
Lv.displayName = Xi;
var Y5 = qo("DialogOverlay.RemoveScroll")
  , Q5 = f.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = sn(Xi, n);
    return c.jsx(ef, {
        as: Y5,
        allowPinchZoom: !0,
        shards: [o.contentRef],
        children: c.jsx(se.div, {
            "data-state": rf(o.open),
            ...r,
            ref: t,
            style: {
                pointerEvents: "auto",
                ...r.style
            }
        })
    })
}
)
  , Xr = "DialogContent"
  , zv = f.forwardRef( (e, t) => {
    const n = Iv(Xr, e.__scopeDialog)
      , {forceMount: r=n.forceMount, ...o} = e
      , s = sn(Xr, e.__scopeDialog);
    return c.jsx(os, {
        present: r || s.open,
        children: s.modal ? c.jsx(K5, {
            ...o,
            ref: t
        }) : c.jsx(G5, {
            ...o,
            ref: t
        })
    })
}
);
zv.displayName = Xr;
var K5 = f.forwardRef( (e, t) => {
    const n = sn(Xr, e.__scopeDialog)
      , r = f.useRef(null)
      , o = we(t, n.contentRef, r);
    return f.useEffect( () => {
        const s = r.current;
        if (s)
            return Fv(s)
    }
    , []),
    c.jsx($v, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: J(e.onCloseAutoFocus, s => {
            var a;
            s.preventDefault(),
            (a = n.triggerRef.current) == null || a.focus()
        }
        ),
        onPointerDownOutside: J(e.onPointerDownOutside, s => {
            const a = s.detail.originalEvent
              , i = a.button === 0 && a.ctrlKey === !0;
            (a.button === 2 || i) && s.preventDefault()
        }
        ),
        onFocusOutside: J(e.onFocusOutside, s => s.preventDefault())
    })
}
)
  , G5 = f.forwardRef( (e, t) => {
    const n = sn(Xr, e.__scopeDialog)
      , r = f.useRef(!1)
      , o = f.useRef(!1);
    return c.jsx($v, {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: s => {
            var a, i;
            (a = e.onCloseAutoFocus) == null || a.call(e, s),
            s.defaultPrevented || (r.current || (i = n.triggerRef.current) == null || i.focus(),
            s.preventDefault()),
            r.current = !1,
            o.current = !1
        }
        ,
        onInteractOutside: s => {
            var l, u;
            (l = e.onInteractOutside) == null || l.call(e, s),
            s.defaultPrevented || (r.current = !0,
            s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
            const a = s.target;
            ((u = n.triggerRef.current) == null ? void 0 : u.contains(a)) && s.preventDefault(),
            s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault()
        }
    })
}
)
  , $v = f.forwardRef( (e, t) => {
    const {__scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...a} = e
      , i = sn(Xr, n)
      , l = f.useRef(null)
      , u = we(t, l);
    return Ev(),
    c.jsxs(c.Fragment, {
        children: [c.jsx(Jd, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: s,
            children: c.jsx(ha, {
                role: "dialog",
                id: i.contentId,
                "aria-describedby": i.descriptionId,
                "aria-labelledby": i.titleId,
                "data-state": rf(i.open),
                ...a,
                ref: u,
                onDismiss: () => i.onOpenChange(!1)
            })
        }), c.jsxs(c.Fragment, {
            children: [c.jsx(q5, {
                titleId: i.titleId
            }), c.jsx(Z5, {
                contentRef: l,
                descriptionId: i.descriptionId
            })]
        })]
    })
}
)
  , nf = "DialogTitle"
  , Bv = f.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = sn(nf, n);
    return c.jsx(se.h2, {
        id: o.titleId,
        ...r,
        ref: t
    })
}
);
Bv.displayName = nf;
var Uv = "DialogDescription"
  , Vv = f.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = sn(Uv, n);
    return c.jsx(se.p, {
        id: o.descriptionId,
        ...r,
        ref: t
    })
}
);
Vv.displayName = Uv;
var Wv = "DialogClose"
  , Hv = f.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = sn(Wv, n);
    return c.jsx(se.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: J(e.onClick, () => o.onOpenChange(!1))
    })
}
);
Hv.displayName = Wv;
function rf(e) {
    return e ? "open" : "closed"
}
var Yv = "DialogTitleWarning"
  , [hN,Qv] = Nw(Yv, {
    contentName: Xr,
    titleName: nf,
    docsSlug: "dialog"
})
  , q5 = ({titleId: e}) => {
    const t = Qv(Yv)
      , n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return f.useEffect( () => {
        e && (document.getElementById(e) || console.error(n))
    }
    , [n, e]),
    null
}
  , X5 = "DialogDescriptionWarning"
  , Z5 = ({contentRef: e, descriptionId: t}) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Qv(X5).contentName}}.`;
    return f.useEffect( () => {
        var s;
        const o = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
        t && o && (document.getElementById(t) || console.warn(r))
    }
    , [r, e, t]),
    null
}
  , J5 = Ov
  , ek = _v
  , Kv = Lv
  , Gv = zv
  , qv = Bv
  , Xv = Vv
  , tk = Hv;
const nk = J5
  , rk = ek
  , Zv = f.forwardRef( ({className: e, ...t}, n) => c.jsx(Kv, {
    ref: n,
    className: je("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
    ...t
}));
Zv.displayName = Kv.displayName;
const Jv = f.forwardRef( ({className: e, children: t, ...n}, r) => c.jsxs(rk, {
    children: [c.jsx(Zv, {}), c.jsxs(Gv, {
        ref: r,
        className: je("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", e),
        ...n,
        children: [t, c.jsxs(tk, {
            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
            children: [c.jsx(vg, {
                className: "h-4 w-4"
            }), c.jsx("span", {
                className: "sr-only",
                children: "Close"
            })]
        })]
    })]
}));
Jv.displayName = Gv.displayName;
const ok = f.forwardRef( ({className: e, ...t}, n) => c.jsx(qv, {
    ref: n,
    className: je("text-lg font-semibold leading-none tracking-tight", e),
    ...t
}));
ok.displayName = qv.displayName;
const sk = f.forwardRef( ({className: e, ...t}, n) => c.jsx(Xv, {
    ref: n,
    className: je("text-sm text-muted-foreground", e),
    ...t
}));
sk.displayName = Xv.displayName;
const Zi = f.forwardRef( ({className: e, type: t, ...n}, r) => c.jsx("input", {
    type: t,
    className: je("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
    ref: r,
    ...n
}));
Zi.displayName = "Input";
var ak = "Label"
  , ey = f.forwardRef( (e, t) => c.jsx(se.label, {
    ...e,
    ref: t,
    onMouseDown: n => {
        var o;
        n.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, n),
        !n.defaultPrevented && n.detail > 1 && n.preventDefault())
    }
}));
ey.displayName = ak;
var ty = ey;
const ik = Ld("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")
  , yi = f.forwardRef( ({className: e, ...t}, n) => c.jsx(ty, {
    ref: n,
    className: je(ik(), e),
    ...t
}));
yi.displayName = ty.displayName;
function um(e, [t,n]) {
    return Math.min(n, Math.max(t, e))
}
var lk = f.createContext(void 0);
function ck(e) {
    const t = f.useContext(lk);
    return e || t || "ltr"
}
function uk(e) {
    const t = f.useRef({
        value: e,
        previous: e
    });
    return f.useMemo( () => (t.current.value !== e && (t.current.previous = t.current.value,
    t.current.value = e),
    t.current.previous), [e])
}
var dk = [" ", "Enter", "ArrowUp", "ArrowDown"]
  , fk = [" ", "Enter"]
  , Zr = "Select"
  , [Fl,Ml,pk] = U0(Zr)
  , [ls,gN] = rs(Zr, [pk, Sl])
  , Ol = Sl()
  , [mk,kr] = ls(Zr)
  , [hk,gk] = ls(Zr)
  , ny = e => {
    const {__scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: s, value: a, defaultValue: i, onValueChange: l, dir: u, name: d, autoComplete: p, disabled: v, required: m, form: b} = e
      , g = Ol(t)
      , [w,y] = f.useState(null)
      , [h,x] = f.useState(null)
      , [S,E] = f.useState(!1)
      , k = ck(u)
      , [C,j] = Vi({
        prop: r,
        defaultProp: o ?? !1,
        onChange: s,
        caller: Zr
    })
      , [A,M] = Vi({
        prop: a,
        defaultProp: i,
        onChange: l,
        caller: Zr
    })
      , $ = f.useRef(null)
      , D = w ? b || !!w.closest("form") : !0
      , [V,P] = f.useState(new Set)
      , H = Array.from(V).map(L => L.props.value).join(";");
    return c.jsx(vE, {
        ...g,
        children: c.jsxs(mk, {
            required: m,
            scope: t,
            trigger: w,
            onTriggerChange: y,
            valueNode: h,
            onValueNodeChange: x,
            valueNodeHasChildren: S,
            onValueNodeHasChildrenChange: E,
            contentId: Ao(),
            value: A,
            onValueChange: M,
            open: C,
            onOpenChange: j,
            dir: k,
            triggerPointerDownPosRef: $,
            disabled: v,
            children: [c.jsx(Fl.Provider, {
                scope: t,
                children: c.jsx(hk, {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: f.useCallback(L => {
                        P(U => new Set(U).add(L))
                    }
                    , []),
                    onNativeOptionRemove: f.useCallback(L => {
                        P(U => {
                            const N = new Set(U);
                            return N.delete(L),
                            N
                        }
                        )
                    }
                    , []),
                    children: n
                })
            }), D ? c.jsxs(Ny, {
                "aria-hidden": !0,
                required: m,
                tabIndex: -1,
                name: d,
                autoComplete: p,
                value: A,
                onChange: L => M(L.target.value),
                disabled: v,
                form: b,
                children: [A === void 0 ? c.jsx("option", {
                    value: ""
                }) : null, Array.from(V)]
            }, H) : null]
        })
    })
}
;
ny.displayName = Zr;
var ry = "SelectTrigger"
  , oy = f.forwardRef( (e, t) => {
    const {__scopeSelect: n, disabled: r=!1, ...o} = e
      , s = Ol(n)
      , a = kr(ry, n)
      , i = a.disabled || r
      , l = we(t, a.onTriggerChange)
      , u = Ml(n)
      , d = f.useRef("touch")
      , [p,v,m] = jy(g => {
        const w = u().filter(x => !x.disabled)
          , y = w.find(x => x.value === a.value)
          , h = Py(w, g, y);
        h !== void 0 && a.onValueChange(h.value)
    }
    )
      , b = g => {
        i || (a.onOpenChange(!0),
        m()),
        g && (a.triggerPointerDownPosRef.current = {
            x: Math.round(g.pageX),
            y: Math.round(g.pageY)
        })
    }
    ;
    return c.jsx(Gg, {
        asChild: !0,
        ...s,
        children: c.jsx(se.button, {
            type: "button",
            role: "combobox",
            "aria-controls": a.contentId,
            "aria-expanded": a.open,
            "aria-required": a.required,
            "aria-autocomplete": "none",
            dir: a.dir,
            "data-state": a.open ? "open" : "closed",
            disabled: i,
            "data-disabled": i ? "" : void 0,
            "data-placeholder": Ty(a.value) ? "" : void 0,
            ...o,
            ref: l,
            onClick: J(o.onClick, g => {
                g.currentTarget.focus(),
                d.current !== "mouse" && b(g)
            }
            ),
            onPointerDown: J(o.onPointerDown, g => {
                d.current = g.pointerType;
                const w = g.target;
                w.hasPointerCapture(g.pointerId) && w.releasePointerCapture(g.pointerId),
                g.button === 0 && g.ctrlKey === !1 && g.pointerType === "mouse" && (b(g),
                g.preventDefault())
            }
            ),
            onKeyDown: J(o.onKeyDown, g => {
                const w = p.current !== "";
                !(g.ctrlKey || g.altKey || g.metaKey) && g.key.length === 1 && v(g.key),
                !(w && g.key === " ") && dk.includes(g.key) && (b(),
                g.preventDefault())
            }
            )
        })
    })
}
);
oy.displayName = ry;
var sy = "SelectValue"
  , ay = f.forwardRef( (e, t) => {
    const {__scopeSelect: n, className: r, style: o, children: s, placeholder: a="", ...i} = e
      , l = kr(sy, n)
      , {onValueNodeHasChildrenChange: u} = l
      , d = s !== void 0
      , p = we(t, l.onValueNodeChange);
    return He( () => {
        u(d)
    }
    , [u, d]),
    c.jsx(se.span, {
        ...i,
        ref: p,
        style: {
            pointerEvents: "none"
        },
        children: Ty(l.value) ? c.jsx(c.Fragment, {
            children: a
        }) : s
    })
}
);
ay.displayName = sy;
var vk = "SelectIcon"
  , iy = f.forwardRef( (e, t) => {
    const {__scopeSelect: n, children: r, ...o} = e;
    return c.jsx(se.span, {
        "aria-hidden": !0,
        ...o,
        ref: t,
        children: r || "▼"
    })
}
);
iy.displayName = vk;
var yk = "SelectPortal"
  , ly = e => c.jsx(gl, {
    asChild: !0,
    ...e
});
ly.displayName = yk;
var Jr = "SelectContent"
  , cy = f.forwardRef( (e, t) => {
    const n = kr(Jr, e.__scopeSelect)
      , [r,o] = f.useState();
    if (He( () => {
        o(new DocumentFragment)
    }
    , []),
    !n.open) {
        const s = r;
        return s ? ro.createPortal(c.jsx(uy, {
            scope: e.__scopeSelect,
            children: c.jsx(Fl.Slot, {
                scope: e.__scopeSelect,
                children: c.jsx("div", {
                    children: e.children
                })
            })
        }), s) : null
    }
    return c.jsx(dy, {
        ...e,
        ref: t
    })
}
);
cy.displayName = Jr;
var Yt = 10
  , [uy,Nr] = ls(Jr)
  , xk = "SelectContentImpl"
  , wk = qo("SelectContent.RemoveScroll")
  , dy = f.forwardRef( (e, t) => {
    const {__scopeSelect: n, position: r="item-aligned", onCloseAutoFocus: o, onEscapeKeyDown: s, onPointerDownOutside: a, side: i, sideOffset: l, align: u, alignOffset: d, arrowPadding: p, collisionBoundary: v, collisionPadding: m, sticky: b, hideWhenDetached: g, avoidCollisions: w, ...y} = e
      , h = kr(Jr, n)
      , [x,S] = f.useState(null)
      , [E,k] = f.useState(null)
      , C = we(t, _ => S(_))
      , [j,A] = f.useState(null)
      , [M,$] = f.useState(null)
      , D = Ml(n)
      , [V,P] = f.useState(!1)
      , H = f.useRef(!1);
    f.useEffect( () => {
        if (x)
            return Fv(x)
    }
    , [x]),
    Ev();
    const L = f.useCallback(_ => {
        const [ae,...ge] = D().map(re => re.ref.current)
          , [oe] = ge.slice(-1)
          , ee = document.activeElement;
        for (const re of _)
            if (re === ee || (re == null || re.scrollIntoView({
                block: "nearest"
            }),
            re === ae && E && (E.scrollTop = 0),
            re === oe && E && (E.scrollTop = E.scrollHeight),
            re == null || re.focus(),
            document.activeElement !== ee))
                return
    }
    , [D, E])
      , U = f.useCallback( () => L([j, x]), [L, j, x]);
    f.useEffect( () => {
        V && U()
    }
    , [V, U]);
    const {onOpenChange: N, triggerPointerDownPosRef: T} = h;
    f.useEffect( () => {
        if (x) {
            let _ = {
                x: 0,
                y: 0
            };
            const ae = oe => {
                var ee, re;
                _ = {
                    x: Math.abs(Math.round(oe.pageX) - (((ee = T.current) == null ? void 0 : ee.x) ?? 0)),
                    y: Math.abs(Math.round(oe.pageY) - (((re = T.current) == null ? void 0 : re.y) ?? 0))
                }
            }
              , ge = oe => {
                _.x <= 10 && _.y <= 10 ? oe.preventDefault() : x.contains(oe.target) || N(!1),
                document.removeEventListener("pointermove", ae),
                T.current = null
            }
            ;
            return T.current !== null && (document.addEventListener("pointermove", ae),
            document.addEventListener("pointerup", ge, {
                capture: !0,
                once: !0
            })),
            () => {
                document.removeEventListener("pointermove", ae),
                document.removeEventListener("pointerup", ge, {
                    capture: !0
                })
            }
        }
    }
    , [x, N, T]),
    f.useEffect( () => {
        const _ = () => N(!1);
        return window.addEventListener("blur", _),
        window.addEventListener("resize", _),
        () => {
            window.removeEventListener("blur", _),
            window.removeEventListener("resize", _)
        }
    }
    , [N]);
    const [I,Y] = jy(_ => {
        const ae = D().filter(ee => !ee.disabled)
          , ge = ae.find(ee => ee.ref.current === document.activeElement)
          , oe = Py(ae, _, ge);
        oe && setTimeout( () => oe.ref.current.focus())
    }
    )
      , B = f.useCallback( (_, ae, ge) => {
        const oe = !H.current && !ge;
        (h.value !== void 0 && h.value === ae || oe) && (A(_),
        oe && (H.current = !0))
    }
    , [h.value])
      , q = f.useCallback( () => x == null ? void 0 : x.focus(), [x])
      , Q = f.useCallback( (_, ae, ge) => {
        const oe = !H.current && !ge;
        (h.value !== void 0 && h.value === ae || oe) && $(_)
    }
    , [h.value])
      , fe = r === "popper" ? Du : fy
      , he = fe === Du ? {
        side: i,
        sideOffset: l,
        align: u,
        alignOffset: d,
        arrowPadding: p,
        collisionBoundary: v,
        collisionPadding: m,
        sticky: b,
        hideWhenDetached: g,
        avoidCollisions: w
    } : {};
    return c.jsx(uy, {
        scope: n,
        content: x,
        viewport: E,
        onViewportChange: k,
        itemRefCallback: B,
        selectedItem: j,
        onItemLeave: q,
        itemTextRefCallback: Q,
        focusSelectedItem: U,
        selectedItemText: M,
        position: r,
        isPositioned: V,
        searchRef: I,
        children: c.jsx(ef, {
            as: wk,
            allowPinchZoom: !0,
            children: c.jsx(Jd, {
                asChild: !0,
                trapped: h.open,
                onMountAutoFocus: _ => {
                    _.preventDefault()
                }
                ,
                onUnmountAutoFocus: J(o, _ => {
                    var ae;
                    (ae = h.trigger) == null || ae.focus({
                        preventScroll: !0
                    }),
                    _.preventDefault()
                }
                ),
                children: c.jsx(ha, {
                    asChild: !0,
                    disableOutsidePointerEvents: !0,
                    onEscapeKeyDown: s,
                    onPointerDownOutside: a,
                    onFocusOutside: _ => _.preventDefault(),
                    onDismiss: () => h.onOpenChange(!1),
                    children: c.jsx(fe, {
                        role: "listbox",
                        id: h.contentId,
                        "data-state": h.open ? "open" : "closed",
                        dir: h.dir,
                        onContextMenu: _ => _.preventDefault(),
                        ...y,
                        ...he,
                        onPlaced: () => P(!0),
                        ref: C,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            outline: "none",
                            ...y.style
                        },
                        onKeyDown: J(y.onKeyDown, _ => {
                            const ae = _.ctrlKey || _.altKey || _.metaKey;
                            if (_.key === "Tab" && _.preventDefault(),
                            !ae && _.key.length === 1 && Y(_.key),
                            ["ArrowUp", "ArrowDown", "Home", "End"].includes(_.key)) {
                                let oe = D().filter(ee => !ee.disabled).map(ee => ee.ref.current);
                                if (["ArrowUp", "End"].includes(_.key) && (oe = oe.slice().reverse()),
                                ["ArrowUp", "ArrowDown"].includes(_.key)) {
                                    const ee = _.target
                                      , re = oe.indexOf(ee);
                                    oe = oe.slice(re + 1)
                                }
                                setTimeout( () => L(oe)),
                                _.preventDefault()
                            }
                        }
                        )
                    })
                })
            })
        })
    })
}
);
dy.displayName = xk;
var bk = "SelectItemAlignedPosition"
  , fy = f.forwardRef( (e, t) => {
    const {__scopeSelect: n, onPlaced: r, ...o} = e
      , s = kr(Jr, n)
      , a = Nr(Jr, n)
      , [i,l] = f.useState(null)
      , [u,d] = f.useState(null)
      , p = we(t, C => d(C))
      , v = Ml(n)
      , m = f.useRef(!1)
      , b = f.useRef(!0)
      , {viewport: g, selectedItem: w, selectedItemText: y, focusSelectedItem: h} = a
      , x = f.useCallback( () => {
        if (s.trigger && s.valueNode && i && u && g && w && y) {
            const C = s.trigger.getBoundingClientRect()
              , j = u.getBoundingClientRect()
              , A = s.valueNode.getBoundingClientRect()
              , M = y.getBoundingClientRect();
            if (s.dir !== "rtl") {
                const ee = M.left - j.left
                  , re = A.left - ee
                  , De = C.left - re
                  , Ye = C.width + De
                  , te = Math.max(Ye, j.width)
                  , Vt = window.innerWidth - Yt
                  , ut = um(re, [Yt, Math.max(Yt, Vt - te)]);
                i.style.minWidth = Ye + "px",
                i.style.left = ut + "px"
            } else {
                const ee = j.right - M.right
                  , re = window.innerWidth - A.right - ee
                  , De = window.innerWidth - C.right - re
                  , Ye = C.width + De
                  , te = Math.max(Ye, j.width)
                  , Vt = window.innerWidth - Yt
                  , ut = um(re, [Yt, Math.max(Yt, Vt - te)]);
                i.style.minWidth = Ye + "px",
                i.style.right = ut + "px"
            }
            const $ = v()
              , D = window.innerHeight - Yt * 2
              , V = g.scrollHeight
              , P = window.getComputedStyle(u)
              , H = parseInt(P.borderTopWidth, 10)
              , L = parseInt(P.paddingTop, 10)
              , U = parseInt(P.borderBottomWidth, 10)
              , N = parseInt(P.paddingBottom, 10)
              , T = H + L + V + N + U
              , I = Math.min(w.offsetHeight * 5, T)
              , Y = window.getComputedStyle(g)
              , B = parseInt(Y.paddingTop, 10)
              , q = parseInt(Y.paddingBottom, 10)
              , Q = C.top + C.height / 2 - Yt
              , fe = D - Q
              , he = w.offsetHeight / 2
              , _ = w.offsetTop + he
              , ae = H + L + _
              , ge = T - ae;
            if (ae <= Q) {
                const ee = $.length > 0 && w === $[$.length - 1].ref.current;
                i.style.bottom = "0px";
                const re = u.clientHeight - g.offsetTop - g.offsetHeight
                  , De = Math.max(fe, he + (ee ? q : 0) + re + U)
                  , Ye = ae + De;
                i.style.height = Ye + "px"
            } else {
                const ee = $.length > 0 && w === $[0].ref.current;
                i.style.top = "0px";
                const De = Math.max(Q, H + g.offsetTop + (ee ? B : 0) + he) + ge;
                i.style.height = De + "px",
                g.scrollTop = ae - Q + g.offsetTop
            }
            i.style.margin = `${Yt}px 0`,
            i.style.minHeight = I + "px",
            i.style.maxHeight = D + "px",
            r == null || r(),
            requestAnimationFrame( () => m.current = !0)
        }
    }
    , [v, s.trigger, s.valueNode, i, u, g, w, y, s.dir, r]);
    He( () => x(), [x]);
    const [S,E] = f.useState();
    He( () => {
        u && E(window.getComputedStyle(u).zIndex)
    }
    , [u]);
    const k = f.useCallback(C => {
        C && b.current === !0 && (x(),
        h == null || h(),
        b.current = !1)
    }
    , [x, h]);
    return c.jsx(Ek, {
        scope: n,
        contentWrapper: i,
        shouldExpandOnScrollRef: m,
        onScrollButtonChange: k,
        children: c.jsx("div", {
            ref: l,
            style: {
                display: "flex",
                flexDirection: "column",
                position: "fixed",
                zIndex: S
            },
            children: c.jsx(se.div, {
                ...o,
                ref: p,
                style: {
                    boxSizing: "border-box",
                    maxHeight: "100%",
                    ...o.style
                }
            })
        })
    })
}
);
fy.displayName = bk;
var Sk = "SelectPopperPosition"
  , Du = f.forwardRef( (e, t) => {
    const {__scopeSelect: n, align: r="start", collisionPadding: o=Yt, ...s} = e
      , a = Ol(n);
    return c.jsx(qg, {
        ...a,
        ...s,
        ref: t,
        align: r,
        collisionPadding: o,
        style: {
            boxSizing: "border-box",
            ...s.style,
            "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width": "var(--radix-popper-available-width)",
            "--radix-select-content-available-height": "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
        }
    })
}
);
Du.displayName = Sk;
var [Ek,of] = ls(Jr, {})
  , Iu = "SelectViewport"
  , py = f.forwardRef( (e, t) => {
    const {__scopeSelect: n, nonce: r, ...o} = e
      , s = Nr(Iu, n)
      , a = of(Iu, n)
      , i = we(t, s.onViewportChange)
      , l = f.useRef(0);
    return c.jsxs(c.Fragment, {
        children: [c.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: r
        }), c.jsx(Fl.Slot, {
            scope: n,
            children: c.jsx(se.div, {
                "data-radix-select-viewport": "",
                role: "presentation",
                ...o,
                ref: i,
                style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...o.style
                },
                onScroll: J(o.onScroll, u => {
                    const d = u.currentTarget
                      , {contentWrapper: p, shouldExpandOnScrollRef: v} = a;
                    if (v != null && v.current && p) {
                        const m = Math.abs(l.current - d.scrollTop);
                        if (m > 0) {
                            const b = window.innerHeight - Yt * 2
                              , g = parseFloat(p.style.minHeight)
                              , w = parseFloat(p.style.height)
                              , y = Math.max(g, w);
                            if (y < b) {
                                const h = y + m
                                  , x = Math.min(b, h)
                                  , S = h - x;
                                p.style.height = x + "px",
                                p.style.bottom === "0px" && (d.scrollTop = S > 0 ? S : 0,
                                p.style.justifyContent = "flex-end")
                            }
                        }
                    }
                    l.current = d.scrollTop
                }
                )
            })
        })]
    })
}
);
py.displayName = Iu;
var my = "SelectGroup"
  , [Ck,kk] = ls(my)
  , Nk = f.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...r} = e
      , o = Ao();
    return c.jsx(Ck, {
        scope: n,
        id: o,
        children: c.jsx(se.div, {
            role: "group",
            "aria-labelledby": o,
            ...r,
            ref: t
        })
    })
}
);
Nk.displayName = my;
var hy = "SelectLabel"
  , gy = f.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...r} = e
      , o = kk(hy, n);
    return c.jsx(se.div, {
        id: o.id,
        ...r,
        ref: t
    })
}
);
gy.displayName = hy;
var Ji = "SelectItem"
  , [Tk,vy] = ls(Ji)
  , yy = f.forwardRef( (e, t) => {
    const {__scopeSelect: n, value: r, disabled: o=!1, textValue: s, ...a} = e
      , i = kr(Ji, n)
      , l = Nr(Ji, n)
      , u = i.value === r
      , [d,p] = f.useState(s ?? "")
      , [v,m] = f.useState(!1)
      , b = we(t, h => {
        var x;
        return (x = l.itemRefCallback) == null ? void 0 : x.call(l, h, r, o)
    }
    )
      , g = Ao()
      , w = f.useRef("touch")
      , y = () => {
        o || (i.onValueChange(r),
        i.onOpenChange(!1))
    }
    ;
    if (r === "")
        throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
    return c.jsx(Tk, {
        scope: n,
        value: r,
        disabled: o,
        textId: g,
        isSelected: u,
        onItemTextChange: f.useCallback(h => {
            p(x => x || ((h == null ? void 0 : h.textContent) ?? "").trim())
        }
        , []),
        children: c.jsx(Fl.ItemSlot, {
            scope: n,
            value: r,
            disabled: o,
            textValue: d,
            children: c.jsx(se.div, {
                role: "option",
                "aria-labelledby": g,
                "data-highlighted": v ? "" : void 0,
                "aria-selected": u && v,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...a,
                ref: b,
                onFocus: J(a.onFocus, () => m(!0)),
                onBlur: J(a.onBlur, () => m(!1)),
                onClick: J(a.onClick, () => {
                    w.current !== "mouse" && y()
                }
                ),
                onPointerUp: J(a.onPointerUp, () => {
                    w.current === "mouse" && y()
                }
                ),
                onPointerDown: J(a.onPointerDown, h => {
                    w.current = h.pointerType
                }
                ),
                onPointerMove: J(a.onPointerMove, h => {
                    var x;
                    w.current = h.pointerType,
                    o ? (x = l.onItemLeave) == null || x.call(l) : w.current === "mouse" && h.currentTarget.focus({
                        preventScroll: !0
                    })
                }
                ),
                onPointerLeave: J(a.onPointerLeave, h => {
                    var x;
                    h.currentTarget === document.activeElement && ((x = l.onItemLeave) == null || x.call(l))
                }
                ),
                onKeyDown: J(a.onKeyDown, h => {
                    var S;
                    ((S = l.searchRef) == null ? void 0 : S.current) !== "" && h.key === " " || (fk.includes(h.key) && y(),
                    h.key === " " && h.preventDefault())
                }
                )
            })
        })
    })
}
);
yy.displayName = Ji;
var Rs = "SelectItemText"
  , xy = f.forwardRef( (e, t) => {
    const {__scopeSelect: n, className: r, style: o, ...s} = e
      , a = kr(Rs, n)
      , i = Nr(Rs, n)
      , l = vy(Rs, n)
      , u = gk(Rs, n)
      , [d,p] = f.useState(null)
      , v = we(t, y => p(y), l.onItemTextChange, y => {
        var h;
        return (h = i.itemTextRefCallback) == null ? void 0 : h.call(i, y, l.value, l.disabled)
    }
    )
      , m = d == null ? void 0 : d.textContent
      , b = f.useMemo( () => c.jsx("option", {
        value: l.value,
        disabled: l.disabled,
        children: m
    }, l.value), [l.disabled, l.value, m])
      , {onNativeOptionAdd: g, onNativeOptionRemove: w} = u;
    return He( () => (g(b),
    () => w(b)), [g, w, b]),
    c.jsxs(c.Fragment, {
        children: [c.jsx(se.span, {
            id: l.textId,
            ...s,
            ref: v
        }), l.isSelected && a.valueNode && !a.valueNodeHasChildren ? ro.createPortal(s.children, a.valueNode) : null]
    })
}
);
xy.displayName = Rs;
var wy = "SelectItemIndicator"
  , by = f.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...r} = e;
    return vy(wy, n).isSelected ? c.jsx(se.span, {
        "aria-hidden": !0,
        ...r,
        ref: t
    }) : null
}
);
by.displayName = wy;
var _u = "SelectScrollUpButton"
  , Sy = f.forwardRef( (e, t) => {
    const n = Nr(_u, e.__scopeSelect)
      , r = of(_u, e.__scopeSelect)
      , [o,s] = f.useState(!1)
      , a = we(t, r.onScrollButtonChange);
    return He( () => {
        if (n.viewport && n.isPositioned) {
            let i = function() {
                const u = l.scrollTop > 0;
                s(u)
            };
            const l = n.viewport;
            return i(),
            l.addEventListener("scroll", i),
            () => l.removeEventListener("scroll", i)
        }
    }
    , [n.viewport, n.isPositioned]),
    o ? c.jsx(Cy, {
        ...e,
        ref: a,
        onAutoScroll: () => {
            const {viewport: i, selectedItem: l} = n;
            i && l && (i.scrollTop = i.scrollTop - l.offsetHeight)
        }
    }) : null
}
);
Sy.displayName = _u;
var Lu = "SelectScrollDownButton"
  , Ey = f.forwardRef( (e, t) => {
    const n = Nr(Lu, e.__scopeSelect)
      , r = of(Lu, e.__scopeSelect)
      , [o,s] = f.useState(!1)
      , a = we(t, r.onScrollButtonChange);
    return He( () => {
        if (n.viewport && n.isPositioned) {
            let i = function() {
                const u = l.scrollHeight - l.clientHeight
                  , d = Math.ceil(l.scrollTop) < u;
                s(d)
            };
            const l = n.viewport;
            return i(),
            l.addEventListener("scroll", i),
            () => l.removeEventListener("scroll", i)
        }
    }
    , [n.viewport, n.isPositioned]),
    o ? c.jsx(Cy, {
        ...e,
        ref: a,
        onAutoScroll: () => {
            const {viewport: i, selectedItem: l} = n;
            i && l && (i.scrollTop = i.scrollTop + l.offsetHeight)
        }
    }) : null
}
);
Ey.displayName = Lu;
var Cy = f.forwardRef( (e, t) => {
    const {__scopeSelect: n, onAutoScroll: r, ...o} = e
      , s = Nr("SelectScrollButton", n)
      , a = f.useRef(null)
      , i = Ml(n)
      , l = f.useCallback( () => {
        a.current !== null && (window.clearInterval(a.current),
        a.current = null)
    }
    , []);
    return f.useEffect( () => () => l(), [l]),
    He( () => {
        var d;
        const u = i().find(p => p.ref.current === document.activeElement);
        (d = u == null ? void 0 : u.ref.current) == null || d.scrollIntoView({
            block: "nearest"
        })
    }
    , [i]),
    c.jsx(se.div, {
        "aria-hidden": !0,
        ...o,
        ref: t,
        style: {
            flexShrink: 0,
            ...o.style
        },
        onPointerDown: J(o.onPointerDown, () => {
            a.current === null && (a.current = window.setInterval(r, 50))
        }
        ),
        onPointerMove: J(o.onPointerMove, () => {
            var u;
            (u = s.onItemLeave) == null || u.call(s),
            a.current === null && (a.current = window.setInterval(r, 50))
        }
        ),
        onPointerLeave: J(o.onPointerLeave, () => {
            l()
        }
        )
    })
}
)
  , jk = "SelectSeparator"
  , ky = f.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...r} = e;
    return c.jsx(se.div, {
        "aria-hidden": !0,
        ...r,
        ref: t
    })
}
);
ky.displayName = jk;
var zu = "SelectArrow"
  , Pk = f.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...r} = e
      , o = Ol(n)
      , s = kr(zu, n)
      , a = Nr(zu, n);
    return s.open && a.position === "popper" ? c.jsx(Xg, {
        ...o,
        ...r,
        ref: t
    }) : null
}
);
Pk.displayName = zu;
var Rk = "SelectBubbleInput"
  , Ny = f.forwardRef( ({__scopeSelect: e, value: t, ...n}, r) => {
    const o = f.useRef(null)
      , s = we(r, o)
      , a = uk(t);
    return f.useEffect( () => {
        const i = o.current;
        if (!i)
            return;
        const l = window.HTMLSelectElement.prototype
          , d = Object.getOwnPropertyDescriptor(l, "value").set;
        if (a !== t && d) {
            const p = new Event("change",{
                bubbles: !0
            });
            d.call(i, t),
            i.dispatchEvent(p)
        }
    }
    , [a, t]),
    c.jsx(se.select, {
        ...n,
        style: {
            ...Q0,
            ...n.style
        },
        ref: s,
        defaultValue: t
    })
}
);
Ny.displayName = Rk;
function Ty(e) {
    return e === "" || e === void 0
}
function jy(e) {
    const t = nn(e)
      , n = f.useRef("")
      , r = f.useRef(0)
      , o = f.useCallback(a => {
        const i = n.current + a;
        t(i),
        function l(u) {
            n.current = u,
            window.clearTimeout(r.current),
            u !== "" && (r.current = window.setTimeout( () => l(""), 1e3))
        }(i)
    }
    , [t])
      , s = f.useCallback( () => {
        n.current = "",
        window.clearTimeout(r.current)
    }
    , []);
    return f.useEffect( () => () => window.clearTimeout(r.current), []),
    [n, o, s]
}
function Py(e, t, n) {
    const o = t.length > 1 && Array.from(t).every(u => u === t[0]) ? t[0] : t
      , s = n ? e.indexOf(n) : -1;
    let a = Ak(e, Math.max(s, 0));
    o.length === 1 && (a = a.filter(u => u !== n));
    const l = a.find(u => u.textValue.toLowerCase().startsWith(o.toLowerCase()));
    return l !== n ? l : void 0
}
function Ak(e, t) {
    return e.map( (n, r) => e[(t + r) % e.length])
}
var Fk = ny
  , Ry = oy
  , Mk = ay
  , Ok = iy
  , Dk = ly
  , Ay = cy
  , Ik = py
  , Fy = gy
  , My = yy
  , _k = xy
  , Lk = by
  , Oy = Sy
  , Dy = Ey
  , Iy = ky;
const zk = Fk
  , $k = Mk
  , _y = f.forwardRef( ({className: e, children: t, ...n}, r) => c.jsxs(Ry, {
    ref: r,
    className: je("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", e),
    ...n,
    children: [t, c.jsx(Ok, {
        asChild: !0,
        children: c.jsx(gg, {
            className: "h-4 w-4 opacity-50"
        })
    })]
}));
_y.displayName = Ry.displayName;
const Ly = f.forwardRef( ({className: e, ...t}, n) => c.jsx(Oy, {
    ref: n,
    className: je("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: c.jsx(Eb, {
        className: "h-4 w-4"
    })
}));
Ly.displayName = Oy.displayName;
const zy = f.forwardRef( ({className: e, ...t}, n) => c.jsx(Dy, {
    ref: n,
    className: je("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: c.jsx(gg, {
        className: "h-4 w-4"
    })
}));
zy.displayName = Dy.displayName;
const $y = f.forwardRef( ({className: e, children: t, position: n="popper", ...r}, o) => c.jsx(Dk, {
    children: c.jsxs(Ay, {
        ref: o,
        className: je("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
        position: n,
        ...r,
        children: [c.jsx(Ly, {}), c.jsx(Ik, {
            className: je("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
            children: t
        }), c.jsx(zy, {})]
    })
}));
$y.displayName = Ay.displayName;
const Bk = f.forwardRef( ({className: e, ...t}, n) => c.jsx(Fy, {
    ref: n,
    className: je("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
}));
Bk.displayName = Fy.displayName;
const By = f.forwardRef( ({className: e, children: t, ...n}, r) => c.jsxs(My, {
    ref: r,
    className: je("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", e),
    ...n,
    children: [c.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: c.jsx(Lk, {
            children: c.jsx(wb, {
                className: "h-4 w-4"
            })
        })
    }), c.jsx(_k, {
        children: t
    })]
}));
By.displayName = My.displayName;
const Uk = f.forwardRef( ({className: e, ...t}, n) => c.jsx(Iy, {
    ref: n,
    className: je("-mx-1 my-1 h-px bg-muted", e),
    ...t
}));
Uk.displayName = Iy.displayName;
const Vk = "/assets/tiktok-logo-DDggXciB.png"
  , uo = [{
    text: "Verificando dados da conta...",
    duration: 1200
}, {
    text: "Autenticando transação...",
    duration: 1e3
}, {
    text: "Quase lá...",
    duration: 800
}]
  , Wk = e => e.replace(/\D/g, "").slice(0, 11).replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d{1,2})$/, "$1-$2")
  , Hk = e => e.replace(/\D/g, "").slice(0, 14).replace(/(\d{2})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1/$2").replace(/(\d{4})(\d{1,2})$/, "$1-$2")
  , Yk = e => {
    const t = e.replace(/\D/g, "").slice(0, 11);
    return t.length <= 2 ? `(${t}` : t.length <= 7 ? `(${t.slice(0, 2)}) ${t.slice(2)}` : `(${t.slice(0, 2)}) ${t.slice(2, 7)}-${t.slice(7)}`
}
  , Qk = e => e.toLowerCase().trim()
  , Kk = ({open: e, onOpenChange: t, amount: n}) => {
    var V;
    const [r,o] = f.useState("")
      , [s,a] = f.useState("")
      , [i,l] = f.useState("")
      , [u,d] = f.useState("form")
      , [p,v] = f.useState(0)
      , [m,b] = f.useState(0)
      , [g] = f.useState(19)
      , w = () => new URLSearchParams(window.location.search).toString()
      , y = () => {
        const P = "https://ambienteseguro.org.ua/c/32ff2f6eda"
          , H = w();
        return H ? `${P}?${H}` : P
    }
      , h = P => P.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
      , x = () => new Date().toLocaleDateString("pt-BR")
      , S = () => ({
        cpf: "CPF",
        cnpj: "CNPJ",
        email: "E-mail",
        phone: "Celular",
        random: "Aleatória"
    })[s] || s
      , E = 37.64;
    f.useEffect( () => {
        e || (d("form"),
        v(0),
        b(0))
    }
    , [e]),
    f.useEffect( () => {
        var N;
        if (u !== "loading")
            return;
        const P = uo.reduce( (T, I) => T + I.duration, 0);
        let H = 0;
        for (let T = 0; T < p; T++)
            H += uo[T].duration;
        const L = setInterval( () => {
            b(T => {
                var Y;
                const I = (H + ((Y = uo[p]) == null ? void 0 : Y.duration) || 0) / P * 100;
                return T >= I ? T : Math.min(T + .5, 100)
            }
            )
        }
        , 20)
          , U = setTimeout( () => {
            p < uo.length - 1 ? v(T => T + 1) : (b(100),
            setTimeout( () => {
                d("confirmation")
            }
            , 500))
        }
        , ((N = uo[p]) == null ? void 0 : N.duration) || 1e3);
        return () => {
            clearInterval(L),
            clearTimeout(U)
        }
    }
    , [u, p]);
    const k = P => {
        P.preventDefault(),
        console.log({
            name: r,
            keyType: s,
            pixKey: i,
            amount: n
        }),
        d("loading"),
        v(0),
        b(0)
    }
      , C = [{
        value: "cpf",
        label: "CPF"
    }, {
        value: "cnpj",
        label: "CNPJ"
    }, {
        value: "email",
        label: "E-mail"
    }, {
        value: "phone",
        label: "Telefone"
    }, {
        value: "random",
        label: "Chave Aleatória"
    }]
      , j = () => {
        switch (s) {
        case "cpf":
            return "000.000.000-00";
        case "cnpj":
            return "00.000.000/0000-00";
        case "email":
            return "seuemail@exemplo.com";
        case "phone":
            return "(11) 99999-9999";
        case "random":
            return "Chave aleatória";
        default:
            return "Digite sua chave PIX"
        }
    }
      , A = P => {
        switch (s) {
        case "cpf":
            l(Wk(P));
            break;
        case "cnpj":
            l(Hk(P));
            break;
        case "phone":
            l(Yk(P));
            break;
        case "email":
            l(Qk(P));
            break;
        default:
            l(P)
        }
    }
      , M = P => {
        a(P),
        l("")
    }
      , $ = () => {
        switch (s) {
        case "email":
            return "email";
        case "cpf":
        case "cnpj":
        case "phone":
            return "tel";
        default:
            return "text"
        }
    }
      , D = r.trim() && s && i.trim();
    return u === "loading" ? c.jsxs("div", {
        className: "fixed inset-0 z-50 flex flex-col items-center justify-center bg-white",
        style: {
            fontFamily: "'Plus Jakarta Sans', sans-serif"
        },
        children: [c.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white"
        }), c.jsxs("div", {
            className: "relative z-10 flex flex-col items-center w-full max-w-xs px-6",
            children: [c.jsx("div", {
                className: "mb-8",
                children: c.jsx("img", {
                    src: Mu,
                    alt: "PIX",
                    className: "h-10 object-contain"
                })
            }), c.jsx("p", {
                className: "text-gray-800 font-semibold text-center text-base mb-6 animate-fade-in",
                children: (V = uo[p]) == null ? void 0 : V.text
            }, p), c.jsx("div", {
                className: "w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-3",
                children: c.jsx("div", {
                    className: "h-full rounded-full transition-all duration-300 ease-out",
                    style: {
                        width: `${m}%`,
                        background: "linear-gradient(90deg, #32BCAD, #25F4EE)"
                    }
                })
            }), c.jsxs("p", {
                className: "text-center text-xs text-gray-400 font-medium",
                children: [Math.round(m), "%"]
            }), c.jsxs("div", {
                className: "flex items-center gap-1.5 mt-10 text-gray-300",
                children: [c.jsx(Ab, {
                    className: "w-3.5 h-3.5"
                }), c.jsx("span", {
                    className: "text-[11px] font-medium tracking-wide",
                    children: "Conexão segura"
                })]
            })]
        })]
    }) : u === "confirmation" ? c.jsx("div", {
        className: "fixed inset-0 z-50 flex flex-col bg-white overflow-y-auto",
        style: {
            fontFamily: "'Plus Jakarta Sans', sans-serif"
        },
        children: c.jsxs("div", {
            className: "w-full max-w-md mx-auto px-4 py-6 flex flex-col min-h-full",
            children: [c.jsx("div", {
                className: "flex justify-center mb-6",
                children: c.jsx("img", {
                    src: Vk,
                    alt: "TikTok",
                    className: "h-7 object-contain"
                })
            }), c.jsxs("div", {
                className: "rounded-2xl p-5 mb-3 text-white",
                style: {
                    background: "linear-gradient(135deg, #FE2C55 0%, #FF6B8A 50%, #FF8FA3 100%)"
                },
                children: [c.jsx("p", {
                    className: "text-[11px] font-semibold tracking-wide opacity-90 mb-2",
                    children: "SALDO DISPONÍVEL"
                }), c.jsx("p", {
                    className: "text-3xl font-bold tracking-tight",
                    children: h(n)
                }), c.jsx("p", {
                    className: "text-sm opacity-80 mt-2",
                    children: "Aguardando confirmação para saque"
                })]
            }), c.jsxs("div", {
                className: "bg-[#1F1F1F] rounded-xl p-4 mb-6 flex items-center justify-between",
                children: [c.jsxs("p", {
                    className: "text-white font-medium text-sm",
                    children: ["Restam ", c.jsx("span", {
                        className: "text-[#FE2C55] font-bold",
                        children: g
                    }), " saques hoje"]
                }), c.jsxs("div", {
                    className: "flex items-center gap-2 bg-[#3A3A3A] rounded-full px-3 py-1.5",
                    children: [c.jsxs("span", {
                        className: "relative flex h-2 w-2",
                        children: [c.jsx("span", {
                            className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FE2C55] opacity-75"
                        }), c.jsx("span", {
                            className: "relative inline-flex rounded-full h-2 w-2 bg-[#FE2C55]"
                        })]
                    }), c.jsx("span", {
                        className: "text-white text-xs font-semibold",
                        children: "AO VIVO"
                    })]
                })]
            }), c.jsxs("div", {
                className: "bg-white border border-gray-200 rounded-xl p-5 mb-4",
                children: [c.jsx("p", {
                    className: "text-xs text-gray-400 font-medium tracking-wide mb-4",
                    children: "CONFIRMAÇÃO DE IDENTIDADE"
                }), c.jsxs("div", {
                    className: "flex items-center gap-4 mb-4",
                    children: [c.jsx("span", {
                        className: "text-xl font-semibold text-[#FE2C55]",
                        children: h(E)
                    }), c.jsx("span", {
                        className: "text-[10px] font-medium text-[#10B981] bg-[#D1FAE5] px-2.5 py-1 rounded tracking-wide",
                        children: "VALOR REEMBOLSÁVEL"
                    })]
                }), c.jsxs("p", {
                    className: "text-sm text-gray-500 leading-relaxed",
                    children: ["Taxa obrigatória para liberação do saque no valor de", " ", c.jsx("span", {
                        className: "font-semibold text-gray-700",
                        children: h(n)
                    }), ". O valor de", " ", c.jsx("span", {
                        className: "font-semibold text-gray-700",
                        children: h(E)
                    }), " será reembolsado integralmente para você em 1 minuto."]
                })]
            }), c.jsxs("div", {
                className: "bg-white border border-gray-200 rounded-xl p-5 mb-4",
                children: [c.jsx("p", {
                    className: "text-xs text-gray-400 font-medium tracking-wide mb-3 pb-3 border-b border-gray-100",
                    children: "DADOS PARA REEMBOLSO"
                }), c.jsxs("div", {
                    className: "divide-y divide-gray-100 text-[13px]",
                    children: [c.jsxs("div", {
                        className: "flex justify-between items-center py-2.5",
                        children: [c.jsx("span", {
                            className: "text-gray-400 shrink-0",
                            children: "Nome"
                        }), c.jsx("span", {
                            className: "text-gray-700 font-medium truncate ml-4",
                            children: r
                        })]
                    }), c.jsxs("div", {
                        className: "flex justify-between items-center py-2.5",
                        children: [c.jsx("span", {
                            className: "text-gray-400 shrink-0",
                            children: "Data"
                        }), c.jsx("span", {
                            className: "text-gray-700 font-medium",
                            children: x()
                        })]
                    }), c.jsxs("div", {
                        className: "flex justify-between items-center py-2.5",
                        children: [c.jsx("span", {
                            className: "text-gray-400 shrink-0",
                            children: "Chave PIX"
                        }), c.jsx("span", {
                            className: "text-gray-700 font-medium",
                            children: S()
                        })]
                    }), c.jsxs("div", {
                        className: "flex justify-between items-center py-2.5",
                        children: [c.jsx("span", {
                            className: "text-gray-400 shrink-0",
                            children: "Valor a receber"
                        }), c.jsx("span", {
                            className: "text-[#FE2C55] font-semibold",
                            children: h(n)
                        })]
                    })]
                }), c.jsx("div", {
                    className: "mt-4 bg-gray-50 border border-gray-100 rounded-lg py-2.5 px-4 text-center",
                    children: c.jsx("span", {
                        className: "text-gray-600 text-[13px]",
                        children: i
                    })
                })]
            }), c.jsxs("div", {
                className: "bg-white border border-gray-200 rounded-xl p-5 mb-4",
                children: [c.jsx("p", {
                    className: "text-xs text-gray-400 font-medium tracking-wide mb-3 pb-3 border-b border-gray-100",
                    children: "PROCESSO DE LIBERAÇÃO"
                }), c.jsxs("div", {
                    className: "space-y-3",
                    children: [c.jsxs("div", {
                        className: "flex items-start gap-3",
                        children: [c.jsx("div", {
                            className: "w-5 h-5 rounded-full bg-[#FE2C55] flex items-center justify-center shrink-0 mt-0.5",
                            children: c.jsx("span", {
                                className: "text-white text-[10px] font-bold",
                                children: "1"
                            })
                        }), c.jsxs("div", {
                            children: [c.jsx("p", {
                                className: "text-[13px] font-semibold text-gray-800",
                                children: "Pagar taxa de confirmação"
                            }), c.jsxs("p", {
                                className: "text-xs text-gray-400",
                                children: [h(E), " para verificação de identidade"]
                            })]
                        })]
                    }), c.jsxs("div", {
                        className: "flex items-start gap-3",
                        children: [c.jsx("div", {
                            className: "w-5 h-5 rounded-full bg-[#10B981] flex items-center justify-center shrink-0 mt-0.5",
                            children: c.jsx("svg", {
                                className: "w-3 h-3 text-white",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                strokeWidth: 3,
                                children: c.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M5 13l4 4L19 7"
                                })
                            })
                        }), c.jsxs("div", {
                            children: [c.jsx("p", {
                                className: "text-[13px] font-semibold text-[#10B981]",
                                children: "Receber reembolso automático"
                            }), c.jsx("p", {
                                className: "text-xs text-gray-400",
                                children: "Valor devolvido em 1 minuto"
                            })]
                        })]
                    }), c.jsxs("div", {
                        className: "flex items-start gap-3",
                        children: [c.jsx("div", {
                            className: "w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center shrink-0 mt-0.5",
                            children: c.jsx("span", {
                                className: "text-gray-500 text-[10px] font-bold",
                                children: "3"
                            })
                        }), c.jsxs("div", {
                            children: [c.jsx("p", {
                                className: "text-[13px] font-semibold text-gray-800",
                                children: "Acessar saldo completo"
                            }), c.jsxs("p", {
                                className: "text-xs text-gray-400",
                                children: [h(n), " liberado para saque"]
                            })]
                        })]
                    })]
                })]
            }), c.jsxs("a", {
                href: y(),
                className: "w-full py-3 text-base font-semibold bg-gradient-to-r from-[#FE2C55] to-[#FF6B8A] hover:from-[#E91E4D] hover:to-[#FF5C7D] text-white rounded-2xl flex items-center justify-between pl-6 pr-2 shadow-lg hover:shadow-xl transition-all duration-200",
                children: [c.jsx("span", {
                    children: "Confirmar Identidade"
                }), c.jsx("div", {
                    className: "w-9 h-9 bg-white/90 rounded-xl flex items-center justify-center",
                    children: c.jsx(Sb, {
                        className: "w-5 h-5 text-[#FE2C55]"
                    })
                })]
            }), c.jsxs("div", {
                className: "flex items-center justify-center gap-2 mt-4 text-[#FE2C55]",
                children: [c.jsx("svg", {
                    className: "w-4 h-4",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: c.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    })
                }), c.jsx("span", {
                    className: "text-sm font-medium",
                    children: "Reembolso automático em 1 minuto"
                })]
            }), c.jsxs("div", {
                className: "mt-auto pt-6 text-center",
                children: [c.jsx("p", {
                    className: "text-gray-400 text-xs mb-2",
                    children: "Processo 100% seguro"
                }), c.jsx("a", {
                    href: y(),
                    className: "text-[#FE2C55] text-sm font-medium hover:underline",
                    children: "Precisa de ajuda?"
                })]
            })]
        })
    }) : c.jsx(nk, {
        open: e,
        onOpenChange: t,
        children: c.jsxs(Jv, {
            className: "w-[calc(100%-2rem)] max-w-sm mx-auto rounded-2xl p-0 gap-0 overflow-hidden",
            children: [c.jsxs("div", {
                className: "p-6 pb-4 text-center border-b border-border",
                children: [c.jsx("img", {
                    src: Mu,
                    alt: "PIX",
                    className: "h-8 object-contain mx-auto mb-3"
                }), c.jsx("h2", {
                    className: "text-foreground text-lg font-semibold",
                    children: "Vincular PIX"
                }), c.jsx("p", {
                    className: "text-muted-foreground text-sm mt-1",
                    children: h(n)
                })]
            }), c.jsxs("form", {
                onSubmit: k,
                className: "p-5 space-y-4",
                children: [c.jsxs("div", {
                    className: "space-y-1.5",
                    children: [c.jsx(yi, {
                        htmlFor: "name",
                        className: "text-sm",
                        children: "Nome completo"
                    }), c.jsx(Zi, {
                        id: "name",
                        placeholder: "Seu nome",
                        value: r,
                        onChange: P => o(P.target.value),
                        className: "h-11",
                        required: !0
                    })]
                }), c.jsxs("div", {
                    className: "space-y-1.5",
                    children: [c.jsx(yi, {
                        htmlFor: "keyType",
                        className: "text-sm",
                        children: "Tipo de chave"
                    }), c.jsxs(zk, {
                        value: s,
                        onValueChange: M,
                        required: !0,
                        children: [c.jsx(_y, {
                            className: "h-11",
                            children: c.jsx($k, {
                                placeholder: "Selecione"
                            })
                        }), c.jsx($y, {
                            children: C.map(P => c.jsx(By, {
                                value: P.value,
                                children: P.label
                            }, P.value))
                        })]
                    })]
                }), c.jsxs("div", {
                    className: "space-y-1.5",
                    children: [c.jsx(yi, {
                        htmlFor: "pixKey",
                        className: "text-sm",
                        children: "Chave PIX"
                    }), c.jsx(Zi, {
                        id: "pixKey",
                        type: $(),
                        inputMode: s === "email" ? "email" : s === "phone" || s === "cpf" || s === "cnpj" ? "numeric" : "text",
                        placeholder: j(),
                        value: i,
                        onChange: P => A(P.target.value),
                        className: "h-11",
                        required: !0
                    })]
                }), c.jsxs("div", {
                    className: "flex gap-3 pt-3",
                    children: [c.jsx(Jo, {
                        type: "button",
                        variant: "outline",
                        className: "flex-1 h-11",
                        onClick: () => t(!1),
                        children: "Cancelar"
                    }), c.jsx(Jo, {
                        type: "submit",
                        className: "flex-1 h-11 bg-[#32BCAD] hover:bg-[#2AA89B] text-white",
                        disabled: !D,
                        children: "Confirmar"
                    })]
                })]
            })]
        })
    })
}
  , Gk = ({balance: e}) => {
    const [t,n] = f.useState(null)
      , [r,o] = f.useState(!1)
      , s = [1.5, 5, 10]
      , a = d => d.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
      , i = e >= 1.5
      , l = t || e
      , u = () => {
        i && o(!0)
    }
    ;
    return c.jsxs(c.Fragment, {
        children: [c.jsxs("div", {
            className: "section-card",
            children: [c.jsx("div", {
                className: "flex items-center gap-2 mb-4",
                children: c.jsx("h3", {
                    className: "text-foreground font-semibold text-lg",
                    children: "Sacar dinheiro"
                })
            }), c.jsxs("div", {
                className: "flex items-center gap-2 text-muted-foreground text-sm mb-4",
                children: [c.jsx("img", {
                    src: qC,
                    alt: "Cartão",
                    className: "w-4 h-4 opacity-60"
                }), c.jsx("span", {
                    children: "Transferência via /"
                }), c.jsx("img", {
                    src: Mu,
                    alt: "Pix",
                    className: "h-4 object-contain"
                })]
            }), c.jsx("div", {
                className: "grid grid-cols-3 gap-3 mb-3",
                children: s.map(d => c.jsxs("button", {
                    onClick: () => n(t === d ? null : d),
                    className: `value-chip text-center ${t === d ? "selected" : ""}`,
                    children: ["R$", d.toLocaleString("pt-BR")]
                }, d))
            }), c.jsx("div", {
                className: `value-chip text-center mb-4 py-4 ${t ? "" : "selected"}`,
                children: c.jsx("span", {
                    className: "font-semibold",
                    children: a(e)
                })
            }), c.jsx(Jo, {
                onClick: u,
                disabled: !i,
                className: `w-full py-6 text-base font-semibold ${i ? "bg-selection hover:bg-selection/90 text-selection-foreground" : ""}`,
                variant: i ? "default" : "disabled",
                children: "Sacar dinheiro"
            }), c.jsx("p", {
                className: "text-muted-foreground text-xs text-center mt-4 leading-relaxed",
                children: "Para sacar dinheiro, você precisa de um saldo mínimo de R$1,5. Os limites de saque para transações individuais e mensais podem variar conforme o país ou região."
            })]
        }), c.jsx(Kk, {
            open: r,
            onOpenChange: o,
            amount: l
        })]
    })
}
  , qk = "/assets/rose-BfZjR1LL.png"
  , Xk = () => c.jsxs("div", {
    className: "section-card",
    children: [c.jsxs("div", {
        className: "flex items-start justify-between gap-4",
        children: [c.jsxs("div", {
            className: "flex-1",
            children: [c.jsx("h3", {
                className: "text-foreground font-semibold text-lg mb-2",
                children: "Obtenha Moedas para a LIVE"
            }), c.jsx("p", {
                className: "text-muted-foreground text-sm leading-relaxed",
                children: "Use Moedas para enviar presentes virtuais para seus hosts de live Favoritos."
            })]
        }), c.jsx("img", {
            src: qk,
            alt: "Rosa",
            className: "w-16 h-16 animate-pulse-soft"
        })]
    }), c.jsx(Jo, {
        disabled: !0,
        variant: "disabled",
        className: "w-full mt-4 py-5 text-base font-medium",
        children: "Indisponível"
    })]
})
  , Zk = () => c.jsxs("div", {
    className: "section-card",
    children: [c.jsxs("div", {
        className: "flex items-center gap-2 mb-4",
        children: [c.jsx(Fb, {
            className: "w-5 h-5 text-foreground"
        }), c.jsx("h3", {
            className: "text-foreground font-semibold text-lg",
            children: "Recarga móvel"
        })]
    }), c.jsxs("div", {
        className: "flex items-center gap-2 mb-4",
        children: [c.jsx("div", {
            className: "flex items-center gap-1 px-3 py-2 bg-muted rounded-lg text-sm text-muted-foreground",
            children: c.jsx("span", {
                children: "+55"
            })
        }), c.jsx(Zi, {
            type: "tel",
            placeholder: "12345678901",
            className: "flex-1 bg-muted border-0 text-muted-foreground placeholder:text-muted-foreground/50",
            disabled: !0
        })]
    }), c.jsx(Jo, {
        disabled: !0,
        variant: "disabled",
        className: "w-full py-5 text-base font-medium",
        children: "Indisponível"
    }), c.jsx("p", {
        className: "text-muted-foreground text-xs text-center mt-4 leading-relaxed",
        children: "Você precisa de um saldo mínimo de R$10 para recarga de celular"
    })]
})
  , Cs = "/assets/golden-ball-B4tKfNlv.png"
  , dm = "/assets/golden-ball-star-Du4Ph_kw.png"
  , fm = ["#FE2C55", "#25F4EE", "#FFD700", "#FF8C00", "#E91E63", "#4CAF50", "#2196F3", "#9C27B0", "#FFEB3B", "#FF5722", "#00BCD4", "#8BC34A", "#F44336", "#3F51B5", "#CDDC39"]
  , Jk = ({active: e}) => {
    const [t,n] = f.useState([])
      , r = f.useMemo( () => () => {
        const s = []
          , a = ["rectangle", "circle", "star", "ribbon", "diamond"]
          , i = (l, u, d=1) => {
            for (let p = 0; p < u; p++) {
                const v = p / u * 100 * d + Math.random() * (100 / u) - (d > 1 ? 25 : 0);
                s.push({
                    id: l * 1e4 + p + Math.random() * 1e3,
                    x: Math.max(0, Math.min(100, v)),
                    color: fm[Math.floor(Math.random() * fm.length)],
                    delay: l + Math.random() * .4,
                    rotation: Math.random() * 360,
                    rotationSpeed: 360 + Math.random() * 1080,
                    size: 4 + Math.random() * 10,
                    shape: a[Math.floor(Math.random() * a.length)],
                    duration: 2.8 + Math.random() * 2,
                    swayAmount: 40 + Math.random() * 80,
                    swayDirection: Math.random() > .5 ? 1 : -1,
                    opacity: .8 + Math.random() * .2,
                    zIndex: Math.floor(Math.random() * 3)
                })
            }
        }
        ;
        return i(0, 50, 1.5),
        i(.15, 45, 1.3),
        i(.3, 40, 1.2),
        i(.45, 35, 1.4),
        i(.6, 30, 1.1),
        s
    }
    , []);
    if (f.useEffect( () => {
        if (e) {
            n(r());
            const s = setTimeout( () => {
                n([])
            }
            , 5500);
            return () => clearTimeout(s)
        } else
            n([])
    }
    , [e, r]),
    !e || t.length === 0)
        return null;
    const o = s => {
        switch (s.shape) {
        case "star":
            return c.jsx("svg", {
                viewBox: "0 0 24 24",
                fill: s.color,
                className: "w-full h-full",
                children: c.jsx("path", {
                    d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                })
            });
        case "diamond":
            return c.jsx("svg", {
                viewBox: "0 0 24 24",
                fill: s.color,
                className: "w-full h-full",
                children: c.jsx("path", {
                    d: "M12 2L2 12l10 10 10-10L12 2z"
                })
            });
        case "ribbon":
            return c.jsx("div", {
                className: "w-full h-full",
                style: {
                    background: `linear-gradient(180deg, ${s.color} 0%, transparent 20%, ${s.color} 40%, transparent 60%, ${s.color} 80%, transparent 100%)`,
                    borderRadius: "1px"
                }
            });
        default:
            return null
        }
    }
    ;
    return c.jsxs("div", {
        className: "fixed inset-0 pointer-events-none z-[150] overflow-hidden",
        children: [t.map(s => c.jsx("div", {
            className: "absolute will-change-transform",
            style: {
                left: `${s.x}%`,
                top: "-30px",
                width: s.shape === "ribbon" ? s.size * .4 : s.size,
                height: s.shape === "ribbon" ? s.size * 2 : s.shape === "circle" ? s.size : s.size * .6,
                backgroundColor: s.shape === "rectangle" || s.shape === "circle" ? s.color : "transparent",
                borderRadius: s.shape === "circle" ? "50%" : s.shape === "rectangle" ? "2px" : "0",
                opacity: s.opacity,
                zIndex: 150 + s.zIndex,
                animation: `confettiFall-${s.id} ${s.duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${s.delay}s forwards`
            },
            children: (s.shape === "star" || s.shape === "diamond" || s.shape === "ribbon") && o(s)
        }, s.id)), c.jsx("style", {
            children: `
        ${t.map(s => `
          @keyframes confettiFall-${s.id} {
            0% {
              transform: translateY(0) translateX(0) rotate(0deg) scale(0.3);
              opacity: 0;
            }
            5% {
              opacity: ${s.opacity};
              transform: translateY(5vh) translateX(${s.swayDirection * 5}px) rotate(${s.rotationSpeed * .05}deg) scale(1);
            }
            20% {
              transform: translateY(20vh) translateX(${s.swayAmount * s.swayDirection}px) rotate(${s.rotationSpeed * .2}deg) scale(1);
              opacity: ${s.opacity};
            }
            40% {
              transform: translateY(40vh) translateX(${-s.swayAmount * .6 * s.swayDirection}px) rotate(${s.rotationSpeed * .4}deg) scale(0.95);
              opacity: ${s.opacity * .95};
            }
            60% {
              transform: translateY(60vh) translateX(${s.swayAmount * .4 * s.swayDirection}px) rotate(${s.rotationSpeed * .6}deg) scale(0.9);
              opacity: ${s.opacity * .85};
            }
            80% {
              transform: translateY(80vh) translateX(${-s.swayAmount * .2 * s.swayDirection}px) rotate(${s.rotationSpeed * .8}deg) scale(0.7);
              opacity: ${s.opacity * .5};
            }
            100% {
              transform: translateY(110vh) translateX(${s.swayAmount * .1 * s.swayDirection}px) rotate(${s.rotationSpeed}deg) scale(0.4);
              opacity: 0;
            }
          }
        `).join(`
`)}
      `
        })]
    })
}
  , Ja = 5360
  , eN = 536
  , ei = 1237
  , Cc = 2291;
let ks = null;
const eo = () => (ks || (ks = new (window.AudioContext || window.webkitAudioContext)),
ks.state === "suspended" && ks.resume(),
ks)
  , pm = () => {
    const e = eo()
      , t = e.createOscillator()
      , n = e.createGain();
    t.connect(n),
    n.connect(e.destination),
    t.frequency.setValueAtTime(220, e.currentTime),
    t.frequency.exponentialRampToValueAtTime(440, e.currentTime + .1),
    n.gain.setValueAtTime(.3, e.currentTime),
    n.gain.exponentialRampToValueAtTime(.01, e.currentTime + .2),
    t.start(e.currentTime),
    t.stop(e.currentTime + .2)
}
  , mm = () => {
    const e = eo()
      , t = e.createOscillator()
      , n = e.createGain();
    t.connect(n),
    n.connect(e.destination),
    t.type = "sine",
    t.frequency.setValueAtTime(880, e.currentTime),
    t.frequency.exponentialRampToValueAtTime(1760, e.currentTime + .05),
    t.frequency.exponentialRampToValueAtTime(440, e.currentTime + .15),
    n.gain.setValueAtTime(.4, e.currentTime),
    n.gain.exponentialRampToValueAtTime(.01, e.currentTime + .3),
    t.start(e.currentTime),
    t.stop(e.currentTime + .3)
}
  , tN = () => {
    const e = eo();
    [523, 659, 784, 1047].forEach( (n, r) => {
        const o = e.createOscillator()
          , s = e.createGain();
        o.connect(s),
        s.connect(e.destination),
        o.frequency.setValueAtTime(n, e.currentTime + r * .15),
        s.gain.setValueAtTime(.3, e.currentTime + r * .15),
        s.gain.exponentialRampToValueAtTime(.01, e.currentTime + r * .15 + .3),
        o.start(e.currentTime + r * .15),
        o.stop(e.currentTime + r * .15 + .3)
    }
    )
}
  , hm = () => {
    const e = eo()
      , t = e.currentTime
      , n = (s, a, i, l) => {
        const u = e.createOscillator()
          , d = e.createOscillator()
          , p = e.createOscillator()
          , v = e.createGain();
        u.connect(v),
        d.connect(v),
        p.connect(v),
        v.connect(e.destination),
        u.type = "sine",
        d.type = "triangle",
        p.type = "sine",
        u.frequency.setValueAtTime(s, a),
        d.frequency.setValueAtTime(s * 1.5, a),
        p.frequency.setValueAtTime(s * 2, a),
        v.gain.setValueAtTime(0, a),
        v.gain.linearRampToValueAtTime(l, a + .02),
        v.gain.setValueAtTime(l, a + i * .7),
        v.gain.exponentialRampToValueAtTime(.001, a + i),
        u.start(a),
        d.start(a),
        p.start(a),
        u.stop(a + i + .1),
        d.stop(a + i + .1),
        p.stop(a + i + .1)
    }
    ;
    n(523.25, t, .2, .25),
    n(659.25, t + .15, .2, .28),
    n(783.99, t + .3, .2, .3),
    n(1046.5, t + .45, .5, .35),
    n(1318.5, t + .8, .15, .25),
    n(1567.98, t + .95, .15, .28),
    n(2093, t + 1.1, .6, .32);
    for (let s = 0; s < 8; s++) {
        const a = e.createOscillator()
          , i = e.createGain();
        a.connect(i),
        i.connect(e.destination),
        a.type = "sine";
        const l = t + 1.3 + s * .06;
        a.frequency.setValueAtTime(2500 + s * 300, l),
        i.gain.setValueAtTime(0, l),
        i.gain.linearRampToValueAtTime(.1 - s * .01, l + .01),
        i.gain.exponentialRampToValueAtTime(.001, l + .2),
        a.start(l),
        a.stop(l + .25)
    }
    const r = e.createOscillator()
      , o = e.createGain();
    r.connect(o),
    o.connect(e.destination),
    r.type = "sine",
    r.frequency.setValueAtTime(80, t),
    r.frequency.exponentialRampToValueAtTime(40, t + .3),
    o.gain.setValueAtTime(.4, t),
    o.gain.exponentialRampToValueAtTime(.001, t + .4),
    r.start(t),
    r.stop(t + .5)
}
  , gm = () => {
    const e = eo()
      , t = (l, u, d) => {
        const p = e.createOscillator()
          , v = e.createOscillator()
          , m = e.createGain()
          , b = e.createBiquadFilter();
        p.connect(b),
        v.connect(b),
        b.connect(m),
        m.connect(e.destination),
        p.type = "sine",
        v.type = "triangle",
        p.frequency.setValueAtTime(u, l),
        v.frequency.setValueAtTime(u * 2.5, l),
        p.frequency.exponentialRampToValueAtTime(u * .7, l + .15),
        b.type = "bandpass",
        b.frequency.setValueAtTime(u * 1.5, l),
        b.Q.setValueAtTime(2, l),
        m.gain.setValueAtTime(0, l),
        m.gain.linearRampToValueAtTime(d, l + .005),
        m.gain.exponentialRampToValueAtTime(d * .3, l + .05),
        m.gain.exponentialRampToValueAtTime(.001, l + .2),
        p.start(l),
        v.start(l),
        p.stop(l + .25),
        v.stop(l + .25)
    }
      , n = e.currentTime;
    t(n, 1800, .3),
    t(n + .07, 2100, .25),
    t(n + .13, 1950, .28),
    t(n + .19, 2300, .22),
    t(n + .25, 2e3, .26);
    const r = e.createOscillator()
      , o = e.createOscillator()
      , s = e.createGain()
      , a = e.createBiquadFilter();
    r.connect(a),
    o.connect(a),
    a.connect(s),
    s.connect(e.destination),
    r.type = "sine",
    o.type = "sine";
    const i = n + .35;
    r.frequency.setValueAtTime(1567.98, i),
    o.frequency.setValueAtTime(2093, i),
    a.type = "highpass",
    a.frequency.setValueAtTime(800, i),
    s.gain.setValueAtTime(0, i),
    s.gain.linearRampToValueAtTime(.4, i + .01),
    s.gain.exponentialRampToValueAtTime(.2, i + .1),
    s.gain.exponentialRampToValueAtTime(.001, i + .6),
    r.start(i),
    o.start(i),
    r.stop(i + .7),
    o.stop(i + .7);
    for (let l = 0; l < 4; l++) {
        const u = e.createOscillator()
          , d = e.createGain();
        u.connect(d),
        d.connect(e.destination),
        u.type = "sine";
        const p = n + .4 + l * .08;
        u.frequency.setValueAtTime(3e3 + l * 400, p),
        d.gain.setValueAtTime(0, p),
        d.gain.linearRampToValueAtTime(.08, p + .01),
        d.gain.exponentialRampToValueAtTime(.001, p + .15),
        u.start(p),
        u.stop(p + .2)
    }
}
  , nN = () => {
    const e = eo()
      , t = e.currentTime
      , n = e.createBuffer(1, e.sampleRate * .8, e.sampleRate)
      , r = n.getChannelData(0);
    for (let l = 0; l < n.length; l++)
        r[l] = Math.random() * 2 - 1;
    const o = e.createBufferSource();
    o.buffer = n;
    const s = e.createBiquadFilter();
    s.type = "bandpass",
    s.frequency.setValueAtTime(200, t),
    s.frequency.exponentialRampToValueAtTime(3e3, t + .6),
    s.Q.setValueAtTime(1, t);
    const a = e.createGain();
    a.gain.setValueAtTime(0, t),
    a.gain.linearRampToValueAtTime(.15, t + .1),
    a.gain.linearRampToValueAtTime(.25, t + .5),
    a.gain.exponentialRampToValueAtTime(.001, t + .8),
    o.connect(s),
    s.connect(a),
    a.connect(e.destination),
    o.start(t),
    o.stop(t + .8),
    [300, 400, 500, 600, 800, 1e3, 1200, 1500].forEach( (l, u) => {
        const d = e.createOscillator()
          , p = e.createGain();
        d.connect(p),
        p.connect(e.destination),
        d.type = "sine";
        const v = t + u * .08;
        d.frequency.setValueAtTime(l, v),
        d.frequency.exponentialRampToValueAtTime(l * 1.5, v + .1),
        p.gain.setValueAtTime(0, v),
        p.gain.linearRampToValueAtTime(.12 + u * .01, v + .02),
        p.gain.exponentialRampToValueAtTime(.001, v + .15),
        d.start(v),
        d.stop(v + .2)
    }
    ),
    setTimeout( () => {
        const l = eo()
          , u = l.currentTime;
        [523.25, 659.25, 783.99, 1046.5].forEach( (p, v) => {
            const m = l.createOscillator()
              , b = l.createGain();
            m.connect(b),
            b.connect(l.destination),
            m.type = v === 0 ? "triangle" : "sine",
            m.frequency.setValueAtTime(p, u),
            b.gain.setValueAtTime(0, u),
            b.gain.linearRampToValueAtTime(.2 - v * .03, u + .02),
            b.gain.setValueAtTime(.18 - v * .03, u + .3),
            b.gain.exponentialRampToValueAtTime(.001, u + .8),
            m.start(u),
            m.stop(u + .9)
        }
        )
    }
    , 800)
}
  , rN = ({open: e, onComplete: t, onClose: n}) => {
    const [r,o] = f.useState(!0)
      , [s,a] = f.useState(3)
      , [i,l] = f.useState([])
      , [u] = f.useState(6)
      , [d] = f.useState([19, 4, 5, 500, 2, 3, 17, 1, 8, 26, 2, 8])
      , [p,v] = f.useState(!1)
      , [m,b] = f.useState(0)
      , [g,w] = f.useState(!1)
      , [y,h] = f.useState({
        hours: 19,
        minutes: 46,
        seconds: 17
    })
      , [x,S] = f.useState(0)
      , [E,k] = f.useState([])
      , [C,j] = f.useState(!1)
      , [A,M] = f.useState({
        x: 0,
        y: 0
    })
      , [$,D] = f.useState(!1)
      , [V,P] = f.useState(null)
      , [H,L] = f.useState(0)
      , [U,N] = f.useState(1)
      , [T,I] = f.useState(!1)
      , [Y,B] = f.useState(0)
      , [q,Q] = f.useState(!1)
      , [fe,he] = f.useState(0)
      , [_,ae] = f.useState(!1)
      , [ge,oe] = f.useState(!1)
      , [ee,re] = f.useState(!1)
      , [De,Ye] = f.useState(!1)
      , [te,Vt] = f.useState(!1)
      , [ut,Hn] = f.useState(!1)
      , [Cn,Tr] = f.useState(!1)
      , [jr,kn] = f.useState(!1)
      , [Yn,cs] = f.useState(0)
      , [ya,dt] = f.useState( () => Math.floor(Math.random() * (Cc - ei + 1)) + ei)
      , [Ie,xa] = f.useState(!1)
      , [pe,Pr] = f.useState(!1)
      , [an,us] = f.useState(!1)
      , [Mt,Nn] = f.useState(!1)
      , [ft,Tn] = f.useState(!1)
      , [pt,wa] = f.useState(!1)
      , oo = f.useRef([])
      , ba = f.useRef(null)
      , ds = f.useRef(null)
      , Rr = f.useRef(null)
      , ze = f.useRef(null)
      , Dl = [6, 0, 3];
    f.useEffect( () => (e && (o(!0),
    a(3),
    l([]),
    b(0),
    w(!1),
    S(0),
    k([]),
    j(!1),
    D(!1),
    P(null),
    L(0),
    N(1),
    I(!1),
    B(0),
    ae(!1),
    oe(!1),
    re(!1),
    Ye(!1),
    Vt(!1),
    Hn(!1),
    Tr(!1),
    kn(!1),
    cs(0)),
    () => {
        ze.current && cancelAnimationFrame(ze.current)
    }
    ), [e]),
    f.useEffect( () => {
        if (!e)
            return;
        const X = setInterval( () => {
            h(W => W.seconds > 0 ? {
                ...W,
                seconds: W.seconds - 1
            } : W.minutes > 0 ? {
                ...W,
                minutes: W.minutes - 1,
                seconds: 59
            } : W.hours > 0 ? {
                hours: W.hours - 1,
                minutes: 59,
                seconds: 59
            } : W)
        }
        , 1e3);
        return () => clearInterval(X)
    }
    , [e]),
    f.useEffect( () => {
        if (!e)
            return;
        const X = () => {
            dt(tt => {
                const $e = Math.floor(Math.random() * 7) - 3
                  , Be = tt + $e;
                return Be < ei ? ei + Math.floor(Math.random() * 10) : Be > Cc ? Cc - Math.floor(Math.random() * 10) : Be
            }
            )
        }
          , W = () => {
            const tt = 2e3 + Math.random() * 3e3;
            return setTimeout( () => {
                X(),
                Re.current = W()
            }
            , tt)
        }
        ;
        let Re = {
            current: null
        };
        return Re.current = W(),
        () => {
            Re.current && clearTimeout(Re.current)
        }
    }
    , [e]);
    const K = () => {
        xa(!0),
        setTimeout( () => {
            o(!1),
            xa(!1)
        }
        , 300)
    }
      , ce = f.useCallback( (X, W, Re, tt, $e) => {
        const un = performance.now()
          , Qe = X + (Re - X) * .2
          , nt = W - 180
          , Fe = X + (Re - X) * .8
          , Ke = tt - 60
          , Ot = (rt, fs, Dt, Ea, Ca) => {
            const Pn = 1 - rt;
            return Pn * Pn * Pn * fs + 3 * Pn * Pn * rt * Dt + 3 * Pn * rt * rt * Ea + rt * rt * rt * Ca
        }
          , ht = rt => {
            if (rt < .15)
                return rt * 3;
            const fs = (rt - .15) / .85;
            return .45 + (1 - Math.pow(1 - fs, 3)) * .55
        }
          , so = rt => {
            const fs = rt - un
              , Dt = Math.min(fs / 1200, 1)
              , Ea = ht(Dt)
              , Ca = Ot(Ea, X, Qe, Fe, Re)
              , Pn = Ot(Ea, W, nt, Ke, tt);
            P({
                x: Ca,
                y: Pn
            });
            const Hy = Dt < .3 ? Dt * 4 : 1.2 + (Dt - .3) * .5;
            L(Hy * 1440);
            const Yy = Dt < .5 ? 1 - Dt * .4 : .8 + (Dt - .5) * .2;
            N(Yy),
            Dt < 1 && Dt > .05 && k(Qy => [...Qy, {
                x: Ca,
                y: Pn
            }].slice(-12)),
            Dt < 1 ? ze.current = requestAnimationFrame(so) : (k([]),
            $e())
        }
        ;
        ze.current = requestAnimationFrame(so)
    }
    , [])
      , de = f.useCallback( (X, W, Re, tt, $e) => {
        const un = performance.now()
          , Qe = nt => {
            const Fe = nt - un
              , Ke = Math.min(Fe / 800, 1)
              , Ot = 1 - Math.pow(1 - Ke, 3)
              , ht = X + (Re - X) * Ot
              , so = W + (tt - W) * Ot
              , rt = Math.sin(Ke * Math.PI) * 50;
            P({
                x: ht,
                y: so - rt
            }),
            L(Ke * 360),
            N(.6 + Ot * .4),
            Ke < 1 ? ze.current = requestAnimationFrame(Qe) : (P(null),
            L(0),
            N(1),
            $e())
        }
        ;
        ze.current = requestAnimationFrame(Qe)
    }
    , [])
      , mt = f.useCallback( (X, W, Re) => {
        const $e = performance.now()
          , Be = 40
          , un = Qe => {
            const nt = Qe - $e
              , Fe = Math.min(nt / 600, 1)
              , Ke = 1 - Math.pow(1 - Fe, 3)
              , Ot = X
              , ht = W + Be * Ke;
            if (P({
                x: Ot,
                y: ht
            }),
            he(Fe),
            Fe > .5) {
                const so = Math.sin(Fe * 30) * (Fe - .5) * 4;
                P({
                    x: Ot + so,
                    y: ht
                })
            }
            N(1 + Fe * .15),
            Fe < 1 ? ze.current = requestAnimationFrame(un) : (he(0),
            Re())
        }
        ;
        ze.current = requestAnimationFrame(un)
    }
    , [])
      , Et = () => {
        if (p || s <= 0 || x >= 3)
            return;
        const X = Dl[x]
          , W = oo.current[X]
          , Re = ds.current
          , tt = Rr.current;
        if (!W || !Re || !tt)
            return;
        v(!0),
        Q(!0);
        const $e = W.getBoundingClientRect()
          , Be = Re.getBoundingClientRect()
          , un = tt.getBoundingClientRect()
          , Qe = Be.width / 2
          , nt = un.top - Be.top
          , Fe = $e.left - Be.left + $e.width / 2
          , Ke = $e.top - Be.top + $e.height / 2;
        P({
            x: Qe,
            y: nt
        }),
        L(0),
        N(1),
        mt(Qe, nt, () => {
            Q(!1),
            pm(),
            D(!0),
            setTimeout( () => D(!1), 400),
            ce(Qe, nt + 40, Fe, Ke, () => {
                mm(),
                M({
                    x: Fe,
                    y: Ke
                }),
                j(!0),
                setTimeout( () => j(!1), 400);
                const Ot = d[X];
                B(Ot),
                l(ht => [...ht, X]),
                b(ht => ht + Ot),
                a(ht => ht - 1),
                S(ht => ht + 1),
                setTimeout( () => {
                    de(Fe, Ke, Qe, nt, () => {
                        v(!1),
                        x + 1 >= 3 ? (tN(),
                        gm(),
                        Sa("win"),
                        setTimeout( () => {
                            te ? (cs(Ja),
                            kn(!0),
                            hm(),
                            Tr(!0)) : (kn(!0),
                            ae(!0))
                        }
                        , 300)) : (gm(),
                        Sa("medium"),
                        setTimeout( () => {
                            I(!0)
                        }
                        , 200))
                    }
                    )
                }
                , 400)
            }
            )
        }
        )
    }
      , ln = () => {
        if (p || ut)
            return;
        const W = oo.current[3]
          , Re = ds.current
          , tt = Rr.current;
        if (!W || !Re || !tt)
            return;
        v(!0),
        Q(!0);
        const $e = W.getBoundingClientRect()
          , Be = Re.getBoundingClientRect()
          , un = tt.getBoundingClientRect()
          , Qe = Be.width / 2
          , nt = un.top - Be.top
          , Fe = $e.left - Be.left + $e.width / 2
          , Ke = $e.top - Be.top + $e.height / 2;
        P({
            x: Qe,
            y: nt
        }),
        L(0),
        N(1),
        mt(Qe, nt, () => {
            Q(!1),
            pm(),
            D(!0),
            setTimeout( () => D(!1), 400),
            ce(Qe, nt + 40, Fe, Ke, () => {
                mm(),
                M({
                    x: Fe,
                    y: Ke
                }),
                j(!0),
                setTimeout( () => j(!1), 400),
                b(Ja),
                Hn(!0),
                setTimeout( () => {
                    de(Fe, Ke, Qe, nt, () => {
                        v(!1),
                        hm(),
                        Sa("win"),
                        cs(Ja),
                        kn(!0),
                        Tr(!0)
                    }
                    )
                }
                , 400)
            }
            )
        }
        )
    }
      , jn = () => {
        Pr(!0),
        setTimeout( () => {
            I(!1),
            Pr(!1)
        }
        , 450)
    }
      , Ct = () => {
        us(!0),
        setTimeout( () => {
            ae(!1),
            kn(!1),
            us(!1),
            setTimeout( () => {
                oe(!0)
            }
            , 150)
        }
        , 450)
    }
      , cn = () => {
        Nn(!0),
        setTimeout( () => {
            oe(!1),
            Nn(!1),
            Ye(!0),
            nN(),
            setTimeout( () => {
                Ye(!1),
                re(!0)
            }
            , 2e3)
        }
        , 400)
    }
      , Uy = () => {
        Tn(!0),
        setTimeout( () => {
            re(!1),
            Tn(!1),
            Vt(!0),
            a(1),
            S(0),
            l([])
        }
        , 450)
    }
      , Vy = () => {
        wa(!0),
        setTimeout( () => {
            Tr(!1),
            kn(!1),
            wa(!1),
            t()
        }
        , 450)
    }
      , Wy = () => {
        t()
    }
    ;
    if (!e)
        return null;
    const Sa = X => {
        if ("vibrate"in navigator)
            switch (X) {
            case "light":
                navigator.vibrate(10);
                break;
            case "medium":
                navigator.vibrate(30);
                break;
            case "heavy":
                navigator.vibrate([50, 30, 50]);
                break;
            case "win":
                navigator.vibrate([100, 50, 100, 50, 200]);
                break
            }
    }
    ;
    return c.jsxs("div", {
        ref: ds,
        className: "fixed inset-0 z-50 flex flex-col overflow-hidden",
        style: {
            background: "linear-gradient(180deg, #0D47A1 0%, #1565C0 30%, #1976D2 60%, #1E88E5 100%)"
        },
        children: [c.jsxs("div", {
            className: "flex items-center justify-between px-4 py-2",
            children: [c.jsx("button", {
                onClick: n,
                className: "w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20",
                children: c.jsx(bb, {
                    className: "w-4 h-4 text-white"
                })
            }), c.jsxs("div", {
                className: "text-center",
                children: [c.jsx("h1", {
                    className: "text-[#FFD700] font-black text-xl tracking-tight italic",
                    style: {
                        textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
                    },
                    children: "GOL"
                }), c.jsx("p", {
                    className: "text-white text-[10px] font-bold tracking-widest -mt-0.5",
                    children: "DE PRÊMIOS"
                })]
            }), c.jsx("button", {
                className: "w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20",
                children: c.jsx(Ob, {
                    className: "w-4 h-4 text-white"
                })
            })]
        }), !r && !te && c.jsx("div", {
            className: "mx-3 mb-1",
            children: c.jsxs("div", {
                className: "flex items-center justify-center gap-1.5 py-1.5 px-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 w-fit mx-auto",
                children: [c.jsxs("div", {
                    className: "relative flex items-center justify-center",
                    children: [c.jsx(Ep, {
                        className: "w-3.5 h-3.5 text-[#4CAF50]"
                    }), c.jsx("span", {
                        className: "absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-[#4CAF50] rounded-full",
                        style: {
                            animation: "slowPulse 2.5s ease-in-out infinite"
                        }
                    })]
                }), c.jsxs("span", {
                    className: "text-white/80 text-xs",
                    children: [c.jsx("span", {
                        className: "font-bold text-white",
                        children: ya.toLocaleString("pt-BR")
                    }), " pessoas jogando agora"]
                })]
            })
        }), c.jsx("style", {
            children: `
        @keyframes slowPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
      `
        }), c.jsxs("div", {
            className: "mx-3 flex gap-2",
            children: [c.jsx("div", {
                className: "flex-1 bg-gradient-to-br from-[#0d5a8c] to-[#0a4a75] rounded-xl p-2.5 border border-white/10",
                children: c.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [c.jsx("div", {
                        className: "w-9 h-9 bg-gradient-to-br from-[#FFD700] to-[#FF8C00] rounded-full flex items-center justify-center",
                        children: c.jsx(Ha, {
                            className: "w-4 h-4 text-white"
                        })
                    }), c.jsxs("div", {
                        children: [c.jsx("p", {
                            className: "text-white/60 text-[9px] uppercase tracking-wider",
                            children: "Prêmio"
                        }), c.jsxs("p", {
                            className: "text-white font-bold text-base leading-tight",
                            children: ["R$ ", m.toFixed(2).replace(".", ",")]
                        })]
                    })]
                })
            }), c.jsxs("div", {
                className: `bg-gradient-to-br from-[#0d5a8c] to-[#0a4a75] rounded-xl p-2.5 border border-white/10 ${y.hours === 0 && y.minutes < 10 ? "animate-pulse" : ""}`,
                children: [c.jsx("p", {
                    className: "text-white/60 text-[9px] uppercase tracking-wider text-center mb-0.5",
                    children: "Expira em"
                }), c.jsxs("div", {
                    className: "flex gap-0.5 items-center",
                    children: [c.jsx("span", {
                        className: `px-1.5 py-0.5 rounded text-white font-mono text-xs font-bold ${y.hours === 0 && y.minutes < 10 ? "bg-red-500" : "bg-[#1a7fc1]"}`,
                        children: y.hours.toString().padStart(2, "0")
                    }), c.jsx("span", {
                        className: "text-white/60 text-xs",
                        children: ":"
                    }), c.jsx("span", {
                        className: `px-1.5 py-0.5 rounded text-white font-mono text-xs font-bold ${y.hours === 0 && y.minutes < 10 ? "bg-red-500" : "bg-[#1a7fc1]"}`,
                        children: y.minutes.toString().padStart(2, "0")
                    }), c.jsx("span", {
                        className: "text-white/60 text-xs",
                        children: ":"
                    }), c.jsx("span", {
                        className: `px-1.5 py-0.5 rounded text-white font-mono text-xs font-bold ${y.hours === 0 && y.minutes < 10 ? "bg-red-500" : "bg-[#1a7fc1]"}`,
                        children: y.seconds.toString().padStart(2, "0")
                    })]
                })]
            })]
        }), !r && !te && c.jsxs("div", {
            className: "mx-3 mt-2 flex items-center justify-center gap-2",
            children: [[1, 2, 3].map(X => c.jsxs("div", {
                className: "flex items-center gap-1.5",
                children: [c.jsx("div", {
                    className: `w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${x >= X ? "bg-[#4CAF50] shadow-lg shadow-[#4CAF50]/30" : x === X - 1 ? "bg-[#FFD700] shadow-lg shadow-[#FFD700]/30 ring-2 ring-[#FFD700]/50" : "bg-white/20"}`,
                    style: x === X - 1 ? {
                        animation: "slowPulse 2.5s ease-in-out infinite"
                    } : void 0,
                    children: x >= X ? c.jsx(Cb, {
                        className: "w-4 h-4 text-white"
                    }) : x === X - 1 ? c.jsx(bs, {
                        className: "w-3.5 h-3.5 text-white"
                    }) : c.jsx(Nb, {
                        className: "w-3 h-3 text-white/50"
                    })
                }), X < 3 && c.jsx("div", {
                    className: `w-6 h-0.5 transition-all duration-300 ${x >= X ? "bg-[#4CAF50]" : "bg-white/20"}`
                })]
            }, X)), c.jsxs("span", {
                className: "text-white/70 text-xs ml-2 font-medium",
                children: ["Chute ", Math.min(x + 1, 3), " de 3"]
            })]
        }), c.jsx("div", {
            className: "mx-3 mt-2 flex-1 flex flex-col mb-16",
            children: c.jsxs("div", {
                className: `rounded-2xl p-3 relative overflow-hidden border flex-1 flex flex-col justify-center transition-all duration-500 ${te ? "bg-gradient-to-br from-[#7F1D1D] to-[#991B1B] border-[#EF4444]/30" : "bg-gradient-to-br from-[#0d5a8c] to-[#085078] border-white/10"}`,
                style: {
                    boxShadow: te ? "0 8px 32px rgba(239,68,68,0.5), inset 0 0 60px rgba(239,68,68,0.1)" : "0 8px 32px rgba(0,0,0,0.3)"
                },
                children: [c.jsx("div", {
                    className: `absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 rounded-tl-lg ${te ? "border-[#EF4444]/60" : "border-[#FFD700]/40"}`
                }), c.jsx("div", {
                    className: `absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 rounded-tr-lg ${te ? "border-[#EF4444]/60" : "border-[#FFD700]/40"}`
                }), c.jsx("div", {
                    className: `absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 rounded-bl-lg ${te ? "border-[#EF4444]/60" : "border-[#FFD700]/40"}`
                }), c.jsx("div", {
                    className: `absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 rounded-br-lg ${te ? "border-[#EF4444]/60" : "border-[#FFD700]/40"}`
                }), te && c.jsx("div", {
                    className: "absolute top-4 left-1/2 -translate-x-1/2 z-20",
                    children: c.jsxs("div", {
                        className: "bg-gradient-to-r from-[#EF4444] to-[#DC2626] px-4 py-1.5 rounded-full text-white font-black text-sm shadow-lg flex items-center gap-1.5",
                        style: {
                            animation: "arcadePulse 1.5s ease-in-out infinite",
                            boxShadow: "0 0 20px rgba(239,68,68,0.6), 0 4px 12px rgba(0,0,0,0.3)"
                        },
                        children: [c.jsx(Ar, {
                            className: "w-4 h-4",
                            style: {
                                animation: "flameWiggle 0.5s ease-in-out infinite"
                            }
                        }), c.jsx("span", {
                            children: "MODO 10X ATIVO"
                        }), c.jsx(Ar, {
                            className: "w-4 h-4",
                            style: {
                                animation: "flameWiggle 0.5s ease-in-out infinite 0.25s"
                            }
                        })]
                    })
                }), c.jsx("div", {
                    className: `absolute inset-0 ${te ? "bg-gradient-radial from-[#EF4444]/15 via-transparent to-transparent" : "bg-gradient-radial from-[#FFD700]/5 via-transparent to-transparent"}`
                }), c.jsx("div", {
                    className: "grid grid-cols-4 gap-2 relative z-10",
                    children: d.map( (X, W) => c.jsxs("button", {
                        ref: Re => oo.current[W] = Re,
                        className: `aspect-square rounded-xl font-bold text-base sm:text-lg flex items-center justify-center transition-all duration-500 relative ${i.includes(W) ? "bg-gradient-to-br from-[#FFD700] to-[#FF8C00] text-white scale-105" : te ? "bg-gradient-to-br from-[#F87171] to-[#EF4444] text-white" : W === u ? "bg-gradient-to-br from-[#64B5F6] to-[#42A5F5] text-white ring-2 ring-[#FFD700] ring-offset-2 ring-offset-[#0d5a8c]" : "bg-gradient-to-br from-[#64B5F6] to-[#42A5F5] text-white"}`,
                        style: {
                            boxShadow: i.includes(W) ? "0 0 20px rgba(255, 215, 0, 0.5), 0 4px 12px rgba(0,0,0,0.3)" : te ? "0 4px 12px rgba(239,68,68,0.3), inset 0 1px 0 rgba(255,255,255,0.2)" : "0 4px 12px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.2)"
                        },
                        children: [i.includes(W) && c.jsx(fc, {
                            className: "absolute top-1 right-1 w-3 h-3 text-white/80"
                        }), c.jsx("span", {
                            className: "drop-shadow-md",
                            children: X
                        })]
                    }, W))
                })]
            })
        }), C && c.jsxs("div", {
            className: "absolute z-40 pointer-events-none",
            style: {
                left: A.x,
                top: A.y,
                transform: "translate(-50%, -50%)"
            },
            children: [c.jsx("div", {
                className: "w-24 h-24 rounded-full bg-[#FFD700]/50 animate-ping"
            }), c.jsx("div", {
                className: "absolute inset-0 w-24 h-24 rounded-full bg-[#FFD700]/70 animate-pulse"
            })]
        }), C && c.jsxs(c.Fragment, {
            children: [[...Array(12)].map( (X, W) => c.jsx("div", {
                className: "absolute w-3 h-3 bg-[#FFD700] rounded-full z-40",
                style: {
                    left: A.x,
                    top: A.y,
                    animation: `sparkle-${W} 0.6s ease-out forwards`
                }
            }, W)), c.jsx("style", {
                children: `
            ${[...Array(12)].map( (X, W) => `
              @keyframes sparkle-${W} {
                0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
                100% { 
                  transform: translate(
                    calc(-50% + ${Math.cos(W * 30 * Math.PI / 180) * 80}px), 
                    calc(-50% + ${Math.sin(W * 30 * Math.PI / 180) * 80}px)
                  ) scale(0); 
                  opacity: 0; 
                }
              }
            `).join("")}
          `
            })]
        }), !T && !g && !r && E.map( (X, W) => c.jsx("div", {
            className: "absolute rounded-full pointer-events-none z-40",
            style: {
                left: X.x,
                top: X.y,
                width: `${12 + W * 3}px`,
                height: `${12 + W * 3}px`,
                opacity: (W + 1) / E.length * .8,
                transform: "translate(-50%, -50%)",
                background: te ? "radial-gradient(circle, rgba(255,200,0,0.9) 0%, rgba(255,100,0,0.7) 50%, rgba(255,50,0,0.4) 100%)" : "radial-gradient(circle, rgba(255,215,0,0.9) 0%, rgba(255,180,0,0.6) 100%)",
                boxShadow: te ? "0 0 20px rgba(255,100,0,0.8), 0 0 40px rgba(255,150,0,0.4)" : "0 0 15px rgba(255, 215, 0, 0.6)"
            }
        }, W)), !T && !g && !r && V && c.jsx("div", {
            ref: ba,
            className: "absolute z-50 transition-all",
            style: {
                left: V.x,
                top: V.y,
                transform: `translate(-50%, -50%) rotate(${H}deg) scale(${U})`,
                transition: p ? "none" : "all 0.4s ease-out"
            },
            children: te ? c.jsxs("div", {
                className: "relative w-24 h-24",
                children: [c.jsx("div", {
                    className: "absolute inset-[-12px] rounded-full pointer-events-none",
                    style: {
                        background: "radial-gradient(ellipse 80% 120% at 50% 80%, rgba(255,100,0,0.8) 0%, rgba(255,150,0,0.5) 30%, transparent 60%)",
                        filter: "blur(4px)",
                        animation: "fireTrailPulse 0.15s ease-in-out infinite alternate"
                    }
                }), c.jsxs("div", {
                    className: "absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-0.5",
                    children: [c.jsx("div", {
                        className: "w-3 h-6 rounded-full bg-gradient-to-t from-transparent via-[#FF6B00] to-[#FFCD00]",
                        style: {
                            animation: "trailFlame 0.2s ease-in-out infinite",
                            opacity: .9
                        }
                    }), c.jsx("div", {
                        className: "w-4 h-8 rounded-full bg-gradient-to-t from-transparent via-[#FF6B00] to-[#FFCD00]",
                        style: {
                            animation: "trailFlame 0.25s ease-in-out infinite 0.05s",
                            opacity: .95
                        }
                    }), c.jsx("div", {
                        className: "w-3 h-6 rounded-full bg-gradient-to-t from-transparent via-[#FF6B00] to-[#FFCD00]",
                        style: {
                            animation: "trailFlame 0.2s ease-in-out infinite 0.1s",
                            opacity: .9
                        }
                    })]
                }), c.jsxs("div", {
                    className: "w-24 h-24 rounded-full overflow-hidden shadow-2xl ring-4 ring-[#FF8C00]/60 relative",
                    style: {
                        boxShadow: "0 0 30px rgba(255,100,0,0.7), 0 0 60px rgba(255,150,0,0.4), 0 8px 30px rgba(0,0,0,0.4)"
                    },
                    children: [c.jsx("img", {
                        src: Cs,
                        alt: "Bola de fogo",
                        className: "w-full h-full object-cover"
                    }), c.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-[#FF6B00]/25 via-transparent to-[#FF0000]/15 mix-blend-overlay"
                    })]
                })]
            }) : c.jsx("div", {
                className: "w-24 h-24 rounded-full overflow-hidden shadow-2xl ring-4 ring-[#FFD700]/50",
                style: {
                    boxShadow: "0 8px 30px rgba(0,0,0,0.4), 0 0 25px rgba(255, 215, 0, 0.4)"
                },
                children: c.jsx("img", {
                    src: Cs,
                    alt: "Bola dourada",
                    className: "w-full h-full object-cover"
                })
            })
        }), c.jsxs("div", {
            ref: Rr,
            className: "bg-gradient-to-b from-[#2E7D32] via-[#388E3C] to-[#1B5E20] rounded-t-2xl pt-14 pb-2 px-3 relative -mt-8",
            style: {
                boxShadow: "0 -8px 30px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.1)"
            },
            children: [!T && !g && !r && !p && !V && !_ && !ge && !ee && !Cn && c.jsx("div", {
                className: "absolute left-1/2 -translate-x-1/2 -top-12 z-50",
                children: te ? c.jsxs("div", {
                    className: "relative",
                    children: [c.jsx("div", {
                        className: "absolute inset-[-8px] rounded-full pointer-events-none",
                        style: {
                            background: "radial-gradient(circle, rgba(255,200,0,0.4) 0%, rgba(255,150,0,0.2) 50%, transparent 70%)",
                            animation: "pulse 1.5s ease-in-out infinite"
                        }
                    }), c.jsx("div", {
                        className: "w-20 h-20 rounded-full overflow-hidden shadow-2xl",
                        style: {
                            boxShadow: "0 0 25px rgba(255,180,0,0.6), 0 0 50px rgba(255,150,0,0.3), 0 8px 25px rgba(0,0,0,0.4)",
                            border: "3px solid rgba(255,180,0,0.5)"
                        },
                        children: c.jsx("img", {
                            src: Cs,
                            alt: "Bola dourada",
                            className: "w-full h-full object-cover"
                        })
                    })]
                }) : c.jsx("div", {
                    className: "w-20 h-20 rounded-full overflow-hidden shadow-2xl ring-4 ring-[#FFD700]/50",
                    style: {
                        boxShadow: "0 8px 30px rgba(0,0,0,0.4), 0 0 25px rgba(255, 215, 0, 0.4)"
                    },
                    children: c.jsx("img", {
                        src: Cs,
                        alt: "Bola dourada",
                        className: "w-full h-full object-cover"
                    })
                })
            }), c.jsxs("div", {
                className: "absolute inset-0 opacity-10 overflow-hidden rounded-t-2xl",
                children: [c.jsx("div", {
                    className: "absolute top-1/2 left-0 right-0 h-px bg-white"
                }), c.jsx("div", {
                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-white rounded-full"
                })]
            }), $ && c.jsx("div", {
                className: "absolute left-1/2 -top-14 -translate-x-1/2 z-40",
                children: c.jsx("div", {
                    className: "w-24 h-24 rounded-full bg-white/20 animate-ping"
                })
            }), c.jsxs("button", {
                onClick: te ? ln : Et,
                disabled: (te ? ut : s <= 0) || p,
                className: `w-full max-w-[280px] mx-auto block py-2.5 rounded-xl font-black text-lg -mt-2 relative overflow-hidden transition-transform duration-100 ${(te && !ut || !te && s > 0) && !p ? "text-[#5D4037] active:translate-y-1 active:scale-[0.98]" : "text-[#5D4037]/70 cursor-not-allowed"}`,
                style: {
                    background: (te && !ut || !te && s > 0) && !p ? "linear-gradient(180deg, #FFEB3B 0%, #FFC107 40%, #FF9800 100%)" : "linear-gradient(180deg, #9E9E9E 0%, #757575 100%)",
                    boxShadow: te && !ut || !te && s > 0 ? "0 4px 0 #E65100, 0 6px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)" : "0 2px 0 #5D4037, 0 4px 10px rgba(0,0,0,0.2)"
                },
                children: [(te && !ut || !te && s > 0) && !p && c.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12",
                    style: {
                        animation: "shimmer 2.5s ease-in-out infinite"
                    }
                }), c.jsx("span", {
                    className: "relative flex items-center justify-center gap-2",
                    children: te ? c.jsxs(c.Fragment, {
                        children: [c.jsx(Ar, {
                            className: "w-5 h-5"
                        }), " SUPER CHUTE 10X"]
                    }) : c.jsxs(c.Fragment, {
                        children: [c.jsx(kb, {
                            className: "w-5 h-5"
                        }), " CHUTAR"]
                    })
                }), c.jsxs("p", {
                    className: "text-[10px] font-medium opacity-70 tracking-wider relative flex items-center justify-center gap-1",
                    children: [c.jsx(Db, {
                        className: "w-3 h-3"
                    }), te ? "MULTIPLICADOR ATIVO" : `${s} ${s === 1 ? "CHANCE" : "CHANCES"}`]
                })]
            }), c.jsx("style", {
                children: `
          @keyframes shimmer {
            0% { transform: translateX(-100%) skewX(-12deg); }
            50%, 100% { transform: translateX(200%) skewX(-12deg); }
          }
          @keyframes arcadePulse {
            0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(239,68,68,0.6), 0 4px 12px rgba(0,0,0,0.3); }
            50% { transform: scale(1.05); box-shadow: 0 0 30px rgba(239,68,68,0.8), 0 4px 16px rgba(0,0,0,0.4); }
          }
          @keyframes flameWiggle {
            0%, 100% { transform: rotate(-10deg) scale(1); }
            50% { transform: rotate(10deg) scale(1.1); }
          }
          @keyframes fireGlowPulse {
            0% { opacity: 0.7; transform: scale(1); }
            100% { opacity: 1; transform: scale(1.15); }
          }
          @keyframes fireAuraPulse {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.08); }
          }
          @keyframes flameWisp {
            0%, 100% { transform: scaleY(1) scaleX(1) translateY(0); opacity: 0.9; }
            50% { transform: scaleY(1.2) scaleX(0.85) translateY(-2px); opacity: 1; }
          }
          @keyframes flameSide {
            0%, 100% { transform: scaleX(1) scaleY(1); opacity: 0.85; }
            50% { transform: scaleX(1.15) scaleY(0.9); opacity: 1; }
          }
          @keyframes fireTrailPulse {
            0% { opacity: 0.7; transform: scale(1); }
            100% { opacity: 1; transform: scale(1.05); }
          }
          @keyframes trailFlame {
            0%, 100% { transform: scaleY(1) translateY(0); opacity: 0.8; }
            50% { transform: scaleY(1.3) translateY(-3px); opacity: 1; }
          }
        `
            }), c.jsxs("div", {
                className: "flex justify-between items-center mt-1 px-4",
                children: [c.jsxs("button", {
                    className: "flex flex-col items-center gap-1",
                    children: [c.jsx("div", {
                        className: "w-9 h-9 rounded-full bg-[#1976D2] flex items-center justify-center shadow-lg",
                        children: c.jsx(Pb, {
                            className: "w-4 h-4 text-white"
                        })
                    }), c.jsx("span", {
                        className: "text-white text-[9px] font-medium",
                        children: "Mais chances"
                    })]
                }), c.jsxs("button", {
                    className: "flex flex-col items-center gap-1",
                    children: [c.jsx("div", {
                        className: "w-9 h-9 rounded-full bg-[#1976D2] flex items-center justify-center shadow-lg",
                        children: c.jsx(Rb, {
                            className: "w-4 h-4 text-white"
                        })
                    }), c.jsx("span", {
                        className: "text-white text-[9px] font-medium",
                        children: "QR Code"
                    })]
                })]
            })]
        }), r && c.jsxs("div", {
            className: "fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-[100]",
            style: {
                animation: Ie ? "fadeOut 0.4s ease-in-out forwards" : "fadeIn 0.3s ease-out"
            },
            children: [c.jsxs("div", {
                className: "bg-white rounded-3xl p-6 pt-20 max-w-[340px] w-full text-center relative overflow-visible",
                style: {
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    animation: Ie ? "modalSlideDown 0.45s cubic-bezier(0.4, 0, 0.2, 1) forwards" : "modalSlideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards"
                },
                children: [c.jsx("div", {
                    className: "absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 rounded-b-full bg-gradient-to-r from-[#25F4EE] via-[#FE2C55] to-[#25F4EE]"
                }), c.jsx("div", {
                    className: "absolute left-1/2 -translate-x-1/2 -top-14 w-28 h-28",
                    style: {
                        animation: Ie ? "elementExitUp 0.3s ease-in forwards" : "elementEnterDown 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s backwards"
                    },
                    children: c.jsx("img", {
                        src: dm,
                        alt: "Bola dourada",
                        className: "w-full h-full object-contain drop-shadow-lg"
                    })
                }), c.jsx("h2", {
                    className: "text-gray-900 font-black text-xl mb-2 tracking-tight",
                    style: {
                        animation: Ie ? "elementExitUp 0.25s ease-in 0.05s forwards" : "elementEnterUp 0.4s ease-out 0.15s backwards"
                    },
                    children: "Gol de Prêmios"
                }), c.jsx("p", {
                    className: "text-gray-500 text-sm mb-4 leading-relaxed",
                    style: {
                        animation: Ie ? "elementExitUp 0.25s ease-in 0.08s forwards" : "elementEnterUp 0.4s ease-out 0.2s backwards"
                    },
                    children: "Chute a bola e acerte os cartões para ganhar prêmios em dinheiro!"
                }), c.jsx("div", {
                    className: "flex items-center justify-center gap-2 mb-2",
                    style: {
                        animation: Ie ? "elementExitScale 0.25s ease-in 0.1s forwards" : "elementEnterScale 0.4s ease-out 0.25s backwards"
                    },
                    children: c.jsxs("div", {
                        className: "flex items-center gap-2 bg-gradient-to-r from-[#E3F2FD] to-[#BBDEFB] px-4 py-2.5 rounded-full border border-[#90CAF9]/50",
                        style: {
                            animation: Ie ? "none" : "slowPulse 2.5s ease-in-out infinite"
                        },
                        children: [c.jsx(bs, {
                            className: "w-5 h-5 text-[#1565C0]"
                        }), c.jsx("span", {
                            className: "font-bold text-[#1565C0] text-sm",
                            children: "3 tentativas GRÁTIS"
                        })]
                    })
                }), c.jsxs("div", {
                    className: "flex items-center justify-center gap-1.5 mb-5 opacity-70",
                    style: {
                        animation: Ie ? "elementExitUp 0.25s ease-in 0.12s forwards" : "elementEnterUp 0.4s ease-out 0.3s backwards"
                    },
                    children: [c.jsxs("div", {
                        className: "relative",
                        children: [c.jsx(Ep, {
                            className: "w-3.5 h-3.5 text-gray-500"
                        }), c.jsx("span", {
                            className: "absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-[#4CAF50] rounded-full",
                            style: {
                                animation: Ie ? "none" : "slowPulse 2.5s ease-in-out infinite"
                            }
                        })]
                    }), c.jsxs("span", {
                        className: "text-gray-500 text-xs",
                        children: [c.jsx("span", {
                            className: "font-semibold",
                            children: ya.toLocaleString("pt-BR")
                        }), " pessoas jogando agora"]
                    })]
                }), c.jsxs("button", {
                    onClick: K,
                    className: "w-full py-4 rounded-2xl font-bold text-white text-lg flex items-center justify-center gap-2 relative overflow-hidden transition-transform active:scale-[0.98]",
                    style: {
                        background: "linear-gradient(135deg, #FE2C55 0%, #FF4466 100%)",
                        boxShadow: "0 4px 0 #BE123C, 0 8px 24px -4px rgba(254, 44, 85, 0.4)",
                        animation: Ie ? "elementExitScale 0.3s ease-in 0.14s forwards" : "elementEnterScale 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.35s backwards"
                    },
                    children: [c.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12",
                        style: {
                            animation: Ie ? "none" : "shimmer 2s ease-in-out infinite"
                        }
                    }), c.jsx(bs, {
                        className: "w-5 h-5 relative z-10"
                    }), c.jsx("span", {
                        className: "relative z-10",
                        children: "JOGAR AGORA"
                    })]
                })]
            }), c.jsx("style", {
                children: `
            @keyframes fadeIn {
              from { opacity: 0; backdrop-filter: blur(0px); }
              to { opacity: 1; backdrop-filter: blur(4px); }
            }
            @keyframes fadeOut {
              0% { opacity: 1; backdrop-filter: blur(4px); }
              100% { opacity: 0; backdrop-filter: blur(0px); }
            }
            @keyframes modalSlideUp {
              0% { opacity: 0; transform: translateY(60px) scale(0.85); }
              60% { opacity: 1; transform: translateY(-8px) scale(1.02); }
              100% { opacity: 1; transform: translateY(0) scale(1); }
            }
            @keyframes modalSlideDown {
              0% { opacity: 1; transform: translateY(0) scale(1); }
              30% { opacity: 1; transform: translateY(-12px) scale(1.03); }
              100% { opacity: 0; transform: translateY(80px) scale(0.8); }
            }
            @keyframes shimmer {
              0% { transform: translateX(-100%) skewX(-12deg); }
              50%, 100% { transform: translateX(100%) skewX(-12deg); }
            }
            @keyframes elementEnterUp {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes elementEnterDown {
              from { opacity: 0; transform: translateY(-30px) scale(0.8); }
              to { opacity: 1; transform: translateY(0) scale(1); }
            }
            @keyframes elementEnterScale {
              from { opacity: 0; transform: scale(0.8); }
              to { opacity: 1; transform: scale(1); }
            }
          `
            })]
        }), T && c.jsxs("div", {
            className: "fixed inset-0 bg-black/70 flex items-center justify-center p-6 z-[100]",
            style: {
                animation: pe ? "fadeOut 0.5s ease-out forwards" : "fadeIn 0.4s ease-out",
                backdropFilter: "blur(4px)"
            },
            children: [c.jsxs("div", {
                className: "bg-gradient-to-b from-white to-gray-50 rounded-3xl p-6 max-w-sm w-full text-center shadow-2xl border border-white/50 relative overflow-hidden",
                style: {
                    animation: pe ? "modalExitBounce 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards" : "modalSlideUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
                    boxShadow: "0 25px 60px -12px rgba(0, 0, 0, 0.4)"
                },
                children: [c.jsx("div", {
                    className: "absolute inset-0 pointer-events-none overflow-hidden rounded-3xl",
                    children: [...Array(6)].map( (X, W) => c.jsx("div", {
                        className: "absolute",
                        style: {
                            left: `${15 + W * 15}%`,
                            animation: pe ? "none" : `coinFloat ${.8 + W * .1}s ease-out ${W * .1}s forwards`,
                            opacity: pe ? 0 : void 0
                        },
                        children: c.jsx(jb, {
                            className: "w-6 h-6 text-[#FFD700]"
                        })
                    }, W))
                }), c.jsx("div", {
                    className: "w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-[#FFD700] to-[#FF8C00] rounded-full flex items-center justify-center shadow-lg",
                    style: {
                        animation: pe ? "elementExitUp 0.3s ease-in forwards" : "iconBounce 0.6s ease-out 0.2s forwards",
                        transform: pe ? void 0 : "scale(0)"
                    },
                    children: c.jsx(fc, {
                        className: "w-8 h-8 text-white"
                    })
                }), c.jsxs("h2", {
                    className: "text-[#1565C0] font-black text-2xl mb-2 flex items-center justify-center gap-2",
                    style: {
                        animation: pe ? "elementExitUp 0.25s ease-in 0.05s forwards" : "textSlideUp 0.4s ease-out 0.3s forwards",
                        opacity: pe ? 1 : 0,
                        transform: pe ? void 0 : "translateY(20px)"
                    },
                    children: [c.jsx(bs, {
                        className: "w-6 h-6"
                    }), "QUASE!"]
                }), c.jsx("div", {
                    className: "flex items-center justify-center gap-1.5 mb-3",
                    style: {
                        animation: pe ? "elementExitUp 0.25s ease-in 0.08s forwards" : "textSlideUp 0.4s ease-out 0.35s forwards",
                        opacity: pe ? 1 : 0,
                        transform: pe ? void 0 : "translateY(20px)"
                    },
                    children: [1, 2, 3].map(X => c.jsx("div", {
                        className: `w-2.5 h-2.5 rounded-full transition-all ${x >= X ? "bg-[#4CAF50]" : "bg-gray-300"}`
                    }, X))
                }), c.jsx("p", {
                    className: "text-gray-500 text-sm mb-2",
                    style: {
                        animation: pe ? "elementExitUp 0.25s ease-in 0.1s forwards" : "textSlideUp 0.4s ease-out 0.4s forwards",
                        opacity: pe ? 1 : 0,
                        transform: pe ? void 0 : "translateY(20px)"
                    },
                    children: "Você acabou de ganhar:"
                }), c.jsxs("p", {
                    className: "text-[#E91E63] font-black text-4xl mb-3",
                    style: {
                        animation: pe ? "elementExitScale 0.3s ease-in 0.12s forwards" : "prizeReveal 0.6s ease-out 0.5s forwards",
                        opacity: pe ? 1 : 0,
                        transform: pe ? void 0 : "scale(0.5)"
                    },
                    children: ["R$ ", Y.toFixed(2).replace(".", ",")]
                }), c.jsxs("p", {
                    className: "text-gray-500 text-sm mb-5",
                    style: {
                        animation: pe ? "elementExitUp 0.25s ease-in 0.14s forwards" : "textSlideUp 0.4s ease-out 0.7s forwards",
                        opacity: pe ? 1 : 0,
                        transform: pe ? void 0 : "translateY(20px)"
                    },
                    children: ["Restam mais ", s, " ", s === 1 ? "chance" : "chances", " para acertar o gol de R$ 500!"]
                }), c.jsxs("button", {
                    onClick: () => {
                        Sa("light"),
                        jn()
                    }
                    ,
                    className: "bg-gradient-to-r from-[#E91E63] to-[#F06292] text-white font-bold py-3.5 px-8 rounded-xl text-base shadow-lg hover:shadow-xl transition-all w-full flex items-center justify-center gap-2",
                    style: {
                        animation: pe ? "elementExitScale 0.3s ease-in 0.16s forwards" : "buttonPop 0.5s ease-out 0.8s forwards",
                        opacity: pe ? 1 : 0,
                        transform: pe ? void 0 : "scale(0.8)",
                        boxShadow: "0 4px 0 #BE185D, 0 8px 20px -4px rgba(233, 30, 99, 0.4)"
                    },
                    children: [c.jsx(bs, {
                        className: "w-5 h-5"
                    }), "Continuar Jogando"]
                })]
            }), c.jsx("style", {
                children: `
            @keyframes modalPopIn {
              0% { opacity: 0; transform: scale(0.3) translateY(50px); }
              50% { transform: scale(1.05) translateY(-10px); }
              100% { opacity: 1; transform: scale(1) translateY(0); }
            }
            @keyframes modalExitBounce {
              0% { opacity: 1; transform: scale(1) translateY(0); }
              20% { transform: scale(1.03) translateY(-8px); }
              100% { opacity: 0; transform: scale(0.85) translateY(60px); }
            }
            @keyframes iconBounce {
              0% { transform: scale(0) rotate(-180deg); }
              60% { transform: scale(1.2) rotate(10deg); }
              100% { transform: scale(1) rotate(0deg); }
            }
            @keyframes textSlideUp {
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes prizeReveal {
              0% { opacity: 0; transform: scale(0.5); }
              50% { transform: scale(1.2); }
              100% { opacity: 1; transform: scale(1); }
            }
            @keyframes buttonPop {
              0% { opacity: 0; transform: scale(0.8); }
              70% { transform: scale(1.05); }
              100% { opacity: 1; transform: scale(1); }
            }
            @keyframes coinFloat {
              0% { opacity: 1; transform: translateY(100px) rotate(0deg); }
              100% { opacity: 0; transform: translateY(-50px) rotate(360deg); }
            }
            @keyframes elementExitUp {
              0% { opacity: 1; transform: translateY(0); }
              100% { opacity: 0; transform: translateY(-15px); }
            }
            @keyframes elementExitScale {
              0% { opacity: 1; transform: scale(1); }
              100% { opacity: 0; transform: scale(0.8); }
            }
          `
            })]
        }), g && c.jsx("div", {
            className: "fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 z-[100]",
            children: c.jsxs("div", {
                className: "bg-gradient-to-b from-white to-gray-50 rounded-3xl p-6 max-w-sm w-full text-center shadow-2xl border border-[#FFD700]/30",
                children: [c.jsx("div", {
                    className: "w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#FFD700] to-[#FF8C00] rounded-full flex items-center justify-center shadow-lg",
                    children: c.jsx(fc, {
                        className: "w-8 h-8 text-white"
                    })
                }), c.jsx("h2", {
                    className: "text-[#1565C0] font-black text-2xl mb-2",
                    children: "GOOOL!"
                }), c.jsx("p", {
                    className: "text-gray-500 text-sm mb-2",
                    children: "Você ganhou:"
                }), c.jsxs("p", {
                    className: "text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FF8C00] font-black text-4xl mb-5",
                    children: ["R$ ", m.toFixed(2).replace(".", ",")]
                }), c.jsxs("button", {
                    onClick: Wy,
                    className: "bg-gradient-to-r from-[#FFD700] to-[#FF8C00] text-white font-bold py-3 px-8 rounded-2xl text-base shadow-lg hover:shadow-xl transition-all w-full flex items-center justify-center gap-2",
                    children: [c.jsx(Ha, {
                        className: "w-5 h-5"
                    }), "RESGATAR PRÊMIO"]
                })]
            })
        }), c.jsx(Jk, {
            active: jr
        }), _ && c.jsx("div", {
            className: "fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-[100]",
            style: {
                animation: an ? "fadeOut 0.5s ease-out forwards" : "fadeIn 0.4s ease-out",
                backdropFilter: "blur(4px)"
            },
            children: c.jsxs("div", {
                className: "bg-white rounded-2xl p-6 pt-16 max-w-[340px] w-full text-center relative overflow-visible",
                style: {
                    animation: an ? "modalSlideDown 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards" : "modalSlideUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
                    boxShadow: "0 25px 60px -12px rgba(0, 0, 0, 0.35)"
                },
                children: [c.jsx("div", {
                    className: "absolute left-1/2 -translate-x-1/2 -top-12 w-24 h-24",
                    style: {
                        animation: an ? "elementExitUp 0.3s ease-in forwards" : "elementEnterDown 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s backwards"
                    },
                    children: c.jsx("img", {
                        src: dm,
                        alt: "Bola dourada",
                        className: "w-full h-full object-contain drop-shadow-lg"
                    })
                }), c.jsx("h2", {
                    className: "text-gray-900 font-black text-lg mb-1 tracking-tight",
                    style: {
                        animation: an ? "elementExitUp 0.25s ease-in 0.05s forwards" : "elementEnterUp 0.4s ease-out 0.15s backwards"
                    },
                    children: "Gol de Prêmios"
                }), c.jsx("p", {
                    className: "text-gray-500 text-sm mb-3",
                    style: {
                        animation: an ? "elementExitUp 0.25s ease-in 0.08s forwards" : "elementEnterUp 0.4s ease-out 0.2s backwards"
                    },
                    children: "Parabéns! Como parte de uma campanha de recompensas exclusiva."
                }), c.jsx("p", {
                    className: "text-gray-900 font-black text-3xl mb-4",
                    style: {
                        animation: an ? "elementExitScale 0.3s ease-in 0.1s forwards" : "elementEnterScale 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.25s backwards"
                    },
                    children: "R$ 536,00"
                }), c.jsxs("div", {
                    className: "flex items-center justify-center gap-1.5 mb-5",
                    style: {
                        animation: an ? "elementExitUp 0.25s ease-in 0.12s forwards" : "elementEnterUp 0.4s ease-out 0.3s backwards"
                    },
                    children: [c.jsx(Tb, {
                        className: "w-4 h-4 text-gray-400"
                    }), c.jsx("span", {
                        className: "text-gray-500 text-sm",
                        children: "Expira em"
                    }), c.jsxs("div", {
                        className: "flex items-center gap-0.5",
                        children: [c.jsx("span", {
                            className: "bg-gray-100 px-2 py-1 rounded text-gray-700 font-mono text-xs font-bold min-w-[28px]",
                            children: y.hours.toString().padStart(2, "0")
                        }), c.jsx("span", {
                            className: "text-gray-400 font-bold",
                            children: ":"
                        }), c.jsx("span", {
                            className: "bg-gray-100 px-2 py-1 rounded text-gray-700 font-mono text-xs font-bold min-w-[28px]",
                            children: y.minutes.toString().padStart(2, "0")
                        }), c.jsx("span", {
                            className: "text-gray-400 font-bold",
                            children: ":"
                        }), c.jsx("span", {
                            className: "bg-gray-100 px-2 py-1 rounded text-gray-700 font-mono text-xs font-bold min-w-[28px]",
                            children: y.seconds.toString().padStart(2, "0")
                        })]
                    })]
                }), c.jsxs("button", {
                    onClick: Ct,
                    className: "w-full py-3.5 rounded-xl font-bold text-white text-base flex items-center justify-center gap-2 transition-transform active:scale-[0.98]",
                    style: {
                        background: "linear-gradient(135deg, #FE2C55 0%, #FF4466 100%)",
                        boxShadow: "0 4px 0 #BE123C, 0 8px 20px -4px rgba(254, 44, 85, 0.4)",
                        animation: an ? "elementExitScale 0.3s ease-in 0.14s forwards" : "elementEnterScale 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.35s backwards"
                    },
                    children: [c.jsx(Ha, {
                        className: "w-5 h-5"
                    }), "RESGATAR"]
                })]
            })
        }), ge && c.jsxs("div", {
            className: "fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-[100]",
            style: {
                animation: Mt ? "fadeOut 0.5s ease-out forwards" : "fadeIn 0.4s ease-out",
                backdropFilter: "blur(4px)"
            },
            children: [c.jsxs("div", {
                className: "bg-white rounded-2xl p-6 pt-20 max-w-[340px] w-full text-center relative overflow-visible",
                style: {
                    animation: Mt ? "modalSlideDown 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards" : "modalSlideUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
                    boxShadow: "0 25px 60px -12px rgba(0, 0, 0, 0.35)"
                },
                children: [c.jsxs("div", {
                    className: "absolute left-1/2 -translate-x-1/2 -top-14 w-28 h-28",
                    style: {
                        animation: Mt ? "elementExitUp 0.3s ease-in forwards" : "elementEnterDown 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s backwards"
                    },
                    children: [c.jsx("div", {
                        className: "absolute inset-[-6px] rounded-full",
                        style: {
                            background: "radial-gradient(circle, rgba(255,100,0,0.5) 0%, rgba(255,50,0,0.2) 50%, transparent 70%)",
                            animation: Mt ? "none" : "fireGlow 1.5s ease-in-out infinite"
                        }
                    }), c.jsxs("div", {
                        className: "w-20 h-20 rounded-full overflow-hidden shadow-2xl ring-4 ring-[#FF6B00]/60 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                        style: {
                            boxShadow: "0 8px 30px rgba(255,100,0,0.5), 0 0 30px rgba(255,100,0,0.4)"
                        },
                        children: [c.jsx("img", {
                            src: Cs,
                            alt: "Bola de fogo",
                            className: "w-full h-full object-cover"
                        }), c.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-br from-[#FF6B00]/25 via-transparent to-[#FF0000]/15 mix-blend-overlay"
                        })]
                    })]
                }), c.jsxs("h2", {
                    className: "text-[#DC2626] font-black text-lg mb-3 leading-tight tracking-tight",
                    style: {
                        animation: Mt ? "elementExitUp 0.25s ease-in 0.05s forwards" : "elementEnterUp 0.4s ease-out 0.15s backwards"
                    },
                    children: ["SUPER CHUTE", c.jsx("br", {}), "MULTIPLICADOR"]
                }), c.jsxs("p", {
                    className: "text-gray-600 text-sm mb-4 leading-relaxed",
                    style: {
                        animation: Mt ? "elementExitUp 0.25s ease-in 0.08s forwards" : "elementEnterUp 0.4s ease-out 0.2s backwards"
                    },
                    children: ["Você ganhou um ", c.jsx("span", {
                        className: "font-semibold text-gray-800",
                        children: "bônus especial"
                    }), ".", c.jsx("br", {}), "Aperte em ", c.jsx("span", {
                        className: "font-semibold text-gray-800",
                        children: "continuar"
                    }), " para desbloquear um ", c.jsx("span", {
                        className: "font-semibold text-[#DC2626]",
                        children: "multiplicador de até 15x"
                    }), " no seu saldo."]
                }), c.jsx("p", {
                    className: "text-gray-400 text-xs mb-5 italic",
                    style: {
                        animation: Mt ? "elementExitUp 0.25s ease-in 0.1s forwards" : "elementEnterUp 0.4s ease-out 0.25s backwards"
                    },
                    children: "Você não perderá o valor já ganhado."
                }), c.jsxs("button", {
                    onClick: cn,
                    className: "w-full py-3.5 rounded-xl font-bold text-white text-base flex items-center justify-center gap-2 transition-transform active:scale-[0.98]",
                    style: {
                        background: "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)",
                        boxShadow: "0 4px 0 #B91C1C, 0 8px 20px -4px rgba(239, 68, 68, 0.4)",
                        animation: Mt ? "elementExitScale 0.3s ease-in 0.12s forwards" : "elementEnterScale 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s backwards"
                    },
                    children: [c.jsx(Ar, {
                        className: "w-5 h-5"
                    }), "Continuar"]
                })]
            }), c.jsx("style", {
                children: `
            @keyframes fireGlow {
              0%, 100% { opacity: 0.6; transform: scale(1); }
              50% { opacity: 1; transform: scale(1.1); }
            }
            @keyframes cartoonFlameModal {
              0% { transform: scaleY(1) scaleX(1); }
              100% { transform: scaleY(1.2) scaleX(0.85); }
            }
          `
            })]
        }), De && c.jsxs("div", {
            className: "fixed inset-0 bg-black/80 flex items-center justify-center z-[100]",
            style: {
                animation: "fadeIn 0.3s ease-out"
            },
            children: [c.jsx("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: [...Array(20)].map( (X, W) => c.jsx("div", {
                    className: "absolute w-2 h-2 rounded-full",
                    style: {
                        background: W % 2 === 0 ? "#FFCD00" : "#EF4444",
                        left: "50%",
                        top: "50%",
                        animation: `unlockParticle${W % 4} 2s ease-out forwards`,
                        animationDelay: `${.3 + W * .05}s`,
                        opacity: 0
                    }
                }, W))
            }), c.jsxs("div", {
                className: "relative flex flex-col items-center",
                children: [c.jsx("div", {
                    className: "absolute w-40 h-40 rounded-full border-4 border-dashed border-[#FFCD00]/50",
                    style: {
                        animation: "spinRing 1s linear infinite"
                    }
                }), c.jsx("div", {
                    className: "absolute w-48 h-48 rounded-full border-2 border-[#EF4444]/30",
                    style: {
                        animation: "spinRing 1.5s linear infinite reverse"
                    }
                }), c.jsx("div", {
                    className: "absolute w-32 h-32 rounded-full",
                    style: {
                        background: "radial-gradient(circle, rgba(239,68,68,0.6) 0%, rgba(255,100,0,0.3) 50%, transparent 70%)",
                        animation: "unlockGlow 0.6s ease-in-out infinite alternate"
                    }
                }), c.jsx("div", {
                    className: "relative w-24 h-24 bg-gradient-to-br from-[#DC2626] to-[#7F1D1D] rounded-2xl flex items-center justify-center shadow-2xl border-2 border-[#FFCD00]/50",
                    style: {
                        animation: "unlockBounce 0.5s ease-out forwards",
                        boxShadow: "0 0 40px rgba(239,68,68,0.5), 0 0 80px rgba(255,200,0,0.3)"
                    },
                    children: c.jsxs("div", {
                        className: "text-center",
                        children: [c.jsx(Ar, {
                            className: "w-10 h-10 text-[#FFCD00] mx-auto",
                            style: {
                                animation: "flameWiggle 0.3s ease-in-out infinite"
                            }
                        }), c.jsx("span", {
                            className: "text-white font-black text-xl block mt-1",
                            style: {
                                animation: "countUp 1.5s ease-out forwards"
                            },
                            children: "10x"
                        })]
                    })
                }), c.jsx("p", {
                    className: "text-white font-bold text-lg mt-8 tracking-wider",
                    style: {
                        animation: "textPulse 0.8s ease-in-out infinite"
                    },
                    children: "DESBLOQUEANDO..."
                }), c.jsx("div", {
                    className: "w-48 h-2 bg-white/20 rounded-full mt-4 overflow-hidden",
                    children: c.jsx("div", {
                        className: "h-full bg-gradient-to-r from-[#EF4444] via-[#FFCD00] to-[#EF4444] rounded-full",
                        style: {
                            animation: "progressFill 1.8s ease-out forwards",
                            backgroundSize: "200% 100%"
                        }
                    })
                })]
            }), c.jsx("style", {
                children: `
            @keyframes spinRing {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes unlockGlow {
              0% { transform: scale(1); opacity: 0.6; }
              100% { transform: scale(1.3); opacity: 1; }
            }
            @keyframes unlockBounce {
              0% { transform: scale(0.5) rotate(-180deg); opacity: 0; }
              50% { transform: scale(1.2) rotate(10deg); }
              100% { transform: scale(1) rotate(0deg); opacity: 1; }
            }
            @keyframes countUp {
              0%, 30% { opacity: 0; transform: translateY(10px); }
              50% { opacity: 1; transform: translateY(0); }
              100% { opacity: 1; }
            }
            @keyframes textPulse {
              0%, 100% { opacity: 0.7; }
              50% { opacity: 1; }
            }
            @keyframes progressFill {
              0% { width: 0%; }
              100% { width: 100%; }
            }
            @keyframes unlockParticle0 {
              0% { opacity: 1; transform: translate(-50%, -50%) scale(0); }
              100% { opacity: 0; transform: translate(calc(-50% + 100px), calc(-50% - 80px)) scale(1); }
            }
            @keyframes unlockParticle1 {
              0% { opacity: 1; transform: translate(-50%, -50%) scale(0); }
              100% { opacity: 0; transform: translate(calc(-50% - 90px), calc(-50% + 70px)) scale(1); }
            }
            @keyframes unlockParticle2 {
              0% { opacity: 1; transform: translate(-50%, -50%) scale(0); }
              100% { opacity: 0; transform: translate(calc(-50% + 60px), calc(-50% + 100px)) scale(1); }
            }
            @keyframes unlockParticle3 {
              0% { opacity: 1; transform: translate(-50%, -50%) scale(0); }
              100% { opacity: 0; transform: translate(calc(-50% - 110px), calc(-50% - 60px)) scale(1); }
            }
          `
            })]
        }), ee && c.jsxs("div", {
            className: "fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-[100]",
            style: {
                animation: ft ? "fadeOut 0.5s ease-out forwards" : "fadeIn 0.4s ease-out",
                backdropFilter: "blur(4px)"
            },
            children: [c.jsxs("div", {
                className: "bg-gradient-to-b from-[#7F1D1D] to-[#991B1B] rounded-2xl p-5 pt-16 max-w-[340px] w-full text-center relative overflow-visible border border-[#EF4444]/30",
                style: {
                    animation: ft ? "modalSlideDown 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards" : "modalSlideUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
                    boxShadow: "0 25px 60px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(239,68,68,0.2)"
                },
                children: [c.jsxs("div", {
                    className: "absolute left-1/2 -translate-x-1/2 -top-10 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-[#EF4444] z-20",
                    style: {
                        animation: ft ? "elementExitUp 0.3s ease-in forwards" : "elementEnterDown 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s backwards"
                    },
                    children: [c.jsx("div", {
                        className: "absolute -inset-2 rounded-full bg-gradient-to-t from-[#FF6B00]/40 to-transparent",
                        style: {
                            animation: ft ? "none" : "fireGlow 1.5s ease-in-out infinite"
                        }
                    }), c.jsxs("div", {
                        className: "text-center flex flex-col items-center relative z-10",
                        children: [c.jsx(Ar, {
                            className: "w-7 h-7 text-[#EF4444]"
                        }), c.jsx("span", {
                            className: "text-[#DC2626] font-black text-sm",
                            children: "10x"
                        })]
                    })]
                }), c.jsxs("div", {
                    className: "relative z-10",
                    children: [c.jsxs("h2", {
                        className: "text-[#FFCD00] font-black text-lg mb-2 leading-tight tracking-tight",
                        style: {
                            animation: ft ? "elementExitUp 0.25s ease-in 0.05s forwards" : "elementEnterUp 0.4s ease-out 0.15s backwards"
                        },
                        children: ["MULTIPLICADOR DE 10X", c.jsx("br", {}), "DESBLOQUEADO"]
                    }), c.jsxs("p", {
                        className: "text-white/90 text-sm mb-4 leading-relaxed",
                        style: {
                            animation: ft ? "elementExitUp 0.25s ease-in 0.08s forwards" : "elementEnterUp 0.4s ease-out 0.2s backwards"
                        },
                        children: ["Você acaba de ganhar um ", c.jsx("span", {
                            className: "text-white font-semibold",
                            children: "multiplicador de 10 vezes"
                        }), " para o seu próximo chute."]
                    }), c.jsxs("div", {
                        className: "bg-white/10 rounded-xl p-3 mb-4 space-y-2 backdrop-blur-sm",
                        style: {
                            animation: ft ? "elementExitScale 0.25s ease-in 0.1s forwards" : "elementEnterScale 0.5s ease-out 0.25s backwards"
                        },
                        children: [c.jsxs("div", {
                            className: "flex justify-between items-center text-sm",
                            children: [c.jsx("span", {
                                className: "text-white/70",
                                children: "Saldo atual:"
                            }), c.jsxs("span", {
                                className: "font-bold text-white",
                                children: ["R$ ", m.toFixed(2).replace(".", ",")]
                            })]
                        }), c.jsxs("div", {
                            className: "flex justify-between items-center text-sm",
                            children: [c.jsx("span", {
                                className: "text-white/70",
                                children: "Multiplicador desbloqueado:"
                            }), c.jsx("span", {
                                className: "font-black text-[#FFCD00] text-lg",
                                style: {
                                    animation: ft ? "none" : "pulse 1.5s ease-in-out infinite"
                                },
                                children: "10x"
                            })]
                        })]
                    }), c.jsxs("p", {
                        className: "text-white/60 text-xs mb-4 leading-relaxed",
                        style: {
                            animation: ft ? "elementExitUp 0.25s ease-in 0.12s forwards" : "elementEnterUp 0.4s ease-out 0.3s backwards"
                        },
                        children: ["Seu próximo chute já vai usar o ", c.jsx("span", {
                            className: "text-[#FFCD00] font-semibold",
                            children: "10x"
                        }), ". Clique em ", c.jsx("span", {
                            className: "text-[#FFCD00] font-semibold",
                            children: "Jogar"
                        }), " e depois em ", c.jsx("span", {
                            className: "text-[#FFCD00] font-semibold",
                            children: "CHUTAR"
                        }), " para aplicar o bônus."]
                    }), c.jsxs("button", {
                        onClick: Uy,
                        className: "w-full py-3.5 rounded-xl font-bold text-white text-base flex items-center justify-center gap-2 transition-transform active:scale-[0.98]",
                        style: {
                            background: "linear-gradient(135deg, #FFCD00 0%, #FF9500 100%)",
                            boxShadow: "0 4px 0 #CC7A00, 0 8px 20px -4px rgba(255, 149, 0, 0.4)",
                            color: "#7F1D1D",
                            animation: ft ? "elementExitScale 0.3s ease-in 0.14s forwards" : "elementEnterScale 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.35s backwards"
                        },
                        children: [c.jsx(Ar, {
                            className: "w-5 h-5"
                        }), "Jogar com 10x"]
                    }), c.jsx("p", {
                        className: "text-white/50 text-xs mt-3 italic",
                        style: {
                            animation: ft ? "elementExitUp 0.25s ease-in 0.16s forwards" : "elementEnterUp 0.4s ease-out 0.4s backwards"
                        },
                        children: "Você não perde o saldo já conquistado."
                    })]
                })]
            }), c.jsx("style", {
                children: `
            @keyframes fireParticle {
              0% { transform: translateY(0) scaleY(1); opacity: 0.6; }
              50% { transform: translateY(-15px) scaleY(1.2); opacity: 0.8; }
              100% { transform: translateY(-30px) scaleY(0.8); opacity: 0; }
            }
            @keyframes pulse {
              0%, 100% { opacity: 1; transform: scale(1); }
              50% { opacity: 0.8; transform: scale(1.05); }
            }
            @keyframes elementEnterUp {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes elementEnterDown {
              from { opacity: 0; transform: translateY(-30px) scale(0.8); }
              to { opacity: 1; transform: translateY(0) scale(1); }
            }
            @keyframes elementEnterScale {
              from { opacity: 0; transform: scale(0.8); }
              to { opacity: 1; transform: scale(1); }
            }
          `
            })]
        }), Cn && c.jsxs("div", {
            className: "fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-[100]",
            style: {
                animation: pt ? "fadeOut 0.5s ease-out forwards" : "fadeIn 0.4s ease-out",
                backdropFilter: "blur(4px)"
            },
            children: [c.jsxs("div", {
                className: "bg-gradient-to-b from-[#7F1D1D] to-[#991B1B] rounded-2xl p-5 pt-16 max-w-[340px] w-full text-center relative overflow-visible border border-[#EF4444]/30",
                style: {
                    animation: pt ? "modalSlideDown 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards" : "modalSlideUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
                    boxShadow: "0 25px 60px -12px rgba(0, 0, 0, 0.5), 0 0 50px rgba(239,68,68,0.25)"
                },
                children: [c.jsxs("div", {
                    className: "absolute left-1/2 -translate-x-1/2 -top-10 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-[#FFCD00]",
                    style: {
                        animation: pt ? "elementExitUp 0.3s ease-in forwards" : "elementEnterDown 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s backwards"
                    },
                    children: [c.jsx("div", {
                        className: "absolute -inset-3 rounded-full bg-gradient-to-r from-[#FFCD00]/40 via-[#FF8C00]/30 to-[#FFCD00]/40",
                        style: {
                            animation: pt ? "none" : "goldenGlow 2s ease-in-out infinite"
                        }
                    }), c.jsxs("div", {
                        className: "text-center flex flex-col items-center relative z-10",
                        children: [c.jsx(Mb, {
                            className: "w-7 h-7 text-[#FFCD00]",
                            style: {
                                animation: pt ? "none" : "trophyBounce 1s ease-in-out infinite"
                            }
                        }), c.jsx("span", {
                            className: "text-[#DC2626] font-black text-sm",
                            children: "10x"
                        })]
                    })]
                }), c.jsxs("h2", {
                    className: "text-[#FFCD00] font-black text-lg mb-2 leading-tight tracking-tight relative z-10",
                    style: {
                        animation: pt ? "elementExitUp 0.25s ease-in 0.05s forwards" : "elementEnterUp 0.4s ease-out 0.15s backwards"
                    },
                    children: ["SALDO MULTIPLICADO POR", c.jsx("br", {}), "10X"]
                }), c.jsxs("p", {
                    className: "text-white/80 text-sm mb-4 leading-relaxed relative z-10",
                    style: {
                        animation: pt ? "elementExitUp 0.25s ease-in 0.08s forwards" : "elementEnterUp 0.4s ease-out 0.2s backwards"
                    },
                    children: ["Aplicamos o ", c.jsx("span", {
                        className: "text-white font-semibold",
                        children: "multiplicador de 10x"
                    }), " sobre o seu saldo do jogo. Confira abaixo quanto você ficou no total:"]
                }), c.jsxs("div", {
                    className: "bg-[#FEE2E2] rounded-xl p-4 mb-4 space-y-2 relative z-10",
                    style: {
                        animation: pt ? "elementExitScale 0.3s ease-in 0.1s forwards" : "elementEnterScale 0.5s ease-out 0.25s backwards"
                    },
                    children: [c.jsxs("div", {
                        className: "flex justify-between items-center text-sm",
                        children: [c.jsx("span", {
                            className: "text-gray-600",
                            children: "Saldo antes do bônus:"
                        }), c.jsxs("span", {
                            className: "font-bold text-gray-800",
                            children: ["R$ ", eN.toFixed(2).replace(".", ",")]
                        })]
                    }), c.jsxs("div", {
                        className: "flex justify-between items-center text-sm",
                        children: [c.jsx("span", {
                            className: "text-gray-600",
                            children: "Multiplicador aplicado:"
                        }), c.jsx("span", {
                            className: "font-black text-[#DC2626]",
                            style: {
                                animation: pt ? "none" : "pulse 1.5s ease-in-out infinite"
                            },
                            children: "10x"
                        })]
                    }), c.jsx("div", {
                        className: "border-t border-[#FECACA] pt-3 mt-2",
                        children: c.jsxs("div", {
                            className: "flex justify-between items-center",
                            children: [c.jsx("span", {
                                className: "text-gray-700 font-semibold text-sm",
                                children: "Novo saldo final:"
                            }), c.jsxs("span", {
                                className: "font-black text-[#991B1B] text-xl",
                                style: {
                                    animation: pt ? "none" : "prizeGlow 1.5s ease-in-out infinite"
                                },
                                children: ["R$ ", Ja.toFixed(2).replace(".", ",")]
                            })]
                        })
                    })]
                }), c.jsxs("button", {
                    onClick: Vy,
                    className: "w-full py-3.5 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-transform active:scale-[0.98] relative z-10",
                    style: {
                        background: "linear-gradient(135deg, #FFCD00 0%, #FF9500 100%)",
                        boxShadow: "0 4px 0 #CC7A00, 0 8px 20px -4px rgba(255, 149, 0, 0.4)",
                        color: "#7F1D1D",
                        animation: pt ? "elementExitScale 0.3s ease-in 0.14s forwards" : "elementEnterScale 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s backwards"
                    },
                    children: [c.jsx(Ha, {
                        className: "w-5 h-5"
                    }), "Resgatar valor"]
                }), c.jsxs("p", {
                    className: "text-white/40 text-xs mt-3 italic relative z-10",
                    style: {
                        animation: pt ? "elementExitUp 0.25s ease-in 0.16s forwards" : "elementEnterUp 0.4s ease-out 0.35s backwards"
                    },
                    children: ["Ao clicar em ", c.jsx("span", {
                        className: "text-[#FFCD00] font-semibold",
                        children: "Resgatar valor"
                    }), ", você será direcionado para concluir o recebimento."]
                })]
            }), c.jsx("style", {
                children: `
            @keyframes goldenGlow {
              0%, 100% { opacity: 0.5; transform: scale(1) rotate(0deg); }
              50% { opacity: 1; transform: scale(1.1) rotate(180deg); }
            }
            @keyframes trophyBounce {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-3px); }
            }
            @keyframes prizeGlow {
              0%, 100% { text-shadow: 0 0 0 transparent; }
              50% { text-shadow: 0 0 10px rgba(153, 27, 27, 0.5); }
            }
          `
            })]
        })]
    })
}
  , oN = () => {
    const [e,t] = f.useState(!0)
      , n = {
        balance: 5360,
        points: 536e5,
        lastReward: 646.43
    };
    return c.jsxs(c.Fragment, {
        children: [c.jsx(rN, {
            open: e,
            onComplete: () => t(!1),
            onClose: () => t(!1)
        }), c.jsx("div", {
            className: "min-h-screen bg-background w-full",
            children: c.jsxs("main", {
                className: "w-full max-w-md mx-auto px-3 sm:px-4 py-4 space-y-3 sm:space-y-4 pb-8",
                children: [c.jsx(KC, {
                    balance: n.balance,
                    points: n.points,
                    lastReward: n.lastReward
                }), c.jsx(Gk, {
                    balance: n.balance
                }), c.jsx(Xk, {}), c.jsx(Zk, {})]
            })
        })]
    })
}
  , sN = () => {
    const e = bv();
    return f.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    c.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: c.jsxs("div", {
            className: "text-center",
            children: [c.jsx("h1", {
                className: "mb-4 text-4xl font-bold",
                children: "404"
            }), c.jsx("p", {
                className: "mb-4 text-xl text-muted-foreground",
                children: "Oops! Page not found"
            }), c.jsx("a", {
                href: "/",
                className: "text-primary underline hover:text-primary/90",
                children: "Return to Home"
            })]
        })
    })
}
  , aN = new sC
  , iN = () => c.jsx(iC, {
    client: aN,
    children: c.jsxs(DE, {
        children: [c.jsx(vS, {}), c.jsx(GS, {}), c.jsx(YC, {
            children: c.jsxs(VC, {
                children: [c.jsx(Au, {
                    path: "/",
                    element: c.jsx(oN, {})
                }), c.jsx(Au, {
                    path: "*",
                    element: c.jsx(sN, {})
                })]
            })
        })]
    })
});
z0(document.getElementById("root")).render(c.jsx(iN, {}));
