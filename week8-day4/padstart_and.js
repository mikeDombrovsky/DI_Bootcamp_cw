console.log('string'.padStart(10));//add x whitespaces before to have 10 length of final string
console.log('string'.padEnd(10) + 'after');

//sintax sugar add a comma
const addComma = (
    a,
    b,
) => {
    console.log(a, b);
}
addComma(1,2,);//not an error
addComma(1,2);//works too

