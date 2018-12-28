import { OrderData } from './order-data.model';
import { MatTableDataSource } from '@angular/material';

export interface Order {
    Bids?: OrderData[];
    Asks?: OrderData[];
}
