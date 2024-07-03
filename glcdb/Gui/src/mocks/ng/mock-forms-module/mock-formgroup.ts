﻿import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[formGroup]',
  host: {'(submit)': 'onSubmit($event)', '(reset)': 'onReset()'},
  exportAs: 'ngForm'
})
export class MockFormGroupDirective {
  @Input('formGroup') form: FormGroup = null!;

  @Output() ngSubmit = new EventEmitter();
}
