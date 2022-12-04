"use strict";

const nameProduct = prompt('Введите наименование товара');
const quantityGoods = +prompt('Введите количество товара');
const category = prompt('Введите категорию товара');
const price = +prompt('Введите цену товара');

if (Number.isNaN(price) || Number.isNaN(quantityGoods)) {
    console.log("Вы ввели некорректные данные");
} else {
    console.log(`На складе ${quantityGoods} единицы товара ${nameProduct} на сумму ${quantityGoods * price} деревянных`);
}



