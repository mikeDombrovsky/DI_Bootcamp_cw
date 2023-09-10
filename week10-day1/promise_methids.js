//Promise.all(arr)
//Promise.allSetteled(arr)
//Promise.race(arr)

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Resolve promise1'), 1000);

});
const promise2 = new Promise((resolve, reject) => {
    reject('Reject promise2')
});
const promise3 = new Promise((resolve, reject) => {
    resolve('Resolve promise3')
});


Promise.all([promise1, promise2, promise3])
    .then(res => console.log(res))
    .catch(err => console.log(err));

Promise.allSettled([promise1, promise2, promise3])
    .then(res => console.log(res))
    .catch(err => console.log(err));

Promise.race([promise1, promise2, promise3])
    .then(res => console.log(res))
    .catch(err => console.log(err));

function compareTo10(num) {
    return new Promise((res, rej) => {
        if (num > 10) {
            res('true');
        }
        rej('false');
    });
};

compareTo10(11)
    .then(res => console.log(res))
    .catch(err => console.log(err));

compareTo10(9)
    .then(res => console.log(res))
    .catch(err => console.log(err));

//fetch(url)
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => console.log(res.json()))
.catch(err => console.log(err));