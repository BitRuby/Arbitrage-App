import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookUsdtBchComponent } from './book-usdt-bch.component';

describe('BookUsdtBchComponent', () => {
  let component: BookUsdtBchComponent;
  let fixture: ComponentFixture<BookUsdtBchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookUsdtBchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookUsdtBchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
