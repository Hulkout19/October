import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiantsComponent } from './giants.component';

describe('GiantsComponent', () => {
  let component: GiantsComponent;
  let fixture: ComponentFixture<GiantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiantsComponent]
    });
    fixture = TestBed.createComponent(GiantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
