import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookUsdtXmrComponent } from './book-usdt-xmr.component';

describe('BookUsdtXmrComponent', () => {
  let component: BookUsdtXmrComponent;
  let fixture: ComponentFixture<BookUsdtXmrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookUsdtXmrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookUsdtXmrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
