"use strict";

// const soldier = {
//     health: 400,
//     armor: 100
//     sayHello: function() {
//         console.log("Hello");
//     }
// };

// const John = {
//     health: 100
// };

// John.__proto__ = soldier; // __proto__ устаревший метод прототипа объекта

// console.log(John.armor); // John получил свойство прототипа soldier
                            // Этот способ для примера, в коде уже редко используется

// John.sayHello(); // Должно в консоль вывестись Hello, но у меня jshint подчеркивает 6 строку



// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log("Hello");
//     }
// };

// const John = {
//     health: 100
// };

// Object.setPrototypeOf(John, soldier); // .setPrototypeOf используется вместо __proto__



const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

const john = Object.create(soldier); // Создали новый прототип john который унаследовал свойства от soldier

john.sayHello();