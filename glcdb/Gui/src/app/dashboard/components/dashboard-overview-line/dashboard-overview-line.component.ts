import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../../services/projects/project.dto';
import { Pipeline } from '../../../services/pipelines/pipeline.dto';
import { PipelineSchedulesService } from '../../../services/pipelineSchedules/pipelineSchedules.service';
import { LoadingState } from 'src/app/shared/classes/loading-state';
import { NotificationMsg } from '../../../services/notification/msg.dto';

@Component({
  selector: 'dd-dashboard-overview-line',
  templateUrl: './dashboard-overview-line.component.html',
  styleUrls: ['./dashboard-overview-line.component.scss']
})
export class DashboardOverviewLineComponent implements OnInit {
  @Input() project: Project;
  pipelines: Pipeline[];
  public LoadingState = LoadingState;
  public loadingState = LoadingState.Loading;
  public loadingError: NotificationMsg;

  constructor(private pipelineSchedulesService: PipelineSchedulesService) { }

  ngOnInit(): void {
    if (this.project != null) {
      this.pipelineSchedulesService.getPipelineSchedules(this.project.id).subscribe(pipelineSchedules =>{
        this.pipelines = new Array();
        if(pipelineSchedules != undefined && pipelineSchedules.length != 0){
          pipelineSchedules.forEach(element =>{
            let pipelineFromSchedule: Pipeline = new Pipeline();
            pipelineFromSchedule = element.lastPipeline;
            pipelineFromSchedule.category = element.description;
            pipelineFromSchedule.projectId = this.project.id;
            pipelineFromSchedule.projectName = this.project.name;
            this.pipelines.push(pipelineFromSchedule);
            this.pipelines = this.pipelines.sort((a, b) => {
              return a.category.localeCompare(b.category);
            });
            this.pipelines = this.pipelines.sort((a, b) => {
              return a.projectName.localeCompare(b.projectName);
            });
          });
        }
        else{
          let unknownPipeline = new Pipeline();
          unknownPipeline.projectId = this.project.id;
          unknownPipeline.category = "no schedules available";
          unknownPipeline.status = "no schedules available";
          unknownPipeline.projectName = this.project.name;
          unknownPipeline.id = 0;
          this.pipelines.push(unknownPipeline);
        }
        this.pipelines = this.pipelines.sort((a, b) => {
          return a.category.localeCompare(b.category);
        });
        this.pipelines = this.pipelines.sort((a, b) => {
          return a.projectName.localeCompare(b.projectName);
        });
        this.loadingState = LoadingState.Finished;
      });
    }
  }
}

/*this.pipelinesService.getPipelinesByBranch(project.id, "master").subscribe(pipelines => {
  if(pipelines != undefined && pipelines.length != 0) {
    this.pipelinesService.getPipeline(project.id, pipelines[0].id.toString()).subscribe(pipeline => {
      pipelines[0] = pipeline;
      pipelines[0].projectName = project.name;
      pipelines[0].projectId = project.id;
      pipelines[0].category = "master";
      this.pipelines.push(pipelines[0]);
    });
  }
});
this.pipelinesService.getPipelinesByBranch(project.id, "develop").subscribe(pipelines => {
  if(pipelines != undefined && pipelines.length != 0) {
    this.pipelinesService.getPipeline(project.id, pipelines[0].id.toString()).subscribe(pipeline => {
      pipelines[0] = pipeline;
      pipelines[0].projectName = project.name;
      pipelines[0].projectId = project.id;
      pipelines[0].category = "develop"
      this.pipelines.push(pipelines[0]);
    });
  }
  else{
    let unknownPipeline = new Pipeline();
    unknownPipeline.projectId = project.id;
    unknownPipeline.category = "no develop";
    unknownPipeline.status = "no develop branch for this project";
    unknownPipeline.projectName = project.name;
    unknownPipeline.id = 0;
    this.pipelines.push(unknownPipeline);
  }
});
this.pipelinesService.getPipelinesByBranch(project.id, "qa").subscribe(pipelines => {
  if(pipelines != undefined && pipelines.length != 0){
    this.pipelinesService.getPipeline(project.id, pipelines[0].id.toString()).subscribe(pipeline => {
      pipelines[0] = pipeline;
      pipelines[0].projectName = project.name;
      pipelines[0].category = "qa"
      pipelines[0].projectId = project.id;
      this.pipelines.push(pipelines[0]);
    });
  }
  else{
    let unknownPipeline = new Pipeline();
    unknownPipeline.projectId = project.id;
    unknownPipeline.category = "no qa";
    unknownPipeline.status = "no qa branch for this project";
    unknownPipeline.projectName = project.name;
    unknownPipeline.id = 0;
    this.pipelines.push(unknownPipeline);
  }
});*/
