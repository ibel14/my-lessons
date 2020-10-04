'use strict';

const now = new Date('2020-05-01');
// new Date.parse('2020-05-01'); // Этот метод тоже существует, просто альтернативу методу выше

console.log(now.setHours(18)); // Сет тайм устанавливает данные, а не получает в отличии от примеров ниже
console.log(now);





// console.log(now.getFullYear()); // метод GetFullYear - получаем только год
// console.log(now.getMonth()); // получаем месяц
// console.log(now.getDate()); // получаем день
// console.log(now.getDay()); // получаем номер дня неделя, нумерация начинается с вскр.

// console.log(now.getHours()); // можно получить время (всегда будет местное время)
// console.log(now.getUTCHours()); // можно получить время UTC

// console.log(now.getTimezoneOffset()); // Разница текущего времени от UTC в минутах


let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

// Теперь можем посмотреть на разницу этих дат в миллисекундах

alert(`Цикл отработал за ${end - start} миллисекунд`);