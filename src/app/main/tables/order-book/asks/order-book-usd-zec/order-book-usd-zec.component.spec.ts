import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderBookUsdZecComponent } from './order-book-usd-zec.component';

describe('OrderBookUsdZecComponent', () => {
  let component: OrderBookUsdZecComponent;
  let fixture: ComponentFixture<OrderBookUsdZecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderBookUsdZecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderBookUsdZecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
