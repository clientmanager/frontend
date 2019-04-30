import { Component, OnInit } from '@angular/core';
import { User } from '../../sharedclasses/user';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-users-edit-form',
  templateUrl: './manage-users-edit-form.component.html',
  styleUrls: ['./manage-users-edit-form.component.css']
})
export class ManageUsersEditFormComponent implements OnInit {
  user :User;

  constructor(private service: AdminService, private _router: Router) { }

  ngOnInit() {
    this.user = this.service.userGetter();
  }

  updateUser(): void{
    this.service.updateUser(this.user)
      .subscribe((response)=>{
        console.log(response);
      }, (error) =>{
        console.log(error);
      });
    this._router.navigate(['/admin']);
  }
}
