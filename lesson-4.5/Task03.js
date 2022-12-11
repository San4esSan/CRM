"use strict";

const isRevers = (text) => {
    let rev = '';
    for (let i = text.length - 1; i >= 0; i--) {
        rev += text[i];
    }
    return rev;
}

console.log(isRevers("Привет мир!"))
