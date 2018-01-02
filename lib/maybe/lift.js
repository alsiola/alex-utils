"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lift = function (f) { return function (a) {
    return a.map(f);
}; };
