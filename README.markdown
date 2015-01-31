# fj-ifElse

[![Build Status](https://travis-ci.org/fp-js/fj-ifElse.svg)](https://travis-ci.org/fp-js/fj-ifElse) [![npm version](https://badge.fury.io/js/fj-ifelse.svg)](http://badge.fury.io/js/fj-ifelse)
> Functional ifElse

## Installation

`npm install fj-ifelse --save`

## Usage

```js
var ifElse = require('fj-ifelse');

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


## API

### ifElse

Checks if a predicate returns true and calls the associated function.

`ifElse(predicate, then, otherwise)`

***Parameters***

| Name          | Type        | Description                           |
| ------------- | ----------- | --------------------------            |
| predicate     | function    | Function that returns true or false   |
| then          | function    | Function called if predicate is true  |
| otherwise     | function    | Function called if predicate is false |

***Returns***

| Type        | Description                                     |
| ----------- | --------------------------                      |
| *           | Returns the return value of the called function |
