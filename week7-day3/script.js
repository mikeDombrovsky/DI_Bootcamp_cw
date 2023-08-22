/* Exercise reverse
*  reverse each word in a given String
*  For example:
*  Given this 'word in a given String'
*  result 'drow ni a nevig gnirtS'
*  Do not use Array method 
*  Try not to use chatGPT :)
*/
// console.log(reverseEachWord("word reversed"));

function reverseEachWord(sentence) {
    let arr = sentence.split(" ");
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        arr[i] = reverseWord(word);
    }
    return arr.join(" ");
}

function reverseWord(string) {
    let reversed = '';
    for (let i = 0; i < string.length; i++) {
        reversed += string[string.length - i - 1];
    }
    return reversed;
}

const multiply = (x, y) => x * y;

const arr = [
    { id: 1, name: 'iPhone', price: 850 },
    { id: 2, name: 'iPad', price: 750 },
    { id: 3, name: 'iWatch', price: 650 }
];

arr.forEach(obj => {
    console.log(obj.id, obj.name, obj.price);
});

const words = ["wow", "hey", "bye"];

// Check if at least one element of the array starts with the letter 'h'

words.some(word => {//returns first true and stops
    console.log(word.startsWith('h'));
    return word.startsWith('h');
});

words.every(word => {//returns false if not and stops
    console.log(word.startsWith('h'));
    return word.startsWith('h');
});

