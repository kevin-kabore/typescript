"use strict";
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    MyMath.calculateRectangle = function (width, length) {
        return width * length;
    };
})(MyMath || (MyMath = {}));
