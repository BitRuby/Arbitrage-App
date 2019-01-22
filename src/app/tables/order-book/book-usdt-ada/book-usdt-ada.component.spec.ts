import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookUsdtAdaComponent } from './book-usdt-ada.component';

describe('BookUsdtAdaComponent', () => {
  let component: BookUsdtAdaComponent;
  let fixture: ComponentFixture<BookUsdtAdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookUsdtAdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookUsdtAdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
