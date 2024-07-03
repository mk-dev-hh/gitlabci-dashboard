import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardOverviewListComponent } from './components/dashboard-overview-list/dashboard-overview-list.component';
import { DashboardOverviewPageComponent } from './components/dashboard-overview-page/dashboard-overview-page.component';


export const DashboardRoutes: Routes = [
  {path: '', component: DashboardOverviewPageComponent}
];
