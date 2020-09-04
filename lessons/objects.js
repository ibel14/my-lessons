"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

// Деструктуризация объекта. 
// После знака присваивания помещаем в ту структуру из которой хотим вытащить объекты (деструктурировать)
// То есть вытащили bg и border в качестве отдельной переменной

const {border, bg} = options.colors;
console.log(border);

// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;

// console.log(options);

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     } 
// }


    // *********** //

// Объекты могут сохранять в себе какие-либо типы данных в формате ключ: значение
// Пример: name: test 
// Где name: - это ключ, а test - значение

// Также объекты могут быть вложены в объекты
// Пример: colors: {
    //     border: 'black',
    //     bg: 'red'
    // }


    // *********** //

// Чтобы их перебрать мы можем использовать конструкцию for (... in ...);
// Пример for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }


    // *********** //

// У объектов бывают встроенные методы и встроенные свойства
// Пример: console.log(Object.keys(options).length);


    // *********** //

// Чтобы объект умел что-то делать, мы можем во внутрь объекта записывать функции. 
// Таким образом будем создавать методы нашего объекта.
// Пример, где makeTest и есть функция внутри объекта:
//   const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };