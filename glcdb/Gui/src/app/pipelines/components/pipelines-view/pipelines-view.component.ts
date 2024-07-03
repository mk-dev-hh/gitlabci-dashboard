import { Component, OnInit } from '@angular/core';
import { Branch } from '../../../services/branches/branch.dto';

@Component({
  selector: 'dd-pipelines-view',
  templateUrl: './pipelines-view.component.html',
  styleUrls: ['./pipelines-view.component.scss']
})
export class PipelinesViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
