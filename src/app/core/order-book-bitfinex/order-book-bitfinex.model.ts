import { Bids } from './bids.model';
import { Asks } from './asks.model';

export interface OrderBookBitfinex {
    bids?: Bids;
    asks?: Asks;
}
