"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tap combinator
 * @param f Function to call with passed value
 */
exports.tap = function (f) { return function (a) { return (f(a) ? a : a); }; };
