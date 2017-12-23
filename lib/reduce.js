"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduce = function (f, seed) { return function (a) {
    return a.reduce(f, seed);
}; };
exports.reduceAsync = function (f, seed) { return function (a) {
    return Promise.resolve(a.reduce(function (out, curr) {
        return Promise.all([out, curr]).then(function (_a) {
            var out = _a[0], curr = _a[1];
            return f(out, curr);
        });
    }, Promise.resolve(seed)));
}; };
