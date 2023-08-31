let obj = {
    name: 'John',
    email: 'john@mail.com',
    address: {
        city: 'Tel Aviv'
    }
}

let obj2 = {
    age: 25
}
//merging
const obj3 = { ...obj, ...obj2 };

//Spreading
const obj4 = {
    ...obj,
    username: "Poopy",
    a: 1, name: 'Marry'
}
console.log(obj4);

const { name, email, a, username, address: { city } } = obj3;//we use keys - so may change order of variable
console.log(name, email, a, username, address);

const users = {
    user1: { age: 44, name: 'picard', },
    user2: { age: 12, name: 'sisko', },
    user3: { age: 109, name: 'janeway', },
}

// filter for all users older than 30
// and store their data in an array
// use Array.filter Array.map
// [
//     { id: 'user1', age: 44, name: 'picard' },
//     { id: 'user3', age: 109, name: 'janeway' }
// ]

const users_keys = Object.keys(users);

Object.entries(users)
    .filter(([key, obj]) => obj.age > 30)
// .map(([key, obj]) => {id:key, ...obj});



const adults = users_keys
    .filter(key => users[key].age > 30)
    .map(id => ({ id, ...users[id] }));

console.log();
