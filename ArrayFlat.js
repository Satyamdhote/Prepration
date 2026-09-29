let arr = [
    [1],
    [1,2],
    [3,4],
    [5,[6,7]],
    [10,11]
]
console.log(arr);
const newArr = arr.flat(2);
console.log(newArr);


// //Our Flat
function customFlat(arr, depth = 1) {
    var result = [];
    arr.forEach(item => {
        if(Array.isArray(item) && depth > 0) {
            result.push(...customFlat(item, depth - 1));
        } else {
            result.push(item);
        }
    });
    return result;
}

console.log('NEW', customFlat(arr, 2));


// let a = 3;
// let b = new Number(3);
// let c = 3;
// console.log(a==b);
// console.log(a===b);
// console.log(b===c);

// console.log(+true);
// console.log(!'Lydia');



//  sayHi();
// function sayHi() {
//   name = "Satyam";
//   age = 21;
//     console.log(name);
//     console.log(age);
//     var name;
//     var age;
//   }
  


// sayHi();
// var sayHi = function () {
//   console.log("Hi");
// }