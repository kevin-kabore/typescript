"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
console.log('Typescript works!');
// DECORATORS
// A decorator is a function we can attach to transform certain classes/methods/property/params - add methods or functionality
// may also be used in conjunction with metadata
// must match arguments of the function to args typescript gives for the type of decorator
// ex: class decorators take one constructorFn argument
// check: typescriptlang.org/docs/handbook/decorator.html
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
// have to exucte with parentheses
// must return a decorator
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
// Advanced
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        // add print() to the parent of the constructorFn
        console.log(this);
    };
}
// @logging(true)
var Plant = /** @class */ (function () {
    function Plant() {
        this.name = 'Green Plant';
    }
    Plant = __decorate([
        printable
    ], Plant);
    return Plant;
}());
var plant = new Plant();
// plant.print(); must cast type any to plant
plant.print();
// METHOD & PROPERTY DECORATOR
//Factory which takes a boolean
// returns the decorator which takes target of type any
// propertyName
// descriptor: makes the property configurable
function editable(value) {
    return function (target, // constructorFN in static class or prototype in instantiated one
        propName, descriptor) {
        descriptor.writable = value;
    };
}
// factory returns decorator
function overwritable(value) {
    return function (target, propName) {
        var newDescriptor = {
            writable: value
        };
        return newDescriptor; // can return this
    };
}
var Project = /** @class */ (function () {
    function Project(name) {
        this.projectName = name;
    }
    Project.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        editable(false)
    ], Project.prototype, "calcBudget", null);
    return Project;
}());
// make decorator that makes calcBudget method editable
var project = new Project('Awesome Project');
project.calcBudget();
// project.calcBudget = function() {
//   console.log(2000);
// }; error because of the decorator
project.calcBudget();
// PARAMETER DECORATOR
// decorator itself not factory - can make factory
// target: constructorFN (Static class) or prototype (Instance)
function printInfo(target, methodName, paramIndex) {
    console.log('Target: ', target);
    console.log('Method Name: ', methodName);
    console.log('ParamIndex ', paramIndex);
}
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printStudentNumbers = function (mode, printAll) {
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(2000);
        }
    };
    __decorate([
        __param(1, printInfo)
    ], Course.prototype, "printStudentNumbers", null);
    return Course;
}());
var course = new Course('BEST COURSE EVER');
course.printStudentNumbers('anything', true);
course.printStudentNumbers('anything', false);
