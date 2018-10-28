import { BuyAndSell } from './buy-and-sell.model';

export interface OrderBookBittrex {
    success?: boolean;
    message?: string;
    result?: BuyAndSell;
}
