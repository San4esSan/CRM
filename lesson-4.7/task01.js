"use strict";

const generator = (count) => {
    let arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(Math.round(Math.random() * 100 + 1))
    }
    console.log(arr);
}

generator(50)