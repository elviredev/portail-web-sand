import { Component, OnInit } from '@angular/core';
import { PortailService } from '../services/portail.service';
import { Router, UrlHandlingStrategy } from '@angular/router';

@Component({
  selector: 'app-applis',
  templateUrl: './applis.component.html',
  styleUrls: ['./applis.component.css']
})
export class ApplisComponent implements OnInit {
  appliList;
  currentAppli;

  constructor(private portailService: PortailService, private router: Router) { }

  ngOnInit() {
    // récupère la liste des applis au chargement de la page
    this.portailService.getAllApplis()
        .subscribe(data => {
          this.appliList = data;
        }, err => {
          console.error(err);
        });
  }

  // récupère les contenus d'une appli avec clic sur l'appli et renvoi vers page "contents" avec url encodée en base 64
  onGetContentsAppli(appli){
    this.currentAppli = appli;
    console.log('appli : ' + appli._links.contentApplis.href);
    let urlContents = appli._links.contentApplis.href;
    this.router.navigateByUrl('/contents/' + btoa(urlContents)); // btoa() => encoder une url en string base 64
  
    
  }

  

}
