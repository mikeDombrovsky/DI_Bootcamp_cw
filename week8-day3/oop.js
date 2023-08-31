//THIS
console.log(this);// this in browser os window obj

let user = {
    name: 'John',
    lname: 'Doe',
    full: function () {
        return `${this.name} ${this.lname}`;
    }
}

//class
class SomeClass {
    constructor() {
    }

    method1() {
    }

    method2() {
    }
}

class Fruit {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }
}

let apple = new Fruit('Apple');
let orange = new Fruit('Ornge');
orange.setName('Orangego');

console.log(apple);
console.log(orange.getName());

class Apple extends Fruit {
    constructor(color) {
        // this.name = 'Apple';
        super('Apple');
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}

let redApple = new Apple('blue');
console.log(redApple.getName(), redApple.getColor());


class User{
    #name;//to make field private
    #age;
    constructor(name, age){
        this.#name = name;
        this.#age = age;
    }

    printInfo(){
        console.log(`User: ${this.name}, ${this.age}`);
    } 
}

const users = [];

let bob = new User('Bob', 25);
let mike = new User('Mike', 26);

function addUser(name, age){
    users.push(new User(name, age));
}
function displayUsers(){
    users.forEach(user => user.printInfo());
}
