"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var maybe_1 = require("./maybe");
exports.headM = function (arr) {
    return arr.length > 0 ? maybe_1.Just.from(arr[0]) : maybe_1.Nothing.from();
};
