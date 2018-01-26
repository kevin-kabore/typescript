"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const Circle = require("./math/circle");
const rectangle_1 = require("./math/rectangle");
console.log(Circle.PI);
console.log(Circle.calculateCircumference(10));
console.log(rectangle_1.default(10, 20));
