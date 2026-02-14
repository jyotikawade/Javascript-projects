let score = 33
console.log(score, typeof score); // 33 'number'

score = "33"
console.log(score, typeof score); // '33' 'string'

score = Number(score) // it will convert the string '33' to number 33
console.log(score, typeof score); // 33 'number'

score = String(score) // it will convert the number 33 to string '33'
console.log(score, typeof score); // '33' 'string'


// "33" => 33
// "33abc" => NaN (Not a Number)
// "abc33" => NaN (Not a Number)
// "abc" => NaN (Not a Number)
// "" => 0
// " " => 0


let isloggedIn = 0
console.log(isloggedIn, typeof isloggedIn); // 0 'number'
isloggedIn = Boolean(isloggedIn) // it will convert the number 0 to boolean false
console.log(isloggedIn, typeof isloggedIn); // false 'boolean'

//0, "", null, undefined, NaN => false
//1, " ", [], {} => true  

// operations
let value = "hello" + " " + "world"
console.log(value); // 'hello world'

let value =3
let negValue = -value
console.log(negValue); // -3

let isLoggedIn = true
console.log(!isLoggedIn); // false

console.log(2+2); // 4
console.log("2" + 2); // '22' (string concatenation)
console.log("2" * 2); // 4 (string '2' is converted to number 2 and then multiplied)
console.log("2" - 2); // 0 (string '2' is converted to number 2 and then subtracted)
console.log("2" / 2); // 1 (string '2' is converted to number 2 and then divided)
console.log("2" * "2"); // 4 (both strings '2' are converted to numbers 2 and then multiplied)
console.log("2" - "2"); // 0 (both strings '2' are converted to numbers 2 and then subtracted)
console.log("2" / "2"); // 1 (both strings '2' are converted to numbers 2 and then divided)
console.log("2" + "2"); // '22' (string concatenation)
console.log("2" + 2 + 2); // '222' (string concatenation)
console.log(2 + 2 + "2"); // '42' (number addition followed by string concatenation)
/* reason: when we have a string in an expression, the result will be a string. 
So in the first case, "2" + 2 will give '22' and then '22' + 2 will give '222'. 
In the second case, 2 + 2 will give 4 and then 4 + "2" will give '42'.*/   
/*
ecma will inform more about the type conversion rules in javascript in future, 
but for now we can say that when we have a string in an expression, the result will be a string.
When we have a number in an expression, the result will be a number.
When we have a boolean in an expression, the result will be a boolean.
When we have null in an expression, the result will be null.
When we have undefined in an expression, the result will be undefined.
When we have a symbol in an expression, the result will be a symbol.
*/