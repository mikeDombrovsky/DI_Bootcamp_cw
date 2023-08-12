// JS DATA STRUCTURES
//Array

let fruit1 = 'banana';
let fruit2 = 'orange';
let fruit3 = 'apple';

let arr = [];
let arr2 = new Array();

let fruits = ['banana', 'orange', 'apple'];

// console.log(fruits[0]);

// fruits[fruits.length] = 'kiwi';
// fruits[fruits.length] = 'lemon';

// fruits[0] = 'watermelon';

// console.log(fruits);// kiwi added

let arrStr = fruits.toString();
// console.log(arrStr);

fruits.push('pineapple');
// console.log(fruits);

let last = fruits.pop();
// console.log(fruits, last);

let first = fruits.shift();
// console.log(fruits, first);

let fruits2 = ['watermelon', 'mango'];
let fruits3 = fruits.concat(fruits2);
// console.log(fruits3)


let f = fruits3.slice(1, 3);
// console.log(f)

//splice = (from_index, how_many_elements) CHANGES ORIGINAL ARRAY!!!

f = fruits3.splice(1, 3);
// console.log(f)
// console.log(fruits3)


// ex3
/*
let pets = ['cat', 'dog', 'fish', 'rabbit', 'caw'];
console.log(pets[1]);
pets.push('horse');
pets.splice(3, 1);
console.log(pets.length);
console.log(pets);
*/

/*
let age = prompt('how old are you?', 20);
alert(age);

let is_boss = confirm('are you the boss?');
alert(is_boss + '!');
*/

