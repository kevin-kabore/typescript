console.log('Typescript works!');
// DECORATORS
// A decorator is a function we can attach to transform certain classes/methods/property/params - add methods or functionality
// may also be used in conjunction with metadata
// must match arguments of the function to args typescript gives for the type of decorator
// ex: class decorators take one constructorFn argument
// check: typescriptlang.org/docs/handbook/decorator.html

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
// have to exucte with parentheses
// must return a decorator
function logging(value: boolean) {
  // return a function that can be used as a decorator
  return value ? logged : null;
}

// attaching the result of the return value of logging function
// if true logged is attached if false nothing
@logging(true)
class Car {}

// Advanced
function printable(constructorFn: Function) {
  constructorFn.prototype.print = function() {
    // add print() to the parent of the constructorFn
    console.log(this);
  };
}

// @logging(true)
@printable
class Plant {
  name = 'Green Plant';
}
const plant = new Plant();
// plant.print(); must cast type any to plant
(<any>plant).print();

// METHOD & PROPERTY DECORATOR

//Factory which takes a boolean
// returns the decorator which takes target of type any
// propertyName
// descriptor: makes the property configurable
function editable(value: boolean) {
  return function(
    target: any, // constructorFN in static class or prototype in instantiated one
    propName: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.writable = value;
  };
}
// factory returns decorator
function overwritable(value: boolean): any {
  return function(target: any, propName: string) {
    const newDescriptor: PropertyDescriptor = {
      writable: value
    };
    return newDescriptor; // can return this
  };
}
class Project {
  // @overwritable(false) // prevents any value from being set
  projectName: string;

  constructor(name: string) {
    this.projectName = name;
  }

  @editable(false)
  calcBudget() {
    console.log(1000);
  }
}

// make decorator that makes calcBudget method editable
const project = new Project('Awesome Project');
project.calcBudget();
// project.calcBudget = function() {
//   console.log(2000);
// }; error because of the decorator
project.calcBudget();

// PARAMETER DECORATOR
// decorator itself not factory - can make factory
// target: constructorFN (Static class) or prototype (Instance)
function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log('Target: ', target);
  console.log('Method Name: ', methodName);
  console.log('ParamIndex ', paramIndex);
}
class Course {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  printStudentNumbers(mode: string, @printInfo printAll: boolean) {
    if (printAll) {
      console.log(10000);
    } else {
      console.log(2000);
    }
  }
}

const course = new Course('BEST COURSE EVER');
course.printStudentNumbers('anything', true);
course.printStudentNumbers('anything', false);
