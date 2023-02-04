'use strict';
// const obj = {
//   'id': 0,
//   'title': '',
//   'price': 0,
//   'description': '',
//   'category': '',
//   'discont': false,
//   'count':0,
//   'units': '',
//   'images': {
//     'small': '',
//     'big': '',
//   },
// };

const data = [
  {
    'id': 253842678,
    'title': 'Смартфон Xiaomi 11T 8/128GB',
    'price': 27000,
    'description': 'Смартфон Xiaomi 11T – ',
    'category': 'mobile-phone',
    'discont': false,
    'count': 3,
    'units': 'шт',
    'images': 'img/smrtxiaomi11t-m.jpg',
  },
  {
    'id': 296378448,
    'title': 'Радиоуправляемый автомобиль Cheetan',
    'price': 4000,
    'description': 'Внедорожник на дистанционном управлении.',
    'category': 'toys',
    'discont': 5,
    'count': 1,
    'units': 'шт',
    'images': {
      'small': 'img/cheetancar-m.jpg',
      'big': 'img/cheetancar-b.jpg',
    },
  },
  {
    'id': 215796548,
    'title': 'ТВ приставка MECOOL KI',
    'price': 12400,
    'description': 'Всего лишь один шаг сделает ваш телевизор умным',
    'category': 'tv-box',
    'discont': 15,
    'count': 4,
    'units': 'шт',
    'images': {
      'small': 'img/tvboxmecool-m.jpg',
      'big': 'img/tvboxmecool-b.jpg',
    },
  },
  {
    'id': 246258248,
    'title': 'Витая пара PROConnect 01-0043-3-25',
    'price': 22,
    'description': 'Витая пара Proconnect 01-0043-3-25.',
    'category': 'cables',
    'discont': false,
    'count': 420,
    'units': 'v',
    'images': {
      'small': 'img/lan_proconnect43-3-25.jpg',
      'big': 'img/lan_proconnect43-3-25-b.jpg',
    },
  },
];

const createHead = (getObj) => {
  const tr = document.createElement('tr');
  getObj.map((elem) => {
    const td = document.createElement('td');
    td.innerHTML = elem;
    tr.appendChild(td);
  });
  return tr
};

const createRow = (obj) => {
  const trElement = document.createElement('tr');

  // eslint-disable-next-line guard-for-in
  for (const key in obj) {
    const tdElement = document.createElement('td');
    tdElement.innerHTML = obj[key];
    trElement.appendChild(tdElement);
  }
  return trElement;
};

const renderGoods = (data) => {
  const thead = document.querySelector('thead');
  const getObj = Array.from(Object.keys(data[0]));
  thead.appendChild(createHead(getObj));

  const tbody = document.querySelector('tbody');
  const rows = data.map((obj) => createRow(obj));
  rows.forEach(row => tbody.appendChild(row));
};

renderGoods(data);
