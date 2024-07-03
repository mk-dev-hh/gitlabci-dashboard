import { Project } from '../projects/project.dto';

export class ConfigurationDto{
  configurationSet: boolean;
  dashboardProjects: Project[];
}

export class Configuration{
  configurationSet: boolean;
  dashboardProjectIds: string[];
}
