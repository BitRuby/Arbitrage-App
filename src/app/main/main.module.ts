import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { CommonModule } from '@angular/common';
import { MatListModule, MatTableModule, MatGridListModule, MatSortModule, MatPaginatorModule } from '@angular/material';
import { MainRoutingModule } from './main-routing.module';
import { OrderBookService } from '../core/order-book/order-book.service';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatGridListModule,
    MainRoutingModule
  ],
  providers: [
    OrderBookService
  ]
})
export class MainModule { }
