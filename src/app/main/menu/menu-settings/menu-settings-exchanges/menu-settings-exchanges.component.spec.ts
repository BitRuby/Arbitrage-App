import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSettingsExchangesComponent } from './menu-settings-exchanges.component';

describe('MenuSettingsExchangesComponent', () => {
  let component: MenuSettingsExchangesComponent;
  let fixture: ComponentFixture<MenuSettingsExchangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSettingsExchangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSettingsExchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
