import { Component, OnDestroy, OnInit } from '@angular/core';
import { CdkMockScrollable } from './mock-cdk-scrollable';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cdk-virtual-scroll-viewport',
  template: ''
})
// tslint:disable-next-line:component-class-suffix
export class CdkMockVirtualScrollViewport extends CdkMockScrollable implements OnInit, OnDestroy {

}
