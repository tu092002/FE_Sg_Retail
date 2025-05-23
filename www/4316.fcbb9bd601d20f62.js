"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [4316],
  {
    4316: (M, l, i) => {
      i.r(l), i.d(l, { staffAddPageModule: () => x });
      var c = i(6895),
        o = i(4006),
        a = i(8779),
        u = i(9299),
        g = i(655),
        t = i(4650),
        h = i(2468),
        p = i(4377);
      function m(n, r) {
        1 & n &&
          (t.TgZ(0, "div", 11)(1, "div", 12), t._UZ(2, "div", 13), t.qZA()());
      }
      const P = [
        {
          path: "",
          component: (() => {
            class n {
              constructor(e, s, d, f, C) {
                (this._data = e),
                  (this.formBuilder = s),
                  (this.authService = d),
                  (this.alertController = f),
                  (this.location = C),
                  (this.API = "/staff"),
                  (this.Loading = !0),
                  (this.const_data = {}),
                  (this.currentUser = {});
              }
              ngOnInit() {
                (this.currentUser = this.authService.getParseTokenUser()),
                  this.createForm();
              }
              createForm() {
                this.formGroup = this.formBuilder.group({
                  cardcode: [null, o.kI.required],
                  staffname: [null, o.kI.required],
                  group: [null, o.kI.required],
                  address: [null, o.kI.required],
                  phone: [null, o.kI.required],
                  status: [null, o.kI.required],
                  remarks: [null],
                });
              }
              confirm(e) {
                var s, d;
                (this.const_data.staffcode = e.staffcode),
                  (this.const_data.staffname = e.staffname),
                  (this.const_data.address = e.address),
                  (this.const_data.phone = e.phone),
                  (this.const_data.remarks = e.remarks),
                  (this.const_data.status = !0),
                  (this.const_data.useradd =
                    null === (s = this.currentUser) || void 0 === s
                      ? void 0
                      : s.username),
                  (this.const_data.userupdate =
                    null === (d = this.currentUser) || void 0 === d
                      ? void 0
                      : d.username),
                  (this.const_data.type = e.type),
                  this._data
                    .post(
                      UrlConstants.BASE_SERVER + this.currentUser.ip + this.API,
                      this.const_data,
                    )
                    .subscribe((f) => {
                      this._data.showSaveSuccess();
                    }),
                  this.location.back();
              }
              presentAlert() {
                return (0, g.mG)(this, void 0, void 0, function* () {
                  yield (yield this.alertController.create({
                    header: "Notification",
                    subHeader:
                      "Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng !!",
                    buttons: ["OK"],
                  })).present();
                });
              }
            }
            return (
              (n.ɵfac = function (e) {
                return new (e || n)(
                  t.Y36(h.D),
                  t.Y36(o.qu),
                  t.Y36(p.e),
                  t.Y36(a.Br),
                  t.Y36(c.Ye),
                );
              }),
              (n.ɵcmp = t.Xpm({
                type: n,
                selectors: [["app-staff-add"]],
                decls: 24,
                vars: 3,
                consts: [
                  ["slot", "start"],
                  [2, "text-align", "center"],
                  ["slot", "end"],
                  [3, "strong", "click"],
                  [1, "ion-padding"],
                  ["id", "vendor-form", 1, "form", 3, "formGroup"],
                  ["position", "stacked", 2, "font-weight", "bold"],
                  ["formControlName", "staffname"],
                  ["formControlName", "address"],
                  ["formControlName", "phone"],
                  ["bgcolor", "#000000", 4, "ngIf"],
                  ["bgcolor", "#000000"],
                  ["id", "loader-wrapper"],
                  ["id", "loader"],
                ],
                template: function (e, s) {
                  1 & e &&
                    (t.TgZ(0, "ion-header")(1, "ion-toolbar")(
                      2,
                      "ion-buttons",
                      0,
                    ),
                    t._UZ(3, "ion-back-button"),
                    t.qZA(),
                    t.TgZ(4, "ion-title", 1),
                    t._uU(5, "Th\xeam m\u1edbi"),
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
                    t._uU(13, "T\xean kh\xe1ch h\xe0ng"),
                    t.qZA(),
                    t._UZ(14, "ion-input", 7),
                    t.qZA(),
                    t.TgZ(15, "ion-item")(16, "ion-label", 6),
                    t._uU(17, "\u0110\u1ecba ch\u1ec9"),
                    t.qZA(),
                    t._UZ(18, "ion-input", 8),
                    t.qZA(),
                    t.TgZ(19, "ion-item")(20, "ion-label", 6),
                    t._uU(21, "S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"),
                    t.qZA(),
                    t._UZ(22, "ion-input", 9),
                    t.qZA()()(),
                    t.YNc(23, m, 3, 0, "div", 10)),
                    2 & e &&
                      (t.xp6(7),
                      t.Q6J("strong", !0),
                      t.xp6(3),
                      t.Q6J("formGroup", s.formGroup),
                      t.xp6(13),
                      t.Q6J("ngIf", !s.Loading));
                },
                dependencies: [
                  c.O5,
                  o._Y,
                  o.JJ,
                  o.JL,
                  a.oU,
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
                  a.cs,
                  o.sg,
                  o.u,
                ],
                styles: [
                  ".text-center[_ngcontent-%COMP%]{text-align:center}.text-color[_ngcontent-%COMP%]{color:#8a2be2}.w-100[_ngcontent-%COMP%]{width:100%}#vendor-option[_ngcontent-%COMP%]     .mat-form-field-flex{background:white!important;padding:0!important}.display-flex-content[_ngcontent-%COMP%]{display:flex;flex-direction:row}.display-flex-content[_ngcontent-%COMP%]   .input-search[_ngcontent-%COMP%]{padding-bottom:15px;margin-right:7px}.display-flex-content[_ngcontent-%COMP%]   .icon-search[_ngcontent-%COMP%]{margin:8px 15px 0 0}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.flex-1[_ngcontent-%COMP%]{flex:1}.flex-2[_ngcontent-%COMP%]{flex:2}.color-text[_ngcontent-%COMP%]{color:#666;font-size:14px}.padding-15[_ngcontent-%COMP%]{padding:0 15px}.example-viewport[_ngcontent-%COMP%]{height:100%;width:100%}.example-item[_ngcontent-%COMP%]{height:50px}.avata[_ngcontent-%COMP%]{width:50px;height:50px;object-fit:contain}ion-item[_ngcontent-%COMP%]{margin-top:10px}ion-item[_ngcontent-%COMP%]:last-child{margin-bottom:50px}",
                ],
              })),
              n
            );
          })(),
        },
      ];
      let A = (() => {
        class n {}
        return (
          (n.ɵfac = function (e) {
            return new (e || n)();
          }),
          (n.ɵmod = t.oAB({ type: n })),
          (n.ɵinj = t.cJS({ imports: [u.Bz.forChild(P), u.Bz] })),
          n
        );
      })();
      var v = i(5064);
      let x = (() => {
        class n {}
        return (
          (n.ɵfac = function (e) {
            return new (e || n)();
          }),
          (n.ɵmod = t.oAB({ type: n })),
          (n.ɵinj = t.cJS({ imports: [c.ez, o.u5, a.Pc, v.q, o.UX, A] })),
          n
        );
      })();
    },
  },
]);
