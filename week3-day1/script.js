// alert('hello from js file!');
/*variables var - old, mustn't use , let and const - new */
// let name, lastname;
// const email = 'email@email.const';
// var username;

// console.log(name, lastname);
// name = 'popka';
// console.log(name, lastname);
// lastname = 10;
// name = 1;
// console.log(name, lastname + name);

// var a = 1;
// let a = 2;

/*
JS Types:
1. String
2. Number
3. Boolean
*/

// let first_name = "Johny";
// let last_name = "Rambo";
// let full_name = first_name + " " + last_name;
// console.log(full_name);

//length
// console.log(first_name.length);
// console.log(full_name.length);

//indexOf
// let pos = full_name.indexOf('h');
// console.log(pos);


//search
// let pos = full_name.search("j");

//slice
/*let res = full_name.slice(6);
console.log(res);
res = full_name.slice(3, 7);
console.log(res);
res = full_name.slice(-2); // start counting from the end
console.log(res); 
*/

//replace
/*
let str = "Please visit Microsoft";
let new_str = str.replace("Microsoft", "Developers Institute");

console.log(new_str);
*/

//to uppercase() toLowerCase()

/*
let txt1= 'hello';
let txt2 = 'world';
let txt3 = txt1 + " " + txt2;

let txt4 = txt1.concat(" ", txt2);
console.log(txt3, txt4);
*/
/*
let str = "      ddd     ";
console.log(str);
console.log(str.trimLeft());
console.log(str.trimRight());
console.log(str.trim());
*/
// globalAddress = addressNumber.concat(', ' + addressStreet).concat(', ', country);

/* 
//ex1
let addressNumber = '12';
let addressStreet = 'Yeshayahu';
let country = 'Israel';
let globalAddress = addressNumber + ', ' + addressStreet + ' street, ' + country;

console.log("I live in " + globalAddress);

//ex2
let ex2 = addressNumber.concat(" ", addressStreet, " ", "Street").concat(', ', country);
let b_year = 1988;
let f_year = 2024;
let ages = f_year - b_year;
console.log('I will be ' + ages + ' in ', f_year);
*/


//toString
/*
let num = 123.123;
let strNum = num.toString();
strNum = new String(num);

console.log(num.toFixed(2));
console.log(num.toPrecision(2));

let x = Number('12');

parseInt("10.1");//return 10
parseFloat("10.11");
*/


//boolean
/*
let bol = true;
bol = false;
bol = Boolean(3);//true everything but 0
bol = Boolean(2 == 2);
*/
