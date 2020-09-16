'use strict';

// touchstart - событие возникает при касании к элементу
// touchmove - если палец двигается то при каждому касании срабатывает touchmove
// touchend - после того как палец оторвался от элемента - событие выполнилось
// touchenter - когда мы ведем пальцем и наскакиваем на какой-то элемент
// touchleave - когда палец скользит и ушел за пределы элемента
// touchcancel - когда точка соприосновения больше не рагистрируется на поверхности

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start'); // каждое прикосновение в консоли пишет Start
        console.log(e.touches); // в консоли появится TouchList где покажет список всех пальцев
        console.log(e.targetTouches); // TouchList где отображаются все пальцы которые взаимодействуют
                                      // именно с этим элементом
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('Move'); // зажимаю (прикасаюсь) и каждое движение считает Move, каждый пиксель
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('End'); // если после прикосновнеия убрать палец - появится в консоли End
    });
});


// Свойства:
// touches - это св-во выдает нам список всех пальцев которые сейчас взимодействуют с экраном
// targetTouches - все пальцы которые взаимодействуют именно с этим элементом
// changedTouches - список пальцев которые участвуют в текущем событии
                  // покажет именно те пальцы которые совершили определенное действие

// С помощью комбинаций можно будет создавать свайп или щепотку (увеличение)