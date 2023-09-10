function countVowels(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return string.split('').filter(letter => vowels.includes(letter)).length;
}

console.log(countVowels('aei'));


function fibonacci(to){
    let arr = [];
    if(to === 0) return arr;
    if(to === 1){
        arr.push(1);
        return arr;
    }
    arr.push(0);
    arr.push(1);

    for(let x = 2; x< to; x++){
        arr.push(arr[x-1] + arr[x-2]);
    }
    console.log(arr);
}

fibonacci(10);
