import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Stories } from 'src/stories';

// declare function rotateElem(): void;
@Component({
  selector: 'app-stories-list',
  templateUrl: './stories-list.component.html',
  styleUrls: ['./stories-list.component.css']
})
export class StoriesListComponent {
  isMenuOpened: boolean = false;

  constructor(private httpClient: HttpClient){
    // rotateElem();
  }

  toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
    
  }

  clickedOutside(): void {
    this.isMenuOpened = false;
  }

}
