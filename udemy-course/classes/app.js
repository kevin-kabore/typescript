"use strict";
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
