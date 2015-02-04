"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var test = _interopRequire(require("prova"));

var ifElse = _interopRequire(require("./"));

test("fj-ifElse", function (t) {
    t.plan(3);

    ifElse(function (x, y) {
        return x === y;
    }, function (x, y) {
        return t.equals(x, y);
    }, function () {
        return t.fail();
    })(true, true);

    ifElse(function (x) {
        return x === true;
    }, function () {
        return t.fail();
    }, function (x) {
        return t.ok(x === false);
    })(false);

    var ifTrue = ifElse(function () {
        return true;
    });

    ifTrue(function () {
        return t.ok(true);
    }, function () {
        return t.fail();
    })();
});