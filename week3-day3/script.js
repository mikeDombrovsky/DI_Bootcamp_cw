// let age = prompt("What is your age&");

// if (!isNaN(age)) {
//     alert("Sorry, you send me not a number. Try again");

//     if (age < 18) {
//         alert("Sorry, you are too young to drive this car. Powering off");
//     }
//     else if (age == 18) {
//         alert("Congratulations on your first year of driving. Enjoy the ride!");
//     }
//     else {
//         alert("Powering On. Enjoy the ride!");
//     }
// } else {
//     alert("Sorry, you send me not a number. Try again");

// }


// let key = "home";
// switch (key) {
//     case "home":
//         alert("home page")
//         break;
//     case "about":
//         alert("about page")
//         break;
//     default:
//         alert("404");
// }

//OBJECTS

// let user = {
//     name: "Name",
//     email: "john@diaist.com",
//     age: 20,
//     favorites: ['Apple', 'Banana'],
//     address: {
//         city: 'Tel-Aviv',
//         country: 'Israel'
//     },
//     getAge: function(){
//         alert(this.age);
//     }
// };

// let obj2 = new Object();

// obj2.name = 'John';
// obj2.email = "john@mail.com"

// let user3 = {
//     name:'marry',
//     email: 'mary@mail.com'
// }

// let users = {
//     u1:user,
//     u2:obj2,
//     u3:user3
// }
// console.log(users.u1);

// user.name = "Gorlum";

// console.log(user.name);
// console.log(user["name"]);

// user.getAge();


// let usersArr = [user, obj2, user3];

// user.name = null;
// delete user.name;
// console.log(users.u1);

// user.name = "New fresh name";


let user = {
    username:"Ivan Ivanovich",
    password:"12345",
    role:"Boss"
}

let database = [user];

let newsfeed = [
    {
        username:"Vasja",
        timeline: "11:00",
        topic:"politics"
    },
    {
        username: "Petja",
        timeline: "12:00",
        topic: "crimes"
    },
    {
        username: "Dasha",
        timeline: "13:00",
        topic: "religion"
    },
]
