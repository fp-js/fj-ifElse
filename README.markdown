# fj-ifElse

[![Build Status](https://travis-ci.org/fp-js/fj-ifElse.svg)](https://travis-ci.org/fp-js/fj-ifElse) [![npm version](https://badge.fury.io/js/fj-ifElse.svg)](http://badge.fury.io/js/fj-ifElse)
> This is a template repo for fp-dom.

## Installation

`npm install fj-ifElse --save`

## Usage

```js
var ifElse = require('fj-ifElse');

ifElse(
  () => x === true,
  () => console.log('if'),
  () => console.log('else')
); 

var ifTrue = ifElse(() => true);

ifTrue(
    () => t.ok(true),
    () => t.fail()
);
```
