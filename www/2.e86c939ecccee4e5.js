"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [2],
  {
    2: (M, u, r) => {
      r.r(u), r.d(u, { WarehouseAddPageModule: () => A });
      var c = r(6895),
        a = r(4006),
        o = r(8779),
        l = r(9299),
        g = r(655),
        t = r(4650),
        p = r(2468),
        m = r(4377);
      function f(e, i) {
        1 & e &&
          (t.TgZ(0, "div", 9)(1, "div", 10), t._UZ(2, "div", 11), t.qZA()());
      }
      const P = [
        {
          path: "",
          component: (() => {
            class e {
              constructor(n, s, d, h, C) {
                (this._data = n),
                  (this.formBuilder = s),
                  (this.authService = d),
                  (this.alertController = h),
                  (this.location = C),
                  (this.Loading = !0),
                  (this.API = "/warehouse"),
                  (this.const_data = {}),
                  (this.currentUser = {});
              }
              ngOnInit() {
                (this.currentUser = this.authService.getParseTokenUser()),
                  this.createForm();
              }
              createForm() {
                (this.formGroup = this.formBuilder.group({
                  whscode: [null, a.kI.required],
                  whsname: [null, a.kI.required],
                  address: [null, a.kI.required],
                  remarks: [null, a.kI.required],
                  status: ["1"],
                })),
                  this.formGroup.reset();
              }
              confirm(n) {
                var s, d;
                (this.const_data.whscode = n.whscode),
                  (this.const_data.whsname = n.whsname),
                  (this.const_data.address = n.address),
                  (this.const_data.remarks = n.remarks),
                  (this.const_data.status = !0),
                  (this.const_data.useradd =
                    null === (s = this.currentUser) || void 0 === s
                      ? void 0
                      : s.username),
                  (this.const_data.userupdate =
                    null === (d = this.currentUser) || void 0 === d
                      ? void 0
                      : d.username),
                  (this.const_data.type = n.type),
                  this._data
                    .post(
                      UrlConstants.BASE_SERVER + this.currentUser.ip + this.API,
                      this.const_data,
                    )
                    .subscribe((h) => {
                      this._data.showSaveSuccess();
                    }),
                  this.location.back();
              }
              presentAlert() {
                return (0, g.mG)(this, void 0, void 0, function* () {
                  yield (yield this.alertController.create({
                    header: "Notification",
                    subHeader: "WhsCode invalid !!",
                    buttons: ["OK"],
                  })).present();
                });
              }
            }
            return (
              (e.ɵfac = function (n) {
                return new (n || e)(
                  t.Y36(p.D),
                  t.Y36(a.qu),
                  t.Y36(m.e),
                  t.Y36(o.Br),
                  t.Y36(c.Ye),
                );
              }),
              (e.ɵcmp = t.Xpm({
                type: e,
                selectors: [["app-warehouse-add"]],
                decls: 16,
                vars: 3,
                consts: [
                  ["slot", "start"],
                  [2, "text-align", "center"],
                  ["slot", "end"],
                  [3, "strong", "click"],
                  [1, "ion-padding"],
                  ["id", "vendor-form", 1, "form", 3, "formGroup"],
                  ["position", "stacked"],
                  ["formControlName", "whsname"],
                  ["bgcolor", "#000000", 4, "ngIf"],
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
                    t._uU(5, "Kho"),
                    t.qZA(),
                    t.TgZ(6, "ion-buttons", 2)(7, "ion-button", 3),
                    t.NdJ("click", function () {
                      return s.confirm(s.formGroup.value);
                    }),
                    t._uU(8, "Th\xeam"),
                    t.qZA()()()(),
                    t.TgZ(9, "ion-content", 4)(10, "form", 5)(11, "ion-item")(
                      12,
                      "ion-label",
                      6,
                    ),
                    t._uU(13, "T\xean"),
                    t.qZA(),
                    t._UZ(14, "ion-input", 7),
                    t.qZA()()(),
                    t.YNc(15, f, 3, 0, "div", 8)),
                    2 & n &&
                      (t.xp6(7),
                      t.Q6J("strong", !0),
                      t.xp6(3),
                      t.Q6J("formGroup", s.formGroup),
                      t.xp6(5),
                      t.Q6J("ngIf", !s.Loading));
                },
                dependencies: [
                  c.O5,
                  a._Y,
                  a.JJ,
                  a.JL,
                  o.oU,
                  o.YG,
                  o.Sm,
                  o.W2,
                  o.Gu,
                  o.pK,
                  o.Ie,
                  o.Q$,
                  o.wd,
                  o.sr,
                  o.j9,
                  o.cs,
                  a.sg,
                  a.u,
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
          (e.ɵinj = t.cJS({ imports: [l.Bz.forChild(P), l.Bz] })),
          e
        );
      })();
      var x = r(5064);
      let A = (() => {
        class e {}
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵmod = t.oAB({ type: e })),
          (e.ɵinj = t.cJS({ imports: [c.ez, a.u5, o.Pc, x.q, a.UX, v] })),
          e
        );
      })();
    },
  },
]);
