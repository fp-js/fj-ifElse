"use strict";

var curry3 = require("fj-curry").curry3;



function _ifElse(pred, then, otherwise) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (pred.apply(null, args) === true) {
      return then.apply(null, args);
    } else {
      return otherwise.apply(null, args);
    }
  };
}

var ifElse = curry3(_ifElse);

module.exports = ifElse;