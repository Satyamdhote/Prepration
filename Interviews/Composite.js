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

function compose(...functions) {
    return (args) => {
        return functions.reduceRight((arg, fn) => fn(arg), args);
    }
}

const evaluate = compose(add, subtract, multiply);
console.log(evaluate(10));