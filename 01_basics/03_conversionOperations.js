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
