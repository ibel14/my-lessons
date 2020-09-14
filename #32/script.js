// console.log(document.head);
// console.log(document.documentElement); // в консоли получаем всё содержимое HTML
// console.log(document.body.childNodes); // позволяет получить все ноды и узлы в HTML
// console.log(document.body.firstChild); // можно заменить на firstElementChild где 
// получаем элемент wrapper
// console.log(document.body.lastChild); // также с lastElementChild, смотри выше

// console.log(document.querySelector('#current').parentNode); // Я получил весь элемент из HTML
// с классом first где есть id current
// console.log(document.querySelector('#current').parentElement); // Альтернатива где получаем 
// элемент

// console.log(document.querySelector('#current').parentNode.parentNode); // Получили элемент из HTML
// с классом выше, это wrapper. Тем самым путешествуем по нашему DOM-дереву. Смотри в index.html если забыл 


// data атрибуты, всегда начинаются с data, например, data-current

// console.log(document.querySelector('[data-current="3"]').nextSibling); // чтобы получить следующий элемент
// используем сиблинг. В нашем случае следующий сбилинг будет перенос строки (Смотри HTML/консоль)

// console.log(document.querySelector('[data-current="3"]').previousSibling); // получаем предыдущий элемент

// console.log(document.querySelector('[data-current="3"]').nextElementSibling); // и мы получаем следующий 
// ЭЛЕМЕНТ, а не ноду. То есть не перенос строки, а 4

for (let node of document.body.childNodes) { // for of перебрал всех детей внутри нашего body и оставил только элементы,
    if (node.nodeName == '#text') { // без нодов, смотри консоль, там wrapper
        continue; // иногда нам необходимо перебрать какие-то элементы псевдомассива при ПОМОЩИ for of чтобы иметь
    } // возможность останавливать цикл или его полностью прерывать (в редких случаях альтернатива вместо forEach)

    console.log(node);
}