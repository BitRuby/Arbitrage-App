import { Injectable } from '@angular/core';
import { Stack } from './stack.model';
import { OrderData } from '../order-book/order-data.model';

@Injectable({
  providedIn: 'root'
})
export class OrderStackService {

  orderStack: Map<Number, Stack> = new Map;
  selectedOrders: Map<Number, OrderData> = new Map;
  exchangesSize = 4;

  constructor() { }

  pushOrder(order: Stack): void {
    const calculatedId = ((order.marketId - 1) * this.exchangesSize + order.exchangeId);
    this.orderStack.set(calculatedId, order);
  }

  popOrder(marketId: number, exchangeId: number): void {
    const calculatedId = ((marketId - 1) * this.exchangesSize + exchangeId);
    this.orderStack.delete(calculatedId);
    this.selectedOrders.delete(calculatedId);
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
      if (value.marketId === marketId) { array.push(value); }
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
    const calculatedId = ((order.marketId - 1) * this.exchangesSize + order.exchangeId);
    this.selectedOrders.set(calculatedId, orderData);
  }


}
