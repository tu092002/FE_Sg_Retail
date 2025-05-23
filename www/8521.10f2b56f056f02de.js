"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [8521],
  {
    8521: (A, f, r) => {
      r.r(f), r.d(f, { staffDetailsPageModule: () => U });
      var d = r(6895),
        a = r(4006),
        i = r(8779),
        l = r(9299),
        t = r(4650),
        c = r(2468),
        h = r(4377);
      function p(o, u) {
        1 & o &&
          (t.TgZ(0, "div", 12)(1, "div", 13), t._UZ(2, "div", 14), t.qZA()());
      }
      const g = [
        {
          path: "",
          component: (() => {
            class o {
              constructor(e, s, n, m) {
                (this._data = e),
                  (this.route = s),
                  (this.formBuilder = n),
                  (this.authService = m),
                  (this.const_data = []),
                  (this.currentUser = {}),
                  (this.valueForm = ""),
                  (this.dynamictype = "number"),
                  (this.API = "/staff"),
                  (this.Loading = !0),
                  (this.message =
                    "This modal example uses triggers to automatically open a modal when the button is clicked.");
              }
              ngOnInit() {
                (this.currentUser = this.authService.getParseTokenUser()),
                  this.loaddata();
              }
              createForm() {
                this.formGroup = this.formBuilder.group({
                  staffcode: [null, a.kI.required],
                  staffname: [null, a.kI.required],
                  group: [null, a.kI.required],
                  address: [null, a.kI.required],
                  phone: [null, a.kI.required],
                  status: [null, a.kI.required],
                });
              }
              loaddata() {
                (this.Loading = !1), this.createForm();
                const e = +this.route.snapshot.params.id;
                null != e || null != e
                  ? this._data
                      .get(
                        UrlConstants.BASE_SERVER +
                          this.currentUser.ip +
                          this.API +
                          `/${e}`,
                      )
                      .subscribe(
                        (s) => {
                          var n;
                          (this.items = s || []),
                            this.setValue(
                              null === (n = this.items) || void 0 === n
                                ? void 0
                                : n.data,
                            ),
                            (this.Loading = !0);
                        },
                        (s) => {
                          this.Loading = !0;
                        },
                      )
                  : (this.Loading = !0);
              }
              setValue(e) {
                setTimeout(() => {
                  (this.Loading = !1),
                    this.formGroup.controls.staffcode.setValue(
                      e.group + e.staffcode,
                    ),
                    this.formGroup.controls.staffname.setValue(e.staffname),
                    this.formGroup.controls.group.setValue(e.group),
                    this.formGroup.controls.address.setValue(e.address),
                    this.formGroup.controls.phone.setValue(e.phone),
                    this.formGroup.controls.status.setValue(
                      1 == e.status ? "true" : "false",
                    ),
                    this.formGroup.controls.staffcode.disable();
                }, 1e3),
                  setTimeout(() => {
                    this.Loading = !0;
                  }, 1e3);
              }
              onSubmit(e) {
                this.valueForm = e;
              }
              UpdateItem(e) {
                const s = +this.route.snapshot.params.id;
                (e.status = "true" == e.status),
                  this._data
                    .put(
                      UrlConstants.BASE_SERVER +
                        this.currentUser.ip +
                        this.API +
                        `/${s}`,
                      e,
                    )
                    .subscribe((m) => {
                      this._data.showUpdateSuccess(e.staffcode),
                        this.loaddata();
                    });
              }
              confirm(e) {
                this.modal.dismiss(this.name, "confirm"), this.onSubmit(e);
              }
              onWillDismiss(e) {
                "confirm" === e.detail.role &&
                  (this.message = `Hello, ${e.detail.data}!`);
              }
              cancel() {
                this.modal.dismiss(null, "cancel");
              }
            }
            return (
              (o.ɵfac = function (e) {
                return new (e || o)(
                  t.Y36(c.D),
                  t.Y36(l.gz),
                  t.Y36(a.qu),
                  t.Y36(h.e),
                );
              }),
              (o.ɵcmp = t.Xpm({
                type: o,
                selectors: [["app-staff-details"]],
                viewQuery: function (e, s) {
                  if ((1 & e && t.Gf(i.ki, 5), 2 & e)) {
                    let n;
                    t.iGM((n = t.CRH())) && (s.modal = n.first);
                  }
                },
                decls: 29,
                vars: 3,
                consts: [
                  ["slot", "start"],
                  ["slot", "primary"],
                  ["color", "danger", 3, "click"],
                  ["name", "pencil"],
                  [1, "ion-padding"],
                  ["id", "vendor-form", 1, "form", 3, "formGroup", "ngSubmit"],
                  ["position", "stacked"],
                  ["formControlName", "staffcode"],
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
                    t.TgZ(4, "ion-title"),
                    t._uU(5),
                    t.qZA(),
                    t.TgZ(6, "ion-buttons", 1)(7, "ion-button")(
                      8,
                      "ion-button",
                      2,
                    ),
                    t.NdJ("click", function () {
                      return s.UpdateItem(s.formGroup.value);
                    }),
                    t._UZ(9, "ion-icon", 3),
                    t.qZA()()()()(),
                    t.TgZ(10, "ion-content", 4)(11, "form", 5),
                    t.NdJ("ngSubmit", function () {
                      return s.onSubmit(s.formGroup.value);
                    }),
                    t.TgZ(12, "ion-item")(13, "ion-label", 6),
                    t._uU(14, "M\xe3 nh\xe2n vi\xean"),
                    t.qZA(),
                    t._UZ(15, "ion-input", 7),
                    t.qZA(),
                    t.TgZ(16, "ion-item")(17, "ion-label", 6),
                    t._uU(18, "T\xean nh\xe2n vi\xean"),
                    t.qZA(),
                    t._UZ(19, "ion-input", 8),
                    t.qZA(),
                    t.TgZ(20, "ion-item")(21, "ion-label", 6),
                    t._uU(22, "\u0110\u1ecba ch\u1ec9"),
                    t.qZA(),
                    t._UZ(23, "ion-input", 9),
                    t.qZA(),
                    t.TgZ(24, "ion-item")(25, "ion-label", 6),
                    t._uU(26, "S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"),
                    t.qZA(),
                    t._UZ(27, "ion-input", 10),
                    t.qZA()()(),
                    t.YNc(28, p, 3, 0, "div", 11)),
                    2 & e &&
                      (t.xp6(5),
                      t.Oqu(
                        null == s.items || null == s.items.data
                          ? null
                          : s.items.data.staffcode,
                      ),
                      t.xp6(6),
                      t.Q6J("formGroup", s.formGroup),
                      t.xp6(17),
                      t.Q6J("ngIf", !s.Loading));
                },
                dependencies: [
                  d.O5,
                  a._Y,
                  a.JJ,
                  a.JL,
                  i.oU,
                  i.YG,
                  i.Sm,
                  i.W2,
                  i.Gu,
                  i.gu,
                  i.pK,
                  i.Ie,
                  i.Q$,
                  i.wd,
                  i.sr,
                  i.j9,
                  i.cs,
                  a.sg,
                  a.u,
                ],
              })),
              o
            );
          })(),
        },
      ];
      let Z = (() => {
        class o {}
        return (
          (o.ɵfac = function (e) {
            return new (e || o)();
          }),
          (o.ɵmod = t.oAB({ type: o })),
          (o.ɵinj = t.cJS({ imports: [l.Bz.forChild(g), l.Bz] })),
          o
        );
      })();
      var v = r(5064);
      let U = (() => {
        class o {}
        return (
          (o.ɵfac = function (e) {
            return new (e || o)();
          }),
          (o.ɵmod = t.oAB({ type: o })),
          (o.ɵinj = t.cJS({ imports: [d.ez, a.u5, i.Pc, v.q, a.UX, Z] })),
          o
        );
      })();
    },
  },
]);
