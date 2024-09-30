// function functionName
function sayHi(){
    // functionBody
    console.log("Hi!");
}

// functionCall
sayHi();

// mostly used in objects
const myFunction = function() {
    console.log("Hello world!");
}

myFunction();

const laptop = {
    // object method/function
    sayModel: function() {
        console.log("Lenovo");
    }
}

laptop.sayModel();

// arrow function

const arrowFunction = () => {
    console.log("Hello from arrow");
}

arrowFunction();

const sayHello = () => {
    let a = 50 + 10;
    console.log(a);
}

sayHello();
myFunction();

//                  parameters - local only to the function
function sendAlert(firstName, lastName){
    console.log(`Greetings, ${firstName} ${lastName}`);
}

// functionCall
sendAlert("May", "Lee");

const printArray = function(myArray) {
    console.log(myArray);
}

printArray([1,2,3,4]);

const getMyAge = (person) => {
    console.log(person.age);
} 

let student = {
    name: "Mikee",
    age: 18
}

getMyAge(student);

console.log("=====================================");

// Return statement - allows us to access values produced inside a function

let a = 10;
let b = 20;

function add(a, b){
    let sumInsideFunction = a + b;
    return sumInsideFunction;
}

let sum = add(a, b);
console.log(sum); // 30
// console.log(sumInsideFunction); // error

function subtract(a, b){
    console.log(a - b);
}

subtract(a, b); // -10

function multiply(a, b){
    let product = a*b;
}

console.log(multiply(a, b)); // undefined

function multiplyReturn(a, b){
    let product = a*b;
    return product;
}

console.log(multiplyReturn(a,b)); // 200

function createStudent(){
    let student = {
        name: "Jean",
        age: 18,
        class: "4th year",
        address: "Manila, Philippines"
    }
    return student;
}

let newStudent = createStudent();

console.log(newStudent.address);

function divide(a, b){
    return a/b;
}

console.log(divide(b, a)); // 2