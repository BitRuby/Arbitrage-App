import { OrderData } from './order-data.model';

export interface Order {
    Bids?: OrderData[];
    Asks?: OrderData[];
}
