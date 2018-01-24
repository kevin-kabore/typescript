"use strict";
console.log('Typescript works!');
console.log('LET & CONST');
// let & const
var variable = 'A string';
variable = 'Another string';
console.log(variable);
// const when not going to chane val
var maxScore = 100;
console.log(maxScore);
// maxScore = 92; won't work
// let has block level scope not global like var
function reset() {
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable); // returns Another string
// Arrow functions
console.log('ARROW FUNCTIONS');
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(3, 5));
// Default Paramaters
console.log('DEFAULT PATAMETERS');
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        start--;
    }
    console.log('DONE!', start);
};
countdown(10);
