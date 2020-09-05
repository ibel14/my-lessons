'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue'; // Это инлайн стили, которые перебивают любые команды CSS
// Инлайн стили можно увидеть в HTML в консоли в свойствах <div></div>

box.style.cssText = 'background-color: green; width: 500px'; // Благодаря команде можем добавлять стили в качестве
// текста
// Также мы можем добавлять переменные в cssText, ниже пример
// box.style.cssText = `background-color: green; width: ${num}px`; // Обернув в бэктик можем добавить переменную
// Для примера добавил переменную num, удобно если мы рассчитываем параметры динамически

btns[1].style.borderRadius = '100px'; // Сделали кнопку овальной
circles[1].style.backgroundColor = 'red'; // ВАЖНО указывать элемент [] в противном случае код не будет работать
// Если не ставить элемент, то запрос будет идти к всему псевдомассиву и в консиоли будет ошибка

// for (let i=0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'gray';
// }

hearts.forEach(item => { // Перебирающий метод с помощью forEach
    item.style.backgroundColor = 'black'; // В итоге метод работает сразу со всеми элементами
});

const div = document.createElement('div'); // Благодаря такому методу добавили новый блок, он отображается
// только в файле js, на странице он сейчас не появится

// const text = document.createTextNode('Тут был я'); Этот метод используется редко в js

div.classList.add('black'); 
// Теперь нам этот div надо добавить в body в HTML
// document.body.append(div); // Добавился div в body и отобразился на странице

wrapper.appendChild(div);

// document.querySelector('.wrapper').append(div); // Добавили элемент в HTML div с классом
// wrapper, он всегда добавляется в самом конце дива
// Добавил wrapper в const box, если часто используется переменная то её можно внести таким образом
// Это называется рефакторинг кода

// wrapper.prepend('div'); // Prepend добавляет див вначале, а не в конце, как это делает append

// hearts[0].before(div); // Добавляется див перед элементом который мы указали в индексе
hearts[0].after(div); // Див появился после первого сердечка [0] 

// circles[1].remove(); // Обратились в класс circles где удалили второй кружок (индекс[1])

hearts[2].replaceWith(circles[0]); // Меняем местами 3 сердце на первый круг


div.innerHTML = "<h2>Hello ninja</h2>"; // ***Благодаря методу innerHTML можем формировать элементы и сразу их
// помещать в HTML

div.insertAdjacentHTML("afterend", '<h3>Hello!</h3>'); // Комбинация в HTML с структурой, текстом и расположением
// Какие бывают значения первого аргумента:
// beforebegin метод позволяет вставить данный HTML перед элементом
// afterbegin вставляет код в начало элемента
// beforeend вставляет код в конец элемента
// afterend вставляет код после элемента

// div.textContent = "Hello ninja!"; // Этот метод работает только с текстом! HTML структура, например h1 не подойдет





// Устаревшие конструкции которые можно встретить в коде

// wrapper.appendChild(div);  Такая же замена как и при append

// wrapper.insertBefore(div, hearts[0]); // Отправили элемент в начало псевдомассива

// wrapper.removeChild(hearts[1]); // Удаляем элемент старым методом

// wrapper.replaceChild(circles[1], hearts[0]); Заменяем элементы местами старым способом