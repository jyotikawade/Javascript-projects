"use strict"; // it is a good practice to use strict mode in javascript as it helps to catch common coding errors and unsafe actions.

// alert("hello world"); // it will show an alert box with the message "hello world", but we are using nodejs, not a browser, so it will not work here.



let name = "jyoti"
let age = 25
let isLoggedIn = false
let nullValue = null
let undefinedValue  = undefined
let symbolValue = Symbol("symbol")

console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof nullValue); // object (this is a known quirk in JavaScript)
console.log(typeof symbolValue); // symbol
console.log(typeof undefinedValue); // undefined
