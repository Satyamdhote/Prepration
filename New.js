
// function prom() {
//     return new Promise((resolve) => {
//         resolve('ABC');
//     });
// }
// console.log('a');
// async function abc() {
//        const a = await prom();
//        console.log(a);
//        console.log('c');
// }
// abc();
// prom().then((data) => {
//     console.log(data);
//     console.log('b');
// });

// function prom(callback) {
//     setTimeout(() => {
//         callback('ABC');
//     }, 0);
// }

// console.log('a');

// prom((data) => {
//     console.log(data);
//     console.log('b');
// });

console.log('a');
function doSomething(callback) {
    console.log('A');
    callback();
}

function myCallback() {
    console.log('b');
    console.log("myCallback");
}
doSomething(myCallback);

