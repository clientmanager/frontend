import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/sharedclasses/role';
import { Permission } from 'src/app/sharedclasses/permission';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-roles-view-permissions',
  templateUrl: './manage-roles-view-permissions.component.html',
  styleUrls: ['./manage-roles-view-permissions.component.css']
})
export class ManageRolesViewPermissionsComponent implements OnInit {
  role = new Role();
  permission = new Permission();
  public permissions: any = [];
  public allPermissions: any =[];

  constructor(private service: AdminService, private _router: Router) { }

  ngOnInit() {
    this.role = this.service.roleGetter();
    this.permissions = this.service.roleGetter().rolepermissions;
    this.getAllPermissions();
  }

  
  getAllPermissions(){
    return this.service.getAllPermissions()
    .subscribe((response)=>{
      this.allPermissions = response;

      // this.allPermissions = this.allPermissions.filter(val => !this.permissions.includes(val));
      // console.log(this.allPermissions);
    });
  }

  addRolePermission(role_id: Number, permission_id: Number): void{
    this.service.addRolePermission(role_id, permission_id)
      .subscribe((response)=>{
        this.service.previousPageSetter('role');
        this._router.navigate(["/admin"]);
        console.log(response);
      }, (error) =>{
        console.log(error);
      });
  }
        
  removeRolePermission(role_id: Number, permission_id: Number): void{
    this.service.removeRolePermission(role_id, permission_id)
      .subscribe((response)=>{
        this.service.previousPageSetter('role');
        this._router.navigate(["/admin"]);
        console.log(response);
      }, (error) =>{
        console.log(error);
      });
  }

}
