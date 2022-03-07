//classes
class Invoice {
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

const invOne = new Invoice("Mario", "Work on the Mario Website", 250);
const invTwo = new Invoice("Luigi", "Work on the Luigi Website", 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
    // inv.client = 'asd'
    console.log(inv.client, inv.amount, inv.format());
});

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
