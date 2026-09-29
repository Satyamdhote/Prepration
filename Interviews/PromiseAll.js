function myPromise(text, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, time)
    })
}

// console.log(Promise.all([
//     myPromise('Hello', 1000), 
//     Promise.resolve('Satyam'), 
//     Promise.reject('Hi')
// ])
//         .then((value) => console.log(value)));


//Polyfill for PromiseAll

function myPromiseAll(promises) {
    let result = [];
    return new Promise((resolve, reject) => {
        promises.forEach((p,index) => {
            p.then((res) => {
                result.push(res);
                if(index == promises.length-1) {
                    resolve(result)
                }
            }).catch((err) => {
                reject(err);
            })
        })
        
    });
}

myPromiseAll([
    myPromise('Hello', 1000), 
    Promise.resolve('Satyam'), 
    // Promise.reject('Hi')
])
        .then((value) => console.log(value));