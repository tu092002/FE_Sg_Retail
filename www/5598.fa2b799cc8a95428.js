"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [5598],
  {
    5598: (U, h, n) => {
      n.r(h), n.d(h, { WarehouseDetailsPageModule: () => P });
      var c = n(6895),
        r = n(4006),
        a = n(8779),
        m = n(9299),
        e = n(4650),
        p = n(2468),
        f = n(4377);
      const g = [
        {
          path: "",
          component: (() => {
            class o {
              constructor(t, s, i, l) {
                (this._data = t),
                  (this.route = s),
                  (this.authService = i),
                  (this.formBuilder = l),
                  (this.const_data = []),
                  (this.currentUser = {}),
                  (this.valueForm = ""),
                  (this.dynamictype = "number"),
                  (this.API = "/warehouse"),
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
                  whscode: [null, r.kI.required],
                  whsname: [null, r.kI.required],
                  address: [null, r.kI.required],
                  remarks: [null, r.kI.required],
                  status: [null],
                });
              }
              loaddata() {
                (this.Loading = !1), this.createForm();
                const t = +this.route.snapshot.params.id;
                null != t || null != t
                  ? this._data
                      .get(
                        UrlConstants.BASE_SERVER +
                          this.currentUser.ip +
                          this.API +
                          `/${t}`,
                      )
                      .subscribe(
                        (s) => {
                          var i;
                          (this.items = s || []),
                            this.setValue(
                              null === (i = this.items) || void 0 === i
                                ? void 0
                                : i.data,
                            ),
                            (this.Loading = !0);
                        },
                        (s) => {
                          this.Loading = !0;
                        },
                      )
                  : (this.Loading = !0);
              }
              setValue(t) {
                this.formGroup.controls.whscode.setValue(t.whscode),
                  this.formGroup.controls.whsname.setValue(t.whsname),
                  this.formGroup.controls.address.setValue(t.address),
                  this.formGroup.controls.remarks.setValue(t.remarks),
                  this.formGroup.controls.status.setValue(t.status),
                  this.formGroup.controls.whscode.disable();
              }
              onSubmit(t) {
                this.valueForm = t;
              }
              editForm() {
                var t, s, i, l, d;
                this.formGroup.controls.whscode.setValue(
                  null === (t = this.items) || void 0 === t
                    ? void 0
                    : t.whscode,
                ),
                  this.formGroup.controls.whsname.setValue(
                    null === (s = this.items) || void 0 === s
                      ? void 0
                      : s.whsname,
                  ),
                  this.formGroup.controls.remarks.setValue(
                    null === (i = this.items) || void 0 === i
                      ? void 0
                      : i.remarks,
                  ),
                  this.formGroup.controls.address.setValue(
                    null === (l = this.items) || void 0 === l
                      ? void 0
                      : l.address,
                  ),
                  this.formGroup.controls.status.setValue(
                    null === (d = this.items) || void 0 === d
                      ? void 0
                      : d.status,
                  );
              }
              confirm(t) {
                this.modal.dismiss(this.name, "confirm"), this.onSubmit(t);
              }
              onWillDismiss(t) {
                "confirm" === t.detail.role &&
                  (this.message = `Hello, ${t.detail.data}!`);
              }
              UpdateItem(t) {
                var s;
                const i = +this.route.snapshot.params.id;
                (t.userupdate =
                  null === (s = this.currentUser) || void 0 === s
                    ? void 0
                    : s.username),
                  this._data
                    .put(
                      UrlConstants.BASE_SERVER +
                        this.currentUser.ip +
                        this.API +
                        `/${i}`,
                      t,
                    )
                    .subscribe((d) => {
                      this._data.showUpdateSuccess(t.whscode);
                    });
              }
              cancel() {
                this.modal.dismiss(null, "cancel");
              }
            }
            return (
              (o.ɵfac = function (t) {
                return new (t || o)(
                  e.Y36(p.D),
                  e.Y36(m.gz),
                  e.Y36(f.e),
                  e.Y36(r.qu),
                );
              }),
              (o.ɵcmp = e.Xpm({
                type: o,
                selectors: [["app-warehouse-details"]],
                viewQuery: function (t, s) {
                  if ((1 & t && e.Gf(a.ki, 5), 2 & t)) {
                    let i;
                    e.iGM((i = e.CRH())) && (s.modal = i.first);
                  }
                },
                decls: 19,
                vars: 2,
                consts: [
                  ["slot", "start"],
                  ["slot", "end"],
                  [3, "click"],
                  ["name", "pencil"],
                  [1, "ion-padding"],
                  ["id", "vendor-form", 1, "form", 3, "formGroup", "ngSubmit"],
                  ["position", "stacked"],
                  ["formControlName", "whscode"],
                  ["formControlName", "whsname"],
                ],
                template: function (t, s) {
                  1 & t &&
                    (e.TgZ(0, "ion-header")(1, "ion-toolbar")(
                      2,
                      "ion-buttons",
                      0,
                    ),
                    e._UZ(3, "ion-back-button"),
                    e.qZA(),
                    e.TgZ(4, "ion-title"),
                    e._uU(5),
                    e.qZA(),
                    e.TgZ(6, "ion-buttons", 1)(7, "ion-button", 2),
                    e.NdJ("click", function () {
                      return s.UpdateItem(s.formGroup.value);
                    }),
                    e._UZ(8, "ion-icon", 3),
                    e.qZA()()()(),
                    e.TgZ(9, "ion-content", 4)(10, "form", 5),
                    e.NdJ("ngSubmit", function () {
                      return s.onSubmit(s.formGroup.value);
                    }),
                    e.TgZ(11, "ion-item")(12, "ion-label", 6),
                    e._uU(13, "M\xe3"),
                    e.qZA(),
                    e._UZ(14, "ion-input", 7),
                    e.qZA(),
                    e.TgZ(15, "ion-item")(16, "ion-label", 6),
                    e._uU(17, "T\xean"),
                    e.qZA(),
                    e._UZ(18, "ion-input", 8),
                    e.qZA()()()),
                    2 & t &&
                      (e.xp6(5),
                      e.Oqu(null == s.items ? null : s.items.data.whsname),
                      e.xp6(5),
                      e.Q6J("formGroup", s.formGroup));
                },
                dependencies: [
                  r._Y,
                  r.JJ,
                  r.JL,
                  a.oU,
                  a.YG,
                  a.Sm,
                  a.W2,
                  a.Gu,
                  a.gu,
                  a.pK,
                  a.Ie,
                  a.Q$,
                  a.wd,
                  a.sr,
                  a.j9,
                  a.cs,
                  r.sg,
                  r.u,
                ],
              })),
              o
            );
          })(),
        },
      ];
      let v = (() => {
        class o {}
        return (
          (o.ɵfac = function (t) {
            return new (t || o)();
          }),
          (o.ɵmod = e.oAB({ type: o })),
          (o.ɵinj = e.cJS({ imports: [m.Bz.forChild(g), m.Bz] })),
          o
        );
      })();
      var G = n(5064);
      let P = (() => {
        class o {}
        return (
          (o.ɵfac = function (t) {
            return new (t || o)();
          }),
          (o.ɵmod = e.oAB({ type: o })),
          (o.ɵinj = e.cJS({ imports: [c.ez, r.u5, a.Pc, G.q, r.UX, v] })),
          o
        );
      })();
    },
  },
]);
