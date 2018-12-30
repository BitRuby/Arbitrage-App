import { Stack } from './stack.model';

export interface Arbitrage {
    minAsk?: Stack;
    maxBid?: Stack;
    arbitrage?: number;
    maxQuantity?: number;
}
