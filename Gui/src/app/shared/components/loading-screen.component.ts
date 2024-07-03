import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'dd-loading-screen',
  template: `
    <p mat-dialog-title i18n="Text in der Ladeanzeige@@loadingScreenText" data-selenium-id="loadingScreen">Bitte warten</p>
    <mat-dialog-content>
      <p class="text" *ngIf="data.text">{{data.text}}</p>
      <mat-progress-bar [mode]="determinate ? 'determinate' : 'indeterminate'" [value]="determinate ? Progress : undefined "></mat-progress-bar>
      <div class="progress" *ngIf="determinate" i18n="Fortschrittsanzeige@@loadingScreenProgress">Fortschritt: {{Progress | number:"1.0-0"}}%</div>
    </mat-dialog-content>
  `,
  styles: [`
    :host {
      display: block;
      width: 15em;
    }

    .text {
      margin-top: 0;
    }

    .progress {
      margin-top: 0.5em;
    }
  `]
})
export class LoadingScreenComponent {

  public set Progress(value: number) {
    if ((!value && value !== 0) || value < 0 || value > 100) {
      this.progress = undefined;
    } else {
      this.progress = value;
    }
  }

  public get Progress(): number {
    return this.progress;
  }

  public get determinate(): boolean {
    return !!this.progress || this.progress === 0;
  }

  private progress: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {text: string}) {
  }

}
