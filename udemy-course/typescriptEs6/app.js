"use strict";
console.log('Typescript works!');
console.log('LET & CONST');
// let & const
var variable = 'A string';
variable = 'Another string';
console.log(variable);
// const when not going to chane val
var maxScore = 100;
console.log(maxScore);
// maxScore = 92; won't work
// let has block level scope not global like var
function reset() {
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable); // returns Another string
// Arrow functions
console.log('ARROW FUNCTIONS');
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(3, 5));
// Default Paramaters
console.log('DEFAULT PATAMETERS');
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        start--;
    }
    console.log('DONE!', start);
};
countdown(10);
//Spread & Rest operators
console.log('REST & SPREAD');
// allow to work with arrays and list of values
var numbersArr = [1, 2, 3, 99, -5];
console.log(Math.max(99, 10, -5, 15)); // list of numbers
console.log(Math.max.apply(Math, numbersArr)); //spread the arr
var makeArr = function (name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    // rest operator turns args into array
    return args;
};
console.log(makeArr('Kevin', 1, 2, 3));
// Destructuring
console.log('DESTRUCTURING');
console.log('DESTRUCTURING ARRAYS');
var myHobbies = ['Cooking', 'Basketball'];
// let hobby1: string = myHobbies[0];
// let hobby2: string = myHobbies[1];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1]; // destructuring arrays
console.log(hobby1, hobby2);
console.log('DESTRUCTURING OBJECTS');
var userData = {
    username: 'Kevin',
    age: 23
};
// const username = userData.username;
// const age: number = userData.age;
// const { username: myName, age: myAge } = userData; // optionally set different names
// console.log(myName, myAge);
var username = userData.username, age = userData.age;
console.log(username, age);
// Template Literals
var userName = 'Kevin';
// const greeting = "Hello I'm " + userName;
var greeting = "This is a heading.\nHello I'm " + userName + "\nThis is a multiline string!\nVery cool!\n";
console.log(greeting);
