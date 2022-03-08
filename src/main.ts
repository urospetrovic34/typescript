import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

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
    spend(amount: number): number {
        console.log("I spent", amount);
        return amount;
    },
};

let someone: IsPerson;

const greetPerson = (person: IsPerson) => {
    console.log("hello", person.name);
};

greetPerson(me);

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

//list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;

    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }

    list.render(doc, type.value, "end");

    console.log(doc);
});

//generics
//<T> captures whatever item we pass in on the function
//and it also captures it's properties
//whatever is passed in, this <T> must extend object
const addUID = <T extends { name: string }>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
};

// let docOne = addUID({ name: "yoshi", age: 40 });

//enums

enum ResourceType {
    BOOK,
    AUTHOR,
    FILM,
    DIRECTOR,
    PERSON,
}

interface Resource<T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
}

const docOne: Resource<object> = {
    uid:1,
    resourceType: ResourceType.BOOK,
    data:{title:'name of the wind'}
}

const docTwo: Resource<object> = {
    uid:11,
    resourceType: ResourceType.PERSON,
    data:{title:'name of the wind'}
}

console.log(docOne,docTwo)