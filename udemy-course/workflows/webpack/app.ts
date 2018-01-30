// Intergrate into Webpack workflow
// > npm i --save-dev webpack ts-loader
// remove all system js code in index.html Will use webpack
// import bundle.js script in index.html
// remove exclude, sourcemap, and module from tsconfig.json
// add webpack.config.js file

// To import js libraries
// install jquery from definitelyTyped with Typescript2.0
// > npm install --save-dev @types/jquery
// adds to package.json & node_modules
// import "jQuery";
console.log('Typescript works!');

import $ = require('jquery');

$('#app').css({ 'background-color': 'blue' });
console.log('jquery works');
