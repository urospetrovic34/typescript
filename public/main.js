//it is not .ts extension, rather it is .js extension
//for importing modules we have to set composite option
//in tsconfig to false
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
const me = {
    name: "Shawn",
    age: 30,
    speak(text) {
        console.log(text);
    },
    //we don't have to explicitly specify
    //this : number 'cause ts/js already
    //knows it will return number type
    //same goes for all other functions
    spend(amount) {
        console.log("I spent", amount);
        return amount;
    },
};
//later on it will have to follow the structure rules
let someone;
const greetPerson = (person) => {
    console.log("hello", person.name);
};
greetPerson(me);
console.log(me);
// const invOne = new Invoice("Mario", "Work on the Mario Website", 250);
// const invTwo = new Invoice("Luigi", "Work on the Luigi Website", 300);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach((inv) => {
//     // inv.client = 'asd'
//     console.log(inv.client, inv.amount, inv.format());
// });
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
