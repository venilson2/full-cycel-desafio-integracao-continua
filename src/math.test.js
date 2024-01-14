const { sum, sub, multiple, calculateExpression, addTen, addTwenty, addThirty } = require('./math');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
})

test('subtracts 2 - 1 to equal 1', () => {
    expect(sub(2, 1)).toBe(1);
})

test('subtracts 1 - 2 to equal -1', () => {
    expect(sub(1, 2)).toBe(-1);
})

test('multiplies 2 * 2 to equal 4', () => {
    expect(multiple(2, 2)).toBe(4);
})

test('evaluating a valid expression "2 + 2" returns 4', () => {
    expect(calculateExpression('2 + 2')).toBe(4);
});

test('add 10 to 5 gives 15', () => {
    expect(addTen(5)).toBe(15);
});

test('add 20 to 5 gives 25', () => {
    expect(addTwenty(5)).toBe(25);
});

test('add 30 to 5 gives 35', () => {
    expect(addThirty(5)).toBe(35);
});