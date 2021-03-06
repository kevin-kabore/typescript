"use strict";
// to config tsconfig: run tsc init
// run tsc to compile all ts files to js
// run tsc on command line to compile to js
console.log('It works!');
// BASIC Types
// Typechecks through inference
// string
var myName = 'Kevin';
// myName = 20;
// number
var myAge = 23;
// myAge = 'Kevin'
// boolean
var hasHobbies = true;
// hasHobbies = 1; still gives an error
// Assign types
var myRealAge; // sets to type: any (like js) so no error in reassign or compilation check
myRealAge = 23;
myRealAge = '23';
// assign the type, throws error
var myRealAge1;
myRealAge1 = 23;
// myRealAge1 = '23';
// array
var hobbies = ['Basketball', 'Game of Thrones'];
console.log(hobbies[0]);
console.log("typeof hobbies: " + typeof hobbies); //object
// hobbies = [100]; // error: number[] is not assignable to string[]
// hobbies = ['A string']; // no error
// to get no errors set to type of array with any type
var hobbiesAny = ['Basketball', 12, { movie: 'A movie', year: 2016 }];
// TUPLES - New Type - not in js
// An array of mixed types with limited indexes
// let address = ['Street', 100];
// to make a tuple
var address = ['Street', 100];
// so if any other order, typecheck works
// let address: [string, number] = [100, 'Street']; // error
// ENUM
// Enums allow us to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; // 2
})(Color || (Color = {}));
// set type of var to enum
var myColor = Color.Green; // return 1
console.log(myColor);
// other example to set enum values
var Color1;
(function (Color1) {
    Color1[Color1["Orange"] = 0] = "Orange";
    Color1[Color1["Yellow"] = 100] = "Yellow";
    Color1[Color1["Red"] = 101] = "Red"; // 101 - to reset, manually set to 2
})(Color1 || (Color1 = {}));
var myColor1 = Color1.Red; // 101
console.log(myColor1);
// FUNCTIONS
// type refers to type of the return value
// RETURN TYPE = string
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void when function should not return anything
function sayHello() {
    console.log('Hello');
    // no return value otherwise error
    // return myName;
}
// FUNCTION ARGYMENT TYPE: number, number
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2, 'Max')); // no error because NaN is type Number
// must set type on args
// now error
console.log(multiply(2, 3));
// FUNCTION TYPES
// not a function. Type arrow function and return type
var myMultiply;
// myMultiply = sayHello; // error sayHello has no return and no args
myMultiply = multiply; // no error
console.log(myMultiply(5, 5));
// OBJECTS
var userData = {
    name: 'Kevin',
    age: 23
};
// typescript infers userData of type {name: string, age: number} so
// userData = {}; //error
// userData = { a: 'Hello', b: 23}; // still error because keys must match
// can be explicit with key value setting type before the equal sign
var userData1 = {
    name: 'Kevin',
    age: 23
};
console.log(userData1);
// COMPLEX ADVANCED OBJECTS
// obj with two props data: type numberArr and output: type function with arguments arg type boolean
// returns value of type numberArr
var complexObj = {
    data: [100, 3.99, 10],
    output: function (arg) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (arg) {
        return this.data;
    }
};
// Multiple types with UNION TYPES
// Other way to do this without error
// let myRealRealAge: any = 23;
// myRealRealAge = '23';
var myRealRealAge = 23;
myRealRealAge = 'twenty three';
//myRealRealAge = true; // error
// CHECK TYPES
// check types at run time
var finalValue = 25;
if (typeof finalValue == 'number') {
    console.log('Final value is a number');
}
