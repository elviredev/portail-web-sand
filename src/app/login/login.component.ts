import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }
  onLogin(data){
    console.log(data);
    this.authService.login(data)
        .subscribe(resp => {
          console.log(resp);
          console.log('Header ' + resp.headers.get('Authorization'));
          let jwt = resp.headers.get('Authorization');
          this.authService.saveToken(jwt);
        }, err => {
          console.error(err);
        });
  }

  isAdmin(){
    return this.authService.isAdmin();
  }

  isUser(){
    return this.authService.isUser();
  }

}
