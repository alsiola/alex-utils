"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Transform an array of objects into an object keyed by a particular property
 * @param prop The property to use as the records key
 */
exports.makeRecord = function (prop) { return function (arr) {
    return arr.reduce(function (out, curr) {
        return (__assign({}, out, (_a = {}, _a[curr[prop]] = curr, _a)));
        var _a;
    }, {});
}; };
