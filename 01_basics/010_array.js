
// array

// an array is a data structure that can hold multiple values of different types. 
// It is a collection of elements that are ordered and indexed. Arrays are mutable, 
// which means that we can change the elements in an array after it has been created.

const myArray = [1, "hello", true, null, undefined, { name: "John" }, [1, 2, 3]];
console.log(myArray);
// we can access the elements in an array using their index, which starts at 0
console.log(myArray[0]);    
console.log(myArray[1]);

// we can also use array methods to manipulate the elements in an array
myArray.push("new element");
console.log(myArray); // [1, "hello", true, null, undefined, { name: "John" }, [1, 2, 3], "new element"]

myArray.pop();
console.log(myArray); // [1, "hello", true, null, undefined, { name: "John" }, [1, 2, 3]]

myArray.shift();  // removes the first element of the array and returns it
console.log(myArray);

myArray.unshift("new element"); // adds a new element to the beginning of the array and returns the new length of the array
console.log(myArray); // ["new element", "hello", true, null, undefined, { name: "John" }, [1, 2, 3]]



// another way to create an array is by using the Array constructor
const myArray2 = new Array(1, "hello", true, null, undefined, { name: "John" }, [1, 2, 3]);
console.log(myArray2);

// we can also create an array with a specific length using the Array constructor
const myArray3 = new Array(5);
console.log(myArray3); // [empty x 5] (an array with 5 empty slots)     

// we can fill the empty slots in an array using the fill() method
myArray3.fill(0);
console.log(myArray3); // [0, 0, 0, 0, 0] (an array with 5 elements filled with 0)  

// we can also create an array from a string using the split() method
const myString = "hello world";
const myArray4 = myString.split(" ");
console.log(myArray4); // ["hello", "world"] (an array created by splitting the string by space)

// we can also create an array from a set of values using the Array.of() method
const myArray5 = Array.of(1, "hello", true, null, undefined, { name: "John" }, [1, 2, 3]);
console.log(myArray5); // [1, "hello", true, null, undefined, { name: "John" }, [1, 2, 3]] (an array created from a set of values using the Array.of() method)

//splice
myArray5.splice(2, 1); // removes 1 element at index 2 (true)
console.log(myArray5); // [1, "hello", null, undefined, { name: "John" }, [1, 2, 3]] (an array with the element at index 2 removed)

//concatenation of arrays can be done using the concat() method
const myArray6 = myArray.concat(myArray2);
console.log(myArray6); // [1, "hello", true, null, undefined, { name: "John" }, [1, 2, 3], 1, "hello", true, null, undefined, { name: "John" }, [1, 2, 3]] (an array created by concatenating myArray and myArray2)

//push
myArray.push("new element");
console.log(myArray); // [1, "hello", true, null, undefined, { name: "John" }, [1, 2, 3], "new element"] (an array with a new element added to the end)

//spread operator can also be used to concatenate arrays
const myArray7 = [...myArray, ...myArray2];
console.log(myArray7); // [1, "hello", true, null, undefined, { name: "John" }, [1, 2, 3], "new element", 1, "hello", true, null, undefined, { name: "John" }, [1, 2, 3]] (an array created by concatenating myArray and myArray2 using the spread operator)


const anotherArray = [1, 2, [3, 4, 5],3,5,6,[9,10]];
//flatarray
const flatArray = anotherArray.flat();
console.log(flatArray); // [1, 2, 3, 4, 5, 3, 5, 6, 9, 10] (a new array created by flattening the nested arrays in anotherArray)

//flatarray with depth
const flatArray2 = anotherArray.flat(2);
console.log(flatArray2); // [1, 2, 3, 4, 5, 3, 5, 6, 9, 10] (a new array created by flattening the nested arrays in anotherArray with a depth of 2)

//isarray
console.log(Array.isArray(anotherArray)); // true (checks if anotherArray is an array)
console.log(Array.isArray(flatArray)); // true (checks if flatArray is an array)
console.log(Array.isArray({})); // false (checks if an object is an array)

//from and of
const myArray8 = Array.from("hello");
console.log(myArray8); // ["h", "e", "l", "l", "o"] (an array created from a string using the Array.from() method)  

const myArray9 = Array.of(1, 2, 3, 4, 5);
console.log(myArray9); // [1, 2, 3, 4, 5] (an array created from a set of values using the Array.of() method)



