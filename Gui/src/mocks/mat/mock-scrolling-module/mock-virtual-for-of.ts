import { CollectionViewer, DataSource, ListRange } from '@angular/cdk/collections';
import { Directive, DoCheck, Input, NgIterable, OnDestroy, TrackByFunction } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[cdkVirtualFor][cdkVirtualForOf]'
})
// tslint:disable-next-line:directive-class-suffix
export class CdkMockVirtualForOf<T> implements CollectionViewer, DoCheck, OnDestroy {
  public viewChange: Subject<ListRange>;

  @Input()
  get cdkVirtualForOf(): DataSource<T> | Observable<T[]> | NgIterable<T> | null | undefined {
    return this._cdkVirtualForOf;
  }
  set cdkVirtualForOf(value: DataSource<T> | Observable<T[]> | NgIterable<T> | null | undefined) {
    this._cdkVirtualForOf = value;
  }
  // tslint:disable-next-line:variable-name
  _cdkVirtualForOf: DataSource<T> | Observable<T[]> | NgIterable<T> | null | undefined;

  @Input()
  get cdkVirtualForTrackBy(): TrackByFunction<T> | undefined {
    return undefined;
  }
  set cdkVirtualForTrackBy(fn: TrackByFunction<T> | undefined) {
  }

  public ngDoCheck(): void {
  }

  public ngOnDestroy(): void {
  }

}
