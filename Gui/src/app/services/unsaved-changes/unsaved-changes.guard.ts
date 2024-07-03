import { Injectable } from '@angular/core';
import { CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';
import { NotificationService } from '../notification/notification.service';
import { ResourceStringService } from '../resource-string/resource-string.service';
import { UnsavedChangesInterface } from './unsaved-changes.interface';

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<UnsavedChangesInterface> {

  constructor(private notificationService: NotificationService, private resourceStrings: ResourceStringService) {}

  canDeactivate(component: UnsavedChangesInterface): Observable<boolean> | boolean {
    if (component.hasUnsavedChanges && component.hasUnsavedChanges()) {
      return new Observable(observer => {
        this.notificationService.showDialog(this.resourceStrings.dialogs.dismiss_changes, canClose => {
          observer.next(canClose);
          observer.complete();
        });
      });
    } else {
      return true;
    }
  }

}
