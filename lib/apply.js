"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apply = function (f, thisArg) { return function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    return f.apply(thisArg, a);
}; };
