"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reduce_1 = require("./reduce");
var _1 = require(".");
exports.sum = reduce_1.reduce(_1.add, 0);
