"use strict";

// const nameProduct = 'LED Xiaomi MI TV P1'
// let quantityGoods = 12;
// const category = 'телевизор';
// let price = 1500;

// console.log(nameProduct);
// console.log(price * quantityGoods);

const nameProduct = prompt('Введите наименование товара');
const quantityGoods = +prompt('Введите количество товара');
const category = prompt('Введите категорию товара');
const price = +prompt('Введите цену товара');
console.log(typeof (nameProduct));
console.log(typeof (quantityGoods));
console.log(typeof (category));
console.log(typeof (price));
console.log(`На складе ${quantityGoods} единицы товара ${nameProduct} на сумму ${quantityGoods * price} деревянных`);