const memoizedFunc = (func, context) => {
    let res = {};
    return function(...args) {
        var argsCache = JSON.stringify(args);
        if(!res[argsCache]) {
            res[argsCache] = func.call(context || this, ...args);
        }
        return res[argsCache];
    }
}



const multiply = (a, b) => {
    for(let i=0;i< 10;i++) {
        return a*b;
    }
}

console.time('First Call');
console.timeLog('First Call');
console.log(multiply(2222,3333));
console.time('First Call End');

console.time('Second Call');
console.timeLog('Second Call');
const newRes = memoizedFunc(multiply);
console.log(newRes(1111,3333));