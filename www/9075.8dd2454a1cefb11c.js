"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [9075],
  {
    9075: (b, m, o) => {
      o.r(m), o.d(m, { BinPageModule: () => Z });
      var u = o(6895),
        c = o(4006),
        i = o(8779),
        d = o(9299),
        h = o(3329),
        n = o(4650),
        f = o(2468),
        P = o(4377),
        p = o(3189);
      function x(t, l) {
        if (1 & t) {
          const e = n.EpF();
          n.TgZ(0, "ion-item", 11),
            n.NdJ("click", function () {
              const s = n.CHM(e).$implicit,
                g = n.oxw();
              return n.KtG(g.openItem(s.ID));
            }),
            n.TgZ(1, "ion-avatar", 12),
            n._UZ(2, "img", 13),
            n.qZA(),
            n.TgZ(3, "ion-label", 14)(4, "p", 15),
            n._UZ(5, "b", 16),
            n._uU(6),
            n.qZA()()();
        }
        if (2 & t) {
          const e = l.$implicit;
          n.xp6(6), n.hij("", e.remark, " ");
        }
      }
      function C(t, l) {
        1 & t &&
          (n.TgZ(0, "div", 17)(1, "div", 18), n._UZ(2, "div", 19), n.qZA()());
      }
      const M = [
        {
          path: "",
          component: (() => {
            class t {
              constructor(e, a, r, s) {
                (this._data = e),
                  (this.navCtrl = a),
                  (this.router = r),
                  (this.authService = s),
                  (this.Loading = !0),
                  (this.API = "/table"),
                  (this.currentUser = {}),
                  (this.currentUser = this.authService.getParseTokenUser()),
                  this.router.events.subscribe((g) => {
                    g instanceof d.m2 &&
                      "/centers/tabs/tab1/bin/4" == g.url &&
                      this.loadData();
                  });
              }
              ngOnInit() {
                this.loadData();
              }
              loadData() {
                (this.Loading = !1),
                  this._data
                    .get(
                      UrlConstants.BASE_SERVER + this.currentUser.ip + this.API,
                    )
                    .subscribe(
                      (e) => {
                        (this.Warehouse = e || []), (this.Loading = !0);
                      },
                      (e) => {
                        (this.Loading = !0), console.log(e);
                      },
                    );
              }
              openItem(e) {
                this.navCtrl.navigateForward([h.LE.menuHome_bin_details, e]);
              }
              openAddItem() {
                this.navCtrl.navigateForward([h.LE.menuHome_bin_add]);
              }
            }
            return (
              (t.ɵfac = function (e) {
                return new (e || t)(
                  n.Y36(f.D),
                  n.Y36(i.SH),
                  n.Y36(d.F0),
                  n.Y36(P.e),
                );
              }),
              (t.ɵcmp = n.Xpm({
                type: t,
                selectors: [["app-bin"]],
                viewQuery: function (e, a) {
                  if ((1 & e && n.Gf(i.ki, 5), 2 & e)) {
                    let r;
                    n.iGM((r = n.CRH())) && (a.modal = r.first);
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
                template: function (e, a) {
                  1 & e &&
                    (n.TgZ(0, "ion-header")(1, "ion-toolbar")(
                      2,
                      "ion-buttons",
                      0,
                    ),
                    n._UZ(3, "ion-back-button"),
                    n.qZA(),
                    n.TgZ(4, "ion-title"),
                    n._uU(5, "Location"),
                    n.qZA(),
                    n.TgZ(6, "ion-buttons", 1)(7, "ion-button", 2),
                    n.NdJ("click", function () {
                      return a.openAddItem();
                    }),
                    n._UZ(8, "ion-icon", 3),
                    n.qZA()(),
                    n.TgZ(9, "ion-button", 4),
                    n.NdJ("click", function () {
                      return a.loadData();
                    }),
                    n._UZ(10, "ion-icon", 5),
                    n.qZA()()(),
                    n.TgZ(11, "ion-content", 6)(12, "ion-searchbar", 7),
                    n.NdJ("ngModelChange", function (s) {
                      return (a.filterTerm = s);
                    }),
                    n.qZA(),
                    n.TgZ(13, "ion-list", 8),
                    n.YNc(14, x, 7, 1, "ion-item", 9),
                    n.ALo(15, "filter"),
                    n.qZA()(),
                    n.YNc(16, C, 3, 0, "div", 10)),
                    2 & e &&
                      (n.xp6(11),
                      n.Q6J("fullscreen", !0),
                      n.xp6(1),
                      n.Q6J("ngModel", a.filterTerm),
                      n.xp6(2),
                      n.Q6J(
                        "ngForOf",
                        n.xi3(
                          15,
                          4,
                          null == a.Warehouse ? null : a.Warehouse.data,
                          a.filterTerm,
                        ),
                      ),
                      n.xp6(2),
                      n.Q6J("ngIf", !a.Loading));
                },
                dependencies: [
                  u.sg,
                  u.O5,
                  c.JJ,
                  c.On,
                  i.BJ,
                  i.oU,
                  i.YG,
                  i.Sm,
                  i.W2,
                  i.Gu,
                  i.gu,
                  i.Ie,
                  i.Q$,
                  i.q_,
                  i.VI,
                  i.wd,
                  i.sr,
                  i.j9,
                  i.cs,
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
        {
          path: "bin-add",
          loadChildren: () =>
            Promise.all([o.e(8592), o.e(3041)])
              .then(o.bind(o, 3041))
              .then((t) => t.BinAddPageModule),
        },
        {
          path: "bin-details",
          loadChildren: () =>
            Promise.all([o.e(8592), o.e(9310)])
              .then(o.bind(o, 9310))
              .then((t) => t.BinDetailsPageModule),
        },
      ];
      let v = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵmod = n.oAB({ type: t })),
          (t.ɵinj = n.cJS({ imports: [d.Bz.forChild(M), d.Bz] })),
          t
        );
      })();
      var B = o(5064);
      let Z = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵmod = n.oAB({ type: t })),
          (t.ɵinj = n.cJS({ imports: [u.ez, c.u5, i.Pc, B.q, c.UX, v, p.h] })),
          t
        );
      })();
    },
  },
]);
