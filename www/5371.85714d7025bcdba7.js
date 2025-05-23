"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [5371],
  {
    5371: (O, h, i) => {
      i.r(h), i.d(h, { WarehousePageModule: () => Z });
      var d = i(6895),
        c = i(4006),
        o = i(8779),
        u = i(9299),
        m = i(3329),
        e = i(4650),
        f = i(2468),
        P = i(4377),
        p = i(3189);
      function x(t, r) {
        if (1 & t) {
          const n = e.EpF();
          e.TgZ(0, "ion-item", 11),
            e.NdJ("click", function () {
              const l = e.CHM(n).$implicit,
                g = e.oxw();
              return e.KtG(g.openItem(l.ID));
            }),
            e.TgZ(1, "ion-avatar", 12),
            e._UZ(2, "img", 13),
            e.qZA(),
            e.TgZ(3, "ion-label", 14)(4, "p", 15),
            e._UZ(5, "b", 16),
            e._uU(6),
            e.qZA()()();
        }
        if (2 & t) {
          const n = r.$implicit;
          e.xp6(6), e.hij("", n.whsname, " ");
        }
      }
      function C(t, r) {
        1 & t &&
          (e.TgZ(0, "div", 17)(1, "div", 18), e._UZ(2, "div", 19), e.qZA()());
      }
      const M = [
        {
          path: "",
          component: (() => {
            class t {
              constructor(n, a, s, l) {
                (this._data = n),
                  (this.navCtrl = a),
                  (this.router = s),
                  (this.authService = l),
                  (this.Loading = !0),
                  (this.currentUser = {}),
                  (this.API = "/warehouse"),
                  (this.currentUser = this.authService.getParseTokenUser()),
                  this.router.events.subscribe((g) => {
                    g instanceof u.m2 &&
                      "/centers/tabs/tab1/warehouse/3" == g.url &&
                      this.loadData();
                  });
              }
              ngOnInit() {
                (this.currentUser = this.authService.getParseTokenUser()),
                  this.loadData();
              }
              loadData() {
                (this.Loading = !1),
                  this._data
                    .get(
                      UrlConstants.BASE_SERVER + this.currentUser.ip + this.API,
                    )
                    .subscribe(
                      (n) => {
                        (this.Warehouse = n || []), (this.Loading = !0);
                      },
                      (n) => {
                        (this.Loading = !0), console.log(n);
                      },
                    );
              }
              openItem(n) {
                this.navCtrl.navigateForward([
                  m.LE.menuHome_warehouse_details,
                  n,
                ]);
              }
              openAddItem() {
                this.navCtrl.navigateForward([m.LE.menuHome_warehouse_add]);
              }
            }
            return (
              (t.ɵfac = function (n) {
                return new (n || t)(
                  e.Y36(f.D),
                  e.Y36(o.SH),
                  e.Y36(u.F0),
                  e.Y36(P.e),
                );
              }),
              (t.ɵcmp = e.Xpm({
                type: t,
                selectors: [["app-warehouse"]],
                viewQuery: function (n, a) {
                  if ((1 & n && e.Gf(o.ki, 5), 2 & n)) {
                    let s;
                    e.iGM((s = e.CRH())) && (a.modal = s.first);
                  }
                },
                decls: 17,
                vars: 7,
                consts: [
                  ["slot", "start"],
                  ["slot", "primary"],
                  ["color", "danger", "id", "open-modal-whs", 3, "click"],
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
                  [3, "fullscreen"],
                  [
                    "placeholder",
                    "T\xecm ki\u1ebfm...",
                    "animated",
                    "true",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  ["lines", "none"],
                  [
                    "button",
                    "",
                    "detail",
                    "true",
                    3,
                    "click",
                    4,
                    "ngFor",
                    "ngForOf",
                  ],
                  ["bgcolor", "#000000", 4, "ngIf"],
                  ["button", "", "detail", "true", 3, "click"],
                  ["slot", "start", 1, "avata"],
                  ["src", "../assets/images/warehouse.png"],
                  [1, "ion-text-wrap"],
                  [
                    2,
                    "display",
                    "inline",
                    "width",
                    "100%",
                    "float",
                    "left",
                    "color",
                    "darkblue",
                    "font-weight",
                    "500",
                  ],
                  [2, "color", "darkblue", "font-weight", "500"],
                  ["bgcolor", "#000000"],
                  ["id", "loader-wrapper"],
                  ["id", "loader"],
                ],
                template: function (n, a) {
                  1 & n &&
                    (e.TgZ(0, "ion-header")(1, "ion-toolbar")(
                      2,
                      "ion-buttons",
                      0,
                    ),
                    e._UZ(3, "ion-back-button"),
                    e.qZA(),
                    e.TgZ(4, "ion-title"),
                    e._uU(5, "Kho"),
                    e.qZA(),
                    e.TgZ(6, "ion-buttons", 1)(7, "ion-button", 2),
                    e.NdJ("click", function () {
                      return a.openAddItem();
                    }),
                    e._UZ(8, "ion-icon", 3),
                    e.qZA()(),
                    e.TgZ(9, "ion-button", 4),
                    e.NdJ("click", function () {
                      return a.loadData();
                    }),
                    e._UZ(10, "ion-icon", 5),
                    e.qZA()()(),
                    e.TgZ(11, "ion-content", 6)(12, "ion-searchbar", 7),
                    e.NdJ("ngModelChange", function (l) {
                      return (a.filterTerm = l);
                    }),
                    e.qZA(),
                    e.TgZ(13, "ion-list", 8),
                    e.YNc(14, x, 7, 1, "ion-item", 9),
                    e.ALo(15, "filter"),
                    e.qZA()(),
                    e.YNc(16, C, 3, 0, "div", 10)),
                    2 & n &&
                      (e.xp6(11),
                      e.Q6J("fullscreen", !0),
                      e.xp6(1),
                      e.Q6J("ngModel", a.filterTerm),
                      e.xp6(2),
                      e.Q6J(
                        "ngForOf",
                        e.xi3(
                          15,
                          4,
                          null == a.Warehouse ? null : a.Warehouse.data,
                          a.filterTerm,
                        ),
                      ),
                      e.xp6(2),
                      e.Q6J("ngIf", !a.Loading));
                },
                dependencies: [
                  d.sg,
                  d.O5,
                  c.JJ,
                  c.On,
                  o.BJ,
                  o.oU,
                  o.YG,
                  o.Sm,
                  o.W2,
                  o.Gu,
                  o.gu,
                  o.Ie,
                  o.Q$,
                  o.q_,
                  o.VI,
                  o.wd,
                  o.sr,
                  o.j9,
                  o.cs,
                  p.Z,
                ],
                styles: [
                  ".text-center[_ngcontent-%COMP%]{text-align:center}.text-color[_ngcontent-%COMP%]{color:#8a2be2}.w-100[_ngcontent-%COMP%]{width:100%}#vendor-option[_ngcontent-%COMP%]     .mat-form-field-flex{background:white!important;padding:0!important}.display-flex-content[_ngcontent-%COMP%]{display:flex;flex-direction:row}.display-flex-content[_ngcontent-%COMP%]   .input-search[_ngcontent-%COMP%]{padding-bottom:15px;margin-right:7px}.display-flex-content[_ngcontent-%COMP%]   .icon-search[_ngcontent-%COMP%]{margin:8px 15px 0 0}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.flex-1[_ngcontent-%COMP%]{flex:1}.flex-2[_ngcontent-%COMP%]{flex:2}.color-text[_ngcontent-%COMP%]{color:#666;font-size:14px}.padding-15[_ngcontent-%COMP%]{padding:0 15px}.example-viewport[_ngcontent-%COMP%]{height:70%;width:100%}.example-item[_ngcontent-%COMP%]{height:50px}.avata[_ngcontent-%COMP%]{width:50px;height:50px;object-fit:contain}ion-item[_ngcontent-%COMP%]{margin-top:10px}ion-item[_ngcontent-%COMP%]:last-child{margin-bottom:50px}",
                ],
              })),
              t
            );
          })(),
        },
      ];
      let v = (() => {
        class t {}
        return (
          (t.ɵfac = function (n) {
            return new (n || t)();
          }),
          (t.ɵmod = e.oAB({ type: t })),
          (t.ɵinj = e.cJS({ imports: [u.Bz.forChild(M), u.Bz] })),
          t
        );
      })();
      var _ = i(5064);
      let Z = (() => {
        class t {}
        return (
          (t.ɵfac = function (n) {
            return new (n || t)();
          }),
          (t.ɵmod = e.oAB({ type: t })),
          (t.ɵinj = e.cJS({ imports: [d.ez, c.u5, o.Pc, _.q, c.UX, v, p.h] })),
          t
        );
      })();
    },
  },
]);
