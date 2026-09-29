function printName(city, country) {
    console.log(`${this.firstName} ${this.lastname} ${city} ${country}`);
}

globalThis.firstName = 'SatyamGlobal';
globalThis.lastname = "DhoteGlobal";
const name = {
    firstName : "Satyam",
    lastname : "Dhote"
}

// printName.call(name, 'Betul', 'India');



//Polyfill
Function.prototype.myCall = function(context, ...args) {
    console.log('R1',context);
    context.myFn = this;
    console.log('R2',context.myFn);
    context.myFn(...args);
}
printName.myCall(name, "Palia", "India");

//All we are doing here is assigning the printName() function as a property (myFn) to the myName 
// object and executing it. But it’s not a complete solution. What if the property myFn already 
// exists inside myName? We’ll be overwriting it. So we need to make sure that the name 
// of the property we are using is unique.

//Actual Polyfill
Function.prototype.myCall = function(context, ...args) { //context here is object which is being called
    let currentContext = context || globalThis; //edge case if we call 'call' without any argument it will take global obkect
    let key = Symbol();  //unique key as in object a key could be already present
    currentContext[key] = this;
    let res = currentContext[key](...args);
    delete currentContext[key];
    return res;
}
printName.myCall(name, 'India', 'Betul');
printName.myCall();