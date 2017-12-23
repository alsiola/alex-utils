"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trident = function (fCombine, fLeft, fMiddle, fRight) { return function (a) { return fCombine(fLeft(a), fMiddle(a), fRight(a)); }; };
exports.tridentAsync = function (fCombine, fLeft, fMiddle, fRight) { return function (a) {
    return Promise.resolve(a).then(function (ra) {
        return Promise.all([fLeft(ra), fMiddle(ra), fRight(ra)]).then(function (_a) {
            var l = _a[0], m = _a[1], r = _a[2];
            return fCombine(l, m, r);
        });
    });
}; };
