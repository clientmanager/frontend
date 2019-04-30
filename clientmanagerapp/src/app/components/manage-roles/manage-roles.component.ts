import { Component, OnInit } from '@angular/core';
import { Role } from '../../sharedclasses/role';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-roles',
  templateUrl: './manage-roles.component.html',
  styleUrls: ['./manage-roles.component.css']
})
export class ManageRolesComponent implements OnInit {
  role = new Role();
  public roles = [];
  public permissions = [];

  constructor(private service: AdminService, private _router: Router) { }

  ngOnInit() {
    this.getAllRoles();
  }

  getAllRoles(): void{
    this.service.getAllroles()
      .subscribe((data) => {
        this.roles = data;
        console.log(data);
      });
  }

  viewRolePermissions(role): void{
    this.service.roleSetter(role);
    this._router.navigate(["/manage-roles-view-permissions"]);
  }

  updateRole(role): void{
    this.service.roleSetter(role);
    this._router.navigate(["/manage-roles-edit-form"]);
  }

  deleteRole(role_id: Number){
    this.service.deleteRole(role_id)
      .subscribe((response) => {
        this.getAllRoles();
      });
  }

}
