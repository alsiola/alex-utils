"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.curry2 = function (f) { return function (a) { return function (b) { return f(a, b); }; }; };
