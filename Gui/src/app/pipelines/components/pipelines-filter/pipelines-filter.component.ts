import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Branch } from '../../../services/branches/branch.dto';
import { BranchesService } from '../../../services/branches/branches.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../../services/projects/project.service';
import { Project } from '../../../services/projects/project.dto';

@Component({
  selector: 'dd-pipelines-filter',
  templateUrl: './pipelines-filter.component.html',
  styleUrls: ['./pipelines-filter.component.scss']
})

export class PipelinesFilterComponent implements OnInit, OnDestroy {
  @Output() listBranchPipelines: EventEmitter<string> = new EventEmitter();
  @Output() updateProjectId: EventEmitter<string> = new EventEmitter();
  branchesOfSelectedProject: Branch[];
  projects: Project[];
  currentId: string;
  private sub: any;

  projectControl = new FormControl('', Validators.required);
  branchControl = new FormControl('', Validators.required);

  constructor(private branchesService: BranchesService, private router: Router, private activatedRoute: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getDashboardConfiguredProjects().subscribe(projects => {
      this.projects = projects;
      console.log(projects);
      this.sub = this.activatedRoute.params.subscribe(params => {
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;

          if(params['projectName'] === undefined){
            this.branchesService.getBranches(this.projects[0].id).subscribe(branches => {
              this.branchesOfSelectedProject = branches;
              this.projectControl.setValue(this.projects[0].name);
              this.branchControl.setValue(this.projects[0].defaultBranch);
              this.updateBranchList(this.projects[0].id);
              this.currentId = this.projects[0].id;
              this.selectBranch(this.projects[0].defaultBranch);
            });
          }
          else if(params['branchName'] === undefined) {
            this.branchesService.getBranches(params['projectName']).subscribe(branches => {
              this.branchesOfSelectedProject = branches;
              this.projectControl.setValue(this.projects.filter(element => element.id == params['projectName'])[0].name);
              this.currentId = this.projects.filter(element => element.id == params['projectName'])[0].id;
              this.branchControl.setValue(this.projects.filter(element => element.id == params['projectName'])[0].defaultBranch);
              this.updateBranchList(params['projectName']);
              this.selectBranch(this.projects.filter(element => element.id == params['projectName'])[0].defaultBranch);
            });
          }
          else {
            this.branchesService.getBranches(params['projectName']).subscribe(branches => {
              this.branchesOfSelectedProject = branches;
              this.projectControl.setValue(this.projects.filter(element => element.id == params['projectName'])[0].name);
              this.currentId = this.projects.filter(element => element.id == params['projectName'])[0].id;
              this.branchControl.setValue(this.placeSlashInBranchName(params['branchName']));
              this.updateBranchList(params['projectName']);
              this.selectBranch(params['branchName']);
            });
          }
        });
    });

  }

  updateBranchList(projectId: string){
    this.updateProjectId.emit(projectId);
  }

  navToProj(projectId: string){
    this.router.navigate(['/pipelines', projectId, this.projects.filter(element => element.id == projectId)[0].defaultBranch]).finally(() => {});
  }

  navToBranch(branchName: string){
    this.router.navigate(['/pipelines', this.currentId , this.replaceSlashInBranchName(branchName)]).finally(() => {});
  }

  selectBranch(branchName: string){
    branchName = this.replaceSlashInBranchName(branchName);
    this.listBranchPipelines.emit(branchName);
  }

  private replaceSlashInBranchName(branchName: string): string {
    if(branchName.includes('/')){
      let branchNameSplit: string[] = branchName.split('/');
      return branchNameSplit.join('22F');
    }
    else return branchName;
  }

  private placeSlashInBranchName(branchName: string): string{
    if(branchName.includes('22F')){
      let branchNameSplit: string[] = branchName.split('22F');
      return branchNameSplit.join('/');
    }
    else return branchName;
  }

  ngOnDestroy(): void {
    try{
      this.sub.unsubscribe();
    }
    catch(er){}
  }

}
