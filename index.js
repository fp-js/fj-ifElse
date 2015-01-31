"use strict";

var curry3 = require("fj-curry").curry3;



function _ifElse(pred, then, otherwise) {
  if (pred() === true) {
    return then();
  } else {
    return otherwise();
  }
}

var ifElse = curry3(_ifElse);

module.exports = ifElse;