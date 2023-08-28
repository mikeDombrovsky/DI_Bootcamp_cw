/*
forEch
SVGGeometryElementevery
mapfilter
reducefind
findIndex
*/



let numbers = [1, 2, 3, 4];

// numbers.forEach((num, i, arr) => arr[i] = num * 2);

console.log(numbers);



console.log(copy_multiply());

function copy_multiply() {
    let new_arr = [];
    numbers.forEach(num => new_arr.push(num * 2));
    return new_arr;
}

const arr2 = [1, 2, 3, 4];
const arr3 = arr2.map(item => item * 2); //returns new modified arr!
console.log(arr3);

console.log(arr2.map(item => {
    if (item === 2) {
        return item * 2
    }
}));


let users = ['eli', 'adam', 'dan', 'john'];
console.log(users.map(elem => elem.concat('@gmail.com')));

const people = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jane', lastName: 'Smith' },
    { firstName: 'Michael', lastName: 'Johnson' }
];

console.log(people.map(elem => `${elem.firstName}, ${elem.lastName}`));


let arr4 = [0, 1, 1, 2, 3, 5, 8];
console.log(getAllGreaterThen3(arr4));

function getAllGreaterThen3(arr) {
    return arr.filter(elem => elem > 3);
}


function getAllGreaterThen3_2(arr) {
    let res = [];

    arr.forEach(elem => {
        if (elem > 3) res.push(elem);
    });
    return res;
}

const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
// get all names that includes Sa 
console.log(
    dragons.filter(name =>
        name.toLowerCase().includes('sa')
    )
);

function sumElements(arr) {
    let sum;
    arr.forEach(elem => {
        sum += elem;
    });
    return sum;
}

console.log(sumElements([1, 2, 3, 4]));

const sum = [1, 2, 3, 4].reduce((sum, item) => sum + item, 0);// 0 is initial value for accumulator

let index;
people.forEach((elem, i) => {
    if (elem.firstName === 'Jane') {
        index = i;
    };
}
);
console.log(index);

people.findIndex(item => item.firstName === 'Jane'); //returns index, but find returns object


// getNum(16);

function getNum(number) {
    let sum = 0;
    while (true) {
        while (number > 10) {
            let digit = number % 10;
            sum += digit;
            number = number / 10;
        }
        if (sum > 10) {
            number = sum;
        } else {
            break;
        }
    }
    console.log('SUM= ', sum);
}

getNum2(16);
function getNum2(number) {
    let arr = new String(number).split('');
    let sum = 0;
    for (digit in arr) {
        
        sum += Number(arr[digit]);
        console.log(sum);
    }
    if (sum < 10) {
        return sum;
    }
    console.log('SUM= ', sum);
    return getNum2(sum);
}


function getNum3(number){
    let arr = new String(number).split('');
    let sum = arr.reduce((total, num) => total + Number(num), 0);

    return sum < 10 ? sum : getNum3(sum);
}
