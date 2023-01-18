'use strict';

(() => {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const marbl = () => {
    const result = {
      user: 5,
      bot: 5,
    };

    return function start() {
      const playerChoise = +(prompt(`Загадай число от 1 до ${result.user}`));

      let playerNumber = 0;

      if (playerChoise % 2 === 0) {
        playerNumber = 2;
      } else {
        playerNumber = 1;
      }

      const computerChoise = getRandomIntInclusive(1, 2);

      if (playerChoise >= 1 && playerChoise <= result.user) {
        if (computerChoise === playerNumber) {
          result.bot += playerChoise;
          result.user -= playerChoise;
          console.log(result.user, result.bot);
          alert(`Bot-угадал\nСЧЕТ:\nBot: ${result.bot}\nИгрок: ${result.user}`);
        } else {
          if (playerChoise > result.bot) {
            result.user += result.bot;
            result.bot -= result.bot;
            console.log(result.user, result.bot);
            alert(`Bot-не угадал\nСЧЕТ:\nBot: ${result.bot}\nИгрок: ${result.user}`);
          } else {
            result.user += playerChoise;
            result.bot -= playerChoise;
            console.log(result.user, result.bot);
            alert(`Bot-не угадал\nСЧЕТ:\nBot: ${result.bot}\nИгрок: ${result.user}`);
          }
        }
      } else {
        prompt(`Загадай число от 1 до ${result.user}`);
        start();
      }

      if (result.bot >= 1 && result.user >= 1) {
        start();
      } else {
        alert(`Game over!\nСЧЕТ:\nBot: ${result.bot}\nИгрок: ${result.user}`);
      }
    };
  };

  window.rps = marbl;
})();
