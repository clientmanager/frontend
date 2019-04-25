import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor() { }

  private loadComponent = false;
  loadManageUserComponent(){
    this.loadComponent = true;
  }

  private changeActive(){
    document.getElementById("manage_users").classList.add("active")
  }

  ngOnInit() {
  }

}
