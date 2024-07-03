import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/projects/project.service';
import { Project } from '../../../services/projects/project.dto';

@Component({
  selector: 'dd-dashboard-overview-list',
  templateUrl: './dashboard-overview-list.component.html',
  styleUrls: ['./dashboard-overview-list.component.scss']
})

export class DashboardOverviewListComponent implements OnInit {
  projects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    console.log(this.projectService);
    this.projectService.getDashboardConfiguredProjects().subscribe( projects => {
    console.log(projects);
    this.projects = new Array();
    this.projects = projects.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  });
  }
}
