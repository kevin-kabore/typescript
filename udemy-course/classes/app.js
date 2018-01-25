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
// Inheritance
var Kevin = /** @class */ (function (_super) {
    __extends(Kevin, _super);
    // name = 'Kevin';
    function Kevin(username) {
        var _this = _super.call(this, 'Kevin', username) || this;
        _this.age = 55; // available because protected not private
        console.log(_this.type);
        return _this;
    }
    return Kevin;
}(Person));
// const kevin = new Kevin('Kirsten', 'kirstenTheUser'); // name will be Kevin since set in class declaration
var kevin = new Kevin('kirstenTheUser');
console.log(kevin);
