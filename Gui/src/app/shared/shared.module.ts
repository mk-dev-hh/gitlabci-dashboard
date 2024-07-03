import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { LocalizeComponent } from './components/localize.component';
import { LoadingScreenComponent } from './components/loading-screen.component';
import { MsgDialogComponent } from './components/msg-dialog.component';
import { ProgressIndicatorComponent } from './components/progress-indicator/progress-indicator.component';

@NgModule({
  declarations: [LocalizeComponent, LoadingScreenComponent, MsgDialogComponent, ProgressIndicatorComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    LocalizeComponent,
    ProgressIndicatorComponent
  ]
})
export class SharedModule {
}
