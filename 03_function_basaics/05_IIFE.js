//immediately invoked function expression

(function(){
    console.log("I am an IIFE");
})(); //this will execute the function immediately after defining it.

//IIFE is a design pattern which produces a lexical scope using JavaScript's function scoping. 
//It helps to avoid polluting the global namespace and can be used to create private variables and functions.

//Example of IIFE with parameters

(function(name){
    console.log("Hello, " + name);
})("Alice");//This will output: Hello, Alice

//IIFE can also be used to create a module pattern, which allows us to encapsulate code and expose only certain parts of it.

var myModule = (function(){
    var privateVariable = "I am private";

    function privateFunction(){
        console.log(privateVariable);
    }
    
    return {
        publicFunction: function(){
            privateFunction();
        }
    };
})();

myModule.publicFunction(); // This will output: I am private
// In this example, the privateVariable and privateFunction are not accessible from outside the IIFE, but the publicFunction can access them and is exposed to the outside world.

//with arrow function
(() => {
    console.log("I am an IIFE with arrow function");
})(); //this will execute the arrow function immediately after defining it.

//with parameters
((name) => {
    console.log("Hello, " + name);
})("Bob"); //This will output: Hello, Bob

//named IIFE
(function namedIIFE(){
    console.log("I am a named IIFE");
})(); //This will execute the named function immediately after defining it. The name can be useful for debugging purposes, as it will show up in stack traces.
