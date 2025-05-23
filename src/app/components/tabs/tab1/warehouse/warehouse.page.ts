import { Component, OnInit, ViewChild } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { IonModal, NavController } from "@ionic/angular";
import { home } from "src/app/services/link-id.index";
import { NavigationEnd, Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { UrlConstants } from "src/app/commons/UrlConstants";

@Component({
  selector: "app-warehouse",
  templateUrl: "./warehouse.page.html",
  styleUrls: ["./warehouse.page.scss"],
})
export class WarehousePage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  Loading = true;
  constructor(
    private _data: DataService,
    private navCtrl: NavController,
    private router: Router,
    private authService: AuthService,
  ) {
    this.currentUser = this.authService.getParseTokenUser();
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url == "/centers/tabs/tab1/warehouse/3") {
          this.loadData();
        }
      }
    });
  }
  currentUser: any = {};
  filterTerm!: string;
  API: string = "/warehouse";
  public Warehouse: any;
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
        this.Warehouse = x || [];
        this.Loading = true;
      },
      (error) => {
        this.Loading = true;
      },
    );
  }

  public openItem(itemId: number): void {
    this.navCtrl.navigateForward([home.menuHome_warehouse_details, itemId]);
  }

  public openAddItem(): void {
    this.navCtrl.navigateForward([home.menuHome_warehouse_add]);
  }
}
