import { Component } from '@angular/core';
import { STORY } from '../StoryList';
import { Stories } from 'src/stories';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
    story: Stories[] = STORY;

    constructor() {

      
    }
}
