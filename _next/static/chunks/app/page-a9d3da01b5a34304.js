(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    9638: function (e, t, a) {
      Promise.resolve().then(a.t.bind(a, 8173, 23)),
        Promise.resolve().then(a.t.bind(a, 231, 23)),
        Promise.resolve().then(a.bind(a, 9499)),
        Promise.resolve().then(a.bind(a, 7621)),
        Promise.resolve().then(a.bind(a, 6775));
    },
    9354: function (e, t, a) {
      "use strict";
      a.d(t, {
        cn: function () {
          return r;
        },
      });
      var s = a(4839),
        n = a(6164);
      function r() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, n.m6)((0, s.W)(t));
      }
    },
    9499: function (e, t, a) {
      "use strict";
      a.d(t, {
        default: function () {
          return r;
        },
      });
      var s = a(7437),
        n = a(2265);
      function r(e) {
        let { address: t } = e,
          [a, r] = (0, n.useState)(6),
          [l, i] = (0, n.useState)(""),
          [d, o] = (0, n.useState)("");
        if (
          ((0, n.useEffect)(() => {
            let e = () => {
              let e = window.innerWidth;
              e > 1400
                ? (r(12),
                  i("$SUPERCAT contract address"),
                  o("contract address $SUPERCAT"))
                : (e > 768 ? r(8) : r(6), i("Contract"), o("address"));
            };
            return (
              e(),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          !t)
        )
          return null;
        let x = t.slice(0, a),
          c = t.slice(-a);
        return (0, s.jsx)("div", {
          className:
            "w-full font-dangrek uppercase text-[24px] lg:text-[35px] border-b-[4px] border-black bg-primary-foreground whitespace-nowrap overflow-hidden",
          children: (0, s.jsxs)("div", {
            className: "px-4 flex items-center justify-center",
            children: [
              l,
              " >>>",
              " ",
              (0, s.jsxs)("span", {
                className: "text-[#121216] cursor-pointer",
                children: [x, "...", c],
              }),
              "<<< ",
              d,
            ],
          }),
        });
      }
    },
    7621: function (e, t, a) {
      "use strict";
      a.d(t, {
        default: function () {
          return g;
        },
      });
      var s = a(7437),
        n = a(2265),
        r = a(3227),
        l = a(939),
        i = a(2218),
        d = a(9354);
      let o = n.forwardRef((e, t) => {
          let { className: a, children: n, ...r } = e;
          return (0, s.jsx)("div", {
            className: (0, d.cn)(
              "grid grid-cols-[1fr_min-content_1fr] w-full gap-8 sm:gap-1 md:gap-2 lg:gap-0 xl:gap-5",
              a
            ),
            ref: t,
            ...r,
            children: n,
          });
        }),
        x = (0, i.j)(
          "z-[10] flex items-start gap-x-3 sm:items-center md:gap-x-[17px] lg:gap-x-[34px]  grid-cols-subgrid col-span-3",
          {
            variants: {
              position: {
                left: "sm:flex-row-reverse sm:mr-[calc(50%)]",
                right: "sm:ml-[calc(50%)]",
              },
            },
            defaultVariants: { position: "left" },
          }
        ),
        c = n.forwardRef((e, t) => {
          let { className: a, position: n = "left", children: r, ...l } = e;
          return (0, s.jsx)("div", {
            className: (0, d.cn)(x({ position: n }), a),
            ref: t,
            ...l,
            children: r,
          });
        });
      c.displayName = "TimelineItem";
      let p = n.forwardRef((e, t) => {
        let { className: a, children: n, ...r } = e;
        return (0, s.jsx)("h1", {
          className: (0, d.cn)(
            "font-arco text-primary-foreground text-[100px] leading-[50px] drop-shadow-border sm:text-[64px] lg:text-[94px] lg:leading-normal xl:text-[128px] xl:leading-[147px] ",
            a
          ),
          ref: t,
          ...r,
          children: n,
        });
      });
      p.displayName = "TimelineTitle";
      let m = (0, i.j)(
          "flex flex-col justify-center font-dangrek space-y-3 sm:max-w-[275px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[550px] lg:space-y-4",
          {
            variants: {
              position: { left: "sm:text-right text-left", right: "text-left" },
            },
            defaultVariants: { position: "left" },
          }
        ),
        f = n.forwardRef((e, t) => {
          let { className: a, children: n, position: r = "left", ...l } = e;
          return (0, s.jsx)("div", {
            className: (0, d.cn)(m({ position: r }), a),
            ref: t,
            ...l,
            children: n,
          });
        });
      f.displayName = "TimelineContent";
      let h = n.forwardRef((e, t) => {
        let { className: a, children: n, ...r } = e;
        return (0, s.jsx)("h2", {
          className: (0, d.cn)(
            "text-primary-foreground text-[30px] leading-[30px] sm:text-[28px] md:text-[32px] md:leading-none lg:text-[44px]",
            a
          ),
          ref: t,
          ...r,
          children: n,
        });
      });
      h.displayName = "TimelineHeader";
      let u = n.forwardRef((e, t) => {
        let { className: a, children: n, ...r } = e;
        return (0, s.jsx)("p", {
          className: (0, d.cn)(
            "text-foreground text-[24px] leading-[24px] sm:text-[16px] md:leading-none lg:text-[24px] lg:leading-[28px] xl:text-[28px] xl:leading-[32px]",
            a
          ),
          ref: t,
          ...r,
          children: n,
        });
      });
      function g(e) {
        let { contractAddress: t, buyLink: a } = e,
          [i, d] = (0, n.useState)(!1),
          [x, m] = (0, r.Z)(t);
        return (
          (0, n.useEffect)(() => d(x), [x]),
          (0, s.jsxs)(o, {
            className:
              "absolute top-[100px] sm:top-[24px] md:top-[40px] lg:top-[56px] xl:top-[110px] px-4 lg:px-0",
            children: [
              (0, s.jsxs)(c, {
                position: "left",
                children: [
                  (0, s.jsx)(p, { children: "1" }),
                  (0, s.jsxs)(f, {
                    position: "left",
                    children: [
                      (0, s.jsxs)(h, {
                        children: [
                          "Create a wallet ",
                          (0, s.jsx)("br", {}),
                          "with Phantom",
                        ],
                      }),
                      (0, s.jsxs)(u, {
                        children: [
                          "Visit",
                          " ",
                          (0, s.jsx)("a", {
                            className: "text-primary underline",
                            href: "https://phantom.com",
                            target: "_blank",
                            children: "phantom.com",
                          }),
                          " ",
                          "and follow the simple ",
                          (0, s.jsx)("br", { className: "hidden xl:block" }),
                          "steps to create a new account",
                          (0, s.jsx)("br", { className: "hidden xl:block" }),
                          "with the Phantom app",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)(c, {
                position: "right",
                className: "sm:-mt-[60px] md:-mt-4 lg:-mt-10 xl:mt-0",
                children: [
                  (0, s.jsx)(p, { children: "2" }),
                  (0, s.jsxs)(f, {
                    position: "right",
                    children: [
                      (0, s.jsx)(h, { children: "Get some $SOL" }),
                      (0, s.jsxs)(u, {
                        children: [
                          "Tap the BUY button in the app to purchase",
                          " ",
                          (0, s.jsx)("br", { className: "hidden xl:block" }),
                          " SOL, or deposit $SOL to your Phantom ",
                          (0, s.jsx)("br", { className: "hidden xl:block" }),
                          "wallet from the crypto exchange.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)(c, {
                position: "left",
                className:
                  "sm:-mt-[45px] md:-mt-0 lg:-mt-4 xl:pt-[20px] xl:mt-0",
                children: [
                  (0, s.jsx)(p, { children: "3" }),
                  (0, s.jsxs)(f, {
                    position: "left",
                    children: [
                      (0, s.jsx)(h, { children: "Swap $SOL for $SUPERCAT" }),
                      (0, s.jsxs)(u, {
                        children: [
                          "Go to",
                          " ",
                          (0, s.jsx)("span", {
                            className: "text-primary underline",
                            children: (0, s.jsx)("a", {
                              href: a,
                              target: "_blank",
                              children: "Swap.pump",
                            }),
                          }),
                          " ",
                          "and swap $SOL for $SUPERCAT",
                          (0, s.jsx)("br", {}),
                          (0, s.jsxs)(l.J2, {
                            open: i,
                            onOpenChange: d,
                            children: [
                              (0, s.jsx)(l.xo, {
                                asChild: !0,
                                onClick: () => m(),
                                children: (0, s.jsx)("span", {
                                  className: "text-primary",
                                  children: "(click to copy token address)",
                                }),
                              }),
                              (0, s.jsx)(l.yk, {
                                side: "top",
                                children: (0, s.jsx)("p", {
                                  className:
                                    "font-dangrek text-[27px] leading-none",
                                  children: "✅ Copied",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)(c, {
                position: "right",
                className: "sm:-mt-[20px] md:-mt-0 xl:pt-[20px] xl:mt-0",
                children: [
                  (0, s.jsx)(p, { children: "4" }),
                  (0, s.jsxs)(f, {
                    position: "right",
                    children: [
                      (0, s.jsxs)(h, {
                        children: [
                          "You are now ",
                          (0, s.jsx)("br", { className: "hidden xl:block" }),
                          "a $SUPERCAT holder!",
                        ],
                      }),
                      (0, s.jsx)(u, { children: "Welcome the GANG!" }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      u.displayName = "TimelineParagraph";
    },
    6775: function (e, t, a) {
      "use strict";
      a.d(t, {
        default: function () {
          return u;
        },
      });
      var s = a(7437),
        n = a(6648),
        r = a(2265),
        l = a(3227),
        i = a(8091),
        d = a(9354);
      let o = i.fC,
        x = i.xz,
        c = i.h_;
      i.x8;
      let p = r.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, s.jsx)(i.aV, {
          ref: t,
          className: (0, d.cn)(
            "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            a
          ),
          ...n,
        });
      });
      p.displayName = i.aV.displayName;
      let m = r.forwardRef((e, t) => {
        let { className: a, children: n, ...r } = e;
        return (0, s.jsxs)(c, {
          children: [
            (0, s.jsx)(p, {}),
            (0, s.jsx)(i.VY, {
              ref: t,
              className: (0, d.cn)(
                "fixed left-[50%] top-[50%] z-50 grid w-full max-w-2xl translate-x-[-50%] translate-y-[-50%] gap-4 p-6 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg focus:border-none focus:ring-none focus:outline-none",
                a
              ),
              ...r,
              children: n,
            }),
          ],
        });
      });
      function f() {
        return (0, s.jsxs)(o, {
          children: [
          ],
        });
      }
      (m.displayName = i.VY.displayName),
        (r.forwardRef((e, t) => {
          let { className: a, ...n } = e;
          return (0, s.jsx)(i.Dx, {
            ref: t,
            className: (0, d.cn)(
              "text-lg font-semibold leading-none tracking-tight",
              a
            ),
            ...n,
          });
        }).displayName = i.Dx.displayName),
        (r.forwardRef((e, t) => {
          let { className: a, ...n } = e;
          return (0, s.jsx)(i.dk, {
            ref: t,
            className: (0, d.cn)("text-sm text-muted-foreground", a),
            ...n,
          });
        }).displayName = i.dk.displayName);
      var h = a(939);
      function u(e) {
        let { contractAddress: t } = e,
          [a, i] = (0, r.useState)(!1),
          [d, o] = (0, l.Z)(t);
        return (
          (0, r.useEffect)(() => i(d), [d]),
          (0, s.jsxs)("div", {
            className:
              "bg-[#4E494E] flex w-full flex-col items-center justify-start space-y-6 pt-10 lg:space-y-[30px] md:pt-[20px]",
            children: [
              (0, s.jsx)("div", {
                className:
                  "h-auto w-full max-w-[451px] md:h-[725px] md:w-full md:max-w-[700px] xl:max-w-[805px] xl:h-[850px]",
                children: (0, s.jsx)(n.default, {
                  src: "/tokenomics/casino.png",
                  width: 805,
                  height: 850,
                  alt: "Super Cat winning jackpot!",
                  className: "object-contain",
                }),
              }),
              (0, s.jsxs)("div", {
                className: "grid gap-6",
                children: [
                  (0, s.jsx)("h1", {
                    className:
                      "font-arco font-bold text-primary-foreground text-[44px] leading-[50px] text-center drop-shadow-heading xl:text-[96px] xl:leading-[110px]",
                    children: "TOTAL SUPPLY",
                  }),
                  (0, s.jsx)("h2", {
                    className:
                      "font-dangrek text-primary-foreground text-[54px] leading-[1em] text-center drop-shadow-heading xl:text-[96px]",
                    children: "- 1,000,000,000 -",
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "flex flex-col items-center justify-center space-y-0 w-full px-4",
                    children: [
                      (0, s.jsx)("h3", {
                        className:
                          "w-fit px-[26px] pt-4 pb-3 font-arco font-bold text-[23px] leading-[1em] text-center text-primary-foreground bg-black xl:pt-6 xl:pb-4 xl:px-10 xl:text-[35px] xl:leading-[1]",
                        children: "contract address",
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "shrink-0 max-w-full px-4 bg-primary-foreground border-[2px] border-black text-wrap xl:border-[4px]",
                        children: (0, s.jsx)("p", {
                          className:
                            "px-2 py-[13px] font-dangrek text-[23px] leading-[23px] text-background text-center text-wrap xl:px-6 xl:py-5 xl:text-[35px] xl:leading-none cursor-pointer",
                          style: { wordBreak: "break-all" },
                          children: (0, s.jsxs)(h.J2, {
                            open: a,
                            onOpenChange: i,
                            children: [
                              (0, s.jsx)(h.xo, {
                                asChild: !0,
                                onClick: () => o(),
                                children: (0, s.jsx)("span", { children: t }),
                              }),
                              (0, s.jsx)(h.yk, {
                                side: "top",
                                children: (0, s.jsx)("p", {
                                  className:
                                    "font-dangrek text-[27px] leading-none",
                                  children: "✅ Copied",
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)(f, {}),
              (0, s.jsxs)("div", {
                className: "w-full pt-[50px]",
                children: [
                  (0, s.jsx)(n.default, {
                    width: 900,
                    height: 600,
                    src: "/tokenomics/juggler.png",
                    alt: "Super Cat Tokenomics",
                    className:
                      "mx-auto z-50 relative md:w-[532px] md:h-[500px] lg:w-[652px] lg:h-[613px] xl:w-[780px] xl:h-[734px]",
                  }),
                  (0, s.jsx)(n.default, {
                    src: "/tokenomics/paint.png",
                    alt: "Tokenomics Paint",
                    width: 1500,
                    height: 400,
                    className:
                      "w-full -mt-[100px] lg:-mt-[450px] z-10 relative",
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    939: function (e, t, a) {
      "use strict";
      a.d(t, {
        J2: function () {
          return i;
        },
        xo: function () {
          return d;
        },
        yk: function () {
          return o;
        },
      });
      var s = a(7437),
        n = a(8328),
        r = a(2265),
        l = a(9354);
      let i = n.fC,
        d = n.xz,
        o = r.forwardRef((e, t) => {
          let {
            className: a,
            align: r = "center",
            sideOffset: i = 4,
            ...d
          } = e;
          return (0, s.jsx)(n.h_, {
            children: (0, s.jsx)(n.VY, {
              ref: t,
              align: r,
              sideOffset: i,
              className: (0, l.cn)(
                "z-50 w-fit rounded-md border-[4px] border-black bg-primary-foreground py-5 px-6 text-popover-foreground outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                a
              ),
              ...d,
            }),
          });
        });
      o.displayName = n.VY.displayName;
    },
  },
  function (e) {
    e.O(0, [753, 971, 23, 744], function () {
      return e((e.s = 9638));
    }),
      (_N_E = e.O());
  },
]);
