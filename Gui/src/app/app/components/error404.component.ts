import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'dd-error404',
  template: `
    <iframe [src]="iFramePath"></iframe>
  `,
  styles: [`
    :host {
      display: block;
      height: 100%;
    }

    iframe {
      width: 100%;
      height: 99%;
      border: none;
    }
  `]
})
export class Error404Component implements OnInit {
  public iFramePath: any;

  constructor(private sanitizer: DomSanitizer) {
  }

  public ngOnInit(): void {
    this.iFramePath = this.sanitizer.bypassSecurityTrustResourceUrl(`/${window['APP_NAME']}/error/statuscode/404`);
  }
}
