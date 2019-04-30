import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUsersEditFormComponent } from './manage-users-edit-form.component';

describe('ManageUsersEditFormComponent', () => {
  let component: ManageUsersEditFormComponent;
  let fixture: ComponentFixture<ManageUsersEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageUsersEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUsersEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
