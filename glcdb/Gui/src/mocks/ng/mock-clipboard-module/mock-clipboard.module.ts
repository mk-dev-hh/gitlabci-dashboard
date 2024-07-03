﻿import { NgModule } from '@angular/core';
import { MockCopyToClipboard } from './mock-copy-to-clipboard';

/*
Originalcode: https://github.com/angular/components/tree/master/src/cdk/clipboard
 */

@NgModule({
  declarations: [MockCopyToClipboard],
  exports: [
      MockCopyToClipboard
  ]
})
export class MockClipboardModule {
}
