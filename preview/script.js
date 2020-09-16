const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Click'); // Старый способ, таким лучше не пользоваться
// };

// btn.onclick = function() {
//     alert('Second click'); // Первое действие не будет работать, будет всегда окно с надписью
// }; // second click, что не правильно. Ниже пример как сделать так чтобы оба действия работали

// btn.addEventListener('click', () => {
//     alert('Click');
// });

// btn.addEventListener('click', () => {
//     alert('Second click'); // Благодаря методу addEventListener у нас будут работать оба действия по очереди
// });

// btn.addEventListener('mouseenter', () => { // mouseenter - еще одно событие, при котором в консоли считается
//     console.log('Hover'); // считается каждое наведение мышкой на этот объект
// });

// btn.addEventListener('mouseenter', (e) => { // event событие или (e), где после наведения курсора мы получаем 
//     console.log(e); // ряд данных
// });

// btn.addEventListener('mouseenter', (e) => { // event событие или (e), где после наведения курсора мы получаем 
//     console.log(e.target); // ряд данных при помощи .target мы получаем данные в консоли всего элемента с 
// }); // которым можем полностью работать. Перекрасить его, изменить данные и т.д ПРИМЕР НИЖЕ


// btn.addEventListener('mouseenter', (e) => { // 
//     console.log(e.target); // 
//     e.target.remove(); // Наводим на элемент и он просто пропадает со страницы
// }); //


// let i = 0;
const deleteElement = (e) => { 
    console.log(e.target);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);


// btns.forEach(btn => {
//     btn.addEventListener('click', deleteElement);
// });

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true}); // Самый правильный способ чтобы назначать обработчик
}); // событий сразц на несколько элементов
// поменяли на queryselecetorAll, использовали forEach
// C помощью {once: true} задали единоразовое действие для кнопок, после первого нажатия, далее действия
// не будут повторяться

const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault();

    console.log(event.target);
});

