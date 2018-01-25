////////////////////////////
// MAMESPACES
////////////////////////////
// 1) Bundle into 1 file
// 2) Import reference file in order in main file
// run: tsc app.ts --outFile app.js to bundle

/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />
import CircleMath = MyMath.Circle; // alias import for namespaces

const PI = 2.9;

// compile all ts files into app.js
// run: tsc --outFile  app.js circleMath.ts rectangleMath.ts app.ts
// or use imports for namespace on lines 8 & 9 order may be important;
// then run: tsc app.ts --outFile app.js
console.log(MyMath.calculateRectangle(10, 20));
console.log(CircleMath.calculateCircumference(15));
console.log(PI);
