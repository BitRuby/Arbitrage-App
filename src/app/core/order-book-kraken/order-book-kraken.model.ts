import { Currencies } from './currencies.model';

export interface OrderBookKraken {
    error?: Array<String>;
    result?: Currencies;
}
