"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var flip_1 = require("./flip");
var pipe_1 = require("./pipe");
var promisify_1 = require("./promisify");
/**
 * Returns a promise that resolves after ms milliseconds
 * @param ms Milliseconds to delay for
 */
exports.delay = pipe_1.pipe(flip_1.flip, promisify_1.promisify)(setTimeout);
