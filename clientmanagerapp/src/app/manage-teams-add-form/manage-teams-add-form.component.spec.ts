import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTeamsAddFormComponent } from './manage-teams-add-form.component';

describe('ManageTeamsAddFormComponent', () => {
  let component: ManageTeamsAddFormComponent;
  let fixture: ComponentFixture<ManageTeamsAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTeamsAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTeamsAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
