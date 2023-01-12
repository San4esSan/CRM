'use strict';

(() => {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = () => {
    const result = {
      player: 0,
      computer: 0,
    };

    return function start() {
      let computerChoise = getRandomIntInclusive(1, 3);

      if (computerChoise === 1) {
        computerChoise = 'камень';
      } else if (computerChoise === 2) {
        computerChoise = 'ножницы';
      } else if (computerChoise === 3) {
        computerChoise = 'бумага';
      }

      // console.log(computerChoise)

      const playerChoise = prompt('камень, ножницы, бумага?');

      if (playerChoise !== null) {
        let messag = '';

        if (computerChoise === playerChoise) {
          messag = 'Ничья';
        } else if (computerChoise === 'камень' && playerChoise === 'ножницы' ||
            computerChoise === 'ножницы' && playerChoise === 'бумага' ||
            computerChoise === 'бумага' && playerChoise === 'камень') {
          messag = 'Компьютер выиграл';
          result.computer += 1;
        } else if (computerChoise === 'ножницы' && playerChoise === 'камень' ||
            computerChoise === 'бумага' && playerChoise === 'ножницы' ||
            computerChoise === 'камень' && playerChoise === 'бумага') {
          messag = 'Вы выиграли';
          result.player += 1;
        } else {
          alert('Введи один из вариантов: камень, ножницы, бумага');
          start();
        }

        // console.log(result.computer, result.player)

        alert(`Компьютер: ${computerChoise}\nВы: ${playerChoise}\n${messag}`);
        start();
      } else {
        if (confirm('Ты точно хочешь выйти?')) {
          alert(`СЧЕТ:\nКомпьютер: ${result.computer}\nВы: ${result.player}`);
        } else {
          start();
        }
      }
    };
  };

  window.rps = game;
})();
