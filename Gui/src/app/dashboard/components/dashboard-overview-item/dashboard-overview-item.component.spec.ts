import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { DashboardOverviewItemComponent } from './dashboard-overview-item.component';
import { Pipeline } from '../../../services/pipelines/pipeline.dto';
import { HttpClient } from '@angular/common/http';
import { PipelinesService } from '../../../services/pipelines/pipelines.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MaterialModule } from '../../../shared/material.module';
import { PipelineStubs } from '../../../../mocks/data/pipeline.stubs';
import { ProjectService } from '../../../services/projects/project.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { RouterLink } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('DashboardOverviewItemComponent', () => {
  let component: DashboardOverviewItemComponent;
  let fixture: ComponentFixture<DashboardOverviewItemComponent>;
  let mockedRouter;

  beforeEach(async(() => {
    /*mockedRouter = {
      navigateByUrl: jasmine.createSpy('navigateByUrl() spy').and.returnValue(Promise.resolve(true)),
      navigate: jasmine.createSpy('navigateByUrl() spy').and.returnValue(Promise.resolve(true)),
      events: of(null)
    };*/
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule],
      declarations: [DashboardOverviewItemComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]

    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOverviewItemComponent);
    component = fixture.componentInstance;
    component.pipeline = PipelineStubs.Pipeline1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return false running for failed pipeline', () =>{
    component.pipeline.status = 'failed';
    fixture.detectChanges();
    expect(component.setContainerColor().runningContainer).toBeFalse();
  });

  it('should return false running for failed pipeline', () =>{
    component.pipeline.status = 'failed';
    fixture.detectChanges();
    expect(component.setContainerColor().runningContainer).toBeFalse();
  });

  /*it('should return colour for success pipeline', () =>{

  });

  it('should retufor other pipeline', () =>{
  });*/


});
