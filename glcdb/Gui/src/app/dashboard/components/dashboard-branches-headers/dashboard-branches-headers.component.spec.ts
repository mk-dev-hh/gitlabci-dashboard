import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBranchesHeadersComponent } from './dashboard-branches-headers.component';

describe('DashboardBranchesHeadersComponent', () => {
  let component: DashboardBranchesHeadersComponent;
  let fixture: ComponentFixture<DashboardBranchesHeadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardBranchesHeadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBranchesHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
