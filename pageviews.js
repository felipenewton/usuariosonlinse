!function (t) {
    function e(i) {
        if (n[i])
            return n[i].exports;
        var r = n[i] = {exports: {},
            id: i, loaded: !1};
        return t[i].call(r.exports, r, r.exports, e),
                r.loaded = !0, r.exports
    }
    var n = {};
    return e.m = t, e.c = n, e.p = "", e(0)
}([function (t, e, n) {
        "use strict";
        !function () {
            function t(t) {
                "all" === c && (r = t.val().total), "one" === c && (r = t.val()[s].total);
                var n, o = document.createElement("div");
                n = "padding:5px;margin:5px;z-index: 99999;background: lightblue; text-align:center;", "float" === i && (n += "position:fixed;bottom: 0;left: 0;"), o.style.cssText = n, o.innerHTML = e + " <b>" + r + "</b>";
                var a = document.getElementById("counter");
                a.parentNode.insertBefore(o, a), h.on("value", function (t) {
                    "all" === c && (r = t.val().total), "one" === c && (r = t.val()[s].total), o.innerHTML = e + " <b>" + r.toLocaleString() + "</b>"
                })
            }
            for (var e, i, r, o = n(1), a = new o("https://onlineu.firebaseio.com/"), s = document.URL.split(".").join("_"), s = s.split("/").join("*"), u = window.location.host, h = null, c = "one", f = document.getElementsByTagName("script"), l = 0, d = f.length; d > l; l++)
                if ("counter" === f[l].id) {
                    c = f[l].getAttribute("page"), e = f[l].getAttribute("label"), i = f[l].getAttribute("loc");
                    break
                }
            h = a.child("one" == c ? s.split(".").join("_") : u.split(".").join("_")), h.transaction(function (t) {
                if (null === t) {
                    var e = {total: 1};
                    return e[s] = {total: 1}, e
                }
                if (null === t[s]) {
                    var e = {total: t.total + 1};
                    return e[s] = {total: 1}, e
                }
                var e = {total: t.total + 1};
                return e[s] = {total: t[s].total + 1}, e
            }, function (e, n, i) {
                return e ? !1 : n ? void t(i) : !1
            })
        }()
    }, function (module, exports, __webpack_require__) {
        /*! @license Firebase v2.2.4
     License: https://www.firebase.com/terms/terms-of-service.html */
        !function () {
            function n(t) {
                return void 0 !== t
            }
            function ba() {}
            function ca(t) {
                t.ub = function () {
                    return t.tf ? t.tf : t.tf = new t
                }
            }
            function da(t) {
                var e = typeof t;
                if ("object" == e) {
                    if (!t)
                        return"null";
                    if (t instanceof Array)
                        return"array";
                    if (t instanceof Object)
                        return e;
                    var n = Object.prototype.toString.call(t);
                    if ("[object Window]" == n)
                        return"object";
                    if ("[object Array]" == n || "number" == typeof t.length && "undefined" != typeof t.splice && "undefined" != typeof t.propertyIsEnumerable && !t.propertyIsEnumerable("splice"))
                        return"array";
                    if ("[object Function]" == n || "undefined" != typeof t.call && "undefined" != typeof t.propertyIsEnumerable && !t.propertyIsEnumerable("call"))
                        return"function"
                } else if ("function" == e && "undefined" == typeof t.call)
                    return"object";
                return e
            }
            function ea(t) {
                return"array" == da(t)
            }
            function fa(t) {
                var e = da(t);
                return"array" == e || "object" == e && "number" == typeof t.length
            }
            function p(t) {
                return"string" == typeof t
            }
            function ga(t) {
                return"number" == typeof t
            }
            function ha(t) {
                return"function" == da(t)
            }
            function ia(t) {
                var e = typeof t;
                return"object" == e && null != t || "function" == e
            }
            function ja(t, e, n) {
                return t.call.apply(t.bind, arguments)
            }
            function ka(t, e, n) {
                if (!t)
                    throw Error();
                if (2 < arguments.length) {
                    var i = Array.prototype.slice.call(arguments, 2);
                    return function () {
                        var n = Array.prototype.slice.call(arguments);
                        return Array.prototype.unshift.apply(n, i), t.apply(e, n)
                    }
                }
                return function () {
                    return t.apply(e, arguments)
                }
            }
            function q(t, e, n) {
                return q = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ja : ka, q.apply(null, arguments)
            }
            function ma(t, e) {
                function n() {}
                n.prototype = e.prototype, t.Zg = e.prototype, t.prototype = new n, t.prototype.constructor = t, t.Vg = function (t, n, i) {
                    for (var r = Array(arguments.length - 2), o = 2; o < arguments.length; o++)
                        r[o - 2] = arguments[o];
                    return e.prototype[n].apply(t, r)
                }
            }
            function r(t, e) {
                for (var n in t)
                    e.call(void 0, t[n], n, t)
            }
            function na(t, e) {
                var n, i = {};
                for (n in t)
                    i[n] = e.call(void 0, t[n], n, t);
                return i
            }
            function oa(t, e) {
                for (var n in t)
                    if (!e.call(void 0, t[n], n, t))
                        return!1;
                return!0
            }
            function pa(t) {
                var e, n = 0;
                for (e in t)
                    n++;
                return n
            }
            function qa(t) {
                for (var e in t)
                    return e
            }
            function ra(t) {
                var e, n = [], i = 0;
                for (e in t)
                    n[i++] = t[e];
                return n
            }
            function sa(t) {
                var e, n = [], i = 0;
                for (e in t)
                    n[i++] = e;
                return n
            }
            function ta(t, e) {
                for (var n in t)
                    if (t[n] == e)
                        return!0;
                return!1
            }
            function ua(t, e, n) {
                for (var i in t)
                    if (e.call(n, t[i], i, t))
                        return i
            }
            function va(t, e) {
                var n = ua(t, e, void 0);
                return n && t[n]
            }
            function wa(t) {
                for (var e in t)
                    return!1;
                return!0
            }
            function xa(t) {
                var e, n = {};
                for (e in t)
                    n[e] = t[e];
                return n
            }
            function za(t, e) {
                for (var n, i, r = 1; r < arguments.length; r++) {
                    i = arguments[r];
                    for (n in i)
                        t[n] = i[n];
                    for (var o = 0; o < ya.length; o++)
                        n = ya[o], Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                }
            }
            function Aa(a) {
                if (a = String(a), /^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")))
                    try {
                        return eval("(" + a + ")")
                    } catch (b) {
                    }
                throw Error("Invalid JSON string: " + a)
            }
            function Ba() {
                this.Pd = void 0
            }
            function Ca(t, e, n) {
                switch (typeof e) {
                    case"string":
                        Da(e, n);
                        break;
                    case"number":
                        n.push(isFinite(e) && !isNaN(e) ? e : "null");
                        break;
                    case"boolean":
                        n.push(e);
                        break;
                    case"undefined":
                        n.push("null");
                        break;
                    case"object":
                        if (null == e) {
                            n.push("null");
                            break
                        }
                        if (ea(e)) {
                            var i = e.length;
                            n.push("[");
                            for (var r = "", o = 0; i > o; o++)
                                n.push(r), r = e[o], Ca(t, t.Pd ? t.Pd.call(e, String(o), r) : r, n), r = ",";
                            n.push("]");
                            break
                        }
                        n.push("{"), i = "";
                        for (o in e)
                            Object.prototype.hasOwnProperty.call(e, o) && (r = e[o], "function" != typeof r && (n.push(i), Da(o, n), n.push(":"), Ca(t, t.Pd ? t.Pd.call(e, o, r) : r, n), i = ","));
                        n.push("}");
                        break;
                    case"function":
                        break;
                    default:
                        throw Error("Unknown type: " + typeof e)
                    }
            }
            function Da(t, e) {
                e.push('"', t.replace(Fa, function (t) {
                    if (t in Ea)
                        return Ea[t];
                    var e = t.charCodeAt(0), n = "\\u";
                    return 16 > e ? n += "000" : 256 > e ? n += "00" : 4096 > e && (n += "0"), Ea[t] = n + e.toString(16)
                }), '"')
            }
            function Ga() {
                return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ la()).toString(36)
            }
            function Ka() {
                this.Wa = -1
            }
            function La() {
                this.Wa = -1, this.Wa = 64, this.R = [], this.le = [], this.Tf = [], this.Id = [], this.Id[0] = 128;
                for (var t = 1; t < this.Wa; ++t)
                    this.Id[t] = 0;
                this.be = this.$b = 0, this.reset()
            }
            function Ma(t, e, n) {
                n || (n = 0);
                var i = t.Tf;
                if (p(e))
                    for (var r = 0; 16 > r; r++)
                        i[r] = e.charCodeAt(n) << 24 | e.charCodeAt(n + 1) << 16 | e.charCodeAt(n + 2) << 8 | e.charCodeAt(n + 3), n += 4;
                else
                    for (r = 0; 16 > r; r++)
                        i[r] = e[n] << 24 | e[n + 1] << 16 | e[n + 2] << 8 | e[n + 3], n += 4;
                for (r = 16; 80 > r; r++) {
                    var o = i[r - 3] ^ i[r - 8] ^ i[r - 14] ^ i[r - 16];
                    i[r] = 4294967295 & (o << 1 | o >>> 31)
                }
                e = t.R[0], n = t.R[1];
                for (var a, s = t.R[2], u = t.R[3], h = t.R[4], r = 0; 80 > r; r++)
                    40 > r ? 20 > r ? (o = u ^ n & (s ^ u), a = 1518500249) : (o = n ^ s ^ u, a = 1859775393) : 60 > r ? (o = n & s | u & (n | s), a = 2400959708) : (o = n ^ s ^ u, a = 3395469782), o = (e << 5 | e >>> 27) + o + h + a + i[r] & 4294967295, h = u, u = s, s = 4294967295 & (n << 30 | n >>> 2), n = e, e = o;
                t.R[0] = t.R[0] + e & 4294967295, t.R[1] = t.R[1] + n & 4294967295, t.R[2] = t.R[2] + s & 4294967295, t.R[3] = t.R[3] + u & 4294967295, t.R[4] = t.R[4] + h & 4294967295
            }
            function Ta(t, e) {
                var n = Ua(t, e, void 0);
                return 0 > n ? null : p(t) ? t.charAt(n) : t[n]
            }
            function Ua(t, e, n) {
                for (var i = t.length, r = p(t) ? t.split("") : t, o = 0; i > o; o++)
                    if (o in r && e.call(n, r[o], o, t))
                        return o;
                return -1
            }
            function Va(e, n) {
                var i = Na(e, n);
                i >= 0 && t.splice.call(e, i, 1)
            }
            function Wa(e, n, i) {
                return 2 >= arguments.length ? t.slice.call(e, n) : t.slice.call(e, n, i)
            }
            function Xa(t, e) {
                t.sort(e || Ya)
            }
            function Ya(t, e) {
                return t > e ? 1 : e > t ? -1 : 0
            }
            function fb(t, e) {
                if (!fa(t))
                    throw Error("encodeByteArray takes an array as a parameter");
                gb();
                for (var n = e ? db : cb, i = [], r = 0; r < t.length; r += 3) {
                    var o = t[r], a = r + 1 < t.length, s = a ? t[r + 1] : 0, u = r + 2 < t.length, h = u ? t[r + 2] : 0, c = o >> 2, o = (3 & o) << 4 | s >> 4, s = (15 & s) << 2 | h >> 6, h = 63 & h;
                    u || (h = 64, a || (s = 64)), i.push(n[c], n[o], n[s], n[h])
                }
                return i.join("")
            }
            function gb() {
                if (!cb) {
                    cb = {}, db = {}, eb = {};
                    for (var t = 0; 65 > t; t++)
                        cb[t] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(t), db[t] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(t), eb[db[t]] = t, t >= 62 && (eb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(t)] = t)
                }
            }
            function u(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            function w(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e) ? t[e] : void 0
            }
            function hb(t, e) {
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n])
            }
            function ib(t) {
                var e = {};
                return hb(t, function (t, n) {
                    e[t] = n
                }), e
            }
            function jb(t) {
                var e = [];
                return hb(t, function (t, n) {
                    ea(n) ? Oa(n, function (n) {
                        e.push(encodeURIComponent(t) + "=" + encodeURIComponent(n))
                    }) : e.push(encodeURIComponent(t) + "=" + encodeURIComponent(n))
                }), e.length ? "&" + e.join("&") : ""
            }
            function kb(t) {
                var e = {};
                return t = t.replace(/^\?/, "").split("&"), Oa(t, function (t) {
                    t && (t = t.split("="), e[t[0]] = t[1])
                }), e
            }
            function x(t, e, n, i) {
                var r;
                if (e > i ? r = "at least " + e : i > n && (r = 0 === n ? "none" : "no more than " + n), r)
                    throw Error(t + " failed: Was called with " + i + (1 === i ? " argument." : " arguments.") + " Expects " + r + ".")
            }
            function z(t, e, n) {
                var i = "";
                switch (e) {
                    case 1:
                        i = n ? "first" : "First";
                        break;
                    case 2:
                        i = n ? "second" : "Second";
                        break;
                    case 3:
                        i = n ? "third" : "Third";
                        break;
                    case 4:
                        i = n ? "fourth" : "Fourth";
                        break;
                    default:
                        throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?")
                }
                return t = t + " failed: " + (i + " argument ")
            }
            function A(t, e, i, r) {
                if ((!r || n(i)) && !ha(i))
                    throw Error(z(t, e, r) + "must be a valid function.")
            }
            function lb(t, e, i) {
                if (n(i) && (!ia(i) || null === i))
                    throw Error(z(t, e, !0) + "must be a valid context object.")
            }
            function mb(t) {
                return"undefined" != typeof JSON && n(JSON.parse) ? JSON.parse(t) : Aa(t)
            }
            function B(t) {
                if ("undefined" != typeof JSON && n(JSON.stringify))
                    t = JSON.stringify(t);
                else {
                    var e = [];
                    Ca(new Ba, t, e), t = e.join("")
                }
                return t
            }
            function nb() {
                this.Sd = C
            }
            function ob() {}
            function qb(t, e, n) {
                this.Qf = t, this.Ka = e, this.Hd = n
            }
            function ub() {
                this.tb = []
            }
            function vb(t, e) {
                for (var n = null, i = 0; i < e.length; i++) {
                    var r = e[i], o = r.Yb();
                    null === n || o.Z(n.Yb()) || (t.tb.push(n), n = null), null === n && (n = new wb(o)), n.add(r)
                }
                n && t.tb.push(n)
            }
            function xb(t, e, n) {
                vb(t, n), yb(t, function (t) {
                    return t.Z(e)
                })
            }
            function zb(t, e, n) {
                vb(t, n), yb(t, function (t) {
                    return t.contains(e) || e.contains(t)
                })
            }
            function yb(t, e) {
                for (var n = !0, i = 0; i < t.tb.length; i++) {
                    var r = t.tb[i];
                    if (r)
                        if (r = r.Yb(), e(r)) {
                            for (var r = t.tb[i], o = 0; o < r.sd.length; o++) {
                                var a = r.sd[o];
                                if (null !== a) {
                                    r.sd[o] = null;
                                    var s = a.Ub();
                                    Ab && Bb("event: " + a.toString()), Cb(s)
                                }
                            }
                            t.tb[i] = null
                        } else
                            n = !1
                }
                n && (t.tb = [])
            }
            function wb(t) {
                this.qa = t, this.sd = []
            }
            function D(t, e, n, i) {
                this.type = t, this.Ja = e, this.Ya = n, this.Je = i, this.Nd = void 0
            }
            function Db(t) {
                return new D(Eb, t)
            }
            function Fb(t, e, n, i) {
                this.te = e, this.Wd = n, this.Nd = i, this.rd = t
            }
            function Gb(t, e, n) {
                this.te = t, this.error = e, this.path = n
            }
            function sb(t, e, n) {
                this.B = t, this.$ = e, this.Tb = n
            }
            function Hb(t) {
                return t.$
            }
            function rb(t, e) {
                return t.$ && !t.Tb || t.B.Ha(e)
            }
            function Ib(t) {
                this.dg = t, this.Ad = null
            }
            function Jb(t, e) {
                this.Mf = {}, this.Yd = new Ib(t), this.ca = e;
                var n = 1e4 + 2e4 * Math.random();
                setTimeout(q(this.Hf, this), Math.floor(n))
            }
            function Kb() {
                this.Dc = {}
            }
            function Lb(t, e, i) {
                n(i) || (i = 1), u(t.Dc, e) || (t.Dc[e] = 0), t.Dc[e] += i
            }
            function Ob(t) {
                return t = t.toString(), Mb[t] || (Mb[t] = new Kb), Mb[t]
            }
            function Pb(t, e) {
                var n = t.toString();
                return Nb[n] || (Nb[n] = e()), Nb[n]
            }
            function E(t, e) {
                this.name = t, this.S = e
            }
            function Qb(t, e) {
                return new E(t, e)
            }
            function Rb(t, e) {
                return Sb(t.name, e.name)
            }
            function Tb(t, e) {
                return Sb(t, e)
            }
            function Ub(t, e, n) {
                this.type = Vb, this.source = t, this.path = e, this.Ia = n
            }
            function Wb(t, e) {
                this.type = Xb, this.source = Yb, this.path = t, this.Ve = e
            }
            function Zb(t, e) {
                this.type = $b, this.source = t, this.path = e
            }
            function ac(t, e) {
                this.La = t, this.xa = e ? e : bc
            }
            function cc(t, e) {
                for (var n, i = t.xa, r = null; !i.e(); ) {
                    if (n = t.La(e, i.key), 0 === n) {
                        if (i.left.e())
                            return r ? r.key : null;
                        for (i = i.left; !i.right.e(); )
                            i = i.right;
                        return i.key
                    }
                    0 > n ? i = i.left : n > 0 && (r = i, i = i.right)
                }
                throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?")
            }
            function dc(t, e, n, i, r) {
                for (this.Rd = r || null, this.Ee = i, this.Pa = [], r = 1; !t.e(); )
                    if (r = e ? n(t.key, e) : 1, i && (r *= -1), 0 > r)
                        t = this.Ee ? t.left : t.right;
                    else {
                        if (0 === r) {
                            this.Pa.push(t);
                            break
                        }
                        this.Pa.push(t), t = this.Ee ? t.right : t.left
                    }
            }
            function H(t) {
                if (0 === t.Pa.length)
                    return null;
                var e, n = t.Pa.pop();
                if (e = t.Rd ? t.Rd(n.key, n.value) : {key: n.key, value: n.value}, t.Ee)
                    for (n = n.left; !n.e(); )
                        t.Pa.push(n), n = n.right;
                else
                    for (n = n.right; !n.e(); )
                        t.Pa.push(n), n = n.left;
                return e
            }
            function ec(t) {
                if (0 === t.Pa.length)
                    return null;
                var e;
                return e = t.Pa, e = e[e.length - 1], t.Rd ? t.Rd(e.key, e.value) : {key: e.key, value: e.value}
            }
            function fc(t, e, n, i, r) {
                this.key = t, this.value = e, this.color = null != n ? n : !0, this.left = null != i ? i : bc, this.right = null != r ? r : bc
            }
            function gc(t) {
                return t.left.e() ? t : gc(t.left)
            }
            function ic(t) {
                return t.left.e() ? bc : (t.left.fa() || t.left.left.fa() || (t = jc(t)), t = t.X(null, null, null, ic(t.left), null), hc(t))
            }
            function hc(t) {
                return t.right.fa() && !t.left.fa() && (t = mc(t)), t.left.fa() && t.left.left.fa() && (t = kc(t)), t.left.fa() && t.right.fa() && (t = lc(t)), t
            }
            function jc(t) {
                return t = lc(t), t.right.left.fa() && (t = t.X(null, null, null, null, kc(t.right)), t = mc(t), t = lc(t)), t
            }
            function mc(t) {
                return t.right.X(null, null, t.color, t.X(null, null, !0, null, t.right.left), null)
            }
            function kc(t) {
                return t.left.X(null, null, t.color, null, t.X(null, null, !0, t.left.right, null))
            }
            function lc(t) {
                return t.X(null, null, !t.color, t.left.X(null, null, !t.left.color, null, null), t.right.X(null, null, !t.right.color, null, null))
            }
            function nc() {}
            function oc(t, e) {
                return t && "object" == typeof t ? (J(".sv"in t, "Unexpected leaf node or priority contents"), e[t[".sv"]]) : t
            }
            function pc(t, e) {
                var n = new qc;
                return rc(t, new K(""), function (t, i) {
                    n.mc(t, sc(i, e))
                }), n
            }
            function sc(t, e) {
                var n, i = t.A().K(), i = oc(i, e);
                if (t.N()) {
                    var r = oc(t.Ba(), e);
                    return r !== t.Ba() || i !== t.A().K() ? new tc(r, L(i)) : t
                }
                return n = t, i !== t.A().K() && (n = n.da(new tc(i))), t.U(M, function (t, i) {
                    var r = sc(i, e);
                    r !== i && (n = n.Q(t, r))
                }), n
            }
            function K(t, e) {
                if (1 == arguments.length) {
                    this.o = t.split("/");
                    for (var n = 0, i = 0; i < this.o.length; i++)
                        0 < this.o[i].length && (this.o[n] = this.o[i], n++);
                    this.o.length = n, this.Y = 0
                } else
                    this.o = t, this.Y = e
            }
            function N(t, e) {
                var n = O(t);
                if (null === n)
                    return e;
                if (n === O(e))
                    return N(G(t), G(e));
                throw Error("INTERNAL ERROR: innerPath (" + e + ") is not within outerPath (" + t + ")")
            }
            function O(t) {
                return t.Y >= t.o.length ? null : t.o[t.Y]
            }
            function uc(t) {
                return t.o.length - t.Y
            }
            function G(t) {
                var e = t.Y;
                return e < t.o.length && e++, new K(t.o, e)
            }
            function vc(t) {
                return t.Y < t.o.length ? t.o[t.o.length - 1] : null
            }
            function wc(t, e) {
                this.Qa = t.slice(), this.Ea = Math.max(1, this.Qa.length), this.kf = e;
                for (var n = 0; n < this.Qa.length; n++)
                    this.Ea += xc(this.Qa[n]);
                yc(this)
            }
            function yc(t) {
                if (768 < t.Ea)
                    throw Error(t.kf + "has a key path longer than 768 bytes (" + t.Ea + ").");
                if (32 < t.Qa.length)
                    throw Error(t.kf + "path specified exceeds the maximum depth that can be written (32) or object contains a cycle " + zc(t))
            }
            function zc(t) {
                return 0 == t.Qa.length ? "" : "in property '" + t.Qa.join(".") + "'"
            }
            function Ac() {
                this.wc = {}
            }
            function Bc(t) {
                this.Ec = t, this.Md = "firebase:"
            }
            function Cc(t) {
                try {
                    if ("undefined" != typeof window && "undefined" != typeof window[t]) {
                        var e = window[t];
                        return e.setItem("firebase:sentinel", "cache"), e.removeItem("firebase:sentinel"), new Bc(e)
                    }
                } catch (n) {
                }
                return new Ac
            }
            function Ec(t, e, n, i, r) {
                this.host = t.toLowerCase(), this.domain = this.host.substr(this.host.indexOf(".") + 1), this.lb = e, this.Cb = n, this.Tg = i, this.Ld = r || "", this.Oa = Dc.get("host:" + t) || this.host
            }
            function Fc(t, e) {
                e !== t.Oa && (t.Oa = e, "s-" === t.Oa.substr(0, 2) && Dc.set("host:" + t.host, t.Oa))
            }
            function J(t, e) {
                if (!t)
                    throw Hc(e)
            }
            function Hc(t) {
                return Error("Firebase (2.2.4) INTERNAL ASSERT FAILED: " + t)
            }
            function Ic(t) {
                try {
                    var e;
                    if ("undefined" != typeof atob)
                        e = atob(t);
                    else {
                        gb();
                        for (var n = eb, i = [], r = 0; r < t.length; ) {
                            var o = n[t.charAt(r++)], a = r < t.length ? n[t.charAt(r)] : 0;
                            ++r;
                            var s = r < t.length ? n[t.charAt(r)] : 64;
                            ++r;
                            var u = r < t.length ? n[t.charAt(r)] : 64;
                            if (++r, null == o || null == a || null == s || null == u)
                                throw Error();
                            i.push(o << 2 | a >> 4), 64 != s && (i.push(a << 4 & 240 | s >> 2), 64 != u && i.push(s << 6 & 192 | u))
                        }
                        if (8192 > i.length)
                            e = String.fromCharCode.apply(null, i);
                        else {
                            for (t = "", n = 0; n < i.length; n += 8192)
                                t += String.fromCharCode.apply(null, Wa(i, n, n + 8192));
                            e = t
                        }
                    }
                    return e
                } catch (h) {
                    Bb("base64Decode failed: ", h)
                }
                return null
            }
            function Jc(t) {
                var e = Kc(t);
                t = new La, t.update(e);
                var e = [], n = 8 * t.be;
                56 > t.$b ? t.update(t.Id, 56 - t.$b) : t.update(t.Id, t.Wa - (t.$b - 56));
                for (var i = t.Wa - 1; i >= 56; i--)
                    t.le[i] = 255 & n, n /= 256;
                for (Ma(t, t.le), i = n = 0; 5 > i; i++)
                    for (var r = 24; r >= 0; r -= 8)
                        e[n] = t.R[i] >> r & 255, ++n;
                return fb(e)
            }
            function Lc(t) {
                for (var e = "", n = 0; n < arguments.length; n++)
                    e = fa(arguments[n]) ? e + Lc.apply(null, arguments[n]) : "object" == typeof arguments[n] ? e + B(arguments[n]) : e + arguments[n], e += " ";
                return e
            }
            function Bb(t) {
                if (!0 === Mc && (Mc = !1, null === Ab && !0 === P.get("logging_enabled") && Nc(!0)), Ab) {
                    var e = Lc.apply(null, arguments);
                    Ab(e)
                }
            }
            function Oc(t) {
                return function () {
                    Bb(t, arguments)
                }
            }
            function Pc(t) {
                if ("undefined" != typeof console) {
                    var e = "FIREBASE INTERNAL ERROR: " + Lc.apply(null, arguments);
                    "undefined" != typeof console.error ? console.error(e) : console.log(e)
                }
            }
            function Qc(t) {
                var e = Lc.apply(null, arguments);
                throw Error("FIREBASE FATAL ERROR: " + e)
            }
            function Q(t) {
                if ("undefined" != typeof console) {
                    var e = "FIREBASE WARNING: " + Lc.apply(null, arguments);
                    "undefined" != typeof console.warn ? console.warn(e) : console.log(e)
                }
            }
            function Rc(t) {
                var e = "", n = "", i = "", r = "", o = !0, a = "https", s = 443;
                if (p(t)) {
                    var u = t.indexOf("//");
                    for (u >= 0 && (a = t.substring(0, u - 1), t = t.substring(u + 2)), u = t.indexOf("/"), - 1 === u && (u = t.length), e = t.substring(0, u), r = "", t = t.substring(u).split("/"), u = 0; u < t.length; u++)
                        if (0 < t[u].length) {
                            var h = t[u];
                            try {
                                h = decodeURIComponent(h.replace(/\+/g, " "))
                            } catch (c) {
                            }
                            r += "/" + h
                        }
                    t = e.split("."), 3 === t.length ? (n = t[1], i = t[0].toLowerCase()) : 2 === t.length && (n = t[0]), u = e.indexOf(":"), u >= 0 && (o = "https" === a || "wss" === a, s = e.substring(u + 1), isFinite(s) && (s = String(s)), s = p(s) ? /^\s*-?0x/i.test(s) ? parseInt(s, 16) : parseInt(s, 10) : 0 / 0)
                }
                return{host: e, port: s, domain: n, Qg: i, lb: o, scheme: a, Zc: r}
            }
            function Sc(t) {
                return ga(t) && (t != t || t == Number.POSITIVE_INFINITY || t == Number.NEGATIVE_INFINITY)
            }
            function Tc(t) {
                if ("complete" === document.readyState)
                    t();
                else {
                    var e = !1, n = function () {
                        document.body ? e || (e = !0, t()) : setTimeout(n, Math.floor(10))
                    };
                    document.addEventListener ? (document.addEventListener("DOMContentLoaded", n, !1), window.addEventListener("load", n, !1)) : document.attachEvent && (document.attachEvent("onreadystatechange", function () {
                        "complete" === document.readyState && n()
                    }), window.attachEvent("onload", n))
                }
            }
            function Sb(t, e) {
                if (t === e)
                    return 0;
                if ("[MIN_NAME]" === t || "[MAX_NAME]" === e)
                    return -1;
                if ("[MIN_NAME]" === e || "[MAX_NAME]" === t)
                    return 1;
                var n = Uc(t), i = Uc(e);
                return null !== n ? null !== i ? 0 == n - i ? t.length - e.length : n - i : -1 : null !== i ? 1 : e > t ? -1 : 1
            }
            function Vc(t, e) {
                if (e && t in e)
                    return e[t];
                throw Error("Missing required key (" + t + ") in object: " + B(e))
            }
            function Wc(t) {
                if ("object" != typeof t || null === t)
                    return B(t);
                var e, n = [];
                for (e in t)
                    n.push(e);
                n.sort(), e = "{";
                for (var i = 0; i < n.length; i++)
                    0 !== i && (e += ","), e += B(n[i]), e += ":", e += Wc(t[n[i]]);
                return e + "}"
            }
            function Xc(t, e) {
                if (t.length <= e)
                    return[t];
                for (var n = [], i = 0; i < t.length; i += e)
                    n.push(i + e > t ? t.substring(i, t.length) : t.substring(i, i + e));
                return n
            }
            function Yc(t, e) {
                if (ea(t))
                    for (var n = 0; n < t.length; ++n)
                        e(n, t[n]);
                else
                    r(t, e)
            }
            function Zc(t) {
                J(!Sc(t), "Invalid JSON number");
                var e, n, i, r;
                for (0 === t?(i = n = 0, e = - (1 / 0) === 1 / t?1:0):(e = 0 > t, t = Math.abs(t), t >= Math.pow(2, - 1022)?(i = Math.min(Math.floor(Math.log(t) / Math.LN2), 1023), n = i + 1023, i = Math.round(t * Math.pow(2, 52 - i) - Math.pow(2, 52))):(n = 0, i = Math.round(t / Math.pow(2, - 1074)))), r = [], t = 52; t; --t)
                    r.push(i % 2 ? 1 : 0), i = Math.floor(i / 2);
                for (t = 11; t; --t)
                    r.push(n % 2 ? 1 : 0), n = Math.floor(n / 2);
                for (r.push(e?1:0), r.reverse(), e = r.join(""), n = "", t = 0; 64 > t; t += 8)
                    i = parseInt(e.substr(t, 8), 2).toString(16), 1 === i.length && (i = "0" + i), n += i;
                return n.toLowerCase()
            }
            function Uc(t) {
                return $c.test(t) && (t = Number(t), t >= -2147483648 && 2147483647 >= t) ? t : null
            }
            function Cb(t) {
                try {
                    t()
                } catch (e) {
                    setTimeout(function () {
                        throw Q("Exception was thrown by user callback.", e.stack || ""), e
                    }, Math.floor(0))
                }
            }
            function R(t, e) {
                if (ha(t)) {
                    var n = Array.prototype.slice.call(arguments, 1).slice();
                    Cb(function () {
                        t.apply(null, n)
                    })
                }
            }
            function Kc(t) {
                for (var e = [], n = 0, i = 0; i < t.length; i++) {
                    var r = t.charCodeAt(i);
                    r >= 55296 && 56319 >= r && (r -= 55296, i++, J(i < t.length, "Surrogate pair missing trail surrogate."), r = 65536 + (r << 10) + (t.charCodeAt(i) - 56320)), 128 > r ? e[n++] = r : (2048 > r ? e[n++] = r >> 6 | 192 : (65536 > r ? e[n++] = r >> 12 | 224 : (e[n++] = r >> 18 | 240, e[n++] = r >> 12 & 63 | 128), e[n++] = r >> 6 & 63 | 128), e[n++] = 63 & r | 128)
                }
                return e
            }
            function xc(t) {
                for (var e = 0, n = 0; n < t.length; n++) {
                    var i = t.charCodeAt(n);
                    128 > i ? e++ : 2048 > i ? e += 2 : i >= 55296 && 56319 >= i ? (e += 4, n++) : e += 3
                }
                return e
            }
            function ad(t) {
                var e = {}, n = {}, i = {}, r = "";
                try {
                    var o = t.split("."), e = mb(Ic(o[0]) || ""), n = mb(Ic(o[1]) || ""), r = o[2], i = n.d || {};
                    delete n.d
                } catch (a) {
                }
                return{Wg: e, Ac: n, data: i, Ng: r}
            }
            function bd(t) {
                return t = ad(t).Ac, "object" == typeof t && t.hasOwnProperty("iat") ? w(t, "iat") : null
            }
            function cd(t) {
                t = ad(t);
                var e = t.Ac;
                return!!t.Ng && !!e && "object" == typeof e && e.hasOwnProperty("iat")
            }
            function dd(t) {
                this.V = t, this.g = t.n.g
            }
            function ed(t, e, n, i) {
                var r = [], o = [];
                return Oa(e, function (e) {
                    "child_changed" === e.type && t.g.xd(e.Je, e.Ja) && o.push(new D("child_moved", e.Ja, e.Ya))
                }), fd(t, r, "child_removed", e, i, n), fd(t, r, "child_added", e, i, n), fd(t, r, "child_moved", o, i, n), fd(t, r, "child_changed", e, i, n), fd(t, r, Eb, e, i, n), r
            }
            function fd(t, e, n, i, r, o) {
                i = Pa(i, function (t) {
                    return t.type === n
                }), Xa(i, q(t.eg, t)), Oa(i, function (n) {
                    var i = gd(t, n, o);
                    Oa(r, function (r) {
                        r.Jf(n.type) && e.push(r.createEvent(i, t.V))
                    })
                })
            }
            function gd(t, e, n) {
                return"value" !== e.type && "child_removed" !== e.type && (e.Nd = n.qf(e.Ya, e.Ja, t.g)), e
            }
            function hd() {
                this.eb = {}
            }
            function id(t, e) {
                var n = e.type, i = e.Ya;
                J("child_added" == n || "child_changed" == n || "child_removed" == n, "Only child changes supported for tracking"), J(".priority" !== i, "Only non-priority child changes can be tracked.");
                var r = w(t.eb, i);
                if (r) {
                    var o = r.type;
                    if ("child_added" == n && "child_removed" == o)
                        t.eb[i] = new D("child_changed", e.Ja, i, r.Ja);
                    else if ("child_removed" == n && "child_added" == o)
                        delete t.eb[i];
                    else if ("child_removed" == n && "child_changed" == o)
                        t.eb[i] = new D("child_removed", r.Je, i);
                    else if ("child_changed" == n && "child_added" == o)
                        t.eb[i] = new D("child_added", e.Ja, i);
                    else {
                        if ("child_changed" != n || "child_changed" != o)
                            throw Hc("Illegal combination of changes: " + e + " occurred after " + r);
                        t.eb[i] = new D("child_changed", e.Ja, i, r.Je)
                    }
                } else
                    t.eb[i] = e
            }
            function jd(t, e, n) {
                this.Pb = t, this.qb = e, this.sb = n || null
            }
            function kd(t, e, n) {
                this.ga = t, this.qb = e, this.sb = n
            }
            function ld(t) {
                this.g = t
            }
            function md(t) {
                this.Ae = new ld(t.g), this.g = t.g;
                var e;
                t.la ? (e = nd(t), e = t.g.Oc(od(t), e)) : e = t.g.Sc(), this.dd = e, t.na ? (e = pd(t), t = t.g.Oc(qd(t), e)) : t = t.g.Pc(), this.Fc = t
            }
            function rd(t) {
                this.ra = new md(t), this.g = t.g, J(t.ia, "Only valid if limit has been set"), this.ja = t.ja, this.Jb = !sd(t)
            }
            function td(t, e, n, i, r, o) {
                var a;
                if (t.Jb) {
                    var s = ud(t.g);
                    a = function (t, e) {
                        return s(e, t)
                    }
                } else
                    a = ud(t.g);
                J(e.Db() == t.ja, "");
                var u = new E(n, i), h = t.Jb ? wd(e, t.g) : xd(e, t.g), c = t.ra.matches(u);
                if (e.Ha(n)) {
                    var f = e.M(n), h = r.xe(t.g, h, t.Jb);
                    return null != h && h.name == n && (h = r.xe(t.g, h, t.Jb)), r = null == h ? 1 : a(h, u), c && !i.e() && r >= 0 ? (null != o && id(o, new D("child_changed", i, n, f)), e.Q(n, i)) : (null != o && id(o, new D("child_removed", f, n)), e = e.Q(n, C), null != h && t.ra.matches(h) ? (null != o && id(o, new D("child_added", h.S, h.name)), e.Q(h.name, h.S)) : e)
                }
                return i.e() ? e : c && 0 <= a(h, u) ? (null != o && (id(o, new D("child_removed", h.S, h.name)), id(o, new D("child_added", i, n))), e.Q(n, i).Q(h.name, C)) : e
            }
            function yd(t, e) {
                this.he = t, this.cg = e
            }
            function zd(t) {
                this.I = t
            }
            function Hd(t, e, n, i, r, o) {
                var a = e.D;
                if (null != i.sc(n))
                    return e;
                var s;
                if (n.e())
                    J(Hb(e.u()), "If change path is empty, we must have complete server data"), e.u().Tb ? (r = tb(e), i = i.xc(r instanceof T ? r : C)) : i = i.ua(tb(e)), o = t.I.ta(e.D.j(), i, o);
                else {
                    var u = O(n);
                    if (".priority" == u)
                        J(1 == uc(n), "Can't have a priority with additional path components"), o = a.j(), s = e.u().j(), i = i.hd(n, o, s), o = null != i ? t.I.da(o, i) : a.j();
                    else {
                        var h = G(n);
                        rb(a, u) ? (s = e.u().j(), i = i.hd(n, a.j(), s), i = null != i ? a.j().M(u).G(h, i) : a.j().M(u)) : i = i.Xa(u, e.u()), o = null != i ? t.I.G(a.j(), u, i, r, o) : a.j()
                    }
                }
                return Fd(e, o, a.$ || n.e(), t.I.Ga())
            }
            function Bd(t, e, n, i, r, o, a, s) {
                var u = e.u();
                if (a = a ? t.I : t.I.Vb(), n.e())
                    i = a.ta(u.j(), i, null);
                else if (a.Ga() && !u.Tb)
                    i = u.j().G(n, i), i = a.ta(u.j(), i, null);
                else {
                    var h = O(n);
                    if ((n.e() ? !u.$ || u.Tb : !rb(u, O(n))) && 1 < uc(n))
                        return e;
                    i = u.j().M(h).G(G(n), i), i = ".priority" == h ? a.da(u.j(), i) : a.G(u.j(), h, i, pb, null)
                }
                return u = u.$ || n.e(), e = new Id(e.D, new sb(i, u, a.Ga())), Hd(t, e, n, r, new qb(r, e, o), s)
            }
            function Ad(t, e, n, i, r, o, a) {
                var s = e.D;
                if (r = new qb(r, e, o), n.e())
                    a = t.I.ta(e.D.j(), i, a), t = Fd(e, a, !0, t.I.Ga());
                else if (o = O(n), ".priority" === o)
                    a = t.I.da(e.D.j(), i), t = Fd(e, a, s.$, s.Tb);
                else {
                    var u = G(n);
                    if (n = s.j().M(o), !u.e()) {
                        var h = r.pf(o);
                        i = null != h ? ".priority" === vc(u) && h.oa(u.parent()).e() ? h : h.G(u, i) : C
                    }
                    n.Z(i) ? t = e : (a = t.I.G(s.j(), o, i, r, a), t = Fd(e, a, s.$, t.I.Ga()))
                }
                return t
            }
            function Dd(t, e, n, i, r, o, a) {
                var s = e;
                return Kd(i, function (i, u) {
                    var h = n.w(i);
                    rb(e.D, O(h)) && (s = Ad(t, s, h, u, r, o, a))
                }), Kd(i, function (i, u) {
                    var h = n.w(i);
                    rb(e.D, O(h)) || (s = Ad(t, s, h, u, r, o, a))
                }), s
            }
            function Ld(t, e) {
                return Kd(e, function (e, n) {
                    t = t.G(e, n)
                }), t
            }
            function Ed(t, e, n, i, r, o, a, s) {
                if (e.u().j().e() && !Hb(e.u()))
                    return e;
                var u = e;
                n = n.e() ? i : Md(Nd, n, i);
                var h = e.u().j();
                return n.children.ha(function (n, i) {
                    if (h.Ha(n)) {
                        var c = e.u().j().M(n), c = Ld(c, i);
                        u = Bd(t, u, new K(n), c, r, o, a, s)
                    }
                }), n.children.ha(function (n, i) {
                    var c = !Hb(e.u()) && null == i.value;
                    h.Ha(n) || c || (c = e.u().j().M(n), c = Ld(c, i), u = Bd(t, u, new K(n), c, r, o, a, s))
                }), u
            }
            function Gd(t, e, n, i, r, o) {
                if (null != i.sc(n))
                    return e;
                var a = new qb(i, e, r), s = r = e.D.j();
                if (Hb(e.u())) {
                    if (n.e())
                        r = i.ua(tb(e)), s = t.I.ta(e.D.j(), r, o);
                    else if (".priority" === O(n)) {
                        var u = i.Xa(O(n), e.u());
                        null == u || r.e() || r.A().Z(u) || (s = t.I.da(r, u))
                    } else
                        u = O(n), r = i.Xa(u, e.u()), null != r && (s = t.I.G(e.D.j(), u, r, a, o));
                    r = !0
                } else
                    e.D.$ || n.e() ? (s = r, r = e.D.j(), r.N() || r.U(M, function (n) {
                        var r = i.Xa(n, e.u());
                        null != r && (s = t.I.G(s, n, r, a, o))
                    }), r = e.D.$) : (u = O(n), (1 == uc(n) || rb(e.D, u)) && (n = i.Xa(u, e.u()), null != n && (s = t.I.G(r, u, n, a, o))), r = !1);
                return Fd(e, s, r, t.I.Ga())
            }
            function Od() {}
            function ud(t) {
                return q(t.compare, t)
            }
            function Rd(t) {
                this.bc = t
            }
            function Td() {}
            function Ud() {}
            function Wd() {}
            function Zd() {
                this.Rb = this.na = this.Lb = this.la = this.ia = !1, this.ja = 0, this.Nb = "", this.dc = null, this.xb = "", this.ac = null, this.vb = "", this.g = M
            }
            function sd(t) {
                return"" === t.Nb ? t.la : "l" === t.Nb
            }
            function od(t) {
                return J(t.la, "Only valid if start has been set"), t.dc
            }
            function nd(t) {
                return J(t.la, "Only valid if start has been set"), t.Lb ? t.xb : "[MIN_NAME]"
            }
            function qd(t) {
                return J(t.na, "Only valid if end has been set"), t.ac
            }
            function pd(t) {
                return J(t.na, "Only valid if end has been set"), t.Rb ? t.vb : "[MAX_NAME]"
            }
            function ae(t) {
                var e = new Zd;
                return e.ia = t.ia, e.ja = t.ja, e.la = t.la, e.dc = t.dc, e.Lb = t.Lb, e.xb = t.xb, e.na = t.na, e.ac = t.ac, e.Rb = t.Rb, e.vb = t.vb, e.g = t.g, e
            }
            function be(t, e) {
                var n = ae(t);
                return n.g = e, n
            }
            function ce(t) {
                var e = {};
                if (t.la && (e.sp = t.dc, t.Lb && (e.sn = t.xb)), t.na && (e.ep = t.ac, t.Rb && (e.en = t.vb)), t.ia) {
                    e.l = t.ja;
                    var n = t.Nb;
                    "" === n && (n = sd(t) ? "l" : "r"), e.vf = n
                }
                return t.g !== M && (e.i = t.g.toString()), e
            }
            function de(t) {
                return!(t.la || t.na || t.ia)
            }
            function ee(t) {
                var e = {};
                if (de(t) && t.g == M)
                    return e;
                var n;
                return t.g === M ? n = "$priority" : t.g === Yd ? n = "$value" : (J(t.g instanceof Rd, "Unrecognized index type!"), n = t.g.toString()), e.orderBy = B(n), t.la && (e.startAt = B(t.dc), t.Lb && (e.startAt += "," + B(t.xb))), t.na && (e.endAt = B(t.ac), t.Rb && (e.endAt += "," + B(t.vb))), t.ia && (sd(t) ? e.limitToFirst = t.ja : e.limitToLast = t.ja), e
            }
            function fe(t, e) {
                this.yd = t, this.cc = e
            }
            function ge(t, e, n) {
                var i = na(t.yd, function (i, r) {
                    var o = w(t.cc, r);
                    if (J(o, "Missing index implementation for " + r), i === Pd) {
                        if (o.Hc(e.S)) {
                            for (var a = [], s = n.Wb(Qb), u = H(s); u; )
                                u.name != e.name && a.push(u), u = H(s);
                            return a.push(e), he(a, ud(o))
                        }
                        return Pd
                    }
                    return o = n.get(e.name), a = i, o && (a = a.remove(new E(e.name, o))), a.Na(e, e.S)
                });
                return new fe(i, t.cc)
            }
            function ie(t, e, n) {
                var i = na(t.yd, function (t) {
                    if (t === Pd)
                        return t;
                    var i = n.get(e.name);
                    return i ? t.remove(new E(e.name, i)) : t
                });
                return new fe(i, t.cc)
            }
            function tc(t, e) {
                this.C = t, J(n(this.C) && null !== this.C, "LeafNode shouldn't be created with null/undefined value."), this.ba = e || C, ke(this.ba), this.Bb = null
            }
            function T(t, e, n) {
                this.m = t, (this.ba = e) && ke(this.ba), t.e() && J(!this.ba || this.ba.e(), "An empty node cannot have a priority"), this.wb = n, this.Bb = null
            }
            function wd(t, e) {
                var n;
                return n = (n = oe(t, e)) ? (n = n.Rc()) && n.name : t.m.Rc(), n ? new E(n, t.m.get(n)) : null
            }
            function xd(t, e) {
                var n;
                return n = (n = oe(t, e)) ? (n = n.ec()) && n.name : t.m.ec(), n ? new E(n, t.m.get(n)) : null
            }
            function oe(t, e) {
                return e === Vd ? null : t.wb.get(e.toString())
            }
            function L(t, e) {
                if (null === t)
                    return C;
                var n = null;
                if ("object" == typeof t && ".priority"in t ? n = t[".priority"] : "undefined" != typeof e && (n = e), J(null === n || "string" == typeof n || "number" == typeof n || "object" == typeof n && ".sv"in n, "Invalid priority type found: " + typeof n), "object" == typeof t && ".value"in t && null !== t[".value"] && (t = t[".value"]), "object" != typeof t || ".sv"in t)
                    return new tc(t, L(n));
                if (t instanceof Array) {
                    var i = C, o = t;
                    return r(o, function (t, e) {
                        if (u(o, e) && "." !== e.substring(0, 1)) {
                            var n = L(t);
                            (n.N() || !n.e()) && (i = i.Q(e, n))
                        }
                    }), i.da(L(n))
                }
                var a = [], s = !1, h = t;
                if (hb(h, function (t) {
                    if ("string" != typeof t || "." !== t.substring(0, 1)) {
                        var e = L(h[t]);
                        e.e() || (s = s || !e.A().e(), a.push(new E(t, e)))
                    }
                }), 0 == a.length)
                    return C;
                var c = he(a, Rb, function (t) {
                    return t.name
                }, Tb);
                if (s) {
                    var f = he(a, ud(M));
                    return new T(c, L(n), new fe({".priority": f}, {".priority": M}))
                }
                return new T(c, L(n), je)
            }
            function qe(t) {
                this.count = parseInt(Math.log(t + 1) / pe, 10), this.hf = this.count - 1, this.bg = t + 1 & parseInt(Array(this.count + 1).join("1"), 2)
            }
            function re(t) {
                var e = !(t.bg & 1 << t.hf);
                return t.hf--, e
            }
            function he(t, e, n, i) {
                function r(e, i) {
                    var o = i - e;
                    if (0 == o)
                        return null;
                    if (1 == o) {
                        var a = t[e], s = n ? n(a) : a;
                        return new fc(s, a.S, !1, null, null)
                    }
                    var a = parseInt(o / 2, 10) + e, o = r(e, a), u = r(a + 1, i), a = t[a], s = n ? n(a) : a;
                    return new fc(s, a.S, !1, o, u)
                }
                t.sort(e);
                var o = function (e) {
                    function i(e, i) {
                        var u = s - e, h = s;
                        s -= e;
                        var h = r(u + 1, h), u = t[u], c = n ? n(u) : u, h = new fc(c, u.S, i, null, h);
                        o ? o.left = h : a = h, o = h
                    }
                    for (var o = null, a = null, s = t.length, u = 0; u < e.count; ++u) {
                        var h = re(e), c = Math.pow(2, e.count - (u + 1));
                        h ? i(c, !1) : (i(c, !1), i(c, !0))
                    }
                    return a
                }(new qe(t.length));
                return null !== o ? new ac(i || e, o) : new ac(i || e)
            }
            function le(t) {
                return"number" == typeof t ? "number:" + Zc(t) : "string:" + t
            }
            function ke(t) {
                if (t.N()) {
                    var e = t.K();
                    J("string" == typeof e || "number" == typeof e || "object" == typeof e && u(e, ".sv"), "Priority must be a string or number.")
                } else
                    J(t === Sd || t.e(), "priority of unexpected type.");
                J(t === Sd || t.A().e(), "Priority nodes can't have a priority of their own.")
            }
            function se() {
                T.call(this, new ac(Tb), C, je)
            }
            function Id(t, e) {
                this.D = t, this.Ud = e
            }
            function Fd(t, e, n, i) {
                return new Id(new sb(e, n, i), t.Ud)
            }
            function Jd(t) {
                return t.D.$ ? t.D.j() : null
            }
            function tb(t) {
                return t.Ud.$ ? t.Ud.j() : null
            }
            function te(t, e) {
                this.V = t;
                var n = t.n, i = new ld(n.g), n = de(n) ? new ld(n.g) : n.ia ? new rd(n) : new md(n);
                this.Gf = new zd(n);
                var r = e.u(), o = e.D, a = i.ta(C, r.j(), null), s = n.ta(C, o.j(), null);
                this.Ka = new Id(new sb(s, o.$, n.Ga()), new sb(a, r.$, i.Ga())), this.Za = [], this.ig = new dd(t)
            }
            function ue(t) {
                return t.V
            }
            function we(t, e) {
                var n = t.Ka.D, i = [];
                return n.j().N() || n.j().U(M, function (t, e) {
                    i.push(new D("child_added", e, t))
                }), n.$ && i.push(Db(n.j())), ve(t, i, n.j(), e)
            }
            function ve(t, e, n, i) {
                return ed(t.ig, e, n, i ? [i] : t.Za)
            }
            function xe(t, e, n) {
                this.type = Cd, this.source = t, this.path = e, this.children = n
            }
            function ye(t, e, n, i) {
                this.ve = t, this.of = e, this.Ib = n, this.af = i, J(!i || e, "Tagged queries must be from server.")
            }
            function Ae(t, e) {
                this.f = Oc("p:rest:"), this.H = t, this.Gb = e, this.Fa = null, this.aa = {}
            }
            function Be(t, e) {
                if (n(e))
                    return"tag$" + e;
                var i = t.n;
                return J(de(i) && i.g == M, "should have a tag if it's not a default query."), t.path.toString()
            }
            function Ce(t, e, n, i) {
                n = n || {}, n.format = "export", t.Fa && (n.auth = t.Fa);
                var r = (t.H.lb ? "https://" : "http://") + t.H.host + e + "?" + jb(n);
                t.f("Sending REST request for " + r);
                var o = new XMLHttpRequest;
                o.onreadystatechange = function () {
                    if (i && 4 === o.readyState) {
                        t.f("REST Response for " + r + " received. status:", o.status, "response:", o.responseText);
                        var e = null;
                        if (200 <= o.status && 300 > o.status) {
                            try {
                                e = mb(o.responseText)
                            } catch (n) {
                                Q("Failed to parse JSON response for " + r + ": " + o.responseText)
                            }
                            i(null, e)
                        } else
                            401 !== o.status && 404 !== o.status && Q("Got unsuccessful REST response for " + r + " Status: " + o.status), i(o.status);
                        i = null
                    }
                }, o.open("GET", r, !0), o.send()
            }
            function De(t, e) {
                this.value = t, this.children = e || Ee
            }
            function Fe(t) {
                var e = Nd;
                return r(t, function (t, n) {
                    e = e.set(new K(n), t)
                }), e
            }
            function Ge(t, e, n) {
                if (null != t.value && n(t.value))
                    return{path: F, value: t.value};
                if (e.e())
                    return null;
                var i = O(e);
                return t = t.children.get(i), null !== t ? (e = Ge(t, G(e), n), null != e ? {path: new K(i).w(e.path), value: e.value} : null) : null
            }
            function He(t, e) {
                return Ge(t, e, function () {
                    return!0
                })
            }
            function Md(t, e, n) {
                if (e.e())
                    return n;
                var i = O(e);
                return e = Md(t.children.get(i) || Nd, G(e), n), i = e.e() ? t.children.remove(i) : t.children.Na(i, e), new De(t.value, i)
            }
            function Ie(t, e) {
                return Je(t, F, e)
            }
            function Je(t, e, n) {
                var i = {};
                return t.children.ha(function (t, r) {
                    i[t] = Je(r, e.w(t), n)
                }), n(e, t.value, i)
            }
            function Ke(t, e, n) {
                return Le(t, e, F, n)
            }
            function Le(t, e, n, i) {
                var r = t.value ? i(n, t.value) : !1;
                return r ? r : e.e() ? null : (r = O(e), (t = t.children.get(r)) ? Le(t, G(e), n.w(r), i) : null)
            }
            function Me(t, e, n) {
                var i = F;
                if (!e.e()) {
                    var r = !0;
                    t.value && (r = n(i, t.value)), !0 === r && (r = O(e), (t = t.children.get(r)) && Ne(t, G(e), i.w(r), n))
                }
            }
            function Ne(t, e, n, i) {
                if (e.e())
                    return t;
                t.value && i(n, t.value);
                var r = O(e);
                return(t = t.children.get(r)) ? Ne(t, G(e), n.w(r), i) : Nd
            }
            function Kd(t, e) {
                Oe(t, F, e)
            }
            function Oe(t, e, n) {
                t.children.ha(function (t, i) {
                    Oe(i, e.w(t), n)
                }), t.value && n(e, t.value)
            }
            function Pe(t, e) {
                t.children.ha(function (t, n) {
                    n.value && e(t, n.value)
                })
            }
            function Qe(t) {
                this.W = t
            }
            function Se(t, e, n) {
                if (e.e())
                    return new Qe(new De(n));
                var i = He(t.W, e);
                if (null != i) {
                    var r = i.path, i = i.value;
                    return e = N(r, e), i = i.G(e, n), new Qe(t.W.set(r, i))
                }
                return t = Md(t.W, e, new De(n)), new Qe(t)
            }
            function Te(t, e, n) {
                var i = t;
                return hb(n, function (t, n) {
                    i = Se(i, e.w(t), n)
                }), i
            }
            function Ue(t, e) {
                var n = He(t.W, e);
                return null != n ? t.W.get(n.path).oa(N(n.path, e)) : null
            }
            function Ve(t) {
                var e = [], n = t.W.value;
                return null != n ? n.N() || n.U(M, function (t, n) {
                    e.push(new E(t, n))
                }) : t.W.children.ha(function (t, n) {
                    null != n.value && e.push(new E(t, n.value))
                }), e
            }
            function We(t, e) {
                if (e.e())
                    return t;
                var n = Ue(t, e);
                return new Qe(null != n ? new De(n) : t.W.subtree(e))
            }
            function Xe(t, e, n) {
                if (null != e.value)
                    return n.G(t, e.value);
                var i = null;
                return e.children.ha(function (e, r) {
                    ".priority" === e ? (J(null !== r.value, "Priority writes must always be leaf nodes"), i = r.value) : n = Xe(t.w(e), r, n)
                }), n.oa(t).e() || null === i || (n = n.G(t.w(".priority"), i)), n
            }
            function Ye() {
                this.T = Re, this.za = [], this.Lc = -1
            }
            function Ze(t, e) {
                return t.Ia ? t.path.contains(e) : !!ua(t.children, function (n, i) {
                    return t.path.w(i).contains(e)
                })
            }
            function af(t) {
                return t.visible
            }
            function $e(t, e, n) {
                for (var i = Re, r = 0; r < t.length; ++r) {
                    var o = t[r];
                    if (e(o)) {
                        var a = o.path;
                        if (o.Ia)
                            n.contains(a) ? (a = N(n, a), i = Se(i, a, o.Ia)) : a.contains(n) && (a = N(a, n), i = Se(i, F, o.Ia.oa(a)));
                        else {
                            if (!o.children)
                                throw Hc("WriteRecord should have .snap or .children");
                            n.contains(a) ? (a = N(n, a), i = Te(i, a, o.children)) : a.contains(n) && (a = N(a, n), a.e() ? i = Te(i, F, o.children) : (o = w(o.children, O(a))) && (o = o.oa(G(a)), i = Se(i, F, o)))
                        }
                    }
                }
                return i
            }
            function bf(t, e) {
                this.Mb = t, this.W = e
            }
            function cf() {
                this.ya = {}
            }
            function ef(t) {
                return Pa(ra(t.ya), function (t) {
                    return!de(t.V.n)
                })
            }
            function ff(t, e) {
                if (de(e.n))
                    return df(t);
                var n = e.wa();
                return w(t.ya, n)
            }
            function df(t) {
                return va(t.ya, function (t) {
                    return de(t.V.n)
                }) || null
            }
            function gf(t) {
                this.sa = Nd, this.Hb = new Ye, this.$e = {}, this.kc = {}, this.Mc = t
            }
            function hf(t, e, i, r, o) {
                var a = t.Hb, s = o;
                return J(r > a.Lc, "Stacking an older write on top of newer ones"), n(s) || (s = !0), a.za.push({path: e, Ia: i, ie: r, visible: s}), s && (a.T = Se(a.T, e, i)), a.Lc = r, o ? jf(t, new Ub(Yb, e, i)) : []
            }
            function kf(t, e, n, i) {
                var r = t.Hb;
                return J(i > r.Lc, "Stacking an older merge on top of newer ones"), r.za.push({path: e, children: n, ie: i, visible: !0}), r.T = Te(r.T, e, n), r.Lc = i, n = Fe(n), jf(t, new xe(Yb, e, n))
            }
            function lf(t, e, n) {
                return n = n || !1, e = t.Hb.Od(e), null == e ? [] : jf(t, new Wb(e, n))
            }
            function mf(t, e, n) {
                return n = Fe(n), jf(t, new xe(ze, e, n))
            }
            function nf(t, e, n, i) {
                if (i = of(t, i), null != i) {
                    var r = pf(i);
                    return i = r.path, r = r.Ib, e = N(i, e), n = new Ub(new ye(!1, !0, r, !0), e, n), qf(t, i, n)
                }
                return[]
            }
            function rf(t, e, n, i) {
                if (i = of(t, i)) {
                    var r = pf(i);
                    return i = r.path, r = r.Ib, e = N(i, e), n = Fe(n), n = new xe(new ye(!1, !0, r, !0), e, n), qf(t, i, n)
                }
                return[]
            }
            function vf(t) {
                return Ie(t, function (t, e, n) {
                    if (e && null != df(e))
                        return[df(e)];
                    var i = [];
                    return e && (i = ef(e)), r(n, function (t) {
                        i = i.concat(t)
                    }), i
                })
            }
            function yf(t, e) {
                for (var n = 0; n < e.length; ++n) {
                    var i = e[n];
                    if (!de(i.n)) {
                        var i = sf(i), r = t.kc[i];
                        delete t.kc[i], delete t.$e["_" + r]
                    }
                }
            }
            function uf(t, e, n) {
                var i = e.path, o = xf(t, e);
                if (n = wf(t, n), e = t.Mc.Xe(e, o, n.ud, n.J), i = t.sa.subtree(i), o)
                    J(null == df(i.value), "If we're adding a query, it shouldn't be shadowed");
                else
                    for (o = Ie(i, function (t, e, n) {
                        if (!t.e() && e && null != df(e))
                            return[ue(df(e))];
                        var i = [];
                        return e && (i = i.concat(Qa(ef(e), function (t) {
                            return t.V
                        }))), r(n, function (t) {
                            i = i.concat(t)
                        }), i
                    }), i = 0; i < o.length; ++i)
                        n = o[i], t.Mc.Zd(n, xf(t, n));
                return e
            }
            function wf(t, e) {
                var n = e.V, i = xf(t, n);
                return{ud: function () {
                        return(e.u() || C).hash()
                    }, J: function (e) {
                        if ("ok" === e) {
                            if (i) {
                                var r = n.path;
                                if (e = of(t, i)) {
                                    var o = pf(e);
                                    e = o.path, o = o.Ib, r = N(e, r), r = new Zb(new ye(!1, !0, o, !0), r), e = qf(t, e, r)
                                } else
                                    e = []
                            } else
                                e = jf(t, new Zb(ze, n.path));
                            return e
                        }
                        return r = "Unknown Error", "too_big" === e ? r = "The data requested exceeds the maximum size that can be accessed with a single request." : "permission_denied" == e ? r = "Client doesn't have permission to access the desired data." : "unavailable" == e && (r = "The service is unavailable"), r = Error(e + ": " + r), r.code = e.toUpperCase(), t.kb(n, null, r)
                    }}
            }
            function sf(t) {
                return t.path.toString() + "$" + t.wa()
            }
            function pf(t) {
                var e = t.indexOf("$");
                return J(-1 !== e && e < t.length - 1, "Bad queryKey."), {Ib: t.substr(e + 1), path: new K(t.substr(0, e))}
            }
            function of(t, e) {
                var n = t.$e, i = "_" + e;
                return i in n ? n[i] : void 0
            }
            function xf(t, e) {
                var n = sf(e);
                return w(t.kc, n)
            }
            function qf(t, e, n) {
                var i = t.sa.get(e);
                return J(i, "Missing sync point for query tag that we're tracking"), i.bb(n, new bf(e, t.Hb), null)
            }
            function jf(t, e) {
                return zf(t, e, t.sa, null, new bf(F, t.Hb))
            }
            function zf(t, e, n, i, r) {
                if (e.path.e())
                    return Af(t, e, n, i, r);
                var o = n.get(F);
                null == i && null != o && (i = o.hb(F));
                var a = [], s = O(e.path), u = e.Wc(s);
                if ((n = n.children.get(s)) && u)
                    var h = i ? i.M(s) : null, s = r.w(s), a = a.concat(zf(t, u, n, h, s));
                return o && (a = a.concat(o.bb(e, r, i))), a
            }
            function Af(t, e, n, i, r) {
                var o = n.get(F);
                null == i && null != o && (i = o.hb(F));
                var a = [];
                return n.children.ha(function (n, o) {
                    var s = i ? i.M(n) : null, u = r.w(n), h = e.Wc(n);
                    h && (a = a.concat(Af(t, h, o, s, u)))
                }), o && (a = a.concat(o.bb(e, r, i))), a
            }
            function Bf() {
                this.children = {}, this.kd = 0, this.value = null
            }
            function Cf(t, e, n) {
                this.Dd = t ? t : "", this.Yc = e ? e : null, this.B = n ? n : new Bf
            }
            function Df(t, e) {
                for (var n, i = e instanceof K ? e : new K(e), r = t; null !== (n = O(i)); )
                    r = new Cf(n, r, w(r.B.children, n) || new Bf), i = G(i);
                return r
            }
            function Ef(t, e) {
                J("undefined" != typeof e, "Cannot set value to undefined"), t.B.value = e, Ff(t)
            }
            function Gf(t, e, n, i) {
                n && !i && e(t), t.U(function (t) {
                    Gf(t, e, !0, i)
                }), n && i && e(t)
            }
            function Hf(t, e) {
                for (var n = t.parent(); null !== n && !e(n); )
                    n = n.parent()
            }
            function Ff(t) {
                if (null !== t.Yc) {
                    var e = t.Yc, n = t.Dd, i = t.e(), r = u(e.B.children, n);
                    i && r ? (delete e.B.children[n], e.B.kd--, Ff(e)) : i || r || (e.B.children[n] = t.B, e.B.kd++, Ff(e))
                }
            }
            function If(t) {
                J(ea(t) && 0 < t.length, "Requires a non-empty array"), this.Uf = t, this.Nc = {}
            }
            function Jf(t, e) {
                J(Ta(t.Uf, function (t) {
                    return t === e
                }), "Unknown event: " + e)
            }
            function Lf() {
                if (If.call(this, ["online"]), this.ic = !0, "undefined" != typeof window && "undefined" != typeof window.addEventListener) {
                    var t = this;
                    window.addEventListener("online", function () {
                        t.ic || (t.ic = !0, t.de("online", !0))
                    }, !1), window.addEventListener("offline", function () {
                        t.ic && (t.ic = !1, t.de("online", !1))
                    }, !1)
                }
            }
            function Mf() {
                If.call(this, ["visible"]);
                var t, e;
                if ("undefined" != typeof document && "undefined" != typeof document.addEventListener && ("undefined" != typeof document.hidden ? (e = "visibilitychange", t = "hidden") : "undefined" != typeof document.mozHidden ? (e = "mozvisibilitychange", t = "mozHidden") : "undefined" != typeof document.msHidden ? (e = "msvisibilitychange", t = "msHidden") : "undefined" != typeof document.webkitHidden && (e = "webkitvisibilitychange", t = "webkitHidden")), this.uc = !0, e) {
                    var n = this;
                    document.addEventListener(e, function () {
                        var e = !document[t];
                        e !== n.uc && (n.uc = e, n.de("visible", e))
                    }, !1)
                }
            }
            function Pf(t) {
                return p(t) && 0 !== t.length && !Nf.test(t)
            }
            function Qf(t) {
                return null === t || p(t) || ga(t) && !Sc(t) || ia(t) && u(t, ".sv")
            }
            function Rf(t, e, i, r) {
                r && !n(e) || Sf(z(t, 1, r), e, i)
            }
            function Sf(t, e, i) {
                if (i instanceof K && (i = new wc(i, t)), !n(e))
                    throw Error(t + "contains undefined " + zc(i));
                if (ha(e))
                    throw Error(t + "contains a function " + zc(i) + " with contents: " + e.toString());
                if (Sc(e))
                    throw Error(t + "contains " + e.toString() + " " + zc(i));
                if (p(e) && e.length > 10485760 / 3 && 10485760 < xc(e))
                    throw Error(t + "contains a string greater than 10485760 utf8 bytes " + zc(i) + " ('" + e.substring(0, 50) + "...')");
                if (ia(e)) {
                    var r = !1, o = !1;
                    if (hb(e, function (e, n) {
                        if (".value" === e)
                            r = !0;
                        else if (".priority" !== e && ".sv" !== e && (o = !0, !Pf(e)))
                            throw Error(t + " contains an invalid key (" + e + ") " + zc(i) + '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
                        i.push(e), Sf(t, n, i), i.pop()
                    }), r && o)
                        throw Error(t + ' contains ".value" child ' + zc(i) + " in addition to actual children.")
                }
            }
            function Tf(t, e, n) {
                if (!ia(e) || ea(e))
                    throw Error(z(t, 1, !1) + " must be an Object containing the children to replace.");
                if (u(e, ".value"))
                    throw Error(z(t, 1, !1) + ' must not contain ".value".  To overwrite with a leaf value, just use .set() instead.');
                Rf(t, e, n, !1)
            }
            function Uf(t, e, n) {
                if (Sc(n))
                    throw Error(z(t, e, !1) + "is " + n.toString() + ", but must be a valid Firebase priority (a string, finite number, server value, or null).");
                if (!Qf(n))
                    throw Error(z(t, e, !1) + "must be a valid Firebase priority (a string, finite number, server value, or null).")
            }
            function Vf(t, e, i) {
                if (!i || n(e))
                    switch (e) {
                        case"value":
                        case"child_added":
                        case"child_removed":
                        case"child_changed":
                        case"child_moved":
                            break;
                        default:
                            throw Error(z(t, 1, i) + 'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".')
                        }
            }
            function Wf(t, e, i, r) {
                if ((!r || n(i)) && !Pf(i))
                    throw Error(z(t, e, r) + 'was an invalid key: "' + i + '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')
            }
            function Xf(t, e) {
                if (!p(e) || 0 === e.length || Of.test(e))
                    throw Error(z(t, 1, !1) + 'was an invalid path: "' + e + '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')
            }
            function Yf(t, e) {
                if (".info" === O(e))
                    throw Error(t + " failed: Can't modify data under /.info/")
            }
            function Zf(t, e) {
                if (!p(e))
                    throw Error(z(t, 1, !1) + "must be a valid credential (a string).")
            }
            function $f(t, e, n) {
                if (!p(n))
                    throw Error(z(t, e, !1) + "must be a valid string.")
            }
            function ag(t, e, i, r) {
                if (!(r && !n(i) || ia(i) && null !== i))
                    throw Error(z(t, e, r) + "must be a valid object.")
            }
            function bg(t, e, n) {
                if (!ia(e) || null === e || !u(e, n))
                    throw Error(z(t, 1, !1) + 'must contain the key "' + n + '"');
                if (!p(w(e, n)))
                    throw Error(z(t, 1, !1) + 'must contain the key "' + n + '" with type "string"')
            }
            function cg() {
                this.set = {}
            }
            function dg(t, e) {
                r(t.set, function (t, n) {
                    e(n, t)
                })
            }
            function qc() {
                this.m = this.C = null
            }
            function eg(t, e) {
                if (e.e())
                    return t.C = null, t.m = null, !0;
                if (null !== t.C) {
                    if (t.C.N())
                        return!1;
                    var n = t.C;
                    return t.C = null, n.U(M, function (e, n) {
                        t.mc(new K(e), n)
                    }), eg(t, e)
                }
                return null !== t.m ? (n = O(e), e = G(e), t.m.contains(n) && eg(t.m.get(n), e) && t.m.remove(n), t.m.e() ? (t.m = null, !0) : !1) : !0
            }
            function rc(t, e, n) {
                null !== t.C ? n(e, t.C) : t.U(function (t, i) {
                    var r = new K(e.toString() + "/" + t);
                    rc(i, r, n)
                })
            }
            function gg(t, e, n) {
                this.ld = t || {}, this.ce = e || {}, this.ab = n || {}, this.ld.remember || (this.ld.remember = "default")
            }
            function ig(t) {
                var e = {}, n = {};
                return hb(t || {}, function (t, i) {
                    0 <= Na(hg, t) ? e[t] = i : n[t] = i
                }), new gg(e, {}, n)
            }
            function jg(t, e) {
                this.Pe = ["session", t.Ld, t.Cb].join(":"), this.$d = e
            }
            function kg() {
                return"undefined" != typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(navigator.userAgent)
            }
            function lg() {
                return"undefined" != typeof location && /^file:\//.test(location.href)
            }
            function mg() {
                if ("undefined" == typeof navigator)
                    return!1;
                var t = navigator.userAgent;
                if ("Microsoft Internet Explorer" === navigator.appName) {
                    if ((t = t.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/)) && 1 < t.length)
                        return 8 <= parseFloat(t[1])
                } else if (-1 < t.indexOf("Trident") && (t = t.match(/rv:([0-9]{2,2}[\.0-9]{0,})/)) && 1 < t.length)
                    return 8 <= parseFloat(t[1]);
                return!1
            }
            function ng() {
                var t, e = window.opener.frames;
                for (t = e.length - 1; t >= 0; t--)
                    try {
                        if (e[t].location.protocol === window.location.protocol && e[t].location.host === window.location.host && "__winchan_relay_frame" === e[t].name)
                            return e[t]
                    } catch (n) {
                    }
                return null
            }
            function og(t, e, n) {
                t.attachEvent ? t.attachEvent("on" + e, n) : t.addEventListener && t.addEventListener(e, n, !1)
            }
            function pg(t, e, n) {
                t.detachEvent ? t.detachEvent("on" + e, n) : t.removeEventListener && t.removeEventListener(e, n, !1)
            }
            function qg(t) {
                /^https?:\/\//.test(t) || (t = window.location.href);
                var e = /^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(t);
                return e ? e[1] : t
            }
            function rg(t) {
                var e = "";
                try {
                    t = t.replace("#", "");
                    var n = kb(t);
                    n && u(n, "__firebase_request_key") && (e = w(n, "__firebase_request_key"))
                } catch (i) {
                }
                return e
            }
            function sg() {
                var t = Rc(fg);
                return t.scheme + "://" + t.host + "/v2"
            }
            function tg(t) {
                return sg() + "/" + t + "/auth/channel"
            }
            function ug(t) {
                var e = this;
                if (this.zc = t, this.ae = "*", mg() ? this.Qc = this.wd = ng() : (this.Qc = window.opener, this.wd = window), !e.Qc)
                    throw"Unable to find relay frame";
                og(this.wd, "message", q(this.hc, this)), og(this.wd, "message", q(this.Af, this));
                try {
                    vg(this, {a: "ready"})
                } catch (n) {
                    og(this.Qc, "load", function () {
                        vg(e, {a: "ready"})
                    })
                }
                og(window, "unload", q(this.yg, this))
            }
            function vg(t, e) {
                e = B(e), mg() ? t.Qc.doPost(e, t.ae) : t.Qc.postMessage(e, t.ae)
            }
            function wg(t) {
                this.oc = Ga() + Ga() + Ga(), this.Df = t
            }
            function yg(t) {
                var e = Error(w(xg, t), t);
                return e.code = t, e
            }
            function zg(t) {
                (!t.window_features || "undefined" != typeof navigator && (-1 !== navigator.userAgent.indexOf("Fennec/") || -1 !== navigator.userAgent.indexOf("Firefox/") && -1 !== navigator.userAgent.indexOf("Android"))) && (t.window_features = void 0), t.window_name || (t.window_name = "_blank"), this.options = t
            }
            function Ag(t) {
                t.method || (t.method = "GET"), t.headers || (t.headers = {}), t.headers.content_type || (t.headers.content_type = "application/json"), t.headers.content_type = t.headers.content_type.toLowerCase(), this.options = t
            }
            function Bg(t) {
                this.oc = Ga() + Ga() + Ga(), this.Df = t
            }
            function Cg(t) {
                t.callback_parameter || (t.callback_parameter = "callback"), this.options = t, window.__firebase_auth_jsonp = window.__firebase_auth_jsonp || {}
            }
            function Dg(t, e, n) {
                setTimeout(function () {
                    try {
                        var i = document.createElement("script");
                        i.type = "text/javascript", i.id = t, i.async = !0, i.src = e, i.onerror = function () {
                            var e = document.getElementById(t);
                            null !== e && e.parentNode.removeChild(e), n && n(yg("NETWORK_ERROR"))
                        };
                        var r = document.getElementsByTagName("head");
                        (r && 0 != r.length ? r[0] : document.documentElement).appendChild(i)
                    } catch (o) {
                        n && n(yg("NETWORK_ERROR"))
                    }
                }, 0)
            }
            function Eg(t, e, n, i) {
                If.call(this, ["auth_status"]), this.H = t, this.df = e, this.Sg = n, this.Ke = i, this.rc = new jg(t, [Dc, P]), this.nb = null, this.Re = !1, Fg(this)
            }
            function Fg(t) {
                P.get("redirect_request_id") && Gg(t);
                var e = t.rc.get();
                e && e.token ? (Hg(t, e), t.df(e.token, function (n, i) {
                    Ig(t, n, i, !1, e.token, e)
                }, function (e, n) {
                    Jg(t, "resumeSession()", e, n)
                })) : Hg(t, null)
            }
            function Kg(t, e, n, i, r, o) {
                "firebaseio-demo.com" === t.H.domain && Q("Firebase authentication is not supported on demo Firebases (*.firebaseio-demo.com). To secure your Firebase, create a production Firebase at https://www.firebase.com."), t.df(e, function (o, a) {
                    Ig(t, o, a, !0, e, n, i || {}, r)
                }, function (e, n) {
                    Jg(t, "auth()", e, n, o)
                })
            }
            function Lg(t, e) {
                t.rc.clear(), Hg(t, null), t.Sg(function (t, n) {
                    if ("ok" === t)
                        R(e, null);
                    else {
                        var i = (t || "error").toUpperCase(), r = i;
                        n && (r += ": " + n), r = Error(r), r.code = i, R(e, r)
                    }
                })
            }
            function Ig(t, e, n, i, r, o, a, s) {
                "ok" === e ? (i && (e = n.auth, o.auth = e, o.expires = n.expires, o.token = cd(r) ? r : "", n = null, e && u(e, "uid") ? n = w(e, "uid") : u(o, "uid") && (n = w(o, "uid")), o.uid = n, n = "custom", e && u(e, "provider") ? n = w(e, "provider") : u(o, "provider") && (n = w(o, "provider")), o.provider = n, t.rc.clear(), cd(r) && (a = a || {}, n = Dc, "sessionOnly" === a.remember && (n = P), "none" !== a.remember && t.rc.set(o, n)), Hg(t, o)), R(s, null, o)) : (t.rc.clear(), Hg(t, null), o = t = (e || "error").toUpperCase(), n && (o += ": " + n), o = Error(o), o.code = t, R(s, o))
            }
            function Jg(t, e, n, i, r) {
                Q(e + " was canceled: " + i), t.rc.clear(), Hg(t, null), t = Error(i), t.code = n.toUpperCase(), R(r, t)
            }
            function Mg(t, e, n, i, r) {
                Ng(t), n = new gg(i || {}, {}, n || {}), Og(t, [Ag, Cg], "/auth/" + e, n, r)
            }
            function Pg(t, e, n, i) {
                Ng(t);
                var r = [zg, Bg];
                n = ig(n), "anonymous" === e || "password" === e ? setTimeout(function () {
                    R(i, yg("TRANSPORT_UNAVAILABLE"))
                }, 0) : (n.ce.window_features = "menubar=yes,modal=yes,alwaysRaised=yeslocation=yes,resizable=yes,scrollbars=yes,status=yes,height=625,width=625,top=" + ("object" == typeof screen ? .5 * (screen.height - 625) : 0) + ",left=" + ("object" == typeof screen ? .5 * (screen.width - 625) : 0), n.ce.relay_url = tg(t.H.Cb), n.ce.requestWithCredential = q(t.pc, t), Og(t, r, "/auth/" + e, n, i))
            }
            function Gg(t) {
                var e = P.get("redirect_request_id");
                if (e) {
                    var n = P.get("redirect_client_options");
                    P.remove("redirect_request_id"), P.remove("redirect_client_options");
                    var i = [Ag, Cg], e = {requestId: e, requestKey: rg(document.location.hash)}, n = new gg(n, {}, e);
                    t.Re = !0;
                    try {
                        document.location.hash = document.location.hash.replace(/&__firebase_request_key=([a-zA-z0-9]*)/, "")
                    } catch (r) {
                    }
                    Og(t, i, "/auth/session", n, function () {
                        this.Re = !1
                    }.bind(t))
                }
            }
            function Og(t, e, n, i, r) {
                Qg(t, e, n, i, function (e, n) {
                    !e && n && n.token && n.uid ? Kg(t, n.token, n, i.ld, function (t, e) {
                        t ? R(r, t) : R(r, null, e)
                    }) : R(r, e || yg("UNKNOWN_ERROR"))
                })
            }
            function Qg(t, e, n, i, r) {
                e = Pa(e, function (t) {
                    return"function" == typeof t.isAvailable && t.isAvailable()
                }), 0 === e.length ? setTimeout(function () {
                    R(r, yg("TRANSPORT_UNAVAILABLE"))
                }, 0) : (e = new (e.shift())(i.ce), i = ib(i.ab), i.v = "js-2.2.4", i.transport = e.Bc(), i.suppress_status_codes = !0, t = sg() + "/" + t.H.Cb + n, e.open(t, i, function (t, e) {
                    if (t)
                        R(r, t);
                    else if (e && e.error) {
                        var n = Error(e.error.message);
                        n.code = e.error.code, n.details = e.error.details, R(r, n)
                    } else
                        R(r, null, e)
                }))
            }
            function Hg(t, e) {
                var n = null !== t.nb || null !== e;
                t.nb = e, n && t.de("auth_status", e), t.Ke(null !== e)
            }
            function Ng(t) {
                var e = t.H;
                if ("firebaseio.com" !== e.domain && "firebaseio-demo.com" !== e.domain && "auth.firebase.com" === fg)
                    throw Error("This custom Firebase server ('" + t.H.domain + "') does not support delegated login.")
            }
            function Rg(t) {
                this.hc = t, this.Kd = [], this.Qb = 0, this.pe = -1, this.Fb = null
            }
            function Sg(t, e, n) {
                t.pe = e, t.Fb = n, t.pe < t.Qb && (t.Fb(), t.Fb = null)
            }
            function Tg(t, e, n) {
                for (t.Kd[e] = n; t.Kd[t.Qb]; ) {
                    var i = t.Kd[t.Qb];
                    delete t.Kd[t.Qb];
                    for (var r = 0; r < i.length; ++r)
                        if (i[r]) {
                            var o = t;
                            Cb(function () {
                                o.hc(i[r])
                            })
                        }
                    if (t.Qb === t.pe) {
                        t.Fb && (clearTimeout(t.Fb), t.Fb(), t.Fb = null);
                        break
                    }
                    t.Qb++
                }
            }
            function Ug(t, e, n) {
                this.qe = t, this.f = Oc(t), this.ob = this.pb = 0, this.Va = Ob(e), this.Vd = n, this.Gc = !1, this.gd = function (t) {
                    e.host !== e.Oa && (t.ns = e.Cb);
                    var n, i = [];
                    for (n in t)
                        t.hasOwnProperty(n) && i.push(n + "=" + t[n]);
                    return(e.lb ? "https://" : "http://") + e.Oa + "/.lp?" + i.join("&")
                }
            }
            function Yg(t, e) {
                var n = B(e).length;
                t.ob += n, Lb(t.Va, "bytes_received", n)
            }
            function Xg(t, e, n, i) {
                if (this.gd = i, this.jb = n, this.Oe = new cg, this.$c = [], this.se = Math.floor(1e8 * Math.random()), this.Td = !0, this.fe = Gc(), window["pLPCommand" + this.fe] = t, window["pRTLPCB" + this.fe] = e, t = document.createElement("iframe"), t.style.display = "none", !document.body)
                    throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
                document.body.appendChild(t);
                try {
                    t.contentWindow.document || Bb("No IE domain setting required")
                } catch (r) {
                    t.src = "javascript:void((function(){document.open();document.domain='" + document.domain + "';document.close();})())"
                }
                t.contentDocument ? t.gb = t.contentDocument : t.contentWindow ? t.gb = t.contentWindow.document : t.document && (t.gb = t.document), this.Ca = t, t = "", this.Ca.src && "javascript:" === this.Ca.src.substr(0, 11) && (t = '<script>document.domain="' + document.domain + '";</script>'), t = "<html><body>" + t + "</body></html>";
                try {
                    this.Ca.gb.open(), this.Ca.gb.write(t), this.Ca.gb.close()
                } catch (o) {
                    Bb("frame writing exception"), o.stack && Bb(o.stack), Bb(o)
                }
            }
            function $g(t) {
                if (t.ke && t.Td && t.Oe.count() < (0 < t.$c.length ? 2 : 1)) {
                    t.se++;
                    var e = {};
                    e.id = t.rg, e.pw = t.sg, e.ser = t.se;
                    for (var e = t.gd(e), n = "", i = 0; 0 < t.$c.length && 1870 >= t.$c[0].jf.length + 30 + n.length; ) {
                        var r = t.$c.shift(), n = n + "&seg" + i + "=" + r.Jg + "&ts" + i + "=" + r.Rg + "&d" + i + "=" + r.jf;
                        i++
                    }
                    return ah(t, e + n, t.se), !0
                }
                return!1
            }
            function ah(t, e, n) {
                function i() {
                    t.Oe.remove(n), $g(t)
                }
                t.Oe.add(n, 1);
                var r = setTimeout(i, Math.floor(25e3));
                Zg(t, e, function () {
                    clearTimeout(r), i()
                })
            }
            function Zg(t, e, n) {
                setTimeout(function () {
                    try {
                        if (t.Td) {
                            var i = t.Ca.gb.createElement("script");
                            i.type = "text/javascript", i.async = !0, i.src = e, i.onload = i.onreadystatechange = function () {
                                var t = i.readyState;
                                t && "loaded" !== t && "complete" !== t || (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), n())
                            }, i.onerror = function () {
                                Bb("Long-poll script failed to load: " + e), t.Td = !1, t.close()
                            }, t.Ca.gb.body.appendChild(i)
                        }
                    } catch (r) {
                    }
                }, Math.floor(1))
            }
            function ch(t, e, n) {
                this.qe = t, this.f = Oc(this.qe), this.frames = this.Jc = null, this.ob = this.pb = this.bf = 0, this.Va = Ob(e), this.fb = (e.lb ? "wss://" : "ws://") + e.Oa + "/.ws?v=5", "undefined" != typeof location && location.href && -1 !== location.href.indexOf("firebaseio.com") && (this.fb += "&r=f"), e.host !== e.Oa && (this.fb = this.fb + "&ns=" + e.Cb), n && (this.fb = this.fb + "&s=" + n)
            }
            function fh(t, e) {
                if (t.frames.push(e), t.frames.length == t.bf) {
                    var n = t.frames.join("");
                    t.frames = null, n = mb(n), t.wg(n)
                }
            }
            function eh(t) {
                clearInterval(t.Jc), t.Jc = setInterval(function () {
                    t.va && t.va.send("0"), eh(t)
                }, Math.floor(45e3))
            }
            function gh(t) {
                hh(this, t)
            }
            function hh(t, e) {
                var n = ch && ch.isAvailable(), i = n && !(Dc.uf || !0 === Dc.get("previous_websocket_failure"));
                if (e.Tg && (n || Q("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."), i = !0), i)
                    t.ed = [ch];
                else {
                    var r = t.ed = [];
                    Yc(ih, function (t, e) {
                        e && e.isAvailable() && r.push(e)
                    })
                }
            }
            function jh(t) {
                if (0 < t.ed.length)
                    return t.ed[0];
                throw Error("No transports available")
            }
            function kh(t, e, n, i, r, o) {
                this.id = t, this.f = Oc("c:" + this.id + ":"), this.hc = n, this.Vc = i, this.ka = r, this.Me = o, this.H = e, this.Jd = [], this.ef = 0, this.Nf = new gh(e), this.Ua = 0, this.f("Connection created"), lh(this)
            }
            function lh(t) {
                var e = jh(t.Nf);
                t.L = new e("c:" + t.id + ":" + t.ef++, t.H), t.Qe = e.responsesRequiredToBeHealthy || 0;
                var n = mh(t, t.L), i = nh(t, t.L);
                t.fd = t.L, t.bd = t.L, t.F = null, t.Ab = !1, setTimeout(function () {
                    t.L && t.L.open(n, i)
                }, Math.floor(0)), e = e.healthyTimeout || 0, e > 0 && (t.vd = setTimeout(function () {
                    t.vd = null, t.Ab || (t.L && 102400 < t.L.ob ? (t.f("Connection exceeded healthy timeout but has received " + t.L.ob + " bytes.  Marking connection healthy."), t.Ab = !0, t.L.Bd()) : t.L && 10240 < t.L.pb ? t.f("Connection exceeded healthy timeout but has sent " + t.L.pb + " bytes.  Leaving connection alive.") : (t.f("Closing unhealthy connection after timeout."), t.close()))
                }, Math.floor(e)))
            }
            function nh(t, e) {
                return function (n) {
                    e === t.L ? (t.L = null, n || 0 !== t.Ua ? 1 === t.Ua && t.f("Realtime connection lost.") : (t.f("Realtime connection failed."), "s-" === t.H.Oa.substr(0, 2) && (Dc.remove("host:" + t.H.host), t.H.Oa = t.H.host)), t.close()) : e === t.F ? (t.f("Secondary connection lost."), n = t.F, t.F = null, t.fd !== n && t.bd !== n || t.close()) : t.f("closing an old connection")
                }
            }
            function mh(t, e) {
                return function (n) {
                    if (2 != t.Ua)
                        if (e === t.bd) {
                            var i = Vc("t", n);
                            if (n = Vc("d", n), "c" == i) {
                                if (i = Vc("t", n), "d"in n)
                                    if (n = n.d, "h" === i) {
                                        var i = n.ts, r = n.v, o = n.h;
                                        t.Vd = n.s, Fc(t.H, o), 0 == t.Ua && (t.L.start(), oh(t, t.L, i), "5" !== r && Q("Protocol version mismatch detected"), n = t.Nf, (n = 1 < n.ed.length ? n.ed[1] : null) && ph(t, n))
                                    } else if ("n" === i) {
                                        for (t.f("recvd end transmission on primary"), t.bd = t.F, n = 0; n < t.Jd.length; ++n)
                                            t.Fd(t.Jd[n]);
                                        t.Jd = [], qh(t)
                                    } else
                                        "s" === i ? (t.f("Connection shutdown command received. Shutting down..."), t.Me && (t.Me(n), t.Me = null), t.ka = null, t.close()) : "r" === i ? (t.f("Reset packet received.  New host: " + n), Fc(t.H, n), 1 === t.Ua ? t.close() : (rh(t), lh(t))) : "e" === i ? Pc("Server Error: " + n) : "o" === i ? (t.f("got pong on primary."), sh(t), th(t)) : Pc("Unknown control packet command: " + i)
                            } else
                                "d" == i && t.Fd(n)
                        } else if (e === t.F)
                            if (i = Vc("t", n), n = Vc("d", n), "c" == i)
                                "t"in n && (n = n.t, "a" === n ? uh(t) : "r" === n ? (t.f("Got a reset on secondary, closing it"), t.F.close(), t.fd !== t.F && t.bd !== t.F || t.close()) : "o" === n && (t.f("got pong on secondary."), t.Lf--, uh(t)));
                            else {
                                if ("d" != i)
                                    throw Error("Unknown protocol layer: " + i);
                                t.Jd.push(n)
                            }
                        else
                            t.f("message on old connection")
                }
            }
            function qh(t) {
                t.fd === t.F && t.bd === t.F && (t.f("cleaning up and promoting a connection: " + t.F.qe), t.L = t.F, t.F = null)
            }
            function uh(t) {
                0 >= t.Lf ? (t.f("Secondary connection is healthy."), t.Ab = !0, t.F.Bd(), t.F.start(), t.f("sending client ack on secondary"), t.F.send({t: "c", d: {t: "a", d: {}}}), t.f("Ending transmission on primary"), t.L.send({t: "c", d: {t: "n", d: {}}}), t.fd = t.F, qh(t)) : (t.f("sending ping on secondary."), t.F.send({t: "c", d: {t: "p", d: {}}}))
            }
            function sh(t) {
                t.Ab || (t.Qe--, 0 >= t.Qe && (t.f("Primary connection is healthy."), t.Ab = !0, t.L.Bd()))
            }
            function ph(t, e) {
                t.F = new e("c:" + t.id + ":" + t.ef++, t.H, t.Vd), t.Lf = e.responsesRequiredToBeHealthy || 0, t.F.open(mh(t, t.F), nh(t, t.F)), setTimeout(function () {
                    t.F && (t.f("Timed out trying to upgrade."), t.F.close())
                }, Math.floor(6e4))
            }
            function oh(t, e, n) {
                t.f("Realtime connection established."), t.L = e, t.Ua = 1, t.Vc && (t.Vc(n), t.Vc = null), 0 === t.Qe ? (t.f("Primary connection is healthy."), t.Ab = !0) : setTimeout(function () {
                    th(t)
                }, Math.floor(5e3))
            }
            function th(t) {
                t.Ab || 1 !== t.Ua || (t.f("sending ping on primary."), vh(t, {t: "c", d: {t: "p", d: {}}}))
            }
            function vh(t, e) {
                if (1 !== t.Ua)
                    throw"Connection is not connected";
                t.fd.send(e)
            }
            function rh(t) {
                t.f("Shutting down all connections"), t.L && (t.L.close(), t.L = null), t.F && (t.F.close(), t.F = null), t.vd && (clearTimeout(t.vd), t.vd = null)
            }
            function wh(t, e, n, i) {
                this.id = xh++, this.f = Oc("p:" + this.id + ":"), this.wf = this.De = !1, this.aa = {}, this.pa = [], this.Xc = 0, this.Uc = [], this.ma = !1, this.$a = 1e3, this.Cd = 3e5, this.Gb = e, this.Tc = n, this.Ne = i, this.H = t, this.We = null, this.Qd = {}, this.Ig = 0, this.mf = !0, this.Kc = this.Fe = null, yh(this, 0), Mf.ub().Eb("visible", this.zg, this), -1 === t.host.indexOf("fblocal") && Lf.ub().Eb("online", this.xg, this)
            }
            function Ah(t, e) {
                var n = e.Fg, i = n.path.toString(), r = n.wa();
                t.f("Listen on " + i + " for " + r);
                var o = {p: i};
                e.tag && (o.q = ce(n.n), o.t = e.tag), o.h = e.ud(), t.Da("q", o, function (o) {
                    var a = o.d, s = o.s;
                    if (a && "object" == typeof a && u(a, "w")) {
                        var h = w(a, "w");
                        ea(h) && 0 <= Na(h, "no_index") && Q("Using an unspecified index. Consider adding " + ('".indexOn": "' + n.n.g.toString() + '"') + " at " + n.path.toString() + " to your security rules for better performance")
                    }
                    (t.aa[i] && t.aa[i][r]) === e && (t.f("listen response", o), "ok" !== s && Bh(t, i, r), e.J && e.J(s, a))
                })
            }
            function Ch(t) {
                var e = t.Fa;
                t.ma && e && t.Da("auth", {cred: e.fg}, function (n) {
                    var i = n.s;
                    n = n.d || "error", "ok" !== i && t.Fa === e && delete t.Fa, e.nf ? "ok" !== i && e.jd && e.jd(i, n) : (e.nf = !0, e.yc && e.yc(i, n))
                })
            }
            function Dh(t, e, n, i, r) {
                n = {p: n, d: i}, t.f("onDisconnect " + e, n), t.Da(e, n, function (t) {
                    r && setTimeout(function () {
                        r(t.s, t.d)
                    }, Math.floor(0))
                })
            }
            function Eh(t, e, i, r, o, a) {
                r = {p: i, d: r}, n(a) && (r.h = a), t.pa.push({action: e, If: r, J: o}), t.Xc++, e = t.pa.length - 1, t.ma ? Fh(t, e) : t.f("Buffering put: " + i)
            }
            function Fh(t, e) {
                var n = t.pa[e].action, i = t.pa[e].If, r = t.pa[e].J;
                t.pa[e].Gg = t.ma, t.Da(n, i, function (i) {
                    t.f(n + " response", i), delete t.pa[e], t.Xc--, 0 === t.Xc && (t.pa = []), r && r(i.s, i.d)
                })
            }
            function yh(t, e) {
                J(!t.Sa, "Scheduling a connect when we're already connected/ing?"), t.Sb && clearTimeout(t.Sb), t.Sb = setTimeout(function () {
                    t.Sb = null, Ih(t)
                }, Math.floor(e))
            }
            function Ih(t) {
                if (Jh(t)) {
                    t.f("Making a connection attempt"), t.Fe = (new Date).getTime(), t.Kc = null;
                    var e = q(t.Fd, t), n = q(t.Vc, t), i = q(t.Cf, t), r = t.id + ":" + zh++;
                    t.Sa = new kh(r, t.H, e, n, i, function (e) {
                        Q(e + " (" + t.H.toString() + ")"), t.wf = !0
                    })
                }
            }
            function Gh(t, e, n) {
                n = n ? Qa(n, function (t) {
                    return Wc(t)
                }).join("$") : "default", (t = Bh(t, e, n)) && t.J && t.J("permission_denied")
            }
            function Bh(t, e, i) {
                e = new K(e).toString();
                var r;
                return n(t.aa[e]) ? (r = t.aa[e][i], delete t.aa[e][i], 0 === pa(t.aa[e]) && delete t.aa[e]) : r = void 0, r
            }
            function Hh(t) {
                Ch(t), r(t.aa, function (e) {
                    r(e, function (e) {
                        Ah(t, e)
                    })
                });
                for (var e = 0; e < t.pa.length; e++)
                    t.pa[e] && Fh(t, e);
                for (; t.Uc.length; )
                    e = t.Uc.shift(), Dh(t, e.action, e.Zc, e.data, e.J)
            }
            function Jh(t) {
                var e;
                return e = Lf.ub().ic, !t.wf && !t.De && e
            }
            function S(t, e, n) {
                this.B = t, this.V = e, this.g = n
            }
            function Kh(t, e) {
                this.H = t, this.Va = Ob(t), this.ea = new ub, this.Ed = 1, this.Ra = null, e || 0 <= ("object" == typeof window && window.navigator && window.navigator.userAgent || "").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) ? (this.ca = new Ae(this.H, q(this.Gb, this)), setTimeout(q(this.Tc, this, !0), 0)) : this.ca = this.Ra = new wh(this.H, q(this.Gb, this), q(this.Tc, this), q(this.Ne, this)), this.Pg = Pb(t, q(function () {
                    return new Jb(this.Va, this.ca)
                }, this)), this.tc = new Cf, this.Be = new nb;
                var n = this;
                this.zd = new gf({Xe: function (t, e, i, r) {
                        return e = [], i = n.Be.j(t.path), i.e() || (e = jf(n.zd, new Ub(ze, t.path, i)), setTimeout(function () {
                            r("ok")
                        }, 0)), e
                    }, Zd: ba}), Lh(this, "connected", !1), this.ka = new qc, this.P = new Eg(t, q(this.ca.P, this.ca), q(this.ca.ee, this.ca), q(this.Ke, this)), this.pd = 0, this.Ce = null, this.O = new gf({Xe: function (t, e, i, r) {
                        return n.ca.xf(t, i, e, function (e, i) {
                            var o = r(e, i);
                            zb(n.ea, t.path, o)
                        }), []
                    }, Zd: function (t, e) {
                        n.ca.Of(t, e)
                    }})
            }
            function Mh(t) {
                return t = t.Be.j(new K(".info/serverTimeOffset")).K() || 0, (new Date).getTime() + t
            }
            function Nh(t) {
                return t = t = {timestamp: Mh(t)}, t.timestamp = t.timestamp || (new Date).getTime(), t
            }
            function Lh(t, e, n) {
                e = new K("/.info/" + e), n = L(n);
                var i = t.Be;
                i.Sd = i.Sd.G(e, n), n = jf(t.zd, new Ub(ze, e, n)), zb(t.ea, e, n)
            }
            function Ph(t) {
                t.f("onDisconnectEvents");
                var e = Nh(t), n = [];
                rc(pc(t.ka, e), F, function (e, i) {
                    n = n.concat(jf(t.O, new Ub(ze, e, i)));
                    var r = Rh(t, e);
                    Oh(t, r)
                }), t.ka = new qc, zb(t.ea, F, n)
            }
            function Sh(t, e, n, i) {
                var r = L(n);
                t.ca.Le(e.toString(), r.K(!0), function (n, o) {
                    "ok" === n && t.ka.mc(e, r), Qh(i, n, o)
                })
            }
            function Th(t, e, n, i, r) {
                var o = L(n, i);
                t.ca.Le(e.toString(), o.K(!0), function (n, i) {
                    "ok" === n && t.ka.mc(e, o), Qh(r, n, i)
                })
            }
            function Uh(t, e, n, i) {
                var r, o = !0;
                for (r in n)
                    o = !1;
                o ? (Bb("onDisconnect().update() called with empty data.  Don't do anything."), Qh(i, "ok")) : t.ca.Bf(e.toString(), n, function (r, o) {
                    if ("ok" === r)
                        for (var a in n) {
                            var s = L(n[a]);
                            t.ka.mc(e.w(a), s)
                        }
                    Qh(i, r, o)
                })
            }
            function Vh(t, e, n) {
                n = ".info" === O(e.path) ? t.zd.Ob(e, n) : t.O.Ob(e, n), xb(t.ea, e.path, n)
            }
            function Qh(t, e, n) {
                t && Cb(function () {
                    if ("ok" == e)
                        t(null);
                    else {
                        var i = (e || "error").toUpperCase(), r = i;
                        n && (r += ": " + n), r = Error(r), r.code = i, t(r)
                    }
                })
            }
            function Wh(t, e, i, r, o) {
                function a() {}
                t.f("transaction on " + e);
                var s = new U(t, e);
                if (s.Eb("value", a), i = {path: e, update: i, J: r, status: null, Ef: Gc(), cf: o, Kf: 0, ge: function () {
                        s.gc("value", a)
                    }, je: null, Aa: null, md: null, nd: null, od: null}, r = t.O.ua(e, void 0) || C, i.md = r, r = i.update(r.K()), n(r)) {
                    Sf("transaction failed: Data returned ", r, i.path), i.status = 1, o = Df(t.tc, e);
                    var h = o.Ba() || [];
                    h.push(i), Ef(o, h), "object" == typeof r && null !== r && u(r, ".priority") ? (h = w(r, ".priority"), J(Qf(h), "Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")) : h = (t.O.ua(e) || C).A().K(), o = Nh(t), r = L(r, h), o = sc(r, o), i.nd = r, i.od = o, i.Aa = t.Ed++, i = hf(t.O, e, o, i.Aa, i.cf), zb(t.ea, e, i), Xh(t)
                } else
                    i.ge(), i.nd = null, i.od = null, i.J && (t = new S(i.md, new U(t, i.path), M), i.J(null, !1, t))
            }
            function Xh(t, e) {
                var n = e || t.tc;
                if (e || Yh(t, n), null !== n.Ba()) {
                    var i = Zh(t, n);
                    J(0 < i.length, "Sending zero length transaction queue"), Sa(i, function (t) {
                        return 1 === t.status
                    }) && $h(t, n.path(), i)
                } else
                    n.td() && n.U(function (e) {
                        Xh(t, e)
                    })
            }
            function $h(t, e, n) {
                for (var i = Qa(n, function (t) {
                    return t.Aa
                }), r = t.O.ua(e, i) || C, i = r, r = r.hash(), o = 0; o < n.length; o++) {
                    var a = n[o];
                    J(1 === a.status, "tryToSendTransactionQueue_: items in queue should all be run."), a.status = 2, a.Kf++;
                    var s = N(e, a.path), i = i.G(s, a.nd)
                }
                i = i.K(!0), t.ca.put(e.toString(), i, function (i) {
                    t.f("transaction put response", {path: e.toString(), status: i});
                    var r = [];
                    if ("ok" === i) {
                        for (i = [], o = 0; o < n.length; o++) {
                            if (n[o].status = 3, r = r.concat(lf(t.O, n[o].Aa)), n[o].J) {
                                var a = n[o].od, s = new U(t, n[o].path);
                                i.push(q(n[o].J, null, null, !0, new S(a, s, M)))
                            }
                            n[o].ge()
                        }
                        for (Yh(t, Df(t.tc, e)), Xh(t), zb(t.ea, e, r), o = 0; o < i.length; o++)
                            Cb(i[o])
                    } else {
                        if ("datastale" === i)
                            for (o = 0; o < n.length; o++)
                                n[o].status = 4 === n[o].status ? 5 : 1;
                        else
                            for (Q("transaction at " + e.toString() + " failed: " + i), o = 0; o < n.length; o++)
                                n[o].status = 5, n[o].je = i;
                        Oh(t, e)
                    }
                }, r)
            }
            function Oh(t, e) {
                var n = ai(t, e), i = n.path(), n = Zh(t, n);
                return bi(t, n, i), i
            }
            function bi(t, e, i) {
                if (0 !== e.length) {
                    for (var r = [], o = [], a = Qa(e, function (t) {
                        return t.Aa
                    }), s = 0; s < e.length; s++) {
                        var h, c = e[s], f = N(i, c.path), l = !1;
                        if (J(null !== f, "rerunTransactionsUnderNode_: relativePath should not be null."), 5 === c.status)
                            l = !0, h = c.je, o = o.concat(lf(t.O, c.Aa, !0));
                        else if (1 === c.status)
                            if (25 <= c.Kf)
                                l = !0, h = "maxretry", o = o.concat(lf(t.O, c.Aa, !0));
                            else {
                                var d = t.O.ua(c.path, a) || C;
                                c.md = d;
                                var p = e[s].update(d.K());
                                n(p) ? (Sf("transaction failed: Data returned ", p, c.path), f = L(p), "object" == typeof p && null != p && u(p, ".priority") || (f = f.da(d.A())), d = c.Aa, p = Nh(t), p = sc(f, p), c.nd = f, c.od = p, c.Aa = t.Ed++, Va(a, d), o = o.concat(hf(t.O, c.path, p, c.Aa, c.cf)), o = o.concat(lf(t.O, d, !0))) : (l = !0, h = "nodata", o = o.concat(lf(t.O, c.Aa, !0)))
                            }
                        zb(t.ea, i, o), o = [], l && (e[s].status = 3, setTimeout(e[s].ge, Math.floor(0)), e[s].J && ("nodata" === h ? (c = new U(t, e[s].path), r.push(q(e[s].J, null, null, !1, new S(e[s].md, c, M)))) : r.push(q(e[s].J, null, Error(h), !1, null))))
                    }
                    for (Yh(t, t.tc), s = 0; s < r.length; s++)
                        Cb(r[s]);
                    Xh(t)
                }
            }
            function ai(t, e) {
                for (var n, i = t.tc; null !== (n = O(e)) && null === i.Ba(); )
                    i = Df(i, n), e = G(e);
                return i
            }
            function Zh(t, e) {
                var n = [];
                return ci(t, e, n), n.sort(function (t, e) {
                    return t.Ef - e.Ef
                }), n
            }
            function ci(t, e, n) {
                var i = e.Ba();
                if (null !== i)
                    for (var r = 0; r < i.length; r++)
                        n.push(i[r]);
                e.U(function (e) {
                    ci(t, e, n)
                })
            }
            function Yh(t, e) {
                var n = e.Ba();
                if (n) {
                    for (var i = 0, r = 0; r < n.length; r++)
                        3 !== n[r].status && (n[i] = n[r], i++);
                    n.length = i, Ef(e, 0 < n.length ? n : null)
                }
                e.U(function (e) {
                    Yh(t, e)
                })
            }
            function Rh(t, e) {
                var n = ai(t, e).path(), i = Df(t.tc, e);
                return Hf(i, function (e) {
                    di(t, e)
                }), di(t, i), Gf(i, function (e) {
                    di(t, e)
                }), n
            }
            function di(t, e) {
                var n = e.Ba();
                if (null !== n) {
                    for (var i = [], r = [], o = -1, a = 0; a < n.length; a++)
                        4 !== n[a].status && (2 === n[a].status ? (J(o === a - 1, "All SENT items should be at beginning of queue."), o = a, n[a].status = 4, n[a].je = "set") : (J(1 === n[a].status, "Unexpected transaction status in abort"), n[a].ge(), r = r.concat(lf(t.O, n[a].Aa, !0)), n[a].J && i.push(q(n[a].J, null, Error("set"), !1, null))));
                    for ( - 1 === o?Ef(e, null):n.length = o + 1, zb(t.ea, e.path(), r), a = 0; a < i.length; a++)
                        Cb(i[a])
                }
            }
            function W() {
                this.nc = {}, this.Pf = !1
            }
            function X(t, e) {
                this.ad = t, this.qa = e
            }
            function Y(t, e, n, i) {
                this.k = t, this.path = e, this.n = n, this.jc = i
            }
            function ei(t) {
                var e = null, n = null;
                if (t.la && (e = od(t)), t.na && (n = qd(t)), t.g === Vd) {
                    if (t.la) {
                        if ("[MIN_NAME]" != nd(t))
                            throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");
                        if ("string" != typeof e)
                            throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.")
                    }
                    if (t.na) {
                        if ("[MAX_NAME]" != pd(t))
                            throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");
                        if ("string" != typeof n)
                            throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.")
                    }
                } else if (t.g === M) {
                    if (null != e && !Qf(e) || null != n && !Qf(n))
                        throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).")
                } else if (J(t.g instanceof Rd || t.g === Yd, "unknown index type."), null != e && "object" == typeof e || null != n && "object" == typeof n)
                    throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.")
            }
            function fi(t) {
                if (t.la && t.na && t.ia && (!t.ia || "" === t.Nb))
                    throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");
            }
            function gi(t, e) {
                if (!0 === t.jc)
                    throw Error(e + ": You can't combine multiple orderBy calls.")
            }
            function hi(t, e, n) {
                var i = {cancel: null, Ma: null};
                if (e && n)
                    i.cancel = e, A(t, 3, i.cancel, !0), i.Ma = n, lb(t, 4, i.Ma);
                else if (e)
                    if ("object" == typeof e && null !== e)
                        i.Ma = e;
                    else {
                        if ("function" != typeof e)
                            throw Error(z(t, 3, !0) + " must either be a cancel callback or a context object.");
                        i.cancel = e
                    }
                return i
            }
            function U(t, e) {
                var n, i, r;
                if (t instanceof Kh)
                    n = t, i = e;
                else {
                    x("new Firebase", 1, 2, arguments.length), i = Rc(arguments[0]), n = i.Qg, "firebase" === i.domain && Qc(i.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"), n || Qc("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"), i.lb || "undefined" != typeof window && window.location && window.location.protocol && -1 !== window.location.protocol.indexOf("https:") && Q("Insecure Firebase access from a secure page. Please use https in calls to new Firebase()."), n = new Ec(i.host, i.lb, n, "ws" === i.scheme || "wss" === i.scheme), i = new K(i.Zc), r = i.toString();
                    var o;
                    if (!(o = !p(n.host) || 0 === n.host.length || !Pf(n.Cb)) && (o = 0 !== r.length) && (r && (r = r.replace(/^\/*\.info(\/|$)/, "/")), o = !(p(r) && 0 !== r.length && !Of.test(r))), o)
                        throw Error(z("new Firebase", 1, !1) + 'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');
                    if (e)
                        if (e instanceof W)
                            r = e;
                        else {
                            if (!p(e))
                                throw Error("Expected a valid Firebase.Context for second argument to new Firebase()");
                            r = W.ub(), n.Ld = e
                        }
                    else
                        r = W.ub();
                    o = n.toString();
                    var a = w(r.nc, o);
                    a || (a = new Kh(n, r.Pf), r.nc[o] = a), n = a
                }
                Y.call(this, n, i, $d, !1)
            }
            function Nc(t, e) {
                J(!e || !0 === t || !1 === t, "Can't turn on custom loggers persistently."), !0 === t ? ("undefined" != typeof console && ("function" == typeof console.log ? Ab = q(console.log, console) : "object" == typeof console.log && (Ab = function (t) {
                    console.log(t)
                })), e && P.set("logging_enabled", !0)) : t ? Ab = t : (Ab = null, P.remove("logging_enabled"))
            }
            var h, aa = this, la = Date.now || function () {
                return +new Date
            }, ya = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), Ea = {'"': '\\"', "\\": "\\\\", "/": "\\/", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t", "": "\\u000b"}, Fa = /\uffff/.test("?") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g, Ha;
            t:{
                var Ia = aa.navigator;
                if (Ia) {
                    var Ja = Ia.userAgent;
                    if (Ja) {
                        Ha = Ja;
                        break t
                    }
                }
                Ha = ""
            }
            ma(La, Ka), La.prototype.reset = function () {
                this.R[0] = 1732584193, this.R[1] = 4023233417, this.R[2] = 2562383102, this.R[3] = 271733878, this.R[4] = 3285377520, this.be = this.$b = 0
            }, La.prototype.update = function (t, e) {
                if (null != t) {
                    n(e) || (e = t.length);
                    for (var i = e - this.Wa, r = 0, o = this.le, a = this.$b; e > r; ) {
                        if (0 == a)
                            for (; i >= r; )
                                Ma(this, t, r), r += this.Wa;
                        if (p(t)) {
                            for (; e > r; )
                                if (o[a] = t.charCodeAt(r), ++a, ++r, a == this.Wa) {
                                    Ma(this, o), a = 0;
                                    break
                                }
                        } else
                            for (; e > r; )
                                if (o[a] = t[r], ++a, ++r, a == this.Wa) {
                                    Ma(this, o), a = 0;
                                    break
                                }
                    }
                    this.$b = a, this.be += e
                }
            };
            var t = Array.prototype, Na = t.indexOf ? function (e, n, i) {
                return t.indexOf.call(e, n, i)
            } : function (t, e, n) {
                if (n = null == n ? 0 : 0 > n ? Math.max(0, t.length + n) : n, p(t))
                    return p(e) && 1 == e.length ? t.indexOf(e, n) : -1;
                for (; n < t.length; n++)
                    if (n in t && t[n] === e)
                        return n;
                return -1
            }, Oa = t.forEach ? function (e, n, i) {
                t.forEach.call(e, n, i)
            } : function (t, e, n) {
                for (var i = t.length, r = p(t) ? t.split("") : t, o = 0; i > o; o++)
                    o in r && e.call(n, r[o], o, t)
            }, Pa = t.filter ? function (e, n, i) {
                return t.filter.call(e, n, i)
            } : function (t, e, n) {
                for (var i = t.length, r = [], o = 0, a = p(t) ? t.split("") : t, s = 0; i > s; s++)
                    if (s in a) {
                        var u = a[s];
                        e.call(n, u, s, t) && (r[o++] = u)
                    }
                return r
            }, Qa = t.map ? function (e, n, i) {
                return t.map.call(e, n, i)
            } : function (t, e, n) {
                for (var i = t.length, r = Array(i), o = p(t) ? t.split("") : t, a = 0; i > a; a++)
                    a in o && (r[a] = e.call(n, o[a], a, t));
                return r
            }, Ra = t.reduce ? function (e, n, i, r) {
                for (var o = [], a = 1, s = arguments.length; s > a; a++)
                    o.push(arguments[a]);
                return r && (o[0] = q(n, r)), t.reduce.apply(e, o)
            } : function (t, e, n, i) {
                var r = n;
                return Oa(t, function (n, o) {
                    r = e.call(i, r, n, o, t)
                }), r
            }, Sa = t.every ? function (e, n, i) {
                return t.every.call(e, n, i)
            } : function (t, e, n) {
                for (var i = t.length, r = p(t) ? t.split("") : t, o = 0; i > o; o++)
                    if (o in r && !e.call(n, r[o], o, t))
                        return!1;
                return!0
            }, Za = -1 != Ha.indexOf("Opera") || -1 != Ha.indexOf("OPR"), $a = -1 != Ha.indexOf("Trident") || -1 != Ha.indexOf("MSIE"), ab = -1 != Ha.indexOf("Gecko") && -1 == Ha.toLowerCase().indexOf("webkit") && !(-1 != Ha.indexOf("Trident") || -1 != Ha.indexOf("MSIE")), bb = -1 != Ha.toLowerCase().indexOf("webkit");
            !function () {
                var t, e = "";
                return Za && aa.opera ? (e = aa.opera.version, ha(e) ? e() : e) : (ab ? t = /rv\:([^\);]+)(\)|;)/ : $a ? t = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : bb && (t = /WebKit\/(\S+)/), t && (e = (e = t.exec(Ha)) ? e[1] : ""), $a && (t = (t = aa.document) ? t.documentMode : void 0, t > parseFloat(e)) ? String(t) : e)
            }();
            var cb = null, db = null, eb = null;
            nb.prototype.j = function (t) {
                return this.Sd.oa(t)
            }, nb.prototype.toString = function () {
                return this.Sd.toString()
            }, ob.prototype.pf = function () {
                return null
            }, ob.prototype.xe = function () {
                return null
            };
            var pb = new ob;
            qb.prototype.pf = function (t) {
                var e = this.Ka.D;
                return rb(e, t) ? e.j().M(t) : (e = null != this.Hd ? new sb(this.Hd, !0, !1) : this.Ka.u(), this.Qf.Xa(t, e))
            }, qb.prototype.xe = function (t, e, n) {
                var i = null != this.Hd ? this.Hd : tb(this.Ka);
                return t = this.Qf.me(i, e, 1, n, t), 0 === t.length ? null : t[0]
            }, wb.prototype.add = function (t) {
                this.sd.push(t)
            }, wb.prototype.Yb = function () {
                return this.qa
            };
            var Eb = "value";
            Fb.prototype.Yb = function () {
                var t = this.Wd.lc();
                return"value" === this.rd ? t.path : t.parent().path
            }, Fb.prototype.ye = function () {
                return this.rd
            }, Fb.prototype.Ub = function () {
                return this.te.Ub(this)
            }, Fb.prototype.toString = function () {
                return this.Yb().toString() + ":" + this.rd + ":" + B(this.Wd.lf())
            }, Gb.prototype.Yb = function () {
                return this.path
            }, Gb.prototype.ye = function () {
                return"cancel"
            }, Gb.prototype.Ub = function () {
                return this.te.Ub(this)
            }, Gb.prototype.toString = function () {
                return this.path.toString() + ":cancel"
            }, sb.prototype.j = function () {
                return this.B
            }, Ib.prototype.get = function () {
                var t = this.dg.get(), e = xa(t);
                if (this.Ad)
                    for (var n in this.Ad)
                        e[n] -= this.Ad[n];
                return this.Ad = t, e
            }, Jb.prototype.Hf = function () {
                var t, e = this.Yd.get(), n = {}, i = !1;
                for (t in e)
                    0 < e[t] && u(this.Mf, t) && (n[t] = e[t], i = !0);
                i && this.ca.Te(n), setTimeout(q(this.Hf, this), Math.floor(6e5 * Math.random()))
            }, Kb.prototype.get = function () {
                return xa(this.Dc)
            };
            var Mb = {}, Nb = {};
            Ub.prototype.Wc = function (t) {
                return this.path.e() ? new Ub(this.source, F, this.Ia.M(t)) : new Ub(this.source, G(this.path), this.Ia)
            }, Ub.prototype.toString = function () {
                return"Operation(" + this.path + ": " + this.source.toString() + " overwrite: " + this.Ia.toString() + ")"
            }, Wb.prototype.Wc = function () {
                return this.path.e() ? this : new Wb(G(this.path), this.Ve)
            }, Wb.prototype.toString = function () {
                return"Operation(" + this.path + ": " + this.source.toString() + " ack write revert=" + this.Ve + ")"
            }, Zb.prototype.Wc = function () {
                return this.path.e() ? new Zb(this.source, F) : new Zb(this.source, G(this.path))
            }, Zb.prototype.toString = function () {
                return"Operation(" + this.path + ": " + this.source.toString() + " listen_complete)"
            }, h = ac.prototype, h.Na = function (t, e) {
                return new ac(this.La, this.xa.Na(t, e, this.La).X(null, null, !1, null, null))
            }, h.remove = function (t) {
                return new ac(this.La, this.xa.remove(t, this.La).X(null, null, !1, null, null))
            }, h.get = function (t) {
                for (var e, n = this.xa; !n.e(); ) {
                    if (e = this.La(t, n.key), 0 === e)
                        return n.value;
                    0 > e ? n = n.left : e > 0 && (n = n.right)
                }
                return null
            }, h.e = function () {
                return this.xa.e()
            }, h.count = function () {
                return this.xa.count()
            }, h.Rc = function () {
                return this.xa.Rc()
            }, h.ec = function () {
                return this.xa.ec()
            }, h.ha = function (t) {
                return this.xa.ha(t)
            }, h.Wb = function (t) {
                return new dc(this.xa, null, this.La, !1, t)
            }, h.Xb = function (t, e) {
                return new dc(this.xa, t, this.La, !1, e)
            }, h.Zb = function (t, e) {
                return new dc(this.xa, t, this.La, !0, e)
            }, h.rf = function (t) {
                return new dc(this.xa, null, this.La, !0, t)
            }, h = fc.prototype, h.X = function (t, e, n, i, r) {
                return new fc(null != t ? t : this.key, null != e ? e : this.value, null != n ? n : this.color, null != i ? i : this.left, null != r ? r : this.right)
            }, h.count = function () {
                return this.left.count() + 1 + this.right.count()
            }, h.e = function () {
                return!1
            }, h.ha = function (t) {
                return this.left.ha(t) || t(this.key, this.value) || this.right.ha(t)
            }, h.Rc = function () {
                return gc(this).key
            }, h.ec = function () {
                return this.right.e() ? this.key : this.right.ec()
            }, h.Na = function (t, e, n) {
                var i, r;
                return r = this, i = n(t, r.key), r = 0 > i ? r.X(null, null, null, r.left.Na(t, e, n), null) : 0 === i ? r.X(null, e, null, null, null) : r.X(null, null, null, null, r.right.Na(t, e, n)), hc(r)
            }, h.remove = function (t, e) {
                var n, i;
                if (n = this, 0 > e(t, n.key))
                    n.left.e() || n.left.fa() || n.left.left.fa() || (n = jc(n)), n = n.X(null, null, null, n.left.remove(t, e), null);
                else {
                    if (n.left.fa() && (n = kc(n)), n.right.e() || n.right.fa() || n.right.left.fa() || (n = lc(n), n.left.left.fa() && (n = kc(n), n = lc(n))), 0 === e(t, n.key)) {
                        if (n.right.e())
                            return bc;
                        i = gc(n.right), n = n.X(i.key, i.value, null, null, ic(n.right))
                    }
                    n = n.X(null, null, null, null, n.right.remove(t, e))
                }
                return hc(n)
            }, h.fa = function () {
                return this.color
            }, h = nc.prototype, h.X = function () {
                return this
            }, h.Na = function (t, e) {
                return new fc(t, e, null)
            }, h.remove = function () {
                return this
            }, h.count = function () {
                return 0
            }, h.e = function () {
                return!0
            }, h.ha = function () {
                return!1
            }, h.Rc = function () {
                return null
            }, h.ec = function () {
                return null
            }, h.fa = function () {
                return!1
            };
            var bc = new nc;
            h = K.prototype, h.toString = function () {
                for (var t = "", e = this.Y; e < this.o.length; e++)
                    "" !== this.o[e] && (t += "/" + this.o[e]);
                return t || "/"
            }, h.slice = function (t) {
                return this.o.slice(this.Y + (t || 0))
            }, h.parent = function () {
                if (this.Y >= this.o.length)
                    return null;
                for (var t = [], e = this.Y; e < this.o.length - 1; e++)
                    t.push(this.o[e]);
                return new K(t, 0)
            }, h.w = function (t) {
                for (var e = [], n = this.Y; n < this.o.length; n++)
                    e.push(this.o[n]);
                if (t instanceof K)
                    for (n = t.Y; n < t.o.length; n++)
                        e.push(t.o[n]);
                else
                    for (t = t.split("/"), n = 0; n < t.length; n++)
                        0 < t[n].length && e.push(t[n]);
                return new K(e, 0)
            }, h.e = function () {
                return this.Y >= this.o.length
            }, h.Z = function (t) {
                if (uc(this) !== uc(t))
                    return!1;
                for (var e = this.Y, n = t.Y; e <= this.o.length; e++, n++)
                    if (this.o[e] !== t.o[n])
                        return!1;
                return!0
            }, h.contains = function (t) {
                var e = this.Y, n = t.Y;
                if (uc(this) > uc(t))
                    return!1;
                for (; e < this.o.length; ) {
                    if (this.o[e] !== t.o[n])
                        return!1;
                    ++e, ++n
                }
                return!0
            };
            var F = new K("");
            wc.prototype.push = function (t) {
                0 < this.Qa.length && (this.Ea += 1), this.Qa.push(t), this.Ea += xc(t), yc(this)
            }, wc.prototype.pop = function () {
                var t = this.Qa.pop();
                this.Ea -= xc(t), 0 < this.Qa.length && --this.Ea
            }, Ac.prototype.set = function (t, e) {
                null == e ? delete this.wc[t] : this.wc[t] = e
            }, Ac.prototype.get = function (t) {
                return u(this.wc, t) ? this.wc[t] : null
            }, Ac.prototype.remove = function (t) {
                delete this.wc[t]
            }, Ac.prototype.uf = !0, h = Bc.prototype, h.set = function (t, e) {
                null == e ? this.Ec.removeItem(this.Md + t) : this.Ec.setItem(this.Md + t, B(e))
            }, h.get = function (t) {
                return t = this.Ec.getItem(this.Md + t), null == t ? null : mb(t)
            }, h.remove = function (t) {
                this.Ec.removeItem(this.Md + t)
            }, h.uf = !1, h.toString = function () {
                return this.Ec.toString()
            };
            var Dc = Cc("localStorage"), P = Cc("sessionStorage");
            Ec.prototype.toString = function () {
                var t = (this.lb ? "https://" : "http://") + this.host;
                return this.Ld && (t += "<" + this.Ld + ">"), t
            };
            var Gc = function () {
                var t = 1;
                return function () {
                    return t++
                }
            }(), Ab = null, Mc = !0, $c = /^-?\d{1,10}$/;
            dd.prototype.eg = function (t, e) {
                if (null == t.Ya || null == e.Ya)
                    throw Hc("Should only compare child_ events.");
                return this.g.compare(new E(t.Ya, t.Ja), new E(e.Ya, e.Ja))
            }, h = jd.prototype, h.Jf = function (t) {
                return"value" === t
            }, h.createEvent = function (t, e) {
                var n = e.n.g;
                return new Fb("value", this, new S(t.Ja, e.lc(), n))
            }, h.Ub = function (t) {
                var e = this.sb;
                if ("cancel" === t.ye()) {
                    J(this.qb, "Raising a cancel event on a listener with no cancel callback");
                    var n = this.qb;
                    return function () {
                        n.call(e, t.error)
                    }
                }
                var i = this.Pb;
                return function () {
                    i.call(e, t.Wd)
                }
            }, h.ff = function (t, e) {
                return this.qb ? new Gb(this, t, e) : null
            }, h.matches = function (t) {
                return t instanceof jd ? t.Pb && this.Pb ? t.Pb === this.Pb && t.sb === this.sb : !0 : !1
            }, h.sf = function () {
                return null !== this.Pb
            }, h = kd.prototype, h.Jf = function (t) {
                return t = "children_added" === t ? "child_added" : t, ("children_removed" === t ? "child_removed" : t)in this.ga
            }, h.ff = function (t, e) {
                return this.qb ? new Gb(this, t, e) : null
            }, h.createEvent = function (t, e) {
                J(null != t.Ya, "Child events should have a childName.");
                var n = e.lc().w(t.Ya);
                return new Fb(t.type, this, new S(t.Ja, n, e.n.g), t.Nd)
            }, h.Ub = function (t) {
                var e = this.sb;
                if ("cancel" === t.ye()) {
                    J(this.qb, "Raising a cancel event on a listener with no cancel callback");
                    var n = this.qb;
                    return function () {
                        n.call(e, t.error)
                    }
                }
                var i = this.ga[t.rd];
                return function () {
                    i.call(e, t.Wd, t.Nd)
                }
            }, h.matches = function (t) {
                if (t instanceof kd) {
                    if (!this.ga || !t.ga)
                        return!0;
                    if (this.sb === t.sb) {
                        var e = pa(t.ga);
                        if (e === pa(this.ga)) {
                            if (1 === e) {
                                var e = qa(t.ga), n = qa(this.ga);
                                return!(n !== e || t.ga[e] && this.ga[n] && t.ga[e] !== this.ga[n])
                            }
                            return oa(this.ga, function (e, n) {
                                return t.ga[n] === e
                            })
                        }
                    }
                }
                return!1
            }, h.sf = function () {
                return null !== this.ga
            }, h = ld.prototype, h.G = function (t, e, n, i, r) {
                return J(t.Ic(this.g), "A node must be indexed if only a child is updated"), i = t.M(e), i.Z(n) ? t : (null != r && (n.e() ? t.Ha(e) ? id(r, new D("child_removed", i, e)) : J(t.N(), "A child remove without an old child only makes sense on a leaf node") : i.e() ? id(r, new D("child_added", n, e)) : id(r, new D("child_changed", n, e, i))), t.N() && n.e() ? t : t.Q(e, n).mb(this.g))
            }, h.ta = function (t, e, n) {
                return null != n && (t.N() || t.U(M, function (t, i) {
                    e.Ha(t) || id(n, new D("child_removed", i, t))
                }), e.N() || e.U(M, function (e, i) {
                    if (t.Ha(e)) {
                        var r = t.M(e);
                        r.Z(i) || id(n, new D("child_changed", i, e, r))
                    } else
                        id(n, new D("child_added", i, e))
                })), e.mb(this.g)
            }, h.da = function (t, e) {
                return t.e() ? C : t.da(e)
            }, h.Ga = function () {
                return!1
            }, h.Vb = function () {
                return this
            }, h = md.prototype, h.matches = function (t) {
                return 0 >= this.g.compare(this.dd, t) && 0 >= this.g.compare(t, this.Fc)
            }, h.G = function (t, e, n, i, r) {
                return this.matches(new E(e, n)) || (n = C), this.Ae.G(t, e, n, i, r)
            }, h.ta = function (t, e, n) {
                e.N() && (e = C);
                var i = e.mb(this.g), i = i.da(C), r = this;
                return e.U(M, function (t, e) {
                    r.matches(new E(t, e)) || (i = i.Q(t, C))
                }), this.Ae.ta(t, i, n)
            }, h.da = function (t) {
                return t
            }, h.Ga = function () {
                return!0
            }, h.Vb = function () {
                return this.Ae
            }, h = rd.prototype, h.G = function (t, e, n, i, r) {
                return this.ra.matches(new E(e, n)) || (n = C), t.M(e).Z(n) ? t : t.Db() < this.ja ? this.ra.Vb().G(t, e, n, i, r) : td(this, t, e, n, i, r)
            }, h.ta = function (t, e, n) {
                var i;
                if (e.N() || e.e())
                    i = C.mb(this.g);
                else if (2 * this.ja < e.Db() && e.Ic(this.g)) {
                    i = C.mb(this.g), e = this.Jb ? e.Zb(this.ra.Fc, this.g) : e.Xb(this.ra.dd, this.g);
                    for (var r = 0; 0 < e.Pa.length && r < this.ja; ) {
                        var o, a = H(e);
                        if (!(o = this.Jb ? 0 >= this.g.compare(this.ra.dd, a) : 0 >= this.g.compare(a, this.ra.Fc)))
                            break;
                        i = i.Q(a.name, a.S), r++
                    }
                } else {
                    i = e.mb(this.g), i = i.da(C);
                    var s, u, h;
                    if (this.Jb) {
                        e = i.rf(this.g), s = this.ra.Fc, u = this.ra.dd;
                        var c = ud(this.g);
                        h = function (t, e) {
                            return c(e, t)
                        }
                    } else
                        e = i.Wb(this.g), s = this.ra.dd, u = this.ra.Fc, h = ud(this.g);
                    for (var r = 0, f = !1; 0 < e.Pa.length; )
                        a = H(e), !f && 0 >= h(s, a) && (f = !0), (o = f && r < this.ja && 0 >= h(a, u)) ? r++ : i = i.Q(a.name, C)
                }
                return this.ra.Vb().ta(t, i, n)
            }, h.da = function (t) {
                return t
            }, h.Ga = function () {
                return!0
            }, h.Vb = function () {
                return this.ra.Vb()
            }, zd.prototype.bb = function (t, e, n, i) {
                var r, o = new hd;
                if (e.type === Vb)
                    e.source.ve ? n = Ad(this, t, e.path, e.Ia, n, i, o) : (J(e.source.of, "Unknown source."), r = e.source.af, n = Bd(this, t, e.path, e.Ia, n, i, r, o));
                else if (e.type === Cd)
                    e.source.ve ? n = Dd(this, t, e.path, e.children, n, i, o) : (J(e.source.of, "Unknown source."), r = e.source.af, n = Ed(this, t, e.path, e.children, n, i, r, o));
                else if (e.type === Xb)
                    if (e.Ve)
                        if (r = e.path, null != n.sc(r))
                            n = t;
                        else {
                            if (e = new qb(n, t, i), i = t.D.j(), r.e() || ".priority" === O(r))
                                Hb(t.u()) ? e = n.ua(tb(t)) : (e = t.u().j(), J(e instanceof T, "serverChildren would be complete if leaf node"), e = n.xc(e)), e = this.I.ta(i, e, o);
                            else {
                                r = O(r);
                                var a = n.Xa(r, t.u());
                                null == a && rb(t.u(), r) && (a = i.M(r)), e = null != a ? this.I.G(i, r, a, e, o) : t.D.j().Ha(r) ? this.I.G(i, r, C, e, o) : i, e.e() && Hb(t.u()) && (i = n.ua(tb(t)), i.N() && (e = this.I.ta(e, i, o)))
                            }
                            i = Hb(t.u()) || null != n.sc(F), n = Fd(t, e, i, this.I.Ga())
                        }
                    else
                        n = Gd(this, t, e.path, n, i, o);
                else {
                    if (e.type !== $b)
                        throw Hc("Unknown operation type: " + e.type);
                    i = e.path, e = t.u(), r = e.j(), a = e.$ || i.e(), n = Hd(this, new Id(t.D, new sb(r, a, e.Tb)), i, n, pb, o)
                }
                return o = ra(o.eb), i = n, e = i.D, e.$ && (r = e.j().N() || e.j().e(), a = Jd(t), (0 < o.length || !t.D.$ || r && !e.j().Z(a) || !e.j().A().Z(a.A())) && o.push(Db(Jd(i)))), new yd(n, o)
            };
            var Pd = {};
            Od.prototype.xd = function (t, e) {
                return 0 !== this.compare(new E("[MIN_NAME]", t), new E("[MIN_NAME]", e))
            }, Od.prototype.Sc = function () {
                return Qd
            }, ma(Rd, Od), h = Rd.prototype, h.Hc = function (t) {
                return!t.M(this.bc).e()
            }, h.compare = function (t, e) {
                var n = t.S.M(this.bc), i = e.S.M(this.bc), n = n.Cc(i);
                return 0 === n ? Sb(t.name, e.name) : n
            }, h.Oc = function (t, e) {
                var n = L(t), n = C.Q(this.bc, n);
                return new E(e, n)
            }, h.Pc = function () {
                var t = C.Q(this.bc, Sd);
                return new E("[MAX_NAME]", t)
            }, h.toString = function () {
                return this.bc
            }, ma(Td, Od), h = Td.prototype, h.compare = function (t, e) {
                var n = t.S.A(), i = e.S.A(), n = n.Cc(i);
                return 0 === n ? Sb(t.name, e.name) : n
            }, h.Hc = function (t) {
                return!t.A().e()
            }, h.xd = function (t, e) {
                return!t.A().Z(e.A())
            }, h.Sc = function () {
                return Qd
            }, h.Pc = function () {
                return new E("[MAX_NAME]", new tc("[PRIORITY-POST]", Sd))
            }, h.Oc = function (t, e) {
                var n = L(t);
                return new E(e, new tc("[PRIORITY-POST]", n))
            }, h.toString = function () {
                return".priority"
            };
            var M = new Td;
            ma(Ud, Od), h = Ud.prototype, h.compare = function (t, e) {
                return Sb(t.name, e.name)
            }, h.Hc = function () {
                throw Hc("KeyIndex.isDefinedOn not expected to be called.")
            }, h.xd = function () {
                return!1
            }, h.Sc = function () {
                return Qd
            }, h.Pc = function () {
                return new E("[MAX_NAME]", C)
            }, h.Oc = function (t) {
                return J(p(t), "KeyIndex indexValue must always be a string."), new E(t, C)
            }, h.toString = function () {
                return".key"
            };
            var Vd = new Ud;
            ma(Wd, Od), h = Wd.prototype, h.compare = function (t, e) {
                var n = t.S.Cc(e.S);
                return 0 === n ? Sb(t.name, e.name) : n
            }, h.Hc = function () {
                return!0
            }, h.xd = function (t, e) {
                return!t.Z(e)
            }, h.Sc = function () {
                return Qd
            }, h.Pc = function () {
                return Xd
            }, h.Oc = function (t, e) {
                var n = L(t);
                return new E(e, n)
            }, h.toString = function () {
                return".value"
            };
            var Yd = new Wd, $d = new Zd;
            h = Zd.prototype, h.Ge = function (t) {
                var e = ae(this);
                return e.ia = !0, e.ja = t, e.Nb = "", e
            }, h.He = function (t) {
                var e = ae(this);
                return e.ia = !0, e.ja = t, e.Nb = "l", e
            }, h.Ie = function (t) {
                var e = ae(this);
                return e.ia = !0, e.ja = t, e.Nb = "r", e
            }, h.Xd = function (t, e) {
                var i = ae(this);
                return i.la = !0, n(t) || (t = null), i.dc = t, null != e ? (i.Lb = !0, i.xb = e) : (i.Lb = !1, i.xb = ""), i
            }, h.qd = function (t, e) {
                var i = ae(this);
                return i.na = !0, n(t) || (t = null), i.ac = t, n(e) ? (i.Rb = !0, i.vb = e) : (i.Yg = !1, i.vb = ""), i
            }, h.toString = function () {
                return B(ce(this))
            }, fe.prototype.get = function (t) {
                var e = w(this.yd, t);
                if (!e)
                    throw Error("No index defined for " + t);
                return e === Pd ? null : e
            };
            var je = new fe({".priority": Pd}, {".priority": M});
            h = tc.prototype, h.N = function () {
                return!0
            }, h.A = function () {
                return this.ba
            }, h.da = function (t) {
                return new tc(this.C, t)
            }, h.M = function (t) {
                return".priority" === t ? this.ba : C
            }, h.oa = function (t) {
                return t.e() ? this : ".priority" === O(t) ? this.ba : C
            }, h.Ha = function () {
                return!1
            }, h.qf = function () {
                return null
            }, h.Q = function (t, e) {
                return".priority" === t ? this.da(e) : e.e() && ".priority" !== t ? this : C.Q(t, e).da(this.ba)
            }, h.G = function (t, e) {
                var n = O(t);
                return null === n ? e : e.e() && ".priority" !== n ? this : (J(".priority" !== n || 1 === uc(t), ".priority must be the last token in a path"), this.Q(n, C.G(G(t), e)))
            }, h.e = function () {
                return!1
            }, h.Db = function () {
                return 0
            }, h.K = function (t) {
                return t && !this.A().e() ? {".value": this.Ba(), ".priority": this.A().K()} : this.Ba()
            }, h.hash = function () {
                if (null === this.Bb) {
                    var t = "";
                    this.ba.e() || (t += "priority:" + le(this.ba.K()) + ":");
                    var e = typeof this.C, t = t + (e + ":"), t = "number" === e ? t + Zc(this.C) : t + this.C;
                    this.Bb = Jc(t)
                }
                return this.Bb
            }, h.Ba = function () {
                return this.C
            }, h.Cc = function (t) {
                if (t === C)
                    return 1;
                if (t instanceof T)
                    return -1;
                J(t.N(), "Unknown node type");
                var e = typeof t.C, n = typeof this.C, i = Na(me, e), r = Na(me, n);
                return J(i >= 0, "Unknown leaf type: " + e), J(r >= 0, "Unknown leaf type: " + n), i === r ? "object" === n ? 0 : this.C < t.C ? -1 : this.C === t.C ? 0 : 1 : r - i
            };
            var me = ["object", "boolean", "number", "string"];
            tc.prototype.mb = function () {
                return this
            }, tc.prototype.Ic = function () {
                return!0
            }, tc.prototype.Z = function (t) {
                return t === this ? !0 : t.N() ? this.C === t.C && this.ba.Z(t.ba) : !1
            }, tc.prototype.toString = function () {
                return B(this.K(!0))
            }, h = T.prototype, h.N = function () {
                return!1
            }, h.A = function () {
                return this.ba || C
            }, h.da = function (t) {
                return this.m.e() ? this : new T(this.m, t, this.wb)
            }, h.M = function (t) {
                return".priority" === t ? this.A() : (t = this.m.get(t), null === t ? C : t)
            }, h.oa = function (t) {
                var e = O(t);
                return null === e ? this : this.M(e).oa(G(t))
            }, h.Ha = function (t) {
                return null !== this.m.get(t)
            }, h.Q = function (t, e) {
                if (J(e, "We should always be passing snapshot nodes"), ".priority" === t)
                    return this.da(e);
                var n, i, r = new E(t, e);
                return e.e() ? (n = this.m.remove(t), r = ie(this.wb, r, this.m)) : (n = this.m.Na(t, e), r = ge(this.wb, r, this.m)), i = n.e() ? C : this.ba, new T(n, i, r)
            }, h.G = function (t, e) {
                var n = O(t);
                if (null === n)
                    return e;
                J(".priority" !== O(t) || 1 === uc(t), ".priority must be the last token in a path");
                var i = this.M(n).G(G(t), e);
                return this.Q(n, i)
            }, h.e = function () {
                return this.m.e()
            }, h.Db = function () {
                return this.m.count()
            };
            var ne = /^(0|[1-9]\d*)$/;
            h = T.prototype, h.K = function (t) {
                if (this.e())
                    return null;
                var e = {}, n = 0, i = 0, r = !0;
                if (this.U(M, function (o, a) {
                    e[o] = a.K(t), n++, r && ne.test(o) ? i = Math.max(i, Number(o)) : r = !1
                }), !t && r && 2 * n > i) {
                    var o, a = [];
                    for (o in e)
                        a[o] = e[o];
                    return a
                }
                return t && !this.A().e() && (e[".priority"] = this.A().K()), e
            }, h.hash = function () {
                if (null === this.Bb) {
                    var t = "";
                    this.A().e() || (t += "priority:" + le(this.A().K()) + ":"), this.U(M, function (e, n) {
                        var i = n.hash();
                        "" !== i && (t += ":" + e + ":" + i)
                    }), this.Bb = "" === t ? "" : Jc(t)
                }
                return this.Bb
            }, h.qf = function (t, e, n) {
                return(n = oe(this, n)) ? (t = cc(n, new E(t, e))) ? t.name : null : cc(this.m, t)
            }, h.U = function (t, e) {
                var n = oe(this, t);
                return n ? n.ha(function (t) {
                    return e(t.name, t.S)
                }) : this.m.ha(e)
            }, h.Wb = function (t) {
                return this.Xb(t.Sc(), t)
            }, h.Xb = function (t, e) {
                var n = oe(this, e);
                if (n)
                    return n.Xb(t, function (t) {
                        return t
                    });
                for (var n = this.m.Xb(t.name, Qb), i = ec(n); null != i && 0 > e.compare(i, t); )
                    H(n), i = ec(n);
                return n
            }, h.rf = function (t) {
                return this.Zb(t.Pc(), t)
            }, h.Zb = function (t, e) {
                var n = oe(this, e);
                if (n)
                    return n.Zb(t, function (t) {
                        return t
                    });
                for (var n = this.m.Zb(t.name, Qb), i = ec(n); null != i && 0 < e.compare(i, t); )
                    H(n), i = ec(n);
                return n
            }, h.Cc = function (t) {
                return this.e() ? t.e() ? 0 : -1 : t.N() || t.e() ? 1 : t === Sd ? -1 : 0
            }, h.mb = function (t) {
                if (t === Vd || ta(this.wb.cc, t.toString()))
                    return this;
                var e = this.wb, n = this.m;
                J(t !== Vd, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
                for (var i = [], r = !1, n = n.Wb(Qb), o = H(n); o; )
                    r = r || t.Hc(o.S), i.push(o), o = H(n);
                return i = r ? he(i, ud(t)) : Pd, r = t.toString(), n = xa(e.cc), n[r] = t, t = xa(e.yd), t[r] = i, new T(this.m, this.ba, new fe(t, n))
            }, h.Ic = function (t) {
                return t === Vd || ta(this.wb.cc, t.toString())
            }, h.Z = function (t) {
                if (t === this)
                    return!0;
                if (t.N())
                    return!1;
                if (this.A().Z(t.A()) && this.m.count() === t.m.count()) {
                    var e = this.Wb(M);
                    t = t.Wb(M);
                    for (var n = H(e), i = H(t); n && i; ) {
                        if (n.name !== i.name || !n.S.Z(i.S))
                            return!1;
                        n = H(e), i = H(t)
                    }
                    return null === n && null === i
                }
                return!1
            }, h.toString = function () {
                return B(this.K(!0))
            };
            var pe = Math.log(2), C = new T(new ac(Tb), null, je);
            ma(se, T), h = se.prototype, h.Cc = function (t) {
                return t === this ? 0 : 1
            }, h.Z = function (t) {
                return t === this
            }, h.A = function () {
                return this
            }, h.M = function () {
                return C
            }, h.e = function () {
                return!1
            };
            var Sd = new se, Qd = new E("[MIN_NAME]", C), Xd = new E("[MAX_NAME]", Sd);
            Id.prototype.u = function () {
                return this.Ud
            }, h = te.prototype, h.u = function () {
                return this.Ka.u().j()
            }, h.hb = function (t) {
                var e = tb(this.Ka);
                return e && (de(this.V.n) || !t.e() && !e.M(O(t)).e()) ? e.oa(t) : null
            }, h.e = function () {
                return 0 === this.Za.length
            }, h.Ob = function (t) {
                this.Za.push(t)
            }, h.kb = function (t, e) {
                var n = [];
                if (e) {
                    J(null == t, "A cancel should cancel all event registrations.");
                    var i = this.V.path;
                    Oa(this.Za, function (t) {
                        (t = t.ff(e, i)) && n.push(t)
                    })
                }
                if (t) {
                    for (var r = [], o = 0; o < this.Za.length; ++o) {
                        var a = this.Za[o];
                        if (a.matches(t)) {
                            if (t.sf()) {
                                r = r.concat(this.Za.slice(o + 1));
                                break
                            }
                        } else
                            r.push(a)
                    }
                    this.Za = r
                } else
                    this.Za = [];
                return n
            }, h.bb = function (t, e, n) {
                t.type === Cd && null !== t.source.Ib && (J(tb(this.Ka), "We should always have a full cache before handling merges"), J(Jd(this.Ka), "Missing event cache, even though we have a server cache"));
                var i = this.Ka;
                return t = this.Gf.bb(i, t, e, n), e = this.Gf, n = t.he, J(n.D.j().Ic(e.I.g), "Event snap not indexed"), J(n.u().j().Ic(e.I.g), "Server snap not indexed"), J(Hb(t.he.u()) || !Hb(i.u()), "Once a server snap is complete, it should never go back"), this.Ka = t.he, ve(this, t.cg, t.he.D.j(), null)
            }, xe.prototype.Wc = function (t) {
                return this.path.e() ? (t = this.children.subtree(new K(t)), t.e() ? null : t.value ? new Ub(this.source, F, t.value) : new xe(this.source, F, t)) : (J(O(this.path) === t, "Can't get a merge for a child not on the path of the operation"), new xe(this.source, G(this.path), this.children))
            }, xe.prototype.toString = function () {
                return"Operation(" + this.path + ": " + this.source.toString() + " merge: " + this.children.toString() + ")"
            };
            var Vb = 0, Cd = 1, Xb = 2, $b = 3, Yb = new ye(!0, !1, null, !1), ze = new ye(!1, !0, null, !1);
            ye.prototype.toString = function () {
                return this.ve ? "user" : this.af ? "server(queryID=" + this.Ib + ")" : "server"
            }, h = Ae.prototype, h.xf = function (t, e, n, i) {
                var r = t.path.toString();
                this.f("Listen called for " + r + " " + t.wa());
                var o = Be(t, n), a = {};
                this.aa[o] = a, t = ee(t.n);
                var s = this;
                Ce(this, r + ".json", t, function (t, e) {
                    var u = e;
                    404 === t && (t = u = null), null === t && s.Gb(r, u, !1, n), w(s.aa, o) === a && i(t ? 401 == t ? "permission_denied" : "rest_error:" + t : "ok", null)
                })
            }, h.Of = function (t, e) {
                var n = Be(t, e);
                delete this.aa[n]
            }, h.P = function (t, e) {
                this.Fa = t;
                var n = ad(t), i = n.data, n = n.Ac && n.Ac.exp;
                e && e("ok", {auth: i, expires: n})
            }, h.ee = function (t) {
                this.Fa = null, t("ok", null)
            }, h.Le = function () {}, h.Bf = function () {}, h.Gd = function () {}, h.put = function () {}, h.yf = function () {}, h.Te = function () {};
            var Ee = new ac(function (t, e) {
                return t === e ? 0 : e > t ? -1 : 1
            });
            h = De.prototype, h.e = function () {
                return null === this.value && this.children.e()
            }, h.subtree = function (t) {
                if (t.e())
                    return this;
                var e = this.children.get(O(t));
                return null !== e ? e.subtree(G(t)) : Nd
            }, h.set = function (t, e) {
                if (t.e())
                    return new De(e, this.children);
                var n = O(t), i = (this.children.get(n) || Nd).set(G(t), e), n = this.children.Na(n, i);
                return new De(this.value, n)
            }, h.remove = function (t) {
                if (t.e())
                    return this.children.e() ? Nd : new De(null, this.children);
                var e = O(t), n = this.children.get(e);
                return n ? (t = n.remove(G(t)), e = t.e() ? this.children.remove(e) : this.children.Na(e, t), null === this.value && e.e() ? Nd : new De(this.value, e)) : this
            }, h.get = function (t) {
                if (t.e())
                    return this.value;
                var e = this.children.get(O(t));
                return e ? e.get(G(t)) : null
            };
            var Nd = new De(null);
            De.prototype.toString = function () {
                var t = {};
                return Kd(this, function (e, n) {
                    t[e.toString()] = n.toString()
                }), B(t)
            };
            var Re = new Qe(new De(null));
            Qe.prototype.Od = function (t) {
                return t.e() ? Re : (t = Md(this.W, t, Nd), new Qe(t))
            }, Qe.prototype.e = function () {
                return this.W.e()
            }, Qe.prototype.apply = function (t) {
                return Xe(F, this.W, t)
            }, h = Ye.prototype, h.Od = function (t) {
                var e = Ua(this.za, function (e) {
                    return e.ie === t
                });
                J(e >= 0, "removeWrite called with nonexistent writeId.");
                var n = this.za[e];
                this.za.splice(e, 1);
                for (var i = n.visible, o = !1, a = this.za.length - 1; i && a >= 0; ) {
                    var s = this.za[a];
                    s.visible && (a >= e && Ze(s, n.path) ? i = !1 : n.path.contains(s.path) && (o = !0)), a--
                }
                if (i) {
                    if (o)
                        this.T = $e(this.za, af, F), this.Lc = 0 < this.za.length ? this.za[this.za.length - 1].ie : -1;
                    else if (n.Ia)
                        this.T = this.T.Od(n.path);
                    else {
                        var u = this;
                        r(n.children, function (t, e) {
                            u.T = u.T.Od(n.path.w(e))
                        })
                    }
                    return n.path
                }
                return null
            }, h.ua = function (t, e, n, i) {
                if (n || i) {
                    var r = We(this.T, t);
                    return!i && r.e() ? e : i || null != e || null != Ue(r, F) ? (r = $e(this.za, function (e) {
                        return!(!e.visible && !i || n && 0 <= Na(n, e.ie) || !e.path.contains(t) && !t.contains(e.path))
                    }, t), e = e || C, r.apply(e)) : null
                }
                return r = Ue(this.T, t), null != r ? r : (r = We(this.T, t), r.e() ? e : null != e || null != Ue(r, F) ? (e = e || C, r.apply(e)) : null)
            }, h.xc = function (t, e) {
                var n = C, i = Ue(this.T, t);
                if (i)
                    i.N() || i.U(M, function (t, e) {
                        n = n.Q(t, e)
                    });
                else if (e) {
                    var r = We(this.T, t);
                    e.U(M, function (t, e) {
                        var i = We(r, new K(t)).apply(e);
                        n = n.Q(t, i)
                    }), Oa(Ve(r), function (t) {
                        n = n.Q(t.name, t.S)
                    })
                } else
                    r = We(this.T, t), Oa(Ve(r), function (t) {
                        n = n.Q(t.name, t.S)
                    });
                return n
            }, h.hd = function (t, e, n, i) {
                return J(n || i, "Either existingEventSnap or existingServerSnap must exist"), t = t.w(e), null != Ue(this.T, t) ? null : (t = We(this.T, t), t.e() ? i.oa(e) : t.apply(i.oa(e)))
            }, h.Xa = function (t, e, n) {
                t = t.w(e);
                var i = Ue(this.T, t);
                return null != i ? i : rb(n, e) ? We(this.T, t).apply(n.j().M(e)) : null
            }, h.sc = function (t) {
                return Ue(this.T, t)
            }, h.me = function (t, e, n, i, r, o) {
                var a;
                if (t = We(this.T, t), a = Ue(t, F), null == a) {
                    if (null == e)
                        return[];
                    a = t.apply(e)
                }
                if (a = a.mb(o), a.e() || a.N())
                    return[];
                for (e = [], t = ud(o), r = r?a.Zb(n, o):a.Xb(n, o), o = H(r); o && e.length < i; )
                    0 !== t(o, n) && e.push(o), o = H(r);
                return e
            }, h = bf.prototype, h.ua = function (t, e, n) {
                return this.W.ua(this.Mb, t, e, n)
            }, h.xc = function (t) {
                return this.W.xc(this.Mb, t)
            }, h.hd = function (t, e, n) {
                return this.W.hd(this.Mb, t, e, n)
            }, h.sc = function (t) {
                return this.W.sc(this.Mb.w(t))
            }, h.me = function (t, e, n, i, r) {
                return this.W.me(this.Mb, t, e, n, i, r)
            }, h.Xa = function (t, e) {
                return this.W.Xa(this.Mb, t, e)
            }, h.w = function (t) {
                return new bf(this.Mb.w(t), this.W)
            }, h = cf.prototype, h.e = function () {
                return wa(this.ya)
            }, h.bb = function (t, e, n) {
                var i = t.source.Ib;
                if (null !== i)
                    return i = w(this.ya, i), J(null != i, "SyncTree gave us an op for an invalid query."), i.bb(t, e, n);
                var o = [];
                return r(this.ya, function (i) {
                    o = o.concat(i.bb(t, e, n))
                }), o
            }, h.Ob = function (t, e, n, i, r) {
                var o = t.wa(), a = w(this.ya, o);
                if (!a) {
                    var a = n.ua(r ? i : null), s = !1;
                    a ? s = !0 : (a = i instanceof T ? n.xc(i) : C, s = !1), a = new te(t, new Id(new sb(a, s, !1), new sb(i, r, !1))), this.ya[o] = a
                }
                return a.Ob(e), we(a, e)
            }, h.kb = function (t, e, n) {
                var i = t.wa(), o = [], a = [], s = null != df(this);
                if ("default" === i) {
                    var u = this;
                    r(this.ya, function (t, i) {
                        a = a.concat(t.kb(e, n)), t.e() && (delete u.ya[i], de(t.V.n) || o.push(t.V))
                    })
                } else {
                    var h = w(this.ya, i);
                    h && (a = a.concat(h.kb(e, n)), h.e() && (delete this.ya[i], de(h.V.n) || o.push(h.V)))
                }
                return s && null == df(this) && o.push(new U(t.k, t.path)), {Hg: o, jg: a}
            }, h.hb = function (t) {
                var e = null;
                return r(this.ya, function (n) {
                    e = e || n.hb(t)
                }), e
            }, gf.prototype.Ob = function (t, e) {
                var n = t.path, i = null, r = !1;
                Me(this.sa, n, function (t, e) {
                    var o = N(t, n);
                    return i = e.hb(o), r = r || null != df(e), !i
                });
                var o = this.sa.get(n);
                o ? (r = r || null != df(o), i = i || o.hb(F)) : (o = new cf, this.sa = this.sa.set(n, o));
                var a;
                null != i ? a = !0 : (a = !1, i = C, Pe(this.sa.subtree(n), function (t, e) {
                    var n = e.hb(F);
                    n && (i = i.Q(t, n))
                }));
                var s = null != ff(o, t);
                if (!s && !de(t.n)) {
                    var u = sf(t);
                    J(!(u in this.kc), "View does not exist, but we have a tag");
                    var h = tf++;
                    this.kc[u] = h, this.$e["_" + h] = u
                }
                return a = o.Ob(t, e, new bf(n, this.Hb), i, a), s || r || (o = ff(o, t), a = a.concat(uf(this, t, o))), a
            }, gf.prototype.kb = function (t, e, n) {
                var i = t.path, r = this.sa.get(i), o = [];
                if (r && ("default" === t.wa() || null != ff(r, t))) {
                    o = r.kb(t, e, n), r.e() && (this.sa = this.sa.remove(i)), r = o.Hg, o = o.jg, e = -1 !== Ua(r, function (t) {
                        return de(t.n)
                    });
                    var a = Ke(this.sa, i, function (t, e) {
                        return null != df(e)
                    });
                    if (e && !a && (i = this.sa.subtree(i), !i.e()))
                        for (var i = vf(i), s = 0; s < i.length; ++s) {
                            var u = i[s], h = u.V, u = wf(this, u);
                            this.Mc.Xe(h, xf(this, h), u.ud, u.J)
                        }
                    if (!a && 0 < r.length && !n)
                        if (e)
                            this.Mc.Zd(t, null);
                        else {
                            var c = this;
                            Oa(r, function (t) {
                                t.wa();
                                var e = c.kc[sf(t)];
                                c.Mc.Zd(t, e)
                            })
                        }
                    yf(this, r)
                }
                return o
            }, gf.prototype.ua = function (t, e) {
                var n = this.Hb, i = Ke(this.sa, t, function (e, n) {
                    var i = N(e, t);
                    return(i = n.hb(i)) ? i : void 0
                });
                return n.ua(t, i, e, !0)
            };
            var tf = 1;
            h = Cf.prototype, h.Ba = function () {
                return this.B.value
            }, h.clear = function () {
                this.B.value = null, this.B.children = {}, this.B.kd = 0, Ff(this)
            }, h.td = function () {
                return 0 < this.B.kd
            }, h.e = function () {
                return null === this.Ba() && !this.td()
            }, h.U = function (t) {
                var e = this;
                r(this.B.children, function (n, i) {
                    t(new Cf(i, e, n))
                })
            }, h.path = function () {
                return new K(null === this.Yc ? this.Dd : this.Yc.path() + "/" + this.Dd)
            }, h.name = function () {
                return this.Dd
            }, h.parent = function () {
                return this.Yc
            }, If.prototype.de = function (t, e) {
                for (var n = this.Nc[t] || [], i = 0; i < n.length; i++)
                    n[i].yc.apply(n[i].Ma, Array.prototype.slice.call(arguments, 1))
            }, If.prototype.Eb = function (t, e, n) {
                Jf(this, t), this.Nc[t] = this.Nc[t] || [], this.Nc[t].push({yc: e, Ma: n}), (t = this.ze(t)) && e.apply(n, t)
            }, If.prototype.gc = function (t, e, n) {
                Jf(this, t), t = this.Nc[t] || [];
                for (var i = 0; i < t.length; i++)
                    if (t[i].yc === e && (!n || n === t[i].Ma)) {
                        t.splice(i, 1);
                        break
                    }
            };
            var Kf = function () {
                var t = 0, e = [];
                return function (n) {
                    var i = n === t;
                    t = n;
                    for (var r = Array(8), o = 7; o >= 0; o--)
                        r[o] = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(n % 64), n = Math.floor(n / 64);
                    if (J(0 === n, "Cannot push at time == 0"), n = r.join(""), i) {
                        for (o = 11; o >= 0 && 63 === e[o]; o--)
                            e[o] = 0;
                        e[o]++
                    } else
                        for (o = 0; 12 > o; o++)
                            e[o] = Math.floor(64 * Math.random());
                    for (o = 0; 12 > o; o++)
                        n += "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(e[o]);
                    return J(20 === n.length, "nextPushId: Length should be 20."), n
                }
            }();
            ma(Lf, If), Lf.prototype.ze = function (t) {
                return J("online" === t, "Unknown event type: " + t), [this.ic]
            }, ca(Lf), ma(Mf, If), Mf.prototype.ze = function (t) {
                return J("visible" === t, "Unknown event type: " + t), [this.uc]
            }, ca(Mf);
            var Nf = /[\[\].#$\/\u0000-\u001F\u007F]/, Of = /[\[\].#$\u0000-\u001F\u007F]/;
            h = cg.prototype, h.add = function (t, e) {
                this.set[t] = null !== e ? e : !0
            }, h.contains = function (t) {
                return u(this.set, t)
            }, h.get = function (t) {
                return this.contains(t) ? this.set[t] : void 0
            }, h.remove = function (t) {
                delete this.set[t]
            }, h.clear = function () {
                this.set = {}
            }, h.e = function () {
                return wa(this.set)
            }, h.count = function () {
                return pa(this.set)
            }, h.keys = function () {
                var t = [];
                return r(this.set, function (e, n) {
                    t.push(n)
                }), t
            }, qc.prototype.find = function (t) {
                if (null != this.C)
                    return this.C.oa(t);
                if (t.e() || null == this.m)
                    return null;
                var e = O(t);
                return t = G(t), this.m.contains(e) ? this.m.get(e).find(t) : null
            }, qc.prototype.mc = function (t, e) {
                if (t.e())
                    this.C = e, this.m = null;
                else if (null !== this.C)
                    this.C = this.C.G(t, e);
                else {
                    null == this.m && (this.m = new cg);
                    var n = O(t);
                    this.m.contains(n) || this.m.add(n, new qc), n = this.m.get(n), t = G(t), n.mc(t, e)
                }
            }, qc.prototype.U = function (t) {
                null !== this.m && dg(this.m, function (e, n) {
                    t(e, n)
                })
            };
            var fg = "auth.firebase.com", hg = ["remember", "redirectTo"];
            jg.prototype.set = function (t, e) {
                if (!e) {
                    if (!this.$d.length)
                        throw Error("fb.login.SessionManager : No storage options available!");
                    e = this.$d[0]
                }
                e.set(this.Pe, t)
            }, jg.prototype.get = function () {
                var t = Qa(this.$d, q(this.ng, this)), t = Pa(t, function (t) {
                    return null !== t
                });
                return Xa(t, function (t, e) {
                    return bd(e.token) - bd(t.token)
                }), 0 < t.length ? t.shift() : null
            }, jg.prototype.ng = function (t) {
                try {
                    var e = t.get(this.Pe);
                    if (e && e.token)
                        return e
                } catch (n) {
                }
                return null
            }, jg.prototype.clear = function () {
                var t = this;
                Oa(this.$d, function (e) {
                    e.remove(t.Pe)
                })
            }, ug.prototype.hc = function (t) {
                var e, n = this;
                try {
                    e = mb(t.data)
                } catch (i) {
                }
                e && "request" === e.a && (pg(window, "message", this.hc), this.ae = t.origin, this.zc && setTimeout(function () {
                    n.zc(n.ae, e.d, function (t, e) {
                        n.ag = !e, n.zc = void 0, vg(n, {a: "response", d: t, forceKeepWindowOpen: e})
                    })
                }, 0))
            }, ug.prototype.yg = function () {
                try {
                    pg(this.wd, "message", this.Af)
                } catch (t) {
                }
                this.zc && (vg(this, {a: "error", d: "unknown closed window"}), this.zc = void 0);
                try {
                    window.close()
                } catch (e) {
                }
            }, ug.prototype.Af = function (t) {
                if (this.ag && "die" === t.data)
                    try {
                        window.close()
                    } catch (e) {
                    }
            }, wg.prototype.open = function (t, e) {
                P.set("redirect_request_id", this.oc), P.set("redirect_request_id", this.oc), e.requestId = this.oc, e.redirectTo = e.redirectTo || window.location.href, t += (/\?/.test(t) ? "" : "?") + jb(e), window.location = t
            }, wg.isAvailable = function () {
                return!lg() && !kg()
            }, wg.prototype.Bc = function () {
                return"redirect"
            };
            var xg = {NETWORK_ERROR: "Unable to contact the Firebase server.", SERVER_ERROR: "An unknown server error occurred.", TRANSPORT_UNAVAILABLE: "There are no login transports available for the requested method.", REQUEST_INTERRUPTED: "The browser redirected the page before the login request could complete.", USER_CANCELLED: "The user cancelled authentication."};
            zg.prototype.open = function (t, e, n) {
                function i(t) {
                    if (o && (document.body.removeChild(o), o = void 0), c && (c = clearInterval(c)), pg(window, "message", r), pg(window, "unload", i), h && !t)
                        try {
                            h.close()
                        } catch (e) {
                            a.postMessage("die", u)
                        }
                    h = a = void 0
                }
                function r(t) {
                    if (t.origin === u)
                        try {
                            var e = mb(t.data);
                            "ready" === e.a ? a.postMessage(f, u) : "error" === e.a ? (i(!1), n && (n(e.d), n = null)) : "response" === e.a && (i(e.forceKeepWindowOpen), n && (n(null, e.d), n = null))
                        } catch (r) {
                        }
                }
                var o, a, s = mg();
                if (!this.options.relay_url)
                    return n(Error("invalid arguments: origin of url and relay_url must match"));
                var u = qg(t);
                if (u !== qg(this.options.relay_url))
                    n && setTimeout(function () {
                        n(Error("invalid arguments: origin of url and relay_url must match"))
                    }, 0);
                else {
                    s && (o = document.createElement("iframe"), o.setAttribute("src", this.options.relay_url), o.style.display = "none", o.setAttribute("name", "__winchan_relay_frame"), document.body.appendChild(o), a = o.contentWindow), t += (/\?/.test(t) ? "" : "?") + jb(e);
                    var h = window.open(t, this.options.window_name, this.options.window_features);
                    a || (a = h);
                    var c = setInterval(function () {
                        h && h.closed && (i(!1), n && (n(yg("USER_CANCELLED")), n = null))
                    }, 500), f = B({a: "request", d: e});
                    og(window, "unload", i), og(window, "message", r)
                }
            }, zg.isAvailable = function () {
                return"postMessage"in window && !lg() && !(kg() || "undefined" != typeof navigator && (navigator.userAgent.match(/Windows Phone/) || window.Windows && /^ms-appx:/.test(location.href)) || "undefined" != typeof navigator && "undefined" != typeof window && (navigator.userAgent.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i) || navigator.userAgent.match(/CriOS/) || navigator.userAgent.match(/Twitter for iPhone/) || navigator.userAgent.match(/FBAN\/FBIOS/) || window.navigator.standalone)) && !("undefined" != typeof navigator && navigator.userAgent.match(/PhantomJS/))
            }, zg.prototype.Bc = function () {
                return"popup"
            }, Ag.prototype.open = function (t, e, n) {
                function i() {
                    n && (n(yg("REQUEST_INTERRUPTED")), n = null)
                }
                var r, o = new XMLHttpRequest, a = this.options.method.toUpperCase();
                if (og(window, "beforeunload", i), o.onreadystatechange = function () {
                    if (n && 4 === o.readyState) {
                        var t;
                        if (200 <= o.status && 300 > o.status) {
                            try {
                                t = mb(o.responseText)
                            } catch (e) {
                            }
                            n(null, t)
                        } else
                            n(500 <= o.status && 600 > o.status ? yg("SERVER_ERROR") : yg("NETWORK_ERROR"));
                        n = null, pg(window, "beforeunload", i)
                    }
                }, "GET" === a)
                    t += (/\?/.test(t) ? "" : "?") + jb(e), r = null;
                else {
                    var s = this.options.headers.content_type;
                    "application/json" === s && (r = B(e)), "application/x-www-form-urlencoded" === s && (r = jb(e))
                }
                o.open(a, t, !0), t = {"X-Requested-With": "XMLHttpRequest", Accept: "application/json;text/plain"}, za(t, this.options.headers);
                for (var u in t)
                    o.setRequestHeader(u, t[u]);
                o.send(r)
            }, Ag.isAvailable = function () {
                return!(!window.XMLHttpRequest || "string" != typeof (new XMLHttpRequest).responseType || "undefined" != typeof navigator && (navigator.userAgent.match(/MSIE/) || navigator.userAgent.match(/Trident/)) && !mg())
            }, Ag.prototype.Bc = function () {
                return"json"
            }, Bg.prototype.open = function (t, e, n) {
                function i() {
                    n && (n(yg("USER_CANCELLED")), n = null)
                }
                var r, o = this, a = Rc(fg);
                e.requestId = this.oc, e.redirectTo = a.scheme + "://" + a.host + "/blank/page.html", t += /\?/.test(t) ? "" : "?", t += jb(e), (r = window.open(t, "_blank", "location=no")) && ha(r.addEventListener) ? (r.addEventListener("loadstart", function (t) {
                    var e;
                    if (e = t && t.url)
                        t:{
                            try {
                                var s = document.createElement("a");
                                s.href = t.url, e = s.host === a.host && "/blank/page.html" === s.pathname;
                                break t
                            } catch (u) {
                            }
                            e = !1
                        }
                    e && (t = rg(t.url), r.removeEventListener("exit", i), r.close(), t = new gg(null, null, {requestId: o.oc, requestKey: t}), o.Df.requestWithCredential("/auth/session", t, n), n = null)
                }), r.addEventListener("exit", i)) : n(yg("TRANSPORT_UNAVAILABLE"))
            }, Bg.isAvailable = function () {
                return kg()
            }, Bg.prototype.Bc = function () {
                return"redirect"
            }, Cg.prototype.open = function (t, e, n) {
                function i() {
                    n && (n(yg("REQUEST_INTERRUPTED")), n = null)
                }
                function r() {
                    setTimeout(function () {
                        window.__firebase_auth_jsonp[o] = void 0, wa(window.__firebase_auth_jsonp) && (window.__firebase_auth_jsonp = void 0);
                        try {
                            var t = document.getElementById(o);
                            t && t.parentNode.removeChild(t)
                        } catch (e) {
                        }
                    }, 1), pg(window, "beforeunload", i)
                }
                var o = "fn" + (new Date).getTime() + Math.floor(99999 * Math.random());
                e[this.options.callback_parameter] = "__firebase_auth_jsonp." + o, t += (/\?/.test(t) ? "" : "?") + jb(e), og(window, "beforeunload", i), window.__firebase_auth_jsonp[o] = function (t) {
                    n && (n(null, t), n = null), r()
                }, Dg(o, t, n)
            }, Cg.isAvailable = function () {
                return!0
            }, Cg.prototype.Bc = function () {
                return"json"
            }, ma(Eg, If), h = Eg.prototype, h.we = function () {
                return this.nb || null
            }, h.re = function (t, e) {
                Ng(this);
                var n = ig(t);
                n.ab._method = "POST", this.pc("/users", n, function (t, n) {
                    t ? R(e, t) : R(e, t, n)
                })
            }, h.Se = function (t, e) {
                var n = this;
                Ng(this);
                var i = "/users/" + encodeURIComponent(t.email), r = ig(t);
                r.ab._method = "DELETE", this.pc(i, r, function (t, i) {
                    !t && i && i.uid && n.nb && n.nb.uid && n.nb.uid === i.uid && Lg(n), R(e, t)
                })
            }, h.oe = function (t, e) {
                Ng(this);
                var n = "/users/" + encodeURIComponent(t.email) + "/password", i = ig(t);
                i.ab._method = "PUT", i.ab.password = t.newPassword, this.pc(n, i, function (t) {
                    R(e, t)
                })
            }, h.ne = function (t, e) {
                Ng(this);
                var n = "/users/" + encodeURIComponent(t.oldEmail) + "/email", i = ig(t);
                i.ab._method = "PUT", i.ab.email = t.newEmail, i.ab.password = t.password, this.pc(n, i, function (t) {
                    R(e, t)
                })
            }, h.Ue = function (t, e) {
                Ng(this);
                var n = "/users/" + encodeURIComponent(t.email) + "/password", i = ig(t);
                i.ab._method = "POST", this.pc(n, i, function (t) {
                    R(e, t)
                })
            }, h.pc = function (t, e, n) {
                Qg(this, [Ag, Cg], t, e, n)
            }, h.ze = function (t) {
                return J("auth_status" === t, 'initial event must be of type "auth_status"'), this.Re ? null : [this.nb]
            };
            var Vg, Wg;
            Ug.prototype.open = function (t, e) {
                this.gf = 0, this.ka = e, this.zf = new Rg(t), this.zb = !1;
                var n = this;
                this.rb = setTimeout(function () {
                    n.f("Timed out trying to connect."), n.ib(), n.rb = null
                }, Math.floor(3e4)), Tc(function () {
                    if (!n.zb) {
                        n.Ta = new Xg(function (t, e, i, r, o) {
                            if (Yg(n, arguments), n.Ta)
                                if (n.rb && (clearTimeout(n.rb), n.rb = null), n.Gc = !0, "start" == t)
                                    n.id = e, n.Ff = i;
                                else {
                                    if ("close" !== t)
                                        throw Error("Unrecognized command received: " + t);
                                    e ? (n.Ta.Td = !1, Sg(n.zf, e, function () {
                                        n.ib()
                                    })) : n.ib()
                                }
                        }, function (t, e) {
                            Yg(n, arguments), Tg(n.zf, t, e)
                        }, function () {
                            n.ib()
                        }, n.gd);
                        var t = {start: "t"};
                        t.ser = Math.floor(1e8 * Math.random()), n.Ta.fe && (t.cb = n.Ta.fe), t.v = "5", n.Vd && (t.s = n.Vd), "undefined" != typeof location && location.href && -1 !== location.href.indexOf("firebaseio.com") && (t.r = "f"), t = n.gd(t), n.f("Connecting via long-poll to " + t), Zg(n.Ta, t, function () {})
                    }
                })
            }, Ug.prototype.start = function () {
                var t = this.Ta, e = this.Ff;
                for (t.rg = this.id, t.sg = e, t.ke = !0; $g(t); )
                    ;
                t = this.id, e = this.Ff, this.fc = document.createElement("iframe");
                var n = {dframe: "t"};
                n.id = t, n.pw = e, this.fc.src = this.gd(n), this.fc.style.display = "none", document.body.appendChild(this.fc)
            }, Ug.isAvailable = function () {
                return!(Wg || "object" == typeof window && window.chrome && window.chrome.extension && !/^chrome/.test(window.location.href) || "object" == typeof Windows && "object" == typeof Windows.Ug)
            }, h = Ug.prototype, h.Bd = function () {}, h.cd = function () {
                this.zb = !0, this.Ta && (this.Ta.close(), this.Ta = null), this.fc && (document.body.removeChild(this.fc), this.fc = null), this.rb && (clearTimeout(this.rb), this.rb = null)
            }, h.ib = function () {
                this.zb || (this.f("Longpoll is closing itself"), this.cd(), this.ka && (this.ka(this.Gc), this.ka = null))
            }, h.close = function () {
                this.zb || (this.f("Longpoll is being closed."), this.cd())
            }, h.send = function (t) {
                t = B(t), this.pb += t.length, Lb(this.Va, "bytes_sent", t.length), t = Kc(t), t = fb(t, !0), t = Xc(t, 1840);
                for (var e = 0; e < t.length; e++) {
                    var n = this.Ta;
                    n.$c.push({Jg: this.gf, Rg: t.length, jf: t[e]}), n.ke && $g(n), this.gf++
                }
            }, Xg.prototype.close = function () {
                if (this.ke = !1, this.Ca) {
                    this.Ca.gb.body.innerHTML = "";
                    var t = this;
                    setTimeout(function () {
                        null !== t.Ca && (document.body.removeChild(t.Ca), t.Ca = null)
                    }, Math.floor(0))
                }
                var e = this.jb;
                e && (this.jb = null, e())
            };
            var bh = null;
            "undefined" != typeof MozWebSocket ? bh = MozWebSocket : "undefined" != typeof WebSocket && (bh = WebSocket);
            var dh;
            ch.prototype.open = function (t, e) {
                this.jb = e, this.wg = t, this.f("Websocket connecting to " + this.fb), this.Gc = !1, Dc.set("previous_websocket_failure", !0);
                try {
                    this.va = new bh(this.fb)
                } catch (n) {
                    this.f("Error instantiating WebSocket.");
                    var i = n.message || n.data;
                    return i && this.f(i), void this.ib()
                }
                var r = this;
                this.va.onopen = function () {
                    r.f("Websocket connected."), r.Gc = !0
                }, this.va.onclose = function () {
                    r.f("Websocket connection was disconnected."), r.va = null, r.ib()
                }, this.va.onmessage = function (t) {
                    if (null !== r.va)
                        if (t = t.data, r.ob += t.length, Lb(r.Va, "bytes_received", t.length), eh(r), null !== r.frames)
                            fh(r, t);
                        else {
                            t:{
                                if (J(null === r.frames, "We already have a frame buffer"), 6 >= t.length) {
                                    var e = Number(t);
                                    if (!isNaN(e)) {
                                        r.bf = e, r.frames = [], t = null;
                                        break t
                                    }
                                }
                                r.bf = 1, r.frames = []
                            }
                            null !== t && fh(r, t)
                        }
                }, this.va.onerror = function (t) {
                    r.f("WebSocket error.  Closing connection."), (t = t.message || t.data) && r.f(t), r.ib()
                }
            }, ch.prototype.start = function () {}, ch.isAvailable = function () {
                var t = !1;
                if ("undefined" != typeof navigator && navigator.userAgent) {
                    var e = navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);
                    e && 1 < e.length && 4.4 > parseFloat(e[1]) && (t = !0)
                }
                return!t && null !== bh && !dh
            }, ch.responsesRequiredToBeHealthy = 2, ch.healthyTimeout = 3e4, h = ch.prototype, h.Bd = function () {
                Dc.remove("previous_websocket_failure")
            }, h.send = function (t) {
                eh(this), t = B(t), this.pb += t.length, Lb(this.Va, "bytes_sent", t.length), t = Xc(t, 16384), 1 < t.length && this.va.send(String(t.length));
                for (var e = 0; e < t.length; e++)
                    this.va.send(t[e])
            }, h.cd = function () {
                this.zb = !0, this.Jc && (clearInterval(this.Jc), this.Jc = null), this.va && (this.va.close(), this.va = null)
            }, h.ib = function () {
                this.zb || (this.f("WebSocket is closing itself"), this.cd(), this.jb && (this.jb(this.Gc), this.jb = null))
            }, h.close = function () {
                this.zb || (this.f("WebSocket is being closed"), this.cd())
            };
            var ih = [Ug, ch];
            kh.prototype.Da = function (t) {
                vh(this, {t: "d", d: t})
            }, kh.prototype.Fd = function (t) {
                sh(this), this.hc(t)
            }, kh.prototype.close = function () {
                2 !== this.Ua && (this.f("Closing realtime connection."), this.Ua = 2, rh(this), this.ka && (this.ka(), this.ka = null))
            };
            var xh = 0, zh = 0;
            h = wh.prototype, h.Da = function (t, e, n) {
                var i = ++this.Ig;
                t = {r: i, a: t, b: e}, this.f(B(t)), J(this.ma, "sendRequest call when we're not connected not allowed."), this.Sa.Da(t), n && (this.Qd[i] = n)
            }, h.xf = function (t, e, n, i) {
                var r = t.wa(), o = t.path.toString();
                this.f("Listen called for " + o + " " + r), this.aa[o] = this.aa[o] || {}, J(!this.aa[o][r], "listen() called twice for same path/queryId."), t = {J: i, ud: e, Fg: t, tag: n}, this.aa[o][r] = t, this.ma && Ah(this, t)
            }, h.P = function (t, e, n) {
                this.Fa = {fg: t, nf: !1, yc: e, jd: n}, this.f("Authenticating using credential: " + t), Ch(this), (e = 40 == t.length) || (t = ad(t).Ac, e = "object" == typeof t && !0 === w(t, "admin")), e && (this.f("Admin auth credential detected.  Reducing max reconnect time."), this.Cd = 3e4)
            }, h.ee = function (t) {
                delete this.Fa, this.ma && this.Da("unauth", {}, function (e) {
                    t(e.s, e.d)
                })
            }, h.Of = function (t, e) {
                var n = t.path.toString(), i = t.wa();
                if (this.f("Unlisten called for " + n + " " + i), Bh(this, n, i) && this.ma) {
                    var r = ce(t.n);
                    this.f("Unlisten on " + n + " for " + i), n = {p: n}, e && (n.q = r, n.t = e), this.Da("n", n)
                }
            }, h.Le = function (t, e, n) {
                this.ma ? Dh(this, "o", t, e, n) : this.Uc.push({Zc: t, action: "o", data: e, J: n})
            }, h.Bf = function (t, e, n) {
                this.ma ? Dh(this, "om", t, e, n) : this.Uc.push({Zc: t, action: "om", data: e, J: n})
            }, h.Gd = function (t, e) {
                this.ma ? Dh(this, "oc", t, null, e) : this.Uc.push({Zc: t, action: "oc", data: null, J: e})
            }, h.put = function (t, e, n, i) {
                Eh(this, "p", t, e, n, i)
            }, h.yf = function (t, e, n, i) {
                Eh(this, "m", t, e, n, i)
            }, h.Te = function (t) {
                this.ma && (t = {c: t}, this.f("reportStats", t), this.Da("s", t, function (t) {
                    "ok" !== t.s && this.f("reportStats", "Error sending stats: " + t.d)
                }))
            }, h.Fd = function (t) {
                if ("r"in t) {
                    this.f("from server: " + B(t));
                    var e = t.r, n = this.Qd[e];
                    n && (delete this.Qd[e], n(t.b))
                } else {
                    if ("error"in t)
                        throw"A server-side error has occurred: " + t.error;
                    "a"in t && (e = t.a, n = t.b, this.f("handleServerMessage", e, n), "d" === e ? this.Gb(n.p, n.d, !1, n.t) : "m" === e ? this.Gb(n.p, n.d, !0, n.t) : "c" === e ? Gh(this, n.p, n.q) : "ac" === e ? (t = n.s, e = n.d, n = this.Fa, delete this.Fa, n && n.jd && n.jd(t, e)) : "sd" === e ? this.We ? this.We(n) : "msg"in n && "undefined" != typeof console && console.log("FIREBASE: " + n.msg.replace("\n", "\nFIREBASE: ")) : Pc("Unrecognized action received from server: " + B(e) + "\nAre you using the latest client?"))
                }
            }, h.Vc = function (t) {
                this.f("connection ready"), this.ma = !0, this.Kc = (new Date).getTime(), this.Ne({serverTimeOffset: t - (new Date).getTime()}), this.mf && (t = {}, t["sdk.js." + "2.2.4".replace(/\./g, "-")] = 1, kg() && (t["framework.cordova"] = 1), this.Te(t)), Hh(this), this.mf = !1, this.Tc(!0)
            }, h.zg = function (t) {
                t && !this.uc && this.$a === this.Cd && (this.f("Window became visible.  Reducing delay."), this.$a = 1e3, this.Sa || yh(this, 0)), this.uc = t
            }, h.xg = function (t) {
                t ? (this.f("Browser went online."), this.$a = 1e3, this.Sa || yh(this, 0)) : (this.f("Browser went offline.  Killing connection."), this.Sa && this.Sa.close())
            }, h.Cf = function () {
                this.f("data client disconnected"), this.ma = !1, this.Sa = null;
                for (var t = 0; t < this.pa.length; t++) {
                    var e = this.pa[t];
                    e && "h"in e.If && e.Gg && (e.J && e.J("disconnect"), delete this.pa[t], this.Xc--)
                }
                0 === this.Xc && (this.pa = []), this.Qd = {}, Jh(this) && (this.uc ? this.Kc && (3e4 < (new Date).getTime() - this.Kc && (this.$a = 1e3), this.Kc = null) : (this.f("Window isn't visible.  Delaying reconnect."), this.$a = this.Cd, this.Fe = (new Date).getTime()), t = Math.max(0, this.$a - ((new Date).getTime() - this.Fe)), t *= Math.random(), this.f("Trying to reconnect in " + t + "ms"), yh(this, t), this.$a = Math.min(this.Cd, 1.3 * this.$a)), this.Tc(!1)
            }, h.yb = function () {
                this.De = !0, this.Sa ? this.Sa.close() : (this.Sb && (clearTimeout(this.Sb), this.Sb = null), this.ma && this.Cf())
            }, h.qc = function () {
                this.De = !1, this.$a = 1e3, this.Sa || yh(this, 0)
            };
            var V = {lg: function () {
                    Vg = dh = !0
                }};
            V.forceLongPolling = V.lg, V.mg = function () {
                Wg = !0
            }, V.forceWebSockets = V.mg, V.Mg = function (t, e) {
                t.k.Ra.We = e
            }, V.setSecurityDebugCallback = V.Mg, V.Ye = function (t, e) {
                t.k.Ye(e)
            }, V.stats = V.Ye, V.Ze = function (t, e) {
                t.k.Ze(e)
            }, V.statsIncrementCounter = V.Ze, V.pd = function (t) {
                return t.k.pd
            }, V.dataUpdateCount = V.pd, V.pg = function (t, e) {
                t.k.Ce = e
            }, V.interceptServerData = V.pg, V.vg = function (t) {
                new ug(t)
            }, V.onPopupOpen = V.vg, V.Kg = function (t) {
                fg = t
            }, V.setAuthenticationServer = V.Kg, S.prototype.K = function () {
                return x("Firebase.DataSnapshot.val", 0, 0, arguments.length), this.B.K()
            }, S.prototype.val = S.prototype.K, S.prototype.lf = function () {
                return x("Firebase.DataSnapshot.exportVal", 0, 0, arguments.length), this.B.K(!0)
            }, S.prototype.exportVal = S.prototype.lf, S.prototype.kg = function () {
                return x("Firebase.DataSnapshot.exists", 0, 0, arguments.length), !this.B.e()
            }, S.prototype.exists = S.prototype.kg, S.prototype.w = function (t) {
                x("Firebase.DataSnapshot.child", 0, 1, arguments.length), ga(t) && (t = String(t)), Xf("Firebase.DataSnapshot.child", t);
                var e = new K(t), n = this.V.w(e);
                return new S(this.B.oa(e), n, M)
            }, S.prototype.child = S.prototype.w, S.prototype.Ha = function (t) {
                x("Firebase.DataSnapshot.hasChild", 1, 1, arguments.length), Xf("Firebase.DataSnapshot.hasChild", t);
                var e = new K(t);
                return!this.B.oa(e).e()
            }, S.prototype.hasChild = S.prototype.Ha, S.prototype.A = function () {
                return x("Firebase.DataSnapshot.getPriority", 0, 0, arguments.length), this.B.A().K()
            }, S.prototype.getPriority = S.prototype.A, S.prototype.forEach = function (t) {
                if (x("Firebase.DataSnapshot.forEach", 1, 1, arguments.length), A("Firebase.DataSnapshot.forEach", 1, t, !1), this.B.N())
                    return!1;
                var e = this;
                return!!this.B.U(this.g, function (n, i) {
                    return t(new S(i, e.V.w(n), M))
                })
            }, S.prototype.forEach = S.prototype.forEach, S.prototype.td = function () {
                return x("Firebase.DataSnapshot.hasChildren", 0, 0, arguments.length), this.B.N() ? !1 : !this.B.e()
            }, S.prototype.hasChildren = S.prototype.td, S.prototype.name = function () {
                return Q("Firebase.DataSnapshot.name() being deprecated. Please use Firebase.DataSnapshot.key() instead."), x("Firebase.DataSnapshot.name", 0, 0, arguments.length), this.key()
            }, S.prototype.name = S.prototype.name, S.prototype.key = function () {
                return x("Firebase.DataSnapshot.key", 0, 0, arguments.length), this.V.key()
            }, S.prototype.key = S.prototype.key, S.prototype.Db = function () {
                return x("Firebase.DataSnapshot.numChildren", 0, 0, arguments.length), this.B.Db()
            }, S.prototype.numChildren = S.prototype.Db, S.prototype.lc = function () {
                return x("Firebase.DataSnapshot.ref", 0, 0, arguments.length), this.V
            }, S.prototype.ref = S.prototype.lc, h = Kh.prototype, h.toString = function () {
                return(this.H.lb ? "https://" : "http://") + this.H.host
            }, h.name = function () {
                return this.H.Cb
            }, h.Gb = function (t, e, n, i) {
                this.pd++;
                var r = new K(t);
                e = this.Ce ? this.Ce(t, e) : e, t = [], i ? n ? (e = na(e, function (t) {
                    return L(t)
                }), t = rf(this.O, r, e, i)) : (e = L(e), t = nf(this.O, r, e, i)) : n ? (i = na(e, function (t) {
                    return L(t)
                }), t = mf(this.O, r, i)) : (i = L(e), t = jf(this.O, new Ub(ze, r, i))), i = r, 0 < t.length && (i = Oh(this, r)), zb(this.ea, i, t)
            }, h.Tc = function (t) {
                Lh(this, "connected", t), !1 === t && Ph(this)
            }, h.Ne = function (t) {
                var e = this;
                Yc(t, function (t, n) {
                    Lh(e, n, t)
                })
            }, h.Ke = function (t) {
                Lh(this, "authenticated", t)
            }, h.Kb = function (t, e, n, i) {
                this.f("set", {path: t.toString(), value: e, Xg: n});
                var r = Nh(this);
                e = L(e, n);
                var r = sc(e, r), o = this.Ed++, r = hf(this.O, t, r, o, !0);
                vb(this.ea, r);
                var a = this;
                this.ca.put(t.toString(), e.K(!0), function (e, n) {
                    var r = "ok" === e;
                    r || Q("set at " + t + " failed: " + e), r = lf(a.O, o, !r), zb(a.ea, t, r), Qh(i, e, n)
                }), r = Rh(this, t), Oh(this, r), zb(this.ea, r, [])
            }, h.update = function (t, e, n) {
                this.f("update", {path: t.toString(), value: e});
                var i = !0, o = Nh(this), a = {};
                if (r(e, function (t, e) {
                    i = !1;
                    var n = L(t);
                    a[e] = sc(n, o)
                }), i)
                    Bb("update() called with empty data.  Don't do anything."), Qh(n, "ok");
                else {
                    var s = this.Ed++, u = kf(this.O, t, a, s);
                    vb(this.ea, u);
                    var h = this;
                    this.ca.yf(t.toString(), e, function (e, i) {
                        var r = "ok" === e;
                        r || Q("update at " + t + " failed: " + e);
                        var r = lf(h.O, s, !r), o = t;
                        0 < r.length && (o = Oh(h, t)), zb(h.ea, o, r), Qh(n, e, i)
                    }), e = Rh(this, t), Oh(this, e), zb(this.ea, t, [])
                }
            }, h.Gd = function (t, e) {
                var n = this;
                this.ca.Gd(t.toString(), function (i, r) {
                    "ok" === i && eg(n.ka, t), Qh(e, i, r)
                })
            }, h.yb = function () {
                this.Ra && this.Ra.yb()
            }, h.qc = function () {
                this.Ra && this.Ra.qc()
            }, h.Ye = function (t) {
                if ("undefined" != typeof console) {
                    t ? (this.Yd || (this.Yd = new Ib(this.Va)), t = this.Yd.get()) : t = this.Va.get();
                    var e, n = Ra(sa(t), function (t, e) {
                        return Math.max(e.length, t)
                    }, 0);
                    for (e in t) {
                        for (var i = t[e], r = e.length; n + 2 > r; r++)
                            e += " ";
                        console.log(e + i)
                    }
                }
            }, h.Ze = function (t) {
                Lb(this.Va, t), this.Pg.Mf[t] = !0
            }, h.f = function (t) {
                var e = "";
                this.Ra && (e = this.Ra.id + ":"), Bb(e, arguments)
            }, ca(W), W.prototype.yb = function () {
                for (var t in this.nc)
                    this.nc[t].yb()
            }, W.prototype.interrupt = W.prototype.yb, W.prototype.qc = function () {
                for (var t in this.nc)
                    this.nc[t].qc()
            }, W.prototype.resume = W.prototype.qc, W.prototype.ue = function () {
                this.Pf = !0
            }, X.prototype.cancel = function (t) {
                x("Firebase.onDisconnect().cancel", 0, 1, arguments.length), A("Firebase.onDisconnect().cancel", 1, t, !0), this.ad.Gd(this.qa, t || null)
            }, X.prototype.cancel = X.prototype.cancel, X.prototype.remove = function (t) {
                x("Firebase.onDisconnect().remove", 0, 1, arguments.length), Yf("Firebase.onDisconnect().remove", this.qa), A("Firebase.onDisconnect().remove", 1, t, !0), Sh(this.ad, this.qa, null, t)
            }, X.prototype.remove = X.prototype.remove, X.prototype.set = function (t, e) {
                x("Firebase.onDisconnect().set", 1, 2, arguments.length), Yf("Firebase.onDisconnect().set", this.qa), Rf("Firebase.onDisconnect().set", t, this.qa, !1), A("Firebase.onDisconnect().set", 2, e, !0), Sh(this.ad, this.qa, t, e)
            }, X.prototype.set = X.prototype.set, X.prototype.Kb = function (t, e, n) {
                x("Firebase.onDisconnect().setWithPriority", 2, 3, arguments.length), Yf("Firebase.onDisconnect().setWithPriority", this.qa), Rf("Firebase.onDisconnect().setWithPriority", t, this.qa, !1), Uf("Firebase.onDisconnect().setWithPriority", 2, e), A("Firebase.onDisconnect().setWithPriority", 3, n, !0), Th(this.ad, this.qa, t, e, n)
            }, X.prototype.setWithPriority = X.prototype.Kb, X.prototype.update = function (t, e) {
                if (x("Firebase.onDisconnect().update", 1, 2, arguments.length), Yf("Firebase.onDisconnect().update", this.qa), ea(t)) {
                    for (var n = {}, i = 0; i < t.length; ++i)
                        n["" + i] = t[i];
                    t = n, Q("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")
                }
                Tf("Firebase.onDisconnect().update", t, this.qa), A("Firebase.onDisconnect().update", 2, e, !0), Uh(this.ad, this.qa, t, e)
            }, X.prototype.update = X.prototype.update, Y.prototype.lc = function () {
                return x("Query.ref", 0, 0, arguments.length), new U(this.k, this.path)
            }, Y.prototype.ref = Y.prototype.lc, Y.prototype.Eb = function (t, e, n, i) {
                x("Query.on", 2, 4, arguments.length), Vf("Query.on", t, !1), A("Query.on", 2, e, !1);
                var r = hi("Query.on", n, i);
                if ("value" === t)
                    Vh(this.k, this, new jd(e, r.cancel || null, r.Ma || null));
                else {
                    var o = {};
                    o[t] = e, Vh(this.k, this, new kd(o, r.cancel, r.Ma))
                }
                return e
            }, Y.prototype.on = Y.prototype.Eb, Y.prototype.gc = function (t, e, n) {
                x("Query.off", 0, 3, arguments.length), Vf("Query.off", t, !0), A("Query.off", 2, e, !0), lb("Query.off", 3, n);
                var i = null, r = null;
                "value" === t ? i = new jd(e || null, null, n || null) : t && (e && (r = {}, r[t] = e), i = new kd(r, null, n || null)), r = this.k, i = ".info" === O(this.path) ? r.zd.kb(this, i) : r.O.kb(this, i), xb(r.ea, this.path, i)
            }, Y.prototype.off = Y.prototype.gc, Y.prototype.Ag = function (t, e) {
                function n(a) {
                    o && (o = !1, r.gc(t, n), e.call(i.Ma, a))
                }
                x("Query.once", 2, 4, arguments.length), Vf("Query.once", t, !1), A("Query.once", 2, e, !1);
                var i = hi("Query.once", arguments[2], arguments[3]), r = this, o = !0;
                this.Eb(t, n, function (e) {
                    r.gc(t, n), i.cancel && i.cancel.call(i.Ma, e)
                })
            }, Y.prototype.once = Y.prototype.Ag, Y.prototype.Ge = function (t) {
                if (Q("Query.limit() being deprecated. Please use Query.limitToFirst() or Query.limitToLast() instead."), x("Query.limit", 1, 1, arguments.length), !ga(t) || Math.floor(t) !== t || 0 >= t)
                    throw Error("Query.limit: First argument must be a positive integer.");
                if (this.n.ia)
                    throw Error("Query.limit: Limit was already set (by another call to limit, limitToFirst, orlimitToLast.");
                var e = this.n.Ge(t);
                return fi(e), new Y(this.k, this.path, e, this.jc)
            }, Y.prototype.limit = Y.prototype.Ge, Y.prototype.He = function (t) {
                if (x("Query.limitToFirst", 1, 1, arguments.length), !ga(t) || Math.floor(t) !== t || 0 >= t)
                    throw Error("Query.limitToFirst: First argument must be a positive integer.");
                if (this.n.ia)
                    throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");
                return new Y(this.k, this.path, this.n.He(t), this.jc)
            }, Y.prototype.limitToFirst = Y.prototype.He, Y.prototype.Ie = function (t) {
                if (x("Query.limitToLast", 1, 1, arguments.length), !ga(t) || Math.floor(t) !== t || 0 >= t)
                    throw Error("Query.limitToLast: First argument must be a positive integer.");
                if (this.n.ia)
                    throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");
                return new Y(this.k, this.path, this.n.Ie(t), this.jc)
            }, Y.prototype.limitToLast = Y.prototype.Ie, Y.prototype.Bg = function (t) {
                if (x("Query.orderByChild", 1, 1, arguments.length), "$key" === t)
                    throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');
                if ("$priority" === t)
                    throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');
                if ("$value" === t)
                    throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');
                Wf("Query.orderByChild", 1, t, !1), gi(this, "Query.orderByChild");
                var e = be(this.n, new Rd(t));
                return ei(e), new Y(this.k, this.path, e, !0)
            }, Y.prototype.orderByChild = Y.prototype.Bg, Y.prototype.Cg = function () {
                x("Query.orderByKey", 0, 0, arguments.length), gi(this, "Query.orderByKey");
                var t = be(this.n, Vd);
                return ei(t), new Y(this.k, this.path, t, !0)
            }, Y.prototype.orderByKey = Y.prototype.Cg, Y.prototype.Dg = function () {
                x("Query.orderByPriority", 0, 0, arguments.length), gi(this, "Query.orderByPriority");
                var t = be(this.n, M);
                return ei(t), new Y(this.k, this.path, t, !0)
            }, Y.prototype.orderByPriority = Y.prototype.Dg, Y.prototype.Eg = function () {
                x("Query.orderByValue", 0, 0, arguments.length), gi(this, "Query.orderByValue");
                var t = be(this.n, Yd);
                return ei(t), new Y(this.k, this.path, t, !0)
            }, Y.prototype.orderByValue = Y.prototype.Eg, Y.prototype.Xd = function (t, e) {
                x("Query.startAt", 0, 2, arguments.length), Rf("Query.startAt", t, this.path, !0), Wf("Query.startAt", 2, e, !0);
                var i = this.n.Xd(t, e);
                if (fi(i), ei(i), this.n.la)
                    throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");
                return n(t) || (e = t = null), new Y(this.k, this.path, i, this.jc)
            }, Y.prototype.startAt = Y.prototype.Xd, Y.prototype.qd = function (t, e) {
                x("Query.endAt", 0, 2, arguments.length), Rf("Query.endAt", t, this.path, !0), Wf("Query.endAt", 2, e, !0);
                var n = this.n.qd(t, e);
                if (fi(n), ei(n), this.n.na)
                    throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");
                return new Y(this.k, this.path, n, this.jc)
            }, Y.prototype.endAt = Y.prototype.qd, Y.prototype.hg = function (t, e) {
                if (x("Query.equalTo", 1, 2, arguments.length), Rf("Query.equalTo", t, this.path, !1), Wf("Query.equalTo", 2, e, !0), this.n.la)
                    throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).");
                if (this.n.na)
                    throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");
                return this.Xd(t, e).qd(t, e)
            }, Y.prototype.equalTo = Y.prototype.hg, Y.prototype.toString = function () {
                x("Query.toString", 0, 0, arguments.length);
                for (var t = this.path, e = "", n = t.Y; n < t.o.length; n++)
                    "" !== t.o[n] && (e += "/" + encodeURIComponent(String(t.o[n])));
                return t = this.k.toString() + (e || "/"), e = jb(ee(this.n)), t += e.replace(/^&/, "")
            }, Y.prototype.toString = Y.prototype.toString, Y.prototype.wa = function () {
                var t = Wc(ce(this.n));
                return"{}" === t ? "default" : t
            };
            var Z = {};
            Z.vc = wh, Z.DataConnection = Z.vc, wh.prototype.Og = function (t, e) {
                this.Da("q", {p: t}, e)
            }, Z.vc.prototype.simpleListen = Z.vc.prototype.Og, wh.prototype.gg = function (t, e) {
                this.Da("echo", {d: t}, e)
            }, Z.vc.prototype.echo = Z.vc.prototype.gg, wh.prototype.interrupt = wh.prototype.yb, Z.Sf = kh, Z.RealTimeConnection = Z.Sf, kh.prototype.sendRequest = kh.prototype.Da, kh.prototype.close = kh.prototype.close, Z.og = function (t) {
                var e = wh.prototype.put;
                return wh.prototype.put = function (i, r, o, a) {
                    n(a) && (a = t()), e.call(this, i, r, o, a)
                }, function () {
                    wh.prototype.put = e
                }
            }, Z.hijackHash = Z.og, Z.Rf = Ec, Z.ConnectionTarget = Z.Rf, Z.wa = function (t) {
                return t.wa()
            }, Z.queryIdentifier = Z.wa, Z.qg = function (t) {
                return t.k.Ra.aa
            }, Z.listens = Z.qg, Z.ue = function (t) {
                t.ue()
            }, Z.forceRestClient = Z.ue, ma(U, Y);
            var ii = U, ji = ["Firebase"], ki = aa;
            ji[0]in ki || !ki.execScript || ki.execScript("var " + ji[0]);
            for (var li; ji.length && (li = ji.shift()); )
                !ji.length && n(ii) ? ki[li] = ii : ki = ki[li] ? ki[li] : ki[li] = {};
            U.prototype.name = function () {
                return Q("Firebase.name() being deprecated. Please use Firebase.key() instead."), x("Firebase.name", 0, 0, arguments.length), this.key()
            }, U.prototype.name = U.prototype.name, U.prototype.key = function () {
                return x("Firebase.key", 0, 0, arguments.length), this.path.e() ? null : vc(this.path)
            }, U.prototype.key = U.prototype.key, U.prototype.w = function (t) {
                if (x("Firebase.child", 1, 1, arguments.length), ga(t))
                    t = String(t);
                else if (!(t instanceof K))
                    if (null === O(this.path)) {
                        var e = t;
                        e && (e = e.replace(/^\/*\.info(\/|$)/, "/")), Xf("Firebase.child", e)
                    } else
                        Xf("Firebase.child", t);
                return new U(this.k, this.path.w(t))
            }, U.prototype.child = U.prototype.w, U.prototype.parent = function () {
                x("Firebase.parent", 0, 0, arguments.length);
                var t = this.path.parent();
                return null === t ? null : new U(this.k, t)
            }, U.prototype.parent = U.prototype.parent, U.prototype.root = function () {
                x("Firebase.ref", 0, 0, arguments.length);
                for (var t = this; null !== t.parent(); )
                    t = t.parent();
                return t
            }, U.prototype.root = U.prototype.root, U.prototype.set = function (t, e) {
                x("Firebase.set", 1, 2, arguments.length), Yf("Firebase.set", this.path), Rf("Firebase.set", t, this.path, !1), A("Firebase.set", 2, e, !0), this.k.Kb(this.path, t, null, e || null)
            }, U.prototype.set = U.prototype.set, U.prototype.update = function (t, e) {
                if (x("Firebase.update", 1, 2, arguments.length), Yf("Firebase.update", this.path), ea(t)) {
                    for (var n = {}, i = 0; i < t.length; ++i)
                        n["" + i] = t[i];
                    t = n, Q("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")
                }
                Tf("Firebase.update", t, this.path), A("Firebase.update", 2, e, !0), this.k.update(this.path, t, e || null)
            }, U.prototype.update = U.prototype.update, U.prototype.Kb = function (t, e, n) {
                if (x("Firebase.setWithPriority", 2, 3, arguments.length), Yf("Firebase.setWithPriority", this.path), Rf("Firebase.setWithPriority", t, this.path, !1), Uf("Firebase.setWithPriority", 2, e), A("Firebase.setWithPriority", 3, n, !0), ".length" === this.key() || ".keys" === this.key())
                    throw"Firebase.setWithPriority failed: " + this.key() + " is a read-only object.";
                this.k.Kb(this.path, t, e, n || null)
            }, U.prototype.setWithPriority = U.prototype.Kb, U.prototype.remove = function (t) {
                x("Firebase.remove", 0, 1, arguments.length), Yf("Firebase.remove", this.path), A("Firebase.remove", 1, t, !0), this.set(null, t)
            }, U.prototype.remove = U.prototype.remove, U.prototype.transaction = function (t, e, i) {
                if (x("Firebase.transaction", 1, 3, arguments.length), Yf("Firebase.transaction", this.path), A("Firebase.transaction", 1, t, !1), A("Firebase.transaction", 2, e, !0), n(i) && "boolean" != typeof i)
                    throw Error(z("Firebase.transaction", 3, !0) + "must be a boolean.");
                if (".length" === this.key() || ".keys" === this.key())
                    throw"Firebase.transaction failed: " + this.key() + " is a read-only object.";
                "undefined" == typeof i && (i = !0), Wh(this.k, this.path, t, e || null, i)
            }, U.prototype.transaction = U.prototype.transaction, U.prototype.Lg = function (t, e) {
                x("Firebase.setPriority", 1, 2, arguments.length), Yf("Firebase.setPriority", this.path), Uf("Firebase.setPriority", 1, t), A("Firebase.setPriority", 2, e, !0), this.k.Kb(this.path.w(".priority"), t, null, e)
            }, U.prototype.setPriority = U.prototype.Lg, U.prototype.push = function (t, e) {
                x("Firebase.push", 0, 2, arguments.length), Yf("Firebase.push", this.path), Rf("Firebase.push", t, this.path, !0), A("Firebase.push", 2, e, !0);
                var n = Mh(this.k), n = Kf(n), n = this.w(n);
                return"undefined" != typeof t && null !== t && n.set(t, e), n
            }, U.prototype.push = U.prototype.push, U.prototype.jb = function () {
                return Yf("Firebase.onDisconnect", this.path), new X(this.k, this.path)
            }, U.prototype.onDisconnect = U.prototype.jb, U.prototype.P = function (t, e, n) {
                Q("FirebaseRef.auth() being deprecated. Please use FirebaseRef.authWithCustomToken() instead."), x("Firebase.auth", 1, 3, arguments.length), Zf("Firebase.auth", t), A("Firebase.auth", 2, e, !0), A("Firebase.auth", 3, e, !0), Kg(this.k.P, t, {}, {remember: "none"}, e, n)
            }, U.prototype.auth = U.prototype.P, U.prototype.ee = function (t) {
                x("Firebase.unauth", 0, 1, arguments.length), A("Firebase.unauth", 1, t, !0), Lg(this.k.P, t)
            }, U.prototype.unauth = U.prototype.ee, U.prototype.we = function () {
                return x("Firebase.getAuth", 0, 0, arguments.length), this.k.P.we()
            }, U.prototype.getAuth = U.prototype.we, U.prototype.ug = function (t, e) {
                x("Firebase.onAuth", 1, 2, arguments.length), A("Firebase.onAuth", 1, t, !1), lb("Firebase.onAuth", 2, e), this.k.P.Eb("auth_status", t, e)
            }, U.prototype.onAuth = U.prototype.ug, U.prototype.tg = function (t, e) {
                x("Firebase.offAuth", 1, 2, arguments.length), A("Firebase.offAuth", 1, t, !1), lb("Firebase.offAuth", 2, e), this.k.P.gc("auth_status", t, e)
            }, U.prototype.offAuth = U.prototype.tg, U.prototype.Wf = function (t, e, n) {
                x("Firebase.authWithCustomToken", 2, 3, arguments.length), Zf("Firebase.authWithCustomToken", t), A("Firebase.authWithCustomToken", 2, e, !1), ag("Firebase.authWithCustomToken", 3, n, !0), Kg(this.k.P, t, {}, n || {}, e)
            }, U.prototype.authWithCustomToken = U.prototype.Wf, U.prototype.Xf = function (t, e, n) {
                x("Firebase.authWithOAuthPopup", 2, 3, arguments.length), $f("Firebase.authWithOAuthPopup", 1, t), A("Firebase.authWithOAuthPopup", 2, e, !1), ag("Firebase.authWithOAuthPopup", 3, n, !0), Pg(this.k.P, t, n, e)
            }, U.prototype.authWithOAuthPopup = U.prototype.Xf, U.prototype.Yf = function (t, e, n) {
                x("Firebase.authWithOAuthRedirect", 2, 3, arguments.length), $f("Firebase.authWithOAuthRedirect", 1, t), A("Firebase.authWithOAuthRedirect", 2, e, !1), ag("Firebase.authWithOAuthRedirect", 3, n, !0);
                var i = this.k.P;
                Ng(i);
                var r = [wg], o = ig(n);
                "anonymous" === t || "firebase" === t ? R(e, yg("TRANSPORT_UNAVAILABLE")) : (P.set("redirect_client_options", o.ld), Og(i, r, "/auth/" + t, o, e))
            }, U.prototype.authWithOAuthRedirect = U.prototype.Yf, U.prototype.Zf = function (t, e, n, i) {
                x("Firebase.authWithOAuthToken", 3, 4, arguments.length), $f("Firebase.authWithOAuthToken", 1, t), A("Firebase.authWithOAuthToken", 3, n, !1), ag("Firebase.authWithOAuthToken", 4, i, !0), p(e) ? ($f("Firebase.authWithOAuthToken", 2, e), Mg(this.k.P, t + "/token", {access_token: e}, i, n)) : (ag("Firebase.authWithOAuthToken", 2, e, !1), Mg(this.k.P, t + "/token", e, i, n))
            }, U.prototype.authWithOAuthToken = U.prototype.Zf, U.prototype.Vf = function (t, e) {
                x("Firebase.authAnonymously", 1, 2, arguments.length), A("Firebase.authAnonymously", 1, t, !1), ag("Firebase.authAnonymously", 2, e, !0), Mg(this.k.P, "anonymous", {}, e, t)
            }, U.prototype.authAnonymously = U.prototype.Vf, U.prototype.$f = function (t, e, n) {
                x("Firebase.authWithPassword", 2, 3, arguments.length), ag("Firebase.authWithPassword", 1, t, !1), bg("Firebase.authWithPassword", t, "email"), bg("Firebase.authWithPassword", t, "password"), A("Firebase.authAnonymously", 2, e, !1), ag("Firebase.authAnonymously", 3, n, !0), Mg(this.k.P, "password", t, n, e)
            }, U.prototype.authWithPassword = U.prototype.$f, U.prototype.re = function (t, e) {
                x("Firebase.createUser", 2, 2, arguments.length), ag("Firebase.createUser", 1, t, !1), bg("Firebase.createUser", t, "email"), bg("Firebase.createUser", t, "password"), A("Firebase.createUser", 2, e, !1), this.k.P.re(t, e)
            }, U.prototype.createUser = U.prototype.re, U.prototype.Se = function (t, e) {
                x("Firebase.removeUser", 2, 2, arguments.length), ag("Firebase.removeUser", 1, t, !1), bg("Firebase.removeUser", t, "email"), bg("Firebase.removeUser", t, "password"), A("Firebase.removeUser", 2, e, !1), this.k.P.Se(t, e)
            }, U.prototype.removeUser = U.prototype.Se, U.prototype.oe = function (t, e) {
                x("Firebase.changePassword", 2, 2, arguments.length), ag("Firebase.changePassword", 1, t, !1), bg("Firebase.changePassword", t, "email"), bg("Firebase.changePassword", t, "oldPassword"), bg("Firebase.changePassword", t, "newPassword"), A("Firebase.changePassword", 2, e, !1), this.k.P.oe(t, e)
            }, U.prototype.changePassword = U.prototype.oe, U.prototype.ne = function (t, e) {
                x("Firebase.changeEmail", 2, 2, arguments.length), ag("Firebase.changeEmail", 1, t, !1), bg("Firebase.changeEmail", t, "oldEmail"), bg("Firebase.changeEmail", t, "newEmail"), bg("Firebase.changeEmail", t, "password"), A("Firebase.changeEmail", 2, e, !1), this.k.P.ne(t, e)
            }, U.prototype.changeEmail = U.prototype.ne, U.prototype.Ue = function (t, e) {
                x("Firebase.resetPassword", 2, 2, arguments.length), ag("Firebase.resetPassword", 1, t, !1), bg("Firebase.resetPassword", t, "email"), A("Firebase.resetPassword", 2, e, !1), this.k.P.Ue(t, e)
            }, U.prototype.resetPassword = U.prototype.Ue, U.goOffline = function () {
                x("Firebase.goOffline", 0, 0, arguments.length), W.ub().yb()
            }, U.goOnline = function () {
                x("Firebase.goOnline", 0, 0, arguments.length), W.ub().qc()
            }, U.enableLogging = Nc, U.ServerValue = {TIMESTAMP: {".sv": "timestamp"}}, U.SDK_VERSION = "2.2.4", U.INTERNAL = V, U.Context = W, U.TEST_ACCESS = Z
        }(), module.exports = Firebase
    }]);