'use strict';

const persone = {
    name: 'Alex',
    tel: '+79530865732',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};


const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Ann';
console.log(persone);
console.log(clone);
// console.log(JSON.stringify(persone)); // Отправили запрос
