import { Directive, EventEmitter, Input, Output } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'form:not([ngNoForm]):not([formGroup])',
  exportAs: 'ngForm'
})
export class NgFormMockDirective {
  @Input() ngFormOptions;
  @Output() ngSubmit = new EventEmitter<any>();

  readonly submitted: boolean;
  form: any;
  formDirective: any;
  control: any;
  path: string[];
  controls: any;
}
