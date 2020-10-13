'use strict';

// Классы ES6


// 1) Принцип ООП - Абстракция, когда мы концепцию отделяем от экземпляров

// *** Концепция *** 
class Rectangle {
    constructor(height, width) { // конструируем класс
        this.height = height; // создали два базовых свойства
        this.width = width;
    } 

    calcArea() { // метод в котором считаем площадь нашего квадрата
        return this.height * this.width; // метод возвращаем площадь квадрата с помощью return
    }
}

// 2) Принцип ООП - Наследование, способность нашего объекта или класса базироваться на другом объекте
// или классе. Это главный механизм для повторного использования какого-либо кода
// При это наследственное отношение классов будет четко определять их иерархию

// *** Наследование ***
class ColoredRectangleWithText extends Rectangle { // extends ключевое слово которым наследовали св-во класса Rectangle
    constructor (height, width, text, bgColor) {
        super(height, width); // вызывает конструктор у родителя в нашем случае - this.height = height;
        // this.width = width; Важно что super() идет первой строчкой в конструкторе
        this.text = text;
        this.bgColor = bgColor;
    } // метод calcArea тоже унаследовался у класса Rectangle

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(20, 10, 'Ninja!', 'blue'); // создали объект с св-вами

div.showMyProps();
console.log(div.calcArea());



// *** Экземпляры ***
const square = new Rectangle(10, 10); // создали объект в который поместили класс
// теперь у нас в переменной лежит объект в котором есть два св-ва height, width
// и у него есть один метод calcArea
const long = new Rectangle(20, 100);

console.log(long.calcArea());
console.log(square.calcArea()); // в консоли получается 100
