import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  
  register:boolean = false;

  Change(variable:boolean)
  {
    if(this.register==!variable)
    this.register = !this.register;
  }

  ngOnInit(): void {
  }

}
