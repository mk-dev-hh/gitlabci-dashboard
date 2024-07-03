import { Component } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'dd-root',
  template: `
    <dd-sidebar-navigation style="height: 100%;">
      <mat-card class="ie-banner" *ngIf="isIE">
        <span i18n="Banner im Internet Explorer@@rootIeBanner">Ihr Browser wird nicht unterstützt. Wir können nicht garantieren, dass alle Funktionen einwandfrei funktionieren. Bitte verwenden Sie einen anderen Browser.</span>
      </mat-card>
      <div class="content">
        <router-outlet></router-outlet>
      </div>
    </dd-sidebar-navigation>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .ie-banner {
      margin: 0.5em;
      padding: 1em 1em;
      background-color: hsl(340, 100%, 45%);
      color: hsl(0, 0%, 100%);
      text-align: center;
    }

      .content {
        height: 100%;
        overflow-y: auto;
      }
  `]
})
export class AppComponent {

  public isIE = false;

  constructor(private platform: Platform) {
    this.isIE = platform.TRIDENT;
  }

}
