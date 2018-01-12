/*! LGMaps v3.1.0, 2017-07-09 */
window.requestAnimationFrame || (window.requestAnimationFrame = function() {
    return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e, n) {
        window.setTimeout(e, 1e3 / 60)
    }
}()), window.cancelAnimationFrame || (window.cancelAnimationFrame = function() {
    return window.cancelAnimationFrame || window.mozCancelAnimationFrame || function(e, n) {
        window.clearTimeout()
    }
}()),
    function(e) {
    function n(n) {
        var t = n || window.event,
            i = [].slice.call(arguments, 1),
            o = 0,
            u = 0,
            a = 0;
        return n = e.event.fix(t), n.type = "mousewheel", t.wheelDelta && (o = t.wheelDelta / 120), t.detail && (o = -t.detail / 3), a = o, void 0 !== t.axis && t.axis === t.HORIZONTAL_AXIS && (a = 0, u = -1 * o), void 0 !== t.wheelDeltaY && (a = t.wheelDeltaY / 120), void 0 !== t.wheelDeltaX && (u = -1 * t.wheelDeltaX / 120), i.unshift(n, o, u, a), (e.event.dispatch || e.event.handle).apply(this, i)
    }
    var t = ["DOMMouseScroll", "mousewheel"];
    if (e.event.fixHooks)
        for (var i = t.length; i;) e.event.fixHooks[t[--i]] = e.event.mouseHooks;
    e.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener)
                for (var e = t.length; e;) this.addEventListener(t[--e], n, !1);
            else this.onmousewheel = n
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var e = t.length; e;) this.removeEventListener(t[--e], n, !1);
            else this.onmousewheel = null
        }
    }, e.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    })
}(jQuery),
    function(e) {
    function n(e, u, a, r) {
        function h() {
            function n() {
                var t = +new Date,
                    i = t - s;
                return u(t >= l ? 1 : i / a), t >= l ? (o(m, w, r), cancelAnimationFrame(n)) : requestAnimationFrame(n, e)
            }
            return n()
        }
        var w = i(e),
            s = +new Date,
            l = s + a,
            m = ++n.runID;
        w.push(h), t(w)
    }

    function t(e) {
        var n = e[0];
        n && (n.runID || (n.runID = n()))
    }

    function i(e) {
        e.queueID || (e.queueID = Raphael.createUUID());
        var n = u.stat.queue;
        return n[e.queueID] || (n[e.queueID] = []), n[e.queueID]
    }

    function o(e, n, i) {
        n.shift() && (i && i(), t(n))
    }
    n.runID = 0;
    var u = function(e, t, i, o, u, a, r) {
        a = a || 250;
        var h = e,
            w = {
                x: t - h.x,
                y: i - h.y,
                width: o - h.width,
                height: u - h.height
            },
            s = {
                x: w.x,
                y: w.y,
                width: w.width,
                height: w.height
            },
            l = this;
        n(l, function(e) {
            l.setViewBox(h.x + s.x * e, h.y + s.y * e, h.width + s.width * e, h.height + s.height * e)
        }, a, function() {
            r && r(t, i, o, u)
        })
    };
    u.stat = {
        queue: {}
    }, e.animateViewBox = u
}(Raphael.fn);