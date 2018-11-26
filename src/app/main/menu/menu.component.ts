import { Component, OnInit, HostBinding } from '@angular/core';
import { MenuService } from './menu.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @HostBinding('class.slideDown')
  isOpen = false;
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.change.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

}
