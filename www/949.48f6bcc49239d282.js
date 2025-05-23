"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [949],
  {
    949: (C, u, i) => {
      i.r(u), i.d(u, { HistoryPageModule: () => v });
      var g = i(6895),
        l = i(4006),
        e = i(8779),
        p = i(9299),
        m = i(3329),
        t = i(4650),
        h = i(2468),
        f = i(4377);
      function b(n, r) {
        if (1 & n) {
          const o = t.EpF();
          t.TgZ(0, "ion-item", 7),
            t.NdJ("click", function () {
              const c = t.CHM(o).$implicit,
                d = t.oxw();
              return t.KtG(d.openItem(c.ID));
            }),
            t.TgZ(1, "ion-avatar", 0),
            t._UZ(2, "ion-img", 8),
            t.qZA(),
            t.TgZ(3, "ion-label", 9)(4, "p", 10),
            t._uU(5),
            t.qZA(),
            t._UZ(6, "br"),
            t.qZA()();
        }
        if (2 & n) {
          const o = r.$implicit;
          t.xp6(5), t.Oqu(o.poscode);
        }
      }
      const P = [
        {
          path: "",
          component: (() => {
            class n {
              constructor(o, s, a, c, d) {
                (this.navCtrl = o),
                  (this.modalCtrl = s),
                  (this._data = a),
                  (this.formBuilder = c),
                  (this.authService = d),
                  (this.const_data = []),
                  (this.pos = {}),
                  (this.currentUser = {}),
                  (this.API = "/pos"),
                  (this.Loading = !0);
              }
              ngOnInit() {
                (this.currentUser = this.authService.getParseTokenUser()),
                  this.loaddata();
              }
              openItem(o) {
                this.navCtrl.navigateForward([m.LE.history, o]);
              }
              cancel() {
                return this.modal.dismiss(null, "cancel");
              }
              loaddata() {
                (this.Loading = !1),
                  this._data
                    .get(
                      UrlConstants.BASE_SERVER + this.currentUser.ip + this.API,
                    )
                    .subscribe(
                      (o) => {
                        (this.pos = o || []), (this.Loading = !0);
                      },
                      (o) => {
                        (this.Loading = !0), console.log(o);
                      },
                    );
              }
              btnRefresh() {
                (this.Loading = !1),
                  this._data
                    .get(
                      UrlConstants.BASE_SERVER + this.currentUser.ip + this.API,
                    )
                    .subscribe(
                      (o) => {
                        (this.pos = o || []), (this.Loading = !0);
                      },
                      (o) => {
                        (this.Loading = !0), console.log(o);
                      },
                    );
              }
              onWillDismiss(o) {
                "confirm" === o.detail.role
                  ? this.loaddata()
                  : this._data.showNotSuccess();
              }
              createForm() {
                this.formGroup = this.formBuilder.group({
                  poscode: [null],
                  docdate: [new Date()],
                  total: [0],
                  discount: [0],
                  doctotal: [0],
                  customerpay: [0],
                  refund: [0],
                });
              }
            }
            return (
              (n.ɵfac = function (o) {
                return new (o || n)(
                  t.Y36(e.SH),
                  t.Y36(e.IN),
                  t.Y36(h.D),
                  t.Y36(l.qu),
                  t.Y36(f.e),
                );
              }),
              (n.ɵcmp = t.Xpm({
                type: n,
                selectors: [["app-history"]],
                viewQuery: function (o, s) {
                  if ((1 & o && t.Gf(e.ki, 5), 2 & o)) {
                    let a;
                    t.iGM((a = t.CRH())) && (s.modal = a.first);
                  }
                },
                decls: 11,
                vars: 1,
                consts: [
                  ["slot", "start"],
                  ["defaultHref", "/centers/tabs/tab2"],
                  [2, "text-align", "center"],
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
                  [
                    "button",
                    "",
                    "detail",
                    "true",
                    "style",
                    "--border-color:transparent",
                    3,
                    "click",
                    4,
                    "ngFor",
                    "ngForOf",
                  ],
                  [
                    "button",
                    "",
                    "detail",
                    "true",
                    2,
                    "--border-color",
                    "transparent",
                    3,
                    "click",
                  ],
                  [
                    "src",
                    "../assets/images/invoice.jpg",
                    2,
                    "object-fit",
                    "contain",
                  ],
                  [1, "ion-text-wrap"],
                  [
                    2,
                    "display",
                    "inline",
                    "margin-top",
                    "20px",
                    "font-weight",
                    "bold",
                    "color",
                    "cornflowerblue",
                  ],
                ],
                template: function (o, s) {
                  1 & o &&
                    (t.TgZ(0, "ion-header")(1, "ion-toolbar")(
                      2,
                      "ion-buttons",
                      0,
                    ),
                    t._UZ(3, "ion-back-button", 1),
                    t.qZA(),
                    t.TgZ(4, "ion-title", 2),
                    t._uU(5, "H\xf3a \u0111\u01a1n"),
                    t.qZA(),
                    t.TgZ(6, "ion-button", 3),
                    t.NdJ("click", function () {
                      return s.loaddata();
                    }),
                    t._UZ(7, "ion-icon", 4),
                    t.qZA()()(),
                    t.TgZ(8, "ion-content", 5)(9, "ion-list"),
                    t.YNc(10, b, 7, 1, "ion-item", 6),
                    t.qZA()()),
                    2 & o &&
                      (t.xp6(10),
                      t.Q6J("ngForOf", null == s.pos ? null : s.pos.data));
                },
                dependencies: [
                  g.sg,
                  e.BJ,
                  e.oU,
                  e.YG,
                  e.Sm,
                  e.W2,
                  e.Gu,
                  e.gu,
                  e.Xz,
                  e.Ie,
                  e.Q$,
                  e.q_,
                  e.wd,
                  e.sr,
                  e.cs,
                ],
                styles: [
                  "ion-list[_ngcontent-%COMP%]{position:relative;z-index:20;font-size:.6cm;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;inset:30px 0 0;z-index:1}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--box-shadow: 0 0px 5px 5px rgba(218, 216, 216, .442)}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:last-child{margin-bottom:50px}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]::part(native){margin-top:5px;margin-left:2.5%;margin-bottom:5px;width:95%;background:rgba(255,255,255,.515);-webkit-backdrop-filter:blur(1.5px);backdrop-filter:blur(1.5px);border-radius:10px;box-shadow:0 0 5px 5px #e6e6e678}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]::part(native)   .item-inner[_ngcontent-%COMP%] {border:0;--border:0;--border-color: transparent }ion-list[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%]{--border-color: transparent }.add_btn[_ngcontent-%COMP%]{position:fixed;width:100%;left:0;height:54px;top:300px;margin:10px 0 0;box-shadow:0 5px 10px 5px #eeeeee9e;z-index:5}",
                ],
              })),
              n
            );
          })(),
        },
      ];
      let x = (() => {
        class n {}
        return (
          (n.ɵfac = function (o) {
            return new (o || n)();
          }),
          (n.ɵmod = t.oAB({ type: n })),
          (n.ɵinj = t.cJS({ imports: [p.Bz.forChild(P), p.Bz] })),
          n
        );
      })();
      var y = i(5064);
      let v = (() => {
        class n {}
        return (
          (n.ɵfac = function (o) {
            return new (o || n)();
          }),
          (n.ɵmod = t.oAB({ type: n })),
          (n.ɵinj = t.cJS({ imports: [g.ez, y.q, l.u5, e.Pc, x, l.UX] })),
          n
        );
      })();
    },
  },
]);
