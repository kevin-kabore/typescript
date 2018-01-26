"use strict";
// GENERICS
// Simple Generics
function echo(data) {
    return data;
}
console.log(echo('Kevin'));
console.log(echo('Kevin').length);
console.log(echo(23));
console.log(echo(23).length); // no ts error
console.log(echo({ name: 'Kevin', age: 23 }));
// Better Generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho('Kevin').length);
console.log(betterEcho(23));
console.log(betterEcho({ name: 'Kevin', age: 23 }));
// Built-in Generics
// Array is a generic type by default
var testResults = [1.94, 2.5]; // type array of numbers
testResults.push(3);
// testResults.push('string') // error
console.log(testResults);
// Arrays
// generic type to be an array
// generic function
// arguments of the same type used in the function
var printAll = function (args) {
    args.forEach(function (element) { return console.log(element); });
};
printAll(['apples', 'bananas']);
