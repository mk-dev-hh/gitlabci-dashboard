import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsDashboardPageComponent } from './settings-dashboard-page.component';
import { ProjectService } from '../../services/projects/project.service';
import { MockedProjectsService } from '../../../mocks/mock-projects-service';
import { ProjectsStubs } from '../../../mocks/data/projects.stubs';

describe('SettingsDashboardPageComponent', () => {
  let component: SettingsDashboardPageComponent;
  let fixture: ComponentFixture<SettingsDashboardPageComponent>;
  let mockedProjectService: MockedProjectsService;

  beforeEach(async(() => {
    mockedProjectService = new MockedProjectsService();
    TestBed.configureTestingModule({
      declarations: [ SettingsDashboardPageComponent ],
      providers: [
        { provide: ProjectService, useValue: mockedProjectService}
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsDashboardPageComponent);
    component = fixture.componentInstance;
    component.appliedNow = ProjectsStubs.AllConfiguredProjects;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
