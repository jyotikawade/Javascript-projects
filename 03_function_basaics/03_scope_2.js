function one() {
    const username = "john";
    function two(){
        const website = "google";
        console.log(username);
    }
    // console.log(website); //error: website is not defined
    two();
}
one();


//example2 

if(true){
    const name = "john";
    console.log(name);
    if(name === "john"){
        const website = "google";
        console.log(website);
        console.log(name);
    }
    //console.log(website); //error: website is not defined
}

// interesting example

console.log(addone(5)); //6
function addone(num){
    return num + 1;
}

addone(5); //6
// console.log(num); //error: num is not defined

console.log(addTwo(5)); //7
const addTwo = function(num){
    return num + 2;
}

addTwo(5); //7
// console.log(num); //error: num is not defined


