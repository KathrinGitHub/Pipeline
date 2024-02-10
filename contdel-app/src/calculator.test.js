const calculate = require('./calculator');

test.each([
    [[2, "+", 3], 5],
    [[2, "-", 3], -1],
    [[2, "*", 3], 6],
    [[10, "/", 2], 5],
    [[2, "/", 0], "division by 0"],
    [[5, "%", 2], 1],
    [[5, "%", 0], "division by 0"],
    [[2, "$", 3], "error"],
])("calculates %p expecting %p", (input, result) => {
    expect(calculate(input[0], input[1], input[2])).toBe(result);
});
