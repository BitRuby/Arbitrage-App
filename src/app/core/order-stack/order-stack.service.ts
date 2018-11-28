import { Injectable } from '@angular/core';
import { Stack } from './stack.model';
import { OrderData } from '../order-book/order-data.model';

@Injectable({
  providedIn: 'root'
})
export class OrderStackService {

  orderStack: Map<Number, Stack> = new Map;
  selectedOrders: Map<Number, OrderData> = new Map;

  constructor() { }

  pushOrder(order: Stack): void {
    this.orderStack.set(order.exchangeId * order.marketId, order);
    console.log(this.orderStack);
  }

  popOrder(orderId: Number): void {
    this.orderStack.delete(orderId);
    this.selectedOrders.delete(orderId);
  }

  getOrder(orderId: Number): Stack {
    let order: Stack;
    const load = function(value, key, map) {
      if (key === orderId) { order = value; }
    };
    this.orderStack.forEach(load);
    return order;
  }

  getOrders(marketId: number): Array<Stack> {
    const array = new Array<Stack>();
    const loadToArray = function(value, key, map) {
      if (value.exchangeId === marketId) { array.push(value); }
    };
    this.orderStack.forEach(loadToArray);
    return array;
  }

  isSelected(orderId: Number): boolean {
    let select: boolean;
    const load = function(value, key, map) {
      if (key === orderId) { select = true; }
    };
    this.orderStack.forEach(load);
    return select;
  }

  saveSelected(order: Stack, orderData: OrderData) {
    this.selectedOrders.set(order.marketId * order.exchangeId, orderData);
  }


}
