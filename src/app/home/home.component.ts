import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
// @ts-ignore
import Typewriter from 't-writer.js';

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
    const target = document.querySelector('.introP');

    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: 'red'
    })
    const target2 = document.querySelector('.tw');

    const writer2 = new Typewriter(target2, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: 'red'
    })
    
    writer
      .type('Hi!')
      .rest(500)
      .type('My name is Sven Broman!')
      .rest(5000)
      .start()
    
    writer2
      .type('')
      .rest(500)
      .changeOps({ deleteSpeed: 80 })
      .remove(4)
      .type('edit')
      .rest(500)
      .remove(4)
      .type('synchronize callbacks')
      .rest(500)
      .changeOps({ deleteSpeed: 20 })
      .remove(21)
      .type('change options on the go')
      .rest(500)
      .clear()
      .start()
  }

  getUserList()
  {
    this.httpClient.get("https://jsonplaceholder.typicode.com/todos/").subscribe((result:any) =>
    {
      this.userList = result;
    })
  }
}
