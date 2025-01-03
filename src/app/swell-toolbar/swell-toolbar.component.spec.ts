import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwellToolbarComponent } from './swell-toolbar.component';

describe('SwellToolbarComponent', () => {
  let component: SwellToolbarComponent;
  let fixture: ComponentFixture<SwellToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwellToolbarComponent]
    });
    fixture = TestBed.createComponent(SwellToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
