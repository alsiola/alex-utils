"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curry_1 = require("./curry");
exports.flip = function (f) { return function (a, b) { return f(b, a); }; };
exports.curryFlip = function (f) { return curry_1.curry2(exports.flip(f)); };
