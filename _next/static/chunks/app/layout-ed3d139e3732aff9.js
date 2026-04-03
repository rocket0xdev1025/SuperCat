(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    35: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 5739)),
        Promise.resolve().then(n.t.bind(n, 4671, 23)),
        Promise.resolve().then(n.t.bind(n, 4662, 23)),
        Promise.resolve().then(n.t.bind(n, 913, 23)),
        Promise.resolve().then(n.t.bind(n, 8381, 23)),
        Promise.resolve().then(n.t.bind(n, 1457, 23)),
        Promise.resolve().then(n.t.bind(n, 3054, 23));
    },
    3054: function () {},
    4662: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Dangrek_3b68b5', '__Dangrek_Fallback_3b68b5'",
          fontWeight: 400,
          fontStyle: "normal",
        },
        className: "__className_3b68b5",
        variable: "__variable_3b68b5",
      };
    },
    4671: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Inter_d65c78', '__Inter_Fallback_d65c78'",
          fontStyle: "normal",
        },
        className: "__className_d65c78",
      };
    },
    1457: function (e) {
      e.exports = {
        style: { fontFamily: "'__arco_9ca255', '__arco_Fallback_9ca255'" },
        className: "__className_9ca255",
        variable: "__variable_9ca255",
      };
    },
    8381: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__extended_dd391e', '__extended_Fallback_dd391e'",
        },
        className: "__className_dd391e",
        variable: "__variable_dd391e",
      };
    },
    913: function (e) {
      e.exports = {
        style: {
          fontFamily:
            "'__fightingSpiritTurbo_15927b', '__fightingSpiritTurbo_Fallback_15927b'",
        },
        className: "__className_15927b",
        variable: "__variable_15927b",
      };
    },
    5739: function (e, t, n) {
      "use strict";
      n.d(t, {
        SpeedInsights: function () {
          return m;
        },
      });
      var r = n(2265),
        a = n(1169),
        s = () => {
          window.si ||
            (window.si = function () {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
              (window.siq = window.siq || []).push(t);
            });
        };
      function o() {
        return false;
      }
      function l(e) {
        return new RegExp(
          "/".concat(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "(?=[/?#]|$)")
        );
      }
      var c = "https://va.vercel-scripts.com/v1/speed-insights",
        i = "".concat(c, "/script.js"),
        u = "".concat(c, "/script.debug.js");
      function d(e) {
        let t = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            if (t.current) e.route && t.current(e.route);
            else {
              let n = (function () {
                var e;
                let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                if (!("undefined" != typeof window) || null === t.route)
                  return null;
                s();
                let n = !!t.dsn,
                  r =
                    t.scriptSrc ||
                    (n ? i : "/_vercel/speed-insights/script.js");
                if (
                  document.head.querySelector('script[src*="'.concat(r, '"]'))
                )
                  return null;
                t.beforeSend &&
                  (null == (e = window.si) ||
                    e.call(window, "beforeSend", t.beforeSend));
                let a = document.createElement("script");
                return (
                  (a.src = r),
                  (a.defer = !0),
                  (a.dataset.sdkn =
                    "@vercel/speed-insights" +
                    (t.framework ? "/".concat(t.framework) : "")),
                  (a.dataset.sdkv = "1.0.14"),
                  t.sampleRate &&
                    (a.dataset.sampleRate = t.sampleRate.toString()),
                  t.route && (a.dataset.route = t.route),
                  t.endpoint && (a.dataset.endpoint = t.endpoint),
                  t.dsn && (a.dataset.dsn = t.dsn),
                  (a.onerror = () => {
                    console.log(
                      "[Vercel Speed Insights] Failed to load script from ".concat(
                        r,
                        ". Please check if any content blockers are enabled and try again."
                      )
                    );
                  }),
                  document.head.appendChild(a),
                  {
                    setRoute: (e) => {
                      a.dataset.route = null != e ? e : void 0;
                    },
                  }
                );
              })({ framework: e.framework || "react", ...e });
              n && (t.current = n.setRoute);
            }
          }, [e.route]),
          null
        );
      }
      var _ = () => {
        let e = (0, a.useParams)(),
          t = (0, a.useSearchParams)() || new URLSearchParams(),
          n = (0, a.usePathname)(),
          r = { ...Object.fromEntries(t.entries()), ...(e || {}) };
        return e
          ? (function (e, t) {
              if (!e || !t) return e;
              let n = e;
              try {
                let e = Object.entries(t);
                for (let [t, r] of e)
                  if (!Array.isArray(r)) {
                    let e = l(r);
                    e.test(n) && (n = n.replace(e, "/[".concat(t, "]")));
                  }
                for (let [t, r] of e)
                  if (Array.isArray(r)) {
                    let e = l(r.join("/"));
                    e.test(n) && (n = n.replace(e, "/[...".concat(t, "]")));
                  }
                return n;
              } catch (t) {
                return e;
              }
            })(n, r)
          : null;
      };
      function f(e) {
        let t = _();
        return r.createElement(d, { route: t, ...e, framework: "next" });
      }
      function m(e) {
        return r.createElement(
          r.Suspense,
          { fallback: null },
          r.createElement(f, { ...e })
        );
      }
    },
  },
  function (e) {
    e.O(0, [979, 971, 23, 744], function () {
      return e((e.s = 35));
    }),
      (_N_E = e.O());
  },
]);
