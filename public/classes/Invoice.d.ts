export declare class Invoice {
    readonly client: string;
    private details;
    amount: number;
    constructor(client: string, details: string, amount: number);
    format(): string;
}
