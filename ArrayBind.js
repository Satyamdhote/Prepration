function printName(city, country) {
    console.log(`${this.firstName} ${this.lastname} ${city} ${country}`)
    // return newB;
}

const name = {
    firstName : "Satyam",
    lastname : "Dhote"
}

// const result = printName.bind(name, 'India');
// console.log('R1', result);
// console.log('R2',result('Patiala', 'Betul'));


//Polyfill for Bind()
Function.prototype.myBind = function(thisArg, ...args) {
    const context = thisArg || globalThis;
    console.log("CONTEXT", context);
    console.log('THIS', this);
    const self = this;
    return function () {
        self.call(thisArg, ...args);
    }
}

const result2 = printName.myBind(name, "Palia");
let finalRes = result2("India")
console.log(finalRes);