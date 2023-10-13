import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'red-october from another mother';

  userList: any;
  
  constructor(private httpClient: HttpClient){

    this.userList = [];
  }
  ngOnInit(): void
  {
    this.getUserList()
  }

  getUserList()
  {
    this.httpClient.get("https://jsonplaceholder.typicode.com/todos/").subscribe((result:any) =>
    {
      this.userList = result;
    })
  }
}
