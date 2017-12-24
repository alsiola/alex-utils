"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curry_1 = require("./curry");
var flip_1 = require("./flip");
var promisify_1 = require("./promisify");
exports.delay = promisify_1.promisify(curry_1.curry2(flip_1.flip(setTimeout)));
