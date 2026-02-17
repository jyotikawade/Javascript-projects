//object literals
const person = {
    name: "John",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "traveling", "cooking"],
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",}
};

console.log(person); //{ name: "John", age: 30, isStudent: false, hobbies: ["reading", "traveling", "cooking"], address: { street: "123 Main St", city: "New York", state: "NY" } }

//to access the properties of an object, we can use dot notation or bracket notation
console.log(person.name); //John (using dot notation)
console.log(person["age"]); //30 (using bracket notation)
//we can also add new properties to an object
person.email = "test@example.com";
console.log(person); //{ name: "John", age: 30, isStudent: false, hobbies: ["reading", "traveling", "cooking"], address: { street: "123 Main St", city: "New York", state: "NY" }, email: "test@example.com" }


//if we use symbol and string as a key

const mySymbol = Symbol("mySymbol");
const myObject = {
    [mySymbol]: "This is a symbol key",
    "myStringKey": "This is a string key"
};

console.log(myObject[mySymbol]); //This is a symbol key
console.log(myObject["myStringKey"]); //This is a string key    


//to change the value of a property in an object, we can simply assign a new value to that property
person.name = "Jane";
console.log(person.name); //Jane (the name property of the person object is now changed to "Jane")

//we can also use the delete operator to remove a property from an object
delete person.age;
console.log(person); //{ name: "Jane", isStudent: false, hobbies: ["reading", "traveling", "cooking"], address: { street: "123 Main St", city: "New York", state: "NY" }, email: "test@example.com" }

person.greeting = function() {
    console.log("hello js user");
}

console.log(person.greeting); //{ name: "Jane", isStudent: false, hobbies: ["reading", "traveling", "cooking"], address: { street: "123 Main St", city: "New York", state: "NY" }, email: "test@example.com" }