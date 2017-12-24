"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates a function that always returns a
 * @param a The value to return from returned function
 */
exports.always = function (a) { return function () { return a; }; };
