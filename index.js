// class Polygon {
//   constructor(arrOfInts) {
//     this.sides = arrOfInts
//   }
//
//   get countSides() {
//     return this.sides.length
//   }
//
//   get perimeter() {
//     return this.sides.reduce((s1, s2) => s1 + s2)
//   }
// }
//
// class Triangle extends Polygon {
//
//   get isValid() {
//     let [a, b, c] = this.sides
//     return a + b > c && a + c > b && c + b > a
//
//   }
// }
//
// class Square extends Polygon {
//
//   get isValid() {
//     let [a, b, c, d] = this.sides
//     return a === b && b === c && c === d
//   }
//
//   get area() {
//     return this.sides[1] * this.sides[1]
//   }
//
// }

//
// console.log(
//   [1, 2, 3, 4].reduce((a, b) => a + b, 0)
// )
//

// REFRESHER 1/21/20

class Polygon {
  constructor(sidesArr) {
    this.sides = sidesArr
  }

  get countSides() {
    let {sides} = this
    return sides.length
  }

  get perimeter() {
    let {sides} = this
    return sides.reduce((a, b) => a + b, 0)
  }
}


class Triangle extends Polygon {

  get isValid() {
    let [ a, b, c ] = this.sides

          // has 3 sides
    return this.countSides === 3 &&
          // each sum of 2 sides is > 3rd side
    a + b > c &&
    a + c > b &&
    b + c > a ?
    true : false
  }
}

class Square extends Polygon {
  get isValid() {
    let [a, b, c, d] = this.sides

    return this.countSides === 4 &&
    a === b &&
    a === c &&
    a === d
  }

  get area() {
    let [aSide] = this.sides
    return aSide ** 2
  }
}






















document.addEventListener("DOMContentLoaded", console.log("OOJS: Class Extensions Extends Lab"))
