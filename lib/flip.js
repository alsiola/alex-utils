"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curry_1 = require("./curry");
/**
 * Reverses the argument order of an arity-two function
 * @param f The function to flip
 */
exports.flip = function (f) { return function (a, b) { return f(b, a); }; };
/**
 * Reverses the argument order of an arity-two function and curries the result
 * @param f The function to flip and curry
 */
exports.curryFlip = function (f) { return curry_1.curry2(exports.flip(f)); };
