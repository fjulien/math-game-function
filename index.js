"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeRandomNumber = makeRandomNumber;
exports.multiply = multiply;
exports.ERROR_SIZE_PARAMS = exports.ERROR_TYPE_PARAMS = exports.ERROR_PARAMS = exports.MAX = exports.MIN = void 0;
var MIN = 0;
exports.MIN = MIN;
var MAX = 9;
exports.MAX = MAX;
var ERROR_PARAMS = "params missing";
exports.ERROR_PARAMS = ERROR_PARAMS;
var ERROR_TYPE_PARAMS = "params is not a number";
exports.ERROR_TYPE_PARAMS = ERROR_TYPE_PARAMS;
var ERROR_SIZE_PARAMS = "params is not between 0 and 9";
exports.ERROR_SIZE_PARAMS = ERROR_SIZE_PARAMS;

function makeRandomNumber() {
  return Math.floor(Math.random() * 10);
}

;

function multiply(nb1, nb2) {
  if (nb1 === undefined || nb2 === undefined) throw ERROR_PARAMS;
  if (typeof nb1 !== "number" || typeof nb2 !== "number") throw ERROR_TYPE_PARAMS;
  if (nb1 < MIN || nb1 > MAX || nb2 < MIN || nb2 > MAX) throw ERROR_SIZE_PARAMS;
  return nb1 * nb2;
}

;
