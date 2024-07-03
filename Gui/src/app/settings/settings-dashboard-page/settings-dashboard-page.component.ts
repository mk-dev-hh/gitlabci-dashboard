import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../../services/projects/project.dto';
import { ProjectService } from '../../services/projects/project.service';
import { ThemePalette } from '@angular/material/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'dd-settings-dashboard-page',
  templateUrl: './settings-dashboard-page.component.html',
  styleUrls: ['./settings-dashboard-page.component.scss']
})
export class SettingsDashboardPageComponent implements OnInit {
  allProjects: Project[];
  @Input() appliedNow: Project[];
  @Output() applyNewDashboardProjectsConfig: EventEmitter<Project[]> = new EventEmitter();
  availableProjects: Project[];
  newConfig: Project[];
  projectControl = new FormControl('', Validators.required);
  filteredProjects: Observable<Project[]>;


  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getAllRelevantProjects().subscribe(projects => {
      console.log(projects);
      this.allProjects = projects;
      this.availableProjects = new Array();
      this.newConfig = new Array();

      this.allProjects.forEach(element => this.availableProjects.push(element));
      this.appliedNow.forEach(element => {
        this.newConfig.push(element);
        this.availableProjects = this.availableProjects.filter(proj => proj.id !== element.id);
      });
      console.log(this.availableProjects);
      console.log(this.appliedNow);
      this.filteredProjects = this.projectControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value))
      );
    });
  }

  private _filter(value: string): Project[]{
    const filterValue = value.toLowerCase();
    return this.availableProjects.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  onAddToDashboard(project : Project){
    this.newConfig.push(project);
    this.availableProjects = this.availableProjects.filter(element =>
      element.id !== project.id
    );
    console.log("new dashboard config applied");
    console.log(this.newConfig)
    this.applyNewDashboardProjectsConfig.emit(this.newConfig);
  }

  onRemoveFromDashboard(project: Project){
    this.newConfig = this.newConfig.filter(element =>
        element.id !== project.id
    );
    this.availableProjects.push(project);
    this.applyNewDashboardProjectsConfig.emit(this.newConfig);
  }

  getColor(): ThemePalette{
    return "accent";
  }

  onRestore(){
    this.newConfig = this.appliedNow;
  }
}
