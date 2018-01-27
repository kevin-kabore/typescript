"use strict";
// Create a generic Map (an Object like an Array, but instead with Key-Value Pairs).
// The key will always be a string.
var MyMap = /** @class */ (function () {
    function MyMap() {
        this.map = {}; // map of type obj with key: string and value: T
    }
    MyMap.prototype.setItem = function (key, value) {
        this.map["" + key] = value;
    };
    MyMap.prototype.getItem = function (key) {
        return this.map.hasOwnProperty(key) ? this.map[key] : null;
    };
    MyMap.prototype.clear = function () {
        for (var key in this.map) {
            delete this.map[key];
        }
    };
    MyMap.prototype.printMap = function () {
        for (var key in this.map) {
            console.log(key, this.map[key]);
        }
    };
    return MyMap;
}());
// Let's keep it simple and only add the following methods to the Map:
// setItem( string, item: T) // should create a new key-value pair
// getItem(key: string) // should retrieve the value of the provided key
// clear() // should remove all key-value pairs
// printMap() // should output key-value pairs
// The map should be usable like shown below:
var numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
console.log(numberMap.getItem('apples'));
console.log(numberMap.getItem('bananas'));
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem('name', 'Max');
stringMap.setItem('age', '27');
console.log(stringMap.getItem('name'));
console.log(stringMap.getItem('age'));
stringMap.printMap();
stringMap.clear();
