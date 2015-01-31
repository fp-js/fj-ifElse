import test from 'prova';
import { ifElse } from './';

test('fj-ifElse', (t) => {
  t.plan(3);
 
  ifElse(
      () => true,
      () => t.ok(true),
      () => t.fail()
  );

  ifElse(
      () => false,
      () => t.fail(),
      () => t.ok(true)
  );

  var ifTrue = ifElse(() => true);

  ifTrue(
      () => t.ok(true),
      () => t.fail()
  );
});
