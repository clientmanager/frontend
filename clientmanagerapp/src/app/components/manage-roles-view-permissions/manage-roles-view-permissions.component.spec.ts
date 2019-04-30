import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRolesViewPermissionsComponent } from './manage-roles-view-permissions.component';

describe('ManageRolesViewPermissionsComponent', () => {
  let component: ManageRolesViewPermissionsComponent;
  let fixture: ComponentFixture<ManageRolesViewPermissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageRolesViewPermissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRolesViewPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
