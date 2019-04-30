import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor() { }

  private loadComponentProfile = false;
  private loadComponentViewTeams = false;

  loadUserReset(){
    this.loadComponentProfile = false;
    this.loadComponentViewTeams = false;
  }

  loadComponentProfileComponent(){
    this.loadComponentProfile = true;
  }

  loadComponentViewTeamsComponent(){
    this.loadComponentViewTeams = true;
  }

  ngOnInit() {
  }

}
