import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarNavigationComponent } from './components/sidebar-navigation/sidebar-navigation.component';
import { MaterialModule } from '../shared/material.module';
import { SectionsComponent } from './components/sections/sections.component';
import { SectionItemComponent } from './components/section-item/section-item.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [SidebarNavigationComponent, SectionsComponent, SectionItemComponent],
  exports: [
    SidebarNavigationComponent
  ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule
    ]
})
export class FrameModule { }
