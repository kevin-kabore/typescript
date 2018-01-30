"use strict";
// Intergrating with gulp
// > npm i --save-dev gulp gulp-typescript
// > use gulp and gulpfile to compile ts
Object.defineProperty(exports, "__esModule", { value: true });
// To import js libraries
// install jquery from definitelyTyped with Typescript2.0
// > npm install --save-dev @types/jquery
// adds to package.json & node_modules
// import "jQuery";
console.log('Typescript works!');
require("jQuery");
$('#app').css({ 'background-color': 'blue' });
console.log('jquery works');
