import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
const me = {
    name: "Shawn",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent", amount);
        return amount;
    },
};
let someone;
const greetPerson = (person) => {
    console.log("hello", person.name);
};
greetPerson(me);
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
    console.log(doc);
});
