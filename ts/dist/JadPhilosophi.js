"use strict";
exports.__esModule = true;
String.prototype.toJadenCase = function (jadenCase) {
    return jadenCase.split(' ').map(function (word) {
        return word[0].toUpperCase();
    });
};
console.log("Ok".toJadenCase("far far away"));
