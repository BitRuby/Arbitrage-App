import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderBookUsdUsdtComponent } from './order-book-usd-usdt.component';

describe('OrderBookUsdUsdtComponent', () => {
  let component: OrderBookUsdUsdtComponent;
  let fixture: ComponentFixture<OrderBookUsdUsdtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderBookUsdUsdtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderBookUsdUsdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
