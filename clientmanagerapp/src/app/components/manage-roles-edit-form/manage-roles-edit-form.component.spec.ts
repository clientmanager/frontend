import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRolesEditFormComponent } from './manage-roles-edit-form.component';

describe('ManageRolesEditFormComponent', () => {
  let component: ManageRolesEditFormComponent;
  let fixture: ComponentFixture<ManageRolesEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageRolesEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRolesEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
