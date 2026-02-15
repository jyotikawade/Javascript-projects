const name = "John Doe";
//strings are immutable in JavaScript, which means that once a string is created, it cannot be changed. When we perform operations on a string, a new string is created instead of modifying the original string.

//for example, when we concatenate two strings, a new string is created
const fullName = name + " Smith"; //fullName is a new string that is created by concatenating name and " Smith"
console.log(fullName); //John Doe Smith
console.log(name); //John Doe (the original string is unchanged)
//we can also use string methods to create new strings
const upperCaseName = name.toUpperCase(); //upperCaseName is a new string that is created by converting name to uppercase
console.log(upperCaseName); //JOHN DOE
console.log(name); //John Doe (the original string is unchanged)
//if we want to change a string, we need to create a new string
const newName = "Jane Doe"; //newName is a new string that is created by assigning a new value to the variable
console.log(newName); //Jane Doe
console.log(name); //John Doe (the original string is unchanged)

//concatenation of strings can also be done using template literals
const greeting = `Hello, ${name}!`;
console.log(greeting); //Hello, John Doe! (a new string is created using template literals)

//mojor function of strings is to manipulate and format text, which is done by creating new strings based on the original string.
console.log(name.length); //8 (the length of the original string)
console.log(name.toUpperCase()); //JOHN DOE (a new string is created by converting name to uppercase)
console.log(name.toLowerCase()); //john doe (a new string is created by converting name to lowercase)
console.log(name.slice(0, 4)); //John (a new string is created by slicing the original string from index 0 to index 4)
console.log(name.replace("John", "Jane")); //Jane Doe (a new string is created by replacing "John" with "Jane" in the original string)  
console.log(name); //John Doe (the original string is unchanged)
console.log(name.split(" ")); //["John", "Doe"] (a new array is created by splitting the original string by space)
console.log(name.includes("Doe")); //true (the original string is checked for the presence of "Doe", but it is not modified)
console.log(name.startsWith("John")); //true (the original string is checked for whether it starts with "John", but it is not modified)
console.log(name.endsWith("Doe")); //true (the original string is checked for whether it ends with "Doe", but it is not modified)
console.log(name.indexOf("Doe")); //5 (the original string is checked for the index of "Doe", but it is not modified)
console.log(name.lastIndexOf("o")); //6 (the original string is checked for the last index of "o", but it is not modified)
console.log(name.trim()); //John Doe (a new string is created by trimming the original string, but since there are no leading or trailing whitespace characters, the original string is unchanged)
console.log(name.repeat(3)); //John DoeJohn DoeJohn Doe (a new string is created by repeating the original string 3 times, but the original string is unchanged)
console.log(name.padStart(15, "*")); //****John Doe (a new string is created by padding the original string with "*" characters at the start until the total length is 15, but the original string is unchanged)
console.log(name.padEnd(15, "*")); //John Doe**** (a new string is created by padding the original string with "*" characters at the end until the total length is 15, but the original string is unchanged)
console.log(name.charAt(0)); //J (a new string is created by getting the character at index 0 of the original string, but the original string is unchanged)
console.log(name.charCodeAt(0)); //74 (a new number is created by getting the Unicode value of the character at index 0 of the original string, but the original string is unchanged)
console.log(name.codePointAt(0)); //74 (a new number is created by getting the Unicode code point of the character at index 0 of the original string, but the original string is unchanged)
console.log(name.normalize()); //John Doe (a new string is created by normalizing the original string, but since the original string is already in a normalized form, it is unchanged)
console.log(name.localeCompare("Jane Doe")); //1 (a new number is created by comparing the original string with "Jane Doe" in a locale-sensitive manner, but the original string is unchanged)
console.log(name.match(/Doe/)); //["Doe"] (a new array is created by matching the original string against the regular expression /Doe/, but the original string is unchanged)
console.log(name.search(/Doe/)); //5 (a new number is created by searching the original string for the regular expression /Doe/, but the original string is unchanged)
console.log(name.replace(/Doe/g, "Smith")); //John Smith (a new string is created by replacing all occurrences of "Doe" with "Smith" in the original string, but the original string is unchanged) 
console.log(name.matchAll(/o/g)); //["o", "o"] (a new array is created by matching all occurrences of "o" in the original string, but the original string is unchanged 
console.log(name.split("o")); //["J", "hn D", "e"] (a new array is created by splitting the original string by "o", but the original string is unchanged)
