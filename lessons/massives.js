"use strict";

const arr = [1, 2, 3, 6, 8, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b; // Отсортировали не как СТРОКИ
}

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`)
// });


// arr.pop(); // pop() - удаляет последний элемент из нашего массива
// arr.push(10); // push(...) - добавляет в конец массива элемент

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

const str = prompt("", "");
const products = str.split(", "); // C помощью метода .split разделили элементы нашего массива
products.sort(); // C помощью метода .sort мы сортируем наши элементы, но в этом примере все сортируется как СТРОКИ
// Выше пример того как отсортировать элементы не как СТРОКИ
console.log(products.join('; ')); // С помощью метода .join мы склеили элементы нашего массива