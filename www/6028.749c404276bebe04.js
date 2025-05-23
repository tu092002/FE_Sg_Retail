"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [6028],
  {
    6028: (T, g, r) => {
      r.r(g), r.d(g, { ItemDetaisPageModule: () => _ });
      var m = r(6895),
        s = r(4006),
        a = r(8779),
        d = r(9299),
        c = r(4631),
        e = r(4650),
        h = r(2468),
        f = r(4377),
        I = r(162);
      function U(o, l) {
        if (
          (1 & o && (e.TgZ(0, "ion-select-option", 21), e._uU(1), e.qZA()),
          2 & o)
        ) {
          const t = l.$implicit;
          e.Q6J("value", t.categorycode),
            e.xp6(1),
            e.hij(" ", t.categoryname, " ");
        }
      }
      function Z(o, l) {
        1 & o &&
          (e.TgZ(0, "div", 22)(1, "div", 23), e._UZ(2, "div", 24), e.qZA()());
      }
      const A = [
        {
          path: "",
          component: (() => {
            class o {
              constructor(t, i, n, u, p) {
                (this.route = t),
                  (this._data = i),
                  (this.authService = n),
                  (this.formBuilder = u),
                  (this._uploadService = p),
                  (this.currentUser = {}),
                  (this.valueForm = ""),
                  (this.dynamictype = "number"),
                  (this.API = "/items"),
                  (this.Loading = !0),
                  (this.API_DETAIL = "/images"),
                  (this.BASE_SERVERS = c.r.BASE_SERVER + "/"),
                  (this.fileToUpload = null),
                  (this.uploadImage_1 = null),
                  (this.API_category = "/category");
              }
              ngOnInit() {
                (this.currentUser = this.authService.getParseTokenUser()),
                  this.loadData_Category(),
                  this.loaddata();
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
                        (i) => {
                          var n;
                          (this.items = i || []),
                            this.setValue(
                              null === (n = this.items) || void 0 === n
                                ? void 0
                                : n.data,
                            );
                        },
                        (i) => {
                          this.Loading = !0;
                        },
                      )
                  : (this.Loading = !0);
              }
              btnRefresh() {
                (this.Loading = !1),
                  this._data
                    .get(
                      UrlConstants.BASE_SERVER + this.currentUser.ip + this.API,
                    )
                    .subscribe(
                      (t) => {
                        (this.items = t || []), (this.Loading = !0);
                      },
                      (t) => {
                        (this.Loading = !0), console.log(t);
                      },
                    );
              }
              loadData_Category() {
                (this.Loading = !1),
                  this._data
                    .get(
                      UrlConstants.BASE_SERVER +
                        this.currentUser.ip +
                        this.API_category,
                    )
                    .subscribe(
                      (t) => {
                        (this.Category = t || []), (this.Loading = !0);
                      },
                      (t) => {
                        (this.Loading = !0), console.log(t);
                      },
                    );
              }
              setValue(t) {
                (t.categorycode = t.group),
                  (this.groupForm = t.group),
                  setTimeout(() => {
                    (this.Loading = !1),
                      this.formGroup.controls.itemcode.setValue(t.itemcode),
                      this.formGroup.controls.itemname.setValue(t.itemname),
                      this.formGroup.controls.category.setValue(
                        t.group.toString(),
                      ),
                      this.formGroup.controls.price.setValue(
                        t.price
                          .toString()
                          .replace(/\D/g, "")
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                      ),
                      this.formGroup.controls.status.setValue(
                        (t.status = 1 == t.status ? "1" : "0"),
                      ),
                      null == t.image || null == t.image || "" == t.image
                        ? (this.preview_upload1 =
                            "../../../../../../assets/images/imgdefault.jpeg")
                        : ((this.preview_upload1 = this.BASE_SERVERS + t.image),
                          (this.anh = t.image)),
                      this.formGroup.controls.image.setValue(
                        this.preview_upload1,
                      ),
                      this.formGroup.controls.itemcode.disable();
                  }, 1e3),
                  setTimeout(() => {
                    this.Loading = !0;
                  }, 1e3);
              }
              createForm() {
                this.formGroup = this.formBuilder.group({
                  itemcode: [null, s.kI.required],
                  itemname: [null, s.kI.required],
                  category: [null],
                  price: [null, s.kI.required],
                  status: [null, s.kI.required],
                  image: [null],
                });
              }
              UpdateItem(t) {
                var i;
                const n = +this.route.snapshot.params.id;
                (t.group = t.category),
                  (t.price = Number(
                    this.formGroup.getRawValue().price.replace(/,/g, ""),
                  )),
                  (t.status = !0),
                  (t.userupdate =
                    null === (i = this.currentUser) || void 0 === i
                      ? void 0
                      : i.username),
                  (t.image =
                    null == this.nameFileUpload ||
                    null == this.nameFileUpload ||
                    "" == this.nameFileUpload
                      ? this.anh
                      : this.nameFileUpload.image_save_url),
                  this._data
                    .put(
                      UrlConstants.BASE_SERVER +
                        this.currentUser.ip +
                        this.API +
                        `/${n}`,
                      t,
                    )
                    .subscribe((p) => {
                      this._data.showUpdateSuccess(t.itemcode);
                    });
              }
              onSubmit(t) {
                this.valueForm = t;
              }
              selectFile(t) {
                this.preview_upload1 = null;
                const i = t.target.files[0];
                this.uploadImage_1 = t.target.files;
                const n = new FileReader();
                (n.onload = (u) => (this.preview_upload1 = n.result)),
                  n.readAsDataURL(i),
                  this.handleFileInput();
              }
              handleFileInput() {
                (this.fileToUpload = null),
                  (this.fileToUpload = this.uploadImage_1.item(0)),
                  this.fileToUpload &&
                    this._uploadService.postFile(this.fileToUpload).subscribe(
                      (i) => {
                        this.nameFileUpload = i;
                      },
                      (i) => {},
                    );
              }
            }
            return (
              (o.ɵfac = function (t) {
                return new (t || o)(
                  e.Y36(d.gz),
                  e.Y36(h.D),
                  e.Y36(f.e),
                  e.Y36(s.qu),
                  e.Y36(I.J),
                );
              }),
              (o.ɵcmp = e.Xpm({
                type: o,
                selectors: [["app-item-detais"]],
                decls: 41,
                vars: 5,
                consts: [
                  ["slot", "start"],
                  ["slot", "end"],
                  ["color", "danger", 3, "click"],
                  ["name", "save"],
                  [1, "ion-padding"],
                  ["id", "vendor-form", 1, "form", 3, "formGroup", "ngSubmit"],
                  ["position", "stacked"],
                  ["formControlName", "itemcode"],
                  ["formControlName", "itemname"],
                  ["formControlName", "category"],
                  ["tablenumber", ""],
                  [3, "value", 4, "ngFor", "ngForOf"],
                  ["formControlName", "price"],
                  ["role", "main", 1, "content"],
                  [1, "form-group", "input_container"],
                  ["type", "file", "id", "file", 1, "choose", 3, "change"],
                  ["img1", ""],
                  ["hidden", "", "type", "text", "formControlName", "image"],
                  [2, "text-align", "center"],
                  [1, "preview", 2, "width", "50%", 3, "src"],
                  ["bgcolor", "#000000", 4, "ngIf"],
                  [3, "value"],
                  ["bgcolor", "#000000"],
                  ["id", "loader-wrapper"],
                  ["id", "loader"],
                ],
                template: function (t, i) {
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
                      return i.UpdateItem(i.formGroup.value);
                    }),
                    e._UZ(8, "ion-icon", 3),
                    e.qZA()()()(),
                    e.TgZ(9, "ion-content", 4)(10, "form", 5),
                    e.NdJ("ngSubmit", function () {
                      return i.onSubmit(i.formGroup.value);
                    }),
                    e.TgZ(11, "ion-item")(12, "ion-label", 6),
                    e._uU(13, "M\xe3 s\u1ea3n ph\u1ea9m"),
                    e.qZA(),
                    e._UZ(14, "ion-input", 7),
                    e.qZA(),
                    e.TgZ(15, "ion-item")(16, "ion-label", 6),
                    e._uU(17, "T\xean s\u1ea3n ph\u1ea9m"),
                    e.qZA(),
                    e._UZ(18, "ion-input", 8),
                    e.qZA(),
                    e.TgZ(19, "ion-item")(20, "ion-label", 6),
                    e._uU(21, "M\xe3 v\u1ea1ch"),
                    e.qZA(),
                    e._UZ(22, "ion-input"),
                    e.qZA(),
                    e.TgZ(23, "ion-item")(24, "ion-label", 6),
                    e._uU(25, "Ph\xe2n lo\u1ea1i"),
                    e.qZA(),
                    e.TgZ(26, "ion-select", 9, 10),
                    e.YNc(28, U, 2, 2, "ion-select-option", 11),
                    e.qZA()(),
                    e.TgZ(29, "ion-item")(30, "ion-label", 6),
                    e._uU(31, "\u0110\u01a1n gi\xe1"),
                    e.qZA(),
                    e._UZ(32, "ion-input", 12),
                    e.qZA(),
                    e.TgZ(33, "div", 13)(34, "div", 14)(35, "input", 15, 16),
                    e.NdJ("change", function (u) {
                      return i.selectFile(u);
                    }),
                    e.qZA()(),
                    e._UZ(37, "ion-input", 17),
                    e.TgZ(38, "div", 18),
                    e._UZ(39, "img", 19),
                    e.qZA()()()(),
                    e.YNc(40, Z, 3, 0, "div", 20)),
                    2 & t &&
                      (e.xp6(5),
                      e.Oqu(
                        null == i.items || null == i.items.data
                          ? null
                          : i.items.data.itemcode,
                      ),
                      e.xp6(5),
                      e.Q6J("formGroup", i.formGroup),
                      e.xp6(18),
                      e.Q6J(
                        "ngForOf",
                        null == i.Category ? null : i.Category.data,
                      ),
                      e.xp6(11),
                      e.s9C("src", i.preview_upload1, e.LSH),
                      e.xp6(1),
                      e.Q6J("ngIf", !i.Loading));
                },
                dependencies: [
                  m.sg,
                  m.O5,
                  s._Y,
                  s.JJ,
                  s.JL,
                  a.oU,
                  a.YG,
                  a.Sm,
                  a.W2,
                  a.Gu,
                  a.gu,
                  a.pK,
                  a.Ie,
                  a.Q$,
                  a.t9,
                  a.n0,
                  a.wd,
                  a.sr,
                  a.QI,
                  a.j9,
                  a.cs,
                  s.sg,
                  s.u,
                ],
                styles: [
                  ".choose[_ngcontent-%COMP%]::-webkit-file-upload-button{color:#fff;display:inline-block;background:#1CB6E0;border:none;padding:7px 15px;font-weight:700;border-radius:3px;white-space:nowrap;cursor:pointer;font-size:10pt}.input_container[_ngcontent-%COMP%]{text-align:center;margin-top:30px}",
                ],
              })),
              o
            );
          })(),
        },
      ];
      let b = (() => {
        class o {}
        return (
          (o.ɵfac = function (t) {
            return new (t || o)();
          }),
          (o.ɵmod = e.oAB({ type: o })),
          (o.ɵinj = e.cJS({ imports: [d.Bz.forChild(A), d.Bz] })),
          o
        );
      })();
      var v = r(5064);
      let _ = (() => {
        class o {}
        return (
          (o.ɵfac = function (t) {
            return new (t || o)();
          }),
          (o.ɵmod = e.oAB({ type: o })),
          (o.ɵinj = e.cJS({ imports: [m.ez, s.u5, a.Pc, v.q, s.UX, b] })),
          o
        );
      })();
    },
  },
]);
