// Birthday Cake Candles
// This array are Birthday Cake Candles
// You can blow only the tallest candles
// let arr = [2,4,4,1,6]
// birthdayCakeCandles function will return
// how many candles you can blow
let arr = [2, 4, 4, 1, 6];

 function findCountOfCandles(){
    let max = Math.max(...arr);
    let filtered = arr.filter(num => item === max);
    return filtered.length;
 }

function findIntersection(str1,str2){
    str1 = str1.split(',');
    str2 = str2.split(',');
    const res = [];
     str1.forEach(elem => {
        if(str2.includes(elem) && !res.includes(elem))
          res.push(elem);
    });
    return res;
}

console.log(findIntersection('1,2,5,6,7','2,5,7,8,15'));