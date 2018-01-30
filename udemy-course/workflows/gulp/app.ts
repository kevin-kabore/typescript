// Intergrating with gulp
// > npm i --save-dev gulp gulp-typescript
// > use gulp and gulpfile to compile ts

// To import js libraries
// install jquery from definitelyTyped with Typescript2.0
// > npm install --save-dev @types/jquery
// adds to package.json & node_modules
// import "jQuery";
console.log('Typescript works!');

import'jQuery';
$('#app').css({ 'background-color': 'blue' });
console.log('jquery works');
