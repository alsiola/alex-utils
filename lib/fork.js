"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Fork combinator
 * @param fCombine Combining function
 * @param fLeft Left branch function
 * @param fRight Right branch function
 */
exports.fork = function (fCombine, fLeft, fRight) { return function (a) { return fCombine(fLeft(a), fRight(a)); }; };
exports.forkAsync = function (fCombine, fLeft, fRight) { return function (a) {
    return Promise.resolve(a).then(function (ra) {
        return Promise.all([fLeft(ra), fRight(ra)]).then(function (_a) {
            var l = _a[0], r = _a[1];
            return fCombine(l, r);
        });
    });
}; };
