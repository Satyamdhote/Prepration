// greetings();
// var greetings = function() {
//     console.log('First Greeting');
// }
// greetings();
// function greetings() {
//     console.log('Second Greeting');
// }
// greetings();

// ======================

// var var1 = 10;
// (() => {
//     var3 = 35;
//     console.log("VAR 3", var3);
//     var var3 = 45;
//     var2 = 15;
//     console.log("VAR1", var1);  
// })();
// console.log("OUT VAR2", var2);
// console.log("OUT vAR3", var3);
// var var1 = 30;
// console.log("OUT VAR1", var1);

//==================
// var var1 = 10;
// (() => {
//     var var2 = 35;
//     console.log(var2); 
// })();
// console.log(var2);
// var var1 = 30;
// console.log(var1);
// ==================

// var counter = function(){
//     let k = 0;
//     // k++;
//     return () => k++;
// }();

// console.log(counter());
// console.log(counter());
// console.log(counter());

// ===========================
// function greet() {
//     setTimeout(() => {
//         console.log(this); // { name: 'Satyam' }
//         console.log(this.name); //Satyam
//     }, 1000);
// }
// greet.call({name: "Satyam"});

// function greet() {
//     setTimeout(function() {
//         console.log(this.name);
//     }, 1000);
// }
// greet.call({name: "Satyam"});


// var name = "Sajal";
// var hero = {
//     name: "Satyam",
//     getSecret: function() {
//         return this.name;
//     },
//     getSecret1 : () => {
//         return this.name;
//     },
//     getSecret2 : (function() {
//         return this.name;
//     })()
// }

// console.log(this); //window
// console.log(hero.getSecret());//Satyam
// console.log(hero.getSecret1());//Sajal
// console.log(hero.getSecret2);   //Sajal

// ============================================
// function abc() {
//     for(var i =1;i<6;i++) {
//         function close(){
//             setTimeout(function() {
//                 console.log(i);
//             }, i*1000);
//         };
//         close(i);
//     }
// }
// abc();

// getName(); // Namaste JavaScript
// // console.log(x); // Uncaught Reference: x is not defined.
// console.log(getName); // f getName(){ console.log("Namaste JavaScript); }
// var getName = function () {
//     console.log("Namaste JavaScript");
//    };

// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//    }
//    console.log(a); // 10
//    console.log(b);
//    console.log(c);

// let a = 20;
// function x() {
//  var a = 30;
//  console.log(a);
// }
// x();
// console.log(a);

// var a = 20;
// function x() {
//  let a = 30;
//  console.log('L',a);
// }
// x();
// console.log('G',a);

// function x() {
//     for (var i = 1; i <= 5; i++) {
//         function close(i) {
//             setTimeout(function () {
//                 console.log(i);
//             }, i * 1000);
//         }
//         close(i);
//     }
//     console.log("Namaste Javascript");
//    }
//    x();

// function outer() {
//     function inner() {
//         console.log(a);
//     }
//     let a = 10;
//     return inner;
//    }
//    outer()(); // 10

   
// setTimeout(() => console.log(1), 0);
// function res() {
//     console.log('In RES');
// }
// console.log(2);

// new Promise(res => {
//   console.log(3)
//   res();
// }).then(() => console.log(4));

// console.log(5);


// function counter() {
//     var count = 0;
//     return function increment(){
//         count++;
//         console.log(count);
//     }
// }
// const c = counter();
// c();
// c();



// function z() {
//     for(let i = 0;i<6;i++) {
//         console.log(i);
//     }
// }
// z();


// const MY_FAV = 7;
// if (MY_FAV === 7) {
//     const MY_FAV = 20;
//     console.log("my favorite number is " + MY_FAV);
//   }
//   console.log("my favorite number is " + MY_FAV);

// const myarr = [];
// myarr.push(2);
// console.log(myarr);



// (function(){
//     var a = b = 3;
//   })();
  
//   console.log(typeof (a));
//   console.log(typeof(b));
//   console.log("a defined? " + (typeof a !== 'undefined'));
//   console.log("b defined? " + (typeof b !== 'undefined'));


//////////////////////////////////////////////////////



// var obj1 = {
//     name: "Satyam",
//     getName: function () {
//         console.log('Hello L-215' + this.name);
//     }
// }
// console.log(obj1.getName());

// var name = "Sajal";
// var obj2 = {
//     abc: ()  => {
//         console.log('Hello L-222' + name);
//     }
// }


// console.log(obj2.abc());

/////////////////////////////////////////


// let obj1 = {
//     name: "Satyam",
//     getName: function(str1, str2) {
//         console.log(`${this.name} ${str1} ${str2}`);
//     }
// }

// let obj2 = {
//     name: "Sajal",
// }
// console.log(obj1.getName.call(obj2, 'hello', 'hii'));
// console.log(obj1.getName.apply(obj2, ['hello', 'hii']));

// =====================

// let arr1 = [1,2,3,4];
// let arr2 = [6,7,8,9];
// let newArr = [...arr1, ...arr2];
// console.log(newArr);











// let str = "the quick brown fox";
// let strArr = str.split(" ");
// // console.log(strArr);

// // let data = strArr.map((m, index) => {
// //     return `word: ${m}`;
// // })
// // console.log(data);


// strArr.forEach((data) => {
//     console.log(JSON.stringify(`word: ${data}`));
// })

// typeof();




// const myFun = function (callback) {
//     myApiCall()
//     .then((data)=>{
//       myApiCallTwo() .then((data)=>{
//         callback('ok')
//       }).catch((err) => {
//         callback('error')
//       })
//     }).catch((err) => {
//         callback('error')
//     })
//   }



// async function myFun() {
//     try {
//         let call1 = await myApiCall();
//         console.log(call1);
//         let call2 = await myApiCallTwo();
//         console.log(call2);
//         callBack('ok');
//     } catch(err) {
//         callBack(err)
//         console.log(err);
//     }
// }
















