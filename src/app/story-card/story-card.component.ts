import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Stories } from 'src/stories';
import { STORY, findStoryById } from '../StoryList';
import { findAllActiveStories } from '../StoryList';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.css'],
  standalone: true,
  imports: [MatCardModule, NgFor, NgIf]

})
export class StoryCardComponent{

  story: Stories[] = STORY;

  constructor() {

    
  }
}


