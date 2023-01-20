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

    let playerChoise = 0;
    let playerNumber = 0;

    return function start() {

      while (result.bot >= 1 && result.user >= 1) {
        const checkNumber = () => {
          playerChoise = +(prompt(`Загадай число от 1 до ${result.user}`));

          while (Number.isNaN(playerChoise) && playerChoise <= result.user) {
            playerChoise = +(prompt(`Загадай число от 1 до ${result.user}`));
          }

          if (playerChoise % 2 === 0) {
            playerNumber = 2;
          } else {
            playerNumber = 1;
          }
        }
        checkNumber();

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
        }
      }

      if (result.bot === 0 || result.user === 0) {
        alert(`Game over!\nСЧЕТ:\nBot: ${result.bot}\nИгрок: ${result.user}`);
      }
    };
  };

  window.rps = marbl;
})();
