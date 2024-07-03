import { TestBed } from '@angular/core/testing';

import { UnsavedChangesGuard } from './unsaved-changes.guard';
import { MockNotificationService } from '../../../mocks/mock-notification-service';
import { ResourceStringService } from '../resource-string/resource-string.service';
import { NotificationService } from '../notification/notification.service';
import { Observable } from 'rxjs';

describe('UnsavedChangesGuard', () => {
  let guard: UnsavedChangesGuard;
  let mockedNotificationService: MockNotificationService;

  beforeEach(() => {
    mockedNotificationService = new MockNotificationService();

    TestBed.configureTestingModule({
      providers: [
        ResourceStringService,
        {provide: NotificationService, useValue: mockedNotificationService}
      ]
    });
    guard = TestBed.inject(UnsavedChangesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true on no unsaved changes', () => {
    const mockComponent = {
      hasUnsavedChanges: () => false
    };

    expect(guard.canDeactivate(mockComponent)).toBeTruthy();
  });

  it('should return true on accept dialog', done => {
    const mockComponent = {
      hasUnsavedChanges: () => true
    };

    mockedNotificationService.showDialog = jasmine.createSpy().and.callFake((a, callback) => callback(true));

    const result = guard.canDeactivate(mockComponent);
    expect(typeof result).not.toEqual('boolean');
    (result as Observable<boolean>).subscribe(value =>  {
      expect(value).toBeTruthy();
      expect(mockedNotificationService.showDialog).toHaveBeenCalled();
      done();
    });
  });

  it('should return false on cancel dialog', done => {
    const mockComponent = {
      hasUnsavedChanges: () => true
    };

    mockedNotificationService.showDialog = jasmine.createSpy().and.callFake((a, callback) => callback(false));

    const result = guard.canDeactivate(mockComponent);
    expect(typeof result).not.toEqual('boolean');
    (result as Observable<boolean>).subscribe(value =>  {
      expect(value).toBeFalsy();
      expect(mockedNotificationService.showDialog).toHaveBeenCalled();
      done();
    });
  });

});
