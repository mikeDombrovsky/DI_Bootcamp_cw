let arr = ['ab','bcd'];
const a = arr[0];
const b = arr[1];

const [c, d] = arr;//the same

const [e, rest] = arr;//first is 0, rest are arr
console.log(e, rest);

const [f, ...rest2] = arr;//first is 0, rest are arr
console.log(f, rest2);



let obj = {
    name: 'John',
    email: 'j@gmail.com'
}

const {name, email} = obj;
console.log(name, email);