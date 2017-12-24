"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promisify = function (f) { return function (a) {
    return new Promise(function (resolve, reject) {
        return f(a, function (err, res) { return (err ? reject(err) : resolve(res)); });
    });
}; };
