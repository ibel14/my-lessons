"use strict";

// ClassList, благодаря этому свойству можем добавлять/удалять/управлять 
// классами в объекте DOM (HTML)

// Пример

// if (document.body.classList.contains(‘thatClass’)) {
    // do some stuff }
    
// Добавление, удаление, переключение классов:
    
//    document.body.classList.add(‘thisClass’); // Добавляем в элемент указанный класс с помощью метода .add
// $(‘body’).addClass(‘thisClass’);
    
//    document.body.classList.remove(‘thatClass’); // Удаляем в элементе класс с помощью метода .remove
// $(‘body’).removeClass(‘thatClass’);
    
//    document.body.classList.toggle(‘anotherClass’); // Метод toggle объекта classList чередует заданный CSS 
// $(‘body’).toggleClass(‘anotherClass’); // класс элемента: добавляет класс, если его нет и удаляет, если есть.

// Пример toggle

// <p id="elem" class="www ggg zzz"></p> в HTML

// let elem = document.querySelector('#elem');
// elem.classList.toggle('zzz'); // класс zzz удалился благодаря методу .toggle

// Делегирование событий

const wrapper = document.querySelector('.btn-block');

// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.classList.contains('blue')) {
//         console.log('Ninja!');
//     }
// });

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == "BUTTON") {
        console.log('Ninja!');
    }
});

const btn = document.createElement('button');
btn.classList.add("red");
wrapper.append(btn);