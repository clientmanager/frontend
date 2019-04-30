import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePermissionsAddFormComponent } from './manage-permissions-add-form.component';

describe('ManagePermissionsAddFormComponent', () => {
  let component: ManagePermissionsAddFormComponent;
  let fixture: ComponentFixture<ManagePermissionsAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePermissionsAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePermissionsAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
