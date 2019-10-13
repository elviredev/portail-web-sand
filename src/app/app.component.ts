import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { PortailService } from './services/portail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  title = 'shop-service-frontend';

  constructor(private authService: AuthenticationService){}

  ngOnInit(): void {
    this.authService.loadToken();
  }

  isAdmin(){
    return this.authService.isAdmin();
  }

  isUser(){
    return this.authService.isUser();
  }

  isAuthenticated(){
    return this.authService.isAuthenticated();
  }

  logOut(){
    return this.authService.logOut();
  }
}
