"use strict";

const eu = 1.2
const usd = 73
const getConvert = (many) => {
    return many * eu * usd
};

console.log(getConvert(5));