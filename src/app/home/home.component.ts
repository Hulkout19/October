import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
// @ts-ignore
import Typewriter from 't-writer.js';

import { MatGridList, MatGridListModule } from '@angular/material/grid-list';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

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
      loop: false,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: 'grey'
    })
    

    
    writer
      .type('Sven Broman')
      .rest(500)
      .type(' - Software Engineer')
      .start()

    // writer2
    //   .rest(5000)
    //   .type('Some of my skills include: ')
    //   .rest(2500)
    //   .type('.net')
    //   .rest(1000)
    //   .changeOps({ deleteSpeed: 80 })
    //   .remove(4)
    //   .type('sql')
    //   .rest(1000)
    //   .remove(3)
    //   .type('python')
    //   .rest(500)
    //   .remove(6)
    //   .type('c#')
    //   .rest(500)
    //   .remove(2)
    //   .type('Assembly')
    //   .rest(500)
    //   .remove(8)
    //   .clear()
    //   .type('Check out my website!')
    //   .rest(1000)
    //   .clear()
    //   .type('Go to the contact page to find ways to get in touch!')
    //   .start()     
  }

  getUserList()
  {
    this.httpClient.get("https://jsonplaceholder.typicode.com/todos/").subscribe((result:any) =>
    {
      this.userList = result;
    })
  }
}
