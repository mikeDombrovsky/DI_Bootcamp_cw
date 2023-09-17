async function simpleAsync() {
    return 1;
}

const x = simpleAsync()

console.log('x= ', x);

simpleAsync().then(d => console.log('d = ', d));

async function a() {
    const a = await simpleAsync();
    console.log('a = ', a);
}

a();
async function getUsers() {

    try {
        let body = await fetch('https://jsonplaceholder.typicode.com/users');
        body = await body.json();
        console.log(body.length);
        return;
    } catch (err) {
        console.log(err);
        return;
    }

}

console.log(getUsers());

const asf = async () => {

}

const timeout = async (miliseconds, id) => {
    await new Promise((res, rej) => {
        setTimeout(() => {
            console.log(id, 'Done!');
            res();
        }, miliseconds);
    });
};
//foreEch not works with async code !!!WORNING!!! use for of
async function before() {
    console.log('BEFORE', 'DONE');
    // ['first', 'second', 'third'].forEach( async (i) => {
    //     await timeout(2000, i)
    // })
    for (item of ['first', 'second', 'third']) {
        await timeout(2000, i);
    }
    console.log('AFTER', 'DONE');
}


const p1 = new Promise((res, rej) => setTimeout(() => res('P-1'), 1000));
const p2 = new Promise((res, rej) => setTimeout(() => res('P-2'), 2000));
const p3 = new Promise((res, rej) => setTimeout(() => res('P-3'), 3000));

Promise.all([p1, p2, p3])
    .then(res => console.log(res));


const data = async () => {
    const aw = await Promise.all([p1, p2, p3]);
    console.log(aw);
}
data(); 