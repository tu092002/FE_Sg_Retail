"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [4382],
  {
    4382: (J, p, u) => {
      u.r(p), u.d(p, { BaocaotonghopXuatkhoPageModule: () => N });
      var f = u(6895),
        C = u(4006),
        h = u(8779),
        v = u(9299),
        l = u(5439),
        y = u(8053),
        t = u(4650),
        B = u(3238),
        k = u(2468),
        Z = u(4377),
        d = u(9602),
        D = u(4144),
        g = u(9549),
        s = u(671),
        b = u(3848);
      const A = ["myChart"];
      function P(a, n) {
        1 & a && (t.TgZ(0, "mat-header-cell"), t._uU(1, " No. "), t.qZA());
      }
      function T(a, n) {
        if ((1 & a && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & a)) {
          const o = n.$implicit;
          t.xp6(1), t.hij(" ", o.no, " ");
        }
      }
      function _(a, n) {
        1 & a && (t.TgZ(0, "mat-header-cell"), t._uU(1, " M\xe3 "), t.qZA());
      }
      function Y(a, n) {
        if ((1 & a && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & a)) {
          const o = n.$implicit;
          t.xp6(1), t.hij(" ", o.itemcode, " ");
        }
      }
      function X(a, n) {
        1 & a &&
          (t.TgZ(0, "mat-header-cell"),
          t._uU(1, " S\u1ed1 l\u01b0\u1ee3ng "),
          t.qZA());
      }
      function M(a, n) {
        if ((1 & a && (t.TgZ(0, "mat-cell", 23), t._uU(1), t.qZA()), 2 & a)) {
          const o = n.$implicit;
          t.xp6(1), t.hij(" ", o.quantity, " ");
        }
      }
      function w(a, n) {
        if ((1 & a && (t.TgZ(0, "mat-cell", 24), t._uU(1), t.qZA()), 2 & a)) {
          const o = n.$implicit;
          t.xp6(1), t.hij("Kho ", o.group, "");
        }
      }
      function E(a, n) {
        1 & a && t._UZ(0, "mat-header-row");
      }
      function U(a, n) {
        1 & a && t._UZ(0, "mat-row");
      }
      function F(a, n) {
        1 & a && t._UZ(0, "mat-row");
      }
      function x(a, n) {
        1 & a &&
          (t.TgZ(0, "div", 25)(1, "div", 26), t._UZ(2, "div", 27), t.qZA()());
      }
      const I = function () {
          return ["groupHeader"];
        },
        S = [
          {
            path: "",
            component: (() => {
              class a {
                constructor(o, e, i) {
                  (this.dateAdapter = o),
                    (this._data = e),
                    (this.authService = i),
                    (this.dateFrom = l()),
                    (this.dateTo = l()),
                    (this.Loading = !0),
                    (this.const_data = {}),
                    (this.currentUser = {}),
                    (this.const_arr = []),
                    (this.const_category = []),
                    (this.label = []),
                    (this.data = []),
                    (this.API = "/reports/chartissue"),
                    (this.API_CATEGORY = "/category"),
                    (this.displayedColumns = ["no", "itemcode", "quantity"]),
                    this.dateAdapter.setLocale("en-GB");
                }
                ngOnInit() {
                  this.currentUser = this.authService.getParseTokenUser();
                }
                changeDate(o, e, i) {
                  if ("fromdate" == i) {
                    if (
                      null == e.datepickerInput.value &&
                      null == e.datepickerInput.value &&
                      "" == e.datepickerInput.value
                    )
                      return;
                    var r = "",
                      c = "";
                    if (
                      ((this.dateFrom = l(o.value)),
                      (r = this.dateFrom.format("YYYY-MM-DD")),
                      (this.dateFrom = l(e.datepickerInput.value)),
                      "Invalid date" ==
                        (c = this.dateFrom.format("YYYY-MM-DD")))
                    )
                      return;
                    this.loaddata(r, c);
                  } else if ("todate" == i) {
                    if (
                      null == e.datepickerInput.value &&
                      null == e.datepickerInput.value &&
                      "" == e.datepickerInput.value
                    )
                      return;
                    if (
                      ((r = ""),
                      (c = ""),
                      (this.dateFrom = l(o.value)),
                      (c = this.dateFrom.format("YYYY-MM-DD")),
                      (this.dateFrom = l(e.datepickerInput.value)),
                      "Invalid date" ==
                        (r = this.dateFrom.format("YYYY-MM-DD")))
                    )
                      return;
                    this.loaddata(r, c);
                  }
                }
                loaddata(o, e) {
                  (this.const_data = {}),
                    (this.Loading = !1),
                    this._data
                      .post(
                        UrlConstants.BASE_SERVER +
                          this.currentUser.ip +
                          this.API,
                        { fromdate: o.toString(), todate: e.toString() },
                      )
                      .subscribe(
                        (i) => {
                          (this.const_data = i || []),
                            this.mapCategoryAndData(i || []),
                            (this.Loading = !0);
                        },
                        (i) => {
                          (this.Loading = !0), console.log(i);
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
                        (o) => {
                          (this.const_category = o || []), (this.Loading = !0);
                        },
                        (o) => {
                          (this.Loading = !0), console.log(o);
                        },
                      );
                }
                mapCategoryAndData(o) {
                  var e;
                  this.const_arr = [];
                  var i = "";
                  null === (e = this.const_data) ||
                    void 0 === e ||
                    e.data.forEach((r, c) => {
                      0 == c
                        ? (this.const_arr.push({ group: r.whscode }),
                          this.const_arr.push({
                            no: c + 1,
                            itemcode: r.itemcode,
                            quantity: r.quantity.toString(),
                          }))
                        : (i == r.whscode ||
                            this.const_arr.push({ group: r.whscode }),
                          this.const_arr.push({
                            no: c + 1,
                            itemcode: r.itemcode,
                            quantity: r.quantity.toString(),
                          })),
                        (i = r.whscode);
                    }),
                    (this.dataSource = this.const_arr);
                }
                parseDataArrayString(o) {
                  (this.label = []),
                    (this.data = []),
                    o.forEach((e) => {
                      this.label.push(e.itemcode), this.data.push(e.quantity);
                    }),
                    this.doughnutChartMethod();
                }
                isGroup(o, e) {
                  return e.group;
                }
                doughnutChartMethod() {
                  null != this.doughnutChart && this.doughnutChart.destroy(),
                    (this.doughnutChart = new y.ZP(this.myChart.nativeElement, {
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
                (a.ɵfac = function (o) {
                  return new (o || a)(t.Y36(B._A), t.Y36(k.D), t.Y36(Z.e));
                }),
                (a.ɵcmp = t.Xpm({
                  type: a,
                  selectors: [["app-baocaotonghop-xuatkho"]],
                  viewQuery: function (o, e) {
                    if ((1 & o && t.Gf(A, 5), 2 & o)) {
                      let i;
                      t.iGM((i = t.CRH())) && (e.myChart = i.first);
                    }
                  },
                  decls: 42,
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
                    ["matColumnDef", "no"],
                    [4, "matHeaderCellDef"],
                    [4, "matCellDef"],
                    ["matColumnDef", "itemcode"],
                    ["matColumnDef", "quantity"],
                    ["style", "justify-content: end;", 4, "matCellDef"],
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
                  template: function (o, e) {
                    if (1 & o) {
                      const i = t.EpF();
                      t.TgZ(0, "ion-header")(1, "ion-toolbar")(
                        2,
                        "ion-buttons",
                        0,
                      ),
                        t._UZ(3, "ion-back-button"),
                        t.qZA(),
                        t.TgZ(4, "ion-title"),
                        t._uU(5, "T\u1ed5ng h\u1ee3p xu\u1ea5t kho"),
                        t.qZA()()(),
                        t.TgZ(6, "ion-content", 1)(7, "div", 2)(8, "p")(
                          9,
                          "mat-form-field",
                          3,
                        )(10, "mat-label"),
                        t._uU(11, "T\u1eeb ng\xe0y"),
                        t.qZA(),
                        t.TgZ(12, "input", 4),
                        t.NdJ("dateChange", function (c) {
                          t.CHM(i);
                          const m = t.MAs(22);
                          return t.KtG(e.changeDate(c, m, "fromdate"));
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
                        t.NdJ("dateChange", function (c) {
                          t.CHM(i);
                          const m = t.MAs(15);
                          return t.KtG(e.changeDate(c, m, "todate"));
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
                        t.YNc(28, P, 2, 0, "mat-header-cell", 12),
                        t.YNc(29, T, 2, 1, "mat-cell", 13),
                        t.BQk(),
                        t.ynx(30, 14),
                        t.YNc(31, _, 2, 0, "mat-header-cell", 12),
                        t.YNc(32, Y, 2, 1, "mat-cell", 13),
                        t.BQk(),
                        t.ynx(33, 15),
                        t.YNc(34, X, 2, 0, "mat-header-cell", 12),
                        t.YNc(35, M, 2, 1, "mat-cell", 16),
                        t.BQk(),
                        t.ynx(36, 17),
                        t.YNc(37, w, 2, 1, "mat-cell", 18),
                        t.BQk(),
                        t.YNc(38, E, 1, 0, "mat-header-row", 19),
                        t.YNc(39, U, 1, 0, "mat-row", 20),
                        t.YNc(40, F, 1, 0, "mat-row", 21),
                        t.qZA()()()()()(),
                        t.YNc(41, x, 3, 0, "div", 22);
                    }
                    if (2 & o) {
                      const i = t.MAs(15),
                        r = t.MAs(22);
                      t.xp6(6),
                        t.Q6J("fullscreen", !0),
                        t.xp6(6),
                        t.Q6J("matDatepicker", i),
                        t.xp6(1),
                        t.Q6J("for", i),
                        t.xp6(6),
                        t.Q6J("matDatepicker", r),
                        t.xp6(1),
                        t.Q6J("for", r),
                        t.xp6(6),
                        t.Q6J("dataSource", e.dataSource),
                        t.xp6(12),
                        t.Q6J("matHeaderRowDef", e.displayedColumns),
                        t.xp6(1),
                        t.Q6J("matRowDefColumns", e.displayedColumns),
                        t.xp6(1),
                        t.Q6J("matRowDefColumns", t.DdM(11, I))(
                          "matRowDefWhen",
                          e.isGroup,
                        ),
                        t.xp6(1),
                        t.Q6J("ngIf", !e.Loading);
                    }
                  },
                  dependencies: [
                    f.O5,
                    h.oU,
                    h.Sm,
                    h.W2,
                    h.Gu,
                    h.wd,
                    h.sr,
                    h.cs,
                    d.Mq,
                    d.hl,
                    d.nW,
                    D.Nt,
                    g.KE,
                    g.hX,
                    g.R9,
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
                    b.uX,
                    b.SP,
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
      let Q = (() => {
        class a {}
        return (
          (a.ɵfac = function (o) {
            return new (o || a)();
          }),
          (a.ɵmod = t.oAB({ type: a })),
          (a.ɵinj = t.cJS({ imports: [v.Bz.forChild(S), v.Bz] })),
          a
        );
      })();
      var R = u(5064);
      let N = (() => {
        class a {}
        return (
          (a.ɵfac = function (o) {
            return new (o || a)();
          }),
          (a.ɵmod = t.oAB({ type: a })),
          (a.ɵinj = t.cJS({ imports: [f.ez, C.u5, h.Pc, R.q, Q] })),
          a
        );
      })();
    },
  },
]);
