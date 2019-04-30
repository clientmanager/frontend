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
  }

}
