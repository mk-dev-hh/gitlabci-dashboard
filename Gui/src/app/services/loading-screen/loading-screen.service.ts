import { Injectable } from '@angular/core';
import { LoadingScreenComponent } from '../../shared/components/loading-screen.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class LoadingScreenService {

  private dialogRef: MatDialogRef<any, {}>;
  private openCounter = 0;

  constructor(private dialog: MatDialog) {
  }

  public showLoadingScreen(text?: string): void {
    this.openCounter++;
    if (this.dialogRef) {
      return;
    }
    this.dialogRef = this.dialog.open(LoadingScreenComponent, {
      disableClose: true,
      data: {text},
    });
  }

  public setProgress(percent: number): void {
    if (this.dialogRef) {
      const comp: LoadingScreenComponent = this.dialogRef.componentInstance;
      comp.Progress = percent;
    }
  }

  public hideLoadingScreen(): void {
    if (this.openCounter === 0) {
      return;
    }
    this.openCounter--;
    if (this.dialogRef && this.openCounter === 0) {
      this.dialogRef.close();
      this.dialogRef = undefined;
    }
  }
}
