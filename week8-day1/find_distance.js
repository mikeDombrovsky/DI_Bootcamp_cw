// find the smallest distance between 2 numbers in array
// [2,5,3,7,2,3,6,8,6] => 2
let numbers = [2, 5, 3, 7, 2, 3, 6, 8, 6];

function minDistance() {
    let distance = [];

    for (let i = 0; i < numbers.length; i++) {
        // current = numbers[i];
        for (let j = 1; j < numbers.length; j++) {
            if (numbers[i] == numbers[j]) {
                distance.push(j - i - 1);
            }
        }
    }
    return Math.min(distance);
}


function minDistance2() {
    let distance2 = [];

    for (let i = 0; i < numbers.length; i++) {
        if (aindexOf(a[i] !== a.lastIndexOf(a[i]))) {
            let min = a.lastIndexOf(a[i]) - aindexOf(a[i]);
            distance2.push(min)
        }
    }
    return (distance2.length === 0) ? -1 : distance2.sort()[0];
}


