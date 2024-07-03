import { Directive, EventEmitter, Input, Output } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ngModel]:not([formControlName]):not([formControl])',
  exportAs: 'ngModel'
})
export class NgModelMockDirective {
  readonly control: any;
  viewModel: any;
  @Input() name: string;
  @Input() disabled: boolean;
  @Input() ngModel: any;
  @Input() ngModelOptions: any;
  @Output() ngModelChange = new EventEmitter<any>();
  readonly path: string;
  readonly formDirective: any;
  readonly validator: any;
  asyncValidator: any;
}
