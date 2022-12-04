"use strict";

// Вторая задача
const rain = Math.round(Math.random());

if (rain === 1) {
    alert('Пошёл дождь. Возьмите зонт!')
}

if (rain === 0) {
    alert('Дождя нет!')
}

// Третья задача
const maths = +prompt('Введите кол-во баллов по математике');
const rusLang = +prompt('Введите кол-во баллов по русскому языку');
const informatics = +prompt('Введите кол-во баллов по информатике');
const result = maths + rusLang + informatics

if (Number.isNaN(maths) || Number.isNaN(rusLang) || Number.isNaN(informatics)) {
    console.log("Вы ввели некорректные данные");
} else if (result >= 265) {
    console.log(`Поздравляю, вы поступили на бюджет!`);
} else {
    console.log(`Не хватило баллов`);
}

// Четвертая задача
const many = +prompt('Сколько вы хотите снять денег?');

if (Number.isNaN(many) || many === 0) {
    console.log("Вы ввели некорректные данные");
} else if (many % 100 !== 0) {
    console.log("Введите число кратное 100");
} else {
    console.log("Возьмите ваши деньги!");
}