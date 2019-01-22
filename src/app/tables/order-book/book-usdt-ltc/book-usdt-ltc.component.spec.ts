import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookUsdtLtcComponent } from './book-usdt-ltc.component';

describe('BookUsdtLtcComponent', () => {
  let component: BookUsdtLtcComponent;
  let fixture: ComponentFixture<BookUsdtLtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookUsdtLtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookUsdtLtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
