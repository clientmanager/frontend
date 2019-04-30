import { Component, OnInit } from '@angular/core';
import { Team } from '../../sharedclasses/team';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-teams',
  templateUrl: './manage-teams.component.html',
  styleUrls: ['./manage-teams.component.css']
})
export class ManageTeamsComponent implements OnInit {
  team = new Team();
  public teams = [];
  public permissions = [];

  constructor(private service: AdminService, private _router: Router) { }

  ngOnInit() {
    this.getAllTeams();
  }

  getAllTeams(): void{
    this.service.getAllTeams()
      .subscribe((data) => {
        this.teams = data;
        console.log(data);
      });
  }

  viewTeamMembers(team): void{
    this.service.teamSetter(team);
    this._router.navigate(["/manage-teams-view-members"]);
  }

  viewTeamPermissions(team): void{
    this.service.teamSetter(team);
    this._router.navigate(["/manage-teams-view-permissions"]);
  }

  updateTeam(team): void{
    this.service.teamSetter(team);
    this._router.navigate(["/manage-teams-edit-form"]);
  }

  deleteTeam(team_id: Number){
    this.service.deleteTeam(team_id)
      .subscribe((response) => {
        this.getAllTeams();
      });
  }

}
