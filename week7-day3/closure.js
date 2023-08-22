//closure
function x(a) {
    function y(b) {
        return a * b;
    }
    return y;
}

// console.log(x(10)(5));

const sum = a => b => a + b;
//currying
// console.log(sum(10)(5));

//carrying
const sum2 = num => num * 2;
const sum3 = num => num + 1;
const x2 = (a, b) => c => a(b(c));

let calc = x2(sum2, sum3)(6);
console.log(calc);

//selfcalling functions
(function (name) {
    alert("Hello " + name);
})("Sarah")


let obj = {
    name: "Bob",
    last_name: "Boo",
    age: 25,
    full: function () {
        return this.name + " " + this.last_name;
    }
}

//computed dynamic props
let key = "new_key";//changable
let obj2 = {
    [key]: "Bob",
    last_name: "Boo",
    age: 25,
    full: function () {
        return this.name + " " + this.last_name;
    }
}

//short props declaration
let fname = 'John';
let email = 'john@mail.com';

let short_obj = {
    fname,
    email
}

for (item in short_obj) {
    console.log(item, obj[x]);
}

console.log(Object.keys(short_obj));
console.log(Object.values(short_obj));
console.log(Object.entries(short_obj));

//value and reference
let prim1 = 10;
let prim2 = prim1;
prim1 = 5;
console.log("prim1 ", prim1, "prim2 ", prim2);


let arr = [1, 2, 3];
let arr2 = arr;
let arr3 = [...arr];
//or
let arr4 = [].concat(arr);

arr[0] = 0;

console.log('arr ', arr, 'arr2 ', arr2, 'arr3', arr3);


let ob = { a: 5 };
let ob2 = { ...ob };//clone just parent object
ob2.a = 10;

console.log('ob ', ob, 'ob2', ob2);
//or
let ob3 = Object.assign({}, ob);

let json = JSON.stringify(obj);
console.log(json);
let jsonObj = JSON.parse(json);
console.log(jsonObj);