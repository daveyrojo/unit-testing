const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;
const mult = (a, b) => a * b;

const moreAdvMath = (a, b) => {
    if (a != b) {
        return a + b;
    } else {
        let c = a + b;
        return a + b - c;
    }
};

module.exports = {add, sub, div, mult, moreAdvMath};