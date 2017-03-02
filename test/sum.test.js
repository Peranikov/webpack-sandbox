import {sum} from '../src/sum';
const assert = require('assert');

test('power-assert success', () => {
  assert.equal(sum(1, 2), 3);
})

test('power-assert success', () => {
  assert.equal(sum(1, -1), 0);
})