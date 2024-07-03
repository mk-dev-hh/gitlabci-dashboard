import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'dd-sidebar-navigation',
  templateUrl: './sidebar-navigation.component.html',
  styleUrls: ['./sidebar-navigation.component.scss']
})
export class SidebarNavigationComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(private changeDetectorRef: ChangeDetectorRef, private media: MediaMatcher) {
  }

  ngOnInit(): void {
    this.mobileQuery = this.media.matchMedia('(max-width: 975px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

}
