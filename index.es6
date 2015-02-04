import { curry3 } from 'fj-curry';


function _ifElse(pred, then, otherwise) {
  return (...args) => {
    if (pred.apply(null, args) === true) {
      return then.apply(null, args);
    } else {
      return otherwise.apply(null, args);
    }
  };
}

var ifElse = curry3(_ifElse);

export default ifElse;
