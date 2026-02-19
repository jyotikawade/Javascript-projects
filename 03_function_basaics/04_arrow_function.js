//arrow_function

const user = {
    username :"hitesh",
    price : 1000,
    welcomeMessage : function(){
        console.log(`welcome ${this.username}`);
        console.log(this)
    }
}

user.welcomeMessage(); //welcome hitesh

user.username = "john";
user.welcomeMessage(); //welcome john



console.log(this)



function chai(){
    console.log(this);
}
chai(); //window object


function chai1(){
    let a = 10;
    console.log(this.a); // undefined
}
chai1(); //window object


const chai2 = () => {
    let a = 10;
    console.log(this); // undefined
}
chai2(); //window object

//basic example of arrow function
const add = (x,y) => {
    return x + y;
}
console.log(add(5,10)); //15

//implecit return 
const add2 = (x,y) => x + y;
console.log(add2(5,10)); //15

//or
const add3 = (x,y) => (x + y);
console.log(add3(5,10)); //15