'use strict';

// Описание ниже

// console.log('Запрос данных...');

// const req = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Подготовка данных...');

//         const product = {
//             name: 'TV',
//             price: 2000
//         };

//         resolve(product);
//     }, 2000);
// });

// req.then((product) => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//             // reject(); закомментил для примера resolve
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then(data => {
//     console.log(data);
// }).catch(() => {
//     console.error('Произошла ошибка...');
// }).finally(() => {
//     console.log('Finally');
// });

// const test = time => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), time);
//     });
// };


// Методы Promise

// Promise.all([test(1000), test(2000)]).then(() => {
//    console.log('All'); 
// });

// Promise.race([test(1000), test(2000)]).then(() => {
//     console.log('All'); 
//  });


// Функция, переданная в конструкцию new Promise, называется исполнитель (executor). 
// Когда Promise создаётся, она запускается автоматически. 
// Она должна содержать «создающий» код, который когда-нибудь создаст результат. 
// В терминах нашей аналогии: исполнитель – это «певец».

// Её аргументы resolve и reject – это колбэки, которые предоставляет сам JavaScript. 
// Наш код – только внутри исполнителя.

// Когда он получает результат, сейчас или позже – не важно, он должен вызвать один из этих колбэков:

// resolve(value) — если работа завершилась успешно, с результатом value.
// reject(error) — если произошла ошибка, error – объект ошибки.
// Итак, исполнитель запускается автоматически, он должен выполнить работу, а затем вызвать resolve или reject.
