import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChartsPageRoutingModule } from './charts-routing.module';

import { ChartsPage } from './charts.page';

import { MaterialModule } from 'src/app/material/material.module';

import { ChartReportComponent } from './chart-report/chart-report.component';
@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ChartsPageRoutingModule
  ],
  declarations: [ChartsPage, ChartReportComponent]
})
export class ChartsPageModule {}
