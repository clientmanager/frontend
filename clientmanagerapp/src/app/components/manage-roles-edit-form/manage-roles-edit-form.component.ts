import { Component, OnInit } from '@angular/core';
import { Role } from '../../sharedclasses/role';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import { Permission } from '../../sharedclasses/permission';

@Component({
  selector: 'app-manage-roles-edit-form',
  templateUrl: './manage-roles-edit-form.component.html',
  styleUrls: ['./manage-roles-edit-form.component.css']
})
export class ManageRolesEditFormComponent implements OnInit {
  role:any = {};
  permission = new Permission();
  public permissions = [];

  constructor(private service: AdminService, private _router: Router) { }

  ngOnInit() {
    this.role = this.service.roleGetter();
    //this.role = {active: this.role.active};
    this.getAllPermissions();
  }

  updateRole(): void{
    this.service.updateRole(this.role)
      .subscribe((response)=>{
        console.log(response);
      }, (error) =>{
        console.log(error);
      });
    this.service.previousPageSetter('role');
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
