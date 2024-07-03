import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project.dto';
import { ConfigurationDto } from '../configuration/configuration.dto';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  constructor(private http:HttpClient) {  }

  getProjectById(projectId: string):Observable<Project> {
    const route: string = '/gitlabcidashboard/api/projects/' + projectId;
    return this.http.get<Project>(route);
  }

  getDashboardConfiguredProjects(): Observable<Project[]> {
    const route: string = '/gitlabcidashboard/api/projects/dashboard/';
    return this.http.get<Project[]>(route);
  }

  getConfigurationDto(): Observable<ConfigurationDto> {
    const route: string = '/gitlabcidashboard/api/projects/configurationDto';
    return this.http.get<ConfigurationDto>(route);
  }

  getAllRelevantProjects(): Observable<Project[]> {
    const route: string = '/gitlabcidashboard/api/projects/relevant';
    return this.http.get<Project[]>(route);
  }

  saveNewConfiguration(configurationDto: ConfigurationDto): Observable<any>{
    const route: string = '/gitlabcidashboard/api/projects/';
    return this.http.post<any>(route, configurationDto, httpOptions);
  }
}
