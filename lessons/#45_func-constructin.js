'use strict';

// Стандарты ES5

function User(name, id) { // создали функцию-конструктор благодаря которой сможем создавать
    this.name = name; // новых пользователей
    this.id = id;
    this.human = true; // в такие функции мы можем вкладывать метод, пример ниже
    this.hello = function(){
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function(name) {
    console.log(`Пользователь ${this.name} вышел из чата`); // можем создавать свойства
}


const ivan = new User('Ivan', 28); // внутри этой переменной будет находиться не функция, а объект
// потому что функция User стала конструктором и теперь когда она вызывается при помощи ключевого
// слова new она создает новый объект с теми свойствами которые внутри функции User
const alex = new User('Alex', 20);

ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);