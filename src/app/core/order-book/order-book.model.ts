import { OrderBookData } from './order-book-data.model';

export interface OrderBook {
    id: number;
    primary: string;
    secondary: string;
    exchanges: Array<Number>;
    data: Array<OrderBookData>;
}
