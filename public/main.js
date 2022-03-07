"use strict";
//classes
class Invoice {
    constructor(c, d, a) {
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
let invoices = [];
// invoices.push('hello')
// invoices.push({name:'shawn'})
invoices.push(invOne);
invoices.push(invTwo);
invOne.client = "yoshi";
invTwo.amount = 400;
console.log(invoices);
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
