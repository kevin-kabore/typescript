console.log('Typescript works!');
// DECORATORS
// functions we can add to methods or classes

// decorator that gets added to a class
// 1. add a decorator that logs constructor of the class
// decorators attached to a class will have 1 arg attached to it: constructor function
function logged(constructorFn: Function) {
  console.log(constructorFn);
}
// attach decorator
@logged
class Person {
  constructor() {
    console.log('Hi');
  }
}

// Factory
function logging(value: boolean) {
  // return a function that can be used as a decorator
  return value ? logged : null;
}

// attaching the result of the return value of logging function
// if true logged is attached if false nothing
@logging(true)
class Car {}
