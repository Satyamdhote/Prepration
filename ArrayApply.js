function printName(city, country) {
    console.log(`${this.firstName} ${this.lastname} ${city} ${country}`);
}

const name = {
    firstName : "Satyam",
    lastname : "Dhote"
}

printName.apply(name, ['India', 'Betul']);


//Polyfill
Function.prototype.myApply = function(context, args=[]) {
    let currentContext = context || globalThis;
    let key = Symbol();
    currentContext[key] = this;
    let res = currentContext[key](...args);
    delete currentContext[key];
}
printName.myApply(name, ['India', 'Betul']);