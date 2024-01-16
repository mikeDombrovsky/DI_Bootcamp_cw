function reverse(str) {
    if(!str || str.length < 2 || typeof str !== 'string'){
        return 'Error!'
    }
  arr = str.split("");
  for (i = 0, j = arr.length - 1; i < j; i++, j--) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  console.log(arr.join(""));
  return arr.join("");
}

reverse("cola");


function reverse2(str){
    return str.split('').reverse().join('')
}

const reverse3 = str => [...str].reverse().join('')