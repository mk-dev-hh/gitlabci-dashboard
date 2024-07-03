import { Component, OnInit, Input } from '@angular/core';
import { Pipeline } from '../../../services/pipelines/pipeline.dto';

@Component({
  selector: 'dd-dashboard-overview-item',
  templateUrl: './dashboard-overview-item.component.html',
  styleUrls: ['./dashboard-overview-item.component.scss']
})
export class DashboardOverviewItemComponent implements OnInit {

  @Input() pipeline: Pipeline;
  projectId: string;

  constructor() {
  }

  ngOnInit(): void {
    this.projectId = this.pipeline.projectId;
  }

  setClasses(){
    let classes = {
      'failed': this.pipeline.status === 'failed',
      'success': this.pipeline.status === 'success',
      'other': this.pipeline.status !== 'failed' && this.pipeline.status !== 'success'
    }
    return classes;
  }

  setClassesBorder(){
    let classes = {
      'failedBorder': this.pipeline.status === 'failed',
      'successBorder': this.pipeline.status === 'success',
      'otherBorder': this.pipeline.status !== 'failed' && this.pipeline.status !== 'success'
    }
    return classes;
  }

  setContainerColor(){
    let classes = {
      'runningContainer': this.pipeline.status === 'running',
      'failedContainer': this.pipeline.status === 'failed',
      'manualContainer': this.pipeline.status ==='manual',
      'successContainer': this.pipeline.status === 'success',
      'unknownContainer': this.pipeline.status !== 'failed' && this.pipeline.status !== 'success' && this.pipeline.status !== 'manual' && this.pipeline.status !== 'running' && this.pipeline.status !== 'bamboo build' && !this.pipeline.status.includes("no schedules"),
      'notVisible': this.pipeline.status.includes("no qa") || this.pipeline.status.includes("no develop")
    }
    return classes;
  }

  setButtonColor(){
    let classes = {
      'runningButton': this.pipeline.status === 'running',
      'failedButton': this.pipeline.status === 'failed',
      'manualButton': this.pipeline.status === 'manual',
      'successButton': this.pipeline.status === 'success',
      //'unknownButton': this.pipeline.status !== 'failed' && this.pipeline.status !== 'success' && this.pipeline.status !== 'manual' && this.pipeline.status !== 'running'
      'unknownButton': this.pipeline.status === "canceled" || this.pipeline.status == "blocked"
    }
    return classes;
  }

}
