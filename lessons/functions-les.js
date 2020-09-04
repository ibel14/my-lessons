'use strici';

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage('Hello Ninja!');
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(7, 10));
console.log(calc(5, 6));
console.log(calc(1, 9));

function ret () {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);


const logger = function() {
    console.log('Ninnja!');
};

logger ();


const calcu = (a, b) => a + b;