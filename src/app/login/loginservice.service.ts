import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class LoginserviceService {

  url="http://localhost:8080/user/authenticate"

  constructor(private http:HttpClient) { }

  //for login user
  loginUser(token: any){
    localStorage.setItem("token",token)
    return true;
  }
  isLoggedIn(){
    let token=localStorage.getItem("token");
    if(token==undefined || token==''||token==null){
      return false;
    }else{
      return true;
    }
  }
  logout(){
    localStorage.removeItem('token');
    return true;
  }
  getToken(){
    return localStorage.getItem("token");

  }

  sendData(data:any)
  {
    console.log(data);
    return this.http.post("http://localhost:8080/user/authenticate",data
    )
  }
}
