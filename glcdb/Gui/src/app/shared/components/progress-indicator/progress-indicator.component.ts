import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dd-progress-indicator',
  template: `
    <div class="progress-indicator" [ngClass]="{'restricted-width': restrictedWidth}">
      <div class="mat-subheading-1 progress-indicator_text">{{text}}</div>
      <mat-progress-bar mode="indeterminate"></mat-progress-bar>
    </div>
  `,
  styleUrls: ['./progress-indicator.component.scss']
})
export class ProgressIndicatorComponent implements OnInit {

  defaultText = $localize`:Standardtext für Ladebalken@@progressIndicatorDefaultText:Daten werden geladen`;
  @Input() text = this.defaultText;
  @Input() restrictedWidth: boolean;
  constructor() { }

  ngOnInit(): void {
  }


}
