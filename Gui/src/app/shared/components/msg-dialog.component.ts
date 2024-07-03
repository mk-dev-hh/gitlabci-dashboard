import { Component, Inject } from '@angular/core';
import { NotificationMsg } from '../../services/notification/msg.dto';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'dd-msg-dialog',
  template: `
    <span mat-dialog-title>{{title}}</span>
    <mat-dialog-content>
      {{details}}
      <ng-container *ngIf="metaDisplay">
        <div class="meta" [innerHTML]="metaDisplay"></div>
      </ng-container>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close="close" *ngIf="closeButtonText" data-selenium-id="buttonClose">{{closeButtonText}}</button>
      <button mat-button mat-dialog-close="accept" *ngIf="acceptButtonText" data-selenium-id="buttonAccept">{{acceptButtonText}}</button>
    </mat-dialog-actions>
  `,
  styles: [`
    :host {
      display: block;
      max-width: 30vw;
    }

    .meta {
      margin-top: 1em;
    }

    mat-dialog-actions {
      justify-content: flex-end;
    }
  `]
})
export class MsgDialogComponent {

  title: string;
  details: string;
  metaDisplay: string;
  closeButtonText: string;
  acceptButtonText: string;

  constructor(public dialogRef: MatDialogRef<MsgDialogComponent>, @Inject(MAT_DIALOG_DATA) data: NotificationMsg) {
    this.title = data.title;
    this.details = data.details;
    this.metaDisplay = data.metaDisplay;
    this.closeButtonText = data.closeButtonText ?? 'OK';
    this.acceptButtonText = data.acceptButtonText;
  }

}
