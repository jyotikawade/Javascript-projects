const score = 100;
const bonus = 20;
const finalScore = score + bonus;
console.log(finalScore);

//methoods in numbers
const num = 10;
console.log(num.toString());
console.log(num.toFixed(2));
console.log(num.toExponential());
console.log(num.toPrecision(3));
console.log(num.valueOf());
console.log(num.toLocaleString());
console.log(num.toLocaleString("en-US"));
console.log(num.toLocaleString("de-DE"));
console.log(num.toLocaleString("ja-JP"));
console.log(num.valueOf());
console.log(num.toString(2));
console.log(num.toString(8));
console.log(num.toString(16));
console.log(num.toString(36));

// +++ maths ++++++++

//default library for math in JavaScript is Math
console.log(Math.PI);
console.log(Math.E);
console.log(Math.sqrt(16));
console.log(Math.pow(2, 3));
console.log(Math.abs(-5));
console.log(Math.round(4.7));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.7));
console.log(Math.max(1, 5, 3));
console.log(Math.min(1, 5, 3));
console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 10) + 1); //random number between 1 and 10
console.log(Math.sign(-5)); //-1 (negative number)
console.log(Math.sign(0)); //0 (zero)
console.log(Math.sign(5)); //1 (positive number)
console.log(Math.trunc(4.7)); //4 (truncates the decimal part and returns the integer part)
console.log(Math.sign(-0)); //-0 (negative zero)
console.log(Math.sign(0)); //0 (positive zero)