﻿import { Directive, Input } from '@angular/core';
import { QueryParamsHandling } from '@angular/router';

@Directive({selector: ':not(a):not(area)[routerLink]'})
export class MockRouterLink {
  @Input() queryParams!: {[k: string]: any};
  @Input() fragment!: string;
  @Input() queryParamsHandling!: QueryParamsHandling;
  @Input() preserveFragment!: boolean;
  @Input() skipLocationChange!: boolean;
  @Input() replaceUrl!: boolean;
  @Input() state?: {[k: string]: any};

  @Input()
  set routerLink(commands: any[]|string|null|undefined) {
  }
}

@Directive({selector: 'a[routerLink],area[routerLink]'})
export class MockRouterLinkWithHref {
  @Input() target!: string;
  @Input() queryParams!: {[k: string]: any};
  @Input() fragment!: string;
  @Input() queryParamsHandling!: QueryParamsHandling;
  @Input() preserveFragment!: boolean;
  @Input() skipLocationChange!: boolean;
  @Input() replaceUrl!: boolean;
  @Input() state?: {[k: string]: any};

  @Input()
  set routerLink(commands: any[]|string|null|undefined) {
  }

  @Input()
  set preserveQueryParams(value: boolean) {
  }
}
