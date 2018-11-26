import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu/menu.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private menuService: MenuService) { }
  ngOnInit() {
  }

  private openMenu(): void {
    this.menuService.toggle();
  }

}
