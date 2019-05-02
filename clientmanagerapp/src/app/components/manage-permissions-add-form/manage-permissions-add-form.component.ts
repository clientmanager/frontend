import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import { Permission } from '../../sharedclasses/permission';

@Component({
  selector: 'app-manage-permissions-add-form',
  templateUrl: './manage-permissions-add-form.component.html',
  styleUrls: ['./manage-permissions-add-form.component.css']
})
export class ManagePermissionsAddFormComponent implements OnInit {

  permission:any = {permissiontype: "ROLE"};

  constructor(private service: AdminService, private _router: Router) { }

  ngOnInit() {
  }

  createPermission(): void{
    this.service.createPermission(this.permission)
      .subscribe((response)=>{
        console.log(response);
      }, (error) =>{
        console.log(error);
      });
    this.service.previousPageSetter('permission');
    this._router.navigate(['/admin']);
  }

}
