import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardViewProfileComponent } from './user-dashboard-view-profile.component';

describe('UserDashboardViewProfileComponent', () => {
  let component: UserDashboardViewProfileComponent;
  let fixture: ComponentFixture<UserDashboardViewProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDashboardViewProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardViewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
