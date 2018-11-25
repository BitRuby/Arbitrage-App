import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderBookUsdEthComponent } from './order-book-usd-eth.component';

describe('OrderBookUsdEthComponent', () => {
  let component: OrderBookUsdEthComponent;
  let fixture: ComponentFixture<OrderBookUsdEthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderBookUsdEthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderBookUsdEthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
