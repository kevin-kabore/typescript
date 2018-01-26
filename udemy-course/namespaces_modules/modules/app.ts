// MODULES
// Always need a module Loader
// Explicit Dependency declaration
// Module Loader setup
// Import systemjs as module loader with npm
// npm i systemjs --save
// add to head: <script src="node_modules/systemjs/dist/system.js"></script>
// add to body: <script>
// SystemJS.config({
// packages: {
// '/': {
//   defaultExtension: 'js'
// }
// }
// });
// SystemJS.import('app.js');

import * as Circle from "./math/circle";
import  calc from "./math/rectangle";

console.log(Circle.PI);
console.log(Circle.calculateCircumference(10));
console.log(calc(10,20))
