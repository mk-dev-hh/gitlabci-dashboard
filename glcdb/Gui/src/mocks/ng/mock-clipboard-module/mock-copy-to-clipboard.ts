﻿import { Directive, EventEmitter, Input, Output } from '@angular/core';

@Directive({
  selector: '[cdkCopyToClipboard]',
  host: {
    '(click)': 'copy()',
  }
})
export class MockCopyToClipboard {
  @Input('cdkCopyToClipboard') text: string = '';
  @Input('cdkCopyToClipboardAttempts') attempts: number = 1;

  @Output('cdkCopyToClipboardCopied') copied = new EventEmitter<boolean>();

  copy(attempts: number = this.attempts): void {
  }
}
