import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor(private http:HttpClient) { }

  sendData(data:any){
    this.http.post("http://localhost:8080/user/addGroup",data);
  }
}
