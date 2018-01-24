console.log('Typescript works!');
console.log('LET & CONST');
// let & const
let variable = 'A string';
variable = 'Another string';
console.log(variable);
// const when not going to chane val
const maxScore = 100;
console.log(maxScore);
// maxScore = 92; won't work
// let has block level scope not global like var
function reset() {
  let variable = null;
  console.log(variable);
}
reset();
console.log(variable); // returns Another string

// Arrow functions
console.log('ARROW FUNCTIONS');
const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
console.log(multiplyNumbers(3, 5));

// Default Paramaters
console.log('DEFAULT PATAMETERS');
const countdown = (start: number = 10): void => {
  while (start > 0) {
    start--;
  }
  console.log('DONE!', start);
};
countdown(10);

//Spread & Rest operators
console.log('REST & SPREAD');
// allow to work with arrays and list of values
const numbersArr = [1, 2, 3, 99, -5];
console.log(Math.max(99, 10, -5, 15)); // list of numbers
console.log(Math.max(...numbersArr)); //spread the arr

let makeArr = (name: string, ...args: number[]): number[] => {
  // rest operator turns args into array
  return args;
};

console.log(makeArr('Kevin', 1, 2, 3));

// Destructuring
console.log('DESTRUCTURING');
console.log('DESTRUCTURING ARRAYS');
let myHobbies: string[] = ['Cooking', 'Basketball'];
// let hobby1: string = myHobbies[0];
// let hobby2: string = myHobbies[1];
let [hobby1, hobby2] = myHobbies; // destructuring arrays
console.log(hobby1, hobby2);

console.log('DESTRUCTURING OBJECTS');
const userData: { username: string; age: number } = {
  username: 'Kevin',
  age: 23
};
// const username = userData.username;
// const age: number = userData.age;
// const { username: myName, age: myAge } = userData; // optionally set different names
// console.log(myName, myAge);
const { username, age } = userData;
console.log(username, age);

// Template Literals
const userName: string = 'Kevin';
// const greeting = "Hello I'm " + userName;
const greeting: string = `This is a heading.
Hello I'm ${userName}
This is a multiline string!
Very cool!
`;
console.log(greeting);
