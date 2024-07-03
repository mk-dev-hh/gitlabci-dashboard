import { Configuration, ConfigurationDto } from 'src/app/services/configuration/configuration.dto';
import { ProjectsStubs } from './projects.stubs';

export class ConfigurationStubs{

  static get Configuration1(): Configuration {
    let configuration: Configuration = new Configuration();
    configuration.configurationSet = true;
    configuration.dashboardProjectIds = [ProjectsStubs.Project1.id, ProjectsStubs.Project4.id];
    return configuration;
  }

  static get Configuration2(): Configuration {
    let configuration: Configuration = new Configuration();
    configuration.configurationSet = true;
    configuration.dashboardProjectIds = [ProjectsStubs.Project1.id];
    return configuration;
  }

  static get Configuration3(): Configuration {
    let configuration: Configuration = new Configuration();
    configuration.configurationSet = true;
    configuration.dashboardProjectIds = [ProjectsStubs.Project1.id];
    return configuration;
  }

  static get ConfigurationDto1(): ConfigurationDto {
    let configurationDto: ConfigurationDto = new ConfigurationDto();
    configurationDto.configurationSet = true;
    configurationDto.dashboardProjects = ProjectsStubs.AllConfiguredProjects;
    return configurationDto;
  }

  static get ConfigurationDto2(): ConfigurationDto {
    let configurationDto: ConfigurationDto = new ConfigurationDto();
    configurationDto.configurationSet = true;
    configurationDto.dashboardProjects = ProjectsStubs.AllConfiguredProjects;
    return configurationDto;
  }

  static get ConfigurationDto3(): ConfigurationDto {
    let configurationDto: ConfigurationDto = new ConfigurationDto();
    configurationDto.configurationSet = true;
    configurationDto.dashboardProjects = ProjectsStubs.AllConfiguredProjects;
    return configurationDto;
  }
}
