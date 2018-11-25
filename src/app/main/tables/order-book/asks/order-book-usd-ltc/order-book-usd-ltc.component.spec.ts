import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderBookUsdLtcComponent } from './order-book-usd-ltc.component';

describe('OrderBookUsdLtcComponent', () => {
  let component: OrderBookUsdLtcComponent;
  let fixture: ComponentFixture<OrderBookUsdLtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderBookUsdLtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderBookUsdLtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
