import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipelinesViewComponent } from './components/pipelines-view/pipelines-view.component';


export const PipelinesRoutes: Routes = [
  {path: '', component: PipelinesViewComponent},
  {path: ':projectName', component: PipelinesViewComponent},
  {path: ':projectName/:branchName', component: PipelinesViewComponent}

];
