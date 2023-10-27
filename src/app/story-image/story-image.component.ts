import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'story-image',
  templateUrl: './story-image.component.html',
  styleUrls: ['./story-image.component.css']
})
export class StoryImageComponent implements OnInit {

  @Input('src')
  imageUrl?: string;



  constructor() { }

  ngOnInit() {
  }

}
