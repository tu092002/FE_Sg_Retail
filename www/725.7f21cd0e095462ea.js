"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [725],
  {
    725: (k, m, l) => {
      l.r(m), l.d(m, { ItemAddPageModule: () => T });
      var d = l(6895),
        a = l(4006),
        n = l(8779),
        h = l(9299),
        u = l(655),
        C = l(4631),
        t = l(4650),
        _ = l(2468),
        f = l(4377);
      let y = (() => {
        class i {
          constructor(e, o, r, s, g, p) {
            (this.navCtrl = e),
              (this.modalCtrl = o),
              (this._data = r),
              (this.alertController = s),
              (this.formBuilder = g),
              (this.authService = p),
              (this.const_data_category = {}),
              (this.currentUser = {}),
              (this.const_data = {}),
              (this.checkedItems = []),
              (this.quantity = 1),
              (this.API = "/category"),
              (this.Loading = !0);
          }
          ngOnInit() {
            (this.currentUser = this.authService.getParseTokenUser()),
              this.createFormCategory();
          }
          cancel() {
            return this.modalCtrl.dismiss(null, "cancel");
          }
          loadData_Category() {
            (this.Loading = !1),
              this._data
                .get(UrlConstants.BASE_SERVER + this.currentUser.ip + this.API)
                .subscribe(
                  (e) => {
                    (this.Category = e || []), (this.Loading = !0);
                  },
                  (e) => {
                    (this.Loading = !0), console.log(e);
                  },
                );
          }
          confirmCategory(e) {
            this.modalCtrl.dismiss(this.name, "confirm"),
              null != e.categorycode &&
              null != e.categorycode &&
              "" != e.categorycode
                ? ((this.const_data_category.categorycode = e.categorycode),
                  (this.const_data_category.categoryname = e.categoryname),
                  (this.const_data_category.statuscategory = !0),
                  this._data
                    .post(
                      UrlConstants.BASE_SERVER + this.currentUser.ip + this.API,
                      this.const_data_category,
                    )
                    .subscribe((o) => {
                      this._data.showSaveSuccess();
                    }))
                : this.presentAlert();
          }
          presentAlert() {
            return (0, u.mG)(this, void 0, void 0, function* () {
              yield (yield this.alertController.create({
                header: "Notification",
                subHeader: "CardCode invalid !!",
                buttons: ["OK"],
              })).present();
            });
          }
          createFormCategory() {
            this.formGroup = this.formBuilder.group({
              categorycode: [null, a.kI.required],
              categoryname: [null, a.kI.required],
              statuscategory: [0, a.kI.required],
            });
          }
        }
        return (
          (i.ɵfac = function (e) {
            return new (e || i)(
              t.Y36(n.SH),
              t.Y36(n.IN),
              t.Y36(_.D),
              t.Y36(n.Br),
              t.Y36(a.qu),
              t.Y36(f.e),
            );
          }),
          (i.ɵcmp = t.Xpm({
            type: i,
            selectors: [["app-category"]],
            decls: 28,
            vars: 1,
            consts: [
              ["slot", "start"],
              ["color", "medium", 3, "click"],
              [2, "text-align", "center"],
              ["slot", "end"],
              [3, "click"],
              [1, "ion-padding"],
              ["id", "vendor-form", 1, "form", 3, "formGroup"],
              ["position", "stacked"],
              ["formControlName", "categorycode"],
              ["formControlName", "categoryname"],
              ["formControlName", "statuscategory"],
              ["value", "true"],
              ["value", "false"],
            ],
            template: function (e, o) {
              1 & e &&
                (t.TgZ(0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0)(
                  3,
                  "ion-button",
                  1,
                ),
                t.NdJ("click", function () {
                  return o.cancel();
                }),
                t._uU(4, "H\u1ee7y"),
                t.qZA()(),
                t.TgZ(5, "ion-title", 2),
                t._uU(6, "Th\xeam m\u1edbi"),
                t.qZA(),
                t.TgZ(7, "ion-buttons", 3)(8, "ion-button", 4),
                t.NdJ("click", function () {
                  return o.confirmCategory(o.formGroup.value);
                }),
                t._uU(9, "X\xe1c nh\u1eadn"),
                t.qZA()()()(),
                t.TgZ(10, "ion-content", 5)(11, "form", 6)(12, "ion-item")(
                  13,
                  "ion-label",
                  7,
                ),
                t._uU(14, "M\xe3 ph\xe2n lo\u1ea1i"),
                t.qZA(),
                t._UZ(15, "ion-input", 8),
                t.qZA(),
                t.TgZ(16, "ion-item")(17, "ion-label", 7),
                t._uU(18, "T\xean ph\xe2n lo\u1ea1i"),
                t.qZA(),
                t._UZ(19, "ion-input", 9),
                t.qZA(),
                t.TgZ(20, "ion-item")(21, "ion-label", 7),
                t._uU(22, "Tr\u1ea1ng th\xe1i"),
                t.qZA(),
                t.TgZ(23, "ion-select", 10)(24, "ion-select-option", 11),
                t._uU(25, "Ho\u1ea1t \u0111\u1ed9ng"),
                t.qZA(),
                t.TgZ(26, "ion-select-option", 12),
                t._uU(27, "Kh\xf4ng ho\u1ea1t \u0111\u1ed9ng"),
                t.qZA()()()()()),
                2 & e && (t.xp6(11), t.Q6J("formGroup", o.formGroup));
            },
            dependencies: [
              n.YG,
              n.Sm,
              n.W2,
              n.Gu,
              n.pK,
              n.Ie,
              n.Q$,
              n.t9,
              n.n0,
              n.wd,
              n.sr,
              n.QI,
              n.j9,
              a._Y,
              a.JJ,
              a.JL,
              a.sg,
              a.u,
            ],
          })),
          i
        );
      })();
      var A = l(162),
        b = l(4859);
      function P(i, c) {
        if (
          (1 & i && (t.TgZ(0, "ion-select-option", 25), t._uU(1), t.qZA()),
          2 & i)
        ) {
          const e = c.$implicit;
          t.Q6J("value", e.categorycode), t.xp6(1), t.Oqu(e.categoryname);
        }
      }
      function v(i, c) {
        1 & i &&
          (t.TgZ(0, "div", 26)(1, "div", 27), t._UZ(2, "div", 28), t.qZA()());
      }
      const Z = [
        {
          path: "",
          component: (() => {
            class i {
              constructor(e, o, r, s, g, p, U) {
                (this._data = e),
                  (this.alertController = o),
                  (this.formBuilder = r),
                  (this.modalCtrl = s),
                  (this.authService = g),
                  (this._uploadService = p),
                  (this.location = U),
                  (this.const_data = {}),
                  (this.currentUser = {}),
                  (this.Loading = !0),
                  (this.fileToUpload = null),
                  (this.imgDefault =
                    "../../../../../assets/images/imgdefault.jpeg"),
                  (this.image = ""),
                  (this.product_price = ""),
                  (this.API_category = "/category"),
                  (this.API = "/items"),
                  (this.BASE_SERVERS = C.r.BASE_SERVER + "/"),
                  this.createForm();
              }
              ngOnInit() {
                (this.currentUser = this.authService.getParseTokenUser()),
                  this.loadData_Category();
              }
              createForm() {
                this.formGroup = this.formBuilder.group({
                  itemcode: [null, a.kI.required],
                  itemname: [null, a.kI.required],
                  category: [null, a.kI.required],
                  price: [0, a.kI.required],
                  status: [0, a.kI.required],
                  barcode: [null],
                  remarks: [null],
                  image: [null],
                  whscode: [null],
                });
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
                      (e) => {
                        (this.Category = e || []), (this.Loading = !0);
                      },
                      (e) => {
                        (this.Loading = !0), console.log(e);
                      },
                    );
              }
              selectFile(e) {
                const o = e.target.files[0];
                this.uploadImage_1 = e.target.files;
                const r = new FileReader();
                (r.onload = (s) => (this.preview_upload1 = r.result)),
                  r.readAsDataURL(o),
                  this.handleFileInput();
              }
              handleFileInput() {
                (this.fileToUpload = null),
                  (this.fileToUpload = this.uploadImage_1.item(0)),
                  this.fileToUpload &&
                    this._uploadService.postFile(this.fileToUpload).subscribe(
                      (o) => {
                        this.nameFileUpload = o;
                      },
                      (o) => {},
                    );
              }
              openModal() {
                return (0, u.mG)(this, void 0, void 0, function* () {
                  const e = yield this.modalCtrl.create({
                    component: y,
                    componentProps: { data: this.item_category },
                  });
                  e.present();
                  const { data: o, role: r } = yield e.onWillDismiss();
                  "confirm" === r && (this.item_category = o);
                });
              }
              CommaFormatted(e) {
                (e.which >= 37 && e.which <= 40) ||
                  (this.product_price &&
                    ((this.product_price = String(this.product_price)),
                    (this.product_price = this.product_price
                      .replace(/\D/g, "")
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ","))));
              }
              numberCheck(e) {
                return !("e" === e.key || "+" === e.key || "-" === e.key);
              }
              confirm(e) {
                var o, r;
                (this.const_data.itemcode = e.itemcode),
                  (this.const_data.itemname = e.itemname),
                  (this.const_data.group = e.category.toString()),
                  (this.const_data.price = Number(e.price.replace(/,/g, ""))),
                  (this.const_data.status = !0),
                  (this.const_data.useradd =
                    null === (o = this.currentUser) || void 0 === o
                      ? void 0
                      : o.username),
                  (this.const_data.userupdate =
                    null === (r = this.currentUser) || void 0 === r
                      ? void 0
                      : r.username),
                  (this.const_data.type = e.type),
                  (this.const_data.quantity = 1),
                  (this.const_data.image =
                    null == this.nameFileUpload ||
                    null == this.nameFileUpload ||
                    "" == this.nameFileUpload
                      ? ""
                      : this.nameFileUpload.image_save_url),
                  (this.const_data.whscode = e.whscode),
                  this._data
                    .post(
                      UrlConstants.BASE_SERVER + this.currentUser.ip + this.API,
                      this.const_data,
                    )
                    .subscribe((s) => {
                      this._data.showSaveSuccess();
                    }),
                  this.location.back();
              }
              presentAlert() {
                return (0, u.mG)(this, void 0, void 0, function* () {
                  yield (yield this.alertController.create({
                    header: "Notification",
                    subHeader: "CardCode invalid !!",
                    buttons: ["OK"],
                  })).present();
                });
              }
            }
            return (
              (i.ɵfac = function (e) {
                return new (e || i)(
                  t.Y36(_.D),
                  t.Y36(n.Br),
                  t.Y36(a.qu),
                  t.Y36(n.IN),
                  t.Y36(f.e),
                  t.Y36(A.J),
                  t.Y36(d.Ye),
                );
              }),
              (i.ɵcmp = t.Xpm({
                type: i,
                selectors: [["app-item-add"]],
                viewQuery: function (e, o) {
                  if ((1 & e && t.Gf(n.ki, 5), 2 & e)) {
                    let r;
                    t.iGM((r = t.CRH())) && (o.modal = r.first);
                  }
                },
                decls: 43,
                vars: 6,
                consts: [
                  ["slot", "start"],
                  [2, "text-align", "center"],
                  ["slot", "end"],
                  [3, "strong", "click"],
                  [1, "ion-padding"],
                  ["id", "vendor-form", 1, "form", 3, "formGroup"],
                  ["position", "stacked"],
                  ["formControlName", "itemname"],
                  ["formControlName", "barcode"],
                  ["formControlName", "category", 2, "width", "80%"],
                  ["tablenumber", ""],
                  [3, "value", 4, "ngFor", "ngForOf"],
                  [
                    2,
                    "position",
                    "absolute",
                    "right",
                    "55px",
                    "top",
                    "15px",
                    "--background",
                    "transparent",
                    "--box-shadow",
                    "none",
                    3,
                    "click",
                  ],
                  [
                    "slot",
                    "icon-only",
                    "name",
                    "refresh",
                    2,
                    "color",
                    "rgb(0, 47, 255)",
                  ],
                  [
                    2,
                    "position",
                    "absolute",
                    "right",
                    "15px",
                    "top",
                    "15px",
                    "--background",
                    "transparent",
                    "--box-shadow",
                    "none",
                    3,
                    "click",
                  ],
                  [
                    "slot",
                    "icon-only",
                    "name",
                    "add",
                    2,
                    "color",
                    "cornflowerblue",
                    3,
                    "click",
                  ],
                  [
                    "formControlName",
                    "price",
                    "name",
                    "product_price",
                    "autocomplete",
                    "off",
                    3,
                    "ngModel",
                    "ngModelChange",
                    "keydown",
                    "keyup",
                  ],
                  ["role", "main", 1, "content"],
                  [1, "form-group", "input_container"],
                  [
                    "placeholder",
                    ".",
                    "type",
                    "file",
                    "id",
                    "file",
                    3,
                    "change",
                  ],
                  ["img1", ""],
                  [1, "btn_upload"],
                  ["mat-raised-button", "", 3, "click"],
                  ["alt", "", 1, "preview", 3, "src"],
                  ["bgcolor", "#000000", 4, "ngIf"],
                  [3, "value"],
                  ["bgcolor", "#000000"],
                  ["id", "loader-wrapper"],
                  ["id", "loader"],
                ],
                template: function (e, o) {
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
                      return o.confirm(o.formGroup.value);
                    }),
                    t._uU(8, "Th\xeam"),
                    t.qZA()()()(),
                    t.TgZ(9, "ion-content", 4)(10, "form", 5)(11, "ion-item")(
                      12,
                      "ion-label",
                      6,
                    ),
                    t._uU(13, "T\xean s\u1ea3n ph\u1ea9m"),
                    t.qZA(),
                    t._UZ(14, "ion-input", 7),
                    t.qZA(),
                    t.TgZ(15, "ion-item")(16, "ion-label", 6),
                    t._uU(17, "M\xe3 v\u1ea1ch"),
                    t.qZA(),
                    t._UZ(18, "ion-input", 8),
                    t.qZA(),
                    t.TgZ(19, "ion-item")(20, "ion-label", 6),
                    t._uU(21, "Ph\xe2n lo\u1ea1i"),
                    t.qZA(),
                    t.TgZ(22, "ion-select", 9, 10),
                    t.YNc(24, P, 2, 2, "ion-select-option", 11),
                    t.qZA(),
                    t.TgZ(25, "ion-button", 12),
                    t.NdJ("click", function () {
                      return o.loadData_Category();
                    }),
                    t._UZ(26, "ion-icon", 13),
                    t.qZA(),
                    t.TgZ(27, "ion-button", 14),
                    t.NdJ("click", function () {
                      return o.openModal();
                    }),
                    t.TgZ(28, "ion-icon", 15),
                    t.NdJ("click", function () {
                      return o.openModal();
                    }),
                    t.qZA()()(),
                    t.TgZ(29, "ion-item")(30, "ion-label", 6),
                    t._uU(31, "\u0110\u01a1n gi\xe1"),
                    t.qZA(),
                    t.TgZ(32, "ion-input", 16),
                    t.NdJ("ngModelChange", function (s) {
                      return (o.product_price = s);
                    })("keydown", function (s) {
                      return o.numberCheck(s);
                    })("keyup", function (s) {
                      return o.CommaFormatted(s);
                    }),
                    t.qZA()(),
                    t.TgZ(33, "div", 17)(34, "div", 18)(35, "input", 19, 20),
                    t.NdJ("change", function (s) {
                      return o.selectFile(s);
                    }),
                    t.qZA()(),
                    t.TgZ(37, "div", 21)(38, "button", 22),
                    t.NdJ("click", function () {
                      return o.handleFileInput();
                    }),
                    t._uU(39, "Upload Image "),
                    t.qZA()(),
                    t.TgZ(40, "div"),
                    t._UZ(41, "img", 23),
                    t.qZA()()()(),
                    t.YNc(42, v, 3, 0, "div", 24)),
                    2 & e &&
                      (t.xp6(7),
                      t.Q6J("strong", !0),
                      t.xp6(3),
                      t.Q6J("formGroup", o.formGroup),
                      t.xp6(14),
                      t.Q6J(
                        "ngForOf",
                        null == o.Category ? null : o.Category.data,
                      ),
                      t.xp6(8),
                      t.Q6J("ngModel", o.product_price),
                      t.xp6(9),
                      t.Q6J("src", o.preview_upload1, t.LSH),
                      t.xp6(1),
                      t.Q6J("ngIf", !o.Loading));
                },
                dependencies: [
                  d.sg,
                  d.O5,
                  a._Y,
                  a.JJ,
                  a.JL,
                  n.oU,
                  n.YG,
                  n.Sm,
                  n.W2,
                  n.Gu,
                  n.gu,
                  n.pK,
                  n.Ie,
                  n.Q$,
                  n.t9,
                  n.n0,
                  n.wd,
                  n.sr,
                  n.QI,
                  n.j9,
                  n.cs,
                  a.sg,
                  a.u,
                  b.lW,
                ],
                styles: [
                  ".text-center[_ngcontent-%COMP%]{text-align:center}.text-color[_ngcontent-%COMP%]{color:#8a2be2}.w-100[_ngcontent-%COMP%]{width:100%}#vendor-option[_ngcontent-%COMP%]     .mat-form-field-flex{background:white!important;padding:0!important}.custom-select-scroll[_ngcontent-%COMP%]{max-height:200px;overflow-y:scroll}.display-flex-content[_ngcontent-%COMP%]{display:flex;flex-direction:row}.display-flex-content[_ngcontent-%COMP%]   .input-search[_ngcontent-%COMP%]{padding-bottom:15px;margin-right:7px}.display-flex-content[_ngcontent-%COMP%]   .icon-search[_ngcontent-%COMP%]{margin:8px 15px 0 0}.color-text[_ngcontent-%COMP%]{color:#666;font-size:14px}.padding-15[_ngcontent-%COMP%]{padding:0 15px}.example-viewport[_ngcontent-%COMP%]{height:100%;width:100%}.example-item[_ngcontent-%COMP%]{height:50px}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input_container[_ngcontent-%COMP%]{border:1px solid #e5e5e5}.content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]::file-selector-button{background-color:#fff;color:#000;border:0px;border-right:1px solid #e5e5e5;padding:10px 15px;margin-right:20px;transition:.5s}.content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]::file-selector-button:hover{background-color:#eee;border:0px;border-right:1px solid #e5e5e5}.content[_ngcontent-%COMP%]   .btn_upload[_ngcontent-%COMP%]{width:100%;margin-top:10px;text-align:end}.upload_card[_ngcontent-%COMP%]   ion-card-header.ios[_ngcontent-%COMP%]{display:flex;flex-flow:column-reverse}.upload_card[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{text-align:center}.upload_card[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px}.category[_ngcontent-%COMP%]{--height: 50%;--border-radius: 16px;--box-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1)}.category[_ngcontent-%COMP%]::part(backdrop){background:rgb(209,213,219);opacity:1}.category[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background: #f7f7f7;--color: rgb(0, 0, 0)}ion-content[_ngcontent-%COMP%]   .list_item[_ngcontent-%COMP%]::part(native){height:80px}#btn-save[_ngcontent-%COMP%]{width:100%;height:100%;font-size:1.1em;font-weight:500}",
                ],
              })),
              i
            );
          })(),
        },
      ];
      let M = (() => {
        class i {}
        return (
          (i.ɵfac = function (e) {
            return new (e || i)();
          }),
          (i.ɵmod = t.oAB({ type: i })),
          (i.ɵinj = t.cJS({ imports: [h.Bz.forChild(Z), h.Bz] })),
          i
        );
      })();
      var I = l(5064);
      let T = (() => {
        class i {}
        return (
          (i.ɵfac = function (e) {
            return new (e || i)();
          }),
          (i.ɵmod = t.oAB({ type: i })),
          (i.ɵinj = t.cJS({ imports: [d.ez, a.u5, n.Pc, a.UX, I.q, M] })),
          i
        );
      })();
    },
  },
]);
