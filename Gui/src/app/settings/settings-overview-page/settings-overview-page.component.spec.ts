import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsOverviewPageComponent } from './settings-overview-page.component';
import { MockedProjectsService } from '../../../mocks/mock-projects-service';
import { ProjectService } from 'src/app/services/projects/project.service';
import { ConfigurationService } from 'src/app/services/configuration/configuration.service';
import { MockedConfigurationService } from '../../../mocks/mock-configuration-service';

describe('SettingsOverviewPageComponent', () => {
  let component: SettingsOverviewPageComponent;
  let fixture: ComponentFixture<SettingsOverviewPageComponent>;
  let mockedProjectService: MockedProjectsService;
  let mockedConfigurationService: MockedConfigurationService;

  beforeEach(async(() => {
    mockedProjectService = new MockedProjectsService()
    mockedConfigurationService = new MockedConfigurationService();
    TestBed.configureTestingModule({
      declarations: [ SettingsOverviewPageComponent ],
      providers: [
        { provide: ProjectService, useValue: mockedProjectService},
        { provide: ConfigurationService, useValue: mockedConfigurationService}
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
