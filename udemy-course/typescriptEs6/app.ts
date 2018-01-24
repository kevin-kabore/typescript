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
