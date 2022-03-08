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
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
    console.log(doc);
});
//generics
//<T> captures whatever item we pass in on the function
//and it also captures it's properties
//whatever is passed in, this <T> must extend object
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
// let docOne = addUID({ name: "yoshi", age: 40 });
//tuples
let array = ["ryu", 25, true];
array[0] = false;
array[1] = "yoshi";
array = [30, false, "betmen"];
let tuple = ["ryu", 35, true];
tuple[0] = "m.bison";
// tuple[0] = 25
let student;
student = ["akuma", 25000];
