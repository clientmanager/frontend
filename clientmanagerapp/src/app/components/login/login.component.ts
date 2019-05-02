import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from 'src/app/services/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Guest';
  password = 'password';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }


  handleLogin(){
    
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      // this.router.navigate(['/home', this.username])
      this.router.navigate(['/home'])
      this.invalidLogin = false;
    }
    else{
      this.invalidLogin = true;
      
    }
  }

}
