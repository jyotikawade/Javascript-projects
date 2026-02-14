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
