"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Create a function that applies all passed functions in turn
 * I.e. pipe(f, g, h) = h . g . f
 * @param fns Functions to combine
 */
exports.pipe = function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (a) { return fns.reduce(function (out, curr) { return curr(out); }, a); };
};
/**
 * Create a function that applies all passed (possibly async) functions in turn
 * @param fns Functions to combine
 */
exports.pipeAsync = function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (a) {
        return fns.reduce(function (out, curr) { return Promise.resolve(out).then(curr); }, a);
    };
};
