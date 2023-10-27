import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {UsersService} from './users.service';
import { Stories } from 'src/stories';

const data = [];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
