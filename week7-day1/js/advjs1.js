// let b = 3, d = b, u = b;

//b=3 d=3 u=3
//d=4 b=4
//d=3 b=3

// ++d * d*b * b++ + 
// + --d+ + +b-- + 
// + +d*b+ + u 

// 4 * 4 * 3 * 3 + 3 + 4 + 3 * 3 + 3 = 163


/*
Write a function called pangrams that will
take one string, s as input.
A pangram is a sentence that contains
every letter of the alphabet.
The goal of this function is to determine
if the sentence given is a pangram or not.
If it is not a pangram, the function will return not pangram.
If it is a pangram,
the function will return pangram. Here is an example:
"The quick brown fox jumps over the lazy dog"
"We promptly judged antique ivory buckles for the prize"
x is missing
*/ 


// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// function pangrams(s){
//     let lowercase = s.toLowerCase().split(" ").join("");
//     for(let i = 0; i < alphabet.length; i++){
//         if (!lowercase.includes(alphabet[i])){
//             return "not pangram";
//         }
//     }
//     return "pangram";
// }

// SCOPE
let x = 9;

{
    let x = 5;
}
console.log(x);

let str = "text";
let str2 = "text2";

let str3 = str + " " + str2;
let str4 = ``; 

const myArr = [1,2,3,4];

myArr.forEach(
    (elem, i, arr) => {
        console.log(elem, i, arr);
    });

const words = ["wow", "hey", "bye"];
console.log(
    words.some( 
        value => {
            console.log(value);
            return value.startsWith("h");
        }
    )
);    
console.log(
    words.every(
        value => {
            console.log(value);
            return value.startsWith("h");
        }
    )
);    