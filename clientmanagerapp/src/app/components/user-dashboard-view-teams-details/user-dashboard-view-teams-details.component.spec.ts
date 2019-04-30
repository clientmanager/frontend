import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardViewTeamsDetailsComponent } from './user-dashboard-view-teams-details.component';

describe('UserDashboardViewTeamsDetailsComponent', () => {
  let component: UserDashboardViewTeamsDetailsComponent;
  let fixture: ComponentFixture<UserDashboardViewTeamsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDashboardViewTeamsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardViewTeamsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
