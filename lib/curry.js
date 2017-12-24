"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Curries any function with well-defined (not rest) arguments
 * @param f The function to curry
 */
exports.curryV = function (f) { return function () {
    var partialArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        partialArgs[_i] = arguments[_i];
    }
    if (partialArgs.length < f.length) {
        return function () {
            var restArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                restArgs[_i] = arguments[_i];
            }
            return exports.curryV(f).apply(void 0, partialArgs.concat(restArgs));
        };
    }
    return f.apply(null, partialArgs);
}; };
/**
 * Curries an arity-2 function
 * @param f Arity-2 function to curry
 */
exports.curry2 = function (f) {
    return exports.curryV(f);
};
