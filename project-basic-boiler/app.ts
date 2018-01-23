// to config tsconfig: run tsc init
// run tsc to compile all ts files to js
// run tsc on command line to compile to js
console.log('It works!');

// BASIC Types
// Typechecks through inference
// string
let myName = 'Kevin';
// myName = 20;
// number
let myAge = 23;
// myAge = 'Kevin'

// boolean
let hasHobbies: boolean = true;
// hasHobbies = 1; still gives an error

// Assign types
let myRealAge; // sets to type: any (like js) so no error in reassign or compilation check
myRealAge = 23;
myRealAge = '23';
// assign the type, throws error
let myRealAge1: number;
myRealAge1 = 23;
// myRealAge1 = '23';

// array
let hobbies = ['Basketball', 'Game of Thrones'];
console.log(hobbies[0]);
console.log(`typeof hobbies: ${typeof hobbies}`); //object
// hobbies = [100]; // error: number[] is not assignable to string[]
// hobbies = ['A string']; // no error

// to get no errors set to type of array with any type
let hobbiesAny: any[] = ['Basketball', 12, { movie: 'A movie', year: 2016 }];

// TUPLES - New Type - not in js
// An array of mixed types with limited indexes
// let address = ['Street', 100];
// to make a tuple
let address: [string, number] = ['Street', 100];
// so if any other order, typecheck works
// let address: [string, number] = [100, 'Street']; // error

// ENUM
// Enums allow us to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
enum Color {
  Gray, // 0
  Green, // 1
  Blue // 2
}
// set type of var to enum
let myColor: Color = Color.Green; // return 1
console.log(myColor);

// other example to set enum values
enum Color1 {
  Orange, // 0
  Yellow = 100, // 100
  Red // 101 - to reset, manually set to 2
}

let myColor1: Color1 = Color1.Red; // 101
console.log(myColor1);

// FUNCTIONS
// type refers to type of the return value
// RETURN TYPE = string
function returnMyName(): string {
  return myName;
}
console.log(returnMyName());

// void when function should not return anything
function sayHello(): void {
  console.log('Hello');
  // no return value otherwise error
  // return myName;
}

// FUNCTION ARGYMENT TYPE: number, number
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
// console.log(multiply(2, 'Max')); // no error because NaN is type Number
// must set type on args
// now error

console.log(multiply(2, 3));

// FUNCTION TYPES
// not a function. Type arrow function and return type
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello; // error sayHello has no return and no args
myMultiply = multiply; // no error
console.log(myMultiply(5, 5));

// OBJECTS
let userData = {
  name: 'Kevin',
  age: 23
};
// typescript infers userData of type {name: string, age: number} so
// userData = {}; //error
// userData = { a: 'Hello', b: 23}; // still error because keys must match
// can be explicit with key value setting type before the equal sign
let userData1: { name: string; age: number } = {
  name: 'Kevin',
  age: 23
};

console.log(userData1);

// COMPLEX ADVANCED OBJECTS
// obj with two props data: type numberArr and output: type function with arguments arg type boolean
// returns value of type numberArr
let complexObj: { data: number[]; output: (arg: boolean) => number[] } = {
  data: [100, 3.99, 10],
  output: function(arg: boolean): number[] {
    return this.data;
  }
};
//complexObj = {}; // error

// type alias
// even though equal sign, still type creation
type Complex = { data: number[]; output: (arg: boolean) => number[] };

let complex2: Complex = {
  data: [100, 3.99, 10],
  output: function(arg: boolean): number[] {
    return this.data;
  }
};

// Multiple types with UNION TYPES
// Other way to do this without error
// let myRealRealAge: any = 23;
// myRealRealAge = '23';
let myRealRealAge: number | string = 23;
myRealRealAge = 'twenty three';
//myRealRealAge = true; // error

// CHECK TYPES
// check types at run time
let finalValue = 25;
if (typeof finalValue == 'number') {
  console.log('Final value is a number'); // will only run if the if statements checks out
}

//NEVER - probably won't use often
// should never return
function neverReturns(): never {
  throw new Error('Never returned');
}

// NULLABLE types
let canBeNull = 12;
// canBeNull = null; error because strictNullChecks in tsconfig can reset with union type
let canBeNull1: number | null = 12;
canBeNull1 = null; // no error
let canAlsoBeNull;
canAlsoBeNull = null;

let canThisBeAny = null; // not assumed to be of type any
