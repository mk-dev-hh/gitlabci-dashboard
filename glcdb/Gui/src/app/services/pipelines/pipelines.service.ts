import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Pipeline, PipelineTriggerUserInfo } from './pipeline.dto';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PipelinesService {

  constructor(private http:HttpClient) {  }

  getPipelines(projectId: string):Observable<Pipeline[]> {

    const route: string = '/gitlabcidashboard/api/' + projectId + '/pipelines/';

    return this.http.get<Pipeline[]>(route);
  }

  getPipeline(projectId: string, pipelineId:string):Observable<Pipeline> {

    const route: string = '/gitlabcidashboard/api/' + projectId + '/pipelines/'+ pipelineId;

    return this.http.get<Pipeline>(route);
  }

  getPipelinesByBranch(projectId: string, branchName: string):Observable<Pipeline[]> {
    const route: string = '/gitlabcidashboard/api/' + projectId + '/pipelines/branch/' + branchName;
    return this.http.get<Pipeline[]>(route);
  }

  getPipelineTriggerUserInfo(projectId: string, pipelineId: number):Observable<PipelineTriggerUserInfo> {
    const route: string = '/gitlabcidashboard/api/' + projectId + '/pipelines/' + pipelineId + '/triggerUserInfo';
    return this.http.get<PipelineTriggerUserInfo>(route);
  }
}
