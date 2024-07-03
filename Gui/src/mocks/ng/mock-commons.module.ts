﻿import { NgModule } from '@angular/core';
import { MockFormsModule } from './mock-forms-module/mock-forms.module';
import { MockRouterModule } from './mock-router-module/mock-router.module';
import { MockClipboardModule } from './mock-clipboard-module/mock-clipboard.module';

@NgModule({
  imports: [
    MockFormsModule,
    MockRouterModule,
    MockClipboardModule
  ],
  exports: [
    MockFormsModule,
    MockRouterModule,
    MockClipboardModule
  ]
})
export class MockCommonsModule {
}
