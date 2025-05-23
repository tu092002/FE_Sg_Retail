import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ModalController, NavController } from "@ionic/angular";
import { UrlConstants } from "src/app/commons/UrlConstants";
import { AuthService } from "src/app/services/auth.service";
import { DataService } from "src/app/services/data.service";
import { receipt } from "src/app/services/link-id.index";

@Component({
  selector: "app-receipt-history",
  templateUrl: "./receipt-history.page.html",
  styleUrls: ["./receipt-history.page.scss"],
})
export class ReceiptHistoryPage implements OnInit {
  const_data: any = {};
  currentUser: any = {};
  API: string = "/receipt";

  Loading = true;
  filterTerm!: string;

  constructor(
    private _data: DataService,
    private formBuilder: FormBuilder,
    private modalCtrl: ModalController,
    private navCtrl: NavController,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.currentUser = this.authService.getParseTokenUser();
    this.loadData();
  }
  loadData() {
    const queryParams = {
      tenant_id: this.currentUser.tenant_id,
      // tenant_id: "1",
    };
    this.Loading = false;

    this._data.get2(UrlConstants.BASE_SERVER + this.API, queryParams).subscribe(
      (x) => {
        this.const_data = x || [];
        this.Loading = true;
      },
      (error) => {
        this.Loading = true;
      },
    );
  }

  openItem(itemId: any) {
    this.navCtrl.navigateForward([receipt.receiptDetail, itemId]);
    // this.cancel();
  }
  // cancel() {
  //   return this.modalCtrl.dismiss(null, 'cancel');
  // }
}
