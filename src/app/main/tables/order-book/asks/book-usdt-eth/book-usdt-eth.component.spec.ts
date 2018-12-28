import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookUsdtEthComponent } from './book-usdt-eth.component';

describe('BookUsdtEthComponent', () => {
  let component: BookUsdtEthComponent;
  let fixture: ComponentFixture<BookUsdtEthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookUsdtEthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookUsdtEthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
