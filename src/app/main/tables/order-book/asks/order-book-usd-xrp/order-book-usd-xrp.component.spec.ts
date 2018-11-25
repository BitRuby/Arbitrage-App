import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderBookUsdXrpComponent } from './order-book-usd-xrp.component';

describe('OrderBookUsdXrpComponent', () => {
  let component: OrderBookUsdXrpComponent;
  let fixture: ComponentFixture<OrderBookUsdXrpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderBookUsdXrpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderBookUsdXrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
