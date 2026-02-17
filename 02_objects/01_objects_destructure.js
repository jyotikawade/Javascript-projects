//distructuring objects
const course = {
    title: "JavaScript Basics",
    price: 100,
    duration: 30,
    instructor: "John Doe"
};

//to distructure an object, we can use the destructuring assignment syntax
const { title, price, duration, instructor } = course;
console.log(title); //JavaScript Basics
console.log(price); //100
console.log(duration); //30
console.log(instructor); //John Doe

//we can also assign new variable names while destructuring
const { title: courseTitle, price: coursePrice } = course;
console.log(courseTitle); //JavaScript Basics
console.log(coursePrice); //100

//we can also use the rest operator to collect the remaining properties of an object into a new object
const { title: courseTitle2, ...rest } = course;
console.log(courseTitle2); //JavaScript Basics
console.log(rest); //{ price: 100, duration: 30, instructor: "John Doe" } (an object containing the remaining properties of the course object)  

