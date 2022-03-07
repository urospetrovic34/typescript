//interfaces
//we don't use this to declare IsPerson object
//we just use it to declare that if we have a variable with
//this name in future code then it has to follow given rules
//of the structure
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: "Shawn",
    age: 30,
    speak(text: string): void {
        console.log(text);
    },
    //we don't have to explicitly specify 
    //this : number 'cause ts/js already
    //knows it will return number type
    //same goes for all other functions
    spend(amount: number): number {
        console.log("I spent", amount);
        return amount;
    },
};

//later on it will have to follow the structure rules
let someone: IsPerson;

const greetPerson = (person:IsPerson) => {
    console.log('hello',person.name)
}

greetPerson(me)

console.log(me);

//it is not .ts extension, rather it is .js extension
//for importing modules we have to set composite option
//in tsconfig to false
import { Invoice } from "./classes/Invoice.js";

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
