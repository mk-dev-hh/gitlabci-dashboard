import { Component, OnInit } from '@angular/core';
import { Configuration, ConfigurationDto } from '../../services/configuration/configuration.dto';
import { ConfigurationService } from '../../services/configuration/configuration.service';
import { ProjectService } from '../../services/projects/project.service';
import { Project } from '../../services/projects/project.dto';
import { LoadingState } from 'src/app/shared/classes/loading-state';
import { NotificationMsg } from '../../services/notification/msg.dto';

@Component({
  selector: 'dd-settings-overview-page',
  templateUrl: './settings-overview-page.component.html',
  styleUrls: ['./settings-overview-page.component.scss']
})
export class SettingsOverviewPageComponent implements OnInit {

  public LoadingState = LoadingState;
  public loadingState = LoadingState.Loading;
  public loadingError: NotificationMsg;

  configurationDto: ConfigurationDto;

  constructor(private projectService: ProjectService, private configService: ConfigurationService) { }

  ngOnInit(): void {
    this.projectService.getConfigurationDto().subscribe(config => {
      this.configurationDto = config;
      this.loadingState = LoadingState.Finished;
      console.log(this.configurationDto);
    });
  }

  applyNewDashboardProjectsConfig(projects: Project[]){
    this.configurationDto.dashboardProjects = projects;
  }

  saveConfig(){
    this.projectService.saveNewConfiguration(this.configurationDto).subscribe();
  }

}
