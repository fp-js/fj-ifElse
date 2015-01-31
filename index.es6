import { curry3 } from 'fj-curry';


function _ifElse(pred, then, otherwise) {
  if (pred() === true) {
    return then();
  } else {
    return otherwise();
  }
}

export var ifElse = curry3(_ifElse);
