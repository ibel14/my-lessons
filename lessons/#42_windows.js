'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

// const width = box.clientWidth; // Получаем размеры окна в консоле
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

const width = box.scrolltWidth;
const height = box.scrollHeight;

console.log(width, height);

// После нажатия кнопки Click пропадает скролл и окно с текстом раскрывается

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});

// Метод где мы получаем все координаты нашего объекта (окна)

console.log(box.getBoundingClientRect()); // Получили координаты всех сторон (left right top bottom)
console.log(box.getBoundingClientRect().top); // Получу координаты только верха


const style = window.getComputedStyle(box);

console.log(style); // в консоли видим все стайлы которые применились к элементу
// если нам нужно какое-то св-во объекта, то через точку его пишем, пример ниже
console.log(style.display);