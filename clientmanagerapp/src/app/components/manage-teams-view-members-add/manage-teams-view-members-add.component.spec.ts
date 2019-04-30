import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTeamsViewMembersAddComponent } from './manage-teams-view-members-add.component';

describe('ManageTeamsViewMembersAddComponent', () => {
  let component: ManageTeamsViewMembersAddComponent;
  let fixture: ComponentFixture<ManageTeamsViewMembersAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTeamsViewMembersAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTeamsViewMembersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
