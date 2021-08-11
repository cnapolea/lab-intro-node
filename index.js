// jshint esversion:10

class SortedList {
  constructor(items) {
    this.items = Array.isArray(items) ? items : [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((first, second) => {
      if (first < second) return -1;
      else if (first > second) return 1;
    });
  }

  get(pos) {
    if (!typeof this.items.at(pos)) throw new Error('OutOfBounds');
    else return this.items.at(pos);
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

const myList = new SortedList([3, 1, 4, 2, 7]);
myList.add(10);
let value = myList.get(1);

console.log(myList.items);
console.log(value);

module.exports = SortedList;
