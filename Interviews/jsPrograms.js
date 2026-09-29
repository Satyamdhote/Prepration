const { result } = require("lodash");

// Collect books from array of objects and return collection of books as an array
let friends = [
    {
      name:"Anita",
      books:['Bible', 'Gita'],
      age:21
    },
    {
      name:"Bob",
      books:['War', 'Peace', 'Romeo'],
      age:22
    },
    {
      name:"Alice",
      books:['Lord', 'Ring'],
      age:23
    },
    {
      name:"Builder",
      books:['Shine', 'Sky'],
      age:24
    },
  
  ]
  
  // let arr = [];
  // friends.map((f) => {
  //   arr.push(f.books);
  // })
  // console.log(arr.flat().length);
  
  let res = friends.reduce((pre, curr) => {
    // console.log('PRE', pre);
    // console.log('CURR', curr);
    return [...pre, ...curr.books]
  }, [])
  // console.log(res);


//   ======================================================================

//Remove duplicates
let arr = [1,1,5,6,7,7,8,9,3,4,4]
let set = new Set();

const uniqueArray = arr => [...new Set(arr)];
console.log(uniqueArray([1,1,5,6,7,7,8,9,3,4,4]));

arr.forEach((a) => {
    set.add(a);
})
// console.log('SEEEET', set);

function printDuplicates(arr) {
    let res = arr.filter((item, index) => {
        //return arr.indexOf(item) !== index;    PRINT DUPLICATES
        return arr.indexOf(item) === index;       // REMOVE DUPLICATES
    })
    // console.log(res);
}
printDuplicates(arr);

//Memoization

function calculateAdd256() {
  var cache = {};
  return function(n){
    console.log('CAC', cache);
    if(n in cache) {
      console.log('In cache');
      return cache[n];
    } else {
      let res = n+256
      cache[n] = res;
      return res;
    }
  }
}

let calculate = calculateAdd256();
// console.log(calculate(100));
// console.log(calculate(100));
// console.log(calculate(200));
// console.log(calculate(200));


//Strings
const str = 'Hello World';
// console.log(str.split('').reverse().join('')); //Reverse whole strings - dlroW olleH
// console.log(str.split(' ').reverse().join(' ')); //Reverse Words - World Hello
// console.log(str.split('').reverse().join('').split(' ').reverse().join(' ')); // Reverse in Place - olleH dlroW

//Flatten array
var arr1=[1,[2,3],[4,5],[[6,7]], [[[9, 10, 11, 12]]]];

function falttenArr(arr, depth) {
  let res = [];
  arr.forEach((item) => {
    if(Array.isArray(item)) {
      res.push(...falttenArr(item, depth - 1));
    } else {
      res.push(item);
    }
  })
  return res;
}

// console.log(falttenArr(arr1, 1));


// Sum using input from keyboard
// function sum(a,b) {
//   return a+b;
// }
// const a = prompt('Enter first number');
// const b = prompt('Enter Second number');
// console.log(sum(a, b));

//Sum using reduce 
var arr2 = [1,2,3,4,5];
let res2 = arr2.reduce((acc, sum) => {
  return acc + sum;
}, 0);
// console.log(res2);

var str1 = [3,4,1,6,5];
console.log(str1.sort((a,b) => b-a));
// function sortArr(arr) {
//   return arr.sort((a, b) => b-a);
// }
// console.log(sortArr(str1));

var even = str1.filter((a) => {
  return a%2 === 0;
})
console.log(even);

var odd = str1.filter((a) => {
  return a%2 !== 0;
})
console.log(odd);


//Repeating and Missing
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8 // Missing
let arr = [9,6,4,2,3,5,7,0,1];

let n = arr.length;
let expSum = (n*(n+1))/2;
let actSum = arr.reduce((acc, sum) => {
    return acc+sum;
}, 0);
console.log(expSum-actSum);


