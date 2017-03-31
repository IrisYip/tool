! function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.i = function(e) {
        return e
    }, t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 3)
}([function(e, t, n) {
    "use strict";

    function r(e) {
        return e.replace(/(^\s*)|(\s*$)/g, "")
    }

    function o(e, t) {
        if (e && "string" == typeof e) {
            var n = t && "number" == typeof t ? new Date(t) : new Date,
                r = n.getFullYear(),
                o = n.getMonth() + 1,
                i = n.getDate(),
                a = n.getHours(),
                c = n.getMinutes(),
                u = n.getSeconds();
            e.match(/y{4}/g) && (e = e.replace(/y{4}/g, r)), e.match(/M{2}/g) && (e = e.replace(/M{2}/g, o < 10 ? "0" + o : o)), e.match(/d{2}/g) && (e = e.replace(/d{2}/g, i < 10 ? "0" + i : i)), e.match(/H{2}/g) && (e = e.replace(/H{2}/g, a < 10 ? "0" + a : a)), e.match(/m{2}/g) && (e = e.replace(/m{2}/g, c < 10 ? "0" + c : c)), e.match(/s{2}/g) && (e = e.replace(/s{2}/g, u < 10 ? "0" + u : u))
        }
        return e
    }

    function i(e) {
        var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
            n = window.location.search.substr(1).match(t);
        return null != n ? n[2] : null
    }
    var a = {
            input: function(e) {
                return /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(e)
            },
            mobile: function(e) {
                return /^0?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/.test(e)
            },
            code: function(e, t) {
                return t && "number" == typeof t ? new RegExp("^\\d{" + t + "}$").test(e) : /^\d{4}$/.test(e)
            },
            email: function(e) {
                return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e)
            }
        },
        c = {
            versions: function() {
                var e = navigator.userAgent;
                return {
                    trident: e.indexOf("Trident") > -1,
                    presto: e.indexOf("Presto") > -1,
                    webKit: e.indexOf("AppleWebKit") > -1,
                    gecko: e.indexOf("Gecko") > -1 && e.indexOf("KHTML") == -1,
                    mobile: !!e.match(/AppleWebKit.*Mobile.*/),
                    ios: !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                    android: e.indexOf("Android") > -1 || e.indexOf("Linux") > -1,
                    iPhone: e.indexOf("iPhone") > -1,
                    iPad: e.indexOf("iPad") > -1,
                    webApp: e.indexOf("Safari") == -1,
                    wechat: e.match(/MicroMessenger/i),
                    alipay: e.match(/AliApp/i)
                }
            }(),
            language: (navigator.browserLanguage || navigator.language).toLowerCase()
        };
    e.exports = {
        trim: r,
        dateFormat: o,
        getQueryString: i,
        validate: a,
        browserVersion: c.versions
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        function t(t) {
            for (var r = document.getElementsByTagName("*"), i = [], a = 0, c = r.length; a < c; a++) {
                var u = r[a];
                if ("class" == t || "name" == t) {
                    var f = u.getAttribute(t);
                    f && String(f).indexOf(n) != -1 && (i[i.length] = u)
                } else "tag" == t && u.nodeName == e.toUpperCase() && (i[i.length] = u)
            }
            return o(i)
        }
        if (e && "string" == typeof e) {
            if (g.trim(e)) {
                var n = e.slice(1),
                    r = e[0];
                if ("#" == r) {
                    var i = document.getElementById(n);
                    return i ? o([i]) : null
                }
                return t("." == r ? "class" : "~" == r ? "name" : "tag")
            }
            return null
        }
        if (e && "object" == typeof e) return o(e)
    }

    function o(e) {
        return "object" == typeof e && e instanceof Array ? new s(e) : void console.warn("_pack()方法入参必须为数组")
    }

    function i(e, t, n) {
        e.insertBefore(document.createTextNode(t), n)
    }

    function a(e, t) {
        e.appendChild(document.createTextNode(t))
    }

    function c(e, t, n) {
        for (var r = [], i = 0, a = n.length; i < a; i++) t || "" == t ? ("html" == e ? n[i].innerHTML = t : n[i].innerText = t, r.push(n[i])) : r[r.length] = "html" == e ? n[i].innerHTML : n[i].innerText;
        return "object" == typeof r[0] ? o(r) : r
    }

    function u(e, t, n) {
        var r = n.parentNode,
            c = -1,
            u = -1,
            f = o([n]).next();
        if ((t || "undefined" != typeof t) && "" != g.trim(t))
            if (t.indexOf("<") != -1 && t.indexOf(">") != -1)
                for (var s = 0, l = t.length; s < l; s++) {
                    var d = t[s];
                    if ("<" == d) "before" == e ? i(r, t.slice(0, s), n) : f ? i(r, t.slice(0, s), f.node[0]) : a(r, t.slice(0, s)), c = s;
                    else if (">" == d) {
                        u = s;
                        var h = t.slice(c + 1, u),
                            p = t.indexOf("</" + h + ">"),
                            m = document.createElement(h);
                        m.innerHTML = t.slice(u + 1, p), "before" == e ? r.insertBefore(m, n) : f ? r.insertBefore(m, f.node[0]) : r.appendChild(m), t = t.slice(p + h.length + 3, t.length), s = 0, l = t.length, t.indexOf("<") == -1 && ("before" == e ? i(r, t, n) : f ? i(r, t, f.node[0]) : a(r, t))
                    }
                } else "before" == e ? i(r, t, n) : f ? i(r, t, f.node[0]) : a(r, t)
    }

    function f(e, t) {
        for (var n = [], r = 0, i = t.length; r < i; r++)
            for (var a = t[r]; a = "prev" == e ? a.previousSibling : a.nextSibling;)
                if (1 == a.nodeType) {
                    n.push(a);
                    break
                }
        return o(n)
    }

    function s(e) {
        this.node = e, this.get = function(t) {
            return e[t]
        }, this.each = function(e) {
            for (var t = this.node, n = 0, r = t.length; n < r; n++) e.call(t[n], n, t[n])
        }, this.prev = function() {
            return f("prev", e)
        }, this.next = function() {
            return f("next", e)
        }, this.eq = function(t) {
            return o([e[t]])
        }, this.remove = function() {
            for (var t = 0, n = e.length; t < n; t++) {
                var r = e[t];
                r.parentNode.removeChild(r)
            }
        }, this.empty = function() {
            return this.html("")
        }, this.before = function(t) {
            return this.each(function(e, n) {
                u("before", t, n)
            }), o(e)
        }, this.after = function(t) {
            return this.each(function(e, n) {
                u("after", t, n)
            }), o(e)
        }, this.html = function(t) {
            return c("html", t, e)
        }, this.text = function(t) {
            return c("text", t, e)
        }, this.attr = function() {}
    }
    var g = n(0);
    e.exports = {
        ele: r,
        ToolElement: s
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        o ? e() : alert("浏览器不支持localStorage！或者开启了隐私模式！")
    }
    var o = window.localStorage,
        i = {
            getCookie: function(e) {
                var t = "",
                    n = document.cookie;
                if (n.length > 0) {
                    var r = e + "=",
                        o = n.indexOf(r);
                    if (o != -1) {
                        o += r.length;
                        var i = n.indexOf(";", o);
                        i == -1 && (i = n.length), t = unescape(n.substring(o, i))
                    }
                }
                return t
            },
            setCookie: function(e, t, n) {
                var r = new Date;
                r.setDate(r.getDate() + n);
                var o = "; expires=" + r.toGMTString();
                document.cookie = e + "=" + escape(t) + o
            },
            getStorage: function(e) {
                var t = "";
                return r(function() {
                    t = o.getItem(e)
                }), t
            },
            setStorage: function(e, t) {
                r(function() {
                    o.setItem(e, t)
                })
            },
            removeStorage: function(e) {
                r(function() {
                    o.removeItem(e)
                })
            },
            clearStorage: function() {
                r(function() {
                    o.clear()
                })
            }
        };
    e.exports = {
        getCookie: i.getCookie,
        setCookie: i.setCookie,
        getStorage: i.getStorage,
        setStorage: i.setStorage,
        removeStorage: i.removeStorage,
        clearStorage: i.clearStorage
    }
}, function(e, t, n) {
    "use strict";
    ! function(e) {
        var t = n(1),
            r = n(0),
            o = n(2),
            i = "undefined" == typeof e.$ ? "$" : "tool";
        "tool" == i && console.warn("window.$命名空间已被使用，请用tool代替..."), e[i] = t.ele, e[i].trim = r.trim, e[i].dateFormat = r.dateFormat, e[i].getQueryString = r.getQueryString, e[i].validate = r.validate, e[i].browserVersion = r.browserVersion, e[i].getCookie = o.getCookie, e[i].setCookie = o.setCookie, e[i].getStorage = o.getStorage, e[i].setStorage = o.setStorage, e[i].removeStorage = o.removeStorage, e[i].clearStorage = o.clearStorage
    }(window)
}]);