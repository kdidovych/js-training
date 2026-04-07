'use strict';

(() => {
    let father = prompt('Enter how old is Father');
    let son = prompt('Enter how old is Son');
    let years = whenTwiceOlder(father, son);

    if (years === 0) {
        console.log('Отец сейчас вдвое старше сына');
        return;
    }
    let yearsWord;
    switch (String(years).slice(-1)) {
        case '1':
            yearsWord = 'год';
            break;
        case '2':
        case '3':
        case '4':
            yearsWord = 'года';
            break;
        default:
            yearsWord = 'лет';
    }
    if (years > 0) {
        console.log(`Отец будет вдвое старше сына через ${years} ${yearsWord}`);
    } else {
        console.log(`Отец был вдвое старше сына ${-years} ${yearsWord} назад`);
    }
})();

function whenTwiceOlder(father, son) {
    let difference = father - son;
    if (father < 15 || son < 0 || difference < 15) {
        throw new Error('Неверние входние данние');
    }
    return father - 2 * son;
}
