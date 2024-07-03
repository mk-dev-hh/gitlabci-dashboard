import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dd-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

  sections: string[];
  icons: string[];

  constructor() { }

  ngOnInit(): void {
    this.sections = new Array();
    this.sections.push('Dashboard', 'Pipelines', 'Settings');// 'Saved', 'Issues');
    this.icons = new Array();
    this.icons.push('home', 'graphic_eq', 'settings');// 'bookmark', 'outlet');
  }

}
