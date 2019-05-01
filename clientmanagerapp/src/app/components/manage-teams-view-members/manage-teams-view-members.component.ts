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
  public teamMembers: any = [];
  public jobs = [];

  constructor(private service: AdminService, private _router: Router) { }

  ngOnInit() {
    this.team = this.service.teamGetter();
    this.teamMembers = this.getAllTeamMembers();
  }

  getAllTeamMembers(): void {
    this.service.getAllTeamMembers(this.team.groupname)
      .subscribe((data) => {
        this.teamMembers = data;
        console.log(data);
      });
  }

 viewTeamMembersAdd(team){
  this.service.teamSetter(team);
  this._router.navigate(["/manage-teams-view-members-add"]);
 }

}
