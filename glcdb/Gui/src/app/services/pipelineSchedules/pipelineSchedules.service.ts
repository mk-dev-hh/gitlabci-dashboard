import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { PipelineSchedule } from './pipelineSchedule.dto';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PipelineSchedulesService {

  constructor(private http:HttpClient) {  }

  getPipelineSchedules(projectId: string):Observable<PipelineSchedule[]> {

    const route: string = '/gitlabcidashboard/api/' + projectId + '/pipelineSchedules/';

    return this.http.get<PipelineSchedule[]>(route);
  }
}
