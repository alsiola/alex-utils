"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Get the value of a particular property in an object
 * @param p Prop name
 */
exports.prop = function (p) { return function (a) {
    return a[p];
}; };
