"use strict";

// To String

// 1)
console.log(typeof(String(null)));

// 2) Конкатенация - сложение строк или строки с чем-то
console.log(typeof(5 + '')); // При сложении со строкой всегда получится строка - string


// 3) Интерполяция 
const num = 5;

console.log("https://vk.com/catalog/" + num); // Сформировали дин. строку где получили https://vk.com/catalog/5
//Здесь лежит тип данных: строка       число = сформировали строку

const fontSize = 26 + 'px'; // Это тоже пример динамической типизации

// To Number

// 1)
console.log(typeof(Number('4')));

// 2) Унарный плюс
console.log(typeof(+'5'));

// 3)
console.log(typeof(parseInt("15px", 10 )));

let answ = +prompt("Hello", "");


// To boolean

// 1)

let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

// 2)

console.log(typeof(Boolean('4')));

// 3)

console.log(typeof(!!"4444"));