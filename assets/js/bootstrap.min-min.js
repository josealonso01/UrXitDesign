!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports, require('jquery'), require('popper.js'))
    : 'function' == typeof define && define.amd
    ? define(['exports', 'jquery', 'popper.js'], e)
    : e(((t = t || self).bootstrap = {}), t.jQuery, t.Popper);
})(this, function (t, e, n) {
  'use strict';
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        'value' in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function o(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }
  function r(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
        i = Object.keys(n);
      'function' == typeof Object.getOwnPropertySymbols &&
        (i = i.concat(
          Object.getOwnPropertySymbols(n).filter(function (t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable;
          })
        )),
        i.forEach(function (e) {
          var i, o, r;
          (i = t),
            (r = n[(o = e)]),
            o in i
              ? Object.defineProperty(i, o, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (i[o] = r);
        });
    }
    return t;
  }
  function s(t) {
    var n = this,
      i = !1;
    return (
      e(this).one(c.TRANSITION_END, function () {
        i = !0;
      }),
      setTimeout(function () {
        i || c.triggerTransitionEnd(n);
      }, t),
      this
    );
  }
  function a(t, e, n) {
    if (0 === t.length) return t;
    if (n && 'function' == typeof n) return n(t);
    for (
      var i = new window.DOMParser().parseFromString(t, 'text/html'),
        o = Object.keys(e),
        r = [].slice.call(i.body.querySelectorAll('*')),
        s = function (t, n) {
          var i = r[t],
            s = i.nodeName.toLowerCase();
          if (-1 === o.indexOf(i.nodeName.toLowerCase()))
            return i.parentNode.removeChild(i), 'continue';
          var a = [].slice.call(i.attributes),
            l = [].concat(e['*'] || [], e[s] || []);
          a.forEach(function (t) {
            (function (t, e) {
              var n = t.nodeName.toLowerCase();
              if (-1 !== e.indexOf(n))
                return (
                  -1 === _e.indexOf(n) ||
                  Boolean(
                    t.nodeValue.match(pe) || t.nodeValue.match(ve)
                  )
                );
              for (
                var i = e.filter(function (t) {
                    return t instanceof RegExp;
                  }),
                  o = 0,
                  r = i.length;
                o < r;
                o++
              )
                if (n.match(i[o])) return !0;
              return !1;
            })(t, l) || i.removeAttribute(t.nodeName);
          });
        },
        a = 0,
        l = r.length;
      a < l;
      a++
    )
      s(a);
    return i.body.innerHTML;
  }
  (e = e && e.hasOwnProperty('default') ? e.default : e),
    (n = n && n.hasOwnProperty('default') ? n.default : n);
  var l = 'transitionend',
    c = {
      TRANSITION_END: 'bsTransitionEnd',
      getUID: function (t) {
        for (
          ;
          (t += ~~(1e6 * Math.random())), document.getElementById(t);

        );
        return t;
      },
      getSelectorFromElement: function (t) {
        var e = t.getAttribute('data-target');
        if (!e || '#' === e) {
          var n = t.getAttribute('href');
          e = n && '#' !== n ? n.trim() : '';
        }
        try {
          return document.querySelector(e) ? e : null;
        } catch (t) {
          return null;
        }
      },
      getTransitionDurationFromElement: function (t) {
        if (!t) return 0;
        var n = e(t).css('transition-duration'),
          i = e(t).css('transition-delay'),
          o = parseFloat(n),
          r = parseFloat(i);
        return o || r
          ? ((n = n.split(',')[0]),
            (i = i.split(',')[0]),
            1e3 * (parseFloat(n) + parseFloat(i)))
          : 0;
      },
      reflow: function (t) {
        return t.offsetHeight;
      },
      triggerTransitionEnd: function (t) {
        e(t).trigger(l);
      },
      supportsTransitionEnd: function () {
        return Boolean(l);
      },
      isElement: function (t) {
        return (t[0] || t).nodeType;
      },
      typeCheckConfig: function (t, e, n) {
        for (var i in n)
          if (Object.prototype.hasOwnProperty.call(n, i)) {
            var o = n[i],
              r = e[i],
              s =
                r && c.isElement(r)
                  ? 'element'
                  : ((a = r),
                    {}.toString
                      .call(a)
                      .match(/\s([a-z]+)/i)[1]
                      .toLowerCase());
            if (!new RegExp(o).test(s))
              throw new Error(
                t.toUpperCase() +
                  ': Option "' +
                  i +
                  '" provided type "' +
                  s +
                  '" but expected type "' +
                  o +
                  '".'
              );
          }
        var a;
      },
      findShadowRoot: function (t) {
        if (!document.documentElement.attachShadow) return null;
        if ('function' != typeof t.getRootNode)
          return t instanceof ShadowRoot
            ? t
            : t.parentNode
            ? c.findShadowRoot(t.parentNode)
            : null;
        var e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      },
    };
  (e.fn.emulateTransitionEnd = s),
    (e.event.special[c.TRANSITION_END] = {
      bindType: l,
      delegateType: l,
      handle: function (t) {
        if (e(t.target).is(this))
          return t.handleObj.handler.apply(this, arguments);
      },
    });
  var h = 'alert',
    u = 'bs.alert',
    f = '.' + u,
    d = e.fn[h],
    g = {
      CLOSE: 'close' + f,
      CLOSED: 'closed' + f,
      CLICK_DATA_API: 'click' + f + '.data-api',
    },
    _ = 'alert',
    m = 'fade',
    p = 'show',
    v = (function () {
      function t(t) {
        this._element = t;
      }
      var n = t.prototype;
      return (
        (n.close = function (t) {
          var e = this._element;
          t && (e = this._getRootElement(t)),
            this._triggerCloseEvent(e).isDefaultPrevented() ||
              this._removeElement(e);
        }),
        (n.dispose = function () {
          e.removeData(this._element, u), (this._element = null);
        }),
        (n._getRootElement = function (t) {
          var n = c.getSelectorFromElement(t),
            i = !1;
          return (
            n && (i = document.querySelector(n)),
            i || (i = e(t).closest('.' + _)[0]),
            i
          );
        }),
        (n._triggerCloseEvent = function (t) {
          var n = e.Event(g.CLOSE);
          return e(t).trigger(n), n;
        }),
        (n._removeElement = function (t) {
          var n = this;
          if ((e(t).removeClass(p), e(t).hasClass(m))) {
            var i = c.getTransitionDurationFromElement(t);
            e(t)
              .one(c.TRANSITION_END, function (e) {
                return n._destroyElement(t, e);
              })
              .emulateTransitionEnd(i);
          } else this._destroyElement(t);
        }),
        (n._destroyElement = function (t) {
          e(t).detach().trigger(g.CLOSED).remove();
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this),
              o = i.data(u);
            o || ((o = new t(this)), i.data(u, o)),
              'close' === n && o[n](this);
          });
        }),
        (t._handleDismiss = function (t) {
          return function (e) {
            e && e.preventDefault(), t.close(this);
          };
        }),
        o(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.3.1';
            },
          },
        ]),
        t
      );
    })();
  e(document).on(
    g.CLICK_DATA_API,
    '[data-dismiss="alert"]',
    v._handleDismiss(new v())
  ),
    (e.fn[h] = v._jQueryInterface),
    (e.fn[h].Constructor = v),
    (e.fn[h].noConflict = function () {
      return (e.fn[h] = d), v._jQueryInterface;
    });
  var E = 'button',
    y = 'bs.button',
    C = '.' + y,
    T = '.data-api',
    S = e.fn[E],
    b = 'active',
    I = '[data-toggle^="button"]',
    D = '[data-toggle="buttons"]',
    w = 'input:not([type="hidden"])',
    A = '.active',
    N = '.btn',
    O = {
      CLICK_DATA_API: 'click' + C + T,
      FOCUS_BLUR_DATA_API: 'focus' + C + T + ' blur' + C + T,
    },
    k = (function () {
      function t(t) {
        this._element = t;
      }
      var n = t.prototype;
      return (
        (n.toggle = function () {
          var t = !0,
            n = !0,
            i = e(this._element).closest(D)[0];
          if (i) {
            var o = this._element.querySelector(w);
            if (o) {
              if ('radio' === o.type)
                if (o.checked && this._element.classList.contains(b))
                  t = !1;
                else {
                  var r = i.querySelector(A);
                  r && e(r).removeClass(b);
                }
              if (t) {
                if (
                  o.hasAttribute('disabled') ||
                  i.hasAttribute('disabled') ||
                  o.classList.contains('disabled') ||
                  i.classList.contains('disabled')
                )
                  return;
                (o.checked = !this._element.classList.contains(b)),
                  e(o).trigger('change');
              }
              o.focus(), (n = !1);
            }
          }
          n &&
            this._element.setAttribute(
              'aria-pressed',
              !this._element.classList.contains(b)
            ),
            t && e(this._element).toggleClass(b);
        }),
        (n.dispose = function () {
          e.removeData(this._element, y), (this._element = null);
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this).data(y);
            i || ((i = new t(this)), e(this).data(y, i)),
              'toggle' === n && i[n]();
          });
        }),
        o(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.3.1';
            },
          },
        ]),
        t
      );
    })();
  e(document)
    .on(O.CLICK_DATA_API, I, function (t) {
      t.preventDefault();
      var n = t.target;
      e(n).hasClass('btn') || (n = e(n).closest(N)),
        k._jQueryInterface.call(e(n), 'toggle');
    })
    .on(O.FOCUS_BLUR_DATA_API, I, function (t) {
      var n = e(t.target).closest(N)[0];
      e(n).toggleClass('focus', /^focus(in)?$/.test(t.type));
    }),
    (e.fn[E] = k._jQueryInterface),
    (e.fn[E].Constructor = k),
    (e.fn[E].noConflict = function () {
      return (e.fn[E] = S), k._jQueryInterface;
    });
  var P = 'carousel',
    L = 'bs.carousel',
    j = '.' + L,
    H = '.data-api',
    R = e.fn[P],
    x = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: 'hover',
      wrap: !0,
      touch: !0,
    },
    F = {
      interval: '(number|boolean)',
      keyboard: 'boolean',
      slide: '(boolean|string)',
      pause: '(string|boolean)',
      wrap: 'boolean',
      touch: 'boolean',
    },
    U = 'next',
    W = 'prev',
    q = 'left',
    M = 'right',
    K = {
      SLIDE: 'slide' + j,
      SLID: 'slid' + j,
      KEYDOWN: 'keydown' + j,
      MOUSEENTER: 'mouseenter' + j,
      MOUSELEAVE: 'mouseleave' + j,
      TOUCHSTART: 'touchstart' + j,
      TOUCHMOVE: 'touchmove' + j,
      TOUCHEND: 'touchend' + j,
      POINTERDOWN: 'pointerdown' + j,
      POINTERUP: 'pointerup' + j,
      DRAG_START: 'dragstart' + j,
      LOAD_DATA_API: 'load' + j + H,
      CLICK_DATA_API: 'click' + j + H,
    },
    Q = 'carousel',
    B = 'active',
    V = 'slide',
    Y = 'carousel-item-right',
    z = 'carousel-item-left',
    $ = 'carousel-item-next',
    X = 'carousel-item-prev',
    G = 'pointer-event',
    J = '.active',
    Z = '.active.carousel-item',
    tt = '.carousel-item',
    et = '.carousel-item img',
    nt = '.carousel-item-next, .carousel-item-prev',
    it = '.carousel-indicators',
    ot = '[data-ride="carousel"]',
    rt = { TOUCH: 'touch', PEN: 'pen' },
    st = (function () {
      function t(t, e) {
        (this._items = null),
          (this._interval = null),
          (this._activeElement = null),
          (this._isPaused = !1),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this.touchStartX = 0),
          (this.touchDeltaX = 0),
          (this._config = this._getConfig(e)),
          (this._element = t),
          (this._indicatorsElement = this._element.querySelector(it)),
          (this._touchSupported =
            'ontouchstart' in document.documentElement ||
            0 < navigator.maxTouchPoints),
          (this._pointerEvent = Boolean(
            window.PointerEvent || window.MSPointerEvent
          )),
          this._addEventListeners();
      }
      var n = t.prototype;
      return (
        (n.next = function () {
          this._isSliding || this._slide(U);
        }),
        (n.nextWhenVisible = function () {
          !document.hidden &&
            e(this._element).is(':visible') &&
            'hidden' !== e(this._element).css('visibility') &&
            this.next();
        }),
        (n.prev = function () {
          this._isSliding || this._slide(W);
        }),
        (n.pause = function (t) {
          t || (this._isPaused = !0),
            this._element.querySelector(nt) &&
              (c.triggerTransitionEnd(this._element), this.cycle(!0)),
            clearInterval(this._interval),
            (this._interval = null);
        }),
        (n.cycle = function (t) {
          t || (this._isPaused = !1),
            this._interval &&
              (clearInterval(this._interval),
              (this._interval = null)),
            this._config.interval &&
              !this._isPaused &&
              (this._interval = setInterval(
                (document.visibilityState
                  ? this.nextWhenVisible
                  : this.next
                ).bind(this),
                this._config.interval
              ));
        }),
        (n.to = function (t) {
          var n = this;
          this._activeElement = this._element.querySelector(Z);
          var i = this._getItemIndex(this._activeElement);
          if (!(t > this._items.length - 1 || t < 0))
            if (this._isSliding)
              e(this._element).one(K.SLID, function () {
                return n.to(t);
              });
            else {
              if (i === t) return this.pause(), void this.cycle();
              var o = i < t ? U : W;
              this._slide(o, this._items[t]);
            }
        }),
        (n.dispose = function () {
          e(this._element).off(j),
            e.removeData(this._element, L),
            (this._items = null),
            (this._config = null),
            (this._element = null),
            (this._interval = null),
            (this._isPaused = null),
            (this._isSliding = null),
            (this._activeElement = null),
            (this._indicatorsElement = null);
        }),
        (n._getConfig = function (t) {
          return (t = r({}, x, t)), c.typeCheckConfig(P, t, F), t;
        }),
        (n._handleSwipe = function () {
          var t = Math.abs(this.touchDeltaX);
          if (!(t <= 40)) {
            var e = t / this.touchDeltaX;
            0 < e && this.prev(), e < 0 && this.next();
          }
        }),
        (n._addEventListeners = function () {
          var t = this;
          this._config.keyboard &&
            e(this._element).on(K.KEYDOWN, function (e) {
              return t._keydown(e);
            }),
            'hover' === this._config.pause &&
              e(this._element)
                .on(K.MOUSEENTER, function (e) {
                  return t.pause(e);
                })
                .on(K.MOUSELEAVE, function (e) {
                  return t.cycle(e);
                }),
            this._config.touch && this._addTouchEventListeners();
        }),
        (n._addTouchEventListeners = function () {
          var t = this;
          if (this._touchSupported) {
            var n = function (e) {
                t._pointerEvent &&
                rt[e.originalEvent.pointerType.toUpperCase()]
                  ? (t.touchStartX = e.originalEvent.clientX)
                  : t._pointerEvent ||
                    (t.touchStartX =
                      e.originalEvent.touches[0].clientX);
              },
              i = function (e) {
                t._pointerEvent &&
                  rt[e.originalEvent.pointerType.toUpperCase()] &&
                  (t.touchDeltaX =
                    e.originalEvent.clientX - t.touchStartX),
                  t._handleSwipe(),
                  'hover' === t._config.pause &&
                    (t.pause(),
                    t.touchTimeout && clearTimeout(t.touchTimeout),
                    (t.touchTimeout = setTimeout(function (e) {
                      return t.cycle(e);
                    }, 500 + t._config.interval)));
              };
            e(this._element.querySelectorAll(et)).on(
              K.DRAG_START,
              function (t) {
                return t.preventDefault();
              }
            ),
              this._pointerEvent
                ? (e(this._element).on(K.POINTERDOWN, function (t) {
                    return n(t);
                  }),
                  e(this._element).on(K.POINTERUP, function (t) {
                    return i(t);
                  }),
                  this._element.classList.add(G))
                : (e(this._element).on(K.TOUCHSTART, function (t) {
                    return n(t);
                  }),
                  e(this._element).on(K.TOUCHMOVE, function (e) {
                    var n;
                    (n = e).originalEvent.touches &&
                    1 < n.originalEvent.touches.length
                      ? (t.touchDeltaX = 0)
                      : (t.touchDeltaX =
                          n.originalEvent.touches[0].clientX -
                          t.touchStartX);
                  }),
                  e(this._element).on(K.TOUCHEND, function (t) {
                    return i(t);
                  }));
          }
        }),
        (n._keydown = function (t) {
          if (!/input|textarea/i.test(t.target.tagName))
            switch (t.which) {
              case 37:
                t.preventDefault(), this.prev();
                break;
              case 39:
                t.preventDefault(), this.next();
            }
        }),
        (n._getItemIndex = function (t) {
          return (
            (this._items =
              t && t.parentNode
                ? [].slice.call(t.parentNode.querySelectorAll(tt))
                : []),
            this._items.indexOf(t)
          );
        }),
        (n._getItemByDirection = function (t, e) {
          var n = t === U,
            i = t === W,
            o = this._getItemIndex(e),
            r = this._items.length - 1;
          if (
            ((i && 0 === o) || (n && o === r)) &&
            !this._config.wrap
          )
            return e;
          var s = (o + (t === W ? -1 : 1)) % this._items.length;
          return -1 === s
            ? this._items[this._items.length - 1]
            : this._items[s];
        }),
        (n._triggerSlideEvent = function (t, n) {
          var i = this._getItemIndex(t),
            o = this._getItemIndex(this._element.querySelector(Z)),
            r = e.Event(K.SLIDE, {
              relatedTarget: t,
              direction: n,
              from: o,
              to: i,
            });
          return e(this._element).trigger(r), r;
        }),
        (n._setActiveIndicatorElement = function (t) {
          if (this._indicatorsElement) {
            var n = [].slice.call(
              this._indicatorsElement.querySelectorAll(J)
            );
            e(n).removeClass(B);
            var i =
              this._indicatorsElement.children[this._getItemIndex(t)];
            i && e(i).addClass(B);
          }
        }),
        (n._slide = function (t, n) {
          var i,
            o,
            r,
            s = this,
            a = this._element.querySelector(Z),
            l = this._getItemIndex(a),
            h = n || (a && this._getItemByDirection(t, a)),
            u = this._getItemIndex(h),
            f = Boolean(this._interval);
          if (
            ((r =
              t === U
                ? ((i = z), (o = $), q)
                : ((i = Y), (o = X), M)),
            h && e(h).hasClass(B))
          )
            this._isSliding = !1;
          else if (
            !this._triggerSlideEvent(h, r).isDefaultPrevented() &&
            a &&
            h
          ) {
            (this._isSliding = !0),
              f && this.pause(),
              this._setActiveIndicatorElement(h);
            var d = e.Event(K.SLID, {
              relatedTarget: h,
              direction: r,
              from: l,
              to: u,
            });
            if (e(this._element).hasClass(V)) {
              e(h).addClass(o),
                c.reflow(h),
                e(a).addClass(i),
                e(h).addClass(i);
              var g = parseInt(h.getAttribute('data-interval'), 10);
              this._config.interval = g
                ? ((this._config.defaultInterval =
                    this._config.defaultInterval ||
                    this._config.interval),
                  g)
                : this._config.defaultInterval ||
                  this._config.interval;
              var _ = c.getTransitionDurationFromElement(a);
              e(a)
                .one(c.TRANSITION_END, function () {
                  e(h)
                    .removeClass(i + ' ' + o)
                    .addClass(B),
                    e(a).removeClass(B + ' ' + o + ' ' + i),
                    (s._isSliding = !1),
                    setTimeout(function () {
                      return e(s._element).trigger(d);
                    }, 0);
                })
                .emulateTransitionEnd(_);
            } else
              e(a).removeClass(B),
                e(h).addClass(B),
                (this._isSliding = !1),
                e(this._element).trigger(d);
            f && this.cycle();
          }
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this).data(L),
              o = r({}, x, e(this).data());
            'object' == typeof n && (o = r({}, o, n));
            var s = 'string' == typeof n ? n : o.slide;
            if (
              (i || ((i = new t(this, o)), e(this).data(L, i)),
              'number' == typeof n)
            )
              i.to(n);
            else if ('string' == typeof s) {
              if (void 0 === i[s])
                throw new TypeError('No method named "' + s + '"');
              i[s]();
            } else o.interval && o.ride && (i.pause(), i.cycle());
          });
        }),
        (t._dataApiClickHandler = function (n) {
          var i = c.getSelectorFromElement(this);
          if (i) {
            var o = e(i)[0];
            if (o && e(o).hasClass(Q)) {
              var s = r({}, e(o).data(), e(this).data()),
                a = this.getAttribute('data-slide-to');
              a && (s.interval = !1),
                t._jQueryInterface.call(e(o), s),
                a && e(o).data(L).to(a),
                n.preventDefault();
            }
          }
        }),
        o(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.3.1';
            },
          },
          {
            key: 'Default',
            get: function () {
              return x;
            },
          },
        ]),
        t
      );
    })();
  e(document).on(
    K.CLICK_DATA_API,
    '[data-slide], [data-slide-to]',
    st._dataApiClickHandler
  ),
    e(window).on(K.LOAD_DATA_API, function () {
      for (
        var t = [].slice.call(document.querySelectorAll(ot)),
          n = 0,
          i = t.length;
        n < i;
        n++
      ) {
        var o = e(t[n]);
        st._jQueryInterface.call(o, o.data());
      }
    }),
    (e.fn[P] = st._jQueryInterface),
    (e.fn[P].Constructor = st),
    (e.fn[P].noConflict = function () {
      return (e.fn[P] = R), st._jQueryInterface;
    });
  var at = 'collapse',
    lt = 'bs.collapse',
    ct = '.' + lt,
    ht = e.fn[at],
    ut = { toggle: !0, parent: '' },
    ft = { toggle: 'boolean', parent: '(string|element)' },
    dt = {
      SHOW: 'show' + ct,
      SHOWN: 'shown' + ct,
      HIDE: 'hide' + ct,
      HIDDEN: 'hidden' + ct,
      CLICK_DATA_API: 'click' + ct + '.data-api',
    },
    gt = 'show',
    _t = 'collapse',
    mt = 'collapsing',
    pt = 'collapsed',
    vt = 'width',
    Et = 'height',
    yt = '.show, .collapsing',
    Ct = '[data-toggle="collapse"]',
    Tt = (function () {
      function t(t, e) {
        (this._isTransitioning = !1),
          (this._element = t),
          (this._config = this._getConfig(e)),
          (this._triggerArray = [].slice.call(
            document.querySelectorAll(
              '[data-toggle="collapse"][href="#' +
                t.id +
                '"],[data-toggle="collapse"][data-target="#' +
                t.id +
                '"]'
            )
          ));
        for (
          var n = [].slice.call(document.querySelectorAll(Ct)),
            i = 0,
            o = n.length;
          i < o;
          i++
        ) {
          var r = n[i],
            s = c.getSelectorFromElement(r),
            a = [].slice
              .call(document.querySelectorAll(s))
              .filter(function (e) {
                return e === t;
              });
          null !== s &&
            0 < a.length &&
            ((this._selector = s), this._triggerArray.push(r));
        }
        (this._parent = this._config.parent
          ? this._getParent()
          : null),
          this._config.parent ||
            this._addAriaAndCollapsedClass(
              this._element,
              this._triggerArray
            ),
          this._config.toggle && this.toggle();
      }
      var n = t.prototype;
      return (
        (n.toggle = function () {
          e(this._element).hasClass(gt) ? this.hide() : this.show();
        }),
        (n.show = function () {
          var n,
            i,
            o = this;
          if (
            !(
              this._isTransitioning ||
              e(this._element).hasClass(gt) ||
              (this._parent &&
                0 ===
                  (n = [].slice
                    .call(this._parent.querySelectorAll(yt))
                    .filter(function (t) {
                      return 'string' == typeof o._config.parent
                        ? t.getAttribute('data-parent') ===
                            o._config.parent
                        : t.classList.contains(_t);
                    })).length &&
                (n = null),
              n &&
                (i = e(n).not(this._selector).data(lt)) &&
                i._isTransitioning)
            )
          ) {
            var r = e.Event(dt.SHOW);
            if (
              (e(this._element).trigger(r), !r.isDefaultPrevented())
            ) {
              n &&
                (t._jQueryInterface.call(
                  e(n).not(this._selector),
                  'hide'
                ),
                i || e(n).data(lt, null));
              var s = this._getDimension();
              e(this._element).removeClass(_t).addClass(mt),
                (this._element.style[s] = 0),
                this._triggerArray.length &&
                  e(this._triggerArray)
                    .removeClass(pt)
                    .attr('aria-expanded', !0),
                this.setTransitioning(!0);
              var a = 'scroll' + (s[0].toUpperCase() + s.slice(1)),
                l = c.getTransitionDurationFromElement(this._element);
              e(this._element)
                .one(c.TRANSITION_END, function () {
                  e(o._element)
                    .removeClass(mt)
                    .addClass(_t)
                    .addClass(gt),
                    (o._element.style[s] = ''),
                    o.setTransitioning(!1),
                    e(o._element).trigger(dt.SHOWN);
                })
                .emulateTransitionEnd(l),
                (this._element.style[s] = this._element[a] + 'px');
            }
          }
        }),
        (n.hide = function () {
          var t = this;
          if (
            !this._isTransitioning &&
            e(this._element).hasClass(gt)
          ) {
            var n = e.Event(dt.HIDE);
            if (
              (e(this._element).trigger(n), !n.isDefaultPrevented())
            ) {
              var i = this._getDimension();
              (this._element.style[i] =
                this._element.getBoundingClientRect()[i] + 'px'),
                c.reflow(this._element),
                e(this._element)
                  .addClass(mt)
                  .removeClass(_t)
                  .removeClass(gt);
              var o = this._triggerArray.length;
              if (0 < o)
                for (var r = 0; r < o; r++) {
                  var s = this._triggerArray[r],
                    a = c.getSelectorFromElement(s);
                  null !== a &&
                    (e(
                      [].slice.call(document.querySelectorAll(a))
                    ).hasClass(gt) ||
                      e(s).addClass(pt).attr('aria-expanded', !1));
                }
              this.setTransitioning(!0),
                (this._element.style[i] = '');
              var l = c.getTransitionDurationFromElement(
                this._element
              );
              e(this._element)
                .one(c.TRANSITION_END, function () {
                  t.setTransitioning(!1),
                    e(t._element)
                      .removeClass(mt)
                      .addClass(_t)
                      .trigger(dt.HIDDEN);
                })
                .emulateTransitionEnd(l);
            }
          }
        }),
        (n.setTransitioning = function (t) {
          this._isTransitioning = t;
        }),
        (n.dispose = function () {
          e.removeData(this._element, lt),
            (this._config = null),
            (this._parent = null),
            (this._element = null),
            (this._triggerArray = null),
            (this._isTransitioning = null);
        }),
        (n._getConfig = function (t) {
          return (
            ((t = r({}, ut, t)).toggle = Boolean(t.toggle)),
            c.typeCheckConfig(at, t, ft),
            t
          );
        }),
        (n._getDimension = function () {
          return e(this._element).hasClass(vt) ? vt : Et;
        }),
        (n._getParent = function () {
          var n,
            i = this;
          c.isElement(this._config.parent)
            ? ((n = this._config.parent),
              void 0 !== this._config.parent.jquery &&
                (n = this._config.parent[0]))
            : (n = document.querySelector(this._config.parent));
          var o =
              '[data-toggle="collapse"][data-parent="' +
              this._config.parent +
              '"]',
            r = [].slice.call(n.querySelectorAll(o));
          return (
            e(r).each(function (e, n) {
              i._addAriaAndCollapsedClass(
                t._getTargetFromElement(n),
                [n]
              );
            }),
            n
          );
        }),
        (n._addAriaAndCollapsedClass = function (t, n) {
          var i = e(t).hasClass(gt);
          n.length &&
            e(n).toggleClass(pt, !i).attr('aria-expanded', i);
        }),
        (t._getTargetFromElement = function (t) {
          var e = c.getSelectorFromElement(t);
          return e ? document.querySelector(e) : null;
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this),
              o = i.data(lt),
              s = r(
                {},
                ut,
                i.data(),
                'object' == typeof n && n ? n : {}
              );
            if (
              (!o &&
                s.toggle &&
                /show|hide/.test(n) &&
                (s.toggle = !1),
              o || ((o = new t(this, s)), i.data(lt, o)),
              'string' == typeof n)
            ) {
              if (void 0 === o[n])
                throw new TypeError('No method named "' + n + '"');
              o[n]();
            }
          });
        }),
        o(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.3.1';
            },
          },
          {
            key: 'Default',
            get: function () {
              return ut;
            },
          },
        ]),
        t
      );
    })();
  e(document).on(dt.CLICK_DATA_API, Ct, function (t) {
    'A' === t.currentTarget.tagName && t.preventDefault();
    var n = e(this),
      i = c.getSelectorFromElement(this),
      o = [].slice.call(document.querySelectorAll(i));
    e(o).each(function () {
      var t = e(this),
        i = t.data(lt) ? 'toggle' : n.data();
      Tt._jQueryInterface.call(t, i);
    });
  }),
    (e.fn[at] = Tt._jQueryInterface),
    (e.fn[at].Constructor = Tt),
    (e.fn[at].noConflict = function () {
      return (e.fn[at] = ht), Tt._jQueryInterface;
    });
  var St = 'dropdown',
    bt = 'bs.dropdown',
    It = '.' + bt,
    Dt = '.data-api',
    wt = e.fn[St],
    At = new RegExp('38|40|27'),
    Nt = {
      HIDE: 'hide' + It,
      HIDDEN: 'hidden' + It,
      SHOW: 'show' + It,
      SHOWN: 'shown' + It,
      CLICK: 'click' + It,
      CLICK_DATA_API: 'click' + It + Dt,
      KEYDOWN_DATA_API: 'keydown' + It + Dt,
      KEYUP_DATA_API: 'keyup' + It + Dt,
    },
    Ot = 'disabled',
    kt = 'show',
    Pt = 'dropup',
    Lt = 'dropright',
    jt = 'dropleft',
    Ht = 'dropdown-menu-right',
    Rt = 'position-static',
    xt = '[data-toggle="dropdown"]',
    Ft = '.dropdown-menu',
    Ut = '.navbar-nav',
    Wt =
      '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)',
    qt = 'top-start',
    Mt = 'top-end',
    Kt = 'bottom-start',
    Qt = 'bottom-end',
    Bt = 'right-start',
    Vt = 'left-start',
    Yt = {
      offset: 0,
      flip: !0,
      boundary: 'scrollParent',
      reference: 'toggle',
      display: 'dynamic',
    },
    zt = {
      offset: '(number|string|function)',
      flip: 'boolean',
      boundary: '(string|element)',
      reference: '(string|element)',
      display: 'string',
    },
    Xt = (function () {
      function t(t, e) {
        (this._element = t),
          (this._popper = null),
          (this._config = this._getConfig(e)),
          (this._menu = this._getMenuElement()),
          (this._inNavbar = this._detectNavbar()),
          this._addEventListeners();
      }
      var i = t.prototype;
      return (
        (i.toggle = function () {
          if (
            !this._element.disabled &&
            !e(this._element).hasClass(Ot)
          ) {
            var i = t._getParentFromElement(this._element),
              o = e(this._menu).hasClass(kt);
            if ((t._clearMenus(), !o)) {
              var r = { relatedTarget: this._element },
                s = e.Event(Nt.SHOW, r);
              if ((e(i).trigger(s), !s.isDefaultPrevented())) {
                if (!this._inNavbar) {
                  if (void 0 === n)
                    throw new TypeError(
                      "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                    );
                  var a = this._element;
                  'parent' === this._config.reference
                    ? (a = i)
                    : c.isElement(this._config.reference) &&
                      ((a = this._config.reference),
                      void 0 !== this._config.reference.jquery &&
                        (a = this._config.reference[0])),
                    'scrollParent' !== this._config.boundary &&
                      e(i).addClass(Rt),
                    (this._popper = new n(
                      a,
                      this._menu,
                      this._getPopperConfig()
                    ));
                }
                'ontouchstart' in document.documentElement &&
                  0 === e(i).closest(Ut).length &&
                  e(document.body)
                    .children()
                    .on('mouseover', null, e.noop),
                  this._element.focus(),
                  this._element.setAttribute('aria-expanded', !0),
                  e(this._menu).toggleClass(kt),
                  e(i).toggleClass(kt).trigger(e.Event(Nt.SHOWN, r));
              }
            }
          }
        }),
        (i.show = function () {
          if (
            !(
              this._element.disabled ||
              e(this._element).hasClass(Ot) ||
              e(this._menu).hasClass(kt)
            )
          ) {
            var n = { relatedTarget: this._element },
              i = e.Event(Nt.SHOW, n),
              o = t._getParentFromElement(this._element);
            e(o).trigger(i),
              i.isDefaultPrevented() ||
                (e(this._menu).toggleClass(kt),
                e(o).toggleClass(kt).trigger(e.Event(Nt.SHOWN, n)));
          }
        }),
        (i.hide = function () {
          if (
            !this._element.disabled &&
            !e(this._element).hasClass(Ot) &&
            e(this._menu).hasClass(kt)
          ) {
            var n = { relatedTarget: this._element },
              i = e.Event(Nt.HIDE, n),
              o = t._getParentFromElement(this._element);
            e(o).trigger(i),
              i.isDefaultPrevented() ||
                (e(this._menu).toggleClass(kt),
                e(o).toggleClass(kt).trigger(e.Event(Nt.HIDDEN, n)));
          }
        }),
        (i.dispose = function () {
          e.removeData(this._element, bt),
            e(this._element).off(It),
            (this._element = null),
            (this._menu = null) !== this._popper &&
              (this._popper.destroy(), (this._popper = null));
        }),
        (i.update = function () {
          (this._inNavbar = this._detectNavbar()),
            null !== this._popper && this._popper.scheduleUpdate();
        }),
        (i._addEventListeners = function () {
          var t = this;
          e(this._element).on(Nt.CLICK, function (e) {
            e.preventDefault(), e.stopPropagation(), t.toggle();
          });
        }),
        (i._getConfig = function (t) {
          return (
            (t = r(
              {},
              this.constructor.Default,
              e(this._element).data(),
              t
            )),
            c.typeCheckConfig(St, t, this.constructor.DefaultType),
            t
          );
        }),
        (i._getMenuElement = function () {
          if (!this._menu) {
            var e = t._getParentFromElement(this._element);
            e && (this._menu = e.querySelector(Ft));
          }
          return this._menu;
        }),
        (i._getPlacement = function () {
          var t = e(this._element.parentNode),
            n = Kt;
          return (
            t.hasClass(Pt)
              ? ((n = qt), e(this._menu).hasClass(Ht) && (n = Mt))
              : t.hasClass(Lt)
              ? (n = Bt)
              : t.hasClass(jt)
              ? (n = Vt)
              : e(this._menu).hasClass(Ht) && (n = Qt),
            n
          );
        }),
        (i._detectNavbar = function () {
          return 0 < e(this._element).closest('.navbar').length;
        }),
        (i._getOffset = function () {
          var t = this,
            e = {};
          return (
            'function' == typeof this._config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = r(
                      {},
                      e.offsets,
                      t._config.offset(e.offsets, t._element) || {}
                    )),
                    e
                  );
                })
              : (e.offset = this._config.offset),
            e
          );
        }),
        (i._getPopperConfig = function () {
          var t = {
            placement: this._getPlacement(),
            modifiers: {
              offset: this._getOffset(),
              flip: { enabled: this._config.flip },
              preventOverflow: {
                boundariesElement: this._config.boundary,
              },
            },
          };
          return (
            'static' === this._config.display &&
              (t.modifiers.applyStyle = { enabled: !1 }),
            t
          );
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this).data(bt);
            if (
              (i ||
                ((i = new t(this, 'object' == typeof n ? n : null)),
                e(this).data(bt, i)),
              'string' == typeof n)
            ) {
              if (void 0 === i[n])
                throw new TypeError('No method named "' + n + '"');
              i[n]();
            }
          });
        }),
        (t._clearMenus = function (n) {
          if (
            !n ||
            (3 !== n.which && ('keyup' !== n.type || 9 === n.which))
          )
            for (
              var i = [].slice.call(document.querySelectorAll(xt)),
                o = 0,
                r = i.length;
              o < r;
              o++
            ) {
              var s = t._getParentFromElement(i[o]),
                a = e(i[o]).data(bt),
                l = { relatedTarget: i[o] };
              if (
                (n && 'click' === n.type && (l.clickEvent = n), a)
              ) {
                var c = a._menu;
                if (
                  e(s).hasClass(kt) &&
                  !(
                    n &&
                    (('click' === n.type &&
                      /input|textarea/i.test(n.target.tagName)) ||
                      ('keyup' === n.type && 9 === n.which)) &&
                    e.contains(s, n.target)
                  )
                ) {
                  var h = e.Event(Nt.HIDE, l);
                  e(s).trigger(h),
                    h.isDefaultPrevented() ||
                      ('ontouchstart' in document.documentElement &&
                        e(document.body)
                          .children()
                          .off('mouseover', null, e.noop),
                      i[o].setAttribute('aria-expanded', 'false'),
                      e(c).removeClass(kt),
                      e(s)
                        .removeClass(kt)
                        .trigger(e.Event(Nt.HIDDEN, l)));
                }
              }
            }
        }),
        (t._getParentFromElement = function (t) {
          var e,
            n = c.getSelectorFromElement(t);
          return (
            n && (e = document.querySelector(n)), e || t.parentNode
          );
        }),
        (t._dataApiKeydownHandler = function (n) {
          if (
            (/input|textarea/i.test(n.target.tagName)
              ? !(
                  32 === n.which ||
                  (27 !== n.which &&
                    ((40 !== n.which && 38 !== n.which) ||
                      e(n.target).closest(Ft).length))
                )
              : At.test(n.which)) &&
            (n.preventDefault(),
            n.stopPropagation(),
            !this.disabled && !e(this).hasClass(Ot))
          ) {
            var i = t._getParentFromElement(this),
              o = e(i).hasClass(kt);
            if (o && (!o || (27 !== n.which && 32 !== n.which))) {
              var r = [].slice.call(i.querySelectorAll(Wt));
              if (0 !== r.length) {
                var s = r.indexOf(n.target);
                38 === n.which && 0 < s && s--,
                  40 === n.which && s < r.length - 1 && s++,
                  s < 0 && (s = 0),
                  r[s].focus();
              }
            } else {
              if (27 === n.which) {
                var a = i.querySelector(xt);
                e(a).trigger('focus');
              }
              e(this).trigger('click');
            }
          }
        }),
        o(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.3.1';
            },
          },
          {
            key: 'Default',
            get: function () {
              return Yt;
            },
          },
          {
            key: 'DefaultType',
            get: function () {
              return zt;
            },
          },
        ]),
        t
      );
    })();
  e(document)
    .on(Nt.KEYDOWN_DATA_API, xt, Xt._dataApiKeydownHandler)
    .on(Nt.KEYDOWN_DATA_API, Ft, Xt._dataApiKeydownHandler)
    .on(Nt.CLICK_DATA_API + ' ' + Nt.KEYUP_DATA_API, Xt._clearMenus)
    .on(Nt.CLICK_DATA_API, xt, function (t) {
      t.preventDefault(),
        t.stopPropagation(),
        Xt._jQueryInterface.call(e(this), 'toggle');
    })
    .on(Nt.CLICK_DATA_API, '.dropdown form', function (t) {
      t.stopPropagation();
    }),
    (e.fn[St] = Xt._jQueryInterface),
    (e.fn[St].Constructor = Xt),
    (e.fn[St].noConflict = function () {
      return (e.fn[St] = wt), Xt._jQueryInterface;
    });
  var $t = 'modal',
    Gt = 'bs.modal',
    Jt = '.' + Gt,
    Zt = e.fn[$t],
    te = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
    ee = {
      backdrop: '(boolean|string)',
      keyboard: 'boolean',
      focus: 'boolean',
      show: 'boolean',
    },
    ne = {
      HIDE: 'hide' + Jt,
      HIDDEN: 'hidden' + Jt,
      SHOW: 'show' + Jt,
      SHOWN: 'shown' + Jt,
      FOCUSIN: 'focusin' + Jt,
      RESIZE: 'resize' + Jt,
      CLICK_DISMISS: 'click.dismiss' + Jt,
      KEYDOWN_DISMISS: 'keydown.dismiss' + Jt,
      MOUSEUP_DISMISS: 'mouseup.dismiss' + Jt,
      MOUSEDOWN_DISMISS: 'mousedown.dismiss' + Jt,
      CLICK_DATA_API: 'click' + Jt + '.data-api',
    },
    ie = 'modal-dialog-scrollable',
    oe = 'modal-scrollbar-measure',
    re = 'modal-backdrop',
    se = 'modal-open',
    ae = 'fade',
    le = 'show',
    ce = '.modal-dialog',
    he = '.modal-body',
    ue = '[data-dismiss="modal"]',
    fe = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    de = '.sticky-top',
    ge = (function () {
      function t(t, e) {
        (this._config = this._getConfig(e)),
          (this._element = t),
          (this._dialog = t.querySelector(ce)),
          (this._backdrop = null),
          (this._isShown = !1),
          (this._isBodyOverflowing = !1),
          (this._ignoreBackdropClick = !1),
          (this._isTransitioning = !1),
          (this._scrollbarWidth = 0);
      }
      var n = t.prototype;
      return (
        (n.toggle = function (t) {
          return this._isShown ? this.hide() : this.show(t);
        }),
        (n.show = function (t) {
          var n = this;
          if (!this._isShown && !this._isTransitioning) {
            e(this._element).hasClass(ae) &&
              (this._isTransitioning = !0);
            var i = e.Event(ne.SHOW, { relatedTarget: t });
            e(this._element).trigger(i),
              this._isShown ||
                i.isDefaultPrevented() ||
                ((this._isShown = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                e(this._element).on(
                  ne.CLICK_DISMISS,
                  ue,
                  function (t) {
                    return n.hide(t);
                  }
                ),
                e(this._dialog).on(ne.MOUSEDOWN_DISMISS, function () {
                  e(n._element).one(ne.MOUSEUP_DISMISS, function (t) {
                    e(t.target).is(n._element) &&
                      (n._ignoreBackdropClick = !0);
                  });
                }),
                this._showBackdrop(function () {
                  return n._showElement(t);
                }));
          }
        }),
        (n.hide = function (t) {
          var n = this;
          if (
            (t && t.preventDefault(),
            this._isShown && !this._isTransitioning)
          ) {
            var i = e.Event(ne.HIDE);
            if (
              (e(this._element).trigger(i),
              this._isShown && !i.isDefaultPrevented())
            ) {
              this._isShown = !1;
              var o = e(this._element).hasClass(ae);
              if (
                (o && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                e(document).off(ne.FOCUSIN),
                e(this._element).removeClass(le),
                e(this._element).off(ne.CLICK_DISMISS),
                e(this._dialog).off(ne.MOUSEDOWN_DISMISS),
                o)
              ) {
                var r = c.getTransitionDurationFromElement(
                  this._element
                );
                e(this._element)
                  .one(c.TRANSITION_END, function (t) {
                    return n._hideModal(t);
                  })
                  .emulateTransitionEnd(r);
              } else this._hideModal();
            }
          }
        }),
        (n.dispose = function () {
          [window, this._element, this._dialog].forEach(function (t) {
            return e(t).off(Jt);
          }),
            e(document).off(ne.FOCUSIN),
            e.removeData(this._element, Gt),
            (this._config = null),
            (this._element = null),
            (this._dialog = null),
            (this._backdrop = null),
            (this._isShown = null),
            (this._isBodyOverflowing = null),
            (this._ignoreBackdropClick = null),
            (this._isTransitioning = null),
            (this._scrollbarWidth = null);
        }),
        (n.handleUpdate = function () {
          this._adjustDialog();
        }),
        (n._getConfig = function (t) {
          return (t = r({}, te, t)), c.typeCheckConfig($t, t, ee), t;
        }),
        (n._showElement = function (t) {
          var n = this,
            i = e(this._element).hasClass(ae);
          (this._element.parentNode &&
            this._element.parentNode.nodeType ===
              Node.ELEMENT_NODE) ||
            document.body.appendChild(this._element),
            (this._element.style.display = 'block'),
            this._element.removeAttribute('aria-hidden'),
            this._element.setAttribute('aria-modal', !0),
            e(this._dialog).hasClass(ie)
              ? (this._dialog.querySelector(he).scrollTop = 0)
              : (this._element.scrollTop = 0),
            i && c.reflow(this._element),
            e(this._element).addClass(le),
            this._config.focus && this._enforceFocus();
          var o = e.Event(ne.SHOWN, { relatedTarget: t }),
            r = function () {
              n._config.focus && n._element.focus(),
                (n._isTransitioning = !1),
                e(n._element).trigger(o);
            };
          if (i) {
            var s = c.getTransitionDurationFromElement(this._dialog);
            e(this._dialog)
              .one(c.TRANSITION_END, r)
              .emulateTransitionEnd(s);
          } else r();
        }),
        (n._enforceFocus = function () {
          var t = this;
          e(document)
            .off(ne.FOCUSIN)
            .on(ne.FOCUSIN, function (n) {
              document !== n.target &&
                t._element !== n.target &&
                0 === e(t._element).has(n.target).length &&
                t._element.focus();
            });
        }),
        (n._setEscapeEvent = function () {
          var t = this;
          this._isShown && this._config.keyboard
            ? e(this._element).on(ne.KEYDOWN_DISMISS, function (e) {
                27 === e.which && (e.preventDefault(), t.hide());
              })
            : this._isShown ||
              e(this._element).off(ne.KEYDOWN_DISMISS);
        }),
        (n._setResizeEvent = function () {
          var t = this;
          this._isShown
            ? e(window).on(ne.RESIZE, function (e) {
                return t.handleUpdate(e);
              })
            : e(window).off(ne.RESIZE);
        }),
        (n._hideModal = function () {
          var t = this;
          (this._element.style.display = 'none'),
            this._element.setAttribute('aria-hidden', !0),
            this._element.removeAttribute('aria-modal'),
            (this._isTransitioning = !1),
            this._showBackdrop(function () {
              e(document.body).removeClass(se),
                t._resetAdjustments(),
                t._resetScrollbar(),
                e(t._element).trigger(ne.HIDDEN);
            });
        }),
        (n._removeBackdrop = function () {
          this._backdrop &&
            (e(this._backdrop).remove(), (this._backdrop = null));
        }),
        (n._showBackdrop = function (t) {
          var n = this,
            i = e(this._element).hasClass(ae) ? ae : '';
          if (this._isShown && this._config.backdrop) {
            if (
              ((this._backdrop = document.createElement('div')),
              (this._backdrop.className = re),
              i && this._backdrop.classList.add(i),
              e(this._backdrop).appendTo(document.body),
              e(this._element).on(ne.CLICK_DISMISS, function (t) {
                n._ignoreBackdropClick
                  ? (n._ignoreBackdropClick = !1)
                  : t.target === t.currentTarget &&
                    ('static' === n._config.backdrop
                      ? n._element.focus()
                      : n.hide());
              }),
              i && c.reflow(this._backdrop),
              e(this._backdrop).addClass(le),
              !t)
            )
              return;
            if (!i) return void t();
            var o = c.getTransitionDurationFromElement(
              this._backdrop
            );
            e(this._backdrop)
              .one(c.TRANSITION_END, t)
              .emulateTransitionEnd(o);
          } else if (!this._isShown && this._backdrop) {
            e(this._backdrop).removeClass(le);
            var r = function () {
              n._removeBackdrop(), t && t();
            };
            if (e(this._element).hasClass(ae)) {
              var s = c.getTransitionDurationFromElement(
                this._backdrop
              );
              e(this._backdrop)
                .one(c.TRANSITION_END, r)
                .emulateTransitionEnd(s);
            } else r();
          } else t && t();
        }),
        (n._adjustDialog = function () {
          var t =
            this._element.scrollHeight >
            document.documentElement.clientHeight;
          !this._isBodyOverflowing &&
            t &&
            (this._element.style.paddingLeft =
              this._scrollbarWidth + 'px'),
            this._isBodyOverflowing &&
              !t &&
              (this._element.style.paddingRight =
                this._scrollbarWidth + 'px');
        }),
        (n._resetAdjustments = function () {
          (this._element.style.paddingLeft = ''),
            (this._element.style.paddingRight = '');
        }),
        (n._checkScrollbar = function () {
          var t = document.body.getBoundingClientRect();
          (this._isBodyOverflowing =
            t.left + t.right < window.innerWidth),
            (this._scrollbarWidth = this._getScrollbarWidth());
        }),
        (n._setScrollbar = function () {
          var t = this;
          if (this._isBodyOverflowing) {
            var n = [].slice.call(document.querySelectorAll(fe)),
              i = [].slice.call(document.querySelectorAll(de));
            e(n).each(function (n, i) {
              var o = i.style.paddingRight,
                r = e(i).css('padding-right');
              e(i)
                .data('padding-right', o)
                .css(
                  'padding-right',
                  parseFloat(r) + t._scrollbarWidth + 'px'
                );
            }),
              e(i).each(function (n, i) {
                var o = i.style.marginRight,
                  r = e(i).css('margin-right');
                e(i)
                  .data('margin-right', o)
                  .css(
                    'margin-right',
                    parseFloat(r) - t._scrollbarWidth + 'px'
                  );
              });
            var o = document.body.style.paddingRight,
              r = e(document.body).css('padding-right');
            e(document.body)
              .data('padding-right', o)
              .css(
                'padding-right',
                parseFloat(r) + this._scrollbarWidth + 'px'
              );
          }
          e(document.body).addClass(se);
        }),
        (n._resetScrollbar = function () {
          var t = [].slice.call(document.querySelectorAll(fe));
          e(t).each(function (t, n) {
            var i = e(n).data('padding-right');
            e(n).removeData('padding-right'),
              (n.style.paddingRight = i || '');
          });
          var n = [].slice.call(document.querySelectorAll('' + de));
          e(n).each(function (t, n) {
            var i = e(n).data('margin-right');
            void 0 !== i &&
              e(n).css('margin-right', i).removeData('margin-right');
          });
          var i = e(document.body).data('padding-right');
          e(document.body).removeData('padding-right'),
            (document.body.style.paddingRight = i || '');
        }),
        (n._getScrollbarWidth = function () {
          var t = document.createElement('div');
          (t.className = oe), document.body.appendChild(t);
          var e = t.getBoundingClientRect().width - t.clientWidth;
          return document.body.removeChild(t), e;
        }),
        (t._jQueryInterface = function (n, i) {
          return this.each(function () {
            var o = e(this).data(Gt),
              s = r(
                {},
                te,
                e(this).data(),
                'object' == typeof n && n ? n : {}
              );
            if (
              (o || ((o = new t(this, s)), e(this).data(Gt, o)),
              'string' == typeof n)
            ) {
              if (void 0 === o[n])
                throw new TypeError('No method named "' + n + '"');
              o[n](i);
            } else s.show && o.show(i);
          });
        }),
        o(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.3.1';
            },
          },
          {
            key: 'Default',
            get: function () {
              return te;
            },
          },
        ]),
        t
      );
    })();
  e(document).on(
    ne.CLICK_DATA_API,
    '[data-toggle="modal"]',
    function (t) {
      var n,
        i = this,
        o = c.getSelectorFromElement(this);
      o && (n = document.querySelector(o));
      var s = e(n).data(Gt)
        ? 'toggle'
        : r({}, e(n).data(), e(this).data());
      ('A' !== this.tagName && 'AREA' !== this.tagName) ||
        t.preventDefault();
      var a = e(n).one(ne.SHOW, function (t) {
        t.isDefaultPrevented() ||
          a.one(ne.HIDDEN, function () {
            e(i).is(':visible') && i.focus();
          });
      });
      ge._jQueryInterface.call(e(n), s, this);
    }
  ),
    (e.fn[$t] = ge._jQueryInterface),
    (e.fn[$t].Constructor = ge),
    (e.fn[$t].noConflict = function () {
      return (e.fn[$t] = Zt), ge._jQueryInterface;
    });
  var _e = [
      'background',
      'cite',
      'href',
      'itemtype',
      'longdesc',
      'poster',
      'src',
      'xlink:href',
    ],
    me = {
      '*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i],
      a: ['target', 'href', 'title', 'rel'],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ['src', 'alt', 'title', 'width', 'height'],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: [],
    },
    pe =
      /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
    ve =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i,
    Ee = 'tooltip',
    ye = 'bs.tooltip',
    Ce = '.' + ye,
    Te = e.fn[Ee],
    Se = 'bs-tooltip',
    be = new RegExp('(^|\\s)' + Se + '\\S+', 'g'),
    Ie = ['sanitize', 'whiteList', 'sanitizeFn'],
    De = {
      animation: 'boolean',
      template: 'string',
      title: '(string|element|function)',
      trigger: 'string',
      delay: '(number|object)',
      html: 'boolean',
      selector: '(string|boolean)',
      placement: '(string|function)',
      offset: '(number|string|function)',
      container: '(string|element|boolean)',
      fallbackPlacement: '(string|array)',
      boundary: '(string|element)',
      sanitize: 'boolean',
      sanitizeFn: '(null|function)',
      whiteList: 'object',
    },
    we = {
      AUTO: 'auto',
      TOP: 'top',
      RIGHT: 'right',
      BOTTOM: 'bottom',
      LEFT: 'left',
    },
    Ae = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: 'hover focus',
      title: '',
      delay: 0,
      html: !1,
      selector: !1,
      placement: 'top',
      offset: 0,
      container: !1,
      fallbackPlacement: 'flip',
      boundary: 'scrollParent',
      sanitize: !0,
      sanitizeFn: null,
      whiteList: me,
    },
    Ne = 'show',
    Oe = 'out',
    ke = {
      HIDE: 'hide' + Ce,
      HIDDEN: 'hidden' + Ce,
      SHOW: 'show' + Ce,
      SHOWN: 'shown' + Ce,
      INSERTED: 'inserted' + Ce,
      CLICK: 'click' + Ce,
      FOCUSIN: 'focusin' + Ce,
      FOCUSOUT: 'focusout' + Ce,
      MOUSEENTER: 'mouseenter' + Ce,
      MOUSELEAVE: 'mouseleave' + Ce,
    },
    Pe = 'fade',
    Le = 'show',
    je = '.tooltip-inner',
    He = '.arrow',
    Re = 'hover',
    xe = 'focus',
    Fe = 'click',
    Ue = 'manual',
    We = (function () {
      function t(t, e) {
        if (void 0 === n)
          throw new TypeError(
            "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
          );
        (this._isEnabled = !0),
          (this._timeout = 0),
          (this._hoverState = ''),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this.element = t),
          (this.config = this._getConfig(e)),
          (this.tip = null),
          this._setListeners();
      }
      var i = t.prototype;
      return (
        (i.enable = function () {
          this._isEnabled = !0;
        }),
        (i.disable = function () {
          this._isEnabled = !1;
        }),
        (i.toggleEnabled = function () {
          this._isEnabled = !this._isEnabled;
        }),
        (i.toggle = function (t) {
          if (this._isEnabled)
            if (t) {
              var n = this.constructor.DATA_KEY,
                i = e(t.currentTarget).data(n);
              i ||
                ((i = new this.constructor(
                  t.currentTarget,
                  this._getDelegateConfig()
                )),
                e(t.currentTarget).data(n, i)),
                (i._activeTrigger.click = !i._activeTrigger.click),
                i._isWithActiveTrigger()
                  ? i._enter(null, i)
                  : i._leave(null, i);
            } else {
              if (e(this.getTipElement()).hasClass(Le))
                return void this._leave(null, this);
              this._enter(null, this);
            }
        }),
        (i.dispose = function () {
          clearTimeout(this._timeout),
            e.removeData(this.element, this.constructor.DATA_KEY),
            e(this.element).off(this.constructor.EVENT_KEY),
            e(this.element).closest('.modal').off('hide.bs.modal'),
            this.tip && e(this.tip).remove(),
            (this._isEnabled = null),
            (this._timeout = null),
            (this._hoverState = null),
            (this._activeTrigger = null) !== this._popper &&
              this._popper.destroy(),
            (this._popper = null),
            (this.element = null),
            (this.config = null),
            (this.tip = null);
        }),
        (i.show = function () {
          var t = this;
          if ('none' === e(this.element).css('display'))
            throw new Error('Please use show on visible elements');
          var i = e.Event(this.constructor.Event.SHOW);
          if (this.isWithContent() && this._isEnabled) {
            e(this.element).trigger(i);
            var o = c.findShadowRoot(this.element),
              r = e.contains(
                null !== o
                  ? o
                  : this.element.ownerDocument.documentElement,
                this.element
              );
            if (i.isDefaultPrevented() || !r) return;
            var s = this.getTipElement(),
              a = c.getUID(this.constructor.NAME);
            s.setAttribute('id', a),
              this.element.setAttribute('aria-describedby', a),
              this.setContent(),
              this.config.animation && e(s).addClass(Pe);
            var l =
                'function' == typeof this.config.placement
                  ? this.config.placement.call(this, s, this.element)
                  : this.config.placement,
              h = this._getAttachment(l);
            this.addAttachmentClass(h);
            var u = this._getContainer();
            e(s).data(this.constructor.DATA_KEY, this),
              e.contains(
                this.element.ownerDocument.documentElement,
                this.tip
              ) || e(s).appendTo(u),
              e(this.element).trigger(
                this.constructor.Event.INSERTED
              ),
              (this._popper = new n(this.element, s, {
                placement: h,
                modifiers: {
                  offset: this._getOffset(),
                  flip: { behavior: this.config.fallbackPlacement },
                  arrow: { element: He },
                  preventOverflow: {
                    boundariesElement: this.config.boundary,
                  },
                },
                onCreate: function (e) {
                  e.originalPlacement !== e.placement &&
                    t._handlePopperPlacementChange(e);
                },
                onUpdate: function (e) {
                  return t._handlePopperPlacementChange(e);
                },
              })),
              e(s).addClass(Le),
              'ontouchstart' in document.documentElement &&
                e(document.body)
                  .children()
                  .on('mouseover', null, e.noop);
            var f = function () {
              t.config.animation && t._fixTransition();
              var n = t._hoverState;
              (t._hoverState = null),
                e(t.element).trigger(t.constructor.Event.SHOWN),
                n === Oe && t._leave(null, t);
            };
            if (e(this.tip).hasClass(Pe)) {
              var d = c.getTransitionDurationFromElement(this.tip);
              e(this.tip)
                .one(c.TRANSITION_END, f)
                .emulateTransitionEnd(d);
            } else f();
          }
        }),
        (i.hide = function (t) {
          var n = this,
            i = this.getTipElement(),
            o = e.Event(this.constructor.Event.HIDE),
            r = function () {
              n._hoverState !== Ne &&
                i.parentNode &&
                i.parentNode.removeChild(i),
                n._cleanTipClass(),
                n.element.removeAttribute('aria-describedby'),
                e(n.element).trigger(n.constructor.Event.HIDDEN),
                null !== n._popper && n._popper.destroy(),
                t && t();
            };
          if ((e(this.element).trigger(o), !o.isDefaultPrevented())) {
            if (
              (e(i).removeClass(Le),
              'ontouchstart' in document.documentElement &&
                e(document.body)
                  .children()
                  .off('mouseover', null, e.noop),
              (this._activeTrigger[Fe] = !1),
              (this._activeTrigger[xe] = !1),
              (this._activeTrigger[Re] = !1),
              e(this.tip).hasClass(Pe))
            ) {
              var s = c.getTransitionDurationFromElement(i);
              e(i).one(c.TRANSITION_END, r).emulateTransitionEnd(s);
            } else r();
            this._hoverState = '';
          }
        }),
        (i.update = function () {
          null !== this._popper && this._popper.scheduleUpdate();
        }),
        (i.isWithContent = function () {
          return Boolean(this.getTitle());
        }),
        (i.addAttachmentClass = function (t) {
          e(this.getTipElement()).addClass(Se + '-' + t);
        }),
        (i.getTipElement = function () {
          return (
            (this.tip = this.tip || e(this.config.template)[0]),
            this.tip
          );
        }),
        (i.setContent = function () {
          var t = this.getTipElement();
          this.setElementContent(
            e(t.querySelectorAll(je)),
            this.getTitle()
          ),
            e(t).removeClass(Pe + ' ' + Le);
        }),
        (i.setElementContent = function (t, n) {
          'object' != typeof n || (!n.nodeType && !n.jquery)
            ? this.config.html
              ? (this.config.sanitize &&
                  (n = a(
                    n,
                    this.config.whiteList,
                    this.config.sanitizeFn
                  )),
                t.html(n))
              : t.text(n)
            : this.config.html
            ? e(n).parent().is(t) || t.empty().append(n)
            : t.text(e(n).text());
        }),
        (i.getTitle = function () {
          var t = this.element.getAttribute('data-original-title');
          return (
            t ||
              (t =
                'function' == typeof this.config.title
                  ? this.config.title.call(this.element)
                  : this.config.title),
            t
          );
        }),
        (i._getOffset = function () {
          var t = this,
            e = {};
          return (
            'function' == typeof this.config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = r(
                      {},
                      e.offsets,
                      t.config.offset(e.offsets, t.element) || {}
                    )),
                    e
                  );
                })
              : (e.offset = this.config.offset),
            e
          );
        }),
        (i._getContainer = function () {
          return !1 === this.config.container
            ? document.body
            : c.isElement(this.config.container)
            ? e(this.config.container)
            : e(document).find(this.config.container);
        }),
        (i._getAttachment = function (t) {
          return we[t.toUpperCase()];
        }),
        (i._setListeners = function () {
          var t = this;
          this.config.trigger.split(' ').forEach(function (n) {
            if ('click' === n)
              e(t.element).on(
                t.constructor.Event.CLICK,
                t.config.selector,
                function (e) {
                  return t.toggle(e);
                }
              );
            else if (n !== Ue) {
              var i =
                  n === Re
                    ? t.constructor.Event.MOUSEENTER
                    : t.constructor.Event.FOCUSIN,
                o =
                  n === Re
                    ? t.constructor.Event.MOUSELEAVE
                    : t.constructor.Event.FOCUSOUT;
              e(t.element)
                .on(i, t.config.selector, function (e) {
                  return t._enter(e);
                })
                .on(o, t.config.selector, function (e) {
                  return t._leave(e);
                });
            }
          }),
            e(this.element)
              .closest('.modal')
              .on('hide.bs.modal', function () {
                t.element && t.hide();
              }),
            this.config.selector
              ? (this.config = r({}, this.config, {
                  trigger: 'manual',
                  selector: '',
                }))
              : this._fixTitle();
        }),
        (i._fixTitle = function () {
          var t = typeof this.element.getAttribute(
            'data-original-title'
          );
          (this.element.getAttribute('title') || 'string' !== t) &&
            (this.element.setAttribute(
              'data-original-title',
              this.element.getAttribute('title') || ''
            ),
            this.element.setAttribute('title', ''));
        }),
        (i._enter = function (t, n) {
          var i = this.constructor.DATA_KEY;
          (n = n || e(t.currentTarget).data(i)) ||
            ((n = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            e(t.currentTarget).data(i, n)),
            t &&
              (n._activeTrigger['focusin' === t.type ? xe : Re] = !0),
            e(n.getTipElement()).hasClass(Le) || n._hoverState === Ne
              ? (n._hoverState = Ne)
              : (clearTimeout(n._timeout),
                (n._hoverState = Ne),
                n.config.delay && n.config.delay.show
                  ? (n._timeout = setTimeout(function () {
                      n._hoverState === Ne && n.show();
                    }, n.config.delay.show))
                  : n.show());
        }),
        (i._leave = function (t, n) {
          var i = this.constructor.DATA_KEY;
          (n = n || e(t.currentTarget).data(i)) ||
            ((n = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            e(t.currentTarget).data(i, n)),
            t &&
              (n._activeTrigger['focusout' === t.type ? xe : Re] =
                !1),
            n._isWithActiveTrigger() ||
              (clearTimeout(n._timeout),
              (n._hoverState = Oe),
              n.config.delay && n.config.delay.hide
                ? (n._timeout = setTimeout(function () {
                    n._hoverState === Oe && n.hide();
                  }, n.config.delay.hide))
                : n.hide());
        }),
        (i._isWithActiveTrigger = function () {
          for (var t in this._activeTrigger)
            if (this._activeTrigger[t]) return !0;
          return !1;
        }),
        (i._getConfig = function (t) {
          var n = e(this.element).data();
          return (
            Object.keys(n).forEach(function (t) {
              -1 !== Ie.indexOf(t) && delete n[t];
            }),
            'number' ==
              typeof (t = r(
                {},
                this.constructor.Default,
                n,
                'object' == typeof t && t ? t : {}
              )).delay &&
              (t.delay = { show: t.delay, hide: t.delay }),
            'number' == typeof t.title &&
              (t.title = t.title.toString()),
            'number' == typeof t.content &&
              (t.content = t.content.toString()),
            c.typeCheckConfig(Ee, t, this.constructor.DefaultType),
            t.sanitize &&
              (t.template = a(t.template, t.whiteList, t.sanitizeFn)),
            t
          );
        }),
        (i._getDelegateConfig = function () {
          var t = {};
          if (this.config)
            for (var e in this.config)
              this.constructor.Default[e] !== this.config[e] &&
                (t[e] = this.config[e]);
          return t;
        }),
        (i._cleanTipClass = function () {
          var t = e(this.getTipElement()),
            n = t.attr('class').match(be);
          null !== n && n.length && t.removeClass(n.join(''));
        }),
        (i._handlePopperPlacementChange = function (t) {
          var e = t.instance;
          (this.tip = e.popper),
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(t.placement));
        }),
        (i._fixTransition = function () {
          var t = this.getTipElement(),
            n = this.config.animation;
          null === t.getAttribute('x-placement') &&
            (e(t).removeClass(Pe),
            (this.config.animation = !1),
            this.hide(),
            this.show(),
            (this.config.animation = n));
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this).data(ye),
              o = 'object' == typeof n && n;
            if (
              (i || !/dispose|hide/.test(n)) &&
              (i || ((i = new t(this, o)), e(this).data(ye, i)),
              'string' == typeof n)
            ) {
              if (void 0 === i[n])
                throw new TypeError('No method named "' + n + '"');
              i[n]();
            }
          });
        }),
        o(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.3.1';
            },
          },
          {
            key: 'Default',
            get: function () {
              return Ae;
            },
          },
          {
            key: 'NAME',
            get: function () {
              return Ee;
            },
          },
          {
            key: 'DATA_KEY',
            get: function () {
              return ye;
            },
          },
          {
            key: 'Event',
            get: function () {
              return ke;
            },
          },
          {
            key: 'EVENT_KEY',
            get: function () {
              return Ce;
            },
          },
          {
            key: 'DefaultType',
            get: function () {
              return De;
            },
          },
        ]),
        t
      );
    })();
  (e.fn[Ee] = We._jQueryInterface),
    (e.fn[Ee].Constructor = We),
    (e.fn[Ee].noConflict = function () {
      return (e.fn[Ee] = Te), We._jQueryInterface;
    });
  var qe = 'popover',
    Me = 'bs.popover',
    Ke = '.' + Me,
    Qe = e.fn[qe],
    Be = 'bs-popover',
    Ve = new RegExp('(^|\\s)' + Be + '\\S+', 'g'),
    Ye = r({}, We.Default, {
      placement: 'right',
      trigger: 'click',
      content: '',
      template:
        '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    }),
    ze = r({}, We.DefaultType, {
      content: '(string|element|function)',
    }),
    Xe = 'fade',
    $e = 'show',
    Ge = '.popover-header',
    Je = '.popover-body',
    Ze = {
      HIDE: 'hide' + Ke,
      HIDDEN: 'hidden' + Ke,
      SHOW: 'show' + Ke,
      SHOWN: 'shown' + Ke,
      INSERTED: 'inserted' + Ke,
      CLICK: 'click' + Ke,
      FOCUSIN: 'focusin' + Ke,
      FOCUSOUT: 'focusout' + Ke,
      MOUSEENTER: 'mouseenter' + Ke,
      MOUSELEAVE: 'mouseleave' + Ke,
    },
    tn = (function (t) {
      function n() {
        return t.apply(this, arguments) || this;
      }
      var i, r;
      (r = t),
        ((i = n).prototype = Object.create(r.prototype)),
        ((i.prototype.constructor = i).__proto__ = r);
      var s = n.prototype;
      return (
        (s.isWithContent = function () {
          return this.getTitle() || this._getContent();
        }),
        (s.addAttachmentClass = function (t) {
          e(this.getTipElement()).addClass(Be + '-' + t);
        }),
        (s.getTipElement = function () {
          return (
            (this.tip = this.tip || e(this.config.template)[0]),
            this.tip
          );
        }),
        (s.setContent = function () {
          var t = e(this.getTipElement());
          this.setElementContent(t.find(Ge), this.getTitle());
          var n = this._getContent();
          'function' == typeof n && (n = n.call(this.element)),
            this.setElementContent(t.find(Je), n),
            t.removeClass(Xe + ' ' + $e);
        }),
        (s._getContent = function () {
          return (
            this.element.getAttribute('data-content') ||
            this.config.content
          );
        }),
        (s._cleanTipClass = function () {
          var t = e(this.getTipElement()),
            n = t.attr('class').match(Ve);
          null !== n && 0 < n.length && t.removeClass(n.join(''));
        }),
        (n._jQueryInterface = function (t) {
          return this.each(function () {
            var i = e(this).data(Me),
              o = 'object' == typeof t ? t : null;
            if (
              (i || !/dispose|hide/.test(t)) &&
              (i || ((i = new n(this, o)), e(this).data(Me, i)),
              'string' == typeof t)
            ) {
              if (void 0 === i[t])
                throw new TypeError('No method named "' + t + '"');
              i[t]();
            }
          });
        }),
        o(n, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.3.1';
            },
          },
          {
            key: 'Default',
            get: function () {
              return Ye;
            },
          },
          {
            key: 'NAME',
            get: function () {
              return qe;
            },
          },
          {
            key: 'DATA_KEY',
            get: function () {
              return Me;
            },
          },
          {
            key: 'Event',
            get: function () {
              return Ze;
            },
          },
          {
            key: 'EVENT_KEY',
            get: function () {
              return Ke;
            },
          },
          {
            key: 'DefaultType',
            get: function () {
              return ze;
            },
          },
        ]),
        n
      );
    })(We);
  (e.fn[qe] = tn._jQueryInterface),
    (e.fn[qe].Constructor = tn),
    (e.fn[qe].noConflict = function () {
      return (e.fn[qe] = Qe), tn._jQueryInterface;
    });
  var en = 'scrollspy',
    nn = 'bs.scrollspy',
    on = '.' + nn,
    rn = e.fn[en],
    sn = { offset: 10, method: 'auto', target: '' },
    an = {
      offset: 'number',
      method: 'string',
      target: '(string|element)',
    },
    ln = {
      ACTIVATE: 'activate' + on,
      SCROLL: 'scroll' + on,
      LOAD_DATA_API: 'load' + on + '.data-api',
    },
    cn = 'dropdown-item',
    hn = 'active',
    un = '[data-spy="scroll"]',
    fn = '.nav, .list-group',
    dn = '.nav-link',
    gn = '.nav-item',
    _n = '.list-group-item',
    mn = '.dropdown',
    pn = '.dropdown-item',
    vn = '.dropdown-toggle',
    En = 'offset',
    yn = 'position',
    Cn = (function () {
      function t(t, n) {
        var i = this;
        (this._element = t),
          (this._scrollElement = 'BODY' === t.tagName ? window : t),
          (this._config = this._getConfig(n)),
          (this._selector =
            this._config.target +
            ' ' +
            dn +
            ',' +
            this._config.target +
            ' ' +
            _n +
            ',' +
            this._config.target +
            ' ' +
            pn),
          (this._offsets = []),
          (this._targets = []),
          (this._activeTarget = null),
          (this._scrollHeight = 0),
          e(this._scrollElement).on(ln.SCROLL, function (t) {
            return i._process(t);
          }),
          this.refresh(),
          this._process();
      }
      var n = t.prototype;
      return (
        (n.refresh = function () {
          var t = this,
            n =
              this._scrollElement === this._scrollElement.window
                ? En
                : yn,
            i =
              'auto' === this._config.method
                ? n
                : this._config.method,
            o = i === yn ? this._getScrollTop() : 0;
          (this._offsets = []),
            (this._targets = []),
            (this._scrollHeight = this._getScrollHeight()),
            [].slice
              .call(document.querySelectorAll(this._selector))
              .map(function (t) {
                var n,
                  r = c.getSelectorFromElement(t);
                if ((r && (n = document.querySelector(r)), n)) {
                  var s = n.getBoundingClientRect();
                  if (s.width || s.height)
                    return [e(n)[i]().top + o, r];
                }
                return null;
              })
              .filter(function (t) {
                return t;
              })
              .sort(function (t, e) {
                return t[0] - e[0];
              })
              .forEach(function (e) {
                t._offsets.push(e[0]), t._targets.push(e[1]);
              });
        }),
        (n.dispose = function () {
          e.removeData(this._element, nn),
            e(this._scrollElement).off(on),
            (this._element = null),
            (this._scrollElement = null),
            (this._config = null),
            (this._selector = null),
            (this._offsets = null),
            (this._targets = null),
            (this._activeTarget = null),
            (this._scrollHeight = null);
        }),
        (n._getConfig = function (t) {
          if (
            'string' !=
            typeof (t = r({}, sn, 'object' == typeof t && t ? t : {}))
              .target
          ) {
            var n = e(t.target).attr('id');
            n || ((n = c.getUID(en)), e(t.target).attr('id', n)),
              (t.target = '#' + n);
          }
          return c.typeCheckConfig(en, t, an), t;
        }),
        (n._getScrollTop = function () {
          return this._scrollElement === window
            ? this._scrollElement.pageYOffset
            : this._scrollElement.scrollTop;
        }),
        (n._getScrollHeight = function () {
          return (
            this._scrollElement.scrollHeight ||
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight
            )
          );
        }),
        (n._getOffsetHeight = function () {
          return this._scrollElement === window
            ? window.innerHeight
            : this._scrollElement.getBoundingClientRect().height;
        }),
        (n._process = function () {
          var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight();
          if ((this._scrollHeight !== e && this.refresh(), n <= t)) {
            var i = this._targets[this._targets.length - 1];
            this._activeTarget !== i && this._activate(i);
          } else {
            if (
              this._activeTarget &&
              t < this._offsets[0] &&
              0 < this._offsets[0]
            )
              return (this._activeTarget = null), void this._clear();
            for (var o = this._offsets.length; o--; )
              this._activeTarget !== this._targets[o] &&
                t >= this._offsets[o] &&
                (void 0 === this._offsets[o + 1] ||
                  t < this._offsets[o + 1]) &&
                this._activate(this._targets[o]);
          }
        }),
        (n._activate = function (t) {
          (this._activeTarget = t), this._clear();
          var n = this._selector.split(',').map(function (e) {
              return (
                e +
                '[data-target="' +
                t +
                '"],' +
                e +
                '[href="' +
                t +
                '"]'
              );
            }),
            i = e(
              [].slice.call(document.querySelectorAll(n.join(',')))
            );
          i.hasClass(cn)
            ? (i.closest(mn).find(vn).addClass(hn), i.addClass(hn))
            : (i.addClass(hn),
              i
                .parents(fn)
                .prev(dn + ', ' + _n)
                .addClass(hn),
              i.parents(fn).prev(gn).children(dn).addClass(hn)),
            e(this._scrollElement).trigger(ln.ACTIVATE, {
              relatedTarget: t,
            });
        }),
        (n._clear = function () {
          [].slice
            .call(document.querySelectorAll(this._selector))
            .filter(function (t) {
              return t.classList.contains(hn);
            })
            .forEach(function (t) {
              return t.classList.remove(hn);
            });
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this).data(nn);
            if (
              (i ||
                ((i = new t(this, 'object' == typeof n && n)),
                e(this).data(nn, i)),
              'string' == typeof n)
            ) {
              if (void 0 === i[n])
                throw new TypeError('No method named "' + n + '"');
              i[n]();
            }
          });
        }),
        o(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.3.1';
            },
          },
          {
            key: 'Default',
            get: function () {
              return sn;
            },
          },
        ]),
        t
      );
    })();
  e(window).on(ln.LOAD_DATA_API, function () {
    for (
      var t = [].slice.call(document.querySelectorAll(un)),
        n = t.length;
      n--;

    ) {
      var i = e(t[n]);
      Cn._jQueryInterface.call(i, i.data());
    }
  }),
    (e.fn[en] = Cn._jQueryInterface),
    (e.fn[en].Constructor = Cn),
    (e.fn[en].noConflict = function () {
      return (e.fn[en] = rn), Cn._jQueryInterface;
    });
  var Tn = 'bs.tab',
    Sn = '.' + Tn,
    bn = e.fn.tab,
    In = {
      HIDE: 'hide' + Sn,
      HIDDEN: 'hidden' + Sn,
      SHOW: 'show' + Sn,
      SHOWN: 'shown' + Sn,
      CLICK_DATA_API: 'click' + Sn + '.data-api',
    },
    Dn = 'dropdown-menu',
    wn = 'active',
    An = 'disabled',
    Nn = 'fade',
    On = 'show',
    kn = '.dropdown',
    Pn = '.nav, .list-group',
    Ln = '.active',
    jn = '> li > .active',
    Hn = '.dropdown-toggle',
    Rn = '> .dropdown-menu .active',
    xn = (function () {
      function t(t) {
        this._element = t;
      }
      var n = t.prototype;
      return (
        (n.show = function () {
          var t = this;
          if (
            !(
              (this._element.parentNode &&
                this._element.parentNode.nodeType ===
                  Node.ELEMENT_NODE &&
                e(this._element).hasClass(wn)) ||
              e(this._element).hasClass(An)
            )
          ) {
            var n,
              i,
              o = e(this._element).closest(Pn)[0],
              r = c.getSelectorFromElement(this._element);
            if (o) {
              var s =
                'UL' === o.nodeName || 'OL' === o.nodeName ? jn : Ln;
              i = (i = e.makeArray(e(o).find(s)))[i.length - 1];
            }
            var a = e.Event(In.HIDE, {
                relatedTarget: this._element,
              }),
              l = e.Event(In.SHOW, { relatedTarget: i });
            if (
              (i && e(i).trigger(a),
              e(this._element).trigger(l),
              !l.isDefaultPrevented() && !a.isDefaultPrevented())
            ) {
              r && (n = document.querySelector(r)),
                this._activate(this._element, o);
              var h = function () {
                var n = e.Event(In.HIDDEN, {
                    relatedTarget: t._element,
                  }),
                  o = e.Event(In.SHOWN, { relatedTarget: i });
                e(i).trigger(n), e(t._element).trigger(o);
              };
              n ? this._activate(n, n.parentNode, h) : h();
            }
          }
        }),
        (n.dispose = function () {
          e.removeData(this._element, Tn), (this._element = null);
        }),
        (n._activate = function (t, n, i) {
          var o = this,
            r = (
              !n || ('UL' !== n.nodeName && 'OL' !== n.nodeName)
                ? e(n).children(Ln)
                : e(n).find(jn)
            )[0],
            s = i && r && e(r).hasClass(Nn),
            a = function () {
              return o._transitionComplete(t, r, i);
            };
          if (r && s) {
            var l = c.getTransitionDurationFromElement(r);
            e(r)
              .removeClass(On)
              .one(c.TRANSITION_END, a)
              .emulateTransitionEnd(l);
          } else a();
        }),
        (n._transitionComplete = function (t, n, i) {
          if (n) {
            e(n).removeClass(wn);
            var o = e(n.parentNode).find(Rn)[0];
            o && e(o).removeClass(wn),
              'tab' === n.getAttribute('role') &&
                n.setAttribute('aria-selected', !1);
          }
          if (
            (e(t).addClass(wn),
            'tab' === t.getAttribute('role') &&
              t.setAttribute('aria-selected', !0),
            c.reflow(t),
            t.classList.contains(Nn) && t.classList.add(On),
            t.parentNode && e(t.parentNode).hasClass(Dn))
          ) {
            var r = e(t).closest(kn)[0];
            if (r) {
              var s = [].slice.call(r.querySelectorAll(Hn));
              e(s).addClass(wn);
            }
            t.setAttribute('aria-expanded', !0);
          }
          i && i();
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this),
              o = i.data(Tn);
            if (
              (o || ((o = new t(this)), i.data(Tn, o)),
              'string' == typeof n)
            ) {
              if (void 0 === o[n])
                throw new TypeError('No method named "' + n + '"');
              o[n]();
            }
          });
        }),
        o(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.3.1';
            },
          },
        ]),
        t
      );
    })();
  e(document).on(
    In.CLICK_DATA_API,
    '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    function (t) {
      t.preventDefault(), xn._jQueryInterface.call(e(this), 'show');
    }
  ),
    (e.fn.tab = xn._jQueryInterface),
    (e.fn.tab.Constructor = xn),
    (e.fn.tab.noConflict = function () {
      return (e.fn.tab = bn), xn._jQueryInterface;
    });
  var Fn = 'toast',
    Un = 'bs.toast',
    Wn = '.' + Un,
    qn = e.fn[Fn],
    Mn = {
      CLICK_DISMISS: 'click.dismiss' + Wn,
      HIDE: 'hide' + Wn,
      HIDDEN: 'hidden' + Wn,
      SHOW: 'show' + Wn,
      SHOWN: 'shown' + Wn,
    },
    Kn = 'fade',
    Qn = 'hide',
    Bn = 'show',
    Vn = 'showing',
    Yn = {
      animation: 'boolean',
      autohide: 'boolean',
      delay: 'number',
    },
    zn = { animation: !0, autohide: !0, delay: 500 },
    Xn = '[data-dismiss="toast"]',
    $n = (function () {
      function t(t, e) {
        (this._element = t),
          (this._config = this._getConfig(e)),
          (this._timeout = null),
          this._setListeners();
      }
      var n = t.prototype;
      return (
        (n.show = function () {
          var t = this;
          e(this._element).trigger(Mn.SHOW),
            this._config.animation && this._element.classList.add(Kn);
          var n = function () {
            t._element.classList.remove(Vn),
              t._element.classList.add(Bn),
              e(t._element).trigger(Mn.SHOWN),
              t._config.autohide && t.hide();
          };
          if (
            (this._element.classList.remove(Qn),
            this._element.classList.add(Vn),
            this._config.animation)
          ) {
            var i = c.getTransitionDurationFromElement(this._element);
            e(this._element)
              .one(c.TRANSITION_END, n)
              .emulateTransitionEnd(i);
          } else n();
        }),
        (n.hide = function (t) {
          var n = this;
          this._element.classList.contains(Bn) &&
            (e(this._element).trigger(Mn.HIDE),
            t
              ? this._close()
              : (this._timeout = setTimeout(function () {
                  n._close();
                }, this._config.delay)));
        }),
        (n.dispose = function () {
          clearTimeout(this._timeout),
            (this._timeout = null),
            this._element.classList.contains(Bn) &&
              this._element.classList.remove(Bn),
            e(this._element).off(Mn.CLICK_DISMISS),
            e.removeData(this._element, Un),
            (this._element = null),
            (this._config = null);
        }),
        (n._getConfig = function (t) {
          return (
            (t = r(
              {},
              zn,
              e(this._element).data(),
              'object' == typeof t && t ? t : {}
            )),
            c.typeCheckConfig(Fn, t, this.constructor.DefaultType),
            t
          );
        }),
        (n._setListeners = function () {
          var t = this;
          e(this._element).on(Mn.CLICK_DISMISS, Xn, function () {
            return t.hide(!0);
          });
        }),
        (n._close = function () {
          var t = this,
            n = function () {
              t._element.classList.add(Qn),
                e(t._element).trigger(Mn.HIDDEN);
            };
          if (
            (this._element.classList.remove(Bn),
            this._config.animation)
          ) {
            var i = c.getTransitionDurationFromElement(this._element);
            e(this._element)
              .one(c.TRANSITION_END, n)
              .emulateTransitionEnd(i);
          } else n();
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this),
              o = i.data(Un);
            if (
              (o ||
                ((o = new t(this, 'object' == typeof n && n)),
                i.data(Un, o)),
              'string' == typeof n)
            ) {
              if (void 0 === o[n])
                throw new TypeError('No method named "' + n + '"');
              o[n](this);
            }
          });
        }),
        o(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.3.1';
            },
          },
          {
            key: 'DefaultType',
            get: function () {
              return Yn;
            },
          },
          {
            key: 'Default',
            get: function () {
              return zn;
            },
          },
        ]),
        t
      );
    })();
  (e.fn[Fn] = $n._jQueryInterface),
    (e.fn[Fn].Constructor = $n),
    (e.fn[Fn].noConflict = function () {
      return (e.fn[Fn] = qn), $n._jQueryInterface;
    }),
    (function () {
      if (void 0 === e)
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
        );
      var t = e.fn.jquery.split(' ')[0].split('.');
      if (
        (t[0] < 2 && t[1] < 9) ||
        (1 === t[0] && 9 === t[1] && t[2] < 1) ||
        4 <= t[0]
      )
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
        );
    })(),
    (t.Util = c),
    (t.Alert = v),
    (t.Button = k),
    (t.Carousel = st),
    (t.Collapse = Tt),
    (t.Dropdown = Xt),
    (t.Modal = ge),
    (t.Popover = tn),
    (t.Scrollspy = Cn),
    (t.Tab = xn),
    (t.Toast = $n),
    (t.Tooltip = We),
    Object.defineProperty(t, '__esModule', { value: !0 });
});
