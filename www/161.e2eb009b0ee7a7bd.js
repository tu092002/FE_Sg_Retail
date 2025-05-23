"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [161],
  {
    161: (k, C, r) => {
      r.r(C), r.d(C, { OrderAddPageModule: () => Y });
      var m = r(6895),
        d = r(4006),
        l = r(8779),
        _ = r(9299),
        v = r(655),
        M = r(4631),
        y = r(1297),
        A = r(8675),
        O = r(4004),
        x = r(9895),
        t = r(4650),
        S = r(2468),
        E = r(4377),
        b = r(3805),
        U = r(3238),
        w = r(4859),
        f = r(3546),
        N = r(7392),
        q = r(4144),
        P = r(9549),
        D = r(3162),
        I = r(4385),
        T = r(3848);
      const G = ["valuesinput"];
      function V(n, s) {
        if (
          (1 & n && (t.TgZ(0, "ion-select-option", 44), t._uU(1), t.qZA()),
          2 & n)
        ) {
          const e = s.$implicit;
          t.Q6J("value", e.whscode), t.xp6(1), t.Oqu(e.whsname);
        }
      }
      function J(n, s) {
        if (1 & n) {
          const e = t.EpF();
          t.TgZ(0, "mat-card", 34),
            t._UZ(1, "img", 35),
            t.TgZ(2, "mat-card-actions", 14)(3, "p")(4, "ion-label"),
            t._uU(5),
            t.qZA()(),
            t.TgZ(6, "p", 36)(7, "ion-label", 37),
            t._uU(8, "S\u1ed1 l\u01b0\u1ee3ng"),
            t.qZA(),
            t.TgZ(9, "ion-input", 38, 39),
            t.NdJ("change", function (a) {
              const c = t.CHM(e).$implicit,
                u = t.MAs(10),
                h = t.oxw();
              return t.KtG(h.total(a, u.value, c.itemcode));
            }),
            t.qZA()(),
            t.TgZ(11, "p", 36)(12, "ion-label", 40),
            t._uU(13, "Gi\xe1"),
            t.qZA(),
            t.TgZ(14, "ion-label", 41),
            t._uU(15),
            t.ALo(16, "currency"),
            t.qZA()(),
            t.TgZ(17, "p", 36)(18, "ion-label", 40),
            t._uU(19, "TT"),
            t.qZA(),
            t.TgZ(20, "ion-label", 41),
            t._uU(21),
            t.ALo(22, "currency"),
            t.qZA()(),
            t.TgZ(23, "p", 36)(24, "ion-label", 40),
            t._uU(25, "Kho"),
            t.qZA(),
            t.TgZ(26, "ion-select", 42),
            t.NdJ("ionChange", function (a) {
              const c = t.CHM(e).$implicit,
                u = t.oxw();
              return t.KtG(u.changeWhsCode(a, c.itemcode));
            }),
            t.YNc(27, V, 2, 2, "ion-select-option", 24),
            t.qZA()()(),
            t.TgZ(28, "mat-card-footer"),
            t._UZ(29, "mat-progress-bar", 43),
            t.qZA()();
        }
        if (2 & n) {
          const e = s.$implicit,
            o = t.oxw();
          t.xp6(1),
            t.s9C("src", o.BASE_SERVERS + e.image, t.LSH),
            t.xp6(4),
            t.Oqu(null == e ? null : e.itemname),
            t.xp6(4),
            t.Q6J("value", null == e ? null : e.quantity),
            t.xp6(6),
            t.Oqu(
              t.gM2(
                16,
                7,
                null == e ? null : e.price,
                "\u0111 ",
                "symbol",
                "1.0",
              ),
            ),
            t.xp6(6),
            t.Oqu(
              t.gM2(
                22,
                12,
                (null == e ? null : e.quantity) * (null == e ? null : e.price),
                "\u0111 ",
                "symbol",
                "1.0",
              ),
            ),
            t.xp6(5),
            t.s9C("value", e.whscode),
            t.xp6(1),
            t.Q6J("ngForOf", null == o.warehouse ? null : o.warehouse.data);
        }
      }
      function L(n, s) {
        if (
          (1 & n &&
            (t.TgZ(0, "mat-option", 44, 45)(2, "span"),
            t._uU(3),
            t.qZA(),
            t._uU(4, " | "),
            t.TgZ(5, "small"),
            t._uU(6),
            t.qZA()()),
          2 & n)
        ) {
          const e = s.$implicit;
          t.Q6J("value", null == e ? null : e.cardcode),
            t.xp6(3),
            t.Oqu(null == e ? null : e.cardcode),
            t.xp6(3),
            t.hij(" ", null == e ? null : e.cardname, "");
        }
      }
      function Q(n, s) {
        if (
          (1 & n &&
            (t.TgZ(0, "mat-option", 44)(1, "span"),
            t._uU(2),
            t.qZA(),
            t._uU(3, " | "),
            t.TgZ(4, "small"),
            t._uU(5),
            t.qZA()()),
          2 & n)
        ) {
          const e = s.$implicit;
          t.Q6J("value", e.staffcode),
            t.xp6(2),
            t.Oqu(e.staffcode),
            t.xp6(3),
            t.hij(" ", e.staffname, "");
        }
      }
      function F(n, s) {
        if ((1 & n && (t.TgZ(0, "mat-option", 44), t._uU(1), t.qZA()), 2 & n)) {
          const e = s.$implicit;
          t.Q6J("value", e.id), t.xp6(1), t.hij(" ", e.value, " ");
        }
      }
      function R(n, s) {
        1 & n &&
          (t.TgZ(0, "div", 46)(1, "div", 47), t._UZ(2, "div", 48), t.qZA()());
      }
      const B = [
        {
          path: "",
          component: (() => {
            class n {
              constructor(e, o, a, i, c, u) {
                (this._data = e),
                  (this.formBuilder = o),
                  (this.route = a),
                  (this.modalCtrl = i),
                  (this.location = c),
                  (this.authService = u),
                  (this.options = [
                    { value: "Combo", id: "0" },
                    { value: "C\u1eaft", id: "1" },
                  ]),
                  (this.Loading = !0),
                  (this.nowDate = new Date()),
                  (this.totalValues = 0),
                  (this.totalSum = 0),
                  (this.change = 0),
                  (this.discount = 0),
                  (this.product_num = 0),
                  (this.send = 0),
                  (this.product = ""),
                  (this.const_table = {}),
                  (this.order_details = []),
                  (this.warehouse = {}),
                  (this.const_bp = {}),
                  (this.const_staff = {}),
                  (this._nxt = {}),
                  (this.const_data = {}),
                  (this.currentUser = {}),
                  (this.API_Table = "/table"),
                  (this.API_WAREHOUSE = "/warehouse"),
                  (this.API_NXT_WhsItem = "/viewnxt/whsitem"),
                  (this.API_Order = "/order"),
                  (this.API_BP = "/business"),
                  (this.API_Staff = "/staff"),
                  (this.BASE_SERVERS = M.r.BASE_SERVER + "/"),
                  (this.imgDefault =
                    "../../../../../../assets/images/imgdefault.jpeg"),
                  (this.statusPrint = ""),
                  (this.myControlCardCode = new d.NI("")),
                  (this.myControlStaffCode = new d.NI("")),
                  (this.myControlDV = new d.NI("")),
                  (this.myForm = new d.cw("")),
                  (this.staffCodesControl = new d.NI([])),
                  (this.currentUser = this.authService.getParseTokenUser()),
                  this.loadDataTable(),
                  this.loadDataWarehouse();
              }
              ngOnInit() {
                this.loaddata_bp(),
                  this.loaddata_staff(),
                  this.createForm1(),
                  this.createForm();
              }
              createForm() {
                this.formGroup = this.formBuilder.group({
                  tablename: [null],
                  tablenumber: [null, d.kI.required],
                  docdate: [Date],
                  remarks: [null],
                  group: [null],
                  phone: [0],
                  total: [0],
                  discount: [0],
                  doctotal: [0],
                  customerpay: [0],
                  refund: [0],
                  vat: [0],
                  creator: [null],
                });
              }
              createForm1() {
                (this.formGroup1 = this.formBuilder.group({
                  cardcode: [null],
                  cardname: [null],
                  staffcode: [null],
                  staffname: [null],
                })),
                  this.formGroup1.controls.cardname.disable(),
                  this.formGroup1.controls.staffname.disable();
              }
              loadDataTable() {
                (this.Loading = !1),
                  this._data
                    .get(
                      UrlConstants.BASE_SERVER +
                        this.currentUser.ip +
                        this.API_Table +
                        "/" +
                        +this.route.snapshot.params.id,
                    )
                    .subscribe(
                      (o) => {
                        this.setTableInObj(o || []), (this.Loading = !0);
                      },
                      (o) => {
                        (this.Loading = !0), console.log(o);
                      },
                    );
              }
              setTableInObj(e) {
                this.const_table = e?.data;
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
                      (e) => {
                        this.setDataBP(e || []), (this.Loading = !0);
                      },
                      (e) => {
                        (this.Loading = !0), console.log(e);
                      },
                    );
              }
              setDataBP(e) {
                (this.const_bp = e),
                  this.autocompateCardCode(),

              }
              loaddata_staff() {
                (this.Loading = !1),
                  this._data
                    .get(
                      UrlConstants.BASE_SERVER +
                        this.currentUser.ip +
                        this.API_Staff,
                    )
                    .subscribe(
                      (e) => {
                        this.setDataStaff(e || []), (this.Loading = !0);
                      },
                      (e) => {
                        (this.Loading = !0), console.log(e);
                      },
                    );
              }
              setDataStaff(e) {
                (this.const_staff = e),
                  this.autocompateStaffCode(),

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
                      (e) => {
                        (this.warehouse = e || []), (this.Loading = !0);
                      },
                      (e) => {
                        (this.Loading = !0), console.log(e);
                      },
                    );
              }
              openModal() {
                return (0, v.mG)(this, void 0, void 0, function* () {
                  const e = yield this.modalCtrl.create({
                    component: y.t,
                    componentProps: { data: this.order_details },
                    backdropDismiss: !1,
                  });
                  e.present();
                  const { data: o, role: a } = yield e.onWillDismiss();
                  "confirm" === a && (this.order_details = o),
                    (this.totalValues = 0),
                    this.order_details.forEach((i) => {
                      (this.totalValues =
                        this.totalValues + i.quantity * i.price),
                        (this.totalSum = this.totalValues);
                    });
                });
              }
              total(e, o, a) {
                (this.totalValues = 0),
                  this.order_details.forEach((i) => {
                    i.itemcode === a &&
                      ((i.quantity = Number(o)),
                      this.discountTotal(0),
                      this.discountTotal("")),
                      (this.totalValues =
                        this.totalValues + i.quantity * i.price),
                      (this.totalSum = this.totalValues);
                  });
              }
              changeWhsCode(e, o) {
                this._data
                  .post(
                    UrlConstants.BASE_SERVER +
                      this.currentUser.ip +
                      this.API_NXT_WhsItem,
                    { WhsCode: e.srcElement.value, ItemCode: o },
                  )
                  .subscribe((a) => {
                    this.setValueNXT(a || []);
                  }),
                  setTimeout(() => {
                    this.order_details.forEach((a) => {
                      a.itemcode === o &&
                        ((a.whscode = e.srcElement.value),
                        (a.ton =
                          "" == this._nxt.quantity ||
                          null == this._nxt.quantity ||
                          null == this._nxt.quantity
                            ? 0
                            : this._nxt.quantity));
                    });
                  }, 1e3);
              }
              setValueNXT(e) {
                this._nxt = e?.data;
              }
              discountTotal(e) {
                0 == e
                  ? (this.totalSum = this.totalValues)
                  : this.order_details.forEach((o) => {
                      this.totalSum =
                        this.totalValues -
                        this.totalValues * (e.srcElement.value / 100);
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
              receiptTotal() {
                (this.product = this.product_price.replace(/,/g, "")),
                  (this.product_num = Number(this.product)),
                  0 == this.product_num
                    ? (this.totalSum = this.totalValues)
                    : this.order_details.forEach((e) => {
                        this.send = this.product_num - this.totalSum;
                      });
              }
              confirm(e, o, a = 0, i = 0, c = 0, u, h = 0, g) {
                (this.const_data = {}),
                  (this.const_data.tablename = this.const_table.tablename),
                  (this.const_data.tablenumber = this.const_table.tablenumber),
                  (this.const_data.docDate = this.nowDate),
                  (this.const_data.remarks = g.remarks),
                  (this.const_data.cardcode = this.myControlCardCode.value),
                  (this.const_data.cardname =
                    this.formGroup1.getRawValue().cardname),
                  (this.const_data.staffcode = this.myControlStaffCode.value),
                  (this.const_data.staffname =
                    this.formGroup1.getRawValue().staffname),
                  (this.const_data.dv = this.myControlDV.value),
                  (this.const_data.total =
                    null == a || null == a
                      ? 0
                      : Number(a.toString().replace(/,/g, ""))),
                  (this.const_data.discount =
                    null == i || null == i ? 0 : Number(i)),
                  (this.const_data.doctotal =
                    null == c || null == c
                      ? 0
                      : Number(c.toString().replace(/,/g, ""))),
                  "TT" == this.statusPrint &&
                    (this.const_data.customerpay =
                      0 == this.const_data.discount
                        ? this.const_data.doctotal.toString()
                        : null == u || null == u
                        ? "0"
                        : Number(u.replace(/,/g, "")).toString()),
                  (this.const_data.refund =
                    null == h || null == h
                      ? 0
                      : Number(h.toString().replace(/,/g, ""))),
                  (this.const_data.viewpayment = "save"),
                  (this.const_data.orderDetails = this.order_details),
,
,
,
                  this._data
                    .post(
                      UrlConstants.BASE_SERVER +
                        this.currentUser.ip +
                        this.API_Order,
                      this.const_data,
                    )
                    .subscribe((p) => {
                      this._data.showSaveSuccess();
                    }),
                  (this.order_details = []),
                  this.location.back();
              }
              updateStatusThanhToan(e, o, a = 0, i = 0, c = 0, u, h = 0, g) {
                (this.const_data = {}),
                  (this.const_data.tablename = this.const_table.tablename),
                  (this.const_data.tablenumber = this.const_table.tablenumber),
                  (this.const_data.docDate = this.nowDate),
                  (this.const_data.remarks = g.remarks),
                  (this.const_data.cardcode = this.myControlCardCode.value),
                  (this.const_data.cardname =
                    this.formGroup1.getRawValue().cardname),
                  (this.const_data.staffcode =
                    this.myControlStaffCode.value + ""),
                  (this.const_data.staffname =
                    this.formGroup1.getRawValue().staffname),
                  (this.const_data.total =
                    null == a || null == a
                      ? 0
                      : Number(a.toString().replace(/,/g, ""))),
                  (this.const_data.discount =
                    null == i || null == i ? 0 : Number(i)),
                  (this.const_data.dv = this.myControlDV.value),
                  (this.const_data.doctotal =
                    null == c || null == c
                      ? 0
                      : Number(c.toString().replace(/,/g, ""))),
                  "TT" == this.statusPrint &&
                    (this.const_data.customerpay =
                      0 == this.const_data.discount
                        ? this.const_data.doctotal.toString()
                        : null == u || null == u
                        ? "0"
                        : Number(u.replace(/,/g, "")).toString()),
                  (this.const_data.refund =
                    null == h || null == h
                      ? 0
                      : Number(h.toString().replace(/,/g, ""))),
                  (this.const_data.viewpayment = "off"),
                  (this.const_data.orderDetails = this.order_details),
,
,
,
,
                  this._data
                    .post(
                      UrlConstants.BASE_SERVER +
                        this.currentUser.ip +
                        this.API_Order,
                      this.const_data,
                    )
                    .subscribe((p) => {
                      this._data.showSaveSuccess();
                    }),
                  (this.order_details = []),
                  this.location.back();
              }
              openQuenstion(e, o, a = 0, i = 0, c = 0, u, h = 0, g) {
                return (0, v.mG)(this, void 0, void 0, function* () {
                  const p = yield this.modalCtrl.create({
                    component: x.P,
                    componentProps: {},
                  });
                  p.present();
                  const { role: Z } = yield p.onWillDismiss();
                  "TT" === Z
                    ? ((this.statusPrint = "TT"),
                      this.updateStatusThanhToan(e, o, a, i, c, u, h, g))
                    : "DRAF" === Z &&
                      ((this.statusPrint = "TT"),
                      this.confirm(e, o, a, i, c, u, h, g));
                });
              }
              autocompateCardCode() {
                (this.filteredOptionsCardCode =
                  this.myControlCardCode.valueChanges.pipe(
                    (0, A.O)(""),
                    (0, O.U)((e) =>
                      e ? this._filterCardCode(e) : this.const_bp.data.slice(),
                    ),
                  )),
,

              }
              autocompateStaffCode() {
                this.filteredOptionsStaffCode =
                  this.myControlStaffCode.valueChanges.pipe(
                    (0, A.O)(""),
                    (0, O.U)((e) =>
                      e
                        ? this._filterStaffCode(e)
                        : this.const_staff.data.slice(),
                    ),
                  );
              }
              _filterCardCode(e) {
                const o = e.toLowerCase();
                return this.const_bp.data.filter((a) =>
                  a.cardname.toLowerCase().includes(o),
                );
              }
              _filterStaffCode(e) {
                const o = e.toLowerCase();
                return this.const_staff.data.filter((a) =>
                  a.staffname.toLowerCase().includes(o),
                );
              }
              onSelectionChange(e) {
                const o = this.const_bp.data.find(
                  (a) => a.cardcode === e.option.value,
                );
                this.formGroup1.controls.cardname.setValue(o?.cardname),
                  this.formGroup1.controls.cardname.disable();
              }
              onSelectionChangeStaff(e) {
                const o = this.const_staff.data.find(
                  (a) => a.staffcode === e.option.value,
                );
                this.formGroup1.controls.staffname.setValue(o?.staffname),
                  this.formGroup1.controls.staffname.disable();
              }
            }
            return (
              (n.ɵfac = function (e) {
                return new (e || n)(
                  t.Y36(S.D),
                  t.Y36(d.qu),
                  t.Y36(_.gz),
                  t.Y36(l.IN),
                  t.Y36(m.Ye),
                  t.Y36(E.e),
                );
              }),
              (n.ɵcmp = t.Xpm({
                type: n,
                selectors: [["app-order-add"]],
                viewQuery: function (e, o) {
                  if ((1 & e && t.Gf(G, 5), 2 & e)) {
                    let a;
                    t.iGM((a = t.CRH())) && (o.valuesinput = a.first);
                  }
                },
                decls: 82,
                vars: 35,
                consts: [
                  ["slot", "start"],
                  [2, "text-align", "center"],
                  [
                    "slot",
                    "end",
                    1,
                    "flex-1",
                    2,
                    "justify-content",
                    "end",
                    "font-size",
                    "1.2em",
                    "margin-right",
                    "15px",
                    "cursor",
                    "pointer",
                    3,
                    "click",
                  ],
                  [1, "ion-padding"],
                  ["label", "Danh s\xe1ch"],
                  [1, "order-add"],
                  [3, "formGroup"],
                  [1, "order-add-v1"],
                  [1, "order-add-v1-2"],
                  ["appearance", "fill", 1, "w-100"],
                  ["matInput", "", "formControlName", "remarks"],
                  [1, "order-add-header-line"],
                  [1, "v1"],
                  ["mat-icon-button", "", "color", "primary", 3, "click"],
                  [1, "v2"],
                  ["mat-icon-button", "", "color", "primary"],
                  [1, "order-add-line"],
                  ["class", "example-card", 4, "ngFor", "ngForOf"],
                  ["label", "Thanh to\xe1n"],
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
                  [
                    "placeholder",
                    "Ch\u1ecdn M\xe3 Nh\xe2n Vi\xean",
                    "multiple",
                    "",
                    3,
                    "formControl",
                  ],
                  [3, "formControl"],
                  [2, "padding", "15px 10px"],
                  [2, "width", "50%"],
                  [2, "width", "50%", "text-align", "end"],
                  ["matInput", "", 3, "ngModel", "ngModelChange", "change"],
                  ["bgcolor", "#000000", 4, "ngIf"],
                  [1, "example-card"],
                  ["mat-card-image", "", 1, "v1", 3, "src"],
                  [1, "v2-2"],
                  [1, "v2-2-1", 2, "margin", "auto"],
                  [
                    "color",
                    "medium",
                    "placeholder",
                    "S\u1ed1 l\u01b0\u1ee3ng",
                    1,
                    "w-100",
                    "v2-2-2",
                    3,
                    "value",
                    "change",
                  ],
                  ["quantity", ""],
                  [1, "v2-2-1"],
                  [1, "v2-2-2"],
                  [
                    "interface",
                    "action-sheet",
                    "placeholder",
                    "Kho",
                    1,
                    "v2-2-3",
                    3,
                    "value",
                    "ionChange",
                  ],
                  ["mode", "determinate", "value", "100"],
                  [3, "value"],
                  ["valuesinput", ""],
                  ["bgcolor", "#000000"],
                  ["id", "loader-wrapper"],
                  ["id", "loader"],
                ],
                template: function (e, o) {
                  if (
                    (1 & e &&
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
                      t.TgZ(6, "ion-buttons", 2),
                      t.NdJ("click", function () {
                        return o.openQuenstion(
                          "tablename.value",
                          "tablenumber.value",
                          o.totalValues,
                          o.discount,
                          o.totalSum,
                          o.product_price,
                          o.send,
                          o.formGroup.value,
                        );
                      }),
                      t._uU(7, " L\u01b0u "),
                      t.qZA()()(),
                      t.TgZ(8, "ion-content", 3)(9, "mat-tab-group")(
                        10,
                        "mat-tab",
                        4,
                      )(11, "div", 5)(12, "form", 6)(13, "div", 7),
                      t._UZ(14, "div", 8),
                      t.qZA(),
                      t.TgZ(15, "mat-form-field", 9)(16, "mat-label"),
                      t._uU(17, "Ghi ch\xfa"),
                      t.qZA(),
                      t._UZ(18, "textarea", 10),
                      t.qZA()()(),
                      t.TgZ(19, "div", 11)(20, "p", 12)(21, "button", 13),
                      t.NdJ("click", function () {
                        return o.openModal();
                      }),
                      t.TgZ(22, "mat-icon"),
                      t._uU(23, "add"),
                      t.qZA()()(),
                      t.TgZ(24, "p", 14)(25, "button", 15)(26, "mat-icon"),
                      t._uU(27, "refresh"),
                      t.qZA()()()(),
                      t.TgZ(28, "div", 16),
                      t.YNc(29, J, 30, 17, "mat-card", 17),
                      t.qZA()(),
                      t.TgZ(30, "mat-tab", 18)(31, "form", 19)(
                        32,
                        "mat-form-field",
                        20,
                      )(33, "mat-label"),
                      t._uU(34, "M\xe3"),
                      t.qZA(),
                      t._UZ(35, "input", 21),
                      t.TgZ(36, "mat-autocomplete", 22, 23),
                      t.NdJ("optionSelected", function (i) {
                        return o.onSelectionChange(i);
                      }),
                      t.YNc(38, L, 7, 3, "mat-option", 24),
                      t.ALo(39, "async"),
                      t.qZA()(),
                      t.TgZ(40, "mat-form-field", 25)(41, "mat-label"),
                      t._uU(42, "T\xean"),
                      t.qZA(),
                      t._UZ(43, "input", 26),
                      t.qZA(),
                      t.TgZ(44, "mat-form-field", 25)(45, "mat-label"),
                      t._uU(46, "M\xe3 Nh\xe2n Vi\xean"),
                      t.qZA(),
                      t.TgZ(47, "mat-select", 27),
                      t.YNc(48, Q, 6, 3, "mat-option", 24),
                      t.ALo(49, "async"),
                      t.qZA()(),
                      t.TgZ(50, "mat-form-field", 25)(51, "mat-label"),
                      t._uU(52, "Ch\u1ecdn D\u1ecbch V\u1ee5"),
                      t.qZA(),
                      t.TgZ(53, "mat-select", 28),
                      t.YNc(54, F, 2, 2, "mat-option", 24),
                      t.qZA()()(),
                      t.TgZ(55, "ion-row", 29)(56, "ion-col", 30),
                      t._uU(57, "Th\xe0nh ti\u1ec1n"),
                      t.qZA(),
                      t.TgZ(58, "ion-col", 31),
                      t._uU(59),
                      t.ALo(60, "currency"),
                      t.qZA()(),
                      t.TgZ(61, "mat-form-field", 9)(62, "mat-label"),
                      t._uU(63, "Gi\u1ea3m gi\xe1"),
                      t.qZA(),
                      t.TgZ(64, "input", 32),
                      t.NdJ("ngModelChange", function (i) {
                        return (o.discount = i);
                      })("change", function (i) {
                        return o.discountTotal(i);
                      }),
                      t.qZA()(),
                      t.TgZ(65, "ion-row", 29)(66, "ion-col", 30),
                      t._uU(67, "Ti\u1ec1n kh\xe1ch ph\u1ea3i tr\u1ea3"),
                      t.qZA(),
                      t.TgZ(68, "ion-col", 31),
                      t._uU(69),
                      t.ALo(70, "currency"),
                      t.qZA()(),
                      t.TgZ(71, "mat-form-field", 9)(72, "mat-label"),
                      t._uU(73, "Ti\u1ec1n kh\xe1ch tr\u1ea3"),
                      t.qZA(),
                      t.TgZ(74, "input", 32),
                      t.NdJ("ngModelChange", function (i) {
                        return (o.product_price = i);
                      })("change", function (i) {
                        return o.CommaFormatted(i), o.receiptTotal();
                      }),
                      t.qZA()(),
                      t.TgZ(75, "ion-row", 29)(76, "ion-col", 30),
                      t._uU(77, "Ti\u1ec1n tr\u1ea3 l\u1ea1i"),
                      t.qZA(),
                      t.TgZ(78, "ion-col", 31),
                      t._uU(79),
                      t.ALo(80, "currency"),
                      t.qZA()()()()(),
                      t.YNc(81, R, 3, 0, "div", 33)),
                    2 & e)
                  ) {
                    const a = t.MAs(37);
                    t.xp6(12),
                      t.Q6J("formGroup", o.formGroup),
                      t.xp6(17),
                      t.Q6J("ngForOf", o.order_details),
                      t.xp6(2),
                      t.Q6J("formGroup", o.formGroup1),
                      t.xp6(4),
                      t.Q6J("formControl", o.myControlCardCode)(
                        "matAutocomplete",
                        a,
                      ),
                      t.xp6(3),
                      t.Q6J(
                        "ngForOf",
                        t.lcZ(39, 16, o.filteredOptionsCardCode),
                      ),
                      t.xp6(9),
                      t.Q6J("formControl", o.myControlStaffCode),
                      t.xp6(1),
                      t.Q6J(
                        "ngForOf",
                        t.lcZ(49, 18, o.filteredOptionsStaffCode),
                      ),
                      t.xp6(5),
                      t.Q6J("formControl", o.myControlDV),
                      t.xp6(1),
                      t.Q6J("ngForOf", o.options),
                      t.xp6(5),
                      t.hij(
                        " ",
                        t.gM2(
                          60,
                          20,
                          o.totalValues,
                          "\u0111 ",
                          "symbol",
                          "1.0",
                        ),
                        " ",
                      ),
                      t.xp6(5),
                      t.Q6J("ngModel", o.discount),
                      t.xp6(5),
                      t.hij(
                        " ",
                        t.gM2(70, 25, o.totalSum, "\u0111 ", "symbol", "1.0"),
                        " ",
                      ),
                      t.xp6(5),
                      t.Q6J("ngModel", o.product_price),
                      t.xp6(5),
                      t.Oqu(t.gM2(80, 30, o.send, "\u0111 ", "symbol", "1.0")),
                      t.xp6(2),
                      t.Q6J("ngIf", !o.Loading);
                  }
                },
                dependencies: [
                  m.sg,
                  m.O5,
                  d._Y,
                  d.Fj,
                  d.JJ,
                  d.JL,
                  d.On,
                  l.oU,
                  l.Sm,
                  l.wI,
                  l.W2,
                  l.Gu,
                  l.pK,
                  l.Q$,
                  l.Nd,
                  l.t9,
                  l.n0,
                  l.wd,
                  l.sr,
                  l.QI,
                  l.j9,
                  l.cs,
                  b.XC,
                  U.ey,
                  b.ZL,
                  w.RK,
                  f.a8,
                  f.hq,
                  f.rt,
                  f.G2,
                  N.Hw,
                  q.Nt,
                  P.KE,
                  P.hX,
                  D.pW,
                  I.gD,
                  T.uX,
                  T.SP,
                  d.oH,
                  d.sg,
                  d.u,
                  m.Ov,
                  m.H9,
                ],
                styles: [
                  ".mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{background:white!important}  .mdc-text-field--filled:not(.mdc-text-field--disabled){background:white!important}.w-100[_ngcontent-%COMP%]{width:100%}.order-add-v1[_ngcontent-%COMP%]{display:flex;flex-direction:row}.order-add-v1[_ngcontent-%COMP%]   .order-add-v1-1[_ngcontent-%COMP%]{flex:2;width:100%}.order-add-v1[_ngcontent-%COMP%]   .order-add-v1-2[_ngcontent-%COMP%]{flex:1;width:100%;text-align-last:right;align-self:center}.order-add-v1[_ngcontent-%COMP%]   .order-add-v1-2[_ngcontent-%COMP%]   .order-add-v1-2-1[_ngcontent-%COMP%]{color:#00f}.order-add-v1[_ngcontent-%COMP%]   .order-add-v1-2[_ngcontent-%COMP%]   .order-add-v1-2-2[_ngcontent-%COMP%]{color:red}.order-add-header-line[_ngcontent-%COMP%]{display:flex;flex-direction:row;background:darkgrey}.order-add-header-line[_ngcontent-%COMP%]   .v1[_ngcontent-%COMP%], .order-add-header-line[_ngcontent-%COMP%]   .v2[_ngcontent-%COMP%]{flex:1;margin:0!important;text-align:center}.order-add-line[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.order-add-line[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]{width:48%;margin:5px!important;flex-wrap:wrap;flex:48%;font-size:1rem;justify-content:flex-end;padding:10px}.order-add-line[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   .v1[_ngcontent-%COMP%]{width:100%;height:100px;object-fit:contain;margin-top:20px}.order-add-line[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   .v2[_ngcontent-%COMP%]{display:block;color:#000;font-weight:700}.order-add-line[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   .v2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:100%;margin:0!important}.order-add-line[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   .v2[_ngcontent-%COMP%]   .v2-1[_ngcontent-%COMP%]{text-align:right}.order-add-line[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   .v2[_ngcontent-%COMP%]   .v2-2[_ngcontent-%COMP%]{display:flex;padding:5px 0}.order-add-line[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   .v2[_ngcontent-%COMP%]   .v2-2[_ngcontent-%COMP%]   .v2-2-1[_ngcontent-%COMP%]{flex:1;width:100%;text-align:left}.order-add-line[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   .v2[_ngcontent-%COMP%]   .v2-2[_ngcontent-%COMP%]   .v2-2-2[_ngcontent-%COMP%]{flex:2;width:100%;text-align:right}.order-add-line[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   .v2[_ngcontent-%COMP%]   .v2-2[_ngcontent-%COMP%]   .v2-2-3[_ngcontent-%COMP%]{flex:2;width:100%;text-align:right;padding:0!important}.order-add-line[_ngcontent-%COMP%]   .example-header-image[_ngcontent-%COMP%]{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover}",
                ],
              })),
              n
            );
          })(),
        },
      ];
      let j = (() => {
        class n {}
        return (
          (n.ɵfac = function (e) {
            return new (e || n)();
          }),
          (n.ɵmod = t.oAB({ type: n })),
          (n.ɵinj = t.cJS({ imports: [_.Bz.forChild(B), _.Bz] })),
          n
        );
      })();
      var W = r(5064);
      let Y = (() => {
        class n {}
        return (
          (n.ɵfac = function (e) {
            return new (e || n)();
          }),
          (n.ɵmod = t.oAB({ type: n })),
          (n.ɵinj = t.cJS({ imports: [m.ez, d.u5, l.Pc, W.q, d.UX, j] })),
          n
        );
      })();
    },
  },
]);
