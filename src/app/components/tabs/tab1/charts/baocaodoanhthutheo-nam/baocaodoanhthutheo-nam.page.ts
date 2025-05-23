import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { DateAdapter } from "@angular/material/core";

import { Chart } from "chart.js";
import moment from "moment";
import { UrlConstants } from "src/app/commons/UrlConstants";
import { AuthService } from "src/app/services/auth.service";
import { DataService } from "src/app/services/data.service";

export interface PeriodicElement {
  no: number;
  // itemcode: string,
  total: string;
  discount: string;
}

export interface Group {
  group: string;
}
@Component({
  selector: "app-baocaodoanhthutheo-nam",
  templateUrl: "./baocaodoanhthutheo-nam.page.html",
  styleUrls: ["./baocaodoanhthutheo-nam.page.scss"],
})
export class BaocaodoanhthutheoNamPage implements OnInit {
  @ViewChild("myChart") private myChart!: ElementRef;
  date = moment();
  Loading = true;
  const_data: any = {};
  const_year: any = {};
  currentUser: any = {};
  const_arr: any = [];
  const_category: any = [];
  label: any = [];
  data: any = [];
  API: any = "/reports/chartyear";
  API_CIRCLE: any = "/reports/chartyearcircle";
  API_CATEGORY: string = "/category";
  API_YEAR: string = "/reports/years";

  doughnutChart: any;

  displayedColumns: string[] = ["no", "total", "discount"];
  dataSource: any;

  constructor(private _data: DataService, private authService: AuthService) {}

  ngOnInit() {
    this.currentUser = this.authService.getParseTokenUser();
    this.loadyear();
    this.loadcategory();
  }
  changeDate(event: any) {
    var years = "";
    this.loaddata(event.value);
    this.loaddataCircle(event.value);
  }
  loaddata(year: any) {
    this.const_data = {};
    this.Loading = false;
    this._data
      .post(
        UrlConstants.BASE_SERVER +
          this.currentUser.ip +
          this.API +
          "/" +
          this.currentUser.tenant_id,
        {
          year: year.toString(),
        },
      )
      .subscribe(
        (x) => {
          this.const_data = x || [];
          this.mapCategoryAndData(x || []);
          this.Loading = true;
        },
        (error) => {
          this.Loading = true;
        },
      );
  }
  loaddataCircle(year: any) {
    var const_circle = {};
    this.Loading = false;
    this._data
      .post(
        UrlConstants.BASE_SERVER +
          this.currentUser.ip +
          this.API_CIRCLE +
          "/" +
          this.currentUser.tenant_id,
        {
          year: year.toString(),
        },
      )
      .subscribe(
        (x) => {
          const_circle = x || [];
          this.parseDataArrayString(const_circle);
          this.Loading = true;
        },
        (error) => {
          this.Loading = true;
        },
      );
  }
  loadcategory() {
    const queryParams = {
      tenant_id: this.currentUser.tenant_id,
      // tenant_id: "1",
    };
    this.Loading = false;

    this._data
      .get2(UrlConstants.BASE_SERVER + this.API_CATEGORY, queryParams)
      .subscribe(
        (x) => {
          this.const_category = x || [];
          this.Loading = true;
        },
        (error) => {
          this.Loading = true;
        },
      );
  }
  loadyear() {
    const queryParams = {
      tenant_id: this.currentUser.tenant_id,
      // tenant_id: "1",
    };
    this.Loading = false;

    this._data
      .get2(UrlConstants.BASE_SERVER + this.API_YEAR, queryParams)
      .subscribe(
        (x) => {
          this.const_year = x || [];
          this.Loading = true;
        },
        (error) => {
          this.Loading = true;
        },
      );
  }

  mapCategoryAndData(data: any) {
    this.const_arr = [];
    var group = "";
    this.const_data?.data.forEach((element: any, index: any) => {
      if (index == 0) {
        this.const_arr.push({
          group: element.group,
        });
        this.const_arr.push({
          no: index + 1,
          itemcode: element.itemcode,
          total: element.total
            .toString()
            .replace(/\D/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          discount: element.discount
            .toString()
            .replace(/\D/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        });
      } else {
        if (group == element.group) {
          this.const_arr.push({
            no: index + 1,
            itemcode: element.itemcode,
            total: element.total
              .toString()
              .replace(/\D/g, "")
              .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
            discount: element.discount
              .toString()
              .replace(/\D/g, "")
              .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          });
        } else {
          this.const_arr.push({
            group: element.group,
          });
          this.const_arr.push({
            no: index + 1,
            itemcode: element.itemcode,
            total: element.total
              .toString()
              .replace(/\D/g, "")
              .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
            discount: element.discount
              .toString()
              .replace(/\D/g, "")
              .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          });
        }
      }
      group = element.group;
    });
    this.dataSource = this.const_arr;
  }
  parseDataArrayString(data: any) {
    this.label = [];
    this.data = [];
    data?.data.forEach((element: any) => {
      this.label.push(element.group);
      this.data.push(element.total);
    });
    this.doughnutChartMethod();
  }
  isGroup(index: any, item: any): boolean {
    return item.group;
  }
  doughnutChartMethod() {
    if (this.doughnutChart != undefined) {
      this.doughnutChart.destroy();
    }
    this.doughnutChart = new Chart(this.myChart.nativeElement, {
      type: "doughnut",
      data: {
        labels: this.label,
        datasets: [
          {
            label: "# of Vendor",
            data: this.data,
            backgroundColor: [
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(240,248,255,1)",
              "rgba(0,255,255,1)",
              "rgba(245,245,220,1)",
              "rgba(0,0,255,1)",
              "rgba(138,43,226,1)",
              "rgba(165,42,42,1)",
              "rgba(222, 184,135,1)",
              "rgba(95,158,160,1)",
              "rgba(127,255,0,1)",
              "rgba(0,139,139,1)",
              "rgba(255,140,0,1)",
              "rgba(255,215,0,1)",
              "rgba(0,128,0,1)",
            ],
            hoverBackgroundColor: [
              "#FFCE56",
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#FF6384",
              "rgba(153, 102, 255, 0.2)",
              "rgba(240,248,255,1)",
              "rgba(0,255,255,1)",
              "rgba(245,245,220,1)",
              "rgba(0,0,255,1)",
              "rgba(138,43,226,1)",
              "rgba(165,42,42,1)",
              "rgba(222, 184,135,1)",
              "rgba(95,158,160,1)",
              "rgba(127,255,0,1)",
              "rgba(0,139,139,1)",
              "rgba(255,140,0,1)",
              "rgba(255,215,0,1)",
              "rgba(0,128,0,1)",
            ],
          },
        ],
      },
    });
  }
}
