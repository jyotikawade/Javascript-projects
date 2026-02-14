console.log(2 == "2"); // true (loose equality, type coercion happens)
console.log(2 === "2"); // false (strict equality, no type coercion)
console.log(0 == false); // true (loose equality, type coercion happens)
console.log(0 === false); // false (strict equality, no type coercion) 
console.log(null == undefined); // true (loose equality, type coercion happens)
console.log(null === undefined); // false (strict equality, no type coercion)
/*
In JavaScript, the double equals (==) operator performs type coercion, which means it converts the operands to the same type before making the comparison. 
The triple equals (===) operator, on the other hand, does not perform type coercion and compares both the value and the type of the operands.
*/

console.log(2 > 1); // true
console.log(2 < 1); // false
console.log(2 >= 2); // true
console.log(2 <= 1); // false
/*
In JavaScript, the comparison operators (>, <, >=, <=) compare the values of the operands and return a boolean value (true or false) based on the result of the comparison.
*/

console.log(2 != "2"); // false (loose inequality, type coercion happens)
console.log(2 !== "2"); // true (strict inequality, no type coercion)
/*
The != operator checks for inequality with type coercion, while the !== operator checks for inequality without type coercion. 
In the first case, 2 and "2" are considered equal because of type coercion, so the result is false. 
In the second case, 2 and "2" are not considered equal because they are of different types, so the result is true.
*/

console.log(2 > 1 && 3 > 2); // true (both conditions are true)
console.log(2 > 1 || 3 < 2); // true (first condition is true, second condition is false)
console.log(!(2 > 1)); // false (negation of true is false)
/*
In JavaScript, the logical operators (&&, ||, !) are used to combine or negate boolean values. 
The && operator returns true if both operands are true, the || operator returns true if at least one operand is true, and the ! operator negates the boolean value of its operand.
*/ 
console.log(2 > 1 && 3 < 2); // false (first condition is true, second condition is false)
console.log(2 > 1 || 3 < 2); // true (first condition is true, second condition is false)
/*
In the first case, the && operator returns false because one of the conditions is false. 
In the second case, the || operator returns true because at least one of the conditions is true.
*/

console.log(2 > 1 && 3 > 2); // true (both conditions are true)
console.log(2 > 1 || 3 < 2); // true (first condition is true, second condition is false)
/*
In the first case, the && operator returns true because both conditions are true. 
In the second case, the || operator returns true because at least one of the conditions is true.
*/