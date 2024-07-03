import { Injectable } from '@angular/core';
import { MsgDialogComponent } from '../../shared/components/msg-dialog.component';
import { NotificationMsg } from './msg.dto';
import { Observable, Observer } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public dialog: MatDialog, private snackbar: MatSnackBar) {
  }

  public showDialog(errorMessage: NotificationMsg, callback?: (accepted: boolean) => void): void {
    this.dialog
        .open(MsgDialogComponent, {
          disableClose: true,
          id: 'msg-dialog',
          data: errorMessage
        })
        .afterClosed()
        .subscribe(data => {
          if (callback) {
            callback(data === 'accept');
          }
        });
  }

  public showMessage(errorMessage: NotificationMsg): void {
    if (errorMessage) {
      this.showDialog(errorMessage);
    } else {
      console.error('The provided errorMessage is null or undefined. Error dialog was not shown.');
    }
  }

  public showSnackbar(message: string, duration: number = 5000): void {
    this.snackbar.open(message, '', {duration});
  }

  public showSnackbarAction(message: string, action: string, duration: number = 5000): Observable<boolean> {
    return new Observable((observer: Observer<boolean>) => {
      const ref = this.snackbar.open(message, action, {duration});
      ref.afterDismissed().subscribe((dismiss) => {
        observer.next(dismiss.dismissedByAction);
        observer.complete();
      });
    });
  }
}
