const test = require('ava');
const uniq = require('lodash.uniq');
const buildArray = require('build-array');
const rndId = require('../src');

test('should generate strings', t => {
  t.truthy(
    [rndId(), rndId(), rndId(), rndId()].every(
      s => typeof s === 'string' && s.length
    )
  );
});

test('should generate unique strings', t => {
  const arr = [rndId(), rndId(), rndId(), rndId()];

  t.deepEqual(uniq(arr).length, arr.length);
});

test('should generate a lof ot unique strings', t => {
  const arr = buildArray(1000).map(() => rndId());
  t.deepEqual(uniq(arr).length, arr.length);
});
