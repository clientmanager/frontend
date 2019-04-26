import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardEditProfileComponent } from './user-dashboard-edit-profile.component';

describe('UserDashboardEditProfileComponent', () => {
  let component: UserDashboardEditProfileComponent;
  let fixture: ComponentFixture<UserDashboardEditProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDashboardEditProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
