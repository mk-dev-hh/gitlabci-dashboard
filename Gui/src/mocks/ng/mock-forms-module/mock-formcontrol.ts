import { Directive, EventEmitter, Input, Output } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[formControl]',
  exportAs: 'formControl'
})
export class FormControlMockDirective {
  @Input() formControl: any;
  @Input() disabled: boolean;
  @Input() ngModel: any;
  @Output() ngModelChange = new EventEmitter<any>();
  readonly path: string[];
  readonly validator: any;
  readonly asyncValidator: any;
  readonly control: any;
}
