//stack (primitive) heap(non-primitive  types
//primitive types are stored in stack and non-primitive types are stored in heap

//primitive types
let a = 10;
let b = a; //b is assigned the value of a, which is 10
a = 20; //a is now 20, but b is still 10 because it was assigned the value of a at the time of assignment)

//non-primitive types
let obj1 = { name: "John" };
let obj2 = obj1; //obj2 is assigned the reference to obj1, which means both obj1 and obj2 point to the same object in memory
obj1.name = "Doe"; //when we change the name property of obj1, it also changes the name property of obj2 because both obj1 and obj2 point to the same object in memory
console.log(obj1.name); //Doe
console.log(obj2.name); //Doe

//to create a copy of an object instead of a reference, we can use the spread operator or Object.assign() method


