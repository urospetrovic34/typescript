"use strict";
//exclamation mark goes at the end when we are certain
//that the element exists in html page so it won't return
//null possibility error/warning
// const anchor = document.querySelector("a")!;
// if(anchor){
//     console.log(anchor.href);
// }
// console.log(anchor.href);
// const form = document.querySelector("form")!;
//since we are passing a class ts doesn't recognize the element
//is a form, for this sort we use typecasting similar to C#
const form = document.querySelector(".new-item-form");
// console.log(form.children);
//inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
