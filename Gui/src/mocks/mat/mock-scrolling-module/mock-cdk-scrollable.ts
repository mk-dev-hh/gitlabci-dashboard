import { Directive, OnDestroy, OnInit } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[cdk-scrollable], [cdkScrollable]',
})
// tslint:disable-next-line:directive-class-suffix
export class CdkMockScrollable implements OnInit, OnDestroy {
  public ngOnDestroy(): void {
  }

  public ngOnInit(): void {
  }

}
