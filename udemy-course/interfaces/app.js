"use strict";
// INTERFACES
// Defining a type to make sure a certain field is available
function greet(person) {
    // must have at least name prop on obj
    console.log("Hello " + person.firstName);
}
function changeName(person) {
    person.firstName = 'Anna';
}
var person = {
    firstName: 'Kevin',
    age: 23
};
greet(person);
changeName(person);
greet(person);
