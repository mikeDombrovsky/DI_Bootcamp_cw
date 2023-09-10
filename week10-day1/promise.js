// 1.pending
// 2. fulfiled - resolve
// 2. fulfiled - reject

// const p = new Promise((resolve, reject) => {
//     // resolve([1,2,3]);
//     // resolve('true');
//     reject('0');
// });

// console.log(p);

const flip = () => {
    const coin = Math.floor(Math.random() * 3);
    return (coin < 2) ? (coin === 0 ? 'head' : 'tail') : 'side';
}

console.log(flip());

const flipCoin = new Promise((res, rej) => {
    setTimeout(() => {
        const flipRes = flip();
        if (flipRes === 'head' || flipRes === 'tail') {
            res(flipRes);
        } else {
            rej(flipRes);
        }
    }, 1000);
});

flipCoin.then(result => console.log(result))
    .catch(err => console.log(err));


const p = new Promise((res, rej) => {
    if(true){
        res('hi');
    }else{
        rej('bye');
    }
});

p.then(data => data + '!')
.then(data => data + '#')
.then(data => console.log(data))
.catch(err => console.log(err));



