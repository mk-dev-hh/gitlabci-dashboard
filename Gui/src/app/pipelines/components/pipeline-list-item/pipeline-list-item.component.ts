import { Component, Input, OnInit } from '@angular/core';
import { Pipeline, PipelineTriggerUserInfo } from '../../../services/pipelines/pipeline.dto';
import { PipelinesService } from '../../../services/pipelines/pipelines.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'dd-pipeline-list-item',
  templateUrl: './pipeline-list-item.component.html',
  styleUrls: ['./pipeline-list-item.component.scss']
})
export class PipelineListItemComponent implements OnInit {

  @Input() pipeline: Pipeline;
  @Input() projectId: string;
  private pipelineTriggerUserInfo: PipelineTriggerUserInfo;
  name: string;
  duration: string;
  date: string;
  columnValues: string[];
  photo: string;

  constructor(private pipelineService: PipelinesService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.pipelineService.getPipelineTriggerUserInfo(this.projectId, this.pipeline.id).subscribe(pipelineTriggerUserInfo => {;
      this.pipelineTriggerUserInfo = pipelineTriggerUserInfo;
      this.name = this.pipelineTriggerUserInfo.user.name;
      this.photo = this.pipelineTriggerUserInfo.user.avatarUrl;
      //this.date = this.pipelineTriggerUserInfo.startedAt.split('T')[0].split('-').reverse().join('.');
      this.date = this.datePipe.transform(this.pipelineTriggerUserInfo.startedAt , 'medium');
      let minutes:number = (this.pipelineTriggerUserInfo.duration - ( this.pipelineTriggerUserInfo.duration % 60 ))/ 60;
      let seconds = this.pipelineTriggerUserInfo.duration % 60;
      this.duration = minutes + ' Min. ' + seconds + ' Sec.';
      this.columnValues = new Array();
      this.columnValues.push(this.pipeline.id.toString(), this.pipeline.status, this.name, this.date, this.duration);
    });
  }

  setContainerColor(){
    let classes = {
      'runningContainer': this.pipeline.status === 'running',
      'failedContainer': this.pipeline.status === 'failed',
      'manualContainer': this.pipeline.status ==='manual',
      'successContainer': this.pipeline.status === 'success',
      'unknownContainer': this.pipeline.status !== 'failed' && this.pipeline.status !== 'success' && this.pipeline.status !== 'manual' && this.pipeline.status !== 'running'
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
