import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-teams-view-members-add',
  templateUrl: './manage-teams-view-members-add.component.html',
  styleUrls: ['./manage-teams-view-members-add.component.css']
})
export class ManageTeamsViewMembersAddComponent implements OnInit {

  public show_result : boolean = false;
  public button_name : any = 'Show Search Results!';

  constructor() { }

  ngOnInit() {
  }

  searchUser(){
    this.show_result=!this.show_result;
    
    //create User object from SQL query
    //If User object == null, return "not found" message and show_result = FALSE
    //If User Object != null, populate div in .htm and show_result = TRUE


    console.log("you tickled me")
    if(this.show_result){
      this.button_name = "Hide Search Results!"
      
    }
    else{
      this.button_name = "Show Search Results!"
    }
  }

}
