'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart');

// box.style.backgroundColor = 'blue';

box.style.cssText = 'background-color: green; width: 500px'; // Благодаря команде можем здесь добавлять данные в css

btns[1].style.borderRadius = '100px';
circles[1].style.backgroundColor = 'red';

// for (let i=0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'gray';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'black';
});