import { curry3 } from 'fj-curry';


function _ifElse(pred, then, otherwise) {
  if (pred() === true) {
    return then();
  } else {
    return otherwise();
  }
}

var ifElse = curry3(_ifElse);

export default ifElse;
