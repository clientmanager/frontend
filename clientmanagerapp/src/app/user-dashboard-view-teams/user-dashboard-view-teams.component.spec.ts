import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardViewTeamsComponent } from './user-dashboard-view-teams.component';

describe('UserDashboardViewTeamsComponent', () => {
  let component: UserDashboardViewTeamsComponent;
  let fixture: ComponentFixture<UserDashboardViewTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDashboardViewTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardViewTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
