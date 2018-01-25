"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/////////////////////////////////
// Creating Classes
/////////////////////////////////
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 23; // available in children of this class doesn't need to be initialized in constructor
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType('Old Guy'); // must use keyword this
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(type);
    };
    return Person;
}());
// can reduce code by placing public and type in constructor so no need to assign
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
    }
    return Person1;
}());
var person = new Person('Kevin', 'kevintheUser');
console.log(person);
person.printAge();
// person.setType('Amazing dude'); // won't work with private method
/////////////////////////////////
// Inheritance
/////////////////////////////////
var Kevin = /** @class */ (function (_super) {
    __extends(Kevin, _super);
    // name = 'Kevin';
    function Kevin(username) {
        var _this = _super.call(this, 'Kevin', username) || this;
        _this.age = 55; // available because protected not private
        return _this;
    }
    return Kevin;
}(Person));
// const kevin = new Kevin('Kirsten', 'kirstenTheUser'); // name will be Kevin since set in class declaration
var kevin = new Kevin('KevinTheUserName');
console.log(kevin);
/////////////////////////////////
//GETTERS & SETTERS
/////////////////////////////////
console.log('GETTERS & SETTERS');
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = 'Default';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            // will be called like a property not method
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = 'Default';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species); // getter called like a prop not method
// return "Default"
plant.species = 'AB'; // setter called like a prop not method
console.log(plant.species);
// returns default because didn't pass if statement
plant.species = 'Green plant';
console.log(plant.species);
// returns "Green plant"
/////////////////////////////////
// STATIC PROPERTIES AND METHODS
/////////////////////////////////
// Mostly useful for helper classes like this one
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
// console.log(2 * Helpers.PI); // will not work without static keyword
console.log(2 * Helpers.PI); // works because of static keyword
console.log(Helpers.calcCircumference(5));
////////////////////////////
// ABSTRACT CLASSES
////////////////////////////
// Can't be instatiated, can only be extended
console.log('ABSTRACT CLASSES');
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = 'Default';
        this.budget = 1000;
    }
    // must implement/overwrite method in child class
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
// let newProject = new Project(); // cannot instantiate abstract class
var newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super New IT Project');
console.log(newProject);
// ABSTRACT CLASSES - need to be inherited
// provides a blue print as an abstract base class
///////////////////////////////////////
// Private Constructors and singletons
///////////////////////////////////////
// Singleton class: Class that will only have 1 instance during run time
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// let wrong = new OnlyOne('The Only One');
var right = OnlyOne.getInstance();
