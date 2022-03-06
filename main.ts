//explicit types
let character: string;
let age: number;
let isLogged: boolean;

//age = 'luigi'
age = 30;

// isLogged = 25
isLogged = true;

//arrays
let ninjas: string[] = [];

ninjas = ["yoshi", "mario"];

ninjas.push("yamato");

//union types
let mixed: (string | number)[] = [];

mixed.push("hallo");
mixed.push(34);
// mixed.push(false)

let uid: string | number;
uid = "123";
uid = 123;
// uid = true

//objects
let ninjaOne: object;
ninjaOne = {name:'yoshi',age:30}

let ninjaTwo: {
    name:string,
    age:number,
    beltColour:string
}

ninjaTwo = {name:'mario',age:20,beltColour:'black'}