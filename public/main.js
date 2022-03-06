"use strict";
//If we declare it this way it will be a void type
// let greet = () => {
//     console.log("hello, world");
// };
// greet = 'hello'
//If we declare it this way it will be a Function type
let greet;
//greet = 'hello'
greet = () => {
    console.log("hello, again");
};
//question mark signifies that the parameter is optional
//optional parameters can have default values declared, then we don't
//need ? in front of optional parameter
//always put optional or default parameters at the end
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10);
add(5, 10, 15);
// add(5,'15')
const minus = (a, b) => {
    return a + b;
};
//result will become a type of return value
let result = minus(10, 7);
// result = 'string'
