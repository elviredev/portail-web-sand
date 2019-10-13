import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 
  BASE_URL_LOG: string = 'http://localhost:8080';
  jwt: string;
  username: string;
  roles: Array<string>;

  constructor(private httpClient: HttpClient) { }

  login(data){
    // récupère l'entête Authorization grace à l'option {observe: response} => on ne convertit plus en json, on veut toute la réponse http et après on récupère ce qu'on veut dans la réponse
    return this.httpClient.post(`${this.BASE_URL_LOG}/login`, data, { observe: 'response' });
  }

  saveToken(jwt: string) {
    // enregistrer token dans LocalStorage
    localStorage.setItem('token', jwt);
    // placer le jwt dans le context de l'application
    this.jwt = jwt;
    // à partir du jwt, récupérer username et roles
    this.parseJWT();
  }

  // a partir de jwt je récupère username et roles
  // library => npm install @auth0/angular-jwt
  parseJWT(){
    const jwtHelper = new JwtHelperService();
    const decodedToken = jwtHelper.decodeToken(this.jwt);
    this.username = decodedToken.sub;
    this.roles = decodedToken.roles;
  }

  // si chaine ADMIN est >= 0 c'est un ADMIN
  isAdmin(){
    return this.roles.indexOf('ADMIN') >=0;
  }

  // si chaine USER est >= 0 c'est un USER
  isUser(){
    return this.roles.indexOf('USER') >=0;
  }

  // utilisateur est authentifié si un rôle est définit => admin ou user
  isAuthenticated(){
    return this.roles && (this.isAdmin() || this.isUser());
  }

  // récupère le token au demarrage de la page principale si authentifié => plus besoin de s'authentifier à chaque fois 
  loadToken() {
   this.jwt = localStorage.getItem('token');
   if(this.jwt != null) {
     this.parseJWT();
   }
  }

  logOut() {
    localStorage.removeItem('token');
    this.initParams();
  }
  
  initParams(){
    this.jwt = undefined;
    this.username = undefined;
    this.roles = undefined;
  }

}
