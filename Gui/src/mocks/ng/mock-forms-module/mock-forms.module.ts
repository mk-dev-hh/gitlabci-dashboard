import { NgModule } from '@angular/core';
import { NgFormMockDirective } from './mock-ngForm';
import { FormControlMockDirective } from './mock-formcontrol';
import { NgModelMockDirective } from './mock-ngModel';
import { MockFormGroupDirective } from './mock-formgroup';

/*
Originalcode: https://github.com/angular/angular/tree/master/packages/forms
 */

@NgModule({
  declarations: [NgFormMockDirective, FormControlMockDirective, NgModelMockDirective, MockFormGroupDirective],
  exports: [NgFormMockDirective, FormControlMockDirective, NgModelMockDirective, MockFormGroupDirective]
})
export class MockFormsModule {
}
