import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }
  clicked:boolean=false;

  ngOnInit(): void {
  }

  check()
  {
    this.clicked=!this.clicked;
  }

}
