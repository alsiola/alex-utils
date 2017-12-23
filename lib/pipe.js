"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipe = function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (a) { return fns.reduce(function (out, curr) { return curr(out); }, a); };
};
exports.pipeAsync = function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (a) {
        return fns.reduce(function (out, curr) { return Promise.resolve(out).then(curr); }, a);
    };
};
