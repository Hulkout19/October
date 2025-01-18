import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private http:HttpClient){

  }

   onSubmit(data: {access_key: string, name: string, email: string, message: string;})
  {
    if(data.name == null || data.email == null || data.message == null || data.name.trim() == "" || data.email.trim() == "" || data.message.trim() == ""){
      alert("Please fill out all required fields before submitting.");
      return;
    }
    
    data.access_key = "636fd68f-5b13-4f70-8411-9d769c20ebb2";
    console.log(data);

    //data.author = "sven broman the man";
    //data.body = "the svennnn mannnn"

    this.http.post('https://api.web3forms.com/submit', data)
    //this.http.post('https://blogapi-6dx9.onrender.com/', data)
    //this.http.get('http://127.0.0.1:5000/')
    .subscribe((res) =>{
      console.warn("result",res)
    });
    alert("Message sent successfully!")


  }
}
