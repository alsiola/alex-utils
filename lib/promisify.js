"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Convert a standard node callback-style function to return a promise
 */
exports.promisify = function (f) { return function (a) {
    return new Promise(function (resolve, reject) {
        return f(a, function (err, res) { return (err ? reject(err) : resolve(res)); });
    });
}; };
