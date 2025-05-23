"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [9798],
  {
    9798: (H, x, r) => {
      r.r(x), r.d(x, { Tab2PageModule: () => D });
      var a = r(8779),
        u = r(6895),
        h = r(4006),
        T = r(581),
        f = r(9299),
        m = r(655),
        t = r(4650),
        _ = r(2468),
        C = r(4631),
        b = r(4377),
        P = r(3189);
      function A(e, c) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, "ion-item", 9),
            t.NdJ("click", function () {
              const s = t.CHM(n).$implicit,
                l = t.oxw();
              return t.KtG(l.addlist(s));
            }),
            t.TgZ(1, "ion-avatar", 0),
            t._UZ(2, "img", 10),
            t.qZA(),
            t.TgZ(3, "ion-col", 11)(4, "ion-col", 12),
            t._uU(5),
            t.qZA(),
            t.TgZ(6, "ion-col", 13),
            t._uU(7),
            t.ALo(8, "currency"),
            t.qZA()(),
            t._UZ(9, "ion-checkbox", 14),
            t.qZA();
        }
        if (2 & e) {
          const n = c.$implicit,
            o = t.oxw();
          t.xp6(2),
            t.s9C("src", o.BASE_SERVERS + n.image, t.LSH),
            t.xp6(3),
            t.hij(" ", n.itemname, " "),
            t.xp6(2),
            t.hij(" ", t.gM2(8, 4, n.price, "VND ", "symbol", "1.0"), " "),
            t.xp6(2),
            t.Q6J("checked", n.checked);
        }
      }
      let Z = (() => {
        class e {
          constructor(n, o, i, s) {
            (this.navCtrl = n),
              (this.modalCtrl = o),
              (this._data = i),
              (this.authService = s),
              (this.const_data = {}),
              (this.currentUser = {}),
              (this.checkedItems = []),
              (this.quantity = 1),
              (this.API = "/items"),
              (this.Loading = !0),
              (this.BASE_SERVERS = C.r.BASE_SERVER + "/");
          }
          ngOnInit() {
            (this.currentUser = this.authService.getParseTokenUser()),
              this.loadData(),
              (this.checkedItems = this.data);
          }
          openItem(n) {
            this.navCtrl.navigateForward(["tab2/pos-additems/pos-details", n]);
          }
          cancel() {
            return this.modalCtrl.dismiss(null, "cancel");
          }
          confirm() {
            this.modalCtrl.dismiss(this.checkedItems, "confirm");
          }
          loadData() {
            (this.Loading = !1),
              this._data
                .get(UrlConstants.BASE_SERVER + this.currentUser.ip + this.API)
                .subscribe(
                  (n) => {
                    (this.const_data = n || []),
                      this.addItemInList(n || []),
                      (this.Loading = !0);
                  },
                  (n) => {
                    (this.Loading = !0), console.log(n);
                  },
                );
          }
          addItemInList(n) {
            (this.const_data = n),
              n?.data.forEach((o) => {
                (o.checked = !1), (o.tax = 0);
              }),
              setTimeout(
                () =>
                  (0, m.mG)(this, void 0, void 0, function* () {
                    yield n?.data.forEach((o) => {
                      this.checkedItems.forEach((i) => {
                        i.itemcode === o.itemcode &&
                          ((o.checked = !0), (o.tax = 0));
                      });
                    });
                  }),
                1e3,
              );
          }
          addlist(n) {
            var o, i, s;
            const l = this.checkedItems.find((d) => d.itemcode === n?.itemcode),
              g = this.checkedItems.findIndex(
                (d) => d.itemcode === n?.itemcode,
              );
            null === (o = this.const_data) ||
              void 0 === o ||
              o.data.find((d) => d.itemcode === n?.itemcode),
              l?.itemcode.toLowerCase() !== n?.itemcode.toLowerCase()
                ? (this.checkedItems.push(n),
                  null === (i = this.const_data) ||
                    void 0 === i ||
                    i.data.forEach((d) => {
                      this.checkedItems.forEach((J) => {
                        J.itemcode === d.itemcode &&
                          ((d.checked = !0), (d.quantity = 1), (d.tax = 0));
                      });
                    }))
                : (this.checkedItems.splice(g, 1),
                  null === (s = this.const_data) ||
                    void 0 === s ||
                    s.data.forEach((d) => {
                      n.itemcode === d.itemcode &&
                        ((d.checked = !1), (d.quantity = 1), (d.tax = 0));
                    }));
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(
              t.Y36(a.SH),
              t.Y36(a.IN),
              t.Y36(_.D),
              t.Y36(b.e),
            );
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [["app-pos-additems"]],
            decls: 15,
            vars: 5,
            consts: [
              ["slot", "start"],
              ["color", "medium", 3, "click"],
              [2, "text-align", "center"],
              ["slot", "end"],
              [3, "click"],
              [1, "ion-padding"],
              ["lines", "none"],
              [
                "placeholder",
                "T\xecm ki\u1ebfm...",
                "animated",
                "true",
                3,
                "ngModel",
                "ngModelChange",
              ],
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
              ["alt", "", 3, "src"],
              [1, "itemInfo", 2, "width", "100%"],
              [2, "padding", "0", "font-size", "0.8em"],
              [
                2,
                "padding",
                "0",
                "text-align",
                "end",
                "margin-right",
                "0",
                "float",
                "right",
                "width",
                "50%",
                "font-size",
                "0.8em",
              ],
              ["slot", "end", 3, "checked"],
            ],
            template: function (n, o) {
              1 & n &&
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
                  return o.confirm();
                }),
                t._uU(9, "X\xe1c nh\u1eadn"),
                t.qZA()()()(),
                t.TgZ(10, "ion-content", 5)(11, "ion-list", 6)(
                  12,
                  "ion-searchbar",
                  7,
                ),
                t.NdJ("ngModelChange", function (s) {
                  return (o.filterTerm = s);
                }),
                t.qZA(),
                t.YNc(13, A, 10, 9, "ion-item", 8),
                t.ALo(14, "filter"),
                t.qZA()()),
                2 & n &&
                  (t.xp6(12),
                  t.Q6J("ngModel", o.filterTerm),
                  t.xp6(1),
                  t.Q6J(
                    "ngForOf",
                    t.xi3(
                      14,
                      2,
                      null == o.const_data ? null : o.const_data.data,
                      o.filterTerm,
                    ),
                  ));
            },
            dependencies: [
              a.BJ,
              a.YG,
              a.Sm,
              a.nz,
              a.wI,
              a.W2,
              a.Gu,
              a.Ie,
              a.q_,
              a.VI,
              a.wd,
              a.sr,
              a.w,
              a.j9,
              u.sg,
              h.JJ,
              h.On,
              u.H9,
              P.Z,
            ],
            styles: [
              ".display-flex-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;font-size:.4cm}.text-center[_ngcontent-%COMP%]{text-align:center}.text-left[_ngcontent-%COMP%]{text-align:left}ion-input[_ngcontent-%COMP%]{float:left;position:relative;width:50px;height:100%;margin-left:50px;margin-top:0;background-color:#f000;border:1px solid rgb(0,0,0);border-radius:3px;text-align:center}.flex-1[_ngcontent-%COMP%]{flex:2;text-align:center}.flex-2[_ngcontent-%COMP%]{flex:1;padding-left:80px}.color-text[_ngcontent-%COMP%]{color:#666;font-size:14px;width:100px}ion-checkbox[_ngcontent-%COMP%]{float:right;margin-left:0}",
            ],
          })),
          e
        );
      })();
      var M = r(8675),
        O = r(4004),
        w = r(5904),
        y = r(3546);
      const E = ["valuesinput"];
      function U(e, c) {
        if (
          (1 & e && (t.TgZ(0, "ion-select-option", 32), t._uU(1), t.qZA()),
          2 & e)
        ) {
          const n = c.$implicit;
          t.Q6J("value", n.whscode), t.xp6(1), t.hij(" ", n.whsname, "");
        }
      }
      function q(e, c) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, "mat-card", 10)(1, "ion-item")(2, "ion-col", 11)(
            3,
            "div",
            12,
          )(4, "ion-avatar", 13),
            t._UZ(5, "ion-img", 14),
            t.qZA(),
            t.TgZ(6, "div", 15)(7, "ion-row", 16)(8, "ion-col", 17),
            t._uU(9),
            t.qZA()(),
            t.TgZ(10, "ion-row", 18)(11, "ion-col")(12, "p", 19),
            t._uU(13, " S\u1ed1 l\u01b0\u1ee3ng:"),
            t.qZA(),
            t.TgZ(14, "ion-input", 20, 21),
            t.NdJ("change", function (i) {
              const l = t.CHM(n).$implicit,
                g = t.MAs(15),
                p = t.oxw();
              return t.KtG(p.total(i, g.value, l.itemcode));
            }),
            t.qZA()()(),
            t.TgZ(16, "ion-row", 18)(17, "p", 22),
            t._uU(18, " Gi\xe1:"),
            t.qZA(),
            t.TgZ(19, "ion-col", 23),
            t._uU(20),
            t.ALo(21, "currency"),
            t.qZA()()()(),
            t.TgZ(22, "ion-row", 24)(23, "ion-list", 25)(24, "ion-col", 26)(
              25,
              "p",
              27,
            ),
            t._uU(26, "Kho:"),
            t.qZA()(),
            t.TgZ(27, "ion-item", 28)(28, "ion-select", 29),
            t.NdJ("ionChange", function (i) {
              const l = t.CHM(n).$implicit,
                g = t.oxw();
              return t.KtG(g.changeWhsCode(i, l.itemcode));
            }),
            t.YNc(29, U, 2, 2, "ion-select-option", 30),
            t.qZA()(),
            t.TgZ(30, "ion-col", 31),
            t._uU(31),
            t.qZA()()()()()();
        }
        if (2 & e) {
          const n = c.$implicit,
            o = t.oxw();
          t.xp6(5),
            t.s9C("src", o.BASE_SERVERS + n.image),
            t.xp6(4),
            t.Oqu(n.itemname),
            t.xp6(5),
            t.s9C("value", null == n ? null : n.quantity),
            t.xp6(6),
            t.Oqu(
              t.gM2(21, 6, null == n ? null : n.price, "VND ", "symbol", "1.0"),
            ),
            t.xp6(9),
            t.Q6J("ngForOf", null == o.warehouse ? null : o.warehouse.data),
            t.xp6(2),
            t.Oqu(n.ton);
        }
      }
      function k(e, c) {
        if (
          (1 & e && (t.TgZ(0, "ion-select-option", 32), t._uU(1), t.qZA()),
          2 & e)
        ) {
          const n = c.$implicit;
          t.Q6J("value", n.cardname), t.xp6(1), t.hij(" ", n.cardname, " ");
        }
      }
      function I(e, c) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, "ion-content")(1, "ion-toolbar", 33)(2, "ion-title", 34),
            t._uU(3, "Thanh to\xe1n"),
            t.qZA(),
            t.TgZ(4, "ion-buttons", 35)(5, "ion-button", 36),
            t.NdJ("click", function () {
              t.CHM(n), t.oxw();
              const i = t.MAs(12);
              return t.KtG(i.dismiss());
            }),
            t._uU(6, "\u0110\xf3ng"),
            t.qZA()(),
            t.TgZ(7, "ion-buttons", 37)(8, "i", 38),
            t._uU(9, "T\u1ea3i l\u1ea1i"),
            t.qZA()()(),
            t.TgZ(10, "ion-label")(11, "ion-gird")(12, "ion-col", 39)(
              13,
              "ion-row",
              40,
            )(14, "ion-col", 41),
            t._uU(15, "T\xean"),
            t.qZA(),
            t.TgZ(16, "ion-select", 42, 43),
            t.YNc(18, k, 2, 2, "ion-select-option", 30),
            t.qZA()(),
            t.TgZ(19, "ion-row")(20, "ion-col", 44),
            t._uU(21, "Th\xe0nh ti\u1ec1n"),
            t.qZA(),
            t.TgZ(22, "ion-col", 17),
            t._uU(23),
            t.ALo(24, "currency"),
            t.qZA()(),
            t.TgZ(25, "ion-row")(26, "ion-col"),
            t._uU(27, "Gi\u1ea3m gi\xe1"),
            t.qZA(),
            t.TgZ(28, "ion-col")(29, "p", 45),
            t._uU(30, "%"),
            t.qZA(),
            t.TgZ(31, "ion-input", 46),
            t.NdJ("change", function (i) {
              t.CHM(n);
              const s = t.oxw();
              return t.KtG(s.discountTotal(i));
            }),
            t.qZA()()(),
            t.TgZ(32, "ion-row")(33, "ion-col", 44),
            t._uU(34, "Ti\u1ec1n kh\xe1ch ph\u1ea3i tr\u1ea3"),
            t.qZA(),
            t.TgZ(35, "ion-col", 17),
            t._uU(36),
            t.ALo(37, "currency"),
            t.qZA()(),
            t.TgZ(38, "ion-row")(39, "ion-col"),
            t._uU(40, "Ti\u1ec1n kh\xe1ch tr\u1ea3"),
            t.qZA(),
            t.TgZ(41, "ion-col")(42, "p", 47),
            t._uU(43, "VND"),
            t.qZA(),
            t.TgZ(44, "ion-input", 48),
            t.NdJ("ngModelChange", function (i) {
              t.CHM(n);
              const s = t.oxw();
              return t.KtG((s.product_price = i));
            })("change", function (i) {
              t.CHM(n);
              const s = t.oxw();
              return t.KtG(s.CommaFormatted(i));
            })("change", function () {
              t.CHM(n);
              const i = t.oxw();
              return t.KtG(i.receiptTotal());
            }),
            t.qZA()()(),
            t.TgZ(45, "ion-row")(46, "ion-col", 44),
            t._uU(47, "Ti\u1ec1n tr\u1ea3 l\u1ea1i"),
            t.qZA(),
            t.TgZ(48, "ion-col", 17),
            t._uU(49),
            t.ALo(50, "currency"),
            t.qZA()()()(),
            t.TgZ(51, "ion-button", 49, 50),
            t.NdJ("click", function () {
              t.CHM(n);
              const i = t.MAs(17),
                s = t.oxw();
              return t.KtG(
                s.confirm(
                  "poscode.value",
                  i.value,
                  s.totalValues,
                  s.discount,
                  s.totalSum,
                  s.product_price,
                  s.send,
                ),
              );
            })("click", function () {
              t.CHM(n);
              const i = t.oxw();
              return t.KtG(i.downloadInvoice());
            }),
            t._UZ(53, "ion-icon", 51),
            t._uU(54, "\xa0"),
            t.TgZ(55, "strong"),
            t._uU(56, "In"),
            t.qZA()()()();
        }
        if (2 & e) {
          const n = t.oxw();
          t.xp6(18),
            t.Q6J("ngForOf", null == n.const_bp ? null : n.const_bp.data),
            t.xp6(5),
            t.Oqu(t.gM2(24, 5, n.totalValues, "VND ", "symbol", "1.0")),
            t.xp6(13),
            t.Oqu(t.gM2(37, 10, n.totalSum, "VND ", "symbol", "1.0")),
            t.xp6(8),
            t.Q6J("ngModel", n.product_price),
            t.xp6(5),
            t.Oqu(t.gM2(50, 15, n.send, "VND ", "symbol", "1.0"));
        }
      }
      function S(e, c) {
        if (
          (1 & e &&
            (t.TgZ(0, "ion-row", 67)(1, "ion-row", 68)(2, "span", 41),
            t._uU(3),
            t.qZA()(),
            t.TgZ(4, "ion-row", 41),
            t._UZ(5, "ion-col", 69),
            t.TgZ(6, "ion-col", 70),
            t._uU(7),
            t.qZA(),
            t.TgZ(8, "ion-col", 71),
            t._uU(9),
            t.ALo(10, "currency"),
            t.qZA()()()),
          2 & e)
        ) {
          const n = c.$implicit;
          t.xp6(3),
            t.hij("", n.itemname, " "),
            t.xp6(4),
            t.hij(" ", n.quantity, " "),
            t.xp6(2),
            t.hij(
              " ",
              t.gM2(10, 3, null == n ? null : n.price, "VND ", "symbol", "1.0"),
              " ",
            );
        }
      }
      function N(e, c) {
        if (
          (1 & e &&
            (t.TgZ(0, "ion-grid", 52)(1, "ion-row", 53)(2, "span", 41),
            t._uU(3, "HO\xc1 \u0110\u01a0N"),
            t.qZA(),
            t.TgZ(4, "span", 41)(5, "b"),
            t._uU(6, "Ng\xe0y t\u1ea1o:"),
            t.qZA(),
            t._uU(7),
            t.ALo(8, "date"),
            t.qZA()(),
            t.TgZ(9, "ion-row", 54)(10, "span", 55)(11, "b"),
            t._uU(12, "T\xean:"),
            t.qZA(),
            t._uU(13),
            t.qZA(),
            t._UZ(14, "br"),
            t.TgZ(15, "span", 55)(16, "b"),
            t._uU(17, "\u0110\u1ecba ch\u1ec9:"),
            t.qZA(),
            t._uU(18),
            t.qZA(),
            t._UZ(19, "br"),
            t.TgZ(20, "span", 55)(21, "b"),
            t._uU(22, "Ghi ch\xfa:"),
            t.qZA(),
            t._uU(23),
            t.qZA(),
            t._UZ(24, "br"),
            t.TgZ(25, "span", 55)(26, "b"),
            t._uU(27, "Ho\xe1 \u0111\u01a1n:"),
            t.qZA(),
            t._uU(28),
            t.qZA(),
            t._UZ(29, "br"),
            t.qZA(),
            t.TgZ(30, "ion-row", 56)(31, "ion-col", 57)(32, "div", 41),
            t._uU(33, "Ph\u01b0\u01a1ng th\u1ee9c thanh to\xe1n:"),
            t.qZA()(),
            t.TgZ(34, "ion-col", 58),
            t._uU(35, "TM/CK"),
            t.qZA()(),
            t.TgZ(36, "ion-row", 59)(37, "ion-col", 60),
            t._uU(38, "S\u1ea3n ph\u1ea9m"),
            t.qZA(),
            t.TgZ(39, "ion-col", 61),
            t._uU(40, "S\u1ed1 l\u01b0\u1ee3ng"),
            t.qZA(),
            t.TgZ(41, "ion-col", 62),
            t._uU(42, "Gi\xe1"),
            t.qZA()(),
            t.YNc(43, S, 11, 8, "ion-row", 63),
            t.TgZ(44, "ion-row")(45, "ion-col", 64),
            t._uU(46),
            t.ALo(47, "currency"),
            t.qZA()(),
            t.TgZ(48, "ion-row")(49, "ion-col", 64),
            t._uU(50),
            t.qZA()(),
            t.TgZ(51, "ion-row")(52, "ion-col", 64),
            t._uU(53),
            t.ALo(54, "currency"),
            t.qZA()(),
            t.TgZ(55, "p", 65),
            t._uU(56, "C\u1ea3m \u01a1n qu\xfd kh\xe1ch"),
            t.qZA(),
            t._UZ(57, "img", 66),
            t.qZA()),
          2 & e)
        ) {
          const n = t.oxw();
          t.xp6(7),
            t.hij(
              "\xa0",
              t.xi3(
                8,
                9,
                null == n.pos || null == n.pos.data
                  ? null
                  : n.pos.data.CreatedAt,
                "dd/MM/yyyy",
              ),
              "",
            ),
            t.xp6(6),
            t.hij(
              "\xa0 ",
              null == n.configsetting ? null : n.configsetting.company,
              " ",
            ),
            t.xp6(5),
            t.hij(
              "\xa0",
              null == n.configsetting ? null : n.configsetting.address,
              "",
            ),
            t.xp6(5),
            t.hij(
              "\xa0",
              null == n.pos || null == n.pos.data ? null : n.pos.data.cardname,
              "",
            ),
            t.xp6(5),
            t.hij(
              "\xa0",
              null == n.pos || null == n.pos.data ? null : n.pos.data.poscode,
              "",
            ),
            t.xp6(15),
            t.Q6J("ngForOf", n.const_data),
            t.xp6(3),
            t.hij(
              " Th\xe0nh ti\u1ec1n: ",
              t.gM2(47, 12, n.totalValues, "VND ", "symbol", "1.0"),
              " ",
            ),
            t.xp6(4),
            t.hij(" Gi\u1ea3m gi\xe1: ", n.discount, " % "),
            t.xp6(3),
            t.hij(
              " T\u1ed5ng ti\u1ec1n: ",
              t.gM2(54, 17, n.totalSum, "VND ", "symbol", "1.0"),
              " ",
            );
        }
      }
      let V = (() => {
        class e {
          constructor(n, o, i, s, l, g, p, d) {
            (this.modalCtrl = n),
              (this.route = o),
              (this.pdfGenerator = i),
              (this._data = s),
              (this.alertController = l),
              (this.formBuilder = g),
              (this.navControl = p),
              (this.authService = d),
              (this.message =
                "This modal example uses the modalController to present and dismiss modals."),
              (this.Loading = !0),
              (this.const_bp = {}),
              (this.API_BP = "/business"),
              (this.const_balance = {}),
              (this.configsetting = {}),
              (this.const_data = {}),
              (this.totalValues = 0),
              (this.totalSum = 0),
              (this.discount = 0),
              (this.quantity = 1),
              (this.paid = 0),
              (this.change = 0),
              (this.product_price = ""),
              (this.send = 0),
              (this.pos = {}),
              (this.API = "/pos"),
              (this.index_1 = 3),
              (this.API_Item = "/items"),
              (this.Item = {}),
              (this.warehouse = {}),
              (this.currentUser = {}),
              (this._nxt = {}),
              (this.API_WAREHOUSE = "/warehouse"),
              (this.API_NXT_WhsItem = "/viewnxt/whsitem"),
              (this.API_CONFIGSETTING = "/configsetting"),
              (this.myControlCardCode = new h.NI("")),
              (this.BASE_SERVERS = C.r.BASE_SERVER + "/"),
              (this.product = ""),
              (this.product_num = 0);
          }
          ngOnInit() {
            (this.currentUser = this.authService.getParseTokenUser()),
              (this.pos_details = []),
              this.loaddata_bp(),
              this.loadDataWarehouse(),
              this.loadDataConfigSettings();
          }
          loadDataWarehouse() {
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
          loadDataConfigSettings() {
            (this.Loading = !1),
              this._data
                .get(
                  UrlConstants.BASE_SERVER +
                    this.currentUser.ip +
                    this.API_CONFIGSETTING,
                )
                .subscribe(
                  (n) => {
                    (this.configsetting = n || []),
                      this.setValueConfigSettings(n || []),
                      (this.Loading = !0);
                  },
                  (n) => {
                    (this.Loading = !0), console.log(n);
                  },
                );
          }
          setValueConfigSettings(n) {
            this.configsetting = n?.data[0];
          }
          downloadInvoice() {
            (this.content = document.getElementById("PrintInvoice").innerHTML),
              this.pdfGenerator
                .fromData(this.content, {
                  documentSize: "A4",
                  type: "share",
                  fileName: "Order-Invoice.pdf",
                })
                .then((o) => {

                })
                .catch((o) => {

                });
          }
          confirm(n, o, i = 0, s = 0, l = 0, g, p = 0) {
            (this.const_data = {}),
              (this.const_data.poscode = "poscode"),
              (this.const_data.cardame = o),
              (this.const_data.total = i),
              (this.const_data.discount =
                null == this.discoutThanhToan ||
                null == this.discoutThanhToan ||
                "" == this.discoutThanhToan
                  ? 0
                  : Number(this.discoutThanhToan)),
              (this.const_data.doctotal = l),
              (this.const_data.customerpay = g),
              (this.const_data.refund = p),
              (this.const_data.type = "T"),
              (this.const_data.posDetails = this.pos_details),
              this._data
                .post(
                  UrlConstants.BASE_SERVER + this.currentUser.ip + this.API,
                  this.const_data,
                )
                .subscribe((d) => {
                  this._data.showSaveSuccess();
                }),
              this.modal.dismiss(this.name, "confirm"),
              (this.pos_details = []);
          }
          UpdateItem(n) {
            const o = +this.route.snapshot.params.id;
,
              this._data
                .put(
                  UrlConstants.BASE_SERVER +
                    this.currentUser.ip +
                    this.API_Item +
                    `/${o}`,
                  n,
                )
                .subscribe((s) => {
                  this._data.showUpdateSuccess(n.itemcode);
                });
          }
          createForm() {
            this.formGroup = this.formBuilder.group({
              poscode: [null],
              cardname: [null],
              docdate: [new Date()],
              total: [0],
              discount: [0],
              doctotal: [0],
              customerpay: [0],
              refund: [0],
            });
          }
          loaddata_bp() {
            (this.Loading = !1),
              this._data
                .get(
                  UrlConstants.BASE_SERVER + this.currentUser.ip + this.API_BP,
                )
                .subscribe(
                  (n) => {
                    this.getListBP(n || []),
                      (this.const_bp = n || []),
                      (this.Loading = !0);
                  },
                  (n) => {
                    (this.Loading = !0), console.log(n);
                  },
                );
          }
          autocompateCardCode() {
            this.filteredOptionsCardCode =
              this.myControlCardCode.valueChanges.pipe(
                (0, M.O)(""),
                (0, O.U)((n) =>
                  n ? this._filterCardCode(n) : this.const_bp.data.slice(),
                ),
              );
          }
          getListBP(n) {
            (this.const_bp = n), this.autocompateCardCode();
          }
          _filterCardCode(n) {
            const o = n.toLowerCase();
            return this.const_bp.data.filter((i) =>
              i.cardcode.toLowerCase().includes(o),
            );
          }
          onSelectionChange(n) {
            const o = this.const_bp.data.find(
              (s) => s.cardcode === n.option.value,
            );
            this.const_balance.data.find((s) => s.cardcode === n.option.value),
              this.formGroup.controls.cardname.setValue(o?.cardname);
          }
          presentAlert() {
            return (0, m.mG)(this, void 0, void 0, function* () {
              yield (yield this.alertController.create({
                header: "Notification",
                subHeader: "CardCode invalid !!",
                buttons: ["OK"],
              })).present();
            });
          }
          openModal() {
            return (0, m.mG)(this, void 0, void 0, function* () {
              const n = yield this.modalCtrl.create({
                component: Z,
                componentProps: { data: this.pos_details },
              });
              n.present();
              const { data: o, role: i } = yield n.onWillDismiss();
              "confirm" === i && (this.pos_details = o),
                (this.totalValues = 0),
                this.pos_details.forEach((s) => {
                  (this.totalValues =
                    this.totalValues + this.quantity * s.price),
                    this.discountTotal(0);
                });
            });
          }
          total(n, o, i) {
            (this.totalValues = 0),
              this.pos_details.forEach((s) => {
                s.itemcode === i &&
                  ((s.quantity = Number(o)),
                  this.discountTotal(0),
                  this.discountTotal("")),
                  (this.totalValues = Number(
                    this.totalValues + s.quantity * s.price,
                  )),
                  (this.totalSum = this.totalValues);
              });
          }
          changeWhsCode(n, o) {
            this._data
              .post(
                UrlConstants.BASE_SERVER +
                  this.currentUser.ip +
                  this.API_NXT_WhsItem,
                { WhsCode: n.srcElement.value, ItemCode: o },
              )
              .subscribe((i) => {
                this.setValueNXT(i || []);
              }),
              setTimeout(() => {
                this.pos_details.forEach((i) => {
                  i.itemcode === o &&
                    ((i.whscode = n.srcElement.value),
                    (i.ton =
                      "" == this._nxt.quantity ||
                      null == this._nxt.quantity ||
                      null == this._nxt.quantity
                        ? 0
                        : this._nxt.quantity),
                    (i.class =
                      "" != this._nxt.quantity ||
                      null != this._nxt.quantity ||
                      null != this._nxt.quantity
                        ? Number(this._nxt.quantity) <= 0
                          ? "card-iten-darkgray"
                          : "card-iten-white"
                        : "card-iten-darkgray"));
                });
              }, 1e3);
          }
          setValueNXT(n) {
            this._nxt = n?.data;
          }
          CommaFormatted(n) {
            (n.which >= 37 && n.which <= 40) ||
              (this.product_price &&
                ((this.product_price = String(this.product_price)),
                (this.product_price = this.product_price
                  .replace(/\D/g, "")
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ","))));
          }
          numberCheck(n) {
            return !("e" === n.key || "+" === n.key || "-" === n.key);
          }
          receiptTotal() {
            (this.product = this.product_price.replace(/,/g, "")),
              (this.product_num = Number(this.product)),
              0 == this.product_num
                ? (this.totalSum = this.totalValues)
                : this.pos_details.forEach((n) => {
                    this.send = this.product_num - this.totalSum;
                  });
          }
          discountTotal(n) {
            var o;
            (this.discoutThanhToan =
              null === (o = n?.srcElement) || void 0 === o
                ? void 0
                : o.value.toString()),
              0 == n
                ? (this.totalSum = this.totalValues)
                : this.pos_details.forEach((i) => {
                    this.totalSum =
                      this.totalValues -
                      this.totalValues * (n.srcElement.value / 100);
                  });
          }
          changeMoney(n) {
            this.pos_details.forEach((o) => {
              this.change = n.srcElement.value - this.totalSum;
            });
          }
          onWillDismiss(n) {
            "confirm" === n.detail.role &&
              (this.message = `Hello, ${n.detail.data}!`);
          }
          cancelCategories() {
            this.modal.dismiss(null, "cancel");
          }
          openItem() {
            this.navControl.navigateForward(["centers/tabs/history"]);
          }
          btnCreate() {
            this.index = this.index_1++ - 1;
          }
          testPrint() {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(
              t.Y36(a.IN),
              t.Y36(f.gz),
              t.Y36(w.r),
              t.Y36(_.D),
              t.Y36(a.Br),
              t.Y36(h.qu),
              t.Y36(a.SH),
              t.Y36(b.e),
            );
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [["app-pos"]],
            viewQuery: function (n, o) {
              if ((1 & n && (t.Gf(a.ki, 5), t.Gf(E, 5)), 2 & n)) {
                let i;
                t.iGM((i = t.CRH())) && (o.modal = i.first),
                  t.iGM((i = t.CRH())) && (o.valuesinput = i.first);
              }
            },
            decls: 15,
            vars: 2,
            consts: [
              ["alt", "", "src", "../assets/images/POS.png", 3, "click"],
              [
                "slot",
                "end",
                2,
                "float",
                "right",
                "--background",
                "transparent",
                3,
                "click",
              ],
              [
                "name",
                "add-outline",
                2,
                "color",
                "rgb(255, 84, 32)",
                "font-weight",
                "bold",
              ],
              ["alt", "", "src", "../assets/images/FTI-FULL.png"],
              [
                2,
                "overflow-y",
                "scroll",
                "background",
                "transparent",
                "margin-top",
                "60px",
              ],
              ["class", "example-card", 4, "ngFor", "ngForOf"],
              [
                "id",
                "open-modal-pos",
                "expand",
                "block",
                2,
                "position",
                "fixed",
                "bottom",
                "0",
                "box-shadow",
                "0 -10px 10px 5px rgba(228, 227, 227, 0.192)",
                "--color",
                "black",
              ],
              [
                "trigger",
                "open-modal-pos",
                1,
                "payment",
                2,
                "--height",
                "400px !important",
              ],
              ["modal", ""],
              [
                "id",
                "PrintInvoice",
                "class",
                "invoice-box",
                "style",
                "width: 100%;",
                4,
                "ngIf",
              ],
              [1, "example-card"],
              [2, "width", "100%", "background", "rgba(255, 0, 0, 0)"],
              [1, "card-div-v1"],
              [1, "card-div-v1-2"],
              [3, "src"],
              [1, "card-div-v1-1"],
              [1, "card-div-v1-1-1", 2, "width", "100%"],
              [2, "width", "50%", "text-align", "end"],
              [1, "card-div-v1-1-2"],
              [
                1,
                "card-div-v1-1-2-1",
                2,
                "width",
                "40%",
                "display",
                "inline",
                "text-align",
                "right",
                "font-size",
                "0.45cm",
              ],
              [
                "type",
                "number",
                "id",
                "quantity",
                1,
                "card-div-v1-1-2-2",
                2,
                "width",
                "60%",
                "float",
                "left",
                "background",
                "rgba(135, 91, 91, 0)",
                "height",
                "20px",
                "--padding",
                "0",
                3,
                "value",
                "change",
              ],
              ["quantity", ""],
              [
                1,
                "card-div-v1-1-2-1",
                2,
                "width",
                "40%",
                "display",
                "inline",
                "float",
                "left",
                "font-size",
                "0.45cm",
              ],
              [1, "card-div-v1-1-2-2", 2, "text-align", "end"],
              [2, "height", "60px"],
              ["id", "selectOptionWhsCode"],
              ["id", "item-left", 2, "width", "25%", "padding-top", "16px"],
              [2, "float", "left"],
              ["id", "item-right"],
              ["placeholder", "Kho", 2, "width", "100%", 3, "ionChange"],
              [3, "value", 4, "ngFor", "ngForOf"],
              [
                2,
                "width",
                "25%",
                "text-align",
                "end",
                "font-size",
                "1em",
                "padding-top",
                "15px",
                "font-weight",
                "bold",
              ],
              [3, "value"],
              [2, "text-align", "center"],
              [2, "color", "black"],
              ["slot", "start"],
              [
                2,
                "margin-left",
                "15px",
                "color",
                "rgb(194, 194, 194)",
                "font-weight",
                "bold",
                "--background",
                "transparent",
                3,
                "click",
              ],
              ["slot", "end"],
              [
                2,
                "margin-right",
                "15px",
                "color",
                "rgb(33, 174, 255)",
                "font-weight",
                "bold",
                "--background",
                "transparent",
              ],
              [2, "margin-left", "-3px"],
              [2, "height", "29px"],
              [2, "width", "100%"],
              ["id", "cardname", "value", ""],
              ["cardname", ""],
              [2, "width", "50%"],
              [
                "type",
                "number",
                2,
                "width",
                "15%",
                "display",
                "inline",
                "float",
                "right",
                "text-align",
                "end",
              ],
              [
                2,
                "text-align",
                "end",
                "width",
                "80%",
                "float",
                "right",
                "background",
                "rgba(255, 0, 0, 0)",
                "height",
                "17px",
                "--padding",
                "0",
                3,
                "change",
              ],
              [
                2,
                "width",
                "23%",
                "float",
                "left",
                "text-align",
                "end",
                "font-size",
                "0.4cm",
              ],
              [
                "name",
                "product_price",
                "autocomplete",
                "off",
                "inputmode",
                "numeric",
                2,
                "width",
                "77%",
                "float",
                "right",
                "background",
                "rgba(255, 0, 0, 0)",
                "height",
                "17px",
                "--padding",
                "0",
                "text-align",
                "end",
                3,
                "ngModel",
                "ngModelChange",
                "change",
              ],
              [
                2,
                "position",
                "absolute",
                "bottom",
                "0",
                "color",
                "black",
                3,
                "click",
              ],
              ["btn", ""],
              ["name", "print"],
              ["id", "PrintInvoice", 1, "invoice-box", 2, "width", "100%"],
              [
                2,
                "width",
                "100%",
                "text-align",
                "center",
                "padding-bottom",
                "20px",
              ],
              [2, "border-bottom", "1px dashed black"],
              [2, "font-size", "1em", "padding-bottom", "5px", "width", "100%"],
              [2, "margin-top", "5px"],
              [
                "size",
                "auto",
                2,
                "float",
                "left",
                "padding-left",
                "0",
                "padding-right",
                "0",
              ],
              [2, "float", "right", "text-align", "end"],
              [
                2,
                "margin-top",
                "10px",
                "margin-bottom",
                "10px",
                "border-bottom",
                "0px dotted rgb(71, 71, 71)",
              ],
              [
                2,
                "width",
                "13.4%",
                "padding",
                "0px",
                "vertical-align",
                "top",
                "font-weight",
                "bold",
              ],
              [
                2,
                "width",
                "43.4%",
                "padding",
                "0px",
                "vertical-align",
                "top",
                "text-align",
                "center",
                "font-weight",
                "bold",
              ],
              [
                2,
                "width",
                "43.4%",
                "padding",
                "0px",
                "vertical-align",
                "top",
                "text-align",
                "end",
                "font-weight",
                "bold",
              ],
              [
                "style",
                "border-bottom:1px dashed black; margin-bottom:10px",
                4,
                "ngFor",
                "ngForOf",
              ],
              [
                2,
                "padding",
                "0px",
                "vertical-align",
                "top",
                "text-align",
                "right",
                "font-weight",
                "bold",
              ],
              [
                2,
                "text-align",
                "center",
                "font-style",
                "italic",
                "padding-top",
                "20px",
              ],
              [
                "alt",
                "",
                "src",
                "../assets/images/QR.png",
                2,
                "margin-left",
                "auto",
                "margin-right",
                "auto",
                "display",
                "block",
                "justify-content",
                "center",
                "height",
                "100px",
                "width",
                "100px",
                "object-fit",
                "contain",
              ],
              [2, "border-bottom", "1px dashed black", "margin-bottom", "10px"],
              [2, "max-width", "100%"],
              [2, "width", "13.4%", "padding", "5px", "vertical-align", "top"],
              [
                2,
                "width",
                "50.4%",
                "padding",
                "0px",
                "vertical-align",
                "top",
                "text-align",
                "center",
              ],
              [
                2,
                "width",
                "43.4%",
                "padding",
                "0px",
                "vertical-align",
                "top",
                "text-align",
                "end",
              ],
            ],
            template: function (n, o) {
              1 & n &&
                (t.TgZ(0, "ion-header")(1, "ion-toolbar")(2, "img", 0),
                t.NdJ("click", function () {
                  return o.openItem();
                }),
                t.qZA(),
                t.TgZ(3, "ion-button", 1),
                t.NdJ("click", function () {
                  return o.openModal();
                }),
                t._UZ(4, "ion-icon", 2),
                t.qZA()()(),
                t.TgZ(5, "ion-content"),
                t._UZ(6, "img", 3),
                t.TgZ(7, "ion-list", 4),
                t.YNc(8, q, 32, 11, "mat-card", 5),
                t.qZA(),
                t.TgZ(9, "ion-button", 6),
                t._uU(10, " Thanh to\xe1n "),
                t.qZA(),
                t.TgZ(11, "ion-modal", 7, 8),
                t.YNc(13, I, 57, 20, "ng-template"),
                t.qZA()(),
                t.YNc(14, N, 58, 22, "ion-grid", 9)),
                2 & n &&
                  (t.xp6(8),
                  t.Q6J("ngForOf", o.pos_details),
                  t.xp6(6),
                  t.Q6J("ngIf", !0));
            },
            dependencies: [
              a.BJ,
              a.YG,
              a.Sm,
              a.wI,
              a.W2,
              a.jY,
              a.Gu,
              a.gu,
              a.Xz,
              a.pK,
              a.Ie,
              a.Q$,
              a.q_,
              a.Nd,
              a.t9,
              a.n0,
              a.wd,
              a.sr,
              a.ki,
              a.as,
              a.QI,
              a.j9,
              u.sg,
              u.O5,
              h.JJ,
              h.On,
              y.a8,
              u.H9,
              u.uU,
            ],
            styles: [
              "#selectOptionWhsCode[_ngcontent-%COMP%]   #item-right[_ngcontent-%COMP%]{width:75%}#font-size08[_ngcontent-%COMP%]{font-size:.8em;--min-height: 55px !important}ion-header[_ngcontent-%COMP%]{position:fixed;box-shadow:0 0 20px 5px #d1d1d172;height:53px;--background: #f7f7f7;background:#f7f7f7}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background: #f7f7f7;background:#f7f7f7}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;height:40%;top:30%;margin-left:10px;right:0%;bottom:30%;float:left;height:50px;object-fit:contain}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{position:absolute;margin-top:0}ion-header[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{float:right;right:0;--box-shadow: none}ion-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:fixed;z-index:1;opacity:.3;width:50%;height:50%;inset:15% 25% 35%;object-fit:contain}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{position:fixed;z-index:20;font-size:.4cm;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;inset:56px 0 40px}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]::part(native){padding-left:0}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:36px;height:36px}ion-content[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:100%;--border-radius: 0;--box-shadow: none;--background: #ffd740;bottom:0;margin:0;text-transform:none;font-weight:700}ion-content[_ngcontent-%COMP%]::part(scroll){position:fixed}ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.4cm}ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{font-size:.4cm}#selectOptionWhsCode[_ngcontent-%COMP%]{display:contents}#selectOptionWhsCode[_ngcontent-%COMP%]   #item-left[_ngcontent-%COMP%]{font-size:1em;width:25%}#selectOptionWhsCode[_ngcontent-%COMP%]   #item-right[_ngcontent-%COMP%]{width:50%}#selectOptionWhsCode[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]::part(native){border-radius:0!important;box-shadow:none!important}#selectOptionWhsCode[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]::part(native)   .item-inner[_ngcontent-%COMP%] {border:0;--border: 0}.card-iten-darkgray[_ngcontent-%COMP%]{background:darkgray}.card-iten-white[_ngcontent-%COMP%]{background:white}ion-modal[_ngcontent-%COMP%]{--height: 330px;--border-radius: 16px;--box-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--backdrop-filter: blur(10px)}ion-modal[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]::part(scroll){overflow:hidden}ion-modal[_ngcontent-%COMP%]   ion-footer[_ngcontent-%COMP%]{position:fixed;bottom:0;box-shadow:0;z-index:30;height:50px}ion-modal[_ngcontent-%COMP%]   ion-footer[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:100%;margin-left:0%;--border-radius: 0;--background: #ececec;color:#ff915a;text-transform:none}ion-content[_ngcontent-%COMP%]   ion-modal[_ngcontent-%COMP%]::part(backdrop){background:rgb(209,213,219);opacity:1}ion-modal[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--box-shadow: 0 2px 10px 5px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--background: #f7f7f7;--color: rgb(255, 56, 56)}.invoice-box[_ngcontent-%COMP%]{max-width:100%;height:100%;margin:0 auto auto;padding:10px;border:1px solid #eee;box-shadow:0 0 10px #00000026;font-size:.2cm;line-height:20px;font-family:Helvetica Neue,Helvetica,Helvetica,Arial,sans-serif;color:#353535;position:absolute;z-index:10;background:white;top:0;visibility:hidden}.invoice-box[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]{width:100%;padding:0}#btn-save[_ngcontent-%COMP%]{width:100%;height:100%;font-size:1.1em;font-weight:500;background:#ffd740!important}.example-card[_ngcontent-%COMP%]{width:90%;margin:auto}.example-card[_ngcontent-%COMP%]   .card-div-v1[_ngcontent-%COMP%]{display:flex;flex-direction:row}.example-card[_ngcontent-%COMP%]   .card-div-v1[_ngcontent-%COMP%]   .card-div-v1-1[_ngcontent-%COMP%]{flex:3}.example-card[_ngcontent-%COMP%]   .card-div-v1[_ngcontent-%COMP%]   .card-div-v1-1[_ngcontent-%COMP%]   .card-div-v1-1-2[_ngcontent-%COMP%]   .card-div-v1-1-2-1[_ngcontent-%COMP%]{flex:1}.example-card[_ngcontent-%COMP%]   .card-div-v1[_ngcontent-%COMP%]   .card-div-v1-1[_ngcontent-%COMP%]   .card-div-v1-1-2[_ngcontent-%COMP%]   .card-div-v1-1-2-2[_ngcontent-%COMP%]{flex:2}.example-card[_ngcontent-%COMP%]   .card-div-v1[_ngcontent-%COMP%]   .card-div-v1-2[_ngcontent-%COMP%]{flex:1}.example-card[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{height:95px;min-height:100%}.example-card[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:75px!important;height:75px!important}",
            ],
          })),
          e
        );
      })();
      const F = [
        {
          path: "",
          component: (() => {
            class e {
              constructor(n, o) {
                (this._data = n),
                  (this.navCtrl = o),
                  (this.const_data = []),
                  this.loadData();
              }
              loadData() {
                return (0, m.mG)(this, void 0, void 0, function* () {
                  this._data.getListMenu().subscribe((n) => {
                    this.const_data = n || [];
                  });
                });
              }
              openItem(n, o) {
                this.navCtrl.navigateForward([o, n]);
              }
            }
            return (
              (e.ɵfac = function (n) {
                return new (n || e)(t.Y36(_.D), t.Y36(a.SH));
              }),
              (e.ɵcmp = t.Xpm({
                type: e,
                selectors: [["app-tab2"]],
                decls: 2,
                vars: 1,
                consts: [[3, "fullscreen"]],
                template: function (n, o) {
                  1 & n &&
                    (t.TgZ(0, "ion-content", 0), t._UZ(1, "app-pos"), t.qZA()),
                    2 & n && t.Q6J("fullscreen", !0);
                },
                dependencies: [a.W2, V],
              })),
              e
            );
          })(),
        },
        {
          path: "history-details/:id",
          loadChildren: () =>
            r
              .e(7112)
              .then(r.bind(r, 7112))
              .then((e) => e.HistoryDetailsPageModule),
        },
      ];
      let L = (() => {
        class e {}
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵmod = t.oAB({ type: e })),
          (e.ɵinj = t.cJS({ imports: [f.Bz.forChild(F), f.Bz] })),
          e
        );
      })();
      var v = r(529),
        G = r(5064);
      let D = (() => {
        class e {}
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵmod = t.oAB({ type: e })),
          (e.ɵinj = t.cJS({
            providers: [_.D, v.JF],
            imports: [a.Pc, u.ez, h.u5, G.q, v.JF, T.e, L, h.UX, P.h],
          })),
          e
        );
      })();
    },
  },
]);
