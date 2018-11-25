import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderBookUsdBtcComponent } from './order-book-usd-btc.component';

describe('OrderBookUsdBtcComponent', () => {
  let component: OrderBookUsdBtcComponent;
  let fixture: ComponentFixture<OrderBookUsdBtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderBookUsdBtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderBookUsdBtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
