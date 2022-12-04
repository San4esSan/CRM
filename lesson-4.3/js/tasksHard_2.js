"use strict";

const income2 = +prompt('Какой ваш доход в месяц?');

if (Number.isNaN(income2) || income2 < 0) {
    console.log("Вы ввели некорректные данные");
} else if ( income2 >= 0 && income2 <= 15000) {
    console.log(`Сумма налога равна 13% ${income2 * 0.13}₽`);
} else if ( income2 > 15000 && income2 <= 50000) {
    console.log(`Сумма налога ВСЕГО ${((income2 - 15000) * 0.2) + (15000 * 0.13)}₽`);
    console.log(`в том числе 13% ${(15000 * 0.13)}₽`);
    console.log(`в том числе 20% ${((income2 - 15000) * 0.2)}₽`);
} else {
    console.log(`Сумма налога ВСЕГО ${((income2 - 50000) * 0.3) + (35000 * 0.2) + (15000 * 0.13)}₽`);
    console.log(`в том числе 13% ${(15000 * 0.13)}₽`);
    console.log(`в том числе 20% ${(35000 * 0.2)}₽`);
    console.log(`в том числе 30% ${((income2 - 50000) * 0.3)}₽`);
}
