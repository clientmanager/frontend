import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUsersAddFormComponent } from './manage-users-add-form.component';

describe('ManageUsersAddFormComponent', () => {
  let component: ManageUsersAddFormComponent;
  let fixture: ComponentFixture<ManageUsersAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageUsersAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUsersAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
