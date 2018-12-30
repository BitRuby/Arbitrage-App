import { Stack } from './stack.model';

export interface Arbitrage {
    minAsk?: Stack;
    maxBid?: Stack;
}
