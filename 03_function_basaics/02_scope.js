//scope

//global scope
var a = 10;

function test(){
    //local scope
    var b = 20;
    console.log(a); //10
    console.log(b); //20
} 
test();
console.log(a);
console.log(b); //error: b is not defined

//block scope
if(true){
    var c = 30; //function scope
    let d = 40; //block scope
    const e = 50; //block scope
    console.log(c);
    console.log(d);
    console.log(e);
}
console.log(c);
console.log(d); //error: d is not defined
console.log(e); //error: e is not defined

