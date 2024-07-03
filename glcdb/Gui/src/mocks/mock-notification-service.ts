import { NotificationMsg } from '../app/services/notification/msg.dto';
import { Observable } from 'rxjs';

export class MockNotificationService {
  constructor() {
  }

  public showMessage(errorMessage: NotificationMsg): void {
    throw new Error('No mock-behaviour implemented MockNotificationService.showMessage(errorMessage: DmsConfigMsg)');
  }

  public showDialog(errorMessage: NotificationMsg, callback?: (canClose: boolean) => void): void {
    throw new Error('No mock-behaviour implemented MockNotificationService.showDialog(errorMessage: DmsConfigMsg, callback?: (boolean) => void)');
  }

  public showSnackbar(message: string): void {
    throw new Error('No mock-behaviour implemented MockNotificationService.showSnackbar(message: string)');
  }

  public showSnackbarAction(message: string, action: string, timeoutMs: number = 5000): Observable<boolean> {
    throw new Error('No mock-behaviour implemented MockNotificationService.showSnackbarAction(message: string, action: string, timeoutMs)');
  }
}
