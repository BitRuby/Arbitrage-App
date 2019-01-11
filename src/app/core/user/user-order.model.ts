export interface UserOrder {
  ExchangeName: {
    Exchange: string;
    Timestamp: Date;
    OrderType: string;
    Quantity: string;
    Price: number;
    Fee: number;
  };
}
