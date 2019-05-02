import { Component, OnInit } from '@angular/core';
import { Team } from '../../sharedclasses/team';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-teams-edit-form',
  templateUrl: './manage-teams-edit-form.component.html',
  styleUrls: ['./manage-teams-edit-form.component.css']
})
export class ManageTeamsEditFormComponent implements OnInit {
  team = new Team();

  constructor(private service: AdminService, private _router: Router) { }

  ngOnInit() {
    this.team = this.service.teamGetter();
  }

  updateTeam(): void{
    this.service.updateTeam(this.team)
      .subscribe((response)=>{
        console.log(response);
      }, (error) =>{
        console.log(error);
      });
    this.service.previousPageSetter('team');
    this._router.navigate(['/admin']);
  }

}
