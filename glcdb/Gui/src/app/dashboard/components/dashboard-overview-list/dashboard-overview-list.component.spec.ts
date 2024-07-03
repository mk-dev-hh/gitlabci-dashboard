import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { DashboardOverviewListComponent } from './dashboard-overview-list.component';
import { MaterialModule } from '../../../shared/material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProjectService } from 'src/app/services/projects/project.service';
import { MockedProjectsService } from '../../../../mocks/mock-projects-service';

describe('DashboardOverviewListComponent', () => {
  let component: DashboardOverviewListComponent;
  let fixture: ComponentFixture<DashboardOverviewListComponent>;
  let mockedProjectService: MockedProjectsService

  beforeEach(async(() => {
    mockedProjectService = new MockedProjectsService();
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [DashboardOverviewListComponent],
      providers: [
        { provide: ProjectService, useValue:  mockedProjectService}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
        .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOverviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
