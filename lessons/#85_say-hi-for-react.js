let names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

let shortNames = names.filter((name) => { // Применил метод filter
    return name.length < 5
});

console.log(shortNames);

// ***

let answers = ['IvAn', 'AnnA', 'HelLo'];

answers = answers.map((item) => item.toLowerCase()); // Применил метод map

console.log(answers);

console.log(`Пользователь ${name}, ${age} лет`);

// ***

function fetchData(data, count = 0) {

    console.log(`Данные ${data} в количестве ${count}`)
}
fetchData('something');

// ***

function max (a, b, ...numbers) { // Rest-оператор должен быть в конце и один
    console.log(numbers);
}

max(3, 4, 67, 97);

// ***

const arr1 = [1, 2, 5],
      arr2 = [43, 2, 6];

const res = Math.max(...arr1, ...arr2);
console.log(res);

// ***

const user = {
    name: 'default',
    pass: 'qwerty',
    rights: 'user'
};

const admin = {
    name: 'admin',
    pass: 'root'
};
// const res = Object.assign(user, admin);
const res = {...user, ...admin};
console.log(res);

// ***

const x = 25, y = 10;
const coords = {x, y,
    calcSq() {
        console.log(this.x*this.y);
    }
}

coords.calcSq();

console.log(coords);

// *** Деструктуризация 

const user = {
    name: {
        first: 'Sam',
        second: 'Smith'
    },
    pass: 'qwerty',
    rights: 'user'
};

const {name: {first, second}, pass, rights} = user;

console.log(first, second);

// ***

function connect({
    host = 'localhost',
    port = 3000,
    user = 'default'} = {}) {
        console.log(`host: ${host}, port: ${port}, user: ${user}`)
    }

connect()

// ***

const numbers = [[3, 5], [6, 6]];

const [[a, b], [c, d]] = numbers;
console.log(a, b, c, d)