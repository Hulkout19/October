import { Component } from '@angular/core';

@Component({
  selector: 'app-giants',
  templateUrl: './giants.component.html',
  styleUrls: ['./giants.component.css']
})
export class GiantsComponent {
  myImage:string = "app/bookcase.jpg"

  myTitle = "A Line in the Sand"
  subTitle = "Morgan Drew a Line"
}
