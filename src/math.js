function sum(a, b) {
    return a + b
}

function sub(a, b) {
    const result = a - b
    return result;
}

function multiple(a, b) {
    return a * b
}

function addTen(number) {
    return number + 10;
}

function addTwenty(number) {
    return number + 20;
}

function addThirty(number) {
    return number + 30;
}

function calculateExpression(expression) {
    return eval(expression);
}
module.exports = {
    sum,
    sub,
    multiple,
    addTen,
    addTwenty,
    addThirty,
    calculateExpression
}