'use strict';

class Rectangle {
    constructor(height, width) { // конструируем класс
        this.height = height;
        this.width = width;
    } 

    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);

console.log(square.calcArea());

