import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { NavController } from "@ionic/angular";
import { home } from "src/app/services/link-id.index";
import { NavigationEnd, Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { UrlConstants } from "src/app/commons/UrlConstants";

@Component({
  selector: "app-business",
  templateUrl: "./business.page.html",
  styleUrls: ["./business.page.scss"],
})
export class BusinessPage implements OnInit {
  constructor(
    private _data: DataService,
    private navCtrl: NavController,
    private router: Router,
    private authService: AuthService,
  ) {
    this.currentUser = this.authService.getParseTokenUser();
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url == "/centers/tabs/tab1/business/2") {
          this.loadData();
        }
      }
    });
  }
  API: string = "/business";
  Loading = true;
  public Business: any;
  currentUser: any = {};

  filterTerm!: string;

  ngOnInit() {
    this.currentUser = this.authService.getParseTokenUser();
  }
  loadData() {
    const queryParams = {
      tenant_id: this.currentUser.tenant_id,
      // tenant_id: "1",
    };
    this.Loading = false;

    this._data.get2(UrlConstants.BASE_SERVER + this.API, queryParams).subscribe(
      (x) => {
        this.Business = x || [];
        this.Loading = true;
      },
      (error) => {
        this.Loading = true;
      },
    );
  }

  btnRefresh() {
    this.Loading = false;
    this._data
      .get(UrlConstants.BASE_SERVER + this.currentUser.ip + this.API)
      .subscribe(
        (x) => {
          this.Business = x || [];
          this.Loading = true;
        },
        (error) => {
          this.Loading = true;
        },
      );
  }

  public openItem(itemId: number): void {
    this.navCtrl.navigateForward([home.menuHome_BusinessParnet_Detail, itemId]);
  }

  public openAddItem(): void {
    this.navCtrl.navigateForward([home.menuHome_BusinessParnet_Add]);
  }
}
