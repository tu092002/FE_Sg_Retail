"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [856],
  {
    856: (O, u, i) => {
      i.r(u), i.d(u, { staffPageModule: () => b });
      var d = i(6895),
        c = i(4006),
        o = i(8779),
        f = i(9299),
        m = i(3329),
        t = i(4650),
        P = i(2468),
        x = i(4377),
        p = i(6270),
        h = i(3189);
      function v(e, r) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, "ion-item", 12),
            t.NdJ("click", function () {
              const l = t.CHM(n).$implicit,
                g = t.oxw();
              return t.KtG(g.openItem(l.ID));
            }),
            t.TgZ(1, "ion-avatar", 13),
            t._UZ(2, "img", 14),
            t.qZA(),
            t.TgZ(3, "ion-label", 15)(4, "ion-row", 16),
            t._uU(5),
            t.qZA()()();
        }
        if (2 & e) {
          const n = r.$implicit;
          t.xp6(5), t.hij(" ", n.staffname, " ");
        }
      }
      function C(e, r) {
        1 & e &&
          (t.TgZ(0, "div", 17)(1, "div", 18), t._UZ(2, "div", 19), t.qZA()());
      }
      const M = [
        {
          path: "",
          component: (() => {
            class e {
              constructor(n, a, s, l) {
                (this._data = n),
                  (this.navCtrl = a),
                  (this.router = s),
                  (this.authService = l),
                  (this.API = "/staff"),
                  (this.Loading = !0),
                  (this.currentUser = {}),
                  (this.currentUser = this.authService.getParseTokenUser()),
                  this.router.events.subscribe((g) => {
                    g instanceof f.m2 &&
                      "/centers/tabs/tab1/staff/8" == g.url &&
                      this.loadData();
                  });
              }
              ngOnInit() {
                this.currentUser = this.authService.getParseTokenUser();
              }
              loadData() {
,
                  (this.Loading = !1),
                  this._data
                    .get(
                      UrlConstants.BASE_SERVER + this.currentUser.ip + this.API,
                    )
                    .subscribe(
                      (n) => {
                        (this.staff = n || []), (this.Loading = !0);
                      },
                      (n) => {
                        (this.Loading = !0), console.log(n);
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
                      (n) => {
                        (this.staff = n || []), (this.Loading = !0);
                      },
                      (n) => {
                        (this.Loading = !0), console.log(n);
                      },
                    );
              }
              openItem(n) {
                this.navCtrl.navigateForward([
                  m.LE.menuHome_staffParnet_Detail,
                  n,
                ]);
              }
              openAddItem() {
                this.navCtrl.navigateForward([m.LE.menuHome_staffParnet_Add]);
              }
            }
            return (
              (e.ɵfac = function (n) {
                return new (n || e)(
                  t.Y36(P.D),
                  t.Y36(o.SH),
                  t.Y36(f.F0),
                  t.Y36(x.e),
                );
              }),
              (e.ɵcmp = t.Xpm({
                type: e,
                selectors: [["app-staff"]],
                decls: 18,
                vars: 7,
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
                  [3, "fullscreen"],
                  ["itemSize", "0", 1, "example-viewport"],
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
                  ["src", "../assets/images/bp-mater.jpg"],
                  [1, "ion-text-wrap"],
                  [2, "color", "cornflowerblue"],
                  ["bgcolor", "#000000"],
                  ["id", "loader-wrapper"],
                  ["id", "loader"],
                ],
                template: function (n, a) {
                  1 & n &&
                    (t.TgZ(0, "ion-header")(1, "ion-toolbar")(
                      2,
                      "ion-buttons",
                      0,
                    ),
                    t._UZ(3, "ion-back-button"),
                    t.qZA(),
                    t.TgZ(4, "ion-title"),
                    t._uU(5, "Nh\xe2n vi\xean"),
                    t.qZA(),
                    t.TgZ(6, "ion-buttons", 1)(7, "ion-button", 2),
                    t.NdJ("click", function () {
                      return a.openAddItem();
                    }),
                    t._UZ(8, "ion-icon", 3),
                    t.qZA()(),
                    t.TgZ(9, "ion-button", 4),
                    t.NdJ("click", function () {
                      return a.loadData();
                    }),
                    t._UZ(10, "ion-icon", 5),
                    t.qZA()()(),
                    t.TgZ(11, "ion-content", 6)(
                      12,
                      "cdk-virtual-scroll-viewport",
                      7,
                    )(13, "ion-searchbar", 8),
                    t.NdJ("ngModelChange", function (l) {
                      return (a.filterTerm = l);
                    }),
                    t.qZA(),
                    t.TgZ(14, "ion-list", 9),
                    t.YNc(15, v, 6, 1, "ion-item", 10),
                    t.ALo(16, "filter"),
                    t.qZA()()(),
                    t.YNc(17, C, 3, 0, "div", 11)),
                    2 & n &&
                      (t.xp6(11),
                      t.Q6J("fullscreen", !0),
                      t.xp6(2),
                      t.Q6J("ngModel", a.filterTerm),
                      t.xp6(2),
                      t.Q6J(
                        "ngForOf",
                        t.xi3(
                          16,
                          4,
                          null == a.staff ? null : a.staff.data,
                          a.filterTerm,
                        ),
                      ),
                      t.xp6(2),
                      t.Q6J("ngIf", !a.Loading));
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
                  o.Nd,
                  o.VI,
                  o.wd,
                  o.sr,
                  o.j9,
                  o.cs,
                  p.xd,
                  p.N7,
                  h.Z,
                ],
                styles: [
                  ".text-center[_ngcontent-%COMP%]{text-align:center}.text-color[_ngcontent-%COMP%]{color:#8a2be2}.w-100[_ngcontent-%COMP%]{width:100%}#vendor-option[_ngcontent-%COMP%]     .mat-form-field-flex{background:white!important;padding:0!important}.display-flex-content[_ngcontent-%COMP%]{display:flex;flex-direction:row}.display-flex-content[_ngcontent-%COMP%]   .input-search[_ngcontent-%COMP%]{padding-bottom:15px;margin-right:7px}.display-flex-content[_ngcontent-%COMP%]   .icon-search[_ngcontent-%COMP%]{margin:8px 15px 0 0}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.flex-1[_ngcontent-%COMP%]{flex:1}.flex-2[_ngcontent-%COMP%]{flex:2}.color-text[_ngcontent-%COMP%]{color:#666;font-size:14px}.padding-15[_ngcontent-%COMP%]{padding:0 15px}.example-viewport[_ngcontent-%COMP%]{height:100%;width:100%}.example-item[_ngcontent-%COMP%]{height:50px}.avata[_ngcontent-%COMP%]{width:50px;height:50px;object-fit:contain}ion-item[_ngcontent-%COMP%]{margin-top:10px}ion-item[_ngcontent-%COMP%]:last-child{margin-bottom:50px}",
                ],
              })),
              e
            );
          })(),
        },
      ];
      let Z = (() => {
        class e {}
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵmod = t.oAB({ type: e })),
          (e.ɵinj = t.cJS({ imports: [f.Bz.forChild(M), f.Bz] })),
          e
        );
      })();
      var _ = i(5064);
      let b = (() => {
        class e {}
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵmod = t.oAB({ type: e })),
          (e.ɵinj = t.cJS({ imports: [d.ez, c.u5, o.Pc, _.q, c.UX, Z, h.h] })),
          e
        );
      })();
    },
  },
]);
