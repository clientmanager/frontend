import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import { delay } from 'q';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private service: AdminService, private _router: Router) { }

  private loadComponentUsers = false;
  private loadComponentPermissions = false;
  private loadComponentRoles = false;
  private loadComponentTeams = false;
  previousPage = this.service.previousPageGetter();


  loadManageReset(){
    document.getElementById("admin_dashboard").classList.remove("active")
    document.getElementById("manage_users").classList.remove("active")
    document.getElementById("manage_permissions").classList.remove("active")
    document.getElementById("manage_roles").classList.remove("active")
    document.getElementById("manage_teams").classList.remove("active")
    this.loadComponentUsers = false;
    this.loadComponentPermissions = false;
    this.loadComponentRoles = false;
    this.loadComponentTeams = false;
  }
  loadManageUserComponent(){
    document.getElementById("manage_users").classList.add("active")
    this.loadComponentUsers = true;
  }
  loadManagePermissionComponent(){
    document.getElementById("manage_permissions").classList.add("active")
    this.loadComponentPermissions = true;
  }
  loadManageRolesComponent(){
    document.getElementById("manage_roles").classList.add("active")
    this.loadComponentRoles= true;
  }
  loadManageTeamsComponent(){
    document.getElementById("manage_teams").classList.add("active")
    this.loadComponentTeams= true;
  }

  private changeActive(){
    document.getElementById("manage_users").classList.add("active")
  }

  ngOnInit() {
    this.previousPage = this.service.previousPageGetter();

    //dont worry about this. look away
    for (let index = 0; index < 500; index++) {
      var temp = temp + 1;
      console.log(temp);
    }

    if(this.previousPage=='user'){
      this.loadManageReset();
      this.loadManageUserComponent();
    }
    else if(this.previousPage=='permission'){
      this.loadManageReset();
      this.loadManagePermissionComponent();
    }
    else if(this.previousPage=='role'){
      this.loadManageReset();
      this.loadManageRolesComponent();
    }
    else if(this.previousPage=='team'){
      this.loadManageReset();
      this.loadManageTeamsComponent();
    }
    
  }

}
