'use strict';
function greet(person) {
  // must have at least name prop on obj
  console.log('Hello ' + person.firstName);
}
function changeName(person) {
  person.firstName = 'Anna';
}
// Interfaces can be used to implement objects
var person = {
  firstName: 'Kevin',
  age: 23,
  hobby: {
    // unknown prop in the interface
    cooking: false,
    basketball: true
  },
  greet: function(lastName) {
    console.log('Hi ' + this.firstName + ' ' + lastName);
  }
};
// STRICT CHECKS HAPPEN only on object literals
// greet({ firstName: 'Kevin', age: 23 }); // will get error w/ obj literal if age is not optional argument in interface
greet(person);
changeName(person);
greet(person);
person.greet('Kabore');
// interfaces can be used to implement classes
var Person = /** @class */ (function() {
  function Person() {}
  Person.prototype.greet = function(lastName) {
    console.log('Hi ' + this.firstName + ' ' + lastName);
  };
  return Person;
})();
var myPerson = new Person();
myPerson.firstName = 'Kevin';
greet(myPerson); // global greet function
myPerson.greet('Kabore'); // Person class greet method
var myDoubleFunc = function(val1, val2) {
  return (val1 + val2) * 2;
};
console.log(myDoubleFunc(10, 20));
var oldPerson = {
  age: 23,
  firstName: 'Kevin',
  greet: function(lastName) {
    console.log('Hello');
  }
};
console.log(oldPerson);
