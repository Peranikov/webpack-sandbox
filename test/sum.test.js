import sum from '../src/sum';
const assert = require('assert');

test('jest success', () => {
  expect(sum(1, 2)).toBe(3);
});

test('jest fail', () => {
  expect(sum(1, 2)).toBe(4);
});

test('power-assert success', () => {
  assert.equal(sum(1, 2), 3);
})

test('power-assert fail', () => {
  assert.equal(sum(1, 2), 6);
})