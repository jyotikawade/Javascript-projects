const accountId = 12345;
let accountEmail = "jyoti@example.com";
var accountPassword = "12345";
accountCity = "Delhi";
let accountState;

// accountId = 1   not allowed as accountId is constant
accountEmail = "test@example.com";
accountPassword = "test12345";
accountCity = "pune"
/*
prefer not to use var 
because of its function scope and hoisting issues.
if we use var then we can access the variable before its declaration and it will return undefined.
if we use let and const then we cannot access the variable before its declaration and it will throw an error.
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);