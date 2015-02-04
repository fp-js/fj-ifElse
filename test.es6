import test from 'prova';
import ifElse from './';

test('fj-ifElse', (t) => {
  t.plan(3);
 
  ifElse(
      (x, y) => x === y,
      (x, y) => t.equals(x, y),
      () => t.fail()
  )(true, true);

  ifElse(
      (x) => x === true,
      () => t.fail(),
      (x) => t.ok(x === false)
  )(false);

  var ifTrue = ifElse(() => true);

  ifTrue(
      () => t.ok(true),
      () => t.fail()
  )();
});
