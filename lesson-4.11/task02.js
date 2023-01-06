'use strict';

const rectangle = {
  width: 5,
  height: 5,

  set setWidth(value) {
    if (Number.isNaN(value)) {
      this.width = value;
    }
  },

  set setHeight(value) {
    if (Number.isNaN(value)) {
      this.height = value;
    }
  },

  get rectangleArea() {
    return this.width * this.height + 'см';
  },

  get rectanglePerimeter() {
    return (this.width + this.height) * 2 + 'см';
  },
};
rectangle.width = 60;
rectangle.height = 100;

console.log(rectangle.rectangleArea);
console.log(rectangle.rectanglePerimeter);
