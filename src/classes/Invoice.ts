import {HasFormatter} from '../interfaces/HasFormatter.js'

//classes
//when we implement HasFormatter it means that
//this class must follow the structure of HasFormatter interface
export class Invoice implements HasFormatter {
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