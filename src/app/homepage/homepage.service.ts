import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor(private http:HttpClient) { }

  sendData(data:any){
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    return this.http.post("http://localhost:8080/user/addGroup",data,{headers:headers_object});
  }
}
