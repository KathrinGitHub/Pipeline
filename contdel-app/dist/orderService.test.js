const order = require('./orderService');

test('order with price 2 and quantity 3 should be 6', () => {
  expect(order(2, "*", 3)).toBe(6);
});