"use strict";

const generator = (count, n, m, k) => {
    let arr = [];

    if (n < m) {
        if (k === 'even') {
            for (let i = 0; i < count; i++) {
                let rnd = Math.round(Math.random() * (m - n) + n)
                arr.push(rnd + (rnd % 2))
            }
            console.log(arr);
        }

        if (k === 'odd') {
            for (let i = 0; i < count; i++) {
                let rnd = Math.round(Math.random() * (m - n) + n - 1)
                arr.push(rnd + 1 - ((rnd % 2)))
            }
            console.log(arr);
        }
    } else {
        console.log('Введите корректный диапазон');
    }
}

generator(50, -5, 10, "odd")