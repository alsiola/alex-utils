"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var maybe_1 = require("./maybe");
exports.propM = function (p) { return function (a) { return (p in a ? maybe_1.Just.from(a[p]) : maybe_1.Nothing.from()); }; };
