"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curry_1 = require("./curry");
exports.divide = curry_1.curry2(function (a, b) { return b / a; });
