class Polygon {
  constructor(arrOfInts) {
    this.sides = arrOfInts
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce((s1, s2) => s1 + s2)
  }
}

class Triangle extends Polygon {

  get isValid() {
    let [a, b, c] = this.sides
    return a + b > c && a + c > b && c + b > a

  }
}

class Square extends Polygon {

  get isValid() {
    let [a, b, c, d] = this.sides
    return a === b && b === c && c === d
  }

  get area() {
    return this.sides[1] * this.sides[1]
  }

}

//
// console.log(
//   [1, 2, 3, 4].reduce((a, b) => a + b, 0)
// )
//

























document.addEventListener("DOMContentLoaded", console.log("OOJS: Class Extensions Extends Lab"))
