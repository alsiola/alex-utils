"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curry_1 = require("./curry");
var flip_1 = require("./flip");
exports.delay = function (ms) {
    return new Promise(curry_1.curry2(flip_1.flip(setTimeout))(ms));
};
