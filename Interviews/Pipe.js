function add(a) {
    console.log("Add");
    return a + 20;
}

function subtract(a) {
    console.log("Subtract");
    return a - 10;
}

function multiply(a) {
    console.log("Multiply");
    return a * 2;
}

function pipe(...functions) {
    return (args) => {
        return functions.reduce((arg, fn) => fn(arg), args);
    }
}

const evaluate = pipe(add, subtract, multiply);
console.log(evaluate(10));