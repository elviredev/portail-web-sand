import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

statsImg = 'assets/images/stats-digital.jpg';

  constructor() { }

  ngOnInit() {
  }

}
