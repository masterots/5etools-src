//#region \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), s = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, c = (n, r, a) => (a = n == null ? {} : e(i(n)), s(r || !n || !n.__esModule ? t(a, "default", {
	value: n,
	enumerable: !0
}) : a, n)), l = /* @__PURE__ */ o(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.for("react.activity"), p = Symbol.iterator;
	function m(e) {
		return typeof e != "object" || !e ? null : (e = p && e[p] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var h = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, g = Object.assign, _ = {};
	function v(e, t, n) {
		this.props = e, this.context = t, this.refs = _, this.updater = n || h;
	}
	v.prototype.isReactComponent = {}, v.prototype.setState = function(e, t) {
		if (typeof e != "object" && typeof e != "function" && e != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, e, t, "setState");
	}, v.prototype.forceUpdate = function(e) {
		this.updater.enqueueForceUpdate(this, e, "forceUpdate");
	};
	function y() {}
	y.prototype = v.prototype;
	function b(e, t, n) {
		this.props = e, this.context = t, this.refs = _, this.updater = n || h;
	}
	var x = b.prototype = new y();
	x.constructor = b, g(x, v.prototype), x.isPureReactComponent = !0;
	var S = Array.isArray;
	function C() {}
	var w = {
		H: null,
		A: null,
		T: null,
		S: null
	}, T = Object.prototype.hasOwnProperty;
	function E(e, n, r) {
		var i = r.ref;
		return {
			$$typeof: t,
			type: e,
			key: n,
			ref: i === void 0 ? null : i,
			props: r
		};
	}
	function D(e, t) {
		return E(e.type, t, e.props);
	}
	function O(e) {
		return typeof e == "object" && !!e && e.$$typeof === t;
	}
	function k(e) {
		var t = {
			"=": "=0",
			":": "=2"
		};
		return "$" + e.replace(/[=:]/g, function(e) {
			return t[e];
		});
	}
	var A = /\/+/g;
	function j(e, t) {
		return typeof e == "object" && e && e.key != null ? k("" + e.key) : t.toString(36);
	}
	function M(e) {
		switch (e.status) {
			case "fulfilled": return e.value;
			case "rejected": throw e.reason;
			default: switch (typeof e.status == "string" ? e.then(C, C) : (e.status = "pending", e.then(function(t) {
				e.status === "pending" && (e.status = "fulfilled", e.value = t);
			}, function(t) {
				e.status === "pending" && (e.status = "rejected", e.reason = t);
			})), e.status) {
				case "fulfilled": return e.value;
				case "rejected": throw e.reason;
			}
		}
		throw e;
	}
	function N(e, r, i, a, o) {
		var s = typeof e;
		(s === "undefined" || s === "boolean") && (e = null);
		var c = !1;
		if (e === null) c = !0;
		else switch (s) {
			case "bigint":
			case "string":
			case "number":
				c = !0;
				break;
			case "object": switch (e.$$typeof) {
				case t:
				case n:
					c = !0;
					break;
				case d: return c = e._init, N(c(e._payload), r, i, a, o);
			}
		}
		if (c) return o = o(e), c = a === "" ? "." + j(e, 0) : a, S(o) ? (i = "", c != null && (i = c.replace(A, "$&/") + "/"), N(o, r, i, "", function(e) {
			return e;
		})) : o != null && (O(o) && (o = D(o, i + (o.key == null || e && e.key === o.key ? "" : ("" + o.key).replace(A, "$&/") + "/") + c)), r.push(o)), 1;
		c = 0;
		var l = a === "" ? "." : a + ":";
		if (S(e)) for (var u = 0; u < e.length; u++) a = e[u], s = l + j(a, u), c += N(a, r, i, s, o);
		else if (u = m(e), typeof u == "function") for (e = u.call(e), u = 0; !(a = e.next()).done;) a = a.value, s = l + j(a, u++), c += N(a, r, i, s, o);
		else if (s === "object") {
			if (typeof e.then == "function") return N(M(e), r, i, a, o);
			throw r = String(e), Error("Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.");
		}
		return c;
	}
	function ee(e, t, n) {
		if (e == null) return e;
		var r = [], i = 0;
		return N(e, r, "", "", function(e) {
			return t.call(n, e, i++);
		}), r;
	}
	function te(e) {
		if (e._status === -1) {
			var t = e._result;
			t = t(), t.then(function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 1, e._result = t);
			}, function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 2, e._result = t);
			}), e._status === -1 && (e._status = 0, e._result = t);
		}
		if (e._status === 1) return e._result.default;
		throw e._result;
	}
	var P = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	}, F = {
		map: ee,
		forEach: function(e, t, n) {
			ee(e, function() {
				t.apply(this, arguments);
			}, n);
		},
		count: function(e) {
			var t = 0;
			return ee(e, function() {
				t++;
			}), t;
		},
		toArray: function(e) {
			return ee(e, function(e) {
				return e;
			}) || [];
		},
		only: function(e) {
			if (!O(e)) throw Error("React.Children.only expected to receive a single React element child.");
			return e;
		}
	};
	e.Activity = f, e.Children = F, e.Component = v, e.Fragment = r, e.Profiler = a, e.PureComponent = b, e.StrictMode = i, e.Suspense = l, e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w, e.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(e) {
			return w.H.useMemoCache(e);
		}
	}, e.cache = function(e) {
		return function() {
			return e.apply(null, arguments);
		};
	}, e.cacheSignal = function() {
		return null;
	}, e.cloneElement = function(e, t, n) {
		if (e == null) throw Error("The argument must be a React element, but you passed " + e + ".");
		var r = g({}, e.props), i = e.key;
		if (t != null) for (a in t.key !== void 0 && (i = "" + t.key), t) !T.call(t, a) || a === "key" || a === "__self" || a === "__source" || a === "ref" && t.ref === void 0 || (r[a] = t[a]);
		var a = arguments.length - 2;
		if (a === 1) r.children = n;
		else if (1 < a) {
			for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
			r.children = o;
		}
		return E(e.type, i, r);
	}, e.createContext = function(e) {
		return e = {
			$$typeof: s,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		}, e.Provider = e, e.Consumer = {
			$$typeof: o,
			_context: e
		}, e;
	}, e.createElement = function(e, t, n) {
		var r, i = {}, a = null;
		if (t != null) for (r in t.key !== void 0 && (a = "" + t.key), t) T.call(t, r) && r !== "key" && r !== "__self" && r !== "__source" && (i[r] = t[r]);
		var o = arguments.length - 2;
		if (o === 1) i.children = n;
		else if (1 < o) {
			for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
			i.children = s;
		}
		if (e && e.defaultProps) for (r in o = e.defaultProps, o) i[r] === void 0 && (i[r] = o[r]);
		return E(e, a, i);
	}, e.createRef = function() {
		return { current: null };
	}, e.forwardRef = function(e) {
		return {
			$$typeof: c,
			render: e
		};
	}, e.isValidElement = O, e.lazy = function(e) {
		return {
			$$typeof: d,
			_payload: {
				_status: -1,
				_result: e
			},
			_init: te
		};
	}, e.memo = function(e, t) {
		return {
			$$typeof: u,
			type: e,
			compare: t === void 0 ? null : t
		};
	}, e.startTransition = function(e) {
		var t = w.T, n = {};
		w.T = n;
		try {
			var r = e(), i = w.S;
			i !== null && i(n, r), typeof r == "object" && r && typeof r.then == "function" && r.then(C, P);
		} catch (e) {
			P(e);
		} finally {
			t !== null && n.types !== null && (t.types = n.types), w.T = t;
		}
	}, e.unstable_useCacheRefresh = function() {
		return w.H.useCacheRefresh();
	}, e.use = function(e) {
		return w.H.use(e);
	}, e.useActionState = function(e, t, n) {
		return w.H.useActionState(e, t, n);
	}, e.useCallback = function(e, t) {
		return w.H.useCallback(e, t);
	}, e.useContext = function(e) {
		return w.H.useContext(e);
	}, e.useDebugValue = function() {}, e.useDeferredValue = function(e, t) {
		return w.H.useDeferredValue(e, t);
	}, e.useEffect = function(e, t) {
		return w.H.useEffect(e, t);
	}, e.useEffectEvent = function(e) {
		return w.H.useEffectEvent(e);
	}, e.useId = function() {
		return w.H.useId();
	}, e.useImperativeHandle = function(e, t, n) {
		return w.H.useImperativeHandle(e, t, n);
	}, e.useInsertionEffect = function(e, t) {
		return w.H.useInsertionEffect(e, t);
	}, e.useLayoutEffect = function(e, t) {
		return w.H.useLayoutEffect(e, t);
	}, e.useMemo = function(e, t) {
		return w.H.useMemo(e, t);
	}, e.useOptimistic = function(e, t) {
		return w.H.useOptimistic(e, t);
	}, e.useReducer = function(e, t, n) {
		return w.H.useReducer(e, t, n);
	}, e.useRef = function(e) {
		return w.H.useRef(e);
	}, e.useState = function(e) {
		return w.H.useState(e);
	}, e.useSyncExternalStore = function(e, t, n) {
		return w.H.useSyncExternalStore(e, t, n);
	}, e.useTransition = function() {
		return w.H.useTransition();
	}, e.version = "19.2.6";
})), u = /* @__PURE__ */ o(((e, t) => {
	t.exports = l();
})), d = /* @__PURE__ */ o(((e) => {
	function t(e, t) {
		var n = e.length;
		e.push(t);
		a: for (; 0 < n;) {
			var r = n - 1 >>> 1, a = e[r];
			if (0 < i(a, t)) e[r] = t, e[n] = a, n = r;
			else break a;
		}
	}
	function n(e) {
		return e.length === 0 ? null : e[0];
	}
	function r(e) {
		if (e.length === 0) return null;
		var t = e[0], n = e.pop();
		if (n !== t) {
			e[0] = n;
			a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
				var s = 2 * (r + 1) - 1, c = e[s], l = s + 1, u = e[l];
				if (0 > i(c, n)) l < a && 0 > i(u, c) ? (e[r] = u, e[l] = n, r = l) : (e[r] = c, e[s] = n, r = s);
				else if (l < a && 0 > i(u, n)) e[r] = u, e[l] = n, r = l;
				else break a;
			}
		}
		return t;
	}
	function i(e, t) {
		var n = e.sortIndex - t.sortIndex;
		return n === 0 ? e.id - t.id : n;
	}
	if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
		var a = performance;
		e.unstable_now = function() {
			return a.now();
		};
	} else {
		var o = Date, s = o.now();
		e.unstable_now = function() {
			return o.now() - s;
		};
	}
	var c = [], l = [], u = 1, d = null, f = 3, p = !1, m = !1, h = !1, g = !1, _ = typeof setTimeout == "function" ? setTimeout : null, v = typeof clearTimeout == "function" ? clearTimeout : null, y = typeof setImmediate < "u" ? setImmediate : null;
	function b(e) {
		for (var i = n(l); i !== null;) {
			if (i.callback === null) r(l);
			else if (i.startTime <= e) r(l), i.sortIndex = i.expirationTime, t(c, i);
			else break;
			i = n(l);
		}
	}
	function x(e) {
		if (h = !1, b(e), !m) if (n(c) !== null) m = !0, S || (S = !0, O());
		else {
			var t = n(l);
			t !== null && j(x, t.startTime - e);
		}
	}
	var S = !1, C = -1, w = 5, T = -1;
	function E() {
		return g ? !0 : !(e.unstable_now() - T < w);
	}
	function D() {
		if (g = !1, S) {
			var t = e.unstable_now();
			T = t;
			var i = !0;
			try {
				a: {
					m = !1, h && (h = !1, v(C), C = -1), p = !0;
					var a = f;
					try {
						b: {
							for (b(t), d = n(c); d !== null && !(d.expirationTime > t && E());) {
								var o = d.callback;
								if (typeof o == "function") {
									d.callback = null, f = d.priorityLevel;
									var s = o(d.expirationTime <= t);
									if (t = e.unstable_now(), typeof s == "function") {
										d.callback = s, b(t), i = !0;
										break b;
									}
									d === n(c) && r(c), b(t);
								} else r(c);
								d = n(c);
							}
							if (d !== null) i = !0;
							else {
								var u = n(l);
								u !== null && j(x, u.startTime - t), i = !1;
							}
						}
						break a;
					} finally {
						d = null, f = a, p = !1;
					}
					i = void 0;
				}
			} finally {
				i ? O() : S = !1;
			}
		}
	}
	var O;
	if (typeof y == "function") O = function() {
		y(D);
	};
	else if (typeof MessageChannel < "u") {
		var k = new MessageChannel(), A = k.port2;
		k.port1.onmessage = D, O = function() {
			A.postMessage(null);
		};
	} else O = function() {
		_(D, 0);
	};
	function j(t, n) {
		C = _(function() {
			t(e.unstable_now());
		}, n);
	}
	e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(e) {
		e.callback = null;
	}, e.unstable_forceFrameRate = function(e) {
		0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : w = 0 < e ? Math.floor(1e3 / e) : 5;
	}, e.unstable_getCurrentPriorityLevel = function() {
		return f;
	}, e.unstable_next = function(e) {
		switch (f) {
			case 1:
			case 2:
			case 3:
				var t = 3;
				break;
			default: t = f;
		}
		var n = f;
		f = t;
		try {
			return e();
		} finally {
			f = n;
		}
	}, e.unstable_requestPaint = function() {
		g = !0;
	}, e.unstable_runWithPriority = function(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: e = 3;
		}
		var n = f;
		f = e;
		try {
			return t();
		} finally {
			f = n;
		}
	}, e.unstable_scheduleCallback = function(r, i, a) {
		var o = e.unstable_now();
		switch (typeof a == "object" && a ? (a = a.delay, a = typeof a == "number" && 0 < a ? o + a : o) : a = o, r) {
			case 1:
				var s = -1;
				break;
			case 2:
				s = 250;
				break;
			case 5:
				s = 1073741823;
				break;
			case 4:
				s = 1e4;
				break;
			default: s = 5e3;
		}
		return s = a + s, r = {
			id: u++,
			callback: i,
			priorityLevel: r,
			startTime: a,
			expirationTime: s,
			sortIndex: -1
		}, a > o ? (r.sortIndex = a, t(l, r), n(c) === null && r === n(l) && (h ? (v(C), C = -1) : h = !0, j(x, a - o))) : (r.sortIndex = s, t(c, r), m || p || (m = !0, S || (S = !0, O()))), r;
	}, e.unstable_shouldYield = E, e.unstable_wrapCallback = function(e) {
		var t = f;
		return function() {
			var n = f;
			f = t;
			try {
				return e.apply(this, arguments);
			} finally {
				f = n;
			}
		};
	};
})), f = /* @__PURE__ */ o(((e, t) => {
	t.exports = d();
})), p = /* @__PURE__ */ o(((e) => {
	var t = u();
	function n(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function r() {}
	var i = {
		d: {
			f: r,
			r: function() {
				throw Error(n(522));
			},
			D: r,
			C: r,
			L: r,
			m: r,
			X: r,
			S: r,
			M: r
		},
		p: 0,
		findDOMNode: null
	}, a = Symbol.for("react.portal");
	function o(e, t, n) {
		var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: a,
			key: r == null ? null : "" + r,
			children: e,
			containerInfo: t,
			implementation: n
		};
	}
	var s = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function c(e, t) {
		if (e === "font") return "";
		if (typeof t == "string") return t === "use-credentials" ? t : "";
	}
	e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, e.createPortal = function(e, t) {
		var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) throw Error(n(299));
		return o(e, t, null, r);
	}, e.flushSync = function(e) {
		var t = s.T, n = i.p;
		try {
			if (s.T = null, i.p = 2, e) return e();
		} finally {
			s.T = t, i.p = n, i.d.f();
		}
	}, e.preconnect = function(e, t) {
		typeof e == "string" && (t ? (t = t.crossOrigin, t = typeof t == "string" ? t === "use-credentials" ? t : "" : void 0) : t = null, i.d.C(e, t));
	}, e.prefetchDNS = function(e) {
		typeof e == "string" && i.d.D(e);
	}, e.preinit = function(e, t) {
		if (typeof e == "string" && t && typeof t.as == "string") {
			var n = t.as, r = c(n, t.crossOrigin), a = typeof t.integrity == "string" ? t.integrity : void 0, o = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
			n === "style" ? i.d.S(e, typeof t.precedence == "string" ? t.precedence : void 0, {
				crossOrigin: r,
				integrity: a,
				fetchPriority: o
			}) : n === "script" && i.d.X(e, {
				crossOrigin: r,
				integrity: a,
				fetchPriority: o,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0
			});
		}
	}, e.preinitModule = function(e, t) {
		if (typeof e == "string") if (typeof t == "object" && t) {
			if (t.as == null || t.as === "script") {
				var n = c(t.as, t.crossOrigin);
				i.d.M(e, {
					crossOrigin: n,
					integrity: typeof t.integrity == "string" ? t.integrity : void 0,
					nonce: typeof t.nonce == "string" ? t.nonce : void 0
				});
			}
		} else t ?? i.d.M(e);
	}, e.preload = function(e, t) {
		if (typeof e == "string" && typeof t == "object" && t && typeof t.as == "string") {
			var n = t.as, r = c(n, t.crossOrigin);
			i.d.L(e, n, {
				crossOrigin: r,
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
	}, e.preloadModule = function(e, t) {
		if (typeof e == "string") if (t) {
			var n = c(t.as, t.crossOrigin);
			i.d.m(e, {
				as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
				crossOrigin: n,
				integrity: typeof t.integrity == "string" ? t.integrity : void 0
			});
		} else i.d.m(e);
	}, e.requestFormReset = function(e) {
		i.d.r(e);
	}, e.unstable_batchedUpdates = function(e, t) {
		return e(t);
	}, e.useFormState = function(e, t, n) {
		return s.H.useFormState(e, t, n);
	}, e.useFormStatus = function() {
		return s.H.useHostTransitionStatus();
	}, e.version = "19.2.6";
})), m = /* @__PURE__ */ o(((e, t) => {
	function n() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = p();
})), h = /* @__PURE__ */ o(((e) => {
	var t = f(), n = u(), r = m();
	function i(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function a(e) {
		return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
	}
	function o(e) {
		var t = e, n = e;
		if (e.alternate) for (; t.return;) t = t.return;
		else {
			e = t;
			do
				t = e, t.flags & 4098 && (n = t.return), e = t.return;
			while (e);
		}
		return t.tag === 3 ? n : null;
	}
	function s(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function c(e) {
		if (e.tag === 31) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function l(e) {
		if (o(e) !== e) throw Error(i(188));
	}
	function d(e) {
		var t = e.alternate;
		if (!t) {
			if (t = o(e), t === null) throw Error(i(188));
			return t === e ? e : null;
		}
		for (var n = e, r = t;;) {
			var a = n.return;
			if (a === null) break;
			var s = a.alternate;
			if (s === null) {
				if (r = a.return, r !== null) {
					n = r;
					continue;
				}
				break;
			}
			if (a.child === s.child) {
				for (s = a.child; s;) {
					if (s === n) return l(a), e;
					if (s === r) return l(a), t;
					s = s.sibling;
				}
				throw Error(i(188));
			}
			if (n.return !== r.return) n = a, r = s;
			else {
				for (var c = !1, u = a.child; u;) {
					if (u === n) {
						c = !0, n = a, r = s;
						break;
					}
					if (u === r) {
						c = !0, r = a, n = s;
						break;
					}
					u = u.sibling;
				}
				if (!c) {
					for (u = s.child; u;) {
						if (u === n) {
							c = !0, n = s, r = a;
							break;
						}
						if (u === r) {
							c = !0, r = s, n = a;
							break;
						}
						u = u.sibling;
					}
					if (!c) throw Error(i(189));
				}
			}
			if (n.alternate !== r) throw Error(i(190));
		}
		if (n.tag !== 3) throw Error(i(188));
		return n.stateNode.current === n ? e : t;
	}
	function p(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e;
		for (e = e.child; e !== null;) {
			if (t = p(e), t !== null) return t;
			e = e.sibling;
		}
		return null;
	}
	var h = Object.assign, g = Symbol.for("react.element"), _ = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), S = Symbol.for("react.consumer"), C = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), k = Symbol.for("react.activity"), A = Symbol.for("react.memo_cache_sentinel"), j = Symbol.iterator;
	function M(e) {
		return typeof e != "object" || !e ? null : (e = j && e[j] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var N = Symbol.for("react.client.reference");
	function ee(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.$$typeof === N ? null : e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case y: return "Fragment";
			case x: return "Profiler";
			case b: return "StrictMode";
			case T: return "Suspense";
			case E: return "SuspenseList";
			case k: return "Activity";
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case v: return "Portal";
			case C: return e.displayName || "Context";
			case S: return (e._context.displayName || "Context") + ".Consumer";
			case w:
				var t = e.render;
				return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
			case D: return t = e.displayName || null, t === null ? ee(e.type) || "Memo" : t;
			case O:
				t = e._payload, e = e._init;
				try {
					return ee(e(t));
				} catch {}
		}
		return null;
	}
	var te = Array.isArray, P = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = {
		pending: !1,
		data: null,
		method: null,
		action: null
	}, L = [], ne = -1;
	function re(e) {
		return { current: e };
	}
	function R(e) {
		0 > ne || (e.current = L[ne], L[ne] = null, ne--);
	}
	function z(e, t) {
		ne++, L[ne] = e.current, e.current = t;
	}
	var ie = re(null), ae = re(null), B = re(null), oe = re(null);
	function se(e, t) {
		switch (z(B, t), z(ae, e), z(ie, null), t.nodeType) {
			case 9:
			case 11:
				e = (e = t.documentElement) && (e = e.namespaceURI) ? Hd(e) : 0;
				break;
			default: if (e = t.tagName, t = t.namespaceURI) t = Hd(t), e = Ud(t, e);
			else switch (e) {
				case "svg":
					e = 1;
					break;
				case "math":
					e = 2;
					break;
				default: e = 0;
			}
		}
		R(ie), z(ie, e);
	}
	function V() {
		R(ie), R(ae), R(B);
	}
	function H(e) {
		e.memoizedState !== null && z(oe, e);
		var t = ie.current, n = Ud(t, e.type);
		t !== n && (z(ae, e), z(ie, n));
	}
	function ce(e) {
		ae.current === e && (R(ie), R(ae)), oe.current === e && (R(oe), $f._currentValue = I);
	}
	var le, ue;
	function de(e) {
		if (le === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			le = t && t[1] || "", ue = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
		}
		return "\n" + le + e + ue;
	}
	var fe = !1;
	function pe(e, t) {
		if (!e || fe) return "";
		fe = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var r = { DetermineComponentFrameRoot: function() {
				try {
					if (t) {
						var n = function() {
							throw Error();
						};
						if (Object.defineProperty(n.prototype, "props", { set: function() {
							throw Error();
						} }), typeof Reflect == "object" && Reflect.construct) {
							try {
								Reflect.construct(n, []);
							} catch (e) {
								var r = e;
							}
							Reflect.construct(e, [], n);
						} else {
							try {
								n.call();
							} catch (e) {
								r = e;
							}
							e.call(n.prototype);
						}
					} else {
						try {
							throw Error();
						} catch (e) {
							r = e;
						}
						(n = e()) && typeof n.catch == "function" && n.catch(function() {});
					}
				} catch (e) {
					if (e && r && typeof e.stack == "string") return [e.stack, r.stack];
				}
				return [null, null];
			} };
			r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
			i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
			var a = r.DetermineComponentFrameRoot(), o = a[0], s = a[1];
			if (o && s) {
				var c = o.split("\n"), l = s.split("\n");
				for (i = r = 0; r < c.length && !c[r].includes("DetermineComponentFrameRoot");) r++;
				for (; i < l.length && !l[i].includes("DetermineComponentFrameRoot");) i++;
				if (r === c.length || i === l.length) for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i];) i--;
				for (; 1 <= r && 0 <= i; r--, i--) if (c[r] !== l[i]) {
					if (r !== 1 || i !== 1) do
						if (r--, i--, 0 > i || c[r] !== l[i]) {
							var u = "\n" + c[r].replace(" at new ", " at ");
							return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
						}
					while (1 <= r && 0 <= i);
					break;
				}
			}
		} finally {
			fe = !1, Error.prepareStackTrace = n;
		}
		return (n = e ? e.displayName || e.name : "") ? de(n) : "";
	}
	function me(e, t) {
		switch (e.tag) {
			case 26:
			case 27:
			case 5: return de(e.type);
			case 16: return de("Lazy");
			case 13: return e.child !== t && t !== null ? de("Suspense Fallback") : de("Suspense");
			case 19: return de("SuspenseList");
			case 0:
			case 15: return pe(e.type, !1);
			case 11: return pe(e.type.render, !1);
			case 1: return pe(e.type, !0);
			case 31: return de("Activity");
			default: return "";
		}
	}
	function he(e) {
		try {
			var t = "", n = null;
			do
				t += me(e, n), n = e, e = e.return;
			while (e);
			return t;
		} catch (e) {
			return "\nError generating stack: " + e.message + "\n" + e.stack;
		}
	}
	var U = Object.prototype.hasOwnProperty, ge = t.unstable_scheduleCallback, W = t.unstable_cancelCallback, _e = t.unstable_shouldYield, ve = t.unstable_requestPaint, ye = t.unstable_now, be = t.unstable_getCurrentPriorityLevel, xe = t.unstable_ImmediatePriority, Se = t.unstable_UserBlockingPriority, Ce = t.unstable_NormalPriority, we = t.unstable_LowPriority, Te = t.unstable_IdlePriority, Ee = t.log, De = t.unstable_setDisableYieldValue, Oe = null, ke = null;
	function Ae(e) {
		if (typeof Ee == "function" && De(e), ke && typeof ke.setStrictMode == "function") try {
			ke.setStrictMode(Oe, e);
		} catch {}
	}
	var je = Math.clz32 ? Math.clz32 : Pe, Me = Math.log, Ne = Math.LN2;
	function Pe(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (Me(e) / Ne | 0) | 0;
	}
	var Fe = 256, Ie = 262144, Le = 4194304;
	function Re(e) {
		var t = e & 42;
		if (t !== 0) return t;
		switch (e & -e) {
			case 1: return 1;
			case 2: return 2;
			case 4: return 4;
			case 8: return 8;
			case 16: return 16;
			case 32: return 32;
			case 64: return 64;
			case 128: return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072: return e & 261888;
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return e & 3932160;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return e & 62914560;
			case 67108864: return 67108864;
			case 134217728: return 134217728;
			case 268435456: return 268435456;
			case 536870912: return 536870912;
			case 1073741824: return 0;
			default: return e;
		}
	}
	function ze(e, t, n) {
		var r = e.pendingLanes;
		if (r === 0) return 0;
		var i = 0, a = e.suspendedLanes, o = e.pingedLanes;
		e = e.warmLanes;
		var s = r & 134217727;
		return s === 0 ? (s = r & ~a, s === 0 ? o === 0 ? n || (n = r & ~e, n !== 0 && (i = Re(n))) : i = Re(o) : i = Re(s)) : (r = s & ~a, r === 0 ? (o &= s, o === 0 ? n || (n = s & ~e, n !== 0 && (i = Re(n))) : i = Re(o)) : i = Re(r)), i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, n = t & -t, a >= n || a === 32 && n & 4194048) ? t : i;
	}
	function Be(e, t) {
		return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
	}
	function Ve(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64: return t + 250;
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
			case 2097152: return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824: return -1;
			default: return -1;
		}
	}
	function He() {
		var e = Le;
		return Le <<= 1, !(Le & 62914560) && (Le = 4194304), e;
	}
	function Ue(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function We(e, t) {
		e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
	}
	function Ge(e, t, n, r, i, a) {
		var o = e.pendingLanes;
		e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
		var s = e.entanglements, c = e.expirationTimes, l = e.hiddenUpdates;
		for (n = o & ~n; 0 < n;) {
			var u = 31 - je(n), d = 1 << u;
			s[u] = 0, c[u] = -1;
			var f = l[u];
			if (f !== null) for (l[u] = null, u = 0; u < f.length; u++) {
				var p = f[u];
				p !== null && (p.lane &= -536870913);
			}
			n &= ~d;
		}
		r !== 0 && Ke(e, r, 0), a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t));
	}
	function Ke(e, t, n) {
		e.pendingLanes |= t, e.suspendedLanes &= ~t;
		var r = 31 - je(t);
		e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930;
	}
	function qe(e, t) {
		var n = e.entangledLanes |= t;
		for (e = e.entanglements; n;) {
			var r = 31 - je(n), i = 1 << r;
			i & t | e[r] & t && (e[r] |= t), n &= ~i;
		}
	}
	function Je(e, t) {
		var n = t & -t;
		return n = n & 42 ? 1 : Ye(n), (n & (e.suspendedLanes | t)) === 0 ? n : 0;
	}
	function Ye(e) {
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
			default: e = 0;
		}
		return e;
	}
	function Xe(e) {
		return e &= -e, 2 < e ? 8 < e ? e & 134217727 ? 32 : 268435456 : 8 : 2;
	}
	function Ze() {
		var e = F.p;
		return e === 0 ? (e = window.event, e === void 0 ? 32 : hp(e.type)) : e;
	}
	function Qe(e, t) {
		var n = F.p;
		try {
			return F.p = e, t();
		} finally {
			F.p = n;
		}
	}
	var $e = Math.random().toString(36).slice(2), et = "__reactFiber$" + $e, tt = "__reactProps$" + $e, nt = "__reactContainer$" + $e, rt = "__reactEvents$" + $e, it = "__reactListeners$" + $e, at = "__reactHandles$" + $e, ot = "__reactResources$" + $e, st = "__reactMarker$" + $e;
	function ct(e) {
		delete e[et], delete e[tt], delete e[rt], delete e[it], delete e[at];
	}
	function lt(e) {
		var t = e[et];
		if (t) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[nt] || n[et]) {
				if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ff(e); e !== null;) {
					if (n = e[et]) return n;
					e = ff(e);
				}
				return t;
			}
			e = n, n = e.parentNode;
		}
		return null;
	}
	function ut(e) {
		if (e = e[et] || e[nt]) {
			var t = e.tag;
			if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
		}
		return null;
	}
	function dt(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
		throw Error(i(33));
	}
	function ft(e) {
		var t = e[ot];
		return t ||= e[ot] = {
			hoistableStyles: /* @__PURE__ */ new Map(),
			hoistableScripts: /* @__PURE__ */ new Map()
		}, t;
	}
	function pt(e) {
		e[st] = !0;
	}
	var mt = /* @__PURE__ */ new Set(), ht = {};
	function gt(e, t) {
		_t(e, t), _t(e + "Capture", t);
	}
	function _t(e, t) {
		for (ht[e] = t, e = 0; e < t.length; e++) mt.add(t[e]);
	}
	var vt = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), yt = {}, bt = {};
	function xt(e) {
		return U.call(bt, e) ? !0 : U.call(yt, e) ? !1 : vt.test(e) ? bt[e] = !0 : (yt[e] = !0, !1);
	}
	function St(e, t, n) {
		if (xt(t)) if (n === null) e.removeAttribute(t);
		else {
			switch (typeof n) {
				case "undefined":
				case "function":
				case "symbol":
					e.removeAttribute(t);
					return;
				case "boolean":
					var r = t.toLowerCase().slice(0, 5);
					if (r !== "data-" && r !== "aria-") {
						e.removeAttribute(t);
						return;
					}
			}
			e.setAttribute(t, "" + n);
		}
	}
	function Ct(e, t, n) {
		if (n === null) e.removeAttribute(t);
		else {
			switch (typeof n) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(t);
					return;
			}
			e.setAttribute(t, "" + n);
		}
	}
	function wt(e, t, n, r) {
		if (r === null) e.removeAttribute(n);
		else {
			switch (typeof r) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(n);
					return;
			}
			e.setAttributeNS(t, n, "" + r);
		}
	}
	function Tt(e) {
		switch (typeof e) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined": return e;
			case "object": return e;
			default: return "";
		}
	}
	function Et(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
	}
	function Dt(e, t, n) {
		var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
		if (!e.hasOwnProperty(t) && r !== void 0 && typeof r.get == "function" && typeof r.set == "function") {
			var i = r.get, a = r.set;
			return Object.defineProperty(e, t, {
				configurable: !0,
				get: function() {
					return i.call(this);
				},
				set: function(e) {
					n = "" + e, a.call(this, e);
				}
			}), Object.defineProperty(e, t, { enumerable: r.enumerable }), {
				getValue: function() {
					return n;
				},
				setValue: function(e) {
					n = "" + e;
				},
				stopTracking: function() {
					e._valueTracker = null, delete e[t];
				}
			};
		}
	}
	function Ot(e) {
		if (!e._valueTracker) {
			var t = Et(e) ? "checked" : "value";
			e._valueTracker = Dt(e, t, "" + e[t]);
		}
	}
	function kt(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(), r = "";
		return e && (r = Et(e) ? e.checked ? "true" : "false" : e.value), e = r, e === n ? !1 : (t.setValue(e), !0);
	}
	function G(e) {
		if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	var At = /[\n"\\]/g;
	function jt(e) {
		return e.replace(At, function(e) {
			return "\\" + e.charCodeAt(0).toString(16) + " ";
		});
	}
	function Mt(e, t, n, r, i, a, o, s) {
		e.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.type = o : e.removeAttribute("type"), t == null ? o !== "submit" && o !== "reset" || e.removeAttribute("value") : o === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Tt(t)) : e.value !== "" + Tt(t) && (e.value = "" + Tt(t)), t == null ? n == null ? r != null && e.removeAttribute("value") : Pt(e, o, Tt(n)) : Pt(e, o, Tt(t)), i == null && a != null && (e.defaultChecked = !!a), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + Tt(s) : e.removeAttribute("name");
	}
	function Nt(e, t, n, r, i, a, o, s) {
		if (a != null && typeof a != "function" && typeof a != "symbol" && typeof a != "boolean" && (e.type = a), t != null || n != null) {
			if (!(a !== "submit" && a !== "reset" || t != null)) {
				Ot(e);
				return;
			}
			n = n == null ? "" : "" + Tt(n), t = t == null ? n : "" + Tt(t), s || t === e.value || (e.value = t), e.defaultValue = t;
		}
		r ??= i, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = s ? e.checked : !!r, e.defaultChecked = !!r, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (e.name = o), Ot(e);
	}
	function Pt(e, t, n) {
		t === "number" && G(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
	}
	function Ft(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
			for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
		} else {
			for (n = "" + Tt(n), t = null, i = 0; i < e.length; i++) {
				if (e[i].value === n) {
					e[i].selected = !0, r && (e[i].defaultSelected = !0);
					return;
				}
				t !== null || e[i].disabled || (t = e[i]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function It(e, t, n) {
		if (t != null && (t = "" + Tt(t), t !== e.value && (e.value = t), n == null)) {
			e.defaultValue !== t && (e.defaultValue = t);
			return;
		}
		e.defaultValue = n == null ? "" : "" + Tt(n);
	}
	function Lt(e, t, n, r) {
		if (t == null) {
			if (r != null) {
				if (n != null) throw Error(i(92));
				if (te(r)) {
					if (1 < r.length) throw Error(i(93));
					r = r[0];
				}
				n = r;
			}
			n ??= "", t = n;
		}
		n = Tt(t), e.defaultValue = n, r = e.textContent, r === n && r !== "" && r !== null && (e.value = r), Ot(e);
	}
	function Rt(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var zt = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
	function Bt(e, t, n) {
		var r = t.indexOf("--") === 0;
		n == null || typeof n == "boolean" || n === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : typeof n != "number" || n === 0 || zt.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
	}
	function Vt(e, t, n) {
		if (t != null && typeof t != "object") throw Error(i(62));
		if (e = e.style, n != null) {
			for (var r in n) !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "");
			for (var a in t) r = t[a], t.hasOwnProperty(a) && n[a] !== r && Bt(e, a, r);
		} else for (var o in t) t.hasOwnProperty(o) && Bt(e, o, t[o]);
	}
	function Ht(e) {
		if (e.indexOf("-") === -1) return !1;
		switch (e) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": return !1;
			default: return !0;
		}
	}
	var Ut = new Map([
		["acceptCharset", "accept-charset"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"],
		["crossOrigin", "crossorigin"],
		["accentHeight", "accent-height"],
		["alignmentBaseline", "alignment-baseline"],
		["arabicForm", "arabic-form"],
		["baselineShift", "baseline-shift"],
		["capHeight", "cap-height"],
		["clipPath", "clip-path"],
		["clipRule", "clip-rule"],
		["colorInterpolation", "color-interpolation"],
		["colorInterpolationFilters", "color-interpolation-filters"],
		["colorProfile", "color-profile"],
		["colorRendering", "color-rendering"],
		["dominantBaseline", "dominant-baseline"],
		["enableBackground", "enable-background"],
		["fillOpacity", "fill-opacity"],
		["fillRule", "fill-rule"],
		["floodColor", "flood-color"],
		["floodOpacity", "flood-opacity"],
		["fontFamily", "font-family"],
		["fontSize", "font-size"],
		["fontSizeAdjust", "font-size-adjust"],
		["fontStretch", "font-stretch"],
		["fontStyle", "font-style"],
		["fontVariant", "font-variant"],
		["fontWeight", "font-weight"],
		["glyphName", "glyph-name"],
		["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
		["glyphOrientationVertical", "glyph-orientation-vertical"],
		["horizAdvX", "horiz-adv-x"],
		["horizOriginX", "horiz-origin-x"],
		["imageRendering", "image-rendering"],
		["letterSpacing", "letter-spacing"],
		["lightingColor", "lighting-color"],
		["markerEnd", "marker-end"],
		["markerMid", "marker-mid"],
		["markerStart", "marker-start"],
		["overlinePosition", "overline-position"],
		["overlineThickness", "overline-thickness"],
		["paintOrder", "paint-order"],
		["panose-1", "panose-1"],
		["pointerEvents", "pointer-events"],
		["renderingIntent", "rendering-intent"],
		["shapeRendering", "shape-rendering"],
		["stopColor", "stop-color"],
		["stopOpacity", "stop-opacity"],
		["strikethroughPosition", "strikethrough-position"],
		["strikethroughThickness", "strikethrough-thickness"],
		["strokeDasharray", "stroke-dasharray"],
		["strokeDashoffset", "stroke-dashoffset"],
		["strokeLinecap", "stroke-linecap"],
		["strokeLinejoin", "stroke-linejoin"],
		["strokeMiterlimit", "stroke-miterlimit"],
		["strokeOpacity", "stroke-opacity"],
		["strokeWidth", "stroke-width"],
		["textAnchor", "text-anchor"],
		["textDecoration", "text-decoration"],
		["textRendering", "text-rendering"],
		["transformOrigin", "transform-origin"],
		["underlinePosition", "underline-position"],
		["underlineThickness", "underline-thickness"],
		["unicodeBidi", "unicode-bidi"],
		["unicodeRange", "unicode-range"],
		["unitsPerEm", "units-per-em"],
		["vAlphabetic", "v-alphabetic"],
		["vHanging", "v-hanging"],
		["vIdeographic", "v-ideographic"],
		["vMathematical", "v-mathematical"],
		["vectorEffect", "vector-effect"],
		["vertAdvY", "vert-adv-y"],
		["vertOriginX", "vert-origin-x"],
		["vertOriginY", "vert-origin-y"],
		["wordSpacing", "word-spacing"],
		["writingMode", "writing-mode"],
		["xmlnsXlink", "xmlns:xlink"],
		["xHeight", "x-height"]
	]), Wt = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function Gt(e) {
		return Wt.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
	}
	function Kt() {}
	var qt = null;
	function Jt(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
	}
	var Yt = null, Xt = null;
	function Zt(e) {
		var t = ut(e);
		if (t && (e = t.stateNode)) {
			var n = e[tt] || null;
			a: switch (e = t.stateNode, t.type) {
				case "input":
					if (Mt(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
						for (n = e; n.parentNode;) n = n.parentNode;
						for (n = n.querySelectorAll("input[name=\"" + jt("" + t) + "\"][type=\"radio\"]"), t = 0; t < n.length; t++) {
							var r = n[t];
							if (r !== e && r.form === e.form) {
								var a = r[tt] || null;
								if (!a) throw Error(i(90));
								Mt(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
							}
						}
						for (t = 0; t < n.length; t++) r = n[t], r.form === e.form && kt(r);
					}
					break a;
				case "textarea":
					It(e, n.value, n.defaultValue);
					break a;
				case "select": t = n.value, t != null && Ft(e, !!n.multiple, t, !1);
			}
		}
	}
	var Qt = !1;
	function $t(e, t, n) {
		if (Qt) return e(t, n);
		Qt = !0;
		try {
			return e(t);
		} finally {
			if (Qt = !1, (Yt !== null || Xt !== null) && (vu(), Yt && (t = Yt, e = Xt, Xt = Yt = null, Zt(t), e))) for (t = 0; t < e.length; t++) Zt(e[t]);
		}
	}
	function en(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var r = n[tt] || null;
		if (r === null) return null;
		n = r[t];
		a: switch (t) {
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
				(r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
				break a;
			default: e = !1;
		}
		if (e) return null;
		if (n && typeof n != "function") throw Error(i(231, t, typeof n));
		return n;
	}
	var tn = !(typeof window > "u" || window.document === void 0 || window.document.createElement === void 0), nn = !1;
	if (tn) try {
		var rn = {};
		Object.defineProperty(rn, "passive", { get: function() {
			nn = !0;
		} }), window.addEventListener("test", rn, rn), window.removeEventListener("test", rn, rn);
	} catch {
		nn = !1;
	}
	var an = null, on = null, sn = null;
	function cn() {
		if (sn) return sn;
		var e, t = on, n = t.length, r, i = "value" in an ? an.value : an.textContent, a = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
		return sn = i.slice(e, 1 < r ? 1 - r : void 0);
	}
	function ln(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
	}
	function un() {
		return !0;
	}
	function dn() {
		return !1;
	}
	function fn(e) {
		function t(t, n, r, i, a) {
			for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
			return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? un : dn, this.isPropagationStopped = dn, this;
		}
		return h(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = un);
			},
			stopPropagation: function() {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = un);
			},
			persist: function() {},
			isPersistent: un
		}), t;
	}
	var pn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, mn = fn(pn), hn = h({}, pn, {
		view: 0,
		detail: 0
	}), gn = fn(hn), _n, vn, yn, bn = h({}, hn, {
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
		getModifierState: jn,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== yn && (yn && e.type === "mousemove" ? (_n = e.screenX - yn.screenX, vn = e.screenY - yn.screenY) : vn = _n = 0, yn = e), _n);
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : vn;
		}
	}), xn = fn(bn), Sn = fn(h({}, bn, { dataTransfer: 0 })), Cn = fn(h({}, hn, { relatedTarget: 0 })), wn = fn(h({}, pn, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Tn = fn(h({}, pn, { clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} })), En = fn(h({}, pn, { data: 0 })), Dn = {
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
	}, On = {
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
	}, kn = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function An(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = kn[e]) ? !!t[e] : !1;
	}
	function jn() {
		return An;
	}
	var Mn = fn(h({}, hn, {
		key: function(e) {
			if (e.key) {
				var t = Dn[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress" ? (e = ln(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? On[e.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: jn,
		charCode: function(e) {
			return e.type === "keypress" ? ln(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress" ? ln(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		}
	})), Nn = fn(h({}, bn, {
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
	})), Pn = fn(h({}, hn, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: jn
	})), Fn = fn(h({}, pn, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), In = fn(h({}, bn, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), Ln = fn(h({}, pn, {
		newState: 0,
		oldState: 0
	})), Rn = [
		9,
		13,
		27,
		32
	], zn = tn && "CompositionEvent" in window, Bn = null;
	tn && "documentMode" in document && (Bn = document.documentMode);
	var Vn = tn && "TextEvent" in window && !Bn, Hn = tn && (!zn || Bn && 8 < Bn && 11 >= Bn), Un = " ", Wn = !1;
	function Gn(e, t) {
		switch (e) {
			case "keyup": return Rn.indexOf(t.keyCode) !== -1;
			case "keydown": return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function Kn(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
	}
	var qn = !1;
	function Jn(e, t) {
		switch (e) {
			case "compositionend": return Kn(t);
			case "keypress": return t.which === 32 ? (Wn = !0, Un) : null;
			case "textInput": return e = t.data, e === Un && Wn ? null : e;
			default: return null;
		}
	}
	function Yn(e, t) {
		if (qn) return e === "compositionend" || !zn && Gn(e, t) ? (e = cn(), sn = on = an = null, qn = !1, e) : null;
		switch (e) {
			case "paste": return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend": return Hn && t.locale !== "ko" ? null : t.data;
			default: return null;
		}
	}
	var Xn = {
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
	function Zn(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!Xn[e.type] : t === "textarea";
	}
	function Qn(e, t, n, r) {
		Yt ? Xt ? Xt.push(r) : Xt = [r] : Yt = r, t = Ed(t, "onChange"), 0 < t.length && (n = new mn("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var $n = null, er = null;
	function tr(e) {
		vd(e, 0);
	}
	function nr(e) {
		if (kt(dt(e))) return e;
	}
	function rr(e, t) {
		if (e === "change") return t;
	}
	var ir = !1;
	if (tn) {
		var ar;
		if (tn) {
			var or = "oninput" in document;
			if (!or) {
				var sr = document.createElement("div");
				sr.setAttribute("oninput", "return;"), or = typeof sr.oninput == "function";
			}
			ar = or;
		} else ar = !1;
		ir = ar && (!document.documentMode || 9 < document.documentMode);
	}
	function cr() {
		$n && ($n.detachEvent("onpropertychange", lr), er = $n = null);
	}
	function lr(e) {
		if (e.propertyName === "value" && nr(er)) {
			var t = [];
			Qn(t, er, e, Jt(e)), $t(tr, t);
		}
	}
	function ur(e, t, n) {
		e === "focusin" ? (cr(), $n = t, er = n, $n.attachEvent("onpropertychange", lr)) : e === "focusout" && cr();
	}
	function dr(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return nr(er);
	}
	function fr(e, t) {
		if (e === "click") return nr(t);
	}
	function pr(e, t) {
		if (e === "input" || e === "change") return nr(t);
	}
	function mr(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var hr = typeof Object.is == "function" ? Object.is : mr;
	function gr(e, t) {
		if (hr(e, t)) return !0;
		if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
		var n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var i = n[r];
			if (!U.call(t, i) || !hr(e[i], t[i])) return !1;
		}
		return !0;
	}
	function _r(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e;
	}
	function vr(e, t) {
		var n = _r(e);
		e = 0;
		for (var r; n;) {
			if (n.nodeType === 3) {
				if (r = e + n.textContent.length, e <= t && r >= t) return {
					node: n,
					offset: t - e
				};
				e = r;
			}
			a: {
				for (; n;) {
					if (n.nextSibling) {
						n = n.nextSibling;
						break a;
					}
					n = n.parentNode;
				}
				n = void 0;
			}
			n = _r(n);
		}
	}
	function yr(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? yr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
	}
	function br(e) {
		e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
		for (var t = G(e.document); t instanceof e.HTMLIFrameElement;) {
			try {
				var n = typeof t.contentWindow.location.href == "string";
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = G(e.document);
		}
		return t;
	}
	function xr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
	}
	var Sr = tn && "documentMode" in document && 11 >= document.documentMode, Cr = null, wr = null, Tr = null, Er = !1;
	function K(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		Er || Cr == null || Cr !== G(r) || (r = Cr, "selectionStart" in r && xr(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), Tr && gr(Tr, r) || (Tr = r, r = Ed(wr, "onSelect"), 0 < r.length && (t = new mn("onSelect", "select", null, t, n), e.push({
			event: t,
			listeners: r
		}), t.target = Cr)));
	}
	function Dr(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
	}
	var Or = {
		animationend: Dr("Animation", "AnimationEnd"),
		animationiteration: Dr("Animation", "AnimationIteration"),
		animationstart: Dr("Animation", "AnimationStart"),
		transitionrun: Dr("Transition", "TransitionRun"),
		transitionstart: Dr("Transition", "TransitionStart"),
		transitioncancel: Dr("Transition", "TransitionCancel"),
		transitionend: Dr("Transition", "TransitionEnd")
	}, kr = {}, Ar = {};
	tn && (Ar = document.createElement("div").style, "AnimationEvent" in window || (delete Or.animationend.animation, delete Or.animationiteration.animation, delete Or.animationstart.animation), "TransitionEvent" in window || delete Or.transitionend.transition);
	function jr(e) {
		if (kr[e]) return kr[e];
		if (!Or[e]) return e;
		var t = Or[e], n;
		for (n in t) if (t.hasOwnProperty(n) && n in Ar) return kr[e] = t[n];
		return e;
	}
	var Mr = jr("animationend"), Nr = jr("animationiteration"), Pr = jr("animationstart"), Fr = jr("transitionrun"), Ir = jr("transitionstart"), Lr = jr("transitioncancel"), Rr = jr("transitionend"), zr = /* @__PURE__ */ new Map(), Br = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	Br.push("scrollEnd");
	function Vr(e, t) {
		zr.set(e, t), gt(t, [e]);
	}
	var Hr = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	}, Ur = [], Wr = 0, Gr = 0;
	function Kr() {
		for (var e = Wr, t = Gr = Wr = 0; t < e;) {
			var n = Ur[t];
			Ur[t++] = null;
			var r = Ur[t];
			Ur[t++] = null;
			var i = Ur[t];
			Ur[t++] = null;
			var a = Ur[t];
			if (Ur[t++] = null, r !== null && i !== null) {
				var o = r.pending;
				o === null ? i.next = i : (i.next = o.next, o.next = i), r.pending = i;
			}
			a !== 0 && Yr(n, i, a);
		}
	}
	function q(e, t, n, r) {
		Ur[Wr++] = e, Ur[Wr++] = t, Ur[Wr++] = n, Ur[Wr++] = r, Gr |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
	}
	function qr(e, t, n, r) {
		return q(e, t, n, r), Xr(e);
	}
	function Jr(e, t) {
		return q(e, null, null, t), Xr(e);
	}
	function Yr(e, t, n) {
		e.lanes |= n;
		var r = e.alternate;
		r !== null && (r.lanes |= n);
		for (var i = !1, a = e.return; a !== null;) a.childLanes |= n, r = a.alternate, r !== null && (r.childLanes |= n), a.tag === 22 && (e = a.stateNode, e === null || e._visibility & 1 || (i = !0)), e = a, a = a.return;
		return e.tag === 3 ? (a = e.stateNode, i && t !== null && (i = 31 - je(n), e = a.hiddenUpdates, r = e[i], r === null ? e[i] = [t] : r.push(t), t.lane = n | 536870912), a) : null;
	}
	function Xr(e) {
		if (50 < lu) throw lu = 0, uu = null, Error(i(185));
		for (var t = e.return; t !== null;) e = t, t = e.return;
		return e.tag === 3 ? e.stateNode : null;
	}
	var Zr = {};
	function Qr(e, t, n, r) {
		this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
	}
	function $r(e, t, n, r) {
		return new Qr(e, t, n, r);
	}
	function ei(e) {
		return e = e.prototype, !(!e || !e.isReactComponent);
	}
	function ti(e, t) {
		var n = e.alternate;
		return n === null ? (n = $r(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
	}
	function ni(e, t) {
		e.flags &= 65011714;
		var n = e.alternate;
		return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}), e;
	}
	function ri(e, t, n, r, a, o) {
		var s = 0;
		if (r = e, typeof e == "function") ei(e) && (s = 1);
		else if (typeof e == "string") s = Wf(e, n, ie.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
		else a: switch (e) {
			case k: return e = $r(31, n, t, a), e.elementType = k, e.lanes = o, e;
			case y: return ii(n.children, a, o, t);
			case b:
				s = 8, a |= 24;
				break;
			case x: return e = $r(12, n, t, a | 2), e.elementType = x, e.lanes = o, e;
			case T: return e = $r(13, n, t, a), e.elementType = T, e.lanes = o, e;
			case E: return e = $r(19, n, t, a), e.elementType = E, e.lanes = o, e;
			default:
				if (typeof e == "object" && e) switch (e.$$typeof) {
					case C:
						s = 10;
						break a;
					case S:
						s = 9;
						break a;
					case w:
						s = 11;
						break a;
					case D:
						s = 14;
						break a;
					case O:
						s = 16, r = null;
						break a;
				}
				s = 29, n = Error(i(130, e === null ? "null" : typeof e, "")), r = null;
		}
		return t = $r(s, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
	}
	function ii(e, t, n, r) {
		return e = $r(7, e, r, t), e.lanes = n, e;
	}
	function ai(e, t, n) {
		return e = $r(6, e, null, t), e.lanes = n, e;
	}
	function oi(e) {
		var t = $r(18, null, null, 0);
		return t.stateNode = e, t;
	}
	function si(e, t, n) {
		return t = $r(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t;
	}
	var ci = /* @__PURE__ */ new WeakMap();
	function li(e, t) {
		if (typeof e == "object" && e) {
			var n = ci.get(e);
			return n === void 0 ? (t = {
				value: e,
				source: t,
				stack: he(t)
			}, ci.set(e, t), t) : n;
		}
		return {
			value: e,
			source: t,
			stack: he(t)
		};
	}
	var ui = [], di = 0, fi = null, pi = 0, mi = [], hi = 0, gi = null, _i = 1, vi = "";
	function yi(e, t) {
		ui[di++] = pi, ui[di++] = fi, fi = e, pi = t;
	}
	function bi(e, t, n) {
		mi[hi++] = _i, mi[hi++] = vi, mi[hi++] = gi, gi = e;
		var r = _i;
		e = vi;
		var i = 32 - je(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - je(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, _i = 1 << 32 - je(t) + i | n << i | r, vi = a + e;
		} else _i = 1 << a | n << i | r, vi = e;
	}
	function xi(e) {
		e.return !== null && (yi(e, 1), bi(e, 1, 0));
	}
	function Si(e) {
		for (; e === fi;) fi = ui[--di], ui[di] = null, pi = ui[--di], ui[di] = null;
		for (; e === gi;) gi = mi[--hi], mi[hi] = null, vi = mi[--hi], mi[hi] = null, _i = mi[--hi], mi[hi] = null;
	}
	function Ci(e, t) {
		mi[hi++] = _i, mi[hi++] = vi, mi[hi++] = gi, _i = t.id, vi = t.overflow, gi = e;
	}
	var wi = null, J = null, Ti = !1, Ei = null, Di = !1, Oi = Error(i(519));
	function ki(e) {
		throw Fi(li(Error(i(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), e)), Oi;
	}
	function Ai(e) {
		var t = e.stateNode, n = e.type, r = e.memoizedProps;
		switch (t[et] = e, t[tt] = r, n) {
			case "dialog":
				yd("cancel", t), yd("close", t);
				break;
			case "iframe":
			case "object":
			case "embed":
				yd("load", t);
				break;
			case "video":
			case "audio":
				for (n = 0; n < gd.length; n++) yd(gd[n], t);
				break;
			case "source":
				yd("error", t);
				break;
			case "img":
			case "image":
			case "link":
				yd("error", t), yd("load", t);
				break;
			case "details":
				yd("toggle", t);
				break;
			case "input":
				yd("invalid", t), Nt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
				break;
			case "select":
				yd("invalid", t);
				break;
			case "textarea": yd("invalid", t), Lt(t, r.value, r.defaultValue, r.children);
		}
		n = r.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || !0 === r.suppressHydrationWarning || Md(t.textContent, n) ? (r.popover != null && (yd("beforetoggle", t), yd("toggle", t)), r.onScroll != null && yd("scroll", t), r.onScrollEnd != null && yd("scrollend", t), r.onClick != null && (t.onclick = Kt), t = !0) : t = !1, t || ki(e, !0);
	}
	function ji(e) {
		for (wi = e.return; wi;) switch (wi.tag) {
			case 5:
			case 31:
			case 13:
				Di = !1;
				return;
			case 27:
			case 3:
				Di = !0;
				return;
			default: wi = wi.return;
		}
	}
	function Mi(e) {
		if (e !== wi) return !1;
		if (!Ti) return ji(e), Ti = !0, !1;
		var t = e.tag, n;
		if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Wd(e.type, e.memoizedProps)), n = !n), n && J && ki(e), ji(e), t === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			J = df(e);
		} else if (t === 31) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			J = df(e);
		} else t === 27 ? (t = J, Qd(e.type) ? (e = uf, uf = null, J = e) : J = t) : J = wi ? lf(e.stateNode.nextSibling) : null;
		return !0;
	}
	function Ni() {
		J = wi = null, Ti = !1;
	}
	function Pi() {
		var e = Ei;
		return e !== null && (Yl === null ? Yl = e : Yl.push.apply(Yl, e), Ei = null), e;
	}
	function Fi(e) {
		Ei === null ? Ei = [e] : Ei.push(e);
	}
	var Ii = re(null), Li = null, Ri = null;
	function zi(e, t, n) {
		z(Ii, t._currentValue), t._currentValue = n;
	}
	function Bi(e) {
		e._currentValue = Ii.current, R(Ii);
	}
	function Vi(e, t, n) {
		for (; e !== null;) {
			var r = e.alternate;
			if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
			e = e.return;
		}
	}
	function Hi(e, t, n, r) {
		var a = e.child;
		for (a !== null && (a.return = e); a !== null;) {
			var o = a.dependencies;
			if (o !== null) {
				var s = a.child;
				o = o.firstContext;
				a: for (; o !== null;) {
					var c = o;
					o = a;
					for (var l = 0; l < t.length; l++) if (c.context === t[l]) {
						o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), Vi(o.return, n, e), r || (s = null);
						break a;
					}
					o = c.next;
				}
			} else if (a.tag === 18) {
				if (s = a.return, s === null) throw Error(i(341));
				s.lanes |= n, o = s.alternate, o !== null && (o.lanes |= n), Vi(s, n, e), s = null;
			} else s = a.child;
			if (s !== null) s.return = a;
			else for (s = a; s !== null;) {
				if (s === e) {
					s = null;
					break;
				}
				if (a = s.sibling, a !== null) {
					a.return = s.return, s = a;
					break;
				}
				s = s.return;
			}
			a = s;
		}
	}
	function Ui(e, t, n, r) {
		e = null;
		for (var a = t, o = !1; a !== null;) {
			if (!o) {
				if (a.flags & 524288) o = !0;
				else if (a.flags & 262144) break;
			}
			if (a.tag === 10) {
				var s = a.alternate;
				if (s === null) throw Error(i(387));
				if (s = s.memoizedProps, s !== null) {
					var c = a.type;
					hr(a.pendingProps.value, s.value) || (e === null ? e = [c] : e.push(c));
				}
			} else if (a === oe.current) {
				if (s = a.alternate, s === null) throw Error(i(387));
				s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e === null ? e = [$f] : e.push($f));
			}
			a = a.return;
		}
		e !== null && Hi(t, e, n, r), t.flags |= 262144;
	}
	function Wi(e) {
		for (e = e.firstContext; e !== null;) {
			if (!hr(e.context._currentValue, e.memoizedValue)) return !0;
			e = e.next;
		}
		return !1;
	}
	function Gi(e) {
		Li = e, Ri = null, e = e.dependencies, e !== null && (e.firstContext = null);
	}
	function Ki(e) {
		return Ji(Li, e);
	}
	function qi(e, t) {
		return Li === null && Gi(e), Ji(e, t);
	}
	function Ji(e, t) {
		var n = t._currentValue;
		if (t = {
			context: t,
			memoizedValue: n,
			next: null
		}, Ri === null) {
			if (e === null) throw Error(i(308));
			Ri = t, e.dependencies = {
				lanes: 0,
				firstContext: t
			}, e.flags |= 524288;
		} else Ri = Ri.next = t;
		return n;
	}
	var Yi = typeof AbortController < "u" ? AbortController : function() {
		var e = [], t = this.signal = {
			aborted: !1,
			addEventListener: function(t, n) {
				e.push(n);
			}
		};
		this.abort = function() {
			t.aborted = !0, e.forEach(function(e) {
				return e();
			});
		};
	}, Xi = t.unstable_scheduleCallback, Zi = t.unstable_NormalPriority, Qi = {
		$$typeof: C,
		Consumer: null,
		Provider: null,
		_currentValue: null,
		_currentValue2: null,
		_threadCount: 0
	};
	function $i() {
		return {
			controller: new Yi(),
			data: /* @__PURE__ */ new Map(),
			refCount: 0
		};
	}
	function ea(e) {
		e.refCount--, e.refCount === 0 && Xi(Zi, function() {
			e.controller.abort();
		});
	}
	var ta = null, na = 0, ra = 0, ia = null;
	function aa(e, t) {
		if (ta === null) {
			var n = ta = [];
			na = 0, ra = ud(), ia = {
				status: "pending",
				value: void 0,
				then: function(e) {
					n.push(e);
				}
			};
		}
		return na++, t.then(oa, oa), t;
	}
	function oa() {
		if (--na === 0 && ta !== null) {
			ia !== null && (ia.status = "fulfilled");
			var e = ta;
			ta = null, ra = 0, ia = null;
			for (var t = 0; t < e.length; t++) (0, e[t])();
		}
	}
	function sa(e, t) {
		var n = [], r = {
			status: "pending",
			value: null,
			reason: null,
			then: function(e) {
				n.push(e);
			}
		};
		return e.then(function() {
			r.status = "fulfilled", r.value = t;
			for (var e = 0; e < n.length; e++) (0, n[e])(t);
		}, function(e) {
			for (r.status = "rejected", r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
		}), r;
	}
	var ca = P.S;
	P.S = function(e, t) {
		Ql = ye(), typeof t == "object" && t && typeof t.then == "function" && aa(e, t), ca !== null && ca(e, t);
	};
	var la = re(null);
	function ua() {
		var e = la.current;
		return e === null ? Pl.pooledCache : e;
	}
	function da(e, t) {
		t === null ? z(la, la.current) : z(la, t.pool);
	}
	function fa() {
		var e = ua();
		return e === null ? null : {
			parent: Qi._currentValue,
			pool: e
		};
	}
	var pa = Error(i(460)), ma = Error(i(474)), ha = Error(i(542)), ga = { then: function() {} };
	function _a(e) {
		return e = e.status, e === "fulfilled" || e === "rejected";
	}
	function va(e, t, n) {
		switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Kt, Kt), t = n), t.status) {
			case "fulfilled": return t.value;
			case "rejected": throw e = t.reason, Sa(e), e;
			default:
				if (typeof t.status == "string") t.then(Kt, Kt);
				else {
					if (e = Pl, e !== null && 100 < e.shellSuspendCounter) throw Error(i(482));
					e = t, e.status = "pending", e.then(function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "fulfilled", n.value = e;
						}
					}, function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "rejected", n.reason = e;
						}
					});
				}
				switch (t.status) {
					case "fulfilled": return t.value;
					case "rejected": throw e = t.reason, Sa(e), e;
				}
				throw ba = t, pa;
		}
	}
	function ya(e) {
		try {
			var t = e._init;
			return t(e._payload);
		} catch (e) {
			throw typeof e == "object" && e && typeof e.then == "function" ? (ba = e, pa) : e;
		}
	}
	var ba = null;
	function xa() {
		if (ba === null) throw Error(i(459));
		var e = ba;
		return ba = null, e;
	}
	function Sa(e) {
		if (e === pa || e === ha) throw Error(i(483));
	}
	var Ca = null, wa = 0;
	function Ta(e) {
		var t = wa;
		return wa += 1, Ca === null && (Ca = []), va(Ca, e, t);
	}
	function Ea(e, t) {
		t = t.props.ref, e.ref = t === void 0 ? null : t;
	}
	function Da(e, t) {
		throw t.$$typeof === g ? Error(i(525)) : (e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
	}
	function Oa(e) {
		function t(t, n) {
			if (e) {
				var r = t.deletions;
				r === null ? (t.deletions = [n], t.flags |= 16) : r.push(n);
			}
		}
		function n(n, r) {
			if (!e) return null;
			for (; r !== null;) t(n, r), r = r.sibling;
			return null;
		}
		function r(e) {
			for (var t = /* @__PURE__ */ new Map(); e !== null;) e.key === null ? t.set(e.index, e) : t.set(e.key, e), e = e.sibling;
			return t;
		}
		function a(e, t) {
			return e = ti(e, t), e.index = 0, e.sibling = null, e;
		}
		function o(t, n, r) {
			return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 67108866, n) : (r = r.index, r < n ? (t.flags |= 67108866, n) : r)) : (t.flags |= 1048576, n);
		}
		function s(t) {
			return e && t.alternate === null && (t.flags |= 67108866), t;
		}
		function c(e, t, n, r) {
			return t === null || t.tag !== 6 ? (t = ai(n, e.mode, r), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function l(e, t, n, r) {
			var i = n.type;
			return i === y ? d(e, t, n.props.children, r, n.key) : t !== null && (t.elementType === i || typeof i == "object" && i && i.$$typeof === O && ya(i) === t.type) ? (t = a(t, n.props), Ea(t, n), t.return = e, t) : (t = ri(n.type, n.key, n.props, null, e.mode, r), Ea(t, n), t.return = e, t);
		}
		function u(e, t, n, r) {
			return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = si(n, e.mode, r), t.return = e, t) : (t = a(t, n.children || []), t.return = e, t);
		}
		function d(e, t, n, r, i) {
			return t === null || t.tag !== 7 ? (t = ii(n, e.mode, r, i), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function f(e, t, n) {
			if (typeof t == "string" && t !== "" || typeof t == "number" || typeof t == "bigint") return t = ai("" + t, e.mode, n), t.return = e, t;
			if (typeof t == "object" && t) {
				switch (t.$$typeof) {
					case _: return n = ri(t.type, t.key, t.props, null, e.mode, n), Ea(n, t), n.return = e, n;
					case v: return t = si(t, e.mode, n), t.return = e, t;
					case O: return t = ya(t), f(e, t, n);
				}
				if (te(t) || M(t)) return t = ii(t, e.mode, n, null), t.return = e, t;
				if (typeof t.then == "function") return f(e, Ta(t), n);
				if (t.$$typeof === C) return f(e, qi(e, t), n);
				Da(e, t);
			}
			return null;
		}
		function p(e, t, n, r) {
			var i = t === null ? null : t.key;
			if (typeof n == "string" && n !== "" || typeof n == "number" || typeof n == "bigint") return i === null ? c(e, t, "" + n, r) : null;
			if (typeof n == "object" && n) {
				switch (n.$$typeof) {
					case _: return n.key === i ? l(e, t, n, r) : null;
					case v: return n.key === i ? u(e, t, n, r) : null;
					case O: return n = ya(n), p(e, t, n, r);
				}
				if (te(n) || M(n)) return i === null ? d(e, t, n, r, null) : null;
				if (typeof n.then == "function") return p(e, t, Ta(n), r);
				if (n.$$typeof === C) return p(e, t, qi(e, n), r);
				Da(e, n);
			}
			return null;
		}
		function m(e, t, n, r, i) {
			if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return e = e.get(n) || null, c(t, e, "" + r, i);
			if (typeof r == "object" && r) {
				switch (r.$$typeof) {
					case _: return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
					case v: return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
					case O: return r = ya(r), m(e, t, n, r, i);
				}
				if (te(r) || M(r)) return e = e.get(n) || null, d(t, e, r, i, null);
				if (typeof r.then == "function") return m(e, t, n, Ta(r), i);
				if (r.$$typeof === C) return m(e, t, n, qi(t, r), i);
				Da(t, r);
			}
			return null;
		}
		function h(i, a, s, c) {
			for (var l = null, u = null, d = a, h = a = 0, g = null; d !== null && h < s.length; h++) {
				d.index > h ? (g = d, d = null) : g = d.sibling;
				var _ = p(i, d, s[h], c);
				if (_ === null) {
					d === null && (d = g);
					break;
				}
				e && d && _.alternate === null && t(i, d), a = o(_, a, h), u === null ? l = _ : u.sibling = _, u = _, d = g;
			}
			if (h === s.length) return n(i, d), Ti && yi(i, h), l;
			if (d === null) {
				for (; h < s.length; h++) d = f(i, s[h], c), d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
				return Ti && yi(i, h), l;
			}
			for (d = r(d); h < s.length; h++) g = m(d, i, h, s[h], c), g !== null && (e && g.alternate !== null && d.delete(g.key === null ? h : g.key), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g);
			return e && d.forEach(function(e) {
				return t(i, e);
			}), Ti && yi(i, h), l;
		}
		function g(a, s, c, l) {
			if (c == null) throw Error(i(151));
			for (var u = null, d = null, h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++, v = c.next()) {
				h.index > g ? (_ = h, h = null) : _ = h.sibling;
				var y = p(a, h, v.value, l);
				if (y === null) {
					h === null && (h = _);
					break;
				}
				e && h && y.alternate === null && t(a, h), s = o(y, s, g), d === null ? u = y : d.sibling = y, d = y, h = _;
			}
			if (v.done) return n(a, h), Ti && yi(a, g), u;
			if (h === null) {
				for (; !v.done; g++, v = c.next()) v = f(a, v.value, l), v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
				return Ti && yi(a, g), u;
			}
			for (h = r(h); !v.done; g++, v = c.next()) v = m(h, a, g, v.value, l), v !== null && (e && v.alternate !== null && h.delete(v.key === null ? g : v.key), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
			return e && h.forEach(function(e) {
				return t(a, e);
			}), Ti && yi(a, g), u;
		}
		function b(e, r, o, c) {
			if (typeof o == "object" && o && o.type === y && o.key === null && (o = o.props.children), typeof o == "object" && o) {
				switch (o.$$typeof) {
					case _:
						a: {
							for (var l = o.key; r !== null;) {
								if (r.key === l) {
									if (l = o.type, l === y) {
										if (r.tag === 7) {
											n(e, r.sibling), c = a(r, o.props.children), c.return = e, e = c;
											break a;
										}
									} else if (r.elementType === l || typeof l == "object" && l && l.$$typeof === O && ya(l) === r.type) {
										n(e, r.sibling), c = a(r, o.props), Ea(c, o), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								} else t(e, r);
								r = r.sibling;
							}
							o.type === y ? (c = ii(o.props.children, e.mode, c, o.key), c.return = e, e = c) : (c = ri(o.type, o.key, o.props, null, e.mode, c), Ea(c, o), c.return = e, e = c);
						}
						return s(e);
					case v:
						a: {
							for (l = o.key; r !== null;) {
								if (r.key === l) if (r.tag === 4 && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
									n(e, r.sibling), c = a(r, o.children || []), c.return = e, e = c;
									break a;
								} else {
									n(e, r);
									break;
								}
								else t(e, r);
								r = r.sibling;
							}
							c = si(o, e.mode, c), c.return = e, e = c;
						}
						return s(e);
					case O: return o = ya(o), b(e, r, o, c);
				}
				if (te(o)) return h(e, r, o, c);
				if (M(o)) {
					if (l = M(o), typeof l != "function") throw Error(i(150));
					return o = l.call(o), g(e, r, o, c);
				}
				if (typeof o.then == "function") return b(e, r, Ta(o), c);
				if (o.$$typeof === C) return b(e, r, qi(e, o), c);
				Da(e, o);
			}
			return typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint" ? (o = "" + o, r !== null && r.tag === 6 ? (n(e, r.sibling), c = a(r, o), c.return = e, e = c) : (n(e, r), c = ai(o, e.mode, c), c.return = e, e = c), s(e)) : n(e, r);
		}
		return function(e, t, n, r) {
			try {
				wa = 0;
				var i = b(e, t, n, r);
				return Ca = null, i;
			} catch (t) {
				if (t === pa || t === ha) throw t;
				var a = $r(29, t, null, e.mode);
				return a.lanes = r, a.return = e, a;
			}
		};
	}
	var ka = Oa(!0), Aa = Oa(!1), ja = !1;
	function Ma(e) {
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
	function Na(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			firstBaseUpdate: e.firstBaseUpdate,
			lastBaseUpdate: e.lastBaseUpdate,
			shared: e.shared,
			callbacks: null
		});
	}
	function Pa(e) {
		return {
			lane: e,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function Fa(e, t, n) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (r = r.shared, Nl & 2) {
			var i = r.pending;
			return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, t = Xr(e), Yr(e, null, n), t;
		}
		return q(e, r, t, n), Xr(e);
	}
	function Ia(e, t, n) {
		if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194048)) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, qe(e, n);
		}
	}
	function La(e, t) {
		var n = e.updateQueue, r = e.alternate;
		if (r !== null && (r = r.updateQueue, n === r)) {
			var i = null, a = null;
			if (n = n.firstBaseUpdate, n !== null) {
				do {
					var o = {
						lane: n.lane,
						tag: n.tag,
						payload: n.payload,
						callback: null,
						next: null
					};
					a === null ? i = a = o : a = a.next = o, n = n.next;
				} while (n !== null);
				a === null ? i = a = t : a = a.next = t;
			} else i = a = t;
			n = {
				baseState: r.baseState,
				firstBaseUpdate: i,
				lastBaseUpdate: a,
				shared: r.shared,
				callbacks: r.callbacks
			}, e.updateQueue = n;
			return;
		}
		e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
	}
	var Ra = !1;
	function za() {
		if (Ra) {
			var e = ia;
			if (e !== null) throw e;
		}
	}
	function Ba(e, t, n, r) {
		Ra = !1;
		var i = e.updateQueue;
		ja = !1;
		var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
		if (s !== null) {
			i.shared.pending = null;
			var c = s, l = c.next;
			c.next = null, o === null ? a = l : o.next = l, o = c;
			var u = e.alternate;
			u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l, u.lastBaseUpdate = c));
		}
		if (a !== null) {
			var d = i.baseState;
			o = 0, u = l = c = null, s = a;
			do {
				var f = s.lane & -536870913, p = f !== s.lane;
				if (p ? (Q & f) === f : (r & f) === f) {
					f !== 0 && f === ra && (Ra = !0), u !== null && (u = u.next = {
						lane: 0,
						tag: s.tag,
						payload: s.payload,
						callback: null,
						next: null
					});
					a: {
						var m = e, g = s;
						f = t;
						var _ = n;
						switch (g.tag) {
							case 1:
								if (m = g.payload, typeof m == "function") {
									d = m.call(_, d, f);
									break a;
								}
								d = m;
								break a;
							case 3: m.flags = m.flags & -65537 | 128;
							case 0:
								if (m = g.payload, f = typeof m == "function" ? m.call(_, d, f) : m, f == null) break a;
								d = h({}, d, f);
								break a;
							case 2: ja = !0;
						}
					}
					f = s.callback, f !== null && (e.flags |= 64, p && (e.flags |= 8192), p = i.callbacks, p === null ? i.callbacks = [f] : p.push(f));
				} else p = {
					lane: f,
					tag: s.tag,
					payload: s.payload,
					callback: s.callback,
					next: null
				}, u === null ? (l = u = p, c = d) : u = u.next = p, o |= f;
				if (s = s.next, s === null) {
					if (s = i.shared.pending, s === null) break;
					p = s, s = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null;
				}
			} while (1);
			u === null && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = u, a === null && (i.shared.lanes = 0), Ul |= o, e.lanes = o, e.memoizedState = d;
		}
	}
	function Va(e, t) {
		if (typeof e != "function") throw Error(i(191, e));
		e.call(t);
	}
	function Ha(e, t) {
		var n = e.callbacks;
		if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) Va(n[e], t);
	}
	var Ua = re(null), Wa = re(0);
	function Ga(e, t) {
		e = Vl, z(Wa, e), z(Ua, t), Vl = e | t.baseLanes;
	}
	function Ka() {
		z(Wa, Vl), z(Ua, Ua.current);
	}
	function qa() {
		Vl = Wa.current, R(Ua), R(Wa);
	}
	var Ja = re(null), Ya = null;
	function Xa(e) {
		var t = e.alternate;
		z(to, to.current & 1), z(Ja, e), Ya === null && (t === null || Ua.current !== null || t.memoizedState !== null) && (Ya = e);
	}
	function Za(e) {
		z(to, to.current), z(Ja, e), Ya === null && (Ya = e);
	}
	function Qa(e) {
		e.tag === 22 ? (z(to, to.current), z(Ja, e), Ya === null && (Ya = e)) : $a(e);
	}
	function $a() {
		z(to, to.current), z(Ja, Ja.current);
	}
	function eo(e) {
		R(Ja), Ya === e && (Ya = null), R(to);
	}
	var to = re(0);
	function no(e) {
		for (var t = e; t !== null;) {
			if (t.tag === 13) {
				var n = t.memoizedState;
				if (n !== null && (n = n.dehydrated, n === null || of(n) || sf(n))) return t;
			} else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
				if (t.flags & 128) return t;
			} else if (t.child !== null) {
				t.child.return = t, t = t.child;
				continue;
			}
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return null;
				t = t.return;
			}
			t.sibling.return = t.return, t = t.sibling;
		}
		return null;
	}
	var ro = 0, io = null, ao = null, oo = null, so = !1, co = !1, lo = !1, uo = 0, fo = 0, po = null, mo = 0;
	function ho() {
		throw Error(i(321));
	}
	function go(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!hr(e[n], t[n])) return !1;
		return !0;
	}
	function _o(e, t, n, r, i, a) {
		return ro = a, io = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, P.H = e === null || e.memoizedState === null ? js : Ms, lo = !1, a = n(r, i), lo = !1, co && (a = yo(t, n, r, i)), vo(e), a;
	}
	function vo(e) {
		P.H = As;
		var t = ao !== null && ao.next !== null;
		if (ro = 0, oo = ao = io = null, so = !1, fo = 0, po = null, t) throw Error(i(300));
		e === null || Ys || (e = e.dependencies, e !== null && Wi(e) && (Ys = !0));
	}
	function yo(e, t, n, r) {
		io = e;
		var a = 0;
		do {
			if (co && (po = null), fo = 0, co = !1, 25 <= a) throw Error(i(301));
			if (a += 1, oo = ao = null, e.updateQueue != null) {
				var o = e.updateQueue;
				o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0);
			}
			P.H = Ns, o = t(n, r);
		} while (co);
		return o;
	}
	function bo() {
		var e = P.H, t = e.useState()[0];
		return t = typeof t.then == "function" ? Do(t) : t, e = e.useState()[0], (ao === null ? null : ao.memoizedState) !== e && (io.flags |= 1024), t;
	}
	function xo() {
		var e = uo !== 0;
		return uo = 0, e;
	}
	function So(e, t, n) {
		t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
	}
	function Co(e) {
		if (so) {
			for (e = e.memoizedState; e !== null;) {
				var t = e.queue;
				t !== null && (t.pending = null), e = e.next;
			}
			so = !1;
		}
		ro = 0, oo = ao = io = null, co = !1, fo = uo = 0, po = null;
	}
	function wo() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return oo === null ? io.memoizedState = oo = e : oo = oo.next = e, oo;
	}
	function To() {
		if (ao === null) {
			var e = io.alternate;
			e = e === null ? null : e.memoizedState;
		} else e = ao.next;
		var t = oo === null ? io.memoizedState : oo.next;
		if (t !== null) oo = t, ao = e;
		else {
			if (e === null) throw io.alternate === null ? Error(i(467)) : Error(i(310));
			ao = e, e = {
				memoizedState: ao.memoizedState,
				baseState: ao.baseState,
				baseQueue: ao.baseQueue,
				queue: ao.queue,
				next: null
			}, oo === null ? io.memoizedState = oo = e : oo = oo.next = e;
		}
		return oo;
	}
	function Eo() {
		return {
			lastEffect: null,
			events: null,
			stores: null,
			memoCache: null
		};
	}
	function Do(e) {
		var t = fo;
		return fo += 1, po === null && (po = []), e = va(po, e, t), t = io, (oo === null ? t.memoizedState : oo.next) === null && (t = t.alternate, P.H = t === null || t.memoizedState === null ? js : Ms), e;
	}
	function Oo(e) {
		if (typeof e == "object" && e) {
			if (typeof e.then == "function") return Do(e);
			if (e.$$typeof === C) return Ki(e);
		}
		throw Error(i(438, String(e)));
	}
	function ko(e) {
		var t = null, n = io.updateQueue;
		if (n !== null && (t = n.memoCache), t == null) {
			var r = io.alternate;
			r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
				data: r.data.map(function(e) {
					return e.slice();
				}),
				index: 0
			})));
		}
		if (t ??= {
			data: [],
			index: 0
		}, n === null && (n = Eo(), io.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0) for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = A;
		return t.index++, n;
	}
	function Ao(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function jo(e) {
		return Mo(To(), ao, e);
	}
	function Mo(e, t, n) {
		var r = e.queue;
		if (r === null) throw Error(i(311));
		r.lastRenderedReducer = n;
		var a = e.baseQueue, o = r.pending;
		if (o !== null) {
			if (a !== null) {
				var s = a.next;
				a.next = o.next, o.next = s;
			}
			t.baseQueue = a = o, r.pending = null;
		}
		if (o = e.baseState, a === null) e.memoizedState = o;
		else {
			t = a.next;
			var c = s = null, l = null, u = t, d = !1;
			do {
				var f = u.lane & -536870913;
				if (f === u.lane ? (ro & f) === f : (Q & f) === f) {
					var p = u.revertLane;
					if (p === 0) l !== null && (l = l.next = {
						lane: 0,
						revertLane: 0,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}), f === ra && (d = !0);
					else if ((ro & p) === p) {
						u = u.next, p === ra && (d = !0);
						continue;
					} else f = {
						lane: 0,
						revertLane: u.revertLane,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}, l === null ? (c = l = f, s = o) : l = l.next = f, io.lanes |= p, Ul |= p;
					f = u.action, lo && n(o, f), o = u.hasEagerState ? u.eagerState : n(o, f);
				} else p = {
					lane: f,
					revertLane: u.revertLane,
					gesture: u.gesture,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				}, l === null ? (c = l = p, s = o) : l = l.next = p, io.lanes |= f, Ul |= f;
				u = u.next;
			} while (u !== null && u !== t);
			if (l === null ? s = o : l.next = c, !hr(o, e.memoizedState) && (Ys = !0, d && (n = ia, n !== null))) throw n;
			e.memoizedState = o, e.baseState = s, e.baseQueue = l, r.lastRenderedState = o;
		}
		return a === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
	}
	function No(e) {
		var t = To(), n = t.queue;
		if (n === null) throw Error(i(311));
		n.lastRenderedReducer = e;
		var r = n.dispatch, a = n.pending, o = t.memoizedState;
		if (a !== null) {
			n.pending = null;
			var s = a = a.next;
			do
				o = e(o, s.action), s = s.next;
			while (s !== a);
			hr(o, t.memoizedState) || (Ys = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
		}
		return [o, r];
	}
	function Po(e, t, n) {
		var r = io, a = To(), o = Ti;
		if (o) {
			if (n === void 0) throw Error(i(407));
			n = n();
		} else n = t();
		var s = !hr((ao || a).memoizedState, n);
		if (s && (a.memoizedState = n, Ys = !0), a = a.queue, is(Lo.bind(null, r, a, e), [e]), a.getSnapshot !== t || s || oo !== null && oo.memoizedState.tag & 1) {
			if (r.flags |= 2048, $o(9, { destroy: void 0 }, Io.bind(null, r, a, n, t), null), Pl === null) throw Error(i(349));
			o || ro & 127 || Fo(r, t, n);
		}
		return n;
	}
	function Fo(e, t, n) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: n
		}, t = io.updateQueue, t === null ? (t = Eo(), io.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
	}
	function Io(e, t, n, r) {
		t.value = n, t.getSnapshot = r, Ro(t) && zo(e);
	}
	function Lo(e, t, n) {
		return n(function() {
			Ro(t) && zo(e);
		});
	}
	function Ro(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !hr(e, n);
		} catch {
			return !0;
		}
	}
	function zo(e) {
		var t = Jr(e, 2);
		t !== null && pu(t, e, 2);
	}
	function Bo(e) {
		var t = wo();
		if (typeof e == "function") {
			var n = e;
			if (e = n(), lo) {
				Ae(!0);
				try {
					n();
				} finally {
					Ae(!1);
				}
			}
		}
		return t.memoizedState = t.baseState = e, t.queue = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Ao,
			lastRenderedState: e
		}, t;
	}
	function Vo(e, t, n, r) {
		return e.baseState = n, Mo(e, ao, typeof r == "function" ? r : Ao);
	}
	function Ho(e, t, n, r, a) {
		if (Ds(e)) throw Error(i(485));
		if (e = t.action, e !== null) {
			var o = {
				payload: a,
				action: e,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function(e) {
					o.listeners.push(e);
				}
			};
			P.T === null ? o.isTransition = !1 : n(!0), r(o), n = t.pending, n === null ? (o.next = t.pending = o, Uo(t, o)) : (o.next = n.next, t.pending = n.next = o);
		}
	}
	function Uo(e, t) {
		var n = t.action, r = t.payload, i = e.state;
		if (t.isTransition) {
			var a = P.T, o = {};
			P.T = o;
			try {
				var s = n(i, r), c = P.S;
				c !== null && c(o, s), Y(e, t, s);
			} catch (n) {
				Go(e, t, n);
			} finally {
				a !== null && o.types !== null && (a.types = o.types), P.T = a;
			}
		} else try {
			a = n(i, r), Y(e, t, a);
		} catch (n) {
			Go(e, t, n);
		}
	}
	function Y(e, t, n) {
		typeof n == "object" && n && typeof n.then == "function" ? n.then(function(n) {
			Wo(e, t, n);
		}, function(n) {
			return Go(e, t, n);
		}) : Wo(e, t, n);
	}
	function Wo(e, t, n) {
		t.status = "fulfilled", t.value = n, Ko(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Uo(e, n)));
	}
	function Go(e, t, n) {
		var r = e.pending;
		if (e.pending = null, r !== null) {
			r = r.next;
			do
				t.status = "rejected", t.reason = n, Ko(t), t = t.next;
			while (t !== r);
		}
		e.action = null;
	}
	function Ko(e) {
		e = e.listeners;
		for (var t = 0; t < e.length; t++) (0, e[t])();
	}
	function qo(e, t) {
		return t;
	}
	function Jo(e, t) {
		if (Ti) {
			var n = Pl.formState;
			if (n !== null) {
				a: {
					var r = io;
					if (Ti) {
						if (J) {
							b: {
								for (var i = J, a = Di; i.nodeType !== 8;) {
									if (!a) {
										i = null;
										break b;
									}
									if (i = lf(i.nextSibling), i === null) {
										i = null;
										break b;
									}
								}
								a = i.data, i = a === "F!" || a === "F" ? i : null;
							}
							if (i) {
								J = lf(i.nextSibling), r = i.data === "F!";
								break a;
							}
						}
						ki(r);
					}
					r = !1;
				}
				r && (t = n[0]);
			}
		}
		return n = wo(), n.memoizedState = n.baseState = t, r = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: qo,
			lastRenderedState: t
		}, n.queue = r, n = ws.bind(null, io, r), r.dispatch = n, r = Bo(!1), a = Es.bind(null, io, !1, r.queue), r = wo(), i = {
			state: t,
			dispatch: null,
			action: e,
			pending: null
		}, r.queue = i, n = Ho.bind(null, io, i, a, n), i.dispatch = n, r.memoizedState = e, [
			t,
			n,
			!1
		];
	}
	function Yo(e) {
		return Xo(To(), ao, e);
	}
	function Xo(e, t, n) {
		if (t = Mo(e, t, qo)[0], e = jo(Ao)[0], typeof t == "object" && t && typeof t.then == "function") try {
			var r = Do(t);
		} catch (e) {
			throw e === pa ? ha : e;
		}
		else r = t;
		t = To();
		var i = t.queue, a = i.dispatch;
		return n !== t.memoizedState && (io.flags |= 2048, $o(9, { destroy: void 0 }, Zo.bind(null, i, n), null)), [
			r,
			a,
			e
		];
	}
	function Zo(e, t) {
		e.action = t;
	}
	function Qo(e) {
		var t = To(), n = ao;
		if (n !== null) return Xo(t, n, e);
		To(), t = t.memoizedState, n = To();
		var r = n.queue.dispatch;
		return n.memoizedState = e, [
			t,
			r,
			!1
		];
	}
	function $o(e, t, n, r) {
		return e = {
			tag: e,
			create: n,
			deps: r,
			inst: t,
			next: null
		}, t = io.updateQueue, t === null && (t = Eo(), io.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
	}
	function es() {
		return To().memoizedState;
	}
	function ts(e, t, n, r) {
		var i = wo();
		io.flags |= e, i.memoizedState = $o(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r);
	}
	function ns(e, t, n, r) {
		var i = To();
		r = r === void 0 ? null : r;
		var a = i.memoizedState.inst;
		ao !== null && r !== null && go(r, ao.memoizedState.deps) ? i.memoizedState = $o(t, a, n, r) : (io.flags |= e, i.memoizedState = $o(1 | t, a, n, r));
	}
	function rs(e, t) {
		ts(8390656, 8, e, t);
	}
	function is(e, t) {
		ns(2048, 8, e, t);
	}
	function X(e) {
		io.flags |= 4;
		var t = io.updateQueue;
		if (t === null) t = Eo(), io.updateQueue = t, t.events = [e];
		else {
			var n = t.events;
			n === null ? t.events = [e] : n.push(e);
		}
	}
	function as(e) {
		var t = To().memoizedState;
		return X({
			ref: t,
			nextImpl: e
		}), function() {
			if (Nl & 2) throw Error(i(440));
			return t.impl.apply(void 0, arguments);
		};
	}
	function Z(e, t) {
		return ns(4, 2, e, t);
	}
	function os(e, t) {
		return ns(4, 4, e, t);
	}
	function ss(e, t) {
		if (typeof t == "function") {
			e = e();
			var n = t(e);
			return function() {
				typeof n == "function" ? n() : t(null);
			};
		}
		if (t != null) return e = e(), t.current = e, function() {
			t.current = null;
		};
	}
	function cs(e, t, n) {
		n = n == null ? null : n.concat([e]), ns(4, 4, ss.bind(null, t, e), n);
	}
	function ls() {}
	function us(e, t) {
		var n = To();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return t !== null && go(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
	}
	function ds(e, t) {
		var n = To();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		if (t !== null && go(t, r[1])) return r[0];
		if (r = e(), lo) {
			Ae(!0);
			try {
				e();
			} finally {
				Ae(!1);
			}
		}
		return n.memoizedState = [r, t], r;
	}
	function fs(e, t, n) {
		return n === void 0 || ro & 1073741824 && !(Q & 261930) ? e.memoizedState = t : (e.memoizedState = n, e = fu(), io.lanes |= e, Ul |= e, n);
	}
	function ps(e, t, n, r) {
		return hr(n, t) ? n : Ua.current === null ? !(ro & 42) || ro & 1073741824 && !(Q & 261930) ? (Ys = !0, e.memoizedState = n) : (e = fu(), io.lanes |= e, Ul |= e, t) : (e = fs(e, n, r), hr(e, t) || (Ys = !0), e);
	}
	function ms(e, t, n, r, i) {
		var a = F.p;
		F.p = a !== 0 && 8 > a ? a : 8;
		var o = P.T, s = {};
		P.T = s, Es(e, !1, t, n);
		try {
			var c = i(), l = P.S;
			l !== null && l(s, c), typeof c == "object" && c && typeof c.then == "function" ? Ts(e, t, sa(c, r), du(e)) : Ts(e, t, r, du(e));
		} catch (n) {
			Ts(e, t, {
				then: function() {},
				status: "rejected",
				reason: n
			}, du());
		} finally {
			F.p = a, o !== null && s.types !== null && (o.types = s.types), P.T = o;
		}
	}
	function hs() {}
	function gs(e, t, n, r) {
		if (e.tag !== 5) throw Error(i(476));
		var a = _s(e).queue;
		ms(e, a, t, I, n === null ? hs : function() {
			return vs(e), n(r);
		});
	}
	function _s(e) {
		var t = e.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: I,
			baseState: I,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Ao,
				lastRenderedState: I
			},
			next: null
		};
		var n = {};
		return t.next = {
			memoizedState: n,
			baseState: n,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Ao,
				lastRenderedState: n
			},
			next: null
		}, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
	}
	function vs(e) {
		var t = _s(e);
		t.next === null && (t = e.alternate.memoizedState), Ts(e, t.next.queue, {}, du());
	}
	function ys() {
		return Ki($f);
	}
	function bs() {
		return To().memoizedState;
	}
	function xs() {
		return To().memoizedState;
	}
	function Ss(e) {
		for (var t = e.return; t !== null;) {
			switch (t.tag) {
				case 24:
				case 3:
					var n = du();
					e = Pa(n);
					var r = Fa(t, e, n);
					r !== null && (pu(r, t, n), Ia(r, t, n)), t = { cache: $i() }, e.payload = t;
					return;
			}
			t = t.return;
		}
	}
	function Cs(e, t, n) {
		var r = du();
		n = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, Ds(e) ? Os(t, n) : (n = qr(e, t, n, r), n !== null && (pu(n, e, r), ks(n, t, r)));
	}
	function ws(e, t, n) {
		Ts(e, t, n, du());
	}
	function Ts(e, t, n, r) {
		var i = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (Ds(e)) Os(t, i);
		else {
			var a = e.alternate;
			if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
				var o = t.lastRenderedState, s = a(o, n);
				if (i.hasEagerState = !0, i.eagerState = s, hr(s, o)) return q(e, t, i, 0), Pl === null && Kr(), !1;
			} catch {}
			if (n = qr(e, t, i, r), n !== null) return pu(n, e, r), ks(n, t, r), !0;
		}
		return !1;
	}
	function Es(e, t, n, r) {
		if (r = {
			lane: 2,
			revertLane: ud(),
			gesture: null,
			action: r,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, Ds(e)) {
			if (t) throw Error(i(479));
		} else t = qr(e, n, r, 2), t !== null && pu(t, e, 2);
	}
	function Ds(e) {
		var t = e.alternate;
		return e === io || t !== null && t === io;
	}
	function Os(e, t) {
		co = so = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
	}
	function ks(e, t, n) {
		if (n & 4194048) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, qe(e, n);
		}
	}
	var As = {
		readContext: Ki,
		use: Oo,
		useCallback: ho,
		useContext: ho,
		useEffect: ho,
		useImperativeHandle: ho,
		useLayoutEffect: ho,
		useInsertionEffect: ho,
		useMemo: ho,
		useReducer: ho,
		useRef: ho,
		useState: ho,
		useDebugValue: ho,
		useDeferredValue: ho,
		useTransition: ho,
		useSyncExternalStore: ho,
		useId: ho,
		useHostTransitionStatus: ho,
		useFormState: ho,
		useActionState: ho,
		useOptimistic: ho,
		useMemoCache: ho,
		useCacheRefresh: ho
	};
	As.useEffectEvent = ho;
	var js = {
		readContext: Ki,
		use: Oo,
		useCallback: function(e, t) {
			return wo().memoizedState = [e, t === void 0 ? null : t], e;
		},
		useContext: Ki,
		useEffect: rs,
		useImperativeHandle: function(e, t, n) {
			n = n == null ? null : n.concat([e]), ts(4194308, 4, ss.bind(null, t, e), n);
		},
		useLayoutEffect: function(e, t) {
			return ts(4194308, 4, e, t);
		},
		useInsertionEffect: function(e, t) {
			ts(4, 2, e, t);
		},
		useMemo: function(e, t) {
			var n = wo();
			t = t === void 0 ? null : t;
			var r = e();
			if (lo) {
				Ae(!0);
				try {
					e();
				} finally {
					Ae(!1);
				}
			}
			return n.memoizedState = [r, t], r;
		},
		useReducer: function(e, t, n) {
			var r = wo();
			if (n !== void 0) {
				var i = n(t);
				if (lo) {
					Ae(!0);
					try {
						n(t);
					} finally {
						Ae(!1);
					}
				}
			} else i = t;
			return r.memoizedState = r.baseState = i, e = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: i
			}, r.queue = e, e = e.dispatch = Cs.bind(null, io, e), [r.memoizedState, e];
		},
		useRef: function(e) {
			var t = wo();
			return e = { current: e }, t.memoizedState = e;
		},
		useState: function(e) {
			e = Bo(e);
			var t = e.queue, n = ws.bind(null, io, t);
			return t.dispatch = n, [e.memoizedState, n];
		},
		useDebugValue: ls,
		useDeferredValue: function(e, t) {
			return fs(wo(), e, t);
		},
		useTransition: function() {
			var e = Bo(!1);
			return e = ms.bind(null, io, e.queue, !0, !1), wo().memoizedState = e, [!1, e];
		},
		useSyncExternalStore: function(e, t, n) {
			var r = io, a = wo();
			if (Ti) {
				if (n === void 0) throw Error(i(407));
				n = n();
			} else {
				if (n = t(), Pl === null) throw Error(i(349));
				Q & 127 || Fo(r, t, n);
			}
			a.memoizedState = n;
			var o = {
				value: n,
				getSnapshot: t
			};
			return a.queue = o, rs(Lo.bind(null, r, o, e), [e]), r.flags |= 2048, $o(9, { destroy: void 0 }, Io.bind(null, r, o, n, t), null), n;
		},
		useId: function() {
			var e = wo(), t = Pl.identifierPrefix;
			if (Ti) {
				var n = vi, r = _i;
				n = (r & ~(1 << 32 - je(r) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = uo++, 0 < n && (t += "H" + n.toString(32)), t += "_";
			} else n = mo++, t = "_" + t + "r_" + n.toString(32) + "_";
			return e.memoizedState = t;
		},
		useHostTransitionStatus: ys,
		useFormState: Jo,
		useActionState: Jo,
		useOptimistic: function(e) {
			var t = wo();
			t.memoizedState = t.baseState = e;
			var n = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: null,
				lastRenderedState: null
			};
			return t.queue = n, t = Es.bind(null, io, !0, n), n.dispatch = t, [e, t];
		},
		useMemoCache: ko,
		useCacheRefresh: function() {
			return wo().memoizedState = Ss.bind(null, io);
		},
		useEffectEvent: function(e) {
			var t = wo(), n = { impl: e };
			return t.memoizedState = n, function() {
				if (Nl & 2) throw Error(i(440));
				return n.impl.apply(void 0, arguments);
			};
		}
	}, Ms = {
		readContext: Ki,
		use: Oo,
		useCallback: us,
		useContext: Ki,
		useEffect: is,
		useImperativeHandle: cs,
		useInsertionEffect: Z,
		useLayoutEffect: os,
		useMemo: ds,
		useReducer: jo,
		useRef: es,
		useState: function() {
			return jo(Ao);
		},
		useDebugValue: ls,
		useDeferredValue: function(e, t) {
			return ps(To(), ao.memoizedState, e, t);
		},
		useTransition: function() {
			var e = jo(Ao)[0], t = To().memoizedState;
			return [typeof e == "boolean" ? e : Do(e), t];
		},
		useSyncExternalStore: Po,
		useId: bs,
		useHostTransitionStatus: ys,
		useFormState: Yo,
		useActionState: Yo,
		useOptimistic: function(e, t) {
			return Vo(To(), ao, e, t);
		},
		useMemoCache: ko,
		useCacheRefresh: xs
	};
	Ms.useEffectEvent = as;
	var Ns = {
		readContext: Ki,
		use: Oo,
		useCallback: us,
		useContext: Ki,
		useEffect: is,
		useImperativeHandle: cs,
		useInsertionEffect: Z,
		useLayoutEffect: os,
		useMemo: ds,
		useReducer: No,
		useRef: es,
		useState: function() {
			return No(Ao);
		},
		useDebugValue: ls,
		useDeferredValue: function(e, t) {
			var n = To();
			return ao === null ? fs(n, e, t) : ps(n, ao.memoizedState, e, t);
		},
		useTransition: function() {
			var e = No(Ao)[0], t = To().memoizedState;
			return [typeof e == "boolean" ? e : Do(e), t];
		},
		useSyncExternalStore: Po,
		useId: bs,
		useHostTransitionStatus: ys,
		useFormState: Qo,
		useActionState: Qo,
		useOptimistic: function(e, t) {
			var n = To();
			return ao === null ? (n.baseState = e, [e, n.queue.dispatch]) : Vo(n, ao, e, t);
		},
		useMemoCache: ko,
		useCacheRefresh: xs
	};
	Ns.useEffectEvent = as;
	function Ps(e, t, n, r) {
		t = e.memoizedState, n = n(r, t), n = n == null ? t : h({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var Fs = {
		enqueueSetState: function(e, t, n) {
			e = e._reactInternals;
			var r = du(), i = Pa(r);
			i.payload = t, n != null && (i.callback = n), t = Fa(e, i, r), t !== null && (pu(t, e, r), Ia(t, e, r));
		},
		enqueueReplaceState: function(e, t, n) {
			e = e._reactInternals;
			var r = du(), i = Pa(r);
			i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Fa(e, i, r), t !== null && (pu(t, e, r), Ia(t, e, r));
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternals;
			var n = du(), r = Pa(n);
			r.tag = 2, t != null && (r.callback = t), t = Fa(e, r, n), t !== null && (pu(t, e, n), Ia(t, e, n));
		}
	};
	function Is(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !gr(n, r) || !gr(i, a) : !0;
	}
	function Ls(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Fs.enqueueReplaceState(t, t.state, null);
	}
	function Rs(e, t) {
		var n = t;
		if ("ref" in t) for (var r in n = {}, t) r !== "ref" && (n[r] = t[r]);
		if (e = e.defaultProps) for (var i in n === t && (n = h({}, n)), e) n[i] === void 0 && (n[i] = e[i]);
		return n;
	}
	function zs(e) {
		Hr(e);
	}
	function Bs(e) {
		console.error(e);
	}
	function Vs(e) {
		Hr(e);
	}
	function Hs(e, t) {
		try {
			var n = e.onUncaughtError;
			n(t.value, { componentStack: t.stack });
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function Us(e, t, n) {
		try {
			var r = e.onCaughtError;
			r(n.value, {
				componentStack: n.stack,
				errorBoundary: t.tag === 1 ? t.stateNode : null
			});
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function Ws(e, t, n) {
		return n = Pa(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
			Hs(e, t);
		}, n;
	}
	function Gs(e) {
		return e = Pa(e), e.tag = 3, e;
	}
	function Ks(e, t, n, r) {
		var i = n.type.getDerivedStateFromError;
		if (typeof i == "function") {
			var a = r.value;
			e.payload = function() {
				return i(a);
			}, e.callback = function() {
				Us(t, n, r);
			};
		}
		var o = n.stateNode;
		o !== null && typeof o.componentDidCatch == "function" && (e.callback = function() {
			Us(t, n, r), typeof i != "function" && (tu === null ? tu = new Set([this]) : tu.add(this));
			var e = r.stack;
			this.componentDidCatch(r.value, { componentStack: e === null ? "" : e });
		});
	}
	function qs(e, t, n, r, a) {
		if (n.flags |= 32768, typeof r == "object" && r && typeof r.then == "function") {
			if (t = n.alternate, t !== null && Ui(t, n, a, !0), n = Ja.current, n !== null) {
				switch (n.tag) {
					case 31:
					case 13: return Ya === null ? Tu() : n.alternate === null && Hl === 0 && (Hl = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, r === ga ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = new Set([r]) : t.add(r), Wu(e, r, a)), !1;
					case 22: return n.flags |= 65536, r === ga ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
						transitions: null,
						markerInstances: null,
						retryQueue: new Set([r])
					}, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = new Set([r]) : n.add(r)), Wu(e, r, a)), !1;
				}
				throw Error(i(435, n.tag));
			}
			return Wu(e, r, a), Tu(), !1;
		}
		if (Ti) return t = Ja.current, t === null ? (r !== Oi && (t = Error(i(423), { cause: r }), Fi(li(t, n))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, r = li(r, n), a = Ws(e.stateNode, r, a), La(e, a), Hl !== 4 && (Hl = 2)) : (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = a, r !== Oi && (e = Error(i(422), { cause: r }), Fi(li(e, n)))), !1;
		var o = Error(i(520), { cause: r });
		if (o = li(o, n), Jl === null ? Jl = [o] : Jl.push(o), Hl !== 4 && (Hl = 2), t === null) return !0;
		r = li(r, n), n = t;
		do {
			switch (n.tag) {
				case 3: return n.flags |= 65536, e = a & -a, n.lanes |= e, e = Ws(n.stateNode, r, e), La(n, e), !1;
				case 1: if (t = n.type, o = n.stateNode, !(n.flags & 128) && (typeof t.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (tu === null || !tu.has(o)))) return n.flags |= 65536, a &= -a, n.lanes |= a, a = Gs(a), Ks(a, e, n, r), La(n, a), !1;
			}
			n = n.return;
		} while (n !== null);
		return !1;
	}
	var Js = Error(i(461)), Ys = !1;
	function Xs(e, t, n, r) {
		t.child = e === null ? Aa(t, null, n, r) : ka(t, e.child, n, r);
	}
	function Zs(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		if ("ref" in r) {
			var o = {};
			for (var s in r) s !== "ref" && (o[s] = r[s]);
		} else o = r;
		return Gi(t), r = _o(e, t, n, o, a, i), s = xo(), e !== null && !Ys ? (So(e, t, i), xc(e, t, i)) : (Ti && s && xi(t), t.flags |= 1, Xs(e, t, r, i), t.child);
	}
	function Qs(e, t, n, r, i) {
		if (e === null) {
			var a = n.type;
			return typeof a == "function" && !ei(a) && a.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = a, $s(e, t, a, r, i)) : (e = ri(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, !Sc(e, i)) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? gr : n, n(o, r) && e.ref === t.ref) return xc(e, t, i);
		}
		return t.flags |= 1, e = ti(a, r), e.ref = t.ref, e.return = t, t.child = e;
	}
	function $s(e, t, n, r, i) {
		if (e !== null) {
			var a = e.memoizedProps;
			if (gr(a, r) && e.ref === t.ref) if (Ys = !1, t.pendingProps = r = a, Sc(e, i)) e.flags & 131072 && (Ys = !0);
			else return t.lanes = e.lanes, xc(e, t, i);
		}
		return sc(e, t, n, r, i);
	}
	function ec(e, t, n, r) {
		var i = r.children, a = e === null ? null : e.memoizedState;
		if (e === null && t.stateNode === null && (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), r.mode === "hidden") {
			if (t.flags & 128) {
				if (a = a === null ? n : a.baseLanes | n, e !== null) {
					for (r = t.child = e.child, i = 0; r !== null;) i = i | r.lanes | r.childLanes, r = r.sibling;
					r = i & ~a;
				} else r = 0, t.child = null;
				return nc(e, t, a, n, r);
			}
			if (n & 536870912) t.memoizedState = {
				baseLanes: 0,
				cachePool: null
			}, e !== null && da(t, a === null ? null : a.cachePool), a === null ? Ka() : Ga(t, a), Qa(t);
			else return r = t.lanes = 536870912, nc(e, t, a === null ? n : a.baseLanes | n, n, r);
		} else a === null ? (e !== null && da(t, null), Ka(), $a(t)) : (da(t, a.cachePool), Ga(t, a), $a(t), t.memoizedState = null);
		return Xs(e, t, i, n), t.child;
	}
	function tc(e, t) {
		return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), t.sibling;
	}
	function nc(e, t, n, r, i) {
		var a = ua();
		return a = a === null ? null : {
			parent: Qi._currentValue,
			pool: a
		}, t.memoizedState = {
			baseLanes: n,
			cachePool: a
		}, e !== null && da(t, null), Ka(), Qa(t), e !== null && Ui(e, t, r, !0), t.childLanes = i, null;
	}
	function rc(e, t) {
		return t = gc({
			mode: t.mode,
			children: t.children
		}, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
	}
	function ic(e, t, n) {
		return ka(t, e.child, null, n), e = rc(t, t.pendingProps), e.flags |= 2, eo(t), t.memoizedState = null, e;
	}
	function ac(e, t, n) {
		var r = t.pendingProps, a = (t.flags & 128) != 0;
		if (t.flags &= -129, e === null) {
			if (Ti) {
				if (r.mode === "hidden") return e = rc(t, r), t.lanes = 536870912, tc(null, e);
				if (Za(t), (e = J) ? (e = af(e, Di), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: gi === null ? null : {
						id: _i,
						overflow: vi
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = oi(e), n.return = t, t.child = n, wi = t, J = null)) : e = null, e === null) throw ki(t);
				return t.lanes = 536870912, null;
			}
			return rc(t, r);
		}
		var o = e.memoizedState;
		if (o !== null) {
			var s = o.dehydrated;
			if (Za(t), a) if (t.flags & 256) t.flags &= -257, t = ic(e, t, n);
			else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
			else throw Error(i(558));
			else if (Ys || Ui(e, t, n, !1), a = (n & e.childLanes) !== 0, Ys || a) {
				if (r = Pl, r !== null && (s = Je(r, n), s !== 0 && s !== o.retryLane)) throw o.retryLane = s, Jr(e, s), pu(r, e, s), Js;
				Tu(), t = ic(e, t, n);
			} else e = o.treeContext, J = lf(s.nextSibling), wi = t, Ti = !0, Ei = null, Di = !1, e !== null && Ci(t, e), t = rc(t, r), t.flags |= 4096;
			return t;
		}
		return e = ti(e.child, {
			mode: r.mode,
			children: r.children
		}), e.ref = t.ref, t.child = e, e.return = t, e;
	}
	function oc(e, t) {
		var n = t.ref;
		if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
		else {
			if (typeof n != "function" && typeof n != "object") throw Error(i(284));
			(e === null || e.ref !== n) && (t.flags |= 4194816);
		}
	}
	function sc(e, t, n, r, i) {
		return Gi(t), n = _o(e, t, n, r, void 0, i), r = xo(), e !== null && !Ys ? (So(e, t, i), xc(e, t, i)) : (Ti && r && xi(t), t.flags |= 1, Xs(e, t, n, i), t.child);
	}
	function cc(e, t, n, r, i, a) {
		return Gi(t), t.updateQueue = null, n = yo(t, r, n, i), vo(e), r = xo(), e !== null && !Ys ? (So(e, t, a), xc(e, t, a)) : (Ti && r && xi(t), t.flags |= 1, Xs(e, t, n, a), t.child);
	}
	function lc(e, t, n, r, i) {
		if (Gi(t), t.stateNode === null) {
			var a = Zr, o = n.contextType;
			typeof o == "object" && o && (a = Ki(o)), a = new n(r, a), t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = Fs, t.stateNode = a, a._reactInternals = t, a = t.stateNode, a.props = r, a.state = t.memoizedState, a.refs = {}, Ma(t), o = n.contextType, a.context = typeof o == "object" && o ? Ki(o) : Zr, a.state = t.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (Ps(t, n, o, r), a.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (o = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), o !== a.state && Fs.enqueueReplaceState(a, a.state, null), Ba(t, r, a, i), za(), a.state = t.memoizedState), typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
		} else if (e === null) {
			a = t.stateNode;
			var s = t.memoizedProps, c = Rs(n, s);
			a.props = c;
			var l = a.context, u = n.contextType;
			o = Zr, typeof u == "object" && u && (o = Ki(u));
			var d = n.getDerivedStateFromProps;
			u = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function", s = t.pendingProps !== s, u || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s || l !== o) && Ls(t, a, r, o), ja = !1;
			var f = t.memoizedState;
			a.state = f, Ba(t, r, a, i), za(), l = t.memoizedState, s || f !== l || ja ? (typeof d == "function" && (Ps(t, n, d, r), l = t.memoizedState), (c = ja || Is(t, n, c, r, f, l, o)) ? (u || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = o, r = c) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
		} else {
			a = t.stateNode, Na(e, t), o = t.memoizedProps, u = Rs(n, o), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, c = Zr, typeof l == "object" && l && (c = Ki(l)), s = n.getDerivedStateFromProps, (l = typeof s == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== d || f !== c) && Ls(t, a, r, c), ja = !1, f = t.memoizedState, a.state = f, Ba(t, r, a, i), za();
			var p = t.memoizedState;
			o !== d || f !== p || ja || e !== null && e.dependencies !== null && Wi(e.dependencies) ? (typeof s == "function" && (Ps(t, n, s, r), p = t.memoizedState), (u = ja || Is(t, n, u, r, f, p, c) || e !== null && e.dependencies !== null && Wi(e.dependencies)) ? (l || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, p, c), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, p, c)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = c, r = u) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
		}
		return a = r, oc(e, t), r = (t.flags & 128) != 0, a || r ? (a = t.stateNode, n = r && typeof n.getDerivedStateFromError != "function" ? null : a.render(), t.flags |= 1, e !== null && r ? (t.child = ka(t, e.child, null, i), t.child = ka(t, null, n, i)) : Xs(e, t, n, i), t.memoizedState = a.state, e = t.child) : e = xc(e, t, i), e;
	}
	function uc(e, t, n, r) {
		return Ni(), t.flags |= 256, Xs(e, t, n, r), t.child;
	}
	var dc = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null
	};
	function fc(e) {
		return {
			baseLanes: e,
			cachePool: fa()
		};
	}
	function pc(e, t, n) {
		return e = e === null ? 0 : e.childLanes & ~n, t && (e |= Kl), e;
	}
	function mc(e, t, n) {
		var r = t.pendingProps, a = !1, o = (t.flags & 128) != 0, s;
		if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (to.current & 2) != 0), s && (a = !0, t.flags &= -129), s = (t.flags & 32) != 0, t.flags &= -33, e === null) {
			if (Ti) {
				if (a ? Xa(t) : $a(t), (e = J) ? (e = af(e, Di), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: gi === null ? null : {
						id: _i,
						overflow: vi
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = oi(e), n.return = t, t.child = n, wi = t, J = null)) : e = null, e === null) throw ki(t);
				return sf(e) ? t.lanes = 32 : t.lanes = 536870912, null;
			}
			var c = r.children;
			return r = r.fallback, a ? ($a(t), a = t.mode, c = gc({
				mode: "hidden",
				children: c
			}, a), r = ii(r, a, n, null), c.return = t, r.return = t, c.sibling = r, t.child = c, r = t.child, r.memoizedState = fc(n), r.childLanes = pc(e, s, n), t.memoizedState = dc, tc(null, r)) : (Xa(t), hc(t, c));
		}
		var l = e.memoizedState;
		if (l !== null && (c = l.dehydrated, c !== null)) {
			if (o) t.flags & 256 ? (Xa(t), t.flags &= -257, t = _c(e, t, n)) : t.memoizedState === null ? ($a(t), c = r.fallback, a = t.mode, r = gc({
				mode: "visible",
				children: r.children
			}, a), c = ii(c, a, n, null), c.flags |= 2, r.return = t, c.return = t, r.sibling = c, t.child = r, ka(t, e.child, null, n), r = t.child, r.memoizedState = fc(n), r.childLanes = pc(e, s, n), t.memoizedState = dc, t = tc(null, r)) : ($a(t), t.child = e.child, t.flags |= 128, t = null);
			else if (Xa(t), sf(c)) {
				if (s = c.nextSibling && c.nextSibling.dataset, s) var u = s.dgst;
				s = u, r = Error(i(419)), r.stack = "", r.digest = s, Fi({
					value: r,
					source: null,
					stack: null
				}), t = _c(e, t, n);
			} else if (Ys || Ui(e, t, n, !1), s = (n & e.childLanes) !== 0, Ys || s) {
				if (s = Pl, s !== null && (r = Je(s, n), r !== 0 && r !== l.retryLane)) throw l.retryLane = r, Jr(e, r), pu(s, e, r), Js;
				of(c) || Tu(), t = _c(e, t, n);
			} else of(c) ? (t.flags |= 192, t.child = e.child, t = null) : (e = l.treeContext, J = lf(c.nextSibling), wi = t, Ti = !0, Ei = null, Di = !1, e !== null && Ci(t, e), t = hc(t, r.children), t.flags |= 4096);
			return t;
		}
		return a ? ($a(t), c = r.fallback, a = t.mode, l = e.child, u = l.sibling, r = ti(l, {
			mode: "hidden",
			children: r.children
		}), r.subtreeFlags = l.subtreeFlags & 65011712, u === null ? (c = ii(c, a, n, null), c.flags |= 2) : c = ti(u, c), c.return = t, r.return = t, r.sibling = c, t.child = r, tc(null, r), r = t.child, c = e.child.memoizedState, c === null ? c = fc(n) : (a = c.cachePool, a === null ? a = fa() : (l = Qi._currentValue, a = a.parent === l ? a : {
			parent: l,
			pool: l
		}), c = {
			baseLanes: c.baseLanes | n,
			cachePool: a
		}), r.memoizedState = c, r.childLanes = pc(e, s, n), t.memoizedState = dc, tc(e.child, r)) : (Xa(t), n = e.child, e = n.sibling, n = ti(n, {
			mode: "visible",
			children: r.children
		}), n.return = t, n.sibling = null, e !== null && (s = t.deletions, s === null ? (t.deletions = [e], t.flags |= 16) : s.push(e)), t.child = n, t.memoizedState = null, n);
	}
	function hc(e, t) {
		return t = gc({
			mode: "visible",
			children: t
		}, e.mode), t.return = e, e.child = t;
	}
	function gc(e, t) {
		return e = $r(22, e, null, t), e.lanes = 0, e;
	}
	function _c(e, t, n) {
		return ka(t, e.child, null, n), e = hc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
	}
	function vc(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), Vi(e.return, t, n);
	}
	function yc(e, t, n, r, i, a) {
		var o = e.memoizedState;
		o === null ? e.memoizedState = {
			isBackwards: t,
			rendering: null,
			renderingStartTime: 0,
			last: r,
			tail: n,
			tailMode: i,
			treeForkCount: a
		} : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i, o.treeForkCount = a);
	}
	function bc(e, t, n) {
		var r = t.pendingProps, i = r.revealOrder, a = r.tail;
		r = r.children;
		var o = to.current, s = (o & 2) != 0;
		if (s ? (o = o & 1 | 2, t.flags |= 128) : o &= 1, z(to, o), Xs(e, t, r, n), r = Ti ? pi : 0, !s && e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
			if (e.tag === 13) e.memoizedState !== null && vc(e, n, t);
			else if (e.tag === 19) vc(e, n, t);
			else if (e.child !== null) {
				e.child.return = e, e = e.child;
				continue;
			}
			if (e === t) break a;
			for (; e.sibling === null;) {
				if (e.return === null || e.return === t) break a;
				e = e.return;
			}
			e.sibling.return = e.return, e = e.sibling;
		}
		switch (i) {
			case "forwards":
				for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && no(e) === null && (i = n), n = n.sibling;
				n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), yc(t, !1, i, n, a, r);
				break;
			case "backwards":
			case "unstable_legacy-backwards":
				for (n = null, i = t.child, t.child = null; i !== null;) {
					if (e = i.alternate, e !== null && no(e) === null) {
						t.child = i;
						break;
					}
					e = i.sibling, i.sibling = n, n = i, i = e;
				}
				yc(t, !0, n, null, a, r);
				break;
			case "together":
				yc(t, !1, null, null, void 0, r);
				break;
			default: t.memoizedState = null;
		}
		return t.child;
	}
	function xc(e, t, n) {
		if (e !== null && (t.dependencies = e.dependencies), Ul |= t.lanes, (n & t.childLanes) === 0) if (e !== null) {
			if (Ui(e, t, n, !1), (n & t.childLanes) === 0) return null;
		} else return null;
		if (e !== null && t.child !== e.child) throw Error(i(153));
		if (t.child !== null) {
			for (e = t.child, n = ti(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = ti(e, e.pendingProps), n.return = t;
			n.sibling = null;
		}
		return t.child;
	}
	function Sc(e, t) {
		return (e.lanes & t) === 0 ? (e = e.dependencies, !!(e !== null && Wi(e))) : !0;
	}
	function Cc(e, t, n) {
		switch (t.tag) {
			case 3:
				se(t, t.stateNode.containerInfo), zi(t, Qi, e.memoizedState.cache), Ni();
				break;
			case 27:
			case 5:
				H(t);
				break;
			case 4:
				se(t, t.stateNode.containerInfo);
				break;
			case 10:
				zi(t, t.type, t.memoizedProps.value);
				break;
			case 31:
				if (t.memoizedState !== null) return t.flags |= 128, Za(t), null;
				break;
			case 13:
				var r = t.memoizedState;
				if (r !== null) return r.dehydrated === null ? (n & t.child.childLanes) === 0 ? (Xa(t), e = xc(e, t, n), e === null ? null : e.sibling) : mc(e, t, n) : (Xa(t), t.flags |= 128, null);
				Xa(t);
				break;
			case 19:
				var i = (e.flags & 128) != 0;
				if (r = (n & t.childLanes) !== 0, r ||= (Ui(e, t, n, !1), (n & t.childLanes) !== 0), i) {
					if (r) return bc(e, t, n);
					t.flags |= 128;
				}
				if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), z(to, to.current), r) break;
				return null;
			case 22: return t.lanes = 0, ec(e, t, n, t.pendingProps);
			case 24: zi(t, Qi, e.memoizedState.cache);
		}
		return xc(e, t, n);
	}
	function wc(e, t, n) {
		if (e !== null) if (e.memoizedProps !== t.pendingProps) Ys = !0;
		else {
			if (!Sc(e, n) && !(t.flags & 128)) return Ys = !1, Cc(e, t, n);
			Ys = !!(e.flags & 131072);
		}
		else Ys = !1, Ti && t.flags & 1048576 && bi(t, pi, t.index);
		switch (t.lanes = 0, t.tag) {
			case 16:
				a: {
					var r = t.pendingProps;
					if (e = ya(t.elementType), t.type = e, typeof e == "function") ei(e) ? (r = Rs(e, r), t.tag = 1, t = lc(null, t, e, r, n)) : (t.tag = 0, t = sc(null, t, e, r, n));
					else {
						if (e != null) {
							var a = e.$$typeof;
							if (a === w) {
								t.tag = 11, t = Zs(null, t, e, r, n);
								break a;
							} else if (a === D) {
								t.tag = 14, t = Qs(null, t, e, r, n);
								break a;
							}
						}
						throw t = ee(e) || e, Error(i(306, t, ""));
					}
				}
				return t;
			case 0: return sc(e, t, t.type, t.pendingProps, n);
			case 1: return r = t.type, a = Rs(r, t.pendingProps), lc(e, t, r, a, n);
			case 3:
				a: {
					if (se(t, t.stateNode.containerInfo), e === null) throw Error(i(387));
					r = t.pendingProps;
					var o = t.memoizedState;
					a = o.element, Na(e, t), Ba(t, r, null, n);
					var s = t.memoizedState;
					if (r = s.cache, zi(t, Qi, r), r !== o.cache && Hi(t, [Qi], n, !0), za(), r = s.element, o.isDehydrated) if (o = {
						element: r,
						isDehydrated: !1,
						cache: s.cache
					}, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
						t = uc(e, t, r, n);
						break a;
					} else if (r !== a) {
						a = li(Error(i(424)), t), Fi(a), t = uc(e, t, r, n);
						break a;
					} else {
						switch (e = t.stateNode.containerInfo, e.nodeType) {
							case 9:
								e = e.body;
								break;
							default: e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
						}
						for (J = lf(e.firstChild), wi = t, Ti = !0, Ei = null, Di = !0, n = Aa(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
					}
					else {
						if (Ni(), r === a) {
							t = xc(e, t, n);
							break a;
						}
						Xs(e, t, r, n);
					}
					t = t.child;
				}
				return t;
			case 26: return oc(e, t), e === null ? (n = Af(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : Ti || (n = t.type, e = t.pendingProps, r = Vd(B.current).createElement(n), r[et] = t, r[tt] = e, Fd(r, n, e), pt(r), t.stateNode = r) : t.memoizedState = Af(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
			case 27: return H(t), e === null && Ti && (r = t.stateNode = pf(t.type, t.pendingProps, B.current), wi = t, Di = !0, a = J, Qd(t.type) ? (uf = a, J = lf(r.firstChild)) : J = a), Xs(e, t, t.pendingProps.children, n), oc(e, t), e === null && (t.flags |= 4194304), t.child;
			case 5: return e === null && Ti && ((a = r = J) && (r = nf(r, t.type, t.pendingProps, Di), r === null ? a = !1 : (t.stateNode = r, wi = t, J = lf(r.firstChild), Di = !1, a = !0)), a || ki(t)), H(t), a = t.type, o = t.pendingProps, s = e === null ? null : e.memoizedProps, r = o.children, Wd(a, o) ? r = null : s !== null && Wd(a, s) && (t.flags |= 32), t.memoizedState !== null && (a = _o(e, t, bo, null, null, n), $f._currentValue = a), oc(e, t), Xs(e, t, r, n), t.child;
			case 6: return e === null && Ti && ((e = n = J) && (n = rf(n, t.pendingProps, Di), n === null ? e = !1 : (t.stateNode = n, wi = t, J = null, e = !0)), e || ki(t)), null;
			case 13: return mc(e, t, n);
			case 4: return se(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ka(t, null, r, n) : Xs(e, t, r, n), t.child;
			case 11: return Zs(e, t, t.type, t.pendingProps, n);
			case 7: return Xs(e, t, t.pendingProps, n), t.child;
			case 8: return Xs(e, t, t.pendingProps.children, n), t.child;
			case 12: return Xs(e, t, t.pendingProps.children, n), t.child;
			case 10: return r = t.pendingProps, zi(t, t.type, r.value), Xs(e, t, r.children, n), t.child;
			case 9: return a = t.type._context, r = t.pendingProps.children, Gi(t), a = Ki(a), r = r(a), t.flags |= 1, Xs(e, t, r, n), t.child;
			case 14: return Qs(e, t, t.type, t.pendingProps, n);
			case 15: return $s(e, t, t.type, t.pendingProps, n);
			case 19: return bc(e, t, n);
			case 31: return ac(e, t, n);
			case 22: return ec(e, t, n, t.pendingProps);
			case 24: return Gi(t), r = Ki(Qi), e === null ? (a = ua(), a === null && (a = Pl, o = $i(), a.pooledCache = o, o.refCount++, o !== null && (a.pooledCacheLanes |= n), a = o), t.memoizedState = {
				parent: r,
				cache: a
			}, Ma(t), zi(t, Qi, a)) : ((e.lanes & n) !== 0 && (Na(e, t), Ba(t, null, null, n), za()), a = e.memoizedState, o = t.memoizedState, a.parent === r ? (r = o.cache, zi(t, Qi, r), r !== a.cache && Hi(t, [Qi], n, !0)) : (a = {
				parent: r,
				cache: r
			}, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), zi(t, Qi, r))), Xs(e, t, t.pendingProps.children, n), t.child;
			case 29: throw t.pendingProps;
		}
		throw Error(i(156, t.tag));
	}
	function Tc(e) {
		e.flags |= 4;
	}
	function Ec(e, t, n, r, i) {
		if ((t = (e.mode & 32) != 0) && (t = !1), t) {
			if (e.flags |= 16777216, (i & 335544128) === i) if (e.stateNode.complete) e.flags |= 8192;
			else if (Su()) e.flags |= 8192;
			else throw ba = ga, ma;
		} else e.flags &= -16777217;
	}
	function Dc(e, t) {
		if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
		else if (e.flags |= 16777216, !Gf(t)) if (Su()) e.flags |= 8192;
		else throw ba = ga, ma;
	}
	function Oc(e, t) {
		t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag === 22 ? 536870912 : He(), e.lanes |= t, ql |= t);
	}
	function kc(e, t) {
		if (!Ti) switch (e.tailMode) {
			case "hidden":
				t = e.tail;
				for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
				n === null ? e.tail = null : n.sibling = null;
				break;
			case "collapsed":
				n = e.tail;
				for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
				r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
		}
	}
	function Ac(e) {
		var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
		if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 65011712, r |= i.flags & 65011712, i.return = e, i = i.sibling;
		else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
		return e.subtreeFlags |= r, e.childLanes = n, t;
	}
	function jc(e, t, n) {
		var r = t.pendingProps;
		switch (Si(t), t.tag) {
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return Ac(t), null;
			case 1: return Ac(t), null;
			case 3: return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), Bi(Qi), V(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Mi(t) ? Tc(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Pi())), Ac(t), null;
			case 26:
				var a = t.type, o = t.memoizedState;
				return e === null ? (Tc(t), o === null ? (Ac(t), Ec(t, a, null, r, n)) : (Ac(t), Dc(t, o))) : o ? o === e.memoizedState ? (Ac(t), t.flags &= -16777217) : (Tc(t), Ac(t), Dc(t, o)) : (e = e.memoizedProps, e !== r && Tc(t), Ac(t), Ec(t, a, e, r, n)), null;
			case 27:
				if (ce(t), n = B.current, a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && Tc(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return Ac(t), null;
					}
					e = ie.current, Mi(t) ? Ai(t, e) : (e = pf(a, r, n), t.stateNode = e, Tc(t));
				}
				return Ac(t), null;
			case 5:
				if (ce(t), a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && Tc(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return Ac(t), null;
					}
					if (o = ie.current, Mi(t)) Ai(t, o);
					else {
						var s = Vd(B.current);
						switch (o) {
							case 1:
								o = s.createElementNS("http://www.w3.org/2000/svg", a);
								break;
							case 2:
								o = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
								break;
							default: switch (a) {
								case "svg":
									o = s.createElementNS("http://www.w3.org/2000/svg", a);
									break;
								case "math":
									o = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
									break;
								case "script":
									o = s.createElement("div"), o.innerHTML = "<script><\/script>", o = o.removeChild(o.firstChild);
									break;
								case "select":
									o = typeof r.is == "string" ? s.createElement("select", { is: r.is }) : s.createElement("select"), r.multiple ? o.multiple = !0 : r.size && (o.size = r.size);
									break;
								default: o = typeof r.is == "string" ? s.createElement(a, { is: r.is }) : s.createElement(a);
							}
						}
						o[et] = t, o[tt] = r;
						a: for (s = t.child; s !== null;) {
							if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
							else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
								s.child.return = s, s = s.child;
								continue;
							}
							if (s === t) break a;
							for (; s.sibling === null;) {
								if (s.return === null || s.return === t) break a;
								s = s.return;
							}
							s.sibling.return = s.return, s = s.sibling;
						}
						t.stateNode = o;
						a: switch (Fd(o, a, r), a) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break a;
							case "img":
								r = !0;
								break a;
							default: r = !1;
						}
						r && Tc(t);
					}
				}
				return Ac(t), Ec(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
			case 6:
				if (e && t.stateNode != null) e.memoizedProps !== r && Tc(t);
				else {
					if (typeof r != "string" && t.stateNode === null) throw Error(i(166));
					if (e = B.current, Mi(t)) {
						if (e = t.stateNode, n = t.memoizedProps, r = null, a = wi, a !== null) switch (a.tag) {
							case 27:
							case 5: r = a.memoizedProps;
						}
						e[et] = t, e = !!(e.nodeValue === n || r !== null && !0 === r.suppressHydrationWarning || Md(e.nodeValue, n)), e || ki(t, !0);
					} else e = Vd(e).createTextNode(r), e[et] = t, t.stateNode = e;
				}
				return Ac(t), null;
			case 31:
				if (n = t.memoizedState, e === null || e.memoizedState !== null) {
					if (r = Mi(t), n !== null) {
						if (e === null) {
							if (!r) throw Error(i(318));
							if (e = t.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(557));
							e[et] = t;
						} else Ni(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						Ac(t), e = !1;
					} else n = Pi(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
					if (!e) return t.flags & 256 ? (eo(t), t) : (eo(t), null);
					if (t.flags & 128) throw Error(i(558));
				}
				return Ac(t), null;
			case 13:
				if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (a = Mi(t), r !== null && r.dehydrated !== null) {
						if (e === null) {
							if (!a) throw Error(i(318));
							if (a = t.memoizedState, a = a === null ? null : a.dehydrated, !a) throw Error(i(317));
							a[et] = t;
						} else Ni(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						Ac(t), a = !1;
					} else a = Pi(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
					if (!a) return t.flags & 256 ? (eo(t), t) : (eo(t), null);
				}
				return eo(t), t.flags & 128 ? (t.lanes = n, t) : (n = r !== null, e = e !== null && e.memoizedState !== null, n && (r = t.child, a = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (a = r.alternate.memoizedState.cachePool.pool), o = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool), o !== a && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Oc(t, t.updateQueue), Ac(t), null);
			case 4: return V(), e === null && Sd(t.stateNode.containerInfo), Ac(t), null;
			case 10: return Bi(t.type), Ac(t), null;
			case 19:
				if (R(to), r = t.memoizedState, r === null) return Ac(t), null;
				if (a = (t.flags & 128) != 0, o = r.rendering, o === null) if (a) kc(r, !1);
				else {
					if (Hl !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
						if (o = no(e), o !== null) {
							for (t.flags |= 128, kc(r, !1), e = o.updateQueue, t.updateQueue = e, Oc(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) ni(n, e), n = n.sibling;
							return z(to, to.current & 1 | 2), Ti && yi(t, r.treeForkCount), t.child;
						}
						e = e.sibling;
					}
					r.tail !== null && ye() > $l && (t.flags |= 128, a = !0, kc(r, !1), t.lanes = 4194304);
				}
				else {
					if (!a) if (e = no(o), e !== null) {
						if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, Oc(t, e), kc(r, !0), r.tail === null && r.tailMode === "hidden" && !o.alternate && !Ti) return Ac(t), null;
					} else 2 * ye() - r.renderingStartTime > $l && n !== 536870912 && (t.flags |= 128, a = !0, kc(r, !1), t.lanes = 4194304);
					r.isBackwards ? (o.sibling = t.child, t.child = o) : (e = r.last, e === null ? t.child = o : e.sibling = o, r.last = o);
				}
				return r.tail === null ? (Ac(t), null) : (e = r.tail, r.rendering = e, r.tail = e.sibling, r.renderingStartTime = ye(), e.sibling = null, n = to.current, z(to, a ? n & 1 | 2 : n & 1), Ti && yi(t, r.treeForkCount), e);
			case 22:
			case 23: return eo(t), qa(), r = t.memoizedState !== null, e === null ? r && (t.flags |= 8192) : e.memoizedState !== null !== r && (t.flags |= 8192), r ? n & 536870912 && !(t.flags & 128) && (Ac(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ac(t), n = t.updateQueue, n !== null && Oc(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && R(la), null;
			case 24: return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Bi(Qi), Ac(t), null;
			case 25: return null;
			case 30: return null;
		}
		throw Error(i(156, t.tag));
	}
	function Mc(e, t) {
		switch (Si(t), t.tag) {
			case 1: return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3: return Bi(Qi), V(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
			case 26:
			case 27:
			case 5: return ce(t), null;
			case 31:
				if (t.memoizedState !== null) {
					if (eo(t), t.alternate === null) throw Error(i(340));
					Ni();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 13:
				if (eo(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(i(340));
					Ni();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19: return R(to), null;
			case 4: return V(), null;
			case 10: return Bi(t.type), null;
			case 22:
			case 23: return eo(t), qa(), e !== null && R(la), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 24: return Bi(Qi), null;
			case 25: return null;
			default: return null;
		}
	}
	function Nc(e, t) {
		switch (Si(t), t.tag) {
			case 3:
				Bi(Qi), V();
				break;
			case 26:
			case 27:
			case 5:
				ce(t);
				break;
			case 4:
				V();
				break;
			case 31:
				t.memoizedState !== null && eo(t);
				break;
			case 13:
				eo(t);
				break;
			case 19:
				R(to);
				break;
			case 10:
				Bi(t.type);
				break;
			case 22:
			case 23:
				eo(t), qa(), e !== null && R(la);
				break;
			case 24: Bi(Qi);
		}
	}
	function Pc(e, t) {
		try {
			var n = t.updateQueue, r = n === null ? null : n.lastEffect;
			if (r !== null) {
				var i = r.next;
				n = i;
				do {
					if ((n.tag & e) === e) {
						r = void 0;
						var a = n.create, o = n.inst;
						r = a(), o.destroy = r;
					}
					n = n.next;
				} while (n !== i);
			}
		} catch (e) {
			Uu(t, t.return, e);
		}
	}
	function Fc(e, t, n) {
		try {
			var r = t.updateQueue, i = r === null ? null : r.lastEffect;
			if (i !== null) {
				var a = i.next;
				r = a;
				do {
					if ((r.tag & e) === e) {
						var o = r.inst, s = o.destroy;
						if (s !== void 0) {
							o.destroy = void 0, i = t;
							var c = n, l = s;
							try {
								l();
							} catch (e) {
								Uu(i, c, e);
							}
						}
					}
					r = r.next;
				} while (r !== a);
			}
		} catch (e) {
			Uu(t, t.return, e);
		}
	}
	function Ic(e) {
		var t = e.updateQueue;
		if (t !== null) {
			var n = e.stateNode;
			try {
				Ha(t, n);
			} catch (t) {
				Uu(e, e.return, t);
			}
		}
	}
	function Lc(e, t, n) {
		n.props = Rs(e.type, e.memoizedProps), n.state = e.memoizedState;
		try {
			n.componentWillUnmount();
		} catch (n) {
			Uu(e, t, n);
		}
	}
	function Rc(e, t) {
		try {
			var n = e.ref;
			if (n !== null) {
				switch (e.tag) {
					case 26:
					case 27:
					case 5:
						var r = e.stateNode;
						break;
					case 30:
						r = e.stateNode;
						break;
					default: r = e.stateNode;
				}
				typeof n == "function" ? e.refCleanup = n(r) : n.current = r;
			}
		} catch (n) {
			Uu(e, t, n);
		}
	}
	function zc(e, t) {
		var n = e.ref, r = e.refCleanup;
		if (n !== null) if (typeof r == "function") try {
			r();
		} catch (n) {
			Uu(e, t, n);
		} finally {
			e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
		}
		else if (typeof n == "function") try {
			n(null);
		} catch (n) {
			Uu(e, t, n);
		}
		else n.current = null;
	}
	function Bc(e) {
		var t = e.type, n = e.memoizedProps, r = e.stateNode;
		try {
			a: switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					n.autoFocus && r.focus();
					break a;
				case "img": n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet);
			}
		} catch (t) {
			Uu(e, e.return, t);
		}
	}
	function Vc(e, t, n) {
		try {
			var r = e.stateNode;
			Id(r, e.type, n, t), r[tt] = t;
		} catch (t) {
			Uu(e, e.return, t);
		}
	}
	function Hc(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Qd(e.type) || e.tag === 4;
	}
	function Uc(e) {
		a: for (;;) {
			for (; e.sibling === null;) {
				if (e.return === null || Hc(e.return)) return null;
				e = e.return;
			}
			for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
				if (e.tag === 27 && Qd(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue a;
				e.child.return = e, e = e.child;
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function Wc(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6) e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Kt));
		else if (r !== 4 && (r === 27 && Qd(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null)) for (Wc(e, t, n), e = e.sibling; e !== null;) Wc(e, t, n), e = e.sibling;
	}
	function Gc(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
		else if (r !== 4 && (r === 27 && Qd(e.type) && (n = e.stateNode), e = e.child, e !== null)) for (Gc(e, t, n), e = e.sibling; e !== null;) Gc(e, t, n), e = e.sibling;
	}
	function Kc(e) {
		var t = e.stateNode, n = e.memoizedProps;
		try {
			for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
			Fd(t, r, n), t[et] = e, t[tt] = n;
		} catch (t) {
			Uu(e, e.return, t);
		}
	}
	var qc = !1, Jc = !1, Yc = !1, Xc = typeof WeakSet == "function" ? WeakSet : Set, Zc = null;
	function Qc(e, t) {
		if (e = e.containerInfo, zd = cp, e = br(e), xr(e)) {
			if ("selectionStart" in e) var n = {
				start: e.selectionStart,
				end: e.selectionEnd
			};
			else a: {
				n = (n = e.ownerDocument) && n.defaultView || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var a = r.anchorOffset, o = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, o.nodeType;
					} catch {
						n = null;
						break a;
					}
					var s = 0, c = -1, l = -1, u = 0, d = 0, f = e, p = null;
					b: for (;;) {
						for (var m; f !== n || a !== 0 && f.nodeType !== 3 || (c = s + a), f !== o || r !== 0 && f.nodeType !== 3 || (l = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;) p = f, f = m;
						for (;;) {
							if (f === e) break b;
							if (p === n && ++u === a && (c = s), p === o && ++d === r && (l = s), (m = f.nextSibling) !== null) break;
							f = p, p = f.parentNode;
						}
						f = m;
					}
					n = c === -1 || l === -1 ? null : {
						start: c,
						end: l
					};
				} else n = null;
			}
			n ||= {
				start: 0,
				end: 0
			};
		} else n = null;
		for (Bd = {
			focusedElem: e,
			selectionRange: n
		}, cp = !1, Zc = t; Zc !== null;) if (t = Zc, e = t.child, t.subtreeFlags & 1028 && e !== null) e.return = t, Zc = e;
		else for (; Zc !== null;) {
			switch (t = Zc, o = t.alternate, e = t.flags, t.tag) {
				case 0:
					if (e & 4 && (e = t.updateQueue, e = e === null ? null : e.events, e !== null)) for (n = 0; n < e.length; n++) a = e[n], a.ref.impl = a.nextImpl;
					break;
				case 11:
				case 15: break;
				case 1:
					if (e & 1024 && o !== null) {
						e = void 0, n = t, a = o.memoizedProps, o = o.memoizedState, r = n.stateNode;
						try {
							var h = Rs(n.type, a);
							e = r.getSnapshotBeforeUpdate(h, o), r.__reactInternalSnapshotBeforeUpdate = e;
						} catch (e) {
							Uu(n, n.return, e);
						}
					}
					break;
				case 3:
					if (e & 1024) {
						if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9) tf(e);
						else if (n === 1) switch (e.nodeName) {
							case "HEAD":
							case "HTML":
							case "BODY":
								tf(e);
								break;
							default: e.textContent = "";
						}
					}
					break;
				case 5:
				case 26:
				case 27:
				case 6:
				case 4:
				case 17: break;
				default: if (e & 1024) throw Error(i(163));
			}
			if (e = t.sibling, e !== null) {
				e.return = t.return, Zc = e;
				break;
			}
			Zc = t.return;
		}
	}
	function $c(e, t, n) {
		var r = n.flags;
		switch (n.tag) {
			case 0:
			case 11:
			case 15:
				ml(e, n), r & 4 && Pc(5, n);
				break;
			case 1:
				if (ml(e, n), r & 4) if (e = n.stateNode, t === null) try {
					e.componentDidMount();
				} catch (e) {
					Uu(n, n.return, e);
				}
				else {
					var i = Rs(n.type, t.memoizedProps);
					t = t.memoizedState;
					try {
						e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
					} catch (e) {
						Uu(n, n.return, e);
					}
				}
				r & 64 && Ic(n), r & 512 && Rc(n, n.return);
				break;
			case 3:
				if (ml(e, n), r & 64 && (e = n.updateQueue, e !== null)) {
					if (t = null, n.child !== null) switch (n.child.tag) {
						case 27:
						case 5:
							t = n.child.stateNode;
							break;
						case 1: t = n.child.stateNode;
					}
					try {
						Ha(e, t);
					} catch (e) {
						Uu(n, n.return, e);
					}
				}
				break;
			case 27: t === null && r & 4 && Kc(n);
			case 26:
			case 5:
				ml(e, n), t === null && r & 4 && Bc(n), r & 512 && Rc(n, n.return);
				break;
			case 12:
				ml(e, n);
				break;
			case 31:
				ml(e, n), r & 4 && al(e, n);
				break;
			case 13:
				ml(e, n), r & 4 && ol(e, n), r & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = qu.bind(null, n), cf(e, n))));
				break;
			case 22:
				if (r = n.memoizedState !== null || qc, !r) {
					t = t !== null && t.memoizedState !== null || Jc, i = qc;
					var a = Jc;
					qc = r, (Jc = t) && !a ? gl(e, n, (n.subtreeFlags & 8772) != 0) : ml(e, n), qc = i, Jc = a;
				}
				break;
			case 30: break;
			default: ml(e, n);
		}
	}
	function el(e) {
		var t = e.alternate;
		t !== null && (e.alternate = null, el(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && ct(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
	}
	var tl = null, nl = !1;
	function rl(e, t, n) {
		for (n = n.child; n !== null;) il(e, t, n), n = n.sibling;
	}
	function il(e, t, n) {
		if (ke && typeof ke.onCommitFiberUnmount == "function") try {
			ke.onCommitFiberUnmount(Oe, n);
		} catch {}
		switch (n.tag) {
			case 26:
				Jc || zc(n, t), rl(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
				break;
			case 27:
				Jc || zc(n, t);
				var r = tl, i = nl;
				Qd(n.type) && (tl = n.stateNode, nl = !1), rl(e, t, n), mf(n.stateNode), tl = r, nl = i;
				break;
			case 5: Jc || zc(n, t);
			case 6:
				if (r = tl, i = nl, tl = null, rl(e, t, n), tl = r, nl = i, tl !== null) if (nl) try {
					(tl.nodeType === 9 ? tl.body : tl.nodeName === "HTML" ? tl.ownerDocument.body : tl).removeChild(n.stateNode);
				} catch (e) {
					Uu(n, t, e);
				}
				else try {
					tl.removeChild(n.stateNode);
				} catch (e) {
					Uu(n, t, e);
				}
				break;
			case 18:
				tl !== null && (nl ? (e = tl, $d(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), Pp(e)) : $d(tl, n.stateNode));
				break;
			case 4:
				r = tl, i = nl, tl = n.stateNode.containerInfo, nl = !0, rl(e, t, n), tl = r, nl = i;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				Fc(2, n, t), Jc || Fc(4, n, t), rl(e, t, n);
				break;
			case 1:
				Jc || (zc(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function" && Lc(n, t, r)), rl(e, t, n);
				break;
			case 21:
				rl(e, t, n);
				break;
			case 22:
				Jc = (r = Jc) || n.memoizedState !== null, rl(e, t, n), Jc = r;
				break;
			default: rl(e, t, n);
		}
	}
	function al(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
			e = e.dehydrated;
			try {
				Pp(e);
			} catch (e) {
				Uu(t, t.return, e);
			}
		}
	}
	function ol(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
			Pp(e);
		} catch (e) {
			Uu(t, t.return, e);
		}
	}
	function sl(e) {
		switch (e.tag) {
			case 31:
			case 13:
			case 19:
				var t = e.stateNode;
				return t === null && (t = e.stateNode = new Xc()), t;
			case 22: return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Xc()), t;
			default: throw Error(i(435, e.tag));
		}
	}
	function cl(e, t) {
		var n = sl(e);
		t.forEach(function(t) {
			if (!n.has(t)) {
				n.add(t);
				var r = Ju.bind(null, e, t);
				t.then(r, r);
			}
		});
	}
	function ll(e, t) {
		var n = t.deletions;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var a = n[r], o = e, s = t, c = s;
			a: for (; c !== null;) {
				switch (c.tag) {
					case 27:
						if (Qd(c.type)) {
							tl = c.stateNode, nl = !1;
							break a;
						}
						break;
					case 5:
						tl = c.stateNode, nl = !1;
						break a;
					case 3:
					case 4:
						tl = c.stateNode.containerInfo, nl = !0;
						break a;
				}
				c = c.return;
			}
			if (tl === null) throw Error(i(160));
			il(o, s, a), tl = null, nl = !1, o = a.alternate, o !== null && (o.return = null), a.return = null;
		}
		if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) dl(t, e), t = t.sibling;
	}
	var ul = null;
	function dl(e, t) {
		var n = e.alternate, r = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				ll(t, e), fl(e), r & 4 && (Fc(3, e, e.return), Pc(3, e), Fc(5, e, e.return));
				break;
			case 1:
				ll(t, e), fl(e), r & 512 && (Jc || n === null || zc(n, n.return)), r & 64 && qc && (e = e.updateQueue, e !== null && (r = e.callbacks, r !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? r : n.concat(r))));
				break;
			case 26:
				var a = ul;
				if (ll(t, e), fl(e), r & 512 && (Jc || n === null || zc(n, n.return)), r & 4) {
					var o = n === null ? null : n.memoizedState;
					if (r = e.memoizedState, n === null) if (r === null) if (e.stateNode === null) {
						a: {
							r = e.type, n = e.memoizedProps, a = a.ownerDocument || a;
							b: switch (r) {
								case "title":
									o = a.getElementsByTagName("title")[0], (!o || o[st] || o[et] || o.namespaceURI === "http://www.w3.org/2000/svg" || o.hasAttribute("itemprop")) && (o = a.createElement(r), a.head.insertBefore(o, a.querySelector("head > title"))), Fd(o, r, n), o[et] = e, pt(o), r = o;
									break a;
								case "link":
									var s = Hf("link", "href", a).get(r + (n.href || ""));
									if (s) {
										for (var c = 0; c < s.length; c++) if (o = s[c], o.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && o.getAttribute("rel") === (n.rel == null ? null : n.rel) && o.getAttribute("title") === (n.title == null ? null : n.title) && o.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
											s.splice(c, 1);
											break b;
										}
									}
									o = a.createElement(r), Fd(o, r, n), a.head.appendChild(o);
									break;
								case "meta":
									if (s = Hf("meta", "content", a).get(r + (n.content || ""))) {
										for (c = 0; c < s.length; c++) if (o = s[c], o.getAttribute("content") === (n.content == null ? null : "" + n.content) && o.getAttribute("name") === (n.name == null ? null : n.name) && o.getAttribute("property") === (n.property == null ? null : n.property) && o.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && o.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
											s.splice(c, 1);
											break b;
										}
									}
									o = a.createElement(r), Fd(o, r, n), a.head.appendChild(o);
									break;
								default: throw Error(i(468, r));
							}
							o[et] = e, pt(o), r = o;
						}
						e.stateNode = r;
					} else Uf(a, e.type, e.stateNode);
					else e.stateNode = Lf(a, r, e.memoizedProps);
					else o === r ? r === null && e.stateNode !== null && Vc(e, e.memoizedProps, n.memoizedProps) : (o === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : o.count--, r === null ? Uf(a, e.type, e.stateNode) : Lf(a, r, e.memoizedProps));
				}
				break;
			case 27:
				ll(t, e), fl(e), r & 512 && (Jc || n === null || zc(n, n.return)), n !== null && r & 4 && Vc(e, e.memoizedProps, n.memoizedProps);
				break;
			case 5:
				if (ll(t, e), fl(e), r & 512 && (Jc || n === null || zc(n, n.return)), e.flags & 32) {
					a = e.stateNode;
					try {
						Rt(a, "");
					} catch (t) {
						Uu(e, e.return, t);
					}
				}
				r & 4 && e.stateNode != null && (a = e.memoizedProps, Vc(e, a, n === null ? a : n.memoizedProps)), r & 1024 && (Yc = !0);
				break;
			case 6:
				if (ll(t, e), fl(e), r & 4) {
					if (e.stateNode === null) throw Error(i(162));
					r = e.memoizedProps, n = e.stateNode;
					try {
						n.nodeValue = r;
					} catch (t) {
						Uu(e, e.return, t);
					}
				}
				break;
			case 3:
				if (Vf = null, a = ul, ul = _f(t.containerInfo), ll(t, e), ul = a, fl(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
					Pp(t.containerInfo);
				} catch (t) {
					Uu(e, e.return, t);
				}
				Yc && (Yc = !1, pl(e));
				break;
			case 4:
				r = ul, ul = _f(e.stateNode.containerInfo), ll(t, e), fl(e), ul = r;
				break;
			case 12:
				ll(t, e), fl(e);
				break;
			case 31:
				ll(t, e), fl(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, cl(e, r)));
				break;
			case 13:
				ll(t, e), fl(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Zl = ye()), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, cl(e, r)));
				break;
			case 22:
				a = e.memoizedState !== null;
				var l = n !== null && n.memoizedState !== null, u = qc, d = Jc;
				if (qc = u || a, Jc = d || l, ll(t, e), Jc = d, qc = u, fl(e), r & 8192) a: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (n === null || l || qc || Jc || hl(e)), n = null, t = e;;) {
					if (t.tag === 5 || t.tag === 26) {
						if (n === null) {
							l = n = t;
							try {
								if (o = l.stateNode, a) s = o.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
								else {
									c = l.stateNode;
									var f = l.memoizedProps.style, p = f != null && f.hasOwnProperty("display") ? f.display : null;
									c.style.display = p == null || typeof p == "boolean" ? "" : ("" + p).trim();
								}
							} catch (e) {
								Uu(l, l.return, e);
							}
						}
					} else if (t.tag === 6) {
						if (n === null) {
							l = t;
							try {
								l.stateNode.nodeValue = a ? "" : l.memoizedProps;
							} catch (e) {
								Uu(l, l.return, e);
							}
						}
					} else if (t.tag === 18) {
						if (n === null) {
							l = t;
							try {
								var m = l.stateNode;
								a ? ef(m, !0) : ef(l.stateNode, !1);
							} catch (e) {
								Uu(l, l.return, e);
							}
						}
					} else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
						t.child.return = t, t = t.child;
						continue;
					}
					if (t === e) break a;
					for (; t.sibling === null;) {
						if (t.return === null || t.return === e) break a;
						n === t && (n = null), t = t.return;
					}
					n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
				}
				r & 4 && (r = e.updateQueue, r !== null && (n = r.retryQueue, n !== null && (r.retryQueue = null, cl(e, n))));
				break;
			case 19:
				ll(t, e), fl(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, cl(e, r)));
				break;
			case 30: break;
			case 21: break;
			default: ll(t, e), fl(e);
		}
	}
	function fl(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				for (var n, r = e.return; r !== null;) {
					if (Hc(r)) {
						n = r;
						break;
					}
					r = r.return;
				}
				if (n == null) throw Error(i(160));
				switch (n.tag) {
					case 27:
						var a = n.stateNode;
						Gc(e, Uc(e), a);
						break;
					case 5:
						var o = n.stateNode;
						n.flags & 32 && (Rt(o, ""), n.flags &= -33), Gc(e, Uc(e), o);
						break;
					case 3:
					case 4:
						var s = n.stateNode.containerInfo;
						Wc(e, Uc(e), s);
						break;
					default: throw Error(i(161));
				}
			} catch (t) {
				Uu(e, e.return, t);
			}
			e.flags &= -3;
		}
		t & 4096 && (e.flags &= -4097);
	}
	function pl(e) {
		if (e.subtreeFlags & 1024) for (e = e.child; e !== null;) {
			var t = e;
			pl(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
		}
	}
	function ml(e, t) {
		if (t.subtreeFlags & 8772) for (t = t.child; t !== null;) $c(e, t.alternate, t), t = t.sibling;
	}
	function hl(e) {
		for (e = e.child; e !== null;) {
			var t = e;
			switch (t.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					Fc(4, t, t.return), hl(t);
					break;
				case 1:
					zc(t, t.return);
					var n = t.stateNode;
					typeof n.componentWillUnmount == "function" && Lc(t, t.return, n), hl(t);
					break;
				case 27: mf(t.stateNode);
				case 26:
				case 5:
					zc(t, t.return), hl(t);
					break;
				case 22:
					t.memoizedState === null && hl(t);
					break;
				case 30:
					hl(t);
					break;
				default: hl(t);
			}
			e = e.sibling;
		}
	}
	function gl(e, t, n) {
		for (n &&= (t.subtreeFlags & 8772) != 0, t = t.child; t !== null;) {
			var r = t.alternate, i = e, a = t, o = a.flags;
			switch (a.tag) {
				case 0:
				case 11:
				case 15:
					gl(i, a, n), Pc(4, a);
					break;
				case 1:
					if (gl(i, a, n), r = a, i = r.stateNode, typeof i.componentDidMount == "function") try {
						i.componentDidMount();
					} catch (e) {
						Uu(r, r.return, e);
					}
					if (r = a, i = r.updateQueue, i !== null) {
						var s = r.stateNode;
						try {
							var c = i.shared.hiddenCallbacks;
							if (c !== null) for (i.shared.hiddenCallbacks = null, i = 0; i < c.length; i++) Va(c[i], s);
						} catch (e) {
							Uu(r, r.return, e);
						}
					}
					n && o & 64 && Ic(a), Rc(a, a.return);
					break;
				case 27: Kc(a);
				case 26:
				case 5:
					gl(i, a, n), n && r === null && o & 4 && Bc(a), Rc(a, a.return);
					break;
				case 12:
					gl(i, a, n);
					break;
				case 31:
					gl(i, a, n), n && o & 4 && al(i, a);
					break;
				case 13:
					gl(i, a, n), n && o & 4 && ol(i, a);
					break;
				case 22:
					a.memoizedState === null && gl(i, a, n), Rc(a, a.return);
					break;
				case 30: break;
				default: gl(i, a, n);
			}
			t = t.sibling;
		}
	}
	function _l(e, t) {
		var n = null;
		e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && ea(n));
	}
	function vl(e, t) {
		e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ea(e));
	}
	function yl(e, t, n, r) {
		if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) bl(e, t, n, r), t = t.sibling;
	}
	function bl(e, t, n, r) {
		var i = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				yl(e, t, n, r), i & 2048 && Pc(9, t);
				break;
			case 1:
				yl(e, t, n, r);
				break;
			case 3:
				yl(e, t, n, r), i & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ea(e)));
				break;
			case 12:
				if (i & 2048) {
					yl(e, t, n, r), e = t.stateNode;
					try {
						var a = t.memoizedProps, o = a.id, s = a.onPostCommit;
						typeof s == "function" && s(o, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
					} catch (e) {
						Uu(t, t.return, e);
					}
				} else yl(e, t, n, r);
				break;
			case 31:
				yl(e, t, n, r);
				break;
			case 13:
				yl(e, t, n, r);
				break;
			case 23: break;
			case 22:
				a = t.stateNode, o = t.alternate, t.memoizedState === null ? a._visibility & 2 ? yl(e, t, n, r) : (a._visibility |= 2, xl(e, t, n, r, (t.subtreeFlags & 10256) != 0 || !1)) : a._visibility & 2 ? yl(e, t, n, r) : Sl(e, t), i & 2048 && _l(o, t);
				break;
			case 24:
				yl(e, t, n, r), i & 2048 && vl(t.alternate, t);
				break;
			default: yl(e, t, n, r);
		}
	}
	function xl(e, t, n, r, i) {
		for (i &&= (t.subtreeFlags & 10256) != 0 || !1, t = t.child; t !== null;) {
			var a = e, o = t, s = n, c = r, l = o.flags;
			switch (o.tag) {
				case 0:
				case 11:
				case 15:
					xl(a, o, s, c, i), Pc(8, o);
					break;
				case 23: break;
				case 22:
					var u = o.stateNode;
					o.memoizedState === null ? (u._visibility |= 2, xl(a, o, s, c, i)) : u._visibility & 2 ? xl(a, o, s, c, i) : Sl(a, o), i && l & 2048 && _l(o.alternate, o);
					break;
				case 24:
					xl(a, o, s, c, i), i && l & 2048 && vl(o.alternate, o);
					break;
				default: xl(a, o, s, c, i);
			}
			t = t.sibling;
		}
	}
	function Sl(e, t) {
		if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) {
			var n = e, r = t, i = r.flags;
			switch (r.tag) {
				case 22:
					Sl(n, r), i & 2048 && _l(r.alternate, r);
					break;
				case 24:
					Sl(n, r), i & 2048 && vl(r.alternate, r);
					break;
				default: Sl(n, r);
			}
			t = t.sibling;
		}
	}
	var Cl = 8192;
	function wl(e, t, n) {
		if (e.subtreeFlags & Cl) for (e = e.child; e !== null;) Tl(e, t, n), e = e.sibling;
	}
	function Tl(e, t, n) {
		switch (e.tag) {
			case 26:
				wl(e, t, n), e.flags & Cl && e.memoizedState !== null && Kf(n, ul, e.memoizedState, e.memoizedProps);
				break;
			case 5:
				wl(e, t, n);
				break;
			case 3:
			case 4:
				var r = ul;
				ul = _f(e.stateNode.containerInfo), wl(e, t, n), ul = r;
				break;
			case 22:
				e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = Cl, Cl = 16777216, wl(e, t, n), Cl = r) : wl(e, t, n));
				break;
			default: wl(e, t, n);
		}
	}
	function El(e) {
		var t = e.alternate;
		if (t !== null && (e = t.child, e !== null)) {
			t.child = null;
			do
				t = e.sibling, e.sibling = null, e = t;
			while (e !== null);
		}
	}
	function Dl(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				Zc = r, Al(r, e);
			}
			El(e);
		}
		if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) Ol(e), e = e.sibling;
	}
	function Ol(e) {
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				Dl(e), e.flags & 2048 && Fc(9, e, e.return);
				break;
			case 3:
				Dl(e);
				break;
			case 12:
				Dl(e);
				break;
			case 22:
				var t = e.stateNode;
				e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, kl(e)) : Dl(e);
				break;
			default: Dl(e);
		}
	}
	function kl(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				Zc = r, Al(r, e);
			}
			El(e);
		}
		for (e = e.child; e !== null;) {
			switch (t = e, t.tag) {
				case 0:
				case 11:
				case 15:
					Fc(8, t, t.return), kl(t);
					break;
				case 22:
					n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, kl(t));
					break;
				default: kl(t);
			}
			e = e.sibling;
		}
	}
	function Al(e, t) {
		for (; Zc !== null;) {
			var n = Zc;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					Fc(8, n, t);
					break;
				case 23:
				case 22:
					if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
						var r = n.memoizedState.cachePool.pool;
						r != null && r.refCount++;
					}
					break;
				case 24: ea(n.memoizedState.cache);
			}
			if (r = n.child, r !== null) r.return = n, Zc = r;
			else a: for (n = e; Zc !== null;) {
				r = Zc;
				var i = r.sibling, a = r.return;
				if (el(r), r === n) {
					Zc = null;
					break a;
				}
				if (i !== null) {
					i.return = a, Zc = i;
					break a;
				}
				Zc = a;
			}
		}
	}
	var jl = {
		getCacheForType: function(e) {
			var t = Ki(Qi), n = t.data.get(e);
			return n === void 0 && (n = e(), t.data.set(e, n)), n;
		},
		cacheSignal: function() {
			return Ki(Qi).controller.signal;
		}
	}, Ml = typeof WeakMap == "function" ? WeakMap : Map, Nl = 0, Pl = null, Fl = null, Q = 0, Il = 0, Ll = null, Rl = !1, zl = !1, Bl = !1, Vl = 0, Hl = 0, Ul = 0, Wl = 0, Gl = 0, Kl = 0, ql = 0, Jl = null, Yl = null, Xl = !1, Zl = 0, Ql = 0, $l = Infinity, eu = null, tu = null, nu = 0, ru = null, iu = null, au = 0, ou = 0, su = null, cu = null, lu = 0, uu = null;
	function du() {
		return Nl & 2 && Q !== 0 ? Q & -Q : P.T === null ? Ze() : ud();
	}
	function fu() {
		if (Kl === 0) if (!(Q & 536870912) || Ti) {
			var e = Ie;
			Ie <<= 1, !(Ie & 3932160) && (Ie = 262144), Kl = e;
		} else Kl = 536870912;
		return e = Ja.current, e !== null && (e.flags |= 32), Kl;
	}
	function pu(e, t, n) {
		(e === Pl && (Il === 2 || Il === 9) || e.cancelPendingCommit !== null) && (bu(e, 0), _u(e, Q, Kl, !1)), We(e, n), (!(Nl & 2) || e !== Pl) && (e === Pl && (!(Nl & 2) && (Wl |= n), Hl === 4 && _u(e, Q, Kl, !1)), nd(e));
	}
	function mu(e, t, n) {
		if (Nl & 6) throw Error(i(327));
		var r = !n && (t & 127) == 0 && (t & e.expiredLanes) === 0 || Be(e, t), a = r ? Ou(e, t) : Eu(e, t, !0), o = r;
		do {
			if (a === 0) {
				zl && !r && _u(e, t, 0, !1);
				break;
			} else {
				if (n = e.current.alternate, o && !gu(n)) {
					a = Eu(e, t, !1), o = !1;
					continue;
				}
				if (a === 2) {
					if (o = t, e.errorRecoveryDisabledLanes & o) var s = 0;
					else s = e.pendingLanes & -536870913, s = s === 0 ? s & 536870912 ? 536870912 : 0 : s;
					if (s !== 0) {
						t = s;
						a: {
							var c = e;
							a = Jl;
							var l = c.current.memoizedState.isDehydrated;
							if (l && (bu(c, s).flags |= 256), s = Eu(c, s, !1), s !== 2) {
								if (Bl && !l) {
									c.errorRecoveryDisabledLanes |= o, Wl |= o, a = 4;
									break a;
								}
								o = Yl, Yl = a, o !== null && (Yl === null ? Yl = o : Yl.push.apply(Yl, o));
							}
							a = s;
						}
						if (o = !1, a !== 2) continue;
					}
				}
				if (a === 1) {
					bu(e, 0), _u(e, t, 0, !0);
					break;
				}
				a: {
					switch (r = e, o = a, o) {
						case 0:
						case 1: throw Error(i(345));
						case 4: if ((t & 4194048) !== t) break;
						case 6:
							_u(r, t, Kl, !Rl);
							break a;
						case 2:
							Yl = null;
							break;
						case 3:
						case 5: break;
						default: throw Error(i(329));
					}
					if ((t & 62914560) === t && (a = Zl + 300 - ye(), 10 < a)) {
						if (_u(r, t, Kl, !Rl), ze(r, 0, !0) !== 0) break a;
						au = t, r.timeoutHandle = qd(hu.bind(null, r, n, Yl, eu, Xl, t, Kl, Wl, ql, Rl, o, "Throttled", -0, 0), a);
						break a;
					}
					hu(r, n, Yl, eu, Xl, t, Kl, Wl, ql, Rl, o, null, -0, 0);
				}
			}
			break;
		} while (1);
		nd(e);
	}
	function hu(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
		if (e.timeoutHandle = -1, d = t.subtreeFlags, d & 8192 || (d & 16785408) == 16785408) {
			d = {
				stylesheets: null,
				count: 0,
				imgCount: 0,
				imgBytes: 0,
				suspenseyImages: [],
				waitingForImages: !0,
				waitingForViewTransition: !1,
				unsuspend: Kt
			}, Tl(t, a, d);
			var m = (a & 62914560) === a ? Zl - ye() : (a & 4194048) === a ? Ql - ye() : 0;
			if (m = Jf(d, m), m !== null) {
				au = a, e.cancelPendingCommit = m(Fu.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p)), _u(e, a, o, !l);
				return;
			}
		}
		Fu(e, t, a, n, r, i, o, s, c);
	}
	function gu(e) {
		for (var t = e;;) {
			var n = t.tag;
			if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var r = 0; r < n.length; r++) {
				var i = n[r], a = i.getSnapshot;
				i = i.value;
				try {
					if (!hr(a(), i)) return !1;
				} catch {
					return !1;
				}
			}
			if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
			else {
				if (t === e) break;
				for (; t.sibling === null;) {
					if (t.return === null || t.return === e) return !0;
					t = t.return;
				}
				t.sibling.return = t.return, t = t.sibling;
			}
		}
		return !0;
	}
	function _u(e, t, n, r) {
		t &= ~Gl, t &= ~Wl, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
		for (var i = t; 0 < i;) {
			var a = 31 - je(i), o = 1 << a;
			r[a] = -1, i &= ~o;
		}
		n !== 0 && Ke(e, n, t);
	}
	function vu() {
		return Nl & 6 ? !0 : (rd(0, !1), !1);
	}
	function yu() {
		if (Fl !== null) {
			if (Il === 0) var e = Fl.return;
			else e = Fl, Ri = Li = null, Co(e), Ca = null, wa = 0, e = Fl;
			for (; e !== null;) Nc(e.alternate, e), e = e.return;
			Fl = null;
		}
	}
	function bu(e, t) {
		var n = e.timeoutHandle;
		n !== -1 && (e.timeoutHandle = -1, Jd(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), au = 0, yu(), Pl = e, Fl = n = ti(e.current, null), Q = t, Il = 0, Ll = null, Rl = !1, zl = Be(e, t), Bl = !1, ql = Kl = Gl = Wl = Ul = Hl = 0, Yl = Jl = null, Xl = !1, t & 8 && (t |= t & 32);
		var r = e.entangledLanes;
		if (r !== 0) for (e = e.entanglements, r &= t; 0 < r;) {
			var i = 31 - je(r), a = 1 << i;
			t |= e[i], r &= ~a;
		}
		return Vl = t, Kr(), n;
	}
	function xu(e, t) {
		io = null, P.H = As, t === pa || t === ha ? (t = xa(), Il = 3) : t === ma ? (t = xa(), Il = 4) : Il = t === Js ? 8 : typeof t == "object" && t && typeof t.then == "function" ? 6 : 1, Ll = t, Fl === null && (Hl = 1, Hs(e, li(t, e.current)));
	}
	function Su() {
		var e = Ja.current;
		return e === null ? !0 : (Q & 4194048) === Q ? Ya === null : (Q & 62914560) === Q || Q & 536870912 ? e === Ya : !1;
	}
	function Cu() {
		var e = P.H;
		return P.H = As, e === null ? As : e;
	}
	function wu() {
		var e = P.A;
		return P.A = jl, e;
	}
	function Tu() {
		Hl = 4, Rl || (Q & 4194048) !== Q && Ja.current !== null || (zl = !0), !(Ul & 134217727) && !(Wl & 134217727) || Pl === null || _u(Pl, Q, Kl, !1);
	}
	function Eu(e, t, n) {
		var r = Nl;
		Nl |= 2;
		var i = Cu(), a = wu();
		(Pl !== e || Q !== t) && (eu = null, bu(e, t)), t = !1;
		var o = Hl;
		a: do
			try {
				if (Il !== 0 && Fl !== null) {
					var s = Fl, c = Ll;
					switch (Il) {
						case 8:
							yu(), o = 6;
							break a;
						case 3:
						case 2:
						case 9:
						case 6:
							Ja.current === null && (t = !0);
							var l = Il;
							if (Il = 0, Ll = null, Mu(e, s, c, l), n && zl) {
								o = 0;
								break a;
							}
							break;
						default: l = Il, Il = 0, Ll = null, Mu(e, s, c, l);
					}
				}
				Du(), o = Hl;
				break;
			} catch (t) {
				xu(e, t);
			}
		while (1);
		return t && e.shellSuspendCounter++, Ri = Li = null, Nl = r, P.H = i, P.A = a, Fl === null && (Pl = null, Q = 0, Kr()), o;
	}
	function Du() {
		for (; Fl !== null;) Au(Fl);
	}
	function Ou(e, t) {
		var n = Nl;
		Nl |= 2;
		var r = Cu(), a = wu();
		Pl !== e || Q !== t ? (eu = null, $l = ye() + 500, bu(e, t)) : zl = Be(e, t);
		a: do
			try {
				if (Il !== 0 && Fl !== null) {
					t = Fl;
					var o = Ll;
					b: switch (Il) {
						case 1:
							Il = 0, Ll = null, Mu(e, t, o, 1);
							break;
						case 2:
						case 9:
							if (_a(o)) {
								Il = 0, Ll = null, ju(t);
								break;
							}
							t = function() {
								Il !== 2 && Il !== 9 || Pl !== e || (Il = 7), nd(e);
							}, o.then(t, t);
							break a;
						case 3:
							Il = 7;
							break a;
						case 4:
							Il = 5;
							break a;
						case 7:
							_a(o) ? (Il = 0, Ll = null, ju(t)) : (Il = 0, Ll = null, Mu(e, t, o, 7));
							break;
						case 5:
							var s = null;
							switch (Fl.tag) {
								case 26: s = Fl.memoizedState;
								case 5:
								case 27:
									var c = Fl;
									if (s ? Gf(s) : c.stateNode.complete) {
										Il = 0, Ll = null;
										var l = c.sibling;
										if (l !== null) Fl = l;
										else {
											var u = c.return;
											u === null ? Fl = null : (Fl = u, Nu(u));
										}
										break b;
									}
							}
							Il = 0, Ll = null, Mu(e, t, o, 5);
							break;
						case 6:
							Il = 0, Ll = null, Mu(e, t, o, 6);
							break;
						case 8:
							yu(), Hl = 6;
							break a;
						default: throw Error(i(462));
					}
				}
				ku();
				break;
			} catch (t) {
				xu(e, t);
			}
		while (1);
		return Ri = Li = null, P.H = r, P.A = a, Nl = n, Fl === null ? (Pl = null, Q = 0, Kr(), Hl) : 0;
	}
	function ku() {
		for (; Fl !== null && !_e();) Au(Fl);
	}
	function Au(e) {
		var t = wc(e.alternate, e, Vl);
		e.memoizedProps = e.pendingProps, t === null ? Nu(e) : Fl = t;
	}
	function ju(e) {
		var t = e, n = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = cc(n, t, t.pendingProps, t.type, void 0, Q);
				break;
			case 11:
				t = cc(n, t, t.pendingProps, t.type.render, t.ref, Q);
				break;
			case 5: Co(t);
			default: Nc(n, t), t = Fl = ni(t, Vl), t = wc(n, t, Vl);
		}
		e.memoizedProps = e.pendingProps, t === null ? Nu(e) : Fl = t;
	}
	function Mu(e, t, n, r) {
		Ri = Li = null, Co(t), Ca = null, wa = 0;
		var i = t.return;
		try {
			if (qs(e, i, t, n, Q)) {
				Hl = 1, Hs(e, li(n, e.current)), Fl = null;
				return;
			}
		} catch (t) {
			if (i !== null) throw Fl = i, t;
			Hl = 1, Hs(e, li(n, e.current)), Fl = null;
			return;
		}
		t.flags & 32768 ? (Ti || r === 1 ? e = !0 : zl || Q & 536870912 ? e = !1 : (Rl = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = Ja.current, r !== null && r.tag === 13 && (r.flags |= 16384))), Pu(t, e)) : Nu(t);
	}
	function Nu(e) {
		var t = e;
		do {
			if (t.flags & 32768) {
				Pu(t, Rl);
				return;
			}
			e = t.return;
			var n = jc(t.alternate, t, Vl);
			if (n !== null) {
				Fl = n;
				return;
			}
			if (t = t.sibling, t !== null) {
				Fl = t;
				return;
			}
			Fl = t = e;
		} while (t !== null);
		Hl === 0 && (Hl = 5);
	}
	function Pu(e, t) {
		do {
			var n = Mc(e.alternate, e);
			if (n !== null) {
				n.flags &= 32767, Fl = n;
				return;
			}
			if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
				Fl = e;
				return;
			}
			Fl = e = n;
		} while (e !== null);
		Hl = 6, Fl = null;
	}
	function Fu(e, t, n, r, a, o, s, c, l) {
		e.cancelPendingCommit = null;
		do
			Bu();
		while (nu !== 0);
		if (Nl & 6) throw Error(i(327));
		if (t !== null) {
			if (t === e.current) throw Error(i(177));
			if (o = t.lanes | t.childLanes, o |= Gr, Ge(e, n, o, s, c, l), e === Pl && (Fl = Pl = null, Q = 0), iu = t, ru = e, au = n, ou = o, su = a, cu = r, t.subtreeFlags & 10256 || t.flags & 10256 ? (e.callbackNode = null, e.callbackPriority = 0, Yu(Ce, function() {
				return Vu(), null;
			})) : (e.callbackNode = null, e.callbackPriority = 0), r = (t.flags & 13878) != 0, t.subtreeFlags & 13878 || r) {
				r = P.T, P.T = null, a = F.p, F.p = 2, s = Nl, Nl |= 4;
				try {
					Qc(e, t, n);
				} finally {
					Nl = s, F.p = a, P.T = r;
				}
			}
			nu = 1, Iu(), Lu(), Ru();
		}
	}
	function Iu() {
		if (nu === 1) {
			nu = 0;
			var e = ru, t = iu, n = (t.flags & 13878) != 0;
			if (t.subtreeFlags & 13878 || n) {
				n = P.T, P.T = null;
				var r = F.p;
				F.p = 2;
				var i = Nl;
				Nl |= 4;
				try {
					dl(t, e);
					var a = Bd, o = br(e.containerInfo), s = a.focusedElem, c = a.selectionRange;
					if (o !== s && s && s.ownerDocument && yr(s.ownerDocument.documentElement, s)) {
						if (c !== null && xr(s)) {
							var l = c.start, u = c.end;
							if (u === void 0 && (u = l), "selectionStart" in s) s.selectionStart = l, s.selectionEnd = Math.min(u, s.value.length);
							else {
								var d = s.ownerDocument || document, f = d && d.defaultView || window;
								if (f.getSelection) {
									var p = f.getSelection(), m = s.textContent.length, h = Math.min(c.start, m), g = c.end === void 0 ? h : Math.min(c.end, m);
									!p.extend && h > g && (o = g, g = h, h = o);
									var _ = vr(s, h), v = vr(s, g);
									if (_ && v && (p.rangeCount !== 1 || p.anchorNode !== _.node || p.anchorOffset !== _.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
										var y = d.createRange();
										y.setStart(_.node, _.offset), p.removeAllRanges(), h > g ? (p.addRange(y), p.extend(v.node, v.offset)) : (y.setEnd(v.node, v.offset), p.addRange(y));
									}
								}
							}
						}
						for (d = [], p = s; p = p.parentNode;) p.nodeType === 1 && d.push({
							element: p,
							left: p.scrollLeft,
							top: p.scrollTop
						});
						for (typeof s.focus == "function" && s.focus(), s = 0; s < d.length; s++) {
							var b = d[s];
							b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
						}
					}
					cp = !!zd, Bd = zd = null;
				} finally {
					Nl = i, F.p = r, P.T = n;
				}
			}
			e.current = t, nu = 2;
		}
	}
	function Lu() {
		if (nu === 2) {
			nu = 0;
			var e = ru, t = iu, n = (t.flags & 8772) != 0;
			if (t.subtreeFlags & 8772 || n) {
				n = P.T, P.T = null;
				var r = F.p;
				F.p = 2;
				var i = Nl;
				Nl |= 4;
				try {
					$c(e, t.alternate, t);
				} finally {
					Nl = i, F.p = r, P.T = n;
				}
			}
			nu = 3;
		}
	}
	function Ru() {
		if (nu === 4 || nu === 3) {
			nu = 0, ve();
			var e = ru, t = iu, n = au, r = cu;
			t.subtreeFlags & 10256 || t.flags & 10256 ? nu = 5 : (nu = 0, iu = ru = null, zu(e, e.pendingLanes));
			var i = e.pendingLanes;
			if (i === 0 && (tu = null), Xe(n), t = t.stateNode, ke && typeof ke.onCommitFiberRoot == "function") try {
				ke.onCommitFiberRoot(Oe, t, void 0, (t.current.flags & 128) == 128);
			} catch {}
			if (r !== null) {
				t = P.T, i = F.p, F.p = 2, P.T = null;
				try {
					for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
						var s = r[o];
						a(s.value, { componentStack: s.stack });
					}
				} finally {
					P.T = t, F.p = i;
				}
			}
			au & 3 && Bu(), nd(e), i = e.pendingLanes, n & 261930 && i & 42 ? e === uu ? lu++ : (lu = 0, uu = e) : lu = 0, rd(0, !1);
		}
	}
	function zu(e, t) {
		(e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, ea(t)));
	}
	function Bu() {
		return Iu(), Lu(), Ru(), Vu();
	}
	function Vu() {
		if (nu !== 5) return !1;
		var e = ru, t = ou;
		ou = 0;
		var n = Xe(au), r = P.T, a = F.p;
		try {
			F.p = 32 > n ? 32 : n, P.T = null, n = su, su = null;
			var o = ru, s = au;
			if (nu = 0, iu = ru = null, au = 0, Nl & 6) throw Error(i(331));
			var c = Nl;
			if (Nl |= 4, Ol(o.current), bl(o, o.current, s, n), Nl = c, rd(0, !1), ke && typeof ke.onPostCommitFiberRoot == "function") try {
				ke.onPostCommitFiberRoot(Oe, o);
			} catch {}
			return !0;
		} finally {
			F.p = a, P.T = r, zu(e, t);
		}
	}
	function Hu(e, t, n) {
		t = li(n, t), t = Ws(e.stateNode, t, 2), e = Fa(e, t, 2), e !== null && (We(e, 2), nd(e));
	}
	function Uu(e, t, n) {
		if (e.tag === 3) Hu(e, e, n);
		else for (; t !== null;) {
			if (t.tag === 3) {
				Hu(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (tu === null || !tu.has(r))) {
					e = li(n, e), n = Gs(2), r = Fa(t, n, 2), r !== null && (Ks(n, r, t, e), We(r, 2), nd(r));
					break;
				}
			}
			t = t.return;
		}
	}
	function Wu(e, t, n) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new Ml();
			var i = /* @__PURE__ */ new Set();
			r.set(t, i);
		} else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
		i.has(n) || (Bl = !0, i.add(n), e = Gu.bind(null, e, t, n), t.then(e, e));
	}
	function Gu(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Pl === e && (Q & n) === n && (Hl === 4 || Hl === 3 && (Q & 62914560) === Q && 300 > ye() - Zl ? !(Nl & 2) && bu(e, 0) : Gl |= n, ql === Q && (ql = 0)), nd(e);
	}
	function Ku(e, t) {
		t === 0 && (t = He()), e = Jr(e, t), e !== null && (We(e, t), nd(e));
	}
	function qu(e) {
		var t = e.memoizedState, n = 0;
		t !== null && (n = t.retryLane), Ku(e, n);
	}
	function Ju(e, t) {
		var n = 0;
		switch (e.tag) {
			case 31:
			case 13:
				var r = e.stateNode, a = e.memoizedState;
				a !== null && (n = a.retryLane);
				break;
			case 19:
				r = e.stateNode;
				break;
			case 22:
				r = e.stateNode._retryCache;
				break;
			default: throw Error(i(314));
		}
		r !== null && r.delete(t), Ku(e, n);
	}
	function Yu(e, t) {
		return ge(e, t);
	}
	var Xu = null, Zu = null, Qu = !1, $u = !1, ed = !1, td = 0;
	function nd(e) {
		e !== Zu && e.next === null && (Zu === null ? Xu = Zu = e : Zu = Zu.next = e), $u = !0, Qu || (Qu = !0, ld());
	}
	function rd(e, t) {
		if (!ed && $u) {
			ed = !0;
			do
				for (var n = !1, r = Xu; r !== null;) {
					if (!t) if (e !== 0) {
						var i = r.pendingLanes;
						if (i === 0) var a = 0;
						else {
							var o = r.suspendedLanes, s = r.pingedLanes;
							a = (1 << 31 - je(42 | e) + 1) - 1, a &= i & ~(o & ~s), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
						}
						a !== 0 && (n = !0, cd(r, a));
					} else a = Q, a = ze(r, r === Pl ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), !(a & 3) || Be(r, a) || (n = !0, cd(r, a));
					r = r.next;
				}
			while (n);
			ed = !1;
		}
	}
	function id() {
		ad();
	}
	function ad() {
		$u = Qu = !1;
		var e = 0;
		td !== 0 && Kd() && (e = td);
		for (var t = ye(), n = null, r = Xu; r !== null;) {
			var i = r.next, a = od(r, t);
			a === 0 ? (r.next = null, n === null ? Xu = i : n.next = i, i === null && (Zu = n)) : (n = r, (e !== 0 || a & 3) && ($u = !0)), r = i;
		}
		nu !== 0 && nu !== 5 || rd(e, !1), td !== 0 && (td = 0);
	}
	function od(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a;) {
			var o = 31 - je(a), s = 1 << o, c = i[o];
			c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = Ve(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
		}
		if (t = Pl, n = Q, n = ze(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, n === 0 || e === t && (Il === 2 || Il === 9) || e.cancelPendingCommit !== null) return r !== null && r !== null && W(r), e.callbackNode = null, e.callbackPriority = 0;
		if (!(n & 3) || Be(e, n)) {
			if (t = n & -n, t === e.callbackPriority) return t;
			switch (r !== null && W(r), Xe(n)) {
				case 2:
				case 8:
					n = Se;
					break;
				case 32:
					n = Ce;
					break;
				case 268435456:
					n = Te;
					break;
				default: n = Ce;
			}
			return r = sd.bind(null, e), n = ge(n, r), e.callbackPriority = t, e.callbackNode = n, t;
		}
		return r !== null && r !== null && W(r), e.callbackPriority = 2, e.callbackNode = null, 2;
	}
	function sd(e, t) {
		if (nu !== 0 && nu !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
		var n = e.callbackNode;
		if (Bu() && e.callbackNode !== n) return null;
		var r = Q;
		return r = ze(e, e === Pl ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (mu(e, r, t), od(e, ye()), e.callbackNode != null && e.callbackNode === n ? sd.bind(null, e) : null);
	}
	function cd(e, t) {
		if (Bu()) return null;
		mu(e, t, !0);
	}
	function ld() {
		Xd(function() {
			Nl & 6 ? ge(xe, id) : ad();
		});
	}
	function ud() {
		if (td === 0) {
			var e = ra;
			e === 0 && (e = Fe, Fe <<= 1, !(Fe & 261888) && (Fe = 256)), td = e;
		}
		return td;
	}
	function dd(e) {
		return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Gt("" + e);
	}
	function fd(e, t) {
		var n = t.ownerDocument.createElement("input");
		return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
	}
	function pd(e, t, n, r, i) {
		if (t === "submit" && n && n.stateNode === i) {
			var a = dd((i[tt] || null).action), o = r.submitter;
			o && (t = (t = o[tt] || null) ? dd(t.formAction) : o.getAttribute("formAction"), t !== null && (a = t, o = null));
			var s = new mn("action", "action", null, r, i);
			e.push({
				event: s,
				listeners: [{
					instance: null,
					listener: function() {
						if (r.defaultPrevented) {
							if (td !== 0) {
								var e = o ? fd(i, o) : new FormData(i);
								gs(n, {
									pending: !0,
									data: e,
									method: i.method,
									action: a
								}, null, e);
							}
						} else typeof a == "function" && (s.preventDefault(), e = o ? fd(i, o) : new FormData(i), gs(n, {
							pending: !0,
							data: e,
							method: i.method,
							action: a
						}, a, e));
					},
					currentTarget: i
				}]
			});
		}
	}
	for (var md = 0; md < Br.length; md++) {
		var hd = Br[md];
		Vr(hd.toLowerCase(), "on" + (hd[0].toUpperCase() + hd.slice(1)));
	}
	Vr(Mr, "onAnimationEnd"), Vr(Nr, "onAnimationIteration"), Vr(Pr, "onAnimationStart"), Vr("dblclick", "onDoubleClick"), Vr("focusin", "onFocus"), Vr("focusout", "onBlur"), Vr(Fr, "onTransitionRun"), Vr(Ir, "onTransitionStart"), Vr(Lr, "onTransitionCancel"), Vr(Rr, "onTransitionEnd"), _t("onMouseEnter", ["mouseout", "mouseover"]), _t("onMouseLeave", ["mouseout", "mouseover"]), _t("onPointerEnter", ["pointerout", "pointerover"]), _t("onPointerLeave", ["pointerout", "pointerover"]), gt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), gt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), gt("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]), gt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), gt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), gt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var gd = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), _d = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gd));
	function vd(e, t) {
		t = (t & 4) != 0;
		for (var n = 0; n < e.length; n++) {
			var r = e[n], i = r.event;
			r = r.listeners;
			a: {
				var a = void 0;
				if (t) for (var o = r.length - 1; 0 <= o; o--) {
					var s = r[o], c = s.instance, l = s.currentTarget;
					if (s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						Hr(e);
					}
					i.currentTarget = null, a = c;
				}
				else for (o = 0; o < r.length; o++) {
					if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						Hr(e);
					}
					i.currentTarget = null, a = c;
				}
			}
		}
	}
	function yd(e, t) {
		var n = t[rt];
		n === void 0 && (n = t[rt] = /* @__PURE__ */ new Set());
		var r = e + "__bubble";
		n.has(r) || (Cd(t, e, 2, !1), n.add(r));
	}
	function bd(e, t, n) {
		var r = 0;
		t && (r |= 4), Cd(n, e, r, t);
	}
	var xd = "_reactListening" + Math.random().toString(36).slice(2);
	function Sd(e) {
		if (!e[xd]) {
			e[xd] = !0, mt.forEach(function(t) {
				t !== "selectionchange" && (_d.has(t) || bd(t, !1, e), bd(t, !0, e));
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[xd] || (t[xd] = !0, bd("selectionchange", !1, t));
		}
	}
	function Cd(e, t, n, r) {
		switch (hp(t)) {
			case 2:
				var i = lp;
				break;
			case 8:
				i = up;
				break;
			default: i = dp;
		}
		n = i.bind(null, t, n, e), i = void 0, !nn || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
			capture: !0,
			passive: i
		}) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, { passive: i });
	}
	function wd(e, t, n, r, i) {
		var a = r;
		if (!(t & 1) && !(t & 2) && r !== null) a: for (;;) {
			if (r === null) return;
			var s = r.tag;
			if (s === 3 || s === 4) {
				var c = r.stateNode.containerInfo;
				if (c === i) break;
				if (s === 4) for (s = r.return; s !== null;) {
					var l = s.tag;
					if ((l === 3 || l === 4) && s.stateNode.containerInfo === i) return;
					s = s.return;
				}
				for (; c !== null;) {
					if (s = lt(c), s === null) return;
					if (l = s.tag, l === 5 || l === 6 || l === 26 || l === 27) {
						r = a = s;
						continue a;
					}
					c = c.parentNode;
				}
			}
			r = r.return;
		}
		$t(function() {
			var r = a, i = Jt(n), s = [];
			a: {
				var c = zr.get(e);
				if (c !== void 0) {
					var l = mn, u = e;
					switch (e) {
						case "keypress": if (ln(n) === 0) break a;
						case "keydown":
						case "keyup":
							l = Mn;
							break;
						case "focusin":
							u = "focus", l = Cn;
							break;
						case "focusout":
							u = "blur", l = Cn;
							break;
						case "beforeblur":
						case "afterblur":
							l = Cn;
							break;
						case "click": if (n.button === 2) break a;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							l = xn;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							l = Sn;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							l = Pn;
							break;
						case Mr:
						case Nr:
						case Pr:
							l = wn;
							break;
						case Rr:
							l = Fn;
							break;
						case "scroll":
						case "scrollend":
							l = gn;
							break;
						case "wheel":
							l = In;
							break;
						case "copy":
						case "cut":
						case "paste":
							l = Tn;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							l = Nn;
							break;
						case "toggle":
						case "beforetoggle": l = Ln;
					}
					var d = (t & 4) != 0, f = !d && (e === "scroll" || e === "scrollend"), p = d ? c === null ? null : c + "Capture" : c;
					d = [];
					for (var m = r, h; m !== null;) {
						var g = m;
						if (h = g.stateNode, g = g.tag, g !== 5 && g !== 26 && g !== 27 || h === null || p === null || (g = en(m, p), g != null && d.push(Td(m, g, h))), f) break;
						m = m.return;
					}
					0 < d.length && (c = new l(c, u, null, n, i), s.push({
						event: c,
						listeners: d
					}));
				}
			}
			if (!(t & 7)) {
				a: {
					if (c = e === "mouseover" || e === "pointerover", l = e === "mouseout" || e === "pointerout", c && n !== qt && (u = n.relatedTarget || n.fromElement) && (lt(u) || u[nt])) break a;
					if ((l || c) && (c = i.window === i ? i : (c = i.ownerDocument) ? c.defaultView || c.parentWindow : window, l ? (u = n.relatedTarget || n.toElement, l = r, u = u ? lt(u) : null, u !== null && (f = o(u), d = u.tag, u !== f || d !== 5 && d !== 27 && d !== 6) && (u = null)) : (l = null, u = r), l !== u)) {
						if (d = xn, g = "onMouseLeave", p = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (d = Nn, g = "onPointerLeave", p = "onPointerEnter", m = "pointer"), f = l == null ? c : dt(l), h = u == null ? c : dt(u), c = new d(g, m + "leave", l, n, i), c.target = f, c.relatedTarget = h, g = null, lt(i) === r && (d = new d(p, m + "enter", u, n, i), d.target = h, d.relatedTarget = f, g = d), f = g, l && u) b: {
							for (d = Dd, p = l, m = u, h = 0, g = p; g; g = d(g)) h++;
							g = 0;
							for (var _ = m; _; _ = d(_)) g++;
							for (; 0 < h - g;) p = d(p), h--;
							for (; 0 < g - h;) m = d(m), g--;
							for (; h--;) {
								if (p === m || m !== null && p === m.alternate) {
									d = p;
									break b;
								}
								p = d(p), m = d(m);
							}
							d = null;
						}
						else d = null;
						l !== null && Od(s, c, l, d, !1), u !== null && f !== null && Od(s, f, u, d, !0);
					}
				}
				a: {
					if (c = r ? dt(r) : window, l = c.nodeName && c.nodeName.toLowerCase(), l === "select" || l === "input" && c.type === "file") var v = rr;
					else if (Zn(c)) if (ir) v = pr;
					else {
						v = dr;
						var y = ur;
					}
					else l = c.nodeName, !l || l.toLowerCase() !== "input" || c.type !== "checkbox" && c.type !== "radio" ? r && Ht(r.elementType) && (v = rr) : v = fr;
					if (v &&= v(e, r)) {
						Qn(s, v, n, i);
						break a;
					}
					y && y(e, c, r), e === "focusout" && r && c.type === "number" && r.memoizedProps.value != null && Pt(c, "number", c.value);
				}
				switch (y = r ? dt(r) : window, e) {
					case "focusin":
						(Zn(y) || y.contentEditable === "true") && (Cr = y, wr = r, Tr = null);
						break;
					case "focusout":
						Tr = wr = Cr = null;
						break;
					case "mousedown":
						Er = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						Er = !1, K(s, n, i);
						break;
					case "selectionchange": if (Sr) break;
					case "keydown":
					case "keyup": K(s, n, i);
				}
				var b;
				if (zn) b: {
					switch (e) {
						case "compositionstart":
							var x = "onCompositionStart";
							break b;
						case "compositionend":
							x = "onCompositionEnd";
							break b;
						case "compositionupdate":
							x = "onCompositionUpdate";
							break b;
					}
					x = void 0;
				}
				else qn ? Gn(e, n) && (x = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (x = "onCompositionStart");
				x && (Hn && n.locale !== "ko" && (qn || x !== "onCompositionStart" ? x === "onCompositionEnd" && qn && (b = cn()) : (an = i, on = "value" in an ? an.value : an.textContent, qn = !0)), y = Ed(r, x), 0 < y.length && (x = new En(x, e, null, n, i), s.push({
					event: x,
					listeners: y
				}), b ? x.data = b : (b = Kn(n), b !== null && (x.data = b)))), (b = Vn ? Jn(e, n) : Yn(e, n)) && (x = Ed(r, "onBeforeInput"), 0 < x.length && (y = new En("onBeforeInput", "beforeinput", null, n, i), s.push({
					event: y,
					listeners: x
				}), y.data = b)), pd(s, e, r, n, i);
			}
			vd(s, t);
		});
	}
	function Td(e, t, n) {
		return {
			instance: e,
			listener: t,
			currentTarget: n
		};
	}
	function Ed(e, t) {
		for (var n = t + "Capture", r = []; e !== null;) {
			var i = e, a = i.stateNode;
			if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || a === null || (i = en(e, n), i != null && r.unshift(Td(e, i, a)), i = en(e, t), i != null && r.push(Td(e, i, a))), e.tag === 3) return r;
			e = e.return;
		}
		return [];
	}
	function Dd(e) {
		if (e === null) return null;
		do
			e = e.return;
		while (e && e.tag !== 5 && e.tag !== 27);
		return e || null;
	}
	function Od(e, t, n, r, i) {
		for (var a = t._reactName, o = []; n !== null && n !== r;) {
			var s = n, c = s.alternate, l = s.stateNode;
			if (s = s.tag, c !== null && c === r) break;
			s !== 5 && s !== 26 && s !== 27 || l === null || (c = l, i ? (l = en(n, a), l != null && o.unshift(Td(n, l, c))) : i || (l = en(n, a), l != null && o.push(Td(n, l, c)))), n = n.return;
		}
		o.length !== 0 && e.push({
			event: t,
			listeners: o
		});
	}
	var kd = /\r\n?/g, Ad = /\u0000|\uFFFD/g;
	function jd(e) {
		return (typeof e == "string" ? e : "" + e).replace(kd, "\n").replace(Ad, "");
	}
	function Md(e, t) {
		return t = jd(t), jd(e) === t;
	}
	function Nd(e, t, n, r, a, o) {
		switch (n) {
			case "children":
				typeof r == "string" ? t === "body" || t === "textarea" && r === "" || Rt(e, r) : (typeof r == "number" || typeof r == "bigint") && t !== "body" && Rt(e, "" + r);
				break;
			case "className":
				Ct(e, "class", r);
				break;
			case "tabIndex":
				Ct(e, "tabindex", r);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				Ct(e, n, r);
				break;
			case "style":
				Vt(e, r, o);
				break;
			case "data": if (t !== "object") {
				Ct(e, "data", r);
				break;
			}
			case "src":
			case "href":
				if (r === "" && (t !== "a" || n !== "href")) {
					e.removeAttribute(n);
					break;
				}
				if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = Gt("" + r), e.setAttribute(n, r);
				break;
			case "action":
			case "formAction":
				if (typeof r == "function") {
					e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
					break;
				} else typeof o == "function" && (n === "formAction" ? (t !== "input" && Nd(e, t, "name", a.name, a, null), Nd(e, t, "formEncType", a.formEncType, a, null), Nd(e, t, "formMethod", a.formMethod, a, null), Nd(e, t, "formTarget", a.formTarget, a, null)) : (Nd(e, t, "encType", a.encType, a, null), Nd(e, t, "method", a.method, a, null), Nd(e, t, "target", a.target, a, null)));
				if (r == null || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = Gt("" + r), e.setAttribute(n, r);
				break;
			case "onClick":
				r != null && (e.onclick = Kt);
				break;
			case "onScroll":
				r != null && yd("scroll", e);
				break;
			case "onScrollEnd":
				r != null && yd("scrollend", e);
				break;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
					if (n = r.__html, n != null) {
						if (a.children != null) throw Error(i(60));
						e.innerHTML = n;
					}
				}
				break;
			case "multiple":
				e.multiple = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "muted":
				e.muted = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref": break;
			case "autoFocus": break;
			case "xlinkHref":
				if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
					e.removeAttribute("xlink:href");
					break;
				}
				n = Gt("" + r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "" + r) : e.removeAttribute(n);
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
				r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
				break;
			case "capture":
			case "download":
				!0 === r ? e.setAttribute(n, "") : !1 !== r && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "rowSpan":
			case "start":
				r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
				break;
			case "popover":
				yd("beforetoggle", e), yd("toggle", e), St(e, "popover", r);
				break;
			case "xlinkActuate":
				wt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
				break;
			case "xlinkArcrole":
				wt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
				break;
			case "xlinkRole":
				wt(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
				break;
			case "xlinkShow":
				wt(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
				break;
			case "xlinkTitle":
				wt(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
				break;
			case "xlinkType":
				wt(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
				break;
			case "xmlBase":
				wt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
				break;
			case "xmlLang":
				wt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
				break;
			case "xmlSpace":
				wt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
				break;
			case "is":
				St(e, "is", r);
				break;
			case "innerText":
			case "textContent": break;
			default: (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Ut.get(n) || n, St(e, n, r));
		}
	}
	function Pd(e, t, n, r, a, o) {
		switch (n) {
			case "style":
				Vt(e, r, o);
				break;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
					if (n = r.__html, n != null) {
						if (a.children != null) throw Error(i(60));
						e.innerHTML = n;
					}
				}
				break;
			case "children":
				typeof r == "string" ? Rt(e, r) : (typeof r == "number" || typeof r == "bigint") && Rt(e, "" + r);
				break;
			case "onScroll":
				r != null && yd("scroll", e);
				break;
			case "onScrollEnd":
				r != null && yd("scrollend", e);
				break;
			case "onClick":
				r != null && (e.onclick = Kt);
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref": break;
			case "innerText":
			case "textContent": break;
			default: if (!ht.hasOwnProperty(n)) a: {
				if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), t = n.slice(2, a ? n.length - 7 : void 0), o = e[tt] || null, o = o == null ? null : o[n], typeof o == "function" && e.removeEventListener(t, o, a), typeof r == "function")) {
					typeof o != "function" && o !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, r, a);
					break a;
				}
				n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : St(e, n, r);
			}
		}
	}
	function Fd(e, t, n) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "img":
				yd("error", e), yd("load", e);
				var r = !1, a = !1, o;
				for (o in n) if (n.hasOwnProperty(o)) {
					var s = n[o];
					if (s != null) switch (o) {
						case "src":
							r = !0;
							break;
						case "srcSet":
							a = !0;
							break;
						case "children":
						case "dangerouslySetInnerHTML": throw Error(i(137, t));
						default: Nd(e, t, o, s, n, null);
					}
				}
				a && Nd(e, t, "srcSet", n.srcSet, n, null), r && Nd(e, t, "src", n.src, n, null);
				return;
			case "input":
				yd("invalid", e);
				var c = o = s = a = null, l = null, u = null;
				for (r in n) if (n.hasOwnProperty(r)) {
					var d = n[r];
					if (d != null) switch (r) {
						case "name":
							a = d;
							break;
						case "type":
							s = d;
							break;
						case "checked":
							l = d;
							break;
						case "defaultChecked":
							u = d;
							break;
						case "value":
							o = d;
							break;
						case "defaultValue":
							c = d;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (d != null) throw Error(i(137, t));
							break;
						default: Nd(e, t, r, d, n, null);
					}
				}
				Nt(e, o, c, l, u, s, a, !1);
				return;
			case "select":
				for (a in yd("invalid", e), r = s = o = null, n) if (n.hasOwnProperty(a) && (c = n[a], c != null)) switch (a) {
					case "value":
						o = c;
						break;
					case "defaultValue":
						s = c;
						break;
					case "multiple": r = c;
					default: Nd(e, t, a, c, n, null);
				}
				t = o, n = s, e.multiple = !!r, t == null ? n != null && Ft(e, !!r, n, !0) : Ft(e, !!r, t, !1);
				return;
			case "textarea":
				for (s in yd("invalid", e), o = a = r = null, n) if (n.hasOwnProperty(s) && (c = n[s], c != null)) switch (s) {
					case "value":
						r = c;
						break;
					case "defaultValue":
						a = c;
						break;
					case "children":
						o = c;
						break;
					case "dangerouslySetInnerHTML":
						if (c != null) throw Error(i(91));
						break;
					default: Nd(e, t, s, c, n, null);
				}
				Lt(e, r, a, o);
				return;
			case "option":
				for (l in n) if (n.hasOwnProperty(l) && (r = n[l], r != null)) switch (l) {
					case "selected":
						e.selected = r && typeof r != "function" && typeof r != "symbol";
						break;
					default: Nd(e, t, l, r, n, null);
				}
				return;
			case "dialog":
				yd("beforetoggle", e), yd("toggle", e), yd("cancel", e), yd("close", e);
				break;
			case "iframe":
			case "object":
				yd("load", e);
				break;
			case "video":
			case "audio":
				for (r = 0; r < gd.length; r++) yd(gd[r], e);
				break;
			case "image":
				yd("error", e), yd("load", e);
				break;
			case "details":
				yd("toggle", e);
				break;
			case "embed":
			case "source":
			case "link": yd("error", e), yd("load", e);
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
				for (u in n) if (n.hasOwnProperty(u) && (r = n[u], r != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML": throw Error(i(137, t));
					default: Nd(e, t, u, r, n, null);
				}
				return;
			default: if (Ht(t)) {
				for (d in n) n.hasOwnProperty(d) && (r = n[d], r !== void 0 && Pd(e, t, d, r, n, void 0));
				return;
			}
		}
		for (c in n) n.hasOwnProperty(c) && (r = n[c], r != null && Nd(e, t, c, r, n, null));
	}
	function Id(e, t, n, r) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "input":
				var a = null, o = null, s = null, c = null, l = null, u = null, d = null;
				for (m in n) {
					var f = n[m];
					if (n.hasOwnProperty(m) && f != null) switch (m) {
						case "checked": break;
						case "value": break;
						case "defaultValue": l = f;
						default: r.hasOwnProperty(m) || Nd(e, t, m, null, r, f);
					}
				}
				for (var p in r) {
					var m = r[p];
					if (f = n[p], r.hasOwnProperty(p) && (m != null || f != null)) switch (p) {
						case "type":
							o = m;
							break;
						case "name":
							a = m;
							break;
						case "checked":
							u = m;
							break;
						case "defaultChecked":
							d = m;
							break;
						case "value":
							s = m;
							break;
						case "defaultValue":
							c = m;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (m != null) throw Error(i(137, t));
							break;
						default: m !== f && Nd(e, t, p, m, r, f);
					}
				}
				Mt(e, s, c, l, u, d, o, a);
				return;
			case "select":
				for (o in m = s = c = p = null, n) if (l = n[o], n.hasOwnProperty(o) && l != null) switch (o) {
					case "value": break;
					case "multiple": m = l;
					default: r.hasOwnProperty(o) || Nd(e, t, o, null, r, l);
				}
				for (a in r) if (o = r[a], l = n[a], r.hasOwnProperty(a) && (o != null || l != null)) switch (a) {
					case "value":
						p = o;
						break;
					case "defaultValue":
						c = o;
						break;
					case "multiple": s = o;
					default: o !== l && Nd(e, t, a, o, r, l);
				}
				t = c, n = s, r = m, p == null ? !!r != !!n && (t == null ? Ft(e, !!n, n ? [] : "", !1) : Ft(e, !!n, t, !0)) : Ft(e, !!n, p, !1);
				return;
			case "textarea":
				for (c in m = p = null, n) if (a = n[c], n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c)) switch (c) {
					case "value": break;
					case "children": break;
					default: Nd(e, t, c, null, r, a);
				}
				for (s in r) if (a = r[s], o = n[s], r.hasOwnProperty(s) && (a != null || o != null)) switch (s) {
					case "value":
						p = a;
						break;
					case "defaultValue":
						m = a;
						break;
					case "children": break;
					case "dangerouslySetInnerHTML":
						if (a != null) throw Error(i(91));
						break;
					default: a !== o && Nd(e, t, s, a, r, o);
				}
				It(e, p, m);
				return;
			case "option":
				for (var h in n) if (p = n[h], n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)) switch (h) {
					case "selected":
						e.selected = !1;
						break;
					default: Nd(e, t, h, null, r, p);
				}
				for (l in r) if (p = r[l], m = n[l], r.hasOwnProperty(l) && p !== m && (p != null || m != null)) switch (l) {
					case "selected":
						e.selected = p && typeof p != "function" && typeof p != "symbol";
						break;
					default: Nd(e, t, l, p, r, m);
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
				for (var g in n) p = n[g], n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && Nd(e, t, g, null, r, p);
				for (u in r) if (p = r[u], m = n[u], r.hasOwnProperty(u) && p !== m && (p != null || m != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML":
						if (p != null) throw Error(i(137, t));
						break;
					default: Nd(e, t, u, p, r, m);
				}
				return;
			default: if (Ht(t)) {
				for (var _ in n) p = n[_], n.hasOwnProperty(_) && p !== void 0 && !r.hasOwnProperty(_) && Pd(e, t, _, void 0, r, p);
				for (d in r) p = r[d], m = n[d], !r.hasOwnProperty(d) || p === m || p === void 0 && m === void 0 || Pd(e, t, d, p, r, m);
				return;
			}
		}
		for (var v in n) p = n[v], n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && Nd(e, t, v, null, r, p);
		for (f in r) p = r[f], m = n[f], !r.hasOwnProperty(f) || p === m || p == null && m == null || Nd(e, t, f, p, r, m);
	}
	function Ld(e) {
		switch (e) {
			case "css":
			case "script":
			case "font":
			case "img":
			case "image":
			case "input":
			case "link": return !0;
			default: return !1;
		}
	}
	function Rd() {
		if (typeof performance.getEntriesByType == "function") {
			for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), r = 0; r < n.length; r++) {
				var i = n[r], a = i.transferSize, o = i.initiatorType, s = i.duration;
				if (a && s && Ld(o)) {
					for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
						var c = n[r], l = c.startTime;
						if (l > s) break;
						var u = c.transferSize, d = c.initiatorType;
						u && Ld(d) && (c = c.responseEnd, o += u * (c < s ? 1 : (s - l) / (c - l)));
					}
					if (--r, t += 8 * (a + o) / (i.duration / 1e3), e++, 10 < e) break;
				}
			}
			if (0 < e) return t / e / 1e6;
		}
		return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
	}
	var zd = null, Bd = null;
	function Vd(e) {
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	function Hd(e) {
		switch (e) {
			case "http://www.w3.org/2000/svg": return 1;
			case "http://www.w3.org/1998/Math/MathML": return 2;
			default: return 0;
		}
	}
	function Ud(e, t) {
		if (e === 0) switch (t) {
			case "svg": return 1;
			case "math": return 2;
			default: return 0;
		}
		return e === 1 && t === "foreignObject" ? 0 : e;
	}
	function Wd(e, t) {
		return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
	}
	var Gd = null;
	function Kd() {
		var e = window.event;
		return e && e.type === "popstate" ? e === Gd ? !1 : (Gd = e, !0) : (Gd = null, !1);
	}
	var qd = typeof setTimeout == "function" ? setTimeout : void 0, Jd = typeof clearTimeout == "function" ? clearTimeout : void 0, Yd = typeof Promise == "function" ? Promise : void 0, Xd = typeof queueMicrotask == "function" ? queueMicrotask : Yd === void 0 ? qd : function(e) {
		return Yd.resolve(null).then(e).catch(Zd);
	};
	function Zd(e) {
		setTimeout(function() {
			throw e;
		});
	}
	function Qd(e) {
		return e === "head";
	}
	function $d(e, t) {
		var n = t, r = 0;
		do {
			var i = n.nextSibling;
			if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$" || n === "/&") {
				if (r === 0) {
					e.removeChild(i), Pp(t);
					return;
				}
				r--;
			} else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") r++;
			else if (n === "html") mf(e.ownerDocument.documentElement);
			else if (n === "head") {
				n = e.ownerDocument.head, mf(n);
				for (var a = n.firstChild; a;) {
					var o = a.nextSibling, s = a.nodeName;
					a[st] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && a.rel.toLowerCase() === "stylesheet" || n.removeChild(a), a = o;
				}
			} else n === "body" && mf(e.ownerDocument.body);
			n = i;
		} while (n);
		Pp(t);
	}
	function ef(e, t) {
		var n = e;
		e = 0;
		do {
			var r = n.nextSibling;
			if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), r && r.nodeType === 8) if (n = r.data, n === "/$") {
				if (e === 0) break;
				e--;
			} else n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
			n = r;
		} while (n);
	}
	function tf(e) {
		var t = e.firstChild;
		for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
			var n = t;
			switch (t = t.nextSibling, n.nodeName) {
				case "HTML":
				case "HEAD":
				case "BODY":
					tf(n), ct(n);
					continue;
				case "SCRIPT":
				case "STYLE": continue;
				case "LINK": if (n.rel.toLowerCase() === "stylesheet") continue;
			}
			e.removeChild(n);
		}
	}
	function nf(e, t, n, r) {
		for (; e.nodeType === 1;) {
			var i = n;
			if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
			} else if (!r) if (t === "input" && e.type === "hidden") {
				var a = i.name == null ? null : "" + i.name;
				if (i.type === "hidden" && e.getAttribute("name") === a) return e;
			} else return e;
			else if (!e[st]) switch (t) {
				case "meta":
					if (!e.hasAttribute("itemprop")) break;
					return e;
				case "link":
					if (a = e.getAttribute("rel"), a === "stylesheet" && e.hasAttribute("data-precedence") || a !== i.rel || e.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title)) break;
					return e;
				case "style":
					if (e.hasAttribute("data-precedence")) break;
					return e;
				case "script":
					if (a = e.getAttribute("src"), (a !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && a && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
					return e;
				default: return e;
			}
			if (e = lf(e.nextSibling), e === null) break;
		}
		return null;
	}
	function rf(e, t, n) {
		if (t === "") return null;
		for (; e.nodeType !== 3;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = lf(e.nextSibling), e === null)) return null;
		return e;
	}
	function af(e, t) {
		for (; e.nodeType !== 8;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = lf(e.nextSibling), e === null)) return null;
		return e;
	}
	function of(e) {
		return e.data === "$?" || e.data === "$~";
	}
	function sf(e) {
		return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
	}
	function cf(e, t) {
		var n = e.ownerDocument;
		if (e.data === "$~") e._reactRetry = t;
		else if (e.data !== "$?" || n.readyState !== "loading") t();
		else {
			var r = function() {
				t(), n.removeEventListener("DOMContentLoaded", r);
			};
			n.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
		}
	}
	function lf(e) {
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
	var uf = null;
	function df(e) {
		e = e.nextSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "/$" || n === "/&") {
					if (t === 0) return lf(e.nextSibling);
					t--;
				} else n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
			}
			e = e.nextSibling;
		}
		return null;
	}
	function ff(e) {
		e = e.previousSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
					if (t === 0) return e;
					t--;
				} else n !== "/$" && n !== "/&" || t++;
			}
			e = e.previousSibling;
		}
		return null;
	}
	function pf(e, t, n) {
		switch (t = Vd(n), e) {
			case "html":
				if (e = t.documentElement, !e) throw Error(i(452));
				return e;
			case "head":
				if (e = t.head, !e) throw Error(i(453));
				return e;
			case "body":
				if (e = t.body, !e) throw Error(i(454));
				return e;
			default: throw Error(i(451));
		}
	}
	function mf(e) {
		for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
		ct(e);
	}
	var hf = /* @__PURE__ */ new Map(), gf = /* @__PURE__ */ new Set();
	function _f(e) {
		return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
	}
	var vf = F.d;
	F.d = {
		f: yf,
		r: bf,
		D: Cf,
		C: wf,
		L: Tf,
		m: Ef,
		X: Of,
		S: Df,
		M: kf
	};
	function yf() {
		var e = vf.f(), t = vu();
		return e || t;
	}
	function bf(e) {
		var t = ut(e);
		t !== null && t.tag === 5 && t.type === "form" ? vs(t) : vf.r(e);
	}
	var xf = typeof document > "u" ? null : document;
	function Sf(e, t, n) {
		var r = xf;
		if (r && typeof t == "string" && t) {
			var i = jt(t);
			i = "link[rel=\"" + e + "\"][href=\"" + i + "\"]", typeof n == "string" && (i += "[crossorigin=\"" + n + "\"]"), gf.has(i) || (gf.add(i), e = {
				rel: e,
				crossOrigin: n,
				href: t
			}, r.querySelector(i) === null && (t = r.createElement("link"), Fd(t, "link", e), pt(t), r.head.appendChild(t)));
		}
	}
	function Cf(e) {
		vf.D(e), Sf("dns-prefetch", e, null);
	}
	function wf(e, t) {
		vf.C(e, t), Sf("preconnect", e, t);
	}
	function Tf(e, t, n) {
		vf.L(e, t, n);
		var r = xf;
		if (r && e && t) {
			var i = "link[rel=\"preload\"][as=\"" + jt(t) + "\"]";
			t === "image" && n && n.imageSrcSet ? (i += "[imagesrcset=\"" + jt(n.imageSrcSet) + "\"]", typeof n.imageSizes == "string" && (i += "[imagesizes=\"" + jt(n.imageSizes) + "\"]")) : i += "[href=\"" + jt(e) + "\"]";
			var a = i;
			switch (t) {
				case "style":
					a = jf(e);
					break;
				case "script": a = Ff(e);
			}
			hf.has(a) || (e = h({
				rel: "preload",
				href: t === "image" && n && n.imageSrcSet ? void 0 : e,
				as: t
			}, n), hf.set(a, e), r.querySelector(i) !== null || t === "style" && r.querySelector(Mf(a)) || t === "script" && r.querySelector(If(a)) || (t = r.createElement("link"), Fd(t, "link", e), pt(t), r.head.appendChild(t)));
		}
	}
	function Ef(e, t) {
		vf.m(e, t);
		var n = xf;
		if (n && e) {
			var r = t && typeof t.as == "string" ? t.as : "script", i = "link[rel=\"modulepreload\"][as=\"" + jt(r) + "\"][href=\"" + jt(e) + "\"]", a = i;
			switch (r) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script": a = Ff(e);
			}
			if (!hf.has(a) && (e = h({
				rel: "modulepreload",
				href: e
			}, t), hf.set(a, e), n.querySelector(i) === null)) {
				switch (r) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script": if (n.querySelector(If(a))) return;
				}
				r = n.createElement("link"), Fd(r, "link", e), pt(r), n.head.appendChild(r);
			}
		}
	}
	function Df(e, t, n) {
		vf.S(e, t, n);
		var r = xf;
		if (r && e) {
			var i = ft(r).hoistableStyles, a = jf(e);
			t ||= "default";
			var o = i.get(a);
			if (!o) {
				var s = {
					loading: 0,
					preload: null
				};
				if (o = r.querySelector(Mf(a))) s.loading = 5;
				else {
					e = h({
						rel: "stylesheet",
						href: e,
						"data-precedence": t
					}, n), (n = hf.get(a)) && zf(e, n);
					var c = o = r.createElement("link");
					pt(c), Fd(c, "link", e), c._p = new Promise(function(e, t) {
						c.onload = e, c.onerror = t;
					}), c.addEventListener("load", function() {
						s.loading |= 1;
					}), c.addEventListener("error", function() {
						s.loading |= 2;
					}), s.loading |= 4, Rf(o, t, r);
				}
				o = {
					type: "stylesheet",
					instance: o,
					count: 1,
					state: s
				}, i.set(a, o);
			}
		}
	}
	function Of(e, t) {
		vf.X(e, t);
		var n = xf;
		if (n && e) {
			var r = ft(n).hoistableScripts, i = Ff(e), a = r.get(i);
			a || (a = n.querySelector(If(i)), a || (e = h({
				src: e,
				async: !0
			}, t), (t = hf.get(i)) && Bf(e, t), a = n.createElement("script"), pt(a), Fd(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function kf(e, t) {
		vf.M(e, t);
		var n = xf;
		if (n && e) {
			var r = ft(n).hoistableScripts, i = Ff(e), a = r.get(i);
			a || (a = n.querySelector(If(i)), a || (e = h({
				src: e,
				async: !0,
				type: "module"
			}, t), (t = hf.get(i)) && Bf(e, t), a = n.createElement("script"), pt(a), Fd(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Af(e, t, n, r) {
		var a = (a = B.current) ? _f(a) : null;
		if (!a) throw Error(i(446));
		switch (e) {
			case "meta":
			case "title": return null;
			case "style": return typeof n.precedence == "string" && typeof n.href == "string" ? (t = jf(n.href), n = ft(a).hoistableStyles, r = n.get(t), r || (r = {
				type: "style",
				instance: null,
				count: 0,
				state: null
			}, n.set(t, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			case "link":
				if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
					e = jf(n.href);
					var o = ft(a).hoistableStyles, s = o.get(e);
					if (s || (a = a.ownerDocument || a, s = {
						type: "stylesheet",
						instance: null,
						count: 0,
						state: {
							loading: 0,
							preload: null
						}
					}, o.set(e, s), (o = a.querySelector(Mf(e))) && !o._p && (s.instance = o, s.state.loading = 5), hf.has(e) || (n = {
						rel: "preload",
						as: "style",
						href: n.href,
						crossOrigin: n.crossOrigin,
						integrity: n.integrity,
						media: n.media,
						hrefLang: n.hrefLang,
						referrerPolicy: n.referrerPolicy
					}, hf.set(e, n), o || Pf(a, e, n, s.state))), t && r === null) throw Error(i(528, ""));
					return s;
				}
				if (t && r !== null) throw Error(i(529, ""));
				return null;
			case "script": return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ff(n), n = ft(a).hoistableScripts, r = n.get(t), r || (r = {
				type: "script",
				instance: null,
				count: 0,
				state: null
			}, n.set(t, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			default: throw Error(i(444, e));
		}
	}
	function jf(e) {
		return "href=\"" + jt(e) + "\"";
	}
	function Mf(e) {
		return "link[rel=\"stylesheet\"][" + e + "]";
	}
	function Nf(e) {
		return h({}, e, {
			"data-precedence": e.precedence,
			precedence: null
		});
	}
	function Pf(e, t, n, r) {
		e.querySelector("link[rel=\"preload\"][as=\"style\"][" + t + "]") ? r.loading = 1 : (t = e.createElement("link"), r.preload = t, t.addEventListener("load", function() {
			return r.loading |= 1;
		}), t.addEventListener("error", function() {
			return r.loading |= 2;
		}), Fd(t, "link", n), pt(t), e.head.appendChild(t));
	}
	function Ff(e) {
		return "[src=\"" + jt(e) + "\"]";
	}
	function If(e) {
		return "script[async]" + e;
	}
	function Lf(e, t, n) {
		if (t.count++, t.instance === null) switch (t.type) {
			case "style":
				var r = e.querySelector("style[data-href~=\"" + jt(n.href) + "\"]");
				if (r) return t.instance = r, pt(r), r;
				var a = h({}, n, {
					"data-href": n.href,
					"data-precedence": n.precedence,
					href: null,
					precedence: null
				});
				return r = (e.ownerDocument || e).createElement("style"), pt(r), Fd(r, "style", a), Rf(r, n.precedence, e), t.instance = r;
			case "stylesheet":
				a = jf(n.href);
				var o = e.querySelector(Mf(a));
				if (o) return t.state.loading |= 4, t.instance = o, pt(o), o;
				r = Nf(n), (a = hf.get(a)) && zf(r, a), o = (e.ownerDocument || e).createElement("link"), pt(o);
				var s = o;
				return s._p = new Promise(function(e, t) {
					s.onload = e, s.onerror = t;
				}), Fd(o, "link", r), t.state.loading |= 4, Rf(o, n.precedence, e), t.instance = o;
			case "script": return o = Ff(n.src), (a = e.querySelector(If(o))) ? (t.instance = a, pt(a), a) : (r = n, (a = hf.get(o)) && (r = h({}, n), Bf(r, a)), e = e.ownerDocument || e, a = e.createElement("script"), pt(a), Fd(a, "link", r), e.head.appendChild(a), t.instance = a);
			case "void": return null;
			default: throw Error(i(443, t.type));
		}
		else t.type === "stylesheet" && !(t.state.loading & 4) && (r = t.instance, t.state.loading |= 4, Rf(r, n.precedence, e));
		return t.instance;
	}
	function Rf(e, t, n) {
		for (var r = n.querySelectorAll("link[rel=\"stylesheet\"][data-precedence],style[data-precedence]"), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
			var s = r[o];
			if (s.dataset.precedence === t) a = s;
			else if (a !== i) break;
		}
		a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
	}
	function zf(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.title ??= t.title;
	}
	function Bf(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.integrity ??= t.integrity;
	}
	var Vf = null;
	function Hf(e, t, n) {
		if (Vf === null) {
			var r = /* @__PURE__ */ new Map(), i = Vf = /* @__PURE__ */ new Map();
			i.set(n, r);
		} else i = Vf, r = i.get(n), r || (r = /* @__PURE__ */ new Map(), i.set(n, r));
		if (r.has(e)) return r;
		for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
			var a = n[i];
			if (!(a[st] || a[et] || e === "link" && a.getAttribute("rel") === "stylesheet") && a.namespaceURI !== "http://www.w3.org/2000/svg") {
				var o = a.getAttribute(t) || "";
				o = e + o;
				var s = r.get(o);
				s ? s.push(a) : r.set(o, [a]);
			}
		}
		return r;
	}
	function Uf(e, t, n) {
		e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
	}
	function Wf(e, t, n) {
		if (n === 1 || t.itemProp != null) return !1;
		switch (e) {
			case "meta":
			case "title": return !0;
			case "style":
				if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
				return !0;
			case "link":
				if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
				switch (t.rel) {
					case "stylesheet": return e = t.disabled, typeof t.precedence == "string" && e == null;
					default: return !0;
				}
			case "script": if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0;
		}
		return !1;
	}
	function Gf(e) {
		return !(e.type === "stylesheet" && !(e.state.loading & 3));
	}
	function Kf(e, t, n, r) {
		if (n.type === "stylesheet" && (typeof r.media != "string" || !1 !== matchMedia(r.media).matches) && !(n.state.loading & 4)) {
			if (n.instance === null) {
				var i = jf(r.href), a = t.querySelector(Mf(i));
				if (a) {
					t = a._p, typeof t == "object" && t && typeof t.then == "function" && (e.count++, e = Yf.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = a, pt(a);
					return;
				}
				a = t.ownerDocument || t, r = Nf(r), (i = hf.get(i)) && zf(r, i), a = a.createElement("link"), pt(a);
				var o = a;
				o._p = new Promise(function(e, t) {
					o.onload = e, o.onerror = t;
				}), Fd(a, "link", r), n.instance = a;
			}
			e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && !(n.state.loading & 3) && (e.count++, n = Yf.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
		}
	}
	var qf = 0;
	function Jf(e, t) {
		return e.stylesheets && e.count === 0 && Zf(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
			var r = setTimeout(function() {
				if (e.stylesheets && Zf(e, e.stylesheets), e.unsuspend) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, 6e4 + t);
			0 < e.imgBytes && qf === 0 && (qf = 62500 * Rd());
			var i = setTimeout(function() {
				if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Zf(e, e.stylesheets), e.unsuspend)) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, (e.imgBytes > qf ? 50 : 800) + t);
			return e.unsuspend = n, function() {
				e.unsuspend = null, clearTimeout(r), clearTimeout(i);
			};
		} : null;
	}
	function Yf() {
		if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
			if (this.stylesheets) Zf(this, this.stylesheets);
			else if (this.unsuspend) {
				var e = this.unsuspend;
				this.unsuspend = null, e();
			}
		}
	}
	var Xf = null;
	function Zf(e, t) {
		e.stylesheets = null, e.unsuspend !== null && (e.count++, Xf = /* @__PURE__ */ new Map(), t.forEach(Qf, e), Xf = null, Yf.call(e));
	}
	function Qf(e, t) {
		if (!(t.state.loading & 4)) {
			var n = Xf.get(e);
			if (n) var r = n.get(null);
			else {
				n = /* @__PURE__ */ new Map(), Xf.set(e, n);
				for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), a = 0; a < i.length; a++) {
					var o = i[a];
					(o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (n.set(o.dataset.precedence, o), r = o);
				}
				r && n.set(null, r);
			}
			i = t.instance, o = i.getAttribute("data-precedence"), a = n.get(o) || r, a === r && n.set(null, i), n.set(o, i), this.count++, r = Yf.bind(this), i.addEventListener("load", r), i.addEventListener("error", r), a ? a.parentNode.insertBefore(i, a.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
		}
	}
	var $f = {
		$$typeof: C,
		Provider: null,
		Consumer: null,
		_currentValue: I,
		_currentValue2: I,
		_threadCount: 0
	};
	function ep(e, t, n, r, i, a, o, s, c) {
		this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ue(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ue(0), this.hiddenUpdates = Ue(null), this.identifierPrefix = r, this.onUncaughtError = i, this.onCaughtError = a, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map();
	}
	function tp(e, t, n, r, i, a, o, s, c, l, u, d) {
		return e = new ep(e, t, n, o, c, l, u, d, s), t = 1, !0 === a && (t |= 24), a = $r(3, null, null, t), e.current = a, a.stateNode = e, t = $i(), t.refCount++, e.pooledCache = t, t.refCount++, a.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: t
		}, Ma(a), e;
	}
	function np(e) {
		return e ? (e = Zr, e) : Zr;
	}
	function rp(e, t, n, r, i, a) {
		i = np(i), r.context === null ? r.context = i : r.pendingContext = i, r = Pa(t), r.payload = { element: n }, a = a === void 0 ? null : a, a !== null && (r.callback = a), n = Fa(e, r, t), n !== null && (pu(n, e, t), Ia(n, e, t));
	}
	function ip(e, t) {
		if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
			var n = e.retryLane;
			e.retryLane = n !== 0 && n < t ? n : t;
		}
	}
	function ap(e, t) {
		ip(e, t), (e = e.alternate) && ip(e, t);
	}
	function op(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = Jr(e, 67108864);
			t !== null && pu(t, e, 67108864), ap(e, 67108864);
		}
	}
	function sp(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = du();
			t = Ye(t);
			var n = Jr(e, t);
			n !== null && pu(n, e, t), ap(e, t);
		}
	}
	var cp = !0;
	function lp(e, t, n, r) {
		var i = P.T;
		P.T = null;
		var a = F.p;
		try {
			F.p = 2, dp(e, t, n, r);
		} finally {
			F.p = a, P.T = i;
		}
	}
	function up(e, t, n, r) {
		var i = P.T;
		P.T = null;
		var a = F.p;
		try {
			F.p = 8, dp(e, t, n, r);
		} finally {
			F.p = a, P.T = i;
		}
	}
	function dp(e, t, n, r) {
		if (cp) {
			var i = fp(r);
			if (i === null) wd(e, t, r, pp, n), wp(e, r);
			else if (Ep(i, e, t, n, r)) r.stopPropagation();
			else if (wp(e, r), t & 4 && -1 < Cp.indexOf(e)) {
				for (; i !== null;) {
					var a = ut(i);
					if (a !== null) switch (a.tag) {
						case 3:
							if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
								var o = Re(a.pendingLanes);
								if (o !== 0) {
									var s = a;
									for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
										var c = 1 << 31 - je(o);
										s.entanglements[1] |= c, o &= ~c;
									}
									nd(a), !(Nl & 6) && ($l = ye() + 500, rd(0, !1));
								}
							}
							break;
						case 31:
						case 13: s = Jr(a, 2), s !== null && pu(s, a, 2), vu(), ap(a, 2);
					}
					if (a = fp(r), a === null && wd(e, t, r, pp, n), a === i) break;
					i = a;
				}
				i !== null && r.stopPropagation();
			} else wd(e, t, r, null, n);
		}
	}
	function fp(e) {
		return e = Jt(e), mp(e);
	}
	var pp = null;
	function mp(e) {
		if (pp = null, e = lt(e), e !== null) {
			var t = o(e);
			if (t === null) e = null;
			else {
				var n = t.tag;
				if (n === 13) {
					if (e = s(t), e !== null) return e;
					e = null;
				} else if (n === 31) {
					if (e = c(t), e !== null) return e;
					e = null;
				} else if (n === 3) {
					if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
					e = null;
				} else t !== e && (e = null);
			}
		}
		return pp = e, null;
	}
	function hp(e) {
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
			case "selectstart": return 2;
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
			case "pointerleave": return 8;
			case "message": switch (be()) {
				case xe: return 2;
				case Se: return 8;
				case Ce:
				case we: return 32;
				case Te: return 268435456;
				default: return 32;
			}
			default: return 32;
		}
	}
	var gp = !1, _p = null, vp = null, yp = null, bp = /* @__PURE__ */ new Map(), xp = /* @__PURE__ */ new Map(), Sp = [], Cp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
	function wp(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				_p = null;
				break;
			case "dragenter":
			case "dragleave":
				vp = null;
				break;
			case "mouseover":
			case "mouseout":
				yp = null;
				break;
			case "pointerover":
			case "pointerout":
				bp.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": xp.delete(t.pointerId);
		}
	}
	function Tp(e, t, n, r, i, a) {
		return e === null || e.nativeEvent !== a ? (e = {
			blockedOn: t,
			domEventName: n,
			eventSystemFlags: r,
			nativeEvent: a,
			targetContainers: [i]
		}, t !== null && (t = ut(t), t !== null && op(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
	}
	function Ep(e, t, n, r, i) {
		switch (t) {
			case "focusin": return _p = Tp(_p, e, t, n, r, i), !0;
			case "dragenter": return vp = Tp(vp, e, t, n, r, i), !0;
			case "mouseover": return yp = Tp(yp, e, t, n, r, i), !0;
			case "pointerover":
				var a = i.pointerId;
				return bp.set(a, Tp(bp.get(a) || null, e, t, n, r, i)), !0;
			case "gotpointercapture": return a = i.pointerId, xp.set(a, Tp(xp.get(a) || null, e, t, n, r, i)), !0;
		}
		return !1;
	}
	function Dp(e) {
		var t = lt(e.target);
		if (t !== null) {
			var n = o(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = s(n), t !== null) {
						e.blockedOn = t, Qe(e.priority, function() {
							sp(n);
						});
						return;
					}
				} else if (t === 31) {
					if (t = c(n), t !== null) {
						e.blockedOn = t, Qe(e.priority, function() {
							sp(n);
						});
						return;
					}
				} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
					e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
					return;
				}
			}
		}
		e.blockedOn = null;
	}
	function Op(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length;) {
			var n = fp(e.nativeEvent);
			if (n === null) {
				n = e.nativeEvent;
				var r = new n.constructor(n.type, n);
				qt = r, n.target.dispatchEvent(r), qt = null;
			} else return t = ut(n), t !== null && op(t), e.blockedOn = n, !1;
			t.shift();
		}
		return !0;
	}
	function kp(e, t, n) {
		Op(e) && n.delete(t);
	}
	function Ap() {
		gp = !1, _p !== null && Op(_p) && (_p = null), vp !== null && Op(vp) && (vp = null), yp !== null && Op(yp) && (yp = null), bp.forEach(kp), xp.forEach(kp);
	}
	function jp(e, n) {
		e.blockedOn === n && (e.blockedOn = null, gp || (gp = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, Ap)));
	}
	var Mp = null;
	function Np(e) {
		Mp !== e && (Mp = e, t.unstable_scheduleCallback(t.unstable_NormalPriority, function() {
			Mp === e && (Mp = null);
			for (var t = 0; t < e.length; t += 3) {
				var n = e[t], r = e[t + 1], i = e[t + 2];
				if (typeof r != "function") {
					if (mp(r || n) === null) continue;
					break;
				}
				var a = ut(n);
				a !== null && (e.splice(t, 3), t -= 3, gs(a, {
					pending: !0,
					data: i,
					method: n.method,
					action: r
				}, r, i));
			}
		}));
	}
	function Pp(e) {
		function t(t) {
			return jp(t, e);
		}
		_p !== null && jp(_p, e), vp !== null && jp(vp, e), yp !== null && jp(yp, e), bp.forEach(t), xp.forEach(t);
		for (var n = 0; n < Sp.length; n++) {
			var r = Sp[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
		for (; 0 < Sp.length && (n = Sp[0], n.blockedOn === null);) Dp(n), n.blockedOn === null && Sp.shift();
		if (n = (e.ownerDocument || e).$$reactFormReplay, n != null) for (r = 0; r < n.length; r += 3) {
			var i = n[r], a = n[r + 1], o = i[tt] || null;
			if (typeof a == "function") o || Np(n);
			else if (o) {
				var s = null;
				if (a && a.hasAttribute("formAction")) {
					if (i = a, o = a[tt] || null) s = o.formAction;
					else if (mp(i) !== null) continue;
				} else s = o.action;
				typeof s == "function" ? n[r + 1] = s : (n.splice(r, 3), r -= 3), Np(n);
			}
		}
	}
	function Fp() {
		function e(e) {
			e.canIntercept && e.info === "react-transition" && e.intercept({
				handler: function() {
					return new Promise(function(e) {
						return i = e;
					});
				},
				focusReset: "manual",
				scroll: "manual"
			});
		}
		function t() {
			i !== null && (i(), i = null), r || setTimeout(n, 20);
		}
		function n() {
			if (!r && !navigation.transition) {
				var e = navigation.currentEntry;
				e && e.url != null && navigation.navigate(e.url, {
					state: e.getState(),
					info: "react-transition",
					history: "replace"
				});
			}
		}
		if (typeof navigation == "object") {
			var r = !1, i = null;
			return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
				r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), i !== null && (i(), i = null);
			};
		}
	}
	function Ip(e) {
		this._internalRoot = e;
	}
	Lp.prototype.render = Ip.prototype.render = function(e) {
		var t = this._internalRoot;
		if (t === null) throw Error(i(409));
		var n = t.current;
		rp(n, du(), e, t, null, null);
	}, Lp.prototype.unmount = Ip.prototype.unmount = function() {
		var e = this._internalRoot;
		if (e !== null) {
			this._internalRoot = null;
			var t = e.containerInfo;
			rp(e.current, 2, null, e, null, null), vu(), t[nt] = null;
		}
	};
	function Lp(e) {
		this._internalRoot = e;
	}
	Lp.prototype.unstable_scheduleHydration = function(e) {
		if (e) {
			var t = Ze();
			e = {
				blockedOn: null,
				target: e,
				priority: t
			};
			for (var n = 0; n < Sp.length && t !== 0 && t < Sp[n].priority; n++);
			Sp.splice(n, 0, e), n === 0 && Dp(e);
		}
	};
	var Rp = n.version;
	if (Rp !== "19.2.6") throw Error(i(527, Rp, "19.2.6"));
	F.findDOMNode = function(e) {
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
		return e = d(t), e = e === null ? null : p(e), e = e === null ? null : e.stateNode, e;
	};
	var zp = {
		bundleType: 0,
		version: "19.2.6",
		rendererPackageName: "react-dom",
		currentDispatcherRef: P,
		reconcilerVersion: "19.2.6"
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var Bp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!Bp.isDisabled && Bp.supportsFiber) try {
			Oe = Bp.inject(zp), ke = Bp;
		} catch {}
	}
	e.createRoot = function(e, t) {
		if (!a(e)) throw Error(i(299));
		var n = !1, r = "", o = zs, s = Bs, c = Vs;
		return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = tp(e, 1, !1, null, null, n, r, null, o, s, c, Fp), e[nt] = t.current, Sd(e), new Ip(t);
	};
})), g = /* @__PURE__ */ o(((e, t) => {
	function n() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = h();
})), _ = /* @__PURE__ */ c(u()), v = g(), y = !1;
function b(e) {
	if (e.sheet) return e.sheet;
	/* istanbul ignore next */
	for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function x(e) {
	var t = document.createElement("style");
	return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var S = /* @__PURE__ */ function() {
	function e(e) {
		var t = this;
		this._insertTag = function(e) {
			var n = t.tags.length === 0 ? t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling;
			t.container.insertBefore(e, n), t.tags.push(e);
		}, this.isSpeedy = e.speedy === void 0 ? !y : e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.prepend = e.prepend, this.insertionPoint = e.insertionPoint, this.before = null;
	}
	var t = e.prototype;
	return t.hydrate = function(e) {
		e.forEach(this._insertTag);
	}, t.insert = function(e) {
		this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(x(this));
		var t = this.tags[this.tags.length - 1];
		if (this.isSpeedy) {
			var n = b(t);
			try {
				n.insertRule(e, n.cssRules.length);
			} catch {}
		} else t.appendChild(document.createTextNode(e));
		this.ctr++;
	}, t.flush = function() {
		this.tags.forEach(function(e) {
			return e.parentNode?.removeChild(e);
		}), this.tags = [], this.ctr = 0;
	}, e;
}(), C = "-ms-", w = "-moz-", T = "-webkit-", E = "comm", D = "rule", O = "decl", k = "@import", A = "@keyframes", j = "@layer", M = Math.abs, N = String.fromCharCode, ee = Object.assign;
function te(e, t) {
	return ne(e, 0) ^ 45 ? (((t << 2 ^ ne(e, 0)) << 2 ^ ne(e, 1)) << 2 ^ ne(e, 2)) << 2 ^ ne(e, 3) : 0;
}
function P(e) {
	return e.trim();
}
function F(e, t) {
	return (e = t.exec(e)) ? e[0] : e;
}
function I(e, t, n) {
	return e.replace(t, n);
}
function L(e, t) {
	return e.indexOf(t);
}
function ne(e, t) {
	return e.charCodeAt(t) | 0;
}
function re(e, t, n) {
	return e.slice(t, n);
}
function R(e) {
	return e.length;
}
function z(e) {
	return e.length;
}
function ie(e, t) {
	return t.push(e), e;
}
function ae(e, t) {
	return e.map(t).join("");
}
//#endregion
//#region node_modules/stylis/src/Tokenizer.js
var B = 1, oe = 1, se = 0, V = 0, H = 0, ce = "";
function le(e, t, n, r, i, a, o) {
	return {
		value: e,
		root: t,
		parent: n,
		type: r,
		props: i,
		children: a,
		line: B,
		column: oe,
		length: o,
		return: ""
	};
}
function ue(e, t) {
	return ee(le("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function de() {
	return H;
}
function fe() {
	return H = V > 0 ? ne(ce, --V) : 0, oe--, H === 10 && (oe = 1, B--), H;
}
function pe() {
	return H = V < se ? ne(ce, V++) : 0, oe++, H === 10 && (oe = 1, B++), H;
}
function me() {
	return ne(ce, V);
}
function he() {
	return V;
}
function U(e, t) {
	return re(ce, e, t);
}
function ge(e) {
	switch (e) {
		case 0:
		case 9:
		case 10:
		case 13:
		case 32: return 5;
		case 33:
		case 43:
		case 44:
		case 47:
		case 62:
		case 64:
		case 126:
		case 59:
		case 123:
		case 125: return 4;
		case 58: return 3;
		case 34:
		case 39:
		case 40:
		case 91: return 2;
		case 41:
		case 93: return 1;
	}
	return 0;
}
function W(e) {
	return B = oe = 1, se = R(ce = e), V = 0, [];
}
function _e(e) {
	return ce = "", e;
}
function ve(e) {
	return P(U(V - 1, xe(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ye(e) {
	for (; (H = me()) && H < 33;) pe();
	return ge(e) > 2 || ge(H) > 3 ? "" : " ";
}
function be(e, t) {
	for (; --t && pe() && !(H < 48 || H > 102 || H > 57 && H < 65 || H > 70 && H < 97););
	return U(e, he() + (t < 6 && me() == 32 && pe() == 32));
}
function xe(e) {
	for (; pe();) switch (H) {
		case e: return V;
		case 34:
		case 39:
			e !== 34 && e !== 39 && xe(H);
			break;
		case 40:
			e === 41 && xe(e);
			break;
		case 92:
			pe();
			break;
	}
	return V;
}
function Se(e, t) {
	for (; pe() && e + H !== 57 && !(e + H === 84 && me() === 47););
	return "/*" + U(t, V - 1) + "*" + N(e === 47 ? e : pe());
}
function Ce(e) {
	for (; !ge(me());) pe();
	return U(e, V);
}
//#endregion
//#region node_modules/stylis/src/Parser.js
function we(e) {
	return _e(Te("", null, null, null, [""], e = W(e), 0, [0], e));
}
function Te(e, t, n, r, i, a, o, s, c) {
	for (var l = 0, u = 0, d = o, f = 0, p = 0, m = 0, h = 1, g = 1, _ = 1, v = 0, y = "", b = i, x = a, S = r, C = y; g;) switch (m = v, v = pe()) {
		case 40: if (m != 108 && ne(C, d - 1) == 58) {
			L(C += I(ve(v), "&", "&\f"), "&\f") != -1 && (_ = -1);
			break;
		}
		case 34:
		case 39:
		case 91:
			C += ve(v);
			break;
		case 9:
		case 10:
		case 13:
		case 32:
			C += ye(m);
			break;
		case 92:
			C += be(he() - 1, 7);
			continue;
		case 47:
			switch (me()) {
				case 42:
				case 47:
					ie(De(Se(pe(), he()), t, n), c);
					break;
				default: C += "/";
			}
			break;
		case 123 * h: s[l++] = R(C) * _;
		case 125 * h:
		case 59:
		case 0:
			switch (v) {
				case 0:
				case 125: g = 0;
				case 59 + u:
					_ == -1 && (C = I(C, /\f/g, "")), p > 0 && R(C) - d && ie(p > 32 ? Oe(C + ";", r, n, d - 1) : Oe(I(C, " ", "") + ";", r, n, d - 2), c);
					break;
				case 59: C += ";";
				default: if (ie(S = Ee(C, t, n, l, u, i, s, y, b = [], x = [], d), a), v === 123) if (u === 0) Te(C, t, S, S, b, a, d, s, x);
				else switch (f === 99 && ne(C, 3) === 110 ? 100 : f) {
					case 100:
					case 108:
					case 109:
					case 115:
						Te(e, S, S, r && ie(Ee(e, S, S, 0, 0, i, s, y, i, b = [], d), x), i, x, d, s, r ? b : x);
						break;
					default: Te(C, S, S, S, [""], x, 0, s, x);
				}
			}
			l = u = p = 0, h = _ = 1, y = C = "", d = o;
			break;
		case 58: d = 1 + R(C), p = m;
		default:
			if (h < 1) {
				if (v == 123) --h;
				else if (v == 125 && h++ == 0 && fe() == 125) continue;
			}
			switch (C += N(v), v * h) {
				case 38:
					_ = u > 0 ? 1 : (C += "\f", -1);
					break;
				case 44:
					s[l++] = (R(C) - 1) * _, _ = 1;
					break;
				case 64:
					me() === 45 && (C += ve(pe())), f = me(), u = d = R(y = C += Ce(he())), v++;
					break;
				case 45: m === 45 && R(C) == 2 && (h = 0);
			}
	}
	return a;
}
function Ee(e, t, n, r, i, a, o, s, c, l, u) {
	for (var d = i - 1, f = i === 0 ? a : [""], p = z(f), m = 0, h = 0, g = 0; m < r; ++m) for (var _ = 0, v = re(e, d + 1, d = M(h = o[m])), y = e; _ < p; ++_) (y = P(h > 0 ? f[_] + " " + v : I(v, /&\f/g, f[_]))) && (c[g++] = y);
	return le(e, t, n, i === 0 ? D : s, c, l, u);
}
function De(e, t, n) {
	return le(e, t, n, E, N(de()), re(e, 2, -2), 0);
}
function Oe(e, t, n, r) {
	return le(e, t, n, O, re(e, 0, r), re(e, r + 1, -1), r);
}
//#endregion
//#region node_modules/stylis/src/Serializer.js
function ke(e, t) {
	for (var n = "", r = z(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || "";
	return n;
}
function Ae(e, t, n, r) {
	switch (e.type) {
		case j: if (e.children.length) break;
		case k:
		case O: return e.return = e.return || e.value;
		case E: return "";
		case A: return e.return = e.value + "{" + ke(e.children, r) + "}";
		case D: e.value = e.props.join(",");
	}
	return R(n = ke(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
//#endregion
//#region node_modules/stylis/src/Middleware.js
function je(e) {
	var t = z(e);
	return function(n, r, i, a) {
		for (var o = "", s = 0; s < t; s++) o += e[s](n, r, i, a) || "";
		return o;
	};
}
function Me(e) {
	return function(t) {
		t.root || (t = t.return) && e(t);
	};
}
//#endregion
//#region node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function Ne(e) {
	var t = Object.create(null);
	return function(n) {
		return t[n] === void 0 && (t[n] = e(n)), t[n];
	};
}
//#endregion
//#region node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js
var Pe = function(e, t, n) {
	for (var r = 0, i = 0; r = i, i = me(), r === 38 && i === 12 && (t[n] = 1), !ge(i);) pe();
	return U(e, V);
}, Fe = function(e, t) {
	var n = -1, r = 44;
	do
		switch (ge(r)) {
			case 0:
				r === 38 && me() === 12 && (t[n] = 1), e[n] += Pe(V - 1, t, n);
				break;
			case 2:
				e[n] += ve(r);
				break;
			case 4: if (r === 44) {
				e[++n] = me() === 58 ? "&\f" : "", t[n] = e[n].length;
				break;
			}
			default: e[n] += N(r);
		}
	while (r = pe());
	return e;
}, Ie = function(e, t) {
	return _e(Fe(W(e), t));
}, Le = /* @__PURE__ */ new WeakMap(), Re = function(e) {
	if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
		for (var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line; n.type !== "rule";) if (n = n.parent, !n) return;
		if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !Le.get(n)) && !r) {
			Le.set(e, !0);
			for (var i = [], a = Ie(t, i), o = n.props, s = 0, c = 0; s < a.length; s++) for (var l = 0; l < o.length; l++, c++) e.props[c] = i[s] ? a[s].replace(/&\f/g, o[l]) : o[l] + " " + a[s];
		}
	}
}, ze = function(e) {
	if (e.type === "decl") {
		var t = e.value;
		t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98 && (e.return = "", e.value = "");
	}
};
function Be(e, t) {
	switch (te(e, t)) {
		case 5103: return T + "print-" + e + e;
		case 5737:
		case 4201:
		case 3177:
		case 3433:
		case 1641:
		case 4457:
		case 2921:
		case 5572:
		case 6356:
		case 5844:
		case 3191:
		case 6645:
		case 3005:
		case 6391:
		case 5879:
		case 5623:
		case 6135:
		case 4599:
		case 4855:
		case 4215:
		case 6389:
		case 5109:
		case 5365:
		case 5621:
		case 3829: return T + e + e;
		case 5349:
		case 4246:
		case 4810:
		case 6968:
		case 2756: return T + e + w + e + C + e + e;
		case 6828:
		case 4268: return T + e + C + e + e;
		case 6165: return T + e + C + "flex-" + e + e;
		case 5187: return T + e + I(e, /(\w+).+(:[^]+)/, T + "box-$1$2" + C + "flex-$1$2") + e;
		case 5443: return T + e + C + "flex-item-" + I(e, /flex-|-self/, "") + e;
		case 4675: return T + e + C + "flex-line-pack" + I(e, /align-content|flex-|-self/, "") + e;
		case 5548: return T + e + C + I(e, "shrink", "negative") + e;
		case 5292: return T + e + C + I(e, "basis", "preferred-size") + e;
		case 6060: return T + "box-" + I(e, "-grow", "") + T + e + C + I(e, "grow", "positive") + e;
		case 4554: return T + I(e, /([^-])(transform)/g, "$1" + T + "$2") + e;
		case 6187: return I(I(I(e, /(zoom-|grab)/, T + "$1"), /(image-set)/, T + "$1"), e, "") + e;
		case 5495:
		case 3959: return I(e, /(image-set\([^]*)/, T + "$1$`$1");
		case 4968: return I(I(e, /(.+:)(flex-)?(.*)/, T + "box-pack:$3" + C + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + T + e + e;
		case 4095:
		case 3583:
		case 4068:
		case 2532: return I(e, /(.+)-inline(.+)/, T + "$1$2") + e;
		case 8116:
		case 7059:
		case 5753:
		case 5535:
		case 5445:
		case 5701:
		case 4933:
		case 4677:
		case 5533:
		case 5789:
		case 5021:
		case 4765:
			if (R(e) - 1 - t > 6) switch (ne(e, t + 1)) {
				case 109: if (ne(e, t + 4) !== 45) break;
				case 102: return I(e, /(.+:)(.+)-([^]+)/, "$1" + T + "$2-$3$1" + w + (ne(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
				case 115: return ~L(e, "stretch") ? Be(I(e, "stretch", "fill-available"), t) + e : e;
			}
			break;
		case 4949: if (ne(e, t + 1) !== 115) break;
		case 6444:
			switch (ne(e, R(e) - 3 - (~L(e, "!important") && 10))) {
				case 107: return I(e, ":", ":" + T) + e;
				case 101: return I(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + T + (ne(e, 14) === 45 ? "inline-" : "") + "box$3$1" + T + "$2$3$1" + C + "$2box$3") + e;
			}
			break;
		case 5936:
			switch (ne(e, t + 11)) {
				case 114: return T + e + C + I(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
				case 108: return T + e + C + I(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
				case 45: return T + e + C + I(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
			}
			return T + e + C + e + e;
	}
	return e;
}
var Ve = [function(e, t, n, r) {
	if (e.length > -1 && !e.return) switch (e.type) {
		case O:
			e.return = Be(e.value, e.length);
			break;
		case A: return ke([ue(e, { value: I(e.value, "@", "@" + T) })], r);
		case D: if (e.length) return ae(e.props, function(t) {
			switch (F(t, /(::plac\w+|:read-\w+)/)) {
				case ":read-only":
				case ":read-write": return ke([ue(e, { props: [I(t, /:(read-\w+)/, ":" + w + "$1")] })], r);
				case "::placeholder": return ke([
					ue(e, { props: [I(t, /:(plac\w+)/, ":" + T + "input-$1")] }),
					ue(e, { props: [I(t, /:(plac\w+)/, ":" + w + "$1")] }),
					ue(e, { props: [I(t, /:(plac\w+)/, C + "input-$1")] })
				], r);
			}
			return "";
		});
	}
}], He = function(e) {
	var t = e.key;
	if (t === "css") {
		var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
		Array.prototype.forEach.call(n, function(e) {
			e.getAttribute("data-emotion").indexOf(" ") !== -1 && (document.head.appendChild(e), e.setAttribute("data-s", ""));
		});
	}
	var r = e.stylisPlugins || Ve, i = {}, a, o = [];
	a = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion^=\"" + t + " \"]"), function(e) {
		for (var t = e.getAttribute("data-emotion").split(" "), n = 1; n < t.length; n++) i[t[n]] = !0;
		o.push(e);
	});
	var s, c = [Re, ze], l, u = [Ae, Me(function(e) {
		l.insert(e);
	})], d = je(c.concat(r, u)), f = function(e) {
		return ke(we(e), d);
	};
	s = function(e, t, n, r) {
		l = n, f(e ? e + "{" + t.styles + "}" : t.styles), r && (p.inserted[t.name] = !0);
	};
	var p = {
		key: t,
		sheet: new S({
			key: t,
			container: a,
			nonce: e.nonce,
			speedy: e.speedy,
			prepend: e.prepend,
			insertionPoint: e.insertionPoint
		}),
		nonce: e.nonce,
		inserted: i,
		registered: {},
		insert: s
	};
	return p.sheet.hydrate(o), p;
};
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/extends.js
function Ue() {
	return Ue = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Ue.apply(null, arguments);
}
//#endregion
//#region node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js
var We = /* @__PURE__ */ o(((e) => {
	var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, g = t ? Symbol.for("react.block") : 60121, _ = t ? Symbol.for("react.fundamental") : 60117, v = t ? Symbol.for("react.responder") : 60118, y = t ? Symbol.for("react.scope") : 60119;
	function b(e) {
		if (typeof e == "object" && e) {
			var t = e.$$typeof;
			switch (t) {
				case n: switch (e = e.type, e) {
					case l:
					case u:
					case i:
					case o:
					case a:
					case f: return e;
					default: switch (e &&= e.$$typeof, e) {
						case c:
						case d:
						case h:
						case m:
						case s: return e;
						default: return t;
					}
				}
				case r: return t;
			}
		}
	}
	function x(e) {
		return b(e) === u;
	}
	e.AsyncMode = l, e.ConcurrentMode = u, e.ContextConsumer = c, e.ContextProvider = s, e.Element = n, e.ForwardRef = d, e.Fragment = i, e.Lazy = h, e.Memo = m, e.Portal = r, e.Profiler = o, e.StrictMode = a, e.Suspense = f, e.isAsyncMode = function(e) {
		return x(e) || b(e) === l;
	}, e.isConcurrentMode = x, e.isContextConsumer = function(e) {
		return b(e) === c;
	}, e.isContextProvider = function(e) {
		return b(e) === s;
	}, e.isElement = function(e) {
		return typeof e == "object" && !!e && e.$$typeof === n;
	}, e.isForwardRef = function(e) {
		return b(e) === d;
	}, e.isFragment = function(e) {
		return b(e) === i;
	}, e.isLazy = function(e) {
		return b(e) === h;
	}, e.isMemo = function(e) {
		return b(e) === m;
	}, e.isPortal = function(e) {
		return b(e) === r;
	}, e.isProfiler = function(e) {
		return b(e) === o;
	}, e.isStrictMode = function(e) {
		return b(e) === a;
	}, e.isSuspense = function(e) {
		return b(e) === f;
	}, e.isValidElementType = function(e) {
		return typeof e == "string" || typeof e == "function" || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == "object" && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g);
	}, e.typeOf = b;
})), Ge = /* @__PURE__ */ o(((e, t) => {
	t.exports = We();
})), Ke = /* @__PURE__ */ o(((e, t) => {
	var n = Ge(), r = {
		childContextTypes: !0,
		contextType: !0,
		contextTypes: !0,
		defaultProps: !0,
		displayName: !0,
		getDefaultProps: !0,
		getDerivedStateFromError: !0,
		getDerivedStateFromProps: !0,
		mixins: !0,
		propTypes: !0,
		type: !0
	}, i = {
		name: !0,
		length: !0,
		prototype: !0,
		caller: !0,
		callee: !0,
		arguments: !0,
		arity: !0
	}, a = {
		$$typeof: !0,
		render: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0
	}, o = {
		$$typeof: !0,
		compare: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0,
		type: !0
	}, s = {};
	s[n.ForwardRef] = a, s[n.Memo] = o;
	function c(e) {
		return n.isMemo(e) ? o : s[e.$$typeof] || r;
	}
	var l = Object.defineProperty, u = Object.getOwnPropertyNames, d = Object.getOwnPropertySymbols, f = Object.getOwnPropertyDescriptor, p = Object.getPrototypeOf, m = Object.prototype;
	function h(e, t, n) {
		if (typeof t != "string") {
			if (m) {
				var r = p(t);
				r && r !== m && h(e, r, n);
			}
			var a = u(t);
			d && (a = a.concat(d(t)));
			for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
				var _ = a[g];
				if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
					var v = f(t, _);
					try {
						l(e, _, v);
					} catch {}
				}
			}
		}
		return e;
	}
	t.exports = h;
})), qe = !0;
function Je(e, t, n) {
	var r = "";
	return n.split(" ").forEach(function(n) {
		e[n] === void 0 ? n && (r += n + " ") : t.push(e[n] + ";");
	}), r;
}
var Ye = function(e, t, n) {
	var r = e.key + "-" + t.name;
	(n === !1 || qe === !1) && e.registered[r] === void 0 && (e.registered[r] = t.styles);
}, Xe = function(e, t, n) {
	Ye(e, t, n);
	var r = e.key + "-" + t.name;
	if (e.inserted[t.name] === void 0) {
		var i = t;
		do
			e.insert(t === i ? "." + r : "", i, e.sheet, !0), i = i.next;
		while (i !== void 0);
	}
};
//#endregion
//#region node_modules/@emotion/hash/dist/emotion-hash.esm.js
function Ze(e) {
	for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4) n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= n >>> 24, t = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
	switch (i) {
		case 3: t ^= (e.charCodeAt(r + 2) & 255) << 16;
		case 2: t ^= (e.charCodeAt(r + 1) & 255) << 8;
		case 1: t ^= e.charCodeAt(r) & 255, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
	}
	return t ^= t >>> 13, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
//#endregion
//#region node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var Qe = {
	animationIterationCount: 1,
	aspectRatio: 1,
	borderImageOutset: 1,
	borderImageSlice: 1,
	borderImageWidth: 1,
	boxFlex: 1,
	boxFlexGroup: 1,
	boxOrdinalGroup: 1,
	columnCount: 1,
	columns: 1,
	flex: 1,
	flexGrow: 1,
	flexPositive: 1,
	flexShrink: 1,
	flexNegative: 1,
	flexOrder: 1,
	gridRow: 1,
	gridRowEnd: 1,
	gridRowSpan: 1,
	gridRowStart: 1,
	gridColumn: 1,
	gridColumnEnd: 1,
	gridColumnSpan: 1,
	gridColumnStart: 1,
	msGridRow: 1,
	msGridRowSpan: 1,
	msGridColumn: 1,
	msGridColumnSpan: 1,
	fontWeight: 1,
	lineHeight: 1,
	opacity: 1,
	order: 1,
	orphans: 1,
	scale: 1,
	tabSize: 1,
	widows: 1,
	zIndex: 1,
	zoom: 1,
	WebkitLineClamp: 1,
	fillOpacity: 1,
	floodOpacity: 1,
	stopOpacity: 1,
	strokeDasharray: 1,
	strokeDashoffset: 1,
	strokeMiterlimit: 1,
	strokeOpacity: 1,
	strokeWidth: 1
}, $e = !1, et = /[A-Z]|^ms/g, tt = /_EMO_([^_]+?)_([^]*?)_EMO_/g, nt = function(e) {
	return e.charCodeAt(1) === 45;
}, rt = function(e) {
	return e != null && typeof e != "boolean";
}, it = /* @__PURE__ */ Ne(function(e) {
	return nt(e) ? e : e.replace(et, "-$&").toLowerCase();
}), at = function(e, t) {
	switch (e) {
		case "animation":
		case "animationName": if (typeof t == "string") return t.replace(tt, function(e, t, n) {
			return ut = {
				name: t,
				styles: n,
				next: ut
			}, t;
		});
	}
	return Qe[e] !== 1 && !nt(e) && typeof t == "number" && t !== 0 ? t + "px" : t;
}, ot = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function st(e, t, n) {
	if (n == null) return "";
	var r = n;
	if (r.__emotion_styles !== void 0) return r;
	switch (typeof n) {
		case "boolean": return "";
		case "object":
			var i = n;
			if (i.anim === 1) return ut = {
				name: i.name,
				styles: i.styles,
				next: ut
			}, i.name;
			var a = n;
			if (a.styles !== void 0) {
				var o = a.next;
				if (o !== void 0) for (; o !== void 0;) ut = {
					name: o.name,
					styles: o.styles,
					next: ut
				}, o = o.next;
				return a.styles + ";";
			}
			return ct(e, t, n);
		case "function":
			if (e !== void 0) {
				var s = ut, c = n(e);
				return ut = s, st(e, t, c);
			}
			break;
	}
	var l = n;
	if (t == null) return l;
	var u = t[l];
	return u === void 0 ? l : u;
}
function ct(e, t, n) {
	var r = "";
	if (Array.isArray(n)) for (var i = 0; i < n.length; i++) r += st(e, t, n[i]) + ";";
	else for (var a in n) {
		var o = n[a];
		if (typeof o != "object") {
			var s = o;
			t != null && t[s] !== void 0 ? r += a + "{" + t[s] + "}" : rt(s) && (r += it(a) + ":" + at(a, s) + ";");
		} else {
			if (a === "NO_COMPONENT_SELECTOR" && $e) throw Error(ot);
			if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0)) for (var c = 0; c < o.length; c++) rt(o[c]) && (r += it(a) + ":" + at(a, o[c]) + ";");
			else {
				var l = st(e, t, o);
				switch (a) {
					case "animation":
					case "animationName":
						r += it(a) + ":" + l + ";";
						break;
					default: r += a + "{" + l + "}";
				}
			}
		}
	}
	return r;
}
var lt = /label:\s*([^\s;{]+)\s*(;|$)/g, ut;
function dt(e, t, n) {
	if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0) return e[0];
	var r = !0, i = "";
	ut = void 0;
	var a = e[0];
	a == null || a.raw === void 0 ? (r = !1, i += st(n, t, a)) : i += a[0];
	for (var o = 1; o < e.length; o++) i += st(n, t, e[o]), r && (i += a[o]);
	lt.lastIndex = 0;
	for (var s = "", c; (c = lt.exec(i)) !== null;) s += "-" + c[1];
	return {
		name: Ze(i) + s,
		styles: i,
		next: ut
	};
}
//#endregion
//#region node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js
var ft = function(e) {
	return e();
}, pt = _.useInsertionEffect ? _.useInsertionEffect : !1, mt = pt || ft, ht = pt || _.useLayoutEffect, gt = /* @__PURE__ */ _.createContext(typeof HTMLElement < "u" ? /* @__PURE__ */ He({ key: "css" }) : null), _t = gt.Provider, vt = function(e) {
	return /* @__PURE__ */ (0, _.forwardRef)(function(t, n) {
		return e(t, (0, _.useContext)(gt), n);
	});
}, yt = /* @__PURE__ */ _.createContext({}), bt = {}.hasOwnProperty, xt = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", St = function(e, t) {
	var n = {};
	for (var r in t) bt.call(t, r) && (n[r] = t[r]);
	return n[xt] = e, n;
}, Ct = function(e) {
	var t = e.cache, n = e.serialized, r = e.isStringTag;
	return Ye(t, n, r), mt(function() {
		return Xe(t, n, r);
	}), null;
}, wt = /* @__PURE__ */ vt(function(e, t, n) {
	var r = e.css;
	typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
	var i = e[xt], a = [r], o = "";
	typeof e.className == "string" ? o = Je(t.registered, a, e.className) : e.className != null && (o = e.className + " ");
	var s = dt(a, void 0, _.useContext(yt));
	o += t.key + "-" + s.name;
	var c = {};
	for (var l in e) bt.call(e, l) && l !== "css" && l !== xt && (c[l] = e[l]);
	return c.className = o, n && (c.ref = n), /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement(Ct, {
		cache: t,
		serialized: s,
		isStringTag: typeof i == "string"
	}), /* @__PURE__ */ _.createElement(i, c));
});
Ke();
var Tt = function(e, t) {
	var n = arguments;
	if (t == null || !bt.call(t, "css")) return _.createElement.apply(void 0, n);
	var r = n.length, i = Array(r);
	i[0] = wt, i[1] = St(e, t);
	for (var a = 2; a < r; a++) i[a] = n[a];
	return _.createElement.apply(null, i);
};
(function(e) {
	var t;
	(function(e) {})(t ||= e.JSX ||= {});
})(Tt ||= {});
var Et = /* @__PURE__ */ vt(function(e, t) {
	var n = e.styles, r = dt([n], void 0, _.useContext(yt)), i = _.useRef();
	return ht(function() {
		var e = t.key + "-global", n = new t.sheet.constructor({
			key: e,
			nonce: t.sheet.nonce,
			container: t.sheet.container,
			speedy: t.sheet.isSpeedy
		}), a = !1, o = document.querySelector("style[data-emotion=\"" + e + " " + r.name + "\"]");
		return t.sheet.tags.length && (n.before = t.sheet.tags[0]), o !== null && (a = !0, o.setAttribute("data-emotion", e), n.hydrate([o])), i.current = [n, a], function() {
			n.flush();
		};
	}, [t]), ht(function() {
		var e = i.current, n = e[0];
		if (e[1]) {
			e[1] = !1;
			return;
		}
		r.next !== void 0 && Xe(t, r.next, !0), n.tags.length && (n.before = n.tags[n.tags.length - 1].nextElementSibling, n.flush()), t.insert("", r, n, !1);
	}, [t, r.name]), null;
});
function Dt() {
	return dt([...arguments]);
}
function Ot() {
	var e = Dt.apply(void 0, arguments), t = "animation-" + e.name;
	return {
		name: t,
		styles: "@keyframes " + t + "{" + e.styles + "}",
		anim: 1,
		toString: function() {
			return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
		}
	};
}
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function kt(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var i = e.length;
		for (t = 0; t < i; t++) e[t] && (n = kt(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function G() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = kt(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/@mui/utils/composeClasses/composeClasses.mjs
function At(e, t, n = void 0) {
	let r = {};
	for (let i in e) {
		let a = e[i], o = "", s = !0;
		for (let e = 0; e < a.length; e += 1) {
			let r = a[e];
			r && (o += (s === !0 ? "" : " ") + t(r), s = !1, n && n[r] && (o += " " + n[r]));
		}
		r[i] = o;
	}
	return r;
}
//#endregion
//#region node_modules/@mui/utils/fastDeepAssign/fastDeepAssign.mjs
function jt(e, t) {
	let n = Array.isArray(t), r = Array.isArray(e);
	return It(t) ? t : Lt(e) ? Rt(t) : n && r ? Pt(e, t) : n === r ? zt(e, t) : Rt(t);
}
function Mt(e) {
	let t = 0, n = e.length, r = Array(n);
	for (t = 0; t < n; t += 1) r[t] = Rt(e[t]);
	return r;
}
function Nt(e) {
	let t = {};
	for (let n in e) t[n] = Rt(e[n]);
	return t;
}
function Pt(e, t) {
	let n = e.length;
	for (let r = 0; r < t.length; r += 1) e[n + r] = Rt(t[r]);
	return e;
}
function Ft(e) {
	return typeof e == "object" && !!e && !(e instanceof RegExp) && !(e instanceof Date);
}
function It(e) {
	return typeof e != "object" || !e;
}
function Lt(e) {
	return typeof e != "object" || !e || e instanceof RegExp || e instanceof Date;
}
function Rt(e) {
	return Ft(e) ? Array.isArray(e) ? Mt(e) : Nt(e) : e;
}
function zt(e, t) {
	for (let n in t) n in e ? e[n] = jt(e[n], t[n]) : e[n] = Rt(t[n]);
	return e;
}
//#endregion
//#region node_modules/@mui/utils/formatMuiErrorMessage/formatMuiErrorMessage.mjs
function Bt(e, ...t) {
	let n = new URL(`https://mui.com/production-error/?code=${e}`);
	return t.forEach((e) => n.searchParams.append("args[]", e)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
//#endregion
//#region node_modules/@mui/utils/capitalize/capitalize.mjs
function Vt(e) {
	if (typeof e != "string") throw Error(Bt(7));
	return e.charAt(0).toUpperCase() + e.slice(1);
}
//#endregion
//#region node_modules/@mui/utils/isObjectEmpty/isObjectEmpty.mjs
function Ht(e) {
	if (e == null) return !0;
	for (let t in e) return !1;
	return !0;
}
//#endregion
//#region node_modules/@mui/utils/node_modules/react-is/cjs/react-is.production.js
var Ut = /* @__PURE__ */ o(((e) => {
	var t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), a = Symbol.for("react.context"), o = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), d = Symbol.for("react.client.reference");
	e.isValidElementType = function(e) {
		return !!(typeof e == "string" || typeof e == "function" || e === t || e === r || e === n || e === s || e === c || typeof e == "object" && e && (e.$$typeof === u || e.$$typeof === l || e.$$typeof === a || e.$$typeof === i || e.$$typeof === o || e.$$typeof === d || e.getModuleId !== void 0));
	};
})), Wt = (/* @__PURE__ */ o(((e, t) => {
	t.exports = Ut();
})))();
function Gt(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Kt(e) {
	if (/* @__PURE__ */ _.isValidElement(e) || (0, Wt.isValidElementType)(e) || !Gt(e)) return e;
	let t = {};
	return Object.keys(e).forEach((n) => {
		t[n] = Kt(e[n]);
	}), t;
}
function qt(e, t, n = { clone: !0 }) {
	let r = n.clone ? { ...e } : e;
	return Gt(e) && Gt(t) && Object.keys(t).forEach((i) => {
		/* @__PURE__ */ _.isValidElement(t[i]) || (0, Wt.isValidElementType)(t[i]) ? r[i] = t[i] : Gt(t[i]) && Object.prototype.hasOwnProperty.call(e, i) && Gt(e[i]) ? r[i] = qt(e[i], t[i], n) : n.clone ? r[i] = Gt(t[i]) ? Kt(t[i]) : t[i] : r[i] = t[i];
	}), r;
}
//#endregion
//#region node_modules/@mui/system/cssContainerQueries/cssContainerQueries.mjs
var Jt = /min-width:\s*([0-9.]+)/;
function Yt(e, t) {
	if (!e.containerQueries || !Xt(t)) return t;
	let n = [];
	for (let e in t) e.startsWith("@container") && n.push(e);
	n.sort((e, t) => (e.match(Jt)?.[1] || 0) - +(t.match(Jt)?.[1] || 0));
	let r = t;
	for (let e = 0; e < n.length; e += 1) {
		let t = n[e], i = r[t];
		delete r[t], r[t] = i;
	}
	return r;
}
function Xt(e) {
	for (let t in e) if (t.startsWith("@container")) return !0;
	return !1;
}
function Zt(e, t) {
	return t === "@" || t.startsWith("@") && (e.some((e) => t.startsWith(`@${e}`)) || !!t.match(/^@\d/));
}
function Qt(e, t) {
	let n = t.match(/^@([^/]+)?\/?(.+)?$/);
	if (!n) return null;
	let [, r, i] = n, a = Number.isNaN(+r) ? r || 0 : +r;
	return e.containerQueries(i).up(a);
}
function $t(e) {
	let t = (e, t) => e.replace("@media", t ? `@container ${t}` : "@container");
	function n(n, r) {
		n.up = (...n) => t(e.breakpoints.up(...n), r), n.down = (...n) => t(e.breakpoints.down(...n), r), n.between = (...n) => t(e.breakpoints.between(...n), r), n.only = (...n) => t(e.breakpoints.only(...n), r), n.not = (...n) => {
			let i = t(e.breakpoints.not(...n), r);
			return i.includes("not all and") ? i.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : i;
		};
	}
	let r = {}, i = (e) => (n(r, e), r);
	return n(i), {
		...e,
		containerQueries: i
	};
}
//#endregion
//#region node_modules/@mui/system/createBreakpoints/createBreakpoints.mjs
var en = (e) => {
	let t = Object.keys(e).map((t) => ({
		key: t,
		val: e[t]
	})) || [];
	return t.sort((e, t) => e.val - t.val), t.reduce((e, t) => ({
		...e,
		[t.key]: t.val
	}), {});
};
function tn(e) {
	let { values: t = {
		xs: 0,
		sm: 600,
		md: 900,
		lg: 1200,
		xl: 1536
	}, unit: n = "px", step: r = 5, ...i } = e, a = en(t), o = Object.keys(a);
	function s(e) {
		return `@media (min-width:${typeof t[e] == "number" ? t[e] : e}${n})`;
	}
	function c(e) {
		return `@media (max-width:${(typeof t[e] == "number" ? t[e] : e) - r / 100}${n})`;
	}
	function l(e, i) {
		let a = o.indexOf(i);
		return `@media (min-width:${typeof t[e] == "number" ? t[e] : e}${n}) and (max-width:${(a !== -1 && typeof t[o[a]] == "number" ? t[o[a]] : i) - r / 100}${n})`;
	}
	function u(e) {
		return o.indexOf(e) + 1 < o.length ? l(e, o[o.indexOf(e) + 1]) : s(e);
	}
	function d(e) {
		let t = o.indexOf(e);
		return t === 0 ? s(o[1]) : t === o.length - 1 ? c(o[t]) : l(e, o[o.indexOf(e) + 1]).replace("@media", "@media not all and");
	}
	let f = [];
	for (let e = 0; e < o.length; e += 1) f.push(s(o[e]));
	return {
		keys: o,
		values: a,
		up: s,
		down: c,
		between: l,
		only: u,
		not: d,
		unit: n,
		internal_mediaKeys: f,
		...i
	};
}
//#endregion
//#region node_modules/@mui/system/breakpoints/breakpoints.mjs
var nn = {}, rn = {
	xs: 0,
	sm: 600,
	md: 900,
	lg: 1200,
	xl: 1536
}, an = tn({ values: rn }), on = { containerQueries: (e) => ({ up: (t) => {
	let n = typeof t == "number" ? t : rn[t] || t;
	return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
} }) };
function sn(e, t, n) {
	let r = {};
	return cn(r, e.theme, t, (e, t, i) => {
		let a = n(t, i);
		e ? r[e] = a : jt(r, a);
	});
}
function cn(e, t, n, r) {
	if (t ??= nn, Array.isArray(n)) {
		let i = t.breakpoints ?? an;
		for (let t = 0; t < n.length; t += 1) ln(e, i.up(i.keys[t]), n[t], void 0, r);
		return e;
	}
	if (typeof n == "object") {
		let i = t.breakpoints ?? an, a = i.values ?? rn;
		for (let o in n) if (Zt(i.keys, o)) {
			let i = Qt(t.containerQueries ? t : on, o);
			i && ln(e, i, n[o], o, r);
		} else if (o in a) ln(e, i.up(o), n[o], o, r);
		else {
			let t = o;
			e[t] = n[t];
		}
		return e;
	}
	return r(void 0, n), e;
}
function ln(e, t, n, r, i) {
	e[t] ??= {}, i(t, n, r);
}
function un(e = an) {
	let { internal_mediaKeys: t } = e, n = {};
	for (let e = 0; e < t.length; e += 1) n[t[e]] = {};
	return n;
}
function dn(e, t) {
	let n = e.internal_mediaKeys;
	for (let e = 0; e < n.length; e += 1) {
		let r = n[e];
		Ht(t[r]) && delete t[r];
	}
	return t;
}
function fn(e, ...t) {
	return dn(e, [un(e), ...t].reduce((e, t) => qt(e, t), {}));
}
function pn(e, t) {
	if (typeof e != "object") return {};
	let n = {}, r = Object.keys(t);
	return Array.isArray(e) ? r.forEach((t, r) => {
		r < e.length && (n[t] = !0);
	}) : r.forEach((t) => {
		e[t] != null && (n[t] = !0);
	}), n;
}
function mn({ values: e, breakpoints: t, base: n }) {
	let r = n || pn(e, t), i = Object.keys(r);
	if (i.length === 0) return e;
	let a;
	return i.reduce((t, n, r) => (Array.isArray(e) ? (t[n] = e[r] == null ? e[a] : e[r], a = r) : typeof e == "object" ? (t[n] = e[n] == null ? e[a] : e[n], a = n) : t[n] = e, t), {});
}
function hn(e, t) {
	if (Array.isArray(t)) return !0;
	if (typeof t == "object" && t) {
		for (let n = 0; n < e.keys.length; n += 1) if (e.keys[n] in t) return !0;
		let n = Object.keys(t);
		for (let t = 0; t < n.length; t += 1) if (Zt(e.keys, n[t])) return !0;
	}
	return !1;
}
//#endregion
//#region node_modules/@mui/system/style/style.mjs
function gn(e, t, n, r) {
	let i;
	return i = typeof e == "function" ? e(n) : Array.isArray(e) ? e[n] || n : typeof n == "string" && _n(e, n, !0, r) || n, t && (i = t(i, n, e)), i;
}
function _n(e, t, n = !0, r = void 0) {
	if (!e || !t) return null;
	let i = t.split(".");
	if (e.vars && n) {
		let t = vn(e.vars, i, r);
		if (t != null) return t;
	}
	return vn(e, i, r);
}
function vn(e, t, n = void 0) {
	let r, i = e, a = 0;
	for (; a < t.length;) {
		if (i == null) return i;
		r = i, i = i[t[a]], a += 1;
	}
	if (n && i === void 0) {
		let e = t[t.length - 1], i = `${n}${e === "default" ? "" : Vt(e)}`;
		return r?.[i];
	}
	return i;
}
function yn(e) {
	let { prop: t, cssProperty: n = e.prop, themeKey: r, transform: i } = e, a = (e) => {
		if (e[t] == null) return null;
		let a = e[t], o = e.theme, s = _n(o, r) || {};
		return sn(e, a, (e) => {
			let r = gn(s, i, e, t);
			return n === !1 ? r : { [n]: r };
		});
	};
	return a.propTypes = {}, a.filterProps = [t], a;
}
//#endregion
//#region node_modules/@mui/system/spacing/spacing.mjs
var bn = { internal_cache: {} }, xn = {
	m: "margin",
	p: "padding"
}, Sn = {
	t: "Top",
	r: "Right",
	b: "Bottom",
	l: "Left",
	x: ["Left", "Right"],
	y: ["Top", "Bottom"]
}, Cn = {
	marginX: "mx",
	marginY: "my",
	paddingX: "px",
	paddingY: "py"
}, wn = {};
for (let e in xn) wn[e] = [xn[e]];
for (let e in xn) for (let t in Sn) {
	let n = xn[e], r = Sn[t], i = Array.isArray(r) ? r.map((e) => n + e) : [n + r];
	wn[e + t] = i;
}
for (let e in Cn) wn[e] = wn[Cn[e]];
var Tn = new Set([
	"m",
	"mt",
	"mr",
	"mb",
	"ml",
	"mx",
	"my",
	"margin",
	"marginTop",
	"marginRight",
	"marginBottom",
	"marginLeft",
	"marginX",
	"marginY",
	"marginInline",
	"marginInlineStart",
	"marginInlineEnd",
	"marginBlock",
	"marginBlockStart",
	"marginBlockEnd"
]), En = new Set([
	"p",
	"pt",
	"pr",
	"pb",
	"pl",
	"px",
	"py",
	"padding",
	"paddingTop",
	"paddingRight",
	"paddingBottom",
	"paddingLeft",
	"paddingX",
	"paddingY",
	"paddingInline",
	"paddingInlineStart",
	"paddingInlineEnd",
	"paddingBlock",
	"paddingBlockStart",
	"paddingBlockEnd"
]), Dn = new Set([...Tn, ...En]);
function On(e, t, n, r) {
	let i = _n(e, t, !0) ?? n;
	return typeof i == "number" || typeof i == "string" ? (e) => typeof e == "string" ? e : typeof i == "string" ? i.startsWith("var(") && e === 0 ? 0 : i.startsWith("var(") && e === 1 ? i : `calc(${e} * ${i})` : i * e : Array.isArray(i) ? (e) => {
		if (typeof e == "string") return e;
		let t = i[Math.abs(e)];
		return e >= 0 ? t : typeof t == "number" ? -t : typeof t == "string" && t.startsWith("var(") ? `calc(-1 * ${t})` : `-${t}`;
	} : typeof i == "function" ? i : () => void 0;
}
function kn(e) {
	return On(e, "spacing", 8, "spacing");
}
function An(e, t) {
	return typeof t == "string" || t == null ? t : e(t);
}
var jn = [""];
function Mn(e, t) {
	let n = e.theme ?? bn, r = n?.internal_cache?.unarySpacing ?? kn(n), i = {};
	for (let n in e) {
		if (!t.has(n)) continue;
		let a = wn[n] ?? (jn[0] = n, jn), o = e[n];
		cn(i, e.theme, o, (e, t) => {
			let n = e ? i[e] : i;
			for (let e = 0; e < a.length; e += 1) n[a[e]] = An(r, t);
		});
	}
	return i;
}
function Nn(e) {
	return Mn(e, Tn);
}
Nn.propTypes = {}, Nn.filterProps = Tn;
function Pn(e) {
	return Mn(e, En);
}
Pn.propTypes = {}, Pn.filterProps = En;
function Fn(e) {
	return Mn(e, Dn);
}
Fn.propTypes = {}, Fn.filterProps = Dn;
//#endregion
//#region node_modules/@mui/system/compose/compose.mjs
function In(...e) {
	let t = e.reduce((e, t) => (t.filterProps.forEach((n) => {
		e[n] = t;
	}), e), {}), n = (e) => {
		let n = {};
		for (let r in e) t[r] && jt(n, t[r](e));
		return n;
	};
	return n.propTypes = {}, n.filterProps = e.reduce((e, t) => e.concat(t.filterProps), []), n;
}
//#endregion
//#region node_modules/@mui/system/borders/borders.mjs
function Ln(e) {
	return typeof e == "number" ? `${e}px solid` : e;
}
function Rn(e, t) {
	return yn({
		prop: e,
		themeKey: "borders",
		transform: t
	});
}
var zn = Rn("border", Ln), Bn = Rn("borderTop", Ln), Vn = Rn("borderRight", Ln), Hn = Rn("borderBottom", Ln), Un = Rn("borderLeft", Ln), Wn = Rn("borderColor"), Gn = Rn("borderTopColor"), Kn = Rn("borderRightColor"), qn = Rn("borderBottomColor"), Jn = Rn("borderLeftColor"), Yn = Rn("outline", Ln), Xn = Rn("outlineColor"), Zn = (e) => {
	if (e.borderRadius !== void 0 && e.borderRadius !== null) {
		let t = On(e.theme, "shape.borderRadius", 4, "borderRadius");
		return sn(e, e.borderRadius, (e) => ({ borderRadius: An(t, e) }));
	}
	return null;
};
Zn.propTypes = {}, Zn.filterProps = ["borderRadius"], In(zn, Bn, Vn, Hn, Un, Wn, Gn, Kn, qn, Jn, Zn, Yn, Xn);
//#endregion
//#region node_modules/@mui/system/cssGrid/cssGrid.mjs
var Qn = (e) => {
	if (e.gap !== void 0 && e.gap !== null) {
		let t = On(e.theme, "spacing", 8, "gap");
		return sn(e, e.gap, (e) => ({ gap: An(t, e) }));
	}
	return null;
};
Qn.propTypes = {}, Qn.filterProps = ["gap"];
var $n = (e) => {
	if (e.columnGap !== void 0 && e.columnGap !== null) {
		let t = On(e.theme, "spacing", 8, "columnGap");
		return sn(e, e.columnGap, (e) => ({ columnGap: An(t, e) }));
	}
	return null;
};
$n.propTypes = {}, $n.filterProps = ["columnGap"];
var er = (e) => {
	if (e.rowGap !== void 0 && e.rowGap !== null) {
		let t = On(e.theme, "spacing", 8, "rowGap");
		return sn(e, e.rowGap, (e) => ({ rowGap: An(t, e) }));
	}
	return null;
};
er.propTypes = {}, er.filterProps = ["rowGap"], In(Qn, $n, er, yn({ prop: "gridColumn" }), yn({ prop: "gridRow" }), yn({ prop: "gridAutoFlow" }), yn({ prop: "gridAutoColumns" }), yn({ prop: "gridAutoRows" }), yn({ prop: "gridTemplateColumns" }), yn({ prop: "gridTemplateRows" }), yn({ prop: "gridTemplateAreas" }), yn({ prop: "gridArea" }));
//#endregion
//#region node_modules/@mui/system/palette/palette.mjs
function tr(e, t) {
	return t === "grey" ? t : e;
}
In(yn({
	prop: "color",
	themeKey: "palette",
	transform: tr
}), yn({
	prop: "bgcolor",
	cssProperty: "backgroundColor",
	themeKey: "palette",
	transform: tr
}), yn({
	prop: "backgroundColor",
	themeKey: "palette",
	transform: tr
}));
//#endregion
//#region node_modules/@mui/system/sizing/sizing.mjs
function nr(e) {
	return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
var rr = yn({
	prop: "width",
	transform: nr
}), ir = (e) => e.maxWidth !== void 0 && e.maxWidth !== null ? sn(e, e.maxWidth, (t) => {
	let n = e.theme?.breakpoints?.values?.[t] || rn[t];
	return n ? e.theme?.breakpoints?.unit === "px" ? { maxWidth: n } : { maxWidth: `${n}${e.theme.breakpoints.unit}` } : { maxWidth: nr(t) };
}) : null;
ir.filterProps = ["maxWidth"];
var ar = yn({
	prop: "minWidth",
	transform: nr
}), or = yn({
	prop: "height",
	transform: nr
}), sr = yn({
	prop: "maxHeight",
	transform: nr
}), cr = yn({
	prop: "minHeight",
	transform: nr
});
yn({
	prop: "size",
	cssProperty: "width",
	transform: nr
}), yn({
	prop: "size",
	cssProperty: "height",
	transform: nr
}), In(rr, ir, ar, or, sr, cr, yn({ prop: "boxSizing" }));
//#endregion
//#region node_modules/@mui/system/styleFunctionSx/defaultSxConfig.mjs
var lr = {
	border: {
		themeKey: "borders",
		transform: Ln
	},
	borderTop: {
		themeKey: "borders",
		transform: Ln
	},
	borderRight: {
		themeKey: "borders",
		transform: Ln
	},
	borderBottom: {
		themeKey: "borders",
		transform: Ln
	},
	borderLeft: {
		themeKey: "borders",
		transform: Ln
	},
	borderColor: { themeKey: "palette" },
	borderTopColor: { themeKey: "palette" },
	borderRightColor: { themeKey: "palette" },
	borderBottomColor: { themeKey: "palette" },
	borderLeftColor: { themeKey: "palette" },
	outline: {
		themeKey: "borders",
		transform: Ln
	},
	outlineColor: { themeKey: "palette" },
	borderRadius: {
		themeKey: "shape.borderRadius",
		style: Zn
	},
	color: {
		themeKey: "palette",
		transform: tr
	},
	bgcolor: {
		themeKey: "palette",
		cssProperty: "backgroundColor",
		transform: tr
	},
	backgroundColor: {
		themeKey: "palette",
		transform: tr
	},
	p: { style: Pn },
	pt: { style: Pn },
	pr: { style: Pn },
	pb: { style: Pn },
	pl: { style: Pn },
	px: { style: Pn },
	py: { style: Pn },
	padding: { style: Pn },
	paddingTop: { style: Pn },
	paddingRight: { style: Pn },
	paddingBottom: { style: Pn },
	paddingLeft: { style: Pn },
	paddingX: { style: Pn },
	paddingY: { style: Pn },
	paddingInline: { style: Pn },
	paddingInlineStart: { style: Pn },
	paddingInlineEnd: { style: Pn },
	paddingBlock: { style: Pn },
	paddingBlockStart: { style: Pn },
	paddingBlockEnd: { style: Pn },
	m: { style: Nn },
	mt: { style: Nn },
	mr: { style: Nn },
	mb: { style: Nn },
	ml: { style: Nn },
	mx: { style: Nn },
	my: { style: Nn },
	margin: { style: Nn },
	marginTop: { style: Nn },
	marginRight: { style: Nn },
	marginBottom: { style: Nn },
	marginLeft: { style: Nn },
	marginX: { style: Nn },
	marginY: { style: Nn },
	marginInline: { style: Nn },
	marginInlineStart: { style: Nn },
	marginInlineEnd: { style: Nn },
	marginBlock: { style: Nn },
	marginBlockStart: { style: Nn },
	marginBlockEnd: { style: Nn },
	displayPrint: {
		cssProperty: !1,
		transform: (e) => ({ "@media print": { display: e } })
	},
	display: {},
	overflow: {},
	textOverflow: {},
	visibility: {},
	whiteSpace: {},
	flexBasis: {},
	flexDirection: {},
	flexWrap: {},
	justifyContent: {},
	alignItems: {},
	alignContent: {},
	order: {},
	flex: {},
	flexGrow: {},
	flexShrink: {},
	alignSelf: {},
	justifyItems: {},
	justifySelf: {},
	gap: { style: Qn },
	rowGap: { style: er },
	columnGap: { style: $n },
	gridColumn: {},
	gridRow: {},
	gridAutoFlow: {},
	gridAutoColumns: {},
	gridAutoRows: {},
	gridTemplateColumns: {},
	gridTemplateRows: {},
	gridTemplateAreas: {},
	gridArea: {},
	position: {},
	zIndex: { themeKey: "zIndex" },
	top: {},
	right: {},
	bottom: {},
	left: {},
	boxShadow: { themeKey: "shadows" },
	width: { transform: nr },
	maxWidth: { style: ir },
	minWidth: { transform: nr },
	height: { transform: nr },
	maxHeight: { transform: nr },
	minHeight: { transform: nr },
	boxSizing: {},
	font: { themeKey: "font" },
	fontFamily: { themeKey: "typography" },
	fontSize: { themeKey: "typography" },
	fontStyle: { themeKey: "typography" },
	fontWeight: { themeKey: "typography" },
	letterSpacing: {},
	textTransform: {},
	lineHeight: {},
	textAlign: {},
	typography: {
		cssProperty: !1,
		themeKey: "typography"
	}
}, ur = {};
function dr() {
	function e(t) {
		if (!t.sx) return null;
		let { sx: n, theme: r = ur, nested: i } = t, a = r.unstable_sxConfig ?? lr, o = {
			sx: null,
			theme: r,
			nested: !0
		};
		function s(n) {
			let s = n;
			if (typeof n == "function") s = n(r);
			else if (typeof n != "object") return n;
			if (!s) return null;
			let c = r.breakpoints ?? an, l = un(c);
			for (let n in s) {
				let i = mr(s[n], r);
				if (i != null) {
					if (typeof i != "object") {
						pr(l, n, i, r, a);
						continue;
					}
					if (a[n]) {
						pr(l, n, i, r, a);
						continue;
					}
					hn(c, i) ? cn(l, t.theme, i, (e, t) => {
						l[e][n] = t;
					}) : (o.sx = i, l[n] = e(o));
				}
			}
			return !i && r.modularCssLayers ? { "@layer sx": Yt(r, dn(c, l)) } : Yt(r, dn(c, l));
		}
		return Array.isArray(n) ? n.map(s) : s(n);
	}
	return e.filterProps = ["sx"], e;
}
var fr = dr();
function pr(e, t, n, r, i) {
	let a = i[t];
	if (!a) {
		e[t] = n;
		return;
	}
	if (n == null) return;
	let { themeKey: o } = a;
	if (o === "typography" && n === "inherit") {
		e[t] = n;
		return;
	}
	let { style: s } = a;
	if (s) {
		jt(e, s({
			[t]: n,
			theme: r
		}));
		return;
	}
	let { cssProperty: c = t, transform: l } = a, u = _n(r, o);
	cn(e, r, n, (n, r) => {
		let i = gn(u, l, r, t);
		c === !1 ? jt(n ? e[n] : e, i) : n ? e[n][c] = i : e[c] = i;
	});
}
function mr(e, t) {
	return typeof e == "function" ? e(t) : e;
}
//#endregion
//#region node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js
var hr = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, gr = /* @__PURE__ */ Ne(function(e) {
	return hr.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
}), _r = !1, vr = gr, yr = function(e) {
	return e !== "theme";
}, br = function(e) {
	return typeof e == "string" && e.charCodeAt(0) > 96 ? vr : yr;
}, xr = function(e, t, n) {
	var r;
	if (t) {
		var i = t.shouldForwardProp;
		r = e.__emotion_forwardProp && i ? function(t) {
			return e.__emotion_forwardProp(t) && i(t);
		} : i;
	}
	return typeof r != "function" && n && (r = e.__emotion_forwardProp), r;
}, Sr = function(e) {
	var t = e.cache, n = e.serialized, r = e.isStringTag;
	return Ye(t, n, r), mt(function() {
		return Xe(t, n, r);
	}), null;
}, Cr = function e(t, n) {
	var r = t.__emotion_real === t, i = r && t.__emotion_base || t, a, o;
	n !== void 0 && (a = n.label, o = n.target);
	var s = xr(t, n, r), c = s || br(i), l = !c("as");
	return function() {
		var u = arguments, d = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
		if (a !== void 0 && d.push("label:" + a + ";"), u[0] == null || u[0].raw === void 0) d.push.apply(d, u);
		else {
			var f = u[0];
			d.push(f[0]);
			for (var p = u.length, m = 1; m < p; m++) d.push(u[m], f[m]);
		}
		var h = vt(function(e, t, n) {
			var r = l && e.as || i, a = "", u = [], f = e;
			if (e.theme == null) {
				for (var p in f = {}, e) f[p] = e[p];
				f.theme = _.useContext(yt);
			}
			typeof e.className == "string" ? a = Je(t.registered, u, e.className) : e.className != null && (a = e.className + " ");
			var m = dt(d.concat(u), t.registered, f);
			a += t.key + "-" + m.name, o !== void 0 && (a += " " + o);
			var h = l && s === void 0 ? br(r) : c, g = {};
			for (var v in e) l && v === "as" || h(v) && (g[v] = e[v]);
			return g.className = a, n && (g.ref = n), /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement(Sr, {
				cache: t,
				serialized: m,
				isStringTag: typeof r == "string"
			}), /* @__PURE__ */ _.createElement(r, g));
		});
		return h.displayName = a === void 0 ? "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")" : a, h.defaultProps = t.defaultProps, h.__emotion_real = h, h.__emotion_base = i, h.__emotion_styles = d, h.__emotion_forwardProp = s, Object.defineProperty(h, "toString", { value: function() {
			return o === void 0 && _r ? "NO_COMPONENT_SELECTOR" : "." + o;
		} }), h.withComponent = function(t, r) {
			return e(t, Ue({}, n, r, { shouldForwardProp: xr(h, r, !0) })).apply(void 0, d);
		}, h;
	};
}, wr = /* @__PURE__ */ "a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.marquee.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.title.tr.track.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan".split("."), Tr = Cr.bind(null);
wr.forEach(function(e) {
	Tr[e] = Tr(e);
});
//#endregion
//#region node_modules/react/cjs/react-jsx-runtime.production.js
var Er = /* @__PURE__ */ o(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), K = (/* @__PURE__ */ o(((e, t) => {
	t.exports = Er();
})))();
function Dr(e) {
	return e == null || Object.keys(e).length === 0;
}
function Or(e) {
	let { styles: t, defaultTheme: n = {} } = e;
	return /* @__PURE__ */ (0, K.jsx)(Et, { styles: typeof t == "function" ? (e) => t(Dr(e) ? n : e) : t });
}
//#endregion
//#region node_modules/@mui/styled-engine/index.mjs
function kr(e, t) {
	return Tr(e, t);
}
function Ar(e, t) {
	Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
var jr = [];
function Mr(e) {
	return jr[0] = e, dt(jr);
}
//#endregion
//#region node_modules/@mui/system/createTheme/shape.mjs
var Nr = { borderRadius: 4 };
//#endregion
//#region node_modules/@mui/system/createTheme/createSpacing.mjs
function Pr(e = 8, t = kn({ spacing: e })) {
	if (e.mui) return e;
	let n = (...e) => (e.length === 0 ? [1] : e).map((e) => {
		let n = t(e);
		return typeof n == "number" ? `${n}px` : n;
	}).join(" ");
	return n.mui = !0, n;
}
//#endregion
//#region node_modules/@mui/system/createTheme/applyStyles.mjs
function Fr(e, t) {
	let n = this;
	if (n.vars) {
		if (!n.colorSchemes?.[e] || typeof n.getColorSchemeSelector != "function") return {};
		let r = n.getColorSchemeSelector(e);
		return r === "&" ? t : ((r.includes("data-") || r.includes(".")) && (r = `*:where(${r.replace(/\s*&$/, "")}) &`), { [r]: t });
	}
	return n.palette.mode === e ? t : {};
}
//#endregion
//#region node_modules/@mui/system/createTheme/createTheme.mjs
function Ir(e = {}, ...t) {
	let { breakpoints: n = {}, palette: r = {}, spacing: i, shape: a = {}, ...o } = e, s = tn(n), c = Pr(i), l = qt({
		breakpoints: s,
		direction: "ltr",
		components: {},
		palette: {
			mode: "light",
			...r
		},
		spacing: c,
		shape: {
			...Nr,
			...a
		}
	}, o);
	return l = $t(l), l.applyStyles = Fr, l = t.reduce((e, t) => qt(e, t), l), l.unstable_sxConfig = {
		...lr,
		...o?.unstable_sxConfig
	}, l.unstable_sx = function(e) {
		return fr({
			sx: e,
			theme: this
		});
	}, l.internal_cache = {}, l;
}
//#endregion
//#region node_modules/@mui/system/useThemeWithoutDefault/useThemeWithoutDefault.mjs
function Lr(e) {
	return Object.keys(e).length === 0;
}
function Rr(e = null) {
	let t = _.useContext(yt);
	return !t || Lr(t) ? e : t;
}
//#endregion
//#region node_modules/@mui/system/useTheme/useTheme.mjs
var zr = Ir();
function Br(e = zr) {
	return Rr(e);
}
//#endregion
//#region node_modules/@mui/system/GlobalStyles/GlobalStyles.mjs
function Vr(e) {
	let t = Mr(e);
	return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function Hr({ styles: e, themeId: t, defaultTheme: n = {} }) {
	let r = Br(n), i = t && r[t] || r, a = typeof e == "function" ? e(i) : e;
	return i.modularCssLayers && (a = Array.isArray(a) ? a.map((e) => Vr(typeof e == "function" ? e(i) : e)) : Vr(a)), /* @__PURE__ */ (0, K.jsx)(Or, { styles: a });
}
//#endregion
//#region node_modules/@mui/utils/ClassNameGenerator/ClassNameGenerator.mjs
var Ur = (e) => e, Wr = (() => {
	let e = Ur;
	return {
		configure(t) {
			e = t;
		},
		generate(t) {
			return e(t);
		},
		reset() {
			e = Ur;
		}
	};
})();
//#endregion
//#region node_modules/@mui/system/createBox/createBox.mjs
function Gr(e = {}) {
	let { themeId: t, defaultTheme: n, defaultClassName: r = "MuiBox-root", generateClassName: i } = e, a = kr("div", { shouldForwardProp: (e) => e !== "theme" && e !== "sx" && e !== "as" })(fr);
	return /* @__PURE__ */ _.forwardRef(function(e, o) {
		let s = Br(n), { className: c, component: l = "div", ...u } = e;
		return /* @__PURE__ */ (0, K.jsx)(a, {
			as: l,
			ref: o,
			className: G(c, i ? i(r) : r),
			theme: t && s[t] || s,
			...u
		});
	});
}
//#endregion
//#region node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.mjs
var Kr = {
	active: "active",
	checked: "checked",
	completed: "completed",
	disabled: "disabled",
	error: "error",
	expanded: "expanded",
	focused: "focused",
	focusVisible: "focusVisible",
	open: "open",
	readOnly: "readOnly",
	required: "required",
	selected: "selected"
};
function q(e, t, n = "Mui") {
	let r = Kr[t];
	return r ? `${n}-${r}` : `${Wr.generate(e)}-${t}`;
}
//#endregion
//#region node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.mjs
function qr(e, t, n = "Mui") {
	let r = {};
	return t.forEach((t) => {
		r[t] = q(e, t, n);
	}), r;
}
//#endregion
//#region node_modules/@mui/system/preprocessStyles.mjs
function Jr(e) {
	let { variants: t, ...n } = e, r = {
		variants: t,
		style: Mr(n),
		isProcessed: !0
	};
	return r.style === n || t && t.forEach((e) => {
		typeof e.style != "function" && (e.style = Mr(e.style));
	}), r;
}
//#endregion
//#region node_modules/@mui/system/createStyled/createStyled.mjs
var Yr = Ir();
function Xr(e) {
	return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Zr(e, t) {
	return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function Qr(e) {
	return e ? (t, n) => n[e] : null;
}
function $r(e, t, n) {
	e.theme = Ht(e.theme) ? n : e.theme[t] || e.theme;
}
function ei(e, t, n) {
	let r = typeof t == "function" ? t(e) : t;
	if (Array.isArray(r)) return r.flatMap((t) => ei(e, t, n));
	if (Array.isArray(r?.variants)) {
		let t;
		if (r.isProcessed) t = n ? Zr(r.style, n) : r.style;
		else {
			let { variants: e, ...i } = r;
			t = n ? Zr(Mr(i), n) : i;
		}
		return ti(e, r.variants, [t], n);
	}
	return r?.isProcessed ? n ? Zr(Mr(r.style), n) : r.style : n ? Zr(Mr(r), n) : r;
}
function ti(e, t, n = [], r = void 0) {
	let i;
	variantLoop: for (let a = 0; a < t.length; a += 1) {
		let o = t[a];
		if (typeof o.props == "function") {
			if (i ??= {
				...e,
				...e.ownerState,
				ownerState: e.ownerState
			}, !o.props(i)) continue;
		} else for (let t in o.props) if (e[t] !== o.props[t] && e.ownerState?.[t] !== o.props[t]) continue variantLoop;
		typeof o.style == "function" ? (i ??= {
			...e,
			...e.ownerState,
			ownerState: e.ownerState
		}, n.push(r ? Zr(Mr(o.style(i)), r) : o.style(i))) : n.push(r ? Zr(Mr(o.style), r) : o.style);
	}
	return n;
}
function ni(e = {}) {
	let { themeId: t, defaultTheme: n = Yr, rootShouldForwardProp: r = Xr, slotShouldForwardProp: i = Xr } = e;
	function a(e) {
		$r(e, t, n);
	}
	return (e, t = {}) => {
		Ar(e, (e) => e.filter((e) => e !== fr));
		let { name: n, slot: o, skipVariantsResolver: s, skipSx: c, overridesResolver: l = Qr(ii(o)), ...u } = t, d = n && n.startsWith("Mui") || o ? "components" : "custom", f = s === void 0 ? o && o !== "Root" && o !== "root" || !1 : s, p = c || !1, m = Xr;
		o === "Root" || o === "root" ? m = r : o ? m = i : ri(e) && (m = void 0);
		let h = kr(e, {
			shouldForwardProp: m,
			label: void 0,
			...u
		}), g = (e) => {
			if (e.__emotion_real === e) return e;
			if (typeof e == "function") return function(t) {
				return ei(t, e, t.theme.modularCssLayers ? d : void 0);
			};
			if (Gt(e)) {
				let t = Jr(e);
				return function(e) {
					return t.variants ? ei(e, t, e.theme.modularCssLayers ? d : void 0) : e.theme.modularCssLayers ? Zr(t.style, d) : t.style;
				};
			}
			return e;
		}, _ = (...t) => {
			let r = [], i = t.map(g), o = [];
			if (r.push(a), n && l && o.push(function(e) {
				let t = e.theme.components?.[n]?.styleOverrides;
				if (!t) return null;
				let r = {};
				for (let n in t) r[n] = ei(e, t[n], e.theme.modularCssLayers ? "theme" : void 0);
				return l(e, r);
			}), n && !f && o.push(function(e) {
				let t = e.theme?.components?.[n]?.variants;
				return t ? ti(e, t, [], e.theme.modularCssLayers ? "theme" : void 0) : null;
			}), p || o.push(fr), Array.isArray(i[0])) {
				let e = i.shift(), t = Array(r.length).fill(""), n = Array(o.length).fill(""), a;
				a = [
					...t,
					...e,
					...n
				], a.raw = [
					...t,
					...e.raw,
					...n
				], r.unshift(a);
			}
			let s = h(...r, ...i, ...o);
			return e.muiName && (s.muiName = e.muiName), s;
		};
		return h.withConfig && (_.withConfig = h.withConfig), _;
	};
}
function ri(e) {
	return typeof e == "string" && e.charCodeAt(0) > 96;
}
function ii(e) {
	return e && e.charAt(0).toLowerCase() + e.slice(1);
}
//#endregion
//#region node_modules/@mui/system/styled/styled.mjs
var ai = ni();
//#endregion
//#region node_modules/@mui/utils/resolveProps/resolveProps.mjs
function oi(e, t, n = !1) {
	let r = { ...t };
	for (let i in e) if (Object.prototype.hasOwnProperty.call(e, i)) {
		let a = i;
		if (a === "components" || a === "slots") r[a] = {
			...e[a],
			...r[a]
		};
		else if (a === "componentsProps" || a === "slotProps") {
			let i = e[a], o = t[a];
			if (!o) r[a] = i || {};
			else if (!i) r[a] = o;
			else {
				r[a] = { ...o };
				for (let e in i) if (Object.prototype.hasOwnProperty.call(i, e)) {
					let t = e;
					r[a][t] = oi(i[t], o[t], n);
				}
			}
		} else a === "className" && n && t.className !== void 0 ? r.className = G(e?.className, t?.className) : a === "style" && n && t.style ? r.style = {
			...e?.style,
			...t?.style
		} : r[a] === void 0 && (r[a] = e[a]);
	}
	return r;
}
//#endregion
//#region node_modules/@mui/system/useThemeProps/getThemeProps.mjs
function si(e) {
	let { theme: t, name: n, props: r } = e;
	return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : oi(t.components[n].defaultProps, r);
}
//#endregion
//#region node_modules/@mui/system/useThemeProps/useThemeProps.mjs
function ci({ props: e, name: t, defaultTheme: n, themeId: r }) {
	let i = Br(n);
	return r && (i = i[r] || i), si({
		theme: i,
		name: t,
		props: e
	});
}
//#endregion
//#region node_modules/@mui/utils/useEnhancedEffect/useEnhancedEffect.mjs
var li = typeof window < "u" ? _.useLayoutEffect : _.useEffect;
//#endregion
//#region node_modules/@mui/utils/clamp/clamp.mjs
function ui(e, t = -(2 ** 53 - 1), n = 2 ** 53 - 1) {
	return Math.max(t, Math.min(e, n));
}
//#endregion
//#region node_modules/@mui/system/colorManipulator/colorManipulator.mjs
function di(e, t = 0, n = 1) {
	return ui(e, t, n);
}
function fi(e) {
	e = e.slice(1);
	let t = RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g"), n = e.match(t);
	return n && n[0].length === 1 && (n = n.map((e) => e + e)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((e, t) => t < 3 ? parseInt(e, 16) : Math.round(parseInt(e, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function pi(e) {
	if (e.type) return e;
	if (e.charAt(0) === "#") return pi(fi(e));
	let t = e.indexOf("("), n = e.substring(0, t);
	if (![
		"rgb",
		"rgba",
		"hsl",
		"hsla",
		"color"
	].includes(n)) throw Error(Bt(9, e));
	let r = e.substring(t + 1, e.length - 1), i;
	if (n === "color") {
		if (r = r.split(" "), i = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ![
			"srgb",
			"display-p3",
			"a98-rgb",
			"prophoto-rgb",
			"rec-2020"
		].includes(i)) throw Error(Bt(10, i));
	} else r = r.split(",");
	return r = r.map((e) => parseFloat(e)), {
		type: n,
		values: r,
		colorSpace: i
	};
}
var mi = (e) => {
	let t = pi(e);
	return t.values.slice(0, 3).map((e, n) => t.type.includes("hsl") && n !== 0 ? `${e}%` : e).join(" ");
}, hi = (e, t) => {
	try {
		return mi(e);
	} catch {
		return e;
	}
};
function gi(e) {
	let { type: t, colorSpace: n } = e, { values: r } = e;
	return t.includes("rgb") ? r = r.map((e, t) => t < 3 ? parseInt(e, 10) : e) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), r = t.includes("color") ? `${n} ${r.join(" ")}` : `${r.join(", ")}`, `${t}(${r})`;
}
function _i(e) {
	e = pi(e);
	let { values: t } = e, n = t[0], r = t[1] / 100, i = t[2] / 100, a = r * Math.min(i, 1 - i), o = (e, t = (e + n / 30) % 12) => i - a * Math.max(Math.min(t - 3, 9 - t, 1), -1), s = "rgb", c = [
		Math.round(o(0) * 255),
		Math.round(o(8) * 255),
		Math.round(o(4) * 255)
	];
	return e.type === "hsla" && (s += "a", c.push(t[3])), gi({
		type: s,
		values: c
	});
}
function vi(e) {
	e = pi(e);
	let t = e.type === "hsl" || e.type === "hsla" ? pi(_i(e)).values : e.values;
	return t = t.map((t) => (e.type !== "color" && (t /= 255), t <= .03928 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4)), Number((.2126 * t[0] + .7152 * t[1] + .0722 * t[2]).toFixed(3));
}
function yi(e, t) {
	let n = vi(e), r = vi(t);
	return (Math.max(n, r) + .05) / (Math.min(n, r) + .05);
}
function bi(e, t) {
	return e = pi(e), t = di(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, gi(e);
}
function xi(e, t, n) {
	try {
		return bi(e, t);
	} catch {
		return e;
	}
}
function Si(e, t) {
	if (e = pi(e), t = di(t), e.type.includes("hsl")) e.values[2] *= 1 - t;
	else if (e.type.includes("rgb") || e.type.includes("color")) for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
	return gi(e);
}
function Ci(e, t, n) {
	try {
		return Si(e, t);
	} catch {
		return e;
	}
}
function wi(e, t) {
	if (e = pi(e), t = di(t), e.type.includes("hsl")) e.values[2] += (100 - e.values[2]) * t;
	else if (e.type.includes("rgb")) for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
	else if (e.type.includes("color")) for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
	return gi(e);
}
function J(e, t, n) {
	try {
		return wi(e, t);
	} catch {
		return e;
	}
}
function Ti(e, t = .15) {
	return vi(e) > .5 ? Si(e, t) : wi(e, t);
}
function Ei(e, t, n) {
	try {
		return Ti(e, t);
	} catch {
		return e;
	}
}
//#endregion
//#region node_modules/@mui/private-theming/useTheme/ThemeContext.mjs
var Di = /* @__PURE__ */ _.createContext(null);
//#endregion
//#region node_modules/@mui/private-theming/useTheme/useTheme.mjs
function Oi() {
	return _.useContext(Di);
}
var ki = typeof Symbol == "function" && Symbol.for ? Symbol.for("mui.nested") : "__THEME_NESTED__";
//#endregion
//#region node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.mjs
function Ai(e, t) {
	return typeof t == "function" ? t(e) : {
		...e,
		...t
	};
}
function ji(e) {
	let { children: t, theme: n } = e, r = Oi(), i = _.useMemo(() => {
		let e = r === null ? { ...n } : Ai(r, n);
		return e != null && (e[ki] = r !== null), e;
	}, [n, r]);
	return /* @__PURE__ */ (0, K.jsx)(Di.Provider, {
		value: i,
		children: t
	});
}
//#endregion
//#region node_modules/@mui/system/RtlProvider/index.mjs
var Mi = /* @__PURE__ */ _.createContext();
function Ni({ value: e, ...t }) {
	return /* @__PURE__ */ (0, K.jsx)(Mi.Provider, {
		value: e ?? !0,
		...t
	});
}
var Pi = () => _.useContext(Mi) ?? !1, Fi = /* @__PURE__ */ _.createContext(void 0);
function Ii({ value: e, children: t }) {
	return /* @__PURE__ */ (0, K.jsx)(Fi.Provider, {
		value: e,
		children: t
	});
}
function Li(e) {
	let { theme: t, name: n, props: r } = e;
	if (!t || !t.components || !t.components[n]) return r;
	let i = t.components[n];
	return i.defaultProps ? oi(i.defaultProps, r, t.components.mergeClassNameAndStyle) : !i.styleOverrides && !i.variants ? oi(i, r, t.components.mergeClassNameAndStyle) : r;
}
function Ri({ props: e, name: t }) {
	return Li({
		props: e,
		name: t,
		theme: { components: _.useContext(Fi) }
	});
}
//#endregion
//#region node_modules/@mui/utils/useId/useId.mjs
var zi = 0;
function Bi(e) {
	let [t, n] = _.useState(e), r = e || t;
	return _.useEffect(() => {
		t ?? (zi += 1, n(`mui-${zi}`));
	}, [t]), r;
}
var Vi = { ..._ }.useId;
function Hi(e) {
	if (Vi !== void 0) {
		let t = Vi();
		return e ?? t;
	}
	return Bi(e);
}
//#endregion
//#region node_modules/@mui/system/ThemeProvider/useLayerOrder.mjs
function Ui(e) {
	let t = Rr(), n = Hi() || "", { modularCssLayers: r } = e, i = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
	return i = !r || t !== null ? "" : typeof r == "string" ? r.replace(/mui(?!\.)/g, i) : `@layer ${i};`, li(() => {
		let e = document.querySelector("head");
		if (!e) return;
		let t = e.firstChild;
		if (i) {
			if (t && t.hasAttribute?.("data-mui-layer-order") && t.getAttribute("data-mui-layer-order") === n) return;
			let r = document.createElement("style");
			r.setAttribute("data-mui-layer-order", n), r.textContent = i, e.prepend(r);
		} else e.querySelector(`style[data-mui-layer-order="${n}"]`)?.remove();
	}, [i, n]), i ? /* @__PURE__ */ (0, K.jsx)(Hr, { styles: i }) : null;
}
//#endregion
//#region node_modules/@mui/system/ThemeProvider/ThemeProvider.mjs
var Wi = {};
function Gi(e, t, n, r = !1) {
	return _.useMemo(() => {
		let i = e && t[e] || t;
		if (typeof n == "function") {
			let a = n(i), o = e ? {
				...t,
				[e]: a
			} : a;
			return r ? () => o : o;
		}
		return e ? {
			...t,
			[e]: n
		} : {
			...t,
			...n
		};
	}, [
		e,
		t,
		n,
		r
	]);
}
function Ki(e) {
	let { children: t, theme: n, themeId: r } = e, i = Rr(Wi), a = Oi() || Wi, o = Gi(r, i, n), s = Gi(r, a, n, !0), c = (r ? o[r] : o).direction === "rtl", l = Ui(o);
	return /* @__PURE__ */ (0, K.jsx)(ji, {
		theme: s,
		children: /* @__PURE__ */ (0, K.jsx)(yt.Provider, {
			value: o,
			children: /* @__PURE__ */ (0, K.jsx)(Ni, {
				value: c,
				children: /* @__PURE__ */ (0, K.jsxs)(Ii, {
					value: r ? o[r].components : o.components,
					children: [l, t]
				})
			})
		})
	});
}
//#endregion
//#region node_modules/@mui/system/memoTheme.mjs
var qi = { theme: void 0 };
function Ji(e) {
	let t, n;
	return function(r) {
		let i = t;
		return (i === void 0 || r.theme !== n) && (qi.theme = r.theme, i = Jr(e(qi)), t = i, n = r.theme), i;
	};
}
//#endregion
//#region node_modules/@mui/system/InitColorSchemeScript/InitColorSchemeScript.mjs
var Yi = "mode", Xi = "color-scheme", Zi = "data-color-scheme";
function Qi(e) {
	let { defaultMode: t = "system", defaultLightColorScheme: n = "light", defaultDarkColorScheme: r = "dark", modeStorageKey: i = Yi, colorSchemeStorageKey: a = Xi, attribute: o = Zi, colorSchemeNode: s = "document.documentElement", nonce: c } = e || {}, l = "", u = o;
	if (o === "class" && (u = ".%s"), o === "data" && (u = "[data-%s]"), u.startsWith(".")) {
		let e = u.substring(1);
		l += `${s}.classList.remove('${e}'.replace('%s', light), '${e}'.replace('%s', dark));
      ${s}.classList.add('${e}'.replace('%s', colorScheme));`;
	}
	let d = u.match(/\[([^[\]]+)\]/);
	if (d) {
		let [e, t] = d[1].split("=");
		t || (l += `${s}.removeAttribute('${e}'.replace('%s', light));
      ${s}.removeAttribute('${e}'.replace('%s', dark));`), l += `
      ${s}.setAttribute('${e}'.replace('%s', colorScheme), ${t ? `${t}.replace('%s', colorScheme)` : "\"\""});`;
	} else u !== ".%s" && (l += `${s}.setAttribute('${u}', colorScheme);`);
	return /* @__PURE__ */ (0, K.jsx)("script", {
		suppressHydrationWarning: !0,
		nonce: typeof window > "u" ? c : "",
		dangerouslySetInnerHTML: { __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${i}') || '${t}';
  const dark = localStorage.getItem('${a}-dark') || '${r}';
  const light = localStorage.getItem('${a}-light') || '${n}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${l}
  }
} catch(e){}})();` }
	}, "mui-color-scheme-init");
}
//#endregion
//#region node_modules/@mui/system/cssVars/localStorageManager.mjs
function $i() {}
var ea = ({ key: e, storageWindow: t }) => (!t && typeof window < "u" && (t = window), {
	get(n) {
		if (typeof window > "u") return;
		if (!t) return n;
		let r;
		try {
			r = t.localStorage.getItem(e);
		} catch {}
		return r || n;
	},
	set: (n) => {
		if (t) try {
			t.localStorage.setItem(e, n);
		} catch {}
	},
	subscribe: (n) => {
		if (!t) return $i;
		let r = (t) => {
			let r = t.newValue;
			t.key === e && n(r);
		};
		return t.addEventListener("storage", r), () => {
			t.removeEventListener("storage", r);
		};
	}
});
//#endregion
//#region node_modules/@mui/system/cssVars/useCurrentColorScheme.mjs
function ta() {}
function na(e) {
	if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system") return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function ra(e, t) {
	if (e.mode === "light" || e.mode === "system" && e.systemMode === "light") return t("light");
	if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark") return t("dark");
}
function ia(e) {
	return ra(e, (t) => {
		if (t === "light") return e.lightColorScheme;
		if (t === "dark") return e.darkColorScheme;
	});
}
function aa(e) {
	let { defaultMode: t = "light", defaultLightColorScheme: n, defaultDarkColorScheme: r, supportedColorSchemes: i = [], modeStorageKey: a = Yi, colorSchemeStorageKey: o = Xi, storageWindow: s = typeof window > "u" ? void 0 : window, storageManager: c = ea, noSsr: l = !1 } = e, u = i.join(","), d = i.length > 1, f = _.useMemo(() => c?.({
		key: a,
		storageWindow: s
	}), [
		c,
		a,
		s
	]), p = _.useMemo(() => c?.({
		key: `${o}-light`,
		storageWindow: s
	}), [
		c,
		o,
		s
	]), m = _.useMemo(() => c?.({
		key: `${o}-dark`,
		storageWindow: s
	}), [
		c,
		o,
		s
	]), [h, g] = _.useState(() => {
		let e = f?.get(t) || t, i = p?.get(n) || n, a = m?.get(r) || r;
		return {
			mode: e,
			systemMode: na(e),
			lightColorScheme: i,
			darkColorScheme: a
		};
	}), [v, y] = _.useState(l || !d);
	_.useEffect(() => {
		y(!0);
	}, []);
	let b = ia(h), x = _.useCallback((e) => {
		g((n) => {
			if (e === n.mode) return n;
			let r = e ?? t;
			return f?.set(r), {
				...n,
				mode: r,
				systemMode: na(r)
			};
		});
	}, [f, t]), S = _.useCallback((e) => {
		e ? typeof e == "string" ? e && !u.includes(e) ? console.error(`\`${e}\` does not exist in \`theme.colorSchemes\`.`) : g((t) => {
			let n = { ...t };
			return ra(t, (t) => {
				t === "light" && (p?.set(e), n.lightColorScheme = e), t === "dark" && (m?.set(e), n.darkColorScheme = e);
			}), n;
		}) : g((t) => {
			let i = { ...t }, a = e.light === null ? n : e.light, o = e.dark === null ? r : e.dark;
			return a && (u.includes(a) ? (i.lightColorScheme = a, p?.set(a)) : console.error(`\`${a}\` does not exist in \`theme.colorSchemes\`.`)), o && (u.includes(o) ? (i.darkColorScheme = o, m?.set(o)) : console.error(`\`${o}\` does not exist in \`theme.colorSchemes\`.`)), i;
		}) : g((e) => (p?.set(n), m?.set(r), {
			...e,
			lightColorScheme: n,
			darkColorScheme: r
		}));
	}, [
		u,
		p,
		m,
		n,
		r
	]), C = _.useCallback((e) => {
		h.mode === "system" && g((t) => {
			let n = e?.matches ? "dark" : "light";
			return t.systemMode === n ? t : {
				...t,
				systemMode: n
			};
		});
	}, [h.mode]), w = _.useRef(C);
	return w.current = C, _.useEffect(() => {
		if (typeof window.matchMedia != "function" || !d) return;
		let e = (...e) => w.current(...e), t = window.matchMedia("(prefers-color-scheme: dark)");
		return t.addListener(e), e(t), () => {
			t.removeListener(e);
		};
	}, [d]), _.useEffect(() => {
		if (d) {
			let e = f?.subscribe((e) => {
				(!e || [
					"light",
					"dark",
					"system"
				].includes(e)) && x(e || t);
			}) || ta, n = p?.subscribe((e) => {
				(!e || u.match(e)) && S({ light: e });
			}) || ta, r = m?.subscribe((e) => {
				(!e || u.match(e)) && S({ dark: e });
			}) || ta;
			return () => {
				e(), n(), r();
			};
		}
	}, [
		S,
		x,
		u,
		t,
		s,
		d,
		f,
		p,
		m
	]), {
		...h,
		mode: v ? h.mode : void 0,
		systemMode: v ? h.systemMode : void 0,
		colorScheme: v ? b : void 0,
		setMode: x,
		setColorScheme: S
	};
}
//#endregion
//#region node_modules/@mui/system/cssVars/createCssVarsProvider.mjs
var oa = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function sa(e) {
	let { themeId: t, theme: n = {}, modeStorageKey: r = Yi, colorSchemeStorageKey: i = Xi, disableTransitionOnChange: a = !1, defaultColorScheme: o, resolveTheme: s } = e, c = {
		allColorSchemes: [],
		colorScheme: void 0,
		darkColorScheme: void 0,
		lightColorScheme: void 0,
		mode: void 0,
		setColorScheme: () => {},
		setMode: () => {},
		systemMode: void 0
	}, l = /* @__PURE__ */ _.createContext(void 0), u = () => _.useContext(l) || c, d = {}, f = {};
	function p(e) {
		let { children: c, theme: u, modeStorageKey: p = r, colorSchemeStorageKey: m = i, disableTransitionOnChange: h = a, storageManager: g, storageWindow: v = typeof window > "u" ? void 0 : window, documentNode: y = typeof document > "u" ? void 0 : document, colorSchemeNode: b = typeof document > "u" ? void 0 : document.documentElement, disableNestedContext: x = !1, disableStyleSheetGeneration: S = !1, defaultMode: C = "system", forceThemeRerender: w = !1, noSsr: T } = e, E = _.useRef(!1), D = Oi(), O = _.useContext(l), k = !!O && !x, A = _.useMemo(() => u || (typeof n == "function" ? n() : n), [u]), j = A[t], M = j || A, { colorSchemes: N = d, components: ee = f, cssVarPrefix: te } = M, P = Object.keys(N).filter((e) => !!N[e]).join(","), F = _.useMemo(() => P.split(","), [P]), I = typeof o == "string" ? o : o.light, L = typeof o == "string" ? o : o.dark, { mode: ne, setMode: re, systemMode: R, lightColorScheme: z, darkColorScheme: ie, colorScheme: ae, setColorScheme: B } = aa({
			supportedColorSchemes: F,
			defaultLightColorScheme: I,
			defaultDarkColorScheme: L,
			modeStorageKey: p,
			colorSchemeStorageKey: m,
			defaultMode: N[I] && N[L] ? C : N[M.defaultColorScheme]?.palette?.mode || M.palette?.mode,
			storageManager: g,
			storageWindow: v,
			noSsr: T
		}), oe = ne, se = ae;
		k && (oe = O.mode, se = O.colorScheme);
		let V = se || M.defaultColorScheme;
		M.vars && !w && (V = M.defaultColorScheme);
		let H = _.useMemo(() => {
			let e = M.generateThemeVars?.() || M.vars, t = {
				...M,
				components: ee,
				colorSchemes: N,
				cssVarPrefix: te,
				vars: e
			};
			if (typeof t.generateSpacing == "function" && (t.spacing = t.generateSpacing()), V) {
				let e = N[V];
				e && typeof e == "object" && Object.keys(e).forEach((n) => {
					e[n] && typeof e[n] == "object" ? t[n] = {
						...t[n],
						...e[n]
					} : t[n] = e[n];
				});
			}
			return s ? s(t) : t;
		}, [
			M,
			V,
			ee,
			N,
			te
		]), ce = M.colorSchemeSelector;
		li(() => {
			if (se && b && ce && ce !== "media") {
				let e = ce, t = ce;
				if (e === "class" && (t = ".%s"), e === "data" && (t = "[data-%s]"), e?.startsWith("data-") && !e.includes("%s") && (t = `[${e}="%s"]`), t.startsWith(".")) b.classList.remove(...F.map((e) => t.substring(1).replace("%s", e))), b.classList.add(t.substring(1).replace("%s", se));
				else {
					let e = t.replace("%s", se).match(/\[([^\]]+)\]/);
					if (e) {
						let [t, n] = e[1].split("=");
						n || F.forEach((e) => {
							b.removeAttribute(t.replace(se, e));
						}), b.setAttribute(t, n ? n.replace(/"|'/g, "") : "");
					} else b.setAttribute(t, se);
				}
			}
		}, [
			se,
			ce,
			b,
			F
		]), _.useEffect(() => {
			let e;
			if (h && E.current && y) {
				let t = y.createElement("style");
				t.appendChild(y.createTextNode(oa)), y.head.appendChild(t), window.getComputedStyle(y.body), e = setTimeout(() => {
					y.head.removeChild(t);
				}, 1);
			}
			return () => {
				clearTimeout(e);
			};
		}, [
			se,
			h,
			y
		]), _.useEffect(() => (E.current = !0, () => {
			E.current = !1;
		}), []);
		let le = _.useMemo(() => ({
			allColorSchemes: F,
			colorScheme: se,
			darkColorScheme: ie,
			lightColorScheme: z,
			mode: oe,
			setColorScheme: B,
			setMode: re,
			systemMode: R
		}), [
			F,
			se,
			ie,
			z,
			oe,
			B,
			re,
			R,
			H.colorSchemeSelector
		]), ue = !0;
		(S || M.cssVariables === !1 || k && D?.cssVarPrefix === te) && (ue = !1);
		let de = /* @__PURE__ */ (0, K.jsxs)(_.Fragment, { children: [/* @__PURE__ */ (0, K.jsx)(Ki, {
			themeId: j ? t : void 0,
			theme: H,
			children: c
		}), ue && /* @__PURE__ */ (0, K.jsx)(Or, { styles: H.generateStyleSheets?.() || [] })] });
		return k ? de : /* @__PURE__ */ (0, K.jsx)(l.Provider, {
			value: le,
			children: de
		});
	}
	let m = typeof o == "string" ? o : o.light, h = typeof o == "string" ? o : o.dark;
	return {
		CssVarsProvider: p,
		useColorScheme: u,
		getInitColorSchemeScript: (e) => Qi({
			colorSchemeStorageKey: i,
			defaultLightColorScheme: m,
			defaultDarkColorScheme: h,
			modeStorageKey: r,
			...e
		})
	};
}
//#endregion
//#region node_modules/@mui/system/cssVars/createGetCssVar.mjs
function ca(e = "") {
	function t(...n) {
		if (!n.length) return "";
		let r = n[0];
		return typeof r == "string" && !r.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${r}${t(...n.slice(1))})` : `, ${r}`;
	}
	return (n, ...r) => `var(--${e ? `${e}-` : ""}${n}${t(...r)})`;
}
//#endregion
//#region node_modules/@mui/system/cssVars/cssVarsParser.mjs
var la = (e, t, n, r = []) => {
	let i = e;
	t.forEach((e, a) => {
		a === t.length - 1 ? Array.isArray(i) ? i[Number(e)] = n : i && typeof i == "object" && (i[e] = n) : i && typeof i == "object" && (i[e] || (i[e] = r.includes(e) ? [] : {}), i = i[e]);
	});
}, ua = (e, t, n) => {
	function r(e, i = [], a = []) {
		Object.entries(e).forEach(([e, o]) => {
			(!n || n && !n([...i, e])) && o != null && (typeof o == "object" && Object.keys(o).length > 0 ? r(o, [...i, e], Array.isArray(o) ? [...a, e] : a) : t([...i, e], o, a));
		});
	}
	r(e);
}, da = (e, t) => typeof t == "number" ? [
	"lineHeight",
	"fontWeight",
	"opacity",
	"zIndex"
].some((t) => e.includes(t)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function fa(e, t) {
	let { prefix: n, shouldSkipGeneratingVar: r } = t || {}, i = {}, a = {}, o = {};
	return ua(e, (e, t, s) => {
		if ((typeof t == "string" || typeof t == "number") && (!r || !r(e, t))) {
			let r = `--${n ? `${n}-` : ""}${e.join("-")}`, c = da(e, t);
			Object.assign(i, { [r]: c }), la(a, e, `var(${r})`, s), la(o, e, `var(${r}, ${c})`, s);
		}
	}, (e) => e[0] === "vars"), {
		css: i,
		vars: a,
		varsWithDefaults: o
	};
}
//#endregion
//#region node_modules/@mui/system/cssVars/prepareCssVars.mjs
function pa(e, t = {}) {
	let { getSelector: n = _, disableCssColorScheme: r, colorSchemeSelector: i, enableContrastVars: a } = t, { colorSchemes: o = {}, components: s, defaultColorScheme: c = "light", ...l } = e, { vars: u, css: d, varsWithDefaults: f } = fa(l, t), p = f, m = {}, { [c]: h, ...g } = o;
	if (Object.entries(g || {}).forEach(([e, n]) => {
		let { vars: r, css: i, varsWithDefaults: a } = fa(n, t);
		p = qt(p, a), m[e] = {
			css: i,
			vars: r
		};
	}), h) {
		let { css: e, vars: n, varsWithDefaults: r } = fa(h, t);
		p = qt(p, r), m[c] = {
			css: e,
			vars: n
		};
	}
	function _(t, n) {
		let r = i;
		if (i === "class" && (r = ".%s"), i === "data" && (r = "[data-%s]"), i?.startsWith("data-") && !i.includes("%s") && (r = `[${i}="%s"]`), t) {
			if (r === "media") return e.defaultColorScheme === t ? ":root" : { [`@media (prefers-color-scheme: ${o[t]?.palette?.mode || t})`]: { ":root": n } };
			if (r) return e.defaultColorScheme === t ? `:root, ${r.replace("%s", String(t))}` : r.replace("%s", String(t));
		}
		return ":root";
	}
	return {
		vars: p,
		generateThemeVars: () => {
			let e = { ...u };
			return Object.entries(m).forEach(([, { vars: t }]) => {
				e = qt(e, t);
			}), e;
		},
		generateStyleSheets: () => {
			let t = [], i = e.defaultColorScheme || "light";
			function s(e, n) {
				Object.keys(n).length && t.push(typeof e == "string" ? { [e]: { ...n } } : e);
			}
			s(n(void 0, { ...d }), d);
			let { [i]: c, ...l } = m;
			if (c) {
				let { css: e } = c, t = o[i]?.palette?.mode, a = !r && t ? {
					colorScheme: t,
					...e
				} : { ...e };
				s(n(i, { ...a }), a);
			}
			return Object.entries(l).forEach(([e, { css: t }]) => {
				let i = o[e]?.palette?.mode, a = !r && i ? {
					colorScheme: i,
					...t
				} : { ...t };
				s(n(e, { ...a }), a);
			}), a && t.push({ ":root": {
				"--__l-threshold": "0.7",
				"--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
				"--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
			} }), t;
		}
	};
}
//#endregion
//#region node_modules/@mui/system/cssVars/getColorSchemeSelector.mjs
function ma(e) {
	return function(t) {
		return e === "media" ? `@media (prefers-color-scheme: ${t})` : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${t}"] &` : e === "class" ? `.${t} &` : e === "data" ? `[data-${t}] &` : `${e.replace("%s", t)} &` : "&";
	};
}
//#endregion
//#region node_modules/@mui/utils/isMuiElement/isMuiElement.mjs
function ha(e, t) {
	return /* @__PURE__ */ _.isValidElement(e) && t.indexOf(e.type.muiName ?? e.type?._payload?.value?.muiName) !== -1;
}
//#endregion
//#region node_modules/@mui/system/Grid/traverseBreakpoints.mjs
var ga = (e, t) => e.filter((e) => t.includes(e)), _a = (e, t, n) => {
	let r = e.keys[0];
	Array.isArray(t) ? t.forEach((t, r) => {
		n((t, n) => {
			r <= e.keys.length - 1 && (r === 0 ? Object.assign(t, n) : t[e.up(e.keys[r])] = n);
		}, t);
	}) : t && typeof t == "object" ? (Object.keys(t).length > e.keys.length ? e.keys : ga(e.keys, Object.keys(t))).forEach((i) => {
		if (e.keys.includes(i)) {
			let a = t[i];
			a !== void 0 && n((t, n) => {
				r === i ? Object.assign(t, n) : t[e.up(i)] = n;
			}, a);
		}
	}) : (typeof t == "number" || typeof t == "string") && n((e, t) => {
		Object.assign(e, t);
	}, t);
};
//#endregion
//#region node_modules/@mui/system/Grid/gridGenerator.mjs
function va(e) {
	return `--Grid-${e}Spacing`;
}
function ya(e) {
	return `--Grid-parent-${e}Spacing`;
}
var ba = "--Grid-columns", xa = "--Grid-parent-columns", Sa = ({ theme: e, ownerState: t }) => {
	let n = {};
	return _a(e.breakpoints, t.size, (e, t) => {
		let r = {};
		t === "grow" && (r = {
			flexBasis: 0,
			flexGrow: 1,
			maxWidth: "100%"
		}), t === "auto" && (r = {
			flexBasis: "auto",
			flexGrow: 0,
			flexShrink: 0,
			maxWidth: "none",
			width: "auto"
		}), typeof t == "number" && (r = {
			flexGrow: 0,
			flexBasis: "auto",
			width: `calc(100% * ${t} / var(${xa}) - (var(${xa}) - ${t}) * (var(${ya("column")}) / var(${xa})))`
		}), e(n, r);
	}), n;
}, Ca = ({ theme: e, ownerState: t }) => {
	let n = {};
	return _a(e.breakpoints, t.offset, (e, t) => {
		let r = {};
		t === "auto" && (r = { marginLeft: "auto" }), typeof t == "number" && (r = { marginLeft: t === 0 ? "0px" : `calc(100% * ${t} / var(${xa}) + var(${ya("column")}) * ${t} / var(${xa}))` }), e(n, r);
	}), n;
}, wa = ({ theme: e, ownerState: t }) => {
	if (!t.container) return {};
	let n = { [ba]: 12 };
	return _a(e.breakpoints, t.columns, (e, t) => {
		let r = t ?? 12;
		e(n, {
			[ba]: r,
			"> *": { [xa]: r }
		});
	}), n;
}, Ta = ({ theme: e, ownerState: t }) => {
	if (!t.container) return {};
	let n = {};
	return _a(e.breakpoints, t.rowSpacing, (t, r) => {
		let i = typeof r == "string" ? r : e.spacing?.(r);
		t(n, {
			[va("row")]: i,
			"> *": { [ya("row")]: i }
		});
	}), n;
}, Ea = ({ theme: e, ownerState: t }) => {
	if (!t.container) return {};
	let n = {};
	return _a(e.breakpoints, t.columnSpacing, (t, r) => {
		let i = typeof r == "string" ? r : e.spacing?.(r);
		t(n, {
			[va("column")]: i,
			"> *": { [ya("column")]: i }
		});
	}), n;
}, Da = ({ theme: e, ownerState: t }) => {
	if (!t.container) return {};
	let n = {};
	return _a(e.breakpoints, t.direction, (e, t) => {
		e(n, { flexDirection: t });
	}), n;
}, Oa = ({ ownerState: e }) => ({
	minWidth: 0,
	boxSizing: "border-box",
	...e.container && {
		display: "flex",
		flexWrap: "wrap",
		...e.wrap && e.wrap !== "wrap" && { flexWrap: e.wrap },
		gap: `var(${va("row")}) var(${va("column")})`
	}
}), ka = (e) => {
	let t = [];
	return Object.entries(e).forEach(([e, n]) => {
		n !== !1 && n !== void 0 && t.push(`grid-${e}-${String(n)}`);
	}), t;
}, Aa = (e, t = "xs") => {
	function n(e) {
		return e === void 0 ? !1 : typeof e == "string" && !Number.isNaN(Number(e)) || typeof e == "number" && e > 0;
	}
	if (n(e)) return [`spacing-${t}-${String(e)}`];
	if (typeof e == "object" && !Array.isArray(e)) {
		let t = [];
		return Object.entries(e).forEach(([e, r]) => {
			n(r) && t.push(`spacing-${e}-${String(r)}`);
		}), t;
	}
	return [];
}, ja = (e) => e === void 0 ? [] : typeof e == "object" ? Object.entries(e).map(([e, t]) => `direction-${e}-${t}`) : [`direction-xs-${String(e)}`], Ma = Ir(), Na = ai("div", {
	name: "MuiGrid",
	slot: "Root"
});
function Pa(e) {
	return ci({
		props: e,
		name: "MuiGrid",
		defaultTheme: Ma
	});
}
function Fa(e = {}) {
	let { createStyledComponent: t = Na, useThemeProps: n = Pa, useTheme: r = Br, componentName: i = "MuiGrid" } = e, a = (e, t) => {
		let { container: n, direction: r, spacing: a, wrap: o, size: s } = e;
		return At({ root: [
			"root",
			n && "container",
			o !== "wrap" && `wrap-xs-${String(o)}`,
			...ja(r),
			...ka(s),
			...n ? Aa(a, t.breakpoints.keys[0]) : []
		] }, (e) => q(i, e), {});
	};
	function o(e, t, n = () => !0) {
		let r = {};
		return e === null || (Array.isArray(e) ? e.forEach((e, i) => {
			e !== null && n(e) && t.keys[i] && (r[t.keys[i]] = e);
		}) : typeof e == "object" ? Object.keys(e).forEach((t) => {
			let i = e[t];
			i != null && n(i) && (r[t] = i);
		}) : r[t.keys[0]] = e), r;
	}
	let s = t(wa, Ea, Ta, Sa, Da, Oa, Ca), c = /* @__PURE__ */ _.forwardRef(function(e, t) {
		let i = r(), c = n(e), { className: l, children: u, columns: d = 12, container: f = !1, component: p = "div", direction: m = "row", wrap: h = "wrap", size: g = {}, offset: v = {}, spacing: y = 0, rowSpacing: b = y, columnSpacing: x = y, unstable_level: S = 0, ...C } = c, w = o(g, i.breakpoints, (e) => e !== !1), T = o(v, i.breakpoints), E = e.columns ?? (S ? void 0 : d), D = e.spacing ?? (S ? void 0 : y), O = e.rowSpacing ?? e.spacing ?? (S ? void 0 : b), k = e.columnSpacing ?? e.spacing ?? (S ? void 0 : x), A = {
			...c,
			level: S,
			columns: E,
			container: f,
			direction: m,
			wrap: h,
			spacing: D,
			rowSpacing: O,
			columnSpacing: k,
			size: w,
			offset: T
		};
		return /* @__PURE__ */ (0, K.jsx)(s, {
			ref: t,
			as: p,
			ownerState: A,
			className: G(a(A, i).root, l),
			...C,
			children: _.Children.map(u, (e) => /* @__PURE__ */ _.isValidElement(e) && ha(e, ["Grid"]) && f && e.props.container ? /* @__PURE__ */ _.cloneElement(e, { unstable_level: e.props?.unstable_level ?? S + 1 }) : e)
		});
	});
	return c.muiName = "Grid", c;
}
//#endregion
//#region node_modules/@mui/system/Stack/createStack.mjs
var Ia = Ir(), La = ai("div", {
	name: "MuiStack",
	slot: "Root"
});
function Ra(e) {
	return ci({
		props: e,
		name: "MuiStack",
		defaultTheme: Ia
	});
}
function za(e, t) {
	let n = _.Children.toArray(e).filter(Boolean);
	return n.reduce((e, r, i) => (e.push(r), i < n.length - 1 && e.push(/* @__PURE__ */ _.cloneElement(t, { key: `separator-${i}` })), e), []);
}
var Ba = (e) => ({
	row: "Left",
	"row-reverse": "Right",
	column: "Top",
	"column-reverse": "Bottom"
})[e], Va = ({ ownerState: e, theme: t }) => {
	let n = {
		display: "flex",
		flexDirection: "column",
		...sn({ theme: t }, mn({
			values: e.direction,
			breakpoints: t.breakpoints.values
		}), (e) => ({ flexDirection: e }))
	};
	if (e.spacing) {
		let r = kn(t), i = Object.keys(t.breakpoints.values).reduce((t, n) => ((typeof e.spacing == "object" && e.spacing[n] != null || typeof e.direction == "object" && e.direction[n] != null) && (t[n] = !0), t), {}), a = mn({
			values: e.direction,
			base: i
		}), o = mn({
			values: e.spacing,
			base: i
		});
		typeof a == "object" && Object.keys(a).forEach((e, t, n) => {
			a[e] || (a[e] = t > 0 ? a[n[t - 1]] : "column");
		}), n = qt(n, sn({ theme: t }, o, (t, n) => e.useFlexGap ? { gap: An(r, t) } : {
			"& > :not(style):not(style)": { margin: 0 },
			"& > :not(style) ~ :not(style)": { [`margin${Ba(n ? a[n] : e.direction)}`]: An(r, t) }
		}));
	}
	return n = fn(t.breakpoints, n), n;
};
function Ha(e = {}) {
	let { createStyledComponent: t = La, useThemeProps: n = Ra, componentName: r = "MuiStack" } = e, i = () => At({ root: ["root"] }, (e) => q(r, e), {}), a = t(Va);
	return /* @__PURE__ */ _.forwardRef(function(e, t) {
		let { component: r = "div", direction: o = "column", spacing: s = 0, divider: c, children: l, className: u, useFlexGap: d = !1, ...f } = n(e);
		return /* @__PURE__ */ (0, K.jsx)(a, {
			as: r,
			ownerState: {
				direction: o,
				spacing: s,
				useFlexGap: d
			},
			ref: t,
			className: G(i().root, u),
			...f,
			children: c ? za(l, c) : l
		});
	});
}
//#endregion
//#region node_modules/@mui/material/colors/common.mjs
var Ua = {
	black: "#000",
	white: "#fff"
}, Wa = {
	50: "#fafafa",
	100: "#f5f5f5",
	200: "#eeeeee",
	300: "#e0e0e0",
	400: "#bdbdbd",
	500: "#9e9e9e",
	600: "#757575",
	700: "#616161",
	800: "#424242",
	900: "#212121",
	A100: "#f5f5f5",
	A200: "#eeeeee",
	A400: "#bdbdbd",
	A700: "#616161"
}, Ga = {
	50: "#f3e5f5",
	100: "#e1bee7",
	200: "#ce93d8",
	300: "#ba68c8",
	400: "#ab47bc",
	500: "#9c27b0",
	600: "#8e24aa",
	700: "#7b1fa2",
	800: "#6a1b9a",
	900: "#4a148c",
	A100: "#ea80fc",
	A200: "#e040fb",
	A400: "#d500f9",
	A700: "#aa00ff"
}, Ka = {
	50: "#ffebee",
	100: "#ffcdd2",
	200: "#ef9a9a",
	300: "#e57373",
	400: "#ef5350",
	500: "#f44336",
	600: "#e53935",
	700: "#d32f2f",
	800: "#c62828",
	900: "#b71c1c",
	A100: "#ff8a80",
	A200: "#ff5252",
	A400: "#ff1744",
	A700: "#d50000"
}, qa = {
	50: "#fff3e0",
	100: "#ffe0b2",
	200: "#ffcc80",
	300: "#ffb74d",
	400: "#ffa726",
	500: "#ff9800",
	600: "#fb8c00",
	700: "#f57c00",
	800: "#ef6c00",
	900: "#e65100",
	A100: "#ffd180",
	A200: "#ffab40",
	A400: "#ff9100",
	A700: "#ff6d00"
}, Ja = {
	50: "#e3f2fd",
	100: "#bbdefb",
	200: "#90caf9",
	300: "#64b5f6",
	400: "#42a5f5",
	500: "#2196f3",
	600: "#1e88e5",
	700: "#1976d2",
	800: "#1565c0",
	900: "#0d47a1",
	A100: "#82b1ff",
	A200: "#448aff",
	A400: "#2979ff",
	A700: "#2962ff"
}, Ya = {
	50: "#e1f5fe",
	100: "#b3e5fc",
	200: "#81d4fa",
	300: "#4fc3f7",
	400: "#29b6f6",
	500: "#03a9f4",
	600: "#039be5",
	700: "#0288d1",
	800: "#0277bd",
	900: "#01579b",
	A100: "#80d8ff",
	A200: "#40c4ff",
	A400: "#00b0ff",
	A700: "#0091ea"
}, Xa = {
	50: "#e8f5e9",
	100: "#c8e6c9",
	200: "#a5d6a7",
	300: "#81c784",
	400: "#66bb6a",
	500: "#4caf50",
	600: "#43a047",
	700: "#388e3c",
	800: "#2e7d32",
	900: "#1b5e20",
	A100: "#b9f6ca",
	A200: "#69f0ae",
	A400: "#00e676",
	A700: "#00c853"
};
//#endregion
//#region node_modules/@mui/material/styles/createPalette.mjs
function Za() {
	return {
		text: {
			primary: "rgba(0, 0, 0, 0.87)",
			secondary: "rgba(0, 0, 0, 0.6)",
			disabled: "rgba(0, 0, 0, 0.38)"
		},
		divider: "rgba(0, 0, 0, 0.12)",
		background: {
			paper: Ua.white,
			default: Ua.white
		},
		action: {
			active: "rgba(0, 0, 0, 0.54)",
			hover: "rgba(0, 0, 0, 0.04)",
			hoverOpacity: .04,
			selected: "rgba(0, 0, 0, 0.08)",
			selectedOpacity: .08,
			disabled: "rgba(0, 0, 0, 0.26)",
			disabledBackground: "rgba(0, 0, 0, 0.12)",
			disabledOpacity: .38,
			focus: "rgba(0, 0, 0, 0.12)",
			focusOpacity: .12,
			activatedOpacity: .12
		}
	};
}
var Qa = Za();
function $a() {
	return {
		text: {
			primary: Ua.white,
			secondary: "rgba(255, 255, 255, 0.7)",
			disabled: "rgba(255, 255, 255, 0.5)",
			icon: "rgba(255, 255, 255, 0.5)"
		},
		divider: "rgba(255, 255, 255, 0.12)",
		background: {
			paper: "#121212",
			default: "#121212"
		},
		action: {
			active: Ua.white,
			hover: "rgba(255, 255, 255, 0.08)",
			hoverOpacity: .08,
			selected: "rgba(255, 255, 255, 0.16)",
			selectedOpacity: .16,
			disabled: "rgba(255, 255, 255, 0.3)",
			disabledBackground: "rgba(255, 255, 255, 0.12)",
			disabledOpacity: .38,
			focus: "rgba(255, 255, 255, 0.12)",
			focusOpacity: .12,
			activatedOpacity: .24
		}
	};
}
var eo = $a();
function to(e, t, n, r) {
	let i = r.light || r, a = r.dark || r * 1.5;
	e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = wi(e.main, i) : t === "dark" && (e.dark = Si(e.main, a)));
}
function no(e, t, n, r, i) {
	let a = i.light || i, o = i.dark || i * 1.5;
	t[n] || (t.hasOwnProperty(r) ? t[n] = t[r] : n === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(a * 100).toFixed(0)}%)` : n === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(o * 100).toFixed(0)}%)`));
}
function ro(e = "light") {
	return e === "dark" ? {
		main: Ja[200],
		light: Ja[50],
		dark: Ja[400]
	} : {
		main: Ja[700],
		light: Ja[400],
		dark: Ja[800]
	};
}
function io(e = "light") {
	return e === "dark" ? {
		main: Ga[200],
		light: Ga[50],
		dark: Ga[400]
	} : {
		main: Ga[500],
		light: Ga[300],
		dark: Ga[700]
	};
}
function ao(e = "light") {
	return e === "dark" ? {
		main: Ka[500],
		light: Ka[300],
		dark: Ka[700]
	} : {
		main: Ka[700],
		light: Ka[400],
		dark: Ka[800]
	};
}
function oo(e = "light") {
	return e === "dark" ? {
		main: Ya[400],
		light: Ya[300],
		dark: Ya[700]
	} : {
		main: Ya[700],
		light: Ya[500],
		dark: Ya[900]
	};
}
function so(e = "light") {
	return e === "dark" ? {
		main: Xa[400],
		light: Xa[300],
		dark: Xa[700]
	} : {
		main: Xa[800],
		light: Xa[500],
		dark: Xa[900]
	};
}
function co(e = "light") {
	return e === "dark" ? {
		main: qa[400],
		light: qa[300],
		dark: qa[700]
	} : {
		main: "#ed6c02",
		light: qa[500],
		dark: qa[900]
	};
}
function lo(e) {
	return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function uo(e) {
	let { mode: t = "light", contrastThreshold: n = 3, tonalOffset: r = .2, colorSpace: i, ...a } = e, o = e.primary || ro(t), s = e.secondary || io(t), c = e.error || ao(t), l = e.info || oo(t), u = e.success || so(t), d = e.warning || co(t);
	function f(e) {
		return i ? lo(e) : yi(e, eo.text.primary) >= n ? eo.text.primary : Qa.text.primary;
	}
	let p = ({ color: e, name: t, mainShade: n = 500, lightShade: a = 300, darkShade: o = 700 }) => {
		if (e = { ...e }, !e.main && e[n] && (e.main = e[n]), !e.hasOwnProperty("main")) throw Error(Bt(11, t ? ` (${t})` : "", n));
		if (typeof e.main != "string") throw Error(Bt(12, t ? ` (${t})` : "", JSON.stringify(e.main)));
		return i ? (no(i, e, "light", a, r), no(i, e, "dark", o, r)) : (to(e, "light", a, r), to(e, "dark", o, r)), e.contrastText ||= f(e.main), e;
	}, m;
	return t === "light" ? m = Za() : t === "dark" && (m = $a()), qt({
		common: { ...Ua },
		mode: t,
		primary: p({
			color: o,
			name: "primary"
		}),
		secondary: p({
			color: s,
			name: "secondary",
			mainShade: "A400",
			lightShade: "A200",
			darkShade: "A700"
		}),
		error: p({
			color: c,
			name: "error"
		}),
		warning: p({
			color: d,
			name: "warning"
		}),
		info: p({
			color: l,
			name: "info"
		}),
		success: p({
			color: u,
			name: "success"
		}),
		grey: Wa,
		contrastThreshold: n,
		getContrastText: f,
		augmentColor: p,
		tonalOffset: r,
		...m
	}, a);
}
//#endregion
//#region node_modules/@mui/system/cssVars/prepareTypographyVars.mjs
function fo(e) {
	let t = {};
	return Object.entries(e).forEach((e) => {
		let [n, r] = e;
		typeof r == "object" && (t[n] = `${r.fontStyle ? `${r.fontStyle} ` : ""}${r.fontVariant ? `${r.fontVariant} ` : ""}${r.fontWeight ? `${r.fontWeight} ` : ""}${r.fontStretch ? `${r.fontStretch} ` : ""}${r.fontSize || ""}${r.lineHeight ? `/${r.lineHeight} ` : ""}${r.fontFamily || ""}`);
	}), t;
}
//#endregion
//#region node_modules/@mui/material/styles/createMixins.mjs
function po(e, t) {
	return {
		toolbar: {
			minHeight: 56,
			[e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
			[e.up("sm")]: { minHeight: 64 }
		},
		...t
	};
}
//#endregion
//#region node_modules/@mui/material/styles/createTypography.mjs
function mo(e) {
	return Math.round(e * 1e5) / 1e5;
}
var ho = { textTransform: "uppercase" }, go = "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif";
function _o(e, t) {
	let { fontFamily: n = go, fontSize: r = 14, fontWeightLight: i = 300, fontWeightRegular: a = 400, fontWeightMedium: o = 500, fontWeightBold: s = 700, htmlFontSize: c = 16, allVariants: l, pxToRem: u, ...d } = typeof t == "function" ? t(e) : t, f = r / 14, p = u || ((e) => `${e / c * f}rem`), m = (e, t, r, i, a) => ({
		fontFamily: n,
		fontWeight: e,
		fontSize: p(t),
		lineHeight: r,
		...n === go ? { letterSpacing: `${mo(i / t)}em` } : {},
		...a,
		...l
	});
	return qt({
		htmlFontSize: c,
		pxToRem: p,
		fontFamily: n,
		fontSize: r,
		fontWeightLight: i,
		fontWeightRegular: a,
		fontWeightMedium: o,
		fontWeightBold: s,
		h1: m(i, 96, 1.167, -1.5),
		h2: m(i, 60, 1.2, -.5),
		h3: m(a, 48, 1.167, 0),
		h4: m(a, 34, 1.235, .25),
		h5: m(a, 24, 1.334, 0),
		h6: m(o, 20, 1.6, .15),
		subtitle1: m(a, 16, 1.75, .15),
		subtitle2: m(o, 14, 1.57, .1),
		body1: m(a, 16, 1.5, .15),
		body2: m(a, 14, 1.43, .15),
		button: m(o, 14, 1.75, .4, ho),
		caption: m(a, 12, 1.66, .4),
		overline: m(a, 12, 2.66, 1, ho),
		inherit: {
			fontFamily: "inherit",
			fontWeight: "inherit",
			fontSize: "inherit",
			lineHeight: "inherit",
			letterSpacing: "inherit"
		}
	}, d, { clone: !1 });
}
//#endregion
//#region node_modules/@mui/material/styles/shadows.mjs
var vo = .2, yo = .14, bo = .12;
function xo(...e) {
	return [
		`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${vo})`,
		`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${yo})`,
		`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${bo})`
	].join(",");
}
var So = [
	"none",
	xo(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
	xo(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
	xo(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
	xo(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
	xo(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
	xo(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
	xo(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
	xo(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
	xo(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
	xo(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
	xo(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
	xo(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
	xo(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
	xo(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
	xo(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
	xo(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
	xo(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
	xo(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
	xo(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
	xo(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
	xo(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
	xo(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
	xo(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
	xo(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)
], Co = {
	easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
	easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
	easeIn: "cubic-bezier(0.4, 0, 1, 1)",
	sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, wo = {
	shortest: 150,
	shorter: 200,
	short: 250,
	standard: 300,
	complex: 375,
	enteringScreen: 225,
	leavingScreen: 195
};
function To(e) {
	return `${Math.round(e)}ms`;
}
function Eo(e) {
	if (!e) return 0;
	let t = e / 36;
	return Math.min(Math.round((4 + 15 * t ** .25 + t / 5) * 10), 3e3);
}
function Do(e) {
	let t = {
		...Co,
		...e.easing
	}, n = {
		...wo,
		...e.duration
	};
	return {
		getAutoHeightDuration: Eo,
		create: (e = ["all"], r = {}) => {
			let { duration: i = n.standard, easing: a = t.easeInOut, delay: o = 0, ...s } = r;
			return (Array.isArray(e) ? e : [e]).map((e) => `${e} ${typeof i == "string" ? i : To(i)} ${a} ${typeof o == "string" ? o : To(o)}`).join(",");
		},
		...e,
		easing: t,
		duration: n
	};
}
//#endregion
//#region node_modules/@mui/material/styles/zIndex.mjs
var Oo = {
	mobileStepper: 1e3,
	fab: 1050,
	speedDial: 1050,
	appBar: 1100,
	drawer: 1200,
	modal: 1300,
	snackbar: 1400,
	tooltip: 1500
};
//#endregion
//#region node_modules/@mui/material/styles/stringifyTheme.mjs
function ko(e) {
	return Gt(e) || e === void 0 || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Ao(e = {}) {
	let t = { ...e };
	function n(e) {
		let t = Object.entries(e);
		for (let r = 0; r < t.length; r++) {
			let [i, a] = t[r];
			!ko(a) || i.startsWith("unstable_") || i.startsWith("internal_") ? delete e[i] : Gt(a) && (e[i] = { ...a }, n(e[i]));
		}
	}
	return n(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
//#endregion
//#region node_modules/@mui/material/styles/createThemeNoVars.mjs
function jo(e) {
	return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
var Mo = (e) => {
	if (!Number.isNaN(+e)) return +e;
	let t = e.match(/\d*\.?\d+/g);
	if (!t) return 0;
	let n = 0;
	for (let e = 0; e < t.length; e += 1) n += +t[e];
	return n;
};
function No(e) {
	Object.assign(e, {
		alpha(t, n) {
			let r = this || e;
			return r.colorSpace ? `oklch(from ${t} l c h / ${typeof n == "string" ? `calc(${n})` : n})` : r.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof n == "string" ? `calc(${n})` : n})` : bi(t, Mo(n));
		},
		lighten(t, n) {
			let r = this || e;
			return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #fff ${jo(n)})` : wi(t, n);
		},
		darken(t, n) {
			let r = this || e;
			return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #000 ${jo(n)})` : Si(t, n);
		}
	});
}
function Po(e = {}, ...t) {
	let { breakpoints: n, mixins: r = {}, spacing: i, palette: a = {}, transitions: o = {}, typography: s = {}, shape: c, colorSpace: l, ...u } = e;
	if (e.vars && e.generateThemeVars === void 0) throw Error(Bt(22));
	let d = uo({
		...a,
		colorSpace: l
	}), f = Ir(e), p = qt(f, {
		mixins: po(f.breakpoints, r),
		palette: d,
		shadows: So.slice(),
		typography: _o(d, s),
		transitions: Do(o),
		zIndex: { ...Oo }
	});
	return p = qt(p, u), p = t.reduce((e, t) => qt(e, t), p), p.unstable_sxConfig = {
		...lr,
		...u?.unstable_sxConfig
	}, p.unstable_sx = function(e) {
		return fr({
			sx: e,
			theme: this
		});
	}, p.toRuntimeSource = Ao, No(p), p;
}
//#endregion
//#region node_modules/@mui/material/styles/getOverlayAlpha.mjs
function Fo(e) {
	let t;
	return t = e < 1 ? 5.11916 * e ** 2 : 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
//#endregion
//#region node_modules/@mui/material/styles/createColorScheme.mjs
var Io = [...Array(25)].map((e, t) => {
	if (t === 0) return "none";
	let n = Fo(t);
	return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function Lo(e) {
	return {
		inputPlaceholder: e === "dark" ? .5 : .42,
		inputUnderline: e === "dark" ? .7 : .42,
		switchTrackDisabled: e === "dark" ? .2 : .12,
		switchTrack: e === "dark" ? .3 : .38
	};
}
function Ro(e) {
	return e === "dark" ? Io : [];
}
function zo(e) {
	let { palette: t = { mode: "light" }, opacity: n, overlays: r, colorSpace: i, ...a } = e, o = uo({
		...t,
		colorSpace: i
	});
	return {
		palette: o,
		opacity: {
			...Lo(o.mode),
			...n
		},
		overlays: r || Ro(o.mode),
		...a
	};
}
//#endregion
//#region node_modules/@mui/material/styles/shouldSkipGeneratingVar.mjs
function Bo(e) {
	return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || e[0] === "palette" && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
//#endregion
//#region node_modules/@mui/material/styles/excludeVariablesFromRoot.mjs
var Vo = (e) => [
	...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`),
	`--${e ? `${e}-` : ""}palette-AppBar-darkBg`,
	`--${e ? `${e}-` : ""}palette-AppBar-darkColor`
], Ho = (e) => (t, n) => {
	let r = e.rootSelector || ":root", i = e.colorSchemeSelector, a = i;
	if (i === "class" && (a = ".%s"), i === "data" && (a = "[data-%s]"), i?.startsWith("data-") && !i.includes("%s") && (a = `[${i}="%s"]`), e.defaultColorScheme === t) {
		if (t === "dark") {
			let i = {};
			return Vo(e.cssVarPrefix).forEach((e) => {
				i[e] = n[e], delete n[e];
			}), a === "media" ? {
				[r]: n,
				"@media (prefers-color-scheme: dark)": { [r]: i }
			} : a ? {
				[a.replace("%s", t)]: i,
				[`${r}, ${a.replace("%s", t)}`]: n
			} : { [r]: {
				...n,
				...i
			} };
		}
		if (a && a !== "media") return `${r}, ${a.replace("%s", String(t))}`;
	} else if (t) {
		if (a === "media") return { [`@media (prefers-color-scheme: ${String(t)})`]: { [r]: n } };
		if (a) return a.replace("%s", String(t));
	}
	return r;
};
//#endregion
//#region node_modules/@mui/material/styles/createThemeWithVars.mjs
function Uo(e, t) {
	t.forEach((t) => {
		e[t] || (e[t] = {});
	});
}
function Y(e, t, n) {
	!e[t] && n && (e[t] = n);
}
function Wo(e) {
	return typeof e != "string" || !e.startsWith("hsl") ? e : _i(e);
}
function Go(e, t) {
	`${t}Channel` in e || (e[`${t}Channel`] = hi(Wo(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Ko(e) {
	return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
var qo = (e) => {
	try {
		return e();
	} catch {}
}, Jo = (e = "mui") => ca(e);
function Yo(e, t, n, r, i) {
	if (!n) return;
	n = n === !0 ? {} : n;
	let a = i === "dark" ? "dark" : "light";
	if (!r) {
		t[i] = zo({
			...n,
			palette: {
				mode: a,
				...n?.palette
			},
			colorSpace: e
		});
		return;
	}
	let { palette: o, ...s } = Po({
		...r,
		palette: {
			mode: a,
			...n?.palette
		},
		colorSpace: e
	});
	return t[i] = {
		...n,
		palette: o,
		opacity: {
			...Lo(a),
			...n?.opacity
		},
		overlays: n?.overlays || Ro(a)
	}, s;
}
function Xo(e = {}, ...t) {
	let { colorSchemes: n = { light: !0 }, defaultColorScheme: r, disableCssColorScheme: i = !1, cssVarPrefix: a = "mui", nativeColor: o = !1, shouldSkipGeneratingVar: s = Bo, colorSchemeSelector: c = n.light && n.dark ? "media" : void 0, rootSelector: l = ":root", ...u } = e, d = Object.keys(n)[0], f = r || (n.light && d !== "light" ? "light" : d), p = Jo(a), { [f]: m, light: h, dark: g, ..._ } = n, v = { ..._ }, y = m;
	if ((f === "dark" && !("dark" in n) || f === "light" && !("light" in n)) && (y = !0), !y) throw Error(Bt(21, f));
	let b;
	o && (b = "oklch");
	let x = Yo(b, v, y, u, f);
	h && !v.light && Yo(b, v, h, void 0, "light"), g && !v.dark && Yo(b, v, g, void 0, "dark");
	let S = {
		defaultColorScheme: f,
		...x,
		cssVarPrefix: a,
		colorSchemeSelector: c,
		rootSelector: l,
		getCssVar: p,
		colorSchemes: v,
		font: {
			...fo(x.typography),
			...x.font
		},
		spacing: Ko(u.spacing)
	};
	Object.keys(S.colorSchemes).forEach((e) => {
		let t = S.colorSchemes[e].palette, n = (e) => {
			let n = e.split("-"), r = n[1], i = n[2];
			return p(e, t[r][i]);
		};
		t.mode === "light" && (Y(t.common, "background", "#fff"), Y(t.common, "onBackground", "#000")), t.mode === "dark" && (Y(t.common, "background", "#000"), Y(t.common, "onBackground", "#fff"));
		function r(e, t, n) {
			if (b) {
				let r;
				return e === xi && (r = `transparent ${((1 - n) * 100).toFixed(0)}%`), e === Ci && (r = `#000 ${(n * 100).toFixed(0)}%`), e === J && (r = `#fff ${(n * 100).toFixed(0)}%`), `color-mix(in ${b}, ${t}, ${r})`;
			}
			return e(t, n);
		}
		if (Uo(t, [
			"Alert",
			"AppBar",
			"Avatar",
			"Button",
			"Chip",
			"FilledInput",
			"LinearProgress",
			"Skeleton",
			"Slider",
			"SnackbarContent",
			"SpeedDialAction",
			"StepConnector",
			"StepContent",
			"Switch",
			"TableCell",
			"Tooltip"
		]), t.mode === "light") {
			Y(t.Alert, "errorColor", r(Ci, o ? p("palette-error-light") : t.error.light, .6)), Y(t.Alert, "infoColor", r(Ci, o ? p("palette-info-light") : t.info.light, .6)), Y(t.Alert, "successColor", r(Ci, o ? p("palette-success-light") : t.success.light, .6)), Y(t.Alert, "warningColor", r(Ci, o ? p("palette-warning-light") : t.warning.light, .6)), Y(t.Alert, "errorFilledBg", n("palette-error-main")), Y(t.Alert, "infoFilledBg", n("palette-info-main")), Y(t.Alert, "successFilledBg", n("palette-success-main")), Y(t.Alert, "warningFilledBg", n("palette-warning-main")), Y(t.Alert, "errorFilledColor", qo(() => t.getContrastText(t.error.main))), Y(t.Alert, "infoFilledColor", qo(() => t.getContrastText(t.info.main))), Y(t.Alert, "successFilledColor", qo(() => t.getContrastText(t.success.main))), Y(t.Alert, "warningFilledColor", qo(() => t.getContrastText(t.warning.main))), Y(t.Alert, "errorStandardBg", r(J, o ? p("palette-error-light") : t.error.light, .9)), Y(t.Alert, "infoStandardBg", r(J, o ? p("palette-info-light") : t.info.light, .9)), Y(t.Alert, "successStandardBg", r(J, o ? p("palette-success-light") : t.success.light, .9)), Y(t.Alert, "warningStandardBg", r(J, o ? p("palette-warning-light") : t.warning.light, .9)), Y(t.Alert, "errorIconColor", n("palette-error-main")), Y(t.Alert, "infoIconColor", n("palette-info-main")), Y(t.Alert, "successIconColor", n("palette-success-main")), Y(t.Alert, "warningIconColor", n("palette-warning-main")), Y(t.AppBar, "defaultBg", n("palette-grey-100")), Y(t.Avatar, "defaultBg", n("palette-grey-400")), Y(t.Button, "inheritContainedBg", n("palette-grey-300")), Y(t.Button, "inheritContainedHoverBg", n("palette-grey-A100")), Y(t.Chip, "defaultBorder", n("palette-grey-400")), Y(t.Chip, "defaultAvatarColor", n("palette-grey-700")), Y(t.Chip, "defaultIconColor", n("palette-grey-700")), Y(t.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), Y(t.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), Y(t.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), Y(t.LinearProgress, "primaryBg", r(J, o ? p("palette-primary-main") : t.primary.main, .62)), Y(t.LinearProgress, "secondaryBg", r(J, o ? p("palette-secondary-main") : t.secondary.main, .62)), Y(t.LinearProgress, "errorBg", r(J, o ? p("palette-error-main") : t.error.main, .62)), Y(t.LinearProgress, "infoBg", r(J, o ? p("palette-info-main") : t.info.main, .62)), Y(t.LinearProgress, "successBg", r(J, o ? p("palette-success-main") : t.success.main, .62)), Y(t.LinearProgress, "warningBg", r(J, o ? p("palette-warning-light") : t.warning.main, .62)), Y(t.Skeleton, "bg", b ? r(xi, o ? p("palette-text-primary") : t.text.primary, .11) : `rgba(${n("palette-text-primaryChannel")} / 0.11)`), Y(t.Slider, "primaryTrack", r(J, o ? p("palette-primary-main") : t.primary.main, .62)), Y(t.Slider, "secondaryTrack", r(J, o ? p("palette-secondary-main") : t.secondary.main, .62)), Y(t.Slider, "errorTrack", r(J, o ? p("palette-error-main") : t.error.main, .62)), Y(t.Slider, "infoTrack", r(J, o ? p("palette-info-main") : t.info.main, .62)), Y(t.Slider, "successTrack", r(J, o ? p("palette-success-main") : t.success.main, .62)), Y(t.Slider, "warningTrack", r(J, o ? p("palette-warning-main") : t.warning.main, .62));
			let e = b ? r(Ci, o ? p("palette-background-default") : t.background.default, .6825) : Ei(t.background.default, .8);
			Y(t.SnackbarContent, "bg", e), Y(t.SnackbarContent, "color", qo(() => b ? eo.text.primary : t.getContrastText(e))), Y(t.SpeedDialAction, "fabHoverBg", Ei(t.background.paper, .15)), Y(t.StepConnector, "border", n("palette-grey-400")), Y(t.StepContent, "border", n("palette-grey-400")), Y(t.Switch, "defaultColor", n("palette-common-white")), Y(t.Switch, "defaultDisabledColor", n("palette-grey-100")), Y(t.Switch, "primaryDisabledColor", r(J, o ? p("palette-primary-main") : t.primary.main, .62)), Y(t.Switch, "secondaryDisabledColor", r(J, o ? p("palette-secondary-main") : t.secondary.main, .62)), Y(t.Switch, "errorDisabledColor", r(J, o ? p("palette-error-main") : t.error.main, .62)), Y(t.Switch, "infoDisabledColor", r(J, o ? p("palette-info-main") : t.info.main, .62)), Y(t.Switch, "successDisabledColor", r(J, o ? p("palette-success-main") : t.success.main, .62)), Y(t.Switch, "warningDisabledColor", r(J, o ? p("palette-warning-main") : t.warning.main, .62)), Y(t.TableCell, "border", r(J, xi(o ? p("palette-divider") : t.divider, 1), .88)), Y(t.Tooltip, "bg", r(xi, o ? p("palette-grey-700") : t.grey[700], .92));
		}
		if (t.mode === "dark") {
			Y(t.Alert, "errorColor", r(J, o ? p("palette-error-light") : t.error.light, .6)), Y(t.Alert, "infoColor", r(J, o ? p("palette-info-light") : t.info.light, .6)), Y(t.Alert, "successColor", r(J, o ? p("palette-success-light") : t.success.light, .6)), Y(t.Alert, "warningColor", r(J, o ? p("palette-warning-light") : t.warning.light, .6)), Y(t.Alert, "errorFilledBg", n("palette-error-dark")), Y(t.Alert, "infoFilledBg", n("palette-info-dark")), Y(t.Alert, "successFilledBg", n("palette-success-dark")), Y(t.Alert, "warningFilledBg", n("palette-warning-dark")), Y(t.Alert, "errorFilledColor", qo(() => t.getContrastText(t.error.dark))), Y(t.Alert, "infoFilledColor", qo(() => t.getContrastText(t.info.dark))), Y(t.Alert, "successFilledColor", qo(() => t.getContrastText(t.success.dark))), Y(t.Alert, "warningFilledColor", qo(() => t.getContrastText(t.warning.dark))), Y(t.Alert, "errorStandardBg", r(Ci, o ? p("palette-error-light") : t.error.light, .9)), Y(t.Alert, "infoStandardBg", r(Ci, o ? p("palette-info-light") : t.info.light, .9)), Y(t.Alert, "successStandardBg", r(Ci, o ? p("palette-success-light") : t.success.light, .9)), Y(t.Alert, "warningStandardBg", r(Ci, o ? p("palette-warning-light") : t.warning.light, .9)), Y(t.Alert, "errorIconColor", n("palette-error-main")), Y(t.Alert, "infoIconColor", n("palette-info-main")), Y(t.Alert, "successIconColor", n("palette-success-main")), Y(t.Alert, "warningIconColor", n("palette-warning-main")), Y(t.AppBar, "defaultBg", n("palette-grey-900")), Y(t.AppBar, "darkBg", n("palette-background-paper")), Y(t.AppBar, "darkColor", n("palette-text-primary")), Y(t.Avatar, "defaultBg", n("palette-grey-600")), Y(t.Button, "inheritContainedBg", n("palette-grey-800")), Y(t.Button, "inheritContainedHoverBg", n("palette-grey-700")), Y(t.Chip, "defaultBorder", n("palette-grey-700")), Y(t.Chip, "defaultAvatarColor", n("palette-grey-300")), Y(t.Chip, "defaultIconColor", n("palette-grey-300")), Y(t.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), Y(t.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), Y(t.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), Y(t.LinearProgress, "primaryBg", r(Ci, o ? p("palette-primary-main") : t.primary.main, .5)), Y(t.LinearProgress, "secondaryBg", r(Ci, o ? p("palette-secondary-main") : t.secondary.main, .5)), Y(t.LinearProgress, "errorBg", r(Ci, o ? p("palette-error-main") : t.error.main, .5)), Y(t.LinearProgress, "infoBg", r(Ci, o ? p("palette-info-main") : t.info.main, .5)), Y(t.LinearProgress, "successBg", r(Ci, o ? p("palette-success-main") : t.success.main, .5)), Y(t.LinearProgress, "warningBg", r(Ci, o ? p("palette-warning-main") : t.warning.main, .5)), Y(t.Skeleton, "bg", b ? r(xi, o ? p("palette-text-primary") : t.text.primary, .13) : `rgba(${n("palette-text-primaryChannel")} / 0.13)`), Y(t.Slider, "primaryTrack", r(Ci, o ? p("palette-primary-main") : t.primary.main, .5)), Y(t.Slider, "secondaryTrack", r(Ci, o ? p("palette-secondary-main") : t.secondary.main, .5)), Y(t.Slider, "errorTrack", r(Ci, o ? p("palette-error-main") : t.error.main, .5)), Y(t.Slider, "infoTrack", r(Ci, o ? p("palette-info-main") : t.info.main, .5)), Y(t.Slider, "successTrack", r(Ci, o ? p("palette-success-main") : t.success.main, .5)), Y(t.Slider, "warningTrack", r(Ci, o ? p("palette-warning-light") : t.warning.main, .5));
			let e = b ? r(J, o ? p("palette-background-default") : t.background.default, .985) : Ei(t.background.default, .98);
			Y(t.SnackbarContent, "bg", e), Y(t.SnackbarContent, "color", qo(() => b ? Qa.text.primary : t.getContrastText(e))), Y(t.SpeedDialAction, "fabHoverBg", Ei(t.background.paper, .15)), Y(t.StepConnector, "border", n("palette-grey-600")), Y(t.StepContent, "border", n("palette-grey-600")), Y(t.Switch, "defaultColor", n("palette-grey-300")), Y(t.Switch, "defaultDisabledColor", n("palette-grey-600")), Y(t.Switch, "primaryDisabledColor", r(Ci, o ? p("palette-primary-main") : t.primary.main, .55)), Y(t.Switch, "secondaryDisabledColor", r(Ci, o ? p("palette-secondary-main") : t.secondary.main, .55)), Y(t.Switch, "errorDisabledColor", r(Ci, o ? p("palette-error-main") : t.error.main, .55)), Y(t.Switch, "infoDisabledColor", r(Ci, o ? p("palette-info-main") : t.info.main, .55)), Y(t.Switch, "successDisabledColor", r(Ci, o ? p("palette-success-main") : t.success.main, .55)), Y(t.Switch, "warningDisabledColor", r(Ci, o ? p("palette-warning-light") : t.warning.main, .55)), Y(t.TableCell, "border", r(Ci, xi(o ? p("palette-divider") : t.divider, 1), .68)), Y(t.Tooltip, "bg", r(xi, o ? p("palette-grey-700") : t.grey[700], .92));
		}
		o || (Go(t.background, "default"), Go(t.background, "paper"), Go(t.common, "background"), Go(t.common, "onBackground"), Go(t, "divider")), Object.keys(t).forEach((e) => {
			let n = t[e];
			e !== "tonalOffset" && !o && n && typeof n == "object" && (n.main && Y(t[e], "mainChannel", hi(Wo(n.main))), n.light && Y(t[e], "lightChannel", hi(Wo(n.light))), n.dark && Y(t[e], "darkChannel", hi(Wo(n.dark))), n.contrastText && Y(t[e], "contrastTextChannel", hi(Wo(n.contrastText))), e === "text" && (Go(t[e], "primary"), Go(t[e], "secondary")), e === "action" && (n.active && Go(t[e], "active"), n.selected && Go(t[e], "selected")));
		});
	}), S = t.reduce((e, t) => qt(e, t), S);
	let C = {
		prefix: a,
		disableCssColorScheme: i,
		shouldSkipGeneratingVar: s,
		getSelector: Ho(S),
		enableContrastVars: o
	}, { vars: w, generateThemeVars: T, generateStyleSheets: E } = pa(S, C);
	return S.vars = w, Object.entries(S.colorSchemes[S.defaultColorScheme]).forEach(([e, t]) => {
		S[e] = t;
	}), S.generateThemeVars = T, S.generateStyleSheets = E, S.generateSpacing = function() {
		return Pr(u.spacing, kn(this));
	}, S.getColorSchemeSelector = ma(c), S.spacing = S.generateSpacing(), S.shouldSkipGeneratingVar = s, S.unstable_sxConfig = {
		...lr,
		...u?.unstable_sxConfig
	}, S.unstable_sx = function(e) {
		return fr({
			sx: e,
			theme: this
		});
	}, S.internal_cache = {}, S.toRuntimeSource = Ao, S;
}
//#endregion
//#region node_modules/@mui/material/styles/createTheme.mjs
function Zo(e, t, n) {
	e.colorSchemes && n && (e.colorSchemes[t] = {
		...n !== !0 && n,
		palette: uo({
			...n === !0 ? {} : n.palette,
			mode: t
		})
	});
}
function Qo(e = {}, ...t) {
	let { palette: n, cssVariables: r = !1, colorSchemes: i = n ? void 0 : { light: !0 }, defaultColorScheme: a = n?.mode, ...o } = e, s = a || "light", c = i?.[s], l = {
		...i,
		...n ? { [s]: {
			...typeof c != "boolean" && c,
			palette: n
		} } : void 0
	};
	if (r === !1) {
		if (!("colorSchemes" in e)) return Po(e, ...t);
		let r = n;
		"palette" in e || l[s] && (l[s] === !0 ? s === "dark" && (r = { mode: "dark" }) : r = l[s].palette);
		let i = Po({
			...e,
			palette: r
		}, ...t);
		return i.defaultColorScheme = s, i.colorSchemes = l, i.palette.mode === "light" && (i.colorSchemes.light = {
			...l.light !== !0 && l.light,
			palette: i.palette
		}, Zo(i, "dark", l.dark)), i.palette.mode === "dark" && (i.colorSchemes.dark = {
			...l.dark !== !0 && l.dark,
			palette: i.palette
		}, Zo(i, "light", l.light)), i;
	}
	return !n && !("light" in l) && s === "light" && (l.light = !0), Xo({
		...o,
		colorSchemes: l,
		defaultColorScheme: s,
		...typeof r != "boolean" && r
	}, ...t);
}
//#endregion
//#region node_modules/@mui/material/styles/defaultTheme.mjs
var $o = Qo(), es = "$$material";
//#endregion
//#region node_modules/@mui/material/styles/useTheme.mjs
function ts() {
	let e = Br($o);
	return e.$$material || e;
}
//#endregion
//#region node_modules/@mui/material/GlobalStyles/GlobalStyles.mjs
function ns(e) {
	return /* @__PURE__ */ (0, K.jsx)(Hr, {
		...e,
		defaultTheme: $o,
		themeId: es
	});
}
//#endregion
//#region node_modules/@mui/material/styles/slotShouldForwardProp.mjs
function rs(e) {
	return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
//#endregion
//#region node_modules/@mui/material/styles/rootShouldForwardProp.mjs
var is = (e) => rs(e) && e !== "classes", X = ni({
	themeId: es,
	defaultTheme: $o,
	rootShouldForwardProp: is
});
//#endregion
//#region node_modules/@mui/material/zero-styled/index.mjs
function as(e) {
	return function(t) {
		return /* @__PURE__ */ (0, K.jsx)(ns, { styles: typeof e == "function" ? (n) => e({
			theme: n,
			...t
		}) : e });
	};
}
//#endregion
//#region node_modules/@mui/material/utils/memoTheme.mjs
var Z = Ji;
//#endregion
//#region node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.mjs
function os(e) {
	return Ri(e);
}
//#endregion
//#region node_modules/@mui/material/CssBaseline/CssBaseline.mjs
var ss = (e, t) => ({
	WebkitFontSmoothing: "antialiased",
	MozOsxFontSmoothing: "grayscale",
	boxSizing: "border-box",
	WebkitTextSizeAdjust: "100%",
	...t && !e.vars && { colorScheme: e.palette.mode }
}), cs = (e) => ({
	color: (e.vars || e).palette.text.primary,
	...e.typography.body1,
	backgroundColor: (e.vars || e).palette.background.default,
	"@media print": { backgroundColor: (e.vars || e).palette.common.white }
});
//#endregion
//#region node_modules/@mui/material/ScopedCssBaseline/scopedCssBaselineClasses.mjs
function ls(e) {
	return q("MuiScopedCssBaseline", e);
}
qr("MuiScopedCssBaseline", ["root"]);
//#endregion
//#region node_modules/@mui/material/ScopedCssBaseline/ScopedCssBaseline.mjs
var us = (e) => {
	let { classes: t } = e;
	return At({ root: ["root"] }, ls, t);
}, ds = X("div", {
	name: "MuiScopedCssBaseline",
	slot: "Root"
})(Z(({ theme: e }) => {
	let t = {};
	return e.colorSchemes && Object.entries(e.colorSchemes).forEach(([n, r]) => {
		let i = e.getColorSchemeSelector(n);
		i.startsWith("@") ? t[i] = { colorScheme: r.palette?.mode } : t[`&${i.replace(/\s*&/, "")}`] = { colorScheme: r.palette?.mode };
	}), {
		...ss(e, !1),
		...cs(e),
		"& *, & *::before, & *::after": { boxSizing: "inherit" },
		"& strong, & b": { fontWeight: e.typography.fontWeightBold },
		variants: [{
			props: { enableColorScheme: !0 },
			style: e.vars ? t : { colorScheme: e.palette.mode }
		}]
	};
})), fs = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let n = os({
		props: e,
		name: "MuiScopedCssBaseline"
	}), { className: r, component: i = "div", enableColorScheme: a, ...o } = n, s = {
		...n,
		component: i
	};
	return /* @__PURE__ */ (0, K.jsx)(ds, {
		as: i,
		className: G(us(s).root, r),
		ref: t,
		ownerState: s,
		...o
	});
});
//#endregion
//#region node_modules/@mui/material/styles/ThemeProviderNoVars.mjs
function ps({ theme: e, ...t }) {
	let n = "$$material" in e ? e[es] : void 0;
	return /* @__PURE__ */ (0, K.jsx)(Ki, {
		...t,
		themeId: n ? es : void 0,
		theme: n || e
	});
}
//#endregion
//#region node_modules/@mui/material/InitColorSchemeScript/InitColorSchemeScript.mjs
var ms = {
	attribute: "data-mui-color-scheme",
	colorSchemeStorageKey: "mui-color-scheme",
	defaultLightColorScheme: "light",
	defaultDarkColorScheme: "dark",
	modeStorageKey: "mui-mode"
}, { CssVarsProvider: hs, useColorScheme: gs, getInitColorSchemeScript: _s } = sa({
	themeId: es,
	theme: () => Qo({ cssVariables: !0 }),
	colorSchemeStorageKey: ms.colorSchemeStorageKey,
	modeStorageKey: ms.modeStorageKey,
	defaultColorScheme: {
		light: ms.defaultLightColorScheme,
		dark: ms.defaultDarkColorScheme
	},
	resolveTheme: (e) => {
		let t = {
			...e,
			typography: _o(e.palette, e.typography)
		};
		return t.unstable_sx = function(e) {
			return fr({
				sx: e,
				theme: this
			});
		}, t;
	}
}), vs = hs;
//#endregion
//#region node_modules/@mui/material/styles/ThemeProvider.mjs
function ys({ theme: e, ...t }) {
	let n = _.useMemo(() => {
		if (typeof e == "function") return e;
		let t = "$$material" in e ? e[es] : e;
		return "colorSchemes" in t ? null : "vars" in t ? e : {
			...e,
			vars: null
		};
	}, [e]);
	return n ? /* @__PURE__ */ (0, K.jsx)(ps, {
		theme: n,
		...t
	}) : /* @__PURE__ */ (0, K.jsx)(vs, {
		theme: e,
		...t
	});
}
//#endregion
//#region injectables/src/DemoReactiveForm.jsx
function bs({ title: e = "Reactive Form", submitLabel: t = "Submit" }) {
	let [n, r] = (0, _.useState)(""), [i, a] = (0, _.useState)(1), [o, s] = (0, _.useState)(!1), c = (0, _.useMemo)(() => {
		let e = i >= 17 ? "Tier 4" : i >= 11 ? "Tier 3" : i >= 5 ? "Tier 2" : "Tier 1", t = o ? "Arcane" : "Martial";
		return `${n.trim() || "Unnamed Character"} | Level ${i} | ${e} | ${t}`;
	}, [
		o,
		i,
		n
	]);
	return /* @__PURE__ */ (0, K.jsxs)("form", {
		onSubmit: (e) => e.preventDefault(),
		style: {
			padding: "0.75rem",
			border: "1px solid #9aa0a6",
			borderRadius: "8px",
			backgroundColor: "#f7f7f7",
			display: "grid",
			gap: "0.5rem"
		},
		children: [
			/* @__PURE__ */ (0, K.jsx)("h3", {
				style: { margin: 0 },
				children: e
			}),
			/* @__PURE__ */ (0, K.jsxs)("label", { children: ["Character Name", /* @__PURE__ */ (0, K.jsx)("input", {
				type: "text",
				value: n,
				onChange: (e) => r(e.target.value),
				placeholder: "e.g. Nyx",
				style: {
					display: "block",
					width: "100%"
				}
			})] }),
			/* @__PURE__ */ (0, K.jsxs)("label", { children: [
				"Level: ",
				i,
				/* @__PURE__ */ (0, K.jsx)("input", {
					type: "range",
					min: "1",
					max: "20",
					value: i,
					onChange: (e) => a(Number(e.target.value)),
					style: {
						display: "block",
						width: "100%"
					}
				})
			] }),
			/* @__PURE__ */ (0, K.jsxs)("label", {
				style: {
					display: "flex",
					gap: "0.35rem",
					alignItems: "center"
				},
				children: [/* @__PURE__ */ (0, K.jsx)("input", {
					type: "checkbox",
					checked: o,
					onChange: (e) => s(e.target.checked)
				}), "Arcane build"]
			}),
			/* @__PURE__ */ (0, K.jsx)("output", {
				style: {
					fontFamily: "monospace",
					fontSize: "0.9rem"
				},
				children: c
			}),
			/* @__PURE__ */ (0, K.jsx)("button", {
				type: "submit",
				children: t
			})
		]
	});
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function xs(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
//#endregion
//#region node_modules/final-form/dist/final-form.es.js
var Ss = 46, Cs = /\\(\\)?/g, ws = RegExp("[^.[\\]]+|\\[(?:([^\"'][^[]*)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))", "g"), Ts = function(e) {
	var t = [];
	return e.charCodeAt(0) === Ss && t.push(""), e.replace(ws, function(e, n, r, i) {
		var a = e;
		return r ? a = i.replace(Cs, "$1") : n && (a = n.trim()), t.push(a), "";
	}), t;
}, Es = Object.create(null), Ds = /[.[\]]+/, Os = function(e) {
	if (e == null || !e.length) return [];
	if (typeof e != "string") throw Error("toPath() expects a string");
	return Es[e] ?? (e.endsWith("[]") ? Es[e] = e.split(Ds).filter(Boolean) : Es[e] = Ts(e)), Es[e];
}, ks = function(e, t) {
	for (var n = Os(t), r = e, i = 0; i < n.length; i++) {
		var a = n[i];
		if (typeof r != "object" || !r || Array.isArray(r) && isNaN(Number(a))) return;
		r = r[a];
	}
	return r;
};
function As(e) {
	var t = js(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function js(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t);
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return String(e);
}
var Ms = function(e) {
	var t = Number(e);
	return !isNaN(t) && Number.isInteger(t) && t >= 0 && String(t) === e;
}, Ns = function(e, t, n, r, i) {
	if (t >= n.length) return r;
	var a = n[t];
	if (!Ms(a)) {
		var o;
		if (e == null) {
			var s, c = Ns(void 0, t + 1, n, r, i);
			return c === void 0 ? void 0 : (s = {}, s[a] = c, s);
		}
		if (Array.isArray(e)) throw Error("Cannot set a non-numeric property on an array");
		var l = Ns(e[a], t + 1, n, r, i);
		if (l === void 0) {
			var u = Object.keys(e).length;
			if (e[a] === void 0 && u === 0) return;
			if (e[a] !== void 0 && u <= 1) return Ms(n[t - 1]) && !i ? {} : void 0;
			if (typeof e == "string") return e;
			var d = e;
			return d[a], xs(d, [a].map(As));
		}
		return Ue({}, e, (o = {}, o[a] = l, o));
	}
	var f = Number(a);
	if (e == null) {
		var p = Ns(void 0, t + 1, n, r, i);
		if (p === void 0) return;
		var m = [];
		return m[f] = p, m;
	}
	if (!Array.isArray(e)) if (typeof e == "object" && e) {
		var h = [];
		Object.keys(e).forEach(function(t) {
			var n = Number(t);
			isNaN(n) ? h[t] = e[t] : h[n] = e[t];
		}), e = h;
	} else throw Error("Cannot set a numeric property on an object");
	var g = e[f], _ = Ns(g, t + 1, n, r, i), v = [].concat(e);
	if (Object.keys(e).forEach(function(t) {
		isNaN(Number(t)) && (v[t] = e[t]);
	}), i && _ === void 0) {
		if (v.splice(f, 1), v.length === 0) return;
	} else v[f] = _;
	return v;
}, Ps = function(e, t, n, r) {
	if (r === void 0 && (r = !1), e == null) throw Error("Cannot call setIn() with " + String(e) + " state");
	if (t == null) throw Error("Cannot call setIn() with " + String(t) + " key");
	return Ns(e, 0, Os(t), n, r);
}, Fs = "FINAL_FORM/form-error", Is = "FINAL_FORM/array-error";
function Ls(e, t) {
	var n = e.errors, r = e.initialValues, i = e.lastSubmittedValues, a = e.submitErrors, o = e.submitFailed, s = e.submitSucceeded, c = e.submitting, l = e.values, u = t.active, d = t.blur, f = t.change, p = t.data, m = t.focus, h = t.modified, g = t.modifiedSinceLastSubmit, _ = t.name, v = t.touched, y = t.validating, b = t.visited, x = ks(l, _), S = n ? ks(n, _) : void 0;
	S && S["FINAL_FORM/array-error"] && (S = S[Is]);
	var C = a && ks(a, _), w = r && ks(r, _), T = t.isEqual(w, x), E = !!(i && !t.isEqual(ks(i, _), x)), D = !S && !C;
	return {
		active: u,
		blur: d,
		change: f,
		data: p,
		dirty: !T,
		dirtySinceLastSubmit: E,
		error: S,
		focus: m,
		initial: w,
		invalid: !D,
		length: Array.isArray(x) ? x.length : void 0,
		modified: h,
		modifiedSinceLastSubmit: g,
		name: _,
		pristine: T,
		submitError: C,
		submitFailed: o,
		submitSucceeded: s,
		submitting: c,
		touched: v,
		valid: D,
		value: x,
		visited: b,
		validating: y
	};
}
var Rs = [
	"active",
	"data",
	"dirty",
	"dirtySinceLastSubmit",
	"error",
	"initial",
	"invalid",
	"length",
	"modified",
	"modifiedSinceLastSubmit",
	"pristine",
	"submitError",
	"submitFailed",
	"submitSucceeded",
	"submitting",
	"touched",
	"valid",
	"value",
	"visited",
	"validating"
], zs = function(e, t) {
	if (e === t) return !0;
	if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
	var n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (var i = Object.prototype.hasOwnProperty.bind(t), a = 0; a < n.length; a++) {
		var o = n[a];
		if (!i(o) || e[o] !== t[o]) return !1;
	}
	return !0;
};
function Bs(e, t, n, r, i, a) {
	var o = !1;
	return i.forEach(function(i) {
		r[i] && (e[i] = t[i], (!n || (~a.indexOf(i) ? !zs(t[i], n[i]) : t[i] !== n[i])) && (o = !0));
	}), o;
}
var Vs = ["data"], Hs = function(e, t, n, r) {
	var i = {
		blur: e.blur,
		change: e.change,
		focus: e.focus,
		name: e.name
	};
	return Bs(i, e, t, n, Rs, Vs) || !t || r ? i : void 0;
}, Us = [
	"active",
	"dirty",
	"dirtyFields",
	"dirtyFieldsSinceLastSubmit",
	"dirtySinceLastSubmit",
	"error",
	"errors",
	"hasSubmitErrors",
	"hasValidationErrors",
	"initialValues",
	"invalid",
	"modified",
	"modifiedSinceLastSubmit",
	"pristine",
	"submitting",
	"submitError",
	"submitErrors",
	"submitFailed",
	"submitSucceeded",
	"touched",
	"valid",
	"validating",
	"values",
	"visited"
], Ws = ["touched", "visited"];
function Gs(e, t, n, r) {
	var i = {};
	return Bs(i, e, t, n, Us, Ws) || !t || r ? i : void 0;
}
var Ks = function(e) {
	var t, n;
	return function() {
		var r = [...arguments];
		return (!t || r.length !== t.length || r.some(function(e, n) {
			return !zs(t[n], e);
		})) && (t = r, n = e.apply(void 0, r)), n;
	};
}, qs = (function(e) {
	return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}), Js = "5.0.0-1";
function Ys(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n) return (n = n.call(e)).next.bind(n);
	if (Array.isArray(e) || (n = Xs(e)) || t) {
		n && (e = n);
		var r = 0;
		return function() {
			return r >= e.length ? { done: !0 } : {
				done: !1,
				value: e[r++]
			};
		};
	}
	throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Xs(e, t) {
	if (e) {
		if (typeof e == "string") return Zs(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Zs(e, t) : void 0;
	}
}
function Zs(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
var Qs = function(e, t) {
	return e === t;
}, $s = function(e) {
	return Object.keys(e).some(function(t) {
		var n = e[t];
		return n && typeof n == "object" && !(n instanceof Error) ? $s(n) : n !== void 0;
	});
};
function ec(e) {
	var t = e.active, n = e.dirtySinceLastSubmit, r = e.modifiedSinceLastSubmit, i = e.error, a = e.errors, o = e.initialValues, s = e.pristine, c = e.submitting, l = e.submitFailed, u = e.submitSucceeded, d = e.submitError, f = e.submitErrors, p = e.valid, m = e.validating, h = e.values;
	return {
		active: t,
		dirty: !s,
		dirtySinceLastSubmit: n,
		modifiedSinceLastSubmit: r,
		error: i,
		errors: a,
		hasSubmitErrors: !!(d || f && $s(f)),
		hasValidationErrors: !!(i || a && $s(a)),
		invalid: !p,
		initialValues: o,
		pristine: s,
		submitting: c,
		submitFailed: l,
		submitSucceeded: u,
		submitError: d,
		submitErrors: f,
		valid: p,
		validating: m > 0,
		values: h
	};
}
function tc(e, t, n, r, i, a) {
	var o = i(n, r, t, a);
	return o ? (e(o), !0) : !1;
}
function nc(e, t, n, r, i) {
	var a = e.entries;
	Object.keys(a).forEach(function(e) {
		var o = a[Number(e)];
		// istanbul ignore next
		if (o) {
			var s = o.subscription, c = o.subscriber, l = o.notified;
			tc(c, s, t, n, r, i || !l) && (o.notified = !0);
		}
	});
}
function rc(e) {
	if (!e) throw Error("No config specified");
	var t = e.debug, n = e.destroyOnUnregister, r = e.keepDirtyOnReinitialize, i = e.initialValues, a = e.mutators, o = e.onSubmit, s = e.validate, c = e.validateOnBlur, l = e.callbackScheduler, u = e.ignoreUnregister;
	if (!o) throw Error("No onSubmit function specified");
	var d = {
		subscribers: {
			index: 0,
			entries: {}
		},
		fieldSubscribers: Object.create(null),
		fields: Object.create(null),
		formState: {
			asyncErrors: {},
			dirtySinceLastSubmit: !1,
			modifiedSinceLastSubmit: !1,
			errors: {},
			initialValues: i && Ue({}, i),
			pristine: !0,
			submitting: !1,
			submitFailed: !1,
			submitSucceeded: !1,
			resetWhileSubmitting: !1,
			valid: !0,
			validating: 0,
			values: i ? Ue({}, i) : {}
		},
		lastFormState: void 0
	}, f = 0, p = !1, m = !1, h = !1, g = 0, _ = 0, v = {}, y = [], b = !1, x = function(e) {
		return function(t) {
			return delete v[e], t;
		};
	}, S = function() {
		!b && y.length > 0 && (b = !0, (l || function(e) {
			return setTimeout(e, 0);
		})(function() {
			var e = [].concat(y);
			y.length = 0, b = !1, e.forEach(function(e) {
				return e();
			});
		}));
	}, C = function(e, t) {
		t ? (y.push(e), S()) : e();
	}, w = function(e, t, n) {
		var r = n(ks(e.formState.values, t));
		e.formState.values = Ps(e.formState.values, t, r) || {};
	}, T = function(e, t, n) {
		if (e.fields[t]) {
			var r, i;
			e.fields = Object.assign(Object.create(null), e.fields, (r = {}, r[n] = Ue({}, e.fields[t], {
				name: n,
				blur: function() {
					return z.blur(n);
				},
				change: function(e) {
					return z.change(n, e);
				},
				focus: function() {
					return z.focus(n);
				},
				lastFieldState: void 0
			}), r)), delete e.fields[t], e.fieldSubscribers = Object.assign(Object.create(null), e.fieldSubscribers, (i = {}, i[n] = e.fieldSubscribers[t], i)), delete e.fieldSubscribers[t];
			var a = ks(e.formState.values, t);
			e.formState.values = Ps(e.formState.values, t, void 0) || {}, e.formState.values = Ps(e.formState.values, n, a) || {}, delete e.lastFormState;
		}
	}, E = function(e) {
		return function() {
			// istanbul ignore next
			if (a) {
				var t = {
					formState: d.formState,
					fields: d.fields,
					fieldSubscribers: d.fieldSubscribers,
					lastFormState: d.lastFormState
				}, n = [...arguments], r = a[e](n, t, {
					changeValue: w,
					getIn: ks,
					renameField: T,
					resetFieldState: z.resetFieldState,
					setIn: Ps,
					shallowEqual: zs
				});
				return d.formState = t.formState, d.fields = t.fields, d.fieldSubscribers = t.fieldSubscribers, d.lastFormState = t.lastFormState, j(void 0, function() {
					M(void 0), L();
				}), r;
			}
		};
	}, D = a ? Object.keys(a).reduce(function(e, t) {
		return e[t] = E(t), e;
	}, {}) : {}, O = function(e) {
		var t = [];
		if (s) {
			var n = s(Ue({}, d.formState.values));
			qs(n) ? t.push(n.then(function(t) {
				return e(t, !0);
			})) : e(n, !1);
		}
		return t;
	}, k = function(e) {
		return !e || !e.validators ? [] : Object.keys(e.validators).reduce(function(t, n) {
			var r = e.validators[Number(n)]();
			return r && t.push(r), t;
		}, []);
	}, A = function(e, t) {
		var n = [], r = k(e);
		if (r.length) {
			var i;
			e.asyncValidationKey++;
			var a = e.asyncValidationKey;
			r.forEach(function(r) {
				var o = r(ks(d.formState.values, e.name), d.formState.values, r.length === 0 || r.length === 3 ? Ls(d.formState, e) : void 0);
				if (o && qs(o)) {
					e.asyncValidationCount++, e.validating = !0;
					var s = e.instanceId, c = o.then(function(n) {
						var r = d.fields[e.name];
						r && r.instanceId === s && (r.asyncValidationCount > 0 && r.asyncValidationCount--, r.asyncValidationCount === 0 && (r.validating = !1), a === r.asyncValidationKey && t(n));
					});
					n.push(c);
				} else i ||= o;
			}), t(i);
		}
		return n;
	}, j = function(e, t) {
		if (p) {
			m = !0, t();
			return;
		}
		var n = d.fields, r = d.formState, i = Ue({}, n), a = Object.keys(i);
		if (!s && !a.some(function(e) {
			return k(i[e]).length;
		})) {
			t();
			return;
		}
		var o = !1;
		if (e) {
			var c = i[e];
			if (c) {
				var l = c.validateFields;
				l && (o = !0, a = l.length ? l.concat(e) : [e]);
			}
		}
		var u = {}, f = {}, h = {}, _ = [].concat(O(function(e, t) {
			t ? f = e || {} : u = e || {};
		}), a.reduce(function(e, t) {
			return e.concat(A(n[t], function(e) {
				h[t] = e;
			}));
		}, [])), y = _.length > 0, b = ++g, S = Promise.all(_).then(x(b)).catch(function(e) {
			throw x(b)(void 0), e;
		});
		y && (v[b] = S);
		var C = function(e) {
			var t = Ue({}, o ? r.errors : {}, u, e ? f : r.asyncErrors), c = function(r) {
				a.forEach(function(a) {
					if (n[a]) {
						var c = ks(u, a), l = e ? ks(f, a) : void 0, d = ks(t, a), p = k(i[a]).length, m = h[a];
						r(a, p && m || s && (l || c) || (!c && !o ? d : void 0));
					}
				});
			};
			c(function(e, n) {
				t = Ps(t, e, n) || {};
			}), c(function(e, n) {
				if (n && n["FINAL_FORM/array-error"]) {
					var r = ks(t, e), i = [].concat(r);
					i[Is] = n[Is], t = Ps(t, e, i);
				}
			}), zs(r.errors, t) || (r.errors = t), e && (r.asyncErrors = f), r.error = u[Fs];
		};
		if (y && (d.formState.validating++, t()), C(!1), t(), y) {
			var w = function() {
				d.formState.validating--, t(), d.formState.validating === 0 && d.lastFormState.validating && L();
			};
			S.then(function() {
				g > b || C(!0);
			}).then(w, w);
		}
	}, M = function(e) {
		if (!f) {
			var t = d.fields, n = d.fieldSubscribers, r = d.formState, i = Ue({}, t), a = function(e) {
				var t = i[e], a = Ls(r, t), o = t.lastFieldState;
				t.lastFieldState = a;
				var s = n[e];
				s && nc(s, a, o, Hs, o === void 0);
			};
			e ? a(e) : Object.keys(i).forEach(a);
		}
	}, N = function() {
		Object.keys(d.fields).forEach(function(e) {
			d.fields[e].touched = !0;
		});
	}, ee = function() {
		return !!(d.formState.error || $s(d.formState.errors));
	}, te = function() {
		var e = d.fields, t = d.formState, n = d.lastFormState, r = Ue({}, e), i = Object.keys(r), a = !1, o = i.reduce(function(e, n) {
			return r[n].isEqual(ks(t.values, n), ks(t.initialValues || {}, n)) || (a = !0, e[n] = !0), e;
		}, {});
		if (!a) for (var s = Ys(new Set([].concat(Object.keys(t.values || {}), Object.keys(t.initialValues || {})))), c; !(c = s()).done;) {
			var l = c.value;
			if (!r[l] && !zs(t.values?.[l], t.initialValues?.[l])) {
				a = !0;
				break;
			}
		}
		var u = i.reduce(function(e, n) {
			// istanbul ignore next
			var i = t.lastSubmittedValues || {};
			return r[n].isEqual(ks(t.values, n), ks(i, n)) || (e[n] = !0), e;
		}, {});
		t.pristine = !a, t.dirtySinceLastSubmit = !!(t.lastSubmittedValues && Object.values(u).some(function(e) {
			return e;
		})), t.modifiedSinceLastSubmit = !!(t.lastSubmittedValues && Object.keys(r).some(function(e) {
			return r[e].modifiedSinceLastSubmit;
		})), t.valid = !t.error && !t.submitError && !$s(t.errors) && !(t.submitErrors && $s(t.submitErrors));
		var f = ec(t), p = i.reduce(function(e, t) {
			return e.modified[t] = r[t].modified, e.touched[t] = r[t].touched, e.visited[t] = r[t].visited, e;
		}, {
			modified: {},
			touched: {},
			visited: {}
		}), m = p.modified, h = p.touched, g = p.visited;
		return f.dirtyFields = n && zs(n.dirtyFields, o) ? n.dirtyFields : o, f.dirtyFieldsSinceLastSubmit = n && zs(n.dirtyFieldsSinceLastSubmit, u) ? n.dirtyFieldsSinceLastSubmit : u, f.modified = n && zs(n.modified, m) ? n.modified : m, f.touched = n && zs(n.touched, h) ? n.touched : h, f.visited = n && zs(n.visited, g) ? n.visited : g, n && zs(n, f) ? n : f;
	}, P = function() {
		return t && t(te(), Object.keys(d.fields).reduce(function(e, t) {
			return e[t] = d.fields[t], e;
		}, {}));
	}, F = !1, I = !1, L = function() {
		if (F) I = !0;
		else {
			if (F = !0, P(), !f && !(p && h)) {
				var e = d.lastFormState, t = te();
				t !== e && (d.lastFormState = t, nc(d.subscribers, t, e, Gs));
			}
			F = !1, I && (I = !1, L());
		}
	}, ne = function() {
		return Object.keys(d.fields).some(function(e) {
			return d.fields[e].beforeSubmit && d.fields[e].beforeSubmit() === !1;
		});
	}, re = function() {
		return Object.keys(d.fields).forEach(function(e) {
			return d.fields[e].afterSubmit && d.fields[e].afterSubmit();
		});
	}, R = function() {
		return Object.keys(d.fields).forEach(function(e) {
			return d.fields[e].modifiedSinceLastSubmit = !1;
		});
	};
	j(void 0, function() {
		L();
	});
	var z = {
		batch: function(e) {
			f++, e(), f--, M(void 0), L();
		},
		blur: function(e) {
			var t = d.fields, n = d.formState, r = t[e];
			r && (delete n.active, t[e] = Ue({}, r, {
				active: !1,
				touched: !0
			}), c ? j(e, function() {
				M(void 0), L();
			}) : (M(void 0), L()));
		},
		change: function(e, t) {
			var n = d.fields, r = d.formState;
			if (ks(r.values, e) !== t) {
				w(d, e, function() {
					return t;
				});
				var i = n[e];
				i && (n[e] = Ue({}, i, {
					modified: !0,
					modifiedSinceLastSubmit: !!r.lastSubmittedValues
				})), c ? (M(void 0), L()) : j(e, function() {
					M(void 0), L();
				});
			}
		},
		get destroyOnUnregister() {
			return !!n;
		},
		set destroyOnUnregister(e) {
			n = e;
		},
		get ignoreUnregister() {
			return !!u;
		},
		set ignoreUnregister(e) {
			u = e;
		},
		focus: function(e) {
			var t = d.fields[e];
			t && !t.active && (d.formState.active = e, t.active = !0, t.visited = !0, M(void 0), L());
		},
		mutators: D,
		getFieldState: function(e) {
			var t = d.fields[e];
			return t && t.lastFieldState;
		},
		getRegisteredFields: function() {
			return Object.keys(d.fields);
		},
		getState: function() {
			return te();
		},
		initialize: function(e) {
			var t = d.fields, n = d.formState, i = Ue({}, t), a = typeof e == "function" ? e(n.values) : e;
			r || (n.values = a);
			var o = r ? Object.keys(i).reduce(function(e, t) {
				return i[t].isEqual(ks(n.values, t), ks(n.initialValues || {}, t)) || Object.keys(i).some(function(e) {
					return e !== t && (e.startsWith(t + "[") || e.startsWith(t + "."));
				}) || (e[t] = ks(n.values, t)), e;
			}, {}) : {};
			n.initialValues = a, n.values = a, Object.keys(o).forEach(function(e) {
				n.values = Ps(n.values, e, o[e]) || {};
			}), Object.keys(i).forEach(function(e) {
				var t = i[e], r = ks(n.values, e), a = ks(n.initialValues || {}, e);
				t.modified = !t.isEqual(r, a);
			}), j(void 0, function() {
				M(void 0), L();
			});
		},
		isValidationPaused: function() {
			return p;
		},
		pauseValidation: function(e) {
			e === void 0 && (e = !0), p = !0, h = e;
		},
		registerField: function(e, t, r, i) {
			r === void 0 && (r = {}), d.fieldSubscribers[e] || (d.fieldSubscribers[e] = {
				index: 0,
				entries: {}
			});
			var a = d.fieldSubscribers[e].index++;
			d.fieldSubscribers[e].entries[a] = {
				subscriber: Ks(t),
				subscription: r,
				notified: !1
			};
			var o = d.fields[e] || {
				active: !1,
				afterSubmit: i && i.afterSubmit,
				beforeSubmit: i && i.beforeSubmit,
				data: i && i.data || {},
				isEqual: Qs,
				lastFieldState: void 0,
				modified: !1,
				modifiedSinceLastSubmit: !1,
				name: e,
				touched: !1,
				valid: !0,
				validateFields: i && i.validateFields,
				validators: {},
				validating: !1,
				asyncValidationCount: 0,
				asyncValidationKey: 0,
				instanceId: void 0,
				visited: !1,
				blur: function() {
					return z.blur(e);
				},
				change: function(t) {
					return z.change(e, t);
				},
				focus: function() {
					return z.focus(e);
				}
			};
			typeof o.blur != "function" && (o.blur = function() {
				return z.blur(e);
			}), typeof o.change != "function" && (o.change = function(t) {
				return z.change(e, t);
			}), typeof o.focus != "function" && (o.focus = function() {
				return z.focus(e);
			}), o.isEqual = i && i.isEqual || d.fields[e] && d.fields[e].isEqual || Qs, o.instanceId = o.instanceId ?? ++_, o.asyncValidationCount = o.asyncValidationCount ?? 0, o.asyncValidationKey = o.asyncValidationKey ?? 0, d.fields[e] = o;
			var s = !1, c = i && i.silent, l = i && i.async, f = function() {
				C(function() {
					c && d.fields[e] ? M(e) : (L(), M(void 0));
				}, !!l);
			};
			if (i) {
				s = !!(i.getValidator && i.getValidator()), i.getValidator && (d.fields[e].validators[a] = i.getValidator);
				var p = ks(d.formState.values, e) === void 0, m = ks(d.formState.values, e), h = ks(d.formState.initialValues, e);
				i.initialValue !== void 0 && (p || m === h) ? (d.formState.initialValues = Ps(d.formState.initialValues || {}, e, i.initialValue), d.formState.values = Ps(d.formState.values || {}, e, i.initialValue) || {}, j(void 0, f)) : i.initialValue !== void 0 && i.initialValue !== h && m !== void 0 && (d.formState.initialValues = Ps(d.formState.initialValues || {}, e, i.initialValue), j(void 0, f)), i.defaultValue !== void 0 && i.initialValue === void 0 && ks(d.formState.initialValues, e) === void 0 && p && (d.formState.values = Ps(d.formState.values || {}, e, i.defaultValue) || {});
			}
			return s ? j(void 0, f) : f(), function() {
				var t = !1;
				// istanbul ignore next
				d.fields[e] && d.fields[e].validators && (t = !!(d.fields[e].validators[a] && d.fields[e].validators[a]()), delete d.fields[e].validators[a]);
				var r = !!d.fieldSubscribers[e];
				r && d.fieldSubscribers[e].entries && delete d.fieldSubscribers[e].entries[a];
				var i = r && d.fieldSubscribers[e] && d.fieldSubscribers[e].entries && !Object.keys(d.fieldSubscribers[e].entries).length;
				i && (delete d.fieldSubscribers[e], delete d.fields[e], t && (d.formState.errors = Ps(d.formState.errors, e, void 0) || {}), n && !u && (d.formState.values = Ps(d.formState.values, e, void 0, !0) || {})), c || (t ? j(void 0, function() {
					L(), M(void 0);
				}) : i && L());
			};
		},
		reset: function(e) {
			e === void 0 && (e = d.formState.initialValues), d.formState.submitting && (d.formState.resetWhileSubmitting = !0), d.formState.submitFailed = !1, d.formState.submitSucceeded = !1, delete d.formState.submitError, delete d.formState.submitErrors, delete d.formState.lastSubmittedValues, z.initialize(e || {});
		},
		resetFieldState: function(e) {
			var t = d.fields[e];
			d.fields[e] = Ue({}, t, {
				active: !1,
				lastFieldState: void 0,
				modified: !1,
				touched: !1,
				valid: !0,
				validating: !1,
				instanceId: t.instanceId ?? ++_,
				asyncValidationCount: t.asyncValidationCount ?? 0,
				asyncValidationKey: (t.asyncValidationKey ?? 0) + 1,
				visited: !1
			}), j(void 0, function() {
				M(void 0), L();
			});
		},
		restart: function(e) {
			e === void 0 && (e = d.formState.initialValues), z.batch(function() {
				for (var t in d.fields) {
					var n = d.fields[t];
					d.fields[t] = Ue({}, n, {
						active: !1,
						lastFieldState: void 0,
						modified: !1,
						modifiedSinceLastSubmit: !1,
						touched: !1,
						valid: !0,
						validating: !1,
						instanceId: n.instanceId ?? ++_,
						asyncValidationCount: n.asyncValidationCount ?? 0,
						asyncValidationKey: (n.asyncValidationKey ?? 0) + 1,
						visited: !1
					});
				}
				z.reset(e || {});
			});
		},
		resumeValidation: function() {
			p = !1, h = !1, m && j(void 0, function() {
				M(void 0), L();
			}), m = !1;
		},
		setConfig: function(e, i) {
			switch (e) {
				case "debug":
					t = typeof i == "function" ? i : void 0;
					break;
				case "destroyOnUnregister":
					n = i;
					break;
				case "ignoreUnregister":
					u = i;
					break;
				case "initialValues":
					z.initialize(i);
					break;
				case "keepDirtyOnReinitialize":
					r = i;
					break;
				case "mutators":
					a = i, i ? (Object.keys(D).forEach(function(e) {
						e in i || delete D[e];
					}), Object.keys(i).forEach(function(e) {
						D[e] = E(e);
					})) : Object.keys(D).forEach(function(e) {
						delete D[e];
					});
					break;
				case "onSubmit":
					o = i;
					break;
				case "validate":
					s = i, j(void 0, function() {
						M(void 0), L();
					});
					break;
				case "validateOnBlur":
					c = i;
					break;
				case "callbackScheduler":
					l = i;
					break;
				default: throw Error("Unrecognised option " + e);
			}
		},
		setCallbackScheduler: function(e) {
			l = e;
		},
		submit: function() {
			var e = d.formState;
			if (e.submitting || (e.lastSubmittedValues = Ue({}, e.values), ne())) return Promise.resolve(void 0);
			if (ee()) return N(), R(), d.formState.submitFailed = !0, L(), M(void 0), Promise.resolve(void 0);
			delete e.submitErrors, delete e.submitError;
			var t = Object.keys(v);
			if (t.length) return Promise.all(t.map(function(e) {
				return v[Number(e)];
			})).then(function() {
				return z.submit();
			}, function(e) {
				console.error(e);
			});
			var n, r = !1, i = function(t) {
				e.submitting = !1;
				var i = e.resetWhileSubmitting;
				return i && (e.resetWhileSubmitting = !1), t && $s(t) ? (e.submitFailed = !0, e.submitSucceeded = !1, e.submitErrors = t, e.submitError = t[Fs], N()) : (i || (e.submitFailed = !1, e.submitSucceeded = !0), re()), L(), M(void 0), r = !0, n && n(t), t;
			};
			e.submitting = !0, e.submitFailed = !1, e.submitSucceeded = !1, e.lastSubmittedValues = Ue({}, e.values), R();
			var a = o(e.values, z, i);
			if (!r) {
				if (a && qs(a)) return L(), M(void 0), a.then(function(e) {
					return i(e), e;
				}, function(e) {
					throw i(void 0), e;
				});
				if (o.length >= 3) return L(), M(void 0), new Promise(function(e) {
					n = e;
				});
				i(a);
			}
			return Promise.resolve(void 0);
		},
		subscribe: function(e, t) {
			if (!e) throw Error("No callback given.");
			if (!t) throw Error("No subscription provided. What values do you want to listen to?");
			var n = Ks(e), r = d.subscribers, i = r.index++;
			r.entries[i] = {
				subscriber: n,
				subscription: t,
				notified: !1
			};
			var a = te();
			return tc(n, t, a, a, Gs, !0), function() {
				delete r.entries[i];
			};
		},
		subscribeFieldState: function(e, t, n) {
			return z.registerField(e, t, n);
		},
		getFieldSnapshot: function(e) {
			var t = d.fields[e];
			if (t) return Ls(d.formState, t);
		},
		subscribeFormState: function(e, t) {
			return z.subscribe(e, t);
		},
		getFormSnapshot: function() {
			return te();
		}
	};
	return z;
}
//#endregion
//#region node_modules/react-final-form/dist/react-final-form.es.js
var ic = [
	"render",
	"children",
	"component"
];
function ac(e, t, n) {
	var r = e.render, i = e.children, a = e.component, o = xs(e, ic);
	if (a) {
		var s = {};
		Object.defineProperties(s, Object.getOwnPropertyDescriptors(t));
		var c = Object.getOwnPropertyDescriptors(o);
		for (var l in c) l in s || Object.defineProperty(s, l, c[l]);
		return s.children = i, s.render = r, /* @__PURE__ */ _.createElement(a, s);
	}
	if (r) {
		var u = {};
		Object.defineProperties(u, Object.getOwnPropertyDescriptors(t));
		var d = Object.getOwnPropertyDescriptors(o);
		for (var f in d) f in u || Object.defineProperty(u, f, d[f]);
		return i !== void 0 && (u.children = i), r(u);
	}
	if (typeof i != "function") throw Error("Must specify either a render prop, a render function as children, or a component prop to " + n);
	var p = {};
	Object.defineProperties(p, Object.getOwnPropertyDescriptors(t));
	var m = Object.getOwnPropertyDescriptors(o);
	for (var h in m) h in p || Object.defineProperty(p, h, m[h]);
	return i(p);
}
function oc(e, t, n) {
	n === void 0 && (n = function(e, t) {
		return e === t;
	});
	var r = _.useRef(e);
	_.useEffect(function() {
		n(e, r.current) || (t(), r.current = e);
	});
}
function sc(e) {
	var t = _.useRef(void 0);
	return t.current ||= e(), t.current;
}
var cc = function(e, t) {
	if (e === t) return !0;
	if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
	var n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (var i = Object.prototype.hasOwnProperty.bind(t), a = 0; a < n.length; a++) {
		var o = n[a];
		if (!i(o) || e[o] !== t[o]) return !1;
	}
	return !0;
}, lc = function(e) {
	return !!(e && typeof e.stopPropagation == "function");
}, uc = /* @__PURE__ */ _.createContext(void 0), dc = function(e, t, n) {
	n.forEach(function(n) {
		Object.defineProperty(e, n, {
			get: function() {
				return t[n];
			},
			enumerable: !0
		});
	});
}, fc = function(e, t) {
	return dc(e, t, [
		"active",
		"dirty",
		"dirtyFields",
		"dirtySinceLastSubmit",
		"dirtyFieldsSinceLastSubmit",
		"error",
		"errors",
		"hasSubmitErrors",
		"hasValidationErrors",
		"initialValues",
		"invalid",
		"modified",
		"modifiedSinceLastSubmit",
		"pristine",
		"submitError",
		"submitErrors",
		"submitFailed",
		"submitSucceeded",
		"submitting",
		"touched",
		"valid",
		"validating",
		"values",
		"visited"
	]);
}, pc = function(e, t) {
	return dc(e, t, [
		"active",
		"data",
		"dirty",
		"dirtySinceLastSubmit",
		"error",
		"initial",
		"invalid",
		"length",
		"modified",
		"modifiedSinceLastSubmit",
		"pristine",
		"submitError",
		"submitFailed",
		"submitSucceeded",
		"submitting",
		"touched",
		"valid",
		"validating",
		"visited"
	]);
}, mc = "7.0.1", hc = [
	"debug",
	"decorators",
	"destroyOnUnregister",
	"form",
	"initialValues",
	"initialValuesEqual",
	"keepDirtyOnReinitialize",
	"mutators",
	"onSubmit",
	"subscription",
	"validate",
	"validateOnBlur"
], gc = {
	"final-form": Js,
	"react-final-form": mc
}, _c = Us.reduce(function(e, t) {
	return e[t] = !0, e;
}, {});
function vc(e) {
	var t = e.debug, n = e.decorators, r = n === void 0 ? [] : n, i = e.destroyOnUnregister, a = e.form, o = e.initialValues, s = e.initialValuesEqual, c = e.keepDirtyOnReinitialize, l = e.mutators, u = e.onSubmit, d = e.subscription, f = d === void 0 ? _c : d, p = e.validate, m = e.validateOnBlur, h = xs(e, hc), g = {
		debug: t,
		destroyOnUnregister: i,
		initialValues: o,
		keepDirtyOnReinitialize: c,
		mutators: l,
		onSubmit: u,
		validate: p,
		validateOnBlur: m
	}, v = sc(function() {
		var e = a || rc(g);
		return e.pauseValidation(), e;
	}), y = _.useState(function() {
		return v.getState();
	}), b = y[0], x = y[1], S = _.useRef(b);
	S.current = b, _.useEffect(function() {
		v.isValidationPaused() && v.resumeValidation();
		var e = [v.subscribe(function(e) {
			x(function(t) {
				return cc(e, t) ? t : e;
			});
		}, f)].concat(r ? r.map(function(e) {
			return e(v);
		}) : []);
		return function() {
			v.pauseValidation(), e.reverse().forEach(function(e) {
				return e();
			});
		};
	}, []), oc(t, function() {
		v.setConfig("debug", t);
	}), oc(i, function() {
		v.destroyOnUnregister = !!i;
	}), oc(c, function() {
		v.setConfig("keepDirtyOnReinitialize", c);
	}), oc(o, function() {
		v.setConfig("initialValues", o);
	}, s || cc), oc(l, function() {
		v.setConfig("mutators", l);
	}), oc(u, function() {
		v.setConfig("onSubmit", u);
	}), oc(p, function() {
		v.setConfig("validate", p);
	}), oc(m, function() {
		v.setConfig("validateOnBlur", m);
	});
	var C = {
		form: Ue({}, v, { reset: function(e) {
			lc(e) ? v.reset() : v.reset(e);
		} }),
		handleSubmit: function(e) {
			return e && (typeof e.preventDefault == "function" && e.preventDefault(), typeof e.stopPropagation == "function" && e.stopPropagation()), v.submit();
		}
	};
	return fc(C, b), /* @__PURE__ */ _.createElement(uc.Provider, { value: v }, ac(Ue({}, h, { __versions: gc }), C, "ReactFinalForm"));
}
function yc(e) {
	var t = _.useContext(uc);
	if (!t) throw Error((e || "useForm") + " must be used inside of a <Form> component");
	return t;
}
function bc(e) {
	var t = e === void 0 ? {} : e, n = t.onChange, r = t.subscription, i = r === void 0 ? _c : r, a = yc("useFormState"), o = _.useRef(n);
	o.current = n;
	var s = _.useState(function() {
		return a.getState();
	}), c = s[0], l = s[1], u = _.useRef(!0), d = _.useRef(null), f = _.useRef(null);
	_.useEffect(function() {
		return a.subscribe(function(e) {
			var t = u.current;
			t && (u.current = !1), d.current = e, l(function(n) {
				return t || !cc(e, n) ? e : n;
			});
		}, i);
	}, []), _.useEffect(function() {
		var e = d.current;
		!e || !o.current || ((f.current === null || !cc(e, f.current)) && (o.current(e), f.current = e), d.current = null);
	}, [c]);
	var p = {};
	return fc(p, c), p;
}
var xc = !!(typeof window < "u" && window.navigator && window.navigator.product && window.navigator.product === "ReactNative"), Sc = function(e) {
	var t = [];
	if (e) for (var n = 0; n < e.length; n++) {
		var r = e[n];
		r.selected && t.push(r.value);
	}
	return t;
}, Cc = function(e, t, n, r) {
	if (!r && e.nativeEvent && e.nativeEvent.text !== void 0 || r && e.nativeEvent) return e.nativeEvent.text;
	var i = e.target, a = i.type, o = i.value, s = i.checked;
	switch (a) {
		case "checkbox": if (n !== void 0) {
			if (s) return Array.isArray(t) ? t.concat(n) : [n];
			if (!Array.isArray(t)) return t;
			var c = t.indexOf(n);
			return c < 0 ? t : t.slice(0, c).concat(t.slice(c + 1));
		} else return !!s;
		case "select-multiple": return Sc(e.target.options);
		default: return o;
	}
};
function wc(e) {
	var t = _.useRef(e);
	return _.useEffect(function() {
		t.current = e;
	}), t;
}
function Tc(e) {
	var t = _.useRef(e);
	return _.useEffect(function() {
		t.current = e;
	}), _.useCallback(function() {
		var e = [...arguments];
		return t.current.apply(null, e);
	}, []);
}
var Ec = Rs.reduce(function(e, t) {
	return e[t] = !0, e;
}, {}), Dc = function(e, t) {
	return e === void 0 ? "" : e;
}, Oc = function(e, t) {
	return e === "" ? void 0 : e;
};
function kc(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.afterSubmit, i = n.allowNull, a = n.component, o = n.data, s = n.defaultValue, c = n.format, l = c === void 0 ? Dc : c, u = n.formatOnBlur, d = n.initialValue, f = n.multiple, p = n.parse, m = p === void 0 ? Oc : p, h = n.subscription, g = h === void 0 ? Ec : h, v = n.type, y = n.validateFields, b = n.value, x = yc("useField"), S = wc(t), C = function(t, n) {
		return x.registerField(e, t, g, {
			afterSubmit: r,
			beforeSubmit: function() {
				var t = S.current, n = t.beforeSubmit, r = t.formatOnBlur, i = t.format, a = i === void 0 ? Dc : i;
				if (r) {
					var o = x.getFieldState(e);
					if (o) {
						var s = o.value, c = a(s, e);
						c !== s && x.change(e, c);
					}
				}
				return n && n();
			},
			data: o,
			defaultValue: s,
			getValidator: function() {
				return S.current.validate;
			},
			initialValue: d,
			isEqual: S.current.isEqual,
			silent: n,
			validateFields: y
		});
	}, w = _.useState(function() {
		var t = x.getFieldState(e);
		if (t) return i && t.initial === null && t.value !== null ? Ue({}, t, {
			value: null,
			initial: null
		}) : t;
		var n = x.getState(), r = n.initialValues ? ks(n.initialValues, e) : void 0, s = r === void 0 ? d : r;
		return (a === "select" || v === "select") && f && s === void 0 && (s = []), {
			active: !1,
			blur: function() {
				x.blur(e);
			},
			change: function(t) {
				x.change(e, t);
			},
			data: o || {},
			dirty: !1,
			dirtySinceLastSubmit: !1,
			error: void 0,
			focus: function() {
				x.focus(e);
			},
			initial: s,
			invalid: !1,
			length: void 0,
			modified: !1,
			modifiedSinceLastSubmit: !1,
			name: e,
			pristine: !0,
			submitError: void 0,
			submitFailed: !1,
			submitSucceeded: !1,
			submitting: !1,
			touched: !1,
			valid: !0,
			validating: !1,
			value: s,
			visited: !1
		};
	}), T = w[0], E = w[1];
	_.useEffect(function() {
		if (!x.getFieldState(e)) {
			var t = x.getState(), n = t.initialValues ? ks(t.initialValues, e) : void 0, r = n === void 0 ? d : n;
			r !== void 0 && x.change(e, r);
		}
		return C(function(e) {
			E(function(t) {
				return cc(e, t) ? t : e;
			});
		}, !1);
	}, [
		e,
		o,
		s,
		d
	]);
	var D = _.useRef(d);
	_.useEffect(function() {
		var t = S.current.isEqual || function(e, t) {
			return e === t;
		}, n = D.current;
		if (D.current = d, !t(n, d) && d !== void 0) {
			var r = x.getState();
			if (!t(d, r.initialValues ? ks(r.initialValues, e) : void 0)) {
				var i = r.values ? ks(r.values, e) : void 0;
				if (x.getFieldState(e) && t(i, d)) {
					var a = x.isValidationPaused();
					a || x.pauseValidation();
					try {
						x.registerField(e, function() {}, {}, {
							initialValue: d,
							isEqual: S.current.isEqual
						})();
					} finally {
						a || x.resumeValidation();
					}
				}
			}
		}
	}, [
		d,
		e,
		x
	]);
	var O = {};
	pc(O, T);
	var k = function() {
		var t = T.name === e ? T.value : ks(x.getState().values ?? {}, e);
		return t === null && !i && (t = ""), u ? a === "input" && (t = Dc(t)) : i && t === null || (t = l(t, e)), (a === "select" || v === "select") && f ? Array.isArray(t) ? t : [] : (v === "checkbox" || v === "radio") && b !== void 0 ? b : t;
	}, A = function() {
		var t = T.name === e ? T.value : ks(x.getState().values ?? {}, e);
		if (v === "checkbox") return t = m(t, e), b === void 0 ? !!t : !!(Array.isArray(t) && ~t.indexOf(b));
		if (v === "radio") return m(t, e) === b;
	}, j = {
		name: e,
		onBlur: Tc(function(t) {
			if (x.blur(e), u) {
				var n = x.getFieldState(e);
				n && x.change(e, l(n.value, e));
			}
		}),
		onChange: Tc(function(t) {
			var n = x.getFieldState(e)?.value ?? T.value, r = t && t.target ? Cc(t, n, b, xc) : t;
			x.change(e, m(r, e));
		}),
		onFocus: Tc(function(t) {
			return x.focus(e);
		}),
		get value() {
			return k();
		},
		get checked() {
			return A();
		}
	};
	return f && (j.multiple = f), v !== void 0 && (j.type = v), {
		input: j,
		meta: O
	};
}
var Ac = [
	"afterSubmit",
	"allowNull",
	"beforeSubmit",
	"children",
	"component",
	"data",
	"defaultValue",
	"format",
	"formatOnBlur",
	"initialValue",
	"input",
	"isEqual",
	"multiple",
	"name",
	"parse",
	"subscription",
	"type",
	"validate",
	"validateFields",
	"value"
], jc = ["name"];
function Mc(e, t) {
	var n = e.afterSubmit, r = e.allowNull, i = e.beforeSubmit, a = e.children, o = e.component, s = e.data, c = e.defaultValue, l = e.format, u = e.formatOnBlur, d = e.initialValue, f = e.input, p = e.isEqual, m = e.multiple, h = e.name, g = e.parse, v = e.subscription, y = e.type, b = e.validate, x = e.validateFields, S = e.value, C = xs(e, Ac), w = kc(h, {
		afterSubmit: n,
		allowNull: r,
		beforeSubmit: i,
		component: o,
		data: s,
		defaultValue: c,
		format: l,
		formatOnBlur: u,
		initialValue: d,
		isEqual: p,
		multiple: m,
		parse: g,
		subscription: v,
		type: y,
		validate: b,
		validateFields: x,
		value: S
	}), T = f ? Ue({}, w, { input: Ue({}, w.input, f) }) : w;
	if (typeof a == "function") return a(Ue({}, T, C));
	if (typeof o == "string") {
		var E = T.input, D = E.name, O = xs(E, jc);
		return o === "select" && m && !Array.isArray(O.value) && (O.value = []), /* @__PURE__ */ _.createElement(o, Ue({ name: D }, O, {
			children: a,
			ref: t
		}, C));
	}
	if (!h) throw Error("prop name cannot be undefined in <Field> component");
	return ac(Ue({
		children: a,
		component: o
	}, C, T), {}, "Field(" + h + ")");
}
var Nc = /* @__PURE__ */ _.forwardRef(Mc), Pc = Vt;
//#endregion
//#region node_modules/@mui/utils/createChainedFunction/createChainedFunction.mjs
function Fc(...e) {
	return e.reduce((e, t) => t == null ? e : function(...n) {
		e.apply(this, n), t.apply(this, n);
	}, () => {});
}
//#endregion
//#region node_modules/@mui/material/SvgIcon/svgIconClasses.mjs
function Ic(e) {
	return q("MuiSvgIcon", e);
}
qr("MuiSvgIcon", [
	"root",
	"colorPrimary",
	"colorSecondary",
	"colorAction",
	"colorError",
	"colorDisabled",
	"fontSizeInherit",
	"fontSizeSmall",
	"fontSizeMedium",
	"fontSizeLarge"
]);
//#endregion
//#region node_modules/@mui/material/SvgIcon/SvgIcon.mjs
var Lc = (e) => {
	let { color: t, fontSize: n, classes: r } = e;
	return At({ root: [
		"root",
		t !== "inherit" && `color${Pc(t)}`,
		`fontSize${Pc(n)}`
	] }, Ic, r);
}, Rc = X("svg", {
	name: "MuiSvgIcon",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.root,
			n.color !== "inherit" && t[`color${Pc(n.color)}`],
			t[`fontSize${Pc(n.fontSize)}`]
		];
	}
})(Z(({ theme: e }) => ({
	userSelect: "none",
	width: "1em",
	height: "1em",
	display: "inline-block",
	flexShrink: 0,
	transition: e.transitions?.create?.("fill", { duration: (e.vars ?? e).transitions?.duration?.shorter }),
	variants: [
		{
			props: (e) => !e.hasSvgAsChild,
			style: { fill: "currentColor" }
		},
		{
			props: { fontSize: "inherit" },
			style: { fontSize: "inherit" }
		},
		{
			props: { fontSize: "small" },
			style: { fontSize: e.typography?.pxToRem?.(20) || "1.25rem" }
		},
		{
			props: { fontSize: "medium" },
			style: { fontSize: e.typography?.pxToRem?.(24) || "1.5rem" }
		},
		{
			props: { fontSize: "large" },
			style: { fontSize: e.typography?.pxToRem?.(35) || "2.1875rem" }
		},
		...Object.entries((e.vars ?? e).palette).filter(([, e]) => e && e.main).map(([t]) => ({
			props: { color: t },
			style: { color: (e.vars ?? e).palette?.[t]?.main }
		})),
		{
			props: { color: "action" },
			style: { color: (e.vars ?? e).palette?.action?.active }
		},
		{
			props: { color: "disabled" },
			style: { color: (e.vars ?? e).palette?.action?.disabled }
		},
		{
			props: { color: "inherit" },
			style: { color: void 0 }
		}
	]
}))), zc = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let n = os({
		props: e,
		name: "MuiSvgIcon"
	}), { children: r, className: i, color: a = "inherit", component: o = "svg", fontSize: s = "medium", htmlColor: c, inheritViewBox: l = !1, titleAccess: u, viewBox: d = "0 0 24 24", ...f } = n, p = /* @__PURE__ */ _.isValidElement(r) && r.type === "svg", m = {
		...n,
		color: a,
		component: o,
		fontSize: s,
		instanceFontSize: e.fontSize,
		inheritViewBox: l,
		viewBox: d,
		hasSvgAsChild: p
	}, h = {};
	return l || (h.viewBox = d), /* @__PURE__ */ (0, K.jsxs)(Rc, {
		as: o,
		className: G(Lc(m).root, i),
		focusable: "false",
		color: c,
		"aria-hidden": u ? void 0 : !0,
		role: u ? "img" : void 0,
		ref: t,
		...h,
		...f,
		...p && r.props,
		ownerState: m,
		children: [p ? r.props.children : r, u ? /* @__PURE__ */ (0, K.jsx)("title", { children: u }) : null]
	});
});
zc.muiName = "SvgIcon";
//#endregion
//#region node_modules/@mui/material/SvgIcon/createSvgIcon.mjs
function Bc(e, t) {
	function n(t, n) {
		return /* @__PURE__ */ (0, K.jsx)(zc, {
			"data-testid": void 0,
			ref: n,
			...t,
			children: e
		});
	}
	return n.muiName = zc.muiName, /* @__PURE__ */ _.memo(/* @__PURE__ */ _.forwardRef(n));
}
//#endregion
//#region node_modules/@mui/utils/debounce/debounce.mjs
function Vc(e, t = 166) {
	let n;
	function r(...r) {
		clearTimeout(n), n = setTimeout(() => {
			e.apply(this, r);
		}, t);
	}
	return r.clear = () => {
		clearTimeout(n);
	}, r;
}
//#endregion
//#region node_modules/@mui/material/utils/debounce.mjs
var Hc = Vc, Uc = ha;
//#endregion
//#region node_modules/@mui/utils/getActiveElement/getActiveElement.mjs
function Wc(e) {
	let t = e.activeElement;
	for (; t?.shadowRoot?.activeElement != null;) t = t.shadowRoot.activeElement;
	return t;
}
//#endregion
//#region node_modules/@mui/material/utils/getActiveElement.mjs
var Gc = Wc;
//#endregion
//#region node_modules/@mui/utils/ownerDocument/ownerDocument.mjs
function Kc(e) {
	return e && e.ownerDocument || document;
}
//#endregion
//#region node_modules/@mui/material/utils/ownerDocument.mjs
var qc = Kc;
//#endregion
//#region node_modules/@mui/utils/ownerWindow/ownerWindow.mjs
function Jc(e) {
	return Kc(e).defaultView || window;
}
//#endregion
//#region node_modules/@mui/material/utils/ownerWindow.mjs
var Yc = Jc;
//#endregion
//#region node_modules/@mui/utils/setRef/setRef.mjs
function Xc(e, t) {
	typeof e == "function" ? e(t) : e && (e.current = t);
}
//#endregion
//#region node_modules/@mui/material/utils/useEnhancedEffect.mjs
var Zc = li, Qc = Hi;
//#endregion
//#region node_modules/@mui/utils/useControlled/useControlled.mjs
function $c(e) {
	let { controlled: t, default: n, name: r, state: i = "value" } = e, { current: a } = _.useRef(t !== void 0), [o, s] = _.useState(n);
	return [a ? t : o, _.useCallback((e) => {
		a || s(e);
	}, [])];
}
//#endregion
//#region node_modules/@mui/material/utils/useControlled.mjs
var el = $c;
//#endregion
//#region node_modules/@mui/utils/useEventCallback/useEventCallback.mjs
function tl(e) {
	let t = _.useRef(e);
	return li(() => {
		t.current = e;
	}), _.useRef((...e) => (0, t.current)(...e)).current;
}
//#endregion
//#region node_modules/@mui/material/utils/useEventCallback.mjs
var nl = tl;
//#endregion
//#region node_modules/@mui/utils/useForkRef/useForkRef.mjs
function rl(...e) {
	let t = _.useRef(void 0), n = _.useCallback((t) => {
		let n = e.map((e) => {
			if (e == null) return null;
			if (typeof e == "function") {
				let n = e, r = n(t);
				return typeof r == "function" ? r : () => {
					n(null);
				};
			}
			return e.current = t, () => {
				e.current = null;
			};
		});
		return () => {
			n.forEach((e) => e?.());
		};
	}, e);
	return _.useMemo(() => e.every((e) => e == null) ? null : (e) => {
		t.current &&= (t.current(), void 0), e != null && (t.current = n(e));
	}, e);
}
//#endregion
//#region node_modules/@mui/material/utils/useForkRef.mjs
var il = rl;
//#endregion
//#region node_modules/@mui/utils/isEventHandler/isEventHandler.mjs
function al(e, t) {
	let n = e.charCodeAt(2);
	return e[0] === "o" && e[1] === "n" && n >= 65 && n <= 90 && typeof t == "function";
}
//#endregion
//#region node_modules/@mui/material/utils/mergeSlotProps.mjs
function ol(e, t) {
	if (!e) return t;
	function n(e, t) {
		let n = {};
		return Object.keys(t).forEach((r) => {
			al(r, t[r]) && typeof e[r] == "function" && (n[r] = (...n) => {
				e[r](...n), t[r](...n);
			});
		}), n;
	}
	if (typeof e == "function" || typeof t == "function") return (r) => {
		let i = typeof t == "function" ? t(r) : t, a = typeof e == "function" ? e({
			...r,
			...i
		}) : e, o = G(r?.className, i?.className, a?.className), s = n(a, i);
		return {
			...i,
			...a,
			...s,
			...!!o && { className: o },
			...i?.style && a?.style && { style: {
				...i.style,
				...a.style
			} },
			...i?.sx && a?.sx && { sx: [...Array.isArray(i.sx) ? i.sx : [i.sx], ...Array.isArray(a.sx) ? a.sx : [a.sx]] }
		};
	};
	let r = t, i = n(e, r), a = G(r?.className, e?.className);
	return {
		...t,
		...e,
		...i,
		...!!a && { className: a },
		...r?.style && e?.style && { style: {
			...r.style,
			...e.style
		} },
		...r?.sx && e?.sx && { sx: [...Array.isArray(r.sx) ? r.sx : [r.sx], ...Array.isArray(e.sx) ? e.sx : [e.sx]] }
	};
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function sl(e, t) {
	return sl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, sl(e, t);
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function cl(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, sl(e, t);
}
//#endregion
//#region node_modules/react-transition-group/esm/config.js
var ll = { disabled: !1 }, ul = _.createContext(null), dl = function(e) {
	return e.scrollTop;
}, fl = /* @__PURE__ */ c(m()), pl = "unmounted", ml = "exited", hl = "entering", gl = "entered", _l = "exiting", vl = /* @__PURE__ */ function(e) {
	cl(t, e);
	function t(t, n) {
		var r = e.call(this, t, n) || this, i = n, a = i && !i.isMounting ? t.enter : t.appear, o;
		return r.appearStatus = null, t.in ? a ? (o = ml, r.appearStatus = hl) : o = gl : o = t.unmountOnExit || t.mountOnEnter ? pl : ml, r.state = { status: o }, r.nextCallback = null, r;
	}
	t.getDerivedStateFromProps = function(e, t) {
		return e.in && t.status === "unmounted" ? { status: ml } : null;
	};
	var n = t.prototype;
	return n.componentDidMount = function() {
		this.updateStatus(!0, this.appearStatus);
	}, n.componentDidUpdate = function(e) {
		var t = null;
		if (e !== this.props) {
			var n = this.state.status;
			this.props.in ? n !== "entering" && n !== "entered" && (t = hl) : (n === "entering" || n === "entered") && (t = _l);
		}
		this.updateStatus(!1, t);
	}, n.componentWillUnmount = function() {
		this.cancelNextCallback();
	}, n.getTimeouts = function() {
		var e = this.props.timeout, t = n = r = e, n, r;
		return e != null && typeof e != "number" && (t = e.exit, n = e.enter, r = e.appear === void 0 ? n : e.appear), {
			exit: t,
			enter: n,
			appear: r
		};
	}, n.updateStatus = function(e, t) {
		if (e === void 0 && (e = !1), t !== null) if (this.cancelNextCallback(), t === "entering") {
			if (this.props.unmountOnExit || this.props.mountOnEnter) {
				var n = this.props.nodeRef ? this.props.nodeRef.current : fl.default.findDOMNode(this);
				n && dl(n);
			}
			this.performEnter(e);
		} else this.performExit();
		else this.props.unmountOnExit && this.state.status === "exited" && this.setState({ status: pl });
	}, n.performEnter = function(e) {
		var t = this, n = this.props.enter, r = this.context ? this.context.isMounting : e, i = this.props.nodeRef ? [r] : [fl.default.findDOMNode(this), r], a = i[0], o = i[1], s = this.getTimeouts(), c = r ? s.appear : s.enter;
		if (!e && !n || ll.disabled) {
			this.safeSetState({ status: gl }, function() {
				t.props.onEntered(a);
			});
			return;
		}
		this.props.onEnter(a, o), this.safeSetState({ status: hl }, function() {
			t.props.onEntering(a, o), t.onTransitionEnd(c, function() {
				t.safeSetState({ status: gl }, function() {
					t.props.onEntered(a, o);
				});
			});
		});
	}, n.performExit = function() {
		var e = this, t = this.props.exit, n = this.getTimeouts(), r = this.props.nodeRef ? void 0 : fl.default.findDOMNode(this);
		if (!t || ll.disabled) {
			this.safeSetState({ status: ml }, function() {
				e.props.onExited(r);
			});
			return;
		}
		this.props.onExit(r), this.safeSetState({ status: _l }, function() {
			e.props.onExiting(r), e.onTransitionEnd(n.exit, function() {
				e.safeSetState({ status: ml }, function() {
					e.props.onExited(r);
				});
			});
		});
	}, n.cancelNextCallback = function() {
		this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
	}, n.safeSetState = function(e, t) {
		t = this.setNextCallback(t), this.setState(e, t);
	}, n.setNextCallback = function(e) {
		var t = this, n = !0;
		return this.nextCallback = function(r) {
			n && (n = !1, t.nextCallback = null, e(r));
		}, this.nextCallback.cancel = function() {
			n = !1;
		}, this.nextCallback;
	}, n.onTransitionEnd = function(e, t) {
		this.setNextCallback(t);
		var n = this.props.nodeRef ? this.props.nodeRef.current : fl.default.findDOMNode(this), r = e == null && !this.props.addEndListener;
		if (!n || r) {
			setTimeout(this.nextCallback, 0);
			return;
		}
		if (this.props.addEndListener) {
			var i = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback], a = i[0], o = i[1];
			this.props.addEndListener(a, o);
		}
		e != null && setTimeout(this.nextCallback, e);
	}, n.render = function() {
		var e = this.state.status;
		if (e === "unmounted") return null;
		var t = this.props, n = t.children;
		t.in, t.mountOnEnter, t.unmountOnExit, t.appear, t.enter, t.exit, t.timeout, t.addEndListener, t.onEnter, t.onEntering, t.onEntered, t.onExit, t.onExiting, t.onExited, t.nodeRef;
		var r = xs(t, [
			"children",
			"in",
			"mountOnEnter",
			"unmountOnExit",
			"appear",
			"enter",
			"exit",
			"timeout",
			"addEndListener",
			"onEnter",
			"onEntering",
			"onEntered",
			"onExit",
			"onExiting",
			"onExited",
			"nodeRef"
		]);
		return /* @__PURE__ */ _.createElement(ul.Provider, { value: null }, typeof n == "function" ? n(e, r) : _.cloneElement(_.Children.only(n), r));
	}, t;
}(_.Component);
vl.contextType = ul, vl.propTypes = {};
function yl() {}
vl.defaultProps = {
	in: !1,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1,
	enter: !0,
	exit: !0,
	onEnter: yl,
	onEntering: yl,
	onEntered: yl,
	onExit: yl,
	onExiting: yl,
	onExited: yl
}, vl.UNMOUNTED = pl, vl.EXITED = ml, vl.ENTERING = hl, vl.ENTERED = gl, vl.EXITING = _l;
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function bl(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
//#endregion
//#region node_modules/react-transition-group/esm/utils/ChildMapping.js
function xl(e, t) {
	var n = function(e) {
		return t && (0, _.isValidElement)(e) ? t(e) : e;
	}, r = Object.create(null);
	return e && _.Children.map(e, function(e) {
		return e;
	}).forEach(function(e) {
		r[e.key] = n(e);
	}), r;
}
function Sl(e, t) {
	e ||= {}, t ||= {};
	function n(n) {
		return n in t ? t[n] : e[n];
	}
	var r = Object.create(null), i = [];
	for (var a in e) a in t ? i.length && (r[a] = i, i = []) : i.push(a);
	var o, s = {};
	for (var c in t) {
		if (r[c]) for (o = 0; o < r[c].length; o++) {
			var l = r[c][o];
			s[r[c][o]] = n(l);
		}
		s[c] = n(c);
	}
	for (o = 0; o < i.length; o++) s[i[o]] = n(i[o]);
	return s;
}
function Cl(e, t, n) {
	return n[t] == null ? e.props[t] : n[t];
}
function wl(e, t) {
	return xl(e.children, function(n) {
		return (0, _.cloneElement)(n, {
			onExited: t.bind(null, n),
			in: !0,
			appear: Cl(n, "appear", e),
			enter: Cl(n, "enter", e),
			exit: Cl(n, "exit", e)
		});
	});
}
function Tl(e, t, n) {
	var r = xl(e.children), i = Sl(t, r);
	return Object.keys(i).forEach(function(a) {
		var o = i[a];
		if ((0, _.isValidElement)(o)) {
			var s = a in t, c = a in r, l = t[a], u = (0, _.isValidElement)(l) && !l.props.in;
			c && (!s || u) ? i[a] = (0, _.cloneElement)(o, {
				onExited: n.bind(null, o),
				in: !0,
				exit: Cl(o, "exit", e),
				enter: Cl(o, "enter", e)
			}) : !c && s && !u ? i[a] = (0, _.cloneElement)(o, { in: !1 }) : c && s && (0, _.isValidElement)(l) && (i[a] = (0, _.cloneElement)(o, {
				onExited: n.bind(null, o),
				in: l.props.in,
				exit: Cl(o, "exit", e),
				enter: Cl(o, "enter", e)
			}));
		}
	}), i;
}
//#endregion
//#region node_modules/react-transition-group/esm/TransitionGroup.js
var El = Object.values || function(e) {
	return Object.keys(e).map(function(t) {
		return e[t];
	});
}, Dl = {
	component: "div",
	childFactory: function(e) {
		return e;
	}
}, Ol = /* @__PURE__ */ function(e) {
	cl(t, e);
	function t(t, n) {
		var r = e.call(this, t, n) || this;
		return r.state = {
			contextValue: { isMounting: !0 },
			handleExited: r.handleExited.bind(bl(r)),
			firstRender: !0
		}, r;
	}
	var n = t.prototype;
	return n.componentDidMount = function() {
		this.mounted = !0, this.setState({ contextValue: { isMounting: !1 } });
	}, n.componentWillUnmount = function() {
		this.mounted = !1;
	}, t.getDerivedStateFromProps = function(e, t) {
		var n = t.children, r = t.handleExited;
		return {
			children: t.firstRender ? wl(e, r) : Tl(e, n, r),
			firstRender: !1
		};
	}, n.handleExited = function(e, t) {
		var n = xl(this.props.children);
		e.key in n || (e.props.onExited && e.props.onExited(t), this.mounted && this.setState(function(t) {
			var n = Ue({}, t.children);
			return delete n[e.key], { children: n };
		}));
	}, n.render = function() {
		var e = this.props, t = e.component, n = e.childFactory, r = xs(e, ["component", "childFactory"]), i = this.state.contextValue, a = El(this.state.children).map(n);
		return delete r.appear, delete r.enter, delete r.exit, t === null ? /* @__PURE__ */ _.createElement(ul.Provider, { value: i }, a) : /* @__PURE__ */ _.createElement(ul.Provider, { value: i }, /* @__PURE__ */ _.createElement(t, r, a));
	}, t;
}(_.Component);
Ol.propTypes = {}, Ol.defaultProps = Dl;
//#endregion
//#region node_modules/@mui/utils/useLazyRef/useLazyRef.mjs
var kl = {};
function Al(e, t) {
	let n = _.useRef(kl);
	return n.current === kl && (n.current = e(t)), n;
}
//#endregion
//#region node_modules/@mui/utils/useOnMount/useOnMount.mjs
var jl = [];
function Ml(e) {
	_.useEffect(e, jl);
}
//#endregion
//#region node_modules/@mui/utils/useTimeout/useTimeout.mjs
var Nl = class e {
	static create() {
		return new e();
	}
	currentId = null;
	start(e, t) {
		this.clear(), this.currentId = setTimeout(() => {
			this.currentId = null, t();
		}, e);
	}
	clear = () => {
		this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
	};
	disposeEffect = () => this.clear;
};
function Pl() {
	let e = Al(Nl.create).current;
	return Ml(e.disposeEffect), e;
}
//#endregion
//#region node_modules/@mui/material/transitions/utils.mjs
var Fl = (e) => e.scrollTop;
function Q(e, t) {
	return (n) => {
		if (t) {
			let r = e.current;
			n === void 0 ? t(r) : t(r, n);
		}
	};
}
function Il(e, t, n, r, i, a) {
	let o = e === "exited" && !t ? r : n[e] || n.exited;
	return i || a ? {
		...o,
		...i,
		...a
	} : o;
}
function Ll(e, t) {
	let { timeout: n, easing: r, style: i = {} } = e;
	return {
		duration: i.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
		easing: i.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
		delay: i.transitionDelay
	};
}
//#endregion
//#region node_modules/@mui/utils/isHostComponent/isHostComponent.mjs
function Rl(e) {
	return typeof e == "string";
}
//#endregion
//#region node_modules/@mui/utils/appendOwnerState/appendOwnerState.mjs
function zl(e, t, n) {
	return e === void 0 || Rl(e) ? t : {
		...t,
		ownerState: {
			...t.ownerState,
			...n
		}
	};
}
//#endregion
//#region node_modules/@mui/utils/resolveComponentProps/resolveComponentProps.mjs
function Bl(e, t, n) {
	return typeof e == "function" ? e(t, n) : e;
}
//#endregion
//#region node_modules/@mui/utils/extractEventHandlers/extractEventHandlers.mjs
function Vl(e) {
	if (e === void 0) return {};
	let t = {};
	for (let n of Object.keys(e)) al(n, e[n]) && (t[n] = e[n]);
	return t;
}
//#endregion
//#region node_modules/@mui/utils/omitEventHandlers/omitEventHandlers.mjs
function Hl(e) {
	if (e === void 0) return {};
	let t = {};
	return Object.keys(e).filter((t) => !(t.match(/^on[A-Z]/) && typeof e[t] == "function")).forEach((n) => {
		t[n] = e[n];
	}), t;
}
//#endregion
//#region node_modules/@mui/utils/mergeSlotProps/mergeSlotProps.mjs
function Ul(e) {
	let { getSlotProps: t, additionalProps: n, externalSlotProps: r, externalForwardedProps: i, className: a } = e;
	if (!t) {
		let e = G(n?.className, a, i?.className, r?.className), t = {
			...n?.style,
			...i?.style,
			...r?.style
		}, o = {
			...n,
			...i,
			...r
		};
		return e.length > 0 && (o.className = e), Object.keys(t).length > 0 && (o.style = t), {
			props: o,
			internalRef: void 0
		};
	}
	let o = Vl({
		...i,
		...r
	}), s = Hl(r), c = Hl(i), l = t(o), u = G(l?.className, n?.className, a, i?.className, r?.className), d = {
		...l?.style,
		...n?.style,
		...i?.style,
		...r?.style
	}, f = {
		...l,
		...n,
		...c,
		...s
	};
	return u.length > 0 && (f.className = u), Object.keys(d).length > 0 && (f.style = d), {
		props: f,
		internalRef: l.ref
	};
}
//#endregion
//#region node_modules/@mui/material/utils/useSlot.mjs
function Wl(e, t) {
	let { className: n, elementType: r, ownerState: i, externalForwardedProps: a, internalForwardedProps: o, shouldForwardComponentProp: s = !1, ...c } = t, { component: l, slots: u = { [e]: void 0 }, slotProps: d = { [e]: void 0 }, ...f } = a, p = u[e] || r, m = Bl(d[e], i), { props: { component: h, ...g }, internalRef: _ } = Ul({
		className: n,
		...c,
		externalForwardedProps: e === "root" ? f : void 0,
		externalSlotProps: m
	}), v = rl(_, m?.ref, t.ref), y = e === "root" ? h || l : h;
	return [p, zl(p, {
		...e === "root" && !l && !u[e] && o,
		...e !== "root" && !u[e] && o,
		...g,
		...y && !s && { as: y },
		...y && s && { component: y },
		ref: v
	}, i)];
}
//#endregion
//#region node_modules/@mui/material/Collapse/collapseClasses.mjs
function Gl(e) {
	return q("MuiCollapse", e);
}
qr("MuiCollapse", [
	"root",
	"horizontal",
	"vertical",
	"entered",
	"hidden",
	"wrapper",
	"wrapperInner"
]);
//#endregion
//#region node_modules/@mui/material/Collapse/Collapse.mjs
var Kl = (e) => {
	let { orientation: t, classes: n } = e;
	return At({
		root: ["root", t],
		entered: ["entered"],
		hidden: ["hidden"],
		wrapper: ["wrapper", t],
		wrapperInner: ["wrapperInner", t]
	}, Gl, n);
}, ql = X("div", {
	name: "MuiCollapse",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.root,
			t[n.orientation],
			n.state === "entered" && t.entered,
			n.state === "exited" && !n.in && n.collapsedSize === "0px" && t.hidden
		];
	}
})(Z(({ theme: e }) => ({
	height: 0,
	overflow: "hidden",
	transition: e.transitions.create("height"),
	variants: [
		{
			props: { orientation: "horizontal" },
			style: {
				height: "auto",
				width: 0,
				transition: e.transitions.create("width")
			}
		},
		{
			props: { state: "entered" },
			style: {
				height: "auto",
				overflow: "visible"
			}
		},
		{
			props: {
				state: "entered",
				orientation: "horizontal"
			},
			style: { width: "auto" }
		},
		{
			props: ({ ownerState: e }) => e.state === "exited" && !e.in && e.collapsedSize === "0px",
			style: { visibility: "hidden" }
		}
	]
}))), Jl = X("div", {
	name: "MuiCollapse",
	slot: "Wrapper"
})({
	display: "flex",
	width: "100%",
	variants: [{
		props: { orientation: "horizontal" },
		style: {
			width: "auto",
			height: "100%"
		}
	}]
}), Yl = X("div", {
	name: "MuiCollapse",
	slot: "WrapperInner"
})({
	width: "100%",
	variants: [{
		props: { orientation: "horizontal" },
		style: {
			width: "auto",
			height: "100%"
		}
	}]
}), Xl = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let n = os({
		props: e,
		name: "MuiCollapse"
	}), { addEndListener: r, children: i, className: a, collapsedSize: o = "0px", component: s, easing: c, in: l, onEnter: u, onEntered: d, onEntering: f, onExit: p, onExited: m, onExiting: h, orientation: g = "vertical", slots: v = {}, slotProps: y = {}, style: b, timeout: x = wo.standard, TransitionComponent: S = vl, ...C } = n, w = {
		...n,
		orientation: g,
		collapsedSize: o
	}, T = Kl(w), E = ts(), D = Pl(), O = _.useRef(null), k = _.useRef(), A = typeof o == "number" ? `${o}px` : o, j = g === "horizontal", M = j ? "width" : "height", N = _.useRef(null), ee = il(t, N), te = () => O.current ? O.current[j ? "clientWidth" : "clientHeight"] : 0, P = Q(N, (e, t) => {
		O.current && j && (O.current.style.position = "absolute"), e.style[M] = A, u && u(e, t);
	}), F = Q(N, (e, t) => {
		let n = te();
		O.current && j && (O.current.style.position = "");
		let { duration: r, easing: i } = Ll({
			style: b,
			timeout: x,
			easing: c
		}, { mode: "enter" });
		if (x === "auto") {
			let t = E.transitions.getAutoHeightDuration(n);
			e.style.transitionDuration = `${t}ms`, k.current = t;
		} else e.style.transitionDuration = typeof r == "string" ? r : `${r}ms`;
		e.style[M] = `${n}px`, e.style.transitionTimingFunction = i, f && f(e, t);
	}), I = Q(N, (e, t) => {
		e.style[M] = "auto", d && d(e, t);
	}), L = Q(N, (e) => {
		e.style[M] = `${te()}px`, p && p(e);
	}), ne = Q(N, m), re = Q(N, (e) => {
		let t = te(), { duration: n, easing: r } = Ll({
			style: b,
			timeout: x,
			easing: c
		}, { mode: "exit" });
		if (x === "auto") {
			let n = E.transitions.getAutoHeightDuration(t);
			e.style.transitionDuration = `${n}ms`, k.current = n;
		} else e.style.transitionDuration = typeof n == "string" ? n : `${n}ms`;
		e.style[M] = A, e.style.transitionTimingFunction = r, h && h(e);
	}), R = (e) => {
		x === "auto" && D.start(k.current || 0, e), r && r(N.current, e);
	}, z = {
		slots: v,
		slotProps: y,
		component: s
	}, [ie, ae] = Wl("root", {
		ref: ee,
		className: G(T.root, a),
		elementType: ql,
		externalForwardedProps: z,
		ownerState: w,
		additionalProps: { style: {
			[j ? "minWidth" : "minHeight"]: A,
			...b
		} }
	}), [B, oe] = Wl("wrapper", {
		ref: O,
		className: T.wrapper,
		elementType: Jl,
		externalForwardedProps: z,
		ownerState: w
	}), [se, V] = Wl("wrapperInner", {
		className: T.wrapperInner,
		elementType: Yl,
		externalForwardedProps: z,
		ownerState: w
	});
	return /* @__PURE__ */ (0, K.jsx)(S, {
		in: l,
		onEnter: P,
		onEntered: I,
		onEntering: F,
		onExit: L,
		onExited: ne,
		onExiting: re,
		addEndListener: R,
		nodeRef: N,
		timeout: x === "auto" ? null : x,
		...C,
		children: (e, { ownerState: t, ...n }) => {
			let r = {
				...w,
				state: e
			};
			return /* @__PURE__ */ (0, K.jsx)(ie, {
				...ae,
				className: G(ae.className, {
					entered: T.entered,
					exited: !l && A === "0px" && T.hidden
				}[e]),
				ownerState: r,
				...n,
				children: /* @__PURE__ */ (0, K.jsx)(B, {
					...oe,
					ownerState: r,
					children: /* @__PURE__ */ (0, K.jsx)(se, {
						...V,
						ownerState: r,
						children: i
					})
				})
			});
		}
	});
});
Xl && (Xl.muiSupportAuto = !0);
//#endregion
//#region node_modules/@mui/material/Paper/paperClasses.mjs
function Zl(e) {
	return q("MuiPaper", e);
}
qr("MuiPaper", /* @__PURE__ */ "root.rounded.outlined.elevation.elevation0.elevation1.elevation2.elevation3.elevation4.elevation5.elevation6.elevation7.elevation8.elevation9.elevation10.elevation11.elevation12.elevation13.elevation14.elevation15.elevation16.elevation17.elevation18.elevation19.elevation20.elevation21.elevation22.elevation23.elevation24".split("."));
//#endregion
//#region node_modules/@mui/material/Paper/Paper.mjs
var Ql = (e) => {
	let { square: t, elevation: n, variant: r, classes: i } = e;
	return At({ root: [
		"root",
		r,
		!t && "rounded",
		r === "elevation" && `elevation${n}`
	] }, Zl, i);
}, $l = X("div", {
	name: "MuiPaper",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.root,
			t[n.variant],
			!n.square && t.rounded,
			n.variant === "elevation" && t[`elevation${n.elevation}`]
		];
	}
})(Z(({ theme: e }) => ({
	backgroundColor: (e.vars || e).palette.background.paper,
	color: (e.vars || e).palette.text.primary,
	transition: e.transitions.create("box-shadow"),
	variants: [
		{
			props: ({ ownerState: e }) => !e.square,
			style: { borderRadius: e.shape.borderRadius }
		},
		{
			props: { variant: "outlined" },
			style: { border: `1px solid ${(e.vars || e).palette.divider}` }
		},
		{
			props: { variant: "elevation" },
			style: {
				boxShadow: "var(--Paper-shadow)",
				backgroundImage: "var(--Paper-overlay)"
			}
		}
	]
}))), eu = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let n = os({
		props: e,
		name: "MuiPaper"
	}), r = ts(), { className: i, component: a = "div", elevation: o = 1, square: s = !1, variant: c = "elevation", ...l } = n, u = {
		...n,
		component: a,
		elevation: o,
		square: s,
		variant: c
	};
	return /* @__PURE__ */ (0, K.jsx)($l, {
		as: a,
		ownerState: u,
		className: G(Ql(u).root, i),
		ref: t,
		...l,
		style: {
			...c === "elevation" && {
				"--Paper-shadow": (r.vars || r).shadows[o],
				...r.vars && { "--Paper-overlay": r.vars.overlays?.[o] },
				...!r.vars && r.palette.mode === "dark" && { "--Paper-overlay": `linear-gradient(${bi("#fff", Fo(o))}, ${bi("#fff", Fo(o))})` }
			},
			...l.style
		}
	});
}), tu = /* @__PURE__ */ _.createContext({});
//#endregion
//#region node_modules/@mui/material/Accordion/accordionClasses.mjs
function nu(e) {
	return q("MuiAccordion", e);
}
var ru = qr("MuiAccordion", [
	"root",
	"heading",
	"rounded",
	"expanded",
	"disabled",
	"gutters",
	"region"
]), iu = (e) => {
	let { classes: t, square: n, expanded: r, disabled: i, disableGutters: a } = e;
	return At({
		root: [
			"root",
			!n && "rounded",
			r && "expanded",
			i && "disabled",
			!a && "gutters"
		],
		heading: ["heading"],
		region: ["region"]
	}, nu, t);
}, au = X(eu, {
	name: "MuiAccordion",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			{ [`& .${ru.region}`]: t.region },
			t.root,
			!n.square && t.rounded,
			!n.disableGutters && t.gutters
		];
	}
})(Z(({ theme: e }) => {
	let t = { duration: e.transitions.duration.shortest };
	return {
		position: "relative",
		transition: e.transitions.create(["margin"], t),
		overflowAnchor: "none",
		"&::before": {
			position: "absolute",
			left: 0,
			top: -1,
			right: 0,
			height: 1,
			content: "\"\"",
			opacity: 1,
			backgroundColor: (e.vars || e).palette.divider,
			transition: e.transitions.create(["opacity", "background-color"], t)
		},
		"&:first-of-type": { "&::before": { display: "none" } },
		[`&.${ru.expanded}`]: {
			"&::before": { opacity: 0 },
			"&:first-of-type": { marginTop: 0 },
			"&:last-of-type": { marginBottom: 0 },
			"& + &": { "&::before": { display: "none" } }
		},
		[`&.${ru.disabled}`]: { backgroundColor: (e.vars || e).palette.action.disabledBackground }
	};
}), Z(({ theme: e }) => ({ variants: [{
	props: (e) => !e.square,
	style: {
		borderRadius: 0,
		"&:first-of-type": {
			borderTopLeftRadius: (e.vars || e).shape.borderRadius,
			borderTopRightRadius: (e.vars || e).shape.borderRadius
		},
		"&:last-of-type": {
			borderBottomLeftRadius: (e.vars || e).shape.borderRadius,
			borderBottomRightRadius: (e.vars || e).shape.borderRadius,
			"@supports (-ms-ime-align: auto)": {
				borderBottomLeftRadius: 0,
				borderBottomRightRadius: 0
			}
		}
	}
}, {
	props: (e) => !e.disableGutters,
	style: { [`&.${ru.expanded}`]: { margin: "16px 0" } }
}] }))), ou = X("h3", {
	name: "MuiAccordion",
	slot: "Heading"
})({ all: "unset" }), su = X("div", {
	name: "MuiAccordion",
	slot: "Region"
})({}), cu = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let n = os({
		props: e,
		name: "MuiAccordion"
	}), { children: r, className: i, defaultExpanded: a = !1, disabled: o = !1, disableGutters: s = !1, expanded: c, onChange: l, slots: u = {}, slotProps: d = {}, ...f } = n, [p, m] = el({
		controlled: c,
		default: a,
		name: "Accordion",
		state: "expanded"
	}), h = _.useCallback((e) => {
		m(!p), l && l(e, !p);
	}, [
		p,
		l,
		m
	]), [g, ...v] = _.Children.toArray(r), y = _.useMemo(() => ({
		expanded: p,
		disabled: o,
		disableGutters: s,
		toggle: h
	}), [
		p,
		o,
		s,
		h
	]), b = {
		...n,
		disabled: o,
		disableGutters: s,
		expanded: p
	}, x = iu(b), S = {
		slots: u,
		slotProps: d
	}, [C, w] = Wl("root", {
		elementType: au,
		externalForwardedProps: {
			...S,
			...f
		},
		className: G(x.root, i),
		shouldForwardComponentProp: !0,
		ownerState: b,
		ref: t
	}), [T, E] = Wl("heading", {
		elementType: ou,
		externalForwardedProps: S,
		className: x.heading,
		ownerState: b
	}), [D, O] = Wl("transition", {
		elementType: Xl,
		externalForwardedProps: S,
		ownerState: b
	}), [k, A] = Wl("region", {
		elementType: su,
		externalForwardedProps: S,
		ownerState: b,
		className: x.region,
		additionalProps: {
			"aria-labelledby": g.props.id,
			id: g.props["aria-controls"],
			role: "region"
		}
	});
	return /* @__PURE__ */ (0, K.jsxs)(C, {
		...w,
		children: [/* @__PURE__ */ (0, K.jsx)(T, {
			...E,
			children: /* @__PURE__ */ (0, K.jsx)(tu.Provider, {
				value: y,
				children: g
			})
		}), /* @__PURE__ */ (0, K.jsx)(D, {
			in: p,
			timeout: "auto",
			...O,
			children: /* @__PURE__ */ (0, K.jsx)(k, {
				...A,
				children: v
			})
		})]
	});
});
//#endregion
//#region node_modules/@mui/material/AccordionDetails/accordionDetailsClasses.mjs
function lu(e) {
	return q("MuiAccordionDetails", e);
}
qr("MuiAccordionDetails", ["root"]);
//#endregion
//#region node_modules/@mui/material/AccordionDetails/AccordionDetails.mjs
var uu = (e) => {
	let { classes: t } = e;
	return At({ root: ["root"] }, lu, t);
}, du = X("div", {
	name: "MuiAccordionDetails",
	slot: "Root"
})(Z(({ theme: e }) => ({ padding: e.spacing(1, 2, 2) }))), fu = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let n = os({
		props: e,
		name: "MuiAccordionDetails"
	}), { className: r, ...i } = n, a = n;
	return /* @__PURE__ */ (0, K.jsx)(du, {
		className: G(uu(a).root, r),
		ref: t,
		ownerState: a,
		...i
	});
});
//#endregion
//#region node_modules/@mui/utils/isFocusVisible/isFocusVisible.mjs
function pu(e) {
	try {
		return e.matches(":focus-visible");
	} catch {}
	return !1;
}
//#endregion
//#region node_modules/@mui/material/utils/useFocusableWhenDisabled.mjs
function mu(e) {
	let { focusableWhenDisabled: t, disabled: n, composite: r = !1, tabIndex: i = 0, isNativeButton: a } = e, o = r && t !== !1, s = r && t === !1;
	return _.useMemo(() => {
		let e = { onKeyDown(e) {
			n && t && e.key !== "Tab" && e.preventDefault();
		} };
		return r || (e.tabIndex = i, !a && n && (e.tabIndex = t ? i : -1)), (a && (t || o) || !a && n) && (e["aria-disabled"] = n), a && (!t || s) && (e.disabled = n), e;
	}, [
		r,
		n,
		t,
		o,
		s,
		a,
		i
	]);
}
//#endregion
//#region node_modules/@mui/material/ButtonBase/useButtonBase.mjs
var hu = {};
function gu(e) {
	let { nativeButton: t, nativeButtonProp: n, internalNativeButton: r = t, allowInferredHostMismatch: i = !1, disabled: a, type: o, hasFormAction: s = !1, tabIndex: c = 0, focusableWhenDisabled: l, stopEventPropagation: u = !1, onBeforeKeyDown: d, onBeforeKeyUp: f } = e, p = _.useRef(null), m = l === !0, h = mu({
		focusableWhenDisabled: m,
		disabled: a,
		isNativeButton: t,
		tabIndex: c
	}), g = _.useCallback(() => {
		let e = p.current;
		return e == null ? t : e.tagName === "BUTTON" ? !0 : !!(e.tagName === "A" && e.href);
	}, [t]), v = _.useMemo(() => {
		let e = m ? {} : { tabIndex: a ? -1 : c };
		return t ? (e.type = o === void 0 && !s ? "button" : o, m || (e.disabled = a)) : (e.role = "button", !m && a && (e["aria-disabled"] = a)), m ? {
			...e,
			...h
		} : e;
	}, [
		a,
		m,
		h,
		s,
		t,
		c,
		o
	]);
	return {
		getButtonProps: _.useCallback((e = hu) => {
			let { onClick: t, onKeyDown: n, onKeyUp: r, ...i } = e, o = (e) => {
				if (u && e.stopPropagation(), a) {
					e.preventDefault();
					return;
				}
				t?.(e);
			}, s = (e) => {
				if (m && h.onKeyDown(e), !a && (d?.(e), n?.(e), !(e.target !== e.currentTarget || g()))) {
					if (e.key === " ") {
						e.preventDefault();
						return;
					}
					e.key === "Enter" && (e.preventDefault(), e.currentTarget.click());
				}
			}, c = (e) => {
				a || (f?.(e), r?.(e), e.target === e.currentTarget && !g() && e.key === " " && !e.defaultPrevented && e.currentTarget.click());
			};
			return {
				...v,
				...i,
				onClick: o,
				onKeyDown: s,
				onKeyUp: c
			};
		}, [
			v,
			a,
			m,
			h,
			g,
			d,
			f,
			u
		]),
		rootRef: p
	};
}
//#endregion
//#region node_modules/@mui/material/useLazyRipple/useLazyRipple.mjs
var _u = class e {
	static create() {
		return new e();
	}
	static use() {
		let t = Al(e.create).current, [n, r] = _.useState(!1);
		return t.shouldMount = n, t.setShouldMount = r, _.useEffect(t.mountEffect, [n]), t;
	}
	constructor() {
		this.ref = { current: null }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
	}
	mount() {
		return this.mounted || (this.mounted = yu(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
	}
	mountEffect = () => {
		this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
	};
	start(...e) {
		this.mount().then(() => this.ref.current?.start(...e));
	}
	stop(...e) {
		this.mount().then(() => this.ref.current?.stop(...e));
	}
	pulsate(...e) {
		this.mount().then(() => this.ref.current?.pulsate(...e));
	}
};
function vu() {
	return _u.use();
}
function yu() {
	let e, t, n = new Promise((n, r) => {
		e = n, t = r;
	});
	return n.resolve = e, n.reject = t, n;
}
//#endregion
//#region node_modules/@mui/material/ButtonBase/Ripple.mjs
function bu(e) {
	let { className: t, classes: n, pulsate: r = !1, rippleX: i, rippleY: a, rippleSize: o, in: s, onExited: c, timeout: l } = e, [u, d] = _.useState(!1), f = G(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), p = {
		width: o,
		height: o,
		top: -(o / 2) + a,
		left: -(o / 2) + i
	}, m = G(n.child, u && n.childLeaving, r && n.childPulsate);
	return !s && !u && d(!0), _.useEffect(() => {
		if (!s && c != null) {
			let e = setTimeout(c, l);
			return () => {
				clearTimeout(e);
			};
		}
	}, [
		c,
		s,
		l
	]), /* @__PURE__ */ (0, K.jsx)("span", {
		className: f,
		style: p,
		children: /* @__PURE__ */ (0, K.jsx)("span", { className: m })
	});
}
//#endregion
//#region node_modules/@mui/material/ButtonBase/touchRippleClasses.mjs
var xu = qr("MuiTouchRipple", [
	"root",
	"ripple",
	"rippleVisible",
	"ripplePulsate",
	"child",
	"childLeaving",
	"childPulsate"
]), Su = 550, Cu = Ot`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, wu = Ot`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Tu = Ot`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Eu = X("span", {
	name: "MuiTouchRipple",
	slot: "Root"
})({
	overflow: "hidden",
	pointerEvents: "none",
	position: "absolute",
	zIndex: 0,
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	borderRadius: "inherit"
}), Du = X(bu, {
	name: "MuiTouchRipple",
	slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${xu.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Cu};
    animation-duration: ${Su}ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
  }

  &.${xu.ripplePulsate} {
    animation-duration: ${({ theme: e }) => e.transitions.duration.shorter}ms;
  }

  & .${xu.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${xu.childLeaving} {
    opacity: 0;
    animation-name: ${wu};
    animation-duration: ${Su}ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
  }

  & .${xu.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Tu};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Ou = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let { center: n = !1, classes: r = {}, className: i, ...a } = os({
		props: e,
		name: "MuiTouchRipple"
	}), [o, s] = _.useState([]), c = _.useRef(0), l = _.useRef(null);
	_.useEffect(() => {
		l.current &&= (l.current(), null);
	}, [o]);
	let u = _.useRef(!1), d = Pl(), f = _.useRef(null), p = _.useRef(null), m = _.useCallback((e) => {
		let { pulsate: t, rippleX: n, rippleY: i, rippleSize: a, cb: o } = e;
		s((e) => [...e, /* @__PURE__ */ (0, K.jsx)(Du, {
			classes: {
				ripple: G(r.ripple, xu.ripple),
				rippleVisible: G(r.rippleVisible, xu.rippleVisible),
				ripplePulsate: G(r.ripplePulsate, xu.ripplePulsate),
				child: G(r.child, xu.child),
				childLeaving: G(r.childLeaving, xu.childLeaving),
				childPulsate: G(r.childPulsate, xu.childPulsate)
			},
			timeout: Su,
			pulsate: t,
			rippleX: n,
			rippleY: i,
			rippleSize: a
		}, c.current)]), c.current += 1, l.current = o;
	}, [r]), h = _.useCallback((e = {}, t = {}, r = () => {}) => {
		let { pulsate: i = !1, center: a = n || t.pulsate, fakeElement: o = !1 } = t;
		if (e?.type === "mousedown" && u.current) {
			u.current = !1;
			return;
		}
		e?.type === "touchstart" && (u.current = !0);
		let s = o ? null : p.current, c = s ? s.getBoundingClientRect() : {
			width: 0,
			height: 0,
			left: 0,
			top: 0
		}, l, h, g;
		if (a || e === void 0 || e.clientX === 0 && e.clientY === 0 || !e.clientX && !e.touches) l = Math.round(c.width / 2), h = Math.round(c.height / 2);
		else {
			let { clientX: t, clientY: n } = e.touches && e.touches.length > 0 ? e.touches[0] : e;
			l = Math.round(t - c.left), h = Math.round(n - c.top);
		}
		if (a) g = Math.sqrt((2 * c.width ** 2 + c.height ** 2) / 3), g % 2 == 0 && (g += 1);
		else {
			let e = Math.max(Math.abs((s ? s.clientWidth : 0) - l), l) * 2 + 2, t = Math.max(Math.abs((s ? s.clientHeight : 0) - h), h) * 2 + 2;
			g = Math.sqrt(e ** 2 + t ** 2);
		}
		e?.touches ? f.current === null && (f.current = () => {
			m({
				pulsate: i,
				rippleX: l,
				rippleY: h,
				rippleSize: g,
				cb: r
			});
		}, d.start(80, () => {
			f.current &&= (f.current(), null);
		})) : m({
			pulsate: i,
			rippleX: l,
			rippleY: h,
			rippleSize: g,
			cb: r
		});
	}, [
		n,
		m,
		d
	]), g = _.useCallback(() => {
		h({}, { pulsate: !0 });
	}, [h]), v = _.useCallback((e, t) => {
		if (d.clear(), e?.type === "touchend" && f.current) {
			f.current(), f.current = null, d.start(0, () => {
				v(e, t);
			});
			return;
		}
		f.current = null, s((e) => e.length > 0 ? e.slice(1) : e), l.current = t;
	}, [d]);
	return _.useImperativeHandle(t, () => ({
		pulsate: g,
		start: h,
		stop: v
	}), [
		g,
		h,
		v
	]), /* @__PURE__ */ (0, K.jsx)(Eu, {
		className: G(xu.root, r.root, i),
		ref: p,
		...a,
		children: /* @__PURE__ */ (0, K.jsx)(Ol, {
			component: null,
			exit: !0,
			children: o
		})
	});
});
//#endregion
//#region node_modules/@mui/material/ButtonBase/buttonBaseClasses.mjs
function ku(e) {
	return q("MuiButtonBase", e);
}
var Au = qr("MuiButtonBase", [
	"root",
	"disabled",
	"focusVisible"
]), ju = (e) => {
	let { disabled: t, focusVisible: n, focusVisibleClassName: r, suppressFocusVisible: i, classes: a } = e, o = At({ root: [
		"root",
		t && "disabled",
		n && !i && "focusVisible"
	] }, ku, a);
	return n && !i && r && (o.root += ` ${r}`), o;
}, Mu = X("button", {
	name: "MuiButtonBase",
	slot: "Root"
})({
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	position: "relative",
	boxSizing: "border-box",
	WebkitTapHighlightColor: "transparent",
	backgroundColor: "transparent",
	outline: 0,
	border: 0,
	margin: 0,
	borderRadius: 0,
	padding: 0,
	cursor: "pointer",
	userSelect: "none",
	verticalAlign: "middle",
	MozAppearance: "none",
	WebkitAppearance: "none",
	textDecoration: "none",
	color: "inherit",
	"&::-moz-focus-inner": { borderStyle: "none" },
	[`&.${Au.disabled}`]: {
		pointerEvents: "none",
		cursor: "default"
	},
	"@media print": { colorAdjust: "exact" }
}), Nu = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let n = os({
		props: e,
		name: "MuiButtonBase"
	}), { action: r, centerRipple: i = !1, children: a, className: o, component: s = "button", disabled: c = !1, disableRipple: l = !1, disableTouchRipple: u = !1, focusRipple: d = !1, focusVisibleClassName: f, focusableWhenDisabled: p, suppressFocusVisible: m = !1, internalNativeButton: h, LinkComponent: g = "a", nativeButton: v, onBlur: y, onClick: b, onContextMenu: x, onDragLeave: S, onFocus: C, onFocusVisible: w, onKeyDown: T, onKeyUp: E, onMouseDown: D, onMouseLeave: O, onMouseUp: k, onTouchEnd: A, onTouchMove: j, onTouchStart: M, tabIndex: N = 0, TouchRippleProps: ee, touchRippleRef: te, type: P, ...F } = n, I = !!(F.href || F.to), L = !!F.formAction, ne = s;
	ne === "button" && I && (ne = g);
	let re = typeof ne == "string" ? ne === "button" : h ?? !1, R = v ?? re, z = vu(), ie = il(z.ref, te), [ae, B] = _.useState(!1);
	(c || m) && ae && B(!1);
	let oe = nl((e) => {
		d && !e.repeat && ae && e.key === " " && z.stop(e, () => {
			z.start(e);
		});
	}), se = nl((e) => {
		d && e.key === " " && ae && !e.defaultPrevented && z.stop(e, () => {
			z.pulsate(e);
		});
	}), { getButtonProps: V, rootRef: H } = gu({
		nativeButton: R,
		nativeButtonProp: v,
		internalNativeButton: re,
		allowInferredHostMismatch: I || typeof ne == "string",
		disabled: c,
		type: P,
		hasFormAction: L,
		tabIndex: N,
		onBeforeKeyDown: oe,
		onBeforeKeyUp: se
	}), { onClick: ce, onKeyDown: le, onKeyUp: ue, ...de } = V({
		onClick: b,
		onKeyDown: T,
		onKeyUp: E
	});
	_.useImperativeHandle(r, () => ({ focusVisible: () => {
		B(!0), H.current.focus();
	} }), [H]);
	let fe = z.shouldMount && !l && !c;
	_.useEffect(() => {
		ae && d && !l && z.pulsate();
	}, [
		l,
		d,
		ae,
		z
	]);
	let pe = Pu(z, "start", D, u), me = Pu(z, "stop", x, u), he = Pu(z, "stop", S, u), U = Pu(z, "stop", k, u), ge = Pu(z, "stop", (e) => {
		ae && e.preventDefault(), O && O(e);
	}, u), W = Pu(z, "start", M, u), _e = Pu(z, "stop", A, u), ve = Pu(z, "stop", j, u), ye = Pu(z, "stop", (e) => {
		pu(e.target) || B(!1), y && y(e);
	}, !1), be = nl((e) => {
		H.current ||= e.currentTarget, !m && pu(e.target) && (B(!0), w && w(e)), C && C(e);
	}), xe = {};
	I && (xe.tabIndex = c ? -1 : N, c && (xe["aria-disabled"] = c), xe.type = P);
	let Se = il(t, H), Ce = {
		...n,
		centerRipple: i,
		component: s,
		disabled: c,
		disableRipple: l,
		disableTouchRipple: u,
		focusRipple: d,
		suppressFocusVisible: m,
		tabIndex: N,
		focusVisible: ae
	}, we = ju(Ce);
	return /* @__PURE__ */ (0, K.jsxs)(Mu, {
		as: ne,
		className: G(we.root, o),
		ownerState: Ce,
		onBlur: ye,
		onClick: ce,
		onContextMenu: me,
		onFocus: be,
		onKeyDown: le,
		onKeyUp: ue,
		onMouseDown: pe,
		onMouseLeave: ge,
		onMouseUp: U,
		onDragLeave: he,
		onTouchEnd: _e,
		onTouchMove: ve,
		onTouchStart: W,
		ref: Se,
		...I ? xe : de,
		...F,
		children: [a, fe ? /* @__PURE__ */ (0, K.jsx)(Ou, {
			ref: ie,
			center: i,
			...ee
		}) : null]
	});
});
function Pu(e, t, n, r = !1) {
	return nl((i) => (n && n(i), r || e[t](i), !0));
}
//#endregion
//#region node_modules/@mui/material/AccordionSummary/accordionSummaryClasses.mjs
function Fu(e) {
	return q("MuiAccordionSummary", e);
}
var Iu = qr("MuiAccordionSummary", [
	"root",
	"expanded",
	"focusVisible",
	"disabled",
	"gutters",
	"content",
	"expandIconWrapper"
]), Lu = (e) => {
	let { classes: t, expanded: n, disabled: r, disableGutters: i } = e;
	return At({
		root: [
			"root",
			n && "expanded",
			r && "disabled",
			!i && "gutters"
		],
		focusVisible: ["focusVisible"],
		content: ["content", n && "expanded"],
		expandIconWrapper: ["expandIconWrapper", n && "expanded"]
	}, Fu, t);
}, Ru = X(Nu, {
	name: "MuiAccordionSummary",
	slot: "Root"
})(Z(({ theme: e }) => {
	let t = { duration: e.transitions.duration.shortest };
	return {
		display: "flex",
		width: "100%",
		minHeight: 48,
		padding: e.spacing(0, 2),
		transition: e.transitions.create(["min-height", "background-color"], t),
		[`&.${Iu.focusVisible}`]: { backgroundColor: (e.vars || e).palette.action.focus },
		[`&.${Iu.disabled}`]: { opacity: (e.vars || e).palette.action.disabledOpacity },
		[`&:hover:not(.${Iu.disabled})`]: { cursor: "pointer" },
		variants: [{
			props: (e) => !e.disableGutters,
			style: { [`&.${Iu.expanded}`]: { minHeight: 64 } }
		}]
	};
})), zu = X("span", {
	name: "MuiAccordionSummary",
	slot: "Content"
})(Z(({ theme: e }) => ({
	display: "flex",
	textAlign: "start",
	flexGrow: 1,
	margin: "12px 0",
	variants: [{
		props: (e) => !e.disableGutters,
		style: {
			transition: e.transitions.create(["margin"], { duration: e.transitions.duration.shortest }),
			[`&.${Iu.expanded}`]: { margin: "20px 0" }
		}
	}]
}))), Bu = X("span", {
	name: "MuiAccordionSummary",
	slot: "ExpandIconWrapper"
})(Z(({ theme: e }) => ({
	display: "flex",
	color: (e.vars || e).palette.action.active,
	transform: "rotate(0deg)",
	transition: e.transitions.create("transform", { duration: e.transitions.duration.shortest }),
	[`&.${Iu.expanded}`]: { transform: "rotate(180deg)" }
}))), Vu = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let n = os({
		props: e,
		name: "MuiAccordionSummary"
	}), { children: r, className: i, expandIcon: a, focusVisibleClassName: o, onClick: s, slots: c, slotProps: l, ...u } = n, { disabled: d = !1, disableGutters: f, expanded: p, toggle: m } = _.useContext(tu), h = (e) => {
		m && m(e), s && s(e);
	}, g = {
		...n,
		expanded: p,
		disabled: d,
		disableGutters: f
	}, v = Lu(g), y = {
		slots: c,
		slotProps: l
	}, [b, x] = Wl("root", {
		ref: t,
		shouldForwardComponentProp: !0,
		className: G(v.root, i),
		elementType: Ru,
		externalForwardedProps: {
			...y,
			...u
		},
		ownerState: g,
		additionalProps: {
			focusRipple: !1,
			disableRipple: !0,
			internalNativeButton: !0,
			disabled: d,
			"aria-expanded": p,
			focusVisibleClassName: G(v.focusVisible, o)
		},
		getSlotProps: (e) => ({
			...e,
			onClick: (t) => {
				e.onClick?.(t), h(t);
			}
		})
	}), [S, C] = Wl("content", {
		className: v.content,
		elementType: zu,
		externalForwardedProps: y,
		ownerState: g
	}), [w, T] = Wl("expandIconWrapper", {
		className: v.expandIconWrapper,
		elementType: Bu,
		externalForwardedProps: y,
		ownerState: g
	});
	return /* @__PURE__ */ (0, K.jsxs)(b, {
		...x,
		children: [/* @__PURE__ */ (0, K.jsx)(S, {
			...C,
			children: r
		}), a && /* @__PURE__ */ (0, K.jsx)(w, {
			...T,
			children: a
		})]
	});
});
//#endregion
//#region node_modules/@mui/material/utils/createSimplePaletteValueFilter.mjs
function Hu(e) {
	return typeof e.main == "string";
}
function Uu(e, t = []) {
	if (!Hu(e)) return !1;
	for (let n of t) if (!e.hasOwnProperty(n) || typeof e[n] != "string") return !1;
	return !0;
}
function Wu(e = []) {
	return ([, t]) => t && Uu(t, e);
}
//#endregion
//#region node_modules/@mui/material/CircularProgress/circularProgressClasses.mjs
function Gu(e) {
	return q("MuiCircularProgress", e);
}
qr("MuiCircularProgress", [
	"root",
	"determinate",
	"indeterminate",
	"colorPrimary",
	"colorSecondary",
	"svg",
	"track",
	"circle",
	"circleDisableShrink"
]);
//#endregion
//#region node_modules/@mui/material/CircularProgress/CircularProgress.mjs
var Ku = 44, qu = Ot`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Ju = Ot`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, Yu = typeof qu == "string" ? null : Dt`
        animation: ${qu} 1.4s linear infinite;
      `, Xu = typeof Ju == "string" ? null : Dt`
        animation: ${Ju} 1.4s ease-in-out infinite;
      `, Zu = (e) => {
	let { classes: t, variant: n, color: r, disableShrink: i } = e;
	return At({
		root: [
			"root",
			n,
			`color${Pc(r)}`
		],
		svg: ["svg"],
		track: ["track"],
		circle: ["circle", i && "circleDisableShrink"]
	}, Gu, t);
}, Qu = X("span", {
	name: "MuiCircularProgress",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.root,
			t[n.variant],
			t[`color${Pc(n.color)}`]
		];
	}
})(Z(({ theme: e }) => ({
	display: "inline-block",
	variants: [
		{
			props: { variant: "determinate" },
			style: { transition: e.transitions.create("transform") }
		},
		{
			props: { variant: "indeterminate" },
			style: Yu || { animation: `${qu} 1.4s linear infinite` }
		},
		...Object.entries(e.palette).filter(Wu()).map(([t]) => ({
			props: { color: t },
			style: { color: (e.vars || e).palette[t].main }
		}))
	]
}))), $u = X("svg", {
	name: "MuiCircularProgress",
	slot: "Svg"
})({ display: "block" }), ed = X("circle", {
	name: "MuiCircularProgress",
	slot: "Circle",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [t.circle, n.disableShrink && t.circleDisableShrink];
	}
})(Z(({ theme: e }) => ({
	stroke: "currentColor",
	variants: [
		{
			props: { variant: "determinate" },
			style: { transition: e.transitions.create("stroke-dashoffset") }
		},
		{
			props: { variant: "indeterminate" },
			style: {
				strokeDasharray: "80px, 200px",
				strokeDashoffset: 0
			}
		},
		{
			props: ({ ownerState: e }) => e.variant === "indeterminate" && !e.disableShrink,
			style: Xu || { animation: `${Ju} 1.4s ease-in-out infinite` }
		}
	]
}))), td = X("circle", {
	name: "MuiCircularProgress",
	slot: "Track"
})(Z(({ theme: e }) => ({
	stroke: "currentColor",
	opacity: (e.vars || e).palette.action.activatedOpacity
}))), nd = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let n = os({
		props: e,
		name: "MuiCircularProgress"
	}), { className: r, color: i = "primary", disableShrink: a = !1, enableTrackSlot: o = !1, min: s, max: c, size: l = 40, style: u, thickness: d = 3.6, value: f = n.min ?? 0, variant: p = "indeterminate", ...m } = n, h = s ?? 0, g = c ?? 100, _ = {
		...n,
		color: i,
		disableShrink: a,
		size: l,
		thickness: d,
		value: f,
		variant: p,
		enableTrackSlot: o
	}, v = Zu(_), y = {}, b = {}, x = {};
	if (p === "determinate") {
		let e = 2 * Math.PI * ((Ku - d) / 2), t = g - h;
		y.strokeDasharray = e.toFixed(3), y.strokeDashoffset = t > 0 ? `${((g - f) / t * e).toFixed(3)}px` : `${e.toFixed(3)}px`, b.transform = "rotate(-90deg)", x["aria-valuenow"] = f, x["aria-valuemin"] = h, x["aria-valuemax"] = g;
	}
	return /* @__PURE__ */ (0, K.jsx)(Qu, {
		className: G(v.root, r),
		style: {
			width: l,
			height: l,
			...b,
			...u
		},
		ownerState: _,
		ref: t,
		role: "progressbar",
		...x,
		...m,
		children: /* @__PURE__ */ (0, K.jsxs)($u, {
			className: v.svg,
			ownerState: _,
			viewBox: `${Ku / 2} ${Ku / 2} ${Ku} ${Ku}`,
			children: [o ? /* @__PURE__ */ (0, K.jsx)(td, {
				className: v.track,
				ownerState: _,
				cx: Ku,
				cy: Ku,
				r: (Ku - d) / 2,
				fill: "none",
				strokeWidth: d,
				"aria-hidden": "true"
			}) : null, /* @__PURE__ */ (0, K.jsx)(ed, {
				className: v.circle,
				style: y,
				ownerState: _,
				cx: Ku,
				cy: Ku,
				r: (Ku - d) / 2,
				fill: "none",
				strokeWidth: d
			})]
		})
	});
});
//#endregion
//#region node_modules/@mui/material/IconButton/iconButtonClasses.mjs
function rd(e) {
	return q("MuiIconButton", e);
}
var id = qr("MuiIconButton", [
	"root",
	"disabled",
	"colorInherit",
	"colorPrimary",
	"colorSecondary",
	"colorError",
	"colorInfo",
	"colorSuccess",
	"colorWarning",
	"edgeStart",
	"edgeEnd",
	"sizeSmall",
	"sizeMedium",
	"sizeLarge",
	"loading",
	"loadingIndicator",
	"loadingWrapper"
]), ad = (e) => {
	let { classes: t, disabled: n, color: r, edge: i, size: a, loading: o } = e;
	return At({
		root: [
			"root",
			o && "loading",
			n && "disabled",
			r !== "default" && `color${Pc(r)}`,
			i && `edge${Pc(i)}`,
			`size${Pc(a)}`
		],
		loadingIndicator: ["loadingIndicator"],
		loadingWrapper: ["loadingWrapper"]
	}, rd, t);
}, od = X(Nu, {
	name: "MuiIconButton",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.root,
			n.loading && t.loading,
			n.color !== "default" && t[`color${Pc(n.color)}`],
			n.edge && t[`edge${Pc(n.edge)}`],
			t[`size${Pc(n.size)}`]
		];
	}
})(Z(({ theme: e }) => ({
	textAlign: "center",
	flex: "0 0 auto",
	fontSize: e.typography.pxToRem(24),
	padding: 8,
	borderRadius: "50%",
	color: (e.vars || e).palette.action.active,
	transition: e.transitions.create("background-color", { duration: e.transitions.duration.shortest }),
	variants: [
		{
			props: (e) => !e.disableRipple,
			style: {
				"--IconButton-hoverBg": e.alpha((e.vars || e).palette.action.active, (e.vars || e).palette.action.hoverOpacity),
				"&:hover": {
					backgroundColor: "var(--IconButton-hoverBg)",
					"@media (hover: none)": { backgroundColor: "transparent" }
				}
			}
		},
		{
			props: { edge: "start" },
			style: { marginLeft: -12 }
		},
		{
			props: {
				edge: "start",
				size: "small"
			},
			style: { marginLeft: -3 }
		},
		{
			props: { edge: "end" },
			style: { marginRight: -12 }
		},
		{
			props: {
				edge: "end",
				size: "small"
			},
			style: { marginRight: -3 }
		}
	]
})), Z(({ theme: e }) => ({
	variants: [
		{
			props: { color: "inherit" },
			style: { color: "inherit" }
		},
		...Object.entries(e.palette).filter(Wu()).map(([t]) => ({
			props: { color: t },
			style: {
				color: (e.vars || e).palette[t].main,
				"--IconButton-hoverBg": e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity)
			}
		})),
		{
			props: { size: "small" },
			style: {
				padding: 5,
				fontSize: e.typography.pxToRem(18)
			}
		},
		{
			props: { size: "large" },
			style: {
				padding: 12,
				fontSize: e.typography.pxToRem(28)
			}
		}
	],
	[`&.${id.disabled}`]: {
		backgroundColor: "transparent",
		color: (e.vars || e).palette.action.disabled
	},
	[`&.${id.loading}`]: { color: "transparent" }
}))), sd = X("span", {
	name: "MuiIconButton",
	slot: "LoadingIndicator"
})(({ theme: e }) => ({
	display: "none",
	position: "absolute",
	visibility: "visible",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	color: (e.vars || e).palette.action.disabled,
	variants: [{
		props: { loading: !0 },
		style: { display: "flex" }
	}]
})), cd = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let n = os({
		props: e,
		name: "MuiIconButton"
	}), { edge: r = !1, children: i, className: a, color: o = "default", disabled: s = !1, disableFocusRipple: c = !1, size: l = "medium", id: u, loading: d = null, loadingIndicator: f, ...p } = n, m = Qc(u), h = f ?? /* @__PURE__ */ (0, K.jsx)(nd, {
		"aria-labelledby": m,
		color: "inherit",
		size: 16
	}), g = {
		...n,
		edge: r,
		color: o,
		disabled: s,
		disableFocusRipple: c,
		loading: d,
		loadingIndicator: h,
		size: l
	}, _ = ad(g);
	return /* @__PURE__ */ (0, K.jsxs)(od, {
		id: d ? m : u,
		className: G(_.root, a),
		centerRipple: !0,
		internalNativeButton: !0,
		focusRipple: !c,
		disabled: s || d,
		ref: t,
		...p,
		ownerState: g,
		children: [typeof d == "boolean" && /* @__PURE__ */ (0, K.jsx)("span", {
			className: _.loadingWrapper,
			style: { display: "contents" },
			children: /* @__PURE__ */ (0, K.jsx)(sd, {
				className: _.loadingIndicator,
				ownerState: g,
				children: d && h
			})
		}), i]
	});
}), ld = Bc(/* @__PURE__ */ (0, K.jsx)("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }), "Close");
//#endregion
//#region node_modules/@mui/material/Typography/typographyClasses.mjs
function ud(e) {
	return q("MuiTypography", e);
}
qr("MuiTypography", [
	"root",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"subtitle1",
	"subtitle2",
	"body1",
	"body2",
	"inherit",
	"button",
	"caption",
	"overline",
	"alignLeft",
	"alignRight",
	"alignCenter",
	"alignJustify",
	"noWrap",
	"gutterBottom"
]);
//#endregion
//#region node_modules/@mui/material/Typography/Typography.mjs
var dd = (e) => {
	let { align: t, gutterBottom: n, noWrap: r, variant: i, classes: a } = e;
	return At({ root: [
		"root",
		i,
		e.align !== "inherit" && `align${Pc(t)}`,
		n && "gutterBottom",
		r && "noWrap"
	] }, ud, a);
}, fd = X("span", {
	name: "MuiTypography",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.root,
			n.variant && t[n.variant],
			n.align !== "inherit" && t[`align${Pc(n.align)}`],
			n.noWrap && t.noWrap,
			n.gutterBottom && t.gutterBottom
		];
	}
})(Z(({ theme: e }) => ({
	margin: 0,
	variants: [
		{
			props: { variant: "inherit" },
			style: {
				font: "inherit",
				lineHeight: "inherit",
				letterSpacing: "inherit"
			}
		},
		...Object.entries(e.typography).filter(([e, t]) => e !== "inherit" && t && typeof t == "object").map(([e, t]) => ({
			props: { variant: e },
			style: t
		})),
		...Object.entries(e.palette).filter(Wu()).map(([t]) => ({
			props: { color: t },
			style: { color: (e.vars || e).palette[t].main }
		})),
		...Object.entries(e.palette?.text || {}).filter(([, e]) => typeof e == "string").map(([t]) => ({
			props: { color: `text${Pc(t)}` },
			style: { color: (e.vars || e).palette.text[t] }
		})),
		{
			props: ({ ownerState: e }) => e.align !== "inherit",
			style: { textAlign: "var(--Typography-textAlign)" }
		},
		{
			props: ({ ownerState: e }) => e.noWrap,
			style: {
				overflow: "hidden",
				textOverflow: "ellipsis",
				whiteSpace: "nowrap"
			}
		},
		{
			props: ({ ownerState: e }) => e.gutterBottom,
			style: { marginBottom: "0.35em" }
		}
	]
}))), pd = {
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
	h5: "h5",
	h6: "h6",
	subtitle1: "h6",
	subtitle2: "h6",
	body1: "p",
	body2: "p",
	inherit: "p"
}, md = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let n = os({
		props: e,
		name: "MuiTypography"
	}), { color: r, align: i = "inherit", className: a, component: o, gutterBottom: s = !1, noWrap: c = !1, variant: l = "body1", variantMapping: u = pd, ...d } = n, f = {
		...n,
		align: i,
		color: r,
		className: a,
		component: o,
		gutterBottom: s,
		noWrap: c,
		variant: l,
		variantMapping: u
	};
	return /* @__PURE__ */ (0, K.jsx)(fd, {
		as: o || u[l] || pd[l] || "span",
		ref: t,
		className: G(dd(f).root, a),
		...d,
		ownerState: f,
		style: {
			...i !== "inherit" && { "--Typography-textAlign": i },
			...d.style
		}
	});
});
//#endregion
//#region node_modules/@mui/utils/useForcedRerendering/useForcedRerendering.mjs
function hd() {
	let [, e] = _.useState({});
	return _.useCallback(() => {
		e({});
	}, []);
}
//#endregion
//#region node_modules/@mui/utils/contains/contains.mjs
function gd(e, t) {
	if (!e || !t) return !1;
	if (e.contains(t)) return !0;
	let n = t.getRootNode?.();
	if (n && n instanceof ShadowRoot) {
		let n = t;
		for (; n;) {
			if (e === n) return !0;
			n = n.parentNode ?? n.host ?? null;
		}
	}
	return !1;
}
//#endregion
//#region node_modules/@mui/utils/usePreviousProps/usePreviousProps.mjs
function _d(e) {
	let t = _.useRef({});
	return _.useEffect(() => {
		t.current = e;
	}), t.current;
}
//#endregion
//#region node_modules/@mui/material/useAutocomplete/useAutocomplete.mjs
function vd({ array1: e, array2: t, parser: n = (e) => e }) {
	return e && t && e.length === t.length && e.every((e, r) => n(e) === n(t[r]));
}
function yd(e) {
	return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function bd(e = {}) {
	let { ignoreAccents: t = !0, ignoreCase: n = !0, limit: r, matchFrom: i = "any", stringify: a, trim: o = !1 } = e;
	return (e, { inputValue: s, getOptionLabel: c }) => {
		let l = o ? s.trim() : s;
		n && (l = l.toLowerCase()), t && (l = yd(l));
		let u = l ? e.filter((e) => {
			let r = (a || c)(e);
			return n && (r = r.toLowerCase()), t && (r = yd(r)), i === "start" ? r.startsWith(l) : r.includes(l);
		}) : e;
		return typeof r == "number" ? u.slice(0, r) : u;
	};
}
var xd = bd(), Sd = 5, Cd = (e) => e.current !== null && gd(e.current.parentElement, document.activeElement), wd = (e, t) => e === t, Td = [];
function Ed(e, t, n, r) {
	if (t || e == null || r) return "";
	let i = n(e);
	return typeof i == "string" ? i : "";
}
function Dd(e) {
	let { unstable_isActiveElementInListbox: t = Cd, unstable_classNamePrefix: n = "Mui", autoComplete: r = !1, autoHighlight: i = !1, autoSelect: a = !1, blurOnSelect: o = !1, clearOnBlur: s = !e.freeSolo, clearOnEscape: c = !1, componentName: l = "useAutocomplete", defaultValue: u = e.multiple ? Td : null, disableClearable: d = !1, disableCloseOnSelect: f = !1, disabled: p, disabledItemsFocusable: m = !1, disableListWrap: h = !1, filterOptions: g = xd, filterSelectedOptions: v = !1, freeSolo: y = !1, getOptionDisabled: b, getOptionKey: x, getOptionLabel: S = (e) => e.label ?? e, groupBy: C, handleHomeEndKeys: w = !e.freeSolo, id: T, includeInputInList: E = !1, inputValue: D, isOptionEqualToValue: O = wd, multiple: k = !1, onChange: A, onClose: j, onHighlightChange: M, onInputChange: N, onOpen: ee, open: te, openOnFocus: P = !1, options: F, readOnly: I = !1, renderValue: L, selectOnFocus: ne = !e.freeSolo, value: re } = e, R = Hi(T), z = S;
	z = (e) => {
		let t = S(e);
		return typeof t == "string" ? t : String(t);
	};
	let ie = _.useRef(!1), ae = _.useRef(!0), B = _.useRef(null), oe = _.useRef(null), se = _.useRef(!1), [V, H] = _.useState(null), [ce, le] = _.useState(-1), ue = i ? 0 : -1, de = _.useRef(ue), fe = _.useRef(null), pe = _.useRef(!1), me = _.useRef(!1), he = _.useRef(Ed(u ?? re, k, z)).current, [U, ge] = $c({
		controlled: re,
		default: u,
		name: l
	}), [W, _e] = $c({
		controlled: D,
		default: he,
		name: l,
		state: "inputValue"
	}), [ve, ye] = _.useState(!1), be = _.useCallback((e, t, n) => {
		if (!(k ? U.length < t.length : t !== null) && !s && !(n === "reset" && y && !k && t === null)) return;
		let r = Ed(t, k, z, L);
		W !== r && (_e(r), N && N(e, r, n));
	}, [
		z,
		W,
		k,
		N,
		_e,
		s,
		y,
		U,
		L
	]), [xe, Se] = $c({
		controlled: te,
		default: !1,
		name: l,
		state: "open"
	}), [Ce, we] = _.useState(!0), Te = !k && U != null && W === z(U), Ee = xe && !I, De = _.useMemo(() => k ? U : U == null ? [] : [U], [k, U]), Oe = _.useMemo(() => O !== wd || De.length === 0 ? null : new Set(De), [O, De]), ke = _.useCallback((e) => Oe ? Oe.has(e) : De.some((t) => t != null && O(e, t)), [
		O,
		De,
		Oe
	]), Ae = Ee ? g(F.filter((e) => !(v && ke(e))), {
		inputValue: Te && Ce ? "" : W,
		getOptionLabel: z
	}) : [], je = _d({
		filteredOptions: Ae,
		value: U,
		inputValue: W
	});
	_.useEffect(() => {
		let e = U !== je.value;
		ve && !e || y && !e || be(null, U, "reset");
	}, [
		U,
		be,
		ve,
		je.value,
		y
	]);
	let Me = xe && Ae.length > 0 && !I, Ne = tl((e) => {
		e === -1 ? B.current.focus() : V.querySelector(`[data-item-index="${e}"]`).focus();
	});
	_.useEffect(() => {
		k && ce > U.length - 1 && (le(-1), Ne(-1));
	}, [
		U,
		k,
		ce,
		Ne
	]);
	function Pe(e, t) {
		if (!oe.current || e < 0 || e >= Ae.length) return -1;
		let n = e;
		for (;;) {
			let r = oe.current.querySelector(`[data-option-index="${n}"]`), i = m ? !1 : !r || r.disabled || r.getAttribute("aria-disabled") === "true";
			if (r && r.hasAttribute("tabindex") && !i) return n;
			if (n = t === "next" ? (n + 1) % Ae.length : (n - 1 + Ae.length) % Ae.length, n === e) return -1;
		}
	}
	let Fe = tl(({ index: e, reason: t, preserveScroll: r = !1 }) => {
		if (e === -1 ? B.current.removeAttribute("aria-activedescendant") : B.current.setAttribute("aria-activedescendant", `${R}-option-${e}`), !oe.current) return;
		let i = oe.current.querySelector(`[role="option"].${n}-focused`);
		i && (i.classList.remove(`${n}-focused`), i.classList.remove(`${n}-focusVisible`));
		let a = oe.current;
		if (oe.current.getAttribute("role") !== "listbox" && (a = oe.current.parentElement.querySelector("[role=\"listbox\"]")), !a) return;
		if (e === -1) {
			r || (a.scrollTop = 0);
			return;
		}
		let o = oe.current.querySelector(`[data-option-index="${e}"]`);
		if (o && (o.classList.add(`${n}-focused`), t === "keyboard" && o.classList.add(`${n}-focusVisible`), a.scrollHeight > a.clientHeight && t !== "mouse" && t !== "touch")) {
			let e = o, t = a.clientHeight + a.scrollTop, n = e.offsetTop + e.offsetHeight;
			n > t ? a.scrollTop = n - a.clientHeight : e.offsetTop - e.offsetHeight * (C ? 1.3 : 0) < a.scrollTop && (a.scrollTop = e.offsetTop - e.offsetHeight * (C ? 1.3 : 0));
		}
	}), Ie = tl(({ event: e, index: t, reason: n, preserveScroll: r = !1 }) => {
		de.current = t, fe.current = n ?? null, M && [
			"mouse",
			"keyboard",
			"touch"
		].includes(n) && M(e, t === -1 ? null : Ae[t], n), Fe({
			index: t,
			reason: n,
			preserveScroll: r
		});
	}), Le = tl(({ index: e }) => {
		de.current = e, Fe({
			index: e,
			reason: fe.current
		});
	}), Re = tl(({ event: e, diff: t, direction: n = "next", reason: i, preserveScroll: a }) => {
		if (!Ee) return;
		i === "keyboard" && (pe.current = !1, me.current = !1);
		let o = Pe((() => {
			let e = Ae.length - 1;
			if (t === "reset") return ue;
			if (t === "start") return 0;
			if (t === "end") return e;
			let n = de.current + t;
			return n < 0 ? n === -1 && E ? -1 : h && de.current !== -1 || Math.abs(t) > 1 ? 0 : e : n > e ? n === e + 1 && E ? -1 : h || Math.abs(t) > 1 ? e : 0 : n;
		})(), n);
		if (Ie({
			index: o,
			reason: i,
			event: e,
			preserveScroll: a
		}), r && t !== "reset") if (o === -1) B.current.value = W;
		else {
			let e = z(Ae[o]);
			B.current.value = e, e.toLowerCase().indexOf(W.toLowerCase()) === 0 && W.length > 0 && B.current.setSelectionRange(W.length, e.length);
		}
	}), ze = !vd({
		array1: je.filteredOptions,
		array2: Ae,
		parser: z
	}), Be = () => {
		if (de.current !== -1 && !vd({
			array1: je.filteredOptions,
			array2: Ae,
			parser: z
		}) && je.inputValue === W && (k ? U.length === je.value.length && je.value.every((e, t) => z(U[t]) === z(e)) : ((e, t) => (e ? z(e) : "") === (t ? z(t) : ""))(je.value, U))) {
			let e = je.filteredOptions[de.current];
			if (e) return Ae.findIndex((t) => z(t) === z(e));
		}
		return -1;
	}, Ve = _.useCallback(() => {
		if (!Ee) return;
		let e = Be();
		if (e !== -1) {
			Le({ index: e });
			return;
		}
		let t = k ? U[0] : U;
		if (Ae.length === 0 || t == null) {
			Re({
				diff: "reset",
				preserveScroll: ze && je.inputValue === W && je.filteredOptions?.length > 0 && Ae.length > je.filteredOptions.length && je.filteredOptions.every((e, t) => z(e) === z(Ae[t]))
			});
			return;
		}
		if (oe.current) {
			if (t != null) {
				let e = Ae[de.current];
				if (k && e && U.findIndex((t) => O(e, t)) !== -1 && je.filteredOptions?.length > 0) {
					Le({ index: de.current });
					return;
				}
				let n = Ae.findIndex((e) => O(e, t));
				n === -1 ? Re({ diff: "reset" }) : Ie({ index: n });
				return;
			}
			if (de.current >= Ae.length - 1) {
				Ie({ index: Ae.length - 1 });
				return;
			}
			Ie({ index: de.current });
		}
	}, [
		Ae.length,
		k ? !1 : U,
		Re,
		Ie,
		Le,
		Ee,
		W,
		k
	]), He = tl((e) => {
		Xc(oe, e), e && Ve();
	});
	_.useEffect(() => {
		(ze || Ee && !f) && Ve();
	}, [
		Ve,
		ze,
		Ee,
		f
	]), _.useEffect(() => {
		if (typeof window > "u") return;
		let e = () => {
			se.current = !0;
		};
		return window.addEventListener("blur", e), () => {
			window.removeEventListener("blur", e);
		};
	}, []);
	let Ue = (e) => {
		xe || (Se(!0), we(!0), me.current = !1, ee && ee(e));
	}, We = (e, t) => {
		xe && (Se(!1), pe.current = !1, fe.current = null, j && j(e, t));
	}, Ge = (e, t, n, r) => {
		if (k) {
			if (U.length === t.length && U.every((e, n) => e === t[n])) return;
		} else if (U === t) return;
		A && A(e, t, n, r), ge(t);
	}, Ke = (e, t, n = "selectOption", r = "options") => {
		let i = n, a = t;
		if (k) {
			a = Array.isArray(U) ? U.slice() : [];
			let e = a.findIndex((e) => O(t, e));
			e === -1 ? a.push(t) : r !== "freeSolo" && (a.splice(e, 1), i = "removeOption");
		}
		be(e, a, i), Ge(e, a, i, { option: t }), !f && (!e || !e.ctrlKey && !e.metaKey) && We(e, i), (o === !0 || o === "touch" && me.current || o === "mouse" && !me.current) && B.current.blur();
	};
	function qe(e, t) {
		if (e === -1) return -1;
		let n = e;
		for (;;) {
			if (t === "next" && n === U.length || t === "previous" && n === -1) return -1;
			let e = V.querySelector(`[data-item-index="${n}"]`);
			if (!e || !e.hasAttribute("tabindex") || e.disabled || e.getAttribute("aria-disabled") === "true") n += t === "next" ? 1 : -1;
			else return n;
		}
	}
	let Je = (e, t) => {
		if (!k) return;
		W === "" && We(e, "toggleInput");
		let n = ce;
		ce === -1 && t === "previous" ? (n = U.length - 1, y && W !== "" && (_e(""), N && N(e, "", "reset"))) : (n += t === "next" ? 1 : -1, n < 0 && (n = 0), n === U.length && (n = -1)), n = qe(n, t), le(n), Ne(n);
	}, Ye = (e) => {
		_e(""), N && N(e, "", "clear"), Ge(e, k ? [] : null, "clear");
	}, Xe = (e) => (t) => {
		if (e.onKeyDown && e.onKeyDown(t), !t.defaultMuiPrevented && (ce !== -1 && !["ArrowLeft", "ArrowRight"].includes(t.key) && (le(-1), Ne(-1)), t.which !== 229)) switch (t.key) {
			case "Home":
				Ee && w && (t.preventDefault(), Re({
					diff: "start",
					direction: "next",
					reason: "keyboard",
					event: t
				}));
				break;
			case "End":
				Ee && w && (t.preventDefault(), Re({
					diff: "end",
					direction: "previous",
					reason: "keyboard",
					event: t
				}));
				break;
			case "PageUp":
				t.preventDefault(), Re({
					diff: -5,
					direction: "previous",
					reason: "keyboard",
					event: t
				}), Ue(t);
				break;
			case "PageDown":
				t.preventDefault(), Re({
					diff: Sd,
					direction: "next",
					reason: "keyboard",
					event: t
				}), Ue(t);
				break;
			case "ArrowDown":
				t.preventDefault(), Re({
					diff: 1,
					direction: "next",
					reason: "keyboard",
					event: t
				}), Ue(t);
				break;
			case "ArrowUp":
				t.preventDefault(), Re({
					diff: -1,
					direction: "previous",
					reason: "keyboard",
					event: t
				}), Ue(t);
				break;
			case "ArrowLeft": {
				let e = B.current;
				if (!(e && e.selectionStart === 0 && e.selectionEnd === 0)) return;
				!k && L && U != null ? (y && W !== "" && (_e(""), N && N(t, "", "reset")), le(0), Ne(0)) : Je(t, "previous");
				break;
			}
			case "ArrowRight":
				!k && L ? (le(-1), Ne(-1)) : Je(t, "next");
				break;
			case "Enter": {
				let e = !y || Ce || fe.current !== null;
				if (de.current !== -1 && Ee && e && !pe.current) {
					let e = Ae[de.current], n = b ? b(e) : !1;
					if (t.preventDefault(), n) return;
					Ke(t, e, "selectOption"), r && B.current.setSelectionRange(B.current.value.length, B.current.value.length);
				} else y && W !== "" && Te === !1 ? (k && t.preventDefault(), Ke(t, W, "createOption", "freeSolo")) : Ee && pe.current && (t.preventDefault(), We(t, "escape"));
				break;
			}
			case "Escape":
				Ee ? (t.preventDefault(), t.stopPropagation(), We(t, "escape")) : c && (W !== "" || k && U.length > 0 || L) && (t.preventDefault(), t.stopPropagation(), Ye(t));
				break;
			case "Backspace":
				if (k && !I && W === "" && U.length > 0) {
					let e = ce === -1 ? U.length - 1 : ce, n = U.slice();
					n.splice(e, 1), Ge(t, n, "removeOption", { option: U[e] });
				}
				!k && L && !I && W === "" && Ge(t, null, "removeOption", { option: U });
				break;
			case "Delete":
				if (k && !I && W === "" && U.length > 0 && ce !== -1) {
					let e = ce, n = U.slice();
					n.splice(e, 1), Ge(t, n, "removeOption", { option: U[e] });
				}
				!k && L && !I && W === "" && Ge(t, null, "removeOption", { option: U });
				break;
			default:
		}
	}, Ze = (e) => {
		if (ye(!0), ce !== -1 && (le(-1), Ne(-1)), se.current) {
			se.current = !1;
			return;
		}
		P && !ie.current && Ue(e);
	}, Qe = (e) => {
		if (t(oe)) {
			B.current.focus();
			return;
		}
		ye(!1), ae.current = !0, ie.current = !1, a && de.current !== -1 && Ee && fe.current !== "mouse" && fe.current !== "touch" ? Ke(e, Ae[de.current], "blur") : a && y && W !== "" ? Ke(e, W, "blur", "freeSolo") : s && be(e, U, "blur"), We(e, "blur");
	}, $e = (e) => {
		let t = e.target.value, n = W !== t;
		n && (_e(t), pe.current = !1, N && N(e, t, "input")), t === "" ? !d && !k && !L && Ge(e, null, "clear") : Ue(e), n && we(!1);
	}, et = (e) => {
		let t = Number(e.currentTarget.getAttribute("data-option-index"));
		de.current === t ? fe.current = "mouse" : Ie({
			event: e,
			index: t,
			reason: "mouse"
		}), me.current || (pe.current = !1);
	}, tt = (e) => {
		pe.current = !1, Ie({
			event: e,
			index: Number(e.currentTarget.getAttribute("data-option-index")),
			reason: "touch"
		}), me.current = !0;
	}, nt = (e) => {
		Ke(e, Ae[Number(e.currentTarget.getAttribute("data-option-index"))], "selectOption"), me.current = !1;
	}, rt = (e) => (t) => {
		let n = U.slice();
		n.splice(e, 1), Ge(t, n, "removeOption", { option: U[e] });
	}, it = (e) => {
		Ge(e, null, "removeOption", { option: U });
	}, at = (e) => {
		xe ? We(e, "toggleInput") : Ue(e);
	}, ot = (e) => {
		gd(e.currentTarget, e.target) && (V && !gd(V, e.target) || e.target.getAttribute("id") !== R && e.preventDefault());
	}, st = (e) => {
		gd(e.currentTarget, e.target) && (V && !gd(V, e.target) || (B.current.focus(), ne && ae.current && B.current.selectionEnd - B.current.selectionStart === 0 && B.current.select(), ae.current = !1));
	}, ct = (e) => {
		!p && (W === "" || !xe) && e.button === 0 && at(e);
	}, lt = y && W.length > 0;
	lt ||= k ? U.length > 0 : U !== null;
	let ut = Ae;
	return C && (ut = Ae.reduce((e, t, n) => {
		let r = C(t);
		return e.length > 0 && e[e.length - 1].group === r ? e[e.length - 1].options.push(t) : e.push({
			key: n,
			index: n,
			group: r,
			options: [t]
		}), e;
	}, [])), p && ve && Qe(), {
		getRootProps: (e = {}) => ({
			...e,
			onKeyDown: Xe(e),
			onMouseDown: ot,
			onClick: st
		}),
		getInputLabelProps: () => ({
			id: `${R}-label`,
			htmlFor: R
		}),
		getInputProps: () => ({
			id: R,
			value: W,
			onBlur: Qe,
			onFocus: Ze,
			onChange: $e,
			onMouseDown: ct,
			"aria-activedescendant": Ee ? "" : null,
			"aria-autocomplete": r ? "both" : "list",
			"aria-controls": Me ? `${R}-listbox` : void 0,
			"aria-expanded": Me,
			autoComplete: "off",
			ref: B,
			autoCapitalize: "none",
			spellCheck: "false",
			role: "combobox",
			disabled: p
		}),
		getClearProps: () => ({
			tabIndex: -1,
			type: "button",
			onClick: (e) => {
				ie.current = !0, Ye(e);
			}
		}),
		getItemProps: ({ index: e = 0 } = {}) => ({
			...k && { key: e },
			"data-item-index": e,
			tabIndex: -1,
			...!I && { onDelete: k ? rt(e) : it }
		}),
		getPopupIndicatorProps: () => ({
			tabIndex: -1,
			type: "button",
			onClick: at
		}),
		getListboxProps: () => ({
			role: "listbox",
			id: `${R}-listbox`,
			"aria-labelledby": `${R}-label`,
			"aria-multiselectable": k || void 0,
			ref: He,
			onMouseDown: (e) => {
				e.preventDefault();
			},
			onScroll: () => {
				me.current && (pe.current = !0);
			}
		}),
		getOptionProps: ({ index: e, option: t }) => {
			let n = ke(t), r = b ? b(t) : !1;
			return {
				key: x?.(t) ?? z(t),
				tabIndex: -1,
				role: "option",
				id: `${R}-option-${e}`,
				onMouseMove: et,
				onClick: nt,
				onTouchStart: tt,
				"data-option-index": e,
				"aria-disabled": r,
				"aria-selected": n
			};
		},
		id: R,
		inputValue: W,
		value: U,
		dirty: lt,
		expanded: Ee && V,
		popupOpen: Ee,
		focused: ve || ce !== -1,
		anchorEl: V,
		setAnchorEl: H,
		focusedItem: ce,
		groupedOptions: ut
	};
}
var Od = "bottom", kd = "right", Ad = "left", jd = "auto", Md = [
	"top",
	Od,
	kd,
	Ad
], Nd = "start", Pd = "clippingParents", Fd = "viewport", Id = "popper", Ld = "reference", Rd = /* @__PURE__ */ Md.reduce(function(e, t) {
	return e.concat([t + "-" + Nd, t + "-end"]);
}, []), zd = /* @__PURE__ */ [].concat(Md, [jd]).reduce(function(e, t) {
	return e.concat([
		t,
		t + "-" + Nd,
		t + "-end"
	]);
}, []), Bd = [
	"beforeRead",
	"read",
	"afterRead",
	"beforeMain",
	"main",
	"afterMain",
	"beforeWrite",
	"write",
	"afterWrite"
];
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function Vd(e) {
	return e ? (e.nodeName || "").toLowerCase() : null;
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function Hd(e) {
	if (e == null) return window;
	if (e.toString() !== "[object Window]") {
		var t = e.ownerDocument;
		return t && t.defaultView || window;
	}
	return e;
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function Ud(e) {
	return e instanceof Hd(e).Element || e instanceof Element;
}
function Wd(e) {
	return e instanceof Hd(e).HTMLElement || e instanceof HTMLElement;
}
function Gd(e) {
	return typeof ShadowRoot > "u" ? !1 : e instanceof Hd(e).ShadowRoot || e instanceof ShadowRoot;
}
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function Kd(e) {
	var t = e.state;
	Object.keys(t.elements).forEach(function(e) {
		var n = t.styles[e] || {}, r = t.attributes[e] || {}, i = t.elements[e];
		!Wd(i) || !Vd(i) || (Object.assign(i.style, n), Object.keys(r).forEach(function(e) {
			var t = r[e];
			t === !1 ? i.removeAttribute(e) : i.setAttribute(e, t === !0 ? "" : t);
		}));
	});
}
function qd(e) {
	var t = e.state, n = {
		popper: {
			position: t.options.strategy,
			left: "0",
			top: "0",
			margin: "0"
		},
		arrow: { position: "absolute" },
		reference: {}
	};
	return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
		Object.keys(t.elements).forEach(function(e) {
			var r = t.elements[e], i = t.attributes[e] || {}, a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function(e, t) {
				return e[t] = "", e;
			}, {});
			!Wd(r) || !Vd(r) || (Object.assign(r.style, a), Object.keys(i).forEach(function(e) {
				r.removeAttribute(e);
			}));
		});
	};
}
var Jd = {
	name: "applyStyles",
	enabled: !0,
	phase: "write",
	fn: Kd,
	effect: qd,
	requires: ["computeStyles"]
};
//#endregion
//#region node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function Yd(e) {
	return e.split("-")[0];
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/math.js
var Xd = Math.max, Zd = Math.min, Qd = Math.round;
//#endregion
//#region node_modules/@popperjs/core/lib/utils/userAgent.js
function $d() {
	var e = navigator.userAgentData;
	return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(e) {
		return e.brand + "/" + e.version;
	}).join(" ") : navigator.userAgent;
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function ef() {
	return !/^((?!chrome|android).)*safari/i.test($d());
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function tf(e, t, n) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	var r = e.getBoundingClientRect(), i = 1, a = 1;
	t && Wd(e) && (i = e.offsetWidth > 0 && Qd(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Qd(r.height) / e.offsetHeight || 1);
	var o = (Ud(e) ? Hd(e) : window).visualViewport, s = !ef() && n, c = (r.left + (s && o ? o.offsetLeft : 0)) / i, l = (r.top + (s && o ? o.offsetTop : 0)) / a, u = r.width / i, d = r.height / a;
	return {
		width: u,
		height: d,
		top: l,
		right: c + u,
		bottom: l + d,
		left: c,
		x: c,
		y: l
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function nf(e) {
	var t = tf(e), n = e.offsetWidth, r = e.offsetHeight;
	return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
		x: e.offsetLeft,
		y: e.offsetTop,
		width: n,
		height: r
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/contains.js
function rf(e, t) {
	var n = t.getRootNode && t.getRootNode();
	if (e.contains(t)) return !0;
	if (n && Gd(n)) {
		var r = t;
		do {
			if (r && e.isSameNode(r)) return !0;
			r = r.parentNode || r.host;
		} while (r);
	}
	return !1;
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function af(e) {
	return Hd(e).getComputedStyle(e);
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function of(e) {
	return [
		"table",
		"td",
		"th"
	].indexOf(Vd(e)) >= 0;
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function sf(e) {
	return ((Ud(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function cf(e) {
	return Vd(e) === "html" ? e : e.assignedSlot || e.parentNode || (Gd(e) ? e.host : null) || sf(e);
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function lf(e) {
	return !Wd(e) || af(e).position === "fixed" ? null : e.offsetParent;
}
function uf(e) {
	var t = /firefox/i.test($d());
	if (/Trident/i.test($d()) && Wd(e) && af(e).position === "fixed") return null;
	var n = cf(e);
	for (Gd(n) && (n = n.host); Wd(n) && ["html", "body"].indexOf(Vd(n)) < 0;) {
		var r = af(n);
		if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none") return n;
		n = n.parentNode;
	}
	return null;
}
function df(e) {
	for (var t = Hd(e), n = lf(e); n && of(n) && af(n).position === "static";) n = lf(n);
	return n && (Vd(n) === "html" || Vd(n) === "body" && af(n).position === "static") ? t : n || uf(e) || t;
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function ff(e) {
	return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/within.js
function pf(e, t, n) {
	return Xd(e, Zd(t, n));
}
function mf(e, t, n) {
	var r = pf(e, t, n);
	return r > n ? n : r;
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function hf() {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function gf(e) {
	return Object.assign({}, hf(), e);
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function _f(e, t) {
	return t.reduce(function(t, n) {
		return t[n] = e, t;
	}, {});
}
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/arrow.js
var vf = function(e, t) {
	return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, gf(typeof e == "number" ? _f(e, Md) : e);
};
function yf(e) {
	var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, s = Yd(n.placement), c = ff(s), l = ["left", "right"].indexOf(s) >= 0 ? "height" : "width";
	if (!(!a || !o)) {
		var u = vf(i.padding, n), d = nf(a), f = c === "y" ? "top" : Ad, p = c === "y" ? Od : kd, m = n.rects.reference[l] + n.rects.reference[c] - o[c] - n.rects.popper[l], h = o[c] - n.rects.reference[c], g = df(a), _ = g ? c === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, v = m / 2 - h / 2, y = u[f], b = _ - d[l] - u[p], x = _ / 2 - d[l] / 2 + v, S = pf(y, x, b), C = c;
		n.modifiersData[r] = (t = {}, t[C] = S, t.centerOffset = S - x, t);
	}
}
function bf(e) {
	var t = e.state, n = e.options.element, r = n === void 0 ? "[data-popper-arrow]" : n;
	r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || rf(t.elements.popper, r) && (t.elements.arrow = r));
}
var xf = {
	name: "arrow",
	enabled: !0,
	phase: "main",
	fn: yf,
	effect: bf,
	requires: ["popperOffsets"],
	requiresIfExists: ["preventOverflow"]
};
//#endregion
//#region node_modules/@popperjs/core/lib/utils/getVariation.js
function Sf(e) {
	return e.split("-")[1];
}
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var Cf = {
	top: "auto",
	right: "auto",
	bottom: "auto",
	left: "auto"
};
function wf(e, t) {
	var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
	return {
		x: Qd(n * i) / i || 0,
		y: Qd(r * i) / i || 0
	};
}
function Tf(e) {
	var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, s = e.position, c = e.gpuAcceleration, l = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = o.x, p = f === void 0 ? 0 : f, m = o.y, h = m === void 0 ? 0 : m, g = typeof u == "function" ? u({
		x: p,
		y: h
	}) : {
		x: p,
		y: h
	};
	p = g.x, h = g.y;
	var _ = o.hasOwnProperty("x"), v = o.hasOwnProperty("y"), y = Ad, b = "top", x = window;
	if (l) {
		var S = df(n), C = "clientHeight", w = "clientWidth";
		if (S === Hd(n) && (S = sf(n), af(S).position !== "static" && s === "absolute" && (C = "scrollHeight", w = "scrollWidth")), S = S, i === "top" || (i === "left" || i === "right") && a === "end") {
			b = Od;
			var T = d && S === x && x.visualViewport ? x.visualViewport.height : S[C];
			h -= T - r.height, h *= c ? 1 : -1;
		}
		if (i === "left" || (i === "top" || i === "bottom") && a === "end") {
			y = kd;
			var E = d && S === x && x.visualViewport ? x.visualViewport.width : S[w];
			p -= E - r.width, p *= c ? 1 : -1;
		}
	}
	var D = Object.assign({ position: s }, l && Cf), O = u === !0 ? wf({
		x: p,
		y: h
	}, Hd(n)) : {
		x: p,
		y: h
	};
	if (p = O.x, h = O.y, c) {
		var k;
		return Object.assign({}, D, (k = {}, k[b] = v ? "0" : "", k[y] = _ ? "0" : "", k.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + h + "px)" : "translate3d(" + p + "px, " + h + "px, 0)", k));
	}
	return Object.assign({}, D, (t = {}, t[b] = v ? h + "px" : "", t[y] = _ ? p + "px" : "", t.transform = "", t));
}
function Ef(e) {
	var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, a = n.adaptive, o = a === void 0 ? !0 : a, s = n.roundOffsets, c = s === void 0 ? !0 : s, l = {
		placement: Yd(t.placement),
		variation: Sf(t.placement),
		popper: t.elements.popper,
		popperRect: t.rects.popper,
		gpuAcceleration: i,
		isFixed: t.options.strategy === "fixed"
	};
	t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Tf(Object.assign({}, l, {
		offsets: t.modifiersData.popperOffsets,
		position: t.options.strategy,
		adaptive: o,
		roundOffsets: c
	})))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Tf(Object.assign({}, l, {
		offsets: t.modifiersData.arrow,
		position: "absolute",
		adaptive: !1,
		roundOffsets: c
	})))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Df = {
	name: "computeStyles",
	enabled: !0,
	phase: "beforeWrite",
	fn: Ef,
	data: {}
}, Of = { passive: !0 };
function kf(e) {
	var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, o = r.resize, s = o === void 0 ? !0 : o, c = Hd(t.elements.popper), l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
	return a && l.forEach(function(e) {
		e.addEventListener("scroll", n.update, Of);
	}), s && c.addEventListener("resize", n.update, Of), function() {
		a && l.forEach(function(e) {
			e.removeEventListener("scroll", n.update, Of);
		}), s && c.removeEventListener("resize", n.update, Of);
	};
}
var Af = {
	name: "eventListeners",
	enabled: !0,
	phase: "write",
	fn: function() {},
	effect: kf,
	data: {}
}, jf = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function Mf(e) {
	return e.replace(/left|right|bottom|top/g, function(e) {
		return jf[e];
	});
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var Nf = {
	start: "end",
	end: "start"
};
function Pf(e) {
	return e.replace(/start|end/g, function(e) {
		return Nf[e];
	});
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function Ff(e) {
	var t = Hd(e);
	return {
		scrollLeft: t.pageXOffset,
		scrollTop: t.pageYOffset
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function If(e) {
	return tf(sf(e)).left + Ff(e).scrollLeft;
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function Lf(e, t) {
	var n = Hd(e), r = sf(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		var l = ef();
		(l || !l && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	return {
		width: a,
		height: o,
		x: s + If(e),
		y: c
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function Rf(e) {
	var t = sf(e), n = Ff(e), r = e.ownerDocument?.body, i = Xd(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = Xd(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), o = -n.scrollLeft + If(e), s = -n.scrollTop;
	return af(r || t).direction === "rtl" && (o += Xd(t.clientWidth, r ? r.clientWidth : 0) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function zf(e) {
	var t = af(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
	return /auto|scroll|overlay|hidden/.test(n + i + r);
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function Bf(e) {
	return [
		"html",
		"body",
		"#document"
	].indexOf(Vd(e)) >= 0 ? e.ownerDocument.body : Wd(e) && zf(e) ? e : Bf(cf(e));
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function Vf(e, t) {
	t === void 0 && (t = []);
	var n = Bf(e), r = n === e.ownerDocument?.body, i = Hd(n), a = r ? [i].concat(i.visualViewport || [], zf(n) ? n : []) : n, o = t.concat(a);
	return r ? o : o.concat(Vf(cf(a)));
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function Hf(e) {
	return Object.assign({}, e, {
		left: e.x,
		top: e.y,
		right: e.x + e.width,
		bottom: e.y + e.height
	});
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function Uf(e, t) {
	var n = tf(e, !1, t === "fixed");
	return n.top += e.clientTop, n.left += e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Wf(e, t, n) {
	return t === "viewport" ? Hf(Lf(e, n)) : Ud(t) ? Uf(t, n) : Hf(Rf(sf(e)));
}
function Gf(e) {
	var t = Vf(cf(e)), n = ["absolute", "fixed"].indexOf(af(e).position) >= 0 && Wd(e) ? df(e) : e;
	return Ud(n) ? t.filter(function(e) {
		return Ud(e) && rf(e, n) && Vd(e) !== "body";
	}) : [];
}
function Kf(e, t, n, r) {
	var i = t === "clippingParents" ? Gf(e) : [].concat(t), a = [].concat(i, [n]), o = a[0], s = a.reduce(function(t, n) {
		var i = Wf(e, n, r);
		return t.top = Xd(i.top, t.top), t.right = Zd(i.right, t.right), t.bottom = Zd(i.bottom, t.bottom), t.left = Xd(i.left, t.left), t;
	}, Wf(e, o, r));
	return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/computeOffsets.js
function qf(e) {
	var t = e.reference, n = e.element, r = e.placement, i = r ? Yd(r) : null, a = r ? Sf(r) : null, o = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, c;
	switch (i) {
		case "top":
			c = {
				x: o,
				y: t.y - n.height
			};
			break;
		case Od:
			c = {
				x: o,
				y: t.y + t.height
			};
			break;
		case kd:
			c = {
				x: t.x + t.width,
				y: s
			};
			break;
		case Ad:
			c = {
				x: t.x - n.width,
				y: s
			};
			break;
		default: c = {
			x: t.x,
			y: t.y
		};
	}
	var l = i ? ff(i) : null;
	if (l != null) {
		var u = l === "y" ? "height" : "width";
		switch (a) {
			case Nd:
				c[l] = c[l] - (t[u] / 2 - n[u] / 2);
				break;
			case "end":
				c[l] = c[l] + (t[u] / 2 - n[u] / 2);
				break;
			default:
		}
	}
	return c;
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/detectOverflow.js
function Jf(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, o = a === void 0 ? e.strategy : a, s = n.boundary, c = s === void 0 ? Pd : s, l = n.rootBoundary, u = l === void 0 ? Fd : l, d = n.elementContext, f = d === void 0 ? Id : d, p = n.altBoundary, m = p === void 0 ? !1 : p, h = n.padding, g = h === void 0 ? 0 : h, _ = gf(typeof g == "number" ? _f(g, Md) : g), v = f === "popper" ? Ld : Id, y = e.rects.popper, b = e.elements[m ? v : f], x = Kf(Ud(b) ? b : b.contextElement || sf(e.elements.popper), c, u, o), S = tf(e.elements.reference), C = qf({
		reference: S,
		element: y,
		strategy: "absolute",
		placement: i
	}), w = Hf(Object.assign({}, y, C)), T = f === "popper" ? w : S, E = {
		top: x.top - T.top + _.top,
		bottom: T.bottom - x.bottom + _.bottom,
		left: x.left - T.left + _.left,
		right: T.right - x.right + _.right
	}, D = e.modifiersData.offset;
	if (f === "popper" && D) {
		var O = D[i];
		Object.keys(E).forEach(function(e) {
			var t = ["right", "bottom"].indexOf(e) >= 0 ? 1 : -1, n = ["top", "bottom"].indexOf(e) >= 0 ? "y" : "x";
			E[e] += O[n] * t;
		});
	}
	return E;
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function Yf(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, o = n.padding, s = n.flipVariations, c = n.allowedAutoPlacements, l = c === void 0 ? zd : c, u = Sf(r), d = u ? s ? Rd : Rd.filter(function(e) {
		return Sf(e) === u;
	}) : Md, f = d.filter(function(e) {
		return l.indexOf(e) >= 0;
	});
	f.length === 0 && (f = d);
	var p = f.reduce(function(t, n) {
		return t[n] = Jf(e, {
			placement: n,
			boundary: i,
			rootBoundary: a,
			padding: o
		})[Yd(n)], t;
	}, {});
	return Object.keys(p).sort(function(e, t) {
		return p[e] - p[t];
	});
}
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/flip.js
function Xf(e) {
	if (Yd(e) === "auto") return [];
	var t = Mf(e);
	return [
		Pf(e),
		t,
		Pf(t)
	];
}
function Zf(e) {
	var t = e.state, n = e.options, r = e.name;
	if (!t.modifiersData[r]._skip) {
		for (var i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !0 : o, c = n.fallbackPlacements, l = n.padding, u = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, m = p === void 0 ? !0 : p, h = n.allowedAutoPlacements, g = t.options.placement, _ = Yd(g) === g, v = c || (_ || !m ? [Mf(g)] : Xf(g)), y = [g].concat(v).reduce(function(e, n) {
			return e.concat(Yd(n) === "auto" ? Yf(t, {
				placement: n,
				boundary: u,
				rootBoundary: d,
				padding: l,
				flipVariations: m,
				allowedAutoPlacements: h
			}) : n);
		}, []), b = t.rects.reference, x = t.rects.popper, S = /* @__PURE__ */ new Map(), C = !0, w = y[0], T = 0; T < y.length; T++) {
			var E = y[T], D = Yd(E), O = Sf(E) === Nd, k = ["top", Od].indexOf(D) >= 0, A = k ? "width" : "height", j = Jf(t, {
				placement: E,
				boundary: u,
				rootBoundary: d,
				altBoundary: f,
				padding: l
			}), M = k ? O ? kd : Ad : O ? Od : "top";
			b[A] > x[A] && (M = Mf(M));
			var N = Mf(M), ee = [];
			if (a && ee.push(j[D] <= 0), s && ee.push(j[M] <= 0, j[N] <= 0), ee.every(function(e) {
				return e;
			})) {
				w = E, C = !1;
				break;
			}
			S.set(E, ee);
		}
		if (C) for (var te = m ? 3 : 1, P = function(e) {
			var t = y.find(function(t) {
				var n = S.get(t);
				if (n) return n.slice(0, e).every(function(e) {
					return e;
				});
			});
			if (t) return w = t, "break";
		}, F = te; F > 0 && P(F) !== "break"; F--);
		t.placement !== w && (t.modifiersData[r]._skip = !0, t.placement = w, t.reset = !0);
	}
}
var Qf = {
	name: "flip",
	enabled: !0,
	phase: "main",
	fn: Zf,
	requiresIfExists: ["offset"],
	data: { _skip: !1 }
};
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/hide.js
function $f(e, t, n) {
	return n === void 0 && (n = {
		x: 0,
		y: 0
	}), {
		top: e.top - t.height - n.y,
		right: e.right - t.width + n.x,
		bottom: e.bottom - t.height + n.y,
		left: e.left - t.width - n.x
	};
}
function ep(e) {
	return [
		"top",
		kd,
		Od,
		Ad
	].some(function(t) {
		return e[t] >= 0;
	});
}
function tp(e) {
	var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, o = Jf(t, { elementContext: "reference" }), s = Jf(t, { altBoundary: !0 }), c = $f(o, r), l = $f(s, i, a), u = ep(c), d = ep(l);
	t.modifiersData[n] = {
		referenceClippingOffsets: c,
		popperEscapeOffsets: l,
		isReferenceHidden: u,
		hasPopperEscaped: d
	}, t.attributes.popper = Object.assign({}, t.attributes.popper, {
		"data-popper-reference-hidden": u,
		"data-popper-escaped": d
	});
}
var np = {
	name: "hide",
	enabled: !0,
	phase: "main",
	requiresIfExists: ["preventOverflow"],
	fn: tp
};
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/offset.js
function rp(e, t, n) {
	var r = Yd(e), i = ["left", "top"].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, o = a[0], s = a[1];
	return o ||= 0, s = (s || 0) * i, ["left", "right"].indexOf(r) >= 0 ? {
		x: s,
		y: o
	} : {
		x: o,
		y: s
	};
}
function ip(e) {
	var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, o = zd.reduce(function(e, n) {
		return e[n] = rp(n, t.rects, a), e;
	}, {}), s = o[t.placement], c = s.x, l = s.y;
	t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = o;
}
var ap = {
	name: "offset",
	enabled: !0,
	phase: "main",
	requires: ["popperOffsets"],
	fn: ip
};
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function op(e) {
	var t = e.state, n = e.name;
	t.modifiersData[n] = qf({
		reference: t.rects.reference,
		element: t.rects.popper,
		strategy: "absolute",
		placement: t.placement
	});
}
var sp = {
	name: "popperOffsets",
	enabled: !0,
	phase: "read",
	fn: op,
	data: {}
};
//#endregion
//#region node_modules/@popperjs/core/lib/utils/getAltAxis.js
function cp(e) {
	return e === "x" ? "y" : "x";
}
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function lp(e) {
	var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !1 : o, c = n.boundary, l = n.rootBoundary, u = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 ? !0 : f, m = n.tetherOffset, h = m === void 0 ? 0 : m, g = Jf(t, {
		boundary: c,
		rootBoundary: l,
		padding: d,
		altBoundary: u
	}), _ = Yd(t.placement), v = Sf(t.placement), y = !v, b = ff(_), x = cp(b), S = t.modifiersData.popperOffsets, C = t.rects.reference, w = t.rects.popper, T = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, E = typeof T == "number" ? {
		mainAxis: T,
		altAxis: T
	} : Object.assign({
		mainAxis: 0,
		altAxis: 0
	}, T), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, O = {
		x: 0,
		y: 0
	};
	if (S) {
		if (a) {
			var k = b === "y" ? "top" : Ad, A = b === "y" ? Od : kd, j = b === "y" ? "height" : "width", M = S[b], N = M + g[k], ee = M - g[A], te = p ? -w[j] / 2 : 0, P = v === "start" ? C[j] : w[j], F = v === "start" ? -w[j] : -C[j], I = t.elements.arrow, L = p && I ? nf(I) : {
				width: 0,
				height: 0
			}, ne = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : hf(), re = ne[k], R = ne[A], z = pf(0, C[j], L[j]), ie = y ? C[j] / 2 - te - z - re - E.mainAxis : P - z - re - E.mainAxis, ae = y ? -C[j] / 2 + te + z + R + E.mainAxis : F + z + R + E.mainAxis, B = t.elements.arrow && df(t.elements.arrow), oe = B ? b === "y" ? B.clientTop || 0 : B.clientLeft || 0 : 0, se = D?.[b] ?? 0, V = M + ie - se - oe, H = M + ae - se, ce = pf(p ? Zd(N, V) : N, M, p ? Xd(ee, H) : ee);
			S[b] = ce, O[b] = ce - M;
		}
		if (s) {
			var le = b === "x" ? "top" : Ad, ue = b === "x" ? Od : kd, de = S[x], fe = x === "y" ? "height" : "width", pe = de + g[le], me = de - g[ue], he = ["top", Ad].indexOf(_) !== -1, U = D?.[x] ?? 0, ge = he ? pe : de - C[fe] - w[fe] - U + E.altAxis, W = he ? de + C[fe] + w[fe] - U - E.altAxis : me, _e = p && he ? mf(ge, de, W) : pf(p ? ge : pe, de, p ? W : me);
			S[x] = _e, O[x] = _e - de;
		}
		t.modifiersData[r] = O;
	}
}
var up = {
	name: "preventOverflow",
	enabled: !0,
	phase: "main",
	fn: lp,
	requiresIfExists: ["offset"]
};
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function dp(e) {
	return {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function fp(e) {
	return e === Hd(e) || !Wd(e) ? Ff(e) : dp(e);
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function pp(e) {
	var t = e.getBoundingClientRect(), n = Qd(t.width) / e.offsetWidth || 1, r = Qd(t.height) / e.offsetHeight || 1;
	return n !== 1 || r !== 1;
}
function mp(e, t, n) {
	n === void 0 && (n = !1);
	var r = Wd(t), i = Wd(t) && pp(t), a = sf(t), o = tf(e, i, n), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = {
		x: 0,
		y: 0
	};
	return (r || !r && !n) && ((Vd(t) !== "body" || zf(a)) && (s = fp(t)), Wd(t) ? (c = tf(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = If(a))), {
		x: o.left + s.scrollLeft - c.x,
		y: o.top + s.scrollTop - c.y,
		width: o.width,
		height: o.height
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/orderModifiers.js
function hp(e) {
	var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
	e.forEach(function(e) {
		t.set(e.name, e);
	});
	function i(e) {
		n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach(function(e) {
			if (!n.has(e)) {
				var r = t.get(e);
				r && i(r);
			}
		}), r.push(e);
	}
	return e.forEach(function(e) {
		n.has(e.name) || i(e);
	}), r;
}
function gp(e) {
	var t = hp(e);
	return Bd.reduce(function(e, n) {
		return e.concat(t.filter(function(e) {
			return e.phase === n;
		}));
	}, []);
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/debounce.js
function _p(e) {
	var t;
	return function() {
		return t ||= new Promise(function(n) {
			Promise.resolve().then(function() {
				t = void 0, n(e());
			});
		}), t;
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/mergeByName.js
function vp(e) {
	var t = e.reduce(function(e, t) {
		var n = e[t.name];
		return e[t.name] = n ? Object.assign({}, n, t, {
			options: Object.assign({}, n.options, t.options),
			data: Object.assign({}, n.data, t.data)
		}) : t, e;
	}, {});
	return Object.keys(t).map(function(e) {
		return t[e];
	});
}
//#endregion
//#region node_modules/@popperjs/core/lib/createPopper.js
var yp = {
	placement: "bottom",
	modifiers: [],
	strategy: "absolute"
};
function bp() {
	return ![...arguments].some(function(e) {
		return !(e && typeof e.getBoundingClientRect == "function");
	});
}
function xp(e) {
	e === void 0 && (e = {});
	var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? yp : i;
	return function(e, t, n) {
		n === void 0 && (n = a);
		var i = {
			placement: "bottom",
			orderedModifiers: [],
			options: Object.assign({}, yp, a),
			modifiersData: {},
			elements: {
				reference: e,
				popper: t
			},
			attributes: {},
			styles: {}
		}, o = [], s = !1, c = {
			state: i,
			setOptions: function(n) {
				var o = typeof n == "function" ? n(i.options) : n;
				u(), i.options = Object.assign({}, a, i.options, o), i.scrollParents = {
					reference: Ud(e) ? Vf(e) : e.contextElement ? Vf(e.contextElement) : [],
					popper: Vf(t)
				};
				var s = gp(vp([].concat(r, i.options.modifiers)));
				return i.orderedModifiers = s.filter(function(e) {
					return e.enabled;
				}), l(), c.update();
			},
			forceUpdate: function() {
				if (!s) {
					var e = i.elements, t = e.reference, n = e.popper;
					if (bp(t, n)) {
						i.rects = {
							reference: mp(t, df(n), i.options.strategy === "fixed"),
							popper: nf(n)
						}, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(e) {
							return i.modifiersData[e.name] = Object.assign({}, e.data);
						});
						for (var r = 0; r < i.orderedModifiers.length; r++) {
							if (i.reset === !0) {
								i.reset = !1, r = -1;
								continue;
							}
							var a = i.orderedModifiers[r], o = a.fn, l = a.options, u = l === void 0 ? {} : l, d = a.name;
							typeof o == "function" && (i = o({
								state: i,
								options: u,
								name: d,
								instance: c
							}) || i);
						}
					}
				}
			},
			update: _p(function() {
				return new Promise(function(e) {
					c.forceUpdate(), e(i);
				});
			}),
			destroy: function() {
				u(), s = !0;
			}
		};
		if (!bp(e, t)) return c;
		c.setOptions(n).then(function(e) {
			!s && n.onFirstUpdate && n.onFirstUpdate(e);
		});
		function l() {
			i.orderedModifiers.forEach(function(e) {
				var t = e.name, n = e.options, r = n === void 0 ? {} : n, a = e.effect;
				if (typeof a == "function") {
					var s = a({
						state: i,
						name: t,
						instance: c,
						options: r
					});
					o.push(s || function() {});
				}
			});
		}
		function u() {
			o.forEach(function(e) {
				return e();
			}), o = [];
		}
		return c;
	};
}
var Sp = /* @__PURE__ */ xp({ defaultModifiers: [
	Af,
	sp,
	Df,
	Jd,
	ap,
	Qf,
	up,
	xf,
	np
] });
//#endregion
//#region node_modules/@mui/utils/useSlotProps/useSlotProps.mjs
function Cp(e) {
	let { elementType: t, externalSlotProps: n, ownerState: r, skipResolvingSlotProps: i = !1, ...a } = e, o = i ? {} : Bl(n, r), { props: s, internalRef: c } = Ul({
		...a,
		externalSlotProps: o
	}), l = rl(c, o?.ref, e.additionalProps?.ref);
	return zl(t, {
		...s,
		ref: l
	}, r);
}
//#endregion
//#region node_modules/@mui/utils/getReactElementRef/getReactElementRef.mjs
function wp(e) {
	return e?.props?.ref || null;
}
//#endregion
//#region node_modules/@mui/material/Portal/Portal.mjs
function Tp(e) {
	return typeof e == "function" ? e() : e;
}
var Ep = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let { children: n, container: r, disablePortal: i = !1 } = e, [a, o] = _.useState(null), s = rl(/* @__PURE__ */ _.isValidElement(n) ? wp(n) : null, t);
	if (li(() => {
		i || o(Tp(r) || document.body);
	}, [r, i]), li(() => {
		if (a && !i) return Xc(t, a), () => {
			Xc(t, null);
		};
	}, [
		t,
		a,
		i
	]), i) {
		if (/* @__PURE__ */ _.isValidElement(n)) {
			let e = { ref: s };
			return /* @__PURE__ */ _.cloneElement(n, e);
		}
		return n;
	}
	return a && /* @__PURE__ */ fl.createPortal(n, a);
});
//#endregion
//#region node_modules/@mui/material/Popper/popperClasses.mjs
function Dp(e) {
	return q("MuiPopper", e);
}
qr("MuiPopper", ["root"]);
//#endregion
//#region node_modules/@mui/material/Popper/BasePopper.mjs
function Op(e, t) {
	if (t === "ltr") return e;
	switch (e) {
		case "bottom-end": return "bottom-start";
		case "bottom-start": return "bottom-end";
		case "top-end": return "top-start";
		case "top-start": return "top-end";
		default: return e;
	}
}
function kp(e) {
	return typeof e == "function" ? e() : e;
}
function Ap(e) {
	return e.nodeType !== void 0;
}
var jp = (e) => {
	let { classes: t } = e;
	return At({ root: ["root"] }, Dp, t);
}, Mp = {}, Np = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let { anchorEl: n, children: r, direction: i, disablePortal: a, modifiers: o, open: s, placement: c, popperOptions: l, popperRef: u, slotProps: d = {}, slots: f = {}, TransitionProps: p, ownerState: m, ...h } = e, g = _.useRef(null), v = rl(g, t), y = _.useRef(null), b = rl(y, u), x = _.useRef(b);
	li(() => {
		x.current = b;
	}, [b]), _.useImperativeHandle(u, () => y.current, []);
	let S = Op(c, i), [C, w] = _.useState(S), [T, E] = _.useState(kp(n));
	_.useEffect(() => {
		y.current && y.current.forceUpdate();
	}), _.useEffect(() => {
		n && E(kp(n));
	}, [n]), li(() => {
		if (!T || !s) return;
		let e = (e) => {
			w(e.placement);
		}, t = [
			{
				name: "preventOverflow",
				options: { altBoundary: a }
			},
			{
				name: "flip",
				options: { altBoundary: a }
			},
			{
				name: "onUpdate",
				enabled: !0,
				phase: "afterWrite",
				fn: ({ state: t }) => {
					e(t);
				}
			}
		];
		o != null && (t = t.concat(o)), l && l.modifiers != null && (t = t.concat(l.modifiers));
		let n = Sp(T, g.current, {
			placement: S,
			...l,
			modifiers: t
		});
		x.current(n);
		let r = g.current;
		return () => {
			if (r) {
				let { style: e } = r, t = e.position, i = e.top, a = e.left, o = e.transform;
				n.destroy(), e.position = t, e.top = i, e.left = a, e.transform = o;
			} else n.destroy();
			x.current(null);
		};
	}, [
		T,
		a,
		o,
		s,
		l,
		S
	]);
	let D = { placement: C };
	p !== null && (D.TransitionProps = p);
	let O = jp(e), k = f.root ?? "div";
	return /* @__PURE__ */ (0, K.jsx)(k, {
		...Cp({
			elementType: k,
			externalSlotProps: d.root,
			externalForwardedProps: h,
			additionalProps: {
				role: "tooltip",
				ref: v
			},
			ownerState: e,
			className: O.root
		}),
		children: typeof r == "function" ? r(D) : r
	});
}), Pp = X(/* @__PURE__ */ _.forwardRef(function(e, t) {
	let { anchorEl: n, children: r, container: i, direction: a = "ltr", disablePortal: o = !1, keepMounted: s = !1, modifiers: c, open: l, placement: u = "bottom", popperOptions: d = Mp, popperRef: f, style: p, transition: m = !1, slotProps: h = {}, slots: g = {}, ...v } = e, [y, b] = _.useState(!0), x = () => {
		b(!1);
	}, S = () => {
		b(!0);
	};
	if (!s && !l && (!m || y)) return null;
	let C;
	if (i) C = i;
	else if (n) {
		let e = kp(n);
		C = e && Ap(e) ? Kc(e).body : Kc(null).body;
	}
	let w = !l && s && (!m || y) ? "none" : void 0, T = m ? {
		in: l,
		onEnter: x,
		onExited: S
	} : void 0;
	return /* @__PURE__ */ (0, K.jsx)(Ep, {
		disablePortal: o,
		container: C,
		children: /* @__PURE__ */ (0, K.jsx)(Np, {
			anchorEl: n,
			direction: a,
			disablePortal: o,
			modifiers: c,
			ref: t,
			open: m ? !y : l,
			placement: u,
			popperOptions: d,
			popperRef: f,
			slotProps: h,
			slots: g,
			...v,
			style: {
				position: "fixed",
				top: 0,
				left: 0,
				display: w,
				...p
			},
			TransitionProps: T,
			children: r
		})
	});
}), {
	name: "MuiPopper",
	slot: "Root"
})({}), Fp = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let n = Pi(), { anchorEl: r, component: i, container: a, disablePortal: o, keepMounted: s, modifiers: c, open: l, placement: u, popperOptions: d, popperRef: f, transition: p, slots: m, slotProps: h, ...g } = os({
		props: e,
		name: "MuiPopper"
	}), _ = {
		anchorEl: r,
		container: a,
		disablePortal: o,
		keepMounted: s,
		modifiers: c,
		open: l,
		placement: u,
		popperOptions: d,
		popperRef: f,
		transition: p,
		...g
	};
	return /* @__PURE__ */ (0, K.jsx)(Pp, {
		as: i,
		direction: n ? "rtl" : "ltr",
		slots: m,
		slotProps: h,
		..._,
		ref: t
	});
});
//#endregion
//#region node_modules/@mui/material/ListSubheader/listSubheaderClasses.mjs
function Ip(e) {
	return q("MuiListSubheader", e);
}
qr("MuiListSubheader", [
	"root",
	"colorPrimary",
	"colorInherit",
	"gutters",
	"inset",
	"sticky"
]);
//#endregion
//#region node_modules/@mui/material/ListSubheader/ListSubheader.mjs
var Lp = (e) => {
	let { classes: t, color: n, disableGutters: r, inset: i, disableSticky: a } = e;
	return At({ root: [
		"root",
		n !== "default" && `color${Pc(n)}`,
		!r && "gutters",
		i && "inset",
		!a && "sticky"
	] }, Ip, t);
}, Rp = X("li", {
	name: "MuiListSubheader",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.root,
			n.color !== "default" && t[`color${Pc(n.color)}`],
			!n.disableGutters && t.gutters,
			n.inset && t.inset,
			!n.disableSticky && t.sticky
		];
	}
})(Z(({ theme: e }) => ({
	boxSizing: "border-box",
	lineHeight: "48px",
	listStyle: "none",
	color: (e.vars || e).palette.text.secondary,
	fontFamily: e.typography.fontFamily,
	fontWeight: e.typography.fontWeightMedium,
	fontSize: e.typography.pxToRem(14),
	variants: [
		{
			props: { color: "primary" },
			style: { color: (e.vars || e).palette.primary.main }
		},
		{
			props: { color: "inherit" },
			style: { color: "inherit" }
		},
		{
			props: ({ ownerState: e }) => !e.disableGutters,
			style: {
				paddingLeft: 16,
				paddingRight: 16
			}
		},
		{
			props: ({ ownerState: e }) => e.inset,
			style: { paddingLeft: 72 }
		},
		{
			props: ({ ownerState: e }) => !e.disableSticky,
			style: {
				position: "sticky",
				top: 0,
				zIndex: 1,
				backgroundColor: (e.vars || e).palette.background.paper
			}
		}
	]
}))), zp = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let n = os({
		props: e,
		name: "MuiListSubheader"
	}), { className: r, color: i = "default", component: a = "li", disableGutters: o = !1, disableSticky: s = !1, inset: c = !1, ...l } = n, u = {
		...n,
		color: i,
		component: a,
		disableGutters: o,
		disableSticky: s,
		inset: c
	};
	return /* @__PURE__ */ (0, K.jsx)(Rp, {
		as: a,
		className: G(Lp(u).root, r),
		ref: t,
		ownerState: u,
		...l
	});
}), Bp = Bc(/* @__PURE__ */ (0, K.jsx)("path", { d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" }), "Cancel");
//#endregion
//#region node_modules/@mui/material/Chip/chipClasses.mjs
function Vp(e) {
	return q("MuiChip", e);
}
var Hp = qr("MuiChip", [
	"root",
	"sizeSmall",
	"sizeMedium",
	"colorDefault",
	"colorError",
	"colorInfo",
	"colorPrimary",
	"colorSecondary",
	"colorSuccess",
	"colorWarning",
	"disabled",
	"clickable",
	"deletable",
	"outlined",
	"filled",
	"avatar",
	"icon",
	"label",
	"deleteIcon",
	"focusVisible"
]), Up = (e) => {
	let { classes: t, disabled: n, size: r, color: i, onDelete: a, clickable: o, variant: s } = e;
	return At({
		root: [
			"root",
			s,
			n && "disabled",
			`size${Pc(r)}`,
			`color${Pc(i)}`,
			o && "clickable",
			a && "deletable"
		],
		label: ["label"],
		avatar: ["avatar"],
		icon: ["icon"],
		deleteIcon: ["deleteIcon"]
	}, Vp, t);
}, Wp = X("div", {
	name: "MuiChip",
	slot: "Root",
	shouldForwardProp: (e) => is(e) && e !== "focusableWhenDisabled" && e !== "skipFocusWhenDisabled",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e, { color: r, clickable: i, onDelete: a, size: o, variant: s } = n;
		return [
			{ [`& .${Hp.avatar}`]: t.avatar },
			{ [`& .${Hp.icon}`]: t.icon },
			{ [`& .${Hp.deleteIcon}`]: t.deleteIcon },
			t.root,
			t[`size${Pc(o)}`],
			t[`color${Pc(r)}`],
			i && t.clickable,
			a && t.deletable,
			t[s]
		];
	}
})(Z(({ theme: e }) => {
	let t = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
	return {
		maxWidth: "100%",
		fontFamily: e.typography.fontFamily,
		fontSize: e.typography.pxToRem(13),
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		height: 32,
		lineHeight: 1.5,
		color: (e.vars || e).palette.text.primary,
		backgroundColor: (e.vars || e).palette.action.selected,
		borderRadius: 32 / 2,
		whiteSpace: "nowrap",
		transition: e.transitions.create(["background-color", "box-shadow"]),
		cursor: "unset",
		outline: 0,
		textDecoration: "none",
		border: 0,
		padding: 0,
		verticalAlign: "middle",
		boxSizing: "border-box",
		[`&.${Hp.disabled}`]: {
			opacity: (e.vars || e).palette.action.disabledOpacity,
			pointerEvents: "none"
		},
		[`& .${Hp.avatar}`]: {
			marginLeft: 5,
			marginRight: -6,
			width: 24,
			height: 24,
			color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
			fontSize: e.typography.pxToRem(12)
		},
		[`& .${Hp.icon}`]: {
			marginLeft: 5,
			marginRight: -6
		},
		[`& .${Hp.deleteIcon}`]: {
			WebkitTapHighlightColor: "transparent",
			color: e.alpha((e.vars || e).palette.text.primary, .26),
			fontSize: 22,
			cursor: "pointer",
			margin: "0 5px 0 -6px",
			"&:hover": { color: e.alpha((e.vars || e).palette.text.primary, .4) }
		},
		variants: [
			{
				props: { color: "primary" },
				style: { [`& .${Hp.avatar}`]: {
					color: (e.vars || e).palette.primary.contrastText,
					backgroundColor: (e.vars || e).palette.primary.dark
				} }
			},
			{
				props: { color: "secondary" },
				style: { [`& .${Hp.avatar}`]: {
					color: (e.vars || e).palette.secondary.contrastText,
					backgroundColor: (e.vars || e).palette.secondary.dark
				} }
			},
			{
				props: { size: "small" },
				style: {
					height: 24,
					[`& .${Hp.avatar}`]: {
						marginLeft: 4,
						marginRight: -4,
						width: 18,
						height: 18,
						fontSize: e.typography.pxToRem(10)
					},
					[`& .${Hp.icon}`]: {
						fontSize: 18,
						marginLeft: 4,
						marginRight: -4
					},
					[`& .${Hp.deleteIcon}`]: {
						fontSize: 16,
						marginRight: 4,
						marginLeft: -4
					}
				}
			},
			...Object.entries(e.palette).filter(Wu(["contrastText"])).map(([t]) => ({
				props: { color: t },
				style: {
					backgroundColor: (e.vars || e).palette[t].main,
					color: (e.vars || e).palette[t].contrastText,
					[`& .${Hp.deleteIcon}`]: {
						color: e.alpha((e.vars || e).palette[t].contrastText, .7),
						"&:hover, &:active": { color: (e.vars || e).palette[t].contrastText }
					}
				}
			})),
			{
				props: (e) => e.iconColor === e.color,
				style: { [`& .${Hp.icon}`]: { color: e.vars ? e.vars.palette.Chip.defaultIconColor : t } }
			},
			{
				props: (e) => e.iconColor === e.color && e.color !== "default",
				style: { [`& .${Hp.icon}`]: { color: "inherit" } }
			},
			{
				props: { onDelete: !0 },
				style: { [`&.${Hp.focusVisible}`]: { backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`) } }
			},
			...Object.entries(e.palette).filter(Wu(["dark"])).map(([t]) => ({
				props: {
					color: t,
					onDelete: !0
				},
				style: { [`&.${Hp.focusVisible}`]: { background: (e.vars || e).palette[t].dark } }
			})),
			{
				props: { clickable: !0 },
				style: {
					userSelect: "none",
					WebkitTapHighlightColor: "transparent",
					cursor: "pointer",
					"&:hover": { backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`) },
					[`&.${Hp.focusVisible}`]: { backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`) },
					"&:active": { boxShadow: (e.vars || e).shadows[1] }
				}
			},
			...Object.entries(e.palette).filter(Wu(["dark"])).map(([t]) => ({
				props: {
					color: t,
					clickable: !0
				},
				style: { [`&:hover, &.${Hp.focusVisible}`]: { backgroundColor: (e.vars || e).palette[t].dark } }
			})),
			{
				props: { variant: "outlined" },
				style: {
					backgroundColor: "transparent",
					border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
					[`&.${Hp.clickable}:hover`]: { backgroundColor: (e.vars || e).palette.action.hover },
					[`&.${Hp.focusVisible}`]: { backgroundColor: (e.vars || e).palette.action.focus },
					[`& .${Hp.avatar}`]: { marginLeft: 4 },
					[`& .${Hp.icon}`]: { marginLeft: 4 },
					[`& .${Hp.deleteIcon}`]: { marginRight: 5 }
				}
			},
			{
				props: {
					size: "small",
					variant: "outlined"
				},
				style: {
					[`& .${Hp.avatar}`]: { marginLeft: 2 },
					[`& .${Hp.icon}`]: { marginLeft: 2 },
					[`& .${Hp.deleteIcon}`]: { marginRight: 3 }
				}
			},
			...Object.entries(e.palette).filter(Wu()).map(([t]) => ({
				props: {
					variant: "outlined",
					color: t
				},
				style: {
					color: (e.vars || e).palette[t].main,
					border: `1px solid ${e.alpha((e.vars || e).palette[t].main, .7)}`,
					[`&.${Hp.clickable}:hover`]: { backgroundColor: e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity) },
					[`&.${Hp.focusVisible}`]: { backgroundColor: e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.focusOpacity) },
					[`& .${Hp.deleteIcon}`]: {
						color: e.alpha((e.vars || e).palette[t].main, .7),
						"&:hover, &:active": { color: (e.vars || e).palette[t].main }
					}
				}
			}))
		]
	};
})), Gp = X("span", {
	name: "MuiChip",
	slot: "Label"
})({
	overflow: "hidden",
	textOverflow: "ellipsis",
	paddingLeft: 12,
	paddingRight: 12,
	whiteSpace: "nowrap",
	variants: [
		{
			props: { variant: "outlined" },
			style: {
				paddingLeft: 11,
				paddingRight: 11
			}
		},
		{
			props: { size: "small" },
			style: {
				paddingLeft: 8,
				paddingRight: 8
			}
		},
		{
			props: {
				size: "small",
				variant: "outlined"
			},
			style: {
				paddingLeft: 7,
				paddingRight: 7
			}
		}
	]
});
function Kp(e) {
	return e.key === "Backspace" || e.key === "Delete";
}
var qp = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let n = os({
		props: e,
		name: "MuiChip"
	}), { avatar: r, className: i, clickable: a, color: o = "default", component: s, deleteIcon: c, disabled: l = !1, icon: u, label: d, onClick: f, onDelete: p, onKeyDown: m, onKeyUp: h, size: g = "medium", variant: v = "filled", tabIndex: y, skipFocusWhenDisabled: b = !1, slots: x = {}, slotProps: S = {}, ...C } = n, { nativeButton: w, ...T } = C, E = il(_.useRef(null), t), D = (e) => {
		e.stopPropagation(), p(e);
	}, O = (e) => {
		e.currentTarget === e.target && Kp(e) && e.preventDefault(), m && m(e);
	}, k = (e) => {
		e.currentTarget === e.target && p && Kp(e) && p(e), h && h(e);
	}, A = a !== !1 && f ? !0 : a, j = A || p ? Nu : s || "div", M = {
		...n,
		component: j,
		disabled: l,
		size: g,
		color: o,
		iconColor: /* @__PURE__ */ _.isValidElement(u) && u.props.color || o,
		onDelete: !!p,
		clickable: A,
		variant: v
	}, N = Up(M), ee = j === Nu ? {
		component: s || "div",
		internalNativeButton: !1,
		focusVisibleClassName: N.focusVisible,
		...p && { disableRipple: !0 },
		...w !== void 0 && { nativeButton: w }
	} : {}, te = null;
	p && (te = c && /* @__PURE__ */ _.isValidElement(c) ? /* @__PURE__ */ _.cloneElement(c, {
		className: G(c.props.className, N.deleteIcon),
		onClick: D
	}) : /* @__PURE__ */ (0, K.jsx)(Bp, {
		className: N.deleteIcon,
		onClick: D
	}));
	let P = null;
	r && /* @__PURE__ */ _.isValidElement(r) && (P = /* @__PURE__ */ _.cloneElement(r, { className: G(N.avatar, r.props.className) }));
	let F = null;
	u && /* @__PURE__ */ _.isValidElement(u) && (F = /* @__PURE__ */ _.cloneElement(u, { className: G(N.icon, u.props.className) }));
	let I = {
		slots: x,
		slotProps: S
	}, [L, ne] = Wl("root", {
		elementType: Wp,
		externalForwardedProps: {
			...I,
			...T
		},
		ownerState: M,
		shouldForwardComponentProp: !0,
		ref: E,
		className: G(N.root, i),
		additionalProps: {
			disabled: A && l ? !0 : void 0,
			tabIndex: b && l ? -1 : y,
			...ee
		},
		getSlotProps: (e) => ({
			...e,
			onClick: (t) => {
				e.onClick?.(t), f?.(t);
			},
			onKeyDown: (t) => {
				e.onKeyDown?.(t), O(t);
			},
			onKeyUp: (t) => {
				e.onKeyUp?.(t), k(t);
			}
		})
	}), [re, R] = Wl("label", {
		elementType: Gp,
		externalForwardedProps: I,
		ownerState: M,
		className: N.label
	});
	return /* @__PURE__ */ (0, K.jsxs)(L, {
		as: j,
		...ne,
		children: [
			P || F,
			/* @__PURE__ */ (0, K.jsx)(re, {
				...R,
				children: d
			}),
			te
		]
	});
});
//#endregion
//#region node_modules/@mui/material/TextareaAutosize/TextareaAutosize.mjs
function Jp(e) {
	return parseInt(e, 10) || 0;
}
var Yp = { shadow: {
	visibility: "hidden",
	position: "absolute",
	overflow: "hidden",
	height: 0,
	top: 0,
	left: 0,
	transform: "translateZ(0)"
} };
function Xp(e) {
	for (let t in e) return !1;
	return !0;
}
function Zp(e) {
	return Xp(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
var Qp = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let { onChange: n, maxRows: r, minRows: i = 1, style: a, value: o, ...s } = e, { current: c } = _.useRef(o != null), l = _.useRef(null), u = rl(t, l), d = _.useRef(null), f = _.useRef(null), p = _.useCallback(() => {
		let t = l.current, n = f.current;
		if (!t || !n) return;
		let a = Jc(t).getComputedStyle(t);
		if (a.width === "0px") return {
			outerHeightStyle: 0,
			overflowing: !1
		};
		n.style.width = a.width, n.value = t.value || e.placeholder || "x", n.value.slice(-1) === "\n" && (n.value += " ");
		let o = a.boxSizing, s = Jp(a.paddingBottom) + Jp(a.paddingTop), c = Jp(a.borderBottomWidth) + Jp(a.borderTopWidth), u = n.scrollHeight;
		n.value = "x";
		let d = n.scrollHeight, p = u;
		return i && (p = Math.max(Number(i) * d, p)), r && (p = Math.min(Number(r) * d, p)), p = Math.max(p, d), {
			outerHeightStyle: p + (o === "border-box" ? s + c : 0),
			overflowing: Math.abs(p - u) <= 1
		};
	}, [
		r,
		i,
		e.placeholder
	]), m = tl(() => {
		let e = l.current, t = p();
		if (!e || !t || Zp(t)) return !1;
		let n = t.outerHeightStyle;
		return d.current != null && d.current !== n;
	}), h = _.useCallback(() => {
		let e = l.current, t = p();
		if (!e || !t || Zp(t)) return;
		let n = t.outerHeightStyle;
		d.current !== n && (d.current = n, e.style.height = `${n}px`), e.style.overflow = t.overflowing ? "hidden" : "";
	}, [p]), g = _.useRef(-1);
	return li(() => {
		let e = Vc(h), t = l?.current;
		if (!t) return;
		let n = Jc(t);
		n.addEventListener("resize", e);
		let r;
		return typeof ResizeObserver < "u" && (r = new ResizeObserver(() => {
			m() && (r.unobserve(t), cancelAnimationFrame(g.current), h(), g.current = requestAnimationFrame(() => {
				r.observe(t);
			}));
		}), r.observe(t)), () => {
			e.clear(), cancelAnimationFrame(g.current), n.removeEventListener("resize", e), r && r.disconnect();
		};
	}, [
		p,
		h,
		m
	]), li(() => {
		h();
	}), /* @__PURE__ */ (0, K.jsxs)(_.Fragment, { children: [/* @__PURE__ */ (0, K.jsx)("textarea", {
		value: o,
		onChange: (e) => {
			c || h();
			let t = e.target, r = t.value.length, i = t.value.endsWith("\n"), a = t.selectionStart === r;
			i && a && t.setSelectionRange(r, r), n && n(e);
		},
		ref: u,
		rows: i,
		style: a,
		...s
	}), /* @__PURE__ */ (0, K.jsx)("textarea", {
		"aria-hidden": !0,
		className: e.className,
		readOnly: !0,
		ref: f,
		tabIndex: -1,
		style: {
			...Yp.shadow,
			...a,
			paddingTop: 0,
			paddingBottom: 0
		}
	})] });
}), $p = /* @__PURE__ */ _.createContext(void 0);
//#endregion
//#region node_modules/@mui/material/FormControl/useFormControl.mjs
function em({ props: e, states: t }) {
	let n = _.useContext($p), r = {};
	return t.forEach((t) => {
		let i = e[t];
		r[t] = i === void 0 && n ? n[t] : i;
	}), [r, n];
}
//#endregion
//#region node_modules/@mui/material/InputBase/utils.mjs
function tm(e) {
	return e != null && !(Array.isArray(e) && e.length === 0);
}
function nm(e, t = !1) {
	return e && (tm(e.value) && e.value !== "" || t && tm(e.defaultValue) && e.defaultValue !== "");
}
function rm(e) {
	return e.startAdornment;
}
//#endregion
//#region node_modules/@mui/material/InputBase/inputBaseClasses.mjs
function im(e) {
	return q("MuiInputBase", e);
}
var am = qr("MuiInputBase", [
	"root",
	"formControl",
	"focused",
	"disabled",
	"adornedStart",
	"adornedEnd",
	"error",
	"sizeSmall",
	"multiline",
	"colorSecondary",
	"fullWidth",
	"hiddenLabel",
	"readOnly",
	"input",
	"inputTypeSearch"
]), om, sm = "mui-auto-fill", cm = "mui-auto-fill-cancel", lm = (e, t) => {
	let { ownerState: n } = e;
	return [
		t.root,
		n.formControl && t.formControl,
		n.startAdornment && t.adornedStart,
		n.endAdornment && t.adornedEnd,
		n.error && t.error,
		n.size === "small" && t.sizeSmall,
		n.multiline && t.multiline,
		n.color && t[`color${Pc(n.color)}`],
		n.fullWidth && t.fullWidth,
		n.hiddenLabel && t.hiddenLabel
	];
}, um = (e, t) => {
	let { ownerState: n } = e;
	return [t.input, n.type === "search" && t.inputTypeSearch];
}, dm = (e) => {
	let { classes: t, color: n, disabled: r, error: i, endAdornment: a, focused: o, formControl: s, fullWidth: c, hiddenLabel: l, multiline: u, readOnly: d, size: f, startAdornment: p, type: m } = e;
	return At({
		root: [
			"root",
			`color${Pc(n)}`,
			r && "disabled",
			i && "error",
			c && "fullWidth",
			o && "focused",
			s && "formControl",
			f && f !== "medium" && `size${Pc(f)}`,
			u && "multiline",
			p && "adornedStart",
			a && "adornedEnd",
			l && "hiddenLabel",
			d && "readOnly"
		],
		input: [
			"input",
			r && "disabled",
			m === "search" && "inputTypeSearch",
			d && "readOnly"
		]
	}, im, t);
}, fm = X("div", {
	name: "MuiInputBase",
	slot: "Root",
	overridesResolver: lm
})(Z(({ theme: e }) => ({
	...e.typography.body1,
	color: (e.vars || e).palette.text.primary,
	lineHeight: "1.4375em",
	boxSizing: "border-box",
	position: "relative",
	cursor: "text",
	display: "inline-flex",
	alignItems: "center",
	[`&.${am.disabled}`]: {
		color: (e.vars || e).palette.text.disabled,
		cursor: "default"
	},
	variants: [
		{
			props: ({ ownerState: e }) => e.multiline,
			style: { padding: "4px 0 5px" }
		},
		{
			props: ({ ownerState: e, size: t }) => e.multiline && t === "small",
			style: { paddingTop: 1 }
		},
		{
			props: ({ ownerState: e }) => e.fullWidth,
			style: { width: "100%" }
		}
	]
}))), pm = X("input", {
	name: "MuiInputBase",
	slot: "Input",
	overridesResolver: um
})(Z(({ theme: e }) => {
	let t = e.palette.mode === "light", n = {
		color: "currentColor",
		...e.vars ? { opacity: e.vars.opacity.inputPlaceholder } : { opacity: t ? .42 : .5 },
		transition: e.transitions.create("opacity", { duration: e.transitions.duration.shorter })
	}, r = { opacity: "0 !important" }, i = e.vars ? { opacity: e.vars.opacity.inputPlaceholder } : { opacity: t ? .42 : .5 };
	return {
		font: "inherit",
		letterSpacing: "inherit",
		color: "currentColor",
		padding: "4px 0 5px",
		border: 0,
		boxSizing: "content-box",
		background: "none",
		height: "1.4375em",
		margin: 0,
		WebkitTapHighlightColor: "transparent",
		display: "block",
		minWidth: 0,
		width: "100%",
		"&::-webkit-input-placeholder": n,
		"&::-moz-placeholder": n,
		"&::-ms-input-placeholder": n,
		"&:focus": { outline: 0 },
		"&:invalid": { boxShadow: "none" },
		"&::-webkit-search-decoration": { WebkitAppearance: "none" },
		[`label[data-shrink=false] + .${am.formControl} &`]: {
			"&::-webkit-input-placeholder": r,
			"&::-moz-placeholder": r,
			"&::-ms-input-placeholder": r,
			"&:focus::-webkit-input-placeholder": i,
			"&:focus::-moz-placeholder": i,
			"&:focus::-ms-input-placeholder": i
		},
		[`&.${am.disabled}`]: {
			opacity: 1,
			WebkitTextFillColor: (e.vars || e).palette.text.disabled
		},
		variants: [
			{
				props: ({ ownerState: e }) => !e.disableInjectingGlobalStyles,
				style: {
					animationName: cm,
					animationDuration: "10ms",
					"&:-webkit-autofill": {
						animationDuration: "5000s",
						animationName: sm
					}
				}
			},
			{
				props: { size: "small" },
				style: { paddingTop: 1 }
			},
			{
				props: ({ ownerState: e }) => e.multiline,
				style: {
					height: "auto",
					resize: "none",
					padding: 0,
					paddingTop: 0
				}
			},
			{
				props: { type: "search" },
				style: { MozAppearance: "textfield" }
			}
		]
	};
})), mm = as({
	[`@keyframes ${sm}`]: { from: { animationName: sm } },
	[`@keyframes ${cm}`]: { from: { animationName: cm } }
}), hm = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let n = os({
		props: e,
		name: "MuiInputBase"
	}), { "aria-describedby": r, "aria-label": i, autoComplete: a, autoFocus: o, className: s, color: c, defaultValue: l, disabled: u, disableInjectingGlobalStyles: d, endAdornment: f, error: p, fullWidth: m = !1, id: h, inputComponent: g = "input", inputProps: v = {}, inputRef: y, margin: b, maxRows: x, minRows: S, multiline: C = !1, name: w, onBlur: T, onChange: E, onClick: D, onFocus: O, onKeyDown: k, onKeyUp: A, placeholder: j, readOnly: M, renderSuffix: N, rows: ee, size: te, slotProps: P = {}, slots: F = {}, startAdornment: I, type: L = "text", value: ne, ...re } = n, R = v.value == null ? ne : v.value, { current: z } = _.useRef(R != null), ie = _.useRef(), ae = _.useCallback((e) => {}, []), B = il(ie, y, v.ref, ae), [oe, se] = _.useState(!1), [V, H] = em({
		props: n,
		states: [
			"color",
			"disabled",
			"error",
			"hiddenLabel",
			"size",
			"required",
			"filled"
		]
	});
	V.focused = H ? H.focused : oe, _.useEffect(() => {
		!H && u && oe && (se(!1), T && T());
	}, [
		H,
		u,
		oe,
		T
	]);
	let ce = H && H.onFilled, le = H && H.onEmpty, ue = _.useCallback((e) => {
		nm(e) ? ce && ce() : le && le();
	}, [ce, le]);
	Zc(() => {
		z && ue({ value: R });
	}, [
		R,
		ue,
		z
	]), Zc(() => {
		if (!o) return;
		let e = ie.current;
		if (!e) return;
		let t = qc(e), n = Gc(t), r = n == null || n === t.body || n === t.documentElement;
		e === n ? H && H.onFocus ? H.onFocus() : se(!0) : r && e.focus();
	}, [o]);
	let de = (e) => {
		O && O(e), v.onFocus && v.onFocus(e), H && H.onFocus ? H.onFocus(e) : se(!0);
	}, fe = (e) => {
		T && T(e), v.onBlur && v.onBlur(e), H && H.onBlur ? H.onBlur(e) : se(!1);
	}, pe = (e, ...t) => {
		if (!z) {
			let t = e.target || ie.current;
			if (t == null) throw Error(Bt(1));
			ue({ value: t.value });
		}
		v.onChange && v.onChange(e, ...t), E && E(e, ...t);
	};
	_.useEffect(() => {
		ue(ie.current);
	}, []);
	let me = (e) => {
		ie.current && e.currentTarget === e.target && ie.current.focus(), D && D(e);
	}, he = g, U = v;
	C && he === "input" && (U = ee ? {
		type: void 0,
		minRows: ee,
		maxRows: ee,
		...U
	} : {
		type: void 0,
		maxRows: x,
		minRows: S,
		...U
	}, he = Qp);
	let ge = (e) => {
		ue(e.animationName === cm ? ie.current : { value: "x" });
	};
	_.useEffect(() => {
		H && H.setAdornedStart(!!I);
	}, [H, I]);
	let W = {
		...n,
		color: V.color || "primary",
		disabled: V.disabled,
		endAdornment: f,
		error: V.error,
		focused: V.focused,
		formControl: H,
		fullWidth: m,
		hiddenLabel: V.hiddenLabel,
		multiline: C,
		size: V.size,
		startAdornment: I,
		type: L
	}, _e = dm(W), ve = F.root || fm, ye = P.root || {}, be = F.input || pm;
	return U = {
		...U,
		...P.input
	}, /* @__PURE__ */ (0, K.jsxs)(_.Fragment, { children: [!d && typeof mm == "function" && (om ||= /* @__PURE__ */ (0, K.jsx)(mm, {})), /* @__PURE__ */ (0, K.jsxs)(ve, {
		...ye,
		ref: t,
		onClick: me,
		...re,
		...!Rl(ve) && { ownerState: {
			...W,
			...ye.ownerState
		} },
		className: G(_e.root, ye.className, s, M && "MuiInputBase-readOnly"),
		children: [
			I,
			/* @__PURE__ */ (0, K.jsx)($p.Provider, {
				value: null,
				children: /* @__PURE__ */ (0, K.jsx)(be, {
					"aria-invalid": V.error,
					"aria-describedby": r,
					"aria-label": i,
					autoComplete: a,
					autoFocus: o,
					defaultValue: l,
					disabled: V.disabled,
					id: h,
					onAnimationStart: ge,
					name: w,
					placeholder: j,
					readOnly: M,
					required: V.required,
					rows: ee,
					value: R,
					onKeyDown: k,
					onKeyUp: A,
					type: L,
					...U,
					...!Rl(be) && {
						as: he,
						ownerState: {
							...W,
							...U.ownerState
						}
					},
					ref: B,
					className: G(_e.input, U.className, M && "MuiInputBase-readOnly"),
					onBlur: fe,
					onChange: pe,
					onFocus: de
				})
			}),
			f,
			N ? N({
				...V,
				startAdornment: I
			}) : null
		]
	})] });
});
//#endregion
//#region node_modules/@mui/material/Input/inputClasses.mjs
function gm(e) {
	return q("MuiInput", e);
}
var _m = {
	...am,
	...qr("MuiInput", [
		"root",
		"underline",
		"input"
	])
};
//#endregion
//#region node_modules/@mui/material/OutlinedInput/outlinedInputClasses.mjs
function vm(e) {
	return q("MuiOutlinedInput", e);
}
var ym = {
	...am,
	...qr("MuiOutlinedInput", [
		"root",
		"notchedOutline",
		"input"
	])
};
//#endregion
//#region node_modules/@mui/material/FilledInput/filledInputClasses.mjs
function bm(e) {
	return q("MuiFilledInput", e);
}
var xm = {
	...am,
	...qr("MuiFilledInput", [
		"root",
		"underline",
		"input",
		"adornedStart",
		"adornedEnd",
		"sizeSmall",
		"multiline",
		"hiddenLabel"
	])
}, Sm = Bc(/* @__PURE__ */ (0, K.jsx)("path", { d: "M7 10l5 5 5-5z" }), "ArrowDropDown");
//#endregion
//#region node_modules/@mui/material/Autocomplete/autocompleteClasses.mjs
function Cm(e) {
	return q("MuiAutocomplete", e);
}
var wm = qr("MuiAutocomplete", /* @__PURE__ */ "root.expanded.fullWidth.focused.focusVisible.tag.tagSizeSmall.tagSizeMedium.hasPopupIcon.hasClearIcon.inputRoot.input.inputFocused.endAdornment.clearIndicator.popupIndicator.popupIndicatorOpen.popper.popperDisablePortal.paper.listbox.loading.noOptions.option.groupLabel.groupUl".split(".")), Tm, Em, Dm = (e) => {
	let { classes: t, disablePortal: n, expanded: r, focused: i, fullWidth: a, hasClearIcon: o, hasPopupIcon: s, inputFocused: c, popupOpen: l, size: u } = e;
	return At({
		root: [
			"root",
			r && "expanded",
			i && "focused",
			a && "fullWidth",
			o && "hasClearIcon",
			s && "hasPopupIcon"
		],
		inputRoot: ["inputRoot"],
		input: ["input", c && "inputFocused"],
		tag: ["tag", `tagSize${Pc(u)}`],
		endAdornment: ["endAdornment"],
		clearIndicator: ["clearIndicator"],
		popupIndicator: ["popupIndicator", l && "popupIndicatorOpen"],
		popper: ["popper", n && "popperDisablePortal"],
		paper: ["paper"],
		listbox: ["listbox"],
		loading: ["loading"],
		noOptions: ["noOptions"],
		option: ["option"],
		groupLabel: ["groupLabel"],
		groupUl: ["groupUl"]
	}, Cm, t);
}, Om = X("div", {
	name: "MuiAutocomplete",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e, { fullWidth: r, hasClearIcon: i, hasPopupIcon: a, inputFocused: o, size: s } = n;
		return [
			{ [`& .${wm.tag}`]: t.tag },
			{ [`& .${wm.tag}`]: t[`tagSize${Pc(s)}`] },
			{ [`& .${wm.inputRoot}`]: t.inputRoot },
			{ [`& .${wm.input}`]: t.input },
			{ [`& .${wm.input}`]: o && t.inputFocused },
			t.root,
			r && t.fullWidth,
			a && t.hasPopupIcon,
			i && t.hasClearIcon
		];
	}
})({
	[`&.${wm.focused} .${wm.clearIndicator}`]: { visibility: "visible" },
	"@media (pointer: fine)": { [`&:hover .${wm.clearIndicator}`]: { visibility: "visible" } },
	[`& .${wm.tag}`]: {
		margin: 3,
		maxWidth: "calc(100% - 6px)"
	},
	[`& .${wm.inputRoot}`]: {
		[`.${wm.hasPopupIcon}&, .${wm.hasClearIcon}&`]: { paddingRight: 30 },
		[`.${wm.hasPopupIcon}.${wm.hasClearIcon}&`]: { paddingRight: 56 },
		[`& .${wm.input}`]: {
			width: 0,
			minWidth: 30
		}
	},
	[`& .${_m.root}`]: {
		paddingBottom: 1,
		"& .MuiInput-input": { padding: "4px 4px 4px 0px" }
	},
	[`& .${_m.root}.${am.sizeSmall}`]: { [`& .${_m.input}`]: { padding: "2px 4px 3px 0" } },
	[`& .${ym.root}`]: {
		padding: 9,
		[`.${wm.hasPopupIcon}&, .${wm.hasClearIcon}&`]: { paddingRight: 39 },
		[`.${wm.hasPopupIcon}.${wm.hasClearIcon}&`]: { paddingRight: 65 },
		[`& .${wm.input}`]: { padding: "7.5px 4px 7.5px 5px" },
		[`& .${wm.endAdornment}`]: { right: 9 }
	},
	[`& .${ym.root}.${am.sizeSmall}`]: {
		paddingTop: 6,
		paddingBottom: 6,
		paddingLeft: 6,
		[`& .${wm.input}`]: { padding: "2.5px 4px 2.5px 8px" }
	},
	[`& .${xm.root}`]: {
		paddingTop: 19,
		paddingLeft: 8,
		[`.${wm.hasPopupIcon}&, .${wm.hasClearIcon}&`]: { paddingRight: 39 },
		[`.${wm.hasPopupIcon}.${wm.hasClearIcon}&`]: { paddingRight: 65 },
		[`& .${xm.input}`]: { padding: "7px 4px" },
		[`& .${wm.endAdornment}`]: { right: 9 }
	},
	[`& .${xm.root}.${am.sizeSmall}`]: {
		paddingBottom: 1,
		[`& .${xm.input}`]: { padding: "2.5px 4px" }
	},
	[`& .${am.hiddenLabel}`]: { paddingTop: 8 },
	[`& .${xm.root}.${am.hiddenLabel}`]: {
		paddingTop: 0,
		paddingBottom: 0,
		[`& .${wm.input}`]: {
			paddingTop: 16,
			paddingBottom: 17
		}
	},
	[`& .${xm.root}.${am.hiddenLabel}.${am.sizeSmall}`]: { [`& .${wm.input}`]: {
		paddingTop: 8,
		paddingBottom: 9
	} },
	[`& .${wm.input}`]: {
		flexGrow: 1,
		textOverflow: "ellipsis",
		opacity: 0
	},
	variants: [
		{
			props: { fullWidth: !0 },
			style: { width: "100%" }
		},
		{
			props: { size: "small" },
			style: { [`& .${wm.tag}`]: {
				margin: 2,
				maxWidth: "calc(100% - 4px)"
			} }
		},
		{
			props: { inputFocused: !0 },
			style: { [`& .${wm.input}`]: { opacity: 1 } }
		},
		{
			props: { multiple: !0 },
			style: { [`& .${wm.inputRoot}`]: { flexWrap: "wrap" } }
		}
	]
}), km = X("div", {
	name: "MuiAutocomplete",
	slot: "EndAdornment"
})({
	position: "absolute",
	right: 0,
	top: "50%",
	transform: "translate(0, -50%)"
}), Am = X(cd, {
	name: "MuiAutocomplete",
	slot: "ClearIndicator"
})({
	marginRight: -2,
	padding: 4,
	visibility: "hidden"
}), jm = X(cd, {
	name: "MuiAutocomplete",
	slot: "PopupIndicator",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [t.popupIndicator, n.popupOpen && t.popupIndicatorOpen];
	}
})({
	padding: 2,
	marginRight: -2,
	variants: [{
		props: { popupOpen: !0 },
		style: { transform: "rotate(180deg)" }
	}]
}), Mm = X(Fp, {
	name: "MuiAutocomplete",
	slot: "Popper",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			{ [`& .${wm.option}`]: t.option },
			t.popper,
			n.disablePortal && t.popperDisablePortal
		];
	}
})(Z(({ theme: e }) => ({
	zIndex: (e.vars || e).zIndex.modal,
	variants: [{
		props: { disablePortal: !0 },
		style: { position: "absolute" }
	}]
}))), Nm = X(eu, {
	name: "MuiAutocomplete",
	slot: "Paper"
})(Z(({ theme: e }) => ({
	...e.typography.body1,
	overflow: "auto"
}))), Pm = X("div", {
	name: "MuiAutocomplete",
	slot: "Loading"
})(Z(({ theme: e }) => ({
	color: (e.vars || e).palette.text.secondary,
	padding: "14px 16px"
}))), Fm = X("div", {
	name: "MuiAutocomplete",
	slot: "NoOptions"
})(Z(({ theme: e }) => ({
	color: (e.vars || e).palette.text.secondary,
	padding: "14px 16px"
}))), Im = X("ul", {
	name: "MuiAutocomplete",
	slot: "Listbox"
})(Z(({ theme: e }) => ({
	listStyle: "none",
	margin: 0,
	padding: "8px 0",
	maxHeight: "40vh",
	overflow: "auto",
	isolation: "isolate",
	position: "relative",
	[`& .${wm.option}`]: {
		minHeight: 48,
		display: "flex",
		overflow: "hidden",
		justifyContent: "flex-start",
		alignItems: "center",
		cursor: "pointer",
		paddingTop: 6,
		boxSizing: "border-box",
		outline: "0",
		WebkitTapHighlightColor: "transparent",
		paddingBottom: 6,
		paddingLeft: 16,
		paddingRight: 16,
		[e.breakpoints.up("sm")]: { minHeight: "auto" },
		[`&.${wm.focused}`]: {
			backgroundColor: (e.vars || e).palette.action.hover,
			"@media (hover: none)": { backgroundColor: "transparent" }
		},
		"&[aria-disabled=\"true\"]": {
			opacity: (e.vars || e).palette.action.disabledOpacity,
			pointerEvents: "none"
		},
		[`&.${wm.focusVisible}`]: { backgroundColor: (e.vars || e).palette.action.focus },
		"&[aria-selected=\"true\"]": {
			backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
			[`&.${wm.focused}`]: {
				backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
				"@media (hover: none)": { backgroundColor: (e.vars || e).palette.action.selected }
			},
			[`&.${wm.focusVisible}`]: { backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`) }
		}
	}
}))), Lm = X(zp, {
	name: "MuiAutocomplete",
	slot: "GroupLabel"
})(Z(({ theme: e }) => ({
	backgroundColor: (e.vars || e).palette.background.paper,
	top: -8
}))), Rm = X("ul", {
	name: "MuiAutocomplete",
	slot: "GroupUl"
})({
	padding: 0,
	[`& .${wm.option}`]: { paddingLeft: 24 }
}), zm = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let n = os({
		props: e,
		name: "MuiAutocomplete"
	}), { autoComplete: r = !1, autoHighlight: i = !1, autoSelect: a = !1, blurOnSelect: o = !1, className: s, clearIcon: c = Tm ||= /* @__PURE__ */ (0, K.jsx)(ld, { fontSize: "small" }), clearOnBlur: l = !n.freeSolo, clearOnEscape: u = !1, clearText: d = "Clear", closeText: f = "Close", defaultValue: p = n.multiple ? [] : null, disableClearable: m = !1, disableCloseOnSelect: h = !1, disabled: g = !1, disabledItemsFocusable: v = !1, disableListWrap: y = !1, disablePortal: b = !1, filterOptions: x, filterSelectedOptions: S = !1, forcePopupIcon: C = "auto", freeSolo: w = !1, fullWidth: T = !1, getLimitTagsText: E = (e) => `+${e}`, getOptionDisabled: D, getOptionKey: O, getOptionLabel: k, isOptionEqualToValue: A, groupBy: j, handleHomeEndKeys: M = !n.freeSolo, id: N, includeInputInList: ee = !1, inputValue: te, limitTags: P = -1, loading: F = !1, loadingText: I = "Loading…", multiple: L = !1, noOptionsText: ne = "No options", onChange: re, onClose: R, onHighlightChange: z, onInputChange: ie, onOpen: ae, open: B, openOnFocus: oe = !1, openText: se = "Open", options: V, popupIcon: H = Em ||= /* @__PURE__ */ (0, K.jsx)(Sm, {}), readOnly: ce = !1, renderGroup: le, renderInput: ue, renderOption: de, renderValue: fe, selectOnFocus: pe = !n.freeSolo, size: me = "medium", slots: he = {}, slotProps: U = {}, value: ge, ...W } = n, { getRootProps: _e, getInputProps: ve, getInputLabelProps: ye, getPopupIndicatorProps: be, getClearProps: xe, getItemProps: Se, getListboxProps: Ce, getOptionProps: we, value: Te, dirty: Ee, expanded: De, id: Oe, popupOpen: ke, focused: Ae, focusedItem: je, anchorEl: Me, setAnchorEl: Ne, inputValue: Pe, groupedOptions: Fe } = Dd({
		...n,
		componentName: "Autocomplete"
	}), Ie = hd();
	_.useEffect(() => {
		if (!ke || !Me || typeof ResizeObserver > "u") return;
		let e = Me.clientWidth, t = new ResizeObserver(() => {
			let t = Me.clientWidth;
			e !== t && (e = t, Ie());
		});
		return t.observe(Me), () => {
			t.disconnect();
		};
	}, [
		ke,
		Me,
		Ie
	]);
	let Le = _.useRef([]), Re = _.useRef(!1), ze = ke ? Fe : Le.current;
	li(() => {
		ke && !Re.current && (Le.current = []), Re.current = ke, ke && Fe.length > 0 && (Le.current = Fe);
	}, [ke, Fe]);
	let Be = !m && !g && Ee && !ce, Ve = (!w || C === !0) && C !== !1, { onMouseDown: He } = ve(), { ref: Ue, ...We } = Ce(), Ge = k || ((e) => e.label ?? e), Ke = {
		...n,
		disablePortal: b,
		expanded: De,
		focused: Ae,
		fullWidth: T,
		getOptionLabel: Ge,
		hasClearIcon: Be,
		hasPopupIcon: Ve,
		inputFocused: je === -1,
		popupOpen: ke,
		size: me
	}, qe = Dm(Ke), Je = {
		slots: he,
		slotProps: U
	}, [Ye, Xe] = Wl("root", {
		ref: t,
		className: [qe.root, s],
		elementType: Om,
		externalForwardedProps: {
			...Je,
			...W
		},
		getSlotProps: _e,
		ownerState: Ke
	}), [Ze, Qe] = Wl("listbox", {
		elementType: Im,
		externalForwardedProps: Je,
		ownerState: Ke,
		className: qe.listbox,
		additionalProps: We,
		ref: Ue
	}), [$e, et] = Wl("paper", {
		elementType: eu,
		externalForwardedProps: Je,
		ownerState: Ke,
		className: qe.paper
	}), [tt, nt] = Wl("popper", {
		elementType: Fp,
		externalForwardedProps: Je,
		ownerState: Ke,
		className: qe.popper,
		additionalProps: {
			disablePortal: b,
			style: {
				width: Me ? Me.clientWidth : null,
				pointerEvents: ke ? void 0 : "none"
			},
			role: "presentation",
			anchorEl: Me,
			open: ke
		}
	}), rt = ze.length > 0 || F || !w || nt.keepMounted === !0, [it, at] = Wl("clearIndicator", {
		elementType: Am,
		externalForwardedProps: Je,
		ownerState: Ke,
		className: qe.clearIndicator,
		shouldForwardComponentProp: !0,
		additionalProps: {
			...xe(),
			"aria-label": d,
			title: d
		}
	}), [ot, st] = Wl("popupIndicator", {
		elementType: jm,
		externalForwardedProps: Je,
		ownerState: Ke,
		className: qe.popupIndicator,
		shouldForwardComponentProp: !0,
		additionalProps: {
			...be(),
			disabled: g,
			"aria-label": ke ? f : se,
			title: ke ? f : se
		}
	}), ct, lt = (e) => ({
		className: qe.tag,
		disabled: g,
		...Se(e)
	});
	if (L ? Te.length > 0 && (ct = fe ? fe(Te, lt, Ke) : Te.map((e, t) => {
		let { key: n, ...r } = lt({ index: t });
		return /* @__PURE__ */ (0, K.jsx)(qp, {
			label: Ge(e),
			size: me,
			...r,
			...Je.slotProps.chip
		}, n);
	})) : fe && Te != null && (ct = fe(Te, lt, Ke)), P > -1 && Array.isArray(ct)) {
		let e = ct.length - P;
		!Ae && e > 0 && (ct = ct.splice(0, P), ct.push(/* @__PURE__ */ (0, K.jsx)("span", {
			className: qe.tag,
			children: E(e)
		}, ct.length)));
	}
	let ut = le || ((e) => /* @__PURE__ */ (0, K.jsxs)("li", { children: [/* @__PURE__ */ (0, K.jsx)(Lm, {
		className: qe.groupLabel,
		ownerState: Ke,
		component: "div",
		children: e.group
	}), /* @__PURE__ */ (0, K.jsx)(Rm, {
		className: qe.groupUl,
		ownerState: Ke,
		children: e.children
	})] }, e.key)), dt = de || ((e, t) => {
		let { key: n, ...r } = e;
		return /* @__PURE__ */ (0, K.jsx)("li", {
			...r,
			children: Ge(t)
		}, n);
	}), ft = (e, t) => {
		let n = we({
			option: e,
			index: t
		});
		return dt({
			...n,
			className: qe.option
		}, e, {
			selected: n["aria-selected"],
			index: t,
			inputValue: Pe
		}, Ke);
	};
	return /* @__PURE__ */ (0, K.jsxs)(_.Fragment, { children: [/* @__PURE__ */ (0, K.jsx)(Ye, {
		...Xe,
		children: ue({
			id: Oe,
			disabled: g,
			fullWidth: n.fullWidth ?? !0,
			size: me === "small" ? "small" : void 0,
			slotProps: {
				inputLabel: ye(),
				input: {
					ref: Ne,
					className: qe.inputRoot,
					startAdornment: ct,
					onMouseDown: (e) => {
						e.target === e.currentTarget && He(e);
					},
					...(Be || Ve) && { endAdornment: /* @__PURE__ */ (0, K.jsxs)(km, {
						className: qe.endAdornment,
						ownerState: Ke,
						children: [Be ? /* @__PURE__ */ (0, K.jsx)(it, {
							...at,
							children: c
						}) : null, Ve ? /* @__PURE__ */ (0, K.jsx)(ot, {
							...st,
							children: H
						}) : null]
					}) }
				},
				htmlInput: {
					className: qe.input,
					disabled: g,
					readOnly: ce,
					...ve()
				}
			}
		})
	}), Me && rt ? /* @__PURE__ */ (0, K.jsx)(Mm, {
		as: tt,
		...nt,
		children: /* @__PURE__ */ (0, K.jsxs)(Nm, {
			as: $e,
			...et,
			children: [
				F && ze.length === 0 ? /* @__PURE__ */ (0, K.jsx)(Pm, {
					className: qe.loading,
					ownerState: Ke,
					children: I
				}) : null,
				ze.length === 0 && !w && !F ? /* @__PURE__ */ (0, K.jsx)(Fm, {
					className: qe.noOptions,
					ownerState: Ke,
					role: "presentation",
					onMouseDown: (e) => {
						e.preventDefault();
					},
					children: ne
				}) : null,
				ze.length > 0 ? /* @__PURE__ */ (0, K.jsx)(Ze, {
					...Qe,
					children: ze.map((e, t) => j ? ut({
						key: e.key,
						group: e.group,
						children: e.options.map((t, n) => ft(t, e.index + n))
					}) : ft(e, t))
				}) : null
			]
		})
	}) : null] });
}), Bm = {
	entering: { opacity: 1 },
	entered: { opacity: 1 },
	exiting: { opacity: 0 },
	exited: { opacity: 0 }
}, Vm = {
	opacity: 0,
	visibility: "hidden"
}, Hm = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let n = ts(), r = {
		enter: n.transitions.duration.enteringScreen,
		exit: n.transitions.duration.leavingScreen
	}, { addEndListener: i, appear: a = !0, children: o, easing: s, in: c, onEnter: l, onEntered: u, onEntering: d, onExit: f, onExited: p, onExiting: m, style: h, timeout: g = r, ...v } = e, y = _.useRef(null), b = il(y, wp(o), t), x = Q(y, d), S = Q(y, (e, t) => {
		Fl(e);
		let r = Ll({
			style: h,
			timeout: g,
			easing: s
		}, { mode: "enter" });
		e.style.transition = n.transitions.create("opacity", r), l && l(e, t);
	}), C = Q(y, u), w = Q(y, m), T = Q(y, (e) => {
		let t = Ll({
			style: h,
			timeout: g,
			easing: s
		}, { mode: "exit" });
		e.style.transition = n.transitions.create("opacity", t), f && f(e);
	}), E = Q(y, (e) => {
		e.style.transition = "", p && p(e);
	});
	return /* @__PURE__ */ (0, K.jsx)(vl, {
		appear: a,
		in: c,
		nodeRef: y,
		onEnter: S,
		onEntered: C,
		onEntering: x,
		onExit: T,
		onExited: E,
		onExiting: w,
		addEndListener: (e) => {
			i && i(y.current, e);
		},
		timeout: g,
		...v,
		children: (e, { ownerState: t, ...n }) => {
			let r = Il(e, c, Bm, Vm, h, o.props.style);
			return /* @__PURE__ */ _.cloneElement(o, {
				style: r,
				ref: b,
				...n
			});
		}
	});
});
//#endregion
//#region node_modules/@mui/material/Backdrop/backdropClasses.mjs
function Um(e) {
	return q("MuiBackdrop", e);
}
qr("MuiBackdrop", ["root", "invisible"]);
//#endregion
//#region node_modules/@mui/material/Backdrop/Backdrop.mjs
var Wm = (e) => {
	let { classes: t, invisible: n } = e;
	return At({ root: ["root", n && "invisible"] }, Um, t);
}, Gm = X("div", {
	name: "MuiBackdrop",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [t.root, n.invisible && t.invisible];
	}
})({
	position: "fixed",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	right: 0,
	bottom: 0,
	top: 0,
	left: 0,
	backgroundColor: "rgba(0, 0, 0, 0.5)",
	WebkitTapHighlightColor: "transparent",
	variants: [{
		props: { invisible: !0 },
		style: { backgroundColor: "transparent" }
	}]
}), Km = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let n = os({
		props: e,
		name: "MuiBackdrop"
	}), { children: r, className: i, component: a = "div", invisible: o = !1, open: s, slotProps: c = {}, slots: l = {}, transitionDuration: u, ...d } = n, f = {
		...n,
		component: a,
		invisible: o
	}, p = Wm(f), m = {
		component: a,
		slots: l,
		slotProps: c
	}, [h, g] = Wl("root", {
		elementType: Gm,
		externalForwardedProps: m,
		className: G(p.root, i),
		ownerState: f
	}), [_, v] = Wl("transition", {
		elementType: Hm,
		externalForwardedProps: m,
		ownerState: f
	});
	return /* @__PURE__ */ (0, K.jsx)(_, {
		in: s,
		timeout: u,
		...d,
		...v,
		children: /* @__PURE__ */ (0, K.jsx)(h, {
			...g,
			ref: t,
			children: r
		})
	});
}), qm = qr("MuiBox", ["root"]), Jm = Gr({
	themeId: es,
	defaultTheme: Qo(),
	defaultClassName: qm.root,
	generateClassName: Wr.generate
});
//#endregion
//#region node_modules/@mui/material/Button/buttonClasses.mjs
function Ym(e) {
	return q("MuiButton", e);
}
var Xm = qr("MuiButton", /* @__PURE__ */ "root.text.outlined.contained.disableElevation.focusVisible.disabled.colorInherit.colorPrimary.colorSecondary.colorSuccess.colorError.colorInfo.colorWarning.sizeMedium.sizeSmall.sizeLarge.fullWidth.startIcon.endIcon.icon.loading.loadingWrapper.loadingIconPlaceholder.loadingIndicator.loadingPositionCenter.loadingPositionStart.loadingPositionEnd".split(".")), Zm = /* @__PURE__ */ _.createContext({}), Qm = /* @__PURE__ */ _.createContext(void 0), $m = (e) => {
	let { color: t, disableElevation: n, fullWidth: r, size: i, variant: a, loading: o, loadingPosition: s, classes: c } = e, l = At({
		root: [
			"root",
			o && "loading",
			a,
			`size${Pc(i)}`,
			`color${Pc(t)}`,
			n && "disableElevation",
			r && "fullWidth",
			o && `loadingPosition${Pc(s)}`
		],
		startIcon: ["icon", "startIcon"],
		endIcon: ["icon", "endIcon"],
		loadingIndicator: ["loadingIndicator"],
		loadingWrapper: ["loadingWrapper"]
	}, Ym, c);
	return {
		...c,
		...l
	};
}, eh = [
	{
		props: { size: "small" },
		style: { "& > *:nth-of-type(1)": { fontSize: 18 } }
	},
	{
		props: { size: "medium" },
		style: { "& > *:nth-of-type(1)": { fontSize: 20 } }
	},
	{
		props: { size: "large" },
		style: { "& > *:nth-of-type(1)": { fontSize: 22 } }
	}
], th = X(Nu, {
	shouldForwardProp: (e) => is(e) || e === "classes",
	name: "MuiButton",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.root,
			t[n.variant],
			t[`size${Pc(n.size)}`],
			n.color === "inherit" && t.colorInherit,
			n.disableElevation && t.disableElevation,
			n.fullWidth && t.fullWidth,
			n.loading && t.loading
		];
	}
})(Z(({ theme: e }) => {
	let t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], n = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
	return {
		...e.typography.button,
		minWidth: 64,
		padding: "6px 16px",
		border: 0,
		borderRadius: (e.vars || e).shape.borderRadius,
		transition: e.transitions.create([
			"background-color",
			"box-shadow",
			"border-color",
			"color"
		], { duration: e.transitions.duration.short }),
		"&:hover": { textDecoration: "none" },
		[`&.${Xm.disabled}`]: { color: (e.vars || e).palette.action.disabled },
		variants: [
			{
				props: ({ ownerState: e }) => e.startIcon || e.loading && e.loadingPosition === "start",
				style: { "&::before": {
					content: "\"\\200b\"",
					width: 0,
					overflow: "hidden"
				} }
			},
			{
				props: { variant: "contained" },
				style: {
					color: "var(--variant-containedColor)",
					backgroundColor: "var(--variant-containedBg)",
					boxShadow: (e.vars || e).shadows[2],
					"&:hover": {
						boxShadow: (e.vars || e).shadows[4],
						"@media (hover: none)": { boxShadow: (e.vars || e).shadows[2] }
					},
					"&:active": { boxShadow: (e.vars || e).shadows[8] },
					[`&.${Xm.focusVisible}`]: { boxShadow: (e.vars || e).shadows[6] },
					[`&.${Xm.disabled}`]: {
						color: (e.vars || e).palette.action.disabled,
						boxShadow: (e.vars || e).shadows[0],
						backgroundColor: (e.vars || e).palette.action.disabledBackground
					}
				}
			},
			{
				props: { variant: "outlined" },
				style: {
					padding: "5px 15px",
					border: "1px solid currentColor",
					borderColor: "var(--variant-outlinedBorder, currentColor)",
					backgroundColor: "var(--variant-outlinedBg)",
					color: "var(--variant-outlinedColor)",
					[`&.${Xm.disabled}`]: { border: `1px solid ${(e.vars || e).palette.action.disabledBackground}` }
				}
			},
			{
				props: { variant: "text" },
				style: {
					padding: "6px 8px",
					color: "var(--variant-textColor)",
					backgroundColor: "var(--variant-textBg)"
				}
			},
			...Object.entries(e.palette).filter(Wu()).map(([t]) => ({
				props: { color: t },
				style: {
					"--variant-textColor": (e.vars || e).palette[t].main,
					"--variant-outlinedColor": (e.vars || e).palette[t].main,
					"--variant-outlinedBorder": e.alpha((e.vars || e).palette[t].main, .5),
					"--variant-containedColor": (e.vars || e).palette[t].contrastText,
					"--variant-containedBg": (e.vars || e).palette[t].main,
					"@media (hover: hover)": { "&:hover": {
						"--variant-containedBg": (e.vars || e).palette[t].dark,
						"--variant-textBg": e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity),
						"--variant-outlinedBorder": (e.vars || e).palette[t].main,
						"--variant-outlinedBg": e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity)
					} }
				}
			})),
			{
				props: { color: "inherit" },
				style: {
					color: "inherit",
					borderColor: "currentColor",
					"--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
					"@media (hover: hover)": { "&:hover": {
						"--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : n,
						"--variant-textBg": e.alpha((e.vars || e).palette.text.primary, (e.vars || e).palette.action.hoverOpacity),
						"--variant-outlinedBg": e.alpha((e.vars || e).palette.text.primary, (e.vars || e).palette.action.hoverOpacity)
					} }
				}
			},
			{
				props: {
					size: "small",
					variant: "text"
				},
				style: {
					padding: "4px 5px",
					fontSize: e.typography.pxToRem(13)
				}
			},
			{
				props: {
					size: "large",
					variant: "text"
				},
				style: {
					padding: "8px 11px",
					fontSize: e.typography.pxToRem(15)
				}
			},
			{
				props: {
					size: "small",
					variant: "outlined"
				},
				style: {
					padding: "3px 9px",
					fontSize: e.typography.pxToRem(13)
				}
			},
			{
				props: {
					size: "large",
					variant: "outlined"
				},
				style: {
					padding: "7px 21px",
					fontSize: e.typography.pxToRem(15)
				}
			},
			{
				props: {
					size: "small",
					variant: "contained"
				},
				style: {
					padding: "4px 10px",
					fontSize: e.typography.pxToRem(13)
				}
			},
			{
				props: {
					size: "large",
					variant: "contained"
				},
				style: {
					padding: "8px 22px",
					fontSize: e.typography.pxToRem(15)
				}
			},
			{
				props: { disableElevation: !0 },
				style: {
					boxShadow: "none",
					"&:hover": { boxShadow: "none" },
					[`&.${Xm.focusVisible}`]: { boxShadow: "none" },
					"&:active": { boxShadow: "none" },
					[`&.${Xm.disabled}`]: { boxShadow: "none" }
				}
			},
			{
				props: { fullWidth: !0 },
				style: { width: "100%" }
			},
			{
				props: { loadingPosition: "center" },
				style: {
					transition: e.transitions.create([
						"background-color",
						"box-shadow",
						"border-color"
					], { duration: e.transitions.duration.short }),
					[`&.${Xm.loading}`]: { color: "transparent" }
				}
			}
		]
	};
})), nh = X("span", {
	name: "MuiButton",
	slot: "StartIcon",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [t.startIcon, n.loading && t.startIconLoadingStart];
	}
})(({ theme: e }) => ({
	display: "inherit",
	marginRight: 8,
	marginLeft: -4,
	variants: [
		{
			props: { size: "small" },
			style: { marginLeft: -2 }
		},
		{
			props: {
				loadingPosition: "start",
				loading: !0
			},
			style: {
				transition: e.transitions.create(["opacity"], { duration: e.transitions.duration.short }),
				opacity: 0
			}
		},
		{
			props: {
				loadingPosition: "start",
				loading: !0,
				fullWidth: !0
			},
			style: { marginRight: -8 }
		},
		...eh
	]
})), rh = X("span", {
	name: "MuiButton",
	slot: "EndIcon",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [t.endIcon, n.loading && t.endIconLoadingEnd];
	}
})(({ theme: e }) => ({
	display: "inherit",
	marginRight: -4,
	marginLeft: 8,
	variants: [
		{
			props: { size: "small" },
			style: { marginRight: -2 }
		},
		{
			props: {
				loadingPosition: "end",
				loading: !0
			},
			style: {
				transition: e.transitions.create(["opacity"], { duration: e.transitions.duration.short }),
				opacity: 0
			}
		},
		{
			props: {
				loadingPosition: "end",
				loading: !0,
				fullWidth: !0
			},
			style: { marginLeft: -8 }
		},
		...eh
	]
})), ih = X("span", {
	name: "MuiButton",
	slot: "LoadingIndicator"
})(({ theme: e }) => ({
	display: "none",
	position: "absolute",
	visibility: "visible",
	variants: [
		{
			props: { loading: !0 },
			style: { display: "flex" }
		},
		{
			props: { loadingPosition: "start" },
			style: { left: 14 }
		},
		{
			props: {
				loadingPosition: "start",
				size: "small"
			},
			style: { left: 10 }
		},
		{
			props: {
				variant: "text",
				loadingPosition: "start"
			},
			style: { left: 6 }
		},
		{
			props: { loadingPosition: "center" },
			style: {
				left: "50%",
				transform: "translate(-50%)",
				color: (e.vars || e).palette.action.disabled
			}
		},
		{
			props: { loadingPosition: "end" },
			style: { right: 14 }
		},
		{
			props: {
				loadingPosition: "end",
				size: "small"
			},
			style: { right: 10 }
		},
		{
			props: {
				variant: "text",
				loadingPosition: "end"
			},
			style: { right: 6 }
		},
		{
			props: {
				loadingPosition: "start",
				fullWidth: !0
			},
			style: {
				position: "relative",
				left: -10
			}
		},
		{
			props: {
				loadingPosition: "end",
				fullWidth: !0
			},
			style: {
				position: "relative",
				right: -10
			}
		}
	]
})), ah = X("span", {
	name: "MuiButton",
	slot: "LoadingIconPlaceholder"
})({
	display: "inline-block",
	width: "1em",
	height: "1em"
}), oh = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let n = _.useContext(Zm), r = _.useContext(Qm), i = os({
		props: oi(n, e),
		name: "MuiButton"
	}), { children: a, color: o = "primary", component: s = "button", className: c, disabled: l = !1, disableElevation: u = !1, disableFocusRipple: d = !1, endIcon: f, focusVisibleClassName: p, fullWidth: m = !1, id: h, loading: g = null, loadingIndicator: v, loadingPosition: y = "center", size: b = "medium", startIcon: x, type: S, variant: C = "text", ...w } = i, T = Qc(h), E = v ?? /* @__PURE__ */ (0, K.jsx)(nd, {
		"aria-labelledby": T,
		color: "inherit",
		size: 16
	}), D = {
		...i,
		color: o,
		component: s,
		disabled: l,
		disableElevation: u,
		disableFocusRipple: d,
		fullWidth: m,
		loading: g,
		loadingIndicator: E,
		loadingPosition: y,
		size: b,
		type: S,
		variant: C
	}, O = $m(D), k = (x || g && y === "start") && /* @__PURE__ */ (0, K.jsx)(nh, {
		className: O.startIcon,
		ownerState: D,
		children: x || /* @__PURE__ */ (0, K.jsx)(ah, {
			className: O.loadingIconPlaceholder,
			ownerState: D
		})
	}), A = (f || g && y === "end") && /* @__PURE__ */ (0, K.jsx)(rh, {
		className: O.endIcon,
		ownerState: D,
		children: f || /* @__PURE__ */ (0, K.jsx)(ah, {
			className: O.loadingIconPlaceholder,
			ownerState: D
		})
	}), j = r || "", M = typeof g == "boolean" ? /* @__PURE__ */ (0, K.jsx)("span", {
		className: O.loadingWrapper,
		style: { display: "contents" },
		children: g && /* @__PURE__ */ (0, K.jsx)(ih, {
			className: O.loadingIndicator,
			ownerState: D,
			children: E
		})
	}) : null, { root: N, ...ee } = O;
	return /* @__PURE__ */ (0, K.jsxs)(th, {
		ownerState: D,
		className: G(n.className, O.root, c, j),
		component: s,
		disabled: l || g,
		focusRipple: !d,
		focusVisibleClassName: G(O.focusVisible, p),
		ref: t,
		internalNativeButton: !0,
		type: S,
		id: g ? T : h,
		...w,
		classes: ee,
		children: [
			k,
			y !== "end" && M,
			a,
			y === "end" && M,
			A
		]
	});
});
//#endregion
//#region node_modules/@mui/material/Card/cardClasses.mjs
function sh(e) {
	return q("MuiCard", e);
}
qr("MuiCard", ["root"]);
//#endregion
//#region node_modules/@mui/material/Card/Card.mjs
var ch = (e) => {
	let { classes: t } = e;
	return At({ root: ["root"] }, sh, t);
}, lh = X(eu, {
	name: "MuiCard",
	slot: "Root"
})({ overflow: "hidden" }), uh = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let n = os({
		props: e,
		name: "MuiCard"
	}), { className: r, raised: i = !1, ...a } = n, o = {
		...n,
		raised: i
	};
	return /* @__PURE__ */ (0, K.jsx)(lh, {
		className: G(ch(o).root, r),
		elevation: i ? 8 : void 0,
		ref: t,
		ownerState: o,
		...a
	});
});
//#endregion
//#region node_modules/@mui/material/CardActionArea/cardActionAreaClasses.mjs
function dh(e) {
	return q("MuiCardActionArea", e);
}
var fh = qr("MuiCardActionArea", [
	"root",
	"focusVisible",
	"focusHighlight"
]), ph = (e) => {
	let { classes: t } = e;
	return At({
		root: ["root"],
		focusHighlight: ["focusHighlight"]
	}, dh, t);
}, mh = X(Nu, {
	name: "MuiCardActionArea",
	slot: "Root"
})(Z(({ theme: e }) => ({
	display: "block",
	textAlign: "inherit",
	borderRadius: "inherit",
	width: "100%",
	[`&:hover .${fh.focusHighlight}`]: {
		opacity: (e.vars || e).palette.action.hoverOpacity,
		"@media (hover: none)": { opacity: 0 }
	},
	[`&.${fh.focusVisible} .${fh.focusHighlight}`]: { opacity: (e.vars || e).palette.action.focusOpacity }
}))), hh = X("span", {
	name: "MuiCardActionArea",
	slot: "FocusHighlight"
})(Z(({ theme: e }) => ({
	overflow: "hidden",
	pointerEvents: "none",
	position: "absolute",
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	borderRadius: "inherit",
	opacity: 0,
	backgroundColor: "currentcolor",
	transition: e.transitions.create("opacity", { duration: e.transitions.duration.short })
}))), gh = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let n = os({
		props: e,
		name: "MuiCardActionArea"
	}), { children: r, className: i, focusVisibleClassName: a, slots: o = {}, slotProps: s = {}, ...c } = n, l = n, u = ph(l), d = {
		slots: o,
		slotProps: s
	}, [f, p] = Wl("root", {
		elementType: mh,
		externalForwardedProps: {
			...d,
			...c
		},
		shouldForwardComponentProp: !0,
		ownerState: l,
		ref: t,
		className: G(u.root, i),
		additionalProps: {
			internalNativeButton: !0,
			focusVisibleClassName: G(a, u.focusVisible)
		}
	}), [m, h] = Wl("focusHighlight", {
		elementType: hh,
		externalForwardedProps: d,
		ownerState: l,
		className: u.focusHighlight
	});
	return /* @__PURE__ */ (0, K.jsxs)(f, {
		...p,
		children: [r, /* @__PURE__ */ (0, K.jsx)(m, { ...h })]
	});
});
//#endregion
//#region node_modules/@mui/material/CardContent/cardContentClasses.mjs
function _h(e) {
	return q("MuiCardContent", e);
}
qr("MuiCardContent", ["root"]);
//#endregion
//#region node_modules/@mui/material/CardContent/CardContent.mjs
var vh = (e) => {
	let { classes: t } = e;
	return At({ root: ["root"] }, _h, t);
}, yh = X("div", {
	name: "MuiCardContent",
	slot: "Root"
})({
	padding: 16,
	"&:last-child": { paddingBottom: 24 }
}), bh = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let n = os({
		props: e,
		name: "MuiCardContent"
	}), { className: r, component: i = "div", ...a } = n, o = {
		...n,
		component: i
	};
	return /* @__PURE__ */ (0, K.jsx)(yh, {
		as: i,
		className: G(vh(o).root, r),
		ownerState: o,
		ref: t,
		...a
	});
});
//#endregion
//#region node_modules/@mui/utils/getScrollbarSize/getScrollbarSize.mjs
function xh(e = window) {
	let t = e.document.documentElement.clientWidth;
	return e.innerWidth - t;
}
//#endregion
//#region node_modules/@mui/material/Modal/ModalManager.mjs
function Sh(e) {
	let t = Kc(e);
	return t.body === e ? Jc(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Ch(e, t) {
	t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function wh(e) {
	return parseFloat(Jc(e).getComputedStyle(e).paddingRight) || 0;
}
function Th(e) {
	let t = [
		"TEMPLATE",
		"SCRIPT",
		"STYLE",
		"LINK",
		"MAP",
		"META",
		"NOSCRIPT",
		"PICTURE",
		"COL",
		"COLGROUP",
		"PARAM",
		"SLOT",
		"SOURCE",
		"TRACK"
	].includes(e.tagName), n = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
	return t || n;
}
function Eh(e, t, n, r, i) {
	let a = [
		t,
		n,
		...r
	];
	[].forEach.call(e.children, (e) => {
		let t = !a.includes(e), n = !Th(e);
		t && n && Ch(e, i);
	});
}
function Dh(e, t) {
	let n = -1;
	return e.some((e, r) => t(e) ? (n = r, !0) : !1), n;
}
function Oh(e, t) {
	let n = [], r = e.container;
	if (!t.disableScrollLock) {
		if (Sh(r)) {
			let e = xh(Jc(r));
			n.push({
				value: r.style.paddingRight,
				property: "padding-right",
				el: r
			}), r.style.paddingRight = `${wh(r) + e}px`;
			let t = Kc(r).querySelectorAll(".mui-fixed");
			[].forEach.call(t, (t) => {
				n.push({
					value: t.style.paddingRight,
					property: "padding-right",
					el: t
				}), t.style.paddingRight = `${wh(t) + e}px`;
			});
		}
		let e;
		if (r.parentNode instanceof DocumentFragment) e = Kc(r).body;
		else {
			let t = r.parentElement, n = Jc(r);
			e = t?.nodeName === "HTML" && n.getComputedStyle(t).overflowY === "scroll" ? t : r;
		}
		n.push({
			value: e.style.overflow,
			property: "overflow",
			el: e
		}, {
			value: e.style.overflowX,
			property: "overflow-x",
			el: e
		}, {
			value: e.style.overflowY,
			property: "overflow-y",
			el: e
		}), e.style.overflow = "hidden";
	}
	return () => {
		n.forEach(({ value: e, el: t, property: n }) => {
			e ? t.style.setProperty(n, e) : t.style.removeProperty(n);
		});
	};
}
function kh(e) {
	let t = [];
	return [].forEach.call(e.children, (e) => {
		e.getAttribute("aria-hidden") === "true" && t.push(e);
	}), t;
}
var Ah = class {
	constructor() {
		this.modals = [], this.containers = [];
	}
	add(e, t) {
		let n = this.modals.indexOf(e);
		if (n !== -1) return n;
		n = this.modals.length, this.modals.push(e), e.modalRef && Ch(e.modalRef, !1);
		let r = kh(t);
		Eh(t, e.mount, e.modalRef, r, !0);
		let i = Dh(this.containers, (e) => e.container === t);
		return i === -1 ? (this.containers.push({
			modals: [e],
			container: t,
			restore: null,
			hiddenSiblings: r
		}), n) : (this.containers[i].modals.push(e), n);
	}
	mount(e, t) {
		let n = Dh(this.containers, (t) => t.modals.includes(e)), r = this.containers[n];
		r.restore ||= Oh(r, t);
	}
	remove(e, t = !0) {
		let n = this.modals.indexOf(e);
		if (n === -1) return n;
		let r = Dh(this.containers, (t) => t.modals.includes(e)), i = this.containers[r];
		if (i.modals.splice(i.modals.indexOf(e), 1), this.modals.splice(n, 1), i.modals.length === 0) i.restore && i.restore(), e.modalRef && Ch(e.modalRef, t), Eh(i.container, e.mount, e.modalRef, i.hiddenSiblings, !1), this.containers.splice(r, 1);
		else {
			let e = i.modals[i.modals.length - 1];
			e.modalRef && Ch(e.modalRef, !1);
		}
		return n;
	}
	isTopModal(e) {
		return this.modals.length > 0 && this.modals[this.modals.length - 1] === e;
	}
}, jh = gd, Mh = "data-mui-focusable";
function Nh(e) {
	return e ? e.hasAttribute("data-mui-focusable") ? e : e.querySelector(`[${Mh}]`) : null;
}
//#endregion
//#region node_modules/@mui/material/Unstable_TrapFocus/FocusTrap.mjs
var Ph = [
	"input",
	"select",
	"textarea",
	"a[href]",
	"button",
	"[tabindex]",
	"audio[controls]",
	"video[controls]",
	"[contenteditable]:not([contenteditable=\"false\"])"
].join(",");
function Fh(e) {
	let t = parseInt(e.getAttribute("tabindex") || "", 10);
	return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Ih(e) {
	if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1;
	let t = (t) => e.ownerDocument.querySelector(`input[type="radio"]${t}`), n = t(`[name="${e.name}"]:checked`);
	return n ||= t(`[name="${e.name}"]`), n !== e;
}
function Lh(e) {
	return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Ih(e));
}
function Rh(e) {
	let t = [], n = [];
	return Array.from(e.querySelectorAll(Ph)).forEach((e, r) => {
		let i = Fh(e);
		i === -1 || !Lh(e) || (i === 0 ? t.push(e) : n.push({
			documentOrder: r,
			tabIndex: i,
			node: e
		}));
	}), n.sort((e, t) => e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex).map((e) => e.node).concat(t);
}
function zh() {
	return !0;
}
function Bh(e) {
	let { children: t, disableAutoFocus: n = !1, disableEnforceFocus: r = !1, disableRestoreFocus: i = !1, getTabbable: a = Rh, isEnabled: o = zh, open: s } = e, c = _.useRef(!1), l = _.useRef(null), u = _.useRef(null), d = _.useRef(null), f = _.useRef(null), p = _.useRef(!1), m = _.useRef(null), h = rl(wp(t), m), g = _.useRef(null);
	_.useEffect(() => {
		!s || !m.current || (p.current = !n);
	}, [n, s]), _.useEffect(() => {
		if (c.current = !1, !s || !m.current) return;
		let e = Gc(Kc(m.current)), t = Nh(m.current) ?? m.current;
		return jh(m.current, e) || (t.hasAttribute("tabIndex") || t.setAttribute("tabIndex", "-1"), p.current && t.focus()), () => {
			!i && d.current && (c.current = !0, d.current.focus(), d.current = null);
		};
	}, [s]), _.useEffect(() => {
		if (!s || !m.current) return;
		let e = Kc(m.current), t = (t) => {
			g.current = t, !(r || !o() || t.key !== "Tab") && Gc(e) === m.current && t.shiftKey && (c.current = !0, u.current && u.current.focus());
		}, n = () => {
			let t = m.current;
			if (t === null) return;
			let n = Gc(e);
			if (!e.hasFocus() || !o() || c.current) {
				c.current = !1;
				return;
			}
			if (jh(t, n) || r && n !== l.current && n !== u.current) return;
			if (n !== f.current) f.current = null;
			else if (f.current !== null) return;
			if (!p.current) return;
			let i = [];
			if ((n === l.current || n === u.current) && (i = a(m.current)), i.length > 0) {
				let e = !!(g.current?.shiftKey && g.current?.key === "Tab"), t = i[0], n = i[i.length - 1];
				typeof t != "string" && typeof n != "string" && (e ? n.focus() : t.focus());
			} else t.focus();
		};
		e.addEventListener("focusin", n), e.addEventListener("keydown", t, !0);
		let i = setInterval(() => {
			let t = Gc(e);
			t && t.tagName === "BODY" && n();
		}, 50);
		return () => {
			clearInterval(i), e.removeEventListener("focusin", n), e.removeEventListener("keydown", t, !0);
		};
	}, [
		n,
		r,
		i,
		o,
		s,
		a
	]);
	let v = (e) => {
		d.current === null && (d.current = e.relatedTarget), p.current = !0, f.current = e.target;
		let n = t.props.onFocus;
		n && n(e);
	}, y = (e) => {
		d.current === null && (d.current = e.relatedTarget), p.current = !0;
	};
	return /* @__PURE__ */ (0, K.jsxs)(_.Fragment, { children: [
		/* @__PURE__ */ (0, K.jsx)("div", {
			tabIndex: s ? 0 : -1,
			onFocus: y,
			ref: l,
			"data-testid": "sentinelStart"
		}),
		/* @__PURE__ */ _.cloneElement(t, {
			ref: h,
			onFocus: v
		}),
		/* @__PURE__ */ (0, K.jsx)("div", {
			tabIndex: s ? 0 : -1,
			onFocus: y,
			ref: u,
			"data-testid": "sentinelEnd"
		})
	] });
}
//#endregion
//#region node_modules/@mui/material/Modal/useModal.mjs
function Vh(e) {
	return typeof e == "function" ? e() : e;
}
function Hh(e) {
	return e ? e.props.hasOwnProperty("in") : !1;
}
var Uh = () => {}, Wh = new Ah();
function Gh(e) {
	let { container: t, disableScrollLock: n = !1, closeAfterTransition: r = !1, onTransitionEnter: i, onTransitionExited: a, children: o, onClose: s, open: c, rootRef: l } = e, u = _.useRef({}), d = _.useRef(null), f = _.useRef(null), p = rl(f, l), [m, h] = _.useState(!c), g = Hh(o), v = !0;
	(e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (v = !1);
	let y = () => Kc(d.current), b = () => (u.current.modalRef = f.current, u.current.mount = d.current, u.current), x = () => {
		Wh.mount(b(), { disableScrollLock: n }), f.current && (f.current.scrollTop = 0);
	}, S = tl(() => {
		let e = Vh(t) || y().body;
		Wh.add(b(), e), f.current && x();
	}), C = () => Wh.isTopModal(b()), w = tl((e) => {
		d.current = e, e && (c && C() ? x() : f.current && Ch(f.current, v));
	}), T = _.useCallback(() => {
		Wh.remove(b(), v);
	}, [v]);
	_.useEffect(() => () => {
		T();
	}, [T]), _.useEffect(() => {
		c ? S() : (!g || !r) && T();
	}, [
		c,
		T,
		g,
		r,
		S
	]);
	let E = (e) => (t) => {
		e.onKeyDown?.(t), !(t.key !== "Escape" || t.which === 229 || !C()) && (t.stopPropagation(), s && s(t, "escapeKeyDown"));
	}, D = (e) => (t) => {
		e.onClick?.(t), t.target === t.currentTarget && s && s(t, "backdropClick");
	};
	return {
		getRootProps: (t = {}) => {
			let n = Vl(e);
			delete n.onTransitionEnter, delete n.onTransitionExited;
			let r = {
				...n,
				...t
			};
			return {
				role: "presentation",
				...r,
				onKeyDown: E(r),
				ref: p
			};
		},
		getBackdropProps: (e = {}) => {
			let t = e;
			return {
				"aria-hidden": !0,
				...t,
				onClick: D(t),
				open: c
			};
		},
		getTransitionProps: () => ({
			onEnter: Fc(() => {
				h(!1), i && i();
			}, o?.props.onEnter ?? Uh),
			onExited: Fc(() => {
				h(!0), a && a(), r && T();
			}, o?.props.onExited ?? Uh)
		}),
		rootRef: p,
		portalRef: w,
		isTopModal: C,
		exited: m,
		hasTransition: g
	};
}
//#endregion
//#region node_modules/@mui/material/Modal/modalClasses.mjs
function Kh(e) {
	return q("MuiModal", e);
}
qr("MuiModal", [
	"root",
	"hidden",
	"backdrop"
]);
//#endregion
//#region node_modules/@mui/material/Modal/Modal.mjs
var qh = (e) => {
	let { open: t, exited: n, classes: r } = e;
	return At({
		root: ["root", !t && n && "hidden"],
		backdrop: ["backdrop"]
	}, Kh, r);
}, Jh = X("div", {
	name: "MuiModal",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [t.root, !n.open && n.exited && t.hidden];
	}
})(Z(({ theme: e }) => ({
	position: "fixed",
	zIndex: (e.vars || e).zIndex.modal,
	right: 0,
	bottom: 0,
	top: 0,
	left: 0,
	variants: [{
		props: ({ ownerState: e }) => !e.open && e.exited,
		style: { visibility: "hidden" }
	}]
}))), Yh = X(Km, {
	name: "MuiModal",
	slot: "Backdrop"
})({ zIndex: -1 }), Xh = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let n = os({
		name: "MuiModal",
		props: e
	}), { classes: r, className: i, closeAfterTransition: a = !1, children: o, container: s, component: c, disableAutoFocus: l = !1, disableEnforceFocus: u = !1, disablePortal: d = !1, disableRestoreFocus: f = !1, disableScrollLock: p = !1, hideBackdrop: m = !1, keepMounted: h = !1, onClose: g, onTransitionEnter: v, onTransitionExited: y, open: b, slotProps: x = {}, slots: S = {}, theme: C, ...w } = n, T = {
		...n,
		closeAfterTransition: a,
		disableAutoFocus: l,
		disableEnforceFocus: u,
		disablePortal: d,
		disableRestoreFocus: f,
		disableScrollLock: p,
		hideBackdrop: m,
		keepMounted: h
	}, { getRootProps: E, getBackdropProps: D, getTransitionProps: O, portalRef: k, isTopModal: A, exited: j, hasTransition: M } = Gh({
		...T,
		rootRef: t
	}), N = {
		...T,
		exited: j
	}, ee = qh(N), te = {};
	if (o.props.tabIndex === void 0 && (te.tabIndex = "-1"), M) {
		let { onEnter: e, onExited: t } = O();
		te.onEnter = e, te.onExited = t;
	}
	let P = {
		slots: S,
		slotProps: x
	}, [F, I] = Wl("root", {
		ref: t,
		elementType: Jh,
		externalForwardedProps: {
			...P,
			...w,
			component: c
		},
		getSlotProps: E,
		ownerState: N,
		className: G(i, ee?.root, !N.open && N.exited && ee?.hidden)
	}), [L, ne] = Wl("backdrop", {
		elementType: Yh,
		externalForwardedProps: P,
		shouldForwardComponentProp: !0,
		getSlotProps: (e) => D({
			...e,
			onClick: (t) => {
				e?.onClick && e.onClick(t);
			}
		}),
		className: ee?.backdrop,
		ownerState: N
	});
	return !h && !b && (!M || j) ? null : /* @__PURE__ */ (0, K.jsx)(Ep, {
		ref: k,
		container: s,
		disablePortal: d,
		children: /* @__PURE__ */ (0, K.jsxs)(F, {
			...I,
			children: [m ? null : /* @__PURE__ */ (0, K.jsx)(L, { ...ne }), /* @__PURE__ */ (0, K.jsx)(Bh, {
				disableEnforceFocus: u,
				disableAutoFocus: l,
				disableRestoreFocus: f,
				isEnabled: A,
				open: b,
				children: /* @__PURE__ */ _.cloneElement(o, te)
			})]
		})
	});
});
//#endregion
//#region node_modules/@mui/material/Divider/dividerClasses.mjs
function Zh(e) {
	return q("MuiDivider", e);
}
var Qh = qr("MuiDivider", [
	"root",
	"absolute",
	"fullWidth",
	"inset",
	"middle",
	"flexItem",
	"vertical",
	"withChildren",
	"textAlignRight",
	"textAlignLeft",
	"wrapper",
	"wrapperVertical"
]), $h = (e) => {
	let { absolute: t, children: n, classes: r, flexItem: i, orientation: a, textAlign: o, variant: s } = e;
	return At({
		root: [
			"root",
			t && "absolute",
			s,
			a === "vertical" && "vertical",
			i && "flexItem",
			n && "withChildren",
			o === "right" && a !== "vertical" && "textAlignRight",
			o === "left" && a !== "vertical" && "textAlignLeft"
		],
		wrapper: ["wrapper", a === "vertical" && "wrapperVertical"]
	}, Zh, r);
}, eg = X("div", {
	name: "MuiDivider",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.root,
			n.absolute && t.absolute,
			t[n.variant],
			n.orientation === "vertical" && t.vertical,
			n.flexItem && t.flexItem,
			n.children && t.withChildren,
			n.textAlign === "right" && n.orientation !== "vertical" && t.textAlignRight,
			n.textAlign === "left" && n.orientation !== "vertical" && t.textAlignLeft
		];
	}
})(Z(({ theme: e }) => ({
	margin: 0,
	flexShrink: 0,
	borderWidth: 0,
	borderStyle: "solid",
	borderColor: (e.vars || e).palette.divider,
	borderBottomWidth: "thin",
	variants: [
		{
			props: { absolute: !0 },
			style: {
				position: "absolute",
				bottom: 0,
				left: 0,
				width: "100%"
			}
		},
		{
			props: { variant: "inset" },
			style: { marginLeft: 72 }
		},
		{
			props: {
				variant: "middle",
				orientation: "horizontal"
			},
			style: {
				marginLeft: e.spacing(2),
				marginRight: e.spacing(2)
			}
		},
		{
			props: {
				variant: "middle",
				orientation: "vertical"
			},
			style: {
				marginTop: e.spacing(1),
				marginBottom: e.spacing(1)
			}
		},
		{
			props: { orientation: "vertical" },
			style: {
				height: "100%",
				borderBottomWidth: 0,
				borderRightWidth: "thin"
			}
		},
		{
			props: { flexItem: !0 },
			style: {
				alignSelf: "stretch",
				height: "auto"
			}
		},
		{
			props: ({ ownerState: e }) => !!e.children,
			style: {
				display: "flex",
				textAlign: "center",
				border: 0,
				borderTopStyle: "solid",
				borderLeftStyle: "solid",
				"&::before, &::after": {
					content: "\"\"",
					alignSelf: "center"
				}
			}
		},
		{
			props: ({ ownerState: e }) => e.children && e.orientation !== "vertical",
			style: { "&::before, &::after": {
				width: "100%",
				borderTop: `thin solid ${(e.vars || e).palette.divider}`,
				borderTopStyle: "inherit"
			} }
		},
		{
			props: ({ ownerState: e }) => e.orientation === "vertical" && e.children,
			style: {
				flexDirection: "column",
				"&::before, &::after": {
					height: "100%",
					borderLeft: `thin solid ${(e.vars || e).palette.divider}`,
					borderLeftStyle: "inherit"
				}
			}
		},
		{
			props: ({ ownerState: e }) => e.textAlign === "right" && e.orientation !== "vertical",
			style: {
				"&::before": { width: "90%" },
				"&::after": { width: "10%" }
			}
		},
		{
			props: ({ ownerState: e }) => e.textAlign === "left" && e.orientation !== "vertical",
			style: {
				"&::before": { width: "10%" },
				"&::after": { width: "90%" }
			}
		}
	]
}))), tg = X("span", {
	name: "MuiDivider",
	slot: "Wrapper",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [t.wrapper, n.orientation === "vertical" && t.wrapperVertical];
	}
})(Z(({ theme: e }) => ({
	display: "inline-block",
	paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
	paddingRight: `calc(${e.spacing(1)} * 1.2)`,
	whiteSpace: "nowrap",
	variants: [{
		props: { orientation: "vertical" },
		style: {
			paddingTop: `calc(${e.spacing(1)} * 1.2)`,
			paddingBottom: `calc(${e.spacing(1)} * 1.2)`
		}
	}]
}))), ng = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let n = os({
		props: e,
		name: "MuiDivider"
	}), { absolute: r = !1, children: i, className: a, orientation: o = "horizontal", component: s = i || o === "vertical" ? "div" : "hr", flexItem: c = !1, role: l = s === "hr" ? void 0 : "separator", textAlign: u = "center", variant: d = "fullWidth", ...f } = n, p = {
		...n,
		absolute: r,
		component: s,
		flexItem: c,
		orientation: o,
		role: l,
		textAlign: u,
		variant: d
	}, m = $h(p);
	return /* @__PURE__ */ (0, K.jsx)(eg, {
		as: s,
		className: G(m.root, a),
		role: l,
		ref: t,
		ownerState: p,
		"aria-orientation": l === "separator" && (s !== "hr" || o === "vertical") ? o : void 0,
		...f,
		children: i ? /* @__PURE__ */ (0, K.jsx)(tg, {
			className: m.wrapper,
			ownerState: p,
			children: i
		}) : null
	});
}), rg = (e) => {
	let { classes: t, disableUnderline: n, startAdornment: r, endAdornment: i, size: a, hiddenLabel: o, multiline: s } = e, c = At({
		root: [
			"root",
			!n && "underline",
			r && "adornedStart",
			i && "adornedEnd",
			a === "small" && `size${Pc(a)}`,
			o && "hiddenLabel",
			s && "multiline"
		],
		input: ["input"]
	}, bm, t);
	return {
		...t,
		...c
	};
}, ig = X(fm, {
	shouldForwardProp: (e) => is(e) || e === "classes",
	name: "MuiFilledInput",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [...lm(e, t), !n.disableUnderline && t.underline];
	}
})(Z(({ theme: e }) => {
	let t = e.palette.mode === "light", n = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", r = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", i = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", a = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
	return {
		position: "relative",
		backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
		borderTopLeftRadius: (e.vars || e).shape.borderRadius,
		borderTopRightRadius: (e.vars || e).shape.borderRadius,
		transition: e.transitions.create("background-color", {
			duration: e.transitions.duration.shorter,
			easing: e.transitions.easing.easeOut
		}),
		"&:hover": {
			backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : i,
			"@media (hover: none)": { backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r }
		},
		[`&.${xm.focused}`]: { backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r },
		[`&.${xm.disabled}`]: { backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : a },
		variants: [
			{
				props: ({ ownerState: e }) => !e.disableUnderline,
				style: {
					"&::after": {
						left: 0,
						bottom: 0,
						content: "\"\"",
						position: "absolute",
						right: 0,
						transform: "scaleX(0)",
						transition: e.transitions.create("transform", {
							duration: e.transitions.duration.shorter,
							easing: e.transitions.easing.easeOut
						}),
						pointerEvents: "none"
					},
					[`&.${xm.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
					[`&.${xm.error}`]: { "&::before, &::after": { borderBottomColor: (e.vars || e).palette.error.main } },
					"&::before": {
						borderBottom: `1px solid ${e.vars ? e.alpha(e.vars.palette.common.onBackground, e.vars.opacity.inputUnderline) : n}`,
						left: 0,
						bottom: 0,
						content: "\"\"",
						position: "absolute",
						right: 0,
						transition: e.transitions.create("border-bottom-color", { duration: e.transitions.duration.shorter }),
						pointerEvents: "none"
					},
					[`&:hover:not(.${xm.disabled}, .${xm.error}):before`]: { borderBottom: `1px solid ${(e.vars || e).palette.text.primary}` },
					[`&.${xm.disabled}:before`]: { borderBottomStyle: "dotted" }
				}
			},
			...Object.entries(e.palette).filter(Wu()).map(([t]) => ({
				props: {
					disableUnderline: !1,
					color: t
				},
				style: { "&::after": { borderBottom: `2px solid ${(e.vars || e).palette[t]?.main}` } }
			})),
			{
				props: ({ ownerState: e }) => e.startAdornment,
				style: { paddingLeft: 12 }
			},
			{
				props: ({ ownerState: e }) => e.endAdornment,
				style: { paddingRight: 12 }
			},
			{
				props: ({ ownerState: e }) => e.multiline,
				style: { padding: "25px 12px 8px" }
			},
			{
				props: ({ ownerState: e, size: t }) => e.multiline && t === "small",
				style: {
					paddingTop: 21,
					paddingBottom: 4
				}
			},
			{
				props: ({ ownerState: e }) => e.multiline && e.hiddenLabel,
				style: {
					paddingTop: 16,
					paddingBottom: 17
				}
			},
			{
				props: ({ ownerState: e }) => e.multiline && e.hiddenLabel && e.size === "small",
				style: {
					paddingTop: 8,
					paddingBottom: 9
				}
			}
		]
	};
})), ag = X(pm, {
	name: "MuiFilledInput",
	slot: "Input",
	overridesResolver: um
})(Z(({ theme: e }) => ({
	paddingTop: 25,
	paddingRight: 12,
	paddingBottom: 8,
	paddingLeft: 12,
	"&:-webkit-autofill": {
		...!e.vars && {
			WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
			WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
			caretColor: e.palette.mode === "light" ? null : "#fff"
		},
		borderTopLeftRadius: "inherit",
		borderTopRightRadius: "inherit",
		...e.vars && e.applyStyles("dark", {
			WebkitBoxShadow: "0 0 0 100px #266798 inset",
			WebkitTextFillColor: "#fff",
			caretColor: "#fff"
		})
	},
	variants: [
		{
			props: { size: "small" },
			style: {
				paddingTop: 21,
				paddingBottom: 4
			}
		},
		{
			props: ({ ownerState: e }) => e.hiddenLabel,
			style: {
				paddingTop: 16,
				paddingBottom: 17
			}
		},
		{
			props: ({ ownerState: e }) => e.startAdornment,
			style: { paddingLeft: 0 }
		},
		{
			props: ({ ownerState: e }) => e.endAdornment,
			style: { paddingRight: 0 }
		},
		{
			props: ({ ownerState: e }) => e.hiddenLabel && e.size === "small",
			style: {
				paddingTop: 8,
				paddingBottom: 9
			}
		},
		{
			props: ({ ownerState: e }) => e.multiline,
			style: {
				paddingTop: 0,
				paddingBottom: 0,
				paddingLeft: 0,
				paddingRight: 0
			}
		}
	]
}))), og = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let n = os({
		props: e,
		name: "MuiFilledInput"
	}), { disableUnderline: r = !1, fullWidth: i = !1, hiddenLabel: a, inputComponent: o = "input", multiline: s = !1, notched: c, slotProps: l, slots: u = {}, type: d = "text", ...f } = n, p = {
		...n,
		disableUnderline: r,
		fullWidth: i,
		inputComponent: o,
		multiline: s,
		type: d
	}, m = rg(n), h = {
		root: { ownerState: p },
		input: { ownerState: p }
	}, g = l ? qt(h, l) : h;
	return /* @__PURE__ */ (0, K.jsx)(hm, {
		slots: {
			root: u.root ?? ig,
			input: u.input ?? ag
		},
		slotProps: g,
		fullWidth: i,
		inputComponent: o,
		multiline: s,
		ref: t,
		type: d,
		...f,
		classes: m
	});
});
og.muiName = "Input";
//#endregion
//#region node_modules/@mui/material/FormControl/formControlClasses.mjs
function sg(e) {
	return q("MuiFormControl", e);
}
qr("MuiFormControl", [
	"root",
	"marginNone",
	"marginNormal",
	"marginDense",
	"fullWidth",
	"disabled"
]);
//#endregion
//#region node_modules/@mui/material/FormControl/FormControl.mjs
var cg = (e) => {
	let { classes: t, margin: n, fullWidth: r } = e;
	return At({ root: [
		"root",
		n !== "none" && `margin${Pc(n)}`,
		r && "fullWidth"
	] }, sg, t);
}, lg = X("div", {
	name: "MuiFormControl",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.root,
			t[`margin${Pc(n.margin)}`],
			n.fullWidth && t.fullWidth
		];
	}
})({
	display: "inline-flex",
	flexDirection: "column",
	position: "relative",
	minWidth: 0,
	padding: 0,
	margin: 0,
	border: 0,
	verticalAlign: "top",
	variants: [
		{
			props: { margin: "normal" },
			style: {
				marginTop: 16,
				marginBottom: 8
			}
		},
		{
			props: { margin: "dense" },
			style: {
				marginTop: 8,
				marginBottom: 4
			}
		},
		{
			props: { fullWidth: !0 },
			style: { width: "100%" }
		}
	]
}), ug = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let n = os({
		props: e,
		name: "MuiFormControl"
	}), { children: r, className: i, color: a = "primary", component: o = "div", disabled: s = !1, error: c = !1, focused: l, fullWidth: u = !1, hiddenLabel: d = !1, margin: f = "none", required: p = !1, size: m = "medium", variant: h = "outlined", ...g } = n, v = {
		...n,
		color: a,
		component: o,
		disabled: s,
		error: c,
		fullWidth: u,
		hiddenLabel: d,
		margin: f,
		required: p,
		size: m,
		variant: h
	}, y = cg(v), [b, x] = _.useState(() => {
		let e = !1;
		return r && _.Children.forEach(r, (t) => {
			if (!Uc(t, ["Input", "Select"])) return;
			let n = Uc(t, ["Select"]) ? t.props.input : t;
			n && rm(n.props) && (e = !0);
		}), e;
	}), [S, C] = _.useState(() => {
		let e = !1;
		return r && _.Children.forEach(r, (t) => {
			Uc(t, ["Input", "Select"]) && (nm(t.props, !0) || nm(t.props.inputProps, !0)) && (e = !0);
		}), e;
	}), [w, T] = _.useState(!1);
	s && w && T(!1);
	let E = l !== void 0 && !s ? l : w;
	_.useRef(!1);
	let D = _.useCallback(() => {
		C(!0);
	}, []), O = _.useCallback(() => {
		C(!1);
	}, []), k = _.useMemo(() => ({
		adornedStart: b,
		setAdornedStart: x,
		color: a,
		disabled: s,
		error: c,
		filled: S,
		focused: E,
		fullWidth: u,
		hiddenLabel: d,
		size: m,
		onBlur: () => {
			T(!1);
		},
		onFocus: () => {
			T(!0);
		},
		onEmpty: O,
		onFilled: D,
		registerEffect: void 0,
		required: p,
		variant: h
	}), [
		b,
		a,
		s,
		c,
		S,
		E,
		u,
		d,
		void 0,
		O,
		D,
		p,
		m,
		h
	]);
	return /* @__PURE__ */ (0, K.jsx)($p.Provider, {
		value: k,
		children: /* @__PURE__ */ (0, K.jsx)(lg, {
			as: o,
			ownerState: v,
			className: G(y.root, i),
			ref: t,
			...g,
			children: r
		})
	});
});
//#endregion
//#region node_modules/@mui/material/FormHelperText/formHelperTextClasses.mjs
function dg(e) {
	return q("MuiFormHelperText", e);
}
var fg = qr("MuiFormHelperText", [
	"root",
	"error",
	"disabled",
	"sizeSmall",
	"sizeMedium",
	"contained",
	"focused",
	"filled",
	"required"
]), pg, mg = (e) => {
	let { classes: t, contained: n, size: r, disabled: i, error: a, filled: o, focused: s, required: c } = e;
	return At({ root: [
		"root",
		i && "disabled",
		a && "error",
		r && `size${Pc(r)}`,
		n && "contained",
		s && "focused",
		o && "filled",
		c && "required"
	] }, dg, t);
}, hg = X("p", {
	name: "MuiFormHelperText",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.root,
			n.size && t[`size${Pc(n.size)}`],
			n.contained && t.contained,
			n.filled && t.filled
		];
	}
})(Z(({ theme: e }) => ({
	color: (e.vars || e).palette.text.secondary,
	...e.typography.caption,
	textAlign: "left",
	marginTop: 3,
	marginRight: 0,
	marginBottom: 0,
	marginLeft: 0,
	[`&.${fg.disabled}`]: { color: (e.vars || e).palette.text.disabled },
	[`&.${fg.error}`]: { color: (e.vars || e).palette.error.main },
	variants: [{
		props: { size: "small" },
		style: { marginTop: 4 }
	}, {
		props: ({ ownerState: e }) => e.contained,
		style: {
			marginLeft: 14,
			marginRight: 14
		}
	}]
}))), gg = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let n = os({
		props: e,
		name: "MuiFormHelperText"
	}), { children: r, className: i, component: a = "p", disabled: o, error: s, filled: c, focused: l, margin: u, required: d, variant: f, ...p } = n, [m] = em({
		props: n,
		states: [
			"variant",
			"size",
			"disabled",
			"error",
			"filled",
			"focused",
			"required"
		]
	}), h = {
		...n,
		component: a,
		contained: m.variant === "filled" || m.variant === "outlined",
		variant: m.variant,
		size: m.size,
		disabled: m.disabled,
		error: m.error,
		filled: m.filled,
		focused: m.focused,
		required: m.required
	};
	return delete h.ownerState, /* @__PURE__ */ (0, K.jsx)(hg, {
		as: a,
		className: G(mg(h).root, i),
		ref: t,
		...p,
		ownerState: h,
		children: r === " " ? pg ||= /* @__PURE__ */ (0, K.jsx)("span", {
			className: "notranslate",
			"aria-hidden": !0,
			children: "​"
		}) : r
	});
});
//#endregion
//#region node_modules/@mui/material/FormLabel/formLabelClasses.mjs
function _g(e) {
	return q("MuiFormLabel", e);
}
var vg = qr("MuiFormLabel", [
	"root",
	"colorSecondary",
	"focused",
	"disabled",
	"error",
	"filled",
	"required",
	"asterisk"
]), yg = (e) => {
	let { classes: t, color: n, focused: r, disabled: i, error: a, filled: o, required: s } = e;
	return At({
		root: [
			"root",
			`color${Pc(n)}`,
			i && "disabled",
			a && "error",
			o && "filled",
			r && "focused",
			s && "required"
		],
		asterisk: ["asterisk", a && "error"]
	}, _g, t);
}, bg = X("label", {
	name: "MuiFormLabel",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.root,
			n.color === "secondary" && t.colorSecondary,
			n.filled && t.filled
		];
	}
})(Z(({ theme: e }) => ({
	color: (e.vars || e).palette.text.secondary,
	...e.typography.body1,
	lineHeight: "1.4375em",
	padding: 0,
	position: "relative",
	variants: [...Object.entries(e.palette).filter(Wu()).map(([t]) => ({
		props: { color: t },
		style: { [`&.${vg.focused}`]: { color: (e.vars || e).palette[t].main } }
	})), {
		props: {},
		style: {
			[`&.${vg.disabled}`]: { color: (e.vars || e).palette.text.disabled },
			[`&.${vg.error}`]: { color: (e.vars || e).palette.error.main }
		}
	}]
}))), xg = X("span", {
	name: "MuiFormLabel",
	slot: "Asterisk"
})(Z(({ theme: e }) => ({ [`&.${vg.error}`]: { color: (e.vars || e).palette.error.main } }))), Sg = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let n = os({
		props: e,
		name: "MuiFormLabel"
	}), { children: r, className: i, color: a, component: o = "label", disabled: s, error: c, filled: l, focused: u, required: d, ...f } = n, [p] = em({
		props: n,
		states: [
			"color",
			"required",
			"focused",
			"disabled",
			"error",
			"filled"
		]
	}), m = {
		...n,
		color: p.color || "primary",
		component: o,
		disabled: p.disabled,
		error: p.error,
		filled: p.filled,
		focused: p.focused,
		required: p.required
	}, h = yg(m);
	return /* @__PURE__ */ (0, K.jsxs)(bg, {
		as: o,
		ownerState: m,
		className: G(h.root, i),
		ref: t,
		...f,
		children: [r, p.required && /* @__PURE__ */ (0, K.jsxs)(xg, {
			ownerState: m,
			"aria-hidden": !0,
			className: h.asterisk,
			children: [" ", "*"]
		})]
	});
}), Cg = Fa({
	createStyledComponent: X("div", {
		name: "MuiGrid",
		slot: "Root",
		overridesResolver: (e, t) => {
			let { ownerState: n } = e;
			return [t.root, n.container && t.container];
		}
	}),
	componentName: "MuiGrid",
	useThemeProps: (e) => os({
		props: e,
		name: "MuiGrid"
	}),
	useTheme: ts
});
//#endregion
//#region node_modules/@mui/material/Grow/Grow.mjs
function wg(e) {
	return `scale(${e}, ${e ** 2})`;
}
var Tg = {
	entering: {
		opacity: 1,
		transform: wg(1)
	},
	entered: {
		opacity: 1,
		transform: "none"
	},
	exiting: {
		opacity: 0,
		transform: wg(.75)
	},
	exited: {
		opacity: 0,
		transform: wg(.75)
	}
}, Eg = {
	opacity: 0,
	transform: wg(.75),
	visibility: "hidden"
}, Dg = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let { addEndListener: n, appear: r = !0, children: i, easing: a, in: o, onEnter: s, onEntered: c, onEntering: l, onExit: u, onExited: d, onExiting: f, style: p, timeout: m = "auto", ...h } = e, g = Pl(), v = _.useRef(), y = ts(), b = _.useRef(null), x = il(b, wp(i), t), S = Q(b, l), C = Q(b, (e, t) => {
		Fl(e);
		let { duration: n, delay: r, easing: i } = Ll({
			style: p,
			timeout: m,
			easing: a
		}, { mode: "enter" }), o;
		m === "auto" ? (o = y.transitions.getAutoHeightDuration(e.clientHeight), v.current = o) : o = n, e.style.transition = [y.transitions.create("opacity", {
			duration: o,
			delay: r
		}), y.transitions.create("transform", {
			duration: o * .666,
			delay: r,
			easing: i
		})].join(","), s && s(e, t);
	}), w = Q(b, c), T = Q(b, f), E = Q(b, (e) => {
		let { duration: t, delay: n, easing: r } = Ll({
			style: p,
			timeout: m,
			easing: a
		}, { mode: "exit" }), i;
		m === "auto" ? (i = y.transitions.getAutoHeightDuration(e.clientHeight), v.current = i) : i = t, e.style.transition = [y.transitions.create("opacity", {
			duration: i,
			delay: n
		}), y.transitions.create("transform", {
			duration: i * .666,
			delay: n || i * .333,
			easing: r
		})].join(","), e.style.opacity = 0, e.style.transform = wg(.75), u && u(e);
	}), D = Q(b, (e) => {
		e.style.transition = "", d && d(e);
	});
	return /* @__PURE__ */ (0, K.jsx)(vl, {
		appear: r,
		in: o,
		nodeRef: b,
		onEnter: C,
		onEntered: w,
		onEntering: S,
		onExit: E,
		onExited: D,
		onExiting: T,
		addEndListener: (e) => {
			m === "auto" && g.start(v.current || 0, e), n && n(b.current, e);
		},
		timeout: m === "auto" ? null : m,
		...h,
		children: (e, { ownerState: t, ...n }) => {
			let r = Il(e, o, Tg, Eg, p, i.props.style);
			return /* @__PURE__ */ _.cloneElement(i, {
				style: r,
				ref: x,
				...n
			});
		}
	});
});
Dg && (Dg.muiSupportAuto = !0);
//#endregion
//#region node_modules/@mui/material/InputLabel/inputLabelClasses.mjs
function Og(e) {
	return q("MuiInputLabel", e);
}
var kg = qr("MuiInputLabel", [
	"root",
	"focused",
	"disabled",
	"error",
	"required",
	"asterisk",
	"formControl",
	"sizeSmall",
	"shrink",
	"animated",
	"standard",
	"filled",
	"outlined"
]), Ag = (e) => {
	let { classes: t, disableUnderline: n } = e, r = At({
		root: ["root", !n && "underline"],
		input: ["input"]
	}, gm, t);
	return {
		...t,
		...r
	};
}, jg = X(fm, {
	shouldForwardProp: (e) => is(e) || e === "classes",
	name: "MuiInput",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [...lm(e, t), !n.disableUnderline && t.underline];
	}
})(Z(({ theme: e }) => {
	let t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
	return e.vars && (t = e.alpha(e.vars.palette.common.onBackground, e.vars.opacity.inputUnderline)), {
		position: "relative",
		variants: [
			{
				props: ({ ownerState: e }) => e.formControl,
				style: { [`label + &, .${kg.root} + &`]: { marginTop: 16 } }
			},
			{
				props: ({ ownerState: e }) => !e.disableUnderline,
				style: {
					"&::after": {
						left: 0,
						bottom: 0,
						content: "\"\"",
						position: "absolute",
						right: 0,
						transform: "scaleX(0)",
						transition: e.transitions.create("transform", {
							duration: e.transitions.duration.shorter,
							easing: e.transitions.easing.easeOut
						}),
						pointerEvents: "none"
					},
					[`&.${_m.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
					[`&.${_m.error}`]: { "&::before, &::after": { borderBottomColor: (e.vars || e).palette.error.main } },
					"&::before": {
						borderBottom: `1px solid ${t}`,
						left: 0,
						bottom: 0,
						content: "\"\"",
						position: "absolute",
						right: 0,
						transition: e.transitions.create("border-bottom-color", { duration: e.transitions.duration.shorter }),
						pointerEvents: "none"
					},
					[`&:hover:not(.${_m.disabled}, .${_m.error}):before`]: {
						borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
						"@media (hover: none)": { borderBottom: `1px solid ${t}` }
					},
					[`&.${_m.disabled}:before`]: { borderBottomStyle: "dotted" }
				}
			},
			...Object.entries(e.palette).filter(Wu()).map(([t]) => ({
				props: {
					color: t,
					disableUnderline: !1
				},
				style: { "&::after": { borderBottom: `2px solid ${(e.vars || e).palette[t].main}` } }
			}))
		]
	};
})), Mg = X(pm, {
	name: "MuiInput",
	slot: "Input",
	overridesResolver: um
})({}), Ng = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let n = os({
		props: e,
		name: "MuiInput"
	}), { disableUnderline: r = !1, fullWidth: i = !1, inputComponent: a = "input", multiline: o = !1, notched: s, slotProps: c, slots: l = {}, type: u = "text", ...d } = n, f = Ag(n), p = { root: { ownerState: { disableUnderline: r } } }, m = c ? qt(c, p) : p;
	return /* @__PURE__ */ (0, K.jsx)(hm, {
		slots: {
			root: l.root ?? jg,
			input: l.input ?? Mg
		},
		slotProps: m,
		fullWidth: i,
		inputComponent: a,
		multiline: o,
		ref: t,
		type: u,
		...d,
		classes: f
	});
});
Ng.muiName = "Input";
//#endregion
//#region node_modules/@mui/material/InputLabel/InputLabel.mjs
var Pg = (e) => {
	let { classes: t, formControl: n, size: r, shrink: i, disableAnimation: a, variant: o, required: s } = e, c = At({
		root: [
			"root",
			n && "formControl",
			!a && "animated",
			i && "shrink",
			r && r !== "medium" && `size${Pc(r)}`,
			o
		],
		asterisk: [s && "asterisk"]
	}, Og, t);
	return {
		...t,
		...c
	};
}, Fg = X(Sg, {
	shouldForwardProp: (e) => is(e) || e === "classes",
	name: "MuiInputLabel",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			{ [`& .${vg.asterisk}`]: t.asterisk },
			t.root,
			n.formControl && t.formControl,
			n.size === "small" && t.sizeSmall,
			n.shrink && t.shrink,
			!n.disableAnimation && t.animated,
			n.focused && t.focused,
			t[n.variant]
		];
	}
})(Z(({ theme: e }) => ({
	display: "block",
	transformOrigin: "top left",
	whiteSpace: "nowrap",
	overflow: "hidden",
	textOverflow: "ellipsis",
	maxWidth: "100%",
	variants: [
		{
			props: ({ ownerState: e }) => e.formControl,
			style: {
				position: "absolute",
				left: 0,
				top: 0,
				transform: "translate(0, 20px) scale(1)"
			}
		},
		{
			props: { size: "small" },
			style: { transform: "translate(0, 17px) scale(1)" }
		},
		{
			props: ({ ownerState: e }) => e.shrink,
			style: {
				transform: "translate(0, -1.5px) scale(0.75)",
				transformOrigin: "top left",
				maxWidth: "133%"
			}
		},
		{
			props: ({ ownerState: e }) => !e.disableAnimation,
			style: { transition: e.transitions.create([
				"color",
				"transform",
				"max-width"
			], {
				duration: e.transitions.duration.shorter,
				easing: e.transitions.easing.easeOut
			}) }
		},
		{
			props: { variant: "filled" },
			style: {
				zIndex: 1,
				pointerEvents: "none",
				transform: "translate(12px, 16px) scale(1)",
				maxWidth: "calc(100% - 24px)"
			}
		},
		{
			props: {
				variant: "filled",
				size: "small"
			},
			style: { transform: "translate(12px, 13px) scale(1)" }
		},
		{
			props: ({ variant: e, ownerState: t }) => e === "filled" && t.shrink,
			style: {
				userSelect: "none",
				pointerEvents: "auto",
				transform: "translate(12px, 7px) scale(0.75)",
				maxWidth: "calc(133% - 24px)"
			}
		},
		{
			props: ({ variant: e, ownerState: t, size: n }) => e === "filled" && t.shrink && n === "small",
			style: { transform: "translate(12px, 4px) scale(0.75)" }
		},
		{
			props: { variant: "outlined" },
			style: {
				zIndex: 1,
				pointerEvents: "none",
				transform: "translate(14px, 16px) scale(1)",
				maxWidth: "calc(100% - 24px)"
			}
		},
		{
			props: {
				variant: "outlined",
				size: "small"
			},
			style: { transform: "translate(14px, 9px) scale(1)" }
		},
		{
			props: ({ variant: e, ownerState: t }) => e === "outlined" && t.shrink,
			style: {
				userSelect: "none",
				pointerEvents: "auto",
				maxWidth: "calc(133% - 32px)",
				transform: "translate(14px, -9px) scale(0.75)"
			}
		}
	]
}))), Ig = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let n = os({
		name: "MuiInputLabel",
		props: e
	}), { disableAnimation: r = !1, margin: i, shrink: a, variant: o, className: s, ...c } = n, [l, u] = em({
		props: n,
		states: [
			"size",
			"variant",
			"required",
			"focused"
		]
	}), d = a;
	d === void 0 && u && (d = u.filled || u.focused || u.adornedStart);
	let f = {
		...n,
		disableAnimation: r,
		formControl: u,
		shrink: d,
		size: l.size,
		variant: l.variant,
		required: l.required,
		focused: l.focused
	}, p = Pg(f);
	return /* @__PURE__ */ (0, K.jsx)(Fg, {
		"data-shrink": d,
		ref: t,
		className: G(p.root, s),
		...c,
		ownerState: f,
		classes: p
	});
}), Lg = /* @__PURE__ */ _.createContext({});
//#endregion
//#region node_modules/@mui/material/List/listClasses.mjs
function Rg(e) {
	return q("MuiList", e);
}
qr("MuiList", [
	"root",
	"padding",
	"dense",
	"subheader"
]);
//#endregion
//#region node_modules/@mui/material/List/List.mjs
var zg = (e) => {
	let { classes: t, disablePadding: n, dense: r, subheader: i } = e;
	return At({ root: [
		"root",
		!n && "padding",
		r && "dense",
		i && "subheader"
	] }, Rg, t);
}, Bg = X("ul", {
	name: "MuiList",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.root,
			!n.disablePadding && t.padding,
			n.dense && t.dense,
			n.subheader && t.subheader
		];
	}
})({
	listStyle: "none",
	margin: 0,
	padding: 0,
	position: "relative",
	variants: [{
		props: ({ ownerState: e }) => !e.disablePadding,
		style: {
			paddingTop: 8,
			paddingBottom: 8
		}
	}, {
		props: ({ ownerState: e }) => e.subheader,
		style: {
			paddingTop: 0,
			isolation: "isolate"
		}
	}]
}), Vg = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let n = os({
		props: e,
		name: "MuiList"
	}), { children: r, className: i, component: a = "ul", dense: o = !1, disablePadding: s = !1, subheader: c, ...l } = n, u = _.useMemo(() => ({ dense: o }), [o]), d = {
		...n,
		component: a,
		dense: o,
		disablePadding: s
	}, f = zg(d);
	return /* @__PURE__ */ (0, K.jsx)(Lg.Provider, {
		value: u,
		children: /* @__PURE__ */ (0, K.jsxs)(Bg, {
			as: a,
			className: G(f.root, i),
			ref: t,
			ownerState: d,
			...l,
			children: [c, r]
		})
	});
}), Hg = qr("MuiListItemIcon", ["root", "alignItemsFlexStart"]), Ug = qr("MuiListItemText", [
	"root",
	"multiline",
	"dense",
	"inset",
	"primary",
	"secondary"
]), Wg = /* @__PURE__ */ _.createContext(void 0);
function Gg() {
	let e = _.useContext(Wg);
	if (e === void 0) throw Error("MUI: RovingTabIndexContext is missing. Roving tab index items must be placed within a roving tab index provider.");
	return e;
}
//#endregion
//#region node_modules/@mui/utils/fastObjectShallowCompare/fastObjectShallowCompare.mjs
var Kg = Object.is;
function qg(e, t) {
	if (e === t) return !0;
	if (!(e instanceof Object) || !(t instanceof Object)) return !1;
	let n = 0, r = 0;
	for (let r in e) if (n += 1, !Kg(e[r], t[r]) || !(r in t)) return !1;
	for (let e in t) r += 1;
	return n === r;
}
//#endregion
//#region node_modules/@mui/utils/useRovingTabIndex/useRovingTabIndex.mjs
var Jg = [
	"ArrowRight",
	"ArrowLeft",
	"ArrowUp",
	"ArrowDown",
	"Home",
	"End"
];
function Yg(e) {
	let { activeItemId: t, getDefaultActiveItemId: n, orientation: r, isRtl: i = !1, isItemFocusable: a = l_, wrap: o = !0 } = e, [s, c] = _.useState(t), l = _.useRef(t), u = s;
	t !== l.current && (l.current = t, t !== void 0 && t !== s && (u = t, c(t)));
	let d = _.useRef(null), f = _.useRef(/* @__PURE__ */ new Map()), [p, m] = _.useState(0), h = _.useMemo(() => o_(f.current), [p]), g = Zg(u, h, a, n), v = _.useRef(g);
	v.current = g;
	let y = _.useCallback(() => {
		let e = o_(f.current);
		return r_(e, Zg(v.current, e, a, n));
	}, [n, a]), b = _.useCallback(() => f.current, []), x = tl((e) => {
		qg(f.current.get(e.id) ?? null, e) || (f.current.set(e.id, e), m((e) => e + 1));
	}), S = tl((e) => {
		f.current.delete(e) && m((e) => e + 1);
	}), C = tl((e) => {
		c(e);
	}), w = _.useCallback((e) => v.current === e, []), T = _.useCallback((e, t, n, r) => {
		let i = t_(s_(f.current), e, t, n, r ?? a);
		return i ? (i.element?.focus(), c(i.id), i) : null;
	}, [a]), E = _.useCallback((e) => ({
		onFocus: (e) => {
			let t = s_(f.current), n = a_(t, e.target);
			n !== -1 && c(t[n].id);
		},
		onKeyDown: (e) => {
			if (e.altKey || e.shiftKey || e.ctrlKey || e.metaKey || !Jg.includes(e.key)) return;
			let t = r === "horizontal" ? "ArrowLeft" : "ArrowUp", n = r === "horizontal" ? "ArrowRight" : "ArrowDown";
			r === "horizontal" && i && (t = "ArrowRight", n = "ArrowLeft");
			let a = s_(f.current), s = Wc(Kc(d.current)), c = s === d.current, l = e_(a, s, v.current), u = "next";
			switch (e.key) {
				case t:
					u = "previous", e.preventDefault(), c && (l = a.length);
					break;
				case n:
					e.preventDefault(), c && (l = -1);
					break;
				case "Home":
					e.preventDefault(), l = -1;
					break;
				case "End":
					e.preventDefault(), u = "previous", l = a.length;
					break;
				default: return;
			}
			T(l, u, o);
		},
		ref: f_(e, (e) => {
			d.current = e;
		})
	}), [
		T,
		i,
		r,
		o
	]), D = _.useCallback((e) => {
		let t = s_(f.current), n = Wc(Kc(d.current));
		return T(n === d.current ? -1 : e_(t, n, v.current), "next", !0, e)?.id ?? null;
	}, [T]);
	return _.useMemo(() => ({
		activeItemId: g,
		focusNext: D,
		getActiveItem: y,
		getContainerProps: E,
		getItemMap: b,
		isItemActive: w,
		registerItem: x,
		setActiveItemId: C,
		unregisterItem: S
	}), [
		g,
		D,
		y,
		E,
		b,
		w,
		x,
		C,
		S
	]);
}
function Xg(e) {
	let { activeItemId: t, registerItem: n, unregisterItem: r } = Gg(), i = _.useRef(null), a = _.useMemo(() => ({
		disabled: e.disabled ?? !1,
		element: null,
		focusableWhenDisabled: e.focusableWhenDisabled ?? !1,
		id: e.id,
		selected: e.selected ?? !1,
		textValue: e.textValue
	}), [
		e.disabled,
		e.focusableWhenDisabled,
		e.id,
		e.selected,
		e.textValue
	]), o = _.useRef(a);
	o.current = a;
	let s = _.useCallback((t) => {
		if (i.current = t, t == null) {
			queueMicrotask(() => {
				i.current ?? r(e.id);
			});
			return;
		}
		n({
			...o.current,
			element: t
		});
	}, [
		e.id,
		n,
		r
	]), c = rl(e.ref, s);
	return li(() => {
		i.current && n({
			...a,
			element: i.current
		});
	}, [a, n]), li(() => {
		let t = e.id;
		return () => {
			r(t);
		};
	}, [e.id, r]), {
		ref: c,
		tabIndex: t === e.id ? 0 : -1
	};
}
function Zg(e, t, n, r) {
	return e == null ? $g(t, n, r) : Qg(e, t, n);
}
function Qg(e, t, n) {
	let r = i_(t, e);
	return r === -1 ? n_(t, n) : n(t[r]) ? t[r].id : t_(t, r, "next", !1, n)?.id ?? null;
}
function $g(e, t, n) {
	let r = n?.(e);
	if (r != null) {
		let n = r_(e, r);
		if (n && t(n)) return n.id;
	}
	return n_(e, t);
}
function e_(e, t, n) {
	if (t) {
		let n = a_(e, t);
		if (n !== -1) return n;
	}
	return i_(e, n);
}
function t_(e, t, n, r, i) {
	let a = e.length - 1;
	if (a === -1) return null;
	let o = !1, s = c_(t, a, n, r), c = s;
	for (; s !== -1;) {
		if (s === c) {
			if (o) return null;
			o = !0;
		}
		let t = e[s];
		if (!t || !i(t)) s = c_(s, a, n, r);
		else return t;
	}
	return null;
}
function n_(e, t) {
	return e.find((e) => t(e))?.id ?? null;
}
function r_(e, t) {
	return t == null ? null : e.find((e) => e.id === t) ?? null;
}
function i_(e, t) {
	return t == null ? -1 : e.findIndex((e) => e.id === t);
}
function a_(e, t) {
	return t ? e.findIndex((e) => e.element === t || e.element?.contains(t)) : -1;
}
function o_(e) {
	let t = Array.from(e.values());
	if (t.every((e) => e.element == null)) return t;
	let n = t.filter(u_).sort((e, t) => d_(e.element, t.element)), r = t.filter((e) => !u_(e));
	return [...n, ...r];
}
function s_(e) {
	return o_(e).filter(u_);
}
function c_(e, t, n, r = !0) {
	return n === "next" ? e === t ? r ? 0 : -1 : e + 1 : e === 0 ? r ? t : -1 : e - 1;
}
function l_(e) {
	return e.element ? e.focusableWhenDisabled ? !0 : !e.disabled && !e.element.hasAttribute("disabled") && e.element.getAttribute("aria-disabled") !== "true" && e.element.hasAttribute("tabindex") : !1;
}
function u_(e) {
	return e.element != null && e.element.isConnected;
}
function d_(e, t) {
	if (e === t) return 0;
	let n = e.compareDocumentPosition(t);
	return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}
function f_(...e) {
	return (t) => {
		e.forEach((e) => {
			Xc(e ?? null, t);
		});
	};
}
//#endregion
//#region node_modules/@mui/material/utils/getScrollbarSize.mjs
var p_ = xh;
//#endregion
//#region node_modules/@mui/material/utils/focusWithVisible.mjs
function m_(e, t) {
	if (t == null) {
		e.focus();
		return;
	}
	try {
		e.focus({ focusVisible: t === "keyboard" });
	} catch {
		e.focus();
	}
}
//#endregion
//#region node_modules/@mui/material/Select/utils/getOpenInteractionType.mjs
function h_(e) {
	return e ? e.type === "mousedown" || e.type === "pointerdown" || e.type === "touchstart" ? "pointer" : e.type === "keydown" || e.type === "click" && e.detail === 0 ? "keyboard" : null : null;
}
//#endregion
//#region node_modules/@mui/material/Select/utils/isEmpty.mjs
function g_(e) {
	return e == null || typeof e == "string" && !e.trim();
}
//#endregion
//#region node_modules/@mui/material/Select/utils/areEqualValues.mjs
function __(e, t) {
	return typeof t == "object" && t ? e === t : String(e) === String(t);
}
//#endregion
//#region node_modules/@mui/material/Select/utils/SelectFocusSourceContext.mjs
var v_ = /* @__PURE__ */ _.createContext(null);
function y_() {
	return _.useContext(v_);
}
var b_ = v_.Provider, x_ = /* @__PURE__ */ _.createContext(void 0);
function S_() {
	let e = _.useContext(x_);
	if (e === void 0) throw Error("MUI: MenuListContext is missing. MenuItems must be placed within Menu or MenuList.");
	return e;
}
//#endregion
//#region node_modules/@mui/material/MenuList/MenuList.mjs
function C_(e) {
	let t = e?.element ?? e;
	if (!t) return "";
	if (e?.textValue !== void 0) return e.textValue;
	let n = t.innerText;
	return n === void 0 && (n = t.textContent), n ?? "";
}
function w_(e, t) {
	if (t === void 0) return !0;
	let n = C_(e);
	return n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function T_(e, t) {
	return w_(e, t) ? l_(e) : !1;
}
function E_(e, t) {
	m_(e, t);
}
var D_ = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let { actions: n, autoFocus: r = !1, autoFocusItem: i = !1, children: a, className: o, disabledItemsFocusable: s = !1, disableListWrap: c = !1, onKeyDown: l, variant: u = "selectedMenu", ...d } = e, f = _.useRef(null), p = _.useRef(!1), [m, h] = _.useState(!1), g = y_(), v = _.useRef({
		keys: [],
		repeating: !0,
		previousKeyMatched: !0,
		lastTime: null
	}), y = Yg({
		activeItemId: void 0,
		getDefaultActiveItemId: _.useCallback((e) => u === "selectedMenu" ? e.find((e) => e.selected && l_(e))?.id ?? e.find((e) => l_(e))?.id ?? null : e.find((e) => l_(e))?.id ?? null, [u]),
		orientation: "vertical",
		wrap: !c
	}), { activeItemId: b, focusNext: x, getActiveItem: S, getContainerProps: C, getItemMap: w } = y, T = nl((e = !1) => {
		if (!f.current || !e && p.current) return null;
		if (i) {
			let e = S();
			if (e?.element) {
				let t = Array.from(w().values()).some((e) => e.selected);
				return h(u === "menu" && t && !e.selected && g == null), E_(e.element, g), p.current = !0, e.element;
			}
			return r ? (h(!1), f.current.focus(), f.current) : null;
		}
		return r ? (h(!1), f.current.focus(), p.current = !0, f.current) : (h(!1), null);
	});
	Zc(() => {
		if (!r && !i) {
			p.current = !1, h(!1);
			return;
		}
		T();
	}, [
		b,
		i,
		r,
		T
	]), _.useImperativeHandle(n, () => ({
		adjustStyleForScrollbar: (e, { direction: t }) => {
			let n = !f.current.style.width;
			if (e.clientHeight < f.current.clientHeight && n) {
				let n = `${p_(Yc(e))}px`;
				f.current.style[t === "rtl" ? "paddingLeft" : "paddingRight"] = n, f.current.style.width = `calc(100% + ${n})`;
			}
			return f.current;
		},
		focusInitialTarget: () => {
			if (!f.current) return null;
			let e = Gc(qc(f.current));
			return e && jh(f.current, e) ? e : T(!0);
		}
	}), [T]);
	let E = C(), D = il(f, E.ref, t), O = _.useMemo(() => ({
		itemsFocusableWhenDisabled: s,
		suppressInitialFocusVisible: m,
		variant: u
	}), [
		s,
		m,
		u
	]);
	return /* @__PURE__ */ (0, K.jsx)(Vg, {
		role: "menu",
		ref: D,
		className: o,
		onKeyDown: nl((e) => {
			if (m && h(!1), (e.ctrlKey || e.metaKey || e.altKey) && l) {
				l(e);
				return;
			}
			if (E.onKeyDown(e), e.key.length === 1) {
				let t = v.current, n = e.key.toLowerCase(), r = performance.now();
				t.keys.length > 0 && (r - t.lastTime > 500 ? (t.keys = [], t.repeating = !0, t.previousKeyMatched = !0) : t.repeating && n !== t.keys[0] && (t.repeating = !1)), t.lastTime = r, t.keys.push(n);
				let i = Gc(qc(f.current)), a = i && !t.repeating && w_(i, t);
				t.previousKeyMatched && (a || x((e) => T_(e, t)) != null) ? e.preventDefault() : t.previousKeyMatched = !1;
			}
			l && l(e);
		}),
		onFocus: E.onFocus,
		tabIndex: -1,
		...d,
		children: /* @__PURE__ */ (0, K.jsx)(x_.Provider, {
			value: O,
			children: /* @__PURE__ */ (0, K.jsx)(Wg.Provider, {
				value: y,
				children: a
			})
		})
	});
});
//#endregion
//#region node_modules/@mui/material/Popover/popoverClasses.mjs
function O_(e) {
	return q("MuiPopover", e);
}
qr("MuiPopover", ["root", "paper"]);
//#endregion
//#region node_modules/@mui/material/Popover/Popover.mjs
function k_(e, t) {
	let n = 0;
	return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function A_(e, t) {
	let n = 0;
	return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function j_(e) {
	return [e.horizontal, e.vertical].map((e) => typeof e == "number" ? `${e}px` : e).join(" ");
}
function M_(e) {
	return typeof e == "function" ? e() : e;
}
var N_ = (e) => {
	let { classes: t } = e;
	return At({
		root: ["root"],
		paper: ["paper"]
	}, O_, t);
}, P_ = X(Xh, {
	name: "MuiPopover",
	slot: "Root"
})({}), F_ = X(eu, {
	name: "MuiPopover",
	slot: "Paper"
})({
	position: "absolute",
	overflowY: "auto",
	overflowX: "hidden",
	minWidth: 16,
	minHeight: 16,
	maxWidth: "calc(100% - 32px)",
	maxHeight: "calc(100% - 32px)",
	outline: 0
}), I_ = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let n = os({
		props: e,
		name: "MuiPopover"
	}), { action: r, anchorEl: i, anchorOrigin: a = {
		vertical: "top",
		horizontal: "left"
	}, anchorPosition: o, anchorReference: s = "anchorEl", children: c, className: l, container: u, disableAutoFocus: d = !1, elevation: f = 8, marginThreshold: p = 16, open: m, slots: h = {}, slotProps: g = {}, transformOrigin: v = {
		vertical: "top",
		horizontal: "left"
	}, transitionDuration: y = "auto", disableScrollLock: b = !1, ...x } = n, S = _.useRef(), C = {
		...n,
		anchorOrigin: a,
		anchorReference: s,
		elevation: f,
		marginThreshold: p,
		transformOrigin: v,
		transitionDuration: y
	}, w = N_(C), T = _.useCallback(() => {
		if (s === "anchorPosition") return o;
		let e = M_(i), t = (e && e.nodeType === 1 ? e : qc(S.current).body).getBoundingClientRect();
		return {
			top: t.top + k_(t, a.vertical),
			left: t.left + A_(t, a.horizontal)
		};
	}, [
		i,
		a.horizontal,
		a.vertical,
		o,
		s
	]), E = _.useCallback((e) => ({
		vertical: k_(e, v.vertical),
		horizontal: A_(e, v.horizontal)
	}), [v.horizontal, v.vertical]), D = _.useCallback((e) => {
		let t = {
			width: e.offsetWidth,
			height: e.offsetHeight
		}, n = E(t);
		if (s === "none") return {
			top: null,
			left: null,
			transformOrigin: j_(n)
		};
		let r = T(), a = r.top - n.vertical, o = r.left - n.horizontal, c = a + t.height, l = o + t.width, u = Yc(M_(i)), d = u.innerHeight - p, f = u.innerWidth - p;
		if (p != null && a < p) {
			let e = a - p;
			a -= e, n.vertical += e;
		} else if (p != null && c > d) {
			let e = c - d;
			a -= e, n.vertical += e;
		}
		if (p != null && o < p) {
			let e = o - p;
			o -= e, n.horizontal += e;
		} else if (l > f) {
			let e = l - f;
			o -= e, n.horizontal += e;
		}
		return {
			top: `${Math.round(a)}px`,
			left: `${Math.round(o)}px`,
			transformOrigin: j_(n)
		};
	}, [
		i,
		s,
		T,
		E,
		p
	]), [O, k] = _.useState(m), A = _.useCallback(() => {
		let e = S.current;
		if (!e) return;
		let t = D(e);
		t.top != null && e.style.setProperty("top", t.top), t.left != null && (e.style.left = t.left), e.style.transformOrigin = t.transformOrigin, k(!0);
	}, [D]);
	_.useEffect(() => (b && window.addEventListener("scroll", A), () => window.removeEventListener("scroll", A)), [
		i,
		b,
		A
	]);
	let j = () => {
		A();
	}, M = () => {
		k(!1);
	};
	_.useEffect(() => {
		m && A();
	}), _.useImperativeHandle(r, () => m ? { updatePosition: () => {
		A();
	} } : null, [m, A]), _.useEffect(() => {
		if (!m) return;
		let e = Hc(() => {
			A();
		}), t = Yc(M_(i));
		return t.addEventListener("resize", e), () => {
			e.clear(), t.removeEventListener("resize", e);
		};
	}, [
		i,
		m,
		A
	]);
	let N = y, ee = {
		slots: h,
		slotProps: g
	}, [te, P] = Wl("transition", {
		elementType: Dg,
		externalForwardedProps: ee,
		ownerState: C,
		getSlotProps: (e) => ({
			...e,
			onEntering: (t, n) => {
				e.onEntering?.(t, n), j();
			},
			onExited: (t) => {
				e.onExited?.(t), M();
			}
		}),
		additionalProps: {
			appear: !0,
			in: m
		}
	});
	y === "auto" && !te.muiSupportAuto && (N = void 0);
	let F = u || (i ? qc(M_(i)).body : void 0), [I, { slots: L, slotProps: ne, ...re }] = Wl("root", {
		ref: t,
		elementType: P_,
		externalForwardedProps: {
			...ee,
			...x
		},
		shouldForwardComponentProp: !0,
		additionalProps: {
			slots: { backdrop: h.backdrop },
			slotProps: { backdrop: ol(typeof g.backdrop == "function" ? g.backdrop(C) : g.backdrop, { invisible: !0 }) },
			container: F,
			open: m
		},
		ownerState: C,
		className: G(w.root, l)
	}), [R, z] = Wl("paper", {
		ref: S,
		className: w.paper,
		elementType: F_,
		externalForwardedProps: ee,
		shouldForwardComponentProp: !0,
		additionalProps: {
			elevation: f,
			style: O ? void 0 : { opacity: 0 }
		},
		ownerState: C
	});
	return /* @__PURE__ */ (0, K.jsx)(I, {
		...re,
		...!Rl(I) && {
			slots: L,
			slotProps: ne,
			disableAutoFocus: d,
			disableScrollLock: b
		},
		children: /* @__PURE__ */ (0, K.jsx)(te, {
			...P,
			timeout: N,
			children: /* @__PURE__ */ (0, K.jsx)(R, {
				...z,
				children: c
			})
		})
	});
});
//#endregion
//#region node_modules/@mui/material/Menu/menuClasses.mjs
function L_(e) {
	return q("MuiMenu", e);
}
qr("MuiMenu", [
	"root",
	"paper",
	"list"
]);
//#endregion
//#region node_modules/@mui/material/Menu/Menu.mjs
var R_ = {
	vertical: "top",
	horizontal: "right"
}, z_ = {
	vertical: "top",
	horizontal: "left"
}, B_ = (e) => {
	let { classes: t } = e;
	return At({
		root: ["root"],
		paper: ["paper"],
		list: ["list"]
	}, L_, t);
}, V_ = X(I_, {
	shouldForwardProp: (e) => is(e) || e === "classes",
	name: "MuiMenu",
	slot: "Root"
})({}), H_ = X(F_, {
	name: "MuiMenu",
	slot: "Paper"
})({
	maxHeight: "calc(100% - 96px)",
	WebkitOverflowScrolling: "touch"
}), U_ = X(D_, {
	name: "MuiMenu",
	slot: "List"
})({ outline: 0 }), W_ = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let n = os({
		props: e,
		name: "MuiMenu"
	}), { autoFocus: r = !0, children: i, className: a, disableAutoFocusItem: o = !1, onClose: s, open: c, PopoverClasses: l, transitionDuration: u = "auto", variant: d = "selectedMenu", slots: f = {}, slotProps: p = {}, ...m } = n, h = Pi(), g = {
		...n,
		autoFocus: r,
		disableAutoFocusItem: o,
		transitionDuration: u,
		variant: d
	}, v = B_(g), y = r && c, b = y && !o, x = _.useRef(null), S = (e, t) => {
		x.current && (x.current.adjustStyleForScrollbar(e, { direction: h ? "rtl" : "ltr" }), y && x.current.focusInitialTarget?.());
	}, C = (e) => {
		e.key === "Tab" && (e.preventDefault(), s && s(e, "tabKeyDown"));
	}, w = {
		slots: f,
		slotProps: p
	}, T = Cp({
		elementType: f.root,
		externalSlotProps: p.root,
		ownerState: g,
		className: [v.root, a]
	}), [E, D] = Wl("paper", {
		className: v.paper,
		elementType: H_,
		externalForwardedProps: w,
		shouldForwardComponentProp: !0,
		ownerState: g
	}), [O, k] = Wl("list", {
		className: v.list,
		elementType: U_,
		shouldForwardComponentProp: !0,
		externalForwardedProps: w,
		getSlotProps: (e) => ({
			...e,
			onKeyDown: (t) => {
				C(t), e.onKeyDown?.(t);
			}
		}),
		ownerState: g
	}), A = typeof p.transition == "function" ? p.transition(g) : p.transition;
	return /* @__PURE__ */ (0, K.jsx)(V_, {
		disableAutoFocus: r,
		onClose: s,
		anchorOrigin: {
			vertical: "bottom",
			horizontal: h ? "right" : "left"
		},
		transformOrigin: h ? R_ : z_,
		slots: {
			root: f.root,
			paper: E,
			backdrop: f.backdrop,
			transition: f.transition
		},
		slotProps: {
			root: T,
			paper: D,
			backdrop: typeof p.backdrop == "function" ? p.backdrop(g) : p.backdrop,
			transition: {
				...A,
				onEntering: (...e) => {
					S(...e), A?.onEntering?.(...e);
				}
			}
		},
		open: c,
		ref: t,
		transitionDuration: u,
		ownerState: g,
		...m,
		classes: l,
		children: /* @__PURE__ */ (0, K.jsx)(O, {
			actions: x,
			autoFocus: y,
			autoFocusItem: b,
			variant: d,
			...k,
			children: i
		})
	});
});
//#endregion
//#region node_modules/@mui/material/MenuItem/menuItemClasses.mjs
function G_(e) {
	return q("MuiMenuItem", e);
}
var K_ = qr("MuiMenuItem", [
	"root",
	"focusVisible",
	"dense",
	"disabled",
	"divider",
	"gutters",
	"selected"
]), q_ = (e, t) => {
	let { ownerState: n } = e;
	return [
		t.root,
		n.dense && t.dense,
		n.divider && t.divider,
		!n.disableGutters && t.gutters
	];
}, J_ = (e) => {
	let { disabled: t, dense: n, divider: r, disableGutters: i, selected: a, classes: o } = e, s = At({ root: [
		"root",
		n && "dense",
		t && "disabled",
		!i && "gutters",
		r && "divider",
		a && "selected"
	] }, G_, o);
	return {
		...o,
		...s
	};
}, Y_ = X(Nu, {
	shouldForwardProp: (e) => is(e) || e === "classes",
	name: "MuiMenuItem",
	slot: "Root",
	overridesResolver: q_
})(Z(({ theme: e }) => ({
	...e.typography.body1,
	display: "flex",
	justifyContent: "flex-start",
	alignItems: "center",
	position: "relative",
	textDecoration: "none",
	minHeight: 48,
	paddingTop: 6,
	paddingBottom: 6,
	boxSizing: "border-box",
	whiteSpace: "nowrap",
	"&:hover": {
		textDecoration: "none",
		backgroundColor: (e.vars || e).palette.action.hover,
		"@media (hover: none)": { backgroundColor: "transparent" }
	},
	[`&.${K_.selected}`]: {
		backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
		[`&.${K_.focusVisible}`]: { backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`) }
	},
	[`&.${K_.selected}:hover`]: {
		backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
		"@media (hover: none)": { backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity) }
	},
	[`&.${K_.focusVisible}`]: { backgroundColor: (e.vars || e).palette.action.focus },
	[`&.${K_.disabled}`]: { opacity: (e.vars || e).palette.action.disabledOpacity },
	[`& + .${Qh.root}`]: {
		marginTop: e.spacing(1),
		marginBottom: e.spacing(1)
	},
	[`& + .${Qh.inset}`]: { marginLeft: 52 },
	[`& .${Ug.root}`]: {
		marginTop: 0,
		marginBottom: 0
	},
	[`& .${Ug.inset}`]: { paddingLeft: 36 },
	[`& .${Hg.root}`]: { minWidth: 36 },
	variants: [
		{
			props: ({ ownerState: e }) => !e.disableGutters,
			style: {
				paddingLeft: 16,
				paddingRight: 16
			}
		},
		{
			props: ({ ownerState: e }) => e.divider,
			style: {
				borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
				backgroundClip: "padding-box"
			}
		},
		{
			props: ({ ownerState: e }) => !e.dense,
			style: { [e.breakpoints.up("sm")]: { minHeight: "auto" } }
		},
		{
			props: ({ ownerState: e }) => e.dense,
			style: {
				minHeight: 32,
				paddingTop: 4,
				paddingBottom: 4,
				...e.typography.body2,
				[`& .${Hg.root} svg`]: { fontSize: "1.25rem" }
			}
		}
	]
}))), X_ = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let n = os({
		props: e,
		name: "MuiMenuItem"
	}), { autoFocus: r = !1, component: i = "li", dense: a = !1, divider: o = !1, disableGutters: s = !1, focusVisibleClassName: c, role: l = "menuitem", tabIndex: u, className: d, ...f } = n, p = y_(), m = _.useContext(Lg), h = _.useMemo(() => ({
		dense: a || m.dense || !1,
		disableGutters: s
	}), [
		m.dense,
		a,
		s
	]), g = S_(), v = Qc(), y = g.suppressInitialFocusVisible, b = g.itemsFocusableWhenDisabled, x = _.useRef(null);
	Zc(() => {
		r && x.current && m_(x.current, p);
	}, [r]);
	let S = {
		...n,
		dense: h.dense,
		divider: o,
		disableGutters: s
	}, C = J_(n), { root: w, ...T } = C, E = Xg({
		id: v,
		ref: t,
		disabled: n.disabled,
		focusableWhenDisabled: b,
		selected: n.selected
	}), D = il(x, E.ref), O;
	return u === void 0 ? g.variant === "selectedMenu" ? O = E.tabIndex : (!n.disabled || b) && (O = -1) : O = u, /* @__PURE__ */ (0, K.jsx)(Lg.Provider, {
		value: h,
		children: /* @__PURE__ */ (0, K.jsx)(Y_, {
			ref: D,
			role: l,
			tabIndex: O,
			component: i,
			internalNativeButton: !1,
			focusableWhenDisabled: b,
			suppressFocusVisible: y,
			focusVisibleClassName: G(C.focusVisible, c),
			className: G(C.root, d),
			...f,
			ownerState: S,
			classes: T
		})
	});
});
//#endregion
//#region node_modules/@mui/material/NativeSelect/nativeSelectClasses.mjs
function Z_(e) {
	return q("MuiNativeSelect", e);
}
var Q_ = qr("MuiNativeSelect", [
	"root",
	"select",
	"multiple",
	"filled",
	"outlined",
	"standard",
	"disabled",
	"icon",
	"iconOpen",
	"iconFilled",
	"iconOutlined",
	"iconStandard",
	"nativeInput",
	"error"
]), $_ = (e) => {
	let { classes: t, variant: n, disabled: r, multiple: i, open: a, error: o } = e;
	return At({
		select: [
			"select",
			n,
			r && "disabled",
			i && "multiple",
			o && "error"
		],
		icon: [
			"icon",
			`icon${Pc(n)}`,
			a && "iconOpen",
			r && "disabled"
		]
	}, Z_, t);
}, ev = X("select", { name: "MuiNativeSelect" })(({ theme: e }) => ({
	MozAppearance: "none",
	WebkitAppearance: "none",
	userSelect: "none",
	borderRadius: 0,
	cursor: "pointer",
	"&:focus": { borderRadius: 0 },
	[`&.${Q_.disabled}`]: { cursor: "default" },
	"&[multiple]": { height: "auto" },
	"&:not([multiple]) option, &:not([multiple]) optgroup": { backgroundColor: (e.vars || e).palette.background.paper },
	variants: [
		{
			props: ({ ownerState: e }) => e.variant !== "filled" && e.variant !== "outlined",
			style: { "&&&": {
				paddingRight: 24,
				minWidth: 16
			} }
		},
		{
			props: { variant: "filled" },
			style: { "&&&": { paddingRight: 32 } }
		},
		{
			props: { variant: "outlined" },
			style: {
				borderRadius: (e.vars || e).shape.borderRadius,
				"&:focus": { borderRadius: (e.vars || e).shape.borderRadius },
				"&&&": { paddingRight: 32 }
			}
		}
	]
})), tv = X(ev, {
	name: "MuiNativeSelect",
	slot: "Select",
	shouldForwardProp: is,
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.select,
			t[n.variant],
			n.error && t.error,
			{ [`&.${Q_.multiple}`]: t.multiple }
		];
	}
})({}), nv = X("svg", { name: "MuiNativeSelect" })(({ theme: e }) => ({
	position: "absolute",
	right: 0,
	top: "calc(50% - .5em)",
	pointerEvents: "none",
	color: (e.vars || e).palette.action.active,
	[`&.${Q_.disabled}`]: { color: (e.vars || e).palette.action.disabled },
	variants: [
		{
			props: ({ ownerState: e }) => e.open,
			style: { transform: "rotate(180deg)" }
		},
		{
			props: { variant: "filled" },
			style: { right: 7 }
		},
		{
			props: { variant: "outlined" },
			style: { right: 7 }
		}
	]
})), rv = X(nv, {
	name: "MuiNativeSelect",
	slot: "Icon",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.icon,
			n.variant && t[`icon${Pc(n.variant)}`],
			n.open && t.iconOpen
		];
	}
})({}), iv = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let { className: n, disabled: r, error: i, IconComponent: a, inputRef: o, variant: s = "standard", ...c } = e, l = {
		...e,
		disabled: r,
		variant: s,
		error: i
	}, u = $_(l);
	return /* @__PURE__ */ (0, K.jsxs)(_.Fragment, { children: [/* @__PURE__ */ (0, K.jsx)(tv, {
		ownerState: l,
		className: G(u.select, n),
		disabled: r,
		ref: o || t,
		...c
	}), e.multiple ? null : /* @__PURE__ */ (0, K.jsx)(rv, {
		as: a,
		ownerState: l,
		className: u.icon
	})] });
}), av, ov = X("fieldset", {
	name: "MuiNotchedOutlined",
	shouldForwardProp: is
})({
	textAlign: "left",
	position: "absolute",
	bottom: 0,
	right: 0,
	top: -5,
	left: 0,
	margin: 0,
	padding: "0 8px",
	pointerEvents: "none",
	borderRadius: "inherit",
	borderStyle: "solid",
	borderWidth: 1,
	overflow: "hidden",
	minWidth: "0%"
}), sv = X("legend", {
	name: "MuiNotchedOutlined",
	shouldForwardProp: is
})(Z(({ theme: e }) => ({
	float: "unset",
	width: "auto",
	overflow: "hidden",
	variants: [
		{
			props: ({ ownerState: e }) => !e.withLabel,
			style: {
				padding: 0,
				lineHeight: "11px",
				transition: e.transitions.create("width", {
					duration: 150,
					easing: e.transitions.easing.easeOut
				})
			}
		},
		{
			props: ({ ownerState: e }) => e.withLabel,
			style: {
				display: "block",
				padding: 0,
				height: 11,
				fontSize: "0.75em",
				visibility: "hidden",
				maxWidth: .01,
				transition: e.transitions.create("max-width", {
					duration: 50,
					easing: e.transitions.easing.easeOut
				}),
				whiteSpace: "nowrap",
				"& > span": {
					paddingLeft: 5,
					paddingRight: 5,
					display: "inline-block",
					opacity: 0,
					visibility: "visible"
				}
			}
		},
		{
			props: ({ ownerState: e }) => e.withLabel && e.notched,
			style: {
				maxWidth: "100%",
				transition: e.transitions.create("max-width", {
					duration: 100,
					easing: e.transitions.easing.easeOut,
					delay: 50
				})
			}
		}
	]
})));
function cv(e) {
	let { children: t, classes: n, className: r, label: i, notched: a, ...o } = e, s = i != null && i !== "", c = {
		...e,
		notched: a,
		withLabel: s
	};
	return /* @__PURE__ */ (0, K.jsx)(ov, {
		"aria-hidden": !0,
		className: r,
		ownerState: c,
		...o,
		children: /* @__PURE__ */ (0, K.jsx)(sv, {
			ownerState: c,
			children: s ? /* @__PURE__ */ (0, K.jsx)("span", { children: i }) : av ||= /* @__PURE__ */ (0, K.jsx)("span", {
				className: "notranslate",
				"aria-hidden": !0,
				children: "​"
			})
		})
	});
}
//#endregion
//#region node_modules/@mui/material/OutlinedInput/OutlinedInput.mjs
var lv = (e) => {
	let { classes: t } = e, n = At({
		root: ["root"],
		notchedOutline: ["notchedOutline"],
		input: ["input"]
	}, vm, t);
	return {
		...t,
		...n
	};
}, uv = X(fm, {
	shouldForwardProp: (e) => is(e) || e === "classes",
	name: "MuiOutlinedInput",
	slot: "Root",
	overridesResolver: lm
})(Z(({ theme: e }) => {
	let t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
	return {
		position: "relative",
		borderRadius: (e.vars || e).shape.borderRadius,
		[`&:hover .${ym.notchedOutline}`]: { borderColor: (e.vars || e).palette.text.primary },
		"@media (hover: none)": { [`&:hover .${ym.notchedOutline}`]: { borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, .23) : t } },
		[`&.${ym.focused} .${ym.notchedOutline}`]: { borderWidth: 2 },
		variants: [
			...Object.entries(e.palette).filter(Wu()).map(([t]) => ({
				props: { color: t },
				style: { [`&.${ym.focused} .${ym.notchedOutline}`]: { borderColor: (e.vars || e).palette[t].main } }
			})),
			{
				props: {},
				style: {
					[`&.${ym.error} .${ym.notchedOutline}`]: { borderColor: (e.vars || e).palette.error.main },
					[`&.${ym.disabled} .${ym.notchedOutline}`]: { borderColor: (e.vars || e).palette.action.disabled }
				}
			},
			{
				props: ({ ownerState: e }) => e.startAdornment,
				style: { paddingLeft: 14 }
			},
			{
				props: ({ ownerState: e }) => e.endAdornment,
				style: { paddingRight: 14 }
			},
			{
				props: ({ ownerState: e }) => e.multiline,
				style: { padding: "16.5px 14px" }
			},
			{
				props: ({ ownerState: e, size: t }) => e.multiline && t === "small",
				style: { padding: "8.5px 14px" }
			}
		]
	};
})), dv = X(cv, {
	name: "MuiOutlinedInput",
	slot: "NotchedOutline"
})(Z(({ theme: e }) => {
	let t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
	return { borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, .23) : t };
})), fv = X(pm, {
	name: "MuiOutlinedInput",
	slot: "Input",
	overridesResolver: um
})(Z(({ theme: e }) => ({
	padding: "16.5px 14px",
	"&:-webkit-autofill": {
		...!e.vars && {
			WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
			WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
			caretColor: e.palette.mode === "light" ? null : "#fff"
		},
		borderRadius: "inherit",
		...e.vars && e.applyStyles("dark", {
			WebkitBoxShadow: "0 0 0 100px #266798 inset",
			WebkitTextFillColor: "#fff",
			caretColor: "#fff"
		})
	},
	variants: [
		{
			props: { size: "small" },
			style: { padding: "8.5px 14px" }
		},
		{
			props: ({ ownerState: e }) => e.multiline,
			style: { padding: 0 }
		},
		{
			props: ({ ownerState: e }) => e.startAdornment,
			style: { paddingLeft: 0 }
		},
		{
			props: ({ ownerState: e }) => e.endAdornment,
			style: { paddingRight: 0 }
		}
	]
}))), pv = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let n = os({
		props: e,
		name: "MuiOutlinedInput"
	}), { fullWidth: r = !1, inputComponent: i = "input", label: a, multiline: o = !1, notched: s, slots: c = {}, slotProps: l = {}, type: u = "text", ...d } = n, f = lv(n), [p, m] = em({
		props: n,
		states: [
			"color",
			"disabled",
			"error",
			"focused",
			"hiddenLabel",
			"size",
			"required"
		]
	}), h = {
		...n,
		color: p.color || "primary",
		disabled: p.disabled,
		error: p.error,
		focused: p.focused,
		formControl: m,
		fullWidth: r,
		hiddenLabel: p.hiddenLabel,
		multiline: o,
		size: p.size,
		type: u
	}, g = c.root ?? uv, v = c.input ?? fv, [y, b] = Wl("notchedOutline", {
		elementType: dv,
		className: f.notchedOutline,
		shouldForwardComponentProp: !0,
		ownerState: h,
		externalForwardedProps: {
			slots: c,
			slotProps: l
		},
		additionalProps: { label: a != null && a !== "" && p.required ? /* @__PURE__ */ (0, K.jsxs)(_.Fragment, { children: [
			a,
			" ",
			"*"
		] }) : a }
	});
	return /* @__PURE__ */ (0, K.jsx)(hm, {
		slots: {
			root: g,
			input: v
		},
		slotProps: l,
		renderSuffix: (e) => /* @__PURE__ */ (0, K.jsx)(y, {
			...b,
			notched: s === void 0 ? !!(e.startAdornment || e.filled || e.focused) : s
		}),
		fullWidth: r,
		inputComponent: i,
		multiline: o,
		ref: t,
		type: u,
		...d,
		classes: {
			...f,
			notchedOutline: null
		}
	});
});
pv.muiName = "Input";
//#endregion
//#region node_modules/@mui/material/Select/selectClasses.mjs
function mv(e) {
	return q("MuiSelect", e);
}
var hv = qr("MuiSelect", [
	"root",
	"select",
	"multiple",
	"filled",
	"outlined",
	"standard",
	"disabled",
	"focused",
	"icon",
	"iconOpen",
	"nativeInput",
	"error"
]), gv, _v = 2, vv = 400, yv = 200;
function bv(e, t) {
	if (!t) return !1;
	if (e.composedPath().includes(t) || e.target?.nodeType && t.contains(e.target)) return !0;
	let n = t.getBoundingClientRect();
	return n.width === 0 && n.height === 0 ? !1 : e.clientX >= n.left - _v && e.clientX <= n.right + _v && e.clientY >= n.top - _v && e.clientY <= n.bottom + _v;
}
var xv = X(ev, {
	name: "MuiSelect",
	slot: "Select",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			{ [`&.${hv.select}`]: t.select },
			{ [`&.${hv.select}`]: t[n.variant] },
			{ [`&.${hv.error}`]: t.error },
			{ [`&.${hv.multiple}`]: t.multiple }
		];
	}
})({ [`&.${hv.select}`]: {
	height: "auto",
	minHeight: "1.4375em",
	textOverflow: "ellipsis",
	whiteSpace: "nowrap",
	overflow: "hidden"
} }), Sv = X(nv, {
	name: "MuiSelect",
	slot: "Icon",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [t.icon, n.open && t.iconOpen];
	}
})({}), Cv = X("input", {
	shouldForwardProp: (e) => rs(e) && e !== "classes",
	name: "MuiSelect",
	slot: "NativeInput"
})({
	bottom: 0,
	left: 0,
	position: "absolute",
	opacity: 0,
	pointerEvents: "none",
	width: "100%",
	boxSizing: "border-box"
}), wv = (e) => {
	let { classes: t, variant: n, disabled: r, multiple: i, open: a, error: o } = e;
	return At({
		select: [
			"select",
			n,
			r && "disabled",
			i && "multiple",
			o && "error"
		],
		icon: [
			"icon",
			a && "iconOpen",
			r && "disabled"
		],
		nativeInput: ["nativeInput"]
	}, mv, t);
}, Tv = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let { "aria-describedby": n, "aria-label": r, autoFocus: i, autoWidth: a, children: o, className: s, defaultOpen: c, defaultValue: l, disabled: u, displayEmpty: d, error: f = !1, IconComponent: p, inputRef: m, labelId: h, MenuProps: g = {}, multiple: v, name: y, onBlur: b, onChange: x, onClose: S, onFocus: C, onKeyDown: w, onMouseDown: T, onOpen: E, open: D, readOnly: O, renderValue: k, required: A, SelectDisplayProps: j = {}, tabIndex: M, type: N, value: ee, variant: te = "standard", ...P } = e, [F, I] = el({
		controlled: ee,
		default: l,
		name: "Select"
	}), [L, ne] = el({
		controlled: D,
		default: c,
		name: "Select"
	}), re = _.useRef(null), R = _.useRef(null), z = _.useRef(null), ie = _.useRef(!1), ae = _.useRef(!1), B = _.useRef(null), oe = _.useRef(!1), se = _.useRef({
		allowSelectedMouseUp: !1,
		allowUnselectedMouseUp: !1
	}), V = Pl(), H = Pl(), [ce, le] = _.useState(null), { current: ue } = _.useRef(D != null), [de, fe] = _.useState(), [pe, me] = _.useState(null), he = il(t, m), U = _.useCallback((e) => {
		R.current = e, e && le(e);
	}, []), ge = ce?.parentNode;
	_.useImperativeHandle(he, () => ({
		focus: () => {
			R.current.focus();
		},
		node: re.current,
		value: F
	}), [F]);
	let W = ce !== null && L;
	Zc(() => {
		ie.current = W;
	}, [W]);
	let _e = _.useCallback(() => {
		V.clear(), H.clear();
	}, [V, H]), ve = _.useCallback(() => {
		_e(), oe.current = !1, se.current = {
			allowSelectedMouseUp: !1,
			allowUnselectedMouseUp: !1
		};
	}, [_e]), ye = _.useCallback(() => {
		B.current &&= (B.current(), null);
	}, []);
	_.useEffect(() => {
		W || (ve(), ye());
	}, [
		W,
		ve,
		ye
	]), _.useEffect(() => () => {
		ve(), ye();
	}, [ve, ye]), _.useEffect(() => {
		if (!W || !ge || a || typeof ResizeObserver > "u") return;
		let e = new ResizeObserver(() => {
			fe(ge.clientWidth);
		});
		return e.observe(ge), () => {
			e.disconnect();
		};
	}, [
		W,
		ge,
		a
	]), _.useEffect(() => {
		c && L && ce && !ue && (fe(a ? null : ge.clientWidth), R.current.focus());
	}, [ce, a]), _.useEffect(() => {
		i && R.current.focus();
	}, [i]), _.useEffect(() => {
		if (!h) return;
		let e = qc(R.current).getElementById(h);
		if (e) {
			let t = () => {
				getSelection().isCollapsed && R.current.focus();
			};
			return e.addEventListener("click", t), () => {
				e.removeEventListener("click", t);
			};
		}
	}, [h]);
	let be = nl((e, t) => {
		e || (ve(), ye()), e ? (me(h_(t)), E && E(t)) : (me(null), S && S(t)), ue || (ie.current = e, fe(a ? null : ge.clientWidth), ne(e));
	}), xe = () => {
		ve(), ae.current ? H.start(yv, () => {
			se.current.allowUnselectedMouseUp = !0, V.start(yv, () => {
				se.current.allowSelectedMouseUp = !0;
			});
		}) : V.start(vv, () => {
			se.current.allowSelectedMouseUp = !0, se.current.allowUnselectedMouseUp = !0;
		});
	}, Se = (e) => {
		if (T?.(e), e.button !== 0) return;
		e.preventDefault(), R.current.focus();
		let t = qc(e.currentTarget);
		xe(), ye();
		let n = (e) => {
			B.current = null, R.current && (bv(e, R.current) || bv(e, z.current) || !ie.current && ue || be(!1, e));
		};
		t.addEventListener("mouseup", n, {
			capture: !0,
			once: !0
		}), B.current = () => {
			t.removeEventListener("mouseup", n, !0);
		}, be(!0, e);
	}, Ce = (e) => {
		be(!1, e);
	}, we = _.Children.toArray(o), Te = (e) => {
		let t = we.find((t) => t.props.value === e.target.value);
		t !== void 0 && (I(t.props.value), x && x(e, t));
	}, Ee = (e) => (t) => {
		oe.current = !1;
		let n;
		if (t.currentTarget.hasAttribute("tabindex")) {
			if (v) {
				n = Array.isArray(F) ? F.slice() : [];
				let t = F.indexOf(e.props.value);
				t === -1 ? n.push(e.props.value) : n.splice(t, 1);
			} else n = e.props.value;
			if (e.props.onClick && e.props.onClick(t), F !== n && (I(n), x)) {
				let r = t.nativeEvent || t, i = new r.constructor(r.type, r);
				Object.defineProperty(i, "target", {
					writable: !0,
					value: {
						value: n,
						name: y
					}
				}), x(i, e);
			}
			v || be(!1, t);
		}
	}, De = (e, t) => (n) => {
		if (e.props.onMouseUp?.(n), oe.current) {
			oe.current = !1;
			return;
		}
		let r = !se.current.allowSelectedMouseUp && t, i = !se.current.allowUnselectedMouseUp && !t;
		r || i || n.currentTarget.click();
	}, Oe = (e) => {
		O || ([
			" ",
			"ArrowUp",
			"ArrowDown",
			"Enter"
		].includes(e.key) && (e.preventDefault(), be(!0, e)), w?.(e));
	}, ke = (e) => {
		!W && b && (Object.defineProperty(e, "target", {
			writable: !0,
			value: {
				value: F,
				name: y
			}
		}), b(e));
	};
	delete P["aria-invalid"];
	let Ae, je, Me = [], Ne = !1, Pe = !1;
	(nm({ value: F }) || d) && (k ? Ae = k(F) : Ne = !0);
	let Fe = we.map((e) => {
		if (!/* @__PURE__ */ _.isValidElement(e)) return null;
		let t;
		if (v) {
			if (!Array.isArray(F)) throw Error(Bt(2));
			t = F.some((t) => __(t, e.props.value)), t && Ne && Me.push(e.props.children);
		} else t = __(F, e.props.value), t && Ne && (je = e.props.children);
		return t && (Pe = !0), /* @__PURE__ */ _.cloneElement(e, {
			"aria-selected": t ? "true" : "false",
			onMouseDown: (t) => {
				oe.current = !0, e.props.onMouseDown?.(t);
			},
			onPointerDown: (t) => {
				oe.current = !0, e.props.onPointerDown?.(t);
			},
			onClick: Ee(e),
			onMouseUp: De(e, t),
			onKeyUp: (t) => {
				t.key === " " && t.preventDefault(), e.props.onKeyUp && e.props.onKeyUp(t);
			},
			role: "option",
			selected: t,
			value: void 0,
			"data-value": e.props.value
		});
	});
	Zc(() => {
		ae.current = Pe;
	}, [Pe]), Ne && (Ae = v ? Me.length === 0 ? null : Me.reduce((e, t, n) => (e.push(t), n < Me.length - 1 && e.push(", "), e), []) : je);
	let Ie = de;
	!a && ue && ce && (Ie = ge.clientWidth);
	let Le;
	Le = M === void 0 ? u ? null : 0 : M;
	let Re = j.id || (y ? `mui-component-select-${y}` : void 0), ze = {
		...e,
		variant: te,
		value: F,
		open: W,
		error: f
	}, Be = wv(ze), Ve = typeof g.slotProps?.paper == "function" ? g.slotProps.paper(ze) : g.slotProps?.paper, He = il(Ve?.ref, z), Ue = typeof g.slotProps?.list == "function" ? g.slotProps.list(ze) : g.slotProps?.list, We = Hi(), Ge = Hi();
	return /* @__PURE__ */ (0, K.jsxs)(_.Fragment, { children: [
		/* @__PURE__ */ (0, K.jsx)(xv, {
			as: "div",
			ref: U,
			tabIndex: Le,
			role: "combobox",
			"aria-controls": W ? We : void 0,
			"aria-disabled": u ? "true" : void 0,
			"aria-expanded": W ? "true" : "false",
			"aria-haspopup": "listbox",
			"aria-label": r,
			"aria-labelledby": h,
			"aria-describedby": n,
			"aria-required": A ? "true" : void 0,
			"aria-invalid": f ? "true" : void 0,
			onKeyDown: Oe,
			onMouseDown: u || O ? null : Se,
			onBlur: ke,
			onFocus: C,
			...j,
			ownerState: ze,
			className: G(j.className, Be.select, s),
			id: Re,
			children: g_(Ae) ? gv ||= /* @__PURE__ */ (0, K.jsx)("span", {
				className: "notranslate",
				"aria-hidden": !0,
				children: "​"
			}) : Ae
		}),
		/* @__PURE__ */ (0, K.jsx)(Cv, {
			"aria-invalid": f,
			value: Array.isArray(F) ? F.join(",") : F,
			name: y,
			ref: re,
			"aria-hidden": !0,
			onChange: Te,
			tabIndex: -1,
			disabled: u,
			className: Be.nativeInput,
			autoFocus: i,
			required: A,
			...P,
			id: P.id ?? Ge,
			ownerState: ze
		}),
		/* @__PURE__ */ (0, K.jsx)(Sv, {
			as: p,
			className: Be.icon,
			ownerState: ze
		}),
		/* @__PURE__ */ (0, K.jsx)(b_, {
			value: pe,
			children: /* @__PURE__ */ (0, K.jsx)(W_, {
				id: `menu-${y || ""}`,
				anchorEl: ge,
				open: W,
				onClose: Ce,
				anchorOrigin: {
					vertical: "bottom",
					horizontal: "center"
				},
				transformOrigin: {
					vertical: "top",
					horizontal: "center"
				},
				...g,
				slotProps: {
					...g.slotProps,
					list: {
						"aria-labelledby": h,
						role: "listbox",
						"aria-multiselectable": v ? "true" : void 0,
						disableListWrap: !0,
						id: We,
						...Ue
					},
					paper: {
						...Ve,
						ref: He,
						style: {
							minWidth: Ie,
							...Ve?.style
						}
					}
				},
				children: Fe
			})
		})
	] });
}), Ev = (e) => {
	let { classes: t } = e, n = At({ root: ["root"] }, mv, t);
	return {
		...t,
		...n
	};
}, Dv = {
	name: "MuiSelect",
	slot: "Root",
	shouldForwardProp: (e) => is(e) && e !== "variant"
}, Ov = X(Ng, Dv)(""), kv = X(pv, Dv)(""), Av = X(og, Dv)(""), jv = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let n = os({
		name: "MuiSelect",
		props: e
	}), { autoWidth: r = !1, children: i, classes: a = {}, className: o, defaultOpen: s = !1, displayEmpty: c = !1, IconComponent: l = Sm, id: u, input: d, inputProps: f, label: p, labelId: m, MenuProps: h, multiple: g = !1, native: v = !1, onClose: y, onOpen: b, open: x, renderValue: S, SelectDisplayProps: C, variant: w = "outlined", ...T } = n, E = v ? iv : Tv, [D] = em({
		props: n,
		states: ["variant", "error"]
	}), O = D.variant || w, k = {
		...n,
		variant: O,
		classes: a
	}, A = Ev(k), { root: j, ...M } = A, N = d || {
		standard: /* @__PURE__ */ (0, K.jsx)(Ov, { ownerState: k }),
		outlined: /* @__PURE__ */ (0, K.jsx)(kv, {
			label: p,
			ownerState: k
		}),
		filled: /* @__PURE__ */ (0, K.jsx)(Av, { ownerState: k })
	}[O], ee = il(t, wp(N));
	return /* @__PURE__ */ (0, K.jsx)(_.Fragment, { children: /* @__PURE__ */ _.cloneElement(N, {
		inputComponent: E,
		inputProps: {
			children: i,
			error: D.error,
			IconComponent: l,
			variant: O,
			type: void 0,
			multiple: g,
			...v ? { id: u } : {
				autoWidth: r,
				defaultOpen: s,
				displayEmpty: c,
				labelId: m,
				MenuProps: h,
				onClose: y,
				onOpen: b,
				open: x,
				renderValue: S,
				SelectDisplayProps: {
					id: u,
					...C
				}
			},
			...f,
			classes: f ? qt(M, f.classes) : M,
			...d ? d.props.inputProps : {}
		},
		...(g && v || c) && O === "outlined" ? { notched: !0 } : {},
		ref: ee,
		className: G(N.props.className, o, A.root),
		...!d && { variant: O },
		...T
	}) });
});
jv.muiName = "Select";
//#endregion
//#region node_modules/@mui/material/Stack/Stack.mjs
var $ = Ha({
	createStyledComponent: X("div", {
		name: "MuiStack",
		slot: "Root"
	}),
	useThemeProps: (e) => os({
		props: e,
		name: "MuiStack"
	})
});
//#endregion
//#region node_modules/@mui/material/TextField/textFieldClasses.mjs
function Mv(e) {
	return q("MuiTextField", e);
}
qr("MuiTextField", ["root"]);
//#endregion
//#region node_modules/@mui/material/TextField/TextField.mjs
var Nv = {
	standard: Ng,
	filled: og,
	outlined: pv
}, Pv = (e) => {
	let { classes: t } = e;
	return At({ root: ["root"] }, Mv, t);
}, Fv = X(ug, {
	name: "MuiTextField",
	slot: "Root"
})({}), Iv = /* @__PURE__ */ _.forwardRef(function(e, t) {
	let n = os({
		props: e,
		name: "MuiTextField"
	}), { autoComplete: r, autoFocus: i = !1, children: a, className: o, color: s = "primary", defaultValue: c, disabled: l = !1, error: u = !1, fullWidth: d = !1, helperText: f, id: p, inputRef: m, label: h, maxRows: g, minRows: _, multiline: v = !1, name: y, onBlur: b, onChange: x, onFocus: S, placeholder: C, required: w = !1, rows: T, select: E = !1, slots: D = {}, slotProps: O = {}, type: k, value: A, variant: j = "outlined", ...M } = n, N = {
		...n,
		autoFocus: i,
		color: s,
		disabled: l,
		error: u,
		fullWidth: d,
		multiline: v,
		required: w,
		select: E,
		variant: j
	}, ee = Pv(N), te = Hi(p), P = f && te ? `${te}-helper-text` : void 0, F = h && te ? `${te}-label` : void 0, I = Nv[j], L = {
		slots: D,
		slotProps: O
	}, [ne, re] = Wl("select", {
		elementType: jv,
		externalForwardedProps: L,
		ownerState: N
	}), R = E && re.native, z = {}, ie = L.slotProps.inputLabel;
	j === "outlined" && (ie && ie.shrink !== void 0 && (z.notched = ie.shrink), z.label = h), E && (R || (z.id = void 0), z["aria-describedby"] = void 0);
	let [ae, B] = Wl("root", {
		elementType: Fv,
		shouldForwardComponentProp: !0,
		externalForwardedProps: {
			...L,
			...M
		},
		ownerState: N,
		className: G(ee.root, o),
		ref: t,
		additionalProps: {
			disabled: l,
			error: u,
			fullWidth: d,
			required: w,
			color: s,
			variant: j
		}
	}), [oe, se] = Wl("input", {
		elementType: I,
		externalForwardedProps: L,
		additionalProps: z,
		ownerState: N
	}), [V, H] = Wl("inputLabel", {
		elementType: Ig,
		externalForwardedProps: L,
		ownerState: N
	}), [ce, le] = Wl("htmlInput", {
		elementType: "input",
		externalForwardedProps: L,
		ownerState: N
	}), [ue, de] = Wl("formHelperText", {
		elementType: gg,
		externalForwardedProps: L,
		ownerState: N
	}), fe = /* @__PURE__ */ (0, K.jsx)(oe, {
		"aria-describedby": P,
		autoComplete: r,
		autoFocus: i,
		defaultValue: c,
		fullWidth: d,
		multiline: v,
		name: y,
		rows: T,
		maxRows: g,
		minRows: _,
		type: k,
		value: A,
		id: te,
		inputRef: m,
		onBlur: b,
		onChange: x,
		onFocus: S,
		placeholder: C,
		inputProps: le,
		slots: { input: D.htmlInput ? ce : void 0 },
		...se
	});
	return /* @__PURE__ */ (0, K.jsxs)(ae, {
		...B,
		children: [
			h != null && h !== "" && /* @__PURE__ */ (0, K.jsx)(V, {
				htmlFor: E && !R ? void 0 : te,
				id: F,
				...E && !R && { component: "div" },
				...H,
				children: h
			}),
			E ? /* @__PURE__ */ (0, K.jsx)(ne, {
				"aria-describedby": P,
				id: te,
				labelId: F,
				value: A,
				input: fe,
				...re,
				children: a
			}) : fe,
			f && /* @__PURE__ */ (0, K.jsx)(ue, {
				id: P,
				...de,
				children: f
			})
		]
	});
});
//#endregion
//#region injectables/src/charbuilder/BasicsSection.jsx
function Lv({ name: e, label: t, parse: n, ...r }) {
	return /* @__PURE__ */ (0, K.jsx)(Nc, {
		name: e,
		parse: n,
		children: ({ input: e }) => /* @__PURE__ */ (0, K.jsx)(Iv, {
			...e,
			label: t,
			fullWidth: !0,
			size: "small",
			variant: "outlined",
			...r
		})
	});
}
function Rv({ name: e, label: t, disabled: n, loading: r, options: i, overlayContainer: a }) {
	return /* @__PURE__ */ (0, K.jsx)(Nc, {
		name: e,
		children: ({ input: e }) => /* @__PURE__ */ (0, K.jsx)(zm, {
			disablePortal: !a,
			slotProps: { popper: { container: a || void 0 } },
			disabled: n,
			loading: r,
			options: i,
			value: e.value || null,
			onChange: (t, n) => {
				e.onChange(n || "");
			},
			isOptionEqualToValue: (e, t) => e === t,
			noOptionsText: r ? "Loading backgrounds..." : "No backgrounds found",
			renderInput: (e) => /* @__PURE__ */ (0, K.jsx)(Iv, {
				...e,
				label: t,
				size: "small",
				variant: "outlined",
				placeholder: "Start typing a background"
			})
		})
	});
}
function zv({ backgrounds: e, backgroundsLoading: t, onNext: n, overlayContainer: r = null, showNavigation: i = !0 }) {
	let a = (0, _.useMemo)(() => [...new Set(e.map((e) => e.name))].sort((e, t) => e.localeCompare(t)), [e]);
	return /* @__PURE__ */ (0, K.jsxs)(eu, {
		variant: "outlined",
		sx: {
			p: 2,
			maxWidth: 640
		},
		children: [
			/* @__PURE__ */ (0, K.jsx)(md, {
				variant: "h6",
				gutterBottom: !0,
				children: "Character Basics"
			}),
			/* @__PURE__ */ (0, K.jsxs)($, {
				spacing: 2,
				children: [
					/* @__PURE__ */ (0, K.jsx)(Lv, {
						name: "charName",
						label: "Character Name",
						placeholder: "e.g. Althaea Stormleaf"
					}),
					/* @__PURE__ */ (0, K.jsx)(Lv, {
						name: "playerName",
						label: "Player Name",
						placeholder: "e.g. Jordan"
					}),
					/* @__PURE__ */ (0, K.jsx)(Rv, {
						name: "background",
						label: "Background",
						disabled: t,
						loading: t,
						options: a,
						overlayContainer: r
					})
				]
			}),
			i && /* @__PURE__ */ (0, K.jsx)($, {
				direction: "row",
				justifyContent: "flex-end",
				sx: { mt: 2 },
				children: /* @__PURE__ */ (0, K.jsx)(oh, {
					type: "button",
					variant: "contained",
					onClick: n,
					children: "Next"
				})
			})
		]
	});
}
//#endregion
//#region injectables/src/charbuilder/RaceSection.jsx
function Bv(e) {
	return e ? window.Parser?.sourceJsonToAbv ? window.Parser.sourceJsonToAbv(e) : e : "Unknown";
}
function Vv(e) {
	if (!e) return "";
	let t = window.Renderer?.race;
	if (t?.getCompactRenderedString) return t.getCompactRenderedString(e, { isStatic: !0 });
	let n = e.entries ? JSON.stringify(e.entries).slice(0, 1400) : "No renderer available.";
	return `<div><h4>${e.name || "Race"}</h4><p>${n}</p></div>`;
}
function Hv({ allRaces: e, racesLoading: t, raceValue: n, onBack: r, onNext: i, showNavigation: a = !0 }) {
	let o = yc(), { values: s } = bc({ subscription: { values: !0 } }), [c, l] = (0, _.useState)(""), [u, d] = (0, _.useState)("all"), [f, p] = (0, _.useState)(""), [m, h] = (0, _.useState)(!1), g = (0, _.useMemo)(() => {
		let t = /* @__PURE__ */ new Map();
		return e.forEach((e) => {
			let n = e._baseName || e.name;
			n && (t.has(n) || t.set(n, {
				name: n,
				source: e.source,
				baseRace: e,
				subraces: []
			}), e._subraceName && t.get(n).subraces.push(e));
		}), [...t.values()].sort((e, t) => e.name.localeCompare(t.name));
	}, [e]), v = (0, _.useMemo)(() => ["all", ...new Set(g.map((e) => e.source).filter(Boolean))], [g]), y = (0, _.useMemo)(() => {
		let e = c.trim().toLowerCase();
		return g.filter((t) => u !== "all" && t.source !== u ? !1 : e ? t.name.toLowerCase().includes(e) : !0);
	}, [
		g,
		c,
		u
	]), b = (0, _.useMemo)(() => n ? e.filter((e) => e._baseName === n && e._subraceName) : [], [e, n]), x = g.find((e) => e.name === s.race) || null, S = g.find((e) => e.name === f) || x, C = (0, _.useMemo)(() => {
		if (!S) return null;
		if (s.subrace) {
			let e = S.subraces.find((e) => e._subraceName === s.subrace);
			if (e) return e;
		}
		return S.baseRace;
	}, [S, s.subrace]), w = (0, _.useMemo)(() => Vv(C), [C]), T = (e) => {
		o.change("race", e), o.change("subrace", ""), p(e);
	}, E = (e) => {
		o.change("subrace", e);
	};
	return /* @__PURE__ */ (0, K.jsxs)(eu, {
		variant: "outlined",
		sx: { p: 2 },
		children: [
			/* @__PURE__ */ (0, K.jsx)(md, {
				variant: "h6",
				gutterBottom: !0,
				children: "Race Selection"
			}),
			/* @__PURE__ */ (0, K.jsx)(md, {
				variant: "body2",
				color: "text.secondary",
				sx: { mb: 2 },
				children: t ? "Loading race cards..." : `${y.length} race cards`
			}),
			/* @__PURE__ */ (0, K.jsxs)(Cg, {
				container: !0,
				spacing: 2,
				children: [/* @__PURE__ */ (0, K.jsx)(Cg, {
					size: {
						xs: 12,
						md: 6
					},
					children: /* @__PURE__ */ (0, K.jsxs)($, {
						spacing: 2,
						sx: { minWidth: 0 },
						children: [
							/* @__PURE__ */ (0, K.jsx)(Iv, {
								label: "Search races",
								value: c,
								onChange: (e) => {
									l(e.target.value);
								},
								size: "small",
								fullWidth: !0
							}),
							/* @__PURE__ */ (0, K.jsxs)($, {
								spacing: 1,
								children: [/* @__PURE__ */ (0, K.jsx)(oh, {
									type: "button",
									variant: "outlined",
									size: "small",
									onClick: () => {
										h(!m);
									},
									sx: { alignSelf: "flex-start" },
									children: m ? "Hide Filters" : "Show Filters"
								}), m && /* @__PURE__ */ (0, K.jsx)(Jm, {
									sx: {
										display: "flex",
										flexWrap: "wrap",
										gap: 1,
										maxWidth: "100%",
										overflow: "hidden"
									},
									children: v.map((e) => /* @__PURE__ */ (0, K.jsx)(qp, {
										label: e === "all" ? "All Sources" : Bv(e),
										color: u === e ? "primary" : "default",
										variant: u === e ? "filled" : "outlined",
										onClick: () => {
											d(e);
										}
									}, e))
								})]
							}),
							/* @__PURE__ */ (0, K.jsxs)($, {
								spacing: 1,
								sx: {
									height: "clamp(300px, 50vh, 460px)",
									overflowY: "auto",
									overflowX: "hidden",
									pr: .5,
									scrollbarGutter: "stable",
									overscrollBehavior: "contain",
									"& > *": { flexShrink: 0 }
								},
								children: [
									t && /* @__PURE__ */ (0, K.jsx)(md, {
										variant: "body2",
										color: "text.secondary",
										children: "Loading race data..."
									}),
									y.map((e) => {
										let t = s.race === e.name;
										return /* @__PURE__ */ (0, K.jsx)(uh, {
											variant: "outlined",
											sx: {
												flexShrink: 0,
												borderColor: t ? "primary.main" : "divider",
												backgroundColor: t ? "action.selected" : "background.paper"
											},
											children: /* @__PURE__ */ (0, K.jsx)(gh, {
												onClick: () => {
													T(e.name);
												},
												children: /* @__PURE__ */ (0, K.jsxs)(bh, {
													sx: { pb: "8px !important" },
													children: [/* @__PURE__ */ (0, K.jsxs)($, {
														direction: "row",
														justifyContent: "space-between",
														alignItems: "center",
														children: [/* @__PURE__ */ (0, K.jsx)(md, {
															variant: "subtitle1",
															children: e.name
														}), /* @__PURE__ */ (0, K.jsx)(qp, {
															size: "small",
															label: Bv(e.source)
														})]
													}), /* @__PURE__ */ (0, K.jsxs)(md, {
														variant: "body2",
														color: "text.secondary",
														children: ["Subraces: ", e.subraces.length]
													})]
												})
											})
										}, e.name);
									}),
									!t && y.length === 0 && /* @__PURE__ */ (0, K.jsx)(md, {
										variant: "body2",
										color: "text.secondary",
										children: "No races match your filters."
									})
								]
							}),
							b.length > 0 && /* @__PURE__ */ (0, K.jsxs)(K.Fragment, { children: [/* @__PURE__ */ (0, K.jsx)(ng, {}), /* @__PURE__ */ (0, K.jsx)($, {
								direction: "row",
								spacing: 1,
								useFlexGap: !0,
								flexWrap: "wrap",
								children: b.map((e) => {
									let t = s.subrace === e._subraceName;
									return /* @__PURE__ */ (0, K.jsx)(qp, {
										label: e._subraceName,
										color: t ? "primary" : "default",
										variant: t ? "filled" : "outlined",
										onClick: () => {
											E(e._subraceName);
										}
									}, e._subraceName);
								})
							})] })
						]
					})
				}), /* @__PURE__ */ (0, K.jsx)(Cg, {
					size: {
						xs: 12,
						md: 6
					},
					children: /* @__PURE__ */ (0, K.jsx)(eu, {
						variant: "outlined",
						sx: {
							p: 1.5,
							minHeight: 420,
							maxHeight: 620,
							overflow: "auto",
							lineHeight: 1.45,
							"& a, & a:visited": {
								color: "primary.main",
								textDecorationColor: "currentColor"
							},
							"& a:hover": { textDecorationThickness: "2px" },
							"& .ve-muted": { color: "text.secondary" }
						},
						children: C ? /* @__PURE__ */ (0, K.jsx)("div", { dangerouslySetInnerHTML: { __html: w } }) : /* @__PURE__ */ (0, K.jsx)(md, {
							variant: "body2",
							color: "text.secondary",
							children: "Pick a race card to preview detailed content."
						})
					})
				})]
			}),
			a && /* @__PURE__ */ (0, K.jsxs)($, {
				direction: "row",
				justifyContent: "space-between",
				sx: { mt: 2 },
				children: [/* @__PURE__ */ (0, K.jsx)(oh, {
					type: "button",
					variant: "outlined",
					onClick: r,
					children: "Back"
				}), /* @__PURE__ */ (0, K.jsx)(oh, {
					type: "button",
					variant: "contained",
					onClick: i,
					children: "Next"
				})]
			})
		]
	});
}
//#endregion
//#region node_modules/@mui/icons-material/Add.mjs
var Uv = Bc(/* @__PURE__ */ (0, K.jsx)("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" }), "Add"), Wv = Bc(/* @__PURE__ */ (0, K.jsx)("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z" }), "Delete"), Gv = Bc(/* @__PURE__ */ (0, K.jsx)("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" }), "ExpandMore"), Kv = () => ({
	className: "",
	level: 1
});
function qv({ name: e, source: t }) {
	return `${e || ""}__${t || ""}`;
}
function Jv(e) {
	return e ? window.Parser?.sourceJsonToAbv ? window.Parser.sourceJsonToAbv(e) : e : "Unknown";
}
function Yv(e) {
	let t = [];
	return e?.hd?.faces && t.push(`Hit Die: d${e.hd.faces}`), e?.casterProgression && t.push(`Caster: ${e.casterProgression}`), t.join(" \\u2022 ") || "No summary available";
}
function Xv(e) {
	if (!e) return "";
	let t = window.Renderer?.class;
	if (t?.getCompactRenderedString) return t.getCompactRenderedString(e, { isStatic: !0 });
	let n = e.entries ? JSON.stringify(e.entries).slice(0, 1400) : "No renderer available.";
	return `<div><h4>${e.name || "Class"}</h4><p>${n}</p></div>`;
}
function Zv({ value: e, min: t, max: n, fallback: r }) {
	let i = parseInt(e, 10);
	return Number.isNaN(i) ? r : i < t ? t : i > n ? n : i;
}
function Qv({ value: e, onChange: t, maxLevel: n, menuProps: r, minWidth: i = 120, label: a = "Level" }) {
	let o = _.useRef(null), [s, c] = _.useState(null), l = (0, _.useMemo)(() => ({
		...r || {},
		anchorEl: s,
		anchorOrigin: {
			vertical: "bottom",
			horizontal: "left"
		},
		transformOrigin: {
			vertical: "top",
			horizontal: "left"
		}
	}), [s, r]);
	return /* @__PURE__ */ (0, K.jsxs)(ug, {
		ref: o,
		size: "small",
		sx: { minWidth: i },
		children: [/* @__PURE__ */ (0, K.jsx)(Ig, { children: a }), /* @__PURE__ */ (0, K.jsx)(jv, {
			value: e,
			label: a,
			MenuProps: l,
			onOpen: () => {
				c(o.current?.querySelector("[role='combobox']") || o.current || null);
			},
			onClose: () => {
				c(null);
			},
			onChange: (e) => {
				t(e.target.value);
			},
			children: Array.from({ length: n }, (e, t) => t + 1).map((e) => /* @__PURE__ */ (0, K.jsxs)(X_, {
				value: e,
				children: ["Level ", e]
			}, e))
		})]
	});
}
function $v({ detailHtml: e, hasClass: t }) {
	return /* @__PURE__ */ (0, K.jsx)(eu, {
		variant: "outlined",
		sx: {
			p: 1.5,
			minHeight: 420,
			maxHeight: 620,
			overflow: "auto",
			lineHeight: 1.45,
			"& a, & a:visited": {
				color: "primary.main",
				textDecorationColor: "currentColor"
			},
			"& a:hover": { textDecorationThickness: "2px" },
			"& .ve-muted": { color: "text.secondary" }
		},
		children: t ? /* @__PURE__ */ (0, K.jsx)("div", { dangerouslySetInnerHTML: { __html: e } }) : /* @__PURE__ */ (0, K.jsx)(md, {
			variant: "body2",
			color: "text.secondary",
			children: "Pick a class card to preview detailed content."
		})
	});
}
function ey({ allClasses: e, classesLoading: t, overlayContainer: n = null, onBack: r, onNext: i, showNavigation: a = !0 }) {
	let o = yc(), { values: s } = bc({ subscription: { values: !0 } }), [c, l] = _.useState(""), [u, d] = _.useState("all"), [f, p] = _.useState(""), [m, h] = _.useState(1), [g, v] = _.useState(""), [y, b] = _.useState(!1), x = (0, _.useMemo)(() => {
		if (!a) return { disablePortal: !0 };
	}, [a]), S = s.classLevels ?? [], C = S.reduce((e, t) => e + Zv({
		value: t.level,
		min: 1,
		max: 20,
		fallback: 1
	}), 0), w = (0, _.useMemo)(() => {
		let e = /* @__PURE__ */ new Map();
		return S.forEach((t) => {
			if (t.className) {
				let n = qv({
					name: t.className,
					source: t.classSource
				});
				e.set(n, t);
			}
		}), e;
	}, [S]), T = (0, _.useMemo)(() => ["all", ...new Set(e.map((e) => e.source).filter(Boolean))], [e]), E = (0, _.useMemo)(() => {
		let t = c.trim().toLowerCase();
		return e.filter((e) => u !== "all" && e.source !== u ? !1 : t ? e.name?.toLowerCase().includes(t) : !0).sort((e, t) => (e.name || "").localeCompare(t.name || ""));
	}, [
		e,
		c,
		u
	]), D = (e) => {
		o.change("classLevels", e);
	}, O = (e) => {
		if (!e?.name) return;
		let t = qv({
			name: e.name,
			source: e.source
		});
		if (w.has(t)) {
			D(S.filter((e) => qv({
				name: e.className,
				source: e.classSource
			}) !== t));
			return;
		}
		C >= 20 || D([...S, {
			className: e.name,
			classSource: e.source || "",
			level: 1
		}]);
	}, k = (e) => {
		D(S.filter((t) => qv({
			name: t.className,
			source: t.classSource
		}) !== e));
	}, A = ({ classKey: e, levelRaw: t }) => {
		let n = Zv({
			value: (S.find((t) => qv({
				name: t.className,
				source: t.classSource
			}) === e) ?? Kv()).level,
			min: 1,
			max: 20,
			fallback: 1
		}), r = C - n, i = Zv({
			value: t,
			min: 1,
			max: Math.max(1, 20 - r),
			fallback: n
		});
		D(S.map((t) => qv({
			name: t.className,
			source: t.classSource
		}) === e ? {
			...t,
			level: i
		} : t));
	}, j = (0, _.useMemo)(() => {
		let t = e.find((e) => qv({
			name: e.name,
			source: e.source
		}) === f);
		if (t) return t;
		let n = S[0];
		if (!n?.className) return null;
		let r = qv({
			name: n.className,
			source: n.classSource
		});
		return e.find((e) => qv({
			name: e.name,
			source: e.source
		}) === r) || null;
	}, [
		e,
		f,
		S
	]), M = (0, _.useMemo)(() => Xv(j), [j]), N = (0, _.useMemo)(() => {
		if (!j?.name) return 1;
		let e = qv({
			name: j.name,
			source: j.source
		}), t = S.find((t) => qv({
			name: t.className,
			source: t.classSource
		}) === e), n = C - (t ? Zv({
			value: t.level,
			min: 1,
			max: 20,
			fallback: 1
		}) : 0);
		return Math.max(1, 20 - n);
	}, [
		j,
		S,
		C
	]), ee = () => {
		if (!j?.name) return;
		let e = qv({
			name: j.name,
			source: j.source
		}), t = Zv({
			value: m,
			min: 1,
			max: N,
			fallback: 1
		});
		w.has(e) ? A({
			classKey: e,
			levelRaw: t
		}) : D([...S, {
			className: j.name,
			classSource: j.source || "",
			level: t
		}]), v(e);
	}, te = j ? w.has(qv({
		name: j.name,
		source: j.source
	})) : !1;
	return /* @__PURE__ */ (0, K.jsxs)(eu, {
		variant: "outlined",
		sx: { p: 2 },
		children: [
			/* @__PURE__ */ (0, K.jsx)(md, {
				variant: "h6",
				gutterBottom: !0,
				children: "Classes and Levels"
			}),
			/* @__PURE__ */ (0, K.jsxs)(md, {
				variant: "body2",
				color: "text.secondary",
				sx: { mb: 2 },
				children: [
					"Total class levels: ",
					C,
					" / 20"
				]
			}),
			/* @__PURE__ */ (0, K.jsx)(md, {
				variant: "body2",
				color: "text.secondary",
				sx: { mb: 2 },
				children: t ? "Loading class cards..." : `${E.length} class cards`
			}),
			/* @__PURE__ */ (0, K.jsxs)(Cg, {
				container: !0,
				spacing: 2,
				children: [/* @__PURE__ */ (0, K.jsx)(Cg, {
					size: {
						xs: 12,
						md: 6
					},
					children: /* @__PURE__ */ (0, K.jsxs)($, {
						spacing: 2,
						sx: { minWidth: 0 },
						children: [
							/* @__PURE__ */ (0, K.jsx)(Iv, {
								label: "Search classes",
								value: c,
								onChange: (e) => {
									l(e.target.value);
								},
								size: "small",
								fullWidth: !0
							}),
							/* @__PURE__ */ (0, K.jsxs)($, {
								spacing: 1,
								children: [/* @__PURE__ */ (0, K.jsx)(oh, {
									type: "button",
									variant: "outlined",
									size: "small",
									onClick: () => {
										b(!y);
									},
									sx: { alignSelf: "flex-start" },
									children: y ? "Hide Filters" : "Show Filters"
								}), y && /* @__PURE__ */ (0, K.jsx)(Jm, {
									sx: {
										display: "flex",
										flexWrap: "wrap",
										gap: 1,
										maxWidth: "100%",
										overflow: "hidden"
									},
									children: T.map((e) => /* @__PURE__ */ (0, K.jsx)(qp, {
										label: e === "all" ? "All Sources" : Jv(e),
										color: u === e ? "primary" : "default",
										variant: u === e ? "filled" : "outlined",
										onClick: () => {
											d(e);
										}
									}, e))
								})]
							}),
							/* @__PURE__ */ (0, K.jsxs)($, {
								spacing: 1,
								sx: {
									height: "clamp(260px, 42vh, 360px)",
									overflowY: "auto",
									overflowX: "hidden",
									pr: .5,
									scrollbarGutter: "stable",
									overscrollBehavior: "contain",
									"& > *": { flexShrink: 0 }
								},
								children: [
									t && /* @__PURE__ */ (0, K.jsx)(md, {
										variant: "body2",
										color: "text.secondary",
										children: "Loading class data..."
									}),
									E.map((e) => {
										let t = qv({
											name: e.name,
											source: e.source
										}), n = w.has(t);
										return /* @__PURE__ */ (0, K.jsx)(uh, {
											variant: "outlined",
											sx: {
												flexShrink: 0,
												borderColor: n ? "primary.main" : "divider",
												backgroundColor: n ? "action.selected" : "background.paper"
											},
											children: /* @__PURE__ */ (0, K.jsx)(gh, {
												onClick: () => {
													a && O(e), p(t);
													let n = w.get(t)?.level;
													h(Zv({
														value: n ?? 1,
														min: 1,
														max: 20,
														fallback: 1
													}));
												},
												children: /* @__PURE__ */ (0, K.jsxs)(bh, {
													sx: { pb: "8px !important" },
													children: [/* @__PURE__ */ (0, K.jsxs)($, {
														direction: "row",
														justifyContent: "space-between",
														alignItems: "center",
														children: [/* @__PURE__ */ (0, K.jsx)(md, {
															variant: "subtitle1",
															children: e.name
														}), /* @__PURE__ */ (0, K.jsx)(qp, {
															size: "small",
															label: Jv(e.source)
														})]
													}), /* @__PURE__ */ (0, K.jsx)(md, {
														variant: "body2",
														color: "text.secondary",
														children: Yv(e)
													})]
												})
											})
										}, `${e.name}__${e.source || "src"}`);
									}),
									!t && E.length === 0 && /* @__PURE__ */ (0, K.jsx)(md, {
										variant: "body2",
										color: "text.secondary",
										children: "No classes match your filters."
									})
								]
							}),
							a && /* @__PURE__ */ (0, K.jsxs)(K.Fragment, { children: [/* @__PURE__ */ (0, K.jsx)(ng, {}), /* @__PURE__ */ (0, K.jsxs)($, {
								spacing: 1,
								children: [
									/* @__PURE__ */ (0, K.jsx)(md, {
										variant: "subtitle2",
										children: "Selected Classes"
									}),
									S.length === 0 && /* @__PURE__ */ (0, K.jsx)(md, {
										variant: "body2",
										color: "text.secondary",
										children: "Select one or more class cards above to assign levels."
									}),
									S.map((e) => {
										let t = qv({
											name: e.className,
											source: e.classSource
										}), n = Zv({
											value: e.level,
											min: 1,
											max: 20,
											fallback: 1
										}), r = Math.max(1, 20 - (C - n));
										return /* @__PURE__ */ (0, K.jsxs)($, {
											direction: "row",
											spacing: 1,
											alignItems: "center",
											children: [
												/* @__PURE__ */ (0, K.jsx)(md, {
													variant: "body2",
													sx: { minWidth: 130 },
													children: e.className
												}),
												e.classSource ? /* @__PURE__ */ (0, K.jsx)(qp, {
													size: "small",
													label: Jv(e.classSource)
												}) : null,
												/* @__PURE__ */ (0, K.jsx)(Iv, {
													label: "Level",
													type: "number",
													size: "small",
													value: n,
													inputProps: {
														min: 1,
														max: r
													},
													onChange: (e) => {
														A({
															classKey: t,
															levelRaw: e.target.value
														});
													},
													sx: { width: 110 }
												}),
												/* @__PURE__ */ (0, K.jsx)(cd, {
													type: "button",
													onClick: () => {
														k(t);
													},
													color: "error",
													title: "Remove class",
													children: /* @__PURE__ */ (0, K.jsx)(Wv, { fontSize: "small" })
												})
											]
										}, t);
									})
								]
							})] })
						]
					})
				}), /* @__PURE__ */ (0, K.jsx)(Cg, {
					size: {
						xs: 12,
						md: 6
					},
					children: a ? /* @__PURE__ */ (0, K.jsx)($v, {
						detailHtml: M,
						hasClass: !!j
					}) : /* @__PURE__ */ (0, K.jsxs)($, {
						spacing: 1.5,
						children: [S.length === 0 && /* @__PURE__ */ (0, K.jsxs)($, {
							direction: {
								xs: "column",
								sm: "row"
							},
							spacing: 1,
							children: [/* @__PURE__ */ (0, K.jsx)(Qv, {
								value: m,
								maxLevel: N,
								menuProps: x,
								onChange: (e) => {
									h(Zv({
										value: e,
										min: 1,
										max: N,
										fallback: 1
									}));
								}
							}), /* @__PURE__ */ (0, K.jsx)(oh, {
								type: "button",
								variant: "contained",
								disabled: !j || t,
								onClick: ee,
								children: "Select Class"
							})]
						}), S.length > 0 ? /* @__PURE__ */ (0, K.jsxs)($, {
							spacing: 1,
							children: [S.map((t) => {
								let n = qv({
									name: t.className,
									source: t.classSource
								}), r = e.find((e) => qv({
									name: e.name,
									source: e.source
								}) === n), i = Xv(r), a = Zv({
									value: t.level,
									min: 1,
									max: 20,
									fallback: 1
								}), o = Math.max(1, 20 - (C - a));
								return /* @__PURE__ */ (0, K.jsxs)(cu, {
									expanded: g === n,
									onChange: (e, t) => {
										v(t ? n : "");
									},
									children: [/* @__PURE__ */ (0, K.jsx)(Vu, {
										expandIcon: /* @__PURE__ */ (0, K.jsx)(Gv, {}),
										children: /* @__PURE__ */ (0, K.jsxs)($, {
											direction: "row",
											justifyContent: "space-between",
											alignItems: "center",
											sx: {
												width: "100%",
												pr: 1
											},
											children: [/* @__PURE__ */ (0, K.jsxs)($, {
												direction: "row",
												spacing: 1,
												alignItems: "center",
												useFlexGap: !0,
												flexWrap: "wrap",
												children: [/* @__PURE__ */ (0, K.jsx)(md, {
													variant: "subtitle1",
													children: t.className
												}), t.classSource ? /* @__PURE__ */ (0, K.jsx)(qp, {
													size: "small",
													label: Jv(t.classSource)
												}) : null]
											}), /* @__PURE__ */ (0, K.jsx)(qp, {
												size: "small",
												color: "primary",
												label: `Level ${a}`
											})]
										})
									}), /* @__PURE__ */ (0, K.jsx)(fu, { children: /* @__PURE__ */ (0, K.jsxs)($, {
										spacing: 1.5,
										children: [/* @__PURE__ */ (0, K.jsxs)($, {
											direction: {
												xs: "column",
												sm: "row"
											},
											spacing: 1,
											children: [/* @__PURE__ */ (0, K.jsx)(Iv, {
												label: "Level",
												type: "number",
												size: "small",
												value: a,
												inputProps: {
													min: 1,
													max: o
												},
												onChange: (e) => {
													A({
														classKey: n,
														levelRaw: e.target.value
													});
												},
												sx: { width: 120 }
											}), /* @__PURE__ */ (0, K.jsx)(oh, {
												type: "button",
												variant: "outlined",
												color: "error",
												onClick: () => {
													k(n);
												},
												children: "Remove Class"
											})]
										}), r ? /* @__PURE__ */ (0, K.jsx)(Jm, {
											sx: {
												lineHeight: 1.45,
												"& a, & a:visited": {
													color: "primary.main",
													textDecorationColor: "currentColor"
												},
												"& .ve-muted": { color: "text.secondary" }
											},
											dangerouslySetInnerHTML: { __html: i }
										}) : /* @__PURE__ */ (0, K.jsx)(md, {
											variant: "body2",
											color: "text.secondary",
											children: "Class detail unavailable for this source."
										})]
									}) })]
								}, n);
							}), /* @__PURE__ */ (0, K.jsxs)($, {
								direction: {
									xs: "column",
									sm: "row"
								},
								spacing: 1,
								children: [/* @__PURE__ */ (0, K.jsx)(Qv, {
									value: m,
									maxLevel: N,
									menuProps: x,
									onChange: (e) => {
										h(Zv({
											value: e,
											min: 1,
											max: N,
											fallback: 1
										}));
									}
								}), /* @__PURE__ */ (0, K.jsx)(oh, {
									type: "button",
									variant: "contained",
									disabled: !j || t || te,
									onClick: ee,
									children: "Select Another Class"
								})]
							})]
						}) : /* @__PURE__ */ (0, K.jsx)($v, {
							detailHtml: M,
							hasClass: !!j
						})]
					})
				})]
			}),
			a && /* @__PURE__ */ (0, K.jsxs)($, {
				direction: "row",
				justifyContent: "space-between",
				sx: { mt: 2 },
				children: [/* @__PURE__ */ (0, K.jsx)(oh, {
					type: "button",
					variant: "outlined",
					onClick: r,
					children: "Back"
				}), /* @__PURE__ */ (0, K.jsxs)($, {
					direction: "row",
					spacing: 1,
					children: [/* @__PURE__ */ (0, K.jsx)(oh, {
						type: "button",
						variant: "outlined",
						startIcon: /* @__PURE__ */ (0, K.jsx)(Uv, {}),
						disabled: !0,
						children: "Tap Class Cards to Add"
					}), /* @__PURE__ */ (0, K.jsx)(oh, {
						type: "button",
						variant: "contained",
						onClick: i,
						children: "Next"
					})]
				})]
			})
		]
	});
}
//#endregion
//#region injectables/src/charbuilder/charbuilder-calculations.js
function ty(e) {
	let t = Number(e);
	return Number.isNaN(t) ? 0 : Math.floor((t - 10) / 2);
}
function ny(e) {
	let t = Number(e) || 0;
	return t >= 0 ? `+${t}` : `${t}`;
}
function ry(e) {
	let t = Number.parseInt(e, 10);
	return Number.isNaN(t) || t < 1 ? 1 : t > 20 ? 20 : t;
}
function iy(e) {
	return Array.isArray(e) ? e.reduce((e, t) => t?.className ? e + ry(t.level) : e, 0) : 0;
}
function ay(e) {
	let t = Number.parseInt(e, 10);
	return Number.isNaN(t) || t <= 0 ? 2 : 2 + Math.floor((Math.min(t, 20) - 1) / 4);
}
//#endregion
//#region injectables/src/charbuilder/AbilityScoresSection.jsx
var oy = [
	{
		key: "str",
		label: "Strength"
	},
	{
		key: "dex",
		label: "Dexterity"
	},
	{
		key: "con",
		label: "Constitution"
	},
	{
		key: "int",
		label: "Intelligence"
	},
	{
		key: "wis",
		label: "Wisdom"
	},
	{
		key: "cha",
		label: "Charisma"
	}
];
function sy({ values: e }) {
	return /* @__PURE__ */ (0, K.jsxs)(eu, {
		variant: "outlined",
		sx: { p: 2 },
		children: [/* @__PURE__ */ (0, K.jsx)(md, {
			variant: "h6",
			gutterBottom: !0,
			children: "Ability Scores"
		}), /* @__PURE__ */ (0, K.jsx)(Cg, {
			container: !0,
			spacing: 2,
			children: oy.map(({ key: t, label: n }) => {
				let r = ty(e[t]);
				return /* @__PURE__ */ (0, K.jsx)(Cg, {
					size: {
						xs: 6,
						sm: 4
					},
					children: /* @__PURE__ */ (0, K.jsxs)(Jm, {
						sx: {
							display: "flex",
							alignItems: "center",
							gap: 1
						},
						children: [/* @__PURE__ */ (0, K.jsx)(Nc, {
							name: t,
							parse: (e) => parseInt(e, 10) || 1,
							children: ({ input: e }) => /* @__PURE__ */ (0, K.jsx)(Iv, {
								...e,
								label: n,
								type: "number",
								inputProps: {
									min: 1,
									max: 30
								},
								size: "small",
								sx: { flex: 1 }
							})
						}), /* @__PURE__ */ (0, K.jsx)(qp, {
							label: ny(r),
							size: "small",
							color: r >= 0 ? "primary" : "default",
							variant: "outlined",
							sx: {
								minWidth: 44,
								fontWeight: "bold"
							}
						})]
					})
				}, t);
			})
		})]
	});
}
//#endregion
//#region injectables/src/charbuilder/charbuilder-model.js
var cy = {
	charName: "",
	playerName: "",
	race: "",
	subrace: "",
	background: "",
	classLevels: [],
	str: 10,
	dex: 10,
	con: 10,
	int: 10,
	wis: 10,
	cha: 10
};
//#endregion
//#region injectables/src/charbuilder/useCharbuilderReferenceData.js
function ly() {
	let [e, t] = (0, _.useState)([]), [n, r] = (0, _.useState)(!0), [i, a] = (0, _.useState)([]), [o, s] = (0, _.useState)(!0), [c, l] = (0, _.useState)([]), [u, d] = (0, _.useState)(!0);
	return (0, _.useEffect)(() => {
		let e = async () => {
			let e = window.DataUtil;
			if (!e) {
				r(!1), s(!1), d(!1);
				return;
			}
			try {
				let n = null;
				if (e.race?.loadJSON) try {
					n = await e.race.loadJSON({ isAddBaseRaces: !1 });
				} catch {
					if (e.race?.loadRawJSON && e.race?.getPostProcessedSiteJson) {
						let t = await e.race.loadRawJSON();
						n = e.race.getPostProcessedSiteJson(t, { isAddBaseRaces: !1 });
					}
				}
				t(n?.race ?? []);
			} catch {
				t([]);
			} finally {
				r(!1);
			}
			try {
				let t = null;
				if (e.background?.loadJSON) try {
					t = await e.background.loadJSON();
				} catch {
					e.background?.loadRawJSON && (t = await e.background.loadRawJSON());
				}
				a(t?.background ?? []);
			} catch {
				a([]);
			} finally {
				s(!1);
			}
			try {
				let t = null;
				if (e.class?.loadJSON) try {
					t = await e.class.loadJSON();
				} catch {
					e.class?.loadRawJSON && (t = await e.class.loadRawJSON());
				}
				l(t?.class ?? []);
			} catch {
				l([]);
			} finally {
				d(!1);
			}
		};
		document.readyState === "complete" ? e() : window.addEventListener("load", e, { once: !0 });
	}, []), {
		allRaces: e,
		racesLoading: n,
		allBackgrounds: i,
		backgroundsLoading: o,
		allClasses: c,
		classesLoading: u
	};
}
//#endregion
//#region injectables/src/charbuilder/CharBuilder.jsx
var uy = 0, dy = 1, fy = 2, py = 3;
function my() {
	let [e, t] = (0, _.useState)(uy), { allRaces: n, racesLoading: r, allBackgrounds: i, backgroundsLoading: a, allClasses: o, classesLoading: s } = ly();
	return /* @__PURE__ */ (0, K.jsx)(vc, {
		initialValues: cy,
		destroyOnUnregister: !1,
		keepDirtyOnReinitialize: !0,
		onSubmit: () => {},
		render: ({ handleSubmit: c, form: l, values: u }) => /* @__PURE__ */ (0, K.jsx)("form", {
			onSubmit: c,
			children: /* @__PURE__ */ (0, K.jsxs)($, {
				spacing: 2,
				sx: { pb: 3 },
				children: [
					/* @__PURE__ */ (0, K.jsxs)(Jm, {
						sx: {
							display: "flex",
							alignItems: "center",
							gap: 2,
							flexWrap: "wrap",
							mt: 1
						},
						children: [/* @__PURE__ */ (0, K.jsx)(oh, {
							variant: "outlined",
							size: "small",
							onClick: () => l.reset(),
							children: "Reset Form"
						}), /* @__PURE__ */ (0, K.jsx)(md, {
							variant: "caption",
							color: "text.secondary",
							sx: { fontStyle: "italic" },
							children: "Client-side only. No save/export yet."
						})]
					}),
					/* @__PURE__ */ (0, K.jsx)(Jm, {
						sx: { display: e === uy ? "block" : "none" },
						children: /* @__PURE__ */ (0, K.jsx)(zv, {
							backgrounds: i,
							backgroundsLoading: a,
							onNext: () => {
								t(dy);
							}
						})
					}),
					/* @__PURE__ */ (0, K.jsx)(Jm, {
						sx: { display: e === dy ? "block" : "none" },
						children: /* @__PURE__ */ (0, K.jsx)(Hv, {
							allRaces: n,
							racesLoading: r,
							raceValue: u.race,
							onBack: () => {
								t(uy);
							},
							onNext: () => {
								t(fy);
							}
						})
					}),
					/* @__PURE__ */ (0, K.jsx)(Jm, {
						sx: { display: e === fy ? "block" : "none" },
						children: /* @__PURE__ */ (0, K.jsx)(ey, {
							allClasses: o,
							classesLoading: s,
							onBack: () => {
								t(dy);
							},
							onNext: () => {
								t(py);
							}
						})
					}),
					/* @__PURE__ */ (0, K.jsx)(Jm, {
						sx: { display: e === py ? "block" : "none" },
						children: /* @__PURE__ */ (0, K.jsxs)($, {
							spacing: 2,
							children: [/* @__PURE__ */ (0, K.jsx)(sy, { values: u }), /* @__PURE__ */ (0, K.jsxs)($, {
								direction: "row",
								justifyContent: "space-between",
								children: [/* @__PURE__ */ (0, K.jsx)(oh, {
									type: "button",
									variant: "outlined",
									onClick: () => {
										t(fy);
									},
									children: "Back"
								}), /* @__PURE__ */ (0, K.jsx)(oh, {
									type: "button",
									variant: "contained",
									disabled: !0,
									children: "Next"
								})]
							})]
						})
					})
				]
			})
		})
	});
}
//#endregion
//#region node_modules/@mui/icons-material/Edit.mjs
var hy = Bc(/* @__PURE__ */ (0, K.jsx)("path", { d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z" }), "Edit"), gy = "basics", _y = "race", vy = "classes", yy = "abilities", by = [
	{
		key: "str",
		label: "STR"
	},
	{
		key: "dex",
		label: "DEX"
	},
	{
		key: "con",
		label: "CON"
	},
	{
		key: "int",
		label: "INT"
	},
	{
		key: "wis",
		label: "WIS"
	},
	{
		key: "cha",
		label: "CHA"
	}
];
function xy({ title: e, subtitle: t, onEdit: n, children: r }) {
	return /* @__PURE__ */ (0, K.jsx)(eu, {
		variant: "outlined",
		sx: {
			p: 2,
			borderRadius: 3
		},
		children: /* @__PURE__ */ (0, K.jsxs)($, {
			spacing: 1.5,
			children: [/* @__PURE__ */ (0, K.jsxs)($, {
				direction: "row",
				alignItems: "center",
				justifyContent: "space-between",
				spacing: 1,
				children: [/* @__PURE__ */ (0, K.jsxs)(Jm, { children: [/* @__PURE__ */ (0, K.jsx)(md, {
					variant: "h6",
					children: e
				}), t ? /* @__PURE__ */ (0, K.jsx)(md, {
					variant: "body2",
					color: "text.secondary",
					children: t
				}) : null] }), /* @__PURE__ */ (0, K.jsx)(oh, {
					type: "button",
					variant: "contained",
					startIcon: /* @__PURE__ */ (0, K.jsx)(hy, {}),
					onClick: n,
					sx: {
						minHeight: 44,
						px: 2,
						borderRadius: 2,
						flexShrink: 0
					},
					children: "Edit"
				})]
			}), r]
		})
	});
}
function Sy({ title: e, onCancel: t, onSave: n, children: r }) {
	return /* @__PURE__ */ (0, K.jsx)(eu, {
		variant: "outlined",
		sx: {
			p: 2,
			borderRadius: 3
		},
		children: /* @__PURE__ */ (0, K.jsxs)($, {
			spacing: 2,
			children: [/* @__PURE__ */ (0, K.jsxs)($, {
				direction: {
					xs: "column",
					sm: "row"
				},
				alignItems: {
					xs: "flex-start",
					sm: "center"
				},
				justifyContent: "space-between",
				spacing: 1,
				children: [/* @__PURE__ */ (0, K.jsx)(md, {
					variant: "h6",
					children: e
				}), /* @__PURE__ */ (0, K.jsxs)($, {
					direction: "row",
					spacing: 1,
					children: [/* @__PURE__ */ (0, K.jsx)(oh, {
						type: "button",
						variant: "outlined",
						onClick: t,
						sx: { minHeight: 44 },
						children: "Cancel"
					}), /* @__PURE__ */ (0, K.jsx)(oh, {
						type: "button",
						variant: "contained",
						onClick: n,
						sx: { minHeight: 44 },
						children: "Save"
					})]
				})]
			}), r]
		})
	});
}
function Cy(e) {
	if (!e) return {};
	try {
		return JSON.parse(JSON.stringify(e));
	} catch {
		return { ...e };
	}
}
function wy({ values: e }) {
	return /* @__PURE__ */ (0, K.jsx)($, {
		spacing: .75,
		children: [
			["Character", e.charName || "Not set"],
			["Player", e.playerName || "Not set"],
			["Background", e.background || "Not set"]
		].map(([e, t]) => /* @__PURE__ */ (0, K.jsxs)($, {
			direction: "row",
			justifyContent: "space-between",
			spacing: 1,
			children: [/* @__PURE__ */ (0, K.jsx)(md, {
				variant: "body2",
				color: "text.secondary",
				children: e
			}), /* @__PURE__ */ (0, K.jsx)(md, {
				variant: "body2",
				fontWeight: 600,
				textAlign: "right",
				children: t
			})]
		}, e))
	});
}
function Ty({ values: e }) {
	return /* @__PURE__ */ (0, K.jsxs)($, {
		spacing: .75,
		children: [/* @__PURE__ */ (0, K.jsxs)($, {
			direction: "row",
			justifyContent: "space-between",
			spacing: 1,
			children: [/* @__PURE__ */ (0, K.jsx)(md, {
				variant: "body2",
				color: "text.secondary",
				children: "Race"
			}), /* @__PURE__ */ (0, K.jsx)(md, {
				variant: "body2",
				fontWeight: 600,
				textAlign: "right",
				children: e.race || "Not set"
			})]
		}), /* @__PURE__ */ (0, K.jsxs)($, {
			direction: "row",
			justifyContent: "space-between",
			spacing: 1,
			children: [/* @__PURE__ */ (0, K.jsx)(md, {
				variant: "body2",
				color: "text.secondary",
				children: "Subrace"
			}), /* @__PURE__ */ (0, K.jsx)(md, {
				variant: "body2",
				fontWeight: 600,
				textAlign: "right",
				children: e.subrace || "None"
			})]
		})]
	});
}
function Ey({ values: e, totalLevel: t, proficiencyBonus: n }) {
	let r = e.classLevels?.filter((e) => e?.className) || [];
	return /* @__PURE__ */ (0, K.jsxs)($, {
		spacing: 1,
		children: [/* @__PURE__ */ (0, K.jsxs)($, {
			direction: "row",
			spacing: 1,
			useFlexGap: !0,
			flexWrap: "wrap",
			children: [/* @__PURE__ */ (0, K.jsx)(qp, {
				label: `Total Level ${t}`,
				color: "primary"
			}), /* @__PURE__ */ (0, K.jsx)(qp, {
				label: `Proficiency ${ny(n)}`,
				color: "secondary",
				variant: "outlined"
			})]
		}), r.length ? r.map((e) => /* @__PURE__ */ (0, K.jsxs)($, {
			direction: "row",
			justifyContent: "space-between",
			spacing: 1,
			children: [/* @__PURE__ */ (0, K.jsx)(md, {
				variant: "body2",
				color: "text.secondary",
				children: e.className
			}), /* @__PURE__ */ (0, K.jsxs)(md, {
				variant: "body2",
				fontWeight: 600,
				children: ["Level ", e.level]
			})]
		}, `${e.className}__${e.classSource || "src"}`)) : /* @__PURE__ */ (0, K.jsx)(md, {
			variant: "body2",
			color: "text.secondary",
			children: "No classes selected."
		})]
	});
}
function Dy({ values: e }) {
	return /* @__PURE__ */ (0, K.jsx)(Cg, {
		container: !0,
		spacing: 1,
		children: by.map(({ key: t, label: n }) => {
			let r = Number(e[t]) || 10, i = ty(r);
			return /* @__PURE__ */ (0, K.jsx)(Cg, {
				size: {
					xs: 6,
					sm: 4
				},
				children: /* @__PURE__ */ (0, K.jsxs)(eu, {
					variant: "outlined",
					sx: {
						p: 1.25,
						borderRadius: 2
					},
					children: [/* @__PURE__ */ (0, K.jsxs)($, {
						direction: "row",
						justifyContent: "space-between",
						alignItems: "center",
						children: [/* @__PURE__ */ (0, K.jsx)(md, {
							variant: "body2",
							color: "text.secondary",
							children: n
						}), /* @__PURE__ */ (0, K.jsx)(md, {
							variant: "body2",
							fontWeight: 700,
							children: ny(i)
						})]
					}), /* @__PURE__ */ (0, K.jsx)(md, {
						variant: "h6",
						lineHeight: 1.2,
						children: r
					})]
				})
			}, t);
		})
	});
}
function Oy({ hostBridge: e }) {
	let { allRaces: t, racesLoading: n, allBackgrounds: r, backgroundsLoading: i, allClasses: a, classesLoading: o } = ly(), [s, c] = (0, _.useState)(null), [l, u] = (0, _.useState)(null), d = (0, _.useMemo)(() => {
		let t = e?.getShadowRoot?.();
		return t?.querySelector && t.querySelector("[data-react-root]") || null;
	}, [e]), f = (0, _.useMemo)(() => {
		switch (s) {
			case gy: return "Edit Basics";
			case _y: return "Edit Race";
			case vy: return "Edit Classes and Levels";
			case yy: return "Edit Ability Scores";
			default: return "Edit Section";
		}
	}, [s]), p = (e, t) => {
		u(Cy(t)), c(e);
	}, m = (e) => {
		l && e.initialize(l), c(null), u(null);
	}, h = () => {
		c(null), u(null);
	};
	return /* @__PURE__ */ (0, K.jsx)(vc, {
		initialValues: cy,
		destroyOnUnregister: !1,
		keepDirtyOnReinitialize: !0,
		onSubmit: () => {},
		render: ({ handleSubmit: e, form: c, values: l }) => {
			let u = iy(l.classLevels), g = ay(u), _ = !!s;
			return /* @__PURE__ */ (0, K.jsx)("form", {
				onSubmit: e,
				children: /* @__PURE__ */ (0, K.jsxs)($, {
					spacing: 2,
					sx: { pb: 3 },
					children: [/* @__PURE__ */ (0, K.jsx)(eu, {
						variant: "outlined",
						sx: {
							p: 2,
							borderRadius: 3
						},
						children: /* @__PURE__ */ (0, K.jsxs)($, {
							spacing: 1.5,
							children: [/* @__PURE__ */ (0, K.jsxs)($, {
								direction: {
									xs: "column",
									sm: "row"
								},
								alignItems: {
									xs: "flex-start",
									sm: "center"
								},
								justifyContent: "space-between",
								spacing: 1,
								children: [/* @__PURE__ */ (0, K.jsxs)(Jm, { children: [/* @__PURE__ */ (0, K.jsx)(md, {
									variant: "h5",
									children: "Character Sheet Builder"
								}), /* @__PURE__ */ (0, K.jsx)(md, {
									variant: "body2",
									color: "text.secondary",
									children: "Touch-first editing for phones/tablets with in-page section editing."
								})] }), /* @__PURE__ */ (0, K.jsx)(oh, {
									type: "button",
									variant: "outlined",
									onClick: () => c.reset(),
									sx: { minHeight: 44 },
									children: "Reset Form"
								})]
							}), /* @__PURE__ */ (0, K.jsxs)($, {
								direction: "row",
								spacing: 1,
								useFlexGap: !0,
								flexWrap: "wrap",
								children: [/* @__PURE__ */ (0, K.jsx)(qp, {
									label: `Level ${u || 1}`,
									color: "primary"
								}), /* @__PURE__ */ (0, K.jsx)(qp, {
									label: `Proficiency ${ny(g)}`,
									variant: "outlined",
									color: "secondary"
								})]
							})]
						})
					}), _ ? /* @__PURE__ */ (0, K.jsxs)(Sy, {
						title: f,
						onCancel: () => m(c),
						onSave: h,
						children: [
							s === gy ? /* @__PURE__ */ (0, K.jsx)(zv, {
								backgrounds: r,
								backgroundsLoading: i,
								overlayContainer: d,
								showNavigation: !1
							}) : null,
							s === _y ? /* @__PURE__ */ (0, K.jsx)(Hv, {
								allRaces: t,
								racesLoading: n,
								raceValue: l.race,
								onBack: () => {},
								onNext: () => {},
								showNavigation: !1
							}) : null,
							s === vy ? /* @__PURE__ */ (0, K.jsx)(ey, {
								allClasses: a,
								classesLoading: o,
								overlayContainer: d,
								onBack: () => {},
								onNext: () => {},
								showNavigation: !1
							}) : null,
							s === yy ? /* @__PURE__ */ (0, K.jsx)(sy, { values: l }) : null
						]
					}) : /* @__PURE__ */ (0, K.jsxs)(Cg, {
						container: !0,
						spacing: 2,
						children: [
							/* @__PURE__ */ (0, K.jsx)(Cg, {
								size: {
									xs: 12,
									md: 6
								},
								children: /* @__PURE__ */ (0, K.jsx)(xy, {
									title: "Basics",
									subtitle: "Character identity",
									onEdit: () => p(gy, l),
									children: /* @__PURE__ */ (0, K.jsx)(wy, { values: l })
								})
							}),
							/* @__PURE__ */ (0, K.jsx)(Cg, {
								size: {
									xs: 12,
									md: 6
								},
								children: /* @__PURE__ */ (0, K.jsx)(xy, {
									title: "Race",
									subtitle: "Species and lineage",
									onEdit: () => p(_y, l),
									children: /* @__PURE__ */ (0, K.jsx)(Ty, { values: l })
								})
							}),
							/* @__PURE__ */ (0, K.jsx)(Cg, {
								size: {
									xs: 12,
									md: 6
								},
								children: /* @__PURE__ */ (0, K.jsx)(xy, {
									title: "Classes",
									subtitle: "Class and level allocation",
									onEdit: () => p(vy, l),
									children: /* @__PURE__ */ (0, K.jsx)(Ey, {
										values: l,
										totalLevel: u,
										proficiencyBonus: g
									})
								})
							}),
							/* @__PURE__ */ (0, K.jsx)(Cg, {
								size: {
									xs: 12,
									md: 6
								},
								children: /* @__PURE__ */ (0, K.jsx)(xy, {
									title: "Ability Scores",
									subtitle: "Scores and modifiers",
									onEdit: () => p(yy, l),
									children: /* @__PURE__ */ (0, K.jsx)(Dy, { values: l })
								})
							})
						]
					})]
				})
			});
		}
	});
}
//#endregion
//#region injectables/src/main.jsx
var ky = "data-5etools-island", Ay = "data-5etools-island-props", jy = "5etools-island:update-props", My = "fiveetools-island-host", Ny = {
	"demo-form": bs,
	charbuilder: my,
	"charbuilder-sheet": Oy
}, Py = /* @__PURE__ */ new WeakMap();
function Fy(e) {
	let t = e.getAttribute(Ay);
	if (!t) return {};
	try {
		return JSON.parse(t);
	} catch {
		return {};
	}
}
function Iy() {
	let e = document.documentElement, t = globalThis.styleSwitcher?.getClassNamesStyleTheme?.() || "", n = globalThis.styleSwitcher?.getSummary?.()?.isNight ?? e.classList.contains("ve-night-mode"), r = "day";
	return t.includes("ve-night-mode--clean") ? r = "nightClean" : t.includes("ve-night-mode--classic") ? r = "nightClassic" : n && (r = "night"), {
		isNight: !!n,
		mode: n ? "dark" : "light",
		variant: r,
		className: t
	};
}
function Ly(e) {
	let t = e.mode === "dark", n = t ? {
		default: e.variant === "nightClean" ? "#12161d" : e.variant === "nightClassic" ? "#17120f" : "#101418",
		paper: e.variant === "nightClean" ? "#1a2230" : e.variant === "nightClassic" ? "#231b16" : "#17202a"
	} : {
		default: "#f7f7f4",
		paper: "#ffffff"
	};
	return Qo({
		palette: {
			mode: e.mode,
			primary: { main: t ? "#7cc4ff" : "#006bc4" },
			secondary: { main: t ? "#d2ad68" : "#7a4d00" },
			background: n
		},
		shape: { borderRadius: 8 },
		components: { MuiPaper: { styleOverrides: { root: { backgroundImage: "none" } } } },
		typography: { fontSize: 24 }
	});
}
var Ry = class extends HTMLElement {
	constructor() {
		super();
		let e = this.attachShadow({ mode: "open" }), t = document.createElement("style");
		t.textContent = "\n			:host {\n				display: block;\n				width: 100%;\n				color: inherit;\n				font: inherit;\n			}\n\n			[data-react-root] {\n				display: block;\n				width: 100%;\n			}\n		";
		let n = document.createElement("div");
		n.setAttribute("data-react-root", ""), e.append(t, n), this._mountPoint = n;
	}
	get mountPoint() {
		return this._mountPoint;
	}
};
typeof window < "u" && window.customElements && !window.customElements.get(My) && window.customElements.define(My, Ry);
function zy(e) {
	let t = e.querySelector(My);
	return t || (t = document.createElement(My), e.replaceChildren(t), t);
}
function By({ Component: e, mountElement: t, shadowRoot: n, initialProps: r }) {
	let [i, a] = (0, _.useState)(r), [o, s] = (0, _.useState)(() => Iy());
	(0, _.useEffect)(() => {
		let e = (e) => {
			let t = e.detail;
			!t || typeof t != "object" || a((e) => ({
				...e,
				...t
			}));
		};
		return t.addEventListener(jy, e), t.updateIslandProps = (e) => {
			t.dispatchEvent(new CustomEvent(jy, { detail: e }));
		}, () => {
			t.removeEventListener(jy, e), delete t.updateIslandProps;
		};
	}, [t]), (0, _.useEffect)(() => {
		let e = new MutationObserver(() => {
			s((e) => {
				let t = Iy();
				return e.mode === t.mode && e.variant === t.variant && e.className === t.className ? e : t;
			});
		});
		return e.observe(document.documentElement, {
			attributes: !0,
			attributeFilter: ["class"]
		}), () => e.disconnect();
	}, []);
	let c = (0, _.useMemo)(() => He({
		key: `mui-island-${t.getAttribute(ky) || "root"}`,
		container: n,
		prepend: !0
	}), [t, n]), l = (0, _.useMemo)(() => Ly(o), [o]), u = (0, _.useMemo)(() => ({
		dispatch(e, n) {
			t.dispatchEvent(new CustomEvent(e, {
				detail: n,
				bubbles: !0,
				composed: !0
			}));
		},
		setProps(e) {
			t.dispatchEvent(new CustomEvent(jy, { detail: e }));
		},
		getTheme() {
			return o;
		},
		getMountElement() {
			return t;
		},
		getShadowRoot() {
			return n;
		}
	}), [
		t,
		n,
		o
	]);
	return /* @__PURE__ */ (0, K.jsx)(_t, {
		value: c,
		children: /* @__PURE__ */ (0, K.jsx)(ys, {
			theme: l,
			children: /* @__PURE__ */ (0, K.jsx)(fs, { children: /* @__PURE__ */ (0, K.jsx)(e, {
				...i,
				hostBridge: u,
				hostTheme: o
			}) })
		})
	});
}
function Vy(e) {
	if (!(e instanceof HTMLElement)) return !1;
	let t = e.getAttribute(ky);
	if (!t) return !1;
	let n = Ny[t];
	if (!n) return !1;
	if (Py.has(e)) return !0;
	let r = zy(e), i = r.shadowRoot, a = (0, v.createRoot)(r.mountPoint);
	return a.render(/* @__PURE__ */ (0, K.jsx)(_.StrictMode, { children: /* @__PURE__ */ (0, K.jsx)(By, {
		Component: n,
		mountElement: e,
		shadowRoot: i,
		initialProps: Fy(e)
	}) })), Py.set(e, a), !0;
}
function Hy(e = document) {
	if (!e?.querySelectorAll) return 0;
	let t = 0, n = e.querySelectorAll(`[${ky}]`);
	for (let e of n) Vy(e) && t++;
	return t;
}
typeof window < "u" && (window.__5etoolsInjectables = {
	mountIsland: Vy,
	mountIslands: Hy
});
//#endregion
export { Vy as mountIsland, Hy as mountIslands };

//# sourceMappingURL=injectables.js.map