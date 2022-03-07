//classes
class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}

const invOne = new Invoice("Mario", "Work on the Mario Website", 250);
const invTwo = new Invoice("Luigi", "Work on the Luigi Website", 300);

let invoices: Invoice[] = [];
// invoices.push('hello')
// invoices.push({name:'shawn'})
invoices.push(invOne);
invoices.push(invTwo);

invOne.client = "yoshi";
invTwo.amount = 400;

console.log(invoices);

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
