import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../shared/material.module';
import { DashboardOverviewListComponent } from './components/dashboard-overview-list/dashboard-overview-list.component';
import { DashboardOverviewItemComponent } from './components/dashboard-overview-item/dashboard-overview-item.component';
import { DashboardOverviewPageComponent } from './components/dashboard-overview-page/dashboard-overview-page.component';
import {RouterModule} from "@angular/router";
import { DashboardBranchesHeadersComponent } from './components/dashboard-branches-headers/dashboard-branches-headers.component';
import { DashboardOverviewLineComponent } from './components/dashboard-overview-line/dashboard-overview-line.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [DashboardOverviewItemComponent, DashboardOverviewListComponent, DashboardOverviewPageComponent, DashboardBranchesHeadersComponent, DashboardOverviewLineComponent],
  exports:[
      DashboardOverviewPageComponent
  ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        SharedModule
    ]
})
export class DashboardModule { }
