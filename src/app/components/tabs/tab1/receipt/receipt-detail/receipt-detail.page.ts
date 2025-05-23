import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { ModalController, NavController } from "@ionic/angular";
import { UrlConstants } from "src/app/commons/UrlConstants";
import { AuthService } from "src/app/services/auth.service";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-receipt-detail",
  templateUrl: "./receipt-detail.page.html",
  styleUrls: ["./receipt-detail.page.scss"],
})
export class ReceiptDetailPage implements OnInit {
  const_data: any = {};
  currentUser: any = {};
  API: string = "/receipt";

  Loading = true;
  constructor(
    private route: ActivatedRoute,
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
    this.Loading = false;
    this.createForm();
    const itemId = +this.route.snapshot.params["id"];
    this.Loading = false;
    this._data
      .get(
        UrlConstants.BASE_SERVER +
          this.currentUser.ip +
          this.API +
          "/" +
          this.currentUser.tenant_id +
          `/${itemId}`,
      )
      .subscribe(
        (x) => {
          this.const_data = x || [];
          this.Loading = true;
        },
        (error) => {
          this.Loading = true;
        },
      );
  }
  createForm() {}
}
