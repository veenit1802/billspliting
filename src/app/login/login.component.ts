import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LoginserviceService } from './loginservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  register:boolean = false;


  signUp  = this.fb.group({
    emailId:['',Validators.required],
    password:['',Validators.required],
    registered:['true']
  });

  login = this.fb.group({
    emailId:['',Validators.required],
    password:['',Validators.required],
    registered:['false']

  });

  get registerFormControl() {
    return this.login.controls;
  }

  Change(variable:boolean)
  {
    if(this.register==!variable)
    this.register = !this.register;
  }



  constructor(private fb:FormBuilder,private   loginService:LoginserviceService) { }

  ngOnInit(): void {
  }

  sendLogin()
  {
    this.loginService?.sendData(this.login.value);
  }

  sendSignup()
  {
    this.loginService.sendData(this.signUp.value);
  }

}
