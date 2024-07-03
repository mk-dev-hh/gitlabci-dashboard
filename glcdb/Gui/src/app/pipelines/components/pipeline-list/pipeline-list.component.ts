import { Component, Input, OnInit } from '@angular/core';
import { CommitsService } from '../../../services/commits/commits.service';
import { PipelinesService } from '../../../services/pipelines/pipelines.service';
import { Pipeline } from '../../../services/pipelines/pipeline.dto';

@Component({
  selector: 'dd-pipeline-list',
  templateUrl: './pipeline-list.component.html',
  styleUrls: ['./pipeline-list.component.scss']
})
export class PipelineListComponent implements OnInit {
  pipelines: Pipeline[];
  branchName: string;
  projectId: string;
  columns: string[] = ['Pipeline ID', 'Status', 'Started by', 'Created At', 'Total Time'];

  constructor(private pipelineService: PipelinesService) { }

  ngOnInit(): void {
    this.pipelines = new Array();
  }

  updateProjectId(projectId: string){
    this.projectId = projectId;
  }

  listBranchPipelines(branchName: string){
    this.branchName = branchName;
    this.pipelineService.getPipelinesByBranch(this.projectId, this.branchName).subscribe(pipelines => {
      this.pipelines = pipelines;
    });
  }

}
