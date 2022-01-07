class MySet {
  set = [];
  constructor(array = []) {
    this.set = this.getUnique(array);
  }

  getUnique(array = []) {
    let temp = [];
    if (temp) {
      for (let i = 0; i < array.length; i++) {
        let j;
        for (j = 0; j < i; j++) {
          if (array[i] === array[j]) break;
        }
        if (i == j) temp.push(array[i]);
      }
    }
    return temp;
  }

  has(value) {
    for (let i = 0; i < this.set.length; i++) {
      if (this.set[i] === value) return true;
    }
    return false;
  }

  add(value) {
    if (this.has(value)) {
      return false;
    } else {
      this.set.push(value);
      return true;
    }
  }

  remove(value) {
    let result = [];
    if (this.has(value)) {
      for (let i = 0; i < this.set.length; i++) {
        if (this.set[i] !== value) {
          result.push(this.set[i]);
        }
      }
    } else {
      return false;
    }
    this.set = result;
    return true;
  }
}

module.exports = MySet;
