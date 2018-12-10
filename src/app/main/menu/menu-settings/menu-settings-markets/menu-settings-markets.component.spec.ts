import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSettingsMarketsComponent } from './menu-settings-markets.component';

describe('MenuSettingsMarketsComponent', () => {
  let component: MenuSettingsMarketsComponent;
  let fixture: ComponentFixture<MenuSettingsMarketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSettingsMarketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSettingsMarketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
