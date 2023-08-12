function printAge(age) {
    console.log(age * 2);
    console.log(age * 2 * 1.2);
}

printAge(2);

function getMomAge(age) {
    return age * 2;
}

function getDadAge(momAge) {
    return getMomAge(momAge) * 1.2;
}

function getParentsAge(myage) {
    console.log(getMomAge(myage), getDadAge(getMomAge(myage)));
}
getParentsAge(2);


function getFirstName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

let name1 = getFirstName("John", "Booby");
console.log(name1);

//--------------------------------------
let age = prompt('wash hands and type your age, bro!');

if (isAdult(age)) {
    console.log("access granted");
} else {
    console.log("access denied");
}

function isAdult(age) {
    return age >= 18;
}



