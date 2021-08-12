import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  register:boolean = false;


  signUp  = this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required],
    registered:['true']
  });

  login = this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required],
    registered:['false']//..,,,mmmn

  });

  get registerFormControl() {
    return this.login.controls;
  }

  Change(variable:boolean)
  {
    if(this.register==!variable)
    this.register = !this.register;
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
