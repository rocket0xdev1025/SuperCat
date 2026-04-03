(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [753],
  {
    8369: function (e, t, n) {
      "use strict";
      n.d(t, {
        Ry: function () {
          return s;
        },
      });
      var r = new WeakMap(),
        o = new WeakMap(),
        i = {},
        l = 0,
        a = function (e) {
          return e && (e.host || a(e.parentNode));
        },
        u = function (e, t, n, u) {
          var s = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var n = a(e);
              return n && t.contains(n)
                ? n
                : (console.error(
                    "aria-hidden",
                    e,
                    "in not contained inside",
                    t,
                    ". Doing nothing"
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          i[n] || (i[n] = new WeakMap());
          var c = i[n],
            d = [],
            f = new Set(),
            p = new Set(s),
            m = function (e) {
              !e || f.has(e) || (f.add(e), m(e.parentNode));
            };
          s.forEach(m);
          var h = function (e) {
            !e ||
              p.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (f.has(e)) h(e);
                else
                  try {
                    var t = e.getAttribute(u),
                      i = null !== t && "false" !== t,
                      l = (r.get(e) || 0) + 1,
                      a = (c.get(e) || 0) + 1;
                    r.set(e, l),
                      c.set(e, a),
                      d.push(e),
                      1 === l && i && o.set(e, !0),
                      1 === a && e.setAttribute(n, "true"),
                      i || e.setAttribute(u, "true");
                  } catch (t) {
                    console.error("aria-hidden: cannot operate on ", e, t);
                  }
              });
          };
          return (
            h(t),
            f.clear(),
            l++,
            function () {
              d.forEach(function (e) {
                var t = r.get(e) - 1,
                  i = c.get(e) - 1;
                r.set(e, t),
                  c.set(e, i),
                  t || (o.has(e) || e.removeAttribute(u), o.delete(e)),
                  i || e.removeAttribute(n);
              }),
                --l ||
                  ((r = new WeakMap()),
                  (r = new WeakMap()),
                  (o = new WeakMap()),
                  (i = {}));
            }
          );
        },
        s = function (e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o =
              t ||
              ("undefined" == typeof document
                ? null
                : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
          return o
            ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
              u(r, o, n, "aria-hidden"))
            : function () {
                return null;
              };
        };
    },
    42: function (e, t, n) {
      "use strict";
      var r = n(5786),
        o = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var n,
          i,
          l,
          a,
          u,
          s,
          c,
          d,
          f = !1;
        t || (t = {}), (l = t.debug || !1);
        try {
          if (
            ((u = r()),
            (s = document.createRange()),
            (c = document.getSelection()),
            ((d = document.createElement("span")).textContent = e),
            (d.ariaHidden = "true"),
            (d.style.all = "unset"),
            (d.style.position = "fixed"),
            (d.style.top = 0),
            (d.style.clip = "rect(0, 0, 0, 0)"),
            (d.style.whiteSpace = "pre"),
            (d.style.webkitUserSelect = "text"),
            (d.style.MozUserSelect = "text"),
            (d.style.msUserSelect = "text"),
            (d.style.userSelect = "text"),
            d.addEventListener("copy", function (n) {
              if ((n.stopPropagation(), t.format)) {
                if ((n.preventDefault(), void 0 === n.clipboardData)) {
                  l && console.warn("unable to use e.clipboardData"),
                    l && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var r = o[t.format] || o.default;
                  window.clipboardData.setData(r, e);
                } else
                  n.clipboardData.clearData(),
                    n.clipboardData.setData(t.format, e);
              }
              t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData));
            }),
            document.body.appendChild(d),
            s.selectNodeContents(d),
            c.addRange(s),
            !document.execCommand("copy"))
          )
            throw Error("copy command was unsuccessful");
          f = !0;
        } catch (r) {
          l && console.error("unable to copy using execCommand: ", r),
            l && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(t.format || "text", e),
              t.onCopy && t.onCopy(window.clipboardData),
              (f = !0);
          } catch (r) {
            l && console.error("unable to copy using clipboardData: ", r),
              l && console.error("falling back to prompt"),
              (n =
                "message" in t
                  ? t.message
                  : "Copy to clipboard: #{key}, Enter"),
              (i =
                (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C"),
              (a = n.replace(/#{\s*key\s*}/g, i)),
              window.prompt(a, e);
          }
        } finally {
          c &&
            ("function" == typeof c.removeRange
              ? c.removeRange(s)
              : c.removeAllRanges()),
            d && document.body.removeChild(d),
            u();
        }
        return f;
      };
    },
    6648: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return o.a;
        },
      });
      var r = n(5601),
        o = n.n(r);
    },
    844: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "addLocale", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(8157);
      let r = function (e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return e;
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5944: function (e, t, n) {
      "use strict";
      function r(e, t, n, r) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(8157),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    8173: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return y;
          },
        });
      let r = n(9920),
        o = n(1452),
        i = n(7437),
        l = o._(n(2265)),
        a = r._(n(4887)),
        u = r._(n(8321)),
        s = n(497),
        c = n(7103),
        d = n(3938);
      n(2301);
      let f = n(291),
        p = r._(n(1241)),
        m = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function h(e, t, n, r, o, i, l) {
        let a = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== a &&
          ((e["data-loaded-src"] = a),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && o(!0), null == n ? void 0 : n.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let r = !1,
                    o = !1;
                  n.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => r,
                    isPropagationStopped: () => o,
                    persist: () => {},
                    preventDefault: () => {
                      (r = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (o = !0), t.stopPropagation();
                    },
                  });
                }
                (null == r ? void 0 : r.current) && r.current(e);
              }
            }));
      }
      function g(e) {
        return l.use ? { fetchPriority: e } : { fetchpriority: e };
      }
      "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      let v = (0, l.forwardRef)((e, t) => {
        let {
          src: n,
          srcSet: r,
          sizes: o,
          height: a,
          width: u,
          decoding: s,
          className: c,
          style: d,
          fetchPriority: f,
          placeholder: p,
          loading: m,
          unoptimized: v,
          fill: b,
          onLoadRef: y,
          onLoadingCompleteRef: w,
          setBlurComplete: x,
          setShowAltText: E,
          sizesInput: C,
          onLoad: R,
          onError: P,
          ...S
        } = e;
        return (0, i.jsx)("img", {
          ...S,
          ...g(f),
          loading: m,
          width: u,
          height: a,
          decoding: s,
          "data-nimg": b ? "fill" : "1",
          className: c,
          style: d,
          sizes: o,
          srcSet: r,
          src: n,
          ref: (0, l.useCallback)(
            (e) => {
              t &&
                ("function" == typeof t
                  ? t(e)
                  : "object" == typeof t && (t.current = e)),
                e &&
                  (P && (e.src = e.src), e.complete && h(e, p, y, w, x, v, C));
            },
            [n, p, y, w, x, P, v, C, t]
          ),
          onLoad: (e) => {
            h(e.currentTarget, p, y, w, x, v, C);
          },
          onError: (e) => {
            E(!0), "empty" !== p && x(!0), P && P(e);
          },
        });
      });
      function b(e) {
        let { isAppRouter: t, imgAttributes: n } = e,
          r = {
            as: "image",
            imageSrcSet: n.srcSet,
            imageSizes: n.sizes,
            crossOrigin: n.crossOrigin,
            referrerPolicy: n.referrerPolicy,
            ...g(n.fetchPriority),
          };
        return t && a.default.preload
          ? (a.default.preload(n.src, r), null)
          : (0, i.jsx)(u.default, {
              children: (0, i.jsx)(
                "link",
                { rel: "preload", href: n.srcSet ? void 0 : n.src, ...r },
                "__nimg-" + n.src + n.srcSet + n.sizes
              ),
            });
      }
      let y = (0, l.forwardRef)((e, t) => {
        let n = (0, l.useContext)(f.RouterContext),
          r = (0, l.useContext)(d.ImageConfigContext),
          o = (0, l.useMemo)(() => {
            let e = m || r || c.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              n = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: n };
          }, [r]),
          { onLoad: a, onLoadingComplete: u } = e,
          h = (0, l.useRef)(a);
        (0, l.useEffect)(() => {
          h.current = a;
        }, [a]);
        let g = (0, l.useRef)(u);
        (0, l.useEffect)(() => {
          g.current = u;
        }, [u]);
        let [y, w] = (0, l.useState)(!1),
          [x, E] = (0, l.useState)(!1),
          { props: C, meta: R } = (0, s.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: o,
            blurComplete: y,
            showAltText: x,
          });
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(v, {
              ...C,
              unoptimized: R.unoptimized,
              placeholder: R.placeholder,
              fill: R.fill,
              onLoadRef: h,
              onLoadingCompleteRef: g,
              setBlurComplete: w,
              setShowAltText: E,
              sizesInput: e.sizes,
              ref: t,
            }),
            R.priority
              ? (0, i.jsx)(b, { isAppRouter: !n, imgAttributes: C })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    231: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return w;
          },
        });
      let r = n(9920),
        o = n(7437),
        i = r._(n(2265)),
        l = n(8016),
        a = n(8029),
        u = n(1142),
        s = n(3461),
        c = n(844),
        d = n(291),
        f = n(4467),
        p = n(3106),
        m = n(5944),
        h = n(4897),
        g = n(1507),
        v = new Set();
      function b(e, t, n, r, o, i) {
        if ("undefined" != typeof window && (i || (0, a.isLocalURL)(t))) {
          if (!r.bypassPrefetchedCheck) {
            let o =
              t +
              "%" +
              n +
              "%" +
              (void 0 !== r.locale
                ? r.locale
                : "locale" in e
                ? e.locale
                : void 0);
            if (v.has(o)) return;
            v.add(o);
          }
          (async () => (i ? e.prefetch(t, o) : e.prefetch(t, n, r)))().catch(
            (e) => {}
          );
        }
      }
      function y(e) {
        return "string" == typeof e ? e : (0, u.formatUrl)(e);
      }
      let w = i.default.forwardRef(function (e, t) {
        let n, r;
        let {
          href: u,
          as: v,
          children: w,
          prefetch: x = null,
          passHref: E,
          replace: C,
          shallow: R,
          scroll: P,
          locale: S,
          onClick: O,
          onMouseEnter: j,
          onTouchStart: N,
          legacyBehavior: k = !1,
          ...M
        } = e;
        (n = w),
          k &&
            ("string" == typeof n || "number" == typeof n) &&
            (n = (0, o.jsx)("a", { children: n }));
        let _ = i.default.useContext(d.RouterContext),
          A = i.default.useContext(f.AppRouterContext),
          T = null != _ ? _ : A,
          L = !_,
          D = !1 !== x,
          I = null === x ? g.PrefetchKind.AUTO : g.PrefetchKind.FULL,
          { href: W, as: z } = i.default.useMemo(() => {
            if (!_) {
              let e = y(u);
              return { href: e, as: v ? y(v) : e };
            }
            let [e, t] = (0, l.resolveHref)(_, u, !0);
            return { href: e, as: v ? (0, l.resolveHref)(_, v) : t || e };
          }, [_, u, v]),
          F = i.default.useRef(W),
          U = i.default.useRef(z);
        k && (r = i.default.Children.only(n));
        let B = k ? r && "object" == typeof r && r.ref : t,
          [V, H, $] = (0, p.useIntersection)({ rootMargin: "200px" }),
          Y = i.default.useCallback(
            (e) => {
              (U.current !== z || F.current !== W) &&
                ($(), (U.current = z), (F.current = W)),
                V(e),
                B &&
                  ("function" == typeof B
                    ? B(e)
                    : "object" == typeof B && (B.current = e));
            },
            [z, B, W, $, V]
          );
        i.default.useEffect(() => {
          T && H && D && b(T, W, z, { locale: S }, { kind: I }, L);
        }, [z, W, H, S, D, null == _ ? void 0 : _.locale, T, L, I]);
        let q = {
          ref: Y,
          onClick(e) {
            k || "function" != typeof O || O(e),
              k &&
                r.props &&
                "function" == typeof r.props.onClick &&
                r.props.onClick(e),
              T &&
                !e.defaultPrevented &&
                (function (e, t, n, r, o, l, u, s, c) {
                  let { nodeName: d } = e.currentTarget;
                  if (
                    "A" === d.toUpperCase() &&
                    ((function (e) {
                      let t = e.currentTarget.getAttribute("target");
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!c && !(0, a.isLocalURL)(n)))
                  )
                    return;
                  e.preventDefault();
                  let f = () => {
                    let e = null == u || u;
                    "beforePopState" in t
                      ? t[o ? "replace" : "push"](n, r, {
                          shallow: l,
                          locale: s,
                          scroll: e,
                        })
                      : t[o ? "replace" : "push"](r || n, { scroll: e });
                  };
                  c ? i.default.startTransition(f) : f();
                })(e, T, W, z, C, R, P, S, L);
          },
          onMouseEnter(e) {
            k || "function" != typeof j || j(e),
              k &&
                r.props &&
                "function" == typeof r.props.onMouseEnter &&
                r.props.onMouseEnter(e),
              T &&
                (D || !L) &&
                b(
                  T,
                  W,
                  z,
                  { locale: S, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: I },
                  L
                );
          },
          onTouchStart: function (e) {
            k || "function" != typeof N || N(e),
              k &&
                r.props &&
                "function" == typeof r.props.onTouchStart &&
                r.props.onTouchStart(e),
              T &&
                (D || !L) &&
                b(
                  T,
                  W,
                  z,
                  { locale: S, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: I },
                  L
                );
          },
        };
        if ((0, s.isAbsoluteUrl)(z)) q.href = z;
        else if (!k || E || ("a" === r.type && !("href" in r.props))) {
          let e = void 0 !== S ? S : null == _ ? void 0 : _.locale,
            t =
              (null == _ ? void 0 : _.isLocaleDomain) &&
              (0, m.getDomainLocale)(
                z,
                e,
                null == _ ? void 0 : _.locales,
                null == _ ? void 0 : _.domainLocales
              );
          q.href =
            t ||
            (0, h.addBasePath)(
              (0, c.addLocale)(z, e, null == _ ? void 0 : _.defaultLocale)
            );
        }
        return k
          ? i.default.cloneElement(r, q)
          : (0, o.jsx)("a", { ...M, ...q, children: n });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    9189: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          cancelIdleCallback: function () {
            return r;
          },
          requestIdleCallback: function () {
            return n;
          },
        });
      let n =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        r =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8016: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "resolveHref", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let r = n(8323),
        o = n(1142),
        i = n(5519),
        l = n(3461),
        a = n(8157),
        u = n(8029),
        s = n(9195),
        c = n(20);
      function d(e, t, n) {
        let d;
        let f = "string" == typeof t ? t : (0, o.formatWithValidation)(t),
          p = f.match(/^[a-zA-Z]{1,}:\/\//),
          m = p ? f.slice(p[0].length) : f;
        if ((m.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
          console.error(
            "Invalid href '" +
              f +
              "' passed to next/router in page: '" +
              e.pathname +
              "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href."
          );
          let t = (0, l.normalizeRepeatedSlashes)(m);
          f = (p ? p[0] : "") + t;
        }
        if (!(0, u.isLocalURL)(f)) return n ? [f] : f;
        try {
          d = new URL(f.startsWith("#") ? e.asPath : e.pathname, "http://n");
        } catch (e) {
          d = new URL("/", "http://n");
        }
        try {
          let e = new URL(f, d);
          e.pathname = (0, a.normalizePathTrailingSlash)(e.pathname);
          let t = "";
          if ((0, s.isDynamicRoute)(e.pathname) && e.searchParams && n) {
            let n = (0, r.searchParamsToUrlQuery)(e.searchParams),
              { result: l, params: a } = (0, c.interpolateAs)(
                e.pathname,
                e.pathname,
                n
              );
            l &&
              (t = (0, o.formatWithValidation)({
                pathname: l,
                hash: e.hash,
                query: (0, i.omit)(n, a),
              }));
          }
          let l =
            e.origin === d.origin ? e.href.slice(e.origin.length) : e.href;
          return n ? [l, t || l] : l;
        } catch (e) {
          return n ? [f] : f;
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    3106: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let r = n(2265),
        o = n(9189),
        i = "function" == typeof IntersectionObserver,
        l = new Map(),
        a = [];
      function u(e) {
        let { rootRef: t, rootMargin: n, disabled: u } = e,
          s = u || !i,
          [c, d] = (0, r.useState)(!1),
          f = (0, r.useRef)(null),
          p = (0, r.useCallback)((e) => {
            f.current = e;
          }, []);
        return (
          (0, r.useEffect)(() => {
            if (i) {
              if (s || c) return;
              let e = f.current;
              if (e && e.tagName)
                return (function (e, t, n) {
                  let {
                    id: r,
                    observer: o,
                    elements: i,
                  } = (function (e) {
                    let t;
                    let n = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      r = a.find(
                        (e) => e.root === n.root && e.margin === n.margin
                      );
                    if (r && (t = l.get(r))) return t;
                    let o = new Map();
                    return (
                      (t = {
                        id: n,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = o.get(e.target),
                              n = e.isIntersecting || e.intersectionRatio > 0;
                            t && n && t(n);
                          });
                        }, e),
                        elements: o,
                      }),
                      a.push(n),
                      l.set(n, t),
                      t
                    );
                  })(n);
                  return (
                    i.set(e, t),
                    o.observe(e),
                    function () {
                      if ((i.delete(e), o.unobserve(e), 0 === i.size)) {
                        o.disconnect(), l.delete(r);
                        let e = a.findIndex(
                          (e) => e.root === r.root && e.margin === r.margin
                        );
                        e > -1 && a.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && d(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: n,
                });
            } else if (!c) {
              let e = (0, o.requestIdleCallback)(() => d(!0));
              return () => (0, o.cancelIdleCallback)(e);
            }
          }, [s, n, t, c, f.current]),
          [
            p,
            c,
            (0, r.useCallback)(() => {
              d(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    2901: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(9920)._(n(2265)).default.createContext({});
    },
    687: function (e, t) {
      "use strict";
      function n(e) {
        let {
          ampFirst: t = !1,
          hybrid: n = !1,
          hasQuery: r = !1,
        } = void 0 === e ? {} : e;
        return t || (n && r);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    1943: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "escapeStringRegexp", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = /[|\\{}()[\]^$+*?.-]/,
        r = /[|\\{}()[\]^$+*?.-]/g;
      function o(e) {
        return n.test(e) ? e.replace(r, "\\$&") : e;
      }
    },
    497: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }),
        n(2301);
      let r = n(1564),
        o = n(7103);
      function i(e) {
        return void 0 !== e.default;
      }
      function l(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function a(e, t) {
        var n;
        let a,
          u,
          s,
          {
            src: c,
            sizes: d,
            unoptimized: f = !1,
            priority: p = !1,
            loading: m,
            className: h,
            quality: g,
            width: v,
            height: b,
            fill: y = !1,
            style: w,
            overrideSrc: x,
            onLoad: E,
            onLoadingComplete: C,
            placeholder: R = "empty",
            blurDataURL: P,
            fetchPriority: S,
            layout: O,
            objectFit: j,
            objectPosition: N,
            lazyBoundary: k,
            lazyRoot: M,
            ..._
          } = e,
          { imgConf: A, showAltText: T, blurComplete: L, defaultLoader: D } = t,
          I = A || o.imageConfigDefault;
        if ("allSizes" in I) a = I;
        else {
          let e = [...I.deviceSizes, ...I.imageSizes].sort((e, t) => e - t),
            t = I.deviceSizes.sort((e, t) => e - t);
          a = { ...I, allSizes: e, deviceSizes: t };
        }
        if (void 0 === D)
          throw Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          );
        let W = _.loader || D;
        delete _.loader, delete _.srcSet;
        let z = "__next_img_default" in W;
        if (z) {
          if ("custom" === a.loader)
            throw Error(
              'Image with src "' +
                c +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = W;
          W = (t) => {
            let { config: n, ...r } = t;
            return e(r);
          };
        }
        if (O) {
          "fill" === O && (y = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[O];
          e && (w = { ...w, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[O];
          t && !d && (d = t);
        }
        let F = "",
          U = l(v),
          B = l(b);
        if ("object" == typeof (n = c) && (i(n) || void 0 !== n.src)) {
          let e = i(c) ? c.default : c;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((u = e.blurWidth),
            (s = e.blurHeight),
            (P = P || e.blurDataURL),
            (F = e.src),
            !y)
          ) {
            if (U || B) {
              if (U && !B) {
                let t = U / e.width;
                B = Math.round(e.height * t);
              } else if (!U && B) {
                let t = B / e.height;
                U = Math.round(e.width * t);
              }
            } else (U = e.width), (B = e.height);
          }
        }
        let V = !p && ("lazy" === m || void 0 === m);
        (!(c = "string" == typeof c ? c : F) ||
          c.startsWith("data:") ||
          c.startsWith("blob:")) &&
          ((f = !0), (V = !1)),
          a.unoptimized && (f = !0),
          z && c.endsWith(".svg") && !a.dangerouslyAllowSVG && (f = !0),
          p && (S = "high");
        let H = l(g),
          $ = Object.assign(
            y
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: j,
                  objectPosition: N,
                }
              : {},
            T ? {} : { color: "transparent" },
            w
          ),
          Y =
            L || "empty" === R
              ? null
              : "blur" === R
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, r.getImageBlurSvg)({
                  widthInt: U,
                  heightInt: B,
                  blurWidth: u,
                  blurHeight: s,
                  blurDataURL: P || "",
                  objectFit: $.objectFit,
                }) +
                '")'
              : 'url("' + R + '")',
          q = Y
            ? {
                backgroundSize: $.objectFit || "cover",
                backgroundPosition: $.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: Y,
              }
            : {},
          K = (function (e) {
            let {
              config: t,
              src: n,
              unoptimized: r,
              width: o,
              quality: i,
              sizes: l,
              loader: a,
            } = e;
            if (r) return { src: n, srcSet: void 0, sizes: void 0 };
            let { widths: u, kind: s } = (function (e, t, n) {
                let { deviceSizes: r, allSizes: o } = e;
                if (n) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let r; (r = e.exec(n)); r) t.push(parseInt(r[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: o.filter((t) => t >= r[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: o, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: r, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => o.find((t) => t >= e) || o[o.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, o, l),
              c = u.length - 1;
            return {
              sizes: l || "w" !== s ? l : "100vw",
              srcSet: u
                .map(
                  (e, r) =>
                    a({ config: t, src: n, quality: i, width: e }) +
                    " " +
                    ("w" === s ? e : r + 1) +
                    s
                )
                .join(", "),
              src: a({ config: t, src: n, quality: i, width: u[c] }),
            };
          })({
            config: a,
            src: c,
            unoptimized: f,
            width: U,
            quality: H,
            sizes: d,
            loader: W,
          });
        return {
          props: {
            ..._,
            loading: V ? "lazy" : m,
            fetchPriority: S,
            width: U,
            height: B,
            decoding: "async",
            className: h,
            style: { ...$, ...q },
            sizes: K.sizes,
            srcSet: K.srcSet,
            src: x || K.src,
          },
          meta: { unoptimized: f, priority: p, placeholder: R, fill: y },
        };
      }
    },
    8321: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return h;
          },
          defaultHead: function () {
            return d;
          },
        });
      let r = n(9920),
        o = n(1452),
        i = n(7437),
        l = o._(n(2265)),
        a = r._(n(5960)),
        u = n(2901),
        s = n(6590),
        c = n(687);
      function d(e) {
        void 0 === e && (e = !1);
        let t = [(0, i.jsx)("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              (0, i.jsx)("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function f(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === l.default.Fragment
          ? e.concat(
              l.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" == typeof t || "number" == typeof t
                    ? e
                    : e.concat(t),
                []
              )
            )
          : e.concat(t);
      }
      n(2301);
      let p = ["name", "httpEquiv", "charSet", "itemProp"];
      function m(e, t) {
        let { inAmpMode: n } = t;
        return e
          .reduce(f, [])
          .reverse()
          .concat(d(n).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return (o) => {
                let i = !0,
                  l = !1;
                if (
                  o.key &&
                  "number" != typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  l = !0;
                  let t = o.key.slice(o.key.indexOf("$") + 1);
                  e.has(t) ? (i = !1) : e.add(t);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    t.has(o.type) ? (i = !1) : t.add(o.type);
                    break;
                  case "meta":
                    for (let e = 0, t = p.length; e < t; e++) {
                      let t = p[e];
                      if (o.props.hasOwnProperty(t)) {
                        if ("charSet" === t) n.has(t) ? (i = !1) : n.add(t);
                        else {
                          let e = o.props[t],
                            n = r[t] || new Set();
                          ("name" !== t || !l) && n.has(e)
                            ? (i = !1)
                            : (n.add(e), (r[t] = n));
                        }
                      }
                    }
                }
                return i;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let r = e.key || t;
            if (
              !n &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                l.default.cloneElement(e, t)
              );
            }
            return l.default.cloneElement(e, { key: r });
          });
      }
      let h = function (e) {
        let { children: t } = e,
          n = (0, l.useContext)(u.AmpStateContext),
          r = (0, l.useContext)(s.HeadManagerContext);
        return (0, i.jsx)(a.default, {
          reduceComponentsToState: m,
          headManager: r,
          inAmpMode: (0, c.isInAmpMode)(n),
          children: t,
        });
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1564: function (e, t) {
      "use strict";
      function n(e) {
        let {
            widthInt: t,
            heightInt: n,
            blurWidth: r,
            blurHeight: o,
            blurDataURL: i,
            objectFit: l,
          } = e,
          a = r ? 40 * r : t,
          u = o ? 40 * o : n,
          s = a && u ? "viewBox='0 0 " + a + " " + u + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          s +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (s
            ? "none"
            : "contain" === l
            ? "xMidYMid"
            : "cover" === l
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          i +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    3938: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(9920)._(n(2265)),
        o = n(7103),
        i = r.default.createContext(o.imageConfigDefault);
    },
    7103: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          VALID_LOADERS: function () {
            return n;
          },
          imageConfigDefault: function () {
            return r;
          },
        });
      let n = ["default", "imgix", "cloudinary", "akamai", "custom"],
        r = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "inline",
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    5601: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return u;
          },
          getImageProps: function () {
            return a;
          },
        });
      let r = n(9920),
        o = n(497),
        i = n(8173),
        l = r._(n(1241));
      function a(e) {
        let { props: t } = (0, o.getImgProps)(e, {
          defaultLoader: l.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
        return { props: t };
      }
      let u = i.Image;
    },
    1241: function (e, t) {
      "use strict";
      function n(e) {
        let { config: t, src: n, width: r, quality: o } = e;
        return n;
        // t.path +
        // "?url=" +
        // encodeURIComponent(n) +
        // "&w=" +
        // r +
        // "&q=" +
        // (o || 75)
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        (n.__next_img_default = !0);
      let r = n;
    },
    291: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(9920)._(n(2265)).default.createContext(null);
    },
    1142: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          formatUrl: function () {
            return i;
          },
          formatWithValidation: function () {
            return a;
          },
          urlObjectKeys: function () {
            return l;
          },
        });
      let r = n(1452)._(n(8323)),
        o = /https?|ftp|gopher|file/;
      function i(e) {
        let { auth: t, hostname: n } = e,
          i = e.protocol || "",
          l = e.pathname || "",
          a = e.hash || "",
          u = e.query || "",
          s = !1;
        (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
          e.host
            ? (s = t + e.host)
            : n &&
              ((s = t + (~n.indexOf(":") ? "[" + n + "]" : n)),
              e.port && (s += ":" + e.port)),
          u &&
            "object" == typeof u &&
            (u = String(r.urlQueryToSearchParams(u)));
        let c = e.search || (u && "?" + u) || "";
        return (
          i && !i.endsWith(":") && (i += ":"),
          e.slashes || ((!i || o.test(i)) && !1 !== s)
            ? ((s = "//" + (s || "")), l && "/" !== l[0] && (l = "/" + l))
            : s || (s = ""),
          a && "#" !== a[0] && (a = "#" + a),
          c && "?" !== c[0] && (c = "?" + c),
          "" +
            i +
            s +
            (l = l.replace(/[?#]/g, encodeURIComponent)) +
            (c = c.replace("#", "%23")) +
            a
        );
      }
      let l = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function a(e) {
        return i(e);
      }
    },
    9195: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          getSortedRoutes: function () {
            return r.getSortedRoutes;
          },
          isDynamicRoute: function () {
            return o.isDynamicRoute;
          },
        });
      let r = n(9089),
        o = n(8083);
    },
    20: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "interpolateAs", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(1533),
        o = n(3169);
      function i(e, t, n) {
        let i = "",
          l = (0, o.getRouteRegex)(e),
          a = l.groups,
          u = (t !== e ? (0, r.getRouteMatcher)(l)(t) : "") || n;
        i = e;
        let s = Object.keys(a);
        return (
          s.every((e) => {
            let t = u[e] || "",
              { repeat: n, optional: r } = a[e],
              o = "[" + (n ? "..." : "") + e + "]";
            return (
              r && (o = (t ? "" : "/") + "[" + o + "]"),
              n && !Array.isArray(t) && (t = [t]),
              (r || e in u) &&
                (i =
                  i.replace(
                    o,
                    n
                      ? t.map((e) => encodeURIComponent(e)).join("/")
                      : encodeURIComponent(t)
                  ) || "/")
            );
          }) || (i = ""),
          { params: s, result: i }
        );
      }
    },
    8083: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isDynamicRoute", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(2269),
        o = /\/\[[^/]+?\](?=\/|$)/;
      function i(e) {
        return (
          (0, r.isInterceptionRouteAppPath)(e) &&
            (e = (0, r.extractInterceptionRouteInformation)(
              e
            ).interceptedRoute),
          o.test(e)
        );
      }
    },
    8029: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isLocalURL", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(3461),
        o = n(9404);
      function i(e) {
        if (!(0, r.isAbsoluteUrl)(e)) return !0;
        try {
          let t = (0, r.getLocationOrigin)(),
            n = new URL(e, t);
          return n.origin === t && (0, o.hasBasePath)(n.pathname);
        } catch (e) {
          return !1;
        }
      }
    },
    5519: function (e, t) {
      "use strict";
      function n(e, t) {
        let n = {};
        return (
          Object.keys(e).forEach((r) => {
            t.includes(r) || (n[r] = e[r]);
          }),
          n
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "omit", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    8323: function (e, t) {
      "use strict";
      function n(e) {
        let t = {};
        return (
          e.forEach((e, n) => {
            void 0 === t[n]
              ? (t[n] = e)
              : Array.isArray(t[n])
              ? t[n].push(e)
              : (t[n] = [t[n], e]);
          }),
          t
        );
      }
      function r(e) {
        return "string" != typeof e &&
          ("number" != typeof e || isNaN(e)) &&
          "boolean" != typeof e
          ? ""
          : String(e);
      }
      function o(e) {
        let t = new URLSearchParams();
        return (
          Object.entries(e).forEach((e) => {
            let [n, o] = e;
            Array.isArray(o)
              ? o.forEach((e) => t.append(n, r(e)))
              : t.set(n, r(o));
          }),
          t
        );
      }
      function i(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return (
          n.forEach((t) => {
            Array.from(t.keys()).forEach((t) => e.delete(t)),
              t.forEach((t, n) => e.append(n, t));
          }),
          e
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          assign: function () {
            return i;
          },
          searchParamsToUrlQuery: function () {
            return n;
          },
          urlQueryToSearchParams: function () {
            return o;
          },
        });
    },
    1533: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getRouteMatcher", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(3461);
      function o(e) {
        let { re: t, groups: n } = e;
        return (e) => {
          let o = t.exec(e);
          if (!o) return !1;
          let i = (e) => {
              try {
                return decodeURIComponent(e);
              } catch (e) {
                throw new r.DecodeError("failed to decode param");
              }
            },
            l = {};
          return (
            Object.keys(n).forEach((e) => {
              let t = n[e],
                r = o[t.pos];
              void 0 !== r &&
                (l[e] = ~r.indexOf("/")
                  ? r.split("/").map((e) => i(e))
                  : t.repeat
                  ? [i(r)]
                  : i(r));
            }),
            l
          );
        };
      }
    },
    3169: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          getNamedMiddlewareRegex: function () {
            return f;
          },
          getNamedRouteRegex: function () {
            return d;
          },
          getRouteRegex: function () {
            return u;
          },
        });
      let r = n(2269),
        o = n(1943),
        i = n(7741);
      function l(e) {
        let t = e.startsWith("[") && e.endsWith("]");
        t && (e = e.slice(1, -1));
        let n = e.startsWith("...");
        return n && (e = e.slice(3)), { key: e, repeat: n, optional: t };
      }
      function a(e) {
        let t = (0, i.removeTrailingSlash)(e).slice(1).split("/"),
          n = {},
          a = 1;
        return {
          parameterizedRoute: t
            .map((e) => {
              let t = r.INTERCEPTION_ROUTE_MARKERS.find((t) => e.startsWith(t)),
                i = e.match(/\[((?:\[.*\])|.+)\]/);
              if (t && i) {
                let { key: e, optional: r, repeat: u } = l(i[1]);
                return (
                  (n[e] = { pos: a++, repeat: u, optional: r }),
                  "/" + (0, o.escapeStringRegexp)(t) + "([^/]+?)"
                );
              }
              if (!i) return "/" + (0, o.escapeStringRegexp)(e);
              {
                let { key: e, repeat: t, optional: r } = l(i[1]);
                return (
                  (n[e] = { pos: a++, repeat: t, optional: r }),
                  t ? (r ? "(?:/(.+?))?" : "/(.+?)") : "/([^/]+?)"
                );
              }
            })
            .join(""),
          groups: n,
        };
      }
      function u(e) {
        let { parameterizedRoute: t, groups: n } = a(e);
        return { re: RegExp("^" + t + "(?:/)?$"), groups: n };
      }
      function s(e) {
        let {
            interceptionMarker: t,
            getSafeRouteKey: n,
            segment: r,
            routeKeys: i,
            keyPrefix: a,
          } = e,
          { key: u, optional: s, repeat: c } = l(r),
          d = u.replace(/\W/g, "");
        a && (d = "" + a + d);
        let f = !1;
        (0 === d.length || d.length > 30) && (f = !0),
          isNaN(parseInt(d.slice(0, 1))) || (f = !0),
          f && (d = n()),
          a ? (i[d] = "" + a + u) : (i[d] = u);
        let p = t ? (0, o.escapeStringRegexp)(t) : "";
        return c
          ? s
            ? "(?:/" + p + "(?<" + d + ">.+?))?"
            : "/" + p + "(?<" + d + ">.+?)"
          : "/" + p + "(?<" + d + ">[^/]+?)";
      }
      function c(e, t) {
        let n;
        let l = (0, i.removeTrailingSlash)(e).slice(1).split("/"),
          a =
            ((n = 0),
            () => {
              let e = "",
                t = ++n;
              for (; t > 0; )
                (e += String.fromCharCode(97 + ((t - 1) % 26))),
                  (t = Math.floor((t - 1) / 26));
              return e;
            }),
          u = {};
        return {
          namedParameterizedRoute: l
            .map((e) => {
              let n = r.INTERCEPTION_ROUTE_MARKERS.some((t) => e.startsWith(t)),
                i = e.match(/\[((?:\[.*\])|.+)\]/);
              if (n && i) {
                let [n] = e.split(i[0]);
                return s({
                  getSafeRouteKey: a,
                  interceptionMarker: n,
                  segment: i[1],
                  routeKeys: u,
                  keyPrefix: t ? "nxtI" : void 0,
                });
              }
              return i
                ? s({
                    getSafeRouteKey: a,
                    segment: i[1],
                    routeKeys: u,
                    keyPrefix: t ? "nxtP" : void 0,
                  })
                : "/" + (0, o.escapeStringRegexp)(e);
            })
            .join(""),
          routeKeys: u,
        };
      }
      function d(e, t) {
        let n = c(e, t);
        return {
          ...u(e),
          namedRegex: "^" + n.namedParameterizedRoute + "(?:/)?$",
          routeKeys: n.routeKeys,
        };
      }
      function f(e, t) {
        let { parameterizedRoute: n } = a(e),
          { catchAll: r = !0 } = t;
        if ("/" === n) return { namedRegex: "^/" + (r ? ".*" : "") + "$" };
        let { namedParameterizedRoute: o } = c(e, !1);
        return { namedRegex: "^" + o + (r ? "(?:(/.*)?)" : "") + "$" };
      }
    },
    9089: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getSortedRoutes", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      class n {
        insert(e) {
          this._insert(e.split("/").filter(Boolean), [], !1);
        }
        smoosh() {
          return this._smoosh();
        }
        _smoosh(e) {
          void 0 === e && (e = "/");
          let t = [...this.children.keys()].sort();
          null !== this.slugName && t.splice(t.indexOf("[]"), 1),
            null !== this.restSlugName && t.splice(t.indexOf("[...]"), 1),
            null !== this.optionalRestSlugName &&
              t.splice(t.indexOf("[[...]]"), 1);
          let n = t
            .map((t) => this.children.get(t)._smoosh("" + e + t + "/"))
            .reduce((e, t) => [...e, ...t], []);
          if (
            (null !== this.slugName &&
              n.push(
                ...this.children
                  .get("[]")
                  ._smoosh(e + "[" + this.slugName + "]/")
              ),
            !this.placeholder)
          ) {
            let t = "/" === e ? "/" : e.slice(0, -1);
            if (null != this.optionalRestSlugName)
              throw Error(
                'You cannot define a route with the same specificity as a optional catch-all route ("' +
                  t +
                  '" and "' +
                  t +
                  "[[..." +
                  this.optionalRestSlugName +
                  ']]").'
              );
            n.unshift(t);
          }
          return (
            null !== this.restSlugName &&
              n.push(
                ...this.children
                  .get("[...]")
                  ._smoosh(e + "[..." + this.restSlugName + "]/")
              ),
            null !== this.optionalRestSlugName &&
              n.push(
                ...this.children
                  .get("[[...]]")
                  ._smoosh(e + "[[..." + this.optionalRestSlugName + "]]/")
              ),
            n
          );
        }
        _insert(e, t, r) {
          if (0 === e.length) {
            this.placeholder = !1;
            return;
          }
          if (r) throw Error("Catch-all must be the last part of the URL.");
          let o = e[0];
          if (o.startsWith("[") && o.endsWith("]")) {
            let n = o.slice(1, -1),
              l = !1;
            if (
              (n.startsWith("[") &&
                n.endsWith("]") &&
                ((n = n.slice(1, -1)), (l = !0)),
              n.startsWith("...") && ((n = n.substring(3)), (r = !0)),
              n.startsWith("[") || n.endsWith("]"))
            )
              throw Error(
                "Segment names may not start or end with extra brackets ('" +
                  n +
                  "')."
              );
            if (n.startsWith("."))
              throw Error(
                "Segment names may not start with erroneous periods ('" +
                  n +
                  "')."
              );
            function i(e, n) {
              if (null !== e && e !== n)
                throw Error(
                  "You cannot use different slug names for the same dynamic path ('" +
                    e +
                    "' !== '" +
                    n +
                    "')."
                );
              t.forEach((e) => {
                if (e === n)
                  throw Error(
                    'You cannot have the same slug name "' +
                      n +
                      '" repeat within a single dynamic path'
                  );
                if (e.replace(/\W/g, "") === o.replace(/\W/g, ""))
                  throw Error(
                    'You cannot have the slug names "' +
                      e +
                      '" and "' +
                      n +
                      '" differ only by non-word symbols within a single dynamic path'
                  );
              }),
                t.push(n);
            }
            if (r) {
              if (l) {
                if (null != this.restSlugName)
                  throw Error(
                    'You cannot use both an required and optional catch-all route at the same level ("[...' +
                      this.restSlugName +
                      ']" and "' +
                      e[0] +
                      '" ).'
                  );
                i(this.optionalRestSlugName, n),
                  (this.optionalRestSlugName = n),
                  (o = "[[...]]");
              } else {
                if (null != this.optionalRestSlugName)
                  throw Error(
                    'You cannot use both an optional and required catch-all route at the same level ("[[...' +
                      this.optionalRestSlugName +
                      ']]" and "' +
                      e[0] +
                      '").'
                  );
                i(this.restSlugName, n), (this.restSlugName = n), (o = "[...]");
              }
            } else {
              if (l)
                throw Error(
                  'Optional route parameters are not yet supported ("' +
                    e[0] +
                    '").'
                );
              i(this.slugName, n), (this.slugName = n), (o = "[]");
            }
          }
          this.children.has(o) || this.children.set(o, new n()),
            this.children.get(o)._insert(e.slice(1), t, r);
        }
        constructor() {
          (this.placeholder = !0),
            (this.children = new Map()),
            (this.slugName = null),
            (this.restSlugName = null),
            (this.optionalRestSlugName = null);
        }
      }
      function r(e) {
        let t = new n();
        return e.forEach((e) => t.insert(e)), t.smoosh();
      }
    },
    5960: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let r = n(2265),
        o = "undefined" == typeof window,
        i = o ? () => {} : r.useLayoutEffect,
        l = o ? () => {} : r.useEffect;
      function a(e) {
        let { headManager: t, reduceComponentsToState: n } = e;
        function a() {
          if (t && t.mountedInstances) {
            let o = r.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean)
            );
            t.updateHead(n(o, e));
          }
        }
        if (o) {
          var u;
          null == t || null == (u = t.mountedInstances) || u.add(e.children),
            a();
        }
        return (
          i(() => {
            var n;
            return (
              null == t ||
                null == (n = t.mountedInstances) ||
                n.add(e.children),
              () => {
                var n;
                null == t ||
                  null == (n = t.mountedInstances) ||
                  n.delete(e.children);
              }
            );
          }),
          i(
            () => (
              t && (t._pendingUpdate = a),
              () => {
                t && (t._pendingUpdate = a);
              }
            )
          ),
          l(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    3461: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          DecodeError: function () {
            return m;
          },
          MiddlewareNotFoundError: function () {
            return b;
          },
          MissingStaticPage: function () {
            return v;
          },
          NormalizeError: function () {
            return h;
          },
          PageNotFoundError: function () {
            return g;
          },
          SP: function () {
            return f;
          },
          ST: function () {
            return p;
          },
          WEB_VITALS: function () {
            return n;
          },
          execOnce: function () {
            return r;
          },
          getDisplayName: function () {
            return u;
          },
          getLocationOrigin: function () {
            return l;
          },
          getURL: function () {
            return a;
          },
          isAbsoluteUrl: function () {
            return i;
          },
          isResSent: function () {
            return s;
          },
          loadGetInitialProps: function () {
            return d;
          },
          normalizeRepeatedSlashes: function () {
            return c;
          },
          stringifyError: function () {
            return y;
          },
        });
      let n = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function r(e) {
        let t,
          n = !1;
        return function () {
          for (var r = arguments.length, o = Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          return n || ((n = !0), (t = e(...o))), t;
        };
      }
      let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        i = (e) => o.test(e);
      function l() {
        let { protocol: e, hostname: t, port: n } = window.location;
        return e + "//" + t + (n ? ":" + n : "");
      }
      function a() {
        let { href: e } = window.location,
          t = l();
        return e.substring(t.length);
      }
      function u(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
      }
      function s(e) {
        return e.finished || e.headersSent;
      }
      function c(e) {
        let t = e.split("?");
        return (
          t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
          (t[1] ? "?" + t.slice(1).join("?") : "")
        );
      }
      async function d(e, t) {
        let n = t.res || (t.ctx && t.ctx.res);
        if (!e.getInitialProps)
          return t.ctx && t.Component
            ? { pageProps: await d(t.Component, t.ctx) }
            : {};
        let r = await e.getInitialProps(t);
        if (n && s(n)) return r;
        if (!r)
          throw Error(
            '"' +
              u(e) +
              '.getInitialProps()" should resolve to an object. But found "' +
              r +
              '" instead.'
          );
        return r;
      }
      let f = "undefined" != typeof performance,
        p =
          f &&
          ["mark", "measure", "getEntriesByName"].every(
            (e) => "function" == typeof performance[e]
          );
      class m extends Error {}
      class h extends Error {}
      class g extends Error {
        constructor(e) {
          super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + e);
        }
      }
      class v extends Error {
        constructor(e, t) {
          super(),
            (this.message =
              "Failed to load static file for page: " + e + " " + t);
        }
      }
      class b extends Error {
        constructor() {
          super(),
            (this.code = "ENOENT"),
            (this.message = "Cannot find the middleware module");
        }
      }
      function y(e) {
        return JSON.stringify({ message: e.message, stack: e.stack });
      }
    },
    1823: function (e, t, n) {
      "use strict";
      n.d(t, {
        Av: function () {
          return l;
        },
        pF: function () {
          return r;
        },
        xv: function () {
          return i;
        },
        zi: function () {
          return o;
        },
      });
      var r = "right-scroll-bar-position",
        o = "width-before-scroll-bar",
        i = "with-scroll-bars-hidden",
        l = "--removed-body-scroll-bar-size";
    },
    5973: function (e, t, n) {
      "use strict";
      n.d(t, {
        jp: function () {
          return h;
        },
      });
      var r = n(2265),
        o = n(8039),
        i = n(1823),
        l = { left: 0, top: 0, right: 0, gap: 0 },
        a = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        u = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [a(n), a(r), a(o)];
        },
        s = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return l;
          var t = u(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        c = (0, o.Ws)(),
        d = "data-scroll-locked",
        f = function (e, t, n, r) {
          var o = e.left,
            l = e.top,
            a = e.right,
            u = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat(i.xv, " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  body[")
              .concat(d, "] {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(l, "px;\n    padding-right: ")
                      .concat(
                        a,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(u, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(u, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(i.pF, " {\n    right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(i.zi, " {\n    margin-right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(i.pF, " .")
              .concat(i.pF, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(i.zi, " .")
              .concat(i.zi, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body[")
              .concat(d, "] {\n    ")
              .concat(i.Av, ": ")
              .concat(u, "px;\n  }\n")
          );
        },
        p = function () {
          var e = parseInt(document.body.getAttribute(d) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        m = function () {
          r.useEffect(function () {
            return (
              document.body.setAttribute(d, (p() + 1).toString()),
              function () {
                var e = p() - 1;
                e <= 0
                  ? document.body.removeAttribute(d)
                  : document.body.setAttribute(d, e.toString());
              }
            );
          }, []);
        },
        h = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            o = e.gapMode,
            i = void 0 === o ? "margin" : o;
          m();
          var l = r.useMemo(
            function () {
              return s(i);
            },
            [i]
          );
          return r.createElement(c, {
            styles: f(l, !t, i, n ? "" : "!important"),
          });
        };
    },
    8039: function (e, t, n) {
      "use strict";
      n.d(t, {
        Ws: function () {
          return a;
        },
      });
      var r,
        o = n(2265),
        i = function () {
          var e = 0,
            t = null;
          return {
            add: function (o) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = r || n.nc;
                  return t && e.setAttribute("nonce", t), e;
                })())
              ) {
                var i, l;
                (i = t).styleSheet
                  ? (i.styleSheet.cssText = o)
                  : i.appendChild(document.createTextNode(o)),
                  (l = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(l);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        l = function () {
          var e = i();
          return function (t, n) {
            o.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n]
            );
          };
        },
        a = function () {
          var e = l();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        };
    },
    3227: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(2265),
        o = n(42),
        i = n.n(o);
      function l(e, t) {
        var n = (0, r.useState)(!1),
          o = n[0],
          l = n[1],
          a = t && t.successDuration;
        return (
          (0, r.useEffect)(
            function () {
              if (o && a) {
                var e = setTimeout(function () {
                  l(!1);
                }, a);
                return function () {
                  clearTimeout(e);
                };
              }
            },
            [o, a]
          ),
          [
            o,
            function () {
              l(i()(e));
            },
          ]
        );
      }
    },
    5786: function (e) {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var t = document.activeElement, n = [], r = 0;
          r < e.rangeCount;
          r++
        )
          n.push(e.getRangeAt(r));
        switch (t.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            t.blur();
            break;
          default:
            t = null;
        }
        return (
          e.removeAllRanges(),
          function () {
            "Caret" === e.type && e.removeAllRanges(),
              e.rangeCount ||
                n.forEach(function (t) {
                  e.addRange(t);
                }),
              t && t.focus();
          }
        );
      };
    },
    8215: function (e, t, n) {
      "use strict";
      n.d(t, {
        q: function () {
          return a;
        },
      });
      var r = n(2265);
      function o(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e;
      }
      var i = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect,
        l = new WeakMap();
      function a(e, t) {
        var n,
          a,
          u,
          s =
            ((n = t || null),
            (a = function (t) {
              return e.forEach(function (e) {
                return o(e, t);
              });
            }),
            ((u = (0, r.useState)(function () {
              return {
                value: n,
                callback: a,
                facade: {
                  get current() {
                    return u.value;
                  },
                  set current(value) {
                    var e = u.value;
                    e !== value && ((u.value = value), u.callback(value, e));
                  },
                },
              };
            })[0]).callback = a),
            u.facade);
        return (
          i(
            function () {
              var t = l.get(s);
              if (t) {
                var n = new Set(t),
                  r = new Set(e),
                  i = s.current;
                n.forEach(function (e) {
                  r.has(e) || o(e, null);
                }),
                  r.forEach(function (e) {
                    n.has(e) || o(e, i);
                  });
              }
              l.set(s, e);
            },
            [e]
          ),
          s
        );
      }
    },
    8776: function (e, t, n) {
      "use strict";
      n.d(t, {
        L: function () {
          return l;
        },
      });
      var r = n(1735),
        o = n(2265),
        i = function (e) {
          var t = e.sideCar,
            n = (0, r._T)(e, ["sideCar"]);
          if (!t)
            throw Error(
              "Sidecar: please provide `sideCar` property to import the right car"
            );
          var i = t.read();
          if (!i) throw Error("Sidecar medium not found");
          return o.createElement(i, (0, r.pi)({}, n));
        };
      function l(e, t) {
        return e.useMedium(t), i;
      }
      i.isSideCarExport = !0;
    },
    5411: function (e, t, n) {
      "use strict";
      n.d(t, {
        _: function () {
          return i;
        },
      });
      var r = n(1735);
      function o(e) {
        return e;
      }
      function i(e) {
        void 0 === e && (e = {});
        var t,
          n,
          i,
          l =
            (void 0 === t && (t = o),
            (n = []),
            (i = !1),
            {
              read: function () {
                if (i)
                  throw Error(
                    "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                  );
                return n.length ? n[n.length - 1] : null;
              },
              useMedium: function (e) {
                var r = t(e, i);
                return (
                  n.push(r),
                  function () {
                    n = n.filter(function (e) {
                      return e !== r;
                    });
                  }
                );
              },
              assignSyncMedium: function (e) {
                for (i = !0; n.length; ) {
                  var t = n;
                  (n = []), t.forEach(e);
                }
                n = {
                  push: function (t) {
                    return e(t);
                  },
                  filter: function () {
                    return n;
                  },
                };
              },
              assignMedium: function (e) {
                i = !0;
                var t = [];
                if (n.length) {
                  var r = n;
                  (n = []), r.forEach(e), (t = n);
                }
                var o = function () {
                    var n = t;
                    (t = []), n.forEach(e);
                  },
                  l = function () {
                    return Promise.resolve().then(o);
                  };
                l(),
                  (n = {
                    push: function (e) {
                      t.push(e), l();
                    },
                    filter: function (e) {
                      return (t = t.filter(e)), n;
                    },
                  });
              },
            });
        return (l.options = (0, r.pi)({ async: !0, ssr: !1 }, e)), l;
      }
    },
    8149: function (e, t, n) {
      "use strict";
      function r(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
      n.d(t, {
        M: function () {
          return r;
        },
      });
    },
    1584: function (e, t, n) {
      "use strict";
      n.d(t, {
        F: function () {
          return o;
        },
        e: function () {
          return i;
        },
      });
      var r = n(2265);
      function o(...e) {
        return (t) =>
          e.forEach((e) => {
            "function" == typeof e ? e(t) : null != e && (e.current = t);
          });
      }
      function i(...e) {
        return r.useCallback(o(...e), e);
      }
    },
    8324: function (e, t, n) {
      "use strict";
      n.d(t, {
        b: function () {
          return l;
        },
        k: function () {
          return i;
        },
      });
      var r = n(2265),
        o = n(7437);
      function i(e, t) {
        let n = r.createContext(t);
        function i(e) {
          let { children: t, ...i } = e,
            l = r.useMemo(() => i, Object.values(i));
          return (0, o.jsx)(n.Provider, { value: l, children: t });
        }
        return (
          (i.displayName = e + "Provider"),
          [
            i,
            function (o) {
              let i = r.useContext(n);
              if (i) return i;
              if (void 0 !== t) return t;
              throw Error(`\`${o}\` must be used within \`${e}\``);
            },
          ]
        );
      }
      function l(e, t = []) {
        let n = [],
          i = () => {
            let t = n.map((e) => r.createContext(e));
            return function (n) {
              let o = n?.[e] || t;
              return r.useMemo(
                () => ({ [`__scope${e}`]: { ...n, [e]: o } }),
                [n, o]
              );
            };
          };
        return (
          (i.scopeName = e),
          [
            function (t, i) {
              let l = r.createContext(i),
                a = n.length;
              function u(t) {
                let { scope: n, children: i, ...u } = t,
                  s = n?.[e][a] || l,
                  c = r.useMemo(() => u, Object.values(u));
                return (0, o.jsx)(s.Provider, { value: c, children: i });
              }
              return (
                (n = [...n, i]),
                (u.displayName = t + "Provider"),
                [
                  u,
                  function (n, o) {
                    let u = o?.[e][a] || l,
                      s = r.useContext(u);
                    if (s) return s;
                    if (void 0 !== i) return i;
                    throw Error(`\`${n}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let n = () => {
                let n = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let o = n.reduce((t, { useScope: n, scopeName: r }) => {
                    let o = n(e)[`__scope${r}`];
                    return { ...t, ...o };
                  }, {});
                  return r.useMemo(
                    () => ({ [`__scope${t.scopeName}`]: o }),
                    [o]
                  );
                };
              };
              return (n.scopeName = t.scopeName), n;
            })(i, ...t),
          ]
        );
      }
    },
    8091: function (e, t, n) {
      "use strict";
      n.d(t, {
        x8: function () {
          return eW;
        },
        VY: function () {
          return eL;
        },
        dk: function () {
          return eI;
        },
        aV: function () {
          return eT;
        },
        h_: function () {
          return eA;
        },
        fC: function () {
          return eM;
        },
        Dx: function () {
          return eD;
        },
        xz: function () {
          return e_;
        },
      });
      var r,
        o = n(2265),
        i = n(8149),
        l = n(1584),
        a = n(8324),
        u = n(3201),
        s = n(1715),
        c = n(5171),
        d = n(5137),
        f = n(6486),
        p = n(7437),
        m = "dismissableLayer.update",
        h = o.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        g = o.forwardRef((e, t) => {
          var n, a;
          let {
              disableOutsidePointerEvents: u = !1,
              onEscapeKeyDown: s,
              onPointerDownOutside: g,
              onFocusOutside: y,
              onInteractOutside: w,
              onDismiss: x,
              ...E
            } = e,
            C = o.useContext(h),
            [R, P] = o.useState(null),
            S =
              null !== (a = null == R ? void 0 : R.ownerDocument) &&
              void 0 !== a
                ? a
                : null === (n = globalThis) || void 0 === n
                ? void 0
                : n.document,
            [, O] = o.useState({}),
            j = (0, l.e)(t, (e) => P(e)),
            N = Array.from(C.layers),
            [k] = [...C.layersWithOutsidePointerEventsDisabled].slice(-1),
            M = N.indexOf(k),
            _ = R ? N.indexOf(R) : -1,
            A = C.layersWithOutsidePointerEventsDisabled.size > 0,
            T = _ >= M,
            L = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = (0, d.W)(e),
                i = o.useRef(!1),
                l = o.useRef(() => {});
              return (
                o.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !i.current) {
                        let t = function () {
                            b("dismissableLayer.pointerDownOutside", r, o, {
                              discrete: !0,
                            });
                          },
                          o = { originalEvent: e };
                        "touch" === e.pointerType
                          ? (n.removeEventListener("click", l.current),
                            (l.current = t),
                            n.addEventListener("click", l.current, {
                              once: !0,
                            }))
                          : t();
                      } else n.removeEventListener("click", l.current);
                      i.current = !1;
                    },
                    t = window.setTimeout(() => {
                      n.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(t),
                      n.removeEventListener("pointerdown", e),
                      n.removeEventListener("click", l.current);
                  };
                }, [n, r]),
                { onPointerDownCapture: () => (i.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...C.branches].some((e) => e.contains(t));
              !T ||
                n ||
                (null == g || g(e),
                null == w || w(e),
                e.defaultPrevented || null == x || x());
            }, S),
            D = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = (0, d.W)(e),
                i = o.useRef(!1);
              return (
                o.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !i.current &&
                      b(
                        "dismissableLayer.focusOutside",
                        r,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    n.addEventListener("focusin", e),
                    () => n.removeEventListener("focusin", e)
                  );
                }, [n, r]),
                {
                  onFocusCapture: () => (i.current = !0),
                  onBlurCapture: () => (i.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...C.branches].some((e) => e.contains(t)) ||
                (null == y || y(e),
                null == w || w(e),
                e.defaultPrevented || null == x || x());
            }, S);
          return (
            (0, f.e)((e) => {
              _ !== C.layers.size - 1 ||
                (null == s || s(e),
                !e.defaultPrevented && x && (e.preventDefault(), x()));
            }, S),
            o.useEffect(() => {
              if (R)
                return (
                  u &&
                    (0 === C.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = S.body.style.pointerEvents),
                      (S.body.style.pointerEvents = "none")),
                    C.layersWithOutsidePointerEventsDisabled.add(R)),
                  C.layers.add(R),
                  v(),
                  () => {
                    u &&
                      1 === C.layersWithOutsidePointerEventsDisabled.size &&
                      (S.body.style.pointerEvents = r);
                  }
                );
            }, [R, S, u, C]),
            o.useEffect(
              () => () => {
                R &&
                  (C.layers.delete(R),
                  C.layersWithOutsidePointerEventsDisabled.delete(R),
                  v());
              },
              [R, C]
            ),
            o.useEffect(() => {
              let e = () => O({});
              return (
                document.addEventListener(m, e),
                () => document.removeEventListener(m, e)
              );
            }, []),
            (0, p.jsx)(c.WV.div, {
              ...E,
              ref: j,
              style: {
                pointerEvents: A ? (T ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: (0, i.M)(e.onFocusCapture, D.onFocusCapture),
              onBlurCapture: (0, i.M)(e.onBlurCapture, D.onBlurCapture),
              onPointerDownCapture: (0, i.M)(
                e.onPointerDownCapture,
                L.onPointerDownCapture
              ),
            })
          );
        });
      function v() {
        let e = new CustomEvent(m);
        document.dispatchEvent(e);
      }
      function b(e, t, n, r) {
        let { discrete: o } = r,
          i = n.originalEvent.target,
          l = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && i.addEventListener(e, t, { once: !0 }),
          o ? (0, c.jH)(i, l) : i.dispatchEvent(l);
      }
      (g.displayName = "DismissableLayer"),
        (o.forwardRef((e, t) => {
          let n = o.useContext(h),
            r = o.useRef(null),
            i = (0, l.e)(t, r);
          return (
            o.useEffect(() => {
              let e = r.current;
              if (e)
                return (
                  n.branches.add(e),
                  () => {
                    n.branches.delete(e);
                  }
                );
            }, [n.branches]),
            (0, p.jsx)(c.WV.div, { ...e, ref: i })
          );
        }).displayName = "DismissableLayerBranch");
      var y = n(467),
        w = n(4887),
        x = n(1336),
        E = o.forwardRef((e, t) => {
          var n, r;
          let { container: i, ...l } = e,
            [a, u] = o.useState(!1);
          (0, x.b)(() => u(!0), []);
          let s =
            i ||
            (a &&
              (null === (r = globalThis) || void 0 === r
                ? void 0
                : null === (n = r.document) || void 0 === n
                ? void 0
                : n.body));
          return s
            ? w.createPortal((0, p.jsx)(c.WV.div, { ...l, ref: t }), s)
            : null;
        });
      E.displayName = "Portal";
      var C = (e) => {
        var t, n;
        let r, i;
        let { present: a, children: u } = e,
          s = (function (e) {
            var t, n;
            let [r, i] = o.useState(),
              l = o.useRef({}),
              a = o.useRef(e),
              u = o.useRef("none"),
              [s, c] =
                ((t = e ? "mounted" : "unmounted"),
                (n = {
                  mounted: {
                    UNMOUNT: "unmounted",
                    ANIMATION_OUT: "unmountSuspended",
                  },
                  unmountSuspended: {
                    MOUNT: "mounted",
                    ANIMATION_END: "unmounted",
                  },
                  unmounted: { MOUNT: "mounted" },
                }),
                o.useReducer((e, t) => {
                  let r = n[e][t];
                  return null != r ? r : e;
                }, t));
            return (
              o.useEffect(() => {
                let e = R(l.current);
                u.current = "mounted" === s ? e : "none";
              }, [s]),
              (0, x.b)(() => {
                let t = l.current,
                  n = a.current;
                if (n !== e) {
                  let r = u.current,
                    o = R(t);
                  e
                    ? c("MOUNT")
                    : "none" === o ||
                      (null == t ? void 0 : t.display) === "none"
                    ? c("UNMOUNT")
                    : n && r !== o
                    ? c("ANIMATION_OUT")
                    : c("UNMOUNT"),
                    (a.current = e);
                }
              }, [e, c]),
              (0, x.b)(() => {
                if (r) {
                  let e = (e) => {
                      let t = R(l.current).includes(e.animationName);
                      e.target === r &&
                        t &&
                        w.flushSync(() => c("ANIMATION_END"));
                    },
                    t = (e) => {
                      e.target === r && (u.current = R(l.current));
                    };
                  return (
                    r.addEventListener("animationstart", t),
                    r.addEventListener("animationcancel", e),
                    r.addEventListener("animationend", e),
                    () => {
                      r.removeEventListener("animationstart", t),
                        r.removeEventListener("animationcancel", e),
                        r.removeEventListener("animationend", e);
                    }
                  );
                }
                c("ANIMATION_END");
              }, [r, c]),
              {
                isPresent: ["mounted", "unmountSuspended"].includes(s),
                ref: o.useCallback((e) => {
                  e && (l.current = getComputedStyle(e)), i(e);
                }, []),
              }
            );
          })(a),
          c =
            "function" == typeof u
              ? u({ present: s.isPresent })
              : o.Children.only(u),
          d = (0, l.e)(
            s.ref,
            (r =
              null === (t = Object.getOwnPropertyDescriptor(c.props, "ref")) ||
              void 0 === t
                ? void 0
                : t.get) &&
              "isReactWarning" in r &&
              r.isReactWarning
              ? c.ref
              : (r =
                  null === (n = Object.getOwnPropertyDescriptor(c, "ref")) ||
                  void 0 === n
                    ? void 0
                    : n.get) &&
                "isReactWarning" in r &&
                r.isReactWarning
              ? c.props.ref
              : c.props.ref || c.ref
          );
        return "function" == typeof u || s.isPresent
          ? o.cloneElement(c, { ref: d })
          : null;
      };
      function R(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      C.displayName = "Presence";
      var P = 0;
      function S() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.cssText =
            "outline: none; opacity: 0; position: fixed; pointer-events: none"),
          e
        );
      }
      var O = n(1735),
        j = n(1823),
        N = n(8215),
        k = (0, n(5411)._)(),
        M = function () {},
        _ = o.forwardRef(function (e, t) {
          var n = o.useRef(null),
            r = o.useState({
              onScrollCapture: M,
              onWheelCapture: M,
              onTouchMoveCapture: M,
            }),
            i = r[0],
            l = r[1],
            a = e.forwardProps,
            u = e.children,
            s = e.className,
            c = e.removeScrollBar,
            d = e.enabled,
            f = e.shards,
            p = e.sideCar,
            m = e.noIsolation,
            h = e.inert,
            g = e.allowPinchZoom,
            v = e.as,
            b = e.gapMode,
            y = (0, O._T)(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            w = (0, N.q)([n, t]),
            x = (0, O.pi)((0, O.pi)({}, y), i);
          return o.createElement(
            o.Fragment,
            null,
            d &&
              o.createElement(p, {
                sideCar: k,
                removeScrollBar: c,
                shards: f,
                noIsolation: m,
                inert: h,
                setCallbacks: l,
                allowPinchZoom: !!g,
                lockRef: n,
                gapMode: b,
              }),
            a
              ? o.cloneElement(
                  o.Children.only(u),
                  (0, O.pi)((0, O.pi)({}, x), { ref: w })
                )
              : o.createElement(
                  void 0 === v ? "div" : v,
                  (0, O.pi)({}, x, { className: s, ref: w }),
                  u
                )
          );
        });
      (_.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (_.classNames = { fullWidth: j.zi, zeroRight: j.pF });
      var A = n(8776),
        T = n(5973),
        L = n(8039),
        D = !1;
      if ("undefined" != typeof window)
        try {
          var I = Object.defineProperty({}, "passive", {
            get: function () {
              return (D = !0), !0;
            },
          });
          window.addEventListener("test", I, I),
            window.removeEventListener("test", I, I);
        } catch (e) {
          D = !1;
        }
      var W = !!D && { passive: !1 },
        z = function (e, t) {
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            !(
              n.overflowY === n.overflowX &&
              "TEXTAREA" !== e.tagName &&
              "visible" === n[t]
            )
          );
        },
        F = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              U(e, r))
            ) {
              var o = B(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        U = function (e, t) {
          return "v" === e ? z(t, "overflowY") : z(t, "overflowX");
        },
        B = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        V = function (e, t, n, r, o) {
          var i,
            l =
              ((i = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === i ? -1 : 1),
            a = l * r,
            u = n.target,
            s = t.contains(u),
            c = !1,
            d = a > 0,
            f = 0,
            p = 0;
          do {
            var m = B(e, u),
              h = m[0],
              g = m[1] - m[2] - l * h;
            (h || g) && U(e, u) && ((f += g), (p += h)),
              u instanceof ShadowRoot ? (u = u.host) : (u = u.parentNode);
          } while (
            (!s && u !== document.body) ||
            (s && (t.contains(u) || t === u))
          );
          return (
            d && ((o && 1 > Math.abs(f)) || (!o && a > f))
              ? (c = !0)
              : !d && ((o && 1 > Math.abs(p)) || (!o && -a > p)) && (c = !0),
            c
          );
        },
        H = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        $ = function (e) {
          return [e.deltaX, e.deltaY];
        },
        Y = function (e) {
          return e && "current" in e ? e.current : e;
        },
        q = 0,
        K = [],
        G = (0, A.L)(k, function (e) {
          var t = o.useRef([]),
            n = o.useRef([0, 0]),
            r = o.useRef(),
            i = o.useState(q++)[0],
            l = o.useState(L.Ws)[0],
            a = o.useRef(e);
          o.useEffect(
            function () {
              a.current = e;
            },
            [e]
          ),
            o.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add("block-interactivity-".concat(i));
                  var t = (0, O.ev)(
                    [e.lockRef.current],
                    (e.shards || []).map(Y),
                    !0
                  ).filter(Boolean);
                  return (
                    t.forEach(function (e) {
                      return e.classList.add("allow-interactivity-".concat(i));
                    }),
                    function () {
                      document.body.classList.remove(
                        "block-interactivity-".concat(i)
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            "allow-interactivity-".concat(i)
                          );
                        });
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards]
            );
          var u = o.useCallback(function (e, t) {
              if ("touches" in e && 2 === e.touches.length)
                return !a.current.allowPinchZoom;
              var o,
                i = H(e),
                l = n.current,
                u = "deltaX" in e ? e.deltaX : l[0] - i[0],
                s = "deltaY" in e ? e.deltaY : l[1] - i[1],
                c = e.target,
                d = Math.abs(u) > Math.abs(s) ? "h" : "v";
              if ("touches" in e && "h" === d && "range" === c.type) return !1;
              var f = F(d, c);
              if (!f) return !0;
              if (
                (f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = F(d, c))), !f)
              )
                return !1;
              if (
                (!r.current &&
                  "changedTouches" in e &&
                  (u || s) &&
                  (r.current = o),
                !o)
              )
                return !0;
              var p = r.current || o;
              return V(p, t, e, "h" === p ? u : s, !0);
            }, []),
            s = o.useCallback(function (e) {
              if (K.length && K[K.length - 1] === l) {
                var n = "deltaY" in e ? $(e) : H(e),
                  r = t.current.filter(function (t) {
                    var r;
                    return (
                      t.name === e.type &&
                      (t.target === e.target || e.target === t.shadowParent) &&
                      (r = t.delta)[0] === n[0] &&
                      r[1] === n[1]
                    );
                  })[0];
                if (r && r.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!r) {
                  var o = (a.current.shards || [])
                    .map(Y)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? u(e, o[0]) : !a.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            c = o.useCallback(function (e, n, r, o) {
              var i = {
                name: e,
                delta: n,
                target: r,
                should: o,
                shadowParent: (function (e) {
                  for (var t = null; null !== e; )
                    e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                      (e = e.parentNode);
                  return t;
                })(r),
              };
              t.current.push(i),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== i;
                  });
                }, 1);
            }, []),
            d = o.useCallback(function (e) {
              (n.current = H(e)), (r.current = void 0);
            }, []),
            f = o.useCallback(function (t) {
              c(t.type, $(t), t.target, u(t, e.lockRef.current));
            }, []),
            p = o.useCallback(function (t) {
              c(t.type, H(t), t.target, u(t, e.lockRef.current));
            }, []);
          o.useEffect(function () {
            return (
              K.push(l),
              e.setCallbacks({
                onScrollCapture: f,
                onWheelCapture: f,
                onTouchMoveCapture: p,
              }),
              document.addEventListener("wheel", s, W),
              document.addEventListener("touchmove", s, W),
              document.addEventListener("touchstart", d, W),
              function () {
                (K = K.filter(function (e) {
                  return e !== l;
                })),
                  document.removeEventListener("wheel", s, W),
                  document.removeEventListener("touchmove", s, W),
                  document.removeEventListener("touchstart", d, W);
              }
            );
          }, []);
          var m = e.removeScrollBar,
            h = e.inert;
          return o.createElement(
            o.Fragment,
            null,
            h
              ? o.createElement(l, {
                  styles: "\n  .block-interactivity-"
                    .concat(
                      i,
                      " {pointer-events: none;}\n  .allow-interactivity-"
                    )
                    .concat(i, " {pointer-events: all;}\n"),
                })
              : null,
            m ? o.createElement(T.jp, { gapMode: e.gapMode }) : null
          );
        }),
        X = o.forwardRef(function (e, t) {
          return o.createElement(_, (0, O.pi)({}, e, { ref: t, sideCar: G }));
        });
      X.classNames = _.classNames;
      var Z = n(8369),
        Q = n(1538),
        J = "Dialog",
        [ee, et] = (0, a.b)(J),
        [en, er] = ee(J),
        eo = (e) => {
          let {
              __scopeDialog: t,
              children: n,
              open: r,
              defaultOpen: i,
              onOpenChange: l,
              modal: a = !0,
            } = e,
            c = o.useRef(null),
            d = o.useRef(null),
            [f = !1, m] = (0, s.T)({ prop: r, defaultProp: i, onChange: l });
          return (0, p.jsx)(en, {
            scope: t,
            triggerRef: c,
            contentRef: d,
            contentId: (0, u.M)(),
            titleId: (0, u.M)(),
            descriptionId: (0, u.M)(),
            open: f,
            onOpenChange: m,
            onOpenToggle: o.useCallback(() => m((e) => !e), [m]),
            modal: a,
            children: n,
          });
        };
      eo.displayName = J;
      var ei = "DialogTrigger",
        el = o.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = er(ei, n),
            a = (0, l.e)(t, o.triggerRef);
          return (0, p.jsx)(c.WV.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": eP(o.open),
            ...r,
            ref: a,
            onClick: (0, i.M)(e.onClick, o.onOpenToggle),
          });
        });
      el.displayName = ei;
      var ea = "DialogPortal",
        [eu, es] = ee(ea, { forceMount: void 0 }),
        ec = (e) => {
          let {
              __scopeDialog: t,
              forceMount: n,
              children: r,
              container: i,
            } = e,
            l = er(ea, t);
          return (0, p.jsx)(eu, {
            scope: t,
            forceMount: n,
            children: o.Children.map(r, (e) =>
              (0, p.jsx)(C, {
                present: n || l.open,
                children: (0, p.jsx)(E, {
                  asChild: !0,
                  container: i,
                  children: e,
                }),
              })
            ),
          });
        };
      ec.displayName = ea;
      var ed = "DialogOverlay",
        ef = o.forwardRef((e, t) => {
          let n = es(ed, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            i = er(ed, e.__scopeDialog);
          return i.modal
            ? (0, p.jsx)(C, {
                present: r || i.open,
                children: (0, p.jsx)(ep, { ...o, ref: t }),
              })
            : null;
        });
      ef.displayName = ed;
      var ep = o.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = er(ed, n);
          return (0, p.jsx)(X, {
            as: Q.g7,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, p.jsx)(c.WV.div, {
              "data-state": eP(o.open),
              ...r,
              ref: t,
              style: { pointerEvents: "auto", ...r.style },
            }),
          });
        }),
        em = "DialogContent",
        eh = o.forwardRef((e, t) => {
          let n = es(em, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            i = er(em, e.__scopeDialog);
          return (0, p.jsx)(C, {
            present: r || i.open,
            children: i.modal
              ? (0, p.jsx)(eg, { ...o, ref: t })
              : (0, p.jsx)(ev, { ...o, ref: t }),
          });
        });
      eh.displayName = em;
      var eg = o.forwardRef((e, t) => {
          let n = er(em, e.__scopeDialog),
            r = o.useRef(null),
            a = (0, l.e)(t, n.contentRef, r);
          return (
            o.useEffect(() => {
              let e = r.current;
              if (e) return (0, Z.Ry)(e);
            }, []),
            (0, p.jsx)(eb, {
              ...e,
              ref: a,
              trapFocus: n.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, i.M)(e.onCloseAutoFocus, (e) => {
                var t;
                e.preventDefault(),
                  null === (t = n.triggerRef.current) ||
                    void 0 === t ||
                    t.focus();
              }),
              onPointerDownOutside: (0, i.M)(e.onPointerDownOutside, (e) => {
                let t = e.detail.originalEvent,
                  n = 0 === t.button && !0 === t.ctrlKey;
                (2 === t.button || n) && e.preventDefault();
              }),
              onFocusOutside: (0, i.M)(e.onFocusOutside, (e) =>
                e.preventDefault()
              ),
            })
          );
        }),
        ev = o.forwardRef((e, t) => {
          let n = er(em, e.__scopeDialog),
            r = o.useRef(!1),
            i = o.useRef(!1);
          return (0, p.jsx)(eb, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
              var o, l;
              null === (o = e.onCloseAutoFocus) || void 0 === o || o.call(e, t),
                t.defaultPrevented ||
                  (r.current ||
                    null === (l = n.triggerRef.current) ||
                    void 0 === l ||
                    l.focus(),
                  t.preventDefault()),
                (r.current = !1),
                (i.current = !1);
            },
            onInteractOutside: (t) => {
              var o, l;
              null === (o = e.onInteractOutside) ||
                void 0 === o ||
                o.call(e, t),
                t.defaultPrevented ||
                  ((r.current = !0),
                  "pointerdown" !== t.detail.originalEvent.type ||
                    (i.current = !0));
              let a = t.target;
              (null === (l = n.triggerRef.current) || void 0 === l
                ? void 0
                : l.contains(a)) && t.preventDefault(),
                "focusin" === t.detail.originalEvent.type &&
                  i.current &&
                  t.preventDefault();
            },
          });
        }),
        eb = o.forwardRef((e, t) => {
          let {
              __scopeDialog: n,
              trapFocus: r,
              onOpenAutoFocus: i,
              onCloseAutoFocus: a,
              ...u
            } = e,
            s = er(em, n),
            c = o.useRef(null),
            d = (0, l.e)(t, c);
          return (
            o.useEffect(() => {
              var e, t;
              let n = document.querySelectorAll("[data-radix-focus-guard]");
              return (
                document.body.insertAdjacentElement(
                  "afterbegin",
                  null !== (e = n[0]) && void 0 !== e ? e : S()
                ),
                document.body.insertAdjacentElement(
                  "beforeend",
                  null !== (t = n[1]) && void 0 !== t ? t : S()
                ),
                P++,
                () => {
                  1 === P &&
                    document
                      .querySelectorAll("[data-radix-focus-guard]")
                      .forEach((e) => e.remove()),
                    P--;
                }
              );
            }, []),
            (0, p.jsxs)(p.Fragment, {
              children: [
                (0, p.jsx)(y.M, {
                  asChild: !0,
                  loop: !0,
                  trapped: r,
                  onMountAutoFocus: i,
                  onUnmountAutoFocus: a,
                  children: (0, p.jsx)(g, {
                    role: "dialog",
                    id: s.contentId,
                    "aria-describedby": s.descriptionId,
                    "aria-labelledby": s.titleId,
                    "data-state": eP(s.open),
                    ...u,
                    ref: d,
                    onDismiss: () => s.onOpenChange(!1),
                  }),
                }),
                (0, p.jsxs)(p.Fragment, {
                  children: [
                    (0, p.jsx)(eN, { titleId: s.titleId }),
                    (0, p.jsx)(ek, {
                      contentRef: c,
                      descriptionId: s.descriptionId,
                    }),
                  ],
                }),
              ],
            })
          );
        }),
        ey = "DialogTitle",
        ew = o.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = er(ey, n);
          return (0, p.jsx)(c.WV.h2, { id: o.titleId, ...r, ref: t });
        });
      ew.displayName = ey;
      var ex = "DialogDescription",
        eE = o.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = er(ex, n);
          return (0, p.jsx)(c.WV.p, { id: o.descriptionId, ...r, ref: t });
        });
      eE.displayName = ex;
      var eC = "DialogClose",
        eR = o.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = er(eC, n);
          return (0, p.jsx)(c.WV.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: (0, i.M)(e.onClick, () => o.onOpenChange(!1)),
          });
        });
      function eP(e) {
        return e ? "open" : "closed";
      }
      eR.displayName = eC;
      var eS = "DialogTitleWarning",
        [eO, ej] = (0, a.k)(eS, {
          contentName: em,
          titleName: ey,
          docsSlug: "dialog",
        }),
        eN = (e) => {
          let { titleId: t } = e,
            n = ej(eS),
            r = "`"
              .concat(n.contentName, "` requires a `")
              .concat(
                n.titleName,
                "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `"
              )
              .concat(
                n.titleName,
                "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/"
              )
              .concat(n.docsSlug);
          return (
            o.useEffect(() => {
              t && !document.getElementById(t) && console.error(r);
            }, [r, t]),
            null
          );
        },
        ek = (e) => {
          let { contentRef: t, descriptionId: n } = e,
            r = ej("DialogDescriptionWarning"),
            i =
              "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(
                r.contentName,
                "}."
              );
          return (
            o.useEffect(() => {
              var e;
              let r =
                null === (e = t.current) || void 0 === e
                  ? void 0
                  : e.getAttribute("aria-describedby");
              n && r && !document.getElementById(n) && console.warn(i);
            }, [i, t, n]),
            null
          );
        },
        eM = eo,
        e_ = el,
        eA = ec,
        eT = ef,
        eL = eh,
        eD = ew,
        eI = eE,
        eW = eR;
    },
    467: function (e, t, n) {
      "use strict";
      let r;
      n.d(t, {
        M: function () {
          return f;
        },
      });
      var o = n(2265),
        i = n(1584),
        l = n(5171),
        a = n(5137),
        u = n(7437),
        s = "focusScope.autoFocusOnMount",
        c = "focusScope.autoFocusOnUnmount",
        d = { bubbles: !1, cancelable: !0 },
        f = o.forwardRef((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: f,
              onUnmountAutoFocus: v,
              ...b
            } = e,
            [y, w] = o.useState(null),
            x = (0, a.W)(f),
            E = (0, a.W)(v),
            C = o.useRef(null),
            R = (0, i.e)(t, (e) => w(e)),
            P = o.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          o.useEffect(() => {
            if (r) {
              let e = function (e) {
                  if (P.paused || !y) return;
                  let t = e.target;
                  y.contains(t)
                    ? (C.current = t)
                    : h(C.current, { select: !0 });
                },
                t = function (e) {
                  if (P.paused || !y) return;
                  let t = e.relatedTarget;
                  null === t || y.contains(t) || h(C.current, { select: !0 });
                };
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && h(y);
              });
              return (
                y && n.observe(y, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    n.disconnect();
                }
              );
            }
          }, [r, y, P.paused]),
            o.useEffect(() => {
              if (y) {
                g.add(P);
                let e = document.activeElement;
                if (!y.contains(e)) {
                  let t = new CustomEvent(s, d);
                  y.addEventListener(s, x),
                    y.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e) {
                        let { select: t = !1 } =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          n = document.activeElement;
                        for (let r of e)
                          if (
                            (h(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        p(y).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && h(y));
                }
                return () => {
                  y.removeEventListener(s, x),
                    setTimeout(() => {
                      let t = new CustomEvent(c, d);
                      y.addEventListener(c, E),
                        y.dispatchEvent(t),
                        t.defaultPrevented ||
                          h(null != e ? e : document.body, { select: !0 }),
                        y.removeEventListener(c, E),
                        g.remove(P);
                    }, 0);
                };
              }
            }, [y, x, E, P]);
          let S = o.useCallback(
            (e) => {
              if ((!n && !r) || P.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
              if (t && o) {
                let t = e.currentTarget,
                  [r, i] = (function (e) {
                    let t = p(e);
                    return [m(t, e), m(t.reverse(), e)];
                  })(t);
                r && i
                  ? e.shiftKey || o !== i
                    ? e.shiftKey &&
                      o === r &&
                      (e.preventDefault(), n && h(i, { select: !0 }))
                    : (e.preventDefault(), n && h(r, { select: !0 }))
                  : o === t && e.preventDefault();
              }
            },
            [n, r, P.paused]
          );
          return (0, u.jsx)(l.WV.div, {
            tabIndex: -1,
            ...b,
            ref: R,
            onKeyDown: S,
          });
        });
      function p(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function m(e, t) {
        for (let n of e)
          if (
            !(function (e, t) {
              let { upTo: n } = t;
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === n || e !== n); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function h(e) {
        let { select: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              "select" in n &&
              t &&
              e.select();
        }
      }
      f.displayName = "FocusScope";
      var g =
        ((r = []),
        {
          add(e) {
            let t = r[0];
            e !== t && (null == t || t.pause()), (r = v(r, e)).unshift(e);
          },
          remove(e) {
            var t;
            null === (t = (r = v(r, e))[0]) || void 0 === t || t.resume();
          },
        });
      function v(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
    },
    3201: function (e, t, n) {
      "use strict";
      n.d(t, {
        M: function () {
          return u;
        },
      });
      var r,
        o = n(2265),
        i = n(1336),
        l = (r || (r = n.t(o, 2)))["useId".toString()] || (() => void 0),
        a = 0;
      function u(e) {
        let [t, n] = o.useState(l());
        return (
          (0, i.b)(() => {
            e || n((e) => e ?? String(a++));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
    },
    8328: function (e, t, n) {
      "use strict";
      n.d(t, {
        VY: function () {
          return tK;
        },
        h_: function () {
          return tq;
        },
        fC: function () {
          return t$;
        },
        xz: function () {
          return tY;
        },
      });
      var r,
        o = n(2265),
        i = n(8149),
        l = n(1584),
        a = n(7437),
        u = n(5171),
        s = n(5137),
        c = n(6486),
        d = "dismissableLayer.update",
        f = o.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        p = o.forwardRef((e, t) => {
          var n, p;
          let {
              disableOutsidePointerEvents: g = !1,
              onEscapeKeyDown: v,
              onPointerDownOutside: b,
              onFocusOutside: y,
              onInteractOutside: w,
              onDismiss: x,
              ...E
            } = e,
            C = o.useContext(f),
            [R, P] = o.useState(null),
            S =
              null !== (p = null == R ? void 0 : R.ownerDocument) &&
              void 0 !== p
                ? p
                : null === (n = globalThis) || void 0 === n
                ? void 0
                : n.document,
            [, O] = o.useState({}),
            j = (0, l.e)(t, (e) => P(e)),
            N = Array.from(C.layers),
            [k] = [...C.layersWithOutsidePointerEventsDisabled].slice(-1),
            M = N.indexOf(k),
            _ = R ? N.indexOf(R) : -1,
            A = C.layersWithOutsidePointerEventsDisabled.size > 0,
            T = _ >= M,
            L = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = (0, s.W)(e),
                i = o.useRef(!1),
                l = o.useRef(() => {});
              return (
                o.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !i.current) {
                        let t = function () {
                            h("dismissableLayer.pointerDownOutside", r, o, {
                              discrete: !0,
                            });
                          },
                          o = { originalEvent: e };
                        "touch" === e.pointerType
                          ? (n.removeEventListener("click", l.current),
                            (l.current = t),
                            n.addEventListener("click", l.current, {
                              once: !0,
                            }))
                          : t();
                      } else n.removeEventListener("click", l.current);
                      i.current = !1;
                    },
                    t = window.setTimeout(() => {
                      n.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(t),
                      n.removeEventListener("pointerdown", e),
                      n.removeEventListener("click", l.current);
                  };
                }, [n, r]),
                { onPointerDownCapture: () => (i.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...C.branches].some((e) => e.contains(t));
              !T ||
                n ||
                (null == b || b(e),
                null == w || w(e),
                e.defaultPrevented || null == x || x());
            }, S),
            D = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = (0, s.W)(e),
                i = o.useRef(!1);
              return (
                o.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !i.current &&
                      h(
                        "dismissableLayer.focusOutside",
                        r,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    n.addEventListener("focusin", e),
                    () => n.removeEventListener("focusin", e)
                  );
                }, [n, r]),
                {
                  onFocusCapture: () => (i.current = !0),
                  onBlurCapture: () => (i.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...C.branches].some((e) => e.contains(t)) ||
                (null == y || y(e),
                null == w || w(e),
                e.defaultPrevented || null == x || x());
            }, S);
          return (
            (0, c.e)((e) => {
              _ !== C.layers.size - 1 ||
                (null == v || v(e),
                !e.defaultPrevented && x && (e.preventDefault(), x()));
            }, S),
            o.useEffect(() => {
              if (R)
                return (
                  g &&
                    (0 === C.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = S.body.style.pointerEvents),
                      (S.body.style.pointerEvents = "none")),
                    C.layersWithOutsidePointerEventsDisabled.add(R)),
                  C.layers.add(R),
                  m(),
                  () => {
                    g &&
                      1 === C.layersWithOutsidePointerEventsDisabled.size &&
                      (S.body.style.pointerEvents = r);
                  }
                );
            }, [R, S, g, C]),
            o.useEffect(
              () => () => {
                R &&
                  (C.layers.delete(R),
                  C.layersWithOutsidePointerEventsDisabled.delete(R),
                  m());
              },
              [R, C]
            ),
            o.useEffect(() => {
              let e = () => O({});
              return (
                document.addEventListener(d, e),
                () => document.removeEventListener(d, e)
              );
            }, []),
            (0, a.jsx)(u.WV.div, {
              ...E,
              ref: j,
              style: {
                pointerEvents: A ? (T ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: (0, i.M)(e.onFocusCapture, D.onFocusCapture),
              onBlurCapture: (0, i.M)(e.onBlurCapture, D.onBlurCapture),
              onPointerDownCapture: (0, i.M)(
                e.onPointerDownCapture,
                L.onPointerDownCapture
              ),
            })
          );
        });
      function m() {
        let e = new CustomEvent(d);
        document.dispatchEvent(e);
      }
      function h(e, t, n, r) {
        let { discrete: o } = r,
          i = n.originalEvent.target,
          l = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && i.addEventListener(e, t, { once: !0 }),
          o ? (0, u.jH)(i, l) : i.dispatchEvent(l);
      }
      (p.displayName = "DismissableLayer"),
        (o.forwardRef((e, t) => {
          let n = o.useContext(f),
            r = o.useRef(null),
            i = (0, l.e)(t, r);
          return (
            o.useEffect(() => {
              let e = r.current;
              if (e)
                return (
                  n.branches.add(e),
                  () => {
                    n.branches.delete(e);
                  }
                );
            }, [n.branches]),
            (0, a.jsx)(u.WV.div, { ...e, ref: i })
          );
        }).displayName = "DismissableLayerBranch");
      var g = 0;
      function v() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.outline = "none"),
          (e.style.opacity = "0"),
          (e.style.position = "fixed"),
          (e.style.pointerEvents = "none"),
          e
        );
      }
      var b = n(467),
        y = n(3201);
      let w = ["top", "right", "bottom", "left"],
        x = Math.min,
        E = Math.max,
        C = Math.round,
        R = Math.floor,
        P = (e) => ({ x: e, y: e }),
        S = { left: "right", right: "left", bottom: "top", top: "bottom" },
        O = { start: "end", end: "start" };
      function j(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function N(e) {
        return e.split("-")[0];
      }
      function k(e) {
        return e.split("-")[1];
      }
      function M(e) {
        return "x" === e ? "y" : "x";
      }
      function _(e) {
        return "y" === e ? "height" : "width";
      }
      function A(e) {
        return ["top", "bottom"].includes(N(e)) ? "y" : "x";
      }
      function T(e) {
        return e.replace(/start|end/g, (e) => O[e]);
      }
      function L(e) {
        return e.replace(/left|right|bottom|top/g, (e) => S[e]);
      }
      function D(e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function I(e) {
        let { x: t, y: n, width: r, height: o } = e;
        return {
          width: r,
          height: o,
          top: n,
          left: t,
          right: t + r,
          bottom: n + o,
          x: t,
          y: n,
        };
      }
      function W(e, t, n) {
        let r,
          { reference: o, floating: i } = e,
          l = A(t),
          a = M(A(t)),
          u = _(a),
          s = N(t),
          c = "y" === l,
          d = o.x + o.width / 2 - i.width / 2,
          f = o.y + o.height / 2 - i.height / 2,
          p = o[u] / 2 - i[u] / 2;
        switch (s) {
          case "top":
            r = { x: d, y: o.y - i.height };
            break;
          case "bottom":
            r = { x: d, y: o.y + o.height };
            break;
          case "right":
            r = { x: o.x + o.width, y: f };
            break;
          case "left":
            r = { x: o.x - i.width, y: f };
            break;
          default:
            r = { x: o.x, y: o.y };
        }
        switch (k(t)) {
          case "start":
            r[a] -= p * (n && c ? -1 : 1);
            break;
          case "end":
            r[a] += p * (n && c ? -1 : 1);
        }
        return r;
      }
      let z = async (e, t, n) => {
        let {
            placement: r = "bottom",
            strategy: o = "absolute",
            middleware: i = [],
            platform: l,
          } = n,
          a = i.filter(Boolean),
          u = await (null == l.isRTL ? void 0 : l.isRTL(t)),
          s = await l.getElementRects({
            reference: e,
            floating: t,
            strategy: o,
          }),
          { x: c, y: d } = W(s, r, u),
          f = r,
          p = {},
          m = 0;
        for (let n = 0; n < a.length; n++) {
          let { name: i, fn: h } = a[n],
            {
              x: g,
              y: v,
              data: b,
              reset: y,
            } = await h({
              x: c,
              y: d,
              initialPlacement: r,
              placement: f,
              strategy: o,
              middlewareData: p,
              rects: s,
              platform: l,
              elements: { reference: e, floating: t },
            });
          (c = null != g ? g : c),
            (d = null != v ? v : d),
            (p = { ...p, [i]: { ...p[i], ...b } }),
            y &&
              m <= 50 &&
              (m++,
              "object" == typeof y &&
                (y.placement && (f = y.placement),
                y.rects &&
                  (s =
                    !0 === y.rects
                      ? await l.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: o,
                        })
                      : y.rects),
                ({ x: c, y: d } = W(s, f, u))),
              (n = -1));
        }
        return { x: c, y: d, placement: f, strategy: o, middlewareData: p };
      };
      async function F(e, t) {
        var n;
        void 0 === t && (t = {});
        let { x: r, y: o, platform: i, rects: l, elements: a, strategy: u } = e,
          {
            boundary: s = "clippingAncestors",
            rootBoundary: c = "viewport",
            elementContext: d = "floating",
            altBoundary: f = !1,
            padding: p = 0,
          } = j(t, e),
          m = D(p),
          h = a[f ? ("floating" === d ? "reference" : "floating") : d],
          g = I(
            await i.getClippingRect({
              element:
                null ==
                  (n = await (null == i.isElement ? void 0 : i.isElement(h))) ||
                n
                  ? h
                  : h.contextElement ||
                    (await (null == i.getDocumentElement
                      ? void 0
                      : i.getDocumentElement(a.floating))),
              boundary: s,
              rootBoundary: c,
              strategy: u,
            })
          ),
          v =
            "floating" === d
              ? {
                  x: r,
                  y: o,
                  width: l.floating.width,
                  height: l.floating.height,
                }
              : l.reference,
          b = await (null == i.getOffsetParent
            ? void 0
            : i.getOffsetParent(a.floating)),
          y = ((await (null == i.isElement ? void 0 : i.isElement(b))) &&
            (await (null == i.getScale ? void 0 : i.getScale(b)))) || {
            x: 1,
            y: 1,
          },
          w = I(
            i.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: a,
                  rect: v,
                  offsetParent: b,
                  strategy: u,
                })
              : v
          );
        return {
          top: (g.top - w.top + m.top) / y.y,
          bottom: (w.bottom - g.bottom + m.bottom) / y.y,
          left: (g.left - w.left + m.left) / y.x,
          right: (w.right - g.right + m.right) / y.x,
        };
      }
      function U(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function B(e) {
        return w.some((t) => e[t] >= 0);
      }
      async function V(e, t) {
        let { placement: n, platform: r, elements: o } = e,
          i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
          l = N(n),
          a = k(n),
          u = "y" === A(n),
          s = ["left", "top"].includes(l) ? -1 : 1,
          c = i && u ? -1 : 1,
          d = j(t, e),
          {
            mainAxis: f,
            crossAxis: p,
            alignmentAxis: m,
          } = "number" == typeof d
            ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
            : {
                mainAxis: d.mainAxis || 0,
                crossAxis: d.crossAxis || 0,
                alignmentAxis: d.alignmentAxis,
              };
        return (
          a && "number" == typeof m && (p = "end" === a ? -1 * m : m),
          u ? { x: p * c, y: f * s } : { x: f * s, y: p * c }
        );
      }
      function H() {
        return "undefined" != typeof window;
      }
      function $(e) {
        return K(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function Y(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function q(e) {
        var t;
        return null ==
          (t = (K(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function K(e) {
        return !!H() && (e instanceof Node || e instanceof Y(e).Node);
      }
      function G(e) {
        return !!H() && (e instanceof Element || e instanceof Y(e).Element);
      }
      function X(e) {
        return (
          !!H() && (e instanceof HTMLElement || e instanceof Y(e).HTMLElement)
        );
      }
      function Z(e) {
        return (
          !!H() &&
          "undefined" != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof Y(e).ShadowRoot)
        );
      }
      function Q(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: o } = er(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
          !["inline", "contents"].includes(o)
        );
      }
      function J(e) {
        return [":popover-open", ":modal"].some((t) => {
          try {
            return e.matches(t);
          } catch (e) {
            return !1;
          }
        });
      }
      function ee(e) {
        let t = et(),
          n = G(e) ? er(e) : e;
        return (
          "none" !== n.transform ||
          "none" !== n.perspective ||
          (!!n.containerType && "normal" !== n.containerType) ||
          (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!t && !!n.filter && "none" !== n.filter) ||
          ["transform", "perspective", "filter"].some((e) =>
            (n.willChange || "").includes(e)
          ) ||
          ["paint", "layout", "strict", "content"].some((e) =>
            (n.contain || "").includes(e)
          )
        );
      }
      function et() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function en(e) {
        return ["html", "body", "#document"].includes($(e));
      }
      function er(e) {
        return Y(e).getComputedStyle(e);
      }
      function eo(e) {
        return G(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
      }
      function ei(e) {
        if ("html" === $(e)) return e;
        let t = e.assignedSlot || e.parentNode || (Z(e) && e.host) || q(e);
        return Z(t) ? t.host : t;
      }
      function el(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        let o = (function e(t) {
            let n = ei(t);
            return en(n)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : X(n) && Q(n)
              ? n
              : e(n);
          })(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          l = Y(o);
        if (i) {
          let e = ea(l);
          return t.concat(
            l,
            l.visualViewport || [],
            Q(o) ? o : [],
            e && n ? el(e) : []
          );
        }
        return t.concat(o, el(o, [], n));
      }
      function ea(e) {
        return e.parent && Object.getPrototypeOf(e.parent)
          ? e.frameElement
          : null;
      }
      function eu(e) {
        let t = er(e),
          n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0,
          o = X(e),
          i = o ? e.offsetWidth : n,
          l = o ? e.offsetHeight : r,
          a = C(n) !== i || C(r) !== l;
        return a && ((n = i), (r = l)), { width: n, height: r, $: a };
      }
      function es(e) {
        return G(e) ? e : e.contextElement;
      }
      function ec(e) {
        let t = es(e);
        if (!X(t)) return P(1);
        let n = t.getBoundingClientRect(),
          { width: r, height: o, $: i } = eu(t),
          l = (i ? C(n.width) : n.width) / r,
          a = (i ? C(n.height) : n.height) / o;
        return (
          (l && Number.isFinite(l)) || (l = 1),
          (a && Number.isFinite(a)) || (a = 1),
          { x: l, y: a }
        );
      }
      let ed = P(0);
      function ef(e) {
        let t = Y(e);
        return et() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : ed;
      }
      function ep(e, t, n, r) {
        var o;
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        let i = e.getBoundingClientRect(),
          l = es(e),
          a = P(1);
        t && (r ? G(r) && (a = ec(r)) : (a = ec(e)));
        let u = (void 0 === (o = n) && (o = !1), r && (!o || r === Y(l)) && o)
            ? ef(l)
            : P(0),
          s = (i.left + u.x) / a.x,
          c = (i.top + u.y) / a.y,
          d = i.width / a.x,
          f = i.height / a.y;
        if (l) {
          let e = Y(l),
            t = r && G(r) ? Y(r) : r,
            n = e,
            o = ea(n);
          for (; o && r && t !== n; ) {
            let e = ec(o),
              t = o.getBoundingClientRect(),
              r = er(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              l = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            (s *= e.x),
              (c *= e.y),
              (d *= e.x),
              (f *= e.y),
              (s += i),
              (c += l),
              (o = ea((n = Y(o))));
          }
        }
        return I({ width: d, height: f, x: s, y: c });
      }
      function em(e, t) {
        let n = eo(e).scrollLeft;
        return t ? t.left + n : ep(q(e)).left + n;
      }
      function eh(e, t, n) {
        let r;
        if ("viewport" === t)
          r = (function (e, t) {
            let n = Y(e),
              r = q(e),
              o = n.visualViewport,
              i = r.clientWidth,
              l = r.clientHeight,
              a = 0,
              u = 0;
            if (o) {
              (i = o.width), (l = o.height);
              let e = et();
              (!e || (e && "fixed" === t)) &&
                ((a = o.offsetLeft), (u = o.offsetTop));
            }
            return { width: i, height: l, x: a, y: u };
          })(e, n);
        else if ("document" === t)
          r = (function (e) {
            let t = q(e),
              n = eo(e),
              r = e.ownerDocument.body,
              o = E(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
              i = E(
                t.scrollHeight,
                t.clientHeight,
                r.scrollHeight,
                r.clientHeight
              ),
              l = -n.scrollLeft + em(e),
              a = -n.scrollTop;
            return (
              "rtl" === er(r).direction &&
                (l += E(t.clientWidth, r.clientWidth) - o),
              { width: o, height: i, x: l, y: a }
            );
          })(q(e));
        else if (G(t))
          r = (function (e, t) {
            let n = ep(e, !0, "fixed" === t),
              r = n.top + e.clientTop,
              o = n.left + e.clientLeft,
              i = X(e) ? ec(e) : P(1),
              l = e.clientWidth * i.x;
            return {
              width: l,
              height: e.clientHeight * i.y,
              x: o * i.x,
              y: r * i.y,
            };
          })(t, n);
        else {
          let n = ef(e);
          r = { ...t, x: t.x - n.x, y: t.y - n.y };
        }
        return I(r);
      }
      function eg(e) {
        return "static" === er(e).position;
      }
      function ev(e, t) {
        if (!X(e) || "fixed" === er(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return q(e) === n && (n = n.ownerDocument.body), n;
      }
      function eb(e, t) {
        let n = Y(e);
        if (J(e)) return n;
        if (!X(e)) {
          let t = ei(e);
          for (; t && !en(t); ) {
            if (G(t) && !eg(t)) return t;
            t = ei(t);
          }
          return n;
        }
        let r = ev(e, t);
        for (; r && ["table", "td", "th"].includes($(r)) && eg(r); )
          r = ev(r, t);
        return r && en(r) && eg(r) && !ee(r)
          ? n
          : r ||
              (function (e) {
                let t = ei(e);
                for (; X(t) && !en(t); ) {
                  if (ee(t)) return t;
                  if (J(t)) break;
                  t = ei(t);
                }
                return null;
              })(e) ||
              n;
      }
      let ey = async function (e) {
          let t = this.getOffsetParent || eb,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: (function (e, t, n) {
              let r = X(t),
                o = q(t),
                i = "fixed" === n,
                l = ep(e, !0, i, t),
                a = { scrollLeft: 0, scrollTop: 0 },
                u = P(0);
              if (r || (!r && !i)) {
                if ((("body" !== $(t) || Q(o)) && (a = eo(t)), r)) {
                  let e = ep(t, !0, i, t);
                  (u.x = e.x + t.clientLeft), (u.y = e.y + t.clientTop);
                } else o && (u.x = em(o));
              }
              let s = 0,
                c = 0;
              if (o && !r && !i) {
                let e = o.getBoundingClientRect();
                (c = e.top + a.scrollTop),
                  (s = e.left + a.scrollLeft - em(o, e));
              }
              return {
                x: l.left + a.scrollLeft - u.x - s,
                y: l.top + a.scrollTop - u.y - c,
                width: l.width,
                height: l.height,
              };
            })(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: r.width, height: r.height },
          };
        },
        ew = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: n, offsetParent: r, strategy: o } = e,
              i = "fixed" === o,
              l = q(r),
              a = !!t && J(t.floating);
            if (r === l || (a && i)) return n;
            let u = { scrollLeft: 0, scrollTop: 0 },
              s = P(1),
              c = P(0),
              d = X(r);
            if (
              (d || (!d && !i)) &&
              (("body" !== $(r) || Q(l)) && (u = eo(r)), X(r))
            ) {
              let e = ep(r);
              (s = ec(r)),
                (c.x = e.x + r.clientLeft),
                (c.y = e.y + r.clientTop);
            }
            return {
              width: n.width * s.x,
              height: n.height * s.y,
              x: n.x * s.x - u.scrollLeft * s.x + c.x,
              y: n.y * s.y - u.scrollTop * s.y + c.y,
            };
          },
          getDocumentElement: q,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: r, strategy: o } = e,
              i = [
                ...("clippingAncestors" === n
                  ? J(t)
                    ? []
                    : (function (e, t) {
                        let n = t.get(e);
                        if (n) return n;
                        let r = el(e, [], !1).filter(
                            (e) => G(e) && "body" !== $(e)
                          ),
                          o = null,
                          i = "fixed" === er(e).position,
                          l = i ? ei(e) : e;
                        for (; G(l) && !en(l); ) {
                          let t = er(l),
                            n = ee(l);
                          n || "fixed" !== t.position || (o = null),
                            (
                              i
                                ? !n && !o
                                : (!n &&
                                    "static" === t.position &&
                                    !!o &&
                                    ["absolute", "fixed"].includes(
                                      o.position
                                    )) ||
                                  (Q(l) &&
                                    !n &&
                                    (function e(t, n) {
                                      let r = ei(t);
                                      return (
                                        !(r === n || !G(r) || en(r)) &&
                                        ("fixed" === er(r).position || e(r, n))
                                      );
                                    })(e, l))
                            )
                              ? (r = r.filter((e) => e !== l))
                              : (o = t),
                            (l = ei(l));
                        }
                        return t.set(e, r), r;
                      })(t, this._c)
                  : [].concat(n)),
                r,
              ],
              l = i[0],
              a = i.reduce((e, n) => {
                let r = eh(t, n, o);
                return (
                  (e.top = E(r.top, e.top)),
                  (e.right = x(r.right, e.right)),
                  (e.bottom = x(r.bottom, e.bottom)),
                  (e.left = E(r.left, e.left)),
                  e
                );
              }, eh(t, l, o));
            return {
              width: a.right - a.left,
              height: a.bottom - a.top,
              x: a.left,
              y: a.top,
            };
          },
          getOffsetParent: eb,
          getElementRects: ey,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            let { width: t, height: n } = eu(e);
            return { width: t, height: n };
          },
          getScale: ec,
          isElement: G,
          isRTL: function (e) {
            return "rtl" === er(e).direction;
          },
        },
        ex = (e) => ({
          name: "arrow",
          options: e,
          async fn(t) {
            let {
                x: n,
                y: r,
                placement: o,
                rects: i,
                platform: l,
                elements: a,
                middlewareData: u,
              } = t,
              { element: s, padding: c = 0 } = j(e, t) || {};
            if (null == s) return {};
            let d = D(c),
              f = { x: n, y: r },
              p = M(A(o)),
              m = _(p),
              h = await l.getDimensions(s),
              g = "y" === p,
              v = g ? "clientHeight" : "clientWidth",
              b = i.reference[m] + i.reference[p] - f[p] - i.floating[m],
              y = f[p] - i.reference[p],
              w = await (null == l.getOffsetParent
                ? void 0
                : l.getOffsetParent(s)),
              C = w ? w[v] : 0;
            (C && (await (null == l.isElement ? void 0 : l.isElement(w)))) ||
              (C = a.floating[v] || i.floating[m]);
            let R = C / 2 - h[m] / 2 - 1,
              P = x(d[g ? "top" : "left"], R),
              S = x(d[g ? "bottom" : "right"], R),
              O = C - h[m] - S,
              N = C / 2 - h[m] / 2 + (b / 2 - y / 2),
              T = E(P, x(N, O)),
              L =
                !u.arrow &&
                null != k(o) &&
                N !== T &&
                i.reference[m] / 2 - (N < P ? P : S) - h[m] / 2 < 0,
              I = L ? (N < P ? N - P : N - O) : 0;
            return {
              [p]: f[p] + I,
              data: {
                [p]: T,
                centerOffset: N - T - I,
                ...(L && { alignmentOffset: I }),
              },
              reset: L,
            };
          },
        }),
        eE = (e, t, n) => {
          let r = new Map(),
            o = { platform: ew, ...n },
            i = { ...o.platform, _c: r };
          return z(e, t, { ...o, platform: i });
        };
      var eC = n(4887),
        eR = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;
      function eP(e, t) {
        let n, r, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) !== t.length) return !1;
            for (r = n; 0 != r--; ) if (!eP(e[r], t[r])) return !1;
            return !0;
          }
          if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = o[r];
            if (("_owner" !== n || !e.$$typeof) && !eP(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function eS(e) {
        return "undefined" == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function eO(e, t) {
        let n = eS(e);
        return Math.round(t * n) / n;
      }
      function ej(e) {
        let t = o.useRef(e);
        return (
          eR(() => {
            t.current = e;
          }),
          t
        );
      }
      let eN = (e) => ({
          name: "arrow",
          options: e,
          fn(t) {
            let { element: n, padding: r } = "function" == typeof e ? e(t) : e;
            return n && {}.hasOwnProperty.call(n, "current")
              ? null != n.current
                ? ex({ element: n.current, padding: r }).fn(t)
                : {}
              : n
              ? ex({ element: n, padding: r }).fn(t)
              : {};
          },
        }),
        ek = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = 0),
            {
              name: "offset",
              options: n,
              async fn(e) {
                var t, r;
                let { x: o, y: i, placement: l, middlewareData: a } = e,
                  u = await V(e, n);
                return l === (null == (t = a.offset) ? void 0 : t.placement) &&
                  null != (r = a.arrow) &&
                  r.alignmentOffset
                  ? {}
                  : { x: o + u.x, y: i + u.y, data: { ...u, placement: l } };
              },
            }),
            options: [e, t],
          };
        },
        eM = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "shift",
              options: n,
              async fn(e) {
                let { x: t, y: r, placement: o } = e,
                  {
                    mainAxis: i = !0,
                    crossAxis: l = !1,
                    limiter: a = {
                      fn: (e) => {
                        let { x: t, y: n } = e;
                        return { x: t, y: n };
                      },
                    },
                    ...u
                  } = j(n, e),
                  s = { x: t, y: r },
                  c = await F(e, u),
                  d = A(N(o)),
                  f = M(d),
                  p = s[f],
                  m = s[d];
                if (i) {
                  let e = "y" === f ? "top" : "left",
                    t = "y" === f ? "bottom" : "right",
                    n = p + c[e],
                    r = p - c[t];
                  p = E(n, x(p, r));
                }
                if (l) {
                  let e = "y" === d ? "top" : "left",
                    t = "y" === d ? "bottom" : "right",
                    n = m + c[e],
                    r = m - c[t];
                  m = E(n, x(m, r));
                }
                let h = a.fn({ ...e, [f]: p, [d]: m });
                return {
                  ...h,
                  data: { x: h.x - t, y: h.y - r, enabled: { [f]: i, [d]: l } },
                };
              },
            }),
            options: [e, t],
          };
        },
        e_ = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              options: n,
              fn(e) {
                let {
                    x: t,
                    y: r,
                    placement: o,
                    rects: i,
                    middlewareData: l,
                  } = e,
                  {
                    offset: a = 0,
                    mainAxis: u = !0,
                    crossAxis: s = !0,
                  } = j(n, e),
                  c = { x: t, y: r },
                  d = A(o),
                  f = M(d),
                  p = c[f],
                  m = c[d],
                  h = j(a, e),
                  g =
                    "number" == typeof h
                      ? { mainAxis: h, crossAxis: 0 }
                      : { mainAxis: 0, crossAxis: 0, ...h };
                if (u) {
                  let e = "y" === f ? "height" : "width",
                    t = i.reference[f] - i.floating[e] + g.mainAxis,
                    n = i.reference[f] + i.reference[e] - g.mainAxis;
                  p < t ? (p = t) : p > n && (p = n);
                }
                if (s) {
                  var v, b;
                  let e = "y" === f ? "width" : "height",
                    t = ["top", "left"].includes(N(o)),
                    n =
                      i.reference[d] -
                      i.floating[e] +
                      ((t && (null == (v = l.offset) ? void 0 : v[d])) || 0) +
                      (t ? 0 : g.crossAxis),
                    r =
                      i.reference[d] +
                      i.reference[e] +
                      (t ? 0 : (null == (b = l.offset) ? void 0 : b[d]) || 0) -
                      (t ? g.crossAxis : 0);
                  m < n ? (m = n) : m > r && (m = r);
                }
                return { [f]: p, [d]: m };
              },
            }),
            options: [e, t],
          };
        },
        eA = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "flip",
              options: n,
              async fn(e) {
                var t, r, o, i, l;
                let {
                    placement: a,
                    middlewareData: u,
                    rects: s,
                    initialPlacement: c,
                    platform: d,
                    elements: f,
                  } = e,
                  {
                    mainAxis: p = !0,
                    crossAxis: m = !0,
                    fallbackPlacements: h,
                    fallbackStrategy: g = "bestFit",
                    fallbackAxisSideDirection: v = "none",
                    flipAlignment: b = !0,
                    ...y
                  } = j(n, e);
                if (null != (t = u.arrow) && t.alignmentOffset) return {};
                let w = N(a),
                  x = A(c),
                  E = N(c) === c,
                  C = await (null == d.isRTL ? void 0 : d.isRTL(f.floating)),
                  R =
                    h ||
                    (E || !b
                      ? [L(c)]
                      : (function (e) {
                          let t = L(e);
                          return [T(e), t, T(t)];
                        })(c)),
                  P = "none" !== v;
                !h &&
                  P &&
                  R.push(
                    ...(function (e, t, n, r) {
                      let o = k(e),
                        i = (function (e, t, n) {
                          let r = ["left", "right"],
                            o = ["right", "left"];
                          switch (e) {
                            case "top":
                            case "bottom":
                              if (n) return t ? o : r;
                              return t ? r : o;
                            case "left":
                            case "right":
                              return t ? ["top", "bottom"] : ["bottom", "top"];
                            default:
                              return [];
                          }
                        })(N(e), "start" === n, r);
                      return (
                        o &&
                          ((i = i.map((e) => e + "-" + o)),
                          t && (i = i.concat(i.map(T)))),
                        i
                      );
                    })(c, b, v, C)
                  );
                let S = [c, ...R],
                  O = await F(e, y),
                  D = [],
                  I = (null == (r = u.flip) ? void 0 : r.overflows) || [];
                if ((p && D.push(O[w]), m)) {
                  let e = (function (e, t, n) {
                    void 0 === n && (n = !1);
                    let r = k(e),
                      o = M(A(e)),
                      i = _(o),
                      l =
                        "x" === o
                          ? r === (n ? "end" : "start")
                            ? "right"
                            : "left"
                          : "start" === r
                          ? "bottom"
                          : "top";
                    return (
                      t.reference[i] > t.floating[i] && (l = L(l)), [l, L(l)]
                    );
                  })(a, s, C);
                  D.push(O[e[0]], O[e[1]]);
                }
                if (
                  ((I = [...I, { placement: a, overflows: D }]),
                  !D.every((e) => e <= 0))
                ) {
                  let e = ((null == (o = u.flip) ? void 0 : o.index) || 0) + 1,
                    t = S[e];
                  if (t)
                    return {
                      data: { index: e, overflows: I },
                      reset: { placement: t },
                    };
                  let n =
                    null ==
                    (i = I.filter((e) => e.overflows[0] <= 0).sort(
                      (e, t) => e.overflows[1] - t.overflows[1]
                    )[0])
                      ? void 0
                      : i.placement;
                  if (!n)
                    switch (g) {
                      case "bestFit": {
                        let e =
                          null ==
                          (l = I.filter((e) => {
                            if (P) {
                              let t = A(e.placement);
                              return t === x || "y" === t;
                            }
                            return !0;
                          })
                            .map((e) => [
                              e.placement,
                              e.overflows
                                .filter((e) => e > 0)
                                .reduce((e, t) => e + t, 0),
                            ])
                            .sort((e, t) => e[1] - t[1])[0])
                            ? void 0
                            : l[0];
                        e && (n = e);
                        break;
                      }
                      case "initialPlacement":
                        n = c;
                    }
                  if (a !== n) return { reset: { placement: n } };
                }
                return {};
              },
            }),
            options: [e, t],
          };
        },
        eT = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "size",
              options: n,
              async fn(e) {
                var t, r;
                let o, i;
                let { placement: l, rects: a, platform: u, elements: s } = e,
                  { apply: c = () => {}, ...d } = j(n, e),
                  f = await F(e, d),
                  p = N(l),
                  m = k(l),
                  h = "y" === A(l),
                  { width: g, height: v } = a.floating;
                "top" === p || "bottom" === p
                  ? ((o = p),
                    (i =
                      m ===
                      ((await (null == u.isRTL ? void 0 : u.isRTL(s.floating)))
                        ? "start"
                        : "end")
                        ? "left"
                        : "right"))
                  : ((i = p), (o = "end" === m ? "top" : "bottom"));
                let b = v - f.top - f.bottom,
                  y = g - f.left - f.right,
                  w = x(v - f[o], b),
                  C = x(g - f[i], y),
                  R = !e.middlewareData.shift,
                  P = w,
                  S = C;
                if (
                  (null != (t = e.middlewareData.shift) &&
                    t.enabled.x &&
                    (S = y),
                  null != (r = e.middlewareData.shift) &&
                    r.enabled.y &&
                    (P = b),
                  R && !m)
                ) {
                  let e = E(f.left, 0),
                    t = E(f.right, 0),
                    n = E(f.top, 0),
                    r = E(f.bottom, 0);
                  h
                    ? (S =
                        g -
                        2 * (0 !== e || 0 !== t ? e + t : E(f.left, f.right)))
                    : (P =
                        v -
                        2 * (0 !== n || 0 !== r ? n + r : E(f.top, f.bottom)));
                }
                await c({ ...e, availableWidth: S, availableHeight: P });
                let O = await u.getDimensions(s.floating);
                return g !== O.width || v !== O.height
                  ? { reset: { rects: !0 } }
                  : {};
              },
            }),
            options: [e, t],
          };
        },
        eL = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "hide",
              options: n,
              async fn(e) {
                let { rects: t } = e,
                  { strategy: r = "referenceHidden", ...o } = j(n, e);
                switch (r) {
                  case "referenceHidden": {
                    let n = U(
                      await F(e, { ...o, elementContext: "reference" }),
                      t.reference
                    );
                    return {
                      data: {
                        referenceHiddenOffsets: n,
                        referenceHidden: B(n),
                      },
                    };
                  }
                  case "escaped": {
                    let n = U(
                      await F(e, { ...o, altBoundary: !0 }),
                      t.floating
                    );
                    return { data: { escapedOffsets: n, escaped: B(n) } };
                  }
                  default:
                    return {};
                }
              },
            }),
            options: [e, t],
          };
        },
        eD = (e, t) => ({ ...eN(e), options: [e, t] });
      var eI = o.forwardRef((e, t) => {
        let { children: n, width: r = 10, height: o = 5, ...i } = e;
        return (0, a.jsx)(u.WV.svg, {
          ...i,
          ref: t,
          width: r,
          height: o,
          viewBox: "0 0 30 10",
          preserveAspectRatio: "none",
          children: e.asChild
            ? n
            : (0, a.jsx)("polygon", { points: "0,0 30,0 15,10" }),
        });
      });
      eI.displayName = "Arrow";
      var eW = n(8324),
        ez = n(1336),
        eF = "Popper",
        [eU, eB] = (0, eW.b)(eF),
        [eV, eH] = eU(eF),
        e$ = (e) => {
          let { __scopePopper: t, children: n } = e,
            [r, i] = o.useState(null);
          return (0, a.jsx)(eV, {
            scope: t,
            anchor: r,
            onAnchorChange: i,
            children: n,
          });
        };
      e$.displayName = eF;
      var eY = "PopperAnchor",
        eq = o.forwardRef((e, t) => {
          let { __scopePopper: n, virtualRef: r, ...i } = e,
            s = eH(eY, n),
            c = o.useRef(null),
            d = (0, l.e)(t, c);
          return (
            o.useEffect(() => {
              s.onAnchorChange((null == r ? void 0 : r.current) || c.current);
            }),
            r ? null : (0, a.jsx)(u.WV.div, { ...i, ref: d })
          );
        });
      eq.displayName = eY;
      var eK = "PopperContent",
        [eG, eX] = eU(eK),
        eZ = o.forwardRef((e, t) => {
          var n, r, i, c, d, f, p, m;
          let {
              __scopePopper: h,
              side: g = "bottom",
              sideOffset: v = 0,
              align: b = "center",
              alignOffset: y = 0,
              arrowPadding: w = 0,
              avoidCollisions: C = !0,
              collisionBoundary: P = [],
              collisionPadding: S = 0,
              sticky: O = "partial",
              hideWhenDetached: j = !1,
              updatePositionStrategy: N = "optimized",
              onPlaced: k,
              ...M
            } = e,
            _ = eH(eK, h),
            [A, T] = o.useState(null),
            L = (0, l.e)(t, (e) => T(e)),
            [D, I] = o.useState(null),
            W = (function (e) {
              let [t, n] = o.useState(void 0);
              return (
                (0, ez.b)(() => {
                  if (e) {
                    n({ width: e.offsetWidth, height: e.offsetHeight });
                    let t = new ResizeObserver((t) => {
                      let r, o;
                      if (!Array.isArray(t) || !t.length) return;
                      let i = t[0];
                      if ("borderBoxSize" in i) {
                        let e = i.borderBoxSize,
                          t = Array.isArray(e) ? e[0] : e;
                        (r = t.inlineSize), (o = t.blockSize);
                      } else (r = e.offsetWidth), (o = e.offsetHeight);
                      n({ width: r, height: o });
                    });
                    return (
                      t.observe(e, { box: "border-box" }), () => t.unobserve(e)
                    );
                  }
                  n(void 0);
                }, [e]),
                t
              );
            })(D),
            z =
              null !== (p = null == W ? void 0 : W.width) && void 0 !== p
                ? p
                : 0,
            F =
              null !== (m = null == W ? void 0 : W.height) && void 0 !== m
                ? m
                : 0,
            U =
              "number" == typeof S
                ? S
                : { top: 0, right: 0, bottom: 0, left: 0, ...S },
            B = Array.isArray(P) ? P : [P],
            V = B.length > 0,
            H = { padding: U, boundary: B.filter(e1), altBoundary: V },
            {
              refs: $,
              floatingStyles: Y,
              placement: K,
              isPositioned: G,
              middlewareData: X,
            } = (function (e) {
              void 0 === e && (e = {});
              let {
                  placement: t = "bottom",
                  strategy: n = "absolute",
                  middleware: r = [],
                  platform: i,
                  elements: { reference: l, floating: a } = {},
                  transform: u = !0,
                  whileElementsMounted: s,
                  open: c,
                } = e,
                [d, f] = o.useState({
                  x: 0,
                  y: 0,
                  strategy: n,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [p, m] = o.useState(r);
              eP(p, r) || m(r);
              let [h, g] = o.useState(null),
                [v, b] = o.useState(null),
                y = o.useCallback((e) => {
                  e !== C.current && ((C.current = e), g(e));
                }, []),
                w = o.useCallback((e) => {
                  e !== R.current && ((R.current = e), b(e));
                }, []),
                x = l || h,
                E = a || v,
                C = o.useRef(null),
                R = o.useRef(null),
                P = o.useRef(d),
                S = null != s,
                O = ej(s),
                j = ej(i),
                N = ej(c),
                k = o.useCallback(() => {
                  if (!C.current || !R.current) return;
                  let e = { placement: t, strategy: n, middleware: p };
                  j.current && (e.platform = j.current),
                    eE(C.current, R.current, e).then((e) => {
                      let t = { ...e, isPositioned: !1 !== N.current };
                      M.current &&
                        !eP(P.current, t) &&
                        ((P.current = t),
                        eC.flushSync(() => {
                          f(t);
                        }));
                    });
                }, [p, t, n, j, N]);
              eR(() => {
                !1 === c &&
                  P.current.isPositioned &&
                  ((P.current.isPositioned = !1),
                  f((e) => ({ ...e, isPositioned: !1 })));
              }, [c]);
              let M = o.useRef(!1);
              eR(
                () => (
                  (M.current = !0),
                  () => {
                    M.current = !1;
                  }
                ),
                []
              ),
                eR(() => {
                  if ((x && (C.current = x), E && (R.current = E), x && E)) {
                    if (O.current) return O.current(x, E, k);
                    k();
                  }
                }, [x, E, k, O, S]);
              let _ = o.useMemo(
                  () => ({
                    reference: C,
                    floating: R,
                    setReference: y,
                    setFloating: w,
                  }),
                  [y, w]
                ),
                A = o.useMemo(() => ({ reference: x, floating: E }), [x, E]),
                T = o.useMemo(() => {
                  let e = { position: n, left: 0, top: 0 };
                  if (!A.floating) return e;
                  let t = eO(A.floating, d.x),
                    r = eO(A.floating, d.y);
                  return u
                    ? {
                        ...e,
                        transform: "translate(" + t + "px, " + r + "px)",
                        ...(eS(A.floating) >= 1.5 && {
                          willChange: "transform",
                        }),
                      }
                    : { position: n, left: t, top: r };
                }, [n, u, A.floating, d.x, d.y]);
              return o.useMemo(
                () => ({
                  ...d,
                  update: k,
                  refs: _,
                  elements: A,
                  floatingStyles: T,
                }),
                [d, k, _, A, T]
              );
            })({
              strategy: "fixed",
              placement: g + ("center" !== b ? "-" + b : ""),
              whileElementsMounted: function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return (function (e, t, n, r) {
                  let o;
                  void 0 === r && (r = {});
                  let {
                      ancestorScroll: i = !0,
                      ancestorResize: l = !0,
                      elementResize: a = "function" == typeof ResizeObserver,
                      layoutShift: u = "function" ==
                        typeof IntersectionObserver,
                      animationFrame: s = !1,
                    } = r,
                    c = es(e),
                    d = i || l ? [...(c ? el(c) : []), ...el(t)] : [];
                  d.forEach((e) => {
                    i && e.addEventListener("scroll", n, { passive: !0 }),
                      l && e.addEventListener("resize", n);
                  });
                  let f =
                      c && u
                        ? (function (e, t) {
                            let n,
                              r = null,
                              o = q(e);
                            function i() {
                              var e;
                              clearTimeout(n),
                                null == (e = r) || e.disconnect(),
                                (r = null);
                            }
                            return (
                              !(function l(a, u) {
                                void 0 === a && (a = !1),
                                  void 0 === u && (u = 1),
                                  i();
                                let {
                                  left: s,
                                  top: c,
                                  width: d,
                                  height: f,
                                } = e.getBoundingClientRect();
                                if ((a || t(), !d || !f)) return;
                                let p = R(c),
                                  m = R(o.clientWidth - (s + d)),
                                  h = {
                                    rootMargin:
                                      -p +
                                      "px " +
                                      -m +
                                      "px " +
                                      -R(o.clientHeight - (c + f)) +
                                      "px " +
                                      -R(s) +
                                      "px",
                                    threshold: E(0, x(1, u)) || 1,
                                  },
                                  g = !0;
                                function v(e) {
                                  let t = e[0].intersectionRatio;
                                  if (t !== u) {
                                    if (!g) return l();
                                    t
                                      ? l(!1, t)
                                      : (n = setTimeout(() => {
                                          l(!1, 1e-7);
                                        }, 1e3));
                                  }
                                  g = !1;
                                }
                                try {
                                  r = new IntersectionObserver(v, {
                                    ...h,
                                    root: o.ownerDocument,
                                  });
                                } catch (e) {
                                  r = new IntersectionObserver(v, h);
                                }
                                r.observe(e);
                              })(!0),
                              i
                            );
                          })(c, n)
                        : null,
                    p = -1,
                    m = null;
                  a &&
                    ((m = new ResizeObserver((e) => {
                      let [r] = e;
                      r &&
                        r.target === c &&
                        m &&
                        (m.unobserve(t),
                        cancelAnimationFrame(p),
                        (p = requestAnimationFrame(() => {
                          var e;
                          null == (e = m) || e.observe(t);
                        }))),
                        n();
                    })),
                    c && !s && m.observe(c),
                    m.observe(t));
                  let h = s ? ep(e) : null;
                  return (
                    s &&
                      (function t() {
                        let r = ep(e);
                        h &&
                          (r.x !== h.x ||
                            r.y !== h.y ||
                            r.width !== h.width ||
                            r.height !== h.height) &&
                          n(),
                          (h = r),
                          (o = requestAnimationFrame(t));
                      })(),
                    n(),
                    () => {
                      var e;
                      d.forEach((e) => {
                        i && e.removeEventListener("scroll", n),
                          l && e.removeEventListener("resize", n);
                      }),
                        null == f || f(),
                        null == (e = m) || e.disconnect(),
                        (m = null),
                        s && cancelAnimationFrame(o);
                    }
                  );
                })(...t, { animationFrame: "always" === N });
              },
              elements: { reference: _.anchor },
              middleware: [
                ek({ mainAxis: v + F, alignmentAxis: y }),
                C &&
                  eM({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === O ? e_() : void 0,
                    ...H,
                  }),
                C && eA({ ...H }),
                eT({
                  ...H,
                  apply: (e) => {
                    let {
                        elements: t,
                        rects: n,
                        availableWidth: r,
                        availableHeight: o,
                      } = e,
                      { width: i, height: l } = n.reference,
                      a = t.floating.style;
                    a.setProperty(
                      "--radix-popper-available-width",
                      "".concat(r, "px")
                    ),
                      a.setProperty(
                        "--radix-popper-available-height",
                        "".concat(o, "px")
                      ),
                      a.setProperty(
                        "--radix-popper-anchor-width",
                        "".concat(i, "px")
                      ),
                      a.setProperty(
                        "--radix-popper-anchor-height",
                        "".concat(l, "px")
                      );
                  },
                }),
                D && eD({ element: D, padding: w }),
                e2({ arrowWidth: z, arrowHeight: F }),
                j && eL({ strategy: "referenceHidden", ...H }),
              ],
            }),
            [Z, Q] = e3(K),
            J = (0, s.W)(k);
          (0, ez.b)(() => {
            G && (null == J || J());
          }, [G, J]);
          let ee = null === (n = X.arrow) || void 0 === n ? void 0 : n.x,
            et = null === (r = X.arrow) || void 0 === r ? void 0 : r.y,
            en =
              (null === (i = X.arrow) || void 0 === i
                ? void 0
                : i.centerOffset) !== 0,
            [er, eo] = o.useState();
          return (
            (0, ez.b)(() => {
              A && eo(window.getComputedStyle(A).zIndex);
            }, [A]),
            (0, a.jsx)("div", {
              ref: $.setFloating,
              "data-radix-popper-content-wrapper": "",
              style: {
                ...Y,
                transform: G ? Y.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: er,
                "--radix-popper-transform-origin": [
                  null === (c = X.transformOrigin) || void 0 === c
                    ? void 0
                    : c.x,
                  null === (d = X.transformOrigin) || void 0 === d
                    ? void 0
                    : d.y,
                ].join(" "),
                ...((null === (f = X.hide) || void 0 === f
                  ? void 0
                  : f.referenceHidden) && {
                  visibility: "hidden",
                  pointerEvents: "none",
                }),
              },
              dir: e.dir,
              children: (0, a.jsx)(eG, {
                scope: h,
                placedSide: Z,
                onArrowChange: I,
                arrowX: ee,
                arrowY: et,
                shouldHideArrow: en,
                children: (0, a.jsx)(u.WV.div, {
                  "data-side": Z,
                  "data-align": Q,
                  ...M,
                  ref: L,
                  style: { ...M.style, animation: G ? void 0 : "none" },
                }),
              }),
            })
          );
        });
      eZ.displayName = eK;
      var eQ = "PopperArrow",
        eJ = { top: "bottom", right: "left", bottom: "top", left: "right" },
        e0 = o.forwardRef(function (e, t) {
          let { __scopePopper: n, ...r } = e,
            o = eX(eQ, n),
            i = eJ[o.placedSide];
          return (0,
          a.jsx)("span", { ref: o.onArrowChange, style: { position: "absolute", left: o.arrowX, top: o.arrowY, [i]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[o.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[o.placedSide], visibility: o.shouldHideArrow ? "hidden" : void 0 }, children: (0, a.jsx)(eI, { ...r, ref: t, style: { ...r.style, display: "block" } }) });
        });
      function e1(e) {
        return null !== e;
      }
      e0.displayName = eQ;
      var e2 = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          var n, r, o, i, l;
          let { placement: a, rects: u, middlewareData: s } = t,
            c =
              (null === (n = s.arrow) || void 0 === n
                ? void 0
                : n.centerOffset) !== 0,
            d = c ? 0 : e.arrowWidth,
            f = c ? 0 : e.arrowHeight,
            [p, m] = e3(a),
            h = { start: "0%", center: "50%", end: "100%" }[m],
            g =
              (null !==
                (i = null === (r = s.arrow) || void 0 === r ? void 0 : r.x) &&
              void 0 !== i
                ? i
                : 0) +
              d / 2,
            v =
              (null !==
                (l = null === (o = s.arrow) || void 0 === o ? void 0 : o.y) &&
              void 0 !== l
                ? l
                : 0) +
              f / 2,
            b = "",
            y = "";
          return (
            "bottom" === p
              ? ((b = c ? h : "".concat(g, "px")), (y = "".concat(-f, "px")))
              : "top" === p
              ? ((b = c ? h : "".concat(g, "px")),
                (y = "".concat(u.floating.height + f, "px")))
              : "right" === p
              ? ((b = "".concat(-f, "px")), (y = c ? h : "".concat(v, "px")))
              : "left" === p &&
                ((b = "".concat(u.floating.width + f, "px")),
                (y = c ? h : "".concat(v, "px"))),
            { data: { x: b, y } }
          );
        },
      });
      function e3(e) {
        let [t, n = "center"] = e.split("-");
        return [t, n];
      }
      var e5 = o.forwardRef((e, t) => {
        var n, r;
        let { container: i, ...l } = e,
          [s, c] = o.useState(!1);
        (0, ez.b)(() => c(!0), []);
        let d =
          i ||
          (s &&
            (null === (r = globalThis) || void 0 === r
              ? void 0
              : null === (n = r.document) || void 0 === n
              ? void 0
              : n.body));
        return d
          ? eC.createPortal((0, a.jsx)(u.WV.div, { ...l, ref: t }), d)
          : null;
      });
      e5.displayName = "Portal";
      var e8 = (e) => {
        var t, n;
        let r, i;
        let { present: a, children: u } = e,
          s = (function (e) {
            var t, n;
            let [r, i] = o.useState(),
              l = o.useRef({}),
              a = o.useRef(e),
              u = o.useRef("none"),
              [s, c] =
                ((t = e ? "mounted" : "unmounted"),
                (n = {
                  mounted: {
                    UNMOUNT: "unmounted",
                    ANIMATION_OUT: "unmountSuspended",
                  },
                  unmountSuspended: {
                    MOUNT: "mounted",
                    ANIMATION_END: "unmounted",
                  },
                  unmounted: { MOUNT: "mounted" },
                }),
                o.useReducer((e, t) => {
                  let r = n[e][t];
                  return null != r ? r : e;
                }, t));
            return (
              o.useEffect(() => {
                let e = e4(l.current);
                u.current = "mounted" === s ? e : "none";
              }, [s]),
              (0, ez.b)(() => {
                let t = l.current,
                  n = a.current;
                if (n !== e) {
                  let r = u.current,
                    o = e4(t);
                  e
                    ? c("MOUNT")
                    : "none" === o ||
                      (null == t ? void 0 : t.display) === "none"
                    ? c("UNMOUNT")
                    : n && r !== o
                    ? c("ANIMATION_OUT")
                    : c("UNMOUNT"),
                    (a.current = e);
                }
              }, [e, c]),
              (0, ez.b)(() => {
                if (r) {
                  var e;
                  let t;
                  let n =
                      null !== (e = r.ownerDocument.defaultView) && void 0 !== e
                        ? e
                        : window,
                    o = (e) => {
                      let o = e4(l.current).includes(e.animationName);
                      if (
                        e.target === r &&
                        o &&
                        (c("ANIMATION_END"), !a.current)
                      ) {
                        let e = r.style.animationFillMode;
                        (r.style.animationFillMode = "forwards"),
                          (t = n.setTimeout(() => {
                            "forwards" === r.style.animationFillMode &&
                              (r.style.animationFillMode = e);
                          }));
                      }
                    },
                    i = (e) => {
                      e.target === r && (u.current = e4(l.current));
                    };
                  return (
                    r.addEventListener("animationstart", i),
                    r.addEventListener("animationcancel", o),
                    r.addEventListener("animationend", o),
                    () => {
                      n.clearTimeout(t),
                        r.removeEventListener("animationstart", i),
                        r.removeEventListener("animationcancel", o),
                        r.removeEventListener("animationend", o);
                    }
                  );
                }
                c("ANIMATION_END");
              }, [r, c]),
              {
                isPresent: ["mounted", "unmountSuspended"].includes(s),
                ref: o.useCallback((e) => {
                  e && (l.current = getComputedStyle(e)), i(e);
                }, []),
              }
            );
          })(a),
          c =
            "function" == typeof u
              ? u({ present: s.isPresent })
              : o.Children.only(u),
          d = (0, l.e)(
            s.ref,
            (r =
              null === (t = Object.getOwnPropertyDescriptor(c.props, "ref")) ||
              void 0 === t
                ? void 0
                : t.get) &&
              "isReactWarning" in r &&
              r.isReactWarning
              ? c.ref
              : (r =
                  null === (n = Object.getOwnPropertyDescriptor(c, "ref")) ||
                  void 0 === n
                    ? void 0
                    : n.get) &&
                "isReactWarning" in r &&
                r.isReactWarning
              ? c.props.ref
              : c.props.ref || c.ref
          );
        return "function" == typeof u || s.isPresent
          ? o.cloneElement(c, { ref: d })
          : null;
      };
      function e4(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      e8.displayName = "Presence";
      var e6 = n(1538),
        e7 = n(1715),
        e9 = n(8369),
        te = n(1735),
        tt = n(1823),
        tn = n(8215),
        tr = (0, n(5411)._)(),
        to = function () {},
        ti = o.forwardRef(function (e, t) {
          var n = o.useRef(null),
            r = o.useState({
              onScrollCapture: to,
              onWheelCapture: to,
              onTouchMoveCapture: to,
            }),
            i = r[0],
            l = r[1],
            a = e.forwardProps,
            u = e.children,
            s = e.className,
            c = e.removeScrollBar,
            d = e.enabled,
            f = e.shards,
            p = e.sideCar,
            m = e.noIsolation,
            h = e.inert,
            g = e.allowPinchZoom,
            v = e.as,
            b = e.gapMode,
            y = (0, te._T)(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            w = (0, tn.q)([n, t]),
            x = (0, te.pi)((0, te.pi)({}, y), i);
          return o.createElement(
            o.Fragment,
            null,
            d &&
              o.createElement(p, {
                sideCar: tr,
                removeScrollBar: c,
                shards: f,
                noIsolation: m,
                inert: h,
                setCallbacks: l,
                allowPinchZoom: !!g,
                lockRef: n,
                gapMode: b,
              }),
            a
              ? o.cloneElement(
                  o.Children.only(u),
                  (0, te.pi)((0, te.pi)({}, x), { ref: w })
                )
              : o.createElement(
                  void 0 === v ? "div" : v,
                  (0, te.pi)({}, x, { className: s, ref: w }),
                  u
                )
          );
        });
      (ti.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (ti.classNames = { fullWidth: tt.zi, zeroRight: tt.pF });
      var tl = n(8776),
        ta = n(5973),
        tu = n(8039),
        ts = !1;
      if ("undefined" != typeof window)
        try {
          var tc = Object.defineProperty({}, "passive", {
            get: function () {
              return (ts = !0), !0;
            },
          });
          window.addEventListener("test", tc, tc),
            window.removeEventListener("test", tc, tc);
        } catch (e) {
          ts = !1;
        }
      var td = !!ts && { passive: !1 },
        tf = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            !(
              n.overflowY === n.overflowX &&
              "TEXTAREA" !== e.tagName &&
              "visible" === n[t]
            )
          );
        },
        tp = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              tm(e, r))
            ) {
              var o = th(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        tm = function (e, t) {
          return "v" === e ? tf(t, "overflowY") : tf(t, "overflowX");
        },
        th = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        tg = function (e, t, n, r, o) {
          var i,
            l =
              ((i = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === i ? -1 : 1),
            a = l * r,
            u = n.target,
            s = t.contains(u),
            c = !1,
            d = a > 0,
            f = 0,
            p = 0;
          do {
            var m = th(e, u),
              h = m[0],
              g = m[1] - m[2] - l * h;
            (h || g) && tm(e, u) && ((f += g), (p += h)),
              u instanceof ShadowRoot ? (u = u.host) : (u = u.parentNode);
          } while (
            (!s && u !== document.body) ||
            (s && (t.contains(u) || t === u))
          );
          return (
            d && ((o && 1 > Math.abs(f)) || (!o && a > f))
              ? (c = !0)
              : !d && ((o && 1 > Math.abs(p)) || (!o && -a > p)) && (c = !0),
            c
          );
        },
        tv = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        tb = function (e) {
          return [e.deltaX, e.deltaY];
        },
        ty = function (e) {
          return e && "current" in e ? e.current : e;
        },
        tw = 0,
        tx = [],
        tE = (0, tl.L)(tr, function (e) {
          var t = o.useRef([]),
            n = o.useRef([0, 0]),
            r = o.useRef(),
            i = o.useState(tw++)[0],
            l = o.useState(tu.Ws)[0],
            a = o.useRef(e);
          o.useEffect(
            function () {
              a.current = e;
            },
            [e]
          ),
            o.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add("block-interactivity-".concat(i));
                  var t = (0, te.ev)(
                    [e.lockRef.current],
                    (e.shards || []).map(ty),
                    !0
                  ).filter(Boolean);
                  return (
                    t.forEach(function (e) {
                      return e.classList.add("allow-interactivity-".concat(i));
                    }),
                    function () {
                      document.body.classList.remove(
                        "block-interactivity-".concat(i)
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            "allow-interactivity-".concat(i)
                          );
                        });
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards]
            );
          var u = o.useCallback(function (e, t) {
              if (
                ("touches" in e && 2 === e.touches.length) ||
                ("wheel" === e.type && e.ctrlKey)
              )
                return !a.current.allowPinchZoom;
              var o,
                i = tv(e),
                l = n.current,
                u = "deltaX" in e ? e.deltaX : l[0] - i[0],
                s = "deltaY" in e ? e.deltaY : l[1] - i[1],
                c = e.target,
                d = Math.abs(u) > Math.abs(s) ? "h" : "v";
              if ("touches" in e && "h" === d && "range" === c.type) return !1;
              var f = tp(d, c);
              if (!f) return !0;
              if (
                (f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = tp(d, c))),
                !f)
              )
                return !1;
              if (
                (!r.current &&
                  "changedTouches" in e &&
                  (u || s) &&
                  (r.current = o),
                !o)
              )
                return !0;
              var p = r.current || o;
              return tg(p, t, e, "h" === p ? u : s, !0);
            }, []),
            s = o.useCallback(function (e) {
              if (tx.length && tx[tx.length - 1] === l) {
                var n = "deltaY" in e ? tb(e) : tv(e),
                  r = t.current.filter(function (t) {
                    var r;
                    return (
                      t.name === e.type &&
                      (t.target === e.target || e.target === t.shadowParent) &&
                      (r = t.delta)[0] === n[0] &&
                      r[1] === n[1]
                    );
                  })[0];
                if (r && r.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!r) {
                  var o = (a.current.shards || [])
                    .map(ty)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? u(e, o[0]) : !a.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            c = o.useCallback(function (e, n, r, o) {
              var i = {
                name: e,
                delta: n,
                target: r,
                should: o,
                shadowParent: (function (e) {
                  for (var t = null; null !== e; )
                    e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                      (e = e.parentNode);
                  return t;
                })(r),
              };
              t.current.push(i),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== i;
                  });
                }, 1);
            }, []),
            d = o.useCallback(function (e) {
              (n.current = tv(e)), (r.current = void 0);
            }, []),
            f = o.useCallback(function (t) {
              c(t.type, tb(t), t.target, u(t, e.lockRef.current));
            }, []),
            p = o.useCallback(function (t) {
              c(t.type, tv(t), t.target, u(t, e.lockRef.current));
            }, []);
          o.useEffect(function () {
            return (
              tx.push(l),
              e.setCallbacks({
                onScrollCapture: f,
                onWheelCapture: f,
                onTouchMoveCapture: p,
              }),
              document.addEventListener("wheel", s, td),
              document.addEventListener("touchmove", s, td),
              document.addEventListener("touchstart", d, td),
              function () {
                (tx = tx.filter(function (e) {
                  return e !== l;
                })),
                  document.removeEventListener("wheel", s, td),
                  document.removeEventListener("touchmove", s, td),
                  document.removeEventListener("touchstart", d, td);
              }
            );
          }, []);
          var m = e.removeScrollBar,
            h = e.inert;
          return o.createElement(
            o.Fragment,
            null,
            h
              ? o.createElement(l, {
                  styles: "\n  .block-interactivity-"
                    .concat(
                      i,
                      " {pointer-events: none;}\n  .allow-interactivity-"
                    )
                    .concat(i, " {pointer-events: all;}\n"),
                })
              : null,
            m ? o.createElement(ta.jp, { gapMode: e.gapMode }) : null
          );
        }),
        tC = o.forwardRef(function (e, t) {
          return o.createElement(
            ti,
            (0, te.pi)({}, e, { ref: t, sideCar: tE })
          );
        });
      tC.classNames = ti.classNames;
      var tR = "Popover",
        [tP, tS] = (function (e, t = []) {
          let n = [],
            r = () => {
              let t = n.map((e) => o.createContext(e));
              return function (n) {
                let r = n?.[e] || t;
                return o.useMemo(
                  () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
                  [n, r]
                );
              };
            };
          return (
            (r.scopeName = e),
            [
              function (t, r) {
                let i = o.createContext(r),
                  l = n.length;
                n = [...n, r];
                let u = (t) => {
                  let { scope: n, children: r, ...u } = t,
                    s = n?.[e]?.[l] || i,
                    c = o.useMemo(() => u, Object.values(u));
                  return (0, a.jsx)(s.Provider, { value: c, children: r });
                };
                return (
                  (u.displayName = t + "Provider"),
                  [
                    u,
                    function (n, a) {
                      let u = a?.[e]?.[l] || i,
                        s = o.useContext(u);
                      if (s) return s;
                      if (void 0 !== r) return r;
                      throw Error(`\`${n}\` must be used within \`${t}\``);
                    },
                  ]
                );
              },
              (function (...e) {
                let t = e[0];
                if (1 === e.length) return t;
                let n = () => {
                  let n = e.map((e) => ({
                    useScope: e(),
                    scopeName: e.scopeName,
                  }));
                  return function (e) {
                    let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                      let o = n(e)[`__scope${r}`];
                      return { ...t, ...o };
                    }, {});
                    return o.useMemo(
                      () => ({ [`__scope${t.scopeName}`]: r }),
                      [r]
                    );
                  };
                };
                return (n.scopeName = t.scopeName), n;
              })(r, ...t),
            ]
          );
        })(tR, [eB]),
        tO = eB(),
        [tj, tN] = tP(tR),
        tk = (e) => {
          let {
              __scopePopover: t,
              children: n,
              open: r,
              defaultOpen: i,
              onOpenChange: l,
              modal: u = !1,
            } = e,
            s = tO(t),
            c = o.useRef(null),
            [d, f] = o.useState(!1),
            [p = !1, m] = (0, e7.T)({ prop: r, defaultProp: i, onChange: l });
          return (0, a.jsx)(e$, {
            ...s,
            children: (0, a.jsx)(tj, {
              scope: t,
              contentId: (0, y.M)(),
              triggerRef: c,
              open: p,
              onOpenChange: m,
              onOpenToggle: o.useCallback(() => m((e) => !e), [m]),
              hasCustomAnchor: d,
              onCustomAnchorAdd: o.useCallback(() => f(!0), []),
              onCustomAnchorRemove: o.useCallback(() => f(!1), []),
              modal: u,
              children: n,
            }),
          });
        };
      tk.displayName = tR;
      var tM = "PopoverAnchor";
      o.forwardRef((e, t) => {
        let { __scopePopover: n, ...r } = e,
          i = tN(tM, n),
          l = tO(n),
          { onCustomAnchorAdd: u, onCustomAnchorRemove: s } = i;
        return (
          o.useEffect(() => (u(), () => s()), [u, s]),
          (0, a.jsx)(eq, { ...l, ...r, ref: t })
        );
      }).displayName = tM;
      var t_ = "PopoverTrigger",
        tA = o.forwardRef((e, t) => {
          let { __scopePopover: n, ...r } = e,
            o = tN(t_, n),
            s = tO(n),
            c = (0, l.e)(t, o.triggerRef),
            d = (0, a.jsx)(u.WV.button, {
              type: "button",
              "aria-haspopup": "dialog",
              "aria-expanded": o.open,
              "aria-controls": o.contentId,
              "data-state": tH(o.open),
              ...r,
              ref: c,
              onClick: (0, i.M)(e.onClick, o.onOpenToggle),
            });
          return o.hasCustomAnchor
            ? d
            : (0, a.jsx)(eq, { asChild: !0, ...s, children: d });
        });
      tA.displayName = t_;
      var tT = "PopoverPortal",
        [tL, tD] = tP(tT, { forceMount: void 0 }),
        tI = (e) => {
          let {
              __scopePopover: t,
              forceMount: n,
              children: r,
              container: o,
            } = e,
            i = tN(tT, t);
          return (0, a.jsx)(tL, {
            scope: t,
            forceMount: n,
            children: (0, a.jsx)(e8, {
              present: n || i.open,
              children: (0, a.jsx)(e5, {
                asChild: !0,
                container: o,
                children: r,
              }),
            }),
          });
        };
      tI.displayName = tT;
      var tW = "PopoverContent",
        tz = o.forwardRef((e, t) => {
          let n = tD(tW, e.__scopePopover),
            { forceMount: r = n.forceMount, ...o } = e,
            i = tN(tW, e.__scopePopover);
          return (0, a.jsx)(e8, {
            present: r || i.open,
            children: i.modal
              ? (0, a.jsx)(tF, { ...o, ref: t })
              : (0, a.jsx)(tU, { ...o, ref: t }),
          });
        });
      tz.displayName = tW;
      var tF = o.forwardRef((e, t) => {
          let n = tN(tW, e.__scopePopover),
            r = o.useRef(null),
            u = (0, l.e)(t, r),
            s = o.useRef(!1);
          return (
            o.useEffect(() => {
              let e = r.current;
              if (e) return (0, e9.Ry)(e);
            }, []),
            (0, a.jsx)(tC, {
              as: e6.g7,
              allowPinchZoom: !0,
              children: (0, a.jsx)(tB, {
                ...e,
                ref: u,
                trapFocus: n.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: (0, i.M)(e.onCloseAutoFocus, (e) => {
                  var t;
                  e.preventDefault(),
                    s.current ||
                      null === (t = n.triggerRef.current) ||
                      void 0 === t ||
                      t.focus();
                }),
                onPointerDownOutside: (0, i.M)(
                  e.onPointerDownOutside,
                  (e) => {
                    let t = e.detail.originalEvent,
                      n = 0 === t.button && !0 === t.ctrlKey,
                      r = 2 === t.button || n;
                    s.current = r;
                  },
                  { checkForDefaultPrevented: !1 }
                ),
                onFocusOutside: (0, i.M)(
                  e.onFocusOutside,
                  (e) => e.preventDefault(),
                  { checkForDefaultPrevented: !1 }
                ),
              }),
            })
          );
        }),
        tU = o.forwardRef((e, t) => {
          let n = tN(tW, e.__scopePopover),
            r = o.useRef(!1),
            i = o.useRef(!1);
          return (0, a.jsx)(tB, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
              var o, l;
              null === (o = e.onCloseAutoFocus) || void 0 === o || o.call(e, t),
                t.defaultPrevented ||
                  (r.current ||
                    null === (l = n.triggerRef.current) ||
                    void 0 === l ||
                    l.focus(),
                  t.preventDefault()),
                (r.current = !1),
                (i.current = !1);
            },
            onInteractOutside: (t) => {
              var o, l;
              null === (o = e.onInteractOutside) ||
                void 0 === o ||
                o.call(e, t),
                t.defaultPrevented ||
                  ((r.current = !0),
                  "pointerdown" !== t.detail.originalEvent.type ||
                    (i.current = !0));
              let a = t.target;
              (null === (l = n.triggerRef.current) || void 0 === l
                ? void 0
                : l.contains(a)) && t.preventDefault(),
                "focusin" === t.detail.originalEvent.type &&
                  i.current &&
                  t.preventDefault();
            },
          });
        }),
        tB = o.forwardRef((e, t) => {
          let {
              __scopePopover: n,
              trapFocus: r,
              onOpenAutoFocus: i,
              onCloseAutoFocus: l,
              disableOutsidePointerEvents: u,
              onEscapeKeyDown: s,
              onPointerDownOutside: c,
              onFocusOutside: d,
              onInteractOutside: f,
              ...m
            } = e,
            h = tN(tW, n),
            y = tO(n);
          return (
            o.useEffect(() => {
              var e, t;
              let n = document.querySelectorAll("[data-radix-focus-guard]");
              return (
                document.body.insertAdjacentElement(
                  "afterbegin",
                  null !== (e = n[0]) && void 0 !== e ? e : v()
                ),
                document.body.insertAdjacentElement(
                  "beforeend",
                  null !== (t = n[1]) && void 0 !== t ? t : v()
                ),
                g++,
                () => {
                  1 === g &&
                    document
                      .querySelectorAll("[data-radix-focus-guard]")
                      .forEach((e) => e.remove()),
                    g--;
                }
              );
            }, []),
            (0, a.jsx)(b.M, {
              asChild: !0,
              loop: !0,
              trapped: r,
              onMountAutoFocus: i,
              onUnmountAutoFocus: l,
              children: (0, a.jsx)(p, {
                asChild: !0,
                disableOutsidePointerEvents: u,
                onInteractOutside: f,
                onEscapeKeyDown: s,
                onPointerDownOutside: c,
                onFocusOutside: d,
                onDismiss: () => h.onOpenChange(!1),
                children: (0, a.jsx)(eZ, {
                  "data-state": tH(h.open),
                  role: "dialog",
                  id: h.contentId,
                  ...y,
                  ...m,
                  ref: t,
                  style: {
                    ...m.style,
                    "--radix-popover-content-transform-origin":
                      "var(--radix-popper-transform-origin)",
                    "--radix-popover-content-available-width":
                      "var(--radix-popper-available-width)",
                    "--radix-popover-content-available-height":
                      "var(--radix-popper-available-height)",
                    "--radix-popover-trigger-width":
                      "var(--radix-popper-anchor-width)",
                    "--radix-popover-trigger-height":
                      "var(--radix-popper-anchor-height)",
                  },
                }),
              }),
            })
          );
        }),
        tV = "PopoverClose";
      function tH(e) {
        return e ? "open" : "closed";
      }
      (o.forwardRef((e, t) => {
        let { __scopePopover: n, ...r } = e,
          o = tN(tV, n);
        return (0, a.jsx)(u.WV.button, {
          type: "button",
          ...r,
          ref: t,
          onClick: (0, i.M)(e.onClick, () => o.onOpenChange(!1)),
        });
      }).displayName = tV),
        (o.forwardRef((e, t) => {
          let { __scopePopover: n, ...r } = e,
            o = tO(n);
          return (0, a.jsx)(e0, { ...o, ...r, ref: t });
        }).displayName = "PopoverArrow");
      var t$ = tk,
        tY = tA,
        tq = tI,
        tK = tz;
    },
    5171: function (e, t, n) {
      "use strict";
      n.d(t, {
        WV: function () {
          return a;
        },
        jH: function () {
          return u;
        },
      });
      var r = n(2265),
        o = n(4887),
        i = n(1538),
        l = n(7437),
        a = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let n = r.forwardRef((e, n) => {
            let { asChild: r, ...o } = e,
              a = r ? i.g7 : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, l.jsx)(a, { ...o, ref: n })
            );
          });
          return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
        }, {});
      function u(e, t) {
        e && o.flushSync(() => e.dispatchEvent(t));
      }
    },
    1538: function (e, t, n) {
      "use strict";
      n.d(t, {
        g7: function () {
          return l;
        },
      });
      var r = n(2265),
        o = n(1584),
        i = n(7437),
        l = r.forwardRef((e, t) => {
          let { children: n, ...o } = e,
            l = r.Children.toArray(n),
            u = l.find(s);
          if (u) {
            let e = u.props.children,
              n = l.map((t) =>
                t !== u
                  ? t
                  : r.Children.count(e) > 1
                  ? r.Children.only(null)
                  : r.isValidElement(e)
                  ? e.props.children
                  : null
              );
            return (0, i.jsx)(a, {
              ...o,
              ref: t,
              children: r.isValidElement(e)
                ? r.cloneElement(e, void 0, n)
                : null,
            });
          }
          return (0, i.jsx)(a, { ...o, ref: t, children: n });
        });
      l.displayName = "Slot";
      var a = r.forwardRef((e, t) => {
        let { children: n, ...i } = e;
        if (r.isValidElement(n)) {
          let e, l;
          let a =
            (e = Object.getOwnPropertyDescriptor(n.props, "ref")?.get) &&
            "isReactWarning" in e &&
            e.isReactWarning
              ? n.ref
              : (e = Object.getOwnPropertyDescriptor(n, "ref")?.get) &&
                "isReactWarning" in e &&
                e.isReactWarning
              ? n.props.ref
              : n.props.ref || n.ref;
          return r.cloneElement(n, {
            ...(function (e, t) {
              let n = { ...t };
              for (let r in t) {
                let o = e[r],
                  i = t[r];
                /^on[A-Z]/.test(r)
                  ? o && i
                    ? (n[r] = (...e) => {
                        i(...e), o(...e);
                      })
                    : o && (n[r] = o)
                  : "style" === r
                  ? (n[r] = { ...o, ...i })
                  : "className" === r &&
                    (n[r] = [o, i].filter(Boolean).join(" "));
              }
              return { ...e, ...n };
            })(i, n.props),
            ref: t ? (0, o.F)(t, a) : a,
          });
        }
        return r.Children.count(n) > 1 ? r.Children.only(null) : null;
      });
      a.displayName = "SlotClone";
      var u = ({ children: e }) => (0, i.jsx)(i.Fragment, { children: e });
      function s(e) {
        return r.isValidElement(e) && e.type === u;
      }
    },
    5137: function (e, t, n) {
      "use strict";
      n.d(t, {
        W: function () {
          return o;
        },
      });
      var r = n(2265);
      function o(e) {
        let t = r.useRef(e);
        return (
          r.useEffect(() => {
            t.current = e;
          }),
          r.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            []
          )
        );
      }
    },
    1715: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return i;
        },
      });
      var r = n(2265),
        o = n(5137);
      function i({ prop: e, defaultProp: t, onChange: n = () => {} }) {
        let [i, l] = (function ({ defaultProp: e, onChange: t }) {
            let n = r.useState(e),
              [i] = n,
              l = r.useRef(i),
              a = (0, o.W)(t);
            return (
              r.useEffect(() => {
                l.current !== i && (a(i), (l.current = i));
              }, [i, l, a]),
              n
            );
          })({ defaultProp: t, onChange: n }),
          a = void 0 !== e,
          u = a ? e : i,
          s = (0, o.W)(n);
        return [
          u,
          r.useCallback(
            (t) => {
              if (a) {
                let n = "function" == typeof t ? t(e) : t;
                n !== e && s(n);
              } else l(t);
            },
            [a, e, l, s]
          ),
        ];
      }
    },
    6486: function (e, t, n) {
      "use strict";
      n.d(t, {
        e: function () {
          return i;
        },
      });
      var r = n(2265),
        o = n(5137);
      function i(e, t = globalThis?.document) {
        let n = (0, o.W)(e);
        r.useEffect(() => {
          let e = (e) => {
            "Escape" === e.key && n(e);
          };
          return (
            t.addEventListener("keydown", e, { capture: !0 }),
            () => t.removeEventListener("keydown", e, { capture: !0 })
          );
        }, [n, t]);
      }
    },
    1336: function (e, t, n) {
      "use strict";
      n.d(t, {
        b: function () {
          return o;
        },
      });
      var r = n(2265),
        o = globalThis?.document ? r.useLayoutEffect : () => {};
    },
    2218: function (e, t, n) {
      "use strict";
      n.d(t, {
        j: function () {
          return i;
        },
      });
      let r = (e) => ("boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e),
        o = function () {
          for (var e, t, n = 0, r = ""; n < arguments.length; )
            (e = arguments[n++]) &&
              (t = (function e(t) {
                var n,
                  r,
                  o = "";
                if ("string" == typeof t || "number" == typeof t) o += t;
                else if ("object" == typeof t) {
                  if (Array.isArray(t))
                    for (n = 0; n < t.length; n++)
                      t[n] && (r = e(t[n])) && (o && (o += " "), (o += r));
                  else for (n in t) t[n] && (o && (o += " "), (o += n));
                }
                return o;
              })(e)) &&
              (r && (r += " "), (r += t));
          return r;
        },
        i = (e, t) => (n) => {
          var i;
          if ((null == t ? void 0 : t.variants) == null)
            return o(
              e,
              null == n ? void 0 : n.class,
              null == n ? void 0 : n.className
            );
          let { variants: l, defaultVariants: a } = t,
            u = Object.keys(l).map((e) => {
              let t = null == n ? void 0 : n[e],
                o = null == a ? void 0 : a[e];
              if (null === t) return null;
              let i = r(t) || r(o);
              return l[e][i];
            }),
            s =
              n &&
              Object.entries(n).reduce((e, t) => {
                let [n, r] = t;
                return void 0 === r || (e[n] = r), e;
              }, {});
          return o(
            e,
            u,
            null == t
              ? void 0
              : null === (i = t.compoundVariants) || void 0 === i
              ? void 0
              : i.reduce((e, t) => {
                  let { class: n, className: r, ...o } = t;
                  return Object.entries(o).every((e) => {
                    let [t, n] = e;
                    return Array.isArray(n)
                      ? n.includes({ ...a, ...s }[t])
                      : { ...a, ...s }[t] === n;
                  })
                    ? [...e, n, r]
                    : e;
                }, []),
            null == n ? void 0 : n.class,
            null == n ? void 0 : n.className
          );
        };
    },
    4839: function (e, t, n) {
      "use strict";
      function r() {
        for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
          (e = arguments[n]) &&
            (t = (function e(t) {
              var n,
                r,
                o = "";
              if ("string" == typeof t || "number" == typeof t) o += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t)) {
                  var i = t.length;
                  for (n = 0; n < i; n++)
                    t[n] && (r = e(t[n])) && (o && (o += " "), (o += r));
                } else for (r in t) t[r] && (o && (o += " "), (o += r));
              }
              return o;
            })(e)) &&
            (r && (r += " "), (r += t));
        return r;
      }
      n.d(t, {
        W: function () {
          return r;
        },
      });
    },
    6164: function (e, t, n) {
      "use strict";
      n.d(t, {
        m6: function () {
          return G;
        },
      });
      let r = (e) => {
          let t = a(e),
            { conflictingClassGroups: n, conflictingClassGroupModifiers: r } =
              e;
          return {
            getClassGroupId: (e) => {
              let n = e.split("-");
              return (
                "" === n[0] && 1 !== n.length && n.shift(), o(n, t) || l(e)
              );
            },
            getConflictingClassGroupIds: (e, t) => {
              let o = n[e] || [];
              return t && r[e] ? [...o, ...r[e]] : o;
            },
          };
        },
        o = (e, t) => {
          if (0 === e.length) return t.classGroupId;
          let n = e[0],
            r = t.nextPart.get(n),
            i = r ? o(e.slice(1), r) : void 0;
          if (i) return i;
          if (0 === t.validators.length) return;
          let l = e.join("-");
          return t.validators.find(({ validator: e }) => e(l))?.classGroupId;
        },
        i = /^\[(.+)\]$/,
        l = (e) => {
          if (i.test(e)) {
            let t = i.exec(e)[1],
              n = t?.substring(0, t.indexOf(":"));
            if (n) return "arbitrary.." + n;
          }
        },
        a = (e) => {
          let { theme: t, prefix: n } = e,
            r = { nextPart: new Map(), validators: [] };
          return (
            d(Object.entries(e.classGroups), n).forEach(([e, n]) => {
              u(n, r, e, t);
            }),
            r
          );
        },
        u = (e, t, n, r) => {
          e.forEach((e) => {
            if ("string" == typeof e) {
              ("" === e ? t : s(t, e)).classGroupId = n;
              return;
            }
            if ("function" == typeof e) {
              if (c(e)) {
                u(e(r), t, n, r);
                return;
              }
              t.validators.push({ validator: e, classGroupId: n });
              return;
            }
            Object.entries(e).forEach(([e, o]) => {
              u(o, s(t, e), n, r);
            });
          });
        },
        s = (e, t) => {
          let n = e;
          return (
            t.split("-").forEach((e) => {
              n.nextPart.has(e) ||
                n.nextPart.set(e, { nextPart: new Map(), validators: [] }),
                (n = n.nextPart.get(e));
            }),
            n
          );
        },
        c = (e) => e.isThemeGetter,
        d = (e, t) =>
          t
            ? e.map(([e, n]) => [
                e,
                n.map((e) =>
                  "string" == typeof e
                    ? t + e
                    : "object" == typeof e
                    ? Object.fromEntries(
                        Object.entries(e).map(([e, n]) => [t + e, n])
                      )
                    : e
                ),
              ])
            : e,
        f = (e) => {
          if (e < 1) return { get: () => void 0, set: () => {} };
          let t = 0,
            n = new Map(),
            r = new Map(),
            o = (o, i) => {
              n.set(o, i), ++t > e && ((t = 0), (r = n), (n = new Map()));
            };
          return {
            get(e) {
              let t = n.get(e);
              return void 0 !== t
                ? t
                : void 0 !== (t = r.get(e))
                ? (o(e, t), t)
                : void 0;
            },
            set(e, t) {
              n.has(e) ? n.set(e, t) : o(e, t);
            },
          };
        },
        p = (e) => {
          let { separator: t, experimentalParseClassName: n } = e,
            r = 1 === t.length,
            o = t[0],
            i = t.length,
            l = (e) => {
              let n;
              let l = [],
                a = 0,
                u = 0;
              for (let s = 0; s < e.length; s++) {
                let c = e[s];
                if (0 === a) {
                  if (c === o && (r || e.slice(s, s + i) === t)) {
                    l.push(e.slice(u, s)), (u = s + i);
                    continue;
                  }
                  if ("/" === c) {
                    n = s;
                    continue;
                  }
                }
                "[" === c ? a++ : "]" === c && a--;
              }
              let s = 0 === l.length ? e : e.substring(u),
                c = s.startsWith("!"),
                d = c ? s.substring(1) : s;
              return {
                modifiers: l,
                hasImportantModifier: c,
                baseClassName: d,
                maybePostfixModifierPosition: n && n > u ? n - u : void 0,
              };
            };
          return n ? (e) => n({ className: e, parseClassName: l }) : l;
        },
        m = (e) => {
          if (e.length <= 1) return e;
          let t = [],
            n = [];
          return (
            e.forEach((e) => {
              "[" === e[0] ? (t.push(...n.sort(), e), (n = [])) : n.push(e);
            }),
            t.push(...n.sort()),
            t
          );
        },
        h = (e) => ({ cache: f(e.cacheSize), parseClassName: p(e), ...r(e) }),
        g = /\s+/,
        v = (e, t) => {
          let {
              parseClassName: n,
              getClassGroupId: r,
              getConflictingClassGroupIds: o,
            } = t,
            i = [],
            l = e.trim().split(g),
            a = "";
          for (let e = l.length - 1; e >= 0; e -= 1) {
            let t = l[e],
              {
                modifiers: u,
                hasImportantModifier: s,
                baseClassName: c,
                maybePostfixModifierPosition: d,
              } = n(t),
              f = !!d,
              p = r(f ? c.substring(0, d) : c);
            if (!p) {
              if (!f || !(p = r(c))) {
                a = t + (a.length > 0 ? " " + a : a);
                continue;
              }
              f = !1;
            }
            let h = m(u).join(":"),
              g = s ? h + "!" : h,
              v = g + p;
            if (i.includes(v)) continue;
            i.push(v);
            let b = o(p, f);
            for (let e = 0; e < b.length; ++e) {
              let t = b[e];
              i.push(g + t);
            }
            a = t + (a.length > 0 ? " " + a : a);
          }
          return a;
        };
      function b() {
        let e,
          t,
          n = 0,
          r = "";
        for (; n < arguments.length; )
          (e = arguments[n++]) && (t = y(e)) && (r && (r += " "), (r += t));
        return r;
      }
      let y = (e) => {
          let t;
          if ("string" == typeof e) return e;
          let n = "";
          for (let r = 0; r < e.length; r++)
            e[r] && (t = y(e[r])) && (n && (n += " "), (n += t));
          return n;
        },
        w = (e) => {
          let t = (t) => t[e] || [];
          return (t.isThemeGetter = !0), t;
        },
        x = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        E = /^\d+\/\d+$/,
        C = new Set(["px", "full", "screen"]),
        R = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        P =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        S = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        O = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        j =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
        N = (e) => M(e) || C.has(e) || E.test(e),
        k = (e) => H(e, "length", $),
        M = (e) => !!e && !Number.isNaN(Number(e)),
        _ = (e) => H(e, "number", M),
        A = (e) => !!e && Number.isInteger(Number(e)),
        T = (e) => e.endsWith("%") && M(e.slice(0, -1)),
        L = (e) => x.test(e),
        D = (e) => R.test(e),
        I = new Set(["length", "size", "percentage"]),
        W = (e) => H(e, I, Y),
        z = (e) => H(e, "position", Y),
        F = new Set(["image", "url"]),
        U = (e) => H(e, F, K),
        B = (e) => H(e, "", q),
        V = () => !0,
        H = (e, t, n) => {
          let r = x.exec(e);
          return (
            !!r &&
            (r[1] ? ("string" == typeof t ? r[1] === t : t.has(r[1])) : n(r[2]))
          );
        },
        $ = (e) => P.test(e) && !S.test(e),
        Y = () => !1,
        q = (e) => O.test(e),
        K = (e) => j.test(e),
        G = (function (e, ...t) {
          let n, r, o;
          let i = function (a) {
            return (
              (r = (n = h(t.reduce((e, t) => t(e), e()))).cache.get),
              (o = n.cache.set),
              (i = l),
              l(a)
            );
          };
          function l(e) {
            let t = r(e);
            if (t) return t;
            let i = v(e, n);
            return o(e, i), i;
          }
          return function () {
            return i(b.apply(null, arguments));
          };
        })(() => {
          let e = w("colors"),
            t = w("spacing"),
            n = w("blur"),
            r = w("brightness"),
            o = w("borderColor"),
            i = w("borderRadius"),
            l = w("borderSpacing"),
            a = w("borderWidth"),
            u = w("contrast"),
            s = w("grayscale"),
            c = w("hueRotate"),
            d = w("invert"),
            f = w("gap"),
            p = w("gradientColorStops"),
            m = w("gradientColorStopPositions"),
            h = w("inset"),
            g = w("margin"),
            v = w("opacity"),
            b = w("padding"),
            y = w("saturate"),
            x = w("scale"),
            E = w("sepia"),
            C = w("skew"),
            R = w("space"),
            P = w("translate"),
            S = () => ["auto", "contain", "none"],
            O = () => ["auto", "hidden", "clip", "visible", "scroll"],
            j = () => ["auto", L, t],
            I = () => [L, t],
            F = () => ["", N, k],
            H = () => ["auto", M, L],
            $ = () => [
              "bottom",
              "center",
              "left",
              "left-bottom",
              "left-top",
              "right",
              "right-bottom",
              "right-top",
              "top",
            ],
            Y = () => ["solid", "dashed", "dotted", "double", "none"],
            q = () => [
              "normal",
              "multiply",
              "screen",
              "overlay",
              "darken",
              "lighten",
              "color-dodge",
              "color-burn",
              "hard-light",
              "soft-light",
              "difference",
              "exclusion",
              "hue",
              "saturation",
              "color",
              "luminosity",
            ],
            K = () => [
              "start",
              "end",
              "center",
              "between",
              "around",
              "evenly",
              "stretch",
            ],
            G = () => ["", "0", L],
            X = () => [
              "auto",
              "avoid",
              "all",
              "avoid-page",
              "page",
              "left",
              "right",
              "column",
            ],
            Z = () => [M, L];
          return {
            cacheSize: 500,
            separator: ":",
            theme: {
              colors: [V],
              spacing: [N, k],
              blur: ["none", "", D, L],
              brightness: Z(),
              borderColor: [e],
              borderRadius: ["none", "", "full", D, L],
              borderSpacing: I(),
              borderWidth: F(),
              contrast: Z(),
              grayscale: G(),
              hueRotate: Z(),
              invert: G(),
              gap: I(),
              gradientColorStops: [e],
              gradientColorStopPositions: [T, k],
              inset: j(),
              margin: j(),
              opacity: Z(),
              padding: I(),
              saturate: Z(),
              scale: Z(),
              sepia: G(),
              skew: Z(),
              space: I(),
              translate: I(),
            },
            classGroups: {
              aspect: [{ aspect: ["auto", "square", "video", L] }],
              container: ["container"],
              columns: [{ columns: [D] }],
              "break-after": [{ "break-after": X() }],
              "break-before": [{ "break-before": X() }],
              "break-inside": [
                {
                  "break-inside": [
                    "auto",
                    "avoid",
                    "avoid-page",
                    "avoid-column",
                  ],
                },
              ],
              "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
              box: [{ box: ["border", "content"] }],
              display: [
                "block",
                "inline-block",
                "inline",
                "flex",
                "inline-flex",
                "table",
                "inline-table",
                "table-caption",
                "table-cell",
                "table-column",
                "table-column-group",
                "table-footer-group",
                "table-header-group",
                "table-row-group",
                "table-row",
                "flow-root",
                "grid",
                "inline-grid",
                "contents",
                "list-item",
                "hidden",
              ],
              float: [{ float: ["right", "left", "none", "start", "end"] }],
              clear: [
                { clear: ["left", "right", "both", "none", "start", "end"] },
              ],
              isolation: ["isolate", "isolation-auto"],
              "object-fit": [
                { object: ["contain", "cover", "fill", "none", "scale-down"] },
              ],
              "object-position": [{ object: [...$(), L] }],
              overflow: [{ overflow: O() }],
              "overflow-x": [{ "overflow-x": O() }],
              "overflow-y": [{ "overflow-y": O() }],
              overscroll: [{ overscroll: S() }],
              "overscroll-x": [{ "overscroll-x": S() }],
              "overscroll-y": [{ "overscroll-y": S() }],
              position: ["static", "fixed", "absolute", "relative", "sticky"],
              inset: [{ inset: [h] }],
              "inset-x": [{ "inset-x": [h] }],
              "inset-y": [{ "inset-y": [h] }],
              start: [{ start: [h] }],
              end: [{ end: [h] }],
              top: [{ top: [h] }],
              right: [{ right: [h] }],
              bottom: [{ bottom: [h] }],
              left: [{ left: [h] }],
              visibility: ["visible", "invisible", "collapse"],
              z: [{ z: ["auto", A, L] }],
              basis: [{ basis: j() }],
              "flex-direction": [
                { flex: ["row", "row-reverse", "col", "col-reverse"] },
              ],
              "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
              flex: [{ flex: ["1", "auto", "initial", "none", L] }],
              grow: [{ grow: G() }],
              shrink: [{ shrink: G() }],
              order: [{ order: ["first", "last", "none", A, L] }],
              "grid-cols": [{ "grid-cols": [V] }],
              "col-start-end": [{ col: ["auto", { span: ["full", A, L] }, L] }],
              "col-start": [{ "col-start": H() }],
              "col-end": [{ "col-end": H() }],
              "grid-rows": [{ "grid-rows": [V] }],
              "row-start-end": [{ row: ["auto", { span: [A, L] }, L] }],
              "row-start": [{ "row-start": H() }],
              "row-end": [{ "row-end": H() }],
              "grid-flow": [
                {
                  "grid-flow": [
                    "row",
                    "col",
                    "dense",
                    "row-dense",
                    "col-dense",
                  ],
                },
              ],
              "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", L] }],
              "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", L] }],
              gap: [{ gap: [f] }],
              "gap-x": [{ "gap-x": [f] }],
              "gap-y": [{ "gap-y": [f] }],
              "justify-content": [{ justify: ["normal", ...K()] }],
              "justify-items": [
                { "justify-items": ["start", "end", "center", "stretch"] },
              ],
              "justify-self": [
                {
                  "justify-self": ["auto", "start", "end", "center", "stretch"],
                },
              ],
              "align-content": [{ content: ["normal", ...K(), "baseline"] }],
              "align-items": [
                { items: ["start", "end", "center", "baseline", "stretch"] },
              ],
              "align-self": [
                {
                  self: [
                    "auto",
                    "start",
                    "end",
                    "center",
                    "stretch",
                    "baseline",
                  ],
                },
              ],
              "place-content": [{ "place-content": [...K(), "baseline"] }],
              "place-items": [
                {
                  "place-items": [
                    "start",
                    "end",
                    "center",
                    "baseline",
                    "stretch",
                  ],
                },
              ],
              "place-self": [
                { "place-self": ["auto", "start", "end", "center", "stretch"] },
              ],
              p: [{ p: [b] }],
              px: [{ px: [b] }],
              py: [{ py: [b] }],
              ps: [{ ps: [b] }],
              pe: [{ pe: [b] }],
              pt: [{ pt: [b] }],
              pr: [{ pr: [b] }],
              pb: [{ pb: [b] }],
              pl: [{ pl: [b] }],
              m: [{ m: [g] }],
              mx: [{ mx: [g] }],
              my: [{ my: [g] }],
              ms: [{ ms: [g] }],
              me: [{ me: [g] }],
              mt: [{ mt: [g] }],
              mr: [{ mr: [g] }],
              mb: [{ mb: [g] }],
              ml: [{ ml: [g] }],
              "space-x": [{ "space-x": [R] }],
              "space-x-reverse": ["space-x-reverse"],
              "space-y": [{ "space-y": [R] }],
              "space-y-reverse": ["space-y-reverse"],
              w: [
                { w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", L, t] },
              ],
              "min-w": [{ "min-w": [L, t, "min", "max", "fit"] }],
              "max-w": [
                {
                  "max-w": [
                    L,
                    t,
                    "none",
                    "full",
                    "min",
                    "max",
                    "fit",
                    "prose",
                    { screen: [D] },
                    D,
                  ],
                },
              ],
              h: [
                { h: [L, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] },
              ],
              "min-h": [
                { "min-h": [L, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
              ],
              "max-h": [
                { "max-h": [L, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
              ],
              size: [{ size: [L, t, "auto", "min", "max", "fit"] }],
              "font-size": [{ text: ["base", D, k] }],
              "font-smoothing": ["antialiased", "subpixel-antialiased"],
              "font-style": ["italic", "not-italic"],
              "font-weight": [
                {
                  font: [
                    "thin",
                    "extralight",
                    "light",
                    "normal",
                    "medium",
                    "semibold",
                    "bold",
                    "extrabold",
                    "black",
                    _,
                  ],
                },
              ],
              "font-family": [{ font: [V] }],
              "fvn-normal": ["normal-nums"],
              "fvn-ordinal": ["ordinal"],
              "fvn-slashed-zero": ["slashed-zero"],
              "fvn-figure": ["lining-nums", "oldstyle-nums"],
              "fvn-spacing": ["proportional-nums", "tabular-nums"],
              "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
              tracking: [
                {
                  tracking: [
                    "tighter",
                    "tight",
                    "normal",
                    "wide",
                    "wider",
                    "widest",
                    L,
                  ],
                },
              ],
              "line-clamp": [{ "line-clamp": ["none", M, _] }],
              leading: [
                {
                  leading: [
                    "none",
                    "tight",
                    "snug",
                    "normal",
                    "relaxed",
                    "loose",
                    N,
                    L,
                  ],
                },
              ],
              "list-image": [{ "list-image": ["none", L] }],
              "list-style-type": [{ list: ["none", "disc", "decimal", L] }],
              "list-style-position": [{ list: ["inside", "outside"] }],
              "placeholder-color": [{ placeholder: [e] }],
              "placeholder-opacity": [{ "placeholder-opacity": [v] }],
              "text-alignment": [
                {
                  text: ["left", "center", "right", "justify", "start", "end"],
                },
              ],
              "text-color": [{ text: [e] }],
              "text-opacity": [{ "text-opacity": [v] }],
              "text-decoration": [
                "underline",
                "overline",
                "line-through",
                "no-underline",
              ],
              "text-decoration-style": [{ decoration: [...Y(), "wavy"] }],
              "text-decoration-thickness": [
                { decoration: ["auto", "from-font", N, k] },
              ],
              "underline-offset": [{ "underline-offset": ["auto", N, L] }],
              "text-decoration-color": [{ decoration: [e] }],
              "text-transform": [
                "uppercase",
                "lowercase",
                "capitalize",
                "normal-case",
              ],
              "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
              "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
              indent: [{ indent: I() }],
              "vertical-align": [
                {
                  align: [
                    "baseline",
                    "top",
                    "middle",
                    "bottom",
                    "text-top",
                    "text-bottom",
                    "sub",
                    "super",
                    L,
                  ],
                },
              ],
              whitespace: [
                {
                  whitespace: [
                    "normal",
                    "nowrap",
                    "pre",
                    "pre-line",
                    "pre-wrap",
                    "break-spaces",
                  ],
                },
              ],
              break: [{ break: ["normal", "words", "all", "keep"] }],
              hyphens: [{ hyphens: ["none", "manual", "auto"] }],
              content: [{ content: ["none", L] }],
              "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
              "bg-clip": [
                { "bg-clip": ["border", "padding", "content", "text"] },
              ],
              "bg-opacity": [{ "bg-opacity": [v] }],
              "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
              "bg-position": [{ bg: [...$(), z] }],
              "bg-repeat": [
                {
                  bg: [
                    "no-repeat",
                    { repeat: ["", "x", "y", "round", "space"] },
                  ],
                },
              ],
              "bg-size": [{ bg: ["auto", "cover", "contain", W] }],
              "bg-image": [
                {
                  bg: [
                    "none",
                    {
                      "gradient-to": [
                        "t",
                        "tr",
                        "r",
                        "br",
                        "b",
                        "bl",
                        "l",
                        "tl",
                      ],
                    },
                    U,
                  ],
                },
              ],
              "bg-color": [{ bg: [e] }],
              "gradient-from-pos": [{ from: [m] }],
              "gradient-via-pos": [{ via: [m] }],
              "gradient-to-pos": [{ to: [m] }],
              "gradient-from": [{ from: [p] }],
              "gradient-via": [{ via: [p] }],
              "gradient-to": [{ to: [p] }],
              rounded: [{ rounded: [i] }],
              "rounded-s": [{ "rounded-s": [i] }],
              "rounded-e": [{ "rounded-e": [i] }],
              "rounded-t": [{ "rounded-t": [i] }],
              "rounded-r": [{ "rounded-r": [i] }],
              "rounded-b": [{ "rounded-b": [i] }],
              "rounded-l": [{ "rounded-l": [i] }],
              "rounded-ss": [{ "rounded-ss": [i] }],
              "rounded-se": [{ "rounded-se": [i] }],
              "rounded-ee": [{ "rounded-ee": [i] }],
              "rounded-es": [{ "rounded-es": [i] }],
              "rounded-tl": [{ "rounded-tl": [i] }],
              "rounded-tr": [{ "rounded-tr": [i] }],
              "rounded-br": [{ "rounded-br": [i] }],
              "rounded-bl": [{ "rounded-bl": [i] }],
              "border-w": [{ border: [a] }],
              "border-w-x": [{ "border-x": [a] }],
              "border-w-y": [{ "border-y": [a] }],
              "border-w-s": [{ "border-s": [a] }],
              "border-w-e": [{ "border-e": [a] }],
              "border-w-t": [{ "border-t": [a] }],
              "border-w-r": [{ "border-r": [a] }],
              "border-w-b": [{ "border-b": [a] }],
              "border-w-l": [{ "border-l": [a] }],
              "border-opacity": [{ "border-opacity": [v] }],
              "border-style": [{ border: [...Y(), "hidden"] }],
              "divide-x": [{ "divide-x": [a] }],
              "divide-x-reverse": ["divide-x-reverse"],
              "divide-y": [{ "divide-y": [a] }],
              "divide-y-reverse": ["divide-y-reverse"],
              "divide-opacity": [{ "divide-opacity": [v] }],
              "divide-style": [{ divide: Y() }],
              "border-color": [{ border: [o] }],
              "border-color-x": [{ "border-x": [o] }],
              "border-color-y": [{ "border-y": [o] }],
              "border-color-t": [{ "border-t": [o] }],
              "border-color-r": [{ "border-r": [o] }],
              "border-color-b": [{ "border-b": [o] }],
              "border-color-l": [{ "border-l": [o] }],
              "divide-color": [{ divide: [o] }],
              "outline-style": [{ outline: ["", ...Y()] }],
              "outline-offset": [{ "outline-offset": [N, L] }],
              "outline-w": [{ outline: [N, k] }],
              "outline-color": [{ outline: [e] }],
              "ring-w": [{ ring: F() }],
              "ring-w-inset": ["ring-inset"],
              "ring-color": [{ ring: [e] }],
              "ring-opacity": [{ "ring-opacity": [v] }],
              "ring-offset-w": [{ "ring-offset": [N, k] }],
              "ring-offset-color": [{ "ring-offset": [e] }],
              shadow: [{ shadow: ["", "inner", "none", D, B] }],
              "shadow-color": [{ shadow: [V] }],
              opacity: [{ opacity: [v] }],
              "mix-blend": [
                { "mix-blend": [...q(), "plus-lighter", "plus-darker"] },
              ],
              "bg-blend": [{ "bg-blend": q() }],
              filter: [{ filter: ["", "none"] }],
              blur: [{ blur: [n] }],
              brightness: [{ brightness: [r] }],
              contrast: [{ contrast: [u] }],
              "drop-shadow": [{ "drop-shadow": ["", "none", D, L] }],
              grayscale: [{ grayscale: [s] }],
              "hue-rotate": [{ "hue-rotate": [c] }],
              invert: [{ invert: [d] }],
              saturate: [{ saturate: [y] }],
              sepia: [{ sepia: [E] }],
              "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
              "backdrop-blur": [{ "backdrop-blur": [n] }],
              "backdrop-brightness": [{ "backdrop-brightness": [r] }],
              "backdrop-contrast": [{ "backdrop-contrast": [u] }],
              "backdrop-grayscale": [{ "backdrop-grayscale": [s] }],
              "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
              "backdrop-invert": [{ "backdrop-invert": [d] }],
              "backdrop-opacity": [{ "backdrop-opacity": [v] }],
              "backdrop-saturate": [{ "backdrop-saturate": [y] }],
              "backdrop-sepia": [{ "backdrop-sepia": [E] }],
              "border-collapse": [{ border: ["collapse", "separate"] }],
              "border-spacing": [{ "border-spacing": [l] }],
              "border-spacing-x": [{ "border-spacing-x": [l] }],
              "border-spacing-y": [{ "border-spacing-y": [l] }],
              "table-layout": [{ table: ["auto", "fixed"] }],
              caption: [{ caption: ["top", "bottom"] }],
              transition: [
                {
                  transition: [
                    "none",
                    "all",
                    "",
                    "colors",
                    "opacity",
                    "shadow",
                    "transform",
                    L,
                  ],
                },
              ],
              duration: [{ duration: Z() }],
              ease: [{ ease: ["linear", "in", "out", "in-out", L] }],
              delay: [{ delay: Z() }],
              animate: [
                { animate: ["none", "spin", "ping", "pulse", "bounce", L] },
              ],
              transform: [{ transform: ["", "gpu", "none"] }],
              scale: [{ scale: [x] }],
              "scale-x": [{ "scale-x": [x] }],
              "scale-y": [{ "scale-y": [x] }],
              rotate: [{ rotate: [A, L] }],
              "translate-x": [{ "translate-x": [P] }],
              "translate-y": [{ "translate-y": [P] }],
              "skew-x": [{ "skew-x": [C] }],
              "skew-y": [{ "skew-y": [C] }],
              "transform-origin": [
                {
                  origin: [
                    "center",
                    "top",
                    "top-right",
                    "right",
                    "bottom-right",
                    "bottom",
                    "bottom-left",
                    "left",
                    "top-left",
                    L,
                  ],
                },
              ],
              accent: [{ accent: ["auto", e] }],
              appearance: [{ appearance: ["none", "auto"] }],
              cursor: [
                {
                  cursor: [
                    "auto",
                    "default",
                    "pointer",
                    "wait",
                    "text",
                    "move",
                    "help",
                    "not-allowed",
                    "none",
                    "context-menu",
                    "progress",
                    "cell",
                    "crosshair",
                    "vertical-text",
                    "alias",
                    "copy",
                    "no-drop",
                    "grab",
                    "grabbing",
                    "all-scroll",
                    "col-resize",
                    "row-resize",
                    "n-resize",
                    "e-resize",
                    "s-resize",
                    "w-resize",
                    "ne-resize",
                    "nw-resize",
                    "se-resize",
                    "sw-resize",
                    "ew-resize",
                    "ns-resize",
                    "nesw-resize",
                    "nwse-resize",
                    "zoom-in",
                    "zoom-out",
                    L,
                  ],
                },
              ],
              "caret-color": [{ caret: [e] }],
              "pointer-events": [{ "pointer-events": ["none", "auto"] }],
              resize: [{ resize: ["none", "y", "x", ""] }],
              "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
              "scroll-m": [{ "scroll-m": I() }],
              "scroll-mx": [{ "scroll-mx": I() }],
              "scroll-my": [{ "scroll-my": I() }],
              "scroll-ms": [{ "scroll-ms": I() }],
              "scroll-me": [{ "scroll-me": I() }],
              "scroll-mt": [{ "scroll-mt": I() }],
              "scroll-mr": [{ "scroll-mr": I() }],
              "scroll-mb": [{ "scroll-mb": I() }],
              "scroll-ml": [{ "scroll-ml": I() }],
              "scroll-p": [{ "scroll-p": I() }],
              "scroll-px": [{ "scroll-px": I() }],
              "scroll-py": [{ "scroll-py": I() }],
              "scroll-ps": [{ "scroll-ps": I() }],
              "scroll-pe": [{ "scroll-pe": I() }],
              "scroll-pt": [{ "scroll-pt": I() }],
              "scroll-pr": [{ "scroll-pr": I() }],
              "scroll-pb": [{ "scroll-pb": I() }],
              "scroll-pl": [{ "scroll-pl": I() }],
              "snap-align": [
                { snap: ["start", "end", "center", "align-none"] },
              ],
              "snap-stop": [{ snap: ["normal", "always"] }],
              "snap-type": [{ snap: ["none", "x", "y", "both"] }],
              "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
              touch: [{ touch: ["auto", "none", "manipulation"] }],
              "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
              "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
              "touch-pz": ["touch-pinch-zoom"],
              select: [{ select: ["none", "text", "all", "auto"] }],
              "will-change": [
                {
                  "will-change": ["auto", "scroll", "contents", "transform", L],
                },
              ],
              fill: [{ fill: [e, "none"] }],
              "stroke-w": [{ stroke: [N, k, _] }],
              stroke: [{ stroke: [e, "none"] }],
              sr: ["sr-only", "not-sr-only"],
              "forced-color-adjust": [
                { "forced-color-adjust": ["auto", "none"] },
              ],
            },
            conflictingClassGroups: {
              overflow: ["overflow-x", "overflow-y"],
              overscroll: ["overscroll-x", "overscroll-y"],
              inset: [
                "inset-x",
                "inset-y",
                "start",
                "end",
                "top",
                "right",
                "bottom",
                "left",
              ],
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
              "fvn-normal": [
                "fvn-ordinal",
                "fvn-slashed-zero",
                "fvn-figure",
                "fvn-spacing",
                "fvn-fraction",
              ],
              "fvn-ordinal": ["fvn-normal"],
              "fvn-slashed-zero": ["fvn-normal"],
              "fvn-figure": ["fvn-normal"],
              "fvn-spacing": ["fvn-normal"],
              "fvn-fraction": ["fvn-normal"],
              "line-clamp": ["display", "overflow"],
              rounded: [
                "rounded-s",
                "rounded-e",
                "rounded-t",
                "rounded-r",
                "rounded-b",
                "rounded-l",
                "rounded-ss",
                "rounded-se",
                "rounded-ee",
                "rounded-es",
                "rounded-tl",
                "rounded-tr",
                "rounded-br",
                "rounded-bl",
              ],
              "rounded-s": ["rounded-ss", "rounded-es"],
              "rounded-e": ["rounded-se", "rounded-ee"],
              "rounded-t": ["rounded-tl", "rounded-tr"],
              "rounded-r": ["rounded-tr", "rounded-br"],
              "rounded-b": ["rounded-br", "rounded-bl"],
              "rounded-l": ["rounded-tl", "rounded-bl"],
              "border-spacing": ["border-spacing-x", "border-spacing-y"],
              "border-w": [
                "border-w-s",
                "border-w-e",
                "border-w-t",
                "border-w-r",
                "border-w-b",
                "border-w-l",
              ],
              "border-w-x": ["border-w-r", "border-w-l"],
              "border-w-y": ["border-w-t", "border-w-b"],
              "border-color": [
                "border-color-t",
                "border-color-r",
                "border-color-b",
                "border-color-l",
              ],
              "border-color-x": ["border-color-r", "border-color-l"],
              "border-color-y": ["border-color-t", "border-color-b"],
              "scroll-m": [
                "scroll-mx",
                "scroll-my",
                "scroll-ms",
                "scroll-me",
                "scroll-mt",
                "scroll-mr",
                "scroll-mb",
                "scroll-ml",
              ],
              "scroll-mx": ["scroll-mr", "scroll-ml"],
              "scroll-my": ["scroll-mt", "scroll-mb"],
              "scroll-p": [
                "scroll-px",
                "scroll-py",
                "scroll-ps",
                "scroll-pe",
                "scroll-pt",
                "scroll-pr",
                "scroll-pb",
                "scroll-pl",
              ],
              "scroll-px": ["scroll-pr", "scroll-pl"],
              "scroll-py": ["scroll-pt", "scroll-pb"],
              touch: ["touch-x", "touch-y", "touch-pz"],
              "touch-x": ["touch"],
              "touch-y": ["touch"],
              "touch-pz": ["touch"],
            },
            conflictingClassGroupModifiers: { "font-size": ["leading"] },
          };
        });
    },
    1735: function (e, t, n) {
      "use strict";
      n.d(t, {
        _T: function () {
          return o;
        },
        ev: function () {
          return i;
        },
        pi: function () {
          return r;
        },
      });
      var r = function () {
        return (r =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
      function o(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var o = 0, r = Object.getOwnPropertySymbols(e);
            o < r.length;
            o++
          )
            0 > t.indexOf(r[o]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        return n;
      }
      function i(e, t, n) {
        if (n || 2 == arguments.length)
          for (var r, o = 0, i = t.length; o < i; o++)
            (!r && o in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      "function" == typeof SuppressedError && SuppressedError;
    },
  },
]);
