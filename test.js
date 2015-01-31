"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var test = _interopRequire(require("prova"));

var ifElse = require("./").ifElse;


test("fj-ifElse", function (t) {
    t.plan(3);

    ifElse(function () {
        return true;
    }, function () {
        return t.ok(true);
    }, function () {
        return t.fail();
    });

    ifElse(function () {
        return false;
    }, function () {
        return t.fail();
    }, function () {
        return t.ok(true);
    });

    var ifTrue = ifElse(function () {
        return true;
    });

    ifTrue(function () {
        return t.ok(true);
    }, function () {
        return t.fail();
    });
});