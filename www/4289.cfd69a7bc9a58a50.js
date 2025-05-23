"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [4289],
  {
    4289: (H, f, c) => {
      c.r(f), c.d(f, { BaocaoNxtPageModule: () => L });
      var p = c(6895),
        b = c(4006),
        d = c(8779),
        y = c(9299),
        u = c(5439),
        x = c(8053),
        t = c(4650),
        v = c(3238),
        N = c(2468),
        Z = c(4377),
        g = c(9602),
        B = c(4144),
        m = c(9549),
        s = c(671),
        _ = c(3848);
      const A = ["myChart"];
      function C(a, i) {
        1 & a && (t.TgZ(0, "mat-header-cell"), t._uU(1, " M\xe3 "), t.qZA());
      }
      function D(a, i) {
        if ((1 & a && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & a)) {
          const e = i.$implicit;
          t.xp6(1), t.hij(" ", e.itemcode, " ");
        }
      }
      function T(a, i) {
        1 & a &&
          (t.TgZ(0, "mat-header-cell"),
          t._uU(1, " \u0110\u1ea7u k\u1ef3 "),
          t.qZA());
      }
      function q(a, i) {
        if ((1 & a && (t.TgZ(0, "mat-cell", 25), t._uU(1), t.qZA()), 2 & a)) {
          const e = i.$implicit;
          t.xp6(1), t.hij(" ", e.beginqty, " ");
        }
      }
      function P(a, i) {
        1 & a &&
          (t.TgZ(0, "mat-header-cell"), t._uU(1, " Nh\u1eadp "), t.qZA());
      }
      function Y(a, i) {
        if ((1 & a && (t.TgZ(0, "mat-cell", 25), t._uU(1), t.qZA()), 2 & a)) {
          const e = i.$implicit;
          t.xp6(1), t.hij(" ", e.inqty, " ");
        }
      }
      function M(a, i) {
        1 & a &&
          (t.TgZ(0, "mat-header-cell"), t._uU(1, " Xu\u1ea5t "), t.qZA());
      }
      function E(a, i) {
        if ((1 & a && (t.TgZ(0, "mat-cell", 25), t._uU(1), t.qZA()), 2 & a)) {
          const e = i.$implicit;
          t.xp6(1), t.hij(" ", e.outqty, " ");
        }
      }
      function U(a, i) {
        1 & a && (t.TgZ(0, "mat-header-cell"), t._uU(1, " T\u1ed3n "), t.qZA());
      }
      function S(a, i) {
        if ((1 & a && (t.TgZ(0, "mat-cell", 25), t._uU(1), t.qZA()), 2 & a)) {
          const e = i.$implicit;
          t.xp6(1), t.hij(" ", e.endqty, " ");
        }
      }
      function w(a, i) {
        if ((1 & a && (t.TgZ(0, "mat-cell", 26), t._uU(1), t.qZA()), 2 & a)) {
          const e = i.$implicit;
          t.xp6(1), t.Oqu(e.group);
        }
      }
      function F(a, i) {
        1 & a && t._UZ(0, "mat-header-row");
      }
      function I(a, i) {
        1 & a && t._UZ(0, "mat-row");
      }
      function Q(a, i) {
        1 & a && t._UZ(0, "mat-row");
      }
      function R(a, i) {
        1 & a &&
          (t.TgZ(0, "div", 27)(1, "div", 28), t._UZ(2, "div", 29), t.qZA()());
      }
      const k = function () {
          return ["groupHeader"];
        },
        J = [
          {
            path: "",
            component: (() => {
              class a {
                constructor(e, o, r) {
                  (this.dateAdapter = e),
                    (this._data = o),
                    (this.authService = r),
                    (this.dateFrom = u()),
                    (this.dateTo = u()),
                    (this.Loading = !0),
                    (this.const_data = {}),
                    (this.currentUser = {}),
                    (this.const_arr = []),
                    (this.const_category = []),
                    (this.label = []),
                    (this.data = []),
                    (this.API = "/reports/chartnxt"),
                    (this.API_CATEGORY = "/category"),
                    (this.displayedColumns = [
                      "itemcode",
                      "beginqty",
                      "inqty",
                      "outqty",
                      "endqty",
                    ]),
                    this.dateAdapter.setLocale("en-GB");
                }
                ngOnInit() {
                  (this.currentUser = this.authService.getParseTokenUser()),
                    this.loadcategory();
                }
                changeDate(e, o, r) {
                  if ("fromdate" == r) {
                    if (
                      null == o.datepickerInput.value &&
                      null == o.datepickerInput.value &&
                      "" == o.datepickerInput.value
                    )
                      return;
                    var n = "",
                      l = "";
                    if (
                      ((this.dateFrom = u(e.value)),
                      (n = this.dateFrom.format("YYYY-MM-DD")),
                      (this.dateFrom = u(o.datepickerInput.value)),
                      "Invalid date" ==
                        (l = this.dateFrom.format("YYYY-MM-DD")))
                    )
                      return;
                    this.loaddata(n, l);
                  } else if ("todate" == r) {
                    if (
                      null == o.datepickerInput.value &&
                      null == o.datepickerInput.value &&
                      "" == o.datepickerInput.value
                    )
                      return;
                    if (
                      ((n = ""),
                      (l = ""),
                      (this.dateFrom = u(e.value)),
                      (l = this.dateFrom.format("YYYY-MM-DD")),
                      (this.dateFrom = u(o.datepickerInput.value)),
                      "Invalid date" ==
                        (n = this.dateFrom.format("YYYY-MM-DD")))
                    )
                      return;
                    this.loaddata(n, l);
                  }
                }
                loaddata(e, o) {
                  (this.const_data = {}),
                    (this.Loading = !1),
                    this._data
                      .post(
                        UrlConstants.BASE_SERVER +
                          this.currentUser.ip +
                          this.API,
                        { fromdate: e.toString(), todate: o.toString() },
                      )
                      .subscribe(
                        (r) => {
                          (this.const_data = r || []),
                            this.mapCategoryAndData(r || []),
                            (this.Loading = !0);
                        },
                        (r) => {
                          (this.Loading = !0), console.log(r);
                        },
                      );
                }
                loadcategory() {
                  (this.Loading = !1),
                    this._data
                      .get(
                        UrlConstants.BASE_SERVER +
                          this.currentUser.ip +
                          this.API_CATEGORY,
                      )
                      .subscribe(
                        (e) => {
                          (this.const_category = e || []), (this.Loading = !0);
                        },
                        (e) => {
                          (this.Loading = !0), console.log(e);
                        },
                      );
                }
                mapCategoryAndData(e) {
                  var o;
                  this.const_arr = [];
                  var r = "";
                  console.table(this.const_data.data),
                    null === (o = this.const_data) ||
                      void 0 === o ||
                      o.data.forEach((n, l) => {
                        0 == l
                          ? (this.const_arr.push({ group: n.whsname }),
                            this.const_arr.push({
                              no: l + 1,
                              itemcode: n.itemcode,
                              beginqty: n.beginqty.toString(),
                              inqty: n.inqty.toString(),
                              outqty: n.outqty.toString(),
                              endqty: n.endqty.toString(),
                            }))
                          : (r == n.whsname ||
                              this.const_arr.push({ group: n.whsname }),
                            this.const_arr.push({
                              no: l + 1,
                              itemcode: n.itemcode,
                              beginqty: n.beginqty.toString(),
                              inqty: n.inqty.toString(),
                              outqty: n.outqty.toString(),
                              endqty: n.endqty.toString(),
                            })),
                          (r = n.whsname);
                      }),
                    (this.dataSource = this.const_arr),

                }
                parseDataArrayString(e) {
                  (this.label = []),
                    (this.data = []),
                    e.forEach((o) => {
                      this.label.push(o.group), this.data.push(o.total);
                    }),
                    this.doughnutChartMethod();
                }
                isGroup(e, o) {
                  return o.group;
                }
                doughnutChartMethod() {
                  null != this.doughnutChart && this.doughnutChart.destroy(),
                    (this.doughnutChart = new x.ZP(this.myChart.nativeElement, {
                      type: "doughnut",
                      data: {
                        labels: this.label,
                        datasets: [
                          {
                            label: "# of Vendor",
                            data: this.data,
                            backgroundColor: [
                              "rgba(255, 159, 64, 0.2)",
                              "rgba(255, 99, 132, 0.2)",
                              "rgba(54, 162, 235, 0.2)",
                              "rgba(255, 206, 86, 0.2)",
                              "rgba(75, 192, 192, 0.2)",
                              "rgba(153, 102, 255, 0.2)",
                              "rgba(240,248,255,1)",
                              "rgba(0,255,255,1)",
                              "rgba(245,245,220,1)",
                              "rgba(0,0,255,1)",
                              "rgba(138,43,226,1)",
                              "rgba(165,42,42,1)",
                              "rgba(222, 184,135,1)",
                              "rgba(95,158,160,1)",
                              "rgba(127,255,0,1)",
                              "rgba(0,139,139,1)",
                              "rgba(255,140,0,1)",
                              "rgba(255,215,0,1)",
                              "rgba(0,128,0,1)",
                            ],
                            hoverBackgroundColor: [
                              "#FFCE56",
                              "#FF6384",
                              "#36A2EB",
                              "#FFCE56",
                              "#FF6384",
                              "rgba(153, 102, 255, 0.2)",
                              "rgba(240,248,255,1)",
                              "rgba(0,255,255,1)",
                              "rgba(245,245,220,1)",
                              "rgba(0,0,255,1)",
                              "rgba(138,43,226,1)",
                              "rgba(165,42,42,1)",
                              "rgba(222, 184,135,1)",
                              "rgba(95,158,160,1)",
                              "rgba(127,255,0,1)",
                              "rgba(0,139,139,1)",
                              "rgba(255,140,0,1)",
                              "rgba(255,215,0,1)",
                              "rgba(0,128,0,1)",
                            ],
                          },
                        ],
                      },
                    }));
                }
              }
              return (
                (a.ɵfac = function (e) {
                  return new (e || a)(t.Y36(v._A), t.Y36(N.D), t.Y36(Z.e));
                }),
                (a.ɵcmp = t.Xpm({
                  type: a,
                  selectors: [["app-baocao-nxt"]],
                  viewQuery: function (e, o) {
                    if ((1 & e && t.Gf(A, 5), 2 & e)) {
                      let r;
                      t.iGM((r = t.CRH())) && (o.myChart = r.first);
                    }
                  },
                  decls: 48,
                  vars: 12,
                  consts: [
                    ["slot", "start"],
                    [3, "fullscreen"],
                    [1, "ion-padding"],
                    ["appearance", "fill", "id", "vendor-option", 1, "w-100"],
                    [
                      "matInput",
                      "",
                      "disabled",
                      "",
                      3,
                      "matDatepicker",
                      "dateChange",
                    ],
                    ["matIconSuffix", "", 3, "for"],
                    ["disabled", "false"],
                    ["dp3", ""],
                    ["dp4", ""],
                    ["label", "B\u1ea3ng"],
                    [1, "mat-elevation-z8", 3, "dataSource"],
                    ["matColumnDef", "itemcode"],
                    [4, "matHeaderCellDef"],
                    [4, "matCellDef"],
                    ["matColumnDef", "beginqty"],
                    ["style", "justify-content: end;", 4, "matCellDef"],
                    ["matColumnDef", "inqty"],
                    ["matColumnDef", "outqty"],
                    ["matColumnDef", "endqty"],
                    ["matColumnDef", "groupHeader"],
                    ["style", "font-weight: bold;", 4, "matCellDef"],
                    [4, "matHeaderRowDef"],
                    [4, "matRowDef", "matRowDefColumns"],
                    [4, "matRowDef", "matRowDefColumns", "matRowDefWhen"],
                    ["bgcolor", "#000000", 4, "ngIf"],
                    [2, "justify-content", "end"],
                    [2, "font-weight", "bold"],
                    ["bgcolor", "#000000"],
                    ["id", "loader-wrapper"],
                    ["id", "loader"],
                  ],
                  template: function (e, o) {
                    if (1 & e) {
                      const r = t.EpF();
                      t.TgZ(0, "ion-header")(1, "ion-toolbar")(
                        2,
                        "ion-buttons",
                        0,
                      ),
                        t._UZ(3, "ion-back-button"),
                        t.qZA(),
                        t.TgZ(4, "ion-title"),
                        t._uU(5, "B\xe1o c\xe1o Nh\u1eadp Xu\u1ea5t T\u1ed3n"),
                        t.qZA()()(),
                        t.TgZ(6, "ion-content", 1)(7, "div", 2)(8, "p")(
                          9,
                          "mat-form-field",
                          3,
                        )(10, "mat-label"),
                        t._uU(11, "T\u1eeb ng\xe0y"),
                        t.qZA(),
                        t.TgZ(12, "input", 4),
                        t.NdJ("dateChange", function (l) {
                          t.CHM(r);
                          const h = t.MAs(22);
                          return t.KtG(o.changeDate(l, h, "fromdate"));
                        }),
                        t.qZA(),
                        t._UZ(13, "mat-datepicker-toggle", 5)(
                          14,
                          "mat-datepicker",
                          6,
                          7,
                        ),
                        t.qZA(),
                        t.TgZ(16, "mat-form-field", 3)(17, "mat-label"),
                        t._uU(18, "\u0110\u1ebfn ng\xe0y"),
                        t.qZA(),
                        t.TgZ(19, "input", 4),
                        t.NdJ("dateChange", function (l) {
                          t.CHM(r);
                          const h = t.MAs(15);
                          return t.KtG(o.changeDate(l, h, "todate"));
                        }),
                        t.qZA(),
                        t._UZ(20, "mat-datepicker-toggle", 5)(
                          21,
                          "mat-datepicker",
                          6,
                          8,
                        ),
                        t.qZA()(),
                        t.TgZ(23, "mat-tab-group")(24, "mat-tab", 9)(25, "div")(
                          26,
                          "mat-table",
                          10,
                        ),
                        t.ynx(27, 11),
                        t.YNc(28, C, 2, 0, "mat-header-cell", 12),
                        t.YNc(29, D, 2, 1, "mat-cell", 13),
                        t.BQk(),
                        t.ynx(30, 14),
                        t.YNc(31, T, 2, 0, "mat-header-cell", 12),
                        t.YNc(32, q, 2, 1, "mat-cell", 15),
                        t.BQk(),
                        t.ynx(33, 16),
                        t.YNc(34, P, 2, 0, "mat-header-cell", 12),
                        t.YNc(35, Y, 2, 1, "mat-cell", 15),
                        t.BQk(),
                        t.ynx(36, 17),
                        t.YNc(37, M, 2, 0, "mat-header-cell", 12),
                        t.YNc(38, E, 2, 1, "mat-cell", 15),
                        t.BQk(),
                        t.ynx(39, 18),
                        t.YNc(40, U, 2, 0, "mat-header-cell", 12),
                        t.YNc(41, S, 2, 1, "mat-cell", 15),
                        t.BQk(),
                        t.ynx(42, 19),
                        t.YNc(43, w, 2, 1, "mat-cell", 20),
                        t.BQk(),
                        t.YNc(44, F, 1, 0, "mat-header-row", 21),
                        t.YNc(45, I, 1, 0, "mat-row", 22),
                        t.YNc(46, Q, 1, 0, "mat-row", 23),
                        t.qZA()()()()()(),
                        t.YNc(47, R, 3, 0, "div", 24);
                    }
                    if (2 & e) {
                      const r = t.MAs(15),
                        n = t.MAs(22);
                      t.xp6(6),
                        t.Q6J("fullscreen", !0),
                        t.xp6(6),
                        t.Q6J("matDatepicker", r),
                        t.xp6(1),
                        t.Q6J("for", r),
                        t.xp6(6),
                        t.Q6J("matDatepicker", n),
                        t.xp6(1),
                        t.Q6J("for", n),
                        t.xp6(6),
                        t.Q6J("dataSource", o.dataSource),
                        t.xp6(18),
                        t.Q6J("matHeaderRowDef", o.displayedColumns),
                        t.xp6(1),
                        t.Q6J("matRowDefColumns", o.displayedColumns),
                        t.xp6(1),
                        t.Q6J("matRowDefColumns", t.DdM(11, k))(
                          "matRowDefWhen",
                          o.isGroup,
                        ),
                        t.xp6(1),
                        t.Q6J("ngIf", !o.Loading);
                    }
                  },
                  dependencies: [
                    p.O5,
                    d.oU,
                    d.Sm,
                    d.W2,
                    d.Gu,
                    d.wd,
                    d.sr,
                    d.cs,
                    g.Mq,
                    g.hl,
                    g.nW,
                    B.Nt,
                    m.KE,
                    m.hX,
                    m.R9,
                    s.BZ,
                    s.fO,
                    s.as,
                    s.w1,
                    s.Dz,
                    s.nj,
                    s.ge,
                    s.ev,
                    s.XQ,
                    s.Gk,
                    _.uX,
                    _.SP,
                  ],
                  styles: [
                    ".w-100[_ngcontent-%COMP%]{width:100%}  .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{background:white!important}table[_ngcontent-%COMP%]{width:100%}",
                  ],
                })),
                a
              );
            })(),
          },
        ];
      let G = (() => {
        class a {}
        return (
          (a.ɵfac = function (e) {
            return new (e || a)();
          }),
          (a.ɵmod = t.oAB({ type: a })),
          (a.ɵinj = t.cJS({ imports: [y.Bz.forChild(J), y.Bz] })),
          a
        );
      })();
      var j = c(5064);
      let L = (() => {
        class a {}
        return (
          (a.ɵfac = function (e) {
            return new (e || a)();
          }),
          (a.ɵmod = t.oAB({ type: a })),
          (a.ɵinj = t.cJS({ imports: [p.ez, b.u5, d.Pc, j.q, G] })),
          a
        );
      })();
    },
  },
]);
