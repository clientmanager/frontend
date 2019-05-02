import { Component, OnInit } from '@angular/core';
import { User } from '../../sharedclasses/user';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-users-add-form',
  templateUrl: './manage-users-add-form.component.html',
  styleUrls: ['./manage-users-add-form.component.css']
})
export class ManageUsersAddFormComponent implements OnInit {
  model:any = {};
  // user = new User();
  user:any = {gender: "M"};

  constructor(private service: AdminService, private _router: Router) { }

  ngOnInit() {
  }

  createUser(): void{
    this.service.createUser(this.user)
      .subscribe((response)=>{
        console.log(response);
      }, (error) =>{
        console.log(error);
      });
    this.service.previousPageSetter('user');
    this._router.navigate(['/admin']);
  }

}
