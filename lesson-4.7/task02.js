"use strict";

const generator = (count, n, m) => {
    let arr = [];
    if (n < m) {
        for (let i = 0; i < count; i++) {
            arr.push(Math.round(Math.random() * (m - n) + n))
        }
    } else {
        console.log('Введите корректный диапазон');
    }
    console.log(arr);
}

generator(50, -5, 10)