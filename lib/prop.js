"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prop = function (p) { return function (a) {
    return a[p];
}; };
