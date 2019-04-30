import { Component, OnInit } from '@angular/core';
import { Team } from '../../sharedclasses/team';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-teams-view-members',
  templateUrl: './manage-teams-view-members.component.html',
  styleUrls: ['./manage-teams-view-members.component.css']
})
export class ManageTeamsViewMembersComponent implements OnInit {
  team = new Team();
  public jobs = [];

  constructor(private service: AdminService, private _router: Router) { }

  ngOnInit() {
    this.team = this.service.teamGetter();
  }

}
