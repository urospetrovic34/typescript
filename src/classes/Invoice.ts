//classes
export class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;

    //it automatically assigns these values this way
    //but it has to have access modifiers listed
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) {}

    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}