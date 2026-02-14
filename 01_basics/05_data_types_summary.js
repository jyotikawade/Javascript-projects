// primitive data types
let num = 42;
let str = "Hello, World!";
let bool = true;
let nullValue = null;
let undefinedValue = undefined;
let symbolValue = Symbol("symbol");
BigIntValue = 9007199254740991n; // BigInt is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1, which is the largest number JavaScript can reliably represent with the Number primitive type.     


// reference data types (non-primitive data types)
let arr = [1, 2, 3, 4, 5];
let obj = { name: "jyoti", age: 25, city: "Delhi" };
function greet() {
    console.log("Hello, World!");
}

/*
In JavaScript, there are two main categories of data types: primitive data types and reference data types (also known as non-primitive data types).
Primitive data types include:
- Number: Represents numeric values (e.g., 42, 3.14).
- String: Represents sequences of characters (e.g., "Hello, World!").
- Boolean: Represents logical values (true or false).  
- Null: Represents the intentional absence of any object value (null).
- Undefined: Represents a variable that has been declared but has not been assigned a value (undefined).
- Symbol: Represents a unique identifier (Symbol("symbol")).
- BigInt: Represents whole numbers larger than 2^53 - 1 (e.g., 9007199254740991n).
Reference data types include:
- Array: Represents an ordered collection of values (e.g., [1, 2, 3, 4, 5]).
- Object: Represents a collection of key-value pairs (e.g., { name: "jyoti", age: 25, city: "Delhi" }).
- Function: Represents a reusable block of code that performs a specific task (e.g., function greet() { console.log("Hello, World!"); }).
In JavaScript, primitive data types are immutable, meaning their values cannot be changed after they are created.
Reference data types, on the other hand, are mutable, meaning their values can be changed after they are created.
When we assign a primitive data type to a variable, we are assigning the value directly to the variable. 
When we assign a reference data type to a variable, we are assigning a reference to the value in memory, not the value itself.
This means that when we copy a reference data type to another variable, both variables will point to the same value in memory, 
and changes made through one variable will affect the other variable as well.
*/