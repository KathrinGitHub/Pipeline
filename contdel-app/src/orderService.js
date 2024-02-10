const multiply = require('./calculator');

function order(price, operator, quantity) {
  return multiply(price, operator, quantity);
}

module.exports = order;
