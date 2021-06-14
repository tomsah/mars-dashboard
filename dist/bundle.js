;(() => {
  var t = {
      757: (t, e, r) => {
        t.exports = r(666)
      },
      717: (t, e, r) => {
        'use strict'
        r.d(e, {Z: () => i})
        var n = r(645),
          o = r.n(n)()(function (t) {
            return t[1]
          })
        o.push([
          t.id,
          '.gallery-container{overflow:scroll}.gallery-container ul{display:flex;left:-100%;list-style:none;margin:0;padding:0;position:relative;transform:translateX(100%);left:-33.33333%;transform:translateX(33.33333%);transition:transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)}.gallery-container li{background:white;flex:1;height:250px;border:1px solid black;flex-basis:33.33333%;padding:0 10px}.gallery-container img{height:100%}nav{display:flex}.nav-link-container{justify-content:center;flex:1 1 100%;display:flex}\n',
          '',
        ])
        const i = o
      },
      645: (t) => {
        'use strict'
        t.exports = function (t) {
          var e = []
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var r = t(e)
                return e[2] ? '@media '.concat(e[2], ' {').concat(r, '}') : r
              }).join('')
            }),
            (e.i = function (t, r, n) {
              'string' == typeof t && (t = [[null, t, '']])
              var o = {}
              if (n)
                for (var i = 0; i < this.length; i++) {
                  var a = this[i][0]
                  null != a && (o[a] = !0)
                }
              for (var c = 0; c < t.length; c++) {
                var u = [].concat(t[c])
                ;(n && o[u[0]]) ||
                  (r &&
                    (u[2]
                      ? (u[2] = ''.concat(r, ' and ').concat(u[2]))
                      : (u[2] = r)),
                  e.push(u))
              }
            }),
            e
          )
        }
      },
      666: (t) => {
        var e = (function (t) {
          'use strict'
          var e,
            r = Object.prototype,
            n = r.hasOwnProperty,
            o = 'function' == typeof Symbol ? Symbol : {},
            i = o.iterator || '@@iterator',
            a = o.asyncIterator || '@@asyncIterator',
            c = o.toStringTag || '@@toStringTag'
          function u(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            )
          }
          try {
            u({}, '')
          } catch (t) {
            u = function (t, e, r) {
              return (t[e] = r)
            }
          }
          function l(t, e, r, n) {
            var o = e && e.prototype instanceof y ? e : y,
              i = Object.create(o.prototype),
              a = new P(n || [])
            return (
              (i._invoke = (function (t, e, r) {
                var n = f
                return function (o, i) {
                  if (n === p) throw new Error('Generator is already running')
                  if (n === d) {
                    if ('throw' === o) throw i
                    return k()
                  }
                  for (r.method = o, r.arg = i; ; ) {
                    var a = r.delegate
                    if (a) {
                      var c = L(a, r)
                      if (c) {
                        if (c === v) continue
                        return c
                      }
                    }
                    if ('next' === r.method) r.sent = r._sent = r.arg
                    else if ('throw' === r.method) {
                      if (n === f) throw ((n = d), r.arg)
                      r.dispatchException(r.arg)
                    } else 'return' === r.method && r.abrupt('return', r.arg)
                    n = p
                    var u = s(t, e, r)
                    if ('normal' === u.type) {
                      if (((n = r.done ? d : h), u.arg === v)) continue
                      return {value: u.arg, done: r.done}
                    }
                    'throw' === u.type &&
                      ((n = d), (r.method = 'throw'), (r.arg = u.arg))
                  }
                }
              })(t, r, a)),
              i
            )
          }
          function s(t, e, r) {
            try {
              return {type: 'normal', arg: t.call(e, r)}
            } catch (t) {
              return {type: 'throw', arg: t}
            }
          }
          t.wrap = l
          var f = 'suspendedStart',
            h = 'suspendedYield',
            p = 'executing',
            d = 'completed',
            v = {}
          function y() {}
          function m() {}
          function g() {}
          var b = {}
          b[i] = function () {
            return this
          }
          var w = Object.getPrototypeOf,
            x = w && w(w(_([])))
          x && x !== r && n.call(x, i) && (b = x)
          var E = (g.prototype = y.prototype = Object.create(b))
          function O(t) {
            ;['next', 'throw', 'return'].forEach(function (e) {
              u(t, e, function (t) {
                return this._invoke(e, t)
              })
            })
          }
          function j(t, e) {
            function r(o, i, a, c) {
              var u = s(t[o], t, i)
              if ('throw' !== u.type) {
                var l = u.arg,
                  f = l.value
                return f && 'object' == typeof f && n.call(f, '__await')
                  ? e.resolve(f.__await).then(
                      function (t) {
                        r('next', t, a, c)
                      },
                      function (t) {
                        r('throw', t, a, c)
                      },
                    )
                  : e.resolve(f).then(
                      function (t) {
                        ;(l.value = t), a(l)
                      },
                      function (t) {
                        return r('throw', t, a, c)
                      },
                    )
              }
              c(u.arg)
            }
            var o
            this._invoke = function (t, n) {
              function i() {
                return new e(function (e, o) {
                  r(t, n, e, o)
                })
              }
              return (o = o ? o.then(i, i) : i())
            }
          }
          function L(t, r) {
            var n = t.iterator[r.method]
            if (n === e) {
              if (((r.delegate = null), 'throw' === r.method)) {
                if (
                  t.iterator.return &&
                  ((r.method = 'return'),
                  (r.arg = e),
                  L(t, r),
                  'throw' === r.method)
                )
                  return v
                ;(r.method = 'throw'),
                  (r.arg = new TypeError(
                    "The iterator does not provide a 'throw' method",
                  ))
              }
              return v
            }
            var o = s(n, t.iterator, r.arg)
            if ('throw' === o.type)
              return (
                (r.method = 'throw'), (r.arg = o.arg), (r.delegate = null), v
              )
            var i = o.arg
            return i
              ? i.done
                ? ((r[t.resultName] = i.value),
                  (r.next = t.nextLoc),
                  'return' !== r.method && ((r.method = 'next'), (r.arg = e)),
                  (r.delegate = null),
                  v)
                : i
              : ((r.method = 'throw'),
                (r.arg = new TypeError('iterator result is not an object')),
                (r.delegate = null),
                v)
          }
          function S(t) {
            var e = {tryLoc: t[0]}
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e)
          }
          function N(t) {
            var e = t.completion || {}
            ;(e.type = 'normal'), delete e.arg, (t.completion = e)
          }
          function P(t) {
            ;(this.tryEntries = [{tryLoc: 'root'}]),
              t.forEach(S, this),
              this.reset(!0)
          }
          function _(t) {
            if (t) {
              var r = t[i]
              if (r) return r.call(t)
              if ('function' == typeof t.next) return t
              if (!isNaN(t.length)) {
                var o = -1,
                  a = function r() {
                    for (; ++o < t.length; )
                      if (n.call(t, o))
                        return (r.value = t[o]), (r.done = !1), r
                    return (r.value = e), (r.done = !0), r
                  }
                return (a.next = a)
              }
            }
            return {next: k}
          }
          function k() {
            return {value: e, done: !0}
          }
          return (
            (m.prototype = E.constructor = g),
            (g.constructor = m),
            (m.displayName = u(g, c, 'GeneratorFunction')),
            (t.isGeneratorFunction = function (t) {
              var e = 'function' == typeof t && t.constructor
              return (
                !!e &&
                (e === m || 'GeneratorFunction' === (e.displayName || e.name))
              )
            }),
            (t.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, g)
                  : ((t.__proto__ = g), u(t, c, 'GeneratorFunction')),
                (t.prototype = Object.create(E)),
                t
              )
            }),
            (t.awrap = function (t) {
              return {__await: t}
            }),
            O(j.prototype),
            (j.prototype[a] = function () {
              return this
            }),
            (t.AsyncIterator = j),
            (t.async = function (e, r, n, o, i) {
              void 0 === i && (i = Promise)
              var a = new j(l(e, r, n, o), i)
              return t.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next()
                  })
            }),
            O(E),
            u(E, c, 'Generator'),
            (E[i] = function () {
              return this
            }),
            (E.toString = function () {
              return '[object Generator]'
            }),
            (t.keys = function (t) {
              var e = []
              for (var r in t) e.push(r)
              return (
                e.reverse(),
                function r() {
                  for (; e.length; ) {
                    var n = e.pop()
                    if (n in t) return (r.value = n), (r.done = !1), r
                  }
                  return (r.done = !0), r
                }
              )
            }),
            (t.values = _),
            (P.prototype = {
              constructor: P,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = e),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = e),
                  this.tryEntries.forEach(N),
                  !t)
                )
                  for (var r in this)
                    't' === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = e)
              },
              stop: function () {
                this.done = !0
                var t = this.tryEntries[0].completion
                if ('throw' === t.type) throw t.arg
                return this.rval
              },
              dispatchException: function (t) {
                if (this.done) throw t
                var r = this
                function o(n, o) {
                  return (
                    (c.type = 'throw'),
                    (c.arg = t),
                    (r.next = n),
                    o && ((r.method = 'next'), (r.arg = e)),
                    !!o
                  )
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var a = this.tryEntries[i],
                    c = a.completion
                  if ('root' === a.tryLoc) return o('end')
                  if (a.tryLoc <= this.prev) {
                    var u = n.call(a, 'catchLoc'),
                      l = n.call(a, 'finallyLoc')
                    if (u && l) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                    } else if (u) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                    } else {
                      if (!l)
                        throw new Error(
                          'try statement without catch or finally',
                        )
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r]
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, 'finallyLoc') &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o
                    break
                  }
                }
                i &&
                  ('break' === t || 'continue' === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null)
                var a = i ? i.completion : {}
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = 'next'), (this.next = i.finallyLoc), v)
                    : this.complete(a)
                )
              },
              complete: function (t, e) {
                if ('throw' === t.type) throw t.arg
                return (
                  'break' === t.type || 'continue' === t.type
                    ? (this.next = t.arg)
                    : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && e && (this.next = e),
                  v
                )
              },
              finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e]
                  if (r.finallyLoc === t)
                    return this.complete(r.completion, r.afterLoc), N(r), v
                }
              },
              catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e]
                  if (r.tryLoc === t) {
                    var n = r.completion
                    if ('throw' === n.type) {
                      var o = n.arg
                      N(r)
                    }
                    return o
                  }
                }
                throw new Error('illegal catch attempt')
              },
              delegateYield: function (t, r, n) {
                return (
                  (this.delegate = {iterator: _(t), resultName: r, nextLoc: n}),
                  'next' === this.method && (this.arg = e),
                  v
                )
              },
            }),
            t
          )
        })(t.exports)
        try {
          regeneratorRuntime = e
        } catch (t) {
          Function('r', 'regeneratorRuntime = r')(e)
        }
      },
      379: (t, e, r) => {
        'use strict'
        var n,
          o = (function () {
            var t = {}
            return function (e) {
              if (void 0 === t[e]) {
                var r = document.querySelector(e)
                if (
                  window.HTMLIFrameElement &&
                  r instanceof window.HTMLIFrameElement
                )
                  try {
                    r = r.contentDocument.head
                  } catch (t) {
                    r = null
                  }
                t[e] = r
              }
              return t[e]
            }
          })(),
          i = []
        function a(t) {
          for (var e = -1, r = 0; r < i.length; r++)
            if (i[r].identifier === t) {
              e = r
              break
            }
          return e
        }
        function c(t, e) {
          for (var r = {}, n = [], o = 0; o < t.length; o++) {
            var c = t[o],
              u = e.base ? c[0] + e.base : c[0],
              l = r[u] || 0,
              s = ''.concat(u, ' ').concat(l)
            r[u] = l + 1
            var f = a(s),
              h = {css: c[1], media: c[2], sourceMap: c[3]}
            ;-1 !== f
              ? (i[f].references++, i[f].updater(h))
              : i.push({identifier: s, updater: v(h, e), references: 1}),
              n.push(s)
          }
          return n
        }
        function u(t) {
          var e = document.createElement('style'),
            n = t.attributes || {}
          if (void 0 === n.nonce) {
            var i = r.nc
            i && (n.nonce = i)
          }
          if (
            (Object.keys(n).forEach(function (t) {
              e.setAttribute(t, n[t])
            }),
            'function' == typeof t.insert)
          )
            t.insert(e)
          else {
            var a = o(t.insert || 'head')
            if (!a)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
              )
            a.appendChild(e)
          }
          return e
        }
        var l,
          s =
            ((l = []),
            function (t, e) {
              return (l[t] = e), l.filter(Boolean).join('\n')
            })
        function f(t, e, r, n) {
          var o = r
            ? ''
            : n.media
            ? '@media '.concat(n.media, ' {').concat(n.css, '}')
            : n.css
          if (t.styleSheet) t.styleSheet.cssText = s(e, o)
          else {
            var i = document.createTextNode(o),
              a = t.childNodes
            a[e] && t.removeChild(a[e]),
              a.length ? t.insertBefore(i, a[e]) : t.appendChild(i)
          }
        }
        function h(t, e, r) {
          var n = r.css,
            o = r.media,
            i = r.sourceMap
          if (
            (o ? t.setAttribute('media', o) : t.removeAttribute('media'),
            i &&
              'undefined' != typeof btoa &&
              (n +=
                '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                  btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                  ' */',
                )),
            t.styleSheet)
          )
            t.styleSheet.cssText = n
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild)
            t.appendChild(document.createTextNode(n))
          }
        }
        var p = null,
          d = 0
        function v(t, e) {
          var r, n, o
          if (e.singleton) {
            var i = d++
            ;(r = p || (p = u(e))),
              (n = f.bind(null, r, i, !1)),
              (o = f.bind(null, r, i, !0))
          } else
            (r = u(e)),
              (n = h.bind(null, r, e)),
              (o = function () {
                !(function (t) {
                  if (null === t.parentNode) return !1
                  t.parentNode.removeChild(t)
                })(r)
              })
          return (
            n(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap
                )
                  return
                n((t = e))
              } else o()
            }
          )
        }
        t.exports = function (t, e) {
          ;(e = e || {}).singleton ||
            'boolean' == typeof e.singleton ||
            (e.singleton =
              (void 0 === n &&
                (n = Boolean(
                  window && document && document.all && !window.atob,
                )),
              n))
          var r = c((t = t || []), e)
          return function (t) {
            if (
              ((t = t || []),
              '[object Array]' === Object.prototype.toString.call(t))
            ) {
              for (var n = 0; n < r.length; n++) {
                var o = a(r[n])
                i[o].references--
              }
              for (var u = c(t, e), l = 0; l < r.length; l++) {
                var s = a(r[l])
                0 === i[s].references && (i[s].updater(), i.splice(s, 1))
              }
              r = u
            }
          }
        }
      },
    },
    e = {}
  function r(n) {
    var o = e[n]
    if (void 0 !== o) return o.exports
    var i = (e[n] = {id: n, exports: {}})
    return t[n](i, i.exports, r), i.exports
  }
  ;(r.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t
    return r.d(e, {a: e}), e
  }),
    (r.d = (t, e) => {
      for (var n in e)
        r.o(e, n) &&
          !r.o(t, n) &&
          Object.defineProperty(t, n, {enumerable: !0, get: e[n]})
    }),
    (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      'use strict'
      function t(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r]
        return n
      }
      function e(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        )
      }
      function n(t, e, r, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value
        } catch (t) {
          return void r(t)
        }
        c.done ? e(u) : Promise.resolve(u).then(n, o)
      }
      function o(t) {
        return function () {
          var e = this,
            r = arguments
          return new Promise(function (o, i) {
            var a = t.apply(e, r)
            function c(t) {
              n(a, o, i, c, u, 'next', t)
            }
            function u(t) {
              n(a, o, i, c, u, 'throw', t)
            }
            c(void 0)
          })
        }
      }
      var i = r(757),
        a = r.n(i),
        c = r(379),
        u = r.n(c),
        l = r(717)
      function s(t, e) {
        var r = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t)
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function f(t) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {}
          r % 2
            ? s(Object(n), !0).forEach(function (r) {
                e(t, r, n[r])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e),
                )
              })
        }
        return t
      }
      u()(l.Z, {insert: 'head', singleton: !1}), l.Z.locals
      var h = document.getElementById('root'),
        p = document.createElement('h1'),
        d = document.createElement('nav'),
        v = document.createElement('div')
      v.className = 'main-container'
      var y,
        m = ['curiosity', 'opportunity', 'spirit']
      function g(t, e) {
        return t.appendChild(e)
      }
      function b(t) {
        return w.apply(this, arguments)
      }
      function w() {
        return (w = o(
          a().mark(function t(e) {
            return a().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      fetch('http://localhost:3000/'.concat(e))
                        .then(function (t) {
                          return t.json()
                        })
                        .then(function (t) {
                          var e = t.data
                          console.log(e), x(e)
                        })
                        .catch(function (t) {
                          return console.log(t)
                        })
                    )
                  case 2:
                  case 'end':
                    return t.stop()
                }
            }, t)
          }),
        )).apply(this, arguments)
      }
      var x = function (t) {
          console.log('>>', t)
          var e,
            r = {images: t[0].photos.splice(0, 10), info: t[1].photo_manifest}
          E(r),
            console.log('lll', r),
            (e = r.info.name),
            (p.innerHTML = e),
            h.appendChild(p)
          var n = O(r, r.info.name)
          h.appendChild(n)
        },
        E = function (t) {
          return (y = f(f({}, y), {}, e({}, t.info.name, f({}, t))))
        },
        O = function (t) {
          var e = document.createElement('ul'),
            r = document.createElement('div')
          ;(r.className = 'gallery-container'),
            (v.innerHTML = ''),
            (e.className = 'gallery')
          var n = t.images
          return (
            console.log('ddd', t, n),
            n
              .map(function (t) {
                var e = document.createElement('li'),
                  r = document.createElement('img')
                return (r.src = t.img_src), g(e, r), e
              })
              .forEach(function (t) {
                return g(e, t)
              }),
            g(r, e),
            v.appendChild(r),
            v
          )
        }
      window.onload = function () {
        var e
        b(
          ((e = window.location.pathname),
          (function (e) {
            if (Array.isArray(e)) return t(e)
          })(e) ||
            (function (t) {
              if (
                ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
                null != t['@@iterator']
              )
                return Array.from(t)
            })(e) ||
            (function (e, r) {
              if (e) {
                if ('string' == typeof e) return t(e, r)
                var n = Object.prototype.toString.call(e).slice(8, -1)
                return (
                  'Object' === n && e.constructor && (n = e.constructor.name),
                  'Map' === n || 'Set' === n
                    ? Array.from(e)
                    : 'Arguments' === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? t(e, r)
                    : void 0
                )
              }
            })(e) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
              )
            })())
            .slice(1)
            .join(''),
        ).then(function () {
          return (
            console.log('store', y),
            m
              .map(function (t) {
                var e = document.createElement('div')
                e.className = 'nav-link-container'
                var r = document.createElement('a'),
                  n = document.createTextNode(t)
                return (
                  r.append(n),
                  r.setAttribute('href', 'http://localhost:8080/'.concat(t)),
                  (r.onclick = function () {
                    return stop.event, b(t), !1
                  }),
                  g(e, r),
                  e
                )
              })
              .forEach(function (t) {
                return g(d, t)
              }),
            h.appendChild(d),
            h.appendChild(v),
            h
          )
        })
      }
    })()
})()
