import { Project } from 'src/app/services/projects/project.dto';

export class ProjectsStubs{

  static get AllProjects(): Project[] {
    return [ this.Project1, this.Project2, this.Project3, this.Project4, this.Project5 ];
  }

  static get AllConfiguredProjects(): Project[] {
    return [ this.Project1, this.Project5 ];
  }

  static get Project1(): Project{
    let project: Project = new Project();
    project.id = '3335';
    project.defaultBranch = 'master';
    project.name = 'dms-config-app';
    return project;
  }

  static get Project2(): Project{
    let project: Project = new Project();
    project.id = '1234';
    project.defaultBranch = 'develop';
    project.name = 'angular-app';
    return project;
  }

  static get Project3(): Project{
    let project: Project = new Project();
    project.id = '1488';
    project.defaultBranch = 'develop';
    project.name = 'angular-app';
    return project;
  }

  static get Project4(): Project{
    let project: Project = new Project();
    project.id = '1756';
    project.defaultBranch = 'develop';
    project.name = 'angular-app';
    return project;
  }

  static get Project5(): Project{
    let project: Project = new Project();
    project.id = '4014';
    project.defaultBranch = 'develop';
    project.name = 'angular-app';
    return project;
  }
}
