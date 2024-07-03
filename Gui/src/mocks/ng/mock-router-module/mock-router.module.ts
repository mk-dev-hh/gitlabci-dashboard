﻿import { NgModule } from '@angular/core';
import { MockRouterLink, MockRouterLinkWithHref } from './mock-router-link';

/*
Originalcode: https://github.com/angular/angular/tree/master/packages/router
 */

@NgModule({
  declarations: [MockRouterLink, MockRouterLinkWithHref],
  exports: [
    MockRouterLink,
    MockRouterLinkWithHref
  ]
})
export class MockRouterModule {
}
