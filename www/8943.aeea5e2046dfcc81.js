"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [8943],
  {
    8943: (I, u, r) => {
      r.r(u), r.d(u, { BaocaodoanhthutheoNamPageModule: () => w });
      var l = r(6895),
        g = r(4006),
        c = r(8779),
        m = r(9299),
        v = r(9490),
        C = r(5439),
        y = r.n(C),
        a = r(4650),
        B = r(2468),
        P = r(4377),
        p = r(3238),
        f = r(9549),
        N = r(4385),
        h = r(671),
        b = r(3848);
      const A = ["myChart"];
      function Z(t, n) {
        if ((1 & t && (a.TgZ(0, "mat-option", 21), a._uU(1), a.qZA()), 2 & t)) {
          const o = n.$implicit;
          a.Q6J("value", o.name2), a.xp6(1), a.hij(" ", o.name2, " ");
        }
      }
      function _(t, n) {
        1 & t && (a.TgZ(0, "mat-header-cell"), a._uU(1, " No. "), a.qZA());
      }
      function T(t, n) {
        if ((1 & t && (a.TgZ(0, "mat-cell"), a._uU(1), a.qZA()), 2 & t)) {
          const o = n.$implicit;
          a.xp6(1), a.hij(" ", o.no, " ");
        }
      }
      function D(t, n) {
        1 & t &&
          (a.TgZ(0, "mat-header-cell"),
          a._uU(1, " Th\xe0nh ti\u1ec1n "),
          a.qZA());
      }
      function U(t, n) {
        if ((1 & t && (a.TgZ(0, "mat-cell", 22), a._uU(1), a.qZA()), 2 & t)) {
          const o = n.$implicit;
          a.xp6(1), a.hij(" ", o.total, " ");
        }
      }
      function E(t, n) {
        1 & t &&
          (a.TgZ(0, "mat-header-cell"),
          a._uU(1, " Gi\u1ea3m gi\xe1 "),
          a.qZA());
      }
      function S(t, n) {
        if ((1 & t && (a.TgZ(0, "mat-cell", 22), a._uU(1), a.qZA()), 2 & t)) {
          const o = n.$implicit;
          a.xp6(1), a.hij(" ", o.discount, " ");
        }
      }
      function L(t, n) {
        1 & t && a._UZ(0, "mat-header-row");
      }
      function M(t, n) {
        1 & t && a._UZ(0, "mat-row");
      }
      function Y(t, n) {
        1 & t &&
          (a.TgZ(0, "div", 23)(1, "div", 24), a._UZ(2, "div", 25), a.qZA()());
      }
      const x = [
        {
          path: "",
          component: (() => {
            class t {
              constructor(o, e) {
                (this._data = o),
                  (this.authService = e),
                  (this.date = y()()),
                  (this.Loading = !0),
                  (this.const_data = {}),
                  (this.const_year = {}),
                  (this.currentUser = {}),
                  (this.const_arr = []),
                  (this.const_category = []),
                  (this.label = []),
                  (this.data = []),
                  (this.API = "/reports/chartyear"),
                  (this.API_CIRCLE = "/reports/chartyearcircle"),
                  (this.API_CATEGORY = "/category"),
                  (this.API_YEAR = "/reports/years"),
                  (this.displayedColumns = ["no", "total", "discount"]);
              }
              ngOnInit() {
                (this.currentUser = this.authService.getParseTokenUser()),
                  this.loadyear(),
                  this.loadcategory();
              }
              changeDate(o) {
                this.loaddata(o.value), this.loaddataCircle(o.value);
              }
              loaddata(o) {
                (this.const_data = {}),
                  (this.Loading = !1),
                  this._data
                    .post(
                      UrlConstants.BASE_SERVER + this.currentUser.ip + this.API,
                      { year: o.toString() },
                    )
                    .subscribe(
                      (e) => {
                        (this.const_data = e || []),
                          this.mapCategoryAndData(e || []),
                          (this.Loading = !0);
                      },
                      (e) => {
                        (this.Loading = !0), console.log(e);
                      },
                    );
              }
              loaddataCircle(o) {
                (this.Loading = !1),
                  this._data
                    .post(
                      UrlConstants.BASE_SERVER +
                        this.currentUser.ip +
                        this.API_CIRCLE,
                      { year: o.toString() },
                    )
                    .subscribe(
                      (s) => {
                        this.parseDataArrayString(s || []), (this.Loading = !0);
                      },
                      (s) => {
                        (this.Loading = !0), console.log(s);
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
              loadyear() {
                (this.Loading = !1),
                  this._data
                    .get(
                      UrlConstants.BASE_SERVER +
                        this.currentUser.ip +
                        this.API_YEAR,
                    )
                    .subscribe(
                      (o) => {
                        (this.const_year = o || []), (this.Loading = !0);
                      },
                      (o) => {
                        (this.Loading = !0), console.log(o);
                      },
                    );
              }
              mapCategoryAndData(o) {
                var e;
                this.const_arr = [];
                var s = "";
                null === (e = this.const_data) ||
                  void 0 === e ||
                  e.data.forEach((i, d) => {
                    0 == d
                      ? (this.const_arr.push({ group: i.group }),
                        this.const_arr.push({
                          no: d + 1,
                          itemcode: i.itemcode,
                          total: i.total
                            .toString()
                            .replace(/\D/g, "")
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                          discount: i.discount
                            .toString()
                            .replace(/\D/g, "")
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                        }))
                      : (s == i.group ||
                          this.const_arr.push({ group: i.group }),
                        this.const_arr.push({
                          no: d + 1,
                          itemcode: i.itemcode,
                          total: i.total
                            .toString()
                            .replace(/\D/g, "")
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                          discount: i.discount
                            .toString()
                            .replace(/\D/g, "")
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                        })),
                      (s = i.group);
                  }),
                  (this.dataSource = this.const_arr);
              }
              parseDataArrayString(o) {
                (this.label = []),
                  (this.data = []),
                  o?.data.forEach((e) => {
                    this.label.push(e.group), this.data.push(e.total);
                  }),
                  this.doughnutChartMethod();
              }
              isGroup(o, e) {
                return e.group;
              }
              doughnutChartMethod() {
                null != this.doughnutChart && this.doughnutChart.destroy(),
                  (this.doughnutChart = new v.kL(this.myChart.nativeElement, {
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
              (t.ɵfac = function (o) {
                return new (o || t)(a.Y36(B.D), a.Y36(P.e));
              }),
              (t.ɵcmp = a.Xpm({
                type: t,
                selectors: [["app-baocaodoanhthutheo-nam"]],
                viewQuery: function (o, e) {
                  if ((1 & o && a.Gf(A, 5), 2 & o)) {
                    let s;
                    a.iGM((s = a.CRH())) && (e.myChart = s.first);
                  }
                },
                decls: 34,
                vars: 6,
                consts: [
                  ["slot", "start"],
                  [3, "fullscreen"],
                  [1, "ion-padding"],
                  ["appearance", "fill", "id", "vendor-option", 1, "w-100"],
                  [3, "selectionChange"],
                  [3, "value", 4, "ngFor", "ngForOf"],
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
                  ["label", "Bi\u1ec3u \u0111\u1ed3"],
                  [
                    "id",
                    "bar-chart-container",
                    2,
                    "width",
                    "100%",
                    "height",
                    "100%",
                  ],
                  [1, "vanvas1"],
                  ["myChart", ""],
                  ["bgcolor", "#000000", 4, "ngIf"],
                  [3, "value"],
                  [2, "justify-content", "end"],
                  ["bgcolor", "#000000"],
                  ["id", "loader-wrapper"],
                  ["id", "loader"],
                ],
                template: function (o, e) {
                  1 & o &&
                    (a.TgZ(0, "ion-header")(1, "ion-toolbar")(
                      2,
                      "ion-buttons",
                      0,
                    ),
                    a._UZ(3, "ion-back-button"),
                    a.qZA(),
                    a.TgZ(4, "ion-title"),
                    a._uU(5, "B\xe1o c\xe1o doanh thu theo n\u0103m"),
                    a.qZA()()(),
                    a.TgZ(6, "ion-content", 1)(7, "div", 2)(8, "p")(
                      9,
                      "mat-form-field",
                      3,
                    )(10, "mat-label"),
                    a._uU(11, "N\u0103m"),
                    a.qZA(),
                    a.TgZ(12, "mat-select", 4),
                    a.NdJ("selectionChange", function (i) {
                      return e.changeDate(i);
                    }),
                    a.YNc(13, Z, 2, 2, "mat-option", 5),
                    a.qZA()()(),
                    a.TgZ(14, "mat-tab-group")(15, "mat-tab", 6)(16, "div")(
                      17,
                      "mat-table",
                      7,
                    ),
                    a.ynx(18, 8),
                    a.YNc(19, _, 2, 0, "mat-header-cell", 9),
                    a.YNc(20, T, 2, 1, "mat-cell", 10),
                    a.BQk(),
                    a.ynx(21, 11),
                    a.YNc(22, D, 2, 0, "mat-header-cell", 9),
                    a.YNc(23, U, 2, 1, "mat-cell", 12),
                    a.BQk(),
                    a.ynx(24, 13),
                    a.YNc(25, E, 2, 0, "mat-header-cell", 9),
                    a.YNc(26, S, 2, 1, "mat-cell", 12),
                    a.BQk(),
                    a.YNc(27, L, 1, 0, "mat-header-row", 14),
                    a.YNc(28, M, 1, 0, "mat-row", 15),
                    a.qZA()()(),
                    a.TgZ(29, "mat-tab", 16)(30, "div", 17),
                    a._UZ(31, "canvas", 18, 19),
                    a.qZA()()()()(),
                    a.YNc(33, Y, 3, 0, "div", 20)),
                    2 & o &&
                      (a.xp6(6),
                      a.Q6J("fullscreen", !0),
                      a.xp6(7),
                      a.Q6J(
                        "ngForOf",
                        null == e.const_year ? null : e.const_year.data,
                      ),
                      a.xp6(4),
                      a.Q6J("dataSource", e.dataSource),
                      a.xp6(10),
                      a.Q6J("matHeaderRowDef", e.displayedColumns),
                      a.xp6(1),
                      a.Q6J("matRowDefColumns", e.displayedColumns),
                      a.xp6(5),
                      a.Q6J("ngIf", !e.Loading));
                },
                dependencies: [
                  l.sg,
                  l.O5,
                  c.oU,
                  c.Sm,
                  c.W2,
                  c.Gu,
                  c.wd,
                  c.sr,
                  c.cs,
                  p.ey,
                  f.KE,
                  f.hX,
                  N.gD,
                  h.BZ,
                  h.fO,
                  h.as,
                  h.w1,
                  h.Dz,
                  h.nj,
                  h.ge,
                  h.ev,
                  h.XQ,
                  h.Gk,
                  b.uX,
                  b.SP,
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
      let R = (() => {
        class t {}
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵmod = a.oAB({ type: t })),
          (t.ɵinj = a.cJS({ imports: [m.Bz.forChild(x), m.Bz] })),
          t
        );
      })();
      var F = r(5064);
      let w = (() => {
        class t {}
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵmod = a.oAB({ type: t })),
          (t.ɵinj = a.cJS({ imports: [l.ez, g.u5, c.Pc, F.q, g.UX, p.XK, R] })),
          t
        );
      })();
    },
  },
]);
