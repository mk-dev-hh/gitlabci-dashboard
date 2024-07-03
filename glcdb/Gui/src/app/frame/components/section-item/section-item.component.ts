import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dd-section-item',
  templateUrl: './section-item.component.html',
  styleUrls: ['./section-item.component.scss']
})
export class SectionItemComponent implements OnInit {

  @Input() section: string;
  @Input() icon: string;

  constructor() { }

  ngOnInit(): void {
  }

}
