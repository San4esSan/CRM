'use strict';
const numNum = (n, m) => {
  const randomNumber = Math.floor(m * Math.random()) + 1;

  const numb = () => {
    const userNumber = prompt(`Угадай число от ${n} до ${m}`);

    if (isNaN(userNumber)) {
      alert('Введите число!');
      return numb();
    } else if (userNumber === null) {
      alert('Игра окончена');
    } else if (userNumber < n || userNumber > m) {
      alert(`Введите число от ${n} до ${m}`);
      return numb();
    } else if (userNumber < randomNumber) {
      alert('Больше!');
      return numb();
    } else if (userNumber > randomNumber) {
      alert('Меньше!');
      return numb();
    } else {
      alert('Правильно!');
    }
  };
  numb();
};

numNum(0, 100);
