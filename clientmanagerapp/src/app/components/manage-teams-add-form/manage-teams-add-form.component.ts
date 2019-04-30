import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import { Team } from '../../sharedclasses/team';
import { Permission } from '../../sharedclasses/permission';

@Component({
  selector: 'app-manage-teams-add-form',
  templateUrl: './manage-teams-add-form.component.html',
  styleUrls: ['./manage-teams-add-form.component.css']
})
export class ManageTeamsAddFormComponent implements OnInit {
  team = new Team();
  permission = new Permission();
  public permissions = [];

  constructor(private service: AdminService, private _router: Router) { }

  ngOnInit() {
    this.getAllPermissions();
  }

  createTeam(): void{
    this.service.createTeam(this.team)
      .subscribe((response)=>{
        console.log(response);
      }, (error) =>{
        console.log(error);
      });
    this._router.navigate(['/admin']);
  }

  getAllPermissions(): void{
    this.service.getAllPermissions()
      .subscribe((data) => {
        this.permissions = data;
        console.log(data);
      });
  }

}
