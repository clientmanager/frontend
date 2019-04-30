import { Component, OnInit } from '@angular/core';
import { Team } from '../../sharedclasses/team';
import { Permission } from '../../sharedclasses/permission';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-teams-view-permissions',
  templateUrl: './manage-teams-view-permissions.component.html',
  styleUrls: ['./manage-teams-view-permissions.component.css']
})
export class ManageTeamsViewPermissionsComponent implements OnInit {
  team = new Team();
  permission = new Permission();
  public permissions: any = [];
  public allPermissions: any =[];

  constructor(private service: AdminService, private _router: Router) { }

  ngOnInit() {
    this.team = this.service.teamGetter();
    this.permissions = this.service.teamGetter().grouppermissions;
    this.getAllPermissions();
  }

  getAllPermissions(){
    return this.service.getAllPermissions()
    .subscribe((response)=>{
      this.allPermissions = response;
    });
  }

  addTeamPermission(team_id: Number, permission_id: Number): void{
    this.service.addTeamPermission(team_id, permission_id)
      .subscribe((response)=>{
        this._router.navigate(["/admin"]);
        console.log(response);
      }, (error) =>{
        console.log(error);
      });
  }
        
  removeTeamPermission(team_id: Number, permission_id: Number): void{
    this.service.removeTeamPermission(team_id, permission_id)
      .subscribe((response)=>{
        this._router.navigate(["/admin"]);
        console.log(response);
      }, (error) =>{
        console.log(error);
      });
  }

}
