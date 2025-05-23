import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { DateAdapter } from "@angular/material/core";
import * as moment from "moment";
import { DataService } from "src/app/services/data.service";
import Chart from "chart.js/auto";
import { AuthService } from "src/app/services/auth.service";
import { UrlConstants } from "src/app/commons/UrlConstants";

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
  selector: "app-baocaodoanhthutheo-ngay",
  templateUrl: "./baocaodoanhthutheo-ngay.page.html",
  styleUrls: ["./baocaodoanhthutheo-ngay.page.scss"],
})
export class BaocaodoanhthutheoNgayPage implements OnInit {
  @ViewChild("myChart") private myChart!: ElementRef;

  // date = moment();
  dateFrom = moment();
  dateTo = moment();
  Loading = true;
  const_data: any = {};
  const_data_cus: any = {};
  currentUser: any = {};
  const_arr: any = [];
  const_arr_cus: any = [];
  const_category: any = [];
  label: any = [];
  data: any = [];
  API: any = "/reports/chartday";
  API_CUSTOMER: any = "/reports/chartdaycustomer";
  API_CIRCLE: any = "/reports/chartdaycircle";
  API_CATEGORY: string = "/category";

  doughnutChart: any;

  displayedColumns: string[] = ["no", "total", "discount"];
  dataSource: any;
  dataSourceCus: any;

  constructor(
    private dateAdapter: DateAdapter<Date>,
    private _data: DataService,
    private authService: AuthService,
  ) {
    this.dateAdapter.setLocale("en-GB"); //dd/MM/yyyy
  }

  ngOnInit() {
    this.currentUser = this.authService.getParseTokenUser();
    this.loadcategory();
  }
  // changeDate(event: any) {
  //   var days = '';
  //   var months = '';
  //   var years = '';
  //   this.date = moment(event.value);
  //   days = this.date.format('DD');
  //   months = this.date.format('MM');
  //   years = this.date.format('YYYY');
  //   this.loaddata(days, months, years);
  //   this.loaddataCircle(days, months, years);
  // }
  changeDate(event: any, dp: any, type: string) {
    if (type == "fromdate") {
      if (
        dp.datepickerInput.value != null ||
        dp.datepickerInput.value != undefined ||
        dp.datepickerInput.value != ""
      ) {
        var fromdate = "";
        var todate = "";
        this.dateFrom = moment(event.value);
        fromdate = this.dateFrom.format("YYYY-MM-DD");
        this.dateFrom = moment(dp.datepickerInput.value);
        todate = this.dateFrom.format("YYYY-MM-DD");
        if (todate == "Invalid date") {
          return;
        }
        this.loaddata(fromdate, todate);
        this.loaddata_cus(fromdate, todate);
      } else {
        return;
      }
    } else if (type == "todate") {
      if (
        dp.datepickerInput.value != null ||
        dp.datepickerInput.value != undefined ||
        dp.datepickerInput.value != ""
      ) {
        var fromdate = "";
        var todate = "";
        this.dateFrom = moment(event.value);
        todate = this.dateFrom.format("YYYY-MM-DD");
        this.dateFrom = moment(dp.datepickerInput.value);
        fromdate = this.dateFrom.format("YYYY-MM-DD");
        if (fromdate == "Invalid date") {
          return;
        }
        this.loaddata(fromdate, todate);
        this.loaddata_cus(fromdate, todate);
      } else {
        return;
      }
    }
  }
  // loaddata(day: any, month: any, year: any) {
  //   this.const_data = {};
  //   this.Loading = false;
  //   this._data.post(this.currentUser.ip + this.API, { day: day.toString(), month: month.toString(), year: year.toString() }).subscribe(x => {
  //     this.const_data = x || [];
  //     this.mapCategoryAndData(x || []);
  //     this.Loading = true;
  //   }, (error) => {
  //     this.Loading = true;
  //     console.log(error);
  //   });
  // }
  loaddata(fromdate: any, todate: any) {
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
          fromdate: fromdate.toString(),
          todate: todate.toString(),
        },
      )
      .subscribe(
        (x) => {
          this.const_data = x || [];
          this.mapCategoryAndData(x || []);
          console.table(this.const_data);
          this.Loading = true;
        },
        (error) => {
          this.Loading = true;
        },
      );
  }
  loaddata_cus(fromdate: any, todate: any) {
    this.const_data_cus = {};
    this.Loading = false;
    this._data
      .post(
        UrlConstants.BASE_SERVER +
          this.currentUser.ip +
          this.API_CUSTOMER +
          "/" +
          this.currentUser.tenant_id,
        {
          fromdate: fromdate.toString(),
          todate: todate.toString(),
        },
      )
      .subscribe(
        (x) => {
          this.const_data_cus = x || [];
          this.mapCategoryAndDataCus(x || []);
          console.table(this.const_data_cus);
          this.Loading = true;
        },
        (error) => {
          this.Loading = true;
        },
      );
  }
  loaddataCircle(day: any, month: any, year: any) {
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
          day: day.toString(),
          month: month.toString(),
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
          total: element.total,
          discount: element.discount,
        });
      } else {
        if (group == element.group) {
          this.const_arr.push({
            no: index + 1,
            itemcode: element.itemcode,
            total: element.total,
            discount: element.discount,
          });
        } else {
          this.const_arr.push({
            group: element.group,
          });
          this.const_arr.push({
            no: index + 1,
            itemcode: element.itemcode,
            total: element.total,
            discount: element.discount,
          });
        }
      }
      group = element.group;
    });
    console.table(this.const_arr);
    this.dataSource = this.const_arr;
  }
  mapCategoryAndDataCus(data: any) {
    this.const_arr_cus = [];
    console.table(this.const_data_cus?.data);
    this.const_data_cus?.data.forEach((element: any, index: any) => {
      this.const_arr_cus.push({
        no: index + 1,
        Sl: element.Sl,
        total: element.total,
        discount: element.discount,
      });
    });

    console.table(this.const_arr_cus);
    this.dataSourceCus = this.const_arr_cus;
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
