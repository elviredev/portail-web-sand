import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class PortailService {
  
  public BASE_URL: string = 'http://localhost:8087';

  constructor(private httpClient: HttpClient, private authService: AuthenticationService) { }

  getAllApplis() {
    return this.httpClient.get(`${this.BASE_URL}/coachedApplis`);
  }

  // récupérer n'importe quelle ressource par son url avec spring data rest
  getRessource(url){
    return this.httpClient.get(url);
  }

  deleteRessource(url){
    let headers = new HttpHeaders({'authorization': 'Bearer ' + this.authService.jwt});
    return this.httpClient.delete(url, {headers: headers});
  }

  postRessource(url, data){
    let headers = new HttpHeaders({'authorization': 'Bearer ' + this.authService.jwt});
    return this.httpClient.post(url, data, {headers: headers});
  }

  putRessource(url, data){
    let headers = new HttpHeaders({'authorization': 'Bearer ' + this.authService.jwt});
    return this.httpClient.put(url, data, {headers: headers}); // patch => ne met à jour que les données qu'on envoi
  }

  patchRessource(url, data){
    let headers = new HttpHeaders({'authorization': 'Bearer ' + this.authService.jwt});
    return this.httpClient.patch(url, data, {headers: headers}); // patch => ne met à jour que la ou les données qu'on envoi
  }

}
