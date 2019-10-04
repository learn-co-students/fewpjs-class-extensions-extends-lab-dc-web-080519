class Polygon {
    constructor(sidesArr) {
    this._sidesArr = sidesArr
  }

  get countSides() {
    return this._sidesArr.length;
  }

  get perimeter() {
    // let sum = 0;
    return this._sidesArr.reduce((m, c) =>  m + c)
  }
}

class Triangle extends Polygon {
  get isValid() {
    const orderedSides = this._sidesArr.sort((a, b) => a - b);
    if (this.countSides !== 3) {
      return false
    } else if (orderedSides[0] + orderedSides[1] < orderedSides[2]) {
      return false
    } else {
      return true;
    }
  }
}

class Square extends Polygon {
  get isValid() {
    const orderedSides = this._sidesArr.sort((a, b) => a - b);

    if (this.countSides !== 4) {
      return false;
    } else if (orderedSides[0] !== orderedSides[3]) {
      return false;
    } else {
      return true;
    }
  }

  get area() {
    if (this.isValid) {
      return this._sidesArr[0] ** 2
    }
  }
}