"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.curryV = function (fn) { return function () {
    var partialArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        partialArgs[_i] = arguments[_i];
    }
    if (partialArgs.length < fn.length) {
        return function () {
            var restArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                restArgs[_i] = arguments[_i];
            }
            return exports.curryV(fn).apply(void 0, partialArgs.concat(restArgs));
        };
    }
    return fn.apply(null, partialArgs);
}; };
exports.curry2 = function (f) {
    return exports.curryV(f);
};
