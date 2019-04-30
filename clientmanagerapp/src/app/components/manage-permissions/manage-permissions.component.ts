import { Component, OnInit } from '@angular/core';
import { Permission } from '../../sharedclasses/permission';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-permissions',
  templateUrl: './manage-permissions.component.html',
  styleUrls: ['./manage-permissions.component.css']
})
export class ManagePermissionsComponent implements OnInit {
  permission = new Permission();
  public permissions = [];

  constructor(private service: AdminService, private _router: Router) { }

  ngOnInit() {
    this.getAllPermissions()
  }

  getAllPermissions(): void{
    this.service.getAllPermissions()
      .subscribe((data) => {
        this.permissions = data;
        console.log(data);
      });
  }

  updatePermission(permission): void{
    this.service.permissionSetter(permission);
    this._router.navigate(["/manage-permissions-edit-form"]);
  }

  deletePermission(permission_id: Number){
    this.service.deletePermission(permission_id)
      .subscribe((response) => {
        this.getAllPermissions();
      });
  }
}
