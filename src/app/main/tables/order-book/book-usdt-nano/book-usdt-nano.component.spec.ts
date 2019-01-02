import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookUsdtNanoComponent } from './book-usdt-nano.component';

describe('BookUsdtNanoComponent', () => {
  let component: BookUsdtNanoComponent;
  let fixture: ComponentFixture<BookUsdtNanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookUsdtNanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookUsdtNanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
