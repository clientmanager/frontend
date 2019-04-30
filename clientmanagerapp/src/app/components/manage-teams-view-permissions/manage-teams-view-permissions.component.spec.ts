import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTeamsViewPermissionsComponent } from './manage-teams-view-permissions.component';

describe('ManageTeamsViewPermissionsComponent', () => {
  let component: ManageTeamsViewPermissionsComponent;
  let fixture: ComponentFixture<ManageTeamsViewPermissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTeamsViewPermissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTeamsViewPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
