import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor() { }

  private loadComponentUsers = false;
  private loadComponentPermissions = false;
  private loadComponentRoles = false;
  private loadComponentTeams = false;
  loadManageReset(){
    this.loadComponentUsers = false;
    this.loadComponentPermissions = false;
    this.loadComponentRoles = false;
    this.loadComponentTeams = false;
  }
  loadManageUserComponent(){
    this.loadComponentUsers = true;
  }
  loadManagePermissionComponent(){
    this.loadComponentPermissions = true;
  }
  loadManageRolesComponent(){
    this.loadComponentRoles= true;
  }
  loadManageTeamsComponent(){
    this.loadComponentTeams= true;
  }

  private changeActive(){
    document.getElementById("manage_users").classList.add("active")
  }

  ngOnInit() {
  }

}
