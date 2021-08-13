import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from './login.component';


@Injectable({
  providedIn: 'root'
})

export class LoginserviceService {

  constructor(private http:HttpClient) { }

  sendData(data:LoginComponent)
  {
    console.log(data);
    return this.http.post("local",data);
  }
}
