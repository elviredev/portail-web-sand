import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortailService {
  public BASE_URL: string = 'http://localhost:8087';

  constructor(private httpClient: HttpClient) { }

  getAllApplis() {
    return this.httpClient.get(`${this.BASE_URL}/coachedApplis`);
  }

  // récupérer n'importe quelle ressource par son utl avec spring data rest
  getRessource(url){
    return this.httpClient.get(url);
  }

}
