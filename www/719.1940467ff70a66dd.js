"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [719],
  {
    719: (G, u, o) => {
      o.r(u), o.d(u, { Tab3PageModule: () => J });
      var a = o(8779),
        m = o(6895),
        l = o(4006),
        T = o(581),
        p = o(9299),
        t = o(4650),
        v = o(655),
        C = o(3329),
        h = o(2468),
        f = o(4377);
      let M = (() => {
        class e {
          constructor(n, r, d, s, c, g) {
            (this.navCtrl = n),
              (this.modalCtrl = r),
              (this._data = d),
              (this.alertController = s),
              (this.formBuilder = c),
              (this.authService = g),
              (this.const_data_table = {}),
              (this.currentUser = {}),
              (this.const_data = {}),
              (this.checkedItems = []),
              (this.quantity = 1),
              (this.API = "/table"),
              (this.Loading = !0);
          }
          ngOnInit() {
            (this.currentUser = this.authService.getParseTokenUser()),
              this.createFormTable();
          }
          cancel() {
            return this.modalCtrl.dismiss(null, "cancel");
          }
          loadData_Table() {
            (this.Loading = !1),
              this._data
                .get(UrlConstants.BASE_SERVER + this.currentUser.ip + this.API)
                .subscribe(
                  (n) => {
                    (this.Table = n || []), (this.Loading = !0);
                  },
                  (n) => {
                    (this.Loading = !0), console.log(n);
                  },
                );
          }
          confirmTable(n) {
            this.modalCtrl.dismiss(this.name, "confirm"),
              (this.const_data_table.tablenumber = n.tablenumber),
              (this.const_data_table.remark = n.remark),
              this._data
                .post(
                  UrlConstants.BASE_SERVER + this.currentUser.ip + this.API,
                  this.const_data_table,
                )
                .subscribe((r) => {
                  this._data.showSaveSuccess();
                });
          }
          presentAlert() {
            return (0, v.mG)(this, void 0, void 0, function* () {
              yield (yield this.alertController.create({
                header: "Notification",
                subHeader: "CardCode invalid !!",
                buttons: ["OK"],
              })).present();
            });
          }
          createFormTable() {
            this.formGroup = this.formBuilder.group({
              tablenumber: [null],
              remark: [null],
            });
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(
              t.Y36(a.SH),
              t.Y36(a.IN),
              t.Y36(h.D),
              t.Y36(a.Br),
              t.Y36(l.qu),
              t.Y36(f.e),
            );
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [["app-table"]],
            decls: 16,
            vars: 1,
            consts: [
              ["slot", "start"],
              ["color", "medium", 3, "click"],
              [2, "text-align", "center"],
              ["slot", "end"],
              [3, "click"],
              [1, "ion-padding"],
              ["id", "vendor-form", 1, "form", 3, "formGroup"],
              ["position", "stacked"],
              ["formControlName", "remark"],
            ],
            template: function (n, r) {
              1 & n &&
                (t.TgZ(0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0)(
                  3,
                  "ion-button",
                  1,
                ),
                t.NdJ("click", function () {
                  return r.cancel();
                }),
                t._uU(4, "H\u1ee7y"),
                t.qZA()(),
                t.TgZ(5, "ion-title", 2),
                t._uU(6, "Th\xeam m\u1edbi"),
                t.qZA(),
                t.TgZ(7, "ion-buttons", 3)(8, "ion-button", 4),
                t.NdJ("click", function () {
                  return r.confirmTable(r.formGroup.value);
                }),
                t._uU(9, "X\xe1c nh\u1eadn"),
                t.qZA()()()(),
                t.TgZ(10, "ion-content", 5)(11, "form", 6)(12, "ion-item")(
                  13,
                  "ion-label",
                  7,
                ),
                t._uU(14, "T\xean"),
                t.qZA(),
                t._UZ(15, "ion-input", 8),
                t.qZA()()()),
                2 & n && (t.xp6(11), t.Q6J("formGroup", r.formGroup));
            },
            dependencies: [
              l._Y,
              l.JJ,
              l.JL,
              a.YG,
              a.Sm,
              a.W2,
              a.Gu,
              a.pK,
              a.Ie,
              a.Q$,
              a.wd,
              a.sr,
              a.j9,
              l.sg,
              l.u,
            ],
          })),
          e
        );
      })();
      var O = o(5904),
        Z = o(3238),
        b = o(3546);
      function y(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, "div", 14),
            t.NdJ("click", function () {
              const s = t.CHM(n).$implicit,
                c = t.oxw();
              return t.KtG(c.openDetailItem(s.ID));
            }),
            t.TgZ(1, "mat-card-header", 15)(2, "mat-card-subtitle", 16),
            t._uU(3),
            t.qZA()()();
        }
        if (2 & e) {
          const n = i.$implicit;
          t.xp6(3), t.Oqu(null == n ? null : n.remark);
        }
      }
      function x(e, i) {
        1 & e &&
          (t.TgZ(0, "div", 17)(1, "div", 18), t._UZ(2, "div", 19), t.qZA()());
      }
      let A = (() => {
        class e {
          constructor(n, r, d, s, c, g, F) {
            (this._data = n),
              (this.formBuilder = r),
              (this.modalCtrl = d),
              (this.pdfGenerator = s),
              (this.dateAdapter = c),
              (this.navCtrl = g),
              (this.authService = F),
              (this.Loading = !0),
              (this.API_Table = "/table"),
              (this.const_table = []),
              (this.currentUser = {}),
              this.dateAdapter.setLocale("en-GB"),
              (this.currentUser = this.authService.getParseTokenUser()),
              this.loadDataTable();
          }
          ngOnInit() {}
          loadDataTable() {
            (this.Loading = !1),
              this._data
                .get(
                  UrlConstants.BASE_SERVER +
                    this.currentUser.ip +
                    this.API_Table,
                )
                .subscribe(
                  (n) => {
                    this.setDataTable_Obj(n || []), (this.Loading = !0);
                  },
                  (n) => {
                    (this.Loading = !0), console.log(n);
                  },
                );
          }
          setDataTable_Obj(n) {
            this.const_table = n?.data;
          }
          openDetailItem(n) {
            this.navCtrl.navigateForward([C.vm.orderTableDetail, n]);
          }
          openModalTable() {
            return (0, v.mG)(this, void 0, void 0, function* () {
              const n = yield this.modalCtrl.create({
                component: M,
                componentProps: {},
              });
              n.present();
              const { data: r, role: d } = yield n.onWillDismiss();
              "confirm" === d && ((this.const_table = r), this.loadDataTable()),
                setTimeout(() => {
                  this.loadDataTable();
                }, 1e3);
            });
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(
              t.Y36(h.D),
              t.Y36(l.qu),
              t.Y36(a.IN),
              t.Y36(O.r),
              t.Y36(Z._A),
              t.Y36(a.SH),
              t.Y36(f.e),
            );
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [["app-order-main"]],
            decls: 17,
            vars: 2,
            consts: [
              [2, "position", "relative"],
              ["slot", "start"],
              [2, "font-size", "1.29em"],
              ["slot", "primary"],
              ["color", "danger", "id", "open-modal-order", 3, "click"],
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
              [1, "order-main"],
              [1, "order-main-v1"],
              [1, "order-main-v2"],
              [
                "class",
                "order-main-v2-card",
                3,
                "click",
                4,
                "ngFor",
                "ngForOf",
              ],
              ["bgcolor", "#000000", 4, "ngIf"],
              [1, "order-main-v2-card", 3, "click"],
              [1, "order-main-v2-card-header"],
              [2, "font-size", "2em"],
              ["bgcolor", "#000000"],
              ["id", "loader-wrapper"],
              ["id", "loader"],
            ],
            template: function (n, r) {
              1 & n &&
                (t.TgZ(0, "ion-header", 0)(1, "ion-toolbar")(
                  2,
                  "ion-buttons",
                  1,
                ),
                t._UZ(3, "ion-back-button"),
                t.qZA(),
                t.TgZ(4, "ion-title", 2),
                t._uU(5, "\u0110\u01a1n h\xe0ng"),
                t.qZA(),
                t.TgZ(6, "ion-buttons", 3)(7, "ion-button", 4),
                t.NdJ("click", function () {
                  return r.openModalTable();
                }),
                t._UZ(8, "ion-icon", 5),
                t.qZA()(),
                t.TgZ(9, "ion-button", 6),
                t.NdJ("click", function () {
                  return r.loadDataTable();
                }),
                t._UZ(10, "ion-icon", 7),
                t.qZA()()(),
                t.TgZ(11, "ion-content", 8)(12, "div", 9),
                t._UZ(13, "div", 10),
                t.TgZ(14, "div", 11),
                t.YNc(15, y, 4, 1, "div", 12),
                t.qZA()()(),
                t.YNc(16, x, 3, 0, "div", 13)),
                2 & n &&
                  (t.xp6(15),
                  t.Q6J("ngForOf", r.const_table),
                  t.xp6(1),
                  t.Q6J("ngIf", !r.Loading));
            },
            dependencies: [
              m.sg,
              m.O5,
              a.oU,
              a.YG,
              a.Sm,
              a.W2,
              a.Gu,
              a.gu,
              a.wd,
              a.sr,
              a.cs,
              b.dk,
              b.$j,
            ],
            styles: [
              ".mat-mdc-form-field-subscript-wrapper{display:none!important}.order-main[_ngcontent-%COMP%]{height:90%}.order-main[_ngcontent-%COMP%]   .order-main-v2[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;width:100%;height:100%}@media only screen and (min-width: 1026px){.order-main[_ngcontent-%COMP%]   .order-main-v2[_ngcontent-%COMP%]{justify-content:center}}.order-main[_ngcontent-%COMP%]   .order-main-v2[_ngcontent-%COMP%]   .order-main-v2-card[_ngcontent-%COMP%]{display:flex;align-items:center;width:20%;height:20%;text-align:center;font-weight:700;color:#1e90ff;cursor:pointer}@media only screen and (max-width: 600px){.order-main[_ngcontent-%COMP%]   .order-main-v2[_ngcontent-%COMP%]   .order-main-v2-card[_ngcontent-%COMP%]{height:45%;width:45%;justify-content:space-between}}@media only screen and (min-width: 601px) and (max-width: 1024px){.order-main[_ngcontent-%COMP%]   .order-main-v2[_ngcontent-%COMP%]   .order-main-v2-card[_ngcontent-%COMP%]{height:25%;width:25%}}@media only screen and (min-width: 1025px){.order-main[_ngcontent-%COMP%]   .order-main-v2[_ngcontent-%COMP%]   .order-main-v2-card[_ngcontent-%COMP%]{height:17%;width:17%;margin-bottom:10em;margin-left:1em;margin-right:1em}}.order-main[_ngcontent-%COMP%]   .order-main-v2[_ngcontent-%COMP%]   .order-main-v2-card[_ngcontent-%COMP%]   .order-main-v2-card-header[_ngcontent-%COMP%]{display:flex;justify-content:center;width:15em;height:15em;border:5px solid #0000ff;border-radius:10%;border-bottom:none;border-left:none;margin:auto;box-shadow:0 4px 8px #0003,0 6px 20px #00000030;align-items:center}@media only screen and (max-width: 600px){.order-main[_ngcontent-%COMP%]   .order-main-v2[_ngcontent-%COMP%]   .order-main-v2-card[_ngcontent-%COMP%]   .order-main-v2-card-header[_ngcontent-%COMP%]{height:10em;width:10em}}@media only screen and (min-width: 601px) and (max-width: 1024px){.order-main[_ngcontent-%COMP%]   .order-main-v2[_ngcontent-%COMP%]   .order-main-v2-card[_ngcontent-%COMP%]   .order-main-v2-card-header[_ngcontent-%COMP%]{height:8em;width:8em}}.order-main[_ngcontent-%COMP%]   .order-main-v2[_ngcontent-%COMP%]   .order-main-v2-card[_ngcontent-%COMP%]   .order-main-v2-card-header[_ngcontent-%COMP%]   .mat-mdc-card-subtitle[_ngcontent-%COMP%]{color:#1e90ff!important}.example-viewport[_ngcontent-%COMP%]{height:100%;width:100%}",
            ],
          })),
          e
        );
      })();
      const U = [
        {
          path: "",
          component: (() => {
            class e {
              constructor() {}
              ngOnInit() {}
            }
            return (
              (e.ɵfac = function (n) {
                return new (n || e)();
              }),
              (e.ɵcmp = t.Xpm({
                type: e,
                selectors: [["app-tab3"]],
                decls: 2,
                vars: 1,
                consts: [[3, "fullscreen"]],
                template: function (n, r) {
                  1 & n &&
                    (t.TgZ(0, "ion-content", 0),
                    t._UZ(1, "app-order-main"),
                    t.qZA()),
                    2 & n && t.Q6J("fullscreen", !0);
                },
                dependencies: [a.W2, A],
              })),
              e
            );
          })(),
        },
        {
          path: "order-details/:id",
          loadChildren: () =>
            Promise.all([o.e(5439), o.e(7388), o.e(8592), o.e(8065)])
              .then(o.bind(o, 8065))
              .then((e) => e.OrderDetailsPageModule),
        },
        {
          path: "order-add/:id",
          loadChildren: () =>
            Promise.all([o.e(8592), o.e(161)])
              .then(o.bind(o, 161))
              .then((e) => e.OrderAddPageModule),
        },
        {
          path: "order-table-detail/:id",
          loadChildren: () =>
            Promise.all([o.e(5439), o.e(5154)])
              .then(o.bind(o, 5154))
              .then((e) => e.OrderTableDetailPageModule),
        },
      ];
      let D = (() => {
        class e {}
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵmod = t.oAB({ type: e })),
          (e.ɵinj = t.cJS({ imports: [p.Bz.forChild(U), p.Bz] })),
          e
        );
      })();
      var P = o(529),
        Y = o(5064),
        I = o(3189);
      let J = (() => {
        class e {}
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵmod = t.oAB({ type: e })),
          (e.ɵinj = t.cJS({
            providers: [h.D, P.JF],
            imports: [m.ez, l.u5, a.Pc, Y.q, P.JF, D, T.e, l.UX, I.h],
          })),
          e
        );
      })();
    },
  },
]);
