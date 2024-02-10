const { response } = require("express");
let result;

function calculate(a, operator , b) {

  switch (operator) {
    case "+":
      result = a + b;
      break;

    case "-":
      result = a - b;
      break;

    case "*":
      result = a * b;
      break;

    case "/":
      if (b != 0) {
        result = a / b;
      } else {
        result ="division by 0"
      }
      break;

    case "%":
      if (b != 0) {
        result = a % b;
      } else {
        result = "division by 0"
      }
      break;

    default:
      result = "error"
      break;
  }

  return result;
}

module.exports = calculate;