import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/sharedclasses/role';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { Permission } from '../../sharedclasses/permission';

@Component({
  selector: 'app-manage-roles-add-form',
  templateUrl: './manage-roles-add-form.component.html',
  styleUrls: ['./manage-roles-add-form.component.css']
})
export class ManageRolesAddFormComponent implements OnInit {
  role = new Role();
  permission = new Permission();
  public permissions = [];
  constructor(private service: AdminService, private _router: Router) { }

  ngOnInit() {
    this.getAllPermissions();
  }

  createRole(): void{
    this.service.createRole(this.role)
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
