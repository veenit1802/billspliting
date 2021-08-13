import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class LoginserviceService {

  constructor(private http:HttpClient) { }

  sendData(data:any)
  {
    console.log(data);
    return this.http.post("http://localhost:8080/user/authenticate",{
      "emailId":"veenitshukla20@",
      "password":"ve12",
      "registered":"true"
    }
    ).subscribe(()=>{
      console.log("hello");
    })
  }
}
