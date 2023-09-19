const a = 5;
const b = 4;

const printy = function (name) {
    console.log(name, 'kek');
};

const printy2 = function (name) {
    console.log(name, 'kek2');
};

// module.exports = printy;

// module.exports = {printy, printy2}
export { printy, printy2 }