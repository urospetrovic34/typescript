"use strict";
//classes
class Invoice {
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
const invOne = new Invoice("Mario", "Work on the Mario Website", 250);
const invTwo = new Invoice("Luigi", "Work on the Luigi Website", 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    // inv.client = 'asd'
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
