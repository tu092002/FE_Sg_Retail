"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [4386],
  {
    4386: (et, _, h) => {
      h.r(_), h.d(_, { BaocaodoanhthutheoThangPageModule: () => tt });
      var D = h(6895),
        m = h(4006),
        c = h(8779),
        T = h(9299),
        t = h(4650),
        d = h(3238),
        g = h(5439),
        v = h.t(g, 2),
        Y = h.n(g);
      const u = g || v,
        y = new t.OlP("MAT_MOMENT_DATE_ADAPTER_OPTIONS", {
          providedIn: "root",
          factory: function C() {
            return { useUtc: !1 };
          },
        });
      function b(o, r) {
        const a = Array(o);
        for (let e = 0; e < o; e++) a[e] = r(e);
        return a;
      }
      let P = (() => {
        class o extends d._A {
          constructor(a, e) {
            super(), (this._options = e), this.setLocale(a || u.locale());
          }
          setLocale(a) {
            super.setLocale(a);
            let e = u.localeData(a);
            this._localeData = {
              firstDayOfWeek: e.firstDayOfWeek(),
              longMonths: e.months(),
              shortMonths: e.monthsShort(),
              dates: b(31, (n) => this.createDate(2017, 0, n + 1).format("D")),
              longDaysOfWeek: e.weekdays(),
              shortDaysOfWeek: e.weekdaysShort(),
              narrowDaysOfWeek: e.weekdaysMin(),
            };
          }
          getYear(a) {
            return this.clone(a).year();
          }
          getMonth(a) {
            return this.clone(a).month();
          }
          getDate(a) {
            return this.clone(a).date();
          }
          getDayOfWeek(a) {
            return this.clone(a).day();
          }
          getMonthNames(a) {
            return "long" == a
              ? this._localeData.longMonths
              : this._localeData.shortMonths;
          }
          getDateNames() {
            return this._localeData.dates;
          }
          getDayOfWeekNames(a) {
            return "long" == a
              ? this._localeData.longDaysOfWeek
              : "short" == a
              ? this._localeData.shortDaysOfWeek
              : this._localeData.narrowDaysOfWeek;
          }
          getYearName(a) {
            return this.clone(a).format("YYYY");
          }
          getFirstDayOfWeek() {
            return this._localeData.firstDayOfWeek;
          }
          getNumDaysInMonth(a) {
            return this.clone(a).daysInMonth();
          }
          clone(a) {
            return a.clone().locale(this.locale);
          }
          createDate(a, e, n) {
            const i = this._createMoment({ year: a, month: e, date: n }).locale(
              this.locale,
            );
            return i.isValid(), i;
          }
          today() {
            return this._createMoment().locale(this.locale);
          }
          parse(a, e) {
            return a && "string" == typeof a
              ? this._createMoment(a, e, this.locale)
              : a
              ? this._createMoment(a).locale(this.locale)
              : null;
          }
          format(a, e) {
            return (a = this.clone(a)), this.isValid(a), a.format(e);
          }
          addCalendarYears(a, e) {
            return this.clone(a).add({ years: e });
          }
          addCalendarMonths(a, e) {
            return this.clone(a).add({ months: e });
          }
          addCalendarDays(a, e) {
            return this.clone(a).add({ days: e });
          }
          toIso8601(a) {
            return this.clone(a).format();
          }
          deserialize(a) {
            let e;
            if (a instanceof Date)
              e = this._createMoment(a).locale(this.locale);
            else if (this.isDateInstance(a)) return this.clone(a);
            if ("string" == typeof a) {
              if (!a) return null;
              e = this._createMoment(a, u.ISO_8601).locale(this.locale);
            }
            return e && this.isValid(e)
              ? this._createMoment(e).locale(this.locale)
              : super.deserialize(a);
          }
          isDateInstance(a) {
            return u.isMoment(a);
          }
          isValid(a) {
            return this.clone(a).isValid();
          }
          invalid() {
            return u.invalid();
          }
          _createMoment(a, e, n) {
            const { strict: i, useUtc: s } = this._options || {};
            return s ? u.utc(a, e, n, i) : u(a, e, n, i);
          }
        }
        return (
          (o.ɵfac = function (a) {
            return new (a || o)(t.LFG(d.Ad, 8), t.LFG(y, 8));
          }),
          (o.ɵprov = t.Yz7({ token: o, factory: o.ɵfac })),
          o
        );
      })();
      var B = h(9490),
        E = h(2468),
        Z = h(4377),
        f = h(9602),
        O = h(4144),
        p = h(9549),
        l = h(671),
        A = h(3848);
      const N = ["myChart"];
      function S(o, r) {
        1 & o && (t.TgZ(0, "mat-header-cell"), t._uU(1, " No. "), t.qZA());
      }
      function w(o, r) {
        if ((1 & o && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & o)) {
          const a = r.$implicit;
          t.xp6(1), t.hij(" ", a.no, " ");
        }
      }
      function I(o, r) {
        1 & o &&
          (t.TgZ(0, "mat-header-cell"),
          t._uU(1, " Th\xe0nh ti\u1ec1n "),
          t.qZA());
      }
      function U(o, r) {
        if ((1 & o && (t.TgZ(0, "mat-cell", 24), t._uU(1), t.qZA()), 2 & o)) {
          const a = r.$implicit;
          t.xp6(1), t.hij(" ", a.total, " ");
        }
      }
      function L(o, r) {
        1 & o &&
          (t.TgZ(0, "mat-header-cell"),
          t._uU(1, " Gi\u1ea3m gi\xe1 "),
          t.qZA());
      }
      function x(o, r) {
        if ((1 & o && (t.TgZ(0, "mat-cell", 24), t._uU(1), t.qZA()), 2 & o)) {
          const a = r.$implicit;
          t.xp6(1), t.hij(" ", a.discount, " ");
        }
      }
      function R(o, r) {
        1 & o && t._UZ(0, "mat-header-row");
      }
      function F(o, r) {
        1 & o && t._UZ(0, "mat-row");
      }
      function k(o, r) {
        1 & o && (t.TgZ(0, "mat-header-cell"), t._uU(1, " No. "), t.qZA());
      }
      function Q(o, r) {
        if ((1 & o && (t.TgZ(0, "mat-cell"), t._uU(1), t.qZA()), 2 & o)) {
          const a = r.$implicit;
          t.xp6(1), t.hij(" ", a.no, " ");
        }
      }
      function j(o, r) {
        1 & o &&
          (t.TgZ(0, "mat-header-cell"),
          t._uU(1, " T\u1ed5ng ti\u1ec1n thanh to\xe1n "),
          t.qZA());
      }
      function J(o, r) {
        if ((1 & o && (t.TgZ(0, "mat-cell", 24), t._uU(1), t.qZA()), 2 & o)) {
          const a = r.$implicit;
          t.xp6(1), t.hij(" ", a.total, " ");
        }
      }
      function W(o, r) {
        1 & o &&
          (t.TgZ(0, "mat-header-cell"),
          t._uU(1, " T\u1ed5ng Gi\u1ea3m gi\xe1 "),
          t.qZA());
      }
      function G(o, r) {
        if ((1 & o && (t.TgZ(0, "mat-cell", 24), t._uU(1), t.qZA()), 2 & o)) {
          const a = r.$implicit;
          t.xp6(1), t.hij(" ", a.discount, " ");
        }
      }
      function V(o, r) {
        1 & o && t._UZ(0, "mat-header-row");
      }
      function $(o, r) {
        1 & o && t._UZ(0, "mat-row");
      }
      function z(o, r) {
        1 & o &&
          (t.TgZ(0, "div", 25)(1, "div", 26), t._UZ(2, "div", 27), t.qZA()());
      }
      const M = Y() || g,
        H = {
          parse: { dateInput: "MM/YYYY" },
          display: {
            dateInput: "MM/YYYY",
            monthYearLabel: "MMM YYYY",
            dateA11yLabel: "LL",
            monthYearA11yLabel: "MMMM YYYY",
          },
        },
        X = [
          {
            path: "",
            component: (() => {
              class o {
                constructor(a, e, n) {
                  (this.dateAdapter = a),
                    (this._data = e),
                    (this.authService = n),
                    (this.date = new m.NI(M())),
                    (this.Loading = !0),
                    (this.const_data = {}),
                    (this.currentUser = {}),
                    (this.const_arr = []),
                    (this.const_category = []),
                    (this.label = []),
                    (this.data = []),
                    (this.API = "/reports/chartmonth"),
                    (this.API_CUSTOMER = "/reports/chartdaycustomer"),
                    (this.API_CIRCLE = "/reports/chartmonthcircle"),
                    (this.API_CATEGORY = "/category"),
                    (this.const_arr_cus = []),
                    (this.displayedColumns = ["no", "total", "discount"]),
                    (this.const_data_cus = {});
                }
                ngOnInit() {
                  (this.currentUser = this.authService.getParseTokenUser()),
                    this.loadcategory();
                  var a,
                    e,
                    n = M();
                  (a = n.format("MM")),
                    (e = n.format("YYYY")),
                    this.loaddata(a, e),
                    this.loaddataCircle(a, e);
                }
                changeDate(a) {
                  var e,
                    n,
                    i = M(a._d);
                  (e = i.format("MM")),
                    (n = i.format("YYYY")),
                    this.loaddata(e, n),
                    this.loaddataCircle(e, n);
                }
                loaddata(a, e) {
                  (this.const_data = {}),
                    (this.Loading = !1),
                    this._data
                      .post(
                        UrlConstants.BASE_SERVER +
                          this.currentUser.ip +
                          this.API,
                        { month: a.toString(), year: e.toString() },
                      )
                      .subscribe(
                        (n) => {
                          (this.const_data = n || []),
                            this.mapCategoryAndData(n || []),
                            (this.Loading = !0);
                        },
                        (n) => {
                          (this.Loading = !0), console.log(n);
                        },
                      );
                }
                loaddataCircle(a, e) {
                  var n = {};
                  (this.Loading = !1),
                    this._data
                      .post(
                        UrlConstants.BASE_SERVER +
                          this.currentUser.ip +
                          this.API_CIRCLE,
                        { month: a.toString(), year: e.toString() },
                      )
                      .subscribe(
                        (i) => {
                          (n = i || []),
,
                            this.parseDataArrayString(n),
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
                        (a) => {
                          (this.const_category = a || []), (this.Loading = !0);
                        },
                        (a) => {
                          (this.Loading = !0), console.log(a);
                        },
                      );
                }
                setMonthAndYear(a, e) {
                  const n = this.date.value;
                  n.month(a.month()),
                    n.year(a.year()),
                    this.date.setValue(n),
                    e.close();
                }
                mapCategoryAndData(a) {
                  var e;
                  this.const_arr = [];
                  var n = "";
                  null === (e = this.const_data) ||
                    void 0 === e ||
                    e.data.forEach((i, s) => {
                      0 == s
                        ? (this.const_arr.push({ group: i.group }),
                          this.const_arr.push({
                            no: s + 1,
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
                        : (n == i.group ||
                            this.const_arr.push({ group: i.group }),
                          this.const_arr.push({
                            no: s + 1,
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
                        (n = i.group);
                    }),
                    (this.dataSource = this.const_arr),

                }
                parseDataArrayString(a) {
                  (this.label = []),
                    (this.data = []),
                    a?.data.forEach((e) => {
                      this.data.push({
                        no: "1",
                        discount: e.discount,
                        total: e.total,
                      });
                    }),
,
                    this.doughnutChartMethod();
                }
                isGroup(a, e) {
                  return e.group;
                }
                doughnutChartMethod() {
                  null != this.doughnutChart && this.doughnutChart.destroy(),
                    (this.doughnutChart = new B.kL(this.myChart.nativeElement, {
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
                (o.ɵfac = function (a) {
                  return new (a || o)(t.Y36(d._A), t.Y36(E.D), t.Y36(Z.e));
                }),
                (o.ɵcmp = t.Xpm({
                  type: o,
                  selectors: [["app-baocaodoanhthutheo-thang"]],
                  viewQuery: function (a, e) {
                    if ((1 & a && t.Gf(N, 5), 2 & a)) {
                      let n;
                      t.iGM((n = t.CRH())) && (e.myChart = n.first);
                    }
                  },
                  features: [
                    t._Bn([
                      { provide: d._A, useClass: P, deps: [d.Ad, y] },
                      { provide: d.sG, useValue: H },
                    ]),
                  ],
                  decls: 51,
                  vars: 11,
                  consts: [
                    ["slot", "start"],
                    [3, "fullscreen"],
                    [1, "ion-padding"],
                    ["appearance", "fill", "id", "vendor-option", 1, "w-100"],
                    ["matInput", "", 3, "matDatepicker", "formControl"],
                    ["matIconSuffix", "", 3, "for"],
                    [
                      "startView",
                      "multi-year",
                      "panelClass",
                      "example-month-picker",
                      3,
                      "monthSelected",
                    ],
                    ["dp", ""],
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
                    ["label", "Doanh Thu "],
                    ["bgcolor", "#000000", 4, "ngIf"],
                    [2, "justify-content", "end"],
                    ["bgcolor", "#000000"],
                    ["id", "loader-wrapper"],
                    ["id", "loader"],
                  ],
                  template: function (a, e) {
                    if (1 & a) {
                      const n = t.EpF();
                      t.TgZ(0, "ion-header")(1, "ion-toolbar")(
                        2,
                        "ion-buttons",
                        0,
                      ),
                        t._UZ(3, "ion-back-button"),
                        t.qZA(),
                        t.TgZ(4, "ion-title"),
                        t._uU(5, "B\xe1o c\xe1o doanh thu theo th\xe1ng"),
                        t.qZA()()(),
                        t.TgZ(6, "ion-content", 1)(7, "div", 2)(8, "p")(
                          9,
                          "mat-form-field",
                          3,
                        )(10, "mat-label"),
                        t._uU(11, "Th\xe1ng v\xe0 N\u0103m"),
                        t.qZA(),
                        t._UZ(12, "input", 4)(13, "mat-datepicker-toggle", 5),
                        t.TgZ(14, "mat-datepicker", 6, 7),
                        t.NdJ("monthSelected", function (s) {
                          t.CHM(n);
                          const at = t.MAs(15);
                          return (
                            e.setMonthAndYear(s, at), t.KtG(e.changeDate(s))
                          );
                        }),
                        t.qZA()()(),
                        t.TgZ(16, "mat-tab-group")(17, "mat-tab", 8)(18, "div")(
                          19,
                          "mat-table",
                          9,
                        ),
                        t.ynx(20, 10),
                        t.YNc(21, S, 2, 0, "mat-header-cell", 11),
                        t.YNc(22, w, 2, 1, "mat-cell", 12),
                        t.BQk(),
                        t.ynx(23, 13),
                        t.YNc(24, I, 2, 0, "mat-header-cell", 11),
                        t.YNc(25, U, 2, 1, "mat-cell", 14),
                        t.BQk(),
                        t.ynx(26, 15),
                        t.YNc(27, L, 2, 0, "mat-header-cell", 11),
                        t.YNc(28, x, 2, 1, "mat-cell", 14),
                        t.BQk(),
                        t.YNc(29, R, 1, 0, "mat-header-row", 16),
                        t.YNc(30, F, 1, 0, "mat-row", 17),
                        t.qZA()()(),
                        t.TgZ(31, "mat-tab", 18)(32, "div", 19),
                        t._UZ(33, "canvas", 20, 21),
                        t.qZA()()(),
                        t.TgZ(35, "mat-tab-group")(36, "mat-tab", 22)(
                          37,
                          "div",
                        )(38, "mat-table", 9),
                        t.ynx(39, 10),
                        t.YNc(40, k, 2, 0, "mat-header-cell", 11),
                        t.YNc(41, Q, 2, 1, "mat-cell", 12),
                        t.BQk(),
                        t.ynx(42, 13),
                        t.YNc(43, j, 2, 0, "mat-header-cell", 11),
                        t.YNc(44, J, 2, 1, "mat-cell", 14),
                        t.BQk(),
                        t.ynx(45, 15),
                        t.YNc(46, W, 2, 0, "mat-header-cell", 11),
                        t.YNc(47, G, 2, 1, "mat-cell", 14),
                        t.BQk(),
                        t.YNc(48, V, 1, 0, "mat-header-row", 16),
                        t.YNc(49, $, 1, 0, "mat-row", 17),
                        t.qZA()()()()()(),
                        t.YNc(50, z, 3, 0, "div", 23);
                    }
                    if (2 & a) {
                      const n = t.MAs(15);
                      t.xp6(6),
                        t.Q6J("fullscreen", !0),
                        t.xp6(6),
                        t.Q6J("matDatepicker", n)("formControl", e.date),
                        t.xp6(1),
                        t.Q6J("for", n),
                        t.xp6(6),
                        t.Q6J("dataSource", e.dataSource),
                        t.xp6(10),
                        t.Q6J("matHeaderRowDef", e.displayedColumns),
                        t.xp6(1),
                        t.Q6J("matRowDefColumns", e.displayedColumns),
                        t.xp6(8),
                        t.Q6J("dataSource", e.data),
                        t.xp6(10),
                        t.Q6J("matHeaderRowDef", e.displayedColumns),
                        t.xp6(1),
                        t.Q6J("matRowDefColumns", e.displayedColumns),
                        t.xp6(1),
                        t.Q6J("ngIf", !e.Loading);
                    }
                  },
                  dependencies: [
                    D.O5,
                    m.Fj,
                    m.JJ,
                    c.oU,
                    c.Sm,
                    c.W2,
                    c.Gu,
                    c.wd,
                    c.sr,
                    c.cs,
                    f.Mq,
                    f.hl,
                    f.nW,
                    O.Nt,
                    p.KE,
                    p.hX,
                    p.R9,
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
                    A.uX,
                    A.SP,
                    m.oH,
                  ],
                  styles: [
                    ".w-100[_ngcontent-%COMP%]{width:100%}  .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{background:white!important}table[_ngcontent-%COMP%]{width:100%}.example-month-picker[_ngcontent-%COMP%]   .mat-calendar-period-button[_ngcontent-%COMP%]{pointer-events:none}.example-month-picker[_ngcontent-%COMP%]   .mat-calendar-arrow[_ngcontent-%COMP%]{display:none}  .vanvas1{width:100%!important;height:100%!important}",
                  ],
                })),
                o
              );
            })(),
          },
        ];
      let q = (() => {
        class o {}
        return (
          (o.ɵfac = function (a) {
            return new (a || o)();
          }),
          (o.ɵmod = t.oAB({ type: o })),
          (o.ɵinj = t.cJS({ imports: [T.Bz.forChild(X), T.Bz] })),
          o
        );
      })();
      var K = h(5064);
      let tt = (() => {
        class o {}
        return (
          (o.ɵfac = function (a) {
            return new (a || o)();
          }),
          (o.ɵmod = t.oAB({ type: o })),
          (o.ɵinj = t.cJS({ imports: [D.ez, m.u5, c.Pc, K.q, m.UX, d.XK, q] })),
          o
        );
      })();
    },
  },
]);
