import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePermissionsEditFormComponent } from './manage-permissions-edit-form.component';

describe('ManagePermissionsEditFormComponent', () => {
  let component: ManagePermissionsEditFormComponent;
  let fixture: ComponentFixture<ManagePermissionsEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePermissionsEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePermissionsEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
