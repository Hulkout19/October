import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/Services/users.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent{
  title = "post api call";
  users: any;
  constructor(private user: UsersService) {
    this.user.getData().subscribe((data: any) => {
      this.users = data;
    });
  }

  getUserFormData(data:any){
    console.warn(data);
    this.user.saveData(data).subscribe(()=>{
      console.warn();
    })
  }

}
