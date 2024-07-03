import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { ProjectsStubs } from './data/projects.stubs';
import { Project } from 'src/app/services/projects/project.dto';
import { ConfigurationDto } from '../app/services/configuration/configuration.dto';
import { ConfigurationStubs } from './data/configuration.stubs';

@Injectable()
export class MockedProjectsService {
  public getDashboardConfiguredProjects(projectId: string): Observable<Project[]> {
    let configuredProjects: Project[] = ProjectsStubs.AllProjects;
    return new Observable<Project[]>(subscriber => {
      subscriber.next(configuredProjects);
      subscriber.complete();
    });
  }

  getProjectById(projectId: string):Observable<Project> {
    return new Observable<Project>(subscriber => {
      subscriber.next(ProjectsStubs.Project2)
    });
  }

  getConfigurationDto(): Observable<ConfigurationDto> {
    const route: string = '/gitlabcidashboard/api/projects/configurationDto';
    return new Observable<ConfigurationDto>(subscriber => {
      subscriber.next(ConfigurationStubs.ConfigurationDto1);
      subscriber.complete();
    });
  }

  getAllRelevantProjects(): Observable<Project[]> {
    let configuredProjects: Project[] = ProjectsStubs.AllProjects;
    return new Observable<Project[]>(subscriber => {
      subscriber.next(configuredProjects);
      subscriber.complete();
    });
  }
}
