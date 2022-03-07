//classes
//when we implement HasFormatter it means that
//this class must follow the structure of HasFormatter interface
export class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    //it automatically assigns these values this way
    //but it has to have access modifiers listed
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
