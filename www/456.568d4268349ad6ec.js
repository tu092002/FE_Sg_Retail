"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [456],
  {
    456: (O, f, h) => {
      h.r(f), h.d(f, { BaocaodoanhthutheoNgayPageModule: () => H });
      var d = h(6895),
        b = h(4006),
        u = h(8779),
        _ = h(9299),
        l = h(5439),
        v = h(8053),
        a = h(4650),
        C = h(3238),
        A = h(2468),
        Z = h(4377),
        g = h(9602),
        N = h(4144),
        m = h(9549),
        s = h(671),
        y = h(3848);
      const T = ["myChart"];
      function B(t, r) {
        1 & t && (a.TgZ(0, "mat-header-cell"), a._uU(1, " No. "), a.qZA());
      }
      function P(t, r) {
        if ((1 & t && (a.TgZ(0, "mat-cell"), a._uU(1), a.qZA()), 2 & t)) {
          const o = r.$implicit;
          a.xp6(1), a.hij(" ", o.no, " ");
        }
      }
      function E(t, r) {
        1 & t &&
          (a.TgZ(0, "mat-header-cell"),
          a._uU(1, " Th\xe0nh ti\u1ec1n "),
          a.qZA());
      }
      function D(t, r) {
        if (
          (1 & t &&
            (a.TgZ(0, "mat-cell", 25), a._uU(1), a.ALo(2, "currency"), a.qZA()),
          2 & t)
        ) {
          const o = r.$implicit;
          a.xp6(1),
            a.hij(" ", a.gM2(2, 1, o.total, "\u0111 ", "symbol", "1.0"), " ");
        }
      }
      function Y(t, r) {
        1 & t &&
          (a.TgZ(0, "mat-header-cell"),
          a._uU(1, " Gi\u1ea3m gi\xe1 "),
          a.qZA());
      }
      function U(t, r) {
        if (
          (1 & t &&
            (a.TgZ(0, "mat-cell", 25), a._uU(1), a.ALo(2, "currency"), a.qZA()),
          2 & t)
        ) {
          const o = r.$implicit;
          a.xp6(1),
            a.hij(
              " ",
              a.gM2(2, 1, o.discount, "\u0111 ", "symbol", "1.0"),
              " ",
            );
        }
      }
      function M(t, r) {
        1 & t && a._UZ(0, "mat-header-row");
      }
      function S(t, r) {
        1 & t && a._UZ(0, "mat-row");
      }
      function x(t, r) {
        1 & t &&
          (a.TgZ(0, "mat-header-cell"),
          a._uU(1, " S\u1ed1 kh\xe1ch "),
          a.qZA());
      }
      function I(t, r) {
        if ((1 & t && (a.TgZ(0, "mat-cell"), a._uU(1), a.qZA()), 2 & t)) {
          const o = r.$implicit;
          a.xp6(1), a.hij(" ", o.Sl, " ");
        }
      }
      function F(t, r) {
        1 & t &&
          (a.TgZ(0, "mat-header-cell"),
          a._uU(1, " T\u1ed5ng ti\u1ec1n thanh to\xe1n "),
          a.qZA());
      }
      function L(t, r) {
        if (
          (1 & t &&
            (a.TgZ(0, "mat-cell", 25), a._uU(1), a.ALo(2, "currency"), a.qZA()),
          2 & t)
        ) {
          const o = r.$implicit;
          a.xp6(1),
            a.hij(" ", a.gM2(2, 1, o.total, "\u0111 ", "symbol", "1.0"), " ");
        }
      }
      function Q(t, r) {
        1 & t &&
          (a.TgZ(0, "mat-header-cell"),
          a._uU(1, " T\u1ed5ng Gi\u1ea3m gi\xe1 "),
          a.qZA());
      }
      function w(t, r) {
        if (
          (1 & t &&
            (a.TgZ(0, "mat-cell", 25), a._uU(1), a.ALo(2, "currency"), a.qZA()),
          2 & t)
        ) {
          const o = r.$implicit;
          a.xp6(1),
            a.hij(
              " ",
              a.gM2(2, 1, o.discount, "\u0111 ", "symbol", "1.0"),
              " ",
            );
        }
      }
      function R(t, r) {
        1 & t && a._UZ(0, "mat-header-row");
      }
      function k(t, r) {
        1 & t && a._UZ(0, "mat-row");
      }
      function J(t, r) {
        1 & t &&
          (a.TgZ(0, "div", 26)(1, "div", 27), a._UZ(2, "div", 28), a.qZA()());
      }
      const G = [
        {
          path: "",
          component: (() => {
            class t {
              constructor(o, e, i) {
                (this.dateAdapter = o),
                  (this._data = e),
                  (this.authService = i),
                  (this.dateFrom = l()),
                  (this.dateTo = l()),
                  (this.Loading = !0),
                  (this.const_data = {}),
                  (this.const_data_cus = {}),
                  (this.currentUser = {}),
                  (this.const_arr = []),
                  (this.const_arr_cus = []),
                  (this.const_category = []),
                  (this.label = []),
                  (this.data = []),
                  (this.API = "/reports/chartday"),
                  (this.API_CUSTOMER = "/reports/chartdaycustomer"),
                  (this.API_CIRCLE = "/reports/chartdaycircle"),
                  (this.API_CATEGORY = "/category"),
                  (this.displayedColumns = ["no", "total", "discount"]),
                  this.dateAdapter.setLocale("en-GB");
              }
              ngOnInit() {
                (this.currentUser = this.authService.getParseTokenUser()),
                  this.loadcategory();
              }
              changeDate(o, e, i) {
                if ("fromdate" == i) {
                  if (
                    null == e.datepickerInput.value &&
                    null == e.datepickerInput.value &&
                    "" == e.datepickerInput.value
                  )
                    return;
                  var n = "",
                    c = "";
                  if (
                    ((this.dateFrom = l(o.value)),
                    (n = this.dateFrom.format("YYYY-MM-DD")),
                    (this.dateFrom = l(e.datepickerInput.value)),
                    "Invalid date" == (c = this.dateFrom.format("YYYY-MM-DD")))
                  )
                    return;
                  this.loaddata(n, c), this.loaddata_cus(n, c);
                } else if ("todate" == i) {
                  if (
                    null == e.datepickerInput.value &&
                    null == e.datepickerInput.value &&
                    "" == e.datepickerInput.value
                  )
                    return;
                  if (
                    ((n = ""),
                    (c = ""),
                    (this.dateFrom = l(o.value)),
                    (c = this.dateFrom.format("YYYY-MM-DD")),
                    (this.dateFrom = l(e.datepickerInput.value)),
                    "Invalid date" == (n = this.dateFrom.format("YYYY-MM-DD")))
                  )
                    return;
                  this.loaddata(n, c), this.loaddata_cus(n, c);
                }
              }
              loaddata(o, e) {
                (this.const_data = {}),
                  (this.Loading = !1),
                  this._data
                    .post(
                      UrlConstants.BASE_SERVER + this.currentUser.ip + this.API,
                      { fromdate: o.toString(), todate: e.toString() },
                    )
                    .subscribe(
                      (i) => {
                        (this.const_data = i || []),
                          this.mapCategoryAndData(i || []),
                          console.table(this.const_data),
                          (this.Loading = !0);
                      },
                      (i) => {
                        (this.Loading = !0), console.log(i);
                      },
                    );
              }
              loaddata_cus(o, e) {
                (this.const_data_cus = {}),
                  (this.Loading = !1),
                  this._data
                    .post(
                      UrlConstants.BASE_SERVER +
                        this.currentUser.ip +
                        this.API_CUSTOMER,
                      { fromdate: o.toString(), todate: e.toString() },
                    )
                    .subscribe(
                      (i) => {
                        (this.const_data_cus = i || []),
                          this.mapCategoryAndDataCus(i || []),
                          console.table(this.const_data_cus),
                          (this.Loading = !0);
                      },
                      (i) => {
                        (this.Loading = !0), console.log(i);
                      },
                    );
              }
              loaddataCircle(o, e, i) {
                (this.Loading = !1),
                  this._data
                    .post(
                      UrlConstants.BASE_SERVER +
                        this.currentUser.ip +
                        this.API_CIRCLE,
                      {
                        day: o.toString(),
                        month: e.toString(),
                        year: i.toString(),
                      },
                    )
                    .subscribe(
                      (c) => {
                        this.parseDataArrayString(c || []), (this.Loading = !0);
                      },
                      (c) => {
                        (this.Loading = !0), console.log(c);
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
                (this.const_arr = []), console.log(o);
                var i = "";
                null === (e = this.const_data) ||
                  void 0 === e ||
                  e.data.forEach((n, c) => {
                    0 == c
                      ? (this.const_arr.push({ group: n.group }),
                        this.const_arr.push({
                          no: c + 1,
                          itemcode: n.itemcode,
                          total: n.total,
                          discount: n.discount,
                        }))
                      : (i == n.group ||
                          this.const_arr.push({ group: n.group }),
                        this.const_arr.push({
                          no: c + 1,
                          itemcode: n.itemcode,
                          total: n.total,
                          discount: n.discount,
                        })),
                      (i = n.group);
                  }),
                  console.table(this.const_arr),
                  (this.dataSource = this.const_arr);
              }
              mapCategoryAndDataCus(o) {
                var e, i;
                (this.const_arr_cus = []),
                  console.table(
                    null === (e = this.const_data_cus) || void 0 === e
                      ? void 0
                      : e.data,
                  ),
                  null === (i = this.const_data_cus) ||
                    void 0 === i ||
                    i.data.forEach((n, c) => {
                      this.const_arr_cus.push({
                        no: c + 1,
                        Sl: n.Sl,
                        total: n.total,
                        discount: n.discount,
                      });
                    }),
,
                  console.table(this.const_arr_cus),
                  (this.dataSourceCus = this.const_arr_cus);
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
                  (this.doughnutChart = new v.ZP(this.myChart.nativeElement, {
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
                return new (o || t)(a.Y36(C._A), a.Y36(A.D), a.Y36(Z.e));
              }),
              (t.ɵcmp = a.Xpm({
                type: t,
                selectors: [["app-baocaodoanhthutheo-ngay"]],
                viewQuery: function (o, e) {
                  if ((1 & o && a.Gf(T, 5), 2 & o)) {
                    let i;
                    a.iGM((i = a.CRH())) && (e.myChart = i.first);
                  }
                },
                decls: 58,
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
                  ["matColumnDef", "total"],
                  ["style", "justify-content: end;", 4, "matCellDef"],
                  ["matColumnDef", "discount"],
                  [4, "matHeaderRowDef"],
                  [4, "matRowDef", "matRowDefColumns"],
                  ["label", "Bi\u1ec3u \u0111\u1ed3"],
                  ["id", "bar-chart-container"],
                  [
                    2,
                    "position",
                    "relative",
                    "height",
                    "20vh",
                    "width",
                    "40vw",
                  ],
                  ["myChart", ""],
                  [
                    "label",
                    "Doanh Thu v\xe0 S\u1ed1 L\u01b0\u1ee3ng Kh\xe1ch H\xe0ng",
                  ],
                  ["bgcolor", "#000000", 4, "ngIf"],
                  [2, "justify-content", "end"],
                  ["bgcolor", "#000000"],
                  ["id", "loader-wrapper"],
                  ["id", "loader"],
                ],
                template: function (o, e) {
                  if (1 & o) {
                    const i = a.EpF();
                    a.TgZ(0, "ion-header")(1, "ion-toolbar")(
                      2,
                      "ion-buttons",
                      0,
                    ),
                      a._UZ(3, "ion-back-button"),
                      a.qZA(),
                      a.TgZ(4, "ion-title"),
                      a._uU(5, "B\xe1o c\xe1o doanh thu theo ng\xe0y"),
                      a.qZA()()(),
                      a.TgZ(6, "ion-content", 1)(7, "div", 2)(8, "p")(
                        9,
                        "mat-form-field",
                        3,
                      )(10, "mat-label"),
                      a._uU(11, "T\u1eeb ng\xe0y"),
                      a.qZA(),
                      a.TgZ(12, "input", 4),
                      a.NdJ("dateChange", function (c) {
                        a.CHM(i);
                        const p = a.MAs(22);
                        return a.KtG(e.changeDate(c, p, "fromdate"));
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
                      a.NdJ("dateChange", function (c) {
                        a.CHM(i);
                        const p = a.MAs(15);
                        return a.KtG(e.changeDate(c, p, "todate"));
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
                      a.YNc(28, B, 2, 0, "mat-header-cell", 12),
                      a.YNc(29, P, 2, 1, "mat-cell", 13),
                      a.BQk(),
                      a.ynx(30, 14),
                      a.YNc(31, E, 2, 0, "mat-header-cell", 12),
                      a.YNc(32, D, 3, 6, "mat-cell", 15),
                      a.BQk(),
                      a.ynx(33, 16),
                      a.YNc(34, Y, 2, 0, "mat-header-cell", 12),
                      a.YNc(35, U, 3, 6, "mat-cell", 15),
                      a.BQk(),
                      a.YNc(36, M, 1, 0, "mat-header-row", 17),
                      a.YNc(37, S, 1, 0, "mat-row", 18),
                      a.qZA()()(),
                      a.TgZ(38, "mat-tab", 19)(39, "div", 20),
                      a._UZ(40, "canvas", 21, 22),
                      a.qZA()()(),
                      a.TgZ(42, "mat-tab-group")(43, "mat-tab", 23)(44, "div")(
                        45,
                        "mat-table",
                        10,
                      ),
                      a.ynx(46, 11),
                      a.YNc(47, x, 2, 0, "mat-header-cell", 12),
                      a.YNc(48, I, 2, 1, "mat-cell", 13),
                      a.BQk(),
                      a.ynx(49, 14),
                      a.YNc(50, F, 2, 0, "mat-header-cell", 12),
                      a.YNc(51, L, 3, 6, "mat-cell", 15),
                      a.BQk(),
                      a.ynx(52, 16),
                      a.YNc(53, Q, 2, 0, "mat-header-cell", 12),
                      a.YNc(54, w, 3, 6, "mat-cell", 15),
                      a.BQk(),
                      a.YNc(55, R, 1, 0, "mat-header-row", 17),
                      a.YNc(56, k, 1, 0, "mat-row", 18),
                      a.qZA()()()()()(),
                      a.YNc(57, J, 3, 0, "div", 24);
                  }
                  if (2 & o) {
                    const i = a.MAs(15),
                      n = a.MAs(22);
                    a.xp6(6),
                      a.Q6J("fullscreen", !0),
                      a.xp6(6),
                      a.Q6J("matDatepicker", i),
                      a.xp6(1),
                      a.Q6J("for", i),
                      a.xp6(6),
                      a.Q6J("matDatepicker", n),
                      a.xp6(1),
                      a.Q6J("for", n),
                      a.xp6(6),
                      a.Q6J("dataSource", e.dataSource),
                      a.xp6(10),
                      a.Q6J("matHeaderRowDef", e.displayedColumns),
                      a.xp6(1),
                      a.Q6J("matRowDefColumns", e.displayedColumns),
                      a.xp6(8),
                      a.Q6J("dataSource", e.dataSourceCus),
                      a.xp6(10),
                      a.Q6J("matHeaderRowDef", e.displayedColumns),
                      a.xp6(1),
                      a.Q6J("matRowDefColumns", e.displayedColumns),
                      a.xp6(1),
                      a.Q6J("ngIf", !e.Loading);
                  }
                },
                dependencies: [
                  d.O5,
                  u.oU,
                  u.Sm,
                  u.W2,
                  u.Gu,
                  u.wd,
                  u.sr,
                  u.cs,
                  g.Mq,
                  g.hl,
                  g.nW,
                  N.Nt,
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
                  y.uX,
                  y.SP,
                  d.H9,
                ],
                styles: [
                  ".w-100[_ngcontent-%COMP%]{width:100%}  .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{background:white!important}table[_ngcontent-%COMP%]{width:100%}",
                ],
              })),
              t
            );
          })(),
        },
      ];
      let j = (() => {
        class t {}
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵmod = a.oAB({ type: t })),
          (t.ɵinj = a.cJS({ imports: [_.Bz.forChild(G), _.Bz] })),
          t
        );
      })();
      var q = h(5064);
      let H = (() => {
        class t {}
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵmod = a.oAB({ type: t })),
          (t.ɵinj = a.cJS({ imports: [d.ez, b.u5, u.Pc, q.q, j] })),
          t
        );
      })();
    },
  },
]);
