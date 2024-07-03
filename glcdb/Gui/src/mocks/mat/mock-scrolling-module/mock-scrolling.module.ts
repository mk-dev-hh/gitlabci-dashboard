import { NgModule } from '@angular/core';
import { CdkMockScrollable } from './mock-cdk-scrollable';
import { CdkMockVirtualForOf } from './mock-virtual-for-of';
import { CdkMockVirtualScrollViewport } from './mock-virtual-scroll-viewport';

@NgModule({
  declarations: [CdkMockVirtualForOf, CdkMockScrollable, CdkMockVirtualScrollViewport],
  exports: [CdkMockVirtualForOf, CdkMockScrollable, CdkMockVirtualScrollViewport]
})
export class MockScrollingModule {
}
