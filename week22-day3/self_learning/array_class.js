class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const last = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item
  }
  shiftItems(index) {
    for(let i = index;i < this.length - 1; i++){
        this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArr = new MyArray();
newArr.push("hi");
newArr.push("boo");
newArr.push("ko");
console.log(newArr);
// newArr.pop();
newArr.delete(1)
console.log(newArr);
