import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTradeComponent } from './menu-trade.component';

describe('MenuTradeComponent', () => {
  let component: MenuTradeComponent;
  let fixture: ComponentFixture<MenuTradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
