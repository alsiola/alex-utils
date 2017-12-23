"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tap = function (f) { return function (a) {
    f(a);
    return a;
}; };
