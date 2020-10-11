'use strict';

// 1) Обычная функция: this = window, но если стоит use strict будет undefined

// практическая задача которую дают на собеседовании

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }

// showThis(4, 5);

// 2) Контекст у методов объекта - сам объект

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };

// obj.sum();

// 3) this в конструкторах и классах - это новый экземпляр объекта

// function User(name, id) { // создали функцию-конструктор благодаря которой сможем создавать
//     this.name = name; // новых пользователей
//     this.id = id;
//     this.human = true;
// }
// let ivan = new User('Ivan', 23);


// 4) Ручная привязка this: call, apply, bind.

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    this.style.backgroundColor = 'red';
});

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);
        };

        say();
    }
};

obj.sayNumber();


const double = a => a * 2; // Если стрелочная функ принимает 1 аргумент то она может быть написана без скобок
// убрали скобки в const double = (a) => a * 2;

console.log(double(4));