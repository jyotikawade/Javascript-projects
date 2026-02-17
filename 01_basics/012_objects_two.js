//singleton object
const tinderUser = new Object();
console.log(tinderUser); //{}

//non singleton object
const person1 = {
    name: "John",
    age: 30,
    isStudent: false};
console.log(person1); //{ name: "John", age: 30, isStudent: false }

//merging two objects
const person2 = {
    name: "Jane",
    email: "test@example.com"};
const mergedPerson = Object.assign({}, person1, person2); //merges person1 and person2 into a new object
console.log(mergedPerson); //{ name: "Jane", age: 30, isStudent: false, email: "test@example.com" }

//another way to merge two objects is by using the spread operator
const mergedPerson2 = { ...person1, ...person2 }; //merges person1 and person2 into a new object using the spread operator
console.log(mergedPerson2); //{ name: "Jane", age: 30, isStudent: false, email: "test@example.com" }

//another way to merge two objects is by using the Object.assign() method with a target object
const targetObject = {};
Object.assign(targetObject, person1, person2);
console.log(targetObject); //{ name: "Jane", age: 30, isStudent: false, email: "test@example.com" }

// to get keys and values of an object, we can use the Object.keys() and Object.values() methods
console.log(Object.keys(mergedPerson));
console.log(Object.values(mergedPerson));

//to get entries of an object, we can use the Object.entries() method
console.log(Object.entries(mergedPerson)); //[["name", "Jane"], ["age", 30], ["isStudent", false], ["email", "

//hasownproperty() method is used to check if an object has a specific property
console.log(mergedPerson.hasOwnProperty("name")); //true (mergedPerson has the name property)
console.log(mergedPerson.hasOwnProperty("address")); //false (mergedPerson does not have the address property)


