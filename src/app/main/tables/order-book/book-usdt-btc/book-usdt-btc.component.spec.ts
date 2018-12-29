import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookUsdtBtcComponent } from './book-usdt-btc.component';

describe('BookUsdtBtcComponent', () => {
  let component: BookUsdtBtcComponent;
  let fixture: ComponentFixture<BookUsdtBtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookUsdtBtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookUsdtBtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
