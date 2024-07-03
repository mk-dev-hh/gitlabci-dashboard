import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './components/error404.component';
import { DashboardRoutes } from '../dashboard/dashboard.routing';
import { PipelinesRoutes } from '../pipelines/pipelines.routing';
import { SettingsRoutes } from '../settings/settings.routing';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', children: DashboardRoutes},
  {path: 'pipelines', children: PipelinesRoutes},
  {path: 'settings', children: SettingsRoutes },
  {path: '**', component: Error404Component}
];

export const AppRouting = RouterModule.forRoot(routes);
