"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log('Typescript works!');
// DECORATORS
// functions we can add to methods or classes
// decorator that gets added to a class
// 1. add a decorator that logs constructor of the class
// decorators attached to a class will have 1 arg attached to it: constructor function
function logged(constructorFn) {
    console.log(constructorFn);
}
// attach decorator
var Person = /** @class */ (function () {
    function Person() {
        console.log('Hi');
    }
    Person = __decorate([
        logged
    ], Person);
    return Person;
}());
// Factory
function logging(value) {
    // return a function that can be used as a decorator
    return value ? logged : null;
}
// attaching the result of the return value of logging function
// if true logged is attached if false nothing
var Car = /** @class */ (function () {
    function Car() {
    }
    Car = __decorate([
        logging(true)
    ], Car);
    return Car;
}());
