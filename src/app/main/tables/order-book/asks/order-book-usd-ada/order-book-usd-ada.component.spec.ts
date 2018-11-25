import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderBookUsdAdaComponent } from './order-book-usd-ada.component';

describe('OrderBookUsdAdaComponent', () => {
  let component: OrderBookUsdAdaComponent;
  let fixture: ComponentFixture<OrderBookUsdAdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderBookUsdAdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderBookUsdAdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
