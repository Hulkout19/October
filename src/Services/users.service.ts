import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) 
  {}
  url = "https://blogapi-6dx9.onrender.com/";
  getData()
  {
    
    return this.http.get(this.url);
  }
  saveData(data: any){
    return this.http.post(this.url, data);
  }
  
}