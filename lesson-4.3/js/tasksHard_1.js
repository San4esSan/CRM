"use strict";

const income = +prompt('Какой ваш доход в месяц?');

if (Number.isNaN(income) || income < 0) {
    console.log("Вы ввели некорректные данные");
} else if ( income >= 0 && income < 15000) {
    console.log(`Сумма налога равна 13% ${income * 0.15}`);
} else if ( income >= 15000 && income < 50000) {
    console.log(`Сумма налога равна 20% ${income * 0.2}`);
} else {
    console.log(`Сумма налога равна 30% ${income * 0.3}`);
}
