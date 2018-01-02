"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var maybe_1 = require("./maybe");
exports.tailM = function (arr) {
    return arr.length > 1 ? maybe_1.Just.from(arr.slice(1)) : maybe_1.Nothing.from();
};
