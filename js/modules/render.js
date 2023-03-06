import createElements from './createElements.js';
const {createHead, createRow} = createElements;

import getElements from './getElements.js';
const {tbody} = getElements;

const obj = {
  'id': 0,
  'Наименование': '',
  'Категория': '',
  'ед/изм': '',
  'Количество': 0,
  'Цена': 0,
  'Итог': 0,
  'img': '',
  'edit': '',
  'del': '',
};

const data = [
  {
    'id': 253842678,
    'title': 'Смартфон Xiaomi 11T 8/128GB',
    'category': 'mobile-phone',
    'units': 'шт',
    'count': 3,
    'price': 25000,
    'priceSum': 75000,
    'img': '',
    'edit': '',
    'del': '',
  },
  {
    'id': 296378448,
    'title': 'Радиоуправляемый автомобиль Cheetan',
    'category': 'toys',
    'units': 'шт',
    'count': 1,
    'price': 4000,
    'priceSum': 4000,
    'img': '',
    'edit': '',
    'del': '',
  },
  {
    'id': 215796548,
    'title': 'ТВ приставка MECOOL KI',
    'category': 'tv-box',
    'units': 'шт',
    'count': 4,
    'price': 12400,
    'priceSum': 49600,
    'img': '',
    'edit': '',
    'del': '',
  },
  {
    'id': 246258248,
    'title': 'Витая пара PROConnect 01-0043-3-25',
    'category': 'cables',
    'units': 'v',
    'count': 420,
    'price': 22,
    'priceSum': 9240,
    'img': '',
    'edit': '',
    'del': '',
  },
];

const renderGoods = (data) => {
  const thead = document.querySelector('thead');
  const getObj = Array.from(Object.keys(obj));
  thead.appendChild(createHead(getObj));

  const tbody = document.querySelector('tbody');
  const rows = data.map((obj) => createRow(obj));
  rows.forEach(row => tbody.appendChild(row));
};

renderGoods(data);

const addTotalPrice = (obj) => {
  const totalPrice = document.querySelector('.total-price');
  let sumVal = 0;

  for (let i = 0; i < obj.rows.length; i++) {
    sumVal += +(obj.rows[i].cells[6].innerHTML).slice(1);
  }
  totalPrice.textContent = `$${sumVal}`;
};

const addProductData = product => {
  data.push(product);
  addTotalPrice(tbody);
};

const addProductPage = (product, tbody) => {
  tbody.append(createRow(product));
};

export default {renderGoods, addTotalPrice, addProductData, addProductPage};
