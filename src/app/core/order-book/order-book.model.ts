import { BuyAndSell } from './buy-and-sell.model';

export interface OrderBook {
    success?: boolean;
    message?: string;
    result?: BuyAndSell;
}
