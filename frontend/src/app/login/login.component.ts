import { Component, OnInit } from '@angular/core';
import {LoginService} from "./login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginCredentials: LoginCredentials = new LoginCredentials();
  errorLoggingIn = false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.loginService.login(this.loginCredentials).subscribe(data =>{
      if(data.statusCode == 200){
        this.router.navigate(['/dashboard']);
        this.loginService.setUserInfo({'user': data['user']});
        this.errorLoggingIn = false;
      }
      else{
        this.errorLoggingIn = true;
      }
    })
  }

}
export class LoginCredentials
{
  email: string;
  password: string;
}
