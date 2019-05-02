import { Component, OnInit } from '@angular/core';
import { Team } from '../../sharedclasses/team';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import { User } from '../../sharedclasses/user';

@Component({
  selector: 'app-manage-teams-view-members-add',
  templateUrl: './manage-teams-view-members-add.component.html',
  styleUrls: ['./manage-teams-view-members-add.component.css']
})
export class ManageTeamsViewMembersAddComponent implements OnInit {

  public show_result : boolean = false;
  public button_name : any = 'Show Search Results!';
  public allUsers: any = [];
  public allRoles: any = [];
  team = new Team();
  users: any = [];
  searchId = "";
  selectedRoleId: any;

  constructor(private service: AdminService, private _router: Router) { }

  ngOnInit() {
    this.team = this.service.teamGetter();
    this.allUsers = this.getAllUsers();
    this.allRoles = this.getAllRoles();
  }

  getAllUsers(): void {
    console.log("inside getAllUsers()");
    this.service.getAllUsers()
      .subscribe((data) => {
        this.allUsers = data;
        console.log(data);
      });
  }

  getAllRoles(): void{
    this.service.getAllroles()
      .subscribe((data) => {
        this.allRoles = data;
        console.log(data);
      });
  }

  getUserById(searchId): void{
    this.service.getUserById(searchId)
      .subscribe((data) => {
        this.users.push(data);
        console.log(data);
      });
  }

  changeSelectedRoleId(roleId){
    if(roleId != null){
      this.selectedRoleId = roleId;
    }
  }

  searchUser(searchId): void{
    //this.show_result = !this.show_result;
    this.team = this.service.teamGetter();
    this.show_result = true;
    this.getUserById(searchId);
  }


  createJob(userId, teamId): void{
    // alert(userId + " " + teamId + " " + this.selectedRoleId);
    this.service.createJob(userId, teamId, this.selectedRoleId)
    .subscribe((response)=>{
      console.log(response);
    }, (error) =>{
      console.log(error);
    });
  this.service.previousPageSetter('team');
  this._router.navigate(['/admin']);
  }

  

}
