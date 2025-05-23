"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [5154],
  {
    5154: (S, _, r) => {
      r.r(_), r.d(_, { OrderTableDetailPageModule: () => R });
      var m = r(6895),
        g = r(4006),
        s = r(8779),
        u = r(9299),
        h = r(5439),
        f = r(3329),
        t = r(4650),
        Z = r(2468),
        D = r(5904),
        P = r(4377),
        A = r(4859),
        c = r(3546),
        p = r(7331),
        T = r(9602),
        C = r(7392),
        M = r(4144),
        b = r(9549),
        U = r(3162),
        v = r(3848);
      function x(e, o) {
        1 & e &&
          (t.TgZ(0, "mat-chip"),
          t._UZ(1, "img", 28),
          t._uU(2, " Ch\u01b0a thanh to\xe1n "),
          t.qZA());
      }
      function y(e, o) {
        1 & e &&
          (t.TgZ(0, "mat-chip", 29),
          t._UZ(1, "img", 30),
          t._uU(2, " \u0110\xe3 thanh to\xe1n "),
          t.qZA());
      }
      function E(e, o) {
        if (1 & e) {
          const a = t.EpF();
          t.TgZ(0, "mat-card", 18)(1, "mat-card-header")(
            2,
            "mat-card-subtitle",
            19,
          )(3, "p", 20),
            t._uU(4, "Ng\xe0y"),
            t.qZA(),
            t.TgZ(5, "p", 21),
            t._uU(6),
            t.ALo(7, "date"),
            t.qZA()(),
            t.TgZ(8, "mat-card-title", 19)(9, "p", 20),
            t._uU(10, "T\u1ed5ng ti\u1ec1n"),
            t.qZA(),
            t.TgZ(11, "p", 21),
            t._uU(12),
            t.ALo(13, "currency"),
            t.qZA()()(),
            t.TgZ(14, "mat-card-actions", 22)(15, "button", 23),
            t.NdJ("click", function () {
              const d = t.CHM(a).$implicit,
                l = t.oxw();
              return t.KtG(l.openItem(d.ID));
            }),
            t.TgZ(16, "mat-icon"),
            t._uU(17, "input"),
            t.qZA(),
            t._uU(18, " Chi ti\u1ebft "),
            t.qZA(),
            t.TgZ(19, "mat-chip-listbox", 24),
            t.YNc(20, x, 3, 0, "mat-chip", 25),
            t.YNc(21, y, 3, 0, "mat-chip", 26),
            t.qZA()(),
            t.TgZ(22, "mat-card-footer"),
            t._UZ(23, "mat-progress-bar", 27),
            t.qZA()();
        }
        if (2 & e) {
          const a = o.$implicit;
          t.xp6(6),
            t.Oqu(t.xi3(7, 4, null == a ? null : a.docDate, "dd/MM/yyyy")),
            t.xp6(6),
            t.Oqu(
              t.gM2(
                13,
                7,
                null == a ? null : a.doctotal,
                "VND ",
                "symbol",
                "1.0",
              ),
            ),
            t.xp6(8),
            t.Q6J("ngIf", "save" == a.viewpayment),
            t.xp6(1),
            t.Q6J("ngIf", "off" == a.viewpayment);
        }
      }
      function N(e, o) {
        1 & e &&
          (t.TgZ(0, "mat-chip"),
          t._UZ(1, "img", 28),
          t._uU(2, " Ch\u01b0a thanh to\xe1n "),
          t.qZA());
      }
      function I(e, o) {
        1 & e &&
          (t.TgZ(0, "mat-chip", 29),
          t._UZ(1, "img", 30),
          t._uU(2, " \u0110\xe3 thanh to\xe1n "),
          t.qZA());
      }
      function Y(e, o) {
        if (1 & e) {
          const a = t.EpF();
          t.TgZ(0, "mat-card", 18)(1, "mat-card-header")(
            2,
            "mat-card-subtitle",
            19,
          )(3, "p", 20),
            t._uU(4, "Ng\xe0y"),
            t.qZA(),
            t.TgZ(5, "p", 21),
            t._uU(6),
            t.ALo(7, "date"),
            t.qZA()(),
            t.TgZ(8, "mat-card-title", 19)(9, "p", 20),
            t._uU(10, "T\u1ed5ng ti\u1ec1n"),
            t.qZA(),
            t.TgZ(11, "p", 21),
            t._uU(12),
            t.ALo(13, "currency"),
            t.qZA()()(),
            t.TgZ(14, "mat-card-actions", 22)(15, "button", 23),
            t.NdJ("click", function () {
              const d = t.CHM(a).$implicit,
                l = t.oxw();
              return t.KtG(l.openItem(d.ID));
            }),
            t.TgZ(16, "mat-icon"),
            t._uU(17, "input"),
            t.qZA(),
            t._uU(18, " Chi ti\u1ebft "),
            t.qZA(),
            t.TgZ(19, "mat-chip-listbox", 24),
            t.YNc(20, N, 3, 0, "mat-chip", 25),
            t.YNc(21, I, 3, 0, "mat-chip", 26),
            t.qZA()(),
            t.TgZ(22, "mat-card-footer"),
            t._UZ(23, "mat-progress-bar", 27),
            t.qZA()();
        }
        if (2 & e) {
          const a = o.$implicit;
          t.xp6(6),
            t.Oqu(t.xi3(7, 4, null == a ? null : a.docDate, "dd/MM/yyyy")),
            t.xp6(6),
            t.Oqu(
              t.gM2(
                13,
                7,
                null == a ? null : a.doctotal,
                "VND ",
                "symbol",
                "1.0",
              ),
            ),
            t.xp6(8),
            t.Q6J("ngIf", "save" == a.viewpayment),
            t.xp6(1),
            t.Q6J("ngIf", "off" == a.viewpayment);
        }
      }
      const B = [
        {
          path: "",
          component: (() => {
            class e {
              constructor(a, n, i, d, l, J, F, H) {
                (this._data = a),
                  (this.formBuilder = n),
                  (this.modalCtrl = i),
                  (this.pdfGenerator = d),
                  (this.navCtrl = l),
                  (this.authService = J),
                  (this.route = F),
                  (this.router = H),
                  (this.currentUser = {}),
                  (this.const_table = {}),
                  (this.const_listorder = {}),
                  (this.const_listorder_notthanhtoan = {}),
                  (this.Loading = !0),
                  (this.date = h()),
                  (this.years = ""),
                  (this.dateCurrent = new Date()),
                  (this.API_Table = "/table"),
                  (this.API_ORDER_TALBENUMBER = "/order/tablenumber"),
                  (this.API_ORDER_TALBENUMBER_NOTTHANHTOAN =
                    "/order/allthanhtoan"),
                  (this.currentUser = this.authService.getParseTokenUser()),
                  this.router.events.subscribe((O) => {
                    (this.date = h()),
                      O instanceof u.m2 &&
                        "/centers/tabs/tab3/order-table-detail" ==
                          O.url.substring(0, 37) &&
                        this.loaddata();
                  }),
                  this.loaddata();
              }
              ngOnInit() {
                (this.currentUser = this.authService.getParseTokenUser()),
                  (this.years = this.date.format("YYYYMMDD"));
              }
              changeDate(a) {
                (this.date = h(a.value)),
                  (this.years = this.date.format("YYYYMMDD")),
                  this.loaddata();
              }
              loaddata() {
                this.Loading = !1;
                const a = +this.route.snapshot.params.id;
                null != a || null != a
                  ? this._data
                      .get(
                        UrlConstants.BASE_SERVER +
                          this.currentUser.ip +
                          this.API_Table +
                          `/${a}`,
                      )
                      .subscribe(
                        (n) => {
                          this.setDataToObject(n || []);
                        },
                        (n) => {
                          this.Loading = !0;
                        },
                      )
                  : (this.Loading = !0);
              }
              setDataToObject(a) {
                var n, i;
                (this.const_table = a?.data),
                  this.loadlistdata_detailtable(
                    null === (n = this.const_table) || void 0 === n
                      ? void 0
                      : n.tablenumber,
                  ),
                  this.loadlistdata_detailtable_chuathanhtoan(
                    null === (i = this.const_table) || void 0 === i
                      ? void 0
                      : i.tablenumber,
                  );
              }
              loadlistdata_detailtable(a) {
                (this.Loading = !1),
                  this._data
                    .post(
                      UrlConstants.BASE_SERVER +
                        this.currentUser.ip +
                        this.API_ORDER_TALBENUMBER,
                      { tablenumber: a, date: this.years },
                    )
                    .subscribe(
                      (n) => {
                        this.setDataToObjcetList(n || []);
                      },
                      (n) => {
                        this.Loading = !0;
                      },
                    );
              }
              loadlistdata_detailtable_chuathanhtoan(a) {
                (this.Loading = !1),
                  this._data
                    .post(
                      UrlConstants.BASE_SERVER +
                        this.currentUser.ip +
                        this.API_ORDER_TALBENUMBER_NOTTHANHTOAN,
                      { tablenumber: a, date: this.years },
                    )
                    .subscribe(
                      (n) => {
                        this.setDataToObjcetList_chuathanhtoan(n || []);
                      },
                      (n) => {
                        this.Loading = !0;
                      },
                    );
              }
              setDataToObjcetList(a) {
,
                  (this.const_listorder = a.data.sort((n, i) => {
                    const d = new Date(n.docDate).getTime();
                    return new Date(i.docDate).getTime() - d;
                  }));
              }
              setDataToObjcetList_chuathanhtoan(a) {
                this.const_listorder_notthanhtoan = a.data.sort((n, i) => {
                  const d = new Date(n.docDate).getTime();
                  return new Date(i.docDate).getTime() - d;
                });
              }
              openAddItem() {
                this.navCtrl.navigateForward([
                  f.vm.orderAdd,
                  +this.route.snapshot.params.id,
                ]);
              }
              openItem(a) {
                this.navCtrl.navigateForward([f.LE.order, a]);
              }
            }
            return (
              (e.ɵfac = function (a) {
                return new (a || e)(
                  t.Y36(Z.D),
                  t.Y36(g.qu),
                  t.Y36(s.IN),
                  t.Y36(D.r),
                  t.Y36(s.SH),
                  t.Y36(P.e),
                  t.Y36(u.gz),
                  t.Y36(u.F0),
                );
              }),
              (e.ɵcmp = t.Xpm({
                type: e,
                selectors: [["app-order-table-detail"]],
                decls: 30,
                vars: 5,
                consts: [
                  ["slot", "start"],
                  ["slot", "primary"],
                  ["color", "danger", 3, "click"],
                  ["slot", "icon-only", "name", "add-outline"],
                  [
                    "slot",
                    "end",
                    2,
                    "--background",
                    "transparent",
                    "--box-shadow",
                    "none",
                    3,
                    "click",
                  ],
                  ["color", "primary", "name", "refresh"],
                  [1, "ion-padding"],
                  ["label", "Ng\xe0y"],
                  [1, "order-main"],
                  [1, "order-main-v1"],
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
                  [1, "order-main-v2"],
                  ["class", "example-card", 4, "ngFor", "ngForOf"],
                  ["label", "Ch\u01b0a thanh to\xe1n"],
                  [1, "example-card"],
                  [1, "order-main-v2-1"],
                  [1, "order-main-v2-1-1"],
                  [1, "order-main-v2-1-2"],
                  [1, "order-main-v2-2"],
                  [
                    "mat-fab",
                    "",
                    "extended",
                    "",
                    "color",
                    "primary",
                    3,
                    "click",
                  ],
                  ["aria-label", "Dog selection"],
                  [4, "ngIf"],
                  ["color", "primary", 4, "ngIf"],
                  ["mode", "determinate", "value", "100"],
                  [
                    "matChipAvatar",
                    "",
                    "src",
                    "../../../../../../assets/images/red_status.png",
                  ],
                  ["color", "primary"],
                  [
                    "matChipAvatar",
                    "",
                    "src",
                    "../../../../../../assets/images/green_status.png",
                  ],
                ],
                template: function (a, n) {
                  if (
                    (1 & a &&
                      (t.TgZ(0, "ion-header")(1, "ion-toolbar")(
                        2,
                        "ion-buttons",
                        0,
                      ),
                      t._UZ(3, "ion-back-button"),
                      t.qZA(),
                      t.TgZ(4, "ion-title"),
                      t._uU(5),
                      t.qZA(),
                      t.TgZ(6, "ion-buttons", 1)(7, "ion-button", 2),
                      t.NdJ("click", function () {
                        return n.openAddItem();
                      }),
                      t._UZ(8, "ion-icon", 3),
                      t.qZA()(),
                      t.TgZ(9, "ion-button", 4),
                      t.NdJ("click", function () {
                        return n.loaddata();
                      }),
                      t._UZ(10, "ion-icon", 5),
                      t.qZA()()(),
                      t.TgZ(11, "ion-content", 6)(12, "mat-tab-group")(
                        13,
                        "mat-tab",
                        7,
                      )(14, "div", 8)(15, "div", 9)(
                        16,
                        "mat-form-field",
                        10,
                      )(17, "mat-label"),
                      t._uU(18, "Ng\xe0y"),
                      t.qZA(),
                      t.TgZ(19, "input", 11),
                      t.NdJ("dateChange", function (d) {
                        return n.changeDate(d);
                      }),
                      t.qZA(),
                      t._UZ(20, "mat-datepicker-toggle", 12)(
                        21,
                        "mat-datepicker",
                        13,
                        14,
                      ),
                      t.qZA()(),
                      t.TgZ(23, "div", 15),
                      t.YNc(24, E, 24, 12, "mat-card", 16),
                      t.qZA()()(),
                      t.TgZ(25, "mat-tab", 17)(26, "div", 8),
                      t._UZ(27, "div", 9),
                      t.TgZ(28, "div", 15),
                      t.YNc(29, Y, 24, 12, "mat-card", 16),
                      t.qZA()()()()()),
                    2 & a)
                  ) {
                    const i = t.MAs(22);
                    t.xp6(5),
                      t.Oqu(
                        null == n.const_table ? null : n.const_table.remark,
                      ),
                      t.xp6(14),
                      t.Q6J("matDatepicker", i),
                      t.xp6(1),
                      t.Q6J("for", i),
                      t.xp6(4),
                      t.Q6J("ngForOf", n.const_listorder),
                      t.xp6(5),
                      t.Q6J("ngForOf", n.const_listorder_notthanhtoan);
                  }
                },
                dependencies: [
                  m.sg,
                  m.O5,
                  s.oU,
                  s.YG,
                  s.Sm,
                  s.W2,
                  s.Gu,
                  s.gu,
                  s.wd,
                  s.sr,
                  s.cs,
                  A.cs,
                  c.a8,
                  c.hq,
                  c.rt,
                  c.dk,
                  c.$j,
                  c.n5,
                  p.HS,
                  p.EC,
                  p.z2,
                  T.Mq,
                  T.hl,
                  T.nW,
                  C.Hw,
                  M.Nt,
                  b.KE,
                  b.hX,
                  b.R9,
                  U.pW,
                  v.uX,
                  v.SP,
                  m.H9,
                  m.uU,
                ],
                styles: [
                  ".order-main[_ngcontent-%COMP%]   .order-main-v1[_ngcontent-%COMP%]   .w-100[_ngcontent-%COMP%]{width:100%}.order-main[_ngcontent-%COMP%]   .order-main-v2[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]{margin-bottom:15px}.order-main[_ngcontent-%COMP%]   .order-main-v2[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   .order-main-v2-1[_ngcontent-%COMP%]{display:flex}.order-main[_ngcontent-%COMP%]   .order-main-v2[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   .order-main-v2-1[_ngcontent-%COMP%]   .order-main-v2-1-1[_ngcontent-%COMP%]{flex:1;margin:0!important}.order-main[_ngcontent-%COMP%]   .order-main-v2[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   .order-main-v2-1[_ngcontent-%COMP%]   .order-main-v2-1-2[_ngcontent-%COMP%]{flex:4;margin:0!important;text-align:right}.order-main[_ngcontent-%COMP%]   .order-main-v2[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   .order-main-v2-2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff!important;height:32px!important;margin-right:10px}  .mat-mdc-card-header-text{width:100%}",
                ],
              })),
              e
            );
          })(),
        },
      ];
      let L = (() => {
        class e {}
        return (
          (e.ɵfac = function (a) {
            return new (a || e)();
          }),
          (e.ɵmod = t.oAB({ type: e })),
          (e.ɵinj = t.cJS({ imports: [u.Bz.forChild(B), u.Bz] })),
          e
        );
      })();
      var q = r(5064);
      let R = (() => {
        class e {}
        return (
          (e.ɵfac = function (a) {
            return new (a || e)();
          }),
          (e.ɵmod = t.oAB({ type: e })),
          (e.ɵinj = t.cJS({ imports: [m.ez, g.u5, s.Pc, q.q, g.UX, L] })),
          e
        );
      })();
    },
  },
]);
