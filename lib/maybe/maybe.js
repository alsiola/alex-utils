"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Just = /** @class */ (function () {
    function Just(value) {
        this.value = value;
    }
    Just.from = function (a) {
        return new Just(a);
    };
    Just.prototype.map = function (fn) {
        return Just.from(fn(this.value));
    };
    Just.prototype.apply = function (a) {
        if (typeof this.value !== "function") {
            throw new Error("Apply is only callable if wrapped value is a function");
        }
        return Just.from(this.value(a));
    };
    Just.prototype.isNothing = function () {
        return false;
    };
    Just.prototype.withDefault = function (def) {
        return this.value;
    };
    return Just;
}());
exports.Just = Just;
var Nothing = /** @class */ (function () {
    function Nothing() {
    }
    Nothing.from = function () {
        return new Nothing();
    };
    Nothing.prototype.map = function (fn) {
        return Nothing.from();
    };
    Nothing.prototype.apply = function (a) {
        return Nothing.from();
    };
    Nothing.prototype.isNothing = function () {
        return true;
    };
    Nothing.prototype.withDefault = function (def) {
        return def;
    };
    return Nothing;
}());
exports.Nothing = Nothing;
