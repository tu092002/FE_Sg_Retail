"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [7295],
  {
    7295: (D, x, s) => {
      s.r(x), s.d(x, { IssuePageModule: () => G });
      var p = s(6895),
        l = s(4006),
        o = s(8779),
        u = s(9299),
        f = s(655),
        _ = s(4631),
        t = s(4650),
        C = s(2468),
        P = s(4377);
      function O(i, d) {
        if (1 & i) {
          const n = t.EpF();
          t.TgZ(0, "ion-item", 8),
            t.NdJ("click", function () {
              const r = t.CHM(n).$implicit,
                g = t.oxw();
              return t.KtG(g.addlist(r));
            }),
            t.TgZ(1, "ion-avatar", 0),
            t._UZ(2, "ion-img", 9),
            t.qZA(),
            t.TgZ(3, "div", 10)(4, "p"),
            t._uU(5),
            t.qZA(),
            t.TgZ(6, "p"),
            t._uU(7),
            t.qZA()(),
            t._UZ(8, "ion-checkbox", 11),
            t.qZA();
        }
        if (2 & i) {
          const n = d.$implicit,
            e = t.oxw();
          t.xp6(2),
            t.s9C("src", n.image ? e.BASE_SERVERS + n.image : e.imgDefault),
            t.xp6(3),
            t.Oqu(n.itemcode),
            t.xp6(2),
            t.Oqu(n.itemname),
            t.xp6(1),
            t.Q6J("checked", n.checked);
        }
      }
      let I = (() => {
        class i {
          constructor(n, e, a, r) {
            (this.navCtrl = n),
              (this.modalCtrl = e),
              (this._data = a),
              (this.authService = r),
              (this.searchTerm = ""),
              (this.filteredItems = []),
              (this.Loading = !0),
              (this.const_data = []),
              (this.checkedItems = []),
              (this.const_temps = {}),
              (this.currentUser = {}),
              (this.API = "/items"),
              (this.BASE_SERVERS = _.r.BASE_SERVER + "/"),
              (this.imgDefault =
                "../../../../../assets/images/imgdefault.jpeg");
          }
          ngOnInit() {
            (this.currentUser = this.authService.getParseTokenUser()),
              this.loadData(),
              (this.checkedItems = this.data);
          }
          filterItems(n) {
            const e = n.target.value.toLowerCase();
            this.filteredItems = this.const_data.data.filter((a) =>
              a.itemname.toLowerCase().includes(e),
            );
          }
          openItem(n) {
            this.navCtrl.navigateForward(["tab2/pos-additems/pos-details", n]);
          }
          cancel() {
            return this.modalCtrl.dismiss(null, "cancel");
          }
          confirm() {
            return this.modalCtrl.dismiss(this.checkedItems, "confirm");
          }
          loadData() {
            (this.Loading = !1),
              this._data
                .get(UrlConstants.BASE_SERVER + this.currentUser.ip + this.API)
                .subscribe(
                  (n) => {
                    var e, a;
                    (this.const_data = n || []),
                      (this.filteredItems =
                        null === (e = this.const_data) || void 0 === e
                          ? void 0
                          : e.data),
                      this.addItemInList(
                        (null === (a = this.const_data) || void 0 === a
                          ? void 0
                          : a.data) || [],
                      ),
                      (this.Loading = !0);
                  },
                  (n) => {
                    (this.Loading = !0), console.log(n);
                  },
                );
          }
          addItemInList(n) {
            n.forEach((e) => {
              e.checked = !1;
            }),
              setTimeout(
                () =>
                  (0, f.mG)(this, void 0, void 0, function* () {
                    yield n.forEach((e) => {
                      this.checkedItems.forEach((a) => {
                        a.itemcode === e.itemcode && (e.checked = !0);
                      });
                    });
                  }),
                1e3,
              );
          }
          addlist(n) {
            var e, a, r;
            const g = this.checkedItems.find((c) => c.itemcode === n?.itemcode),
              m = this.checkedItems.findIndex(
                (c) => c.itemcode === n?.itemcode,
              );
            null === (e = this.const_data) ||
              void 0 === e ||
              e.data.find((c) => c.itemcode === n?.itemcode),
              g?.itemcode.toLowerCase() !== n?.itemcode.toLowerCase()
                ? (this.checkedItems.push(n),
                  null === (a = this.const_data) ||
                    void 0 === a ||
                    a.data.forEach((c) => {
                      this.checkedItems.forEach((N) => {
                        N.itemcode === c.itemcode &&
                          ((c.checked = !0), (c.quantity = 1));
                      });
                    }))
                : (this.checkedItems.splice(m, 1),
                  null === (r = this.const_data) ||
                    void 0 === r ||
                    r.data.forEach((c) => {
                      n.itemcode === c.itemcode &&
                        ((c.checked = !1), (c.quantity = 1));
                    }));
          }
        }
        return (
          (i.ɵfac = function (n) {
            return new (n || i)(
              t.Y36(o.SH),
              t.Y36(o.IN),
              t.Y36(C.D),
              t.Y36(P.e),
            );
          }),
          (i.ɵcmp = t.Xpm({
            type: i,
            selectors: [["app-add-issue"]],
            decls: 11,
            vars: 2,
            consts: [
              ["slot", "start"],
              ["color", "medium", 3, "click"],
              ["name", "arrow-back"],
              [2, "text-align", "center"],
              [1, "ion-padding"],
              [
                "placeholder",
                "T\xecm ki\u1ebfm c\u1eeda h\xe0ng",
                3,
                "ngModel",
                "ngModelChange",
                "ionInput",
              ],
              ["lines", "none"],
              [
                "button",
                "",
                "style",
                "width: 100%; border-bottom: 0.5px solid rgb(88, 83, 83);",
                3,
                "click",
                4,
                "ngFor",
                "ngForOf",
              ],
              [
                "button",
                "",
                2,
                "width",
                "100%",
                "border-bottom",
                "0.5px solid rgb(88, 83, 83)",
                3,
                "click",
              ],
              [3, "src"],
              [1, "itemInfo"],
              ["slot", "end", 3, "checked"],
            ],
            template: function (n, e) {
              1 & n &&
                (t.TgZ(0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0)(
                  3,
                  "ion-button",
                  1,
                ),
                t.NdJ("click", function () {
                  return e.cancel();
                }),
                t._UZ(4, "ion-icon", 2),
                t.qZA()(),
                t.TgZ(5, "ion-title", 3),
                t._uU(6, "Th\xeam m\u1edbi"),
                t.qZA()()(),
                t.TgZ(7, "ion-content", 4)(8, "ion-searchbar", 5),
                t.NdJ("ngModelChange", function (r) {
                  return (e.searchTerm = r);
                })("ionInput", function (r) {
                  return e.filterItems(r);
                }),
                t.qZA(),
                t.TgZ(9, "ion-list", 6),
                t.YNc(10, O, 9, 4, "ion-item", 7),
                t.qZA()()),
                2 & n &&
                  (t.xp6(8),
                  t.Q6J("ngModel", e.searchTerm),
                  t.xp6(2),
                  t.Q6J("ngForOf", e.filteredItems));
            },
            dependencies: [
              p.sg,
              l.JJ,
              l.On,
              o.BJ,
              o.YG,
              o.Sm,
              o.nz,
              o.W2,
              o.Gu,
              o.gu,
              o.Xz,
              o.Ie,
              o.q_,
              o.VI,
              o.wd,
              o.sr,
              o.w,
              o.j9,
            ],
            styles: [
              ".display-flex-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;font-size:.4cm}.text-center[_ngcontent-%COMP%]{text-align:center}.text-left[_ngcontent-%COMP%]{text-align:left}ion-input[_ngcontent-%COMP%]{float:left;position:relative;width:50px;height:100%;margin-left:50px;margin-top:0;background-color:#f000;border:1px solid rgb(0,0,0);border-radius:3px;text-align:center}.flex-1[_ngcontent-%COMP%]{flex:2;text-align:center}.flex-2[_ngcontent-%COMP%]{flex:1;padding-left:80px}.color-text[_ngcontent-%COMP%]{color:#666;font-size:14px;width:100px}ion-checkbox[_ngcontent-%COMP%]{float:right;margin-left:0}@media (min-width: 410px) and (max-width: 450px){.itemInfo[_ngcontent-%COMP%]{width:100%;padding-top:5px;padding-bottom:5px;font-size:.4cm}.itemInfo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1){float:left;display:block;width:100%;margin:1.5px}.itemInfo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2){float:left;display:block;width:100%;margin:1.5px}.itemInfo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(3){float:left;display:inline;width:45%;margin:1.5px}.itemInfo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(4){float:right;display:inline;width:50%;font-weight:700;margin:1.5px 0 1.5px 0%;text-align:end}}@media (min-width: 380px) and (max-width: 409px){.itemInfo[_ngcontent-%COMP%]{width:100%;padding-top:5px;padding-bottom:5px;font-size:.35cm}.itemInfo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1){float:left;display:block;width:100%;margin:1.5px}.itemInfo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2){float:left;display:block;width:100%;margin:1.5px}.itemInfo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(3){float:left;display:inline;width:45%;margin:1.5px}.itemInfo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(4){float:right;display:inline;width:50%;font-weight:700;margin:1.5px 0 1.5px 0%;text-align:end}}@media (min-width: 350px) and (max-width: 376px){.itemInfo[_ngcontent-%COMP%]{width:100%;padding-top:5px;padding-bottom:5px;font-size:.32cm}.itemInfo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1){float:left;display:block;width:100%;margin:1.5px}.itemInfo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2){float:left;display:block;width:100%;margin:1.5px}.itemInfo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(3){float:left;display:inline;width:45%;margin:1.5px}.itemInfo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(4){float:right;display:inline;width:50%;font-weight:700;margin:1.5px 0 1.5px 0%;text-align:end}}@media (min-width: 750px) and (max-width: 1000px) and (min-height: 1001px) and (max-height: 1025px){.itemInfo[_ngcontent-%COMP%]{width:100%;padding-top:5px;padding-bottom:5px;font-size:.6cm}.itemInfo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1){float:left;display:block;width:100%;margin:1.5px}.itemInfo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2){float:left;display:block;width:100%;margin:1.5px}.itemInfo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(3){float:left;display:inline;width:45%;margin:1.5px}.itemInfo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(4){float:right;display:inline;width:50%;font-weight:700;margin:1.5px 0 1.5px 0%;text-align:end}}@media (min-width: 800px) and (max-width: 1025px) and (min-height: 1001px) and (max-height: 1367px){.itemInfo[_ngcontent-%COMP%]{width:100%;padding-top:5px;padding-bottom:5px;font-size:.6cm}.itemInfo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1){float:left;display:block;width:100%;margin:1.5px}.itemInfo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2){float:left;display:block;width:100%;margin:1.5px}.itemInfo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(3){float:left;display:inline;width:45%;margin:1.5px}.itemInfo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(4){float:right;display:inline;width:50%;font-weight:700;margin:1.5px 0 1.5px 0%;text-align:end}}",
            ],
          })),
          i
        );
      })();
      var w = s(3329),
        v = s(8675),
        y = s(4004),
        b = s(3805),
        Z = s(3238),
        A = s(4859),
        T = s(4144),
        M = s(9549);
      const k = ["valuesinput"];
      function E(i, d) {
        if (
          (1 & i &&
            (t.TgZ(0, "mat-option", 19, 20)(2, "span"),
            t._uU(3),
            t.qZA(),
            t._uU(4, " | "),
            t.TgZ(5, "small"),
            t._uU(6),
            t.qZA()()),
          2 & i)
        ) {
          const n = d.$implicit;
          t.Q6J("value", null == n ? null : n.cardcode),
            t.xp6(3),
            t.Oqu(null == n ? null : n.cardcode),
            t.xp6(3),
            t.hij(" ", null == n ? null : n.cardname, "");
        }
      }
      function U(i, d) {
        if (1 & i) {
          const n = t.EpF();
          t.TgZ(0, "ion-item", 21)(1, "ion-avatar", 0),
            t._UZ(2, "img", 22),
            t.qZA(),
            t.TgZ(3, "ion-col", 23)(4, "ion-row", 24)(5, "p", 25),
            t._uU(6),
            t.qZA(),
            t.TgZ(7, "p", 26),
            t._uU(8),
            t.qZA()(),
            t.TgZ(9, "ion-row", 27)(10, "p", 28),
            t._uU(11, "Quantity: "),
            t.qZA(),
            t.TgZ(12, "ion-input", 29, 30),
            t.NdJ("change", function (a) {
              const g = t.CHM(n).$implicit,
                m = t.MAs(13),
                h = t.oxw();
              return t.KtG(h.total(a, m.value, g.itemcode));
            }),
            t.qZA()()()();
        }
        if (2 & i) {
          const n = d.$implicit,
            e = t.oxw();
          t.xp6(2),
            t.s9C(
              "src",
              n.image ? e.BASE_SERVERS + n.image : e.imgDefault,
              t.LSH,
            ),
            t.xp6(4),
            t.hij(" ", n.itemname, ""),
            t.xp6(2),
            t.Oqu(n.itemcode),
            t.xp6(4),
            t.s9C("value", n.quantity);
        }
      }
      function S(i, d) {
        if (
          (1 & i &&
            (t.TgZ(0, "ion-item")(1, "ion-label"),
            t._uU(2),
            t.qZA(),
            t._UZ(3, "ion-radio", 36),
            t.qZA()),
          2 & i)
        ) {
          const n = d.$implicit;
          t.xp6(2), t.Oqu(n.whsname), t.xp6(1), t.s9C("value", n.whscode);
        }
      }
      function J(i, d) {
        if (1 & i) {
          const n = t.EpF();
          t.TgZ(0, "ion-content")(1, "ion-toolbar")(2, "ion-title"),
            t._uU(3, "Ch\u1ecdn kho c\u1ea7n xu\u1ea5t"),
            t.qZA()(),
            t.TgZ(4, "ion-list", 31)(5, "ion-radio-group", 32, 33),
            t.YNc(7, S, 4, 2, "ion-item", 34),
            t.qZA()(),
            t.TgZ(8, "ion-button", 35),
            t.NdJ("click", function () {
              t.CHM(n);
              const a = t.MAs(6),
                r = t.oxw();
              return t.KtG(r.save(a.value));
            }),
            t._uU(9, " L\u01b0u "),
            t.qZA()();
        }
        if (2 & i) {
          const n = t.oxw();
          t.xp6(7),
            t.Q6J("ngForOf", null == n.warehouse ? null : n.warehouse.data);
        }
      }
      const q = [
        {
          path: "",
          component: (() => {
            class i {
              constructor(n, e, a, r, g, m, h) {
                (this.activatedRoute = n),
                  (this.modalCtrl = e),
                  (this._data = a),
                  (this.navCtrl = r),
                  (this.alertController = g),
                  (this.formBuilder = m),
                  (this.authService = h),
                  (this.headerMenu = ""),
                  (this.const_data = []),
                  (this.const_bp = {}),
                  (this.currentUser = {}),
                  (this.quantity = 1),
                  (this.handlerMessage = ""),
                  (this.roleMessage = ""),
                  (this.Loading = !0),
                  (this.warehouse = []),
                  (this.API_WAREHOUSE = "/warehouse"),
                  (this.API_ISSUE = "/issue"),
                  (this.API_BP = "/business"),
                  (this.BASE_SERVERS = _.r.BASE_SERVER + "/"),
                  (this.imgDefault =
                    "../../../../assets/images/imgdefault.jpeg"),
                  (this.myControlCardCode = new l.NI(""));
              }
              ngOnInit() {
                (this.currentUser = this.authService.getParseTokenUser()),
                  this.loaddata_bp(),
                  this.createForm(),
                  (this.headerMenu =
                    this.activatedRoute.snapshot.data.some_date),
                  (this.const_data = []),
                  this.loadData();
              }
              createForm() {
                (this.formGroup = this.formBuilder.group({
                  cardcode: [null],
                  cardname: [null],
                })),
                  this.formGroup.controls.cardname.disable();
              }
              loadData() {
                (this.Loading = !1),
                  this._data
                    .get(
                      UrlConstants.BASE_SERVER +
                        this.currentUser.ip +
                        this.API_WAREHOUSE,
                    )
                    .subscribe(
                      (n) => {
                        (this.warehouse = n || []), (this.Loading = !0);
                      },
                      (n) => {
                        (this.Loading = !0), console.log(n);
                      },
                    );
              }
              loaddata_bp() {
                (this.Loading = !1),
                  this._data
                    .get(
                      UrlConstants.BASE_SERVER +
                        this.currentUser.ip +
                        this.API_BP,
                    )
                    .subscribe(
                      (n) => {
                        this.setDataBP(n || []), (this.Loading = !0);
                      },
                      (n) => {
                        (this.Loading = !0), console.log(n);
                      },
                    );
              }
              setDataBP(n) {
                (this.const_bp = n), this.autocompateCardCode();
              }
              openModal() {
                return (0, f.mG)(this, void 0, void 0, function* () {
                  const n = yield this.modalCtrl.create({
                    component: I,
                    componentProps: { data: this.const_data },
                    backdropDismiss: !1,
                  });
                  n.present();
                  const { data: e, role: a } = yield n.onWillDismiss();
                  "confirm" === a && (this.const_data = e);
                });
              }
              total(n, e, a) {
                this.const_data.forEach((r) => {
                  r.itemcode === a && (r.quantity = Number(e));
                });
              }
              cancel_1() {
                return this.modalCtrl.dismiss(null, "cancel");
              }
              presentAlert() {
                return (0, f.mG)(this, void 0, void 0, function* () {
                  const n = yield this.alertController.create({
                    header: "Save Data",
                    buttons: [
                      {
                        text: "Cancel",
                        role: "cancel",
                        handler: () => {
                          this.handlerMessage = "No";
                        },
                      },
                      {
                        text: "OK",
                        role: "confirm",
                        handler: () => {
                          this.handlerMessage = "Yes";
                        },
                      },
                    ],
                  });
                  yield n.present();
                  const { role: e } = yield n.onDidDismiss();
                  this.roleMessage = `Dismissed with role: ${e}`;
                });
              }
              save(n) {
                var e;
                return (
                  (e = {
                    whscode: n,
                    cardcode: this.myControlCardCode.value,
                    cardname: this.formGroup.getRawValue().cardname,
                    issuedetails: this.const_data,
                  }),
                  this._data
                    .post(
                      UrlConstants.BASE_SERVER +
                        this.currentUser.ip +
                        this.API_ISSUE,
                      e,
                    )
                    .subscribe((a) => {
                      this._data.showSaveSuccess();
                    }),
                  (this.const_data = []),
                  this.formGroup.reset(),
                  this.modal.dismiss(this.const_data, "confirm")
                );
              }
              openHistoryItem() {
                this.navCtrl.navigateForward([w.Q_.issueHistory]);
              }
              autocompateCardCode() {
                this.filteredOptionsCardCode =
                  this.myControlCardCode.valueChanges.pipe(
                    (0, v.O)(""),
                    (0, y.U)((n) =>
                      n ? this._filterCardCode(n) : this.const_bp.data.slice(),
                    ),
                  );
              }
              _filterCardCode(n) {
                const e = n.toLowerCase();
                return this.const_bp.data.filter((a) =>
                  a.cardname.toLowerCase().includes(e),
                );
              }
              onSelectionChange(n) {
                const e = this.const_bp.data.find(
                  (a) => a.cardcode === n.option.value,
                );
                this.formGroup.controls.cardname.setValue(e?.cardname),
                  this.formGroup.controls.cardname.disable();
              }
            }
            return (
              (i.ɵfac = function (n) {
                return new (n || i)(
                  t.Y36(u.gz),
                  t.Y36(o.IN),
                  t.Y36(C.D),
                  t.Y36(o.SH),
                  t.Y36(o.Br),
                  t.Y36(l.qu),
                  t.Y36(P.e),
                );
              }),
              (i.ɵcmp = t.Xpm({
                type: i,
                selectors: [["app-issue"]],
                viewQuery: function (n, e) {
                  if ((1 & n && (t.Gf(o.ki, 5), t.Gf(k, 5)), 2 & n)) {
                    let a;
                    t.iGM((a = t.CRH())) && (e.modal = a.first),
                      t.iGM((a = t.CRH())) && (e.valuesinput = a.first);
                  }
                },
                decls: 33,
                vars: 8,
                consts: [
                  ["slot", "start"],
                  ["slot", "primary"],
                  ["color", "danger", 3, "click"],
                  ["name", "reader-outline"],
                  ["color", "danger", "id", "open-modal-item", 3, "click"],
                  ["slot", "icon-only", "name", "add-outline"],
                  ["id", "vendor-form", 1, "form", 3, "formGroup"],
                  ["appearance", "fill", "id", "vendor-option", 1, "w-100"],
                  [
                    "type",
                    "text",
                    "placeholder",
                    "M\xe3",
                    "aria-label",
                    "Number",
                    "matInput",
                    "",
                    "formControlName",
                    "cardcode",
                    3,
                    "formControl",
                    "matAutocomplete",
                  ],
                  [3, "optionSelected"],
                  ["auto", "matAutocomplete"],
                  [3, "value", 4, "ngFor", "ngForOf"],
                  [1, "w-100"],
                  ["matInput", "", "formControlName", "cardname"],
                  [1, "item"],
                  [
                    "style",
                    "--border-color: transparent",
                    4,
                    "ngFor",
                    "ngForOf",
                  ],
                  [1, "btn"],
                  [
                    "id",
                    "open-modal",
                    "shape",
                    "round",
                    "mat-raised-button",
                    "",
                    "color",
                    "accent",
                    1,
                    "btn-save",
                  ],
                  ["trigger", "open-modal"],
                  [3, "value"],
                  ["valuesinput", ""],
                  [2, "--border-color", "transparent"],
                  [3, "src"],
                  [2, "width", "100%"],
                  [
                    1,
                    "itemCode",
                    2,
                    "width",
                    "100%",
                    "padding-bottom",
                    "0",
                    "margin-top",
                    "12px",
                  ],
                  [
                    2,
                    "float",
                    "left",
                    "display",
                    "inline",
                    "width",
                    "50%",
                    "text-align",
                    "start",
                    "margin-top",
                    "5px",
                    "margin-bottom",
                    "5px",
                  ],
                  [
                    2,
                    "float",
                    "right",
                    "display",
                    "inline",
                    "width",
                    "50%",
                    "text-align",
                    "end",
                    "margin-top",
                    "5px",
                    "margin-bottom",
                    "5px",
                  ],
                  [1, "itemQuantity"],
                  [1, "flex-1", "text-left", 2, "margin-top", "5px"],
                  [
                    "type",
                    "number",
                    "id",
                    "quantity",
                    2,
                    "--padding-top",
                    "3px",
                    "--padding-start",
                    "10px",
                    3,
                    "value",
                    "change",
                  ],
                  ["quantity", ""],
                  [
                    1,
                    "wearhouse",
                    2,
                    "position",
                    "fixed",
                    "top",
                    "30px",
                    "bottom",
                    "35px",
                    "overflow-y",
                    "scroll",
                    "width",
                    "100%",
                  ],
                  ["value", "strawberries"],
                  ["whscode", ""],
                  [4, "ngFor", "ngForOf"],
                  [
                    2,
                    "position",
                    "fixed",
                    "bottom",
                    "-3px",
                    "width",
                    "100%",
                    3,
                    "click",
                  ],
                  ["slot", "end", 3, "value"],
                ],
                template: function (n, e) {
                  if (
                    (1 & n &&
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
                      t.TgZ(6, "ion-buttons", 1)(7, "ion-buttons", 1)(
                        8,
                        "ion-button",
                        2,
                      ),
                      t.NdJ("click", function () {
                        return e.openHistoryItem();
                      }),
                      t._UZ(9, "ion-icon", 3),
                      t.qZA()(),
                      t.TgZ(10, "ion-button", 4),
                      t.NdJ("click", function () {
                        return e.openModal();
                      }),
                      t._UZ(11, "ion-icon", 5),
                      t.qZA()()()(),
                      t.TgZ(12, "ion-content")(13, "form", 6)(
                        14,
                        "mat-form-field",
                        7,
                      )(15, "mat-label"),
                      t._uU(16, "M\xe3"),
                      t.qZA(),
                      t._UZ(17, "input", 8),
                      t.TgZ(18, "mat-autocomplete", 9, 10),
                      t.NdJ("optionSelected", function (r) {
                        return e.onSelectionChange(r);
                      }),
                      t.YNc(20, E, 7, 3, "mat-option", 11),
                      t.ALo(21, "async"),
                      t.qZA()(),
                      t.TgZ(22, "mat-form-field", 12)(23, "mat-label"),
                      t._uU(24, "T\xean"),
                      t.qZA(),
                      t._UZ(25, "input", 13),
                      t.qZA()(),
                      t.TgZ(26, "ion-list", 14),
                      t.YNc(27, U, 14, 4, "ion-item", 15),
                      t.qZA(),
                      t.TgZ(28, "ion-footer", 16)(29, "button", 17),
                      t._uU(30, "L\u01b0u"),
                      t.qZA()(),
                      t.TgZ(31, "ion-modal", 18),
                      t.YNc(32, J, 10, 1, "ng-template"),
                      t.qZA()()),
                    2 & n)
                  ) {
                    const a = t.MAs(19);
                    t.xp6(5),
                      t.Oqu(e.headerMenu),
                      t.xp6(8),
                      t.Q6J("formGroup", e.formGroup),
                      t.xp6(4),
                      t.Q6J("formControl", e.myControlCardCode)(
                        "matAutocomplete",
                        a,
                      ),
                      t.xp6(3),
                      t.Q6J("ngForOf", t.lcZ(21, 6, e.filteredOptionsCardCode)),
                      t.xp6(7),
                      t.Q6J("ngForOf", e.const_data);
                  }
                },
                dependencies: [
                  p.sg,
                  l._Y,
                  l.Fj,
                  l.JJ,
                  l.JL,
                  o.BJ,
                  o.oU,
                  o.YG,
                  o.Sm,
                  o.wI,
                  o.W2,
                  o.fr,
                  o.Gu,
                  o.gu,
                  o.pK,
                  o.Ie,
                  o.Q$,
                  o.q_,
                  o.B7,
                  o.se,
                  o.Nd,
                  o.wd,
                  o.sr,
                  o.ki,
                  o.as,
                  o.U5,
                  o.QI,
                  o.cs,
                  b.XC,
                  Z.ey,
                  b.ZL,
                  A.lW,
                  T.Nt,
                  M.KE,
                  M.hX,
                  l.oH,
                  l.sg,
                  l.u,
                  p.Ov,
                ],
                styles: [
                  ".total[_ngcontent-%COMP%]{margin:100px 100px 10px;text-align:right}.tax[_ngcontent-%COMP%]{margin:8px 100px;text-align:right}.discount[_ngcontent-%COMP%]{margin:20px 100px 100px;text-align:right}.footer[_ngcontent-%COMP%]{font-weight:600}.display-flex-content[_ngcontent-%COMP%]{display:flex;flex-direction:row}.text-center[_ngcontent-%COMP%]{text-align:center}.text-left[_ngcontent-%COMP%]{text-align:left}.flex-2[_ngcontent-%COMP%]{float:right;background-color:#f000;z-index:10;position:relative;z-index:20;margin-top:-5px;text-align:end}.color-text[_ngcontent-%COMP%]{color:#000;font-size:14px}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--background: transparent}.bg[_ngcontent-%COMP%]{position:fixed;z-index:1;width:100%;height:100%;object-fit:cover}.item[_ngcontent-%COMP%]{position:relative;font-size:.4cm;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;inset:20px 0 50px;z-index:5;background:transparent}.item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--box-shadow: 0 0px 5px 5px rgba(234, 234, 234, .544)}.item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:last-child{padding-bottom:100px}.item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]::part(native){margin-top:5px;margin-left:2.5%;margin-bottom:5px;width:95%;background:rgba(255,255,255,.515);-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);border-radius:10px;box-shadow:0 0 5px 5px #f1f1f199}.item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]::part(native)   .item-inner[_ngcontent-%COMP%] {border:0;--border:0}.item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:36px;height:36px}ion-footer[_ngcontent-%COMP%]{position:fixed;bottom:0;height:50px;background:white}ion-footer[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{position:fixed;height:50px;width:100%;left:0%;right:0%;bottom:0;--border-radius: 0;--background:rgb(225, 220, 220);color:#ff6a2f}ion-footer[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]::part(native){background:rgb(225,220,220)}.logo_bg[_ngcontent-%COMP%]{position:fixed;z-index:1;width:50%;height:50%;inset:25%;object-fit:contain;opacity:.3}ion-modal[_ngcontent-%COMP%]{--height: 250px;--border-radius: 16px;--box-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--backdrop-filter: blur(10px);--margin-left: 2.5%;--margin-right: 2.5%;--width: 95%}ion-modal[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]::part(scroll){overflow:hidden}ion-modal[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:100%;margin-left:0%;--border-radius: 0;--background: #ececec;color:#ff915a;text-transform:none}ion-content[_ngcontent-%COMP%]   ion-modal[_ngcontent-%COMP%]::part(backdrop){background:rgb(218,222,228);opacity:1}ion-modal[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--box-shadow: 0 2px 10px 5px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--background: #f7f7f7;--color: rgb(255, 56, 56)}.btn-save[_ngcontent-%COMP%]{width:100%;height:100%;font-size:1.1em;font-weight:500;background:#f8b30f!important}.w-100[_ngcontent-%COMP%]{width:100%}",
                ],
              })),
              i
            );
          })(),
        },
        {
          path: "issue-detail/:id",
          loadChildren: () =>
            s
              .e(7111)
              .then(s.bind(s, 7111))
              .then((i) => i.IssueDetailPageModule),
        },
      ];
      let F = (() => {
        class i {}
        return (
          (i.ɵfac = function (n) {
            return new (n || i)();
          }),
          (i.ɵmod = t.oAB({ type: i })),
          (i.ɵinj = t.cJS({ imports: [u.Bz.forChild(q), u.Bz] })),
          i
        );
      })();
      var L = s(3189),
        B = s(5064);
      let G = (() => {
        class i {}
        return (
          (i.ɵfac = function (n) {
            return new (n || i)();
          }),
          (i.ɵmod = t.oAB({ type: i })),
          (i.ɵinj = t.cJS({ imports: [p.ez, l.u5, o.Pc, B.q, F, l.UX, L.h] })),
          i
        );
      })();
    },
  },
]);
