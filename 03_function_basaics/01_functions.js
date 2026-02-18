// function and all there types 

// function declaration
function add(a, b) {
    return a + b;
}

// function expression
const subtract = function(a, b) {
    return a - b;
}

// arrow function
const multiply = (a, b) => {
    return a * b;
}

// arrow function with implicit return
const divide = (a, b) => a / b;

// function with default parameters
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}

// function with rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}   

// function with callback
function greet(name, callback) {
    const greeting = `Hello, ${name}!`;
    callback(greeting);
}   

// example usage of the functions
console.log(add(5, 3));
console.log(subtract(5, 3));
console.log(multiply(5, 3));
console.log(divide(5, 3));
console.log(power(5));
console.log(power(5, 3));
console.log(sum(1, 2, 3, 4, 5));