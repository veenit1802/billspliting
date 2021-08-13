import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HomepageService } from './homepage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor( private fb:FormBuilder,private hp:HomepageService ) { }
  clicked:boolean=false;

  ngOnInit(): void {
  }

  grp = this.fb.group({
    mem1:[''],
    mem2:[''],
    mem3:[''],
    mem4:[''],
    mem5:['']
  });

  check()
  {
    this.clicked=!this.clicked;
  }

  send()
  {
    this.hp.sendData(this.grp.value).subscribe(()=>{console.log("hello");})
  }

}
