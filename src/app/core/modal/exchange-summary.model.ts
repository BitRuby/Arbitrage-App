export interface ExchangeSummary {
    exchangeName?: string;
    exchangeCurrency1?: string;
    exchangeCurrency2?: string;
    lastPrice?: number;
    bid?: number;
    ask?: number;
    volume?: number;
    lowPrice?: number;
    highPrice?: number;
    percentageChange?: number;
}
