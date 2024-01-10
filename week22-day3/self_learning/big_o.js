const memo = ["nemo"];

const large = new Array(10000).fill("nemo");

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found Nemo!");
    }
  }
  let t1 = performance.now();
  console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds");
}

findNemo(large);

// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10;//1
  a = 50 + 3;//1

  for (let i = 0; i < input.length; i++) {
    anotherFunction();//n
    let stranger = true;//n
    a++;//n
  }
  return a;//1
}
// 3 + 3n --> 0(n) rounded

// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5;//1
  let b = 10;//1
  let c = 50;//1
  for (let i = 0; i < input; i++) {
    let x = i + 1; //n
    let y = i + 2; //n
    let z = i + 3; //n
  }
  for (let j = 0; j < input; j++) {
    let p = j * 2; //n
    let q = j * 2; //n
  }
  let whoAmI = "I don't know";//1
}

// 4 + 5n --> O(2n) --> O(n)