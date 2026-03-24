 //global execution context
//this is the default execution context where the code starts executing. 
// It creates a global object (window in browsers) and a special variable called 'this' which refers to the global object.
console.log("This is the global execution context");

function firstFunction(){
    console.log("This is the first function execution context");
    secondFunction(); // This will create a new execution context for secondFunction
}

function secondFunction(){
    console.log("This is the second function execution context");
}

firstFunction(); // This will create a new execution context for firstFunction and execute it.

// When firstFunction is called, it creates a new execution context and pushes it onto the call stack. 
// Inside firstFunction, when secondFunction is called, it creates another execution context and pushes it onto the call stack. 
// Once secondFunction finishes executing, its execution context is popped off the call stack and control returns to firstFunction. 
// After firstFunction finishes executing, its execution context is also popped off the call stack and control returns to the global execution context.

