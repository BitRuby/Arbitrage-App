import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderBookUsdMonComponent } from './order-book-usd-mon.component';

describe('OrderBookUsdMonComponent', () => {
  let component: OrderBookUsdMonComponent;
  let fixture: ComponentFixture<OrderBookUsdMonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderBookUsdMonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderBookUsdMonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
