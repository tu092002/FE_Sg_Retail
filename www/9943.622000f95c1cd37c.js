"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [9943],
  {
    9943: (O, u, i) => {
      i.r(u), i.d(u, { IssueHistoryPageModule: () => Z });
      var d = i(6895),
        r = i(4006),
        o = i(8779),
        p = i(9299),
        f = i(3329),
        t = i(4650),
        x = i(2468),
        P = i(4377),
        m = i(6270),
        h = i(3189);
      function y(e, a) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, "ion-item", 13),
            t.NdJ("click", function () {
              const l = t.CHM(n).$implicit,
                g = t.oxw();
              return t.KtG(g.openItem(l.ID));
            }),
            t.TgZ(1, "ion-avatar", 0),
            t._UZ(2, "ion-img", 14),
            t.qZA(),
            t.TgZ(3, "ion-label", 15)(4, "p", 16),
            t._uU(5),
            t.qZA(),
            t._UZ(6, "br"),
            t.qZA()();
        }
        if (2 & e) {
          const n = a.$implicit;
          t.xp6(5), t.Oqu(n.autocode);
        }
      }
      function C(e, a) {
        1 & e &&
          (t.TgZ(0, "div", 17)(1, "div", 18), t._UZ(2, "div", 19), t.qZA()());
      }
      const M = [
        {
          path: "",
          component: (() => {
            class e {
              constructor(n, s, c, l, g) {
                (this._data = n),
                  (this.formBuilder = s),
                  (this.modalCtrl = c),
                  (this.navCtrl = l),
                  (this.authService = g),
                  (this.const_data = {}),
                  (this.currentUser = {}),
                  (this.API = "/issue"),
                  (this.Loading = !0);
              }
              ngOnInit() {
                (this.currentUser = this.authService.getParseTokenUser()),
                  setTimeout(() => {
                    this.loadData();
                  }, 3e3);
              }
              loadData() {
                (this.Loading = !1),
                  this._data
                    .get(
                      UrlConstants.BASE_SERVER + this.currentUser.ip + this.API,
                    )
                    .subscribe(
                      (n) => {
                        (this.const_data = n || []), (this.Loading = !0);
                      },
                      (n) => {
                        (this.Loading = !0), console.log(n);
                      },
                    );
              }
              openItem(n) {
                this.navCtrl.navigateForward([f.Q_.issueDetail, n]);
              }
            }
            return (
              (e.ɵfac = function (n) {
                return new (n || e)(
                  t.Y36(x.D),
                  t.Y36(r.qu),
                  t.Y36(o.IN),
                  t.Y36(o.SH),
                  t.Y36(P.e),
                );
              }),
              (e.ɵcmp = t.Xpm({
                type: e,
                selectors: [["app-issue-history"]],
                decls: 18,
                vars: 7,
                consts: [
                  ["slot", "start"],
                  [2, "text-align", "center", "padding-right", "100px"],
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
                  ["slot", "primary", "hidden", ""],
                  ["color", "danger", "id", "open-modal-bp"],
                  ["slot", "icon-only", "name", "add-outline"],
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
                  [
                    "src",
                    "../assets/images/table_order.jpg",
                    2,
                    "object-fit",
                    "contain",
                  ],
                  [1, "ion-text-wrap"],
                  [
                    2,
                    "display",
                    "inline",
                    "font-weight",
                    "bold",
                    "color",
                    "cornflowerblue",
                  ],
                  ["bgcolor", "#000000"],
                  ["id", "loader-wrapper"],
                  ["id", "loader"],
                ],
                template: function (n, s) {
                  1 & n &&
                    (t.TgZ(0, "ion-header")(1, "ion-toolbar")(
                      2,
                      "ion-buttons",
                      0,
                    ),
                    t._UZ(3, "ion-back-button"),
                    t.qZA(),
                    t.TgZ(4, "ion-title", 1),
                    t._uU(5, "Giao d\u1ecbch"),
                    t.qZA(),
                    t.TgZ(6, "ion-button", 2),
                    t.NdJ("click", function () {
                      return s.loadData();
                    }),
                    t._UZ(7, "ion-icon", 3),
                    t.qZA(),
                    t.TgZ(8, "ion-buttons", 4)(9, "ion-button", 5),
                    t._UZ(10, "ion-icon", 6),
                    t.qZA()()()(),
                    t.TgZ(11, "ion-content", 7)(
                      12,
                      "cdk-virtual-scroll-viewport",
                      8,
                    )(13, "ion-searchbar", 9),
                    t.NdJ("ngModelChange", function (l) {
                      return (s.filterTerm = l);
                    }),
                    t.qZA(),
                    t.TgZ(14, "ion-list", 10),
                    t.YNc(15, y, 7, 1, "ion-item", 11),
                    t.ALo(16, "filter"),
                    t.qZA()()(),
                    t.YNc(17, C, 3, 0, "div", 12)),
                    2 & n &&
                      (t.xp6(11),
                      t.Q6J("fullscreen", !0),
                      t.xp6(2),
                      t.Q6J("ngModel", s.filterTerm),
                      t.xp6(2),
                      t.Q6J(
                        "ngForOf",
                        t.xi3(
                          16,
                          4,
                          null == s.const_data ? null : s.const_data.data,
                          s.filterTerm,
                        ),
                      ),
                      t.xp6(2),
                      t.Q6J("ngIf", !s.Loading));
                },
                dependencies: [
                  d.sg,
                  d.O5,
                  r.JJ,
                  r.On,
                  o.BJ,
                  o.oU,
                  o.YG,
                  o.Sm,
                  o.W2,
                  o.Gu,
                  o.gu,
                  o.Xz,
                  o.Ie,
                  o.Q$,
                  o.q_,
                  o.VI,
                  o.wd,
                  o.sr,
                  o.j9,
                  o.cs,
                  m.xd,
                  m.N7,
                  h.Z,
                ],
                styles: [
                  ".text-center[_ngcontent-%COMP%]{text-align:center}.text-color[_ngcontent-%COMP%]{color:#8a2be2}.w-100[_ngcontent-%COMP%]{width:100%}#vendor-option[_ngcontent-%COMP%]     .mat-form-field-flex{background:white!important;padding:0!important}.display-flex-content[_ngcontent-%COMP%]{display:flex;flex-direction:row}.display-flex-content[_ngcontent-%COMP%]   .input-search[_ngcontent-%COMP%]{padding-bottom:15px;margin-right:7px}.display-flex-content[_ngcontent-%COMP%]   .icon-search[_ngcontent-%COMP%]{margin:8px 15px 0 0}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.flex-1[_ngcontent-%COMP%]{flex:1}.flex-2[_ngcontent-%COMP%]{flex:2}.color-text[_ngcontent-%COMP%]{color:#666;font-size:14px}.padding-15[_ngcontent-%COMP%]{padding:0 15px}.example-viewport[_ngcontent-%COMP%]{height:70%;width:100%}.example-item[_ngcontent-%COMP%]{height:50px}.avata[_ngcontent-%COMP%]{width:50px;height:50px;object-fit:contain}ion-item[_ngcontent-%COMP%]{margin-top:10px}ion-item[_ngcontent-%COMP%]:last-child{margin-bottom:50px}",
                ],
              })),
              e
            );
          })(),
        },
      ];
      let v = (() => {
        class e {}
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵmod = t.oAB({ type: e })),
          (e.ɵinj = t.cJS({ imports: [p.Bz.forChild(M), p.Bz] })),
          e
        );
      })();
      var I = i(5064);
      let Z = (() => {
        class e {}
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵmod = t.oAB({ type: e })),
          (e.ɵinj = t.cJS({ imports: [d.ez, r.u5, o.Pc, I.q, r.UX, v, h.h] })),
          e
        );
      })();
    },
  },
]);
