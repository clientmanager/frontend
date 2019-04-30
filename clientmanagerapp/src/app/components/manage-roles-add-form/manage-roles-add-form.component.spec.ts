import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRolesAddFormComponent } from './manage-roles-add-form.component';

describe('ManageRolesAddFormComponent', () => {
  let component: ManageRolesAddFormComponent;
  let fixture: ComponentFixture<ManageRolesAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageRolesAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRolesAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
