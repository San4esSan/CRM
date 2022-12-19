"use strict";
const numNum = (n, m) => {

    const randomNumber = Math.floor(m * Math.random()) + 1

    while (true) {
        let userNumber = prompt(`Угадай число от ${n} до ${m}`);

        if (isNaN(userNumber)) {
            alert('Введите число!');
            break
        } else if (userNumber === null) {
            alert('Игра окончена');
            break
        } else if (userNumber < n || userNumber > m) {
            alert(`Введите число от ${n} до ${m}`);
            break
        } else if (userNumber < randomNumber) {
            alert('Больше!');
        } else if (userNumber > randomNumber) {
            alert('Меньше!');
        } else {
            alert('Правильно!');
            break;
        }
    }
}
numNum(0, 100)
