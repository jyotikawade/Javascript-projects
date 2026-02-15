let myTimestamp = Date.now(); //returns the number of milliseconds since January 1, 1970, 00:00:00 UTC
console.log(myTimestamp); //e.g. 1625247600000 

let myDate = new Date(); //creates a new Date object with the current date and time
console.log(myDate); //e.g. Wed Jul 02 2021 12:00:00 GMT+0000 (Coordinated Universal Time)

let myDateFromTimestamp = new Date(myTimestamp); //creates a new Date object from a timestamp
console.log(myDateFromTimestamp); //e.g. Wed Jul 02 2021 12:00:00 GMT+0000 (Coordinated Universal Time)

console.log(myDate.getTime()); //returns the timestamp of the date object, which is the number of milliseconds since January 1, 1970, 00:00:00 UTC
console.log(myDateFromTimestamp.getTime()); //returns the timestamp of the date object, which is the number of milliseconds since January 1, 1970, 00:00:00 UTC

let myCreatedDate = new Date("2021-07-01T12:00:00Z"); //creates a new Date object from a date string in ISO format
console.log(myCreatedDate);

console.log(Math.floor(Date.now()/1000)); //returns the current timestamp in milliseconds since January 1, 1970, 00:00:00 UTC
console.log(myCreatedDate.getDay()); //returns the day of the week (0-6) for the created date object, where 0 is Sunday and 6 is Saturday
