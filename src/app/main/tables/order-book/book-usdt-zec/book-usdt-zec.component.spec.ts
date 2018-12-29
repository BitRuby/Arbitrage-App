import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookUsdtZecComponent } from './book-usdt-zec.component';

describe('BookUsdtZecComponent', () => {
  let component: BookUsdtZecComponent;
  let fixture: ComponentFixture<BookUsdtZecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookUsdtZecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookUsdtZecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
