let obj = {
    name: 'Bob',
    email: 'bob@gemail.com'
}


let keys = Object.keys(obj);
console.log('keys= ', keys);

let values = Object.values(obj);
console.log('values= ', values);

let entries = Object.entries(obj);
console.log('entries= ', entries);

for (let [key, value] of entries) {
    console.log(`key= ${key} value= ${value}`);
}

entries.forEach(([key, value]) => console.log(`key2= ${key} value2= ${value}`));

let obj1= {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}

let phrase = '';
Object.entries(obj1).forEach(([key, value]) => phrase.concat(key, value));

console.log(phrase);

const sentence = Object.entries(obj1).map(entries => entries.join(' ')).join(' ');
console.log(sentence);



