import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {MaterialModule} from '../shared/material.module';
import { PipelineListComponent } from './components/pipeline-list/pipeline-list.component';
import { PipelineListItemComponent } from './components/pipeline-list-item/pipeline-list-item.component';
import { PipelinesHeaderComponent } from './components/pipelines-header/pipelines-header.component';
import { PipelinesViewComponent } from './components/pipelines-view/pipelines-view.component';
import { PipelinesFilterComponent } from './components/pipelines-filter/pipelines-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { H } from '@angular/cdk/keycodes';



@NgModule({
  declarations: [PipelineListComponent, PipelineListItemComponent, PipelinesHeaderComponent, PipelinesViewComponent, PipelinesFilterComponent],
  exports: [
    PipelinesViewComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe]
})
export class PipelinesModule { }
