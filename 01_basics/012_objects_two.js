//singleton object
const tinderUser = new Object();
console.log(tinderUser); //{}

//non singleton object
const person1 = {
    name: "John",
    age: 30,
    isStudent: false};
console.log(person1); //{ name: "John", age: 30, isStudent: false }