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
const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener('submit',(e:Event) => {
    e.preventDefault()

    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    )
})