import { Component, OnInit } from '@angular/core';
import { Permission } from '../../sharedclasses/permission';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-permissions-edit-form',
  templateUrl: './manage-permissions-edit-form.component.html',
  styleUrls: ['./manage-permissions-edit-form.component.css']
})
export class ManagePermissionsEditFormComponent implements OnInit {
  permission: Permission;

  constructor(private service: AdminService, private _router: Router) { }

  ngOnInit() {
    this.permission = this.service.permissionGetter();
  }

  updatePermission(): void{
    this.service.updatePermission(this.permission)
      .subscribe((response)=>{
        console.log(response);
      }, (error) =>{
        console.log(error);
      });
    this._router.navigate(['/admin']);
  }
}
