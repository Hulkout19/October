import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTextComponent } from './test-text.component';

describe('TestTextComponent', () => {
  let component: TestTextComponent;
  let fixture: ComponentFixture<TestTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestTextComponent]
    });
    fixture = TestBed.createComponent(TestTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
