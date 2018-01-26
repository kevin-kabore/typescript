// INTERFACES
// Defining a type to make sure a certain field is available
// A way to guarantee your code has methods/properties/code is available
interface NamedPerson {
  // define requirements
  firstName: string;
  age?: Number; // make age an optional argument
  [propName: string]: any; // if don't know name of properties in advance
}
function greet(person: NamedPerson) {
  // must have at least name prop on obj
  console.log(`Hello ${person.firstName}`);
}

function changeName(person: NamedPerson) {
  person.firstName = 'Anna';
}

const person = {
  firstName: 'Kevin',
  age: 23,
  hobby: {
    // unknown prop in the interface
    cooking: false,
    basketball: true
  }
};

greet({ firstName: 'Kevin', age: 23 }); // will get error w/ obj literal if age is not optional argument in interface
greet(person);
changeName(person);
greet(person);
