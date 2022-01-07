const { describe, it } = require("mocha");
const assert = require("assert");
const MySet = require("./set");

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

describe("Test set data structure", () => {
  it("Test unique data", () => {
    const set = new MySet([1, 1, 2, 3, 3, 4, 5, 5]);
    assert.equal(arrayEquals([1, 2, 3, 4, 5], set.set), true);
    assert.equal(arrayEquals([1, 2, 3, 5], set.set), false);
  });
  it("Test has method", () => {
    const set = new MySet([1, 1, 2, 3, 3, 4, 5, 5]);
    assert.equal(set.has(1), true);
    assert.equal(set.has(2), true);
    assert.equal(set.has(5), true);
    assert.equal(set.has(6), false);
  });
  it("Test add method", () => {
    const set = new MySet([1, 1, 2, 3, 3, 4, 5, 5]);
    assert.equal(set.add(1), false);
    assert.equal(set.add(2), false);
    assert.equal(set.add(5), false);
    assert.equal(set.add(6), true);
    assert.equal(set.add(7), true);
  });
  it("Test remove method", () => {
    const set = new MySet([1, 1, 2, 3, 3, 4, 5, 5]);
    assert.equal(set.remove(1), true);
    assert.equal(set.remove(2), true);
    assert.equal(set.remove(5), true);

    set.add(6);

    assert.equal(set.remove(6), true);
    assert.equal(set.remove(7), false);
    assert.equal(set.remove(8), false);
  });
});
