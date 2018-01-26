// INTERFACES
// 1. Define a type to make sure a certain field is available
// 2. A contract that can be used as a type to make sure all the conditions in the interface are fulfilled
// A way to guarantee your code has methods/properties/code is available
interface NamedPerson {
  // define requirements
  firstName: string;
  age?: Number; // make age an optional argument
  [propName: string]: any; // if don't know name of properties in advance
  greet(lastName: string): void;
}
function greet(person: NamedPerson) {
  // must have at least name prop on obj
  console.log(`Hello ${person.firstName}`);
}

function changeName(person: NamedPerson) {
  person.firstName = 'Anna';
}

// Interfaces can be used to implement objects
const person: NamedPerson = {
  firstName: 'Kevin',
  age: 23,
  hobby: {
    // unknown prop in the interface
    cooking: false,
    basketball: true
  },
  greet(lastName: string) {
    console.log(`Hi ${this.firstName} ${lastName}`);
  }
};
// STRICT CHECKS HAPPEN only on object literals
// greet({ firstName: 'Kevin', age: 23 }); // will get error w/ obj literal if age is not optional argument in interface
greet(person);
changeName(person);
greet(person);
person.greet('Kabore');

// interfaces can be used to implement classes
class Person implements NamedPerson {
  firstName: string;
  greet(lastName: string) {
    console.log(`Hi ${this.firstName} ${lastName}`);
  }
}

const myPerson = new Person();
myPerson.firstName = 'Kevin';
greet(myPerson); // global greet function
myPerson.greet('Kabore'); // Person class greet method
