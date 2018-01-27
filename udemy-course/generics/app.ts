// GENERICS

// Simple Generics
function echo(data: any) {
  return data;
}

console.log(echo('Kevin'));
console.log(echo('Kevin').length);
console.log(echo(23));
console.log(echo(23).length); // no ts error
console.log(echo({ name: 'Kevin', age: 23 }));

// Better Generic
function betterEcho<T>(data: T) {
  return data;
}
console.log(betterEcho('Kevin').length);
console.log(betterEcho<number>(23));
console.log(betterEcho({ name: 'Kevin', age: 23 }));

// Built-in Generics
// Array is a generic type by default
const testResults: Array<number> = [1.94, 2.5]; // type array of numbers
testResults.push(3);
// testResults.push('string') // error
console.log(testResults);

// Arrays
// generic type to be an array

// generic function
// arguments of the same type used in the function
let printAll = <T>(args: T[]) => {
  args.forEach(element => console.log(element));
};
printAll<string>(['apples', 'bananas']);

// Genering Types
// const echo2 of type generic, then a function that takes data as an input and return this type
// anything between colon and equal sign is a type.
// So this is: A generic type (<T>) with a function type
// where input is of type <T>

const echo2: <T>(data: T) => T = betterEcho;

// reusing better echo by assigning a generic function type to a constant
console.log(echo2<string>('Something'));

// GENERIC CLASSES - most used Generics
// generic class takes two args on instantiation
// T - number or string
// U - number or string
class SimpleMath<T extends number | string, U extends number | string> {
  // extends constraints class types to properties. Ex can't use boolean
  baseValue: T;
  multiplyValue: U;
  calculate(): number {
    return +this.baseValue * +this.multiplyValue;
  }
}

const simpleMath = new SimpleMath<string, number>(); // baseValue: string multiplyValue: number
// simpleMath.baseValue = 'string'; // no error without generic
// make SimpleMath more generic
simpleMath.baseValue = '10'; // first type
simpleMath.multiplyValue = 20; // second type
console.log(simpleMath.calculate());
