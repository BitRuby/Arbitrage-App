import { Arbitrage } from './arbitrage.model';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { OrderData } from '../order-book/order-data.model';
import { Stack } from './stack.model';

@Injectable({
  providedIn: 'root'
})
export class OrderStackService {
  @Output() updateOrderStack: EventEmitter<Map<Number, Stack>> = new EventEmitter();
  orderStack: Map<Number, Stack> = new Map;
  @Output() updateSelectedOrders: EventEmitter<Map<Number, OrderData>> = new EventEmitter();
  selectedOrders: Map<Number, OrderData> = new Map;
  exchangesSize = 8;

  constructor() { }

  pushOrder(order: Stack): void {
    const calculatedId = ((order.marketId - 1) * this.exchangesSize + order.exchangeId);
    this.orderStack.set(calculatedId, order);
    this.updateOrderStack.emit(this.orderStack);
    this.updateSelectedOrders.emit(this.selectedOrders);
  }

  popOrder(marketId: number, exchangeId: number): void {
    const calculatedId = ((marketId - 1) * this.exchangesSize + exchangeId);
    this.orderStack.delete(calculatedId);
    this.selectedOrders.delete(calculatedId);
    this.updateOrderStack.emit(this.orderStack);
    this.updateSelectedOrders.emit(this.selectedOrders);
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

  findMinAndMax(marketId: number): Arbitrage {
    const array = this.getOrders(marketId);
    let highest: Stack = {};
    highest.price = Number.NEGATIVE_INFINITY;
    let tmp;
    for (let i = array.length - 1; i >= 0; i--) {
        tmp = array[i];
        tmp.price = parseFloat(tmp.price);
        if (tmp.type === 'ask') { continue; }
        if (tmp.price > highest.price) { highest = tmp; }
    }
    let lowest: Stack = {};
    lowest.price = Number.POSITIVE_INFINITY;
    for (let i = array.length - 1; i >= 0; i--) {
      tmp = array[i];
      tmp.price = parseFloat(tmp.price);
      if (tmp.type === 'bid') { continue; }
      if (tmp.price < lowest.price) { lowest = tmp; }
    }
    if (lowest.price === Number.POSITIVE_INFINITY) {
      lowest = null;
    }
    if (highest.price === Number.NEGATIVE_INFINITY) {
      highest = null;
    }
    const arbitrage: Arbitrage = {minAsk: lowest,
      maxBid: highest};
    return arbitrage;
  }

  calculateArbitrage(orders: Arbitrage, quantity: number = 0): Arbitrage {
    if ( (orders.maxBid === null) || (orders.minAsk === null) ) {
       return orders;
    } else {
       const bidFee = orders.maxBid.price * (orders.maxBid.exchangeFees / 100);
       const askFee = orders.minAsk.price * (orders.minAsk.exchangeFees / 100);
       const calculated = ( orders.maxBid.price - bidFee ) - ( orders.minAsk.price + askFee );

       if (quantity === 0) {
         if (typeof orders.maxBid.quantity === 'string') { orders.maxBid.quantity = parseFloat(orders.maxBid.quantity); }
         if (typeof orders.minAsk.quantity === 'string') { orders.minAsk.quantity = parseFloat(orders.minAsk.quantity); }
         if (orders.maxBid.quantity < orders.minAsk.quantity) {
            orders.arbitrage = orders.maxBid.quantity * calculated;
            orders.maxQuantity = orders.maxBid.quantity;
         } else {
            orders.arbitrage = orders.minAsk.quantity * calculated;
            orders.maxQuantity = orders.minAsk.quantity;
         }
       } else {
        orders.arbitrage =  quantity * calculated;
          if (orders.maxBid.quantity < orders.minAsk.quantity) {
            orders.maxQuantity = orders.maxBid.quantity;
        } else {
            orders.maxQuantity = orders.minAsk.quantity;
        }
       }
       return orders;
    }
  }

  isEmpty(obj): boolean {
    for ( const key in obj ) {
        if ( obj.hasOwnProperty(key) ) {
            return false;
        }
    }
    return true;
  }


}
