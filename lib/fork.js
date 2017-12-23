"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fork = function (fCombine, fLeft, fRight) { return function (a) { return fCombine(fLeft(a), fRight(a)); }; };
exports.forkAsync = function (fCombine, fLeft, fRight) { return function (a) {
    return Promise.resolve(a).then(function (a) {
        return Promise.all([fLeft(a), fRight(a)]).then(function (_a) {
            var b = _a[0], c = _a[1];
            return fCombine(b, c);
        });
    });
}; };
