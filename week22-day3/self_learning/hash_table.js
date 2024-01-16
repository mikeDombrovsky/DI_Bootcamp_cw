// indempotent - same hash from key everytime O(1)
//Addition also, BUT may be O(n) if collisions!

let user = {
  age: 54,
  name: "Bobby",
  scream: function () {
    console.log("Fffffckk!");
  },
};

user.age; // O(1)
user.spell = "koko"; //O(1)
// user.scream(); //O(1)

// //Map --> Gives you some order
const mappy = new Map();

// //Set --> No duplicate keys
const setty = new Set();

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const i = this._hash(key);

    if (!this.data[i]) {
      this.data[i] = [];
    }
    this.data[i].push([key, value]);
  }

  get(key) {
    const i = this._hash(key);
    const bucket = this.data[i];
    if (!bucket || bucket.length == 0) {
      return;
    }
    for (let j = 0; j < bucket.length; j++) {
      if (bucket[j][0] === key) {
        return bucket[j][1];
      }
    }
  }
  keys() {
    
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      let bucket = this.data[i];
      if (bucket) {
        for (let j = 0; j < bucket.length; j++) {
          keys.push(bucket[j][0]);
        }
      }
    }
    return keys;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
console.log(myHashTable.get("grapes"));
myHashTable.set("apples", 9);
console.log(myHashTable.get("apples"));
console.log(myHashTable.keys());
