"use strict";

var curry3 = require("fj-curry").curry3;



function _ifElse(pred, then, otherwise) {
  if (pred() === true) {
    return then();
  } else {
    return otherwise();
  }
}

var ifElse = exports.ifElse = curry3(_ifElse);
exports.__esModule = true;