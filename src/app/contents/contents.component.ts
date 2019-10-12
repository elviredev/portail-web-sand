import { Component, OnInit } from '@angular/core';
import { PortailService } from '../services/portail.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
  contentList;

  // le constructeur se charge une seule fois donc il faut écouter l'url pour que changement OK
  // Navigation Start : on peut récupérer paramètres avant que l'url change
  // Navigation End : on peut récupérer paramètres quand l'url change
  constructor(private portailService: PortailService, private route: ActivatedRoute, private router: Router) {
    router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        console.log('url encodée Base64: ' + this.route.snapshot.params.urlContents);
        let param: string = this.route.snapshot.params.urlContents;
        let urlContents = atob(param); // url décodée en base 64
        console.log('url décodée Base64: ' + urlContents);
        this.getContents(urlContents);
      }
    });
   }

  ngOnInit() {
  }

  // récupère contenus via l'url décodée en Base 64 et via le Service
  getContents(urlContents){
    this.portailService.getRessource(urlContents)
        .subscribe(data => {
          this.contentList = data;
        }, err => {
          console.log(err);
        });
  }

}
