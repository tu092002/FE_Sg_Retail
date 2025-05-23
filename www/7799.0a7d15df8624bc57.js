"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [7799],
  {
    7799: (J, p, o) => {
      o.r(p), o.d(p, { BaocaodoanhthuNhanVienPageModule: () => S });
      var s = o(6895),
        v = o(4006),
        c = o(8779),
        b = o(9299),
        A = o(9490),
        B = o(5439),
        u = o.n(B),
        a = o(4650),
        P = o(2468),
        Z = o(4377),
        m = o(9602),
        N = o(4144),
        g = o(9549),
        l = o(671),
        C = o(3848);
      const y = ["myChart"];
      function M(t, r) {
        1 & t &&
          (a.TgZ(0, "mat-header-cell"),
          a._uU(1, " T\xean nh\xe2n vi\xean "),
          a.qZA());
      }
      function D(t, r) {
        if ((1 & t && (a.TgZ(0, "mat-cell"), a._uU(1), a.qZA()), 2 & t)) {
          const e = r.$implicit;
          a.xp6(1), a.hij(" ", e.staffcode, " ");
        }
      }
      function T(t, r) {
        1 & t &&
          (a.TgZ(0, "mat-header-cell"), a._uU(1, " Doanh thu Combo "), a.qZA());
      }
      function Y(t, r) {
        if (
          (1 & t &&
            (a.TgZ(0, "mat-cell", 20), a._uU(1), a.ALo(2, "currency"), a.qZA()),
          2 & t)
        ) {
          const e = r.$implicit;
          a.xp6(1),
            a.hij(
              " ",
              a.gM2(2, 1, e.doanh_thu, "\u0111 ", "symbol", "1.0"),
              " ",
            );
        }
      }
      function E(t, r) {
        1 & t &&
          (a.TgZ(0, "mat-header-cell"),
          a._uU(1, " Hoa h\u1ed3ng c\u1eaft t\xf3c"),
          a.qZA());
      }
      function V(t, r) {
        if (
          (1 & t &&
            (a.TgZ(0, "mat-cell", 20), a._uU(1), a.ALo(2, "currency"), a.qZA()),
          2 & t)
        ) {
          const e = r.$implicit;
          a.xp6(1),
            a.hij(" ", a.gM2(2, 1, e.toc, "\u0111 ", "symbol", "1.0"), " ");
        }
      }
      function F(t, r) {
        1 & t && a._UZ(0, "mat-header-row");
      }
      function x(t, r) {
        1 & t && a._UZ(0, "mat-row");
      }
      function U(t, r) {
        1 & t &&
          (a.TgZ(0, "div", 21)(1, "div", 22), a._UZ(2, "div", 23), a.qZA()());
      }
      const _ = [
        {
          path: "",
          component: (() => {
            class t {
              constructor(e, n) {
                (this._data = e),
                  (this.authService = n),
                  (this.date = u()()),
                  (this.Loading = !0),
                  (this.dateFrom = u()()),
                  (this.const_data = {}),
                  (this.const_year = {}),
                  (this.currentUser = {}),
                  (this.const_arr = []),
                  (this.const_category = []),
                  (this.label = []),
                  (this.data = []),
                  (this.API = "/reports/chartyear"),
                  (this.API_CATEGORY = "/order/staff"),
                  (this.displayedColumns = ["no", "total", "discount"]),
                  (this.price = 2e4);
              }
              ngOnInit() {
                this.currentUser = this.authService.getParseTokenUser();
              }
              changeDate(e, n, i) {
                if ("fromdate" == i) {
                  if (
                    null == n.datepickerInput.value &&
                    null == n.datepickerInput.value &&
                    "" == n.datepickerInput.value
                  )
                    return;
                  var h = "",
                    d = "";
                  if (
                    ((this.dateFrom = u()(e.value)),
                    (h = this.dateFrom.format("YYYY-MM-DD")),
                    (this.dateFrom = u()(n.datepickerInput.value)),
                    "Invalid date" == (d = this.dateFrom.format("YYYY-MM-DD")))
                  )
                    return;
                  this.loaddata(h, d);
                } else if ("todate" == i) {
                  if (
                    null == n.datepickerInput.value &&
                    null == n.datepickerInput.value &&
                    "" == n.datepickerInput.value
                  )
                    return;
                  if (
                    ((h = ""),
                    (d = ""),
                    (this.dateFrom = u()(e.value)),
                    (d = this.dateFrom.format("YYYY-MM-DD")),
                    (this.dateFrom = u()(n.datepickerInput.value)),
                    "Invalid date" == (h = this.dateFrom.format("YYYY-MM-DD")))
                  )
                    return;
                  this.loaddata(h, d);
                }
              }
              loaddata(e, n) {
                (this.const_data = {}),
                  (this.Loading = !1),
                  console.log(
                    UrlConstants.BASE_SERVER +
                      this.currentUser.ip +
                      this.API_CATEGORY,
                  ),
                  this._data
                    .post(
                      UrlConstants.BASE_SERVER +
                        this.currentUser.ip +
                        this.API_CATEGORY,
                      { fromdate: e.toString(), todate: n.toString() },
                    )
                    .subscribe(
                      (i) => {
                        (this.const_data = i || []),
                          this.mapCategoryAndData(i || []),
                          (this.Loading = !0),

                      },
                      (i) => {
                        (this.Loading = !0), console.log(i);
                      },
                    );
              }
              mapCategoryAndData(e) {
                var n;
                (this.const_arr = []),
                  null === (n = this.const_data) ||
                    void 0 === n ||
                    n.data.forEach((h, d) => {
                      this.const_arr.push({
                        staffcode: h.staffcode,
                        doanh_thu: h.doanh_thu,
                        toc: h.toc * this.price,
                      });
                    }),
                  (this.dataSource = this.const_arr),
                  console.table(this.dataSource);
              }
              parseDataArrayString(e) {
                (this.label = []),
                  (this.data = []),
                  e?.data.forEach((n) => {
                    this.label.push(n.group), this.data.push(n.total);
                  }),
                  this.doughnutChartMethod();
              }
              isGroup(e, n) {
                return n.group;
              }
              doughnutChartMethod() {
                null != this.doughnutChart && this.doughnutChart.destroy(),
                  (this.doughnutChart = new A.kL(this.myChart.nativeElement, {
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
              (t.ɵfac = function (e) {
                return new (e || t)(a.Y36(P.D), a.Y36(Z.e));
              }),
              (t.ɵcmp = a.Xpm({
                type: t,
                selectors: [["app-baocaodoanhthu-nhanvien"]],
                viewQuery: function (e, n) {
                  if ((1 & e && a.Gf(y, 5), 2 & e)) {
                    let i;
                    a.iGM((i = a.CRH())) && (n.myChart = i.first);
                  }
                },
                decls: 39,
                vars: 9,
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
                  ["matColumnDef", "total"],
                  ["style", "justify-content: end;", 4, "matCellDef"],
                  ["matColumnDef", "discount"],
                  [4, "matHeaderRowDef"],
                  [4, "matRowDef", "matRowDefColumns"],
                  ["bgcolor", "#000000", 4, "ngIf"],
                  [2, "justify-content", "end"],
                  ["bgcolor", "#000000"],
                  ["id", "loader-wrapper"],
                  ["id", "loader"],
                ],
                template: function (e, n) {
                  if (1 & e) {
                    const i = a.EpF();
                    a.TgZ(0, "ion-header")(1, "ion-toolbar")(
                      2,
                      "ion-buttons",
                      0,
                    ),
                      a._UZ(3, "ion-back-button"),
                      a.qZA(),
                      a.TgZ(4, "ion-title"),
                      a._uU(5, "B\xe1o c\xe1o doanh thu nh\xe2n vi\xean"),
                      a.qZA()()(),
                      a.TgZ(6, "ion-content", 1)(7, "div", 2)(8, "p")(
                        9,
                        "mat-form-field",
                        3,
                      )(10, "mat-label"),
                      a._uU(11, "T\u1eeb ng\xe0y"),
                      a.qZA(),
                      a.TgZ(12, "input", 4),
                      a.NdJ("dateChange", function (d) {
                        a.CHM(i);
                        const f = a.MAs(22);
                        return a.KtG(n.changeDate(d, f, "fromdate"));
                      }),
                      a.qZA(),
                      a._UZ(13, "mat-datepicker-toggle", 5)(
                        14,
                        "mat-datepicker",
                        6,
                        7,
                      ),
                      a.qZA(),
                      a.TgZ(16, "mat-form-field", 3)(17, "mat-label"),
                      a._uU(18, "\u0110\u1ebfn ng\xe0y"),
                      a.qZA(),
                      a.TgZ(19, "input", 4),
                      a.NdJ("dateChange", function (d) {
                        a.CHM(i);
                        const f = a.MAs(15);
                        return a.KtG(n.changeDate(d, f, "todate"));
                      }),
                      a.qZA(),
                      a._UZ(20, "mat-datepicker-toggle", 5)(
                        21,
                        "mat-datepicker",
                        6,
                        8,
                      ),
                      a.qZA()(),
                      a.TgZ(23, "mat-tab-group")(24, "mat-tab", 9)(25, "div")(
                        26,
                        "mat-table",
                        10,
                      ),
                      a.ynx(27, 11),
                      a.YNc(28, M, 2, 0, "mat-header-cell", 12),
                      a.YNc(29, D, 2, 1, "mat-cell", 13),
                      a.BQk(),
                      a.ynx(30, 14),
                      a.YNc(31, T, 2, 0, "mat-header-cell", 12),
                      a.YNc(32, Y, 3, 6, "mat-cell", 15),
                      a.BQk(),
                      a.ynx(33, 16),
                      a.YNc(34, E, 2, 0, "mat-header-cell", 12),
                      a.YNc(35, V, 3, 6, "mat-cell", 15),
                      a.BQk(),
                      a.YNc(36, F, 1, 0, "mat-header-row", 17),
                      a.YNc(37, x, 1, 0, "mat-row", 18),
                      a.qZA()()()()()(),
                      a.YNc(38, U, 3, 0, "div", 19);
                  }
                  if (2 & e) {
                    const i = a.MAs(15),
                      h = a.MAs(22);
                    a.xp6(6),
                      a.Q6J("fullscreen", !0),
                      a.xp6(6),
                      a.Q6J("matDatepicker", i),
                      a.xp6(1),
                      a.Q6J("for", i),
                      a.xp6(6),
                      a.Q6J("matDatepicker", h),
                      a.xp6(1),
                      a.Q6J("for", h),
                      a.xp6(6),
                      a.Q6J("dataSource", n.dataSource),
                      a.xp6(10),
                      a.Q6J("matHeaderRowDef", n.displayedColumns),
                      a.xp6(1),
                      a.Q6J("matRowDefColumns", n.displayedColumns),
                      a.xp6(1),
                      a.Q6J("ngIf", !n.Loading);
                  }
                },
                dependencies: [
                  s.O5,
                  c.oU,
                  c.Sm,
                  c.W2,
                  c.Gu,
                  c.wd,
                  c.sr,
                  c.cs,
                  m.Mq,
                  m.hl,
                  m.nW,
                  N.Nt,
                  g.KE,
                  g.hX,
                  g.R9,
                  l.BZ,
                  l.fO,
                  l.as,
                  l.w1,
                  l.Dz,
                  l.nj,
                  l.ge,
                  l.ev,
                  l.XQ,
                  l.Gk,
                  C.uX,
                  C.SP,
                  s.H9,
                ],
                styles: [
                  ".w-100[_ngcontent-%COMP%]{width:100%}  .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{background:white!important}table[_ngcontent-%COMP%]{width:100%}.example-month-picker[_ngcontent-%COMP%]   .mat-calendar-period-button[_ngcontent-%COMP%]{pointer-events:none}.example-month-picker[_ngcontent-%COMP%]   .mat-calendar-arrow[_ngcontent-%COMP%]{display:none}  .vanvas1{width:100%!important;height:100%!important}  .mdc-text-field--filled:not(.mdc-text-field--disabled){background:transparent}",
                ],
              })),
              t
            );
          })(),
        },
      ];
      let I = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵmod = a.oAB({ type: t })),
          (t.ɵinj = a.cJS({ imports: [b.Bz.forChild(_), b.Bz] })),
          t
        );
      })();
      var k = o(3238),
        Q = o(5064);
      let S = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵmod = a.oAB({ type: t })),
          (t.ɵinj = a.cJS({ imports: [s.ez, v.u5, c.Pc, Q.q, v.UX, k.XK, I] })),
          t
        );
      })();
    },
  },
]);
