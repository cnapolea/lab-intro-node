// jshint esversion:10

class SortedList {
  constructor(items) {
    this.items = Array.isArray(items) ? items : [];
    this.length = this.items.length;
  }

  add(item) {
    if (arguments.length > 1 || Array.isArray(item))
      throw new Error('Add one number at a time');
    this.items.push(item);
    this.items.sort((first, second) => {
      if (first < second) return -1;
      else if (first > second) return 1;
    });
    this.items.sort((first, second) => {
      if (first < second) return -1;
      else if (first > second) return 1;
    });
  }

  get(pos) {
    if (typeof this.items.at(pos) === 'undefined') {
      throw new Error('OutOfBounds');
    } else {
      return this.items.at(pos);
    }
  }

  max() {
    if (!this.items.length) throw new Error('EmptySortedList');
    else {
      return this.items.reduce((accumulator, currentValue) => {
        if (currentValue > accumulator) return currentValue;
        else return accumulator;
      });
    }
  }

  min() {
    if (!this.items.length) throw new Error('EmptySortedList');
    else {
      return this.items.reduce((accumulator, currentValue) => {
        if (currentValue < accumulator) return currentValue;
        else return accumulator;
      });
    }
  }

  sum() {
    if (!this.items.length) return 0;
    else {
      return this.items.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      );
    }
  }

  avg() {
    if (!this.items.length) throw new Error('EmptySortedList');
    else {
      return (
        this.items.reduce(
          (accumulator, currentValue) => accumulator + currentValue
        ) / this.items.length
      );
    }
  }
}

module.exports = SortedList;
