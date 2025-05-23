"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [3999],
  {
    3999: (C, r, i) => {
      i.r(r), i.d(r, { ReceiptDetailPageModule: () => P });
      var c = i(6895),
        d = i(4006),
        a = i(8779),
        s = i(9299),
        t = i(4650),
        g = i(2468),
        u = i(4377);
      function p(n, l) {
        if (
          (1 & n &&
            (t.TgZ(0, "ion-item")(1, "ion-col", 10)(2, "ion-row", 2)(
              3,
              "ion-col",
              2,
            ),
            t._uU(4),
            t.qZA(),
            t.TgZ(5, "ion-col", 3),
            t._uU(6),
            t.qZA()(),
            t.TgZ(7, "ion-row", 2)(8, "ion-col", 2),
            t._uU(9, "S\u1ed1 l\u01b0\u1ee3ng"),
            t.qZA(),
            t.TgZ(10, "ion-col", 11),
            t._uU(11),
            t.qZA()()()()),
          2 & n)
        ) {
          const e = l.$implicit;
          t.xp6(4),
            t.Oqu(e.itemname),
            t.xp6(2),
            t.Oqu(e.itemcode),
            t.xp6(5),
            t.Oqu(null == e ? null : e.quantity);
        }
      }
      function h(n, l) {
        if (
          (1 & n &&
            (t.TgZ(0, "ion-label", 8),
            t.YNc(1, p, 12, 3, "ion-item", 9),
            t.qZA()),
          2 & n)
        ) {
          const e = t.oxw();
          t.xp6(1),
            t.Q6J(
              "ngForOf",
              null == e.const_data || null == e.const_data.data
                ? null
                : e.const_data.data.receiptDetails,
            );
        }
      }
      const m = [
        {
          path: "",
          component: (() => {
            class n {
              constructor(e, o, x, M, O, _) {
                (this.route = e),
                  (this._data = o),
                  (this.formBuilder = x),
                  (this.modalCtrl = M),
                  (this.navCtrl = O),
                  (this.authService = _),
                  (this.const_data = {}),
                  (this.currentUser = {}),
                  (this.API = "/receipt"),
                  (this.Loading = !0);
              }
              ngOnInit() {
                (this.currentUser = this.authService.getParseTokenUser()),
                  this.loadData();
              }
              loadData() {
                (this.Loading = !1), this.createForm();
                const e = +this.route.snapshot.params.id;
                (this.Loading = !1),
                  this._data
                    .get(
                      UrlConstants.BASE_SERVER +
                        this.currentUser.ip +
                        this.API +
                        `/${e}`,
                    )
                    .subscribe(
                      (o) => {
                        (this.const_data = o || []), (this.Loading = !0);
                      },
                      (o) => {
                        (this.Loading = !0), console.log(o);
                      },
                    );
              }
              createForm() {}
            }
            return (
              (n.ɵfac = function (e) {
                return new (e || n)(
                  t.Y36(s.gz),
                  t.Y36(g.D),
                  t.Y36(d.qu),
                  t.Y36(a.IN),
                  t.Y36(a.SH),
                  t.Y36(u.e),
                );
              }),
              (n.ɵcmp = t.Xpm({
                type: n,
                selectors: [["app-receipt-detail"]],
                decls: 16,
                vars: 3,
                consts: [
                  ["slot", "start"],
                  [
                    2,
                    "width",
                    "90%",
                    "padding-top",
                    "17px",
                    "margin",
                    "auto",
                    "font-size",
                    "1.5em",
                    "font-weight",
                    "bold",
                  ],
                  [2, "width", "100%"],
                  [2, "width", "100%", "text-align", "end"],
                  [
                    2,
                    "width",
                    "100%",
                    "padding-top",
                    "17px",
                    "padding-left",
                    "17px",
                    "margin",
                    "auto",
                    "font-size",
                    "1.5em",
                    "font-weight",
                    "bold",
                  ],
                  [2, "width", "100%", "text-align", "start"],
                  [2, "overflow-y", "scroll", "background", "transparent"],
                  ["style", "background: transparent;", 4, "ngIf"],
                  [2, "background", "transparent"],
                  [4, "ngFor", "ngForOf"],
                  [2, "width", "100%", "background", "rgba(255, 0, 0, 0)"],
                  [
                    2,
                    "width",
                    "100%",
                    "text-align",
                    "end",
                    "color",
                    "cornflowerblue",
                  ],
                ],
                template: function (e, o) {
                  1 & e &&
                    (t.TgZ(0, "ion-header")(1, "ion-toolbar")(
                      2,
                      "ion-buttons",
                      0,
                    ),
                    t._UZ(3, "ion-back-button"),
                    t.qZA(),
                    t.TgZ(4, "ion-title"),
                    t._uU(5, "Chi ti\u1ebft"),
                    t.qZA()()(),
                    t.TgZ(6, "ion-content")(7, "ion-row", 1),
                    t._UZ(8, "ion-col", 2),
                    t.TgZ(9, "ion-col", 3),
                    t._uU(10),
                    t.qZA()(),
                    t.TgZ(11, "ion-row", 4)(12, "ion-col", 5),
                    t._uU(13),
                    t.qZA()(),
                    t.TgZ(14, "ion-list", 6),
                    t.YNc(15, h, 2, 1, "ion-label", 7),
                    t.qZA()()),
                    2 & e &&
                      (t.xp6(10),
                      t.hij(
                        "Kho: ",
                        null == o.const_data || null == o.const_data.data
                          ? null
                          : o.const_data.data.whscode,
                        "",
                      ),
                      t.xp6(3),
                      t.hij(
                        "T\xean: ",
                        null == o.const_data || null == o.const_data.data
                          ? null
                          : o.const_data.data.cardname,
                        "",
                      ),
                      t.xp6(2),
                      t.Q6J(
                        "ngIf",
                        (null == o.const_data ||
                        null == o.const_data.data ||
                        null == o.const_data.data.receiptDetails
                          ? null
                          : o.const_data.data.receiptDetails.length) > 0,
                      ));
                },
                dependencies: [
                  c.sg,
                  c.O5,
                  a.oU,
                  a.Sm,
                  a.wI,
                  a.W2,
                  a.Gu,
                  a.Ie,
                  a.Q$,
                  a.q_,
                  a.Nd,
                  a.wd,
                  a.sr,
                  a.cs,
                ],
                styles: [
                  ".text-center[_ngcontent-%COMP%]{text-align:center}.text-color[_ngcontent-%COMP%]{color:#8a2be2}.w-100[_ngcontent-%COMP%]{width:100%}#vendor-option[_ngcontent-%COMP%]     .mat-form-field-flex{background:white!important;padding:0!important}.display-flex-content[_ngcontent-%COMP%]{display:flex;flex-direction:row}.display-flex-content[_ngcontent-%COMP%]   .input-search[_ngcontent-%COMP%]{padding-bottom:15px;margin-right:7px}.display-flex-content[_ngcontent-%COMP%]   .icon-search[_ngcontent-%COMP%]{margin:8px 15px 0 0}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.flex-1[_ngcontent-%COMP%]{flex:1}.flex-2[_ngcontent-%COMP%]{flex:2}.color-text[_ngcontent-%COMP%]{color:#666;font-size:14px}.padding-15[_ngcontent-%COMP%]{padding:0 15px}.example-viewport[_ngcontent-%COMP%]{height:70%;width:100%}.example-item[_ngcontent-%COMP%]{height:50px}.avata[_ngcontent-%COMP%]{width:50px;height:50px;object-fit:contain}ion-item[_ngcontent-%COMP%]{margin-top:10px}ion-item[_ngcontent-%COMP%]:last-child{margin-bottom:50px}",
                ],
              })),
              n
            );
          })(),
        },
      ];
      let f = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = t.oAB({ type: n })),
            (n.ɵinj = t.cJS({ imports: [s.Bz.forChild(m), s.Bz] })),
            n
          );
        })(),
        P = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = t.oAB({ type: n })),
            (n.ɵinj = t.cJS({ imports: [c.ez, d.u5, a.Pc, f] })),
            n
          );
        })();
    },
  },
]);
