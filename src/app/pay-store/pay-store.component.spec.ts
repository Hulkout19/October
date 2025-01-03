import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayStoreComponent } from './pay-store.component';

describe('PayStoreComponent', () => {
  let component: PayStoreComponent;
  let fixture: ComponentFixture<PayStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayStoreComponent]
    });
    fixture = TestBed.createComponent(PayStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
