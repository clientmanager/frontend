import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import { User } from '../../sharedclasses/user';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  user = new User();
  public users = [];
  constructor(private service: AdminService, private _router: Router) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(): void {
    console.log("inside getAllUsers()");
    this.service.getAllUsers()
      .subscribe((data) => {
        this.users = data;
        console.log(data);
      });
  }

  updateUser(user): void{
    this.service.userSetter(user);
    this._router.navigate(["/manage-user-edit-form"]);
  }

  deleteUser(user_id: Number){
    this.service.deleteUser(user_id)
      .subscribe((response) => {
        this.getAllUsers();
      });
  }

}
