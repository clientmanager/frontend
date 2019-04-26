import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTeamsViewMembersComponent } from './manage-teams-view-members.component';

describe('ManageTeamsViewMembersComponent', () => {
  let component: ManageTeamsViewMembersComponent;
  let fixture: ComponentFixture<ManageTeamsViewMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTeamsViewMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTeamsViewMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
