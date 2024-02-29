const assert = require('assert');
const calcul = require('./0-calcul');

describe('calcul', () => {
  it('should return the sum of two numbers', () => {
    assert.strictEqual(calcul(2, 3), 5);
    assert.strictEqual(calcul(-5, 10), 5);
    assert.strictEqual(calcul(0, 0), 0);
  });

  it('should return the difference of two numbers', () => {
    assert.strictEqual(calcul(5, 2, 'subtraction'), 3);
    assert.strictEqual(calcul(10, -5, 'subtraction'), 15);
    assert.strictEqual(calcul(0, 0, 'subtraction'), 0);
  });

  it('should return the product of two numbers', () => {
    assert.strictEqual(calcul(2, 3, 'multiplication'), 6);
    assert.strictEqual(calcul(-5, 10, 'multiplication'), -50);
    assert.strictEqual(calcul(0, 0, 'multiplication'), 0);
  });

  it('should return the quotient of two numbers', () => {
    assert.strictEqual(calcul(6, 2, 'division'), 3);
    assert.strictEqual(calcul(10, -5, 'division'), -2);
    assert.strictEqual(calcul(0, 5, 'division'), 0);
  });

  it('should throw an error for invalid operation', () => {
    assert.throws(() => calcul(2, 3, 'invalid'), Error);
  });
});
function calcul(a, b) {
    return a + b;
}

module.exports = calcul;
function calculateNumber(a, b) {
    return a + b;
}

module.exports = calculateNumber;
