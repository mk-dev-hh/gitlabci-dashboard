import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsOverviewPageComponent } from './settings-overview-page/settings-overview-page.component';
import { SettingsDashboardPageComponent } from './settings-dashboard-page/settings-dashboard-page.component';
import {RouterModule} from "@angular/router";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { SharedModule } from '../shared/shared.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [SettingsOverviewPageComponent, SettingsDashboardPageComponent],
  exports:[
    SettingsOverviewPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatExpansionModule,
    MatAutocompleteModule,
    ScrollingModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class SettingsModule { }
