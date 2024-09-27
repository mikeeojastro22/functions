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

//                  parameters - local only to the
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
