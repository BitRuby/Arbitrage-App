import { Injectable } from '@angular/core';
import { Stack } from './stack.model';
import { MatProgressBarBase } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class OrderStackService {

  orderStack: Map<Number, Stack> = new Map;

  constructor() { }

  pushOrder(order: Stack): void {
    this.orderStack.set(order.exchangeId * order.marketId, order);
    console.log(this.orderStack);
  }

}
