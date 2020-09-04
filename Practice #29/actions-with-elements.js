"use strict";

const box = document.getElementById('box');
      btns = document.getElementsByTagName('button'); // Мы этим методом вызвали псевдомассив 
      circles = document.getElementsByClassName('circle'); // Пытаемся получить элемент через определенный класс
      hearts = document.querySelectorAll('.heart'); // Когда указывается селектор, обязательно ставится 
      oneHeart = document.querySelector('.heart');
      
console.dir(box);