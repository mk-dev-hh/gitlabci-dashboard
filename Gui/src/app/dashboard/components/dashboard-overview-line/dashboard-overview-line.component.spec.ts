import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOverviewLineComponent } from './dashboard-overview-line.component';
import { PipelineSchedulesService } from '../../../services/pipelineSchedules/pipelineSchedules.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Project } from '../../../services/projects/project.dto';
import { SharedModule } from '../../../shared/shared.module';
import { MockLoadingScreenService } from '../../../../mocks/mock-loading-screen-service';
import { LoadingScreenService } from '../../../services/loading-screen/loading-screen.service';
import { MockPipelineSchedulesService } from '../../../../mocks/mock-pipeline-schedules-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { NotificationService } from '../../../services/notification/notification.service';
import { MockNotificationService } from '../../../../mocks/mock-notification-service';
import { ProjectsStubs } from '../../../../mocks/data/projects.stubs';
import { PipelineSchedulesStubs } from '../../../../mocks/data/pipeline-schedules.stubs';

describe('DashboardOverviewLineComponent', () => {
  let component: DashboardOverviewLineComponent;
  let fixture: ComponentFixture<DashboardOverviewLineComponent>;

  let mockedPipelineSchedulesService: MockPipelineSchedulesService;
  let mockedNotificationService: MockNotificationService;


  beforeEach(async(() => {
    mockedPipelineSchedulesService = new MockPipelineSchedulesService();
    mockedNotificationService = new MockNotificationService();
    TestBed.configureTestingModule({
      declarations: [ DashboardOverviewLineComponent ],
      providers: [
        { provide: PipelineSchedulesService, useValue:  mockedPipelineSchedulesService},
        {provide: LoadingScreenService, useClass: MockLoadingScreenService},
        {provide: NotificationService, useValue: mockedNotificationService}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOverviewLineComponent);
    component = fixture.componentInstance;
    component.project = ProjectsStubs.Project1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getPipelineSchedules once', () => {
    mockedPipelineSchedulesService.getPipelineSchedules = jasmine.createSpy('mockedPipelineSchedulesService.getPipelineSchedules').and.returnValue(of(PipelineSchedulesStubs.AllPipelineSchedules));
    component.ngOnInit();
    expect(mockedPipelineSchedulesService.getPipelineSchedules).toHaveBeenCalledTimes(1);
  });

  it('should should be equal', () => {
    mockedPipelineSchedulesService.getPipelineSchedules = jasmine.createSpy('mockedPipelineSchedulesService.getPipelineSchedules').and.returnValue(of(PipelineSchedulesStubs.AllPipelineSchedules));
    component.ngOnInit()
    expect(component.pipelines[0].id).toEqual(PipelineSchedulesStubs.AllPipelineSchedules[0].lastPipeline.id);
  });

  it('should should not be equal', () => {
    mockedPipelineSchedulesService.getPipelineSchedules = jasmine.createSpy('mockedPipelineSchedulesService.getPipelineSchedules').and.returnValue(of(null));
    component.ngOnInit()
    expect(component.pipelines.length === PipelineSchedulesStubs.AllPipelineSchedules.length).toBeFalse();
  });
});
