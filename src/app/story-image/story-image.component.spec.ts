import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryImageComponent } from './story-image.component';

describe('StoryImageComponent', () => {
  let component: StoryImageComponent;
  let fixture: ComponentFixture<StoryImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoryImageComponent]
    });
    fixture = TestBed.createComponent(StoryImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
